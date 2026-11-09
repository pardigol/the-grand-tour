// Das Dorf fürs Zeitfahren: Fachwerkhäuser, Gasthaus, Schmiede, Mühle, Glockenturm,
// ein Dorfplatz mit Brunnen und Marktständen, Zäune, Fässer und Laternen – entlang der ganzen Runde.
// Modelle: "Medieval Village Pack" von Quaternius (CC0), geladen in nature.js (loadVillageModels).
import * as THREE from 'three';

export const VILLAGE_NAME = 'Paulsdorf';

// Wie groß die Modelle im Spiel sind (die Originale sind sehr klein)
const GROESSE = 2.9;
// Auf welcher Seite die Haustür liegt: Drehung, damit die Vorderseite zur Straße zeigt
const VORNE = {
  House_1: 0,
  House_2: 0,
  House_3: 0,
  House_4: 0,
  Inn: 0,
  Blacksmith: 0,
  Stable: 0,
  Sawmill: 0,
  Mill: 0,
  Bell_Tower: 0,
};
// Häufigkeit der Gebäude an der Straße
const MISCHUNG = [
  ['House_1', 5],
  ['House_2', 5],
  ['House_3', 3],
  ['House_4', 2],
  ['Inn', 1],
  ['Blacksmith', 1.2],
  ['Stable', 0.8],
  ['Sawmill', 0.6],
];

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
  const grey = new THREE.MeshStandardMaterial({ color: '#cfcfcf' });
  const s = new THREE.Group();
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 0.05), [grey, grey, grey, grey, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }), grey]);
  board.position.y = 2.2;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6), new THREE.MeshStandardMaterial({ color: '#bfc3c8', metalness: 0.8, roughness: 0.3 }));
  pole.position.y = 1.3;
  s.add(board, pole);
  return s;
}

// Laterne im alten Stil: Holzmast, Arm und warm leuchtende Glaskugel
function lampGeometry() {
  return {
    pole: new THREE.CylinderGeometry(0.07, 0.1, 3.6, 6).translate(0, 1.8, 0),
    arm: new THREE.BoxGeometry(0.08, 0.08, 0.7).translate(0, 3.5, 0.3),
    glas: new THREE.SphereGeometry(0.17, 10, 8).translate(0, 3.25, 0.6),
  };
}

