// Prozedurales Rennrad mit Fahrer. Vorwärts = +z, oben = +y, rechts vom Fahrer = -x.
import * as THREE from 'three';
import { RiderModel } from './rider-model.js';
import { groupsetById } from './brands.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { drawPlate } from './plate.js';
import { CONFIG } from './config.js';
import { makeKitCanvas, drawTorso, drawSleeve, drawThigh, drawHelmet } from './kit.js';
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

// Feine Stoffstruktur (Strick) als Normalenkarte: lässt Trikot und Hose wie echten Stoff wirken
let fabricNormal = null;
function fabricNormalMap() {
  if (fabricNormal) return fabricNormal;
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const h = (x, y) => {
    x = (x + S) % S;
    y = (y + S) % S;
    return 0.25 * Math.sin((x * Math.PI) / 2) * Math.sin((y * Math.PI) / 4) + 0.15 * Math.sin(((x + y) * Math.PI) / 4);
  };
  const img = ctx.createImageData(S, S);
  const n = new THREE.Vector3();
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      n.set(-(h(x + 1, y) - h(x - 1, y)) * 2, -(h(x, y + 1) - h(x, y - 1)) * 2, 1).normalize();
      const k = (y * S + x) * 4;
      img.data[k] = (n.x * 0.5 + 0.5) * 255;
      img.data[k + 1] = (n.y * 0.5 + 0.5) * 255;
      img.data[k + 2] = (n.z * 0.5 + 0.5) * 255;
      img.data[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  fabricNormal = new THREE.CanvasTexture(c);
  fabricNormal.wrapS = fabricNormal.wrapT = THREE.RepeatWrapping;
  fabricNormal.repeat.set(10, 10);
  return fabricNormal;
}

// Handschuh mit Fingern, die den Griff umfassen (+y = Richtung Unterarm -> Hand)
function gloveGeometry(side) {
  const parts = [new THREE.BoxGeometry(0.058, 0.068, 0.03)];
  for (let k = 0; k < 4; k++) {
    const f = new THREE.CapsuleGeometry(0.0095, 0.034, 2, 6);
    f.rotateX(1.15);
    f.translate(-0.021 + k * 0.014, 0.046, 0.02);
    parts.push(f);
  }
  const thumb = new THREE.CapsuleGeometry(0.0105, 0.03, 2, 6);
  thumb.rotateZ(side * 0.9);
  thumb.translate(side * 0.034, 0.018, 0.012);
  parts.push(thumb);
  return mergeGeometries(parts);
}

// Körperteil mit Muskelform: radius(t) für t = 0 (Anfang) bis 1 (Ende), entlang der Länge len
function shapedLimb(len, radius, mat, steps = 10) {
  const pts = [];
  for (let k = 0; k <= steps; k++) {
    const t = k / steps;
    pts.push(new THREE.Vector2(radius(t), -len / 2 + t * len));
  }
  const m = new THREE.Mesh(new THREE.LatheGeometry(pts, 14), mat);
  m.castShadow = true;
  return m;
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
// from = ab welcher Höhe (0 = Rohranfang, 1 = Rohrende) die Farbe beginnt, flip = umgedreht,
// rows/gap = wie viele Zackenreihen und wie weit auseinander (kleiner = kürzerer Übergang).
const maskCache = {};
function fadeMask(from, flip = false, rows = 7, gap = 20) {
  const key = `${from}-${flip}-${rows}-${gap}`;
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
  for (let row = 0; row < rows; row++) {
    const n = 8;
    const size = 26 - row * 3.2;
    const y = y0 + row * gap;
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

// Breiter Reifen mit Stollen: auf der Lauffläche stehen kleine Klötze nach außen
function cxTireGeometry() {
  const R = 0.318;
  const g = new THREE.TorusGeometry(R, 0.026, 10, 144);
  const pos = g.attributes.position;
  const cols = [];
  const p = new THREE.Vector3();
  const c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    const ang = Math.atan2(p.y, p.x);
    c.set(Math.cos(ang) * R, Math.sin(ang) * R, 0);
    const off = p.clone().sub(c);
    const outward = off.dot(c) / (off.length() * R + 1e-6);
    const knob = (ang / (Math.PI * 2)) * 40;
    if (outward > 0.2 && knob - Math.floor(knob) < 0.5) p.addScaledVector(off.normalize(), 0.006);
    pos.setXYZ(i, p.x, p.y, p.z);
    // Lauffläche schwarz, Seitenwände honigfarben (wie bei Cycle-Cross-Reifen üblich)
    const c3 = outward > 0.35 ? TREAD : SIDEWALL;
    cols.push(c3.r, c3.g, c3.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  g.computeVertexNormals();
  return g;
}
const TREAD = new THREE.Color('#1e1a16');
const SIDEWALL = new THREE.Color('#c39a5a');

// Weltmeister-Lackierung: Rohr in Rahmenfarbe mit den fünf Regenbogenstreifen zwischen from und to
// (0 = Rohranfang, 1 = Rohrende). Reihenfolge von oben: Blau, Rot, Schwarz, Gelb, Grün.
const rainbowCache = {};
function rainbowTexture(base, from, to, topIsStart) {
  const key = `${base}-${from}-${to}-${topIsStart}`;
  if (rainbowCache[key]) return rainbowCache[key];
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 32, 512);
  const colors = ['#0b6cb5', '#d81e2c', '#111111', '#f5c400', '#00a14b'];
  const band = (to - from) / colors.length;
  colors.forEach((col, i) => {
    // Canvas oben = Rohrende (v = 1)
    const v1 = topIsStart ? from + band * (i + 1) : to - band * i;
    ctx.fillStyle = col;
    ctx.fillRect(0, (1 - v1) * 512, 32, band * 512 + 0.5);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  rainbowCache[key] = t;
  return t;
}

export class Bike {
  constructor() {
    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.wheelAngle = 0;
    this.crankAngle = 0;

    // Sportstoff: leichter Glanz (sheen) und feine Strickstruktur
    const fabric = (opts) =>
      new THREE.MeshPhysicalMaterial({
        roughness: 0.68,
        sheen: 0.7,
        sheenRoughness: 0.45,
        sheenColor: new THREE.Color('#ffffff'),
        normalMap: fabricNormalMap(),
        normalScale: new THREE.Vector2(0.35, 0.35),
        ...opts,
      });
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
      cxTire: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.95 }),
      tape: new THREE.MeshStandardMaterial({ color: '#f1f1ee', roughness: 0.7 }),
      // Schaltgruppe (Farben je nach Shimano/SRAM-Modell)
      crankArm: new THREE.MeshPhysicalMaterial({ color: '#26272c', metalness: 0.6, roughness: 0.3, clearcoat: 1 }),
      ring: new THREE.MeshStandardMaterial({ color: '#1b1c20', metalness: 0.7, roughness: 0.3 }),
      groupAccent: new THREE.MeshStandardMaterial({ color: '#b9bdc4', metalness: 0.8, roughness: 0.25 }),
      jersey: fabric({}),
      // Haut: weicher, warmer Schimmer statt Plastik
      skin: new THREE.MeshPhysicalMaterial({
        color: '#e2ad8c',
        roughness: 0.55,
        sheen: 0.35,
        sheenRoughness: 0.7,
        sheenColor: new THREE.Color('#ff9f7a'),
      }),
      shorts: fabric({ color: '#16161b', roughness: 0.6 }),
      shoe: new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.4 }),
      helmet: new THREE.MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 1 }),
      // verspiegelte Brillengläser und schwarzer Rahmen
      glasses: new THREE.MeshPhysicalMaterial({
        color: '#ff8a2a',
        roughness: 0.05,
        metalness: 1,
        envMapIntensity: 2.2,
        iridescence: 1,
        iridescenceIOR: 1.8,
        iridescenceThicknessRange: [200, 700],
      }),
      glassFrame: new THREE.MeshStandardMaterial({ color: '#111114', roughness: 0.4 }),
      glove: fabric({ color: '#f1f1ee', roughness: 0.75 }),
      hair: new THREE.MeshStandardMaterial({ color: '#4a3324', roughness: 0.9 }),
      jerseyPlain: fabric({}),
      sole: new THREE.MeshStandardMaterial({ color: '#141416', roughness: 0.6 }),
      sleeve: fabric({}),
      thigh: fabric({ roughness: 0.6 }),
    });
    // Vorderer, farbiger Teil beim Team-Design (mit gezacktem Übergang)
    const paint = (map) =>
      new THREE.MeshPhysicalMaterial({ map, roughness: 0.3, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
    this.teamMats = {
      // Unterrohr: nur oben weiß, damit der Schriftzug in der Mitte auf Schwarz steht
      down: paint(fadeMask(0.86, false, 4, 12)),
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
    this.buildKit(m);
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
    this.tubes.seat = tube(BB, ST, 0.018, m.frame);
    f.add(this.tubes.seat);
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
    // Cyclocross: dicker Reifen mit Stollen (wird mit setTires umgeschaltet)
    const cx = new THREE.Mesh(cxTireGeometry(), m.cxTire);
    cx.rotation.y = Math.PI / 2;
    cx.castShadow = true;
    cx.visible = false;
    g.add(cx);
    (this.roadTires ||= []).push(tire);
    (this.cxTires ||= []).push(cx);
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
    // Zeitfahren: geschlossenes Scheibenrad hinten
    const carbon = new THREE.MeshPhysicalMaterial({ color: '#1a1b1f', roughness: 0.35, metalness: 0.3, clearcoat: 1 });
    // linsenförmig: in der Mitte dicker, damit die Speichen ganz verdeckt sind
    const lens = [V(0.001, 0.04, 0), V(0.03, 0.038, 0), V(0.306, 0.013, 0), V(0.306, -0.013, 0), V(0.03, -0.038, 0), V(0.001, -0.04, 0)].map((p) => new THREE.Vector2(p.x, p.y));
    this.disc = new THREE.Mesh(new THREE.LatheGeometry(lens, 56), carbon);
    this.disc.rotation.z = Math.PI / 2;
    this.disc.visible = false;
    this.rearWheel.add(this.disc);

    // Lenkbarer Vorderbau: dreht sich um eine Achse beim Steuerrohr
    this.steer = new THREE.Group();
    this.steer.position.set(0, 0, 0.45);
    this.root.add(this.steer);
    this.frontWheel = this.makeWheel(m, rimMat);
    this.frontWheel.position.set(0, WHEEL_R, 0.05);
    this.steer.add(this.frontWheel);
    // Zeitfahren: hohe Carbonfelge vorne
    this.deepRim = new THREE.Group();
    for (const s of [-1, 1]) {
      const r = new THREE.Mesh(new THREE.RingGeometry(0.17, 0.307, 56, 1), carbon);
      r.rotation.y = (s * Math.PI) / 2;
      r.position.x = s * 0.014;
      this.deepRim.add(r);
    }
    this.deepRim.visible = false;
    this.frontWheel.add(this.deepRim);
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
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.006, 40), m.ring);
    ring.rotation.z = Math.PI / 2;
    ring.position.x = -0.065;
    this.crank.add(ring);
    const spider = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 5), m.crankArm);
    spider.rotation.z = Math.PI / 2;
    spider.position.x = -0.07;
    this.crank.add(spider);
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.02, CRANK, 0.03), m.crankArm);
      arm.position.set(s * -0.085, (-s * CRANK) / 2, 0);
      arm.castShadow = true;
      this.crank.add(arm);
    }
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.19, 10), m.black);
    axle.rotation.z = Math.PI / 2;
    this.crank.add(axle);
    // Ziermarke außen auf der Kurbel (z. B. rot bei SRAM Red)
    const badge = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.004, 20), m.groupAccent);
    badge.rotation.z = Math.PI / 2;
    badge.position.x = -0.077;
    this.crank.add(badge);
    // Schaltwerk am hinteren Ausfallende
    const rd = new THREE.Group();
    rd.position.set(-0.07, WHEEL_R - 0.05, -0.47);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.07, 0.04), m.crankArm);
    body.rotation.x = 0.4;
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.035, 0.02), m.groupAccent);
    plate.position.set(-0.013, 0.005, 0);
    plate.rotation.x = 0.4;
    const cage = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.09, 0.03), m.crankArm);
    cage.position.set(0.004, -0.07, 0.01);
    rd.add(body, plate, cage);
    for (const y of [-0.035, -0.105]) {
      const pulley = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.008, 12), m.black);
      pulley.rotation.z = Math.PI / 2;
      pulley.position.set(0.006, y, 0.01);
      rd.add(pulley);
    }
    this.root.add(rd);
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
    // Rennlenker (beim Zeitfahren ausgeblendet)
    const road = (this.roadBars = new THREE.Group());
    s.add(road);
    road.add(tube(V(-0.21, 0.9, 0.03), V(0.21, 0.9, 0.03), 0.013, m.tape));
    for (const side of [-1, 1]) {
      const x = side * 0.21;
      const pts = [V(x, 0.9, 0.03), V(x, 0.91, 0.1), V(x, 0.86, 0.13), V(x, 0.79, 0.09), V(x, 0.78, 0.0)];
      const curve = new THREE.CatmullRomCurve3(pts);
      const drop = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.013, 8), m.tape);
      drop.castShadow = true;
      road.add(drop);
      // Schalt-/Bremsgriffe
      const hood = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.07, 0.05), m.black);
      hood.position.set(x, 0.925, 0.1);
      hood.rotation.x = -0.4;
      road.add(hood);
    }
    this.buildAeroBars(m);
  }

  // Zeitfahr-Cockpit: flacher Basislenker mit Hörnern, Armschalen und geschwungene Verlängerungen
  buildAeroBars(m) {
    const carbon = new THREE.MeshPhysicalMaterial({ color: '#16171b', roughness: 0.35, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.15 });
    const pad = new THREE.MeshStandardMaterial({ color: '#2a2b30', roughness: 0.95 });
    const cupMat = carbon.clone();
    cupMat.side = THREE.DoubleSide;
    const tt = (this.ttBars = new THREE.Group());
    // Basislenker als flaches Flügelprofil
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.014, 0.045), carbon);
    wing.position.set(0, 0.885, 0.035);
    wing.castShadow = true;
    tt.add(wing);
    for (const side of [-1, 1]) {
      const x = side * 0.19;
      // Hörner nach vorne mit Bremshebel am Ende
      const horn = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(x, 0.885, 0.04), V(x + side * 0.02, 0.882, 0.1), V(x + side * 0.022, 0.87, 0.17)]), 12, 0.013, 8),
        carbon,
      );
      tt.add(horn);
      const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.006, 0.06, 8), m.black);
      lever.position.set(x + side * 0.022, 0.84, 0.18);
      lever.rotation.x = 0.3;
      tt.add(lever);
      // Erhöhung und Armschale mit Polster
      const px = side * 0.095;
      tt.add(tube(V(px, 0.89, -0.04), V(px, 0.925, -0.04), 0.012, carbon));
      // offene Halbschale (unten rund, oben offen), innen sichtbar
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.12, 14, 1, true, -Math.PI / 2, Math.PI), cupMat);
      cup.rotation.x = Math.PI / 2;
      cup.position.set(px, 0.972, -0.04);
      tt.add(cup);
      const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.012, 0.11), pad);
      cushion.position.set(px, 0.934, -0.04);
      tt.add(cushion);
      // Verlängerung: unten gerade, vorne nach oben gebogen (Ski-Form)
      const ex = side * 0.055;
      const ext = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([V(side * 0.07, 0.915, -0.07), V(ex, 0.918, 0.05), V(ex, 0.922, 0.15), V(ex, 0.94, 0.2), V(ex, 0.965, 0.22)]),
          20,
          0.011,
          8,
        ),
        carbon,
      );
      ext.castShadow = true;
      tt.add(ext);
      // Schalter am Ende der Verlängerung
      const shifter = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.011, 0.03, 8), m.black);
      shifter.position.set(ex, 0.978, 0.225);
      shifter.rotation.x = -0.6;
      tt.add(shifter);
    }
    // Brücke zwischen den Verlängerungen
    tt.add(tube(V(-0.06, 0.917, 0.0), V(0.06, 0.917, 0.0), 0.008, carbon));
    tt.visible = false;
    this.steer.add(tt);
  }

  buildRider(m) {
    const r = (this.rider = new THREE.Group());
    this.root.add(r);
    this.hip = V(0, 0.98, -0.2);
    // tief gebeugte, sportliche Haltung: Schultern weit vorne und tief über dem Lenker
    this.shoulder = V(0, 1.2, 0.25);

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
    // breite Schultern, schmale Taille
    const tg = torsoMesh.geometry;
    tg.computeBoundingBox();
    const y0 = tg.boundingBox.min.y;
    const y1 = tg.boundingBox.max.y;
    const tp = tg.attributes.position;
    for (let i = 0; i < tp.count; i++) {
      const t = (tp.getY(i) - y0) / (y1 - y0);
      const wide = 1.02 + 0.38 * Math.pow(Math.max(0, (t - 0.25) / 0.75), 1.4);
      tp.setX(i, tp.getX(i) * wide);
      let z = tp.getZ(i) * (0.9 - 0.12 * t);
      // runder Rücken in der gebeugten Haltung (-z = Rücken), etwas Brust vorne oben
      if (z < 0) z -= 0.035 * Math.sin(Math.PI * t);
      else if (t > 0.55) z += 0.015 * Math.sin(Math.PI * (t - 0.55) / 0.45);
      tp.setZ(i, z);
    }
    tg.computeVertexNormals();
    this.torso.add(torsoMesh);
    placeLimb(this.torso, this.hip, this.shoulder);
    r.add(this.torso);

    // Kopf
    this.head = new THREE.Group();
    const headGeo = new THREE.SphereGeometry(0.1, 20, 16);
    headGeo.scale(0.95, 1.08, 1.06);
    const headMesh = new THREE.Mesh(headGeo, m.skin);
    const chin = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), m.skin);
    chin.scale.set(1.1, 0.8, 1);
    chin.position.set(0, -0.07, 0.045);
    this.head.add(chin);
    headMesh.castShadow = true;
    this.head.add(headMesh);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.125, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), m.helmet);
    helmet.scale.set(1, 0.95, 1.3);
    helmet.position.set(0, 0.02, -0.02);
    helmet.rotation.x = -0.25;
    helmet.castShadow = true;
    this.head.add(helmet);
    // Gebogene Sportbrille, die um den Kopf herumgeht
    const arc = 2.3;
    const lens = new THREE.Mesh(new THREE.TorusGeometry(0.104, 0.021, 6, 24, arc), m.glasses);
    lens.rotation.set(Math.PI / 2, 0, 0);
    const lensPivot = new THREE.Group();
    lensPivot.rotation.y = arc / 2 - Math.PI / 2;
    lensPivot.add(lens);
    lens.scale.set(1, 1, 0.55);
    lensPivot.position.set(0, 0.008, 0.004);
    this.head.add(lensPivot);
    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.106, 0.006, 4, 24, arc + 0.2), m.glassFrame);
    frame.rotation.set(Math.PI / 2, 0, 0);
    const framePivot = new THREE.Group();
    framePivot.rotation.y = (arc + 0.2) / 2 - Math.PI / 2;
    framePivot.add(frame);
    framePivot.position.set(0, 0.03, 0.004);
    this.head.add(framePivot);
    // Nase und Ohren
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.035, 6), m.skin);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, -0.022, 0.1);
    this.head.add(nose);
    for (const sx of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), m.skin);
      ear.scale.set(0.45, 1, 0.7);
      ear.position.set(sx * 0.098, -0.008, -0.01);
      this.head.add(ear);
      // Kinnriemen vom Helm unter das Kinn
      const strap = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(sx * 0.1, 0.03, 0.0), V(sx * 0.085, -0.05, 0.03), V(0, -0.098, 0.045)]), 8, 0.0045, 4),
        m.glassFrame,
      );
      this.head.add(strap);
    }
    // Zeitfahrhelm: lange Spitze nach hinten (nur beim Zeitfahren sichtbar)
    const tail = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), m.helmet);
    tail.scale.set(0.1, 0.075, 0.2);
    tail.position.set(0, 0.035, -0.11);
    tail.rotation.x = -0.25;
    tail.visible = false;
    tail.userData.tt = true;
    this.head.add(tail);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.128, 18, 10, -Math.PI * 0.32, Math.PI * 0.64, Math.PI * 0.42, Math.PI * 0.2), m.glasses);
    visor.position.set(0, 0.005, 0.005);
    visor.visible = false;
    visor.userData.tt = true;
    this.head.add(visor);
    // Haare im Nacken unter dem Helm
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.098, 12, 8, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.3), m.hair);
    hair.position.set(0, -0.005, -0.012);
    this.head.add(hair);
    // Grat oben auf dem Helm
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.01, 0.24), m.glassFrame);
    ridge.position.set(0, 0.127, -0.03);
    ridge.rotation.x = -0.18;
    this.head.add(ridge);
    // Kopf tiefer, Blick trotzdem nach vorne auf die Straße
    this.head.position.set(0, 1.31, 0.39);
    this.head.rotation.x = 0.05;
    r.add(this.head);
    r.add(tube(V(0, 1.2, 0.27), V(0, 1.28, 0.35), 0.045, m.skin));

    // Arme und Beine (werden jedes Bild neu ausgerichtet)
    this.arms = [-1, 1].map((s) => ({
      s,
      // Oberarm mit Bizeps, Unterarm zum Handgelenk schmaler
      upper: shapedLimb(0.27, (t) => 0.044 + 0.009 * Math.sin(Math.PI * Math.min(1, t * 1.1)), m.sleeve),
      lower: shapedLimb(0.26, (t) => 0.041 - 0.015 * t + 0.006 * Math.exp(-(((t - 0.2) / 0.2) ** 2)), m.skin),
      hand: new THREE.Mesh(gloveGeometry(s), m.glove),
      elbow: new THREE.Mesh(new THREE.SphereGeometry(0.041, 10, 8), m.skin),
      cap: new THREE.Mesh(new THREE.SphereGeometry(0.054, 12, 8), m.jerseyPlain),
    }));
    this.legs = [-1, 1].map((s) => ({
      s,
      // Oberschenkel oben kräftig, zum Knie schmaler; Wade mit Muskel
      thigh: shapedLimb(0.44, (t) => 0.086 - 0.026 * t + 0.007 * Math.sin(Math.PI * t), m.thigh),
      shin: shapedLimb(0.43, (t) => 0.044 + 0.02 * Math.exp(-(((t - 0.3) / 0.17) ** 2)) - 0.008 * t, m.skin),
      knee: new THREE.Mesh(new THREE.SphereGeometry(0.058, 12, 8), m.skin),
      sock: limb(0.18, 0.058, m.shoe),
      shoe: new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.24), m.shoe),
    }));
    for (const a of this.arms) {
      a.hand.castShadow = true;
      r.add(a.upper, a.lower, a.hand, a.elbow, a.cap);
    }
    for (const l of this.legs) {
      l.shoe.castShadow = true;
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.016, 0.25), m.sole);
      sole.position.y = -0.033;
      l.shoe.add(sole);
      // zwei Klettriemen und ein Drehverschluss
      for (const z of [0.05, -0.02]) {
        const strap = new THREE.Mesh(new THREE.BoxGeometry(0.086, 0.012, 0.03), m.sole);
        strap.position.set(0, 0.031, z);
        l.shoe.add(strap);
      }
      const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.012, 10), m.glassFrame);
      dial.position.set(0, 0.035, -0.07);
      l.shoe.add(dial);
      r.add(l.thigh, l.shin, l.sock, l.shoe, l.knee);
    }
  }

  // Texturen für Trikot, Ärmel, Radhose und Helm
  buildKit(m) {
    this.kitTex = {
      torso: makeKitCanvas(512, 512),
      sleeve: makeKitCanvas(128, 128),
      thigh: makeKitCanvas(128, 256),
      helmet: makeKitCanvas(256, 128),
    };
    m.jersey.map = this.kitTex.torso.tex;
    m.sleeve.map = this.kitTex.sleeve.tex;
    m.thigh.map = this.kitTex.thigh.tex;
    m.helmet.map = this.kitTex.helmet.tex;
    this.kitCol = { jersey: CONFIG.colors.jersey, shorts: '#16161b', helmet: '#f6f6f6' };
    this.kit = 'plain';
    this.updateKit();
  }

  updateKit() {
    const c = this.kitCol;
    drawTorso(this.kitTex.torso, c.jersey, this.kit);
    this.mats.jerseyPlain.color.set(c.jersey);
    drawSleeve(this.kitTex.sleeve, c.jersey, this.kit);
    drawThigh(this.kitTex.thigh, c.shorts, '#' + this.mats.skin.color.getHexString(), this.kit);
    drawHelmet(this.kitTex.helmet, c.helmet);
    // Goldener Helm glänzt wie echtes Gold
    const gold = c.helmet.toLowerCase() === '#d4af37';
    this.mats.helmet.metalness = gold ? 0.85 : 0;
    this.mats.helmet.roughness = gold ? 0.18 : 0.3;
    this.mats.helmet.needsUpdate = true;
    this.model?.setKit(c);
  }

  // Echtes 3D-Modell (Mixamo) statt der einfachen Figur benutzen
  useModel(scene) {
    const model = new RiderModel(scene);
    this.model = model;
    this.root.add(scene);
    this.rider.visible = false;
    // Helm, Brille und Haare im Nacken von der einfachen Figur übernehmen (ohne Gesicht)
    const helmet = this.head.clone();
    for (const c of [...helmet.children]) if (c.material === this.mats.skin) helmet.remove(c);
    helmet.position.set(0, 0.107, 0.034);
    helmet.rotation.set(0.12, 0, 0);
    helmet.scale.setScalar(1.12);
    model.attach('Head', helmet);
    this.modelHelmet = helmet;
    // Rückennummer mitten auf den Rücken
    this.backPlate.removeFromParent();
    this.backPlate.position.set(0, 0.063, -0.145);
    this.backPlate.rotation.set(0, Math.PI, 0);
    model.attach('Spine1', this.backPlate);
    model.setKit(this.kitCol);
    this.update(0, 0, 0, 0);
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
    this.backPlate = back;

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
    // genau in der Mitte des Unterrohrs
    const mid = BB.clone().lerp(HB, 0.5);
    for (const s of [-1, 1]) {
      const n = V(s, 0, 0);
      // Schrift so ausrichten, dass sie auf beiden Seiten aufrecht und nicht gespiegelt ist
      const u = s > 0 ? dir.clone().negate() : dir.clone();
      const v = new THREE.Vector3().crossVectors(n, u);
      // Seitenverhältnis wie die Zeichenfläche (512 x 128)
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(len * 0.48, len * 0.48 * (128 / 512)), mat);
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
    this.kit = c.kit || 'plain';
    // Lenkerband: eigene Farbe, sonst passend zur Lackierung
    this.barColor = c.bar || null;
    this.setColors({
      jersey: c.jersey || CONFIG.colors.jersey,
      frame: c.frame || CONFIG.colors.bikeFrame,
      helmet: c.helmet || DEFAULT_LOOK.helmet,
      shorts: c.shorts || DEFAULT_LOOK.shorts,
    });
    this.setBrand(c.brand || DEFAULT_LOOK.brand);
    this.setGroupset(c.groupset || DEFAULT_LOOK.groupset);
    this.tireColor = c.tires || null;
    this.applyTireColor();
  }

  // Reifenfarbe (nur beim Zeitfahrrad einstellbar, sonst schwarz)
  applyTireColor() {
    this.mats.tire.color.set(this.aero && this.tireColor ? this.tireColor : '#1c1c1c');
  }

  setGroupset(id) {
    const g = groupsetById(id);
    this.groupset = g.id;
    this.mats.crankArm.color.set(g.crank);
    this.mats.ring.color.set(g.ring);
    this.mats.groupAccent.color.set(g.accent);
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
    // Weltmeister: Regenbogenstreifen am Sitzrohr (oben) und an der Gabel (Mitte)
    const rainbow = this.design === 'rainbow';
    const rb = (from, to, topIsStart) =>
      new THREE.MeshPhysicalMaterial({
        map: rainbowTexture('#' + new THREE.Color(this.frameColor).getHexString(), from, to, topIsStart),
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 1,
      });
    if (rainbow && this.rainbowFor !== this.frameColor) {
      this.rainbowFor = this.frameColor;
      this.rainbowMats = { seat: rb(0.5, 0.82, false), fork: rb(0.3, 0.62, true) };
    }
    this.tubes.seat.material = rainbow ? this.rainbowMats.seat : m.frame;
    this.tubes.down.material = team ? t.down : m.frame;
    this.tubes.top.material = team ? t.top : m.frame;
    this.tubes.head.material = team ? t.solid : m.frame;
    for (const f of this.forkTubes) f.material = team ? t.fork : rainbow ? this.rainbowMats.fork : m.frame;
    this.forkCrown.material = team ? t.solid : m.frame;
    const dark = team || rainbow;
    this.stripe.visible = !dark;
    m.accent.color.set(dark ? '#1b1b1e' : CONFIG.colors.gold);
    m.tape.color.set(this.barColor || (dark ? '#1b1b1e' : '#f1f1ee'));
    this.rimMat.map = rimTexture(dark ? 'team' : 'gold');
    this.rimMat.needsUpdate = true;
  }

  // 'road' = schmale Rennradreifen, 'cx' = Cyclocross-Stollenreifen
  setTires(mode) {
    const cx = mode === 'cx';
    for (const t of this.roadTires) t.visible = !cx;
    for (const t of this.cxTires) t.visible = cx;
    // Zeitfahren: Aufsatzlenker, Scheibenrad, hohe Felge vorne, Zeitfahrhelm, flache Haltung
    const tt = (this.aero = mode === 'tt');
    this.ttBars.visible = tt;
    this.roadBars.visible = !tt;
    this.applyTireColor();
    this.disc.visible = tt;
    this.deepRim.visible = tt;
    for (const h of [this.head, this.modelHelmet]) h?.traverse((o) => o.userData.tt && (o.visible = tt));
    this.update(0, 0, 0, 0);
  }

  setPlate(number, name) {
    this.plateNumber = number;
    this.plateName = name;
    drawPlate(this.plateCanvas, number, name);
    this.plateTex.needsUpdate = true;
  }

  setColors({ jersey, frame, helmet, shorts } = {}) {
    // Kleidungsfarben stecken in den Texturen; das Material selbst bleibt weiß
    if (jersey) this.kitCol.jersey = jersey;
    if (frame) this.frameColor = frame;
    this.applyPaint();
    if (helmet) this.kitCol.helmet = helmet;
    if (shorts) {
      this.kitCol.shorts = shorts;
      this.mats.shorts.color.set(shorts);
    }
    if (jersey || helmet || shorts) this.updateKit();
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
      // Fußspitze zeigt hinten im Tritt nach unten, vorne etwas nach oben (wie bei echten Fahrern)
      l.shoe.rotation.x = 0.06 + 0.22 * Math.sin(ang);
      const ankle = _b.copy(foot).add(_k.set(0, 0.075, -0.05));
      const hip = _p.copy(this.hip).add(_k.set(s * 0.09, 0, 0));
      const hipC = hip.clone();
      const knee = ik(hipC, ankle, 0.44, 0.43, _k.set(s * 0.12, 0.1, 1), new THREE.Vector3());
      placeLimb(l.thigh, hipC, knee);
      l.knee.position.copy(knee);
      // Schienbein mit fester Länge Richtung Knöchel
      const dir = ankle.clone().sub(knee).normalize();
      const ankleR = knee.clone().addScaledVector(dir, 0.43);
      placeLimb(l.shin, knee, ankleR);
      // Socken bis zur Wadenmitte
      placeLimb(l.sock, ankleR.clone().addScaledVector(dir, -0.16), ankleR.clone().addScaledVector(dir, 0.02));
    }

    // Arme zu den Griffen (folgen dem Lenker)
    const steerA = this.steer.rotation.y;
    const hands = (this._hands ||= [new THREE.Vector3(), new THREE.Vector3()]);
    for (const a of this.arms) {
      // Schultern passend zur tiefen Haltung: Arme dadurch stärker angewinkelt
      const sh = V(a.s * 0.19, 1.19, 0.23);
      const hx = a.s * 0.21;
      const hz = 0.1 + 0.45;
      // Zeitfahren: Hände vorne an den Verlängerungen
      const ax = this.aero ? a.s * 0.058 : hx;
      const az = this.aero ? 0.45 + 0.17 : hz;
      const hand = V(
        ax * Math.cos(steerA) + (az - 0.45) * Math.sin(steerA),
        this.aero ? 0.95 : 0.94,
        0.45 - ax * Math.sin(steerA) + (az - 0.45) * Math.cos(steerA),
      );
      // Ellbogen eng am Körper: zeigen nach unten/hinten, nicht nach außen
      const elbow = ik(sh, hand, 0.27, 0.26, _k.set(a.s * 0.05, -0.75, -0.35), new THREE.Vector3());
      placeLimb(a.upper, sh, elbow);
      placeLimb(a.lower, elbow, hand);
      a.hand.position.copy(hand);
      hands[a.s > 0 ? 1 : 0].copy(hand);
      a.hand.quaternion.copy(a.lower.quaternion);
      a.elbow.position.copy(elbow);
      a.cap.position.copy(sh).add(_k.set(-a.s * 0.01, -0.012, 0));
    }
    if (this.model) {
      this.model.pose({
        hip: this.hip,
        pedals: [this.pedals[0].position, this.pedals[1].position],
        angles: [ca, ca + Math.PI],
        hands,
        bob,
        aero: this.aero,
      });
    }
  }
}
