// Jonas' Penthouse-Wohnung: großer heller Raum, Holzboden, eine Fensterfront mit Blick über die Stadt,
// Sofa, Tisch, Pflanzen – und überall an den Wänden hängen Rennräder.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { Bike } from './bike.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

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
  // ---------- Eingangstür: Zarge, Türblatt mit Kassetten und Klinke (steht offen), dahinter ein Flur ----------
  {
    const zarge = new THREE.MeshStandardMaterial({ color: '#f7f5f0', roughness: 0.6 });
    const blattMat = new THREE.MeshStandardMaterial({ color: '#2f2620', roughness: 0.55 });
    const ZB = 1.2; // Breite der Öffnung
    const ZH = 2.2;
    const zx = EINGANG.x;
    const zz = T / 2;
    // Zarge (links, rechts, oben) mit etwas Tiefe
    box(0.08, ZH, 0.26, zarge, zx - ZB / 2 - 0.04, ZH / 2, zz + 0.05);
    box(0.08, ZH, 0.26, zarge, zx + ZB / 2 + 0.04, ZH / 2, zz + 0.05);
    box(ZB + 0.16, 0.08, 0.26, zarge, zx, ZH + 0.04, zz + 0.05);
    // Türblatt an Scharnieren links, nach innen zur linken Wand geöffnet (nicht im Weg)
    const tuer = new THREE.Group();
    const blatt = new THREE.Mesh(new THREE.BoxGeometry(ZB - 0.04, ZH - 0.04, 0.045), blattMat);
    blatt.position.set((ZB - 0.04) / 2, (ZH - 0.04) / 2, 0);
    blatt.castShadow = true;
    tuer.add(blatt);
    // zwei erhabene Kassetten auf der Innenseite
    for (const [y, h] of [[0.62, 0.9], [1.6, 0.85]]) {
      const k = new THREE.Mesh(new THREE.BoxGeometry(ZB - 0.3, h, 0.012), new THREE.MeshStandardMaterial({ color: '#3a2f27', roughness: 0.5 }));
      k.position.set((ZB - 0.04) / 2, y, -0.028);
      tuer.add(k);
    }
    // Klinke und Schlossrosette
    const metall = new THREE.MeshStandardMaterial({ color: '#c9ccd2', metalness: 0.9, roughness: 0.25 });
    const rosette = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.012, 16), metall);
    rosette.rotation.x = Math.PI / 2;
    rosette.position.set(ZB - 0.14, 1.02, -0.03);
    tuer.add(rosette);
    const griff = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.13, 10), metall);
    griff.rotation.z = Math.PI / 2;
    griff.position.set(ZB - 0.14 - 0.06, 1.02, -0.06);
    tuer.add(griff);
    // Scharniere
    for (const y of [0.3, 1.9]) {
      const sch = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.09, 8), metall);
      sch.position.set(0, y, -0.03);
      tuer.add(sch);
    }
    tuer.position.set(zx - ZB / 2 + 0.02, 0, zz - 0.02);
    tuer.rotation.y = 1.45; // offen
    scene.add(tuer);
    // kurzer Flur hinter der Tür (damit man nicht ins Leere schaut)
    const flur = new THREE.MeshStandardMaterial({ color: '#d8d2c6', roughness: 0.9 });
    box(0.1, 2.6, 3, flur, zx - 0.85, 1.3, zz + 1.6);
    box(0.1, 2.6, 3, flur, zx + 0.85, 1.3, zz + 1.6);
    box(1.8, 0.1, 3, flur, zx, 2.6, zz + 1.6);
    box(1.8, 2.6, 0.1, flur, zx, 1.3, zz + 3.1);
    const flurBoden = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 3), new THREE.MeshStandardMaterial({ color: '#6b5a48', roughness: 0.7 }));
    flurBoden.rotation.x = -Math.PI / 2;
    flurBoden.position.set(zx, 0.005, zz + 1.6);
    scene.add(flurBoden);
    const flurLicht = new THREE.PointLight('#ffe2b8', 2, 4, 2);
    flurLicht.position.set(zx, 2.3, zz + 1.6);
    scene.add(flurLicht);
  }

  // ---------- Vertrag auf dem Couchtisch (erscheint, wenn der Chef ihn hinlegt) ----------
  const vertrag = (() => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 360;
    const g = c.getContext('2d');
    g.fillStyle = '#fbfaf6';
    g.fillRect(0, 0, 256, 360);
    g.fillStyle = '#8e2b36';
    g.font = '800 26px serif';
    g.textAlign = 'center';
    g.fillText('VERTRAG', 128, 50);
    g.font = '600 15px sans-serif';
    g.fillText('Team Blitz', 128, 74);
    g.fillStyle = '#9a9a9a';
    for (let y = 100; y < 300; y += 14) g.fillRect(28, y, 200 - ((y * 7) % 60), 3);
    g.strokeStyle = '#333';
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(140, 330);
    g.lineTo(228, 330);
    g.stroke();
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.297), new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = Math.PI + 0.12; // Schrift zum Sofa hin lesbar
    m.position.set(0.55, 0.462, -0.05);
    m.visible = false;
    scene.add(m);
    const stift = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.14, 8), new THREE.MeshStandardMaterial({ color: '#1a1a1e', metalness: 0.5, roughness: 0.3 }));
    stift.rotation.set(0, 0.5, Math.PI / 2);
    stift.position.set(0.74, 0.466, -0.02);
    stift.visible = false;
    scene.add(stift);
    return { blatt: m, stift };
  })();

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
  // Hochhausfassaden mit vielen Fenstern (einige leuchten warm)
  const fassade = (grund) => {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = grund;
    g.fillRect(0, 0, 128, 256);
    const em = document.createElement('canvas');
    em.width = 128;
    em.height = 256;
    const ge = em.getContext('2d');
    ge.fillStyle = '#000';
    ge.fillRect(0, 0, 128, 256);
    for (let y = 6; y < 250; y += 14)
      for (let x = 6; x < 124; x += 14) {
        const an = Math.random() < 0.3;
        g.fillStyle = an ? '#ffd79a' : '#33404f';
        g.fillRect(x, y, 9, 9);
        if (an) {
          ge.fillStyle = '#ffd79a';
          ge.fillRect(x, y, 9, 9);
        }
      }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    const te = new THREE.CanvasTexture(em);
    te.wrapS = te.wrapT = THREE.RepeatWrapping;
    return new THREE.MeshStandardMaterial({ map: t, emissiveMap: te, emissive: '#ffffff', emissiveIntensity: 0.6, roughness: 0.8 });
  };
  const stadtMat = fassade('#9aa3b1');
  const fensterMat = fassade('#7f8899');
  let seed = 7;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 70; i++) {
    const w = 10 + r() * 22;
    const h = 20 + r() * 90;
    const x = (r() - 0.5) * 520;
    const z = -75 - r() * 260;
    box(w, h, w, i % 3 ? stadtMat : fensterMat, x, -45 + h / 2, z);
  }

  // ---------- Möbel ----------
  const rund = (w, h, d, mat, x, y, z, r = 0.06) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };
  const stoff = new THREE.MeshStandardMaterial({ color: '#d9c7a7', roughness: 0.95 }); // ✏️ Sofa: beige
  const kissenMat = [
    new THREE.MeshStandardMaterial({ color: '#c8352c', roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ color: '#e9dcc3', roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: '#2f6b4f', roughness: 0.9 }),
  ];
  const holzDunkel = new THREE.MeshStandardMaterial({ color: '#3a2a1e', roughness: 0.45 });
  const metall = new THREE.MeshStandardMaterial({ color: '#c9a45c', metalness: 0.9, roughness: 0.3 });
  // Sofa (Blick zum Fenster) mit runden Polstern und Kissen
  rund(3.2, 0.36, 1.0, stoff, 0.5, 0.26, 1.2, 0.08);
  rund(3.2, 0.55, 0.28, stoff, 0.5, 0.62, 1.6, 0.1);
  rund(0.28, 0.6, 1.0, stoff, -1.1, 0.38, 1.2, 0.1);
  rund(0.28, 0.6, 1.0, stoff, 2.1, 0.38, 1.2, 0.1);
  for (const [x, k] of [[-0.6, 0], [0.1, 1], [1.4, 2], [0.8, 1]]) {
    const c = rund(0.42, 0.38, 0.14, kissenMat[k], x, 0.6, 1.4, 0.07);
    c.rotation.x = -0.25;
  }
  for (const x of [-0.9, 1.9]) box(0.05, 0.1, 0.05, metall, x, 0.05, 1.2);
  // zwei Sessel
  for (const [x, z, h] of [[-2.0, -0.6, 0.9], [3.0, -0.4, -0.9]]) {
    const g = new THREE.Group();
    const sitz = new THREE.Mesh(new RoundedBoxGeometry(0.85, 0.35, 0.8, 3, 0.08), kissenMat[1]);
    sitz.position.y = 0.3;
    const lehne = new THREE.Mesh(new RoundedBoxGeometry(0.85, 0.6, 0.18, 3, 0.08), kissenMat[1]);
    lehne.position.set(0, 0.65, -0.35);
    g.add(sitz, lehne);
    g.traverse((o) => o.isMesh && ((o.castShadow = true), (o.receiveShadow = true)));
    g.position.set(x, 0, z);
    g.rotation.y = h;
    scene.add(g);
  }
  // Couchtisch (Holz, runde Kanten) und gemusterter Teppich
  rund(1.5, 0.07, 0.85, holzDunkel, 0.5, 0.42, -0.2, 0.03);
  for (const [x, z] of [[-0.1, -0.5], [1.1, -0.5], [-0.1, 0.1], [1.1, 0.1]]) box(0.04, 0.4, 0.04, metall, x, 0.2, z);
  const buch = rund(0.3, 0.05, 0.22, kissenMat[0], 0.2, 0.48, -0.25, 0.01);
  buch.rotation.y = 0.3;
  const tc = document.createElement('canvas');
  tc.width = tc.height = 256;
  const tg = tc.getContext('2d');
  tg.fillStyle = '#cbbd9f';
  tg.fillRect(0, 0, 256, 256);
  tg.strokeStyle = '#8e2b36';
  tg.lineWidth = 10;
  tg.strokeRect(14, 14, 228, 228);
  tg.strokeStyle = '#2f3a4d';
  tg.lineWidth = 4;
  tg.strokeRect(34, 34, 188, 188);
  for (let i = 0; i < 6; i++) {
    tg.beginPath();
    tg.arc(128, 128, 20 + i * 14, 0, Math.PI * 2);
    tg.stroke();
  }
  const tt = new THREE.CanvasTexture(tc);
  tt.colorSpace = THREE.SRGBColorSpace;
  const teppich = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.2), new THREE.MeshStandardMaterial({ map: tt, roughness: 1 }));
  teppich.rotation.x = -Math.PI / 2;
  teppich.position.set(0.5, 0.01, 0.4);
  teppich.receiveShadow = true;
  scene.add(teppich);
  // Kücheninsel mit Barhockern und Hängelampen (hinten rechts)
  const marmor = new THREE.MeshStandardMaterial({ color: '#f1efe9', roughness: 0.25, metalness: 0.05 });
  rund(2.6, 0.9, 0.9, holzDunkel, 3.2, 0.45, 3.3, 0.03);
  rund(2.75, 0.06, 1.05, marmor, 3.2, 0.93, 3.3, 0.02);
  for (const x of [2.4, 3.2, 4.0]) {
    box(0.04, 0.7, 0.04, metall, x, 0.35, 2.55);
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 18), kissenMat[0]);
    s.position.set(x, 0.72, 2.55);
    s.castShadow = true;
    scene.add(s);
  }
  for (const x of [2.5, 3.9]) {
    const kabel = box(0.01, 1.2, 0.01, metall, x, H - 0.6, 3.3);
    kabel.castShadow = false;
    const schirm = new THREE.Mesh(new THREE.SphereGeometry(0.22, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#c9a45c', metalness: 0.8, roughness: 0.3, side: THREE.DoubleSide }));
    schirm.position.set(x, H - 1.2, 3.3);
    scene.add(schirm);
    const birne = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#ffdca8', emissiveIntensity: 2 }));
    birne.position.set(x, H - 1.25, 3.3);
    scene.add(birne);
    const l = new THREE.PointLight('#ffd9a0', 4, 4, 2);
    l.position.set(x, H - 1.35, 3.3);
    scene.add(l);
  }
  // Stehlampe neben dem Sofa
  box(0.03, 1.7, 0.03, metall, 2.6, 0.85, 1.7);
  const lampe = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.3, 18, 1, true), new THREE.MeshStandardMaterial({ color: '#efe6d4', emissive: '#ffe1b0', emissiveIntensity: 0.6, side: THREE.DoubleSide }));
  lampe.position.set(2.6, 1.75, 1.7);
  scene.add(lampe);
  const stehLicht = new THREE.PointLight('#ffd9a0', 3, 4, 2);
  stehLicht.position.set(2.6, 1.6, 1.7);
  scene.add(stehLicht);
  // Holzlatten hinter den Rädern (linke und rechte Wand)
  const latte = new THREE.MeshStandardMaterial({ color: '#8a6142', roughness: 0.6 });
  for (const sx of [-1, 1])
    for (let z = -T / 2 + 0.6; z < T / 2 - 0.5; z += 0.16) box(0.04, H - 0.3, 0.09, latte, sx * (B / 2 - 0.03), (H - 0.3) / 2 + 0.15, z);
  // Rad-Poster an der Rückwand
  const poster = (titel, farbe, x) => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 360;
    const g = c.getContext('2d');
    g.fillStyle = farbe;
    g.fillRect(0, 0, 256, 360);
    g.strokeStyle = '#ffffff';
    g.lineWidth = 6;
    g.beginPath();
    g.arc(80, 230, 46, 0, Math.PI * 2);
    g.arc(180, 230, 46, 0, Math.PI * 2);
    g.moveTo(80, 230);
    g.lineTo(125, 170);
    g.lineTo(180, 230);
    g.moveTo(125, 170);
    g.lineTo(115, 230);
    g.lineTo(80, 230);
    g.moveTo(110, 165);
    g.lineTo(140, 165);
    g.stroke();
    g.fillStyle = '#ffffff';
    g.font = '800 30px sans-serif';
    g.textAlign = 'center';
    g.fillText(titel, 128, 70);
    g.font = '600 16px sans-serif';
    g.fillText('THE GRAND TOUR', 128, 330);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const bild = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.05), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }));
    bild.position.set(x, 1.75, T / 2 - 0.02);
    bild.rotation.y = Math.PI;
    scene.add(bild);
    box(0.82, 1.12, 0.03, holzDunkel, x, 1.75, T / 2 - 0.005);
  };
  poster('SCHNEETAL', '#2f6b9a', -0.2);
  poster('LANDSTRASSE', '#c8352c', 0.8);

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
    // kleiner Strahler, der das Rad anleuchtet
    const lp = b.root.localToWorld(new THREE.Vector3(0, 0.8, 0));
    const zur = r.wand === 'links' ? 1 : r.wand === 'rechts' ? -1 : 0;
    const licht = new THREE.PointLight('#fff1d8', 2.2, 3.2, 2);
    licht.position.set(lp.x + zur * 1.0, H - 0.4, lp.z + (r.wand === 'hinten' ? -1.0 : 0));
    scene.add(licht);
  }

  // ---------- Licht ----------
  const sky = new Sky();
  sky.scale.setScalar(10000);
  sky.material = roadWorld.sky.material;
  scene.add(sky);
  scene.environment = roadWorld.scene.environment;
  scene.environmentIntensity = 0.5;
  scene.fog = new THREE.FogExp2(new THREE.Color('#d6c7b8'), 0.0035);
  scene.add(new THREE.HemisphereLight('#fff3e2', '#7d6a58', 1.2));
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
      // (nur jeder zweite Spot bekommt echtes Licht – schont das iPad)
      if (z > 0 && x !== 0) {
        const l = new THREE.PointLight('#ffe7c4', 5, 7, 2);
        l.position.set(x, H - 0.25, z);
        scene.add(l);
      }
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
    vertrag,
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