export function buildVillage(world, M) {
  let seed = 2024;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const root = new THREE.Group();
  root.name = 'dorf';
  const L = world.length;
  const SH = world.SH;
  const pose = {};
  const footprints = [];
  const placed = []; // {x, z, r} schon gebaut – nichts darf sich überlappen
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
  const inst = new Map(); // Modellname -> Matrizen (InstancedMesh, spart Zeichenaufrufe)
  const add = (name, x, z, yaw, s, y = null) => {
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y ?? world.terrainHeight(x, z) - 0.05, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(s, s, s),
    );
    if (!inst.has(name)) inst.set(name, []);
    inst.get(name).push(m);
  };
  const size = (name, s) => {
    const bb = M[name].boundingBox;
    return { w: (bb.max.x - bb.min.x) * s, d: (bb.max.z - bb.min.z) * s };
  };
  const frei = (x, z, r) => world.clearOfPath(x, z, r) && placed.every((p) => Math.hypot(p.x - x, p.z - z) > p.r + r);
  // Ausrichtung: Vorderseite (+z des Modells) zeigt zur Straße
  const zurStrasse = (sd) => Math.atan2(sd * pose.tz, -sd * pose.tx);

  const pick = () => {
    const sum = MISCHUNG.reduce((a, [, w]) => a + w, 0);
    let r = rand() * sum;
    for (const [n, w] of MISCHUNG) if ((r -= w) <= 0) return n;
    return 'House_1';
  };

  // ---------- Dorfplatz: auf der längsten Geraden ----------
  let platzS = 0;
  let best = Infinity;
  for (let s = 60; s < L - 60; s += 10) {
    const t = world.turnBetween(Math.round((s - 30) / world.ds), Math.round((s + 30) / world.ds));
    if (t < best && Math.abs(s - L * 0.5) < L * 0.4) {
      best = t;
      platzS = s;
    }
  }
  const platzSeite = 1;
  {
    // Glockenturm hinten am Platz, davor Brunnen, Marktstände, Wagen, Bänke und Fässer
    world.poseAt(platzS, platzSeite * (SH + 17), pose);
    if (frei(pose.x, pose.z, 5)) {
      add('Bell_Tower', pose.x, pose.z, zurStrasse(platzSeite), GROESSE * 1.15);
      placed.push({ x: pose.x, z: pose.z, r: 4.5 });
      footprints.push({ x: pose.x, z: pose.z, r: 6 });
    }
    const dinge = [
      ['Well', 0, 7, 0, GROESSE],
      ['MarketStand_1', -11, 6, 0.3, GROESSE],
      ['MarketStand_2', -6, 10.5, -0.2, GROESSE],
      ['MarketStand_1', 7, 10, 0.5, GROESSE],
      ['MarketStand_2', 11, 5.5, -0.4, GROESSE],
      ['Cart', -14, 11, 1.2, GROESSE],
      ['Bench_1', -3, 3.2, 0, GROESSE],
      ['Bench_1', 4, 3.2, 0, GROESSE],
      ['Barrel', 9, 13, 0, GROESSE],
      ['Barrel', 9.8, 13.4, 0, GROESSE],
      ['Crate', -9, 13, 0.4, GROESSE],
      ['Hay', 13, 12, 0.2, GROESSE],
      ['Bags', -12, 8.5, 0, GROESSE],
      ['Bonfire_Lit', 2, 14, 0, GROESSE],
    ];
    for (const [n, ds, lat, yaw, s] of dinge) {
      world.poseAt(platzS + ds, platzSeite * (SH + lat), pose);
      if (!world.clearOfPath(pose.x, pose.z, 0.8)) continue;
      add(n, pose.x, pose.z, zurStrasse(platzSeite) + yaw, s);
      footprints.push({ x: pose.x, z: pose.z, r: 2.5 });
    }
    // Pflaster für den ganzen Platz, Gras dort wegräumen
    world.poseAt(platzS, platzSeite * (SH + 9.5), pose);
    placed.push({ x: pose.x, z: pose.z, r: 13, flach: true }); // nur Pflaster: Häuser halten Abstand, aber man fährt hindurch
    footprints.push({ x: pose.x, z: pose.z, r: 15 });
    if (world.roadTex) {
      const tex = world.roadTex.clone();
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 2.2);
      tex.needsUpdate = true;
      const platz = new THREE.Mesh(
        new THREE.CircleGeometry(15, 40),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1 }),
      );
      platz.rotation.x = -Math.PI / 2;
      platz.rotation.z = pose.heading;
      platz.position.set(pose.x, world.terrainHeight(pose.x, pose.z) + 0.04, pose.z);
      platz.receiveShadow = true;
      root.add(platz);
    }
  }

  // ---------- Häuser an beiden Straßenseiten, die ganze Runde entlang ----------
  for (const sd of [-1, 1]) {
    let s = 25 + rand() * 8;
    while (s < L - 20) {
      const name = pick();
      const sc = GROESSE * (0.92 + rand() * 0.16);
      const { w, d } = size(name, sc);
      const lat = sd * (SH + 1.6 + d / 2 + rand() * 2.2);
      world.poseAt(s + w / 2, lat, pose);
      const r = Math.max(w, d) * 0.5;
      if (frei(pose.x, pose.z, r * 0.9)) {
        // leicht schief – alte Dörfer sind nie ganz gerade
        const yaw = zurStrasse(sd) + VORNE[name] + (rand() - 0.5) * 0.18;
        add(name, pose.x, pose.z, yaw, sc);
        placed.push({ x: pose.x, z: pose.z, r: r * 0.9 });
        footprints.push({ x: pose.x, z: pose.z, r: r + 2 });
        // Kleinkram neben der Tür
        if (rand() < 0.55) {
          const off = (rand() < 0.5 ? -1 : 1) * (w / 2 + 0.8);
          world.poseAt(s + w / 2 + off, sd * (SH + 1.4 + rand() * 1.2), pose);
          const kram = ['Barrel', 'Crate', 'Hay', 'Package_1', 'Bags'][Math.floor(rand() * 5)];
          if (world.clearOfPath(pose.x, pose.z, 0.6)) add(kram, pose.x, pose.z, rand() * 6, GROESSE);
        }
        s += w + 1.2 + rand() * 4;
        // ab und zu eine Gasse oder ein Garten mit Zaun
        if (rand() < 0.22) {
          const gap = 9 + rand() * 9;
          if (rand() < 0.6) {
            for (let f = 0.8; f < gap - 0.8; f += 2.3) {
              world.poseAt(s + f, sd * (SH + 1.3), pose);
              if (world.clearOfPath(pose.x, pose.z, 0.3)) add('Fence', pose.x, pose.z, pose.heading + Math.PI / 2, GROESSE);
            }
          }
          s += gap;
        }
      } else s += 4;
    }
  }

  // ---------- zweite und dritte Reihe: das Dorf zieht sich über die ganze Karte ----------
  for (const reihe of [17, 31]) {
    for (const sd of [-1, 1]) {
      let s = rand() * 10;
      while (s < L) {
        const name = pick();
        const sc = GROESSE * (0.9 + rand() * 0.2);
        const { w, d } = size(name, sc);
        world.poseAt(s, sd * (SH + reihe + rand() * 5), pose);
        const r = Math.max(w, d) * 0.5;
        if (rand() < (reihe < 20 ? 0.75 : 0.5) && frei(pose.x, pose.z, r)) {
          // hintere Häuser stehen kreuz und quer – so entstehen Winkel und kleine Höfe
          const yaw = zurStrasse(sd) + [0, Math.PI / 2, -Math.PI / 2, 0.3][Math.floor(rand() * 4)] + (rand() - 0.5) * 0.3;
          add(name, pose.x, pose.z, yaw, sc);
          placed.push({ x: pose.x, z: pose.z, r: r * 0.9 });
          footprints.push({ x: pose.x, z: pose.z, r: r + 2 });
        }
        s += w + 3 + rand() * 9;
      }
    }
  }

  // ---------- Mühle und Sägewerk etwas abseits ----------
  for (const [name, f, lat] of [
    ['Mill', 0.27, 30],
    ['Mill', 0.71, -34],
  ]) {
    world.poseAt(L * f, lat + Math.sign(lat) * SH, pose);
    if (frei(pose.x, pose.z, 6)) {
      add(name, pose.x, pose.z, zurStrasse(Math.sign(lat)), GROESSE * 1.2);
      placed.push({ x: pose.x, z: pose.z, r: 5 });
      footprints.push({ x: pose.x, z: pose.z, r: 7 });
    }
  }

  // ---------- Laternen am Straßenrand ----------
  const lg = lampGeometry();
  const holz = new THREE.MeshStandardMaterial({ color: '#4a3424', roughness: 0.9 });
  const glas = new THREE.MeshStandardMaterial({ color: '#fff1c4', emissive: '#ffbf5a', emissiveIntensity: 1.4 });
  const lampen = [];
  for (let s = 18, k = 0; s < L - 10; s += 26, k++) {
    const sd = k % 2 ? 1 : -1;
    world.poseAt(s, sd * (SH + 0.7), pose);
    if (!world.clearOfPath(pose.x, pose.z, 0.5)) continue;
    // Arm zeigt über die Straße
    lampen.push(
      new THREE.Matrix4().compose(
        new THREE.Vector3(pose.x, world.terrainHeight(pose.x, pose.z), pose.z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), zurStrasse(sd)),
        new THREE.Vector3(1, 1, 1),
      ),
    );
  }
  for (const [geo, m] of [
    [lg.pole, holz],
    [lg.arm, holz],
    [lg.glas, glas],
  ]) {
    const im = new THREE.InstancedMesh(geo, m, lampen.length);
    lampen.forEach((mx, i) => im.setMatrixAt(i, mx));
    im.castShadow = m === holz;
    root.add(im);
  }

  // ---------- Wimpelketten quer über die Straße ----------
  const flagCols = ['#d62839', '#f6f6f6', '#2f7cf6', '#f2d14b', '#2bb24c'];
  for (const f of [0.08, platzS / L, 0.62, 0.9]) {
    const a = {};
    const b = {};
    world.poseAt(L * f, -(SH + 0.7), a);
    world.poseAt(L * f, SH + 0.7, b);
    const pa = new THREE.Vector3(a.x, a.h + 4.6, a.z);
    const pb = new THREE.Vector3(b.x, b.h + 4.6, b.z);
    const mid = pa.clone().lerp(pb, 0.5);
    mid.y -= 0.8;
    const curve = new THREE.QuadraticBezierCurve3(pa, mid, pb);
    root.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.015, 4), new THREE.MeshStandardMaterial({ color: '#333' })));
    for (let i = 1; i < 16; i++) {
      const p = curve.getPoint(i / 16);
      const flag = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 3), new THREE.MeshStandardMaterial({ color: flagCols[i % flagCols.length], side: THREE.DoubleSide }));
      flag.position.copy(p);
      flag.position.y -= 0.25;
      flag.rotation.x = Math.PI;
      root.add(flag);
    }
  }

  // ---------- Ortsschild am Start ----------
  {
    world.poseAt(L - 30, SH + 1.1, pose);
    const sign = townSign(VILLAGE_NAME, false);
    sign.position.set(pose.x, world.terrainHeight(pose.x, pose.z), pose.z);
    sign.rotation.y = Math.atan2(-pose.tx, -pose.tz);
    root.add(sign);
  }

  // alle Modelle als InstancedMesh in die Szene – aufgeteilt in Bezirke von 90 m,
  // damit nur gezeichnet wird, was die Kamera gerade sieht (spart viel Leistung, wichtig fürs iPad)
  const BEZIRK = 90;
  for (const [name, mats] of inst) {
    const zellen = new Map();
    for (const m of mats) {
      const key = `${Math.floor(m.elements[12] / BEZIRK)},${Math.floor(m.elements[14] / BEZIRK)}`;
      if (!zellen.has(key)) zellen.set(key, []);
      zellen.get(key).push(m);
    }
    for (const liste of zellen.values()) {
      const im = new THREE.InstancedMesh(M[name], mat, liste.length);
      liste.forEach((m, i) => im.setMatrixAt(i, m));
      im.castShadow = true;
      im.receiveShadow = true;
      im.computeBoundingSphere();
      root.add(im);
    }
  }
  // Häuser sind fest: daran prallt man ab (siehe ride.js)
  return { group: root, footprints, platzS, solid: placed.filter((p) => p.r > 0 && !p.flach) };
}
