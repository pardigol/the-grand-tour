// Jonas' Penthouse-Wohnung: großer heller Raum, Holzboden, eine Fensterfront mit Blick über die Stadt,
// Sofa, Tisch, Pflanzen – und überall an den Wänden hängen Rennräder.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { Bike } from './bike.js';

// ✏️ Raumgröße (Meter): x = Breite, z = Tiefe. Fenster vorne bei z = -TIEF/2, Eingang hinten links.
export const RAUM = { breit: 12, tief: 10, hoch: 3.3 };
export const EINGANG = { x: -4.0, z: RAUM.tief / 2 - 0.6 };

// ✏️ Räder an den Wänden: wand = 'links' | 'rechts' | 'hinten', pos = Platz entlang der Wand
const RAEDER = [
  { wand: 'links', pos: -2.6, look: { frame: '#c8102e', brand: 'colnago', paint: 'solid', groupset: 'duraace' } }, // rotes Colnago
  { wand: 'links', pos: 1.6, look: { frame: '#3fbf3f', brand: 'canyon', paint: 'team', groupset: 'red' } }, // Canyon sprintergrün, Team-Lackierung
  { wand: 'rechts', pos: -2.6, look: { frame: '#16161b', brand: 'cervelo', paint: 'solid', groupset: 'force' } },
  { wand: 'rechts', pos: 1.6, look: { frame: '#f6f6f6', brand: 'rose', paint: 'rainbow', groupset: 'ultegra' } },
  { wand: 'hinten', pos: 1.2, look: { frame: '#2f7cf6', brand: 'canyon', paint: 'solid', groupset: '105' } },
  { wand: 'hinten', pos: 3.9, look: { frame: '#d4af37', brand: 'colnago', paint: 'team', groupset: 'duraace' } },
];

function holzTextur() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const g = c.getContext('2d');
  for (let i = 0; i < 8; i++) {
    const hell = 0.85 + Math.random() * 0.25;
    g.fillStyle = `rgb(${Math.round(176 * hell)},${Math.round(128 * hell)},${Math.round(84 * hell)})`;
    g.fillRect(0, i * 64, 512, 64);
    // Maserung
    g.strokeStyle = 'rgba(80,50,25,0.18)';
    for (let k = 0; k < 6; k++) {
      g.beginPath();
      const y = i * 64 + 6 + Math.random() * 52;
      g.moveTo(0, y);
      for (let x = 0; x <= 512; x += 32) g.lineTo(x, y + Math.sin(x * 0.02 + k) * 3);
      g.stroke();
    }
    g.fillStyle = 'rgba(40,25,10,0.5)';
    g.fillRect(0, i * 64, 512, 2);
    g.fillRect(((i * 197) % 512), i * 64, 2, 64);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(RAUM.breit / 4, RAUM.tief / 4);
  t.anisotropy = 8;
  return t;
}

