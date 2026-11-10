// Die 3D-Welt: Himmel bei Sonnenaufgang, Hügel, Rundstrecke, Bäume, Gras und Licht.
// Alles wird prozedural im Code erzeugt – es werden keine Dateien geladen.
import { buildVillage } from './village.js';
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeNoise2D, mulberry32, smoothstep, lerp, clamp } from './noise.js';
import { CONFIG } from './config.js';

// Halbe Breite von Fahrbahn und Seitenstreifen: Straße 3,6 / 5,0 m, Waldweg 1,9 / 2,8 m (siehe World.RH / World.SH)
const WORLD_SIZE = 1800;
const TERRAIN_SEG = 320;
const CELL = 20;

function canvasTex(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
  }
  t.anisotropy = 8;
  return t;
}

function speckle(ctx, w, h, rand, base, spread, count, size = 1) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const v = Math.floor(rand() * spread);
    ctx.fillStyle = `rgba(${v},${v},${v},${0.08 + rand() * 0.18})`;
    ctx.fillRect(rand() * w, rand() * h, size + rand() * size, size + rand() * size);
  }
}

// Kopfsteinpflaster fürs Dorf: Reihen aus abgerundeten, unterschiedlich grauen Steinen
function cobbleTexture(rand) {
  return canvasTex(512, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#3c3a37';
    ctx.fillRect(0, 0, w, h);
    const rows = 40;
    const rh = h / rows;
    for (let r = 0; r < rows; r++) {
      let x = r % 2 ? -rh * 0.6 : 0;
      while (x < w) {
        const sw = rh * (0.9 + rand() * 0.7);
        const v = 105 + Math.floor(rand() * 55);
        const tint = Math.floor(rand() * 12);
        ctx.fillStyle = `rgb(${v + tint},${v + tint - 4},${v - 8})`;
        const pad = 2.2;
        const rx = x + pad;
        const ry = r * rh + pad;
        const ww = sw - pad * 2;
        const hh = rh - pad * 2;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(rx, ry, ww, hh, 6) : ctx.rect(rx, ry, ww, hh);
        ctx.fill();
        // Licht oben, Schatten unten -> gewölbte Steine
        ctx.fillStyle = 'rgba(255,255,255,0.10)';
        ctx.fillRect(rx + 2, ry + 1, ww - 4, hh * 0.3);
        ctx.fillStyle = 'rgba(0,0,0,0.16)';
        ctx.fillRect(rx + 2, ry + hh * 0.72, ww - 4, hh * 0.25);
        x += sw;
      }
    }
    // Moos und Schmutz in den Fugen, Ränder etwas dunkler
    speckle(ctx, w, h, rand, 'rgba(0,0,0,0)', 120, 6000, 1.2);
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgba(30,28,24,0.45)');
    g.addColorStop(0.08, 'rgba(30,28,24,0)');
    g.addColorStop(0.92, 'rgba(30,28,24,0)');
    g.addColorStop(1, 'rgba(30,28,24,0.45)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

// Erdweg: braun, zwei ausgefahrene Spuren, Wurzeln und dunkle Pfützen
function dirtTexture(rand) {
  return canvasTex(256, 1024, (ctx, w, h) => {
    speckle(ctx, w, h, rand, '#6b5136', 255, 22000, 1.4);
    // Steinchen
    for (let i = 0; i < 900; i++) {
      const v = 90 + Math.floor(rand() * 70);
      ctx.fillStyle = `rgba(${v},${v - 8},${v - 20},${0.4 + rand() * 0.4})`;
      ctx.fillRect(rand() * w, rand() * h, 1.5 + rand() * 2.5, 1.5 + rand() * 2.5);
    }
    // Fahrspuren
    ctx.fillStyle = 'rgba(35,24,14,0.28)';
    ctx.fillRect(w * 0.28, 0, w * 0.1, h);
    ctx.fillRect(w * 0.62, 0, w * 0.1, h);
    // Pfützen
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = 'rgba(30,24,18,0.55)';
      ctx.beginPath();
      ctx.ellipse(w * (0.25 + rand() * 0.5), rand() * h, 18 + rand() * 30, 30 + rand() * 60, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    // Wurzeln quer über den Weg
    for (let i = 0; i < 7; i++) {
      ctx.strokeStyle = 'rgba(70,48,28,0.9)';
      ctx.lineWidth = 3 + rand() * 4;
      ctx.beginPath();
      const y = rand() * h;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(w * 0.3, y + (rand() - 0.5) * 40, w * 0.7, y + (rand() - 0.5) * 40, w, y + (rand() - 0.5) * 30);
      ctx.stroke();
    }
    // Ränder weich in den Waldboden auslaufen lassen
    const g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, 'rgba(60,70,30,0.6)');
    g.addColorStop(0.12, 'rgba(60,70,30,0)');
    g.addColorStop(0.88, 'rgba(60,70,30,0)');
    g.addColorStop(1, 'rgba(60,70,30,0.6)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export class World {
  // kind: 'road' = Landstraße (Rennrad), 'cx' = Waldweg durch dichten Wald (Cycle Cross)
  // nature = geladene Natur-Modelle (siehe nature.js) oder null
  // kind 'tt' = Zeitfahren: verwinkelte Runde durch ein Dorf (dorf = geladene Dorf-Modelle, siehe village.js)
  constructor(renderer, kind = 'road', nature = null, dorf = null) {
    this.kind = kind;
    this.cx = kind === 'cx';
    this.tt = kind === 'tt';
    this.nature = nature;
    this.dorf = dorf;
    // Jahreszeit je Welt (CONFIG.jahreszeiten): Rennrad grün, Cycle Cross Herbst
    this.season = (CONFIG.jahreszeiten || {})[this.cx ? 'cx' : 'rennrad'] || (this.cx ? 'herbst' : 'sommer');
    this.autumn = this.season === 'herbst';
    // Größte halbe Weg-/Straßenbreite. Beim Waldweg schwankt die Breite (siehe rhArr in buildTrack).
    // Dorfstraßen sind etwas schmaler als die Landstraße
    this.RH = this.cx ? 1.6 : this.tt ? 3.2 : 3.6;
    this.SH = this.cx ? 2.4 : this.tt ? 4.4 : 5.0;
    this.scene = new THREE.Scene();
    this.rand = mulberry32(1337);
    this.n1 = makeNoise2D(11);
    this.n2 = makeNoise2D(23);
    this.n3 = makeNoise2D(37);
    this._nr = { found: false, dist: 0, i: 0, f: 0, h: 0, s: 0, lateral: 0 };
    this.focus = new THREE.Vector3();

    this.setupLakes();
    this.buildTrack();
    this.buildSky(renderer);
    this.buildLights();
    this.buildTerrain();
    this.buildLakes();
    this.buildRoad();
    this.buildVegetation();
    this.buildProps();
    // Zeitfahren: das ganze Dorf entlang der Runde
    if (this.tt && this.dorf) {
      const v = buildVillage(this, this.dorf);
      this.village = v.group;
      this.solid = v.solid;
      // erst Bäume/Büsche unter den Häusern wegräumen, dann das Dorf einsetzen (sonst räumt es sich selbst weg)
      this.clearAreas(v.footprints);
      this.scene.add(this.village);
    }
    this.buildFinishZone();
    this.buildClouds();
    this.buildMotes();
  }

  // ---------- Höhen ----------
  fbm(x, z) {
    let a = 1;
    let f = 1;
    let s = 0;
    let n = 0;
    for (let o = 0; o < 4; o++) {
      s += a * this.n1(x * f, z * f);
      n += a;
      a *= 0.5;
      f *= 2.03;
    }
    return s / n;
  }

  // ---------- Seen ----------
  setupLakes() {
    // Positionen so gewählt, dass die Seen mindestens 50 m von der Straße entfernt sind
    this.lakes = this.cx || this.tt ? [] : [
      { x: -40, z: -30, r: 120 },
      { x: 180, z: 140, r: 60 },
      { x: -200, z: 170, r: 60 },
      { x: -560, z: 0, r: 70 },
    ];
    for (const l of this.lakes) {
      // Wasserspiegel knapp unter dem tiefsten Punkt des Ufers, damit nichts überläuft
      let lvl = Infinity;
      for (let k = 0; k < 64; k++) {
        const a = (k / 64) * Math.PI * 2;
        const R = this.lakeRadius(l, a) * 1.3;
        lvl = Math.min(lvl, this.rawHeight(l.x + Math.cos(a) * R, l.z + Math.sin(a) * R));
      }
      l.level = lvl - 0.4;
    }
  }

  // Unregelmäßiges Ufer: Radius schwankt mit dem Winkel
  lakeRadius(l, a) {
    return l.r * (1 + 0.22 * this.n3(Math.cos(a) * 1.2 + l.x * 0.013, Math.sin(a) * 1.2 + l.z * 0.013));
  }

  // Liegt der Punkt in einem See (inklusive Ufer)? Gibt den See zurück oder null.
  lakeAt(x, z, margin = 0) {
    for (const l of this.lakes) {
      const dx = x - l.x;
      const dz = z - l.z;
      const d = Math.hypot(dx, dz);
      if (d > l.r * 1.6 + margin) continue;
      if (d < this.lakeRadius(l, Math.atan2(dz, dx)) * 1.3 + margin) return l;
    }
    return null;
  }

  baseHeight(x, z) {
    let h = this.rawHeight(x, z);
    for (const l of this.lakes) {
      const dx = x - l.x;
      const dz = z - l.z;
      const d = Math.hypot(dx, dz);
      if (d > l.r * 1.6) continue;
      const R = this.lakeRadius(l, Math.atan2(dz, dx)) * 1.3;
      if (d >= R) continue;
      const bowl = l.level - 4.5 * (1 - (d / R) * (d / R));
      h = lerp(bowl, h, smoothstep(R * 0.58, R, d));
    }
    return h;
  }

  rawHeight(x, z) {
    const r = Math.hypot(x, z);
    let h = this.fbm(x * 0.0035, z * 0.0035) * 16 + this.n2(x * 0.02, z * 0.02) * 1.2;
    // Dorf: fast flach, nur sanfte Wellen
    if (this.tt) h *= 0.3;
    const m = smoothstep(660, 880, r);
    if (m > 0) {
      const ridge = 1 - Math.abs(this.fbm(x * 0.0032 + 7, z * 0.0032 - 3));
      h += m * (35 + ridge * ridge * 120);
    }
    return h;
  }

  // ---------- Strecke ----------
  // Zeitfahren: eckige, verwinkelte Runde durch die Gassen (etwa 1,5 km).
  // Jede Ecke bekommt Punkte davor und danach, damit die Kurve weich und flüssig fahrbar bleibt.
  villageRoute() {
    const ecken = [
      [-80, -170], [70, -170], [95, -120], [180, -110], [190, -20], [140, 10], [150, 90],
      [60, 120], [20, 175], [-90, 160], [-110, 90], [-190, 70], [-200, -40], [-130, -60], [-120, -130],
    ];
    const r = mulberry32(77);
    const P = ecken.map(([x, z]) => new THREE.Vector3(x + (r() - 0.5) * 10, 0, z + (r() - 0.5) * 10));
    const pts = [];
    const n = P.length;
    let bestLen = 0;
    let startIdx = 0;
    for (let k = 0; k < n; k++) {
      const a = P[(k - 1 + n) % n];
      const b = P[k];
      const c = P[(k + 1) % n];
      const din = b.clone().sub(a);
      const dout = c.clone().sub(b);
      // Kurvenradius: weit genug, dass man flüssig durchfahren kann
      const rin = Math.min(24, din.length() * 0.4);
      const rout = Math.min(24, dout.length() * 0.4);
      // Ecke als weicher Bogen (Bézier-Kurve mit der Ecke als Kontrollpunkt)
      const pin = b.clone().addScaledVector(din.normalize(), -rin);
      const pout = b.clone().addScaledVector(dout.normalize(), rout);
      for (let t = 0; t <= 1.0001; t += 1 / 6) {
        const u = 1 - t;
        pts.push(new THREE.Vector3(u * u * pin.x + 2 * u * t * b.x + t * t * pout.x, 0, u * u * pin.z + 2 * u * t * b.z + t * t * pout.z));
      }
      // lange Geraden bekommen Zwischenpunkte, damit sie gerade bleiben
      const len = c.distanceTo(b);
      // (nur in der Mitte, sonst läge der Punkt hinter dem Kurvenausgang und es gäbe einen Knick)
      if (len > 60) {
        if (len > bestLen) {
          bestLen = len;
          startIdx = pts.length;
        }
        pts.push(b.clone().lerp(c, 0.5));
      }
    }
    // Start/Ziel in die Mitte der längsten Geraden legen: gerade Zieleinfahrt
    return [...pts.slice(startIdx), ...pts.slice(0, startIdx)];
  }

  buildTrack() {
    let pts = [];
    if (this.tt) pts = this.villageRoute();
    // Waldweg: kürzere, viel kurvigere Runde (etwa 1,4 km)
    const K = this.cx ? 24 : 16;
    for (let k = 0; k < (this.tt ? 0 : K); k++) {
      const a = (k / K) * Math.PI * 2;
      const r = this.cx
        ? 200 + 45 * Math.sin(3 * a + 0.6) + 30 * Math.sin(5 * a + 1.9) + 16 * Math.sin(9 * a + 0.4)
        : 360 + 80 * Math.sin(3 * a + 0.6) + 45 * Math.sin(5 * a + 1.9) + 25 * Math.sin(7 * a);
      pts.push(new THREE.Vector3(Math.cos(a) * r * 1.18, 0, Math.sin(a) * r * 0.95));
    }
    const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    const N = this.cx ? 1600 : this.tt ? 1800 : 2400;
    const sp = curve.getSpacedPoints(N);
    this.N = N;
    this.length = curve.getLength();
    this.ds = this.length / N;
    const px = (this.px = new Float32Array(N));
    const pz = (this.pz = new Float32Array(N));
    const ph = (this.ph = new Float32Array(N));
    const tx = (this.tx = new Float32Array(N));
    const tz = (this.tz = new Float32Array(N));
    for (let i = 0; i < N; i++) {
      px[i] = sp[i].x;
      pz[i] = sp[i].z;
    }
    for (let i = 0; i < N; i++) {
      const a = (i - 1 + N) % N;
      const b = (i + 1) % N;
      const dx = px[b] - px[a];
      const dz = pz[b] - pz[a];
      const l = Math.hypot(dx, dz);
      tx[i] = dx / l;
      tz[i] = dz / l;
    }
    // Straßenhöhe = geglättete Geländehöhe
    let h = new Float32Array(N);
    for (let i = 0; i < N; i++) h[i] = this.baseHeight(px[i], pz[i]);
    const R = 30;
    for (let pass = 0; pass < 3; pass++) {
      const out = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        let s = 0;
        for (let k = -R; k <= R; k++) s += h[(i + k + N) % N];
        out[i] = s / (2 * R + 1);
      }
      h = out;
    }
    // Drops im Wald: an fünf Stellen geht der Weg plötzlich tiefer weiter.
    // Damit die Runde wieder oben ankommt, steigt der Weg dazwischen ganz leicht an.
    this.drops = [];
    if (this.cx) {
      // Drops nur dort, wo der Weg vorher 45 m und danach 15 m fast gerade ist – nie direkt hinter einer Kurve
      const before = Math.round(45 / this.ds);
      const after = Math.round(15 / this.ds);
      const cand = [];
      for (let i = Math.round(80 / this.ds); i < N - Math.round(80 / this.ds); i += 2) {
        cand.push({ i, t: this.turnBetween(i - before, i + after) });
      }
      cand.sort((a, b) => a.t - b.t);
      const picks = [];
      for (const c of cand) {
        if (picks.length >= 5) break;
        if (picks.every((p) => Math.abs(p - c.i) > N / 7)) picks.push(c.i);
      }
      picks.sort((a, b) => a - b);
      const depth = [1.1, 1.4, 1.0, 1.5, 1.2];
      let total = 0;
      picks.forEach((i0, k) => {
        this.drops.push({ i: i0, s: (i0 + 1) * this.ds, d: depth[k], turn: this.turnBetween(i0 - before, i0 + after) });
        total += depth[k];
      });
      for (let i = 0; i < N; i++) {
        let off = total * (i / N);
        for (const d of this.drops) if (i > d.i) off -= d.d;
        h[i] += off;
      }
    }
    ph.set(h);

    // Wegbreite je Stelle: Straße überall gleich, Waldweg schmal und stellenweise ein enger Pfad
    this.rhArr = new Float32Array(N);
    this.shArr = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let rh = this.RH;
      if (this.cx) {
        const th = (i / N) * Math.PI * 2;
        rh = 1.2 + 0.3 * Math.sin(3 * th + 1) + 0.2 * Math.sin(7 * th + 2.2);
        rh = Math.min(this.RH, Math.max(0.75, rh));
        // am Start/Ziel etwas breiter
        const fromStart = Math.min(i, N - i) * this.ds;
        rh = lerp(this.RH, rh, smoothstep(15, 50, fromStart));
      }
      this.rhArr[i] = rh;
      this.shArr[i] = rh + (this.SH - this.RH);
    }

    // Felsbrocken auf dem Waldweg: immer mit genug Platz zum Vorbeifahren, nicht hinter Kurven,
    // nicht neben Drops und nicht am Start
    this.rocks = [];
    if (this.cx) {
      const rr = mulberry32(99);
      let tries = 0;
      while (this.rocks.length < 0 && tries++ < 800) { // Wunsch von Paul: keine Felsblöcke mehr im Cycle Cross
        const i = Math.floor(rr() * N);
        const s = i * this.ds;
        if (Math.min(i, N - i) * this.ds < 50) continue;
        if (this.drops.some((d) => Math.abs(d.i - i) * this.ds < 30)) continue;
        if (this.rocks.some((r) => Math.abs(r.i - i) * this.ds < 45)) continue;
        const rh = this.rhArr[i];
        if (rh < 1.05) continue;
        if (this.turnBetween(i - Math.round(20 / this.ds), i) > 0.35) continue;
        const r = 0.35 + rr() * 0.25;
        const side = rr() < 0.5 ? -1 : 1;
        // Stein an einen Rand, auf der anderen Seite bleibt mindestens etwa 1 m frei
        const lat = side * (rh - r - 0.1) * (0.6 + 0.4 * rr());
        this.rocks.push({ i, s, lat, r });
      }
    }

    // Raster für schnelle "Wo ist die nächste Straße?"-Abfragen
    this.grid = new Map();
    for (let i = 0; i < N; i++) {
      const key = this.cellKey(Math.floor(px[i] / CELL), Math.floor(pz[i] / CELL));
      let arr = this.grid.get(key);
      if (!arr) this.grid.set(key, (arr = []));
      arr.push(i);
    }
  }

  cellKey(cx, cz) {
    return (cx + 1000) * 4000 + (cz + 1000);
  }

  // Wie stark der Weg zwischen den Punkten a und b die Richtung ändert (größte Abweichung, in Radiant)
  turnBetween(a, b) {
    const N = this.N;
    const ang = (i) => Math.atan2(this.tx[((i % N) + N) % N], this.tz[((i % N) + N) % N]);
    const h0 = ang(a);
    let m = 0;
    for (let j = a; j <= b; j++) m = Math.max(m, Math.abs(Math.atan2(Math.sin(ang(j) - h0), Math.cos(ang(j) - h0))));
    return m;
  }

  // Halbe Breite von Weg und Seitenstreifen an der Stelle s (Meter ab Start)
  shAt(s) {
    const i = Math.floor((((s % this.length) + this.length) % this.length) / this.ds) % this.N;
    return this.shArr[i];
  }

  // Nächster Punkt auf der Straße. Gibt ein wiederverwendetes Objekt zurück!
  nearest(x, z) {
    const res = this._nr;
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    let best = Infinity;
    let bi = -1;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const arr = this.grid.get(this.cellKey(cx + dx, cz + dz));
        if (!arr) continue;
        for (let k = 0; k < arr.length; k++) {
          const i = arr[k];
          const ddx = this.px[i] - x;
          const ddz = this.pz[i] - z;
          const d = ddx * ddx + ddz * ddz;
          if (d < best) {
            best = d;
            bi = i;
          }
        }
      }
    }
    if (bi < 0) {
      res.found = false;
      res.dist = Infinity;
      return res;
    }
    const N = this.N;
    best = Infinity;
    for (const a of [(bi - 1 + N) % N, bi]) {
      const b = (a + 1) % N;
      const ax = this.px[a];
      const az = this.pz[a];
      const abx = this.px[b] - ax;
      const abz = this.pz[b] - az;
      const t = clamp(((x - ax) * abx + (z - az) * abz) / (abx * abx + abz * abz), 0, 1);
      const qx = ax + abx * t;
      const qz = az + abz * t;
      const d = (x - qx) * (x - qx) + (z - qz) * (z - qz);
      if (d < best) {
        best = d;
        res.i = a;
        res.f = t;
        res.lateral = (x - qx) * -this.tz[a] + (z - qz) * this.tx[a];
      }
    }
    const b = (res.i + 1) % N;
    res.found = true;
    res.dist = Math.sqrt(best);
    res.h = lerp(this.ph[res.i], this.ph[b], res.f);
    res.s = (res.i + res.f) * this.ds;
    return res;
  }

  terrainHeight(x, z) {
    const nr = this.nearest(x, z);
    const b = this.baseHeight(x, z);
    if (!nr.found) return b;
    const rh = this.rhArr[nr.i];
    const w = smoothstep(rh + 1.2, rh + 22, nr.dist);
    return lerp(nr.h - 0.15, b, w);
  }

  // Höhe des Bodens, auf dem ein Rad fährt, und welche Oberfläche
  groundAt(x, z, out = {}) {
    const nr = this.nearest(x, z);
    const rh = nr.found ? this.rhArr[nr.i] : this.RH;
    const sh = nr.found ? this.shArr[nr.i] : this.SH;
    if (nr.found && nr.dist < rh + 0.2) {
      out.h = nr.h + 0.06;
      out.surface = this.cx ? 'gravel' : 'road'; // Waldweg = Erde/Schotter
    } else if (nr.found && nr.dist < sh) {
      out.h = nr.h + 0.03 - smoothstep(rh + 0.5, sh, nr.dist) * 0.12;
      out.surface = this.cx ? 'grass' : 'gravel'; // im Wald: Laub und Waldboden
    } else {
      out.h = this.terrainHeight(x, z);
      out.surface = 'grass';
    }
    return out;
  }

  // Position auf der Strecke: s = Meter ab Start, lateral = seitlicher Versatz (+ = rechts)
  poseAt(s, lateral = 0, out = {}) {
    const L = this.length;
    s = ((s % L) + L) % L;
    const f = s / this.ds;
    const i = Math.floor(f) % this.N;
    const j = (i + 1) % this.N;
    const t = f - Math.floor(f);
    const txv = lerp(this.tx[i], this.tx[j], t);
    const tzv = lerp(this.tz[i], this.tz[j], t);
    const l = Math.hypot(txv, tzv);
    out.tx = txv / l;
    out.tz = tzv / l;
    out.x = lerp(this.px[i], this.px[j], t) - out.tz * lateral;
    out.z = lerp(this.pz[i], this.pz[j], t) + out.tx * lateral;
    out.h = lerp(this.ph[i], this.ph[j], t) + 0.06;
    out.heading = Math.atan2(out.tx, out.tz);
    const a = this.ph[(i - 2 + this.N) % this.N];
    const b = this.ph[(i + 3) % this.N];
    out.pitch = Math.atan2(b - a, this.ds * 5);
    out.s = s;
    return out;
  }

  // ---------- Himmel & Licht ----------
  buildSky(renderer) {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    const u = sky.material.uniforms;
    u.turbidity.value = 7;
    u.rayleigh.value = 2.4;
    u.mieCoefficient.value = 0.006;
    u.mieDirectionalG.value = 0.86;

    // Die Sonne geht hinter dem Startbereich auf
    const pose = this.poseAt(this.length - 100);
    const elev = THREE.MathUtils.degToRad(CONFIG.sunElevation);
    this.sunDir = new THREE.Vector3(-pose.tx * Math.cos(elev), Math.sin(elev), -pose.tz * Math.cos(elev))
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.35)
      .normalize();
    u.sunPosition.value.copy(this.sunDir);
    this.scene.add(sky);
    this.sky = sky;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const envSky = new Sky();
    envSky.scale.setScalar(50);
    envSky.material = sky.material;
    envScene.add(envSky);
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    this.scene.environmentIntensity = 0.55;
    pmrem.dispose();

    // Im Wald dichter, leicht grünlicher Dunst
    this.scene.fog = this.cx
      ? new THREE.FogExp2(new THREE.Color(this.autumn ? '#a8977a' : '#9fa88f'), 0.0042)
      : new THREE.FogExp2(new THREE.Color('#c9a58f'), 0.0013);
  }

  buildLights() {
    // im dichten Wald etwas mehr Himmelslicht, sonst wird es unter dem Blätterdach zu dunkel
    const hemi = new THREE.HemisphereLight('#b9cdf5', '#5b4634', this.cx ? 1.35 : 0.9);
    this.scene.add(hemi);

    // Das Sonnenlicht steht etwas höher als die sichtbare Sonne – so bleibt die Landschaft hell
    const az = Math.atan2(this.sunDir.x, this.sunDir.z);
    const el = THREE.MathUtils.degToRad(17);
    this.lightDir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const sun = new THREE.DirectionalLight('#ffc994', 3.4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = sc.bottom = -32;
    sc.right = sc.top = 32;
    sc.near = 1;
    sc.far = 150; // Sonne steht 120 m entfernt: weiter hinten wirft nichts mehr Schatten ins Bild
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    this.scene.add(sun, sun.target);
    this.sun = sun;
  }

  // ---------- Gelände ----------
  buildTerrain() {
    const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, TERRAIN_SEG, TERRAIN_SEG);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const count = pos.count;
    const roadW = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const nr = this.nearest(x, z);
      const b = this.baseHeight(x, z);
      let h = b;
      if (nr.found) {
        const rh = this.rhArr[nr.i];
        const w = smoothstep(rh + 1.2, rh + 22, nr.dist);
        h = lerp(nr.h - 0.15, b, w);
        roadW[i] = 1 - smoothstep(this.shArr[nr.i], this.shArr[nr.i] + 5, nr.dist);
      }
      pos.setY(i, h);
    }
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal;

    // Im Wald: Moos und braunes Laub statt Wiese
    // Im Herbst: olivbraunes Gras und viel orange-braunes Laub am Boden
    const cGrassA = new THREE.Color(this.autumn ? '#4a4a22' : this.cx ? '#33501f' : '#3f6b25');
    const cGrassB = new THREE.Color(this.autumn ? '#7a6a2e' : this.cx ? '#5b6b2c' : '#86a33c');
    const cDry = new THREE.Color(this.autumn ? '#9a5a26' : this.cx ? '#7a5a34' : '#b9a457');
    const cRock = new THREE.Color('#7d756b');
    const cSnow = new THREE.Color('#f4efe9');
    const cDirt = new THREE.Color(this.cx ? '#5e4630' : '#8d7457');
    const cSand = new THREE.Color('#cbb98b');
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = pos.getY(i);
      const g = this.n3(x * 0.012, z * 0.012) * 0.5 + 0.5;
      c.copy(cGrassA).lerp(cGrassB, g);
      const dry = smoothstep(0.25, 0.8, this.n2(x * 0.004 + 50, z * 0.004));
      c.lerp(cDry, dry * (this.autumn ? 0.85 : 0.55));
      const slope = 1 - nrm.getY(i);
      const rock = clamp(smoothstep(0.18, 0.4, slope) + smoothstep(50, 100, h) * 0.7, 0, 1);
      c.lerp(cRock, rock);
      const snow = smoothstep(115, 150, h + this.n1(x * 0.02, z * 0.02) * 12);
      c.lerp(cSnow, snow);
      c.lerp(cDirt, roadW[i] * 0.85);
      // Sandstrand am See
      const lake = this.lakeAt(x, z, 4);
      if (lake) c.lerp(cSand, smoothstep(lake.level + 1.4, lake.level - 0.2, h));
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const rand = mulberry32(5);
    const grassTex = canvasTex(
      256,
      256,
      (ctx, w, h) => {
        speckle(ctx, w, h, rand, '#e8e8e8', 255, 9000, 1);
        for (let i = 0; i < 1600; i++) {
          ctx.fillStyle = `rgba(30,40,10,${0.08 + rand() * 0.12})`;
          ctx.fillRect(rand() * w, rand() * h, 1, 2 + rand() * 4);
        }
      },
      { repeat: [360, 360] },
    );
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: grassTex, roughness: 0.95 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  buildLakes() {
    const mat = new THREE.MeshStandardMaterial({
      color: '#2c6a8e',
      roughness: 0.05,
      metalness: 0.15,
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 1.5,
    });
    for (const l of this.lakes) {
      const geo = new THREE.CircleGeometry(1, 96);
      const pos = geo.attributes.position;
      for (let i = 1; i < pos.count; i++) {
        const a = Math.atan2(pos.getY(i), pos.getX(i));
        // Nach dem Hinlegen landet Winkel a bei -a in der Welt
        const R = this.lakeRadius(l, -a) * 1.3;
        pos.setXY(i, Math.cos(a) * R, Math.sin(a) * R);
      }
      // Kreis liegt in der x/y-Ebene -> flach hinlegen
      geo.rotateX(-Math.PI / 2);
      const water = new THREE.Mesh(geo, mat);
      water.position.set(l.x, l.level, l.z);
      water.receiveShadow = true;
      this.scene.add(water);
    }
  }

  // ---------- Straße ----------
  buildRoad() {
    const N = this.N;
    const rand = mulberry32(9);
    const asphalt = this.cx ? dirtTexture(rand) : this.tt ? cobbleTexture(rand) : canvasTex(256, 1024, (ctx, w, h) => {
      speckle(ctx, w, h, rand, '#45464a', 255, 26000, 1.2);
      // Flicken & Reifenspuren
      for (let i = 0; i < 18; i++) {
        ctx.fillStyle = `rgba(20,20,22,${0.08 + rand() * 0.1})`;
        ctx.fillRect(rand() * w, rand() * h, 20 + rand() * 60, 30 + rand() * 120);
      }
      ctx.fillStyle = 'rgba(15,15,15,0.18)';
      ctx.fillRect(w * 0.2, 0, w * 0.1, h);
      ctx.fillRect(w * 0.7, 0, w * 0.1, h);
      // Randlinien und Mittellinie
      ctx.fillStyle = '#eceae2';
      ctx.fillRect(w * 0.035, 0, w * 0.03, h);
      ctx.fillRect(w * 0.935, 0, w * 0.03, h);
      ctx.fillRect(w * 0.49, 0, w * 0.02, h * 0.5);
    });
    asphalt.wrapT = THREE.RepeatWrapping;
    this.roadTex = asphalt; // das Dorf nutzt das Pflaster auch für den Dorfplatz
    const gravel = canvasTex(
      256,
      256,
      (ctx, w, h) => {
        if (this.cx) {
          // Laub am Wegrand
          speckle(ctx, w, h, rand, '#5a4a2c', 255, 6000, 1.5);
          for (let i = 0; i < 700; i++) {
            ctx.fillStyle = `hsl(${20 + rand() * 30}, ${50 + rand() * 30}%, ${22 + rand() * 25}%)`;
            ctx.beginPath();
            ctx.ellipse(rand() * w, rand() * h, 2 + rand() * 4, 1 + rand() * 2, rand() * 3, 0, Math.PI * 2);
            ctx.fill();
          }
        } else speckle(ctx, w, h, rand, '#8a7a66', 255, 12000, 1.5);
      },
      { repeat: [1, 1] },
    );
    gravel.wrapS = gravel.wrapT = THREE.RepeatWrapping;

    const road = [];
    const roadUv = [];
    const sh = [];
    const shUv = [];
    for (let k = 0; k <= N; k++) {
      const i = k % N;
      const x = this.px[i];
      const z = this.pz[i];
      const h = this.ph[i];
      const sx = -this.tz[i];
      const sz = this.tx[i];
      const v = (k * this.ds) / 12;
      const rh = this.rhArr[i];
      road.push(x - sx * rh, h + 0.06, z - sz * rh, x + sx * rh, h + 0.06, z + sz * rh);
      roadUv.push(0, v, 1, v);
      const a = this.shArr[i];
      const b = rh + 0.3;
      sh.push(
        x - sx * a, h - 0.12, z - sz * a,
        x - sx * b, h + 0.035, z - sz * b,
        x + sx * b, h + 0.035, z + sz * b,
        x + sx * a, h - 0.12, z + sz * a,
      );
      const vv = (k * this.ds) / 4;
      shUv.push(0, vv, 0.4, vv, 0.6, vv, 1, vv);
    }
    const roadIdx = [];
    const shIdx = [];
    for (let k = 0; k < N; k++) {
      const l0 = k * 2;
      const l1 = (k + 1) * 2;
      roadIdx.push(l0, l0 + 1, l1, l0 + 1, l1 + 1, l1);
      const s0 = k * 4;
      const s1 = (k + 1) * 4;
      for (let q = 0; q < 3; q++) shIdx.push(s0 + q, s0 + q + 1, s1 + q, s0 + q + 1, s1 + q + 1, s1 + q);
    }
    const mk = (verts, uvs, idx) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    };
    const roadMesh = new THREE.Mesh(
      mk(road, roadUv, roadIdx),
      new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, metalness: 0.0, envMapIntensity: 0.6 }),
    );
    roadMesh.receiveShadow = true;
    // Rennrad-Strecke: echte Asphalt-Textur (Road011A von ambientCG, CC0) mit gelben Linien.
    // Bis sie geladen ist, bleibt die gemalte Straße.
    if (!this.cx && !this.tt) {
      const L = new THREE.TextureLoader();
      const mat = roadMesh.material;
      const prep = (t, srgb) => {
        t.wrapS = THREE.ClampToEdgeWrapping;
        t.wrapT = THREE.RepeatWrapping;
        t.anisotropy = 8;
        if (srgb) t.colorSpace = THREE.SRGBColorSpace;
        // Textur ist quadratisch: ein Bild = 14 m Straße (Gerüst-UV: 12 m)
        t.repeat.set(1, 12 / 14);
        return t;
      };
      L.load('texturen/strasse/farbe.jpg', (t) => {
        mat.map = prep(t, true);
        mat.needsUpdate = true;
      });
      L.load('texturen/strasse/normal.jpg', (t) => {
        mat.normalMap = prep(t, false);
        mat.normalScale.set(0.8, 0.8);
        mat.needsUpdate = true;
      });
      L.load('texturen/strasse/rauheit.jpg', (t) => {
        mat.roughnessMap = prep(t, false);
        mat.roughness = 1;
        mat.needsUpdate = true;
      });
    }
    const shMesh = new THREE.Mesh(
      mk(sh, shUv, shIdx),
      new THREE.MeshStandardMaterial({ map: gravel, roughness: 1, polygonOffset: true, polygonOffsetFactor: 1 }),
    );
    shMesh.receiveShadow = true;
    this.scene.add(roadMesh, shMesh);
  }

  // ---------- Bäume, Gras, Blumen, Steine ----------
  instanced(geo, mat, matrices, colors, { cast = true, receive = true } = {}) {
    const make = (list, cols) => {
      const m = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach((mx, i) => m.setMatrixAt(i, mx));
      if (cols) cols.forEach((c, i) => m.setColorAt(i, c));
      m.castShadow = cast;
      m.receiveShadow = receive;
      m.instanceMatrix.needsUpdate = true;
      m.computeBoundingSphere();
      this.scene.add(m);
      return m;
    };
    if (matrices.length < 40) return make(matrices, colors);
    // Viele Exemplare: in Kacheln aufteilen, damit nur gezeichnet wird, was im Bild (und nicht zu weit weg) ist
    const CELL = 60;
    const cells = new Map();
    matrices.forEach((mx, i) => {
      const k = `${Math.floor(mx.elements[12] / CELL)},${Math.floor(mx.elements[14] / CELL)}`;
      if (!cells.has(k)) cells.set(k, { mats: [], cols: [] });
      const c = cells.get(k);
      c.mats.push(mx);
      if (colors) c.cols.push(colors[i]);
    });
    let first = null;
    this.chunks ||= [];
    for (const c of cells.values()) {
      const m = make(c.mats, colors ? c.cols : null);
      this.chunks.push(m);
      first ||= m;
    }
    return first;
  }

  buildVegetation() {
    const rand = this.rand;
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const mtx = (x, y, z, s, sy = s, yaw = rand() * Math.PI * 2) =>
      new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), q.setFromAxisAngle(up, yaw).clone(), new THREE.Vector3(s, sy, s));

    // Baum-Formen
    const pineCrown = mergeGeometries([
      new THREE.ConeGeometry(1.9, 4.2, 8).translate(0, 3.6, 0),
      new THREE.ConeGeometry(1.4, 3.4, 8).translate(0, 5.7, 0),
      new THREE.ConeGeometry(0.85, 2.4, 8).translate(0, 7.4, 0),
    ]);
    const pineTrunk = new THREE.CylinderGeometry(0.16, 0.28, 2.4, 6).translate(0, 1.2, 0);
    const leafCrown = new THREE.IcosahedronGeometry(2.3, 1);
    const lp = leafCrown.attributes.position;
    for (let i = 0; i < lp.count; i++) {
      const x = lp.getX(i);
      const y = lp.getY(i);
      const z = lp.getZ(i);
      const k = 1 + this.n1(x * 1.3 + 3, z * 1.3 + y) * 0.22;
      lp.setXYZ(i, x * k, y * k * 0.85, z * k);
    }
    leafCrown.translate(0, 4.4, 0);
    leafCrown.computeVertexNormals();
    const leafTrunk = new THREE.CylinderGeometry(0.2, 0.32, 3.2, 6).translate(0, 1.6, 0);

    const crownMat = new THREE.MeshStandardMaterial({ color: '#ffffff', flatShading: true, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#5a4030', roughness: 1 });

    const pines = [];
    const pineCol = [];
    const leafs = [];
    const leafCol = [];
    const lim = this.cx ? 520 : 860;
    let tries = 0;
    // Dorf: weniger Bäume, die Häuser brauchen Platz
    const maxTrees = this.cx ? 7000 : this.tt ? 1300 : 2600;
    while (pines.length + leafs.length < maxTrees && tries++ < 60000) {
      const x = (rand() * 2 - 1) * lim;
      const z = (rand() * 2 - 1) * lim;
      if (Math.hypot(x, z) > (this.cx ? 540 : 870)) continue;
      const dens = this.n3(x * 0.006 + 20, z * 0.006);
      if (!this.cx && dens < 0.05 && rand() > 0.08) continue;
      const nr = this.nearest(x, z);
      if (nr.found && nr.dist < (this.cx ? this.shArr[nr.i] + 1.6 : this.tt ? 26 : 11)) continue;
      if (this.lakeAt(x, z, 6)) continue;
      const h = this.terrainHeight(x, z);
      if (h > 120) continue;
      const s = 0.75 + rand() * 0.75;
      if (h > 45 || dens > 0.45 || rand() < 0.35) {
        pines.push(mtx(x, h - 0.2, z, s, s * (0.9 + rand() * 0.4)));
        pineCol.push(new THREE.Color().setHSL(0.31 + rand() * 0.05, 0.45, 0.17 + rand() * 0.08));
      } else {
        leafs.push(mtx(x, h - 0.2, z, s));
        leafCol.push(new THREE.Color().setHSL(0.18 + rand() * 0.1, 0.5, 0.25 + rand() * 0.12));
      }
    }
    if (this.nature) this.plantModels(rand, pines, leafs, 3.0);
    else {
      this.instanced(pineCrown, crownMat, pines, pineCol);
      this.instanced(pineTrunk, trunkMat, pines);
      this.instanced(leafCrown, crownMat, leafs, leafCol);
      this.instanced(leafTrunk, trunkMat, leafs);
    }

    // Waldweg: Riesenbäume direkt am Weg, deren Kronen sich über dem Weg schließen
    if (this.cx) {
      const gLeaf = [];
      const gLeafCol = [];
      const gPine = [];
      const gPineCol = [];
      const pose = {};
      for (const side of [-1, 1]) {
        for (let s = rand() * 5; s < this.length; s += 4.5 + rand() * 4.5) {
          const lat = side * (this.shAt(s) + 1.0 + rand() * 2.5);
          this.poseAt(s, lat, pose);
          const h = this.terrainHeight(pose.x, pose.z);
          const sc = 2.6 + rand() * 1.0;
          if (rand() < 0.75) {
            gLeaf.push(mtx(pose.x, h - 0.3, pose.z, sc, sc * (0.95 + rand() * 0.25)));
            gLeafCol.push(new THREE.Color().setHSL(0.22 + rand() * 0.08, 0.5, 0.2 + rand() * 0.1));
          } else {
            gPine.push(mtx(pose.x, h - 0.3, pose.z, sc * 0.9, sc * (1.0 + rand() * 0.3)));
            gPineCol.push(new THREE.Color().setHSL(0.31 + rand() * 0.04, 0.45, 0.14 + rand() * 0.06));
          }
        }
      }
      // Riesenbäume nur als Laubbäume (Nadelbäume hängen sonst mit tiefen Ästen über den Weg)
      if (this.nature) this.plantModels(rand, [], [...gLeaf, ...gPine], 3.0, true);
      else {
        this.instanced(leafCrown, crownMat, gLeaf, gLeafCol);
        this.instanced(leafTrunk, trunkMat, gLeaf);
        this.instanced(pineCrown, crownMat, gPine, gPineCol);
        this.instanced(pineTrunk, trunkMat, gPine);
      }
      this.giantCount = gLeaf.length + gPine.length;
    }

    // Grasbüschel entlang der Straße
    const blades = [];
    for (let k = 0; k < 3; k++) {
      const g = new THREE.BufferGeometry();
      const w = 0.05;
      g.setAttribute('position', new THREE.Float32BufferAttribute([-w, 0, 0, w, 0, 0, 0.03, 0.55, 0], 3));
      const cb = this.autumn ? [0.22, 0.18, 0.07] : [0.18, 0.3, 0.08];
      const ct = this.autumn ? [0.8, 0.6, 0.28] : [0.75, 0.8, 0.35];
      g.setAttribute('color', new THREE.Float32BufferAttribute([...cb, ...cb, ...ct], 3));
      g.rotateZ((rand() - 0.5) * 0.5);
      g.rotateY((k / 3) * Math.PI + rand() * 0.4);
      g.translate((rand() - 0.5) * 0.15, 0, (rand() - 0.5) * 0.15);
      g.computeVertexNormals();
      blades.push(g);
    }
    const tuft = mergeGeometries(blades);
    const grass = [];
    const grassCol = [];
    const flowers = [];
    const flowerCol = [];
    // Sommer: Blumen. Herbst: Laubhäufchen in Orange, Rot, Gelb und Braun
    const flowerPalette = (this.autumn ? ['#c2461f', '#e07b24', '#e9b13a', '#8a3b1c', '#b5651d'] : ['#f2d14b', '#ffffff', '#e2455b', '#9b6bd6', '#ff9a3c']).map((c) => new THREE.Color(c));
    const pose = {};
    // Dorf: weniger Gras, und nie auf dem Pflaster (die Runde ist eng, andere Straßenstücke liegen nah)
    for (let i = 0; i < (this.tt ? 9000 : 22000); i++) {
      const s = rand() * this.length;
      const side = rand() < 0.5 ? -1 : 1;
      const lat = side * (this.SH + 0.3 + Math.pow(rand(), 1.6) * 45);
      this.poseAt(s, lat, pose);
      if (this.lakeAt(pose.x, pose.z, 1)) continue;
      if (this.tt && !this.clearOfPath(pose.x, pose.z, 0.4)) continue;
      const h = this.terrainHeight(pose.x, pose.z);
      const sc = 0.7 + rand() * 0.9;
      grass.push(mtx(pose.x, h - 0.05, pose.z, sc, sc * (0.8 + rand() * 0.8)));
      grassCol.push(new THREE.Color().setHSL((this.autumn ? 0.1 : 0.2) + rand() * 0.06, 0.4, 0.4 + rand() * 0.3));
      if (rand() < (this.autumn ? 0.3 : 0.1)) {
        const fs = 0.6 + rand() * 0.5;
        if (this.autumn) flowers.push(mtx(pose.x + rand() - 0.5, h + 0.02, pose.z + rand() - 0.5, fs * 1.6, fs * 0.35));
        else flowers.push(mtx(pose.x + rand() - 0.5, h + 0.28 + rand() * 0.1, pose.z + rand() - 0.5, fs));
        flowerCol.push(flowerPalette[Math.floor(rand() * flowerPalette.length)]);
      }
    }
    const grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 1 });
    this.instanced(tuft, grassMat, grass, grassCol, { cast: false });
    this.instanced(
      new THREE.IcosahedronGeometry(0.07, 0),
      new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.7 }),
      flowers,
      flowerCol,
      { cast: false },
    );

    // Steine
    const rocks = [];
    for (let i = 0; i < 260; i++) {
      const x = (rand() * 2 - 1) * 800;
      const z = (rand() * 2 - 1) * 800;
      const nr = this.nearest(x, z);
      if (nr.found && nr.dist < 7) continue;
      if (this.lakeAt(x, z, 2)) continue;
      const s = 0.4 + rand() * 1.8;
      rocks.push(
        new THREE.Matrix4().compose(
          new THREE.Vector3(x, this.terrainHeight(x, z) - s * 0.3, z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
          new THREE.Vector3(s, s * 0.7, s * (0.8 + rand() * 0.4)),
        ),
      );
    }
    if (this.nature) {
      this.placeOnGeos(rocks, this.nature.rocks, rand, 0.9);
      this.plantUnderwood(rand);
    } else {
      this.instanced(
        new THREE.DodecahedronGeometry(1, 0),
        new THREE.MeshStandardMaterial({ color: '#8b8580', roughness: 0.95, flatShading: true }),
        rocks,
      );
    }

    // Strohballen auf den Feldern (nicht im Wald)
    const bales = [];
    for (let i = 0; i < (this.cx || this.tt ? 0 : 60); i++) {
      const s = rand() * this.length;
      const lat = (rand() < 0.5 ? -1 : 1) * (18 + rand() * 60);
      this.poseAt(s, lat, pose);
      const h = this.terrainHeight(pose.x, pose.z);
      if (h > 30 || this.lakeAt(pose.x, pose.z, 3)) continue;
      bales.push(
        new THREE.Matrix4().compose(
          new THREE.Vector3(pose.x, h + 0.7, pose.z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand() * 3, Math.PI / 2)),
          new THREE.Vector3(1, 1, 1),
        ),
      );
    }
    this.instanced(
      new THREE.CylinderGeometry(0.75, 0.75, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: '#d2b15e', roughness: 1 }),
      bales,
    );
  }

  // Bäume, Büsche, Steine usw. in diesen Kreisen ausblenden (z. B. wo Häuser stehen)
  clearAreas(areas) {
    const m = new THREE.Matrix4();
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    // schneller Vorab-Test: Rechteck um alle Kreise
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const a of areas) {
      x0 = Math.min(x0, a.x - a.r);
      x1 = Math.max(x1, a.x + a.r);
      z0 = Math.min(z0, a.z - a.r);
      z1 = Math.max(z1, a.z + a.r);
    }
    this.scene.traverse((o) => {
      if (!o.isInstancedMesh) return;
      let changed = false;
      for (let i = 0; i < o.count; i++) {
        o.getMatrixAt(i, m);
        const x = m.elements[12];
        const z = m.elements[14];
        if (x < x0 || x > x1 || z < z0 || z > z1) continue;
        for (const a of areas) {
          if ((x - a.x) ** 2 + (z - a.z) ** 2 < a.r * a.r) {
            o.setMatrixAt(i, zero);
            changed = true;
            break;
          }
        }
      }
      if (changed) {
        o.instanceMatrix.needsUpdate = true;
        o.computeBoundingSphere?.();
      }
    });
  }

  // Ist der Kreis (x, z, Radius r) frei vom Weg samt Seitenstreifen? Prüft das nächste Wegstück überhaupt.
  clearOfPath(x, z, r) {
    const nr = this.nearest(x, z);
    return !nr.found || nr.dist >= this.shArr[nr.i] + r;
  }

  // ---------- Natur-Modelle (Quaternius) ----------
  // variante 0/1: zwei verschiedene Baumrinden (Bark007 und Bark012 von ambientCG, CC0), „mal so, mal so“
  natureMaterial(variante = 0) {
    this._natMats ||= [];
    if (this._natMats[variante]) return this._natMats[variante];
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
    const tex = new THREE.TextureLoader().load(`texturen/rinde/${variante ? 'rinde012' : 'rinde007'}.jpg`);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 4;
    // Rinde ohne Nähte: von zwei Seiten auf den Stamm projizieren (im Modell-Raum, wandert mit dem Baum mit)
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.barkMap = { value: tex };
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float bark;\nvarying float vBark;\nvarying vec3 vBarkPos;\nvarying vec3 vBarkN;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBark = bark;\nvBarkPos = position;\nvBarkN = normal;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform sampler2D barkMap;\nvarying float vBark;\nvarying vec3 vBarkPos;\nvarying vec3 vBarkN;')
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
          if (vBark > 0.5) {
            vec3 n = abs(normalize(vBarkN));
            vec2 sc = vec2(1.6, 0.8);
            vec3 a = texture2D(barkMap, vBarkPos.xy * sc).rgb;
            vec3 b = texture2D(barkMap, vBarkPos.zy * sc).rgb;
            float w = n.x / max(n.x + n.z, 0.001);
            vec3 rinde = mix(a, b, w);
            // etwas Farbe des Modells (und die Tönung je Baum) behalten
            diffuseColor.rgb = rinde * (0.55 + 0.6 * vColor.rgb / max(max(vColor.r, vColor.g), max(vColor.b, 0.001)) * 0.75);
          }`,
        );
    };
    mat.customProgramCacheKey = () => 'rinde' + variante;
    return (this._natMats[variante] = mat);
  }

  // Zufällige Farbtönung pro Baum, damit nicht alle gleich aussehen
  leafTint(rand) {
    if (!this.autumn) return new THREE.Color(1, 1, 1).multiplyScalar(0.85 + rand() * 0.3);
    const r = rand();
    if (r < 0.35) return new THREE.Color(1.5, 0.7, 0.5); // leuchtend rot
    if (r < 0.7) return new THREE.Color(1.3, 1.2, 0.55); // goldgelb
    return new THREE.Color(1, 1, 1).multiplyScalar(0.9 + rand() * 0.25); // orange
  }

  // Bäume: Nadelbäume (pines) und Laubbäume (leafs) aus den Modellen, scale = Grundgröße
  plantModels(rand, pines, leafs, scale, giant = false) {
    const T = this.nature.trees[this.season] || this.nature.trees.sommer;
    const groups = new Map();
    const add = (geo, m, c) => {
      // Stamm darf nie auf dem Weg stehen
      const e = m.elements;
      const s = Math.hypot(e[0], e[1], e[2]) * scale;
      if (!this.clearOfPath(e[12], e[14], (giant ? 0.14 : 0.1) * s + 0.4)) return;
      if (!groups.has(geo)) groups.set(geo, { mats: [], cols: [] });
      const g = groups.get(geo);
      g.mats.push(m.clone().multiply(new THREE.Matrix4().makeScale(scale, scale, scale)));
      g.cols.push(c);
    };
    const v = () => Math.floor(rand() * 5);
    for (const m of pines) {
      // im Herbst sind ein paar Nadelbäume (Lärchen) gelb-orange
      const list = this.autumn && rand() < 0.25 ? T.pineAlt : T.pine;
      add(list[v()], m, new THREE.Color(1, 1, 1).multiplyScalar(0.85 + rand() * 0.3));
    }
    for (const m of leafs) {
      const r = rand();
      // Riesenbäume: vor allem breite Laubbäume, ein paar Birken
      const list = giant ? (r < 0.85 ? T.common : T.birch) : r < 0.5 ? T.common : r < 0.8 ? T.birch : T.willow;
      add(list[v()], m, this.leafTint(rand));
    }
    // Jeder Baum bekommt per Zufall eine der beiden Rinden
    for (const [geo, g] of groups) {
      const teile = [{ mats: [], cols: [] }, { mats: [], cols: [] }];
      g.mats.forEach((m, i) => {
        const t = teile[rand() < 0.5 ? 0 : 1];
        t.mats.push(m);
        t.cols.push(g.cols[i]);
      });
      teile.forEach((t, k) => t.mats.length && this.instanced(geo, this.natureMaterial(k), t.mats, t.cols));
    }
  }

  // Matrizen zufällig auf mehrere Modelle verteilen (z. B. Felsen)
  placeOnGeos(mats, geos, rand, scale = 1, tint = null) {
    const groups = geos.map(() => ({ mats: [], cols: [] }));
    for (const m of mats) {
      const k = Math.floor(rand() * geos.length);
      groups[k].mats.push(scale === 1 ? m : m.clone().multiply(new THREE.Matrix4().makeScale(scale, scale, scale)));
      groups[k].cols.push(tint ? tint(rand) : new THREE.Color(1, 1, 1).multiplyScalar(0.85 + rand() * 0.3));
    }
    groups.forEach((g, k) => g.mats.length && this.instanced(geos[k], this.natureMaterial(), g.mats, g.cols));
  }

  // Büsche, Baumstümpfe und liegende Stämme
  plantUnderwood(rand) {
    const pose = {};
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const at = (x, z, s, sy = s, yaw = rand() * Math.PI * 2) =>
      new THREE.Matrix4().compose(new THREE.Vector3(x, this.terrainHeight(x, z) - 0.05, z), q.setFromAxisAngle(up, yaw).clone(), new THREE.Vector3(s, sy, s));
    const bushes = [];
    // Dorf: nur ein paar Büsche
    const nBush = this.cx ? 2600 : this.tt ? 260 : 1600;
    for (let i = 0; i < nBush * 2 && bushes.length < nBush; i++) {
      const sd = rand() < 0.5 ? -1 : 1;
      const lat = sd * (this.SH + 1.4 + Math.pow(rand(), 1.4) * (this.cx ? 14 : 55));
      this.poseAt(rand() * this.length, lat, pose);
      const sc = 0.8 + rand() * 0.8;
      if (!this.clearOfPath(pose.x, pose.z, 0.75 * sc + 0.3)) continue;
      if (this.lakeAt(pose.x, pose.z, 2)) continue;
      bushes.push(at(pose.x, pose.z, sc, sc * (0.8 + rand() * 0.4)));
    }
    // Herbst: Büsche teils gelb oder rot verfärbt
    const bushTint = (r) => {
      if (!this.autumn) return new THREE.Color(1, 1, 1).multiplyScalar(0.9 + r() * 0.4);
      const x = r();
      if (x < 0.35) return new THREE.Color(2.6, 1.0, 0.5);
      if (x < 0.7) return new THREE.Color(2.4, 1.6, 0.5);
      return new THREE.Color(1.2, 1.1, 0.8);
    };
    this.placeOnGeos(bushes, this.nature.bushes, rand, 1, bushTint);
    const stumps = [];
    const logs = [];
    for (let i = 0; i < (this.cx ? 260 : this.tt ? 30 : 160); i++) {
      const sd = rand() < 0.5 ? -1 : 1;
      this.poseAt(rand() * this.length, sd * (this.SH + 2 + rand() * (this.cx ? 12 : 60)), pose);
      if (this.lakeAt(pose.x, pose.z, 2)) continue;
      if (rand() < 0.5) {
        const s = 1.1 + rand() * 0.7;
        if (this.clearOfPath(pose.x, pose.z, 0.75 * s + 0.3)) stumps.push(at(pose.x, pose.z, s));
      } else {
        // Stämme liegen längs zum Weg; beide Enden müssen frei sein
        const s = 1.0 + rand() * 0.4;
        const half = 1.35 * s;
        const ok =
          this.clearOfPath(pose.x + pose.tx * half, pose.z + pose.tz * half, 0.6) &&
          this.clearOfPath(pose.x - pose.tx * half, pose.z - pose.tz * half, 0.6) &&
          this.clearOfPath(pose.x, pose.z, 0.6);
        if (ok) logs.push(at(pose.x, pose.z, s, s, pose.heading + (rand() - 0.5) * 0.4));
      }
    }
    this.placeOnGeos(stumps, [this.nature.stump], rand);
    this.placeOnGeos(logs, [this.nature.log], rand);
  }

  // Felsbrocken: grau mit etwas Moos, halb im Boden
  buildRocks(pose) {
    if (this.nature) {
      // Größe so wählen, dass der Fels etwa den Kollisionsradius r hat
      const rand = mulberry32(7);
      const geos = this.nature.rocks;
      const groups = geos.map(() => []);
      for (const r of this.rocks) {
        this.poseAt(r.s, r.lat, pose);
        r.x = pose.x;
        r.z = pose.z;
        const k = Math.floor(rand() * geos.length);
        const bb = geos[k].boundingBox;
        const half = Math.max(bb.max.x - bb.min.x, bb.max.z - bb.min.z) / 2;
        const sc = r.r / half;
        groups[k].push(
          new THREE.Matrix4().compose(
            new THREE.Vector3(pose.x, this.ph[r.i] - 0.05, pose.z),
            new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rand() * 6.28),
            new THREE.Vector3(sc, sc * 1.1, sc),
          ),
        );
      }
      groups.forEach((g, k) => g.length && this.instanced(geos[k], this.natureMaterial(), g));
      return;
    }
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const gp = geo.attributes.position;
    const col = [];
    const moss = new THREE.Color('#5b6b3a');
    const stone = new THREE.Color('#8a8580');
    const c = new THREE.Color();
    for (let i = 0; i < gp.count; i++) {
      const x = gp.getX(i);
      const y = gp.getY(i);
      const z = gp.getZ(i);
      const k = 1 + this.n1(x * 2.1 + 5, z * 2.1 + y * 1.7) * 0.25;
      gp.setXYZ(i, x * k, y * k, z * k);
      c.copy(stone).lerp(moss, Math.max(0, y) * 0.8);
      col.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const rand = mulberry32(7);
    const mats = this.rocks.map((r) => {
      this.poseAt(r.s, r.lat, pose);
      r.x = pose.x;
      r.z = pose.z;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(pose.x, this.ph[r.i] + r.r * 0.35, pose.z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
        new THREE.Vector3(r.r, r.r * 0.8, r.r * 1.1),
      );
    });
    this.instanced(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true }), mats);
  }

  // Ein liegender Baumstamm markiert jede Drop-Kante
  buildDropLogs(pose) {
    const logs = [];
    for (const d of this.drops) {
      this.poseAt(d.s - 0.6, 0, pose);
      const len = this.rhArr[d.i] * 2 + 1.6;
      logs.push(
        new THREE.Matrix4().compose(
          new THREE.Vector3(pose.x, this.ph[d.i] + 0.1, pose.z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(0, pose.heading, Math.PI / 2, 'YXZ')),
          new THREE.Vector3(1, len, 1),
        ),
      );
    }
    this.instanced(new THREE.CylinderGeometry(0.17, 0.2, 1, 10), new THREE.MeshStandardMaterial({ color: '#6b4b30', roughness: 1 }), logs);
  }

  // Cycle Cross: Holzpflöcke mit rot-weißem Absperrband links und rechts vom Weg
  buildTape(pose) {
    const stakes = [];
    const tapes = [];
    const gap = 5;
    const q = new THREE.Quaternion();
    const yAxis = new THREE.Vector3(0, 1, 0);
    for (const side of [-1, 1]) {
      let prev = null;
      for (let s = 0; s <= this.length + 0.01; s += gap) {
        this.poseAt(s, side * (this.shAt(s) + 0.4), pose);
        const p = new THREE.Vector3(pose.x, this.terrainHeight(pose.x, pose.z), pose.z);
        stakes.push(new THREE.Matrix4().makeTranslation(p.x, p.y + 0.45, p.z));
        if (prev) {
          const a = prev.clone().add(new THREE.Vector3(0, 0.82, 0));
          const b = p.clone().add(new THREE.Vector3(0, 0.82, 0));
          const mid = a.clone().add(b).multiplyScalar(0.5);
          const len = a.distanceTo(b);
          q.setFromAxisAngle(yAxis, Math.atan2(b.x - a.x, b.z - a.z));
          const tilt = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.atan2(b.y - a.y, Math.hypot(b.x - a.x, b.z - a.z)));
          tapes.push(new THREE.Matrix4().compose(mid, q.clone().multiply(tilt), new THREE.Vector3(1, 1, len)));
        }
        prev = p;
      }
    }
    this.instanced(new THREE.CylinderGeometry(0.03, 0.035, 0.9, 6), new THREE.MeshStandardMaterial({ color: '#8a6a45', roughness: 1 }), stakes);
    // Streifen laufen entlang der Bandlänge (Textur-Richtung u bei den Seitenflächen)
    const tapeTex = canvasTex(
      64,
      16,
      (ctx, w, h) => {
        for (let i = 0; i < 8; i++) {
          ctx.fillStyle = i % 2 ? '#f4f4f0' : '#d8232a';
          ctx.fillRect((i * w) / 8, 0, w / 8, h);
        }
      },
      { repeat: [1, 1] },
    );
    // Band als dünner Streifen (Länge 1, wird je Abschnitt gestreckt); Muster wiederholt sich alle 1,2 m
    const band = new THREE.BoxGeometry(0.005, 0.05, 1);
    const uv = band.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, (uv.getX(i) * gap) / 1.2);
    this.instanced(band, new THREE.MeshStandardMaterial({ map: tapeTex, roughness: 0.6 }), tapes, null, { cast: false });
  }

  // ---------- Leitpfosten & Start/Ziel-Bogen ----------
  buildProps() {
    const pose = {};
    const posts = [];
    const caps = [];
    if (this.cx) {
      this.buildTape(pose);
      this.buildDropLogs(pose);
      this.buildRocks(pose);
    }
    for (let s = 0; s < (this.cx || this.tt ? 0 : this.length); s += 50) {
      for (const side of [-1, 1]) {
        this.poseAt(s, side * (this.SH + 0.5), pose);
        const h = this.terrainHeight(pose.x, pose.z);
        posts.push(new THREE.Matrix4().makeTranslation(pose.x, h + 0.5, pose.z));
        caps.push(new THREE.Matrix4().makeTranslation(pose.x, h + 0.92, pose.z));
      }
    }
    this.instanced(new THREE.BoxGeometry(0.12, 1.0, 0.12), new THREE.MeshStandardMaterial({ color: '#f2f2ee' }), posts);
    this.instanced(
      new THREE.BoxGeometry(0.13, 0.16, 0.13),
      new THREE.MeshStandardMaterial({ color: '#ff7a1a', emissive: '#ff5a00', emissiveIntensity: 0.6 }),
      caps,
      null,
      { cast: false },
    );

    // Start/Ziel-Bogen
    this.poseAt(0, 0, pose);
    const arch = new THREE.Group();
    arch.position.set(pose.x, pose.h, pose.z);
    arch.rotation.y = pose.heading;
    const pillarMat = new THREE.MeshStandardMaterial({ color: '#1b2233', roughness: 0.5, metalness: 0.4 });
    const halfW = this.SH + 0.8;
    for (const side of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 6.2, 0.5), pillarMat);
      p.position.set(side * halfW, 3.0, 0);
      p.castShadow = true;
      arch.add(p);
    }
    const bannerTex = canvasTex(1024, 192, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, '#101a33');
      g.addColorStop(0.5, '#1d2f5c');
      g.addColorStop(1, '#101a33');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = CONFIG.colors.gold;
      ctx.fillRect(0, 8, w, 6);
      ctx.fillRect(0, h - 14, w, 6);
      ctx.font = '800 92px "Barlow Condensed", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('START  •  ZIEL', w / 2, h / 2 - 12);
      ctx.font = '600 30px "Cinzel", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(CONFIG.gameName.toUpperCase(), w / 2, h - 40);
    });
    const banner = new THREE.Mesh(
      new THREE.BoxGeometry(halfW * 2 + 0.5, 1.5, 0.25),
      new THREE.MeshStandardMaterial({ map: bannerTex, emissive: '#ffffff', emissiveMap: bannerTex, emissiveIntensity: 0.25 }),
    );
    banner.position.y = 5.6;
    banner.castShadow = true;
    arch.add(banner);
    // Zielstrich
    const checker = canvasTex(256, 32, (ctx, w, h) => {
      for (let x = 0; x < 16; x++)
        for (let y = 0; y < 2; y++) {
          ctx.fillStyle = (x + y) % 2 ? '#111' : '#f4f4f0';
          ctx.fillRect(x * 16, y * 16, 16, 16);
        }
    });
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(this.rhArr[0] * 2, 0.9),
      new THREE.MeshStandardMaterial({ map: checker, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 }),
    );
    line.rotation.x = -Math.PI / 2;
    line.position.y = 0.012;
    line.receiveShadow = true;
    arch.add(line);
    // Kleine Fahnen
    const flagMat = new THREE.MeshStandardMaterial({ color: CONFIG.colors.accent, side: THREE.DoubleSide });
    for (let k = -3; k <= 3; k++) {
      if (k === 0) continue;
      for (const side of [-1, 1]) {
        const f = new THREE.Group();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.4), pillarMat);
        pole.position.y = 1.7;
        const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.1), flagMat);
        flag.position.set(0, 2.7, 0.35);
        flag.rotation.y = Math.PI / 2;
        f.add(pole, flag);
        f.position.set(side * (this.SH + 3), 0, k * 7);
        arch.add(f);
      }
    }
    this.scene.add(arch);
  }

  // ---------- Zieleinfahrt wie bei der Tour: grüne Streifen auf der Straße, Banden mit Werbung, Zielkamera ----------
  buildFinishZone() {
    const pose = {};
    const g = new THREE.Group();
    const roadY = 0.075;
    // Ein flaches Stück, das der Straße folgt (für Bodenstreifen)
    const band = (s0, s1, mat, lift = 0) => {
      const pos = [];
      const uv = [];
      const idx = [];
      const steps = Math.max(2, Math.round((s1 - s0) / 1));
      for (let k = 0; k <= steps; k++) {
        const s = s0 + ((s1 - s0) * k) / steps;
        this.poseAt(s, 0, pose);
        const nr = this.nearest(pose.x, pose.z);
        const rh = (nr.found ? this.rhArr[nr.i] : this.RH) + 0.25;
        const sx = -pose.tz;
        const sz = pose.tx;
        const y = pose.h - 0.06 + roadY + lift;
        pos.push(pose.x - sx * rh, y, pose.z - sz * rh, pose.x + sx * rh, y, pose.z + sz * rh);
        uv.push(0, k / steps, 1, k / steps);
        if (k > 0) {
          const a = (k - 1) * 2;
          idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, mat);
      m.receiveShadow = true;
      g.add(m);
    };
    const decal = (tex) =>
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    // Grüne Streifen mit großer Schrift (liest sich für die ankommenden Fahrer)
    const gruen = '#2fa37a';
    const schrift = canvasTex(1024, 512, (ctx, w, h) => {
      ctx.fillStyle = gruen;
      ctx.fillRect(0, 0, w, h);
      ctx.translate(w / 2, h / 2); // Schrift lesbar für die ankommenden Fahrer
      ctx.fillStyle = '#e9fff4';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let size = 250;
      do ctx.font = `900 ${size}px "Barlow Condensed", Arial, sans-serif`;
      while (ctx.measureText('GRAND TOUR').width > w * 0.86 && (size -= 8) > 60);
      ctx.fillText('GRAND TOUR', 0, 10);
    });
    const hell = canvasTex(64, 64, (ctx, w, h) => {
      ctx.fillStyle = '#7fe0bf';
      ctx.fillRect(0, 0, w, h);
    });
    const weiss = canvasTex(64, 64, (ctx, w, h) => {
      ctx.fillStyle = '#f2f2ee';
      ctx.fillRect(0, 0, w, h);
    });
    const L = this.length;
    band(L - 52, L - 45, decal(schrift));
    band(L - 26, L - 19, decal(schrift));
    band(L - 3.2, L - 1.6, decal(weiss));
    band(1.2, 9, decal(hell));
    band(13, 20, decal(schrift));

    // Banden an beiden Seiten mit Werbung (ausgedachte Sponsoren)
    const werbung = [
      ['#2fa37a', '#ffffff', 'GRAND TOUR'],
      ['#1d2433', '#ffffff', 'PAULSDORF • SEIT 2026'],
      ['#f2f2ee', '#1d2433', 'PEDAL LEGENDS'],
      ['#2fa37a', '#ffffff', 'GRAND TOUR'],
      ['#f4c430', '#1d2433', 'ZIELKAMERA'],
    ].map(([bg, fg, txt]) =>
      new THREE.MeshStandardMaterial({
        roughness: 0.6,
        map: canvasTex(512, 128, (ctx, w, h) => {
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, w, h);
          ctx.fillStyle = fg;
          // Schrift so groß wie möglich, aber passend auf die Tafel
          let size = 70;
          do ctx.font = `800 ${size}px "Barlow Condensed", Arial, sans-serif`;
          while (ctx.measureText(txt).width > w * 0.9 && (size -= 4) > 20);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(txt, w / 2, h / 2 + 2);
        }),
      }),
    );
    const metall = new THREE.MeshStandardMaterial({ color: '#b9bcc2', metalness: 0.8, roughness: 0.35 });
    const tafel = new THREE.BoxGeometry(2.3, 0.9, 0.04);
    const rohr = new THREE.CylinderGeometry(0.03, 0.03, 2.4, 6).rotateZ(Math.PI / 2);
    const fuss = new THREE.BoxGeometry(0.06, 1.15, 0.5);
    let k = 0;
    for (let s = L - 75; s < L + 25; s += 2.45) {
      for (const sd of [-1, 1]) {
        this.poseAt(s, 0, pose);
        const nr = this.nearest(pose.x, pose.z);
        const lat = (nr.found ? this.shArr[nr.i] : this.SH) + 0.4;
        this.poseAt(s, sd * lat, pose);
        if (this.solid && this.solid.some((b) => Math.hypot(b.x - pose.x, b.z - pose.z) < b.r + 0.6)) continue;
        const bande = new THREE.Group();
        bande.position.set(pose.x, this.terrainHeight(pose.x, pose.z), pose.z);
        bande.rotation.y = pose.heading + Math.PI / 2;
        const t = new THREE.Mesh(tafel, werbung[(k + (sd > 0 ? 2 : 0)) % werbung.length]);
        t.position.y = 0.62;
        t.castShadow = true;
        const r1 = new THREE.Mesh(rohr, metall);
        r1.position.y = 1.1;
        const f1 = new THREE.Mesh(fuss, metall);
        f1.position.set(-1.15, 0.57, 0);
        bande.add(t, r1, f1);
        g.add(bande);
      }
      k++;
    }

    // Gelbe Zielkamera-Kabine kurz hinter der Linie (im Cycle Cross nicht, Paul wollte sie dort weg)
    for (const lat of this.cx ? [] : [this.SH + 4.5, this.SH + 7, -(this.SH + 4.5)]) {
      this.poseAt(6, lat, pose);
      if (this.solid && this.solid.some((b) => Math.hypot(b.x - pose.x, b.z - pose.z) < b.r + 3)) continue;
      if (!this.clearOfPath(pose.x, pose.z, 2.5)) continue;
      const kabine = new THREE.Group();
      kabine.position.set(pose.x, this.terrainHeight(pose.x, pose.z), pose.z);
      kabine.rotation.y = pose.heading + (lat > 0 ? -Math.PI / 2 : Math.PI / 2);
      const gelb = new THREE.MeshStandardMaterial({ color: '#f4d21c', roughness: 0.5 });
      const box = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.6, 2.6), gelb);
      box.position.y = 1.7;
      box.castShadow = true;
      const fenster = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.0, 0.05), new THREE.MeshStandardMaterial({ color: '#1d2433', roughness: 0.1, metalness: 0.6 }));
      fenster.position.set(0, 2.1, 1.31);
      const schild = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.55), werbung[4]);
      schild.position.set(0, 3.3, 1.31);
      const sockel = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.4, 2.4), new THREE.MeshStandardMaterial({ color: '#555a62' }));
      sockel.position.y = 0.2;
      kabine.add(box, fenster, schild, sockel);
      g.add(kabine);
      break;
    }
    this.scene.add(g);
  }

  // ---------- Wolken ----------
  buildClouds() {
    const rand = mulberry32(77);
    const tex = canvasTex(256, 128, (ctx, w, h) => {
      for (let i = 0; i < 40; i++) {
        const x = w * (0.15 + rand() * 0.7);
        const y = h * (0.45 + (rand() - 0.5) * 0.35);
        const r = 18 + rand() * 30;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, 'rgba(255,255,255,0.35)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
    });
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        color: new THREE.Color().setHSL(0.05 + rand() * 0.04, 0.7, 0.78 + rand() * 0.1),
        fog: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.55 + rand() * 0.35,
      });
      const s = new THREE.Sprite(mat);
      const a = rand() * Math.PI * 2;
      const d = 1300 + rand() * 1200;
      s.position.set(Math.cos(a) * d, 220 + rand() * 380, Math.sin(a) * d);
      const sc = 380 + rand() * 500;
      s.scale.set(sc, sc * 0.4, 1);
      this.scene.add(s);
    }
  }

  // ---------- Leuchtende Pollen in der Luft ----------
  buildMotes() {
    const n = 350;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n * 3; i++) pos[i] = (Math.random() - 0.5) * 50;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    if (this.autumn) {
      // Fallende Blätter in Herbstfarben
      const cols = new Float32Array(n * 3);
      const pal = ['#c2461f', '#e07b24', '#e9b13a', '#8a3b1c'].map((c) => new THREE.Color(c));
      for (let i = 0; i < n; i++) pal[i % pal.length].toArray(cols, i * 3);
      geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      const leaf = canvasTex(64, 64, (ctx) => {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.ellipse(32, 32, 26, 13, 0.6, 0, Math.PI * 2);
        ctx.fill();
      });
      this.motes = new THREE.Points(
        geo,
        new THREE.PointsMaterial({ size: 0.16, map: leaf, vertexColors: true, transparent: true, alphaTest: 0.4, depthWrite: false }),
      );
      this.motes.frustumCulled = false;
      this.scene.add(this.motes);
      return;
    }
    const tex = canvasTex(64, 64, (ctx) => {
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.3, 'rgba(255,230,180,0.6)');
      g.addColorStop(1, 'rgba(255,200,120,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
    });
    const mat = new THREE.PointsMaterial({
      size: 0.09,
      map: tex,
      color: new THREE.Color(2.2, 1.7, 1.1),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.motes = new THREE.Points(geo, mat);
    this.motes.frustumCulled = false;
    this.scene.add(this.motes);
  }

  update(dt, focus, camera, time) {
    // Im dichten Wald (Nebel) weit entfernte Kacheln gar nicht erst zeichnen
    if (this.chunks && this.cx) {
      const cp = camera.position;
      for (const m of this.chunks) {
        const bs = m.boundingSphere;
        if (bs) m.visible = Math.hypot(bs.center.x - cp.x, bs.center.z - cp.z) - bs.radius < 330;
      }
    }
    // Schattenkamera folgt dem Geschehen
    this.sun.position.copy(focus).addScaledVector(this.lightDir, 120);
    this.sun.target.position.copy(focus);

    const p = this.motes.geometry.attributes.position;
    const cx = camera.position.x;
    const cy = camera.position.y;
    const cz = camera.position.z;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i) + Math.sin(time * 0.5 + i) * 0.15 * dt + 0.25 * dt;
      let y = p.getY(i) + Math.cos(time * 0.4 + i * 1.7) * 0.1 * dt;
      // Herbstblätter sinken taumelnd zu Boden
      if (this.autumn) {
        y -= (0.45 + (i % 5) * 0.08) * dt;
        x += Math.sin(time * 1.3 + i) * 0.5 * dt;
      }
      let z = p.getZ(i) + 0.1 * dt;
      const wrap = (v, c) => (v - c > 25 ? v - 50 : v - c < -25 ? v + 50 : v);
      x = wrap(x, cx);
      if (y - cy < -2) y += 16;
      else if (y - cy > 14) y -= 16;
      z = wrap(z, cz);
      p.setXYZ(i, x, y, z);
    }
    p.needsUpdate = true;
  }
}
