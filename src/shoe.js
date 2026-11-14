// Rennrad-Schuh: glänzendes Obermaterial, schwarze Carbonsohle, Drehverschluss, Riemen und Schuhplatte.
// Ursprung = Schuhplatte unter dem Fußballen (sitzt auf dem Pedal), +z = Spitze, +y = oben. Maße in Metern.
import * as THREE from 'three';

const LEN = 0.27; // ganzer Schuh
const BALL = 0.185; // Fußballen ab Ferse
const STEPS = 22; // Querschnitte von der Ferse zur Spitze
const AROUND = 20;

// Form entlang des Schuhs (t = 0 Ferse … 1 Spitze): Breite, Höhe, Sohlen-Anhebung
function shape(t) {
  const w = 0.058 + 0.03 * Math.sin(Math.PI * Math.min(1, t * 1.3)) - 0.016 * Math.max(0, t - 0.78) / 0.22;
  // Ferse hoch (Fersenkappe), Rist mittel, Spitze flach
  const h = t < 0.2 ? 0.088 + 0.006 * (t / 0.2) : t < 0.6 ? 0.094 - 0.042 * ((t - 0.2) / 0.4) : 0.052 - 0.03 * ((t - 0.6) / 0.4) ** 1.2;
  // Spitze und Ferse leicht hochgezogen (wie eine Wippe)
  const lift = 0.012 * Math.max(0, (t - 0.82) / 0.18) ** 2 + 0.006 * Math.max(0, (0.08 - t) / 0.08);
  return { w, h, lift };
}

