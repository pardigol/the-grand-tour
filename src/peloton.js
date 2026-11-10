// Das große Fahrerfeld (Peloton): viele einfache Fahrer, die gemeinsam gezeichnet werden (InstancedMesh).
// Jeder Fahrer besteht aus Rahmen, zwei Rädern, Oberkörper, Kopf, Armen und tretenden Beinen.
// So bleiben 50 Fahrer auch auf dem iPad flüssig.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const UP = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _d = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _base = new THREE.Matrix4();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();

// Matrix für ein Rohr/Glied von Punkt a nach Punkt b (Geometrie: Zylinder, Höhe 1, Fuß bei y=0)
function segMatrix(a, b, rx, rz = rx, out = new THREE.Matrix4()) {
  _d.subVectors(b, a);
  const len = _d.length() || 0.001;
  _q.setFromUnitVectors(UP, _d.multiplyScalar(1 / len));
  _s.set(rx, len, rz);
  return out.compose(a, _q, _s);
}

function unitCylinder(seg = 7) {
  return new THREE.CylinderGeometry(1, 1, 1, seg).translate(0, 0.5, 0);
}

// Punkte im Rad-Koordinatensystem: x = seitlich, y = hoch, z = nach vorne
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const BB = V(0, 0.3, 0);
const REAR = V(0, 0.34, -0.41);
const FRONT = V(0, 0.34, 0.58);
const SEAT = V(0, 0.84, -0.16);
const HEAD_TOP = V(0, 0.8, 0.47);
const HEAD_BOT = V(0, 0.64, 0.52);
const CRANK = 0.17;
const THIGH = 0.46;
const SHIN = 0.46;

function frameGeometry() {
  const parts = [];
  const tube = (a, b, r) => parts.push(unitCylinder(6).applyMatrix4(segMatrix(a, b, r)));
  tube(BB, SEAT, 0.022);
  tube(SEAT, HEAD_TOP, 0.02);
  tube(BB, HEAD_BOT, 0.026);
  tube(HEAD_BOT, HEAD_TOP, 0.026);
  tube(HEAD_BOT, FRONT, 0.016);
  tube(BB, REAR, 0.014);
  tube(SEAT, REAR, 0.012);
  tube(SEAT, V(0, 0.95, -0.2), 0.014); // Sattelstütze
  tube(HEAD_TOP, V(0, 0.92, 0.56), 0.016); // Vorbau
  tube(V(-0.21, 0.92, 0.56), V(0.21, 0.92, 0.56), 0.014); // Lenker
  tube(V(-0.2, 0.92, 0.56), V(-0.2, 0.8, 0.62), 0.014);
  tube(V(0.2, 0.92, 0.56), V(0.2, 0.8, 0.62), 0.014);
  parts.push(new THREE.BoxGeometry(0.12, 0.04, 0.26).translate(0, 0.97, -0.2)); // Sattel
  return mergeGeometries(parts.map((g) => g.toNonIndexed()));
}

