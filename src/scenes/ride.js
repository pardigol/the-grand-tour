// 5. TESTSTRECKE – selbst fahren! (Platzhalter für das spätere Spiel)
import { CONFIG } from '../config.js';
import { updateCharacter, loadCharacters } from '../storage.js';
import { el, esc, btn, formatTime } from './common.js';
import { WHEEL_R } from '../bike.js';
import { clamp, damp, smoothstep } from '../noise.js';
import { Minimap } from '../minimap.js';
import { Rivals } from '../rivals.js';
import { gearDrive, gearCount } from '../gears.js';

const MASS = 78;
const G = 9.81;
const CHECKPOINTS = [0.25, 0.5, 0.75];
const RACE_LAPS = CONFIG.raceLaps;

// Kamera-Ansichten: yaw = Winkel um den Fahrer (0 = hinten), pitch = Höhe, dist = Abstand
const VIEWS = [
  { name: 'Hinten', yaw: 0, pitch: 0.32, dist: 4.4 },
  { name: 'Seite', yaw: Math.PI / 2, pitch: 0.12, dist: 4.6 },
  { name: 'Von oben', yaw: 0, pitch: 1.3, dist: 12 },
  { name: 'Von vorne', yaw: Math.PI, pitch: 0.16, dist: 4.2 },
];

const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const dampAngle = (a, b, rate, dt) => a + wrapAngle(b - a) * (1 - Math.exp(-rate * dt));

