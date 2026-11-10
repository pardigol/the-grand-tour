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
  { name: 'Jonas', number: 11, jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' },
  { name: 'Felix', number: 12, jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' },
  { name: 'Noah', number: 13, jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' },
  { name: 'Elias', number: 14, jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' },
];
// Trikots der anderen Teams im Feld
const FELD_TEAMS = [
  ['#2f7cf6', '#f6f6f6', '#2f7cf6'],
  ['#1fa88f', '#f1f1ec', '#f1f1ec'],
  ['#d23c3c', '#16161b', '#d23c3c'],
  ['#f4d21c', '#16161b', '#16161b'],
  ['#8a3ffc', '#d8d8de', '#8a3ffc'],
  ['#ff8c1a', '#16161b', '#ff8c1a'],
  ['#16161b', '#d23c3c', '#d23c3c'],
  ['#3bceac', '#16161b', '#3bceac'],
];
// ✏️ Deine Trikotfarbe im Game (Farbe vom Stoff Fabric019)
const MEIN_TRIKOT = '#efeee9';
const N_FELD = 46; // + 4 vom Team Blitz = 50 andere Fahrer
const RENNEN = 2000; // Meter vom Start bis ins Ziel
const ATTACKE_NACH = 600; // Meter: dann reißt Team Blitz aus
const SPRINT_AB = 260; // Meter vor dem Ziel: Schlusssprint
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

  // Torbogen über der Straße mit Schrift
  function makeBogen(sAt, rh, farbe, schriftFarbe, text) {
    const w = app.world;
    w.poseAt(sAt, 0, pose);
    const tex = canvasTex(1024, 192, (ctx, cw, ch) => {
      ctx.fillStyle = farbe;
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = schriftFarbe;
      ctx.font = '900 120px "Barlow Condensed", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, cw / 2, ch / 2 + 6);
    });
    const breite = rh * 2 + 1.6;
    const seite = new THREE.MeshStandardMaterial({ color: farbe });
    const bild = new THREE.MeshStandardMaterial({ map: tex });
    const tafel = new THREE.Mesh(new THREE.BoxGeometry(breite, 1.2, 0.3), [seite, seite, seite, seite, bild, bild]);
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
    return bogen;
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
    g.add(makeBogen(sStart, rh, '#2fa37a', '#ffffff', 'START · GRAND TOUR'));
    // Rote Flagge: noch 1 Kilometer (mit rotem Dreieck)
    const s1 = sStart + Math.min(RENNEN, app.world.length - 400) - 1000;
    w.poseAt(s1, 0, pose);
    const nr1 = w.nearest(pose.x, pose.z);
    g.add(makeBogen(s1, nr1.found ? w.rhArr[nr1.i] : w.RH, '#d8262e', '#ffffff', '▼  NOCH 1 KM  ▼'));
    // Schilder am Straßenrand: 500, 300, 200, 100 m
    const sZiel = sStart + Math.min(RENNEN, app.world.length - 400);
    for (const m of [500, 300, 200, 100]) {
      const tex = canvasTex(256, 256, (ctx, cw, ch) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, cw, ch);
        ctx.strokeStyle = '#d8262e';
        ctx.lineWidth = 18;
        ctx.strokeRect(9, 9, cw - 18, ch - 18);
        ctx.fillStyle = '#16161b';
        ctx.font = '900 110px "Barlow Condensed", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(m), cw / 2, ch / 2 - 18);
        ctx.font = '800 64px "Barlow Condensed", Arial, sans-serif';
        ctx.fillText('m', cw / 2, ch / 2 + 62);
      });
      for (const sd of [-1, 1]) {
        w.poseAt(sZiel - m, 0, pose);
        const nrm = w.nearest(pose.x, pose.z);
        const lat = (nrm.found ? w.shArr[nrm.i] : w.SH) + 0.6;
        w.poseAt(sZiel - m, sd * lat, pose);
        const schild = new THREE.Group();
        schild.position.set(pose.x, w.terrainHeight(pose.x, pose.z), pose.z);
        schild.rotation.y = pose.heading + Math.PI;
        const tafel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.05), [0, 0, 0, 0, 1, 1].map((k) => (k ? new THREE.MeshStandardMaterial({ map: tex }) : new THREE.MeshStandardMaterial({ color: '#ffffff' }))));
        tafel.position.y = 2.0;
        tafel.castShadow = true;
        const pfahl = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.0, 6), new THREE.MeshStandardMaterial({ color: '#b9bcc2', metalness: 0.7, roughness: 0.4 }));
        pfahl.position.y = 1.0;
        schild.add(tafel, pfahl);
        g.add(schild);
      }
    }
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
      hPrev: null,
      konterT: 0,
      konterDone: false,
      konterOk: false,
      zurueck: false,
      jagdT: 0,
      jagdDone: false,
      allesGeben: false,
      einKm: false,
      foto: false,
      fotoNach: null,
      fotoCamDa: false,
      slow: 1,
      slowZiel: 1,
      schild200: false,
      schild100: false,
      jubelT: 0,
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
      // in die Kurven legen
      const dreh = r.hPrev == null || dt <= 0 ? 0 : Math.atan2(Math.sin(pose.heading - r.hPrev), Math.cos(pose.heading - r.hPrev)) / dt;
      r.hPrev = pose.heading;
      r.lean = damp(r.lean || 0, clamp(-Math.atan((r.v * dreh) / 9.81), -0.5, 0.5), 4, dt);
      feld.set(i, pose.x, pose.h - (nah ? 5 : 0), pose.z, pose.heading, pose.pitch, r.lean, r.v, dt, r.v > 0.3);
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
        let vKopf = (st.phase === 'attacke' && st.t < 7 ? 15.2 : V_TEAM) + (st.konterT > 0 ? 2.8 : 0) + (st.allesGeben ? 0.9 : 0);
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
      { name: char.name, number: char.number, color: MEIN_TRIKOT, t: st.meZiel, me: true },
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

  // Fotofinish-Kamera: steht seitlich an der Ziellinie und schaut auf Jonas und dich
  const _foto = new THREE.Vector3();
  function fotoCamera(dt) {
    const w = app.world;
    // am Straßenrand vor der Bande, genau auf Höhe der Ziellinie (wie die echte Zielkamera)
    w.poseAt(st.sZiel, 0, pose);
    const nr = w.nearest(pose.x, pose.z);
    const rand = (nr.found ? w.rhArr[nr.i] : w.RH) + 0.9;
    w.poseAt(st.sZiel - 0.8, rand, pose);
    _foto.set(pose.x, pose.h + 1.25, pose.z);
    if (!st.fotoCamDa) {
      st.fotoCamDa = true;
      app.camera.position.copy(_foto);
    } else app.camera.position.lerp(_foto, 1 - Math.exp(-6 * dt));
    const L = leader().r.bike.root.position;
    const me = app.bike.root.position;
    // vor allem dich im Bild, Jonas knapp davor
    app.camera.lookAt(me.x + (L.x - me.x) * 0.07, me.y + 0.9, me.z + (L.z - me.z) * 0.07);
    app.camera.fov = damp(app.camera.fov, 62, 4, dt);
    app.camera.updateProjectionMatrix();
  }

  // Herzklopfen
  function herz(n) {
    for (let i = 0; i < n; i++) {
      app.audio.tone(58, 0.12, { type: 'sine', vol: 0.35, when: i * 0.75 });
      app.audio.tone(52, 0.12, { type: 'sine', vol: 0.28, when: i * 0.75 + 0.22 });
    }
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
      // Im Game fährst du in Weiß (Stoff Fabric019), Team Blitz in Weinrot
      app.bike.applyLook({ ...char, jersey: MEIN_TRIKOT });
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

      // Zeitlupe beim Fotofinish
      const realDt = dt;
      st.slow = damp(st.slow, st.slowZiel, 5, realDt);
      if (st.fotoNach != null) {
        st.fotoNach -= realDt;
        if (st.fotoNach <= 0) {
          st.fotoNach = null;
          st.slowZiel = 1;
          banner('Platz 2!', `Nur ${(st.meZiel - (leader().ziel ?? st.meZiel)).toFixed(1).replace('.', ',')} Sekunden hinter ${leader().r.name}`);
          app.audio.success();
          app.input.rumble(0.8, 400);
          setTimeout(() => root && st.phase === 'auslaufen' && showResult(), 3000);
        }
      }
      dt *= st.slow;
      // Sprint: Speedlines, Jubel am Straßenrand
      const sprintFx = (st.phase === 'sprint' && st.sprint) || (st.konterT > 0 && st.konterOk) ? 0.55 : 0;
      app.fx.uLines.value = damp(app.fx.uLines.value, sprintFx, 4, realDt);
      if (st.phase === 'sprint' || (st.phase === 'auslaufen' && st.t < 4)) {
        st.jubelT -= realDt;
        if (st.jubelT <= 0) {
          const nah = clamp(1 - (st.sZiel - st.s) / 320, 0.2, 1);
          st.jubelT = 0.35;
          app.audio.noiseBurst(0.7, { vol: 0.05 + 0.12 * nah, freq: 700 + Math.random() * 500, type: 'bandpass', q: 0.7 });
        }
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
        st.vf = damp(st.vf, st.jagdT > 0 ? 17 : V_FELD_HINTEN, 0.6, dt);
        st.pf += st.vf * dt;
        const L = leader();
        const restL = st.sZiel - L.s;
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
            if (st.tippAttacke > 0.6) tipp(`Lenk hinter die <b style="color:#e0607a">weinroten Trikots</b> (${lenkText()}) und tritt!`);
          } else {
            st.tippAttacke = 0;
            tipp(teamVorne && !tritt ? `Weiter treten: ${pedalText()}` : '');
          }
          if (st.phase === 'attacke' && st.t > 10) goPhase('flucht');

          // --- Spannung: Ereignisse während der Flucht ---
          if (st.phase === 'flucht') {
            // 1) Team Blitz verschärft das Tempo: schnell reagieren!
            if (!st.konterDone && restL < 1080) {
              st.konterDone = true;
              st.konterT = 6;
              st.konterOk = false;
              banner(`${TEAM_NAME} verschärft das Tempo!`, `Schnell SPRINT (${sprintText()}), sonst bist du weg!`);
              app.audio.whoosh(1.3);
              app.input.rumble(0.7, 300);
              herz(3);
            }
            if (st.konterT > 0) {
              st.konterT -= dt;
              if (sprintKey && !st.konterOk) {
                st.konterOk = true;
                banner('Stark!', 'Du bleibst dran!');
                app.audio.select();
                app.input.rumble(0.6, 200);
              }
              if (st.konterOk) vT = L.v + 1.2;
              else {
                vT = Math.min(vT, L.v - 2.4);
                tipp(`SPRINT: ${sprintText()}!`);
              }
              if (st.konterT <= 0 && !st.konterOk) {
                st.zurueck = true;
                banner('Eine Lücke!', 'Kämpf dich zurück – tritt!');
              }
            } else if (st.zurueck) {
              vT = tritt ? L.v + 1.8 : L.v - 0.5;
              tipp(`Kämpf dich zurück: ${pedalText()}`);
              if (hinten - st.s < 3.2) {
                st.zurueck = false;
                tipp('');
                banner('Wieder dran!', 'Puh, geschafft');
                app.audio.success();
              }
            }
            // nie ganz abgehängt
            if (st.s < hinten - 30) vT = Math.max(vT, L.v + 0.8);
            // 2) Das Feld jagt die Ausreißer
            if (!st.jagdDone && restL < 820) {
              st.jagdDone = true;
              st.jagdT = 13;
              banner('Achtung!', 'Das Feld jagt euch!');
              app.audio.tone(330, 0.4, { type: 'sawtooth', vol: 0.06, slideTo: 220 });
              herz(4);
            }
            if (st.jagdT > 0) st.jagdT -= dt;
            $('.story-gap-box').classList.toggle('alarm', st.jagdT > 0 || (st.feldWeg && (st.s - st.pf) / Math.max(st.vf, 5) < 7));
            // 3) Team Blitz gibt nochmal alles
            if (!st.allesGeben && restL < 600) {
              st.allesGeben = true;
              banner(`${TEAM_NAME} gibt nochmal alles!`, 'Das Feld fällt wieder zurück');
              app.audio.whoosh(1.0);
            }
            // Noch 1 Kilometer
            if (!st.einKm && st.sZiel - st.s < 1000) {
              st.einKm = true;
              banner('Noch 1 Kilometer!', 'Gleich geht der Sprint los …');
              app.audio.tone(880, 0.15, { type: 'square', vol: 0.06 });
              app.audio.tone(880, 0.15, { type: 'square', vol: 0.06, when: 0.2 });
              herz(5);
            }
          }
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
          // Meter-Schilder
          for (const m of [200, 100]) {
            if (!st['schild' + m] && st.sZiel - st.s < m) {
              st['schild' + m] = true;
              banner(`${m} m!`, m === 200 ? 'Alles geben!' : 'Gleich ist es entschieden!');
            }
          }
          // Fotofinish: kurz vor der Linie wird alles langsam
          if (!st.foto && L.s > st.sZiel - 22) {
            st.foto = true;
            st.slowZiel = 0.22;
            banner('Fotofinish!', '');
            app.audio.whoosh(2.2);
          }
          if (L.ziel != null && !st.winnerShown) {
            st.winnerShown = true;
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
        // Zeitlupe noch kurz halten, dann das Ergebnis
        st.fotoNach = 1.1;
      }

      // Lenken: seitlich auf der Straße
      const steer = inp.steer;
      const nr = app.world.nearest(st.x ?? 0, st.z ?? 0);
      const rh = (nr.found ? app.world.rhArr[nr.i] : app.world.RH) - 0.5;
      if (st.phase !== 'aufstellen' && st.phase !== 'countdown') st.lat = clamp(st.lat + steer * 2.4 * dt * clamp(st.v / 4, 0.3, 1), -rh, rh);
      // In die Kurven legen (nur Aussehen): aus der Kurve der Straße plus etwas Lenken
      const hNow = app.bike.root.rotation.y;
      const dreh = st.hPrev == null || dt <= 0 ? 0 : Math.atan2(Math.sin(hNow - st.hPrev), Math.cos(hNow - st.hPrev)) / dt;
      st.hPrev = hNow;
      const kurvenLage = clamp(-Math.atan((st.v * dreh) / 9.81) * 1.1 + steer * clamp(st.v / 9, 0, 1) * 0.25, -0.6, 0.6);
      st.lean = damp(st.lean, kurvenLage, 4, dt);
      st.steerVis = damp(st.steerVis, steer * (1 - clamp(st.v / 14, 0, 0.85)) * 0.5, 10, dt);
      // nicht in Team-Blitz-Fahrer hineinfahren
      for (const tm of st.team) {
        if (Math.abs(tm.s - st.s) < 1.0 && Math.abs(tm.lat - st.lat) < 0.8) st.lat = tm.lat + (st.lat >= tm.lat ? 0.8 : -0.8);
      }

      const crankRate = tritt || (rennen && st.v > 1) || st.phase === 'anfahrt' && st.v > 0.3 ? Math.max(st.v / WHEEL_R / GEAR, tritt ? 3 : 0) : 0;
      if (crankRate > 0) app.audio.freewheel(dt, 0);
      else app.audio.freewheel(dt, Math.min(55, (st.v / (2 * Math.PI * WHEEL_R)) * 24));
      // Wiegetritt: im Schlusssprint und beim Versuch auszureißen
      // Fotofinish: beide voll im Sprint und mit Radwurf an der Linie
      const fotoAn = st.foto && (st.slow < 0.95 || st.fotoNach != null);
      const wurf = (s) => clamp(1 - Math.abs(st.sZiel + 1 - s) / 7, 0, 1);
      app.bike.stand = (st.phase === 'sprint' && st.sprint) || st.surge > 0 || fotoAn ? 1 : 0;
      app.bike.wurf = fotoAn ? wurf(st.s) : 0;
      leader().r.bike.wurf = st.foto ? wurf(leader().s) : 0;
      // Jonas sprintet auch im Stehen
      leader().r.bike.stand = (st.phase === 'sprint' && st.sprintT > 0.3) || (st.foto && (st.slow < 0.95 || st.fotoNach != null)) ? 1 : 0;
      placeMe(dt, crankRate);
      updateTeam(dt);
      updateFeld(dt);
      team.showDraft(st.draft > 0.2 ? team.draftFor(st.x, st.z).rival : null, st.draft, dt);

      // Kamera
      if (st.phase === 'aufstellen' || (st.phase === 'countdown' && st.cd > 1.6)) frontCamera(dt);
      else if (st.foto && (st.slow < 0.9 || st.fotoNach != null)) fotoCamera(realDt);
      else followCamera(dt);
      // im Sprint wackelt die Kamera ein bisschen
      if (st.phase === 'sprint' && st.sprint && st.slow > 0.9) {
        app.camera.position.x += (Math.random() - 0.5) * 0.03;
        app.camera.position.y += (Math.random() - 0.5) * 0.03;
      }

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
      app.bike.wurf = 0;
      if (leader()?.r) leader().r.bike.wurf = 0;
      // wieder in den eigenen Farben
      if (char) app.bike.applyLook(char);
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
