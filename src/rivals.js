// Die computergesteuerten Gegner. Sie fahren auf der Strecke, jeder mit eigenem Tempo.
import { Bike, WHEEL_R } from './bike.js';
import { clamp, damp } from './noise.js';

// ✏️ Hier kannst du die Gegner ändern: Name, Nummer, Farben, Radmarke und Kraft in Watt.
// Zum Vergleich: Du trittst mit CONFIG.riderPower (520 Watt). Mehr Watt = schnellerer Gegner.
export const RIVALS = [
  { name: 'Mia', number: 7, jersey: '#1fa88f', frame: '#f1f1ec', helmet: '#1fa88f', brand: 'canyon', power: 515, lane: -1.6 },
  { name: 'Leo', number: 21, jersey: '#f4a12a', frame: '#1c1c22', helmet: '#16161b', brand: 'colnago', power: 495, lane: 0.3 },
  { name: 'Emma', number: 33, jersey: '#8a3ffc', frame: '#d8d8de', helmet: '#8a3ffc', brand: 'rose', power: 470, lane: -0.6 },
  { name: 'Ben', number: 52, jersey: '#2f7cf6', frame: '#b8222c', helmet: '#f6f6f6', brand: 'cervelo', power: 445, lane: 1.4 },
];
const MASS = 78;
const G = 9.81;

// Startaufstellung: Abstand hinter der Spielerposition (Meter)
const GRID = [0, 5, 5, 10];

const pose = {};

export class Rivals {
  constructor(app) {
    this.app = app;
    this.list = RIVALS.map((r, i) => {
      const bike = new Bike();
      bike.setPlate(r.number, r.name);
      bike.applyLook(r);
      bike.root.visible = false;
      app.world.scene.add(bike.root);
      return { ...r, bike, grid: GRID[i], d: 0, v: 0, lat: r.lane, heading: 0, lean: 0, finished: null };
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

  hide() {
    for (const r of this.list) r.bike.root.visible = false;
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
