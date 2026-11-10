// Rennrad-Schuh: glänzendes Obermaterial, schwarze Carbonsohle, Drehverschluss, Riemen und Schuhplatte.
// Ursprung = Schuhplatte unter dem Fußballen (sitzt auf dem Pedal), +z = Spitze, +y = oben. Maße in Metern.
import * as THREE from 'three';

const LEN = 0.27; // ganzer Schuh
const BALL = 0.185; // Fußballen ab Ferse
const STEPS = 22; // Querschnitte von der Ferse zur Spitze
const AROUND = 20;

// Form entlang des Schuhs (t = 0 Ferse … 1 Spitze): Breite, Höhe, Sohlen-Anhebung
function shape(t) {
  const w = 0.064 + 0.03 * Math.sin(Math.PI * Math.min(1, t * 1.35)) - 0.012 * Math.max(0, t - 0.8) / 0.2;
  // Ferse hoch (Fersenkappe), Rist mittel, Spitze flach
  const h = t < 0.2 ? 0.1 + 0.008 * (t / 0.2) : t < 0.58 ? 0.108 - 0.045 * ((t - 0.2) / 0.38) : 0.063 - 0.033 * ((t - 0.58) / 0.42);
  // Spitze und Ferse leicht hochgezogen (wie eine Wippe)
  const lift = 0.012 * Math.max(0, (t - 0.82) / 0.18) ** 2 + 0.006 * Math.max(0, (0.08 - t) / 0.08);
  return { w, h, lift };
}

// Oberschuh als „Loft“: Querschnitte (abgerundete Rechtecke) nacheinander verbinden, Enden zugespitzt
function upperGeometry() {
  const pos = [];
  const idx = [];
  const ring = (t, scale) => {
    const { w, h, lift } = shape(t);
    const z = t * LEN - BALL;
    for (let k = 0; k < AROUND; k++) {
      const a = (k / AROUND) * Math.PI * 2;
      const c = Math.cos(a);
      const s = Math.sin(a);
      const n = 0.55; // < 1 = eckiger, Unterseite flach
      const x = Math.sign(c) * Math.abs(c) ** n * (w / 2) * scale;
      const y = s > 0 ? Math.abs(s) ** 0.8 * h * scale : s * 0.004;
      pos.push(x, y + lift + 0.012, z);
    }
  };
  // Ferse rund schließen, Spitze rund schließen
  const ts = [];
  ts.push([0, 0.35], [0.008, 0.7], [0.02, 0.9]);
  for (let i = 1; i <= STEPS; i++) ts.push([0.02 + (0.95 * i) / STEPS, 1]);
  ts.push([0.985, 0.75], [1, 0.3]);
  ts.forEach(([t, sc]) => ring(t, sc));
  for (let r = 0; r < ts.length - 1; r++) {
    for (let k = 0; k < AROUND; k++) {
      const a = r * AROUND + k;
      const b = r * AROUND + ((k + 1) % AROUND);
      const c = a + AROUND;
      const d = b + AROUND;
      idx.push(a, b, c, b, d, c);
    }
  }
  // Deckel an beiden Enden
  const cap = (r, flip) => {
    const center = pos.length / 3;
    let cx = 0, cy = 0, cz = 0;
    for (let k = 0; k < AROUND; k++) {
      cx += pos[(r * AROUND + k) * 3];
      cy += pos[(r * AROUND + k) * 3 + 1];
      cz += pos[(r * AROUND + k) * 3 + 2];
    }
    pos.push(cx / AROUND, cy / AROUND, cz / AROUND);
    for (let k = 0; k < AROUND; k++) {
      const a = r * AROUND + k;
      const b = r * AROUND + ((k + 1) % AROUND);
      if (flip) idx.push(center, a, b);
      else idx.push(center, b, a);
    }
  };
  cap(0, false);
  cap(ts.length - 1, true);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Sohle: flache, etwas breitere Platte mit Fersenstopper
function soleGeometry() {
  const s = new THREE.Shape();
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push([shape(t).w / 2 + 0.003, t * LEN - BALL]);
  }
  s.moveTo(-pts[0][0], pts[0][1]);
  for (const [x, z] of pts) s.lineTo(x, z);
  for (let i = pts.length - 1; i >= 0; i--) s.lineTo(-pts[i][0], pts[i][1]);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 2 });
  // Form liegt in x/y, Dicke in z -> flach hinlegen
  g.rotateX(Math.PI / 2);
  g.translate(0, 0.014, 0);
  return g;
}

let shared = null;
function geos() {
  if (shared) return shared;
  shared = {
    upper: upperGeometry(),
    sole: soleGeometry(),
    dial: new THREE.CylinderGeometry(0.016, 0.017, 0.012, 16),
    dialRing: new THREE.TorusGeometry(0.016, 0.003, 6, 16),
    strap: new THREE.BoxGeometry(1, 1, 1),
    cleat: new THREE.BoxGeometry(0.05, 0.008, 0.06),
    heel: new THREE.BoxGeometry(0.03, 0.006, 0.022),
  };
  return shared;
}

// mats: { upper, sole, accent, dial } (Materialien werden geteilt, damit Farbwechsel überall wirken)
export function buildShoe(mats) {
  const G = geos();
  const g = new THREE.Group();
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.scale.set(sx, sy, sz);
    m.castShadow = true;
    g.add(m);
    return m;
  };
  add(G.upper, mats.upper, 0, 0, 0);
  add(G.sole, mats.sole, 0, 0, 0);
  // Schuhplatte (Cleat) unter dem Ballen, Fersenstopper hinten
  add(G.cleat, mats.cleat || mats.sole, 0, 0.002, 0.0);
  add(G.heel, mats.sole, 0, 0.002, -BALL + 0.02);
  // Querriemen über dem Vorfuß (Farbe des Trikots)
  const zr = 0.0;
  const sr = shape((zr + BALL) / LEN);
  add(G.strap, mats.accent, 0, 0.012 + sr.h * 0.92, zr, -0.2, 0, 0, sr.w * 0.98, 0.008, 0.035);
  const sr2 = shape((zr + 0.05 + BALL) / LEN);
  add(G.strap, mats.accent, 0, 0.012 + sr2.h * 0.92, zr + 0.05, -0.15, 0, 0, sr2.w * 0.98, 0.008, 0.03);
  // schwarze Fersenkappe
  const sh0 = shape(0.04);
  add(G.strap, mats.sole, 0, 0.012 + sh0.h * 0.45, -BALL + 0.006, 0, 0, 0, sh0.w * 0.8, sh0.h * 0.8, 0.012);
  // Drehverschluss oben auf dem Rist (außen)
  const td = 0.4;
  const sd = shape(td);
  const dz = td * LEN - BALL;
  const dy = 0.012 + sd.h * 0.98;
  add(G.dial, mats.dial, 0.012, dy, dz, -0.35, 0, -0.25);
  add(G.dialRing, mats.accent, 0.012, dy + 0.005, dz, Math.PI / 2 - 0.35, 0, -0.25);
  return g;
}

export function shoeMaterials() {
  return {
    upper: new THREE.MeshPhysicalMaterial({ color: '#f6f6f4', roughness: 0.28, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
    sole: new THREE.MeshStandardMaterial({ color: '#141416', roughness: 0.45, metalness: 0.2 }),
    cleat: new THREE.MeshStandardMaterial({ color: '#c8352c', roughness: 0.6 }),
    dial: new THREE.MeshStandardMaterial({ color: '#1a1a1e', roughness: 0.3, metalness: 0.4 }),
  };
}
