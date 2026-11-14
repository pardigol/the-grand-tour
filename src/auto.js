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

// Seitenansicht (z = vorne/hinten, y = oben) als Fläche, quer zur Fahrtrichtung in die Breite gezogen
function profil(punkte, breite, bevel = 0.06) {
  const s = new THREE.Shape();
  punkte.forEach(([z, y], i) => (i ? s.lineTo(z, y) : s.moveTo(z, y)));
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: breite - 2 * bevel, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 12 });
  // Form liegt in x/y (x = Länge), Breite in z → drehen: Länge nach z, Breite nach x
  g.translate(0, 0, -(breite - 2 * bevel) / 2);
  g.rotateY(-Math.PI / 2);
  return g;
}

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

  // ---------- Karosserie: flacher Keil ----------
  add(
    profil(
      [
        [2.3, 0.3], // Bugspitze unten
        [2.4, 0.46],
        [2.05, 0.6], // flache, lange Haube
        [1.2, 0.74],
        [0.55, 0.82],
        [-0.4, 0.86],
        [-1.6, 0.88],
        [-2.25, 0.93], // Heck mit Abrisskante
        [-2.42, 0.78],
        [-2.35, 0.3],
      ],
      BREIT,
    ),
    lack,
  );
  // Glaskuppel (Cockpit) – schmaler als die Karosserie
  add(
    profil(
      [
        [0.65, 0.8],
        [-0.15, 1.14],
        [-0.95, 1.16],
        [-1.85, 0.9],
      ],
      1.42,
      0.08,
    ),
    glas,
  );
  // Dachstreifen in Lackfarbe über der Kuppel
  add(profil([[-0.1, 1.15], [-0.95, 1.17], [-1.0, 1.12], [-0.15, 1.1]], 0.9, 0.03), lack, 0, 0.025, 0);
  // goldene Zierstreifen über Haube und Dach
  for (const sx of [-0.18, 0.18]) add(profil([[2.3, 0.47], [2.05, 0.61], [1.2, 0.75], [0.6, 0.83], [0.6, 0.835], [1.2, 0.755], [2.05, 0.615], [2.3, 0.475]], 0.08, 0.005), new THREE.MeshStandardMaterial({ color: ZIER, metalness: 0.8, roughness: 0.3 }), sx, 0.065, 0);

  // ---------- Details ----------
  // seitliche Lufteinlässe hinter den Türen
  for (const sx of [-1, 1]) rund(0.06, 0.24, 0.7, carbon, sx * (BREIT / 2 + 0.005), 0.6, -0.95, 0.03);
  // Frontsplitter, Seitenschweller und Diffusor hinten aus Carbon
  rund(1.9, 0.05, 0.4, carbon, 0, 0.27, 2.2, 0.02);
  for (const sx of [-1, 1]) rund(0.08, 0.08, 2.4, carbon, sx * (BREIT / 2 - 0.02), 0.32, 0.0, 0.03);
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