export function buildWohnung(roadWorld) {
  const scene = new THREE.Scene();
  const { breit: B, tief: T, hoch: H } = RAUM;
  const weiss = new THREE.MeshStandardMaterial({ color: '#f2efe9', roughness: 0.92 });
  const box = (w, h, d, mat, x, y, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };

  // ---------- Raum ----------
  const boden = new THREE.Mesh(new THREE.PlaneGeometry(B, T), new THREE.MeshStandardMaterial({ map: holzTextur(), roughness: 0.55 }));
  boden.rotation.x = -Math.PI / 2;
  boden.receiveShadow = true;
  scene.add(boden);
  box(B, 0.1, T, weiss, 0, H + 0.05, 0); // Decke
  box(0.2, H, T, weiss, -B / 2 - 0.1, H / 2, 0); // links
  box(0.2, H, T, weiss, B / 2 + 0.1, H / 2, 0); // rechts
  // hinten mit Eingangstür
  box(B / 2 + EINGANG.x - 0.6, H, 0.2, weiss, (-B / 2 + EINGANG.x - 0.6) / 2, H / 2, T / 2 + 0.1);
  box(B / 2 - EINGANG.x - 0.6, H, 0.2, weiss, (B / 2 + EINGANG.x + 0.6) / 2, H / 2, T / 2 + 0.1);
  box(1.2, H - 2.2, 0.2, weiss, EINGANG.x, 2.2 + (H - 2.2) / 2, T / 2 + 0.1);
  const tuer = box(1.1, 2.15, 0.06, new THREE.MeshStandardMaterial({ color: '#3a2a1e', roughness: 0.6 }), EINGANG.x + 0.5, 1.08, T / 2 + 0.05);
  tuer.rotation.y = -1.2; // offen
  tuer.position.x = EINGANG.x - 0.55 + Math.cos(1.2) * 0.55;
  tuer.position.z = T / 2 - Math.sin(1.2) * 0.55;
  // Sockelleisten
  const leiste = new THREE.MeshStandardMaterial({ color: '#d8d3ca', roughness: 0.7 });
  box(0.03, 0.1, T, leiste, -B / 2 + 0.015, 0.05, 0);
  box(0.03, 0.1, T, leiste, B / 2 - 0.015, 0.05, 0);

  // ---------- Fensterfront mit Blick über die Stadt ----------
  const rahmen = new THREE.MeshStandardMaterial({ color: '#1d1f22', roughness: 0.4, metalness: 0.6 });
  const glas = new THREE.MeshPhysicalMaterial({ color: '#cfe0ec', roughness: 0.02, metalness: 0, transmission: 0.95, transparent: true, opacity: 0.25 });
  const scheibe = new THREE.Mesh(new THREE.PlaneGeometry(B, H), glas);
  scheibe.position.set(0, H / 2, -T / 2);
  scene.add(scheibe);
  for (let k = 0; k <= 6; k++) box(0.08, H, 0.12, rahmen, -B / 2 + (k * B) / 6, H / 2, -T / 2);
  box(B, 0.1, 0.14, rahmen, 0, 0.05, -T / 2);
  box(B, 0.1, 0.14, rahmen, 0, H - 0.05, -T / 2);
  // Skyline draußen: viele Hochhäuser in der Tiefe, mit hellen Fenstern
  const stadtMat = new THREE.MeshStandardMaterial({ color: '#8d97a6', roughness: 0.9 });
  const fensterMat = new THREE.MeshStandardMaterial({ color: '#2a3140', emissive: '#ffd79a', emissiveIntensity: 0.25, roughness: 0.4 });
  let seed = 7;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 70; i++) {
    const w = 10 + r() * 22;
    const h = 20 + r() * 90;
    const x = (r() - 0.5) * 520;
    const z = -40 - r() * 260;
    box(w, h, w, i % 3 ? stadtMat : fensterMat, x, -45 + h / 2, z);
  }

  // ---------- Möbel ----------
  const stoff = new THREE.MeshStandardMaterial({ color: '#3d4553', roughness: 0.95 });
  // Sofa (Blick zum Fenster)
  box(3.2, 0.42, 1.0, stoff, 0.5, 0.21, 1.2);
  box(3.2, 0.5, 0.25, stoff, 0.5, 0.55, 1.62);
  box(0.25, 0.62, 1.0, stoff, -1.1, 0.31, 1.2);
  box(0.25, 0.62, 1.0, stoff, 2.1, 0.31, 1.2);
  // Couchtisch und Teppich
  box(1.4, 0.06, 0.8, new THREE.MeshStandardMaterial({ color: '#2b2118', roughness: 0.5 }), 0.5, 0.42, -0.2);
  for (const [x, z] of [[-0.1, -0.5], [1.1, -0.5], [-0.1, 0.1], [1.1, 0.1]]) box(0.05, 0.4, 0.05, rahmen, x, 0.2, z);
  const teppich = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.2), new THREE.MeshStandardMaterial({ color: '#b9a98f', roughness: 1 }));
  teppich.rotation.x = -Math.PI / 2;
  teppich.position.set(0.5, 0.01, 0.4);
  teppich.receiveShadow = true;
  scene.add(teppich);
  // Pflanzen in Töpfen
  const topf = new THREE.MeshStandardMaterial({ color: '#e7e2d9', roughness: 0.8 });
  const blatt = new THREE.MeshStandardMaterial({ color: '#3f7d34', roughness: 0.8, flatShading: true });
  for (const [x, z, s] of [[-5.3, -4.3, 1.1], [5.3, -4.3, 1], [5.3, 4.3, 0.9]]) {
    const t = box(0.5 * s, 0.6 * s, 0.5 * s, topf, x, 0.3 * s, z);
    t.geometry = new THREE.CylinderGeometry(0.28 * s, 0.22 * s, 0.6 * s, 16);
    const busch = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6 * s, 1), blatt);
    busch.position.set(x, 1.0 * s, z);
    busch.scale.y = 1.4;
    busch.castShadow = true;
    scene.add(busch);
  }
  // Pokal-Regal an der Rückwand (rechts der Tür)
  const regal = new THREE.MeshStandardMaterial({ color: '#2b2118', roughness: 0.5 });
  const gold = new THREE.MeshStandardMaterial({ color: '#d4af37', metalness: 0.9, roughness: 0.25 });
  for (const y of [1.0, 1.5]) box(1.8, 0.04, 0.3, regal, -1.8, y, T / 2 - 0.15);
  for (const [x, y] of [[-2.4, 1.02], [-1.8, 1.02], [-1.2, 1.02], [-2.1, 1.52], [-1.5, 1.52]]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.04, 0.22, 12), gold);
    p.position.set(x, y + 0.13, T / 2 - 0.15);
    p.castShadow = true;
    scene.add(p);
  }

  // ---------- Räder an den Wänden ----------
  const raeder = [];
  const halter = new THREE.MeshStandardMaterial({ color: '#1d1f22', roughness: 0.4, metalness: 0.7 });
  for (const r of RAEDER) {
    const b = new Bike();
    b.applyLook({ ...r.look, jersey: '#ffffff' });
    b.setTires('road');
    b.rider.visible = false;
    b.update(0, 0, 0, 0);
    const y = 1.05;
    // Das Rad hängt mit der Seite zum Raum, Vorderrad zeigt mal nach links, mal nach rechts
    if (r.wand === 'links') {
      b.root.position.set(-B / 2 + 0.3, y, r.pos);
      b.root.rotation.y = 0;
    } else if (r.wand === 'rechts') {
      b.root.position.set(B / 2 - 0.3, y, r.pos);
      b.root.rotation.y = Math.PI;
    } else {
      b.root.position.set(r.pos, y, T / 2 - 0.3);
      b.root.rotation.y = Math.PI / 2;
    }
    scene.add(b.root);
    b.root.updateMatrixWorld(true);
    // zwei Wandhaken unter dem Oberrohr
    for (const d of [-0.2, 0.3]) {
      const hk = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), halter);
      hk.position.copy(b.root.localToWorld(new THREE.Vector3(0, 0.79, d)));
      if (r.wand === 'links') hk.position.x = -B / 2 + 0.03;
      else if (r.wand === 'rechts') hk.position.x = B / 2 - 0.03;
      else hk.position.z = T / 2 - 0.03;
      hk.scale.set(r.wand === 'hinten' ? 1 : 4, 1, r.wand === 'hinten' ? 4 : 1);
      scene.add(hk);
    }
    raeder.push(b);
  }

  // ---------- Licht ----------
  const sky = new Sky();
  sky.scale.setScalar(10000);
  sky.material = roadWorld.sky.material;
  scene.add(sky);
  scene.environment = roadWorld.scene.environment;
  scene.environmentIntensity = 0.5;
  scene.fog = new THREE.FogExp2(new THREE.Color('#d6c7b8'), 0.0035);
  scene.add(new THREE.HemisphereLight('#fff6ea', '#7d6a58', 1.4));
  // Sonne fällt durch die Fensterfront herein
  const sun = new THREE.DirectionalLight('#ffe2c0', 2.4);
  sun.position.set(-6, 9, -18);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -12;
  sc.right = sc.top = 12;
  sc.near = 1;
  sc.far = 50;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  // Deckenspots
  for (const x of [-4.5, 0, 4.5])
    for (const z of [-2.5, 2.5]) {
      const l = new THREE.PointLight('#ffe7c4', 6, 7, 2);
      l.position.set(x, H - 0.25, z);
      scene.add(l);
      const spot = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.04, 14), new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff3dc', emissiveIntensity: 1.5 }));
      spot.position.set(x, H - 0.02, z);
      scene.add(spot);
    }

  return {
    kind: 'wohnung',
    scene,
    sky,
    sun,
    raeder,
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
