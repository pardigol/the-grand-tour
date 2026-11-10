// Echte Fahrerin aus Mixamo (Shannon) auf dem Rad.
// Das Modell kommt in T-Haltung. Jedes Bild richten wir die Knochen so aus, dass
// die Füße auf den Pedalen stehen und die Hände an den Griffen liegen.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const SCALE = 0.0105; // Modell ist in Zentimetern, etwas größer als 1,78 m, damit die Beine bis zu den Pedalen reichen
const X = new THREE.Vector3(1, 0, 0);
const _m = new THREE.Matrix4();
const _t = new THREE.Vector3();
const _s = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _p = new THREE.Vector3();

// Welcher Knochen zeigt auf welchen (zum Ausrichten)
const CHILD = {
  Hips: 'Spine',
  Spine: 'Spine1',
  Spine1: 'Spine2',
  Spine2: 'Neck',
  Neck: 'Head',
  Head: 'HeadTop_End',
  LeftUpLeg: 'LeftLeg',
  LeftLeg: 'LeftFoot',
  LeftFoot: 'LeftToeBase',
  RightUpLeg: 'RightLeg',
  RightLeg: 'RightFoot',
  RightFoot: 'RightToeBase',
  LeftArm: 'LeftForeArm',
  LeftForeArm: 'LeftHand',
  LeftHand: 'LeftHandMiddle1',
  RightArm: 'RightForeArm',
  RightForeArm: 'RightHand',
  RightHand: 'RightHandMiddle1',
};

export async function loadRiderModel(url = 'modelle/fahrer/shannon.glb') {
  try {
    return (await new GLTFLoader().loadAsync(url)).scene;
  } catch (e) {
    console.warn('Fahrer-Modell nicht geladen, nehme die einfache Figur', e);
    return null;
  }
}

// Orthonormale Basis: y = Knochenrichtung, x = Scharnierachse (Knie/Ellbogen)
function frameQuat(dir, side, out) {
  const y = _a.copy(dir).normalize();
  const x = _b.copy(side).addScaledVector(y, -side.dot(y));
  if (x.lengthSq() < 1e-8) x.set(0, 0, 1).addScaledVector(y, -y.z);
  x.normalize();
  const z = _c.crossVectors(x, y);
  return out.setFromRotationMatrix(_m.makeBasis(x, y, z));
}

// Zwei-Knochen-IK: Gelenk zwischen a und c
function ik(a, c, l1, l2, pole, out) {
  _d.copy(c).sub(a);
  let dist = _d.length();
  dist = Math.min(Math.max(dist, Math.abs(l1 - l2) + 1e-3), l1 + l2 - 1e-3);
  _d.normalize();
  const cosA = (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist);
  const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
  _p.copy(pole).addScaledVector(_d, -pole.dot(_d)).normalize();
  return out.copy(a).addScaledVector(_d, cosA * l1).addScaledVector(_p, sinA * l1);
}

