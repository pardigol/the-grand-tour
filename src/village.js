// Ein kleines Dorf an der Landstraße (wird beim Zeitfahren gezeigt):
// Häuser mit Satteldach, eine Kirche mit Turm, Gehwege, Laternen, Wimpelketten und Ortsschilder.
import * as THREE from 'three';

export const VILLAGE_NAME = 'Paulsdorf';

const WALLS = ['#f1e7d3', '#e9d9b8', '#f4f0e6', '#e8c9a6', '#dfe6d6', '#f0d7c8', '#d9e1ea'];
const ROOFS = ['#9c3b2a', '#7a2f22', '#5b4a42', '#a5512f', '#6d3326'];
const SHUTTERS = ['#2f5d3a', '#3b4f73', '#7a2f22', '#5a4632'];

// Hausfassade mit Fenstern, Fensterläden und Tür (eine Textur pro Farbe)
const facadeCache = new Map();
function facadeTexture(wall, shutter, door) {
  const key = wall + shutter + door;
  if (facadeCache.has(key)) return facadeCache.get(key);
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = wall;
  g.fillRect(0, 0, 256, 256);
  // leichter Putz-Schmutz unten
  const grd = g.createLinearGradient(0, 200, 0, 256);
  grd.addColorStop(0, 'rgba(0,0,0,0)');
  grd.addColorStop(1, 'rgba(60,45,30,0.25)');
  g.fillStyle = grd;
  g.fillRect(0, 200, 256, 56);
  const win = (x, y) => {
    g.fillStyle = shutter;
    g.fillRect(x - 22, y, 14, 44);
    g.fillRect(x + 36, y, 14, 44);
    g.fillStyle = '#f7f4ee';
    g.fillRect(x - 6, y - 4, 40, 52);
    g.fillStyle = '#2b3646';
    g.fillRect(x - 2, y, 32, 44);
    g.fillStyle = 'rgba(180,210,240,0.35)';
    g.fillRect(x, y + 2, 12, 18);
    g.fillStyle = '#f7f4ee';
    g.fillRect(x + 12, y, 4, 44);
    g.fillRect(x - 2, y + 20, 32, 4);
    // Blumenkasten
    g.fillStyle = '#6b4a2e';
    g.fillRect(x - 6, y + 48, 40, 7);
    for (let i = 0; i < 6; i++) {
      g.fillStyle = ['#d62839', '#ff6fb5', '#f2d14b'][i % 3];
      g.beginPath();
      g.arc(x - 2 + i * 7, y + 47, 4, 0, Math.PI * 2);
      g.fill();
    }
  };
  win(40, 40);
  win(170, 40);
  win(40, 150);
  // Tür
  g.fillStyle = '#e8e0d0';
  g.fillRect(150, 140, 58, 116);
  g.fillStyle = door;
  g.fillRect(156, 146, 46, 110);
  g.fillStyle = 'rgba(0,0,0,0.25)';
  g.fillRect(162, 156, 15, 40);
  g.fillRect(182, 156, 15, 40);
  g.fillStyle = '#d4b04c';
  g.beginPath();
  g.arc(194, 205, 3, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  facadeCache.set(key, t);
  return t;
}

// Seitenwand: nur zwei Fenster
const sideCache = new Map();
function sideTexture(wall, shutter) {
  const key = wall + shutter;
  if (sideCache.has(key)) return sideCache.get(key);
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = wall;
  g.fillRect(0, 0, 256, 256);
  for (const [x, y] of [
    [60, 60],
    [170, 60],
    [110, 160],
  ]) {
    g.fillStyle = shutter;
    g.fillRect(x - 18, y, 10, 40);
    g.fillRect(x + 32, y, 10, 40);
    g.fillStyle = '#f7f4ee';
    g.fillRect(x - 6, y - 4, 36, 48);
    g.fillStyle = '#2b3646';
    g.fillRect(x - 2, y, 28, 40);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  sideCache.set(key, t);
  return t;
}

// Dachziegel
let roofTex = null;
function roofTexture() {
  if (roofTex) return roofTex;
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 16) {
    g.fillStyle = 'rgba(0,0,0,0.28)';
    g.fillRect(0, y + 13, 128, 3);
    for (let x = (y / 16) % 2 ? 8 : 0; x < 128; x += 16) {
      g.fillStyle = 'rgba(0,0,0,0.12)';
      g.fillRect(x, y, 2, 14);
    }
  }
  roofTex = new THREE.CanvasTexture(c);
  roofTex.wrapS = roofTex.wrapT = THREE.RepeatWrapping;
  roofTex.repeat.set(3, 2);
  return roofTex;
}

// Satteldach als Prisma (First entlang x)
function roofGeometry(w, d, h, over = 0.5) {
  const W = w / 2 + over;
  const D = d / 2 + over;
  const g = new THREE.BufferGeometry();
  const v = [
    // linke Dachfläche
    -W, 0, -D, W, 0, -D, W, h, 0, -W, 0, -D, W, h, 0, -W, h, 0,
    // rechte Dachfläche
    -W, 0, D, -W, h, 0, W, h, 0, -W, 0, D, W, h, 0, W, 0, D,
    // Giebel links / rechts
    -W + over, 0, -D + over, -W + over, h - 0.05, 0, -W + over, 0, D - over,
    W - over, 0, -D + over, W - over, 0, D - over, W - over, h - 0.05, 0,
  ];
  const uv = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0.5, 1, 1, 0, 0, 0, 1, 0, 0.5, 1];
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.addGroup(0, 12, 0);
  g.addGroup(12, 6, 1);
  g.computeVertexNormals();
  return g;
}

