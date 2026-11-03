// Prozedurales Rennrad mit Fahrer. Vorwärts = +z, oben = +y, rechts vom Fahrer = -x.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { drawPlate } from './plate.js';
import { CONFIG } from './config.js';
import { brandById, brandLabel, contrastColor, isMatte, DEFAULT_LOOK } from './brands.js';

const UP = new THREE.Vector3(0, 1, 0);
const V = (side, up, fwd) => new THREE.Vector3(side, up, fwd);
const _d = new THREE.Vector3();
const _p = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _k = new THREE.Vector3();

export const WHEEL_R = 0.34;
const BB = V(0, 0.27, -0.08);
const CRANK = 0.17;

function tube(a, b, r, mat, r2 = r, seg = 10) {
  const len = a.distanceTo(b);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r2, r, len, seg), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(UP, _d.copy(b).sub(a).normalize());
  m.castShadow = true;
  return m;
}

function placeLimb(obj, a, b) {
  obj.position.copy(a).add(b).multiplyScalar(0.5);
  obj.quaternion.setFromUnitVectors(UP, _d.copy(b).sub(a).normalize());
}

// Zwei-Knochen-IK: liefert das Gelenk (Knie/Ellbogen) zwischen a und c
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

function limb(len, r, mat) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, Math.max(0.01, len - 2 * r), 4, 10), mat);
  m.castShadow = true;
  return m;
}

const rimCache = {};
function rimTexture(style = 'gold') {
  if (rimCache[style]) return rimCache[style];
  const team = style === 'team';
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#121214';
  ctx.fillRect(0, 0, 512, 512);
  // Carbon-Muster
  for (let i = 0; i < 512; i += 4) {
    ctx.fillStyle = i % 8 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.2)';
    ctx.fillRect(i, 0, 2, 512);
  }
  ctx.translate(256, 256);
  const text = ` ${CONFIG.gameName.toUpperCase()} `;
  // Team-Design: große, weiße Blockschrift auf der tiefen Felge
  ctx.font = team ? '800 46px "Barlow Condensed", Arial, sans-serif' : '800 30px "Barlow Condensed", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const rad = team ? 226 : 233;
  for (let rep = 0; rep < 2; rep++) {
    let ang = rep * Math.PI;
    for (const ch of text) {
      const w = ctx.measureText(ch).width;
      ang += w / 2 / rad;
      ctx.save();
      ctx.rotate(ang);
      ctx.translate(0, -rad);
      ctx.fillStyle = team ? '#f2f2ee' : CONFIG.colors.gold;
      ctx.fillText(ch, 0, 0);
      ctx.restore();
      ang += w / 2 / rad;
    }
  }
  if (!team) {
    ctx.strokeStyle = CONFIG.colors.accent;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 214, 0.3, 1.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 214, 0.3 + Math.PI, 1.4 + Math.PI);
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  rimCache[style] = t;
  return t;
}