export class RiderModel {
  constructor(scene) {
    this.scene = scene;
    scene.scale.setScalar(SCALE);
    this.inv = new THREE.Matrix4();

    // Mixamo-Export hat für jedes Kleidungsstück eine eigene Kopie des Skeletts:
    // alle Teile an EIN Skelett hängen, dann reicht es, dieses zu bewegen.
    const base = (n) => n.replace(/^mixamorig\d*/, '').replace(/_\d+$/, '');
    this.bones = {};
    scene.traverse((o) => {
      if (o.isBone && !this.bones[base(o.name)] && !/_\d+$/.test(o.name)) this.bones[base(o.name)] = o;
    });
    this.meshes = {};
    scene.traverse((o) => {
      if (!o.isSkinnedMesh) return;
      const bones = o.skeleton.bones.map((b) => this.bones[base(b.name)] || b);
      o.bind(new THREE.Skeleton(bones, o.skeleton.boneInverses), o.bindMatrix);
      o.frustumCulled = false;
      o.castShadow = true;
      o.receiveShadow = true;
      this.meshes[o.name.replace(/^Ch\d+_/, '')] = o;
    });
    // Lange Haare passen nicht unter den Helm
    if (this.meshes.Hair) this.meshes.Hair.visible = false;

    // Ruhehaltung merken (Richtung, Scharnierachse und Drehung jedes Knochens)
    scene.updateMatrixWorld(true);
    this.inv.copy(scene.matrixWorld).invert();
    this.rest = new Map();
    const B = this.bones;
    for (const [name, child] of Object.entries(CHILD)) {
      const bone = B[name];
      const kid = B[child];
      if (!bone || !kid) continue;
      const p = this.pos(bone, new THREE.Vector3());
      const dir = this.pos(kid, new THREE.Vector3()).sub(p).normalize();
      // Arme: in T-Haltung beugt sich der Ellbogen nach vorne -> Achse senkrecht
      const side = /^Left(Arm|ForeArm|Hand)$/.test(name)
        ? new THREE.Vector3(0, -1, 0)
        : /^Right(Arm|ForeArm|Hand)$/.test(name)
          ? new THREE.Vector3(0, 1, 0)
          : X.clone();
      const q = this.quat(bone, new THREE.Quaternion());
      // Versatz zwischen Knochen-Drehung und Basis aus Richtung/Achse
      const off = frameQuat(dir, side, new THREE.Quaternion()).invert().multiply(q);
      this.rest.set(bone, { off, len: this.pos(kid, new THREE.Vector3()).distanceTo(p) });
    }
    const len = (n) => this.rest.get(B[n])?.len || 0;
    this.thigh = len('LeftUpLeg');
    this.shin = len('LeftLeg');
    this.upperArm = len('LeftArm');
    this.foreArm = len('LeftForeArm');
    this.foot = len('LeftFoot');
    // Ruhe-Position der Hüfte relativ zum Eltern-Knoten
    this.hipsRest = B.Hips.position.clone();
    this.hipParentInv = new THREE.Matrix4();
  }

  // Position / Drehung eines Knochens im Modell-Raum (Zentimeter)
  pos(o, out) {
    return out.setFromMatrixPosition(_m.multiplyMatrices(this.inv, o.matrixWorld));
  }
  quat(o, out) {
    _m.multiplyMatrices(this.inv, o.matrixWorld).decompose(_t, out, _s);
    return out;
  }

  // Knochen in Richtung dir drehen, Scharnierachse side (Modell-Raum)
  aim(name, dir, side = X) {
    const bone = this.bones[name];
    const r = this.rest.get(bone);
    if (!r) return;
    const want = frameQuat(dir, side, _q).multiply(r.off);
    const parent = this.quat(bone.parent, _q2).invert();
    bone.quaternion.copy(parent.multiply(want));
    bone.updateMatrixWorld(true);
  }

