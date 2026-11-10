// GAME: „Das große Rennen“ – ein Rennen mit Geschichte.
// 1. Zum Start fahren, 50 andere Fahrer stellen sich dahinter auf.
// 2. Countdown von 5, dann los. Man fährt vorne im Feld, aber das Feld lässt niemanden wegfahren.
// 3. Plötzlich reißt Team Blitz aus. Wer sich in deren Windschatten hängt, kommt mit – sonst niemand.
// 4. Schlusssprint: man wird ganz knapp Zweiter (eine halbe Sekunde hinter dem Sprinter von Team Blitz).
import * as THREE from 'three';
import { el, esc, btn, formatTime } from './common.js';
import { WHEEL_R } from '../bike.js';
import { clamp, damp } from '../noise.js';
import { Rivals } from '../rivals.js';
import { Peloton } from '../peloton.js';
import { loadCharacters } from '../storage.js';

// ✏️ Das Ausreißer-Team
const TEAM_NAME = 'Team Blitz';
const TEAM = [
  { name: 'Jonas', number: 11, jersey: '#ff6a13', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#ff6a13' },
  { name: 'Felix', number: 12, jersey: '#ff6a13', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#ff6a13' },
  { name: 'Noah', number: 13, jersey: '#ff6a13', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#ff6a13' },
  { name: 'Elias', number: 14, jersey: '#ff6a13', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#ff6a13' },
];
// Trikots der anderen Teams im Feld
const FELD_TEAMS = [
  ['#2f7cf6', '#f6f6f6', '#2f7cf6'],
  ['#1fa88f', '#f1f1ec', '#f1f1ec'],
  ['#d23c3c', '#16161b', '#d23c3c'],
  ['#f4d21c', '#16161b', '#16161b'],
  ['#8a3ffc', '#d8d8de', '#8a3ffc'],
  ['#f6f6f6', '#2f7cf6', '#f6f6f6'],
  ['#16161b', '#d23c3c', '#d23c3c'],
  ['#3bceac', '#16161b', '#3bceac'],
];
const N_FELD = 46; // + 4 vom Team Blitz = 50 andere Fahrer
const RENNEN = 2000; // Meter vom Start bis ins Ziel
const ATTACKE_NACH = 600; // Meter: dann reißt Team Blitz aus
const SPRINT_AB = 320; // Meter vor dem Ziel: Schlusssprint
const V_FELD = 11.5; // m/s ≈ 41 km/h
const V_FELD_HINTEN = 10.8;
const V_TEAM = 13.2;
const V_SPRINT = 17.4; // ≈ 63 km/h
const ABSTAND_ZIEL = 0.5; // Sekunden hinter dem Sieger
const GEAR = 3.6;
const TEAM_LAT = -1.5; // auf dieser Seite der Straße fährt Team Blitz

const VIEWS = [
  { name: 'Hinten', dist: 5.2, height: 2.7 },
  { name: 'Weit', dist: 9, height: 3.6 },
  { name: 'Von oben', dist: 6, height: 11 },
];

export function createStoryScene(app) {
  let root;
  let char;
  let team = null; // Rivals mit den vier Team-Blitz-Fahrern (echte Räder)
  let feld = null; // Peloton (einfache Fahrer)
  let deko = null; // Startbogen und Startlinie
  let world = null;
  const st = {};
  const pose = {};
  const riders = []; // Feld: { dz, lat, latOff, jit, s, v }
  let view = 0;
  let pauseIndex = 0;
  let resultIndex = 0;

  const $ = (s) => root.querySelector(s);

  function banner(text, sub = '') {
    const b = $('.banner');
    b.innerHTML = `<div>${text}</div>${sub ? `<small>${sub}</small>` : ''}`;
    b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
  }

  function tipp(text) {
    const t = $('.story-tipp');
    if (t.dataset.text === text) return;
    t.dataset.text = text;
    t.innerHTML = text;
    t.classList.toggle('show', !!text);
  }

  const pedalText = () =>
    app.control === 'touch' ? 'nach oben wischen' : app.control === 'keys' ? '<b>W</b> halten' : `${btn('A')} halten`;
  const sprintText = () =>
    app.control === 'touch' ? 'nochmal nach oben wischen' : app.control === 'keys' ? '<b>Leertaste</b>' : btn('X');
  const lenkText = () => (app.control === 'touch' ? 'links/rechts halten' : app.control === 'keys' ? '<b>A</b> <b>D</b>' : btn('LT') + btn('RT'));

  // ---------- Startbogen ----------
  function canvasTex(w, h, draw) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }

  function buildDeko(sStart) {
    const g = new THREE.Group();
    const w = app.world;
    w.poseAt(sStart, 0, pose);
    const nr = w.nearest(pose.x, pose.z);
    const rh = nr.found ? w.rhArr[nr.i] : w.RH;
    // weiße Startlinie
    const linie = new THREE.Mesh(
      new THREE.PlaneGeometry(rh * 2, 0.45),
      new THREE.MeshStandardMaterial({ color: '#f2f2ee', roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }),
    );
    linie.rotation.x = -Math.PI / 2;
    linie.receiveShadow = true;
    const linieHalter = new THREE.Group();
    linieHalter.position.set(pose.x, pose.h + 0.03, pose.z);
    linieHalter.rotation.y = pose.heading;
    linieHalter.add(linie);
    g.add(linieHalter);
    // Bogen mit „START“
    const tex = canvasTex(1024, 192, (ctx, cw, ch) => {
      ctx.fillStyle = '#2fa37a';
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 120px "Barlow Condensed", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('START · GRAND TOUR', cw / 2, ch / 2 + 6);
    });
    const breite = rh * 2 + 1.6;
    const tafel = new THREE.Mesh(new THREE.BoxGeometry(breite, 1.2, 0.3), [
      new THREE.MeshStandardMaterial({ color: '#2fa37a' }),
      new THREE.MeshStandardMaterial({ color: '#2fa37a' }),
      new THREE.MeshStandardMaterial({ color: '#2fa37a' }),
      new THREE.MeshStandardMaterial({ color: '#2fa37a' }),
      new THREE.MeshStandardMaterial({ map: tex }),
      new THREE.MeshStandardMaterial({ map: tex }),
    ]);
    const bogen = new THREE.Group();
    bogen.position.set(pose.x, pose.h, pose.z);
    bogen.rotation.y = pose.heading;
    tafel.position.y = 4.6;
    tafel.castShadow = true;
    bogen.add(tafel);
    const pfostenMat = new THREE.MeshStandardMaterial({ color: '#e9e9e4', roughness: 0.5 });
    for (const sd of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 5.2, 10), pfostenMat);
      p.position.set(sd * (breite / 2 - 0.2), 2.6, 0);
      p.castShadow = true;
      bogen.add(p);
    }
    g.add(bogen);
    w.scene.add(g);
    return g;
  }

  // ---------- Aufbau ----------
  function setup() {
    const w = app.world;
    const L = w.length;
    st.sZiel = L - 2.4; // weiße Ziellinie
    st.sStart = st.sZiel - Math.min(RENNEN, L - 400);
    if (world !== w) {
      // neue Welt (oder erster Start): alles neu bauen
      team?.dispose();
      if (feld) feld.group.removeFromParent();
      deko?.removeFromParent();
      team = new Rivals(app, TEAM.map((t) => ({ ...t, power: 0, lane: TEAM_LAT })));
      feld = new Peloton(w.scene, N_FELD);
      deko = buildDeko(st.sStart);
      world = w;
    }
    team.reset(0);
    team.startS = 0;
    feld.visible = true;
    deko.visible = true;

    // Startaufstellung: vorne in der Mitte du, dahinter Reihen zu fünft
    const slots = [];
    for (const lat of [-2.6, -1.3, 1.3, 2.6]) slots.push({ dz: 0, lat });
    // direkt hinter dir bleibt in den ersten zwei Reihen eine Lücke (sonst steht jemand vor der Kamera)
    for (let row = 1; slots.length < N_FELD + 4; row++)
      for (const lat of [-2.6, -1.3, 0, 1.3, 2.6]) if (row > 2 || lat !== 0) slots.push({ dz: -1.9 * row, lat });
    // Team Blitz steht in Reihe 1 und 2 links
    const teamSlots = [slots[4], slots[5], slots[8], slots[9]];
    const rest = slots.filter((s) => !teamSlots.includes(s));
    riders.length = 0;
    for (let i = 0; i < N_FELD; i++) {
      const sl = rest[i];
      const farbe = FELD_TEAMS[i % FELD_TEAMS.length];
      feld.setColors(i, { jersey: farbe[0], frame: farbe[1], helmet: farbe[2] });
      riders.push({
        dz: sl.dz,
        lat: sl.lat,
        latOff: 0,
        jit: Math.random() * 100,
        s: st.sStart + sl.dz - 70 - Math.random() * 15, // rollen gleich von hinten heran
        v: 0,
        anfahrt: true,
      });
    }
    st.team = team.list.map((r, i) => ({
      r,
      dz: teamSlots[i].dz,
      lat: teamSlots[i].lat,
      latT: teamSlots[i].lat,
      s: st.sStart + teamSlots[i].dz - 72 - i * 3,
      v: 0,
      anfahrt: true,
      ziel: null,
    }));

    Object.assign(st, {
      phase: 'anfahrt',
      t: 0,
      raceTime: 0,
      s: st.sStart - 55,
      v: 0,
      lat: 0,
      lean: 0,
      steerVis: 0,
      cruise: false,
      pf: st.sStart, // Spitze des Feldes
      vf: 0,
      cd: 5,
      lastCount: 6,
      idle: 0,
      surge: 0,
      meldung: 0,
      draft: 0,
      sprint: false,
      sprintGap: null,
      sprintT: 0,
      winnerShown: false,
      winner: null,
      meZiel: null,
      paused: false,
      showResult: false,
      feldWeg: false,
      tippAttacke: 0,
    });
  }

  // ---------- Hilfen ----------
  const leader = () => st.team[0];
  const teamLast = () => st.team.reduce((m, t) => Math.min(m, t.s), Infinity);

  function placeMe(dt, crankRate) {
    const w = app.world;
    w.poseAt(st.s, st.lat, pose);
    const b = app.bike.root;
    b.position.set(pose.x, pose.h, pose.z);
    b.rotation.set(-pose.pitch, pose.heading, st.lean);
    app.focus.set(pose.x, pose.h, pose.z);
    app.bike.update(dt, st.v, crankRate, st.steerVis);
    st.x = pose.x;
    st.z = pose.z;
    st.h = pose.h;
  }

  // bis zum Ziel bremsen: Tempo, mit dem man genau bei sZiel stehen bleibt
  const stopSpeed = (rest, a = 2.5) => Math.sqrt(Math.max(0, 2 * a * rest));

  function updateFeld(dt) {
    const w = app.world;
    const t = st.raceTime;
    for (let i = 0; i < riders.length; i++) {
      const r = riders[i];
      let target;
      if (r.anfahrt) {
        // heranrollen und am eigenen Platz stehen bleiben
        const platz = st.sStart + r.dz;
        const rest = platz - r.s;
        if (st.phase === 'anfahrt') r.v = 0;
        else r.v = Math.min(9.5, stopSpeed(rest, 2.2), r.v + 4 * dt);
        r.s = Math.min(platz, r.s + r.v * dt);
        if (rest < 0.05) {
          r.s = platz;
          r.v = 0;
          r.anfahrt = false;
        }
      } else if (st.phase === 'aufstellen' || st.phase === 'countdown') {
        r.v = 0;
      } else {
        // im Rennen: Platz im Feld halten, leicht hin und her
        target = st.pf + r.dz + Math.sin(t * 0.37 + r.jit) * 0.7;
        r.v = Math.max(0, st.vf + clamp((target - r.s) * 1.2, -2, 2));
        if (st.phase === 'auslaufen' && r.s > st.sZiel + 30) r.v = Math.max(0, r.v - 3);
        r.s += r.v * dt;
      }
      // dem Spieler ausweichen
      let latT = r.lat + Math.sin(t * 0.21 + r.jit) * 0.25;
      if (Math.abs(r.s - st.s) < 2.2 && Math.abs(latT - st.lat) < 1.1) latT = st.lat + (latT >= st.lat ? 1.15 : -1.15);
      for (const tm of st.team) if (Math.abs(r.s - tm.s) < 2 && Math.abs(latT - tm.lat) < 1) latT = tm.lat + (latT >= tm.lat ? 1.1 : -1.1);
      r.latOff = damp(r.latOff, clamp(latT, -3, 3) - r.lat, 2.5, dt);
      w.poseAt(r.s, r.lat + r.latOff, pose);
      // wer der Kamera zu nahe kommt, wird kurz nach unten weggeblendet (sonst sieht man nur ein Trikot)
      const cp = app.camera.position;
      const nah = Math.hypot(pose.x - cp.x, pose.z - cp.z) < 1.6 && st.phase !== 'aufstellen' && st.phase !== 'countdown';
      feld.set(i, pose.x, pose.h - (nah ? 5 : 0), pose.z, pose.heading, pose.pitch, 0, r.v, dt, r.v > 0.3);
    }
    feld.commit();
  }

  function updateTeam(dt) {
    const L = leader();
    for (let i = 0; i < st.team.length; i++) {
      const tm = st.team[i];
      if (tm.anfahrt) {
        const platz = st.sStart + tm.dz;
        const rest = platz - tm.s;
        if (st.phase === 'anfahrt') tm.v = 0;
        else tm.v = Math.min(9.5, stopSpeed(rest, 2.2), tm.v + 4 * dt);
        tm.s = Math.min(platz, tm.s + tm.v * dt);
        if (rest < 0.05) {
          tm.s = platz;
          tm.v = 0;
          tm.anfahrt = false;
        }
      } else if (st.phase === 'aufstellen' || st.phase === 'countdown') {
        tm.v = 0;
      } else if (st.phase === 'feld') {
        const target = st.pf + tm.dz;
        tm.v = Math.max(0, st.vf + clamp((target - tm.s) * 1.2, -2, 2));
        tm.s += tm.v * dt;
      } else {
        // Ausreißer: in einer Reihe hintereinander, der Sprinter vorne
        let vKopf = st.phase === 'attacke' && st.t < 7 ? 15.2 : V_TEAM;
        // Jonas springt an: erst ein harter Antritt, dann volles Sprinttempo
        if (st.phase === 'sprint' || st.phase === 'auslaufen') vKopf = st.sprintT < 3.2 ? Math.min(18.8, V_TEAM + st.sprintT * 3.2) : V_SPRINT;
        if (st.phase === 'auslaufen' && L.s > st.sZiel + 5) vKopf = Math.max(4, L.v - 1.5 * dt);
        if (i === 0) {
          tm.v = damp(tm.v, vKopf, 2, dt);
        } else {
          const vorder = st.team[i - 1];
          let target = vorder.s - 2.3;
          let vMax = vKopf + 3;
          if (st.phase === 'sprint' || st.phase === 'auslaufen') {
            // Helfer haben ihre Arbeit getan: sie lassen sich zurückfallen und machen zur anderen Seite Platz
            tm.latT = 0.3 + i * 0.55;
            tm.v = damp(tm.v, tm.s > st.sZiel + 5 ? 4 : 12.6, 1.2, dt);
          } else {
            tm.latT = TEAM_LAT;
            tm.v = damp(tm.v, Math.min(vMax, vKopf + clamp((target - tm.s) * 1.3, -2, 4)), 3, dt);
          }
        }
        if (i === 0) tm.latT = TEAM_LAT;
        tm.s += tm.v * dt;
      }
      tm.lat = damp(tm.lat, tm.latT, 1.5, dt);
      if (tm.ziel == null && tm.s >= st.sZiel && st.raceTime > 0) tm.ziel = st.raceTime - (tm.s - st.sZiel) / Math.max(tm.v, 1);
      tm.r.d = tm.s;
      tm.r.lat = tm.lat;
      tm.r.v = tm.v;
      team.place(tm.r, dt, tm.v > 0.5 ? tm.v / WHEEL_R / GEAR : 0);
    }
  }

  // Im Windschatten eines Team-Blitz-Fahrers? (0 … 1)
  function draftStrength() {
    const d = team.draftFor(st.x, st.z);
    return d;
  }

  function place() {
    let vor = 0;
    for (const r of riders) if (r.s > st.s) vor++;
    for (const tm of st.team) if (tm.ziel != null ? st.meZiel == null || tm.ziel < st.meZiel : tm.s > st.s) vor++;
    return vor + 1;
  }

  // ---------- Ergebnis ----------
  function showResult() {
    const w = leader().ziel;
    const zeilen = [];
    const zeitVon = (t) => (t == null ? '–' : t - w < 0.05 ? formatTime(t) : `+${(t - w).toFixed(1).replace('.', ',')} s`);
    const alle = [
      ...st.team.map((tm) => ({ name: tm.r.name, number: tm.r.number, color: tm.r.jersey, t: tm.ziel ?? st.raceTime + (st.sZiel - tm.s) / Math.max(tm.v, 5), sub: TEAM_NAME })),
      { name: char.name, number: char.number, color: char.jersey || '#d23c3c', t: st.meZiel, me: true },
    ].sort((a, b) => a.t - b.t);
    alle.forEach((r, i) =>
      zeilen.push(`<div class="result-row ${r.me ? 'me' : ''}">
        <b>${i + 1}.</b><i style="background:${r.color}"></i><span class="mini-plate"><span>${esc(r.number)}</span></span>
        <span class="result-name">${esc(r.name)}${r.sub ? ` <small>${esc(r.sub)}</small>` : ''}</span>
        <span class="result-time">${zeitVon(r.t)}</span></div>`),
    );
    const feldZeit = st.raceTime + (st.sZiel - st.pf) / Math.max(st.vf, 8);
    const m = Math.floor((feldZeit - w) / 60);
    const s = Math.round((feldZeit - w) % 60);
    zeilen.push(`<div class="result-row"><b>6.</b><i style="background:#888"></i><span class="result-name">Das Feld · ${N_FELD} Fahrer</span>
      <span class="result-time">+${m}:${String(s).padStart(2, '0')}</span></div>`);
    $('.result-list').innerHTML = zeilen.join('');
    const abstand = st.meZiel - w;
    $('.result-title').innerHTML = `Platz 2 – nur ${abstand.toFixed(1).replace('.', ',')} Sekunden!`;
    resultIndex = 0;
    renderResult();
    $('.result').classList.add('show');
    st.showResult = true;
  }

  function renderResult() {
    root.querySelectorAll('.result-item').forEach((e, i) => e.classList.toggle('selected', i === resultIndex));
  }
  function renderPause() {
    root.querySelectorAll('.pause-item:not(.result-item)').forEach((e, i) => e.classList.toggle('selected', i === pauseIndex));
  }
  function setPaused(p) {
    st.paused = p;
    pauseIndex = 0;
    $('.pause').classList.toggle('show', p);
    renderPause();
    app.audio.setWind(0);
    if (p) app.audio.back();
    else app.audio.select();
  }

  function countdownShow(n) {
    const cd = $('.countdown');
    cd.textContent = n > 0 ? n : 'LOS!';
    cd.classList.toggle('go', n <= 0);
    cd.classList.remove('show');
    void cd.offsetWidth;
    cd.classList.add('show');
    if (n > 0) app.audio.tone(520, 0.25, { type: 'square', vol: 0.08 });
    else {
      app.audio.tone(1040, 0.6, { type: 'square', vol: 0.09 });
      app.input.rumble(0.6, 250);
    }
  }

  // Kamera beim Aufstellen: vorne, schaut zurück auf das Feld
  const _cam = new THREE.Vector3();
  function frontCamera(dt) {
    const w = app.world;
    w.poseAt(st.s + 7, 1.2, pose);
    _cam.set(pose.x, pose.h + 2.4, pose.z);
    app.camera.position.lerp(_cam, 1 - Math.exp(-2.5 * dt));
    w.poseAt(st.s - 9, 0, pose);
    app.camera.lookAt(pose.x, pose.h + 0.8, pose.z);
    app.camera.fov = damp(app.camera.fov, 55, 3, dt);
    app.camera.updateProjectionMatrix();
  }

  // Kamera hinter dir: folgt der Richtung weich, bleibt aber immer im gleichen Abstand
  let camHeading = null;
  function followCamera(dt, snap = false) {
    const v = VIEWS[view];
    const b = app.bike.root;
    const h = b.rotation.y;
    camHeading = snap || camHeading == null ? h : camHeading + Math.atan2(Math.sin(h - camHeading), Math.cos(h - camHeading)) * (1 - Math.exp(-4 * dt));
    const fx = Math.sin(camHeading);
    const fz = Math.cos(camHeading);
    const c = app.camera;
    _cam.set(b.position.x - fx * v.dist, b.position.y + v.height, b.position.z - fz * v.dist);
    const boden = app.world.terrainHeight(_cam.x, _cam.z) + 0.7;
    if (_cam.y < boden) _cam.y = boden;
    if (snap) c.position.copy(_cam);
    else c.position.lerp(_cam, 1 - Math.exp(-10 * dt));
    c.lookAt(b.position.x + fx * 4, b.position.y + 1.0, b.position.z + fz * 4);
    const fov = 56 + Math.min(st.v, 20) * 0.6 + (st.sprint && st.phase === 'sprint' ? 8 : 0);
    c.fov = snap ? fov : damp(c.fov, fov, 3, dt);
    c.updateProjectionMatrix();
  }

  function goPhase(p) {
    st.phase = p;
    st.t = 0;
  }

  return {
    enter(params = {}) {
      // Gespielt wird auf der Landstraße mit dem Rennrad
      if (app.world.kind !== 'road' && app.worlds.road) app.useWorld('road');
      app.mode = 'road';
      const alle = loadCharacters();
      char =
        params.character ||
        alle.find((c) => (c.mode || 'road') === 'road') ||
        alle[0] || { id: null, name: 'Du', number: 1, jersey: '#d23c3c' };
      app.bike.setPlate(char.number, char.name);
      app.bike.applyLook(char);
      app.bike.setTires('road');

      root = el(`
        <div class="screen ride-screen story-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Rennen</label><b class="story-phase">Zum Start</b></div>
            <div class="hud-box"><label>Ziel in</label><b class="story-rest">–</b></div>
            <div class="hud-box story-gap-box"><label>Vorsprung aufs Feld</label><b class="story-gap">–</b></div>
          </div>
          <div class="view-toast"></div>
          <div class="draft-badge">
            <span class="draft-icon">≋</span>
            <div class="draft-text"><b>Windschatten</b><small class="draft-name"></small></div>
            <div class="draft-meter"><i></i></div>
          </div>
          <div class="cruise-badge">${btn('B')} Dauertreten an</div>
          <div class="story-tipp"></div>
          <div class="speedo">
            <svg viewBox="0 0 200 200">
              <circle class="speedo-bg" cx="100" cy="100" r="80" pathLength="100"/>
              <circle class="speedo-fill" cx="100" cy="100" r="80" pathLength="100"/>
            </svg>
            <div class="speedo-val"><b>0</b><span>km/h</span></div>
          </div>
          <button class="touch-pause" data-act="pause" aria-label="Pause">❚❚</button>
          <div class="banner"></div>
          <div class="countdown"></div>
          <div class="result">
            <div class="pause-box result-box">
              <h2 class="result-title"></h2>
              <div class="result-list"></div>
              <div class="pause-item result-item">Nochmal fahren</div>
              <div class="pause-item result-item">Zurück</div>
            </div>
          </div>
          <div class="pause">
            <div class="pause-box">
              <h2>Pause</h2>
              <div class="pause-item">Weiterfahren</div>
              <div class="pause-item">Rennen beenden</div>
            </div>
          </div>
        </div>`);
      app.ui.append(root);
      root.querySelectorAll('.pause-item:not(.result-item)').forEach((e, i) =>
        e.addEventListener('click', () => {
          pauseIndex = i;
          renderPause();
          app.input.inject('confirm');
        }),
      );
      root.querySelectorAll('.result-item').forEach((e, i) =>
        e.addEventListener('click', () => {
          resultIndex = i;
          renderResult();
          app.input.inject('confirm');
        }),
      );
      setup();
      view = 0;
      placeMe(0, 0);
      updateTeam(0);
      updateFeld(0);
      camHeading = null;
      followCamera(0, true);
      app.fx.uFade.value = 1;
      app.audio.setMusicLevel(0.45);
      banner('Das große Rennen', 'Fahr zum Start!');
      app.story = st; // zum Ausprobieren in der Konsole
    },

    update(dt) {
      const inp = app.input;
      dt = Math.min(dt, 0.05);
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 3, dt);
      app.fx.uBlur.value = damp(app.fx.uBlur.value, 0, 5, dt);
      app.fx.uLines.value = 0;
      inp.touchRide = !st.paused && !st.showResult;

      if (st.paused) {
        if (inp.pressed('up') || inp.pressed('down')) {
          pauseIndex = 1 - pauseIndex;
          renderPause();
          app.audio.nav();
        } else if (inp.pressed('back') || inp.pressed('start')) setPaused(false);
        else if (inp.pressed('confirm')) {
          if (pauseIndex === 0) setPaused(false);
          else {
            app.audio.select();
            app.go('mode', { minigame: true });
          }
        }
        return;
      }
      if (st.showResult) {
        if (inp.pressed('up') || inp.pressed('down')) {
          resultIndex = 1 - resultIndex;
          renderResult();
          app.audio.nav();
        } else if (inp.pressed('confirm')) {
          app.audio.select();
          if (resultIndex === 0) app.go('story', { character: char });
          else app.go('mode', { minigame: true });
          return;
        }
      } else if (inp.pressed('pause') || inp.pressed('start')) {
        setPaused(true);
        return;
      }

      st.t += dt;
      if (['feld', 'attacke', 'flucht', 'sprint', 'auslaufen'].includes(st.phase)) st.raceTime += dt;
      if (inp.pressed('klingel')) app.audio.klingel();
      if (inp.pressed('cruise')) {
        st.cruise = !st.cruise;
        $('.cruise-badge').classList.toggle('on', st.cruise);
        if (st.cruise) app.audio.select();
        else app.audio.back();
      }
      if (inp.pressed('view')) {
        view = (view + 1) % VIEWS.length;
        app.audio.nav();
        const t = $('.view-toast');
        t.textContent = `Kamera: ${VIEWS[view].name}`;
        t.classList.remove('show');
        void t.offsetWidth;
        t.classList.add('show');
      }
      const tritt = st.cruise || inp.throttle > 0.1;
      const sprintKey = inp.pressed('x') || inp.pressed('sprint');
      const rennen = ['feld', 'attacke', 'flucht', 'sprint'].includes(st.phase);

      // ---------- Ablauf ----------
      let vT = st.v;
      if (st.phase === 'anfahrt') {
        // selbst zur Startlinie fahren, dort hält man automatisch an
        const rest = st.sStart - st.s;
        vT = Math.min(tritt ? 6.5 : Math.max(0, st.v - 1.5 * dt), stopSpeed(rest, 2.5));
        st.idle = tritt ? 0 : st.idle + dt;
        tipp(st.idle > 2.5 && st.v < 0.5 ? `Zum Losfahren ${pedalText()}` : '');
        if (rest < 0.08) {
          st.s = st.sStart;
          st.v = 0;
          vT = 0;
          goPhase('aufstellen');
          tipp('');
          banner('Startaufstellung', 'Die anderen Fahrer kommen …');
          $('.story-phase').textContent = 'Aufstellen';
        }
      } else if (st.phase === 'aufstellen') {
        vT = 0;
        st.lat = damp(st.lat, 0, 2, dt);
        const alleDa = riders.every((r) => !r.anfahrt) && st.team.every((t) => !t.anfahrt);
        if (alleDa && st.t > 2) {
          goPhase('countdown');
          $('.story-phase').textContent = 'Gleich geht’s los';
        }
      } else if (st.phase === 'countdown') {
        vT = 0;
        st.cd -= dt;
        const n = Math.ceil(st.cd);
        if (n !== st.lastCount) {
          st.lastCount = n;
          countdownShow(n);
        }
        if (n <= 0) {
          goPhase('feld');
          st.cruise = false;
          $('.story-phase').textContent = 'Im Feld';
          setTimeout(() => root && st.phase === 'feld' && tipp(`Treten: ${pedalText()} · Lenken: ${lenkText()}`), 1200);
          setTimeout(() => root && tipp(''), 7000);
        }
      } else if (st.phase === 'feld') {
        // Das Feld fährt mit dir: wer wegfahren will, wird sofort wieder eingeholt
        const vFeld = Math.min(V_FELD, st.raceTime * 2.4);
        st.vf = vFeld + clamp((st.s - st.pf) * 0.9, -1.5, 3);
        st.pf += st.vf * dt;
        if (sprintKey) st.surge = 2;
        st.surge = Math.max(0, st.surge - dt);
        vT = st.surge > 0 ? vFeld + 5 : tritt ? vFeld + 2 : vFeld - 2.5;
        if (st.s > st.pf + 3.5) {
          st.s = st.pf + 3.5;
          st.v = Math.min(st.v, st.vf);
          st.meldung -= dt;
          if (st.meldung <= 0 && (tritt || st.surge > 0)) {
            st.meldung = 6;
            banner('Kein Ausreißen!', 'Das Feld lässt dich nicht wegfahren');
          }
        }
        if (st.s < st.pf - 8) vT = Math.max(vT, st.vf + 1.2); // im Feld wird man mitgezogen
        if (st.pf - st.sStart >= ATTACKE_NACH) {
          goPhase('attacke');
          banner(`Attacke von ${TEAM_NAME}!`, 'Schnell, häng dich in ihren Windschatten!');
          app.audio.whoosh(1.4);
          app.input.rumble(0.7, 300);
          $('.story-phase').textContent = 'Ausreißer!';
        }
      } else if (st.phase === 'attacke' || st.phase === 'flucht' || st.phase === 'sprint') {
        // Das Feld wird langsamer, Team Blitz fährt davon
        st.vf = damp(st.vf, V_FELD_HINTEN, 0.6, dt);
        st.pf += st.vf * dt;
        const L = leader();
        const hinten = teamLast();
        const teamVorne = hinten > st.s + 0.5;
        const dr = draftStrength();
        st.draft = damp(st.draft, dr.rival ? dr.strength : 0, 5, dt);
        if (st.phase !== 'sprint') {
          // Team Blitz zieht erst an dir vorbei – so schnell kommst du da nicht mit
          if (!teamVorne) vT = Math.min(tritt ? V_FELD + 0.8 : V_FELD, L.v - 1.5);
          else if (st.draft > 0.2) vT = tritt ? L.v + 1.5 : L.v - 0.3; // im Windschatten: mithalten
          else vT = tritt ? L.v - 0.6 : st.vf; // im Wind: man verliert langsam
          // nicht am Team vorbei (sie bestimmen das Tempo), aber auch nie ganz abgehängt
          if (teamVorne && st.s > hinten - 2.0) {
            st.s = hinten - 2.0;
            st.v = Math.min(st.v, st.team[st.team.length - 1].v);
          }
          if (teamVorne && st.s < hinten - 16) vT = Math.max(vT, L.v + 0.6);
          // Tipps
          if (teamVorne && st.draft < 0.2 && st.raceTime > 0) {
            st.tippAttacke += dt;
            if (st.tippAttacke > 0.6) tipp(`Lenk hinter die <b style="color:#ff6a13">orangen Trikots</b> (${lenkText()}) und tritt!`);
          } else {
            st.tippAttacke = 0;
            tipp(teamVorne && !tritt ? `Weiter treten: ${pedalText()}` : '');
          }
          if (st.phase === 'attacke' && st.t > 10) goPhase('flucht');
          if (!st.feldWeg && st.s - st.pf > 30) {
            st.feldWeg = true;
            banner('Das Feld kommt nicht mit!', `Nur noch du und ${TEAM_NAME} vorne`);
            app.audio.success();
          }
          if (L.s >= st.sZiel - SPRINT_AB) {
            goPhase('sprint');
            st.sprintT = 0;
            banner('Schlusssprint!', `Jetzt SPRINT: ${sprintText()}`);
            app.audio.whoosh(1.6);
            app.input.rumble(0.8, 300);
            $('.story-phase').textContent = 'Sprint!';
          }
        } else {
          // Schlusssprint: Jonas zieht los. Du kommst ran – aber nur bis auf eine halbe Sekunde.
          st.sprintT += dt;
          if (sprintKey && !st.sprint) {
            st.sprint = true;
            st.sprintGap = L.s - st.s;
            st.sprintRest = Math.max(1, st.sZiel - L.s);
            banner('Sprint!', 'Volle Kraft!');
            app.audio.whoosh(1.2);
            app.audio.select();
            app.input.rumble(0.8, 400);
          }
          const gap = L.s - st.s;
          const end = ABSTAND_ZIEL * Math.max(L.v, 10);
          if (st.sprint) {
            // Du holst auf – genau bis auf eine halbe Sekunde, wenn Jonas über die Linie fährt
            const anteil = clamp((st.sZiel - L.s) / st.sprintRest, 0, 1);
            const ziel = end + (Math.max(st.sprintGap, end) - end) * anteil;
            vT = Math.min(19.2, L.v + clamp((gap - ziel) * 1.6, -3, 6));
            tipp('');
          } else {
            vT = tritt ? L.v - 2.5 : L.v - 4;
            tipp(`SPRINT: ${sprintText()}!`);
          }
          if (gap < end) {
            st.s = L.s - end;
            st.v = Math.min(st.v, L.v);
          }
          if (L.ziel != null && !st.winnerShown) {
            st.winnerShown = true;
            banner(`${L.r.name} gewinnt!`, 'Ganz knapp vor dir …');
          }
        }
      } else if (st.phase === 'auslaufen') {
        st.vf = damp(st.vf, 6, 0.4, dt);
        st.pf += st.vf * dt;
        vT = Math.max(0, st.v - 1.6 * dt);
        st.draft = damp(st.draft, 0, 5, dt);
      }

      // eigenes Tempo weich anpassen
      const rate = vT > st.v ? 1.3 : 2.2;
      st.v = Math.max(0, st.v + clamp(vT - st.v, -rate * 6 * dt, rate * 3.5 * dt));
      if (st.phase === 'aufstellen' || st.phase === 'countdown') st.v = 0;
      st.s += st.v * dt;

      // Ziel!
      if (st.phase === 'sprint' && st.meZiel == null && st.s >= st.sZiel) {
        st.meZiel = st.raceTime - (st.s - st.sZiel) / Math.max(st.v, 1);
        // Sieger hat die Linie sicher schon überquert (Abstand ist mindestens eine halbe Sekunde)
        goPhase('auslaufen');
        st.cruise = false;
        $('.cruise-badge').classList.remove('on');
        $('.story-phase').textContent = 'Ziel';
        tipp('');
        banner('Platz 2!', `Nur ${(st.meZiel - (leader().ziel ?? st.meZiel)).toFixed(1).replace('.', ',')} Sekunden hinter ${leader().r.name}`);
        app.audio.success();
        app.input.rumble(0.8, 400);
        setTimeout(() => root && st.phase === 'auslaufen' && showResult(), 3200);
      }

      // Lenken: seitlich auf der Straße
      const steer = inp.steer;
      const nr = app.world.nearest(st.x ?? 0, st.z ?? 0);
      const rh = (nr.found ? app.world.rhArr[nr.i] : app.world.RH) - 0.5;
      if (st.phase !== 'aufstellen' && st.phase !== 'countdown') st.lat = clamp(st.lat + steer * 2.4 * dt * clamp(st.v / 4, 0.3, 1), -rh, rh);
      st.lean = damp(st.lean, steer * clamp(st.v / 9, 0, 1) * 0.3, 6, dt);
      st.steerVis = damp(st.steerVis, steer * (1 - clamp(st.v / 14, 0, 0.85)) * 0.5, 10, dt);
      // nicht in Team-Blitz-Fahrer hineinfahren
      for (const tm of st.team) {
        if (Math.abs(tm.s - st.s) < 1.0 && Math.abs(tm.lat - st.lat) < 0.8) st.lat = tm.lat + (st.lat >= tm.lat ? 0.8 : -0.8);
      }

      const crankRate = tritt || (rennen && st.v > 1) || st.phase === 'anfahrt' && st.v > 0.3 ? Math.max(st.v / WHEEL_R / GEAR, tritt ? 3 : 0) : 0;
      if (crankRate > 0) app.audio.freewheel(dt, 0);
      else app.audio.freewheel(dt, Math.min(55, (st.v / (2 * Math.PI * WHEEL_R)) * 24));
      // Wiegetritt: im Schlusssprint und beim Versuch auszureißen
      app.bike.stand = (st.phase === 'sprint' && st.sprint) || st.surge > 0 ? 1 : 0;
      // Jonas sprintet auch im Stehen
      leader().r.bike.stand = st.phase === 'sprint' && st.sprintT > 0.3 ? 1 : 0;
      placeMe(dt, crankRate);
      updateTeam(dt);
      updateFeld(dt);
      team.showDraft(st.draft > 0.2 ? team.draftFor(st.x, st.z).rival : null, st.draft, dt);

      // Kamera
      if (st.phase === 'aufstellen' || (st.phase === 'countdown' && st.cd > 1.6)) frontCamera(dt);
      else followCamera(dt);

      // Anzeige
      app.audio.setWind(clamp(st.v / 15, 0, 1) * (1 - 0.5 * st.draft));
      const kmh = st.v * 3.6;
      $('.speedo-val b').textContent = Math.round(kmh);
      $('.speedo-fill').style.strokeDasharray = `${clamp(kmh / 70, 0, 1) * 75} 100`;
      $('.place').textContent = rennen || st.phase === 'auslaufen' ? `${st.meZiel != null ? 2 : place()}/${N_FELD + 5}` : '–';
      const rest = st.sZiel - st.s;
      $('.story-rest').textContent = rennen ? (rest > 1000 ? `${(rest / 1000).toFixed(1).replace('.', ',')} km` : `${Math.max(0, Math.round(rest))} m`) : '–';
      const vorsprung = (st.s - st.pf) / Math.max(st.vf, 5);
      $('.story-gap-box').classList.toggle('show', st.feldWeg);
      $('.story-gap').textContent = `${Math.floor(vorsprung / 60)}:${String(Math.max(0, Math.round(vorsprung % 60))).padStart(2, '0')}`;
      const badge = $('.draft-badge');
      badge.classList.toggle('on', st.draft > 0.08);
      if (st.draft > 0.08) {
        $('.draft-name').textContent = `hinter ${TEAM_NAME} · −${Math.round(40 * st.draft)} % Wind`;
        $('.draft-meter i').style.width = `${Math.round(st.draft * 100)}%`;
      }
    },

    exit() {
      app.input.touchRide = false;
      app.bike.stand = 0;
      team?.hide();
      if (feld) feld.visible = false;
      if (deko) deko.visible = false;
      tipp('');
      root.remove();
      root = null;
      app.audio.setWind(0);
      app.audio.freewheel(0, 0);
      const nr = app.world.nearest(st.x ?? 0, st.z ?? 0);
      app.npc.s = nr.found ? nr.s : 0;
    },
  };
}