export function createRideScene(app) {
  let root;
  let char;
  const st = {};
  const ground = {};
  const tmp = {};
  let pauseIndex = 0;
  let minimap;
  let rivals;
  let resultIndex = 0;
  const cam = { view: 0, yawOff: 0, pitchOff: 0, idle: 0, yaw: 0, pitch: 0.32, dist: 4.4, heading: 0 };

  // Kamera kreist um den Fahrer: rechter Stick dreht, Klick auf den Stick wechselt die Ansicht
  function updateCamera(dt, snap = false) {
    const inp = app.input;
    const v = VIEWS[cam.view];
    if (inp.lookX || inp.lookY) {
      cam.idle = 0;
      cam.yawOff += inp.lookX * 2.6 * dt;
      cam.pitchOff -= inp.lookY * 1.5 * dt;
    } else {
      cam.idle += dt;
      // Nach kurzer Pause schwenkt die Kamera zurück in die gewählte Ansicht
      if (cam.idle > 1.5) {
        cam.yawOff = damp(cam.yawOff, 0, 2, dt);
        cam.pitchOff = damp(cam.pitchOff, 0, 2, dt);
      }
    }
    cam.yawOff = wrapAngle(cam.yawOff);
    const pitch = clamp(v.pitch + cam.pitchOff, 0.04, 1.45);
    cam.pitchOff = pitch - v.pitch;
    if (snap) {
      cam.yaw = v.yaw + cam.yawOff;
      cam.pitch = pitch;
      cam.dist = v.dist;
      cam.heading = st.heading;
    } else {
      cam.yaw = dampAngle(cam.yaw, v.yaw + cam.yawOff, 6, dt);
      cam.pitch = damp(cam.pitch, pitch, 6, dt);
      cam.dist = damp(cam.dist, v.dist, 4, dt);
      cam.heading = dampAngle(cam.heading, st.heading, 5, dt);
    }

    const c = app.camera;
    const ang = cam.heading + Math.PI + cam.yaw;
    const flat = Math.cos(cam.pitch) * cam.dist;
    c.position.set(
      st.x + Math.sin(ang) * flat,
      st.h + 0.9 + Math.sin(cam.pitch) * cam.dist,
      st.z + Math.cos(ang) * flat,
    );
    const ground = app.world.terrainHeight(c.position.x, c.position.z) + 0.6;
    if (c.position.y < ground) c.position.y = ground;
    // Von hinten etwas nach vorne schauen, sonst direkt auf den Fahrer
    const ahead = 2.5 * Math.max(0, Math.cos(cam.yaw)) * (1 - cam.pitch / 1.5);
    c.lookAt(st.x + Math.sin(st.heading) * ahead, st.h + 0.9, st.z + Math.cos(st.heading) * ahead);
    // Beim Sprint wird das Bild etwas weiter – fühlt sich schneller an
    const fov = 58 + Math.min(st.speed, 20) * 0.9 + (st.sprint === 'active' ? 7 : 0);
    c.fov = snap ? fov : damp(c.fov, fov, 3, dt);
    c.updateProjectionMatrix();

    if (inp.pressed('view')) {
      cam.view = (cam.view + 1) % VIEWS.length;
      cam.yawOff = 0;
      cam.pitchOff = 0;
      app.audio.nav();
      const t = $('.view-toast');
      t.textContent = `Kamera: ${VIEWS[cam.view].name}`;
      t.classList.remove('show');
      void t.offsetWidth;
      t.classList.add('show');
    }
  }

  function $(s) {
    return root.querySelector(s);
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

  function renderPause() {
    root.querySelectorAll('.pause-item').forEach((e, i) => e.classList.toggle('selected', i === pauseIndex));
  }

  // Zurückgelegte Meter ab der Startlinie (vor dem Start negativ)
  function playerProgress() {
    const L = app.world.length;
    return st.lap === 0 ? st.lastS - L : (st.lap - 1) * L + st.lastS;
  }

  function currentPlace() {
    if (st.place) return st.place;
    const me = playerProgress();
    let ahead = 0;
    for (const r of rivals.list) if (r.finished != null || rivals.progress(r) > me) ahead++;
    return ahead + 1;
  }

  function showResult() {
    const L = app.world.length;
    const rows = [
      { name: char.name, number: char.number, color: char.jersey, me: true, t: st.finishTime, p: playerProgress() },
      ...rivals.list.map((r) => ({ name: r.name, number: r.number, color: r.jersey, t: r.finished, p: rivals.progress(r) })),
    ];
    rows.sort((a, b) => (a.t != null && b.t != null ? a.t - b.t : a.t != null ? -1 : b.t != null ? 1 : b.p - a.p));
    $('.result-list').innerHTML = rows
      .map(
        (r, i) => `<div class="result-row ${r.me ? 'me' : ''}">
          <b>${i + 1}.</b><i style="background:${r.color}"></i><span class="mini-plate"><span>${r.number}</span></span>
          <span class="result-name">${esc(r.name)}</span>
          <span class="result-time">${r.t != null ? formatTime(r.t) : `noch ${Math.max(1, Math.ceil((RACE_LAPS * L - r.p) / 1000 * 10) / 10)} km`}</span>
        </div>`,
      )
      .join('');
    $('.result-title').textContent = st.place === 1 ? 'Sieg! Du bist Erster!' : `Ziel! Du bist ${st.place}.`;
    resultIndex = 0;
    renderResult();
    $('.result').classList.add('show');
    st.showResult = true;
  }

  function renderResult() {
    root.querySelectorAll('.result-item').forEach((e, i) => e.classList.toggle('selected', i === resultIndex));
  }

  function banner(text, sub = '') {
    const b = $('.banner');
    b.innerHTML = `<div>${text}</div>${sub ? `<small>${sub}</small>` : ''}`;
    b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
  }

  return {
    enter({ character }) {
      char = character;
      root = el(`
        <div class="screen ride-screen">
          <div class="hud-top">
            <div class="hud-box hud-place"><label>Platz</label><b class="place">–</b></div>
            <div class="hud-box"><label>Runde</label><b class="lap">–</b></div>
            <div class="hud-box"><label>Zeit</label><b class="time">0:00.0</b></div>
            <div class="hud-box"><label>Bestzeit</label><b class="best">${formatTime(char.bestLap)}</b></div>
          </div>
          <div class="hud-map">
            <div class="hud-rider">
              <div class="mini-plate"><span>${char.number}</span></div>
              <div><div class="rider-name">${esc(char.name)}</div><div class="rider-sub">Teststrecke</div></div>
            </div>
            <canvas class="minimap"></canvas>
          </div>
          <div class="view-toast"></div>
          <div class="draft-badge">
            <span class="draft-icon">≋</span>
            <div class="draft-text"><b>Windschatten</b><small class="draft-name"></small></div>
            <div class="draft-meter"><i></i></div>
          </div>
          <div class="cruise-badge">${btn('B')} Dauertreten an</div>
          <div class="grade-box"><span class="grade-arrow"></span><b class="grade-val">0 %</b><label>Steigung</label></div>
          <div class="gear-box">
            ${btn('LB')}
            <div class="gear-main">
              <div class="gear-top"><label>Gang</label><b class="gear-num"></b><span class="gear-rpm"></span></div>
              <div class="gear-pips">${Array.from({ length: gearCount() }, (_, i) => `<i data-g="${i + 1}"></i>`).join('')}</div>
            </div>
            ${btn('RB')}
          </div>
          <div class="sprint-bar ready">
            <div class="sprint-fill"></div>
            <div class="sprint-label"><span class="sprint-text">SPRINT</span><span class="sprint-info"></span></div>
          </div>
          <div class="speedo">
            <svg viewBox="0 0 200 200">
              <circle class="speedo-bg" cx="100" cy="100" r="80" pathLength="100"/>
              <circle class="speedo-fill" cx="100" cy="100" r="80" pathLength="100"/>
            </svg>
            <div class="speedo-val"><b>0</b><span>km/h</span></div>
          </div>
          <div class="controls-help">
            <div>${btn('A')} Treten</div>
            <div>${btn('B')} Dauertreten an/aus</div>
            <div>${btn('Y')} Bremsen</div>
            <div>${btn('X')} Sprint</div>
            <div>${btn('LB')}${btn('RB')} Gang runter / hoch</div>
            <div>${btn('LT')}${btn('RT')} Lenken</div>
            <div><span class="btn btn-stick">L</span> leicht lenken</div>
            <div><span class="btn btn-stick">R</span> Kamera drehen</div>
            <div><span class="btn btn-stick">R</span>drücken: Ansicht wechseln</div>
            <div><span class="btn btn-opt">☰</span> Pause</div>
          </div>
          <div class="banner"></div>
          <div class="countdown"></div>
          <div class="result">
            <div class="pause-box result-box">
              <h2 class="result-title"></h2>
              <div class="result-list"></div>
              <div class="pause-item result-item">Nochmal fahren</div>
              <div class="pause-item result-item">Zurück zum Hauptmenü</div>
            </div>
          </div>
          <div class="pause">
            <div class="pause-box">
              <h2>Pause</h2>
              <div class="pause-item">Weiterfahren</div>
              <div class="pause-item">Zurück zum Hauptmenü</div>
            </div>
          </div>
        </div>`);
      app.ui.append(root);
      setTimeout(() => root?.querySelector('.controls-help')?.classList.add('fade'), 12000);
      minimap = new Minimap(app.world, $('.minimap'));

      app.bike.setPlate(char.number, char.name);
      app.bike.applyLook(char);

      const p = app.world.poseAt(app.world.length - 14, 1.5, tmp);
      Object.assign(st, {
        x: p.x,
        z: p.z,
        heading: p.heading,
        speed: 0,
        lean: 0,
        steerVis: 0,
        pitch: 0,
        h: p.h,
        lastS: p.s,
        lap: 0,
        lapStart: 0,
        cps: new Set(),
        time: 0,
        paused: false,
        shake: 0,
        cruise: false,
        sprint: 'ready', // 'ready' | 'active' | 'charging'
        sprintT: 0,
        gear: CONFIG.gaenge.start,
        rpm: 0,
        cad: 0,
        grade: 0,
        phase: 'countdown',
        countdown: 3,
        lastCount: 4,
        raceTime: 0,
        place: 0,
        finishTime: null,
        showResult: false,
      });
      app.rideState = st; // zum Ausprobieren in der Konsole
      if (!rivals) rivals = new Rivals(app);
      app.rivals = rivals; // zum Ausprobieren in der Konsole
      rivals.reset(p.s);
      this.placeBike();
      cam.view = 0;
      cam.yawOff = cam.pitchOff = 0;
      updateCamera(0, true);
      app.fx.uFade.value = 1;
      app.audio.setMusicLevel(0.45);
    },

    placeBike() {
      const b = app.bike.root;
      b.position.set(st.x, st.h, st.z);
      b.rotation.set(-st.pitch, st.heading, st.lean + app.bike.rock);
      app.focus.set(st.x, st.h, st.z);
    },

    update(dt) {
      const inp = app.input;
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 3, dt);
      app.fx.uBlur.value = damp(app.fx.uBlur.value, 0, 5, dt);

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
            app.go('menu', { selectId: char.id });
          }
        }
        app.bike.update(0, 0, 0, st.steerVis);
        updateCamera(dt);
        return;
      }
      if (st.showResult) {
        if (inp.pressed('up') || inp.pressed('down')) {
          resultIndex = 1 - resultIndex;
          renderResult();
          app.audio.nav();
        } else if (inp.pressed('confirm')) {
          app.audio.select();
          if (resultIndex === 0) app.go('ride', { character: char });
          else app.go('menu', { selectId: char.id });
          return;
        }
      } else if (inp.pressed('pause') || inp.pressed('start')) {
        setPaused(true);
        return;
      }

      // Countdown 3 – 2 – 1 – LOS!
      if (st.phase === 'countdown') {
        st.countdown -= dt;
        const n = Math.ceil(st.countdown);
        if (n !== st.lastCount) {
          st.lastCount = n;
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
        if (n <= 0) st.phase = 'race';
      } else {
        st.raceTime += dt;
      }
      // ○ / B: Dauertreten ein- und ausschalten
      if (inp.pressed('cruise')) {
        st.cruise = !st.cruise;
        $('.cruise-badge').classList.toggle('on', st.cruise);
        if (st.cruise) app.audio.select();
        else app.audio.back();
        app.input.rumble(0.25, 60);
      }

      st.time += dt;
      const w = app.world;
      const steer = inp.steer;
      // Sprint: □ / X startet ihn, wenn der Balken voll ist
      const sp = CONFIG.sprint;
      const sprintKey = inp.pressed('x') || inp.pressed('sprint');
      // Nochmal □ während des Sprints: abbrechen. Was übrig war, wird beim Aufladen gutgeschrieben.
      if (sprintKey && st.sprint === 'active') {
        st.sprint = 'charging';
        st.sprintT = (st.sprintT / sp.dauer) * sp.aufladen;
        app.audio.back();
        app.input.rumble(0.2, 60);
      } else if (sprintKey && st.sprint === 'ready' && st.phase === 'race') {
        st.sprint = 'active';
        st.sprintT = sp.dauer;
        app.audio.whoosh(1.2);
        app.audio.select();
        app.input.rumble(0.7, 300);
        banner('Sprint!');
      }
      if (st.sprint === 'active') {
        st.sprintT -= dt;
        if (st.sprintT <= 0) {
          st.sprint = 'charging';
          st.sprintT = 0;
        }
      } else if (st.sprint === 'charging') {
        st.sprintT += dt;
        if (st.sprintT >= sp.aufladen) {
          st.sprint = 'ready';
          app.audio.nav();
        }
      }
      const sprinting = st.sprint === 'active';
      // Im Sprint steht der Fahrer aus dem Sattel auf
      app.bike.setStanding(sprinting);

      // Beim Bremsen wird nicht getreten, Dauertreten und Sprint laufen danach weiter
      let throttle = inp.brake > 0.1 ? 0 : st.cruise || sprinting ? 1 : inp.throttle;
      let brake = inp.brake;
      if (st.phase === 'countdown') throttle = 0;
      // Nach dem Ziel rollt man langsam aus
      if (st.phase === 'finished') {
        throttle = 0;
        brake = st.speed > 4 ? 0.25 : 0;
      }

      // Untergrund und Steigung
      w.groundAt(st.x, st.z, ground);
      const fx = Math.sin(st.heading);
      const fz = Math.cos(st.heading);
      const hF = w.groundAt(st.x + fx * 0.6, st.z + fz * 0.6, tmp).h;
      const hB = w.groundAt(st.x - fx * 0.6, st.z - fz * 0.6, tmp).h;
      const pitch = Math.atan2(hF - hB, 1.2);
      st.pitch = damp(st.pitch, pitch, 12, dt);

      // Kräfte: Treten, Luftwiderstand, Rollwiderstand, Hangabtrieb, Bremse
      const v = st.speed;
      const roll = ground.surface === 'road' ? 0.005 : ground.surface === 'gravel' ? 0.02 : 0.06;
      // Schalten: L1 runter, R1 hoch (Tastatur Q / E)
      if ((inp.pressed('lb') || inp.pressed('gearDown')) && st.gear > 1) {
        st.gear--;
        app.audio.tone(900, 0.04, { type: 'square', vol: 0.06 });
        app.input.rumble(0.15, 30);
      }
      if ((inp.pressed('rb') || inp.pressed('gearUp')) && st.gear < gearCount()) {
        st.gear++;
        app.audio.tone(1200, 0.04, { type: 'square', vol: 0.06 });
        app.input.rumble(0.15, 30);
      }
      const boost = sprinting ? CONFIG.sprint.kraft : 1;
      const gd = gearDrive(st.gear, v, throttle, boost);
      const drive = gd.force;
      st.cad = gd.c;
      st.rpm = throttle > 0.05 ? gd.rpm : 0;
      // Windschatten: dicht hinter einem Gegner bis zu 40 % weniger Luftwiderstand
      const dr = rivals.draftFor(st.x, st.z);
      st.draft = damp(st.draft || 0, dr.strength, 5, dt);
      if (dr.rival) st.draftName = dr.rival.name;
      const drag = 0.5 * 1.2 * 0.36 * v * v * (1 - CONFIG.windschatten * st.draft);
      const brakeF = brake * 650;
      let a = (drive - drag - roll * MASS * G - MASS * G * Math.sin(st.pitch)) / MASS;
      a -= v > 0.01 ? brakeF / MASS : 0;
      st.speed = Math.max(0, v + a * dt);
      if (st.speed < 0.05 && throttle < 0.05 && Math.sin(st.pitch) > 0.02) st.speed = 0;

      // Lenken: langsam = wendig, schnell = ruhig
      const turn = Math.min(1.5, st.speed * 0.9 + 0.15) * (1 - 0.55 * clamp(st.speed / 16, 0, 1));
      st.heading -= steer * turn * dt;
      st.x += Math.sin(st.heading) * st.speed * dt;
      st.z += Math.cos(st.heading) * st.speed * dt;

      // Nicht durch die anderen Fahrer hindurchfahren
      for (const r of rivals.list) {
        const dx = st.x - r.x;
        const dz = st.z - r.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.9 && d > 0.001) {
          st.x = r.x + (dx / d) * 0.9;
          st.z = r.z + (dz / d) * 0.9;
          st.speed *= 0.98;
        }
      }

      // Weltgrenze
      const r = Math.hypot(st.x, st.z);
      if (r > 830) {
        st.x *= 830 / r;
        st.z *= 830 / r;
        st.speed *= 0.9;
      }
      st.h = w.groundAt(st.x, st.z, ground).h;

      // Wackeln im Gras
      if (ground.surface === 'grass' && st.speed > 1) {
        st.h += Math.sin(st.time * 30) * 0.01 * Math.min(1, st.speed / 6);
        st.shake = 1;
      } else st.shake = 0;

      st.lean = damp(st.lean, steer * clamp(st.speed / 9, 0, 1) * 0.42, 6, dt);
      st.steerVis = damp(st.steerVis, steer * (1 - clamp(st.speed / 14, 0, 0.85)), 10, dt);

      // Pedalieren oder Freilauf
      let crankRate = 0;
      if (throttle > 0.05) {
        // Kurbel dreht so schnell wie die Trittfrequenz im gewählten Gang
        crankRate = Math.max((st.rpm * Math.PI * 2) / 60, 3 * throttle);
        app.audio.freewheel(dt, 0);
      } else {
        app.audio.freewheel(dt, Math.min(30, (st.speed / (2 * Math.PI * WHEEL_R)) * 24));
      }
      this.placeBike();
      app.bike.update(dt, st.speed, crankRate, st.steerVis);

      const kmh = st.speed * 3.6;
      // Zuschauer an Start/Ziel: Jubel wird beim Näherkommen lauter
      const dStart = Math.hypot(st.x - w.crowdCenter.x, st.z - w.crowdCenter.z);
      app.audio.setCrowd(smoothstep(90, 8, dStart), dt);
      // Im Windschatten ist es auch leiser
      app.audio.setWind(clamp(st.speed / 15, 0, 1) * (1 - 0.5 * st.draft));
      rivals.showDraft(dr.rival, dr.strength, dt);
      const badge = $('.draft-badge');
      badge.classList.toggle('on', st.draft > 0.08);
      if (st.draft > 0.08) {
        $('.draft-name').textContent = `hinter ${st.draftName} · −${Math.round(CONFIG.windschatten * st.draft * 100)} % Wind`;
        $('.draft-meter i').style.width = `${Math.round(st.draft * 100)}%`;
      }
      // Keine Speedlines auf der Strecke
      app.fx.uLines.value = 0;
      updateCamera(dt);
      if (st.shake) {
        app.camera.position.y += (Math.random() - 0.5) * 0.02;
      }

      // Runden zählen
      const nr = w.nearest(st.x, st.z);
      if (nr.found && nr.dist < 25) {
        const s = nr.s;
        const L = w.length;
        for (const c of CHECKPOINTS) {
          if (s > c * L && s < c * L + 40) st.cps.add(c);
        }
        if (st.lastS > L - 60 && s < 60) {
          if (st.lap === 0) {
            st.lap = 1;
            st.lapStart = st.time;
            st.cps.clear();
            banner(`Runde 1 von ${RACE_LAPS}`, 'Die Zeit läuft!');
            app.audio.lap();
          } else if (st.cps.size === CHECKPOINTS.length) {
            st.lastS = s;
            const lapTime = st.time - st.lapStart;
            const best = char.bestLap == null || lapTime < char.bestLap;
            if (best) {
              const fresh = loadCharacters().find((c) => c.id === char.id) || char;
              char = { ...fresh, bestLap: lapTime };
              updateCharacter(char);
              $('.best').textContent = formatTime(lapTime);
            }
            st.lap++;
            st.lapStart = st.time;
            st.cps.clear();
            if (st.lap > RACE_LAPS && st.phase === 'race') {
              // Im Ziel!
              st.place = currentPlace();
              st.finishTime = st.raceTime;
              st.phase = 'finished';
              st.cruise = false;
              $('.cruise-badge').classList.remove('on');
              banner(st.place === 1 ? 'Sieg!' : `Platz ${st.place}`, formatTime(st.finishTime));
              app.audio.success();
              app.input.rumble(0.8, 400);
              setTimeout(() => root && st.phase === 'finished' && showResult(), 2200);
            } else {
              const last = st.lap === RACE_LAPS && st.phase === 'race';
              banner(best ? 'Neue Bestzeit!' : last ? 'Letzte Runde!' : `Runde ${st.lap} von ${RACE_LAPS}`, formatTime(lapTime));
              app.audio.lap();
              app.input.rumble(0.5, 200);
            }
          }
        }
        st.lastS = s;
      }

      // Anzeige
      $('.speedo-val b').textContent = Math.round(kmh);
      // Steigung in Prozent über dem Tacho (positiv = bergauf)
      st.grade = damp(st.grade, Math.tan(st.pitch) * 100, 4, dt);
      const gr = Math.round(st.grade);
      if (gr !== st.gradeShown) {
        st.gradeShown = gr;
        const gb = $('.grade-box');
        $('.grade-val').textContent = `${gr > 0 ? '+' : ''}${gr} %`;
        $('.grade-arrow').textContent = gr > 0 ? '▲' : gr < 0 ? '▼' : '▬';
        gb.className = `grade-box ${gr >= 8 ? 'steep' : gr > 1 ? 'up' : gr < -1 ? 'down' : 'flat'}`;
      }
      // Gang-Anzeige mit Trittfrequenz: grün = passt, orange = Gang zu schwer, rot = dreht durch
      if (st.gear !== st.gearShown) {
        st.gearShown = st.gear;
        $('.gear-num').textContent = st.gear;
        root.querySelectorAll('.gear-pips i').forEach((p) => p.classList.toggle('on', Number(p.dataset.g) <= st.gear));
      }
      const rpmEl = $('.gear-rpm');
      rpmEl.textContent = st.rpm > 0 ? `${Math.round(st.rpm)} U/min` : '';
      rpmEl.className = `gear-rpm ${st.cad > 0.85 ? 'spin' : st.cad < 0.5 ? 'heavy' : 'ok'}`;
      // Sprint-Balken unten in der Mitte
      const bar = $('.sprint-bar');
      const fill = st.sprint === 'active' ? st.sprintT / sp.dauer : st.sprint === 'charging' ? st.sprintT / sp.aufladen : 1;
      $('.sprint-fill').style.width = `${(fill * 100).toFixed(1)}%`;
      bar.className = `sprint-bar ${st.sprint}`;
      const info = st.sprint === 'active' ? `${Math.ceil(st.sprintT)} s` : st.sprint === 'charging' ? 'lädt …' : `bereit ${btn('X')}`;
      if (info !== st.sprintInfo) {
        st.sprintInfo = info;
        $('.sprint-info').innerHTML = info;
      }
      $('.speedo-fill').style.strokeDasharray = `${clamp(kmh / 70, 0, 1) * 75} 100`;
      // Gegner fahren lassen
      rivals.update(
        dt,
        st.phase !== 'countdown',
        { progress: playerProgress(), lateral: nr.found ? nr.lateral : 99 },
        RACE_LAPS * w.length,
        st.raceTime,
      );

      $('.place').textContent = st.phase === 'countdown' ? '–' : `${currentPlace()}/5`;
      $('.lap').textContent = st.lap ? `${Math.min(st.lap, RACE_LAPS)}/${RACE_LAPS}` : '–';
      $('.time').textContent = st.phase === 'finished' ? formatTime(st.finishTime) : formatTime(st.raceTime);
      minimap.draw(st.x, st.z, st.heading, st.lap && st.phase !== 'finished' ? st.lastS : null, rivals.list);
    },

    exit() {
      rivals.hide();
      app.audio.setCrowd(0, 0);
      app.bike.setStanding(false);
      app.bike.standing = 0;
      root.remove();
      root = null;
      app.audio.setWind(0);
      app.audio.freewheel(0, 0);
      app.fx.uLines.value = 0;
      const nr = app.world.nearest(st.x, st.z);
      app.npc.s = nr.found ? nr.s : 0;
    },
  };
}