// Maske für das Team-Design: oben Weiß (Rahmenfarbe), unten Schwarz, dazwischen ein gezackter Übergang.
// from = ab welcher Höhe (0 = Rohranfang, 1 = Rohrende) die Farbe beginnt, flip = umgedreht.
const maskCache = {};
function fadeMask(from, flip = false) {
  const key = `${from}-${flip}`;
  if (maskCache[key]) return maskCache[key];
  const W = 128;
  const H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  if (flip) {
    ctx.translate(0, H);
    ctx.scale(1, -1);
  }
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  const y0 = (1 - from) * H; // Canvas-Oben = Rohrende
  ctx.fillRect(0, 0, W, y0);
  // Zacken, die nach unten immer kleiner und seltener werden
  for (let row = 0; row < 7; row++) {
    const n = 8;
    const size = 26 - row * 3.2;
    const y = y0 + row * 20;
    for (let i = 0; i < n; i++) {
      if (row > 2 && (i + row) % 2) continue;
      const x = ((i + (row % 2) * 0.5) / n) * W;
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y - 2);
      ctx.lineTo(x + size / 2, y - 2);
      ctx.lineTo(x, y + size * 1.1);
      ctx.closePath();
      ctx.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  maskCache[key] = t;
  return t;
}

export class Bike {
  constructor() {
    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.wheelAngle = 0;
    this.crankAngle = 0;

    const m = (this.mats = {
      frame: new THREE.MeshPhysicalMaterial({
        color: CONFIG.colors.bikeFrame,
        metalness: 0.4,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
      accent: new THREE.MeshPhysicalMaterial({ color: CONFIG.colors.gold, metalness: 0.7, roughness: 0.25, clearcoat: 1 }),
      black: new THREE.MeshStandardMaterial({ color: '#17171a', roughness: 0.45, metalness: 0.3 }),
      alu: new THREE.MeshStandardMaterial({ color: '#b9bcc2', roughness: 0.25, metalness: 1 }),
      tire: new THREE.MeshStandardMaterial({ color: '#1c1c1c', roughness: 0.9 }),
      tape: new THREE.MeshStandardMaterial({ color: '#f1f1ee', roughness: 0.7 }),
      jersey: new THREE.MeshStandardMaterial({ color: CONFIG.colors.jersey, roughness: 0.62 }),
      jerseyDark: new THREE.MeshStandardMaterial({ color: '#202533', roughness: 0.6 }),
      skin: new THREE.MeshStandardMaterial({ color: '#e2ad8c', roughness: 0.7 }),
      shorts: new THREE.MeshStandardMaterial({ color: '#16161b', roughness: 0.55 }),
      shoe: new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.4 }),
      helmet: new THREE.MeshPhysicalMaterial({ color: '#f6f6f6', roughness: 0.3, clearcoat: 1 }),
      glasses: new THREE.MeshStandardMaterial({ color: '#141414', roughness: 0.05, metalness: 1, envMapIntensity: 2 }),
    });
    // Vorderer, farbiger Teil beim Team-Design (mit gezacktem Übergang)
    const paint = (map) =>
      new THREE.MeshPhysicalMaterial({ map, roughness: 0.3, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
    this.teamMats = {
      down: paint(fadeMask(0.72)),
      top: paint(fadeMask(0.4)),
      fork: paint(fadeMask(0.45, true)),
      solid: paint(null),
    };
    this.frameColor = CONFIG.colors.bikeFrame;
    this.design = 'solid';

    this.buildFrame(m);
    this.buildWheels(m);
    this.buildDrivetrain(m);
    this.buildCockpit(m);
    this.buildRider(m);
    this.buildPlates();
    this.buildDecals();
    this.setBrand(DEFAULT_LOOK.brand);
    this.update(0, 0, 0, 0);
  }

  buildFrame(m) {
    const R = V(0, WHEEL_R, -0.5);
    const ST = V(0, 0.8, -0.24);
    const HT = V(0, 0.86, 0.36);
    const HB = V(0, 0.7, 0.4);
    const f = this.root;
    // Rohre, die beim Team-Design umgefärbt werden
    this.tubes = {
      down: tube(BB, HB, 0.032, m.frame, 0.027),
      top: tube(ST, HT, 0.017, m.frame, 0.016),
      head: tube(HB, HT, 0.026, m.frame),
    };
    // Aero-Form: von der Seite höher als von vorne
    this.tubes.down.scale.z = 1.9;
    this.tubes.top.scale.z = 1.4;
    this.tubes.head.scale.z = 1.3;
    f.add(this.tubes.down, this.tubes.top, this.tubes.head);
    f.add(tube(BB, ST, 0.018, m.frame));
    for (const s of [-1, 1]) {
      f.add(tube(V(s * 0.012, BB.y, BB.z), V(s * 0.06, R.y, R.z), 0.01, m.frame));
      // tief angesetzte Sitzstreben wie bei modernen Aero-Rädern
      f.add(tube(V(s * 0.012, 0.62, -0.19), V(s * 0.06, R.y, R.z), 0.009, m.frame));
    }
    // Zierstreifen auf dem Oberrohr
    this.stripe = tube(V(0, 0.812, -0.15), V(0, 0.845, 0.2), 0.0175, m.accent, 0.0175);
    f.add(this.stripe);
    // Sattelstütze und Sattel
    f.add(tube(ST, V(0, 0.92, -0.265), 0.0135, m.black));
    const saddle = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.18, 4, 8), m.black);
    saddle.rotation.x = Math.PI / 2 + 0.06;
    saddle.scale.set(1.2, 1, 0.35);
    saddle.position.set(0, 0.935, -0.25);
    saddle.castShadow = true;
    f.add(saddle);
    // Trinkflasche am Sitzrohr, damit der Schriftzug auf dem Unterrohr frei bleibt
    this.bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 12), m.accent);
    this.bottle.position.copy(BB).lerp(ST, 0.5);
    this.bottle.position.z += 0.06;
    this.bottle.quaternion.setFromUnitVectors(UP, _d.copy(ST).sub(BB).normalize());
    f.add(this.bottle);
  }

  makeWheel(m, rimMat) {
    const g = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.322, 0.018, 10, 56), m.tire);
    tire.rotation.y = Math.PI / 2;
    tire.castShadow = true;
    g.add(tire);
    for (const s of [-1, 1]) {
      const rim = new THREE.Mesh(new THREE.RingGeometry(0.232, 0.306, 56, 1), rimMat);
      rim.rotation.y = (s * Math.PI) / 2;
      rim.position.x = s * 0.012;
      g.add(rim);
    }
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.306, 0.306, 0.024, 56, 1, true), m.black);
    band.rotation.z = Math.PI / 2;
    g.add(band);
    const spokes = [];
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      const side = i % 2 ? 1 : -1;
      const start = V(side * 0.03, Math.cos(a) * 0.025, Math.sin(a) * 0.025);
      const end = V(side * 0.006, Math.cos(a) * 0.234, Math.sin(a) * 0.234);
      const len = start.distanceTo(end);
      const sg = new THREE.CylinderGeometry(0.0016, 0.0016, len, 3);
      sg.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, end.clone().sub(start).normalize()));
      sg.translate((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2);
      spokes.push(sg);
    }
    g.add(new THREE.Mesh(mergeGeometries(spokes), m.alu));
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.1, 12), m.alu);
    hub.rotation.z = Math.PI / 2;
    g.add(hub);
    return g;
  }

  buildWheels(m) {
    const rimMat = (this.rimMat = new THREE.MeshStandardMaterial({
      map: rimTexture(),
      roughness: 0.3,
      metalness: 0.3,
      side: THREE.DoubleSide,
    }));
    this.rearWheel = this.makeWheel(m, rimMat);
    this.rearWheel.position.set(0, WHEEL_R, -0.5);
    this.root.add(this.rearWheel);

    // Lenkbarer Vorderbau: dreht sich um eine Achse beim Steuerrohr
    this.steer = new THREE.Group();
    this.steer.position.set(0, 0, 0.45);
    this.root.add(this.steer);
    this.frontWheel = this.makeWheel(m, rimMat);
    this.frontWheel.position.set(0, WHEEL_R, 0.05);
    this.steer.add(this.frontWheel);
    this.forkTubes = [-1, 1].map((s) => tube(V(s * 0.045, 0.7, -0.05), V(s * 0.05, WHEEL_R, 0.05), 0.014, m.frame, 0.018));
    this.forkCrown = tube(V(0, 0.7, -0.05), V(0, 0.72, -0.05), 0.03, m.frame);
    this.steer.add(...this.forkTubes, this.forkCrown);
    // Kassette
    const cas = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 16), m.alu);
    cas.rotation.z = Math.PI / 2;
    cas.position.set(-0.04, WHEEL_R, -0.5);
    this.root.add(cas);
  }

  buildDrivetrain(m) {
    this.crank = new THREE.Group();
    this.crank.position.copy(BB);
    this.root.add(this.crank);
    // Kettenblatt mit Zähnen
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.006, 40), m.alu);
    ring.rotation.z = Math.PI / 2;
    ring.position.x = -0.065;
    this.crank.add(ring);
    const spider = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 5), m.black);
    spider.rotation.z = Math.PI / 2;
    spider.position.x = -0.07;
    this.crank.add(spider);
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.02, CRANK, 0.03), m.black);
      arm.position.set(s * -0.085, (-s * CRANK) / 2, 0);
      arm.castShadow = true;
      this.crank.add(arm);
    }
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.19, 10), m.black);
    axle.rotation.z = Math.PI / 2;
    this.crank.add(axle);
    // Kette
    for (const y of [0.105, -0.105]) {
      this.root.add(tube(V(-0.065, BB.y + y, BB.z), V(-0.04, WHEEL_R + y * 0.45, -0.5), 0.004, m.alu));
    }
    // Pedale (bleiben waagerecht)
    this.pedals = [-1, 1].map((s) => {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.07), m.black);
      p.userData.side = s;
      this.root.add(p);
      return p;
    });
  }

  buildCockpit(m) {
    const s = this.steer;
    // Vorbau
    s.add(tube(V(0, 0.86, -0.08), V(0, 0.9, 0.03), 0.016, m.black));
    // Lenker oben
    s.add(tube(V(-0.21, 0.9, 0.03), V(0.21, 0.9, 0.03), 0.013, m.tape));
    for (const side of [-1, 1]) {
      const x = side * 0.21;
      const pts = [V(x, 0.9, 0.03), V(x, 0.91, 0.1), V(x, 0.86, 0.13), V(x, 0.79, 0.09), V(x, 0.78, 0.0)];
      const curve = new THREE.CatmullRomCurve3(pts);
      const drop = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.013, 8), m.tape);
      drop.castShadow = true;
      s.add(drop);
      // Schalt-/Bremsgriffe
      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.07, 0.05), m.black);
      hood.position.set(x, 0.925, 0.1);
      hood.rotation.x = -0.4;
      s.add(hood);
    }
  }

  buildRider(m) {
    const r = (this.rider = new THREE.Group());
    this.root.add(r);
    this.hip = V(0, 0.98, -0.2);
    this.shoulder = V(0, 1.3, 0.18);

    // Becken
    const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.1, 4, 10), m.shorts);
    pelvis.rotation.z = Math.PI / 2;
    pelvis.position.copy(this.hip);
    pelvis.castShadow = true;
    r.add(pelvis);

    // Oberkörper
    this.torso = new THREE.Group();
    const torsoLen = this.hip.distanceTo(this.shoulder) + 0.04;
    const torsoMesh = limb(torsoLen, 0.15, m.jersey);
    torsoMesh.scale.set(1.25, 1, 0.82);
    this.torso.add(torsoMesh);
    const sidePanel = limb(torsoLen * 0.9, 0.152, m.jerseyDark);
    sidePanel.scale.set(1.27, 0.95, 0.4);
    sidePanel.position.z = 0.06;
    this.torso.add(sidePanel);
    placeLimb(this.torso, this.hip, this.shoulder);
    r.add(this.torso);

    // Kopf
    this.head = new THREE.Group();
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), m.skin);
    headMesh.castShadow = true;
    this.head.add(headMesh);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.125, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), m.helmet);
    helmet.scale.set(1, 0.95, 1.3);
    helmet.position.set(0, 0.02, -0.02);
    helmet.rotation.x = -0.25;
    helmet.castShadow = true;
    this.head.add(helmet);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.3), m.jersey);
    stripe.position.set(0, 0.135, -0.03);
    stripe.rotation.x = -0.25;
    this.head.add(stripe);
    const glasses = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.04, 0.03), m.glasses);
    glasses.position.set(0, 0.01, 0.09);
    this.head.add(glasses);
    this.head.position.set(0, 1.42, 0.3);
    this.head.rotation.x = 0.35;
    r.add(this.head);
    r.add(tube(V(0, 1.31, 0.2), V(0, 1.39, 0.27), 0.045, m.skin));

    // Arme und Beine (werden jedes Bild neu ausgerichtet)
    this.arms = [-1, 1].map((s) => ({
      s,
      upper: limb(0.27, 0.045, m.jersey),
      lower: limb(0.26, 0.037, m.skin),
      hand: new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), m.black),
    }));
    this.legs = [-1, 1].map((s) => ({
      s,
      thigh: limb(0.44, 0.068, m.shorts),
      shin: limb(0.43, 0.05, m.skin),
      sock: limb(0.1, 0.052, m.shoe),
      shoe: new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.24), m.shoe),
    }));
    for (const a of this.arms) r.add(a.upper, a.lower, a.hand);
    for (const l of this.legs) {
      l.shoe.castShadow = true;
      r.add(l.thigh, l.shin, l.sock, l.shoe);
    }
  }

  buildPlates() {
    this.plateCanvas = document.createElement('canvas');
    this.plateCanvas.width = 512;
    this.plateCanvas.height = 384;
    this.plateTex = new THREE.CanvasTexture(this.plateCanvas);
    this.plateTex.colorSpace = THREE.SRGBColorSpace;
    this.plateTex.anisotropy = 8;
    const mat = new THREE.MeshStandardMaterial({ map: this.plateTex, roughness: 0.6 });

    // Rückennummer auf dem Trikot
    const back = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.225), mat);
    back.position.set(0, 0.02, -0.132);
    back.rotation.set(0, Math.PI, 0);
    this.torso.add(back);

    // Rahmennummer unter dem Sattel – auf beiden Seiten lesbar
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.1275), mat);
      p.position.set(s * 0.016, 0.8, -0.33);
      p.rotation.y = (s * Math.PI) / 2;
      this.root.add(p);
    }
    this.setPlate(1, '');
  }

  // Markenschriftzug links und rechts auf dem Unterrohr
  buildDecals() {
    this.decalCanvas = document.createElement('canvas');
    this.decalCanvas.width = 512;
    this.decalCanvas.height = 128;
    this.decalTex = new THREE.CanvasTexture(this.decalCanvas);
    this.decalTex.colorSpace = THREE.SRGBColorSpace;
    this.decalTex.anisotropy = 8;
    const mat = new THREE.MeshStandardMaterial({
      map: this.decalTex,
      transparent: true,
      roughness: 0.3,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    const HB = V(0, 0.7, 0.4);
    const dir = HB.clone().sub(BB);
    const len = dir.length();
    dir.normalize();
    const mid = BB.clone().lerp(HB, 0.36);
    for (const s of [-1, 1]) {
      const n = V(s, 0, 0);
      // Schrift so ausrichten, dass sie auf beiden Seiten aufrecht und nicht gespiegelt ist
      const u = s > 0 ? dir.clone().negate() : dir.clone();
      const v = new THREE.Vector3().crossVectors(n, u);
      // Seitenverhältnis wie die Zeichenfläche (512 x 128)
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(len * 0.56, len * 0.56 * (128 / 512)), mat);
      plane.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, v, n));
      plane.position.copy(mid).addScaledVector(n, 0.033);
      this.root.add(plane);
    }
  }

  setBrand(id) {
    const b = brandById(id);
    this.brand = b.id;
    const c = this.decalCanvas;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    const family = b.serif ? '"Cinzel", Georgia, serif' : '"Barlow Condensed", Arial, sans-serif';
    // breite Marken (z. B. Colnago) mit Abstand zwischen den Buchstaben
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = b.wide ? '6px' : '0px';
    ctx.font = `${b.font} 104px ${family}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = contrastColor(this.design === 'team' ? '#111114' : this.frameColor);
    const text = brandLabel(b);
    const w = ctx.measureText(text).width;
    if (w > c.width * 0.95) ctx.font = `${b.font} ${Math.floor((104 * c.width * 0.95) / w)}px ${family}`;
    ctx.fillText(text, c.width / 2, c.height / 2 + 2);
    this.decalTex.needsUpdate = true;
  }

  // Alle Farben und die Marke eines Charakters übernehmen
  applyLook(c = {}) {
    this.design = c.paint || DEFAULT_LOOK.paint;
    this.setColors({
      jersey: c.jersey || CONFIG.colors.jersey,
      frame: c.frame || CONFIG.colors.bikeFrame,
      helmet: c.helmet || DEFAULT_LOOK.helmet,
      shorts: c.shorts || DEFAULT_LOOK.shorts,
    });
    this.setBrand(c.brand || DEFAULT_LOOK.brand);
  }

  // Lackierung anwenden: 'solid' = einfarbig, 'team' = hinten mattschwarz, vorne Rahmenfarbe mit Zacken
  applyPaint() {
    const m = this.mats;
    const team = this.design === 'team';
    const t = this.teamMats;
    // Matte Farben: rau und ohne Klarlack, glänzende: glatt mit Klarlack
    const matte = isMatte(this.frameColor);
    const finish = (mat) => {
      mat.roughness = matte ? 0.72 : 0.3;
      mat.metalness = matte ? 0.05 : 0.3;
      mat.clearcoat = matte ? 0 : 1;
    };
    if (team) {
      m.frame.color.set('#111114');
      m.frame.roughness = 0.55;
      m.frame.metalness = 0.2;
      m.frame.clearcoat = 0.25;
      for (const k of ['down', 'top', 'fork', 'solid']) {
        t[k].color.set(this.frameColor);
        finish(t[k]);
      }
    } else {
      m.frame.color.set(this.frameColor);
      finish(m.frame);
    }
    this.tubes.down.material = team ? t.down : m.frame;
    this.tubes.top.material = team ? t.top : m.frame;
    this.tubes.head.material = team ? t.solid : m.frame;
    for (const f of this.forkTubes) f.material = team ? t.fork : m.frame;
    this.forkCrown.material = team ? t.solid : m.frame;
    this.stripe.visible = !team;
    m.accent.color.set(team ? '#1b1b1e' : CONFIG.colors.gold);
    m.tape.color.set(team ? '#1b1b1e' : '#f1f1ee');
    this.rimMat.map = rimTexture(team ? 'team' : 'gold');
    this.rimMat.needsUpdate = true;
  }

  setPlate(number, name) {
    this.plateNumber = number;
    this.plateName = name;
    drawPlate(this.plateCanvas, number, name);
    this.plateTex.needsUpdate = true;
  }

  setColors({ jersey, frame, helmet, shorts } = {}) {
    if (jersey) this.mats.jersey.color.set(jersey);
    if (frame) this.frameColor = frame;
    this.applyPaint();
    if (helmet) this.mats.helmet.color.set(helmet);
    if (shorts) this.mats.shorts.color.set(shorts);
    // Schriftfarbe an die Rahmenfarbe anpassen
    if (frame && this.brand) this.setBrand(this.brand);
  }

  // speed in m/s, crankRate in rad/s (0 = Freilauf), steer -1..1
  update(dt, speed, crankRate, steer) {
    this.wheelAngle += (speed / WHEEL_R) * dt;
    this.rearWheel.rotation.x = this.wheelAngle;
    this.frontWheel.rotation.x = this.wheelAngle;
    this.crankAngle += crankRate * dt;
    this.crank.rotation.x = this.crankAngle;
    this.steer.rotation.y = -steer * 0.35;

    const ca = this.crankAngle;
    const bob = Math.sin(ca * 2) * 0.006 * Math.min(1, Math.abs(crankRate) / 4);
    this.rider.position.y = bob;
    this.torso.rotation.y = 0;

    // Pedale und Beine
    for (const l of this.legs) {
      const s = l.s;
      // s=1 = linker Fuß (+x), s=-1 = rechter Fuß (Kettenseite)
      const ang = s > 0 ? ca + Math.PI : ca;
      const pedal = this.pedals[s > 0 ? 1 : 0];
      pedal.position.set(s * 0.12, BB.y - CRANK * Math.cos(ang), BB.z - CRANK * Math.sin(ang));
      const foot = _a.copy(pedal.position);
      foot.y -= bob;
      l.shoe.position.copy(foot).add(_k.set(0, 0.03, 0.02));
      const ankle = _b.copy(foot).add(_k.set(0, 0.075, -0.05));
      const hip = _p.copy(this.hip).add(_k.set(s * 0.09, 0, 0));
      const hipC = hip.clone();
      const knee = ik(hipC, ankle, 0.44, 0.43, _k.set(s * 0.12, 0.1, 1), new THREE.Vector3());
      placeLimb(l.thigh, hipC, knee);
      // Schienbein mit fester Länge Richtung Knöchel
      const dir = ankle.clone().sub(knee).normalize();
      const ankleR = knee.clone().addScaledVector(dir, 0.43);
      placeLimb(l.shin, knee, ankleR);
      placeLimb(l.sock, ankleR.clone().addScaledVector(dir, -0.06), ankleR.clone().addScaledVector(dir, 0.02));
    }

    // Arme zu den Griffen (folgen dem Lenker)
    const steerA = this.steer.rotation.y;
    for (const a of this.arms) {
      const sh = V(a.s * 0.19, 1.29, 0.16);
      const hx = a.s * 0.21;
      const hz = 0.1 + 0.45;
      const hand = V(
        hx * Math.cos(steerA) + (hz - 0.45) * Math.sin(steerA),
        0.94,
        0.45 - hx * Math.sin(steerA) + (hz - 0.45) * Math.cos(steerA),
      );
      const elbow = ik(sh, hand, 0.27, 0.26, _k.set(a.s * 0.6, -0.3, -0.5), new THREE.Vector3());
      placeLimb(a.upper, sh, elbow);
      placeLimb(a.lower, elbow, hand);
      a.hand.position.copy(hand);
    }
  }
}
