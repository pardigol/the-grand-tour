// Das weiße Schloss im Schneetal: Mauern, Ecktürme, Tor und ein hoher Turm in der Mitte.
// Modelle: Schloss-Baukasten aus Pauls Ordner „Nicht Löschen(Paul)“ (Türme, Mauern, Tor), liegen in public/modelle/schloss.
// Farben setzen wir selbst: weiße Mauern, blaue Dächer mit goldenen Spitzen, rote Fahnen, dunkle Umrisslinien.
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const BASE = 'modelle/schloss/';
const TEILE = ['LargeTower', 'PointyTower', 'TallWall', 'TallWallEntrance', 'LargeSquareTower', 'Tower', 'Banner', 'SmallTower'];

// ✏️ Farben des Schlosses
const FARBEN = {
  LightRock: '#f6f1e6', // Mauern: warmes Weiß
  DarkRock: '#c4bdb0', // Sockel und Zierbänder: hellgrauer Stein
  Black: '#26324f', // Fenster und Türen: dunkles Nachtblau
  Celing: '#2f63b8', // Turmdach: kräftiges Blau
  Banner: '#d23a2f', // Fahnen: rot
  LightWood: '#9b6a3c', // Holztor
  DarkWood: '#6b4a2b',
};
const GOLD = new THREE.Color('#f0c24a'); // goldene Spitzen auf den Dächern
const STEIN_UNTEN = new THREE.Color('#d9d6cf'); // Mauerfuß etwas grauer
const DACH_OBEN = new THREE.Color('#5f92e0'); // Dach wird nach oben heller
const KONTUR = '#27304a'; // ✏️ Farbe der Umrisslinien
const S = 5; // Baukasten-Maß → Meter

function farbKey(name = '') {
  return Object.keys(FARBEN).find((k) => name.startsWith(k)) || 'LightRock';
}

// kleiner Zufall pro Dreieck, immer gleich (damit die Steine leicht unterschiedlich hell sind)
function zufall(i) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

async function teilLaden(name) {
  const text = await fetch(BASE + name + '.obj').then((r) => r.text());
  const group = new OBJLoader().parse(text.replace(/^l .*$/gm, ''));
  const teile = [];
  group.updateMatrixWorld(true);
  group.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    const keys = new Array(g.attributes.position.count);
    for (const gr of groups) for (let i = gr.start; i < gr.start + gr.count; i++) keys[i] = farbKey(mats[gr.materialIndex]?.name);
    g.deleteAttribute('uv');
    g.clearGroups();
    if (!g.attributes.normal) g.computeVertexNormals();
    teile.push({ g, keys });
  });
  // Höhe des Teils (für Farbverläufe)
  let yMin = Infinity;
  let yMax = -Infinity;
  let dMin = Infinity;
  let dMax = -Infinity;
  for (const { g, keys } of teile) {
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      yMin = Math.min(yMin, p.getY(i));
      yMax = Math.max(yMax, p.getY(i));
      if (keys[i] === 'Celing') {
        dMin = Math.min(dMin, p.getY(i));
        dMax = Math.max(dMax, p.getY(i));
      }
    }
  }
  const c = new THREE.Color();
  const basis = Object.fromEntries(Object.entries(FARBEN).map(([k, v]) => [k, new THREE.Color(v)]));
  let tri = 0;
  for (const { g, keys } of teile) {
    const p = g.attributes.position;
    const col = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i += 3, tri++) {
      const key = keys[i];
      const y = (p.getY(i) + p.getY(i + 1) + p.getY(i + 2)) / 3;
      c.copy(basis[key]);
      if (key === 'LightRock') {
        // unten etwas grauer, jeder Stein minimal anders
        c.lerp(STEIN_UNTEN, 1 - Math.min(1, (y - yMin) / Math.max(0.5, (yMax - yMin) * 0.45)));
        c.multiplyScalar(0.94 + zufall(tri) * 0.08);
      } else if (key === 'DarkRock') {
        c.multiplyScalar(0.93 + zufall(tri) * 0.1);
      } else if (key === 'Celing') {
        const t = (y - dMin) / Math.max(1e-3, dMax - dMin);
        c.lerp(DACH_OBEN, t * 0.7);
        if (t > 0.9 && dMax - dMin > 0.3) c.copy(GOLD); // goldene Spitze
        c.multiplyScalar(0.95 + zufall(tri) * 0.07);
      }
      for (let k = 0; k < 3; k++) c.toArray(col, (i + k) * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  }
  const geo = mergeGeometries(teile.map((t) => t.g));
  geo.scale(S, S, S);
  // Umrisslinien: nur echte Kanten (Knick > 28°), nicht jede Dreieckskante
  geo.userData.kanten = new THREE.EdgesGeometry(geo, 28);
  return geo;
}

