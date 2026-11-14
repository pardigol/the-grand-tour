// Deine eigene Penthouse-Wohnung (aus dem Vertrag mit Team Blitz):
// großes Bett vor einer Wand aus 3D-Pyramiden-Paneelen, Bogenhanf-Pflanzen, Nachttische, Fensterfront über der Stadt
// und dein neues rotes Colnago auf einem Ständer.
// Modelle: Bett (FBX) und Bogenhanf (OBJ) aus dem Ordner „Bed“, umgewandelt nach public/modelle/wohnung2.
// Die Pyramiden-Paneele gab es nur als 3ds-Max-Datei – sie sind hier nachgebaut (Farben aus deren Texturen).
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Bike } from './bike.js';

const BASE = 'modelle/wohnung2/';
// ✏️ Raum (Meter): Fenster vorne bei z = -TIEF/2, Eingang hinten links, Paneel-Wand rechts
export const MEIN_RAUM = { breit: 11, tief: 9, hoch: 3.2 };
export const MEIN_EINGANG = { x: -3.6, z: MEIN_RAUM.tief / 2 - 0.6 };
// ✏️ Farben der Pyramiden-Wand (aus den Paneel-Texturen): Petrolblau mit goldenen Inseln
const PANEEL_FARBEN = { blau: '#3e687a', gold: '#b58a2a' };

let laden = null;
export function loadMeineWohnung() {
  laden ||= (async () => {
    const tl = new THREE.TextureLoader();
    const tex = (n, srgb) => {
      const t = tl.load(BASE + n);
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      return t;
    };
    const [bett, pflanzeText] = await Promise.all([new FBXLoader().loadAsync(BASE + 'bett.fbx'), fetch(BASE + 'pflanze.obj').then((r) => r.text())]);
    // Bett: Zentimeter → Meter, eigene Materialien mit den umgewandelten Texturen
    const bettMat = new THREE.MeshStandardMaterial({ map: tex('bett_farbe.jpg', true), normalMap: tex('bett_normal.jpg'), roughnessMap: tex('bett_rauheit.jpg'), roughness: 1 });
    bettMat.color.setScalar(1.9); // ✏️ Textur ist sehr dunkel: Bettwäsche heller (dunkelblau und grau)
    bett.traverse((o) => {
      if (!o.isMesh) return;
      o.material = bettMat;
      o.castShadow = true;
      o.receiveShadow = true;
    });
    bett.scale.setScalar(0.01);
    // Bogenhanf: Blätter mit Textur, Erde, Topf (weiße Keramik)
    const pflanze = new OBJLoader().parse(pflanzeText.replace(/^l .*$/gm, ''));
    const blatt = new THREE.MeshStandardMaterial({ map: tex('pflanze_farbe.jpg', true), normalMap: tex('pflanze_normal.jpg'), roughness: 0.6, side: THREE.DoubleSide });
    const erde = new THREE.MeshStandardMaterial({ map: tex('erde_farbe.jpg', true), roughness: 1 });
    const topf = new THREE.MeshStandardMaterial({ color: '#efece6', roughness: 0.35 });
    const fuss = new THREE.MeshStandardMaterial({ color: '#b5651d', roughness: 0.5 });
    pflanze.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      o.material = mats.map((m) => (m.name.startsWith('Snake') ? blatt : m.name === 'tierra' ? erde : m.name === 'Plant_por_base_001' ? fuss : topf));
      o.castShadow = true;
      o.receiveShadow = true;
    });
    return { bett, pflanze };
  })().catch((e) => {
    console.warn('Deine Wohnung: Modelle konnten nicht geladen werden', e);
    return null;
  });
  return laden;
}

// Wand aus Pyramiden: jedes Feld eine flache Pyramide mit leicht verschobener Spitze (wie die Paneele)
function pyramidenWand(breite, hoehe, feld = 0.32) {
  const teile = [];
  const blau = new THREE.Color(PANEEL_FARBEN.blau);
  const gold = new THREE.Color(PANEEL_FARBEN.gold);
  const c = new THREE.Color();
  let seed = 21;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const nx = Math.floor(breite / feld);
  const ny = Math.floor(hoehe / feld);
  for (let i = 0; i < nx; i++)
    for (let j = 0; j < ny; j++) {
      const x0 = -breite / 2 + i * feld;
      const y0 = j * feld;
      const tief = 0.03 + r() * 0.06;
      const sx = x0 + feld * (0.3 + r() * 0.4);
      const sy = y0 + feld * (0.3 + r() * 0.4);
      // goldene Inseln: ein paar zusammenhängende Gruppen
      const goldig = Math.sin(i * 0.55) * Math.cos(j * 0.7) + Math.sin((i + j) * 0.3) > 1.15;
      const ecken = [
        [x0, y0],
        [x0 + feld, y0],
        [x0 + feld, y0 + feld],
        [x0, y0 + feld],
      ];
      const pos = [];
      const col = [];
      for (let k = 0; k < 4; k++) {
        const a = ecken[k];
        const b = ecken[(k + 1) % 4];
        pos.push(a[0], a[1], 0, b[0], b[1], 0, sx, sy, tief);
        c.copy(goldig ? gold : blau).multiplyScalar(0.8 + r() * 0.35);
        for (let n = 0; n < 3; n++) col.push(c.r, c.g, c.b);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      g.computeVertexNormals();
      teile.push(g);
    }
  const m = new THREE.Mesh(mergeGeometries(teile), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.15, flatShading: true }));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function bodenTextur() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const g = c.getContext('2d');
  // helles Eichenparkett im Fischgrät-Muster
  g.fillStyle = '#c9a77c';
  g.fillRect(0, 0, 512, 512);
  for (let y = -64; y < 576; y += 32)
    for (let x = -64; x < 576; x += 64) {
      const hell = 0.88 + ((x * 7 + y * 13) % 23) / 100;
      g.fillStyle = `rgb(${Math.round(205 * hell)},${Math.round(170 * hell)},${Math.round(125 * hell)})`;
      g.save();
      g.translate(x + ((y / 32) % 2) * 32, y);
      g.rotate(Math.PI / 4);
      g.fillRect(0, 0, 64, 20);
      g.strokeStyle = 'rgba(70,45,20,0.35)';
      g.strokeRect(0, 0, 64, 20);
      g.restore();
    }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(MEIN_RAUM.breit / 3, MEIN_RAUM.tief / 3);
  t.anisotropy = 8;
  return t;
}

