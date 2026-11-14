// Das Auto von Team Blitz: ein Supersportwagen (selbst gebaut) – flach, breit, keilförmig,
// mit getönter Glaskuppel, Heckflügel, seitlichen Lufteinlässen, schmalen Leuchtstreifen und großen Felgen.
// Vorne = +z, Ursprung = Mitte unten (auf der Straße). Räder drehen sich (auto.update(dt, tempo)).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ✏️ Farben des Autos
const LACK = '#b3122a'; // Team-Blitz-Rot
const ZIER = '#d4af37'; // goldener Streifen
const RAD_R = 0.36;
const BREIT = 1.96;

// Weiche Form aus vielen Querschnitten (Loft): für jede Stelle z (vorne/hinten) gibt form(z)
// { breit, oben, unten, einzug } zurück; der Querschnitt ist ein abgerundetes Rechteck (Superellipse),
// oben etwas schmaler (einzug) – so entstehen gewölbte Seiten wie bei einem echten Auto.
// farbe(x, y, z) liefert optional eine Farbe pro Punkt (für Streifen im Lack).
function loft(z0, z1, form, { n = 70, m = 48, rund = 0.32, farbe = null } = {}) {
  const pos = [];
  const col = [];
  const idx = [];
  const c = new THREE.Color();
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const z = z1 + (z0 - z1) * t; // von vorne nach hinten
    const f = form(z);
    const mitte = (f.oben + f.unten) / 2;
    const hh = (f.oben - f.unten) / 2;
    for (let k = 0; k < m; k++) {
      const a = (k / m) * Math.PI * 2;
      const ca = Math.cos(a);
      const sa = Math.sin(a);
      const ex = Math.sign(ca) * Math.abs(ca) ** rund;
      const ey = Math.sign(sa) * Math.abs(sa) ** rund;
      // oben schmaler (Seiten laufen nach innen), unten volle Breite
      const breit = (f.breit / 2) * (ey > 0 ? 1 - f.einzug * ey : 1);
      const x = ex * breit;
      const y = mitte + ey * hh;
      pos.push(x, y, z);
      if (farbe) {
        farbe(x, y, z, f, c);
        col.push(c.r, c.g, c.b);
      }
    }
  }
  for (let i = 0; i < n; i++)
    for (let k = 0; k < m; k++) {
      const a0 = i * m + k;
      const a1 = i * m + ((k + 1) % m);
      const b0 = a0 + m;
      const b1 = a1 + m;
      idx.push(a0, b0, a1, a1, b0, b1);
    }
  // Enden zumachen (vorne und hinten je ein Mittelpunkt)
  for (const [ring, flip] of [[0, false], [n, true]]) {
    const mi = pos.length / 3;
    let sx = 0, sy = 0, sz = 0;
    for (let k = 0; k < m; k++) {
      sx += pos[(ring * m + k) * 3];
      sy += pos[(ring * m + k) * 3 + 1];
      sz += pos[(ring * m + k) * 3 + 2];
    }
    pos.push(sx / m, sy / m, sz / m);
    if (farbe) col.push(col[ring * m * 3], col[ring * m * 3 + 1], col[ring * m * 3 + 2]);
    for (let k = 0; k < m; k++) {
      const a0 = ring * m + k;
      const a1 = ring * m + ((k + 1) % m);
      if (flip) idx.push(mi, a1, a0);
      else idx.push(mi, a0, a1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  if (farbe) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Kurve durch Stützpunkte [z, wert] (weich zwischen den Punkten)
function kurve(punkte) {
  return (z) => {
    if (z >= punkte[0][0]) return punkte[0][1];
    for (let i = 0; i < punkte.length - 1; i++) {
      const [za, va] = punkte[i];
      const [zb, vb] = punkte[i + 1];
      if (z <= za && z >= zb) {
        const t = (za - z) / (za - zb);
        const s = t * t * (3 - 2 * t);
        return va + (vb - va) * s;
      }
    }
    return punkte[punkte.length - 1][1];
  };
}

const RAD_VORNE = 1.42;
const RAD_HINTEN = -1.5;

export function buildAuto() {
  const g = new THREE.Group();
  const lack = new THREE.MeshPhysicalMaterial({ color: LACK, metalness: 0.55, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05 });
  const carbon = new THREE.MeshPhysicalMaterial({ color: '#141519', metalness: 0.4, roughness: 0.35, clearcoat: 0.8 });
  const glas = new THREE.MeshPhysicalMaterial({ color: '#0d1218', metalness: 0.7, roughness: 0.04, clearcoat: 1 });
  const chrom = new THREE.MeshStandardMaterial({ color: '#c9ccd2', metalness: 1, roughness: 0.25 });
  const add = (geo, mat, x = 0, y = 0, z = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };
  const rund = (w, h, d, mat, x, y, z, r = 0.04) => add(new RoundedBoxGeometry(w, h, d, 3, r), mat, x, y, z);

  // ---------- Karosserie: weich geformt, mit ausgestellten Kotflügeln und Radhäusern ----------
  const obenK = kurve([
    [2.45, 0.42], // Bugspitze
    [2.2, 0.56],
    [1.6, 0.68], // lange, flache Haube
    [0.9, 0.76],
    [0.5, 0.8],
    [-0.5, 0.84],
    [-1.5, 0.86],
    [-2.2, 0.92], // Heck mit Abrisskante
    [-2.42, 0.88],
  ]);
  const breitK = kurve([
    [2.45, 1.55],
    [2.2, 1.82],
    [1.8, 1.94],
    [0.6, 1.9],
    [-0.4, 1.86],
    [-1.0, 1.94],
    [-2.0, 1.98],
    [-2.42, 1.84],
  ]);
  const form = (z) => {
    let unten = 0.26;
    let breit = breitK(z);
    // Radhäuser: über den Rädern ist die Karosserie unten ausgeschnitten, Kotflügel etwas breiter
    for (const zc of [RAD_VORNE, RAD_HINTEN]) {
      const d = Math.abs(z - zc);
      const R = RAD_R + 0.1;
      if (d < R) unten = Math.max(unten, RAD_R + Math.sqrt(R * R - d * d) * 0.92);
      breit += 0.07 * Math.max(0, 1 - (d / 0.75) ** 2);
    }
    const oben = obenK(z);
    unten = Math.min(unten, oben - 0.12);
    return { breit, oben, unten, einzug: 0.16 };
  };
  const karosserie = new THREE.MeshPhysicalMaterial({ color: LACK, metalness: 0.55, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05 });
  add(loft(-2.42, 2.45, form, { m: 64, n: 110 }), karosserie);
  // zwei goldene Streifen längs über Haube und Heck (flache Bänder knapp über dem Lack)
  const goldMat = new THREE.MeshPhysicalMaterial({ color: ZIER, metalness: 0.8, roughness: 0.25, clearcoat: 1 });
  for (const sx of [-0.2, 0.2]) {
    const band = (za, zb) =>
      add(loft(zb, za, (z) => ({ breit: 0.11, oben: obenK(z) + 0.004, unten: obenK(z) - 0.03, einzug: 0 }), { n: 50, m: 12, rund: 0.2 }), goldMat, sx, 0, 0);
    band(2.35, 0.62); // Haube bis zur Scheibe
    band(-1.9, -2.38); // Heckdeckel
  }
  // Unterboden (füllt die Mitte zwischen den Radhäusern)
  rund(1.5, 0.08, 4.5, carbon, 0, 0.26, 0, 0.03);
  // Glaskuppel: schmal, tropfenförmig
  const kuppelOben = kurve([
    [0.75, 0.8],
    [0.3, 1.0],
    [-0.15, 1.13],
    [-0.8, 1.16],
    [-1.4, 1.06],
    [-1.95, 0.88],
  ]);
  const kuppelBreit = kurve([
    [0.75, 1.3],
    [0.0, 1.5],
    [-0.9, 1.46],
    [-1.95, 1.2],
  ]);
  add(
    loft(-1.95, 0.75, (z) => ({ breit: kuppelBreit(z), oben: kuppelOben(z), unten: 0.7, einzug: 0.32 }), { n: 40, m: 40, rund: 0.45 }),
    glas,
  );
  // Dach in Lackfarbe über der Kuppel (schmaler Streifen)
  add(
    loft(-1.1, -0.05, (z) => ({ breit: kuppelBreit(z) * 0.62, oben: kuppelOben(z) + 0.012, unten: kuppelOben(z) - 0.03, einzug: 0.2 }), { n: 16, m: 24, rund: 0.4 }),
    lack,
  );

  // ---------- Details ----------
  // seitliche Lufteinlässe hinter den Türen
  for (const sx of [-1, 1]) {
    const lufteinlass = rund(0.08, 0.2, 0.62, carbon, sx * 0.93, 0.6, -0.72, 0.04);
    lufteinlass.rotation.y = sx * 0.06;
  }
  // Frontsplitter, Seitenschweller und Diffusor hinten aus Carbon
  rund(1.9, 0.05, 0.4, carbon, 0, 0.27, 2.2, 0.02);
  for (const sx of [-1, 1]) rund(0.08, 0.07, 2.0, carbon, sx * 0.9, 0.3, -0.04, 0.03);
  rund(1.7, 0.16, 0.35, carbon, 0, 0.36, -2.25, 0.03);
  for (let k = -3; k <= 3; k++) rund(0.025, 0.14, 0.3, carbon, k * 0.22, 0.33, -2.3, 0.01);
  // Heckflügel auf zwei Stützen
  rund(1.85, 0.05, 0.38, carbon, 0, 1.2, -2.1, 0.02);
  for (const sx of [-1, 1]) {
    rund(0.04, 0.3, 0.12, carbon, sx * 0.55, 1.03, -2.08, 0.01);
    rund(0.03, 0.18, 0.42, carbon, sx * 0.92, 1.22, -2.1, 0.01); // Endplatten
  }
  // Scheinwerfer: schmale Leuchtstreifen, Rücklicht: durchgehender Leuchtbalken
  const licht = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#e8f2ff', emissiveIntensity: 1.6 });
  const rueck = new THREE.MeshStandardMaterial({ color: '#ff2a1a', emissive: '#ff1a0a', emissiveIntensity: 1.4 });
  for (const sx of [-1, 1]) {
    const l = rund(0.42, 0.04, 0.06, licht, sx * 0.6, 0.5, 2.43, 0.015);
    l.rotation.y = sx * 0.25;
    // Außenspiegel auf schmalen Armen
    rund(0.14, 0.08, 0.1, carbon, sx * 0.86, 0.9, 0.5, 0.03);
    rund(0.18, 0.02, 0.03, carbon, sx * 0.76, 0.87, 0.5, 0.01);
  }
  rund(1.7, 0.05, 0.05, rueck, 0, 0.82, -2.5, 0.015);
  // vier Endrohre in der Mitte
  for (const sx of [-0.12, 0.12]) {
    const rohr = add(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 14), chrom, sx, 0.45, -2.46);
    rohr.rotation.x = Math.PI / 2;
  }

  // ---------- Große Räder mit Fünfspeichen-Felgen und roten Bremssätteln ----------
  const raeder = [];
  const reifenGeo = new THREE.CylinderGeometry(RAD_R, RAD_R, 0.3, 32);
  reifenGeo.rotateZ(Math.PI / 2);
  const felgeGeo = new THREE.CylinderGeometry(RAD_R * 0.72, RAD_R * 0.72, 0.31, 32, 1, true);
  felgeGeo.rotateZ(Math.PI / 2);
  const reifenMat = new THREE.MeshStandardMaterial({ color: '#111114', roughness: 0.75 });
  const bremse = new THREE.MeshStandardMaterial({ color: '#d8281e', roughness: 0.4 });
  for (const [x, z] of [[-0.84, 1.42], [0.84, 1.42], [-0.84, -1.5], [0.84, -1.5]]) {
    const r = new THREE.Group();
    r.add(new THREE.Mesh(reifenGeo, reifenMat));
    r.add(new THREE.Mesh(felgeGeo, chrom));
    const aussen = Math.sign(x);
    for (let k = 0; k < 5; k++) {
      const speiche = new THREE.Mesh(new THREE.BoxGeometry(0.03, RAD_R * 1.4, 0.07), chrom);
      speiche.rotation.x = (k / 5) * Math.PI * 2;
      speiche.position.x = aussen * 0.14;
      r.add(speiche);
    }
    const nabe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 12), chrom);
    nabe.rotation.z = Math.PI / 2;
    nabe.position.x = aussen * 0.15;
    r.add(nabe);
    r.traverse((o) => o.isMesh && (o.castShadow = true));
    r.position.set(x, RAD_R, z);
    g.add(r);
    raeder.push(r);
    // Bremssattel (dreht sich nicht mit)
    const b = rund(0.06, 0.16, 0.12, bremse, x + aussen * 0.06, RAD_R + 0.12, z - 0.12, 0.02);
    b.rotation.x = 0.6;
  }
  return {
    group: g,
    update(dt, tempo) {
      for (const r of raeder) r.rotation.x += (tempo / RAD_R) * dt;
    },
  };
}