function house(rand, wallMat) {
  const g = new THREE.Group();
  const w = 7 + rand() * 4; // entlang der Straße
  const d = 6 + rand() * 2.5;
  const h = 4.8 + rand() * 1.6;
  const wall = WALLS[Math.floor(rand() * WALLS.length)];
  const shutter = SHUTTERS[Math.floor(rand() * SHUTTERS.length)];
  const door = ['#6b4a2e', '#7a2f22', '#2f5d3a', '#3b4f73'][Math.floor(rand() * 4)];
  const plain = wallMat(wall);
  const front = new THREE.MeshStandardMaterial({ map: facadeTexture(wall, shutter, door), roughness: 0.9 });
  const side = new THREE.MeshStandardMaterial({ map: sideTexture(wall, shutter), roughness: 0.9 });
  // Box-Seiten: +x, -x, +y, -y, +z (Front zur Straße), -z
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h + 3, d), [side, side, plain, plain, front, side]);
  body.position.y = (h + 3) / 2 - 3; // 3 m in den Boden, falls der Hang abfällt
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);
  // Sockel
  const base = new THREE.Mesh(new THREE.BoxGeometry(w + 0.12, 3.6, d + 0.12), new THREE.MeshStandardMaterial({ color: '#8f877b', roughness: 1 }));
  base.position.y = -1.5;
  g.add(base);
  const roofCol = ROOFS[Math.floor(rand() * ROOFS.length)];
  const roofMat = new THREE.MeshStandardMaterial({ color: roofCol, map: roofTexture(), roughness: 0.85 });
  const roof = new THREE.Mesh(roofGeometry(w, d, 2.6 + rand() * 1.2), [roofMat, plain]);
  roof.position.y = h;
  roof.castShadow = true;
  g.add(roof);
  // Schornstein
  const chim = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.8, 0.6), new THREE.MeshStandardMaterial({ color: '#7d4b3a', roughness: 1 }));
  chim.position.set((rand() - 0.5) * w * 0.5, h + 1.8, -d * 0.2);
  chim.castShadow = true;
  g.add(chim);
  return { group: g, w, d };
}

function church() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: '#f3efe6', roughness: 0.9 });
  const roofMat = new THREE.MeshStandardMaterial({ color: '#4f4a48', map: roofTexture(), roughness: 0.8 });
  const nave = new THREE.Mesh(new THREE.BoxGeometry(9, 10, 18), white);
  nave.position.set(0, 2, -6);
  nave.castShadow = true;
  g.add(nave);
  const roof = new THREE.Mesh(roofGeometry(18, 9, 5), [roofMat, white]);
  roof.rotation.y = Math.PI / 2;
  roof.position.set(0, 7, -6);
  roof.castShadow = true;
  g.add(roof);
  // Turm mit Zwiebelhaube und Kreuz
  const tower = new THREE.Mesh(new THREE.BoxGeometry(4.2, 22, 4.2), white);
  tower.position.set(0, 8, 4.5);
  tower.castShadow = true;
  g.add(tower);
  const green = new THREE.MeshStandardMaterial({ color: '#4c8a6e', roughness: 0.5, metalness: 0.4 });
  const onion = new THREE.Mesh(new THREE.SphereGeometry(2.6, 16, 12), green);
  onion.scale.set(1, 1.15, 1);
  onion.position.set(0, 20.6, 4.5);
  g.add(onion);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.2, 5, 12), green);
  spire.position.set(0, 25, 4.5);
  g.add(spire);
  const gold = new THREE.MeshStandardMaterial({ color: '#e0b84c', metalness: 1, roughness: 0.3 });
  const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.6, 0.15), gold);
  c1.position.set(0, 28.2, 4.5);
  const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.15), gold);
  c2.position.set(0, 28.5, 4.5);
  g.add(c1, c2);
  // Uhr
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const x = cv.getContext('2d');
  x.fillStyle = '#1d2a3a';
  x.beginPath();
  x.arc(64, 64, 60, 0, Math.PI * 2);
  x.fill();
  x.strokeStyle = '#e0b84c';
  x.lineWidth = 6;
  x.stroke();
  x.lineCap = 'round';
  x.beginPath();
  x.moveTo(64, 64);
  x.lineTo(64, 22);
  x.moveTo(64, 64);
  x.lineTo(92, 74);
  x.stroke();
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const clock = new THREE.Mesh(new THREE.CircleGeometry(1.4, 24), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }));
  clock.position.set(0, 15, 6.62);
  g.add(clock);
  // Kirchenfenster
  const glass = new THREE.MeshStandardMaterial({ color: '#3a4a6a', roughness: 0.3, metalness: 0.3 });
  for (const sx of [-1, 1]) {
    for (let k = 0; k < 3; k++) {
      const wdw = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 3.2), glass);
      wdw.position.set(sx * 4.52, 4.2, -12 + k * 5);
      wdw.rotation.y = (sx * Math.PI) / 2;
      g.add(wdw);
    }
  }
  const doorM = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 3), new THREE.MeshStandardMaterial({ color: '#5a3a24' }));
  doorM.position.set(0, 1.5, 6.62);
  g.add(doorM);
  return g;
}

