// Die computergesteuerten Gegner. Sie fahren auf der Strecke, jeder mit eigenem Tempo.
import * as THREE from 'three';
import { Bike, WHEEL_R } from './bike.js';
import { clamp, damp } from './noise.js';

// ✏️ Hier kannst du die Gegner ändern: Name, Nummer, Farben, Radmarke und Kraft in Watt.
// Zum Vergleich: Du trittst mit CONFIG.riderPower (520 Watt). Mehr Watt = schnellerer Gegner.
export const RIVALS = [
  { name: 'Mia', number: 7, jersey: '#1fa88f', frame: '#f1f1ec', helmet: '#1fa88f', kit: 'stripes', brand: 'canyon', power: 515, lane: -1.6 },
  { name: 'Leo', number: 21, jersey: '#f4a12a', frame: '#f6f6f6', paint: 'team', bar: '#16161b', helmet: '#16161b', brand: 'colnago', power: 495, lane: 0.3 },
  { name: 'Emma', number: 33, jersey: '#8a3ffc', frame: '#d8d8de', helmet: '#8a3ffc', kit: 'stripes', brand: 'rose', power: 470, lane: -0.6 },
  { name: 'Ben', number: 52, jersey: '#2f7cf6', frame: '#b8222c', helmet: '#f6f6f6', brand: 'cervelo', power: 445, lane: 1.4 },
];
const MASS = 78;
const G = 9.81;

// Windschatten: so weit hinter einem Gegner (Meter) wirkt er
export const DRAFT_LEN = 8;

// Leuchtende Windschatten-Zone auf der Straße: Pfeile, die zum Gegner hin wandern
let draftTex = null;
function draftTexture() {
  if (draftTex) return draftTex;
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  // Pfeilspitze zeigt nach unten = zum Gegner hin
  ctx.beginPath();
  ctx.moveTo(18, 40);
  ctx.lineTo(64, 88);
  ctx.lineTo(110, 40);
  ctx.stroke();
  draftTex = new THREE.CanvasTexture(c);
  draftTex.wrapS = draftTex.wrapT = THREE.RepeatWrapping;
  draftTex.repeat.set(1, 5);
  return draftTex;
}