// Rundung an Ferse und Spitze (wie im Loft unten)
function endScale(t) {
  if (t < 0.008) return 0.35 + (0.7 - 0.35) * (t / 0.008);
  if (t < 0.02) return 0.7 + 0.2 * ((t - 0.008) / 0.012);
  if (t < 0.03) return 0.9 + 0.1 * ((t - 0.02) / 0.01);
  if (t > 0.985) return 0.75 - 0.45 * ((t - 0.985) / 0.015);
  if (t > 0.97) return 1 - 0.25 * ((t - 0.97) / 0.015);
  return 1;
}
// Punkt auf der Oberfläche (a = Winkel um den Schuh, 0 = Außenseite, PI/2 = oben), lift = nach außen versetzt
function surf(t, a, lift = 0) {
  const { w, h, lift: hoch } = shape(t);
  const sc = endScale(t);
  const c = Math.cos(a);
  const sn = Math.sin(a);
  const x = Math.sign(c) * Math.abs(c) ** 0.55 * (w / 2 + lift) * sc;
  const y = sn > 0 ? Math.abs(sn) ** 0.8 * (h + lift) * sc : sn * 0.004;
  return [x, y + hoch + 0.012, t * LEN - BALL];
}
// Ein Stück der Oberfläche (z. B. Riemen, Fersenkappe, Streifen) – liegt genau auf dem Schuh
function patchGeometry(t0, t1, a0, a1, lift = 0.0025, nt = 10, na = 16) {
  const pos = [];
  const idx = [];
  for (let i = 0; i <= nt; i++) {
    const t = t0 + ((t1 - t0) * i) / nt;
    for (let k = 0; k <= na; k++) pos.push(...surf(t, a0 + ((a1 - a0) * k) / na, lift));
  }
  for (let i = 0; i < nt; i++)
    for (let k = 0; k < na; k++) {
      const a = i * (na + 1) + k;
      const b = a + na + 1;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Oberschuh als „Loft“: Querschnitte (abgerundete Rechtecke) nacheinander verbinden, Enden zugespitzt
function upperGeometry() {
  const pos = [];
  const uv = [];
  const idx = [];
  const ring = (t, scale) => {
    const { w, h, lift } = shape(t);
    const z = t * LEN - BALL;
    for (let k = 0; k < AROUND; k++) {
      uv.push(t, k / AROUND);
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
    uv.push(r === 0 ? 0 : 1, 0.25);
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
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Obermaterial: Nähte und feine Lüftungslöcher an den Seiten (weiß, wird mit der Schuhfarbe eingefärbt)
let oberTex = null;
function oberTextur() {
  if (oberTex) return oberTex;
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 512, 256);
  // u (x) = Ferse → Spitze, v (y) = rund um den Schuh: 0 außen, 0,25 oben, 0,5 innen
  // Löcher vorne an beiden Seiten
  g.fillStyle = 'rgba(30,30,36,0.75)';
  for (const [v0, v1] of [[0.05, 0.19], [0.31, 0.45]])
    for (let x = 0.5 * 512; x < 0.9 * 512; x += 12)
      for (let y = v0 * 256, r = 0; y < v1 * 256; y += 9, r++) {
        g.beginPath();
        g.arc(x + (r % 2) * 6, y, 2.6, 0, Math.PI * 2);
        g.fill();
      }
  // Nähte: Abgrenzung der Fersen- und Vorfußteile
  g.strokeStyle = 'rgba(60,60,66,0.5)';
  g.lineWidth = 2;
  g.setLineDash([5, 4]);
  for (const x of [0.2, 0.52, 0.88]) {
    g.beginPath();
    g.moveTo(x * 512, 0);
    g.lineTo((x + 0.04) * 512, 256);
    g.stroke();
  }
  g.beginPath();
  g.moveTo(0.2 * 512, 0.22 * 256);
  g.lineTo(0.88 * 512, 0.2 * 256);
  g.moveTo(0.2 * 512, 0.3 * 256);
  g.lineTo(0.88 * 512, 0.3 * 256);
  g.stroke();
  oberTex = new THREE.CanvasTexture(c);
  oberTex.colorSpace = THREE.SRGBColorSpace;
  oberTex.anisotropy = 4;
  oberTex.flipY = false; // Zeichnung oben = v 0 (Außenseite unten)
  return oberTex;
}

// Drahtschnürung vom Drehverschluss: im Zickzack über den Rist
function drahtGeometry() {
  const pts = [];
  for (let i = 0; i <= 6; i++) {
    const t = 0.36 + i * 0.045;
    const a = i % 2 ? Math.PI * 0.22 : Math.PI * 0.78;
    pts.push(new THREE.Vector3(...surf(t, a, 0.004)));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.0017, 5, false);
}

// Sohle: flache, etwas breitere Platte mit Fersenstopper
function soleGeometry() {
  const s = new THREE.Shape();
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    pts.push([(shape(t).w / 2) * endScale(t) + 0.003, t * LEN - BALL]);
  }
  s.moveTo(-pts[0][0], pts[0][1]);
  for (const [x, z] of pts) s.lineTo(x, z);
  for (let i = pts.length - 1; i >= 0; i--) s.lineTo(-pts[i][0], pts[i][1]);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.009, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.0025, bevelSegments: 2 });
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
    // zwei Klettriemen quer über den Vorfuß
    draht: drahtGeometry(),
    // Zunge/Laschenabdeckung unter der Drahtschnürung
    lasche: patchGeometry(0.35, 0.66, Math.PI * 0.28, Math.PI * 0.72, 0.0022, 12, 8),
    fuehrung: new THREE.BoxGeometry(0.005, 0.0025, 0.007),
    strap2: patchGeometry(0.69, 0.74, Math.PI * 0.12, Math.PI * 0.88, 0.003),
    // Fersenkappe hinten, Zehenkappe vorne (beide dunkel)
    heelCup: patchGeometry(0.0, 0.17, -Math.PI * 0.08, Math.PI * 1.08, 0.002, 12, 22),
    toeCap: patchGeometry(0.9, 1.0, -Math.PI * 0.08, Math.PI * 1.08, 0.0015, 8, 22),
    // Zierstreifen an beiden Seiten
    stripeOut: patchGeometry(0.17, 0.88, Math.PI * 0.1, Math.PI * 0.17, 0.0018, 24, 3),
    stripeIn: patchGeometry(0.17, 0.88, Math.PI * 0.83, Math.PI * 0.9, 0.0018, 24, 3),
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
  // Riemen und Streifen in Trikotfarbe, Fersen- und Zehenkappe dunkel
  add(G.lasche, mats.accent, 0, 0, 0);
  add(G.draht, (mats.draht ||= new THREE.MeshStandardMaterial({ color: '#c9ccd2', metalness: 0.9, roughness: 0.3 })), 0, 0, 0);
  // kleine Drahtführungen links und rechts
  for (let i = 0; i <= 6; i++) {
    const t = 0.36 + i * 0.045;
    const a = i % 2 ? Math.PI * 0.2 : Math.PI * 0.8;
    const p = surf(t, a, 0.004);
    add(G.fuehrung, mats.dial, p[0], p[1], p[2]);
  }
  add(G.strap2, mats.accent, 0, 0, 0);
  add(G.stripeOut, mats.accent, 0, 0, 0);
  add(G.stripeIn, mats.accent, 0, 0, 0);
  add(G.heelCup, mats.sole, 0, 0, 0);
  add(G.toeCap, mats.sole, 0, 0, 0);
  // Drehverschluss oben auf dem Rist (außen)
  const td = 0.4;
  const sd = shape(td);
  const dz = td * LEN - BALL;
  const dy = 0.012 + sd.h * 0.97 + 0.004;
  add(G.dial, mats.dial, 0.014, dy, dz, -0.32, 0, -0.3);
  add(G.dialRing, mats.accent, 0.014, dy + 0.0055, dz, Math.PI / 2 - 0.32, 0, -0.3);
  return g;
}

export function shoeMaterials() {
  return {
    upper: new THREE.MeshPhysicalMaterial({ color: '#f4f4f1', map: oberTextur(), roughness: 0.38, clearcoat: 0.5, clearcoatRoughness: 0.3 }),
    sole: new THREE.MeshStandardMaterial({ color: '#141416', roughness: 0.45, metalness: 0.2 }),
    cleat: new THREE.MeshStandardMaterial({ color: '#c8352c', roughness: 0.6 }),
    dial: new THREE.MeshStandardMaterial({ color: '#1a1a1e', roughness: 0.3, metalness: 0.4 }),
  };
}