export class Peloton {
  constructor(scene, count) {
    this.count = count;
    this.group = new THREE.Group();
    scene.add(this.group);
    const mk = (geo, mat, n, colored = false) => {
      const m = new THREE.InstancedMesh(geo, mat, n);
      m.castShadow = true;
      m.frustumCulled = false;
      if (colored) m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3).fill(1), 3);
      this.group.add(m);
      return m;
    };
    const std = (color, rough = 0.6) => new THREE.MeshStandardMaterial({ color, roughness: rough });
    const cyl = unitCylinder(7);
    this.frame = mk(frameGeometry(), std('#ffffff', 0.4), count, true);
    this.wheels = mk(new THREE.TorusGeometry(0.33, 0.022, 6, 22).rotateY(Math.PI / 2), std('#141416', 0.8), count * 2);
    this.torso = mk(cyl, std('#ffffff'), count, true);
    this.head = mk(new THREE.SphereGeometry(1, 10, 8), std('#ffffff', 0.35), count, true);
    this.arms = mk(cyl, std('#ffffff'), count * 2, true);
    this.thighs = mk(cyl, std('#17171c', 0.7), count * 2);
    this.shins = mk(cyl, std('#e2b48f', 0.7), count * 2);
    this.crank = new Float32Array(count).map(() => Math.random() * Math.PI * 2);
    // feste Teile relativ zum Rad
    this.torsoL = segMatrix(V(0, 0.98, -0.2), V(0, 1.27, 0.22), 0.15, 0.11);
    this.headL = new THREE.Matrix4().compose(V(0, 1.38, 0.36), new THREE.Quaternion(), V(0.115, 0.115, 0.13));
    this.armL = [
      segMatrix(V(0.17, 1.25, 0.2), V(0.2, 0.93, 0.56), 0.042),
      segMatrix(V(-0.17, 1.25, 0.2), V(-0.2, 0.93, 0.56), 0.042),
    ];
    this.rearL = new THREE.Matrix4().makeTranslation(REAR.x, REAR.y, REAR.z);
    this.frontL = new THREE.Matrix4().makeTranslation(FRONT.x, FRONT.y, FRONT.z);
  }

  // Farben: frame, jersey, helmet je Fahrer
  setColors(i, { frame, jersey, helmet }) {
    const c = new THREE.Color();
    this.frame.setColorAt(i, c.set(frame));
    this.torso.setColorAt(i, c.set(jersey));
    this.arms.setColorAt(i * 2, c);
    this.arms.setColorAt(i * 2 + 1, c);
    this.head.setColorAt(i, c.set(helmet));
    for (const m of [this.frame, this.torso, this.arms, this.head]) m.instanceColor.needsUpdate = true;
  }

  // Fahrer i an Position (x, h, z) mit Richtung, Neigung, Schräglage; v = Tempo (m/s) für das Treten
  set(i, x, h, z, heading, pitch, lean, v, dt, pedal = true) {
    if (pedal && v > 0.3) this.crank[i] += (v / 0.34 / 3.6) * dt;
    _e.set(-pitch, heading, lean);
    _base.compose(_p.set(x, h, z), _q.setFromEuler(_e), _s.set(1, 1, 1));
    const set = (mesh, k, local) => mesh.setMatrixAt(k, _m.multiplyMatrices(_base, local));
    set(this.frame, i, IDENT);
    set(this.wheels, i * 2, this.rearL);
    set(this.wheels, i * 2 + 1, this.frontL);
    set(this.torso, i, this.torsoL);
    set(this.head, i, this.headL);
    set(this.arms, i * 2, this.armL[0]);
    set(this.arms, i * 2 + 1, this.armL[1]);
    // Beine: Fuß auf dem Pedal, Knie per Zwei-Glieder-Rechnung nach vorne
    for (let side = 0; side < 2; side++) {
      const ang = this.crank[i] + side * Math.PI;
      const sx = side ? -0.09 : 0.09;
      const hy = 0.98;
      const hz = -0.21;
      const fy = BB.y + Math.cos(ang) * CRANK;
      const fz = BB.z + Math.sin(ang) * CRANK;
      let dy = fy - hy;
      let dz = fz - hz;
      let d = Math.hypot(dy, dz);
      const maxD = THIGH + SHIN - 0.01;
      if (d > maxD) {
        dy *= maxD / d;
        dz *= maxD / d;
        d = maxD;
      }
      const uy = dy / d;
      const uz = dz / d;
      const cosA = clamp1((THIGH * THIGH + d * d - SHIN * SHIN) / (2 * THIGH * d));
      const sinA = Math.sqrt(1 - cosA * cosA);
      // Senkrechte, die nach vorne zeigt
      let py = -uz;
      let pz = uy;
      if (pz < 0) {
        py = -py;
        pz = -pz;
      }
      const ky = hy + THIGH * (cosA * uy + sinA * py);
      const kz = hz + THIGH * (cosA * uz + sinA * pz);
      _a.set(sx, hy, hz);
      _b.set(sx, ky, kz);
      set(this.thighs, i * 2 + side, segMatrix(_a, _b, 0.055, 0.055, tmpL));
      _a.set(sx, fy, fz);
      set(this.shins, i * 2 + side, segMatrix(_b, _a, 0.04, 0.04, tmpL));
    }
  }

  commit() {
    for (const m of this.group.children) m.instanceMatrix.needsUpdate = true;
  }

  set visible(v) {
    this.group.visible = v;
  }
}

const tmpL = new THREE.Matrix4();
const IDENT = new THREE.Matrix4();
function clamp1(x) {
  return Math.max(-1, Math.min(1, x));
}