function townSign(name, crossed) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#f2c230';
  g.fillRect(0, 0, 512, 256);
  g.strokeStyle = '#111';
  g.lineWidth = 14;
  g.strokeRect(14, 14, 484, 228);
  g.fillStyle = '#111';
  g.font = '800 92px "Barlow Condensed", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(name, 256, 120);
  g.font = '600 34px "Barlow Condensed", sans-serif';
  g.fillText('Landkreis Grand Tour', 256, 200);
  if (crossed) {
    g.strokeStyle = '#c4202c';
    g.lineWidth = 22;
    g.beginPath();
    g.moveTo(40, 230);
    g.lineTo(472, 26);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Group();
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 0.05), [
    null,
    null,
    null,
    null,
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }),
    new THREE.MeshStandardMaterial({ color: '#cfcfcf' }),
  ].map((m) => m || new THREE.MeshStandardMaterial({ color: '#cfcfcf' })));
  board.position.y = 2.2;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6), new THREE.MeshStandardMaterial({ color: '#bfc3c8', metalness: 0.8, roughness: 0.3 }));
  pole.position.y = 1.3;
  s.add(board, pole);
  return s;
}

function lamp() {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: '#2b2e33', metalness: 0.6, roughness: 0.4 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 4.2, 8), dark);
  pole.position.y = 2.1;
  const head = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.18, 0.5, 6), dark);
  head.position.y = 4.4;
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshStandardMaterial({ color: '#fff3c4', emissive: '#ffcf6a', emissiveIntensity: 1.2 }));
  light.position.y = 4.25;
  g.add(pole, head, light);
  return g;
}