let laden = null;
export function loadCastle() {
  laden ||= Promise.all(TEILE.map(teilLaden))
    .then((geos) => Object.fromEntries(TEILE.map((n, i) => [n, geos[i]])))
    .catch((e) => {
      console.warn('Schloss konnte nicht geladen werden', e);
      return null;
    });
  return laden;
}

// Baut das Schloss. Ursprung = Mitte des Hofs, das Tor zeigt nach +z.
export function buildCastle(M) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75 });
  const linie = new THREE.LineBasicMaterial({ color: KONTUR, transparent: true, opacity: 0.85 });
  const dachMat = new THREE.MeshStandardMaterial({ color: FARBEN.Celing, roughness: 0.55, flatShading: true });
  const goldMat = new THREE.MeshStandardMaterial({ color: GOLD, roughness: 0.3, metalness: 0.7 });
  // Spitzdach (blau, mit goldener Kugel) auf einen Turm setzen; ecken = 4 für den viereckigen Turm
  const dach = (m, name, ecken = 10) => {
    const bb = (M[name].boundingBox ||= (M[name].computeBoundingBox(), M[name].boundingBox));
    const r = (Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z) / 2) * (ecken === 4 ? 1.1 : 0.98);
    const h = r * (ecken === 4 ? 1.6 : 2.3);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, ecken), dachMat);
    if (ecken === 4) cone.rotation.y = Math.PI / 4;
    cone.position.set((bb.max.x + bb.min.x) / 2, bb.max.y - S * 0.12 + h / 2, (bb.max.z + bb.min.z) / 2);
    cone.castShadow = true;
    cone.add(new THREE.LineSegments(new THREE.EdgesGeometry(cone.geometry, 20), linie));
    const kugel = new THREE.Mesh(new THREE.SphereGeometry(r * 0.12, 10, 8), goldMat);
    kugel.position.y = h / 2 + r * 0.08;
    cone.add(kugel);
    m.add(cone);
  };
  const setze = (name, x, z, rotY = 0, scale = 1, y = 0) => {
    const m = new THREE.Mesh(M[name], mat);
    m.position.set(x * S, y, z * S);
    m.rotation.y = rotY;
    m.scale.setScalar(scale);
    m.castShadow = true;
    m.receiveShadow = true;
    if (M[name].userData.kanten) m.add(new THREE.LineSegments(M[name].userData.kanten, linie));
    g.add(m);
    return m;
  };
  const W = 1.53; // Breite eines Mauerstücks (Baukasten-Maß)
  const N = 5; // Mauerstücke je Seite
  const H = (N * W) / 2;
  for (let k = 0; k < N; k++) {
    const p = -H + W / 2 + k * W;
    setze(k === 2 ? 'TallWallEntrance' : 'TallWall', p, H); // vorne, Mitte = Tor
    setze('TallWall', p, -H, Math.PI); // hinten
    setze('TallWall', H, p, Math.PI / 2); // rechts
    setze('TallWall', -H, p, -Math.PI / 2); // links
  }
  // Ecktürme
  for (const [x, z] of [
    [-H, -H],
    [H, -H],
    [-H, H],
    [H, H],
  ])
    dach(setze('LargeTower', x, z, 0, 1.15), 'LargeTower');
  // Tortürme rechts und links vom Tor
  dach(setze('SmallTower', -W * 0.75, H + 0.1, 0, 1.3), 'SmallTower');
  dach(setze('SmallTower', W * 0.75, H + 0.1, 0, 1.3), 'SmallTower');
  // Hauptgebäude: viereckiger Turm, daneben der hohe Spitzturm und zwei kleinere Türme
  dach(setze('LargeSquareTower', -0.9, -0.8, 0, 1.5), 'LargeSquareTower', 4);
  setze('PointyTower', 1.2, -1.2, 0, 1.6);
  dach(setze('Tower', 1.7, 1.0, 0, 1.1), 'Tower');
  dach(setze('Tower', -1.9, 1.2, 0, 0.9), 'Tower');
  // Fahnen am Tor
  setze('Banner', -W * 0.75, H + 0.45, 0, 1.2, 2.2 * S);
  setze('Banner', W * 0.75, H + 0.45, 0, 1.2, 2.2 * S);
  // Sockel: weißer Unterbau, damit das Schloss am Hang nicht in der Luft hängt
  const sockel = new THREE.Mesh(
    new THREE.BoxGeometry(2 * H * S + 6, 14, 2 * H * S + 6),
    new THREE.MeshStandardMaterial({ color: '#e9e7e1', roughness: 0.9 }),
  );
  sockel.position.y = -7.02;
  sockel.receiveShadow = true;
  g.add(sockel);
  return { group: g, radius: H * S + 8 };
}