function makeDraftZone() {
  // Zum Ende hin ausblenden: Farbverlauf über Vertex-Farben
  const geo = new THREE.PlaneGeometry(1.3, DRAFT_LEN - 0.8, 1, 8);
  const pos = geo.attributes.position;
  const col = [];
  for (let i = 0; i < pos.count; i++) {
    const t = (pos.getY(i) + (DRAFT_LEN - 0.8) / 2) / (DRAFT_LEN - 0.8); // 0 = nah am Gegner, 1 = weit hinten
    const a = 1 - t;
    col.push(0.45 * a, 0.9 * a, 1.0 * a);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.rotateX(-Math.PI / 2); // flach hinlegen; +y der Fläche zeigt jetzt nach hinten (-z)
  const mat = new THREE.MeshBasicMaterial({
    map: draftTexture(),
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, 0.07, -0.8 - (DRAFT_LEN - 0.8) / 2);
  mesh.renderOrder = 2;
  mesh.visible = false;
  return mesh;
}

// Startaufstellung: Abstand hinter der Spielerposition (Meter)
const GRID = [0, 5, 5, 10];

const pose = {};

export class Rivals {
  // list = welche Gegner (leer = allein fahren, z. B. beim Cycle Cross)
  constructor(app, list = RIVALS) {
    this.app = app;
    this.list = list.map((r, i) => {
      const bike = new Bike();
      bike.setPlate(r.number, r.name);
      bike.applyLook(r);
      bike.root.visible = false;
      app.world.scene.add(bike.root);
      const draftZone = makeDraftZone();
      bike.root.add(draftZone);
      return { ...r, bike, draftZone, grid: GRID[i], d: 0, v: 0, lat: r.lane, heading: 0, lean: 0, finished: null };
    });
  }

  // startS = Position der Spielerin/des Spielers auf der Strecke (Meter)
  reset(startS) {
    this.startS = startS;
    for (const r of this.list) {
      r.d = -r.grid;
      r.v = 0;
      r.lat = r.lane;
      r.lean = 0;
      r.finished = null;
      r.wobble = Math.random() * 10;
      r.bike.root.visible = true;
      this.place(r, 0, 0);
      r.heading = pose.heading;
    }
  }

  // Fährt jemand bei (x, z) im Windschatten eines Gegners? Stärke 0 … 1 (1 = ganz dicht dahinter)
  draftFor(x, z) {
    let best = 0;
    let who = null;
    for (const r of this.list) {
      if (!r.bike.root.visible || r.v < 3) continue;
      const fx = Math.sin(r.heading);
      const fz = Math.cos(r.heading);
      const dx = x - r.x;
      const dz = z - r.z;
      const behind = -(dx * fx + dz * fz); // Meter hinter dem Gegner
      const side = Math.abs(dx * fz - dz * fx); // seitlicher Abstand
      if (behind < 0.8 || behind > DRAFT_LEN) continue;
      const width = 0.7 + behind * 0.05;
      if (side > width) continue;
      const s = (1 - (behind - 0.8) / (DRAFT_LEN - 0.8)) * (1 - (side / width) * 0.5);
      if (s > best) {
        best = s;
        who = r;
      }
    }
    return { strength: best, rival: who };
  }

  // Zone hinter dem Gegner aufleuchten lassen, in dessen Windschatten man fährt
  showDraft(who, strength, dt) {
    draftTexture().offset.y += dt * 2.2;
    for (const r of this.list) {
      const m = r.draftZone.material;
      const target = r === who ? 0.35 + 0.55 * strength : 0;
      m.opacity = damp(m.opacity, target, 8, dt);
      r.draftZone.visible = m.opacity > 0.01;
    }
  }

  hide() {
    for (const r of this.list) {
      r.bike.root.visible = false;
      r.draftZone.material.opacity = 0;
      r.draftZone.visible = false;
    }
  }

  // Zurückgelegte Strecke ab der Startlinie
  progress(r) {
    return r.d - (this.app.world.length - this.startS);
  }

  place(r, dt, crankRate) {
    const w = this.app.world;
    w.poseAt(this.startS + r.d, r.lat, pose);
    // In die Kurve legen: aus der Drehgeschwindigkeit berechnet
    if (dt > 0) {
      const turn = Math.atan2(Math.sin(pose.heading - r.heading), Math.cos(pose.heading - r.heading)) / dt;
      r.lean = damp(r.lean, clamp(-Math.atan((r.v * turn) / 9.81), -0.5, 0.5), 6, dt);
    }
    r.heading = pose.heading;
    const b = r.bike.root;
    b.position.set(pose.x, pose.h, pose.z);
    b.rotation.set(-pose.pitch, pose.heading, r.lean);
    r.bike.update(dt, r.v, crankRate, 0);
    r.x = pose.x;
    r.z = pose.z;
    r.pitch = pose.pitch;
  }

  // running = Rennen läuft, player = { progress, lateral }, raceLen = Rennlänge in Metern
  update(dt, running, player, raceLen, time) {
    for (const r of this.list) {
      // Gleiche Physik wie beim Spieler: Treten, Luftwiderstand, Rollen, Steigung
      let power = 0;
      if (running) {
        power = r.power;
        // etwas Abwechslung, damit niemand wie ein Roboter fährt
        power *= 1 + Math.sin(time * 0.23 + r.wobble) * 0.05;
        // Gummiband: wer weit vorne ist, tritt etwas schwächer, wer hinten ist, etwas stärker
        const gap = player.progress - this.progress(r);
        power *= 1 + clamp(gap / 300, -0.15, 0.12);
        if (r.finished != null) power = 120;
      }
      const v = r.v;
      const drive = Math.min(power / Math.max(v, 2.5), 340);
      const drag = 0.5 * 1.2 * 0.36 * v * v;
      const a = (drive - drag - 0.005 * MASS * G - MASS * G * Math.sin(r.pitch || 0)) / MASS;
      r.v = Math.max(0, v + a * dt);
      if (!running) r.v = 0;
      r.d += r.v * dt;

      // Der Spielerin/dem Spieler ausweichen, wenn sie in der gleichen Spur dicht dran ist
      const myProgress = this.progress(r);
      let latTarget = r.lane;
      const dz = player.progress - myProgress;
      if (dz > -2 && dz < 5 && Math.abs(player.lateral - r.lane) < 1.1) {
        latTarget = r.lane + (r.lane > player.lateral ? 1.3 : -1.3);
      }
      r.lat = damp(r.lat, clamp(latTarget, -3, 3), 2, dt);

      if (running && r.finished == null && myProgress >= raceLen) r.finished = time;

      const crank = r.v > 0.5 ? r.v / WHEEL_R / 3.6 : 0;
      this.place(r, dt, crank);
    }
  }
}