// Baut das Dorf an die ruhigste (geradeste) Stelle der Strecke. Gibt die Gruppe und die Grundflächen zurück.
export function buildVillage(world) {
  let seed = 4711;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const L = world.length;
  const LEN = 300;
  // Abschnitt mit der geringsten Krümmung suchen (nicht am Start/Ziel)
  const pose = {};
  let best = null;
  for (let s0 = L * 0.18; s0 < L * 0.8 - LEN; s0 += 10) {
    let turn = 0;
    let lake = false;
    world.poseAt(s0, 0, pose);
    let prev = pose.heading;
    for (let s = s0; s <= s0 + LEN; s += 10) {
      world.poseAt(s, 0, pose);
      turn += Math.abs(Math.atan2(Math.sin(pose.heading - prev), Math.cos(pose.heading - prev)));
      prev = pose.heading;
      if (world.lakeAt(pose.x, pose.z, 30)) lake = true;
    }
    if (!lake && (!best || turn < best.turn)) best = { s0, turn };
  }
  const s0 = best ? best.s0 : L * 0.4;
  const root = new THREE.Group();
  root.name = 'dorf';
  const footprints = [];
  const wallMats = new Map();
  const wallMat = (c) => {
    if (!wallMats.has(c)) wallMats.set(c, new THREE.MeshStandardMaterial({ color: c, roughness: 0.95 }));
    return wallMats.get(c);
  };
  const SH = world.SH;
  const place = (obj, s, lat, yawExtra = 0) => {
    world.poseAt(s, lat, pose);
    const sd = Math.sign(lat) || 1;
    // Vorderseite (+z) zur Straße drehen
    const fx = sd * pose.tz;
    const fz = -sd * pose.tx;
    obj.position.set(pose.x, world.terrainHeight(pose.x, pose.z), pose.z);
    obj.rotation.y = Math.atan2(fx, fz) + yawExtra;
    root.add(obj);
    return { x: pose.x, z: pose.z };
  };

  // Häuser links und rechts, mit kleinen Lücken
  const churchS = s0 + LEN * 0.55;
  for (const sd of [-1, 1]) {
    let s = s0 + 25 + rand() * 6;
    while (s < s0 + LEN - 25) {
      if (sd > 0 && Math.abs(s - churchS) < 22) {
        s = churchS + 22;
        continue;
      }
      const h = house(rand, wallMat);
      const lat = sd * (SH + 3.2 + h.d / 2 + rand() * 1.5);
      world.poseAt(s + h.w / 2, lat, pose);
      // nicht auf eine andere Stelle der Strecke bauen
      if (world.clearOfPath(pose.x, pose.z, Math.max(h.w, h.d) / 2 + 1)) {
        const at = place(h.group, s + h.w / 2, lat);
        footprints.push({ x: at.x, z: at.z, r: Math.hypot(h.w, h.d) / 2 + 1.5 });
      }
      s += h.w + 2.5 + rand() * 7;
    }
  }
  // Kirche rechts
  {
    const lat = SH + 14;
    world.poseAt(churchS, lat, pose);
    if (world.clearOfPath(pose.x, pose.z, 13)) {
      const at = place(church(), churchS, lat);
      footprints.push({ x: at.x, z: at.z, r: 16 });
    }
  }
  // Gehwege mit Bordstein auf beiden Seiten
  const walkMat = new THREE.MeshStandardMaterial({ color: '#a7a39b', roughness: 0.95 });
  for (const sd of [-1, 1]) {
    const pos = [];
    const idx = [];
    let n = 0;
    for (let s = s0 + 15; s <= s0 + LEN - 15; s += 2) {
      for (const lat of [SH + 0.2, SH + 2.6]) {
        world.poseAt(s, sd * lat, pose);
        pos.push(pose.x, Math.max(pose.h, world.terrainHeight(pose.x, pose.z)) + 0.12, pose.z);
      }
      if (n > 0) {
        const a = (n - 1) * 2;
        if (sd > 0) idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
        else idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      n++;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const walk = new THREE.Mesh(geo, walkMat);
    walk.receiveShadow = true;
    root.add(walk);
  }
  // Laternen und Wimpelketten über die Straße
  for (let s = s0 + 30; s < s0 + LEN - 30; s += 28) {
    for (const sd of [-1, 1]) place(lamp(), s + (sd > 0 ? 14 : 0), sd * (SH + 2.9));
  }
  const flagCols = ['#d62839', '#f6f6f6', '#2f7cf6', '#f2d14b', '#2bb24c'];
  for (let s = s0 + 45; s < s0 + LEN - 40; s += 55) {
    const a = {};
    const b = {};
    world.poseAt(s, -(SH + 2.9), a);
    world.poseAt(s, SH + 2.9, b);
    const pa = new THREE.Vector3(a.x, a.h + 5.2, a.z);
    const pb = new THREE.Vector3(b.x, b.h + 5.2, b.z);
    const mid = pa.clone().lerp(pb, 0.5);
    mid.y -= 0.9;
    const curve = new THREE.QuadraticBezierCurve3(pa, mid, pb);
    root.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.015, 4), new THREE.MeshStandardMaterial({ color: '#333' })));
    for (let i = 1; i < 18; i++) {
      const p = curve.getPoint(i / 18);
      const flag = new THREE.Mesh(
        new THREE.ConeGeometry(0.18, 0.45, 3),
        new THREE.MeshStandardMaterial({ color: flagCols[i % flagCols.length], side: THREE.DoubleSide }),
      );
      flag.position.copy(p);
      flag.position.y -= 0.25;
      flag.rotation.x = Math.PI;
      root.add(flag);
    }
  }
  // Ortsschilder am Ein- und Ausgang (rechts in Fahrtrichtung)
  {
    // Schild schaut der ankommenden Fahrerin entgegen
    for (const [s, crossed] of [
      [s0 + 8, false],
      [s0 + LEN - 8, true],
    ]) {
      const sign = townSign(VILLAGE_NAME, crossed);
      place(sign, s, SH + 1.2);
      world.poseAt(s, 0, pose);
      sign.rotation.y = Math.atan2(-pose.tx, -pose.tz);
    }
  }
  // Büsche und Bäume am Gehweg wegnehmen
  for (let s = s0 + 10; s <= s0 + LEN - 10; s += 4) {
    for (const sd of [-1, 1]) {
      world.poseAt(s, sd * (SH + 1.6), pose);
      footprints.push({ x: pose.x, z: pose.z, r: 2.4 });
    }
  }
  return { group: root, footprints, s0, len: LEN };
}