  // Knochen bekommen Werte aus dem Rad (alles in Rad-Koordinaten, Meter)
  // pedals[0] = rechtes Pedal, pedals[1] = linkes Pedal; hands[0] = rechte, hands[1] = linke Hand
  pose({ hip, pedals, angles, hands, bob, aero = false, stand = 0 }) {
    const S = 1 / SCALE;
    const B = this.bones;
    this.scene.updateMatrixWorld(true);
    this.inv.copy(this.scene.matrixWorld).invert();

    // Becken auf den Sattel
    // Zeitfahren: auf der Sattelspitze, weiter vorne
    const target = _t.copy(hip);
    if (aero) target.z += 0.07;
    target.multiplyScalar(S);
    target.y += bob * S;
    this.hipParentInv.copy(B.Hips.parent.matrixWorld).invert();
    B.Hips.position.copy(target.applyMatrix4(this.scene.matrixWorld).applyMatrix4(this.hipParentInv));
    B.Hips.updateMatrixWorld(true);

    // Becken nach vorne gekippt, Rücken rund nach vorne, Kopf schaut nach vorne
    const dir = (a) => _d.set(0, Math.cos(a), Math.sin(a));
    // Zeitfahren: Rücken fast waagerecht, Kopf tief zwischen den Schultern
    let A = aero ? [0.75, 1.3, 1.45, 1.5, 1.0, 0.45] : [0.55, 0.95, 1.1, 1.2, 0.6, 0.12];
    // Wiegetritt: Becken aufrechter, Oberkörper über dem Lenker
    if (stand > 0) {
      const S2 = [0.2, 0.85, 1.05, 1.15, 0.55, 0.1];
      A = A.map((a, i) => a + (S2[i] - a) * stand);
    }
    this.aim('Hips', dir(A[0]));
    this.aim('Spine', dir(A[1]));
    this.aim('Spine1', dir(A[2]));
    this.aim('Spine2', dir(A[3]));
    this.aim('Neck', dir(A[4]));
    this.aim('Head', dir(A[5]));

    // Beine: Fußballen auf dem Pedal, Ferse hinten im Tritt etwas hoch
    const knee = new THREE.Vector3();
    for (const s of [1, -1]) {
      const n = s > 0 ? 'Left' : 'Right';
      const i = s > 0 ? 1 : 0;
      const up = this.pos(B[n + 'UpLeg'], new THREE.Vector3());
      const fa = 0.5 + 0.06 + 0.22 * Math.sin(angles[i]);
      const footDir = new THREE.Vector3(0, -Math.sin(fa), Math.cos(fa));
      const ball = new THREE.Vector3().copy(pedals[i]).multiplyScalar(S);
      ball.y += 2.5;
      const ankle = ball.clone().addScaledVector(footDir, -this.foot);
      ik(up, ankle, this.thigh, this.shin, new THREE.Vector3(s * 0.1, 0.1, 1), knee);
      const t = knee.clone().sub(up);
      const sh = ankle.clone().sub(knee);
      const side = new THREE.Vector3().crossVectors(t, sh);
      if (side.lengthSq() < 1e-6) side.copy(X);
      this.aim(n + 'UpLeg', t, side);
      this.aim(n + 'Leg', sh, side);
      this.aim(n + 'Foot', footDir, X);
    }

    // Arme: Hände an die Griffe, Ellbogen nah am Körper
    const elbow = new THREE.Vector3();
    for (const s of [1, -1]) {
      const n = s > 0 ? 'Left' : 'Right';
      const sh = this.pos(B[n + 'Arm'], new THREE.Vector3());
      const hand = new THREE.Vector3().copy(hands[s > 0 ? 1 : 0]).multiplyScalar(S);
      // Beim Zeitfahren liegen die Ellbogen unten auf den Polstern
      ik(sh, hand, this.upperArm, this.foreArm, aero ? new THREE.Vector3(0, -1, -0.15) : new THREE.Vector3(s * 0.15, -0.75, -0.35), elbow);
      const u = elbow.clone().sub(sh);
      const f = hand.clone().sub(elbow);
      const side = new THREE.Vector3().crossVectors(u, f);
      if (side.lengthSq() < 1e-6) side.set(0, -s, 0);
      this.aim(n + 'Arm', u, side);
      this.aim(n + 'ForeArm', f, side);
      // Handgelenk leicht nach unten abgeknickt
      this.aim(n + 'Hand', f.normalize().add(new THREE.Vector3(0, -0.35, 0)), side);
    }
  }

