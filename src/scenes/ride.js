// 5. TESTSTRECKE – selbst fahren! (Platzhalter für das spätere Spiel)
import { CONFIG } from '../config.js';
import { updateCharacter, loadCharacters } from '../storage.js';
import { el, esc, btn, formatTime } from './common.js';
import { WHEEL_R } from '../bike.js';
import { clamp, damp } from '../noise.js';
import { Minimap } from '../minimap.js';

const MASS = 78;
const G = 9.81;
const GEAR = 3.6; // Radumdrehungen pro Kurbelumdrehung
const CHECKPOINTS = [0.25, 0.5, 0.75];

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
    const fov = 58 + Math.min(st.speed, 20) * 0.9;
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
          <div class="cruise-badge">${btn('B')} Dauertreten an</div>
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
            <div>${btn('X')} Bremsen</div>
            <div>${btn('LT')}${btn('RT')} oder <span class="btn btn-stick">L</span> Lenken</div>
            <div><span class="btn btn-stick">R</span> Kamera drehen</div>
            <div><span class="btn btn-stick">R</span>drücken: Ansicht wechseln</div>
            <div><span class="btn btn-opt">☰</span> Pause</div>
          </div>
          <div class="banner"></div>
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
      app.bike.setColors({ jersey: char.jersey, frame: char.frame });

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
      });
      this.placeBike();
      cam.view = 0;
      cam.yawOff = cam.pitchOff = 0;
      updateCamera(0, true);
      app.fx.uFade.value = 1;
      app.audio.setMusicLevel(0.45);
      banner('Los geht’s!', `${btn('A')} drücken zum Treten`);
    },

    placeBike() {
      const b = app.bike.root;
      b.position.set(st.x, st.h, st.z);
      b.rotation.set(-st.pitch, st.heading, st.lean);
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
      if (inp.pressed('pause') || inp.pressed('start')) {
        setPaused(true);
        return;
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
      // Beim Bremsen wird nicht getreten, Dauertreten läuft danach weiter
      const throttle = inp.brake > 0.1 ? 0 : st.cruise ? 1 : inp.throttle;
      const brake = inp.brake;

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
      const drive = Math.min(CONFIG.riderPower / Math.max(v, 2.5), 340) * throttle;
      const drag = 0.5 * 1.2 * 0.36 * v * v;
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
        crankRate = Math.max(st.speed / WHEEL_R / GEAR, 3 * throttle);
        app.audio.freewheel(dt, 0);
      } else {
        app.audio.freewheel(dt, Math.min(55, (st.speed / (2 * Math.PI * WHEEL_R)) * 24));
      }
      this.placeBike();
      app.bike.update(dt, st.speed, crankRate, st.steerVis);

      const kmh = st.speed * 3.6;
      app.audio.setWind(clamp(st.speed / 15, 0, 1));
      // Speedlines nur ganz dezent bei hohem Tempo
      app.fx.uLines.value = damp(app.fx.uLines.value, clamp((kmh - 42) / 30, 0, 0.12), 4, dt);
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
            banner('Runde 1', 'Die Zeit läuft!');
            app.audio.lap();
          } else if (st.cps.size === CHECKPOINTS.length) {
            const lapTime = st.time - st.lapStart;
            const best = char.bestLap == null || lapTime < char.bestLap;
            if (best) {
              const fresh = loadCharacters().find((c) => c.id === char.id) || char;
              char = { ...fresh, bestLap: lapTime };
              updateCharacter(char);
              $('.best').textContent = formatTime(lapTime);
            }
            banner(best ? 'Neue Bestzeit!' : `Runde ${st.lap} geschafft`, formatTime(lapTime));
            app.audio.success();
            app.input.rumble(0.5, 200);
            st.lap++;
            st.lapStart = st.time;
            st.cps.clear();
          }
        }
        st.lastS = s;
      }

      // Anzeige
      $('.speedo-val b').textContent = Math.round(kmh);
      $('.speedo-fill').style.strokeDasharray = `${clamp(kmh / 70, 0, 1) * 75} 100`;
      $('.lap').textContent = st.lap ? st.lap : '–';
      $('.time').textContent = st.lap ? formatTime(st.time - st.lapStart) : '0:00.0';
      minimap.draw(st.x, st.z, st.heading, st.lap ? st.lastS : null);
    },

    exit() {
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
