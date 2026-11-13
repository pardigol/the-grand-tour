// Das weiße Schloss im Schneetal: Mauern, Ecktürme, Tor und ein hoher Turm in der Mitte.
// Modelle: Schloss-Baukasten aus Pauls Ordner „Nicht Löschen(Paul)“ (Türme, Mauern, Tor), liegen in public/modelle/schloss.
// Farben setzen wir selbst: weiße Mauern, dunkelblaue Dächer, dunkle Fenster.
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const BASE = 'modelle/schloss/';
const TEILE = ['LargeTower', 'PointyTower', 'TallWall', 'TallWallEntrance', 'LargeSquareTower', 'Tower', 'Banner', 'SmallTower'];

// ✏️ Farben des Schlosses
const FARBEN = {
  LightRock: '#f4f3ef', // Mauern: weiß
  DarkRock: '#3b4f78', // Dächer und Turmspitzen: dunkelblau
  Black: '#1f2433', // Fenster und Türen
  Celing: '#d9d4ca',
  Banner: '#c8352c',
  LightWood: '#a37b4c',
  DarkWood: '#6b4a2b',
};
const S = 5; // Baukasten-Maß → Meter

function farbeVon(name = '') {
  const key = Object.keys(FARBEN).find((k) => name.startsWith(k));
  return new THREE.Color(key ? FARBEN[key] : '#f4f3ef');
}

async function teilLaden(name) {
  const text = await fetch(BASE + name + '.obj').then((r) => r.text());
  const group = new OBJLoader().parse(text.replace(/^l .*$/gm, ''));
  const geos = [];
  group.updateMatrixWorld(true);
  group.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    const col = new Float32Array(g.attributes.position.count * 3);
    for (const gr of groups) {
      const c = farbeVon(mats[gr.materialIndex]?.name);
      for (let i = gr.start; i < gr.start + gr.count; i++) c.toArray(col, i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.deleteAttribute('uv');
    g.clearGroups();
    if (!g.attributes.normal) g.computeVertexNormals();
    geos.push(g);
  });
  const geo = mergeGeometries(geos);
  geo.scale(S, S, S);
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
  const setze = (name, x, z, rotY = 0, scale = 1, y = 0) => {
    const m = new THREE.Mesh(M[name], mat);
    m.position.set(x * S, y, z * S);
    m.rotation.y = rotY;
    m.scale.setScalar(scale);
    m.castShadow = true;
    m.receiveShadow = true;
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
    setze('LargeTower', x, z, 0, 1.15);
  // Tortürme rechts und links vom Tor
  setze('SmallTower', -W * 0.75, H + 0.1, 0, 1.3);
  setze('SmallTower', W * 0.75, H + 0.1, 0, 1.3);
  // Hauptgebäude: viereckiger Turm, daneben der hohe Spitzturm und zwei kleinere Türme
  setze('LargeSquareTower', -0.9, -0.8, 0, 1.5);
  setze('PointyTower', 1.2, -1.2, 0, 1.6);
  setze('Tower', 1.7, 1.0, 0, 1.1);
  setze('Tower', -1.9, 1.2, 0, 0.9);
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
