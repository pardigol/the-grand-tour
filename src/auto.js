// Das Teamauto von Team Blitz (selbst gebaut): weinroter Kombi mit getönten Scheiben, Dachträger und Felgen.
// Vorne = +z, Ursprung = Mitte unten (auf der Straße). Räder drehen sich (auto.update(dt, tempo)).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ✏️ Farben des Autos
const LACK = '#8e2b36'; // Team-Blitz-Rot
const ZIER = '#d4af37'; // goldener Streifen
const RAD_R = 0.34;

export function buildAuto() {
  const g = new THREE.Group();
  const lack = new THREE.MeshPhysicalMaterial({ color: LACK, metalness: 0.5, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.08 });
  const schwarz = new THREE.MeshStandardMaterial({ color: '#16171b', roughness: 0.6 });
  const glas = new THREE.MeshPhysicalMaterial({ color: '#1c2430', metalness: 0.6, roughness: 0.05, clearcoat: 1 });
  const chrom = new THREE.MeshStandardMaterial({ color: '#d7dade', metalness: 1, roughness: 0.2 });
  const rund = (w, h, d, mat, x, y, z, r = 0.08) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
    return m;
  };
  // Karosserie unten, Motorhaube leicht abfallend, Kabine mit Scheiben
  rund(1.86, 0.62, 4.6, lack, 0, 0.62, 0, 0.18);
  const haube = rund(1.8, 0.2, 1.3, lack, 0, 0.98, 1.55, 0.1);
  haube.rotation.x = 0.08;
  rund(1.66, 0.62, 2.7, glas, 0, 1.22, -0.35, 0.2); // Fenster rundherum
  rund(1.7, 0.08, 2.5, lack, 0, 1.55, -0.4, 0.04); // Dach
  // Dachstreben zwischen den Fenstern
  for (const z of [0.95, -0.35, -1.65]) for (const sx of [-1, 1]) rund(0.06, 0.6, 0.08, lack, sx * 0.83, 1.22, z, 0.02);
  // goldener Seitenstreifen
  for (const sx of [-1, 1]) rund(0.02, 0.06, 4.0, new THREE.MeshStandardMaterial({ color: ZIER, metalness: 0.8, roughness: 0.3 }), sx * 0.935, 0.78, 0, 0.01);
  // Dachträger (für die Räder des Teams)
  for (const z of [0.4, -1.1]) rund(1.5, 0.04, 0.06, chrom, 0, 1.63, z, 0.015);
  for (const sx of [-1, 1]) rund(0.05, 0.05, 2.2, chrom, sx * 0.7, 1.62, -0.35, 0.015);
  // Stoßstangen, Grill, Lichter
  rund(1.9, 0.2, 0.25, schwarz, 0, 0.38, 2.3, 0.06);
  rund(1.9, 0.2, 0.25, schwarz, 0, 0.38, -2.3, 0.06);
  rund(1.0, 0.18, 0.05, schwarz, 0, 0.72, 2.31, 0.03);
  const licht = new THREE.MeshStandardMaterial({ color: '#fffbe8', emissive: '#fff3c8', emissiveIntensity: 1.2 });
  const rueck = new THREE.MeshStandardMaterial({ color: '#ff3020', emissive: '#ff1a0a', emissiveIntensity: 0.8 });
  for (const sx of [-1, 1]) {
    rund(0.36, 0.12, 0.06, licht, sx * 0.66, 0.78, 2.3, 0.03);
    rund(0.36, 0.12, 0.06, rueck, sx * 0.66, 0.8, -2.31, 0.03);
    // Außenspiegel
    rund(0.18, 0.12, 0.08, lack, sx * 1.0, 1.1, 0.9, 0.03);
  }
  // Türgriffe
  for (const sx of [-1, 1]) for (const z of [0.35, -0.85]) rund(0.03, 0.03, 0.16, chrom, sx * 0.94, 0.95, z, 0.01);
  // Räder mit Felgen (drehen sich)
  const raeder = [];
  const reifenGeo = new THREE.CylinderGeometry(RAD_R, RAD_R, 0.24, 28);
  reifenGeo.rotateZ(Math.PI / 2);
  const felgeGeo = new THREE.CylinderGeometry(RAD_R * 0.62, RAD_R * 0.62, 0.25, 10);
  felgeGeo.rotateZ(Math.PI / 2);
  for (const [x, z] of [[-0.82, 1.45], [0.82, 1.45], [-0.82, -1.45], [0.82, -1.45]]) {
    const r = new THREE.Group();
    const reifen = new THREE.Mesh(reifenGeo, schwarz);
    reifen.castShadow = true;
    const felge = new THREE.Mesh(felgeGeo, chrom);
    r.add(reifen, felge);
    for (let k = 0; k < 5; k++) {
      const speiche = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.22 * RAD_R * 2.2), schwarz);
      speiche.rotation.x = (k / 5) * Math.PI;
      r.add(speiche);
    }
    r.position.set(x, RAD_R, z);
    g.add(r);
    raeder.push(r);
  }
  return {
    group: g,
    update(dt, tempo) {
      for (const r of raeder) r.rotation.x += (tempo / RAD_R) * dt;
    },
  };
}