  // Trikot und Hose in den Farben des Charakters (Stoffstruktur bleibt erhalten)
  setKit({ jersey, shorts }) {
    if (!this.tinted) {
      this.tinted = {};
      for (const part of ['Shirt', 'Shorts', 'Socks', 'Shoes']) {
        const mesh = this.meshes[part];
        if (!mesh || !mesh.material.map) continue;
        const mat = mesh.material.clone();
        mat.map = grayMap(mesh);
        mesh.material = mat;
        this.tinted[part] = mat;
      }
      if (this.tinted.Socks) this.tinted.Socks.color.set('#f4f4f4');
      if (this.tinted.Shoes) this.tinted.Shoes.color.set('#f2f2f2');
    }
    if (jersey && this.tinted.Shirt) this.tinted.Shirt.color.set(jersey);
    if (shorts && this.tinted.Shorts) this.tinted.Shorts.color.set(shorts);
  }

  // Rennradschuhe an die Füße: Turnschuhe ausblenden, neuen Schuh im Fuß-Koordinatensystem anbringen.
  // Fuß-Rahmen (aus aim): y = Knöchel -> Fußballen, x = seitlich, -z = oben.
  attachShoes(make) {
    if (this.meshes.Shoes) this.meshes.Shoes.visible = false;
    const lenM = this.foot * SCALE; // Knöchel bis Fußballen in Metern
    const a = 0.42; // Sohle ist flacher als die Linie Knöchel–Ballen
    const up = new THREE.Vector3(0, -Math.sin(a), -Math.cos(a));
    const fwd = new THREE.Vector3(0, Math.cos(a), -Math.sin(a));
    const basis = new THREE.Matrix4().makeBasis(X, up, fwd);
    this.shoes = [];
    for (const n of ['LeftFoot', 'RightFoot']) {
      const bone = this.bones[n];
      const r = this.rest.get(bone);
      if (!bone || !r) continue;
      const wrap = new THREE.Group();
      wrap.quaternion.copy(r.off).invert();
      wrap.scale.setScalar(1 / SCALE);
      const shoe = make();
      shoe.quaternion.setFromRotationMatrix(basis);
      // Schuhplatte unter dem Fußballen (der Ballen liegt 2,6 cm über dem Pedal)
      shoe.position.set(0, lenM, 0).addScaledVector(up, -0.026);
      wrap.add(shoe);
      bone.add(wrap);
      this.shoes.push(shoe);
    }
  }

  // An Knochen etwas anhängen (Helm, Rückennummer); Maße in Metern
  attach(boneName, obj) {
    const bone = this.bones[boneName];
    obj.scale.multiplyScalar(1 / SCALE);
    obj.position.multiplyScalar(1 / SCALE);
    bone.add(obj);
  }
}

// Graustufen-Version der Textur, aufgehellt auf die mittlere Helligkeit dieses Kleidungsstücks
function grayMap(mesh) {
  const src = mesh.material.map;
  const img = src.image;
  const w = img.width;
  const h = img.height;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.drawImage(img, 0, 0);
  const data = g.getImageData(0, 0, w, h);
  const px = data.data;
  // mittlere Helligkeit dort, wo das Kleidungsstück auf der Textur liegt
  const uv = mesh.geometry.attributes.uv;
  let sum = 0;
  let n = 0;
  for (let i = 0; i < uv.count; i += 7) {
    const x = Math.min(w - 1, Math.max(0, Math.floor(uv.getX(i) * w)));
    const y = Math.min(h - 1, Math.max(0, Math.floor((src.flipY ? 1 - uv.getY(i) : uv.getY(i)) * h)));
    const k = (y * w + x) * 4;
    sum += 0.3 * px[k] + 0.59 * px[k + 1] + 0.11 * px[k + 2];
    n++;
  }
  const mean = Math.max(8, sum / Math.max(1, n));
  const f = 225 / mean;
  for (let k = 0; k < px.length; k += 4) {
    const l = Math.min(255, (0.3 * px[k] + 0.59 * px[k + 1] + 0.11 * px[k + 2]) * f);
    px[k] = px[k + 1] = px[k + 2] = l;
  }
  g.putImageData(data, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = src.colorSpace;
  t.flipY = src.flipY;
  t.wrapS = src.wrapS;
  t.wrapT = src.wrapT;
  return t;
}