export function buildMeineWohnung(roadWorld, M) {
  const scene = new THREE.Scene();
  const { breit: B, tief: T, hoch: H } = MEIN_RAUM;
  const weiss = new THREE.MeshStandardMaterial({ color: '#f4f1ec', roughness: 0.92 });
  const box = (w, h, d, mat, x, y, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };
  const rund = (w, h, d, mat, x, y, z, r = 0.04) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };

  // ---------- Raum ----------
  const boden = new THREE.Mesh(new THREE.PlaneGeometry(B, T), new THREE.MeshStandardMaterial({ map: bodenTextur(), roughness: 0.5 }));
  boden.rotation.x = -Math.PI / 2;
  boden.receiveShadow = true;
  scene.add(boden);
  box(B, 0.1, T, weiss, 0, H + 0.05, 0);
  box(0.2, H, T, weiss, -B / 2 - 0.1, H / 2, 0);
  box(0.2, H, T, weiss, B / 2 + 0.1, H / 2, 0);
  box(B / 2 + MEIN_EINGANG.x - 0.6, H, 0.2, weiss, (-B / 2 + MEIN_EINGANG.x - 0.6) / 2, H / 2, T / 2 + 0.1);
  box(B / 2 - MEIN_EINGANG.x - 0.6, H, 0.2, weiss, (B / 2 + MEIN_EINGANG.x + 0.6) / 2, H / 2, T / 2 + 0.1);
  box(1.2, H - 2.2, 0.2, weiss, MEIN_EINGANG.x, 2.2 + (H - 2.2) / 2, T / 2 + 0.1);
  // Flur hinter der offenen Tür
  const flur = new THREE.MeshStandardMaterial({ color: '#d8d2c6', roughness: 0.9 });
  box(0.1, 2.6, 2.5, flur, MEIN_EINGANG.x - 0.8, 1.3, T / 2 + 1.35);
  box(0.1, 2.6, 2.5, flur, MEIN_EINGANG.x + 0.8, 1.3, T / 2 + 1.35);
  box(1.7, 2.6, 0.1, flur, MEIN_EINGANG.x, 1.3, T / 2 + 2.6);

  // ---------- Pyramiden-Wand rechts (hinter dem Bett) ----------
  const wand = pyramidenWand(T - 0.4, H - 0.1);
  wand.rotation.y = -Math.PI / 2; // zeigt in den Raum (nach -x)
  wand.position.set(B / 2 - 0.01, 0.05, 0);
  scene.add(wand);

  // ---------- Fensterfront mit Skyline ----------
  const rahmen = new THREE.MeshStandardMaterial({ color: '#1d1f22', roughness: 0.4, metalness: 0.6 });
  for (let k = 0; k <= 5; k++) box(0.08, H, 0.12, rahmen, -B / 2 + (k * B) / 5, H / 2, -T / 2);
  box(B, 0.1, 0.14, rahmen, 0, 0.05, -T / 2);
  box(B, 0.1, 0.14, rahmen, 0, H - 0.05, -T / 2);
  const glas = new THREE.Mesh(new THREE.PlaneGeometry(B, H), new THREE.MeshPhysicalMaterial({ color: '#cfe0ec', roughness: 0.02, transparent: true, opacity: 0.2 }));
  glas.position.set(0, H / 2, -T / 2);
  scene.add(glas);
  const stadt = [new THREE.MeshStandardMaterial({ color: '#a3acba', roughness: 0.9 }), new THREE.MeshStandardMaterial({ color: '#8d97a6', emissive: '#ffd79a', emissiveIntensity: 0.08, roughness: 0.8 })];
  let seed = 3;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 60; i++) {
    const w = 10 + r() * 24;
    const h = 20 + r() * 100;
    box(w, h, w, stadt[i % 2], (r() - 0.5) * 500, -50 + h / 2, -70 - r() * 260);
  }

  // ---------- Bett (Kopfteil an der Pyramiden-Wand) mit Nachttischen und Bogenhanf ----------
  const holz = new THREE.MeshStandardMaterial({ color: '#3a2a1e', roughness: 0.45 });
  const messing = new THREE.MeshStandardMaterial({ color: '#c9a45c', metalness: 0.9, roughness: 0.3 });
  if (M?.bett) {
    const bett = M.bett.clone();
    bett.rotation.y = -Math.PI / 2; // Kopfteil (im Modell bei -z) zur rechten Wand
    bett.position.set(B / 2 - 1.45, 0, 0.3);
    scene.add(bett);
  }
  for (const z of [-1.2, 1.8]) {
    rund(0.55, 0.5, 0.45, holz, B / 2 - 0.4, 0.25, z, 0.03);
    // Nachttischlampe
    box(0.03, 0.4, 0.03, messing, B / 2 - 0.4, 0.7, z);
    const schirm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.2, 18, 1, true), new THREE.MeshStandardMaterial({ color: '#f3ead8', emissive: '#ffdcae', emissiveIntensity: 0.7, side: THREE.DoubleSide }));
    schirm.position.set(B / 2 - 0.4, 0.95, z);
    scene.add(schirm);
    const l = new THREE.PointLight('#ffd9a8', 2.2, 3.5, 2);
    l.position.set(B / 2 - 0.5, 0.95, z);
    scene.add(l);
  }
  const pflanzen = [
    [B / 2 - 0.5, -2.2, 2.6],
    [-B / 2 + 0.6, -T / 2 + 0.7, 3.2],
    [B / 2 - 0.6, -T / 2 + 0.7, 2.8],
    [-B / 2 + 0.7, 2.6, 2.4],
  ];
  if (M?.pflanze)
    for (const [x, z, s] of pflanzen) {
      const p = M.pflanze.clone();
      p.scale.setScalar(s);
      p.rotation.y = x * 1.7 + z;
      p.position.set(x, 0, z);
      scene.add(p);
    }
  // Teppich vor dem Bett
  const teppich = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3.6), new THREE.MeshStandardMaterial({ color: '#e8e1d3', roughness: 1 }));
  teppich.rotation.x = -Math.PI / 2;
  teppich.position.set(B / 2 - 2.2, 0.01, 0.3);
  teppich.receiveShadow = true;
  scene.add(teppich);
  // Sessel am Fenster und kleiner Beistelltisch
  const sessel = new THREE.MeshStandardMaterial({ color: '#c7b39a', roughness: 0.95 });
  rund(0.85, 0.38, 0.8, sessel, -2.6, 0.3, -2.6, 0.08);
  const lehne = rund(0.85, 0.6, 0.2, sessel, -2.6, 0.65, -2.25, 0.08);
  lehne.rotation.x = 0.1;
  const tisch = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.04, 24), holz);
  tisch.position.set(-1.6, 0.5, -2.8);
  tisch.castShadow = true;
  scene.add(tisch);
  box(0.04, 0.48, 0.04, messing, -1.6, 0.24, -2.8);

  // ---------- Dein neues Colnago auf einem Ständer am Fenster ----------
  const rad = new Bike();
  rad.applyLook({ frame: '#c8102e', brand: 'colnago', paint: 'solid', groupset: 'duraace', jersey: '#ffffff' });
  rad.setTires('road');
  rad.rider.visible = false;
  rad.update(0, 0, 0, 0);
  rad.root.position.set(0.6, 0, -3.3);
  rad.root.rotation.y = Math.PI / 2 + 0.35;
  scene.add(rad.root);
  const staender = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.012, 6, 20, Math.PI), rahmen);
  staender.position.copy(rad.root.localToWorld(new THREE.Vector3(0, 0, -0.5)));
  staender.rotation.y = rad.root.rotation.y;
  scene.add(staender);

  // ---------- Licht ----------
  const sky = new Sky();
  sky.scale.setScalar(10000);
  sky.material = roadWorld.sky.material;
  scene.add(sky);
  scene.environment = roadWorld.scene.environment;
  scene.environmentIntensity = 0.5;
  scene.fog = new THREE.FogExp2(new THREE.Color('#d6c7b8'), 0.0035);
  scene.add(new THREE.HemisphereLight('#fff3e2', '#7d6a58', 1.2));
  const sun = new THREE.DirectionalLight('#ffd8b0', 2.2);
  sun.position.set(-7, 8, -16);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -10;
  sc.right = sc.top = 10;
  sc.near = 1;
  sc.far = 45;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  for (const [x, z] of [[-2.5, 1.5], [2.5, -1.5]]) {
    const l = new THREE.PointLight('#ffe7c4', 4, 7, 2);
    l.position.set(x, H - 0.3, z);
    scene.add(l);
  }

  return {
    kind: 'meineWohnung',
    scene,
    sky,
    sun,
    rad,
    cx: false,
    tt: false,
    length: 1,
    update() {},
    hoehe() {
      return 0;
    },
    nearest() {
      return { found: false, s: 0, dist: 0 };
    },
  };
}
