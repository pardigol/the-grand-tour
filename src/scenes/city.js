// Nach dem großen Rennen: in der Stadt spricht dich Jonas an.
// Er sagt seinen Satz, zwinkert dir zu, fährt zu seinem Hochhaus, schiebt sein Rad hinein
// und oben im Penthouse geht das Licht an. Dann bist du dran: „Na dann ab zum nächsten Rennen!“
import * as THREE from 'three';
import { el, btn } from './common.js';
import { clamp, damp } from '../noise.js';
import { Bike } from '../bike.js';
import { buildCity, PENTHOUSE } from '../city.js';

// ✏️ Was Jonas sagt und was du dir danach denkst
const JONAS_SAGT = 'Wenn du so weitermachst, müssen wir dich wohl ins Team einkaufen. Mal schauen, was das nächste Rennen bringt!';
const DU_DENKST = 'Na dann ab zum nächsten Rennen!';
const JONAS_LOOK = { jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' };

// Wo alles stattfindet (Straße läuft entlang x, Jonas' Hochhaus steht auf der Nordseite bei z < 0)
const ICH = { x: 3, z: -4.3 };
const JONAS_HALT = { x: 4.6, z: -2.6 };
const TUER = { x: PENTHOUSE.x + 1, z: -9.6 }; // Eingang vom Hochhaus
const BORDSTEIN = { x: TUER.x - 0.6, z: -5.6 };

const TIPP_ZEIT = 0.028; // Sekunden pro Buchstabe

export function createCityScene(app) {
  let root = null;
  let city = null;
  let laden = null;
  let jonas = null;
  let char = null;
  const st = {};
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), zielPos: new THREE.Vector3(), zielLook: new THREE.Vector3() };
  const $ = (s) => root.querySelector(s);

  function phase(p) {
    st.phase = p;
    st.t = 0;
  }

  // ---------- Sprechblase ----------
  function sag(name, text, denkt = false) {
    const d = $('.stadt-dialog');
    d.classList.toggle('denkt', denkt);
    $('.stadt-name').textContent = name;
    st.text = text;
    st.tippT = 0;
    st.fertig = false;
    $('.stadt-text').textContent = '';
    d.classList.add('show');
    $('.stadt-weiter').classList.remove('show');
  }
  function dialogZu() {
    $('.stadt-dialog').classList.remove('show');
    st.text = null;
  }
  function tippen(dt) {
    if (!st.text || st.fertig) return;
    const vorher = Math.floor(st.tippT / TIPP_ZEIT);
    st.tippT += dt;
    const n = Math.min(st.text.length, Math.floor(st.tippT / TIPP_ZEIT));
    if (n !== vorher && n % 3 === 0 && st.text[n - 1] !== ' ') app.audio.tone(st.phase === 'gedanke' ? 520 : 330 + Math.random() * 60, 0.04, { type: 'triangle', vol: 0.035 });
    $('.stadt-text').textContent = st.text.slice(0, n);
    if (n >= st.text.length) {
      st.fertig = true;
      $('.stadt-weiter').classList.add('show');
    }
  }
  // A / Tippen: erst Text ganz zeigen, dann weiter
  function weiterGedrueckt() {
    if (!st.text) return false;
    if (!st.fertig) {
      st.tippT = 99;
      tippen(0);
      return false;
    }
    return true;
  }

  // ---------- Figuren ----------
  function stell(bike, x, z, heading, speed, dt, rate = 0) {
    bike.root.position.set(x, city.hoehe(x, z), z);
    bike.root.rotation.set(0, heading, 0);
    bike.update(dt, speed, rate, 0);
  }

  // Jonas fährt eine Kurve ab (Punkte), Tempo v; liefert true, wenn er am Ende ist
  function fahreWeg(weg, dt, vMax, bremsen = true) {
    const L = weg.getLength();
    const rest = L - st.js;
    st.jv = Math.min(vMax, bremsen ? Math.sqrt(2 * 1.6 * Math.max(0, rest)) + 0.15 : vMax, st.jv + 2.5 * dt);
    st.js = Math.min(L, st.js + st.jv * dt);
    const u = st.js / L;
    const p = weg.getPointAt(u);
    const tg = weg.getTangentAt(u);
    const heading = Math.atan2(tg.x, tg.z);
    stell(jonas, p.x, p.z, heading, st.jv, dt, st.jv > 0.3 ? st.jv / 0.34 / 3.6 : 0);
    // in die Kurve legen
    const kurve = (heading - (st.jh ?? heading) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
    st.jh = heading;
    st.jl = damp(st.jl || 0, clamp((-kurve / Math.max(dt, 1e-3)) * st.jv * 0.06, -0.35, 0.35), 6, dt);
    jonas.root.rotation.z = st.jl;
    return rest < 0.05;
  }

  function kamera(dt, k = 2.2) {
    cam.pos.x = damp(cam.pos.x, cam.zielPos.x, k, dt);
    cam.pos.y = damp(cam.pos.y, cam.zielPos.y, k, dt);
    cam.pos.z = damp(cam.pos.z, cam.zielPos.z, k, dt);
    cam.look.x = damp(cam.look.x, cam.zielLook.x, k * 1.4, dt);
    cam.look.y = damp(cam.look.y, cam.zielLook.y, k * 1.4, dt);
    cam.look.z = damp(cam.look.z, cam.zielLook.z, k * 1.4, dt);
    app.camera.position.copy(cam.pos);
    app.camera.lookAt(cam.look);
  }

  function kopf(bike) {
    return bike.head.getWorldPosition(new THREE.Vector3());
  }

  function start() {
    app.setWorld(city);
    if (!jonas) {
      jonas = new Bike();
      jonas.applyLook(JONAS_LOOK);
      jonas.setTires('road');
      jonas.setPlate(11, 'Jonas');
    }
    city.scene.add(jonas.root);
    st.jonas = jonas;
    jonas.root.visible = true;
    jonas.walk = false;
    jonas.schieben = false;
    jonas.ohneBrille = false;
    jonas.zwinker = 0;
    jonas.head.rotation.y = 0;
    app.bike.head.rotation.y = 0;
    app.bike.crankAngle = Math.PI / 2;
    app.bike.stand = 0;
    city.penthouseLicht.intensity = 0;
    Object.assign(st, { js: 0, jv: 7, jl: 0, jh: null, text: null });
    st.anfahrt = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-55, 0, JONAS_HALT.z),
      new THREE.Vector3(-20, 0, JONAS_HALT.z),
      new THREE.Vector3(JONAS_HALT.x, 0, JONAS_HALT.z),
    ]);
    stell(app.bike, ICH.x, ICH.z, Math.PI / 2, 0, 0);
    stell(jonas, -55, JONAS_HALT.z, Math.PI / 2, 7, 0);
    // erstes Bild: über die Straße auf dich und das Hochhaus
    cam.zielPos.set(ICH.x + 6, 1.8, ICH.z + 5.5);
    cam.zielLook.set(ICH.x - 6, 1.6, ICH.z + 1);
    cam.pos.copy(cam.zielPos);
    cam.look.copy(cam.zielLook);
    kamera(0);
    $('.stadt-laden').classList.remove('show');
    $('.stadt-ort').classList.add('show');
    app.fx.uFade.value = 1;
    phase('intro');
  }

  return {
    enter(params = {}) {
      char = params.character || char || { name: 'Du', number: 1, jersey: '#d23c3c' };
      app.mode = 'road';
      app.bike.applyLook(char);
      app.bike.setPlate(char.number, char.name);
      app.bike.setTires('road');
      root = el(`
        <div class="screen stadt-screen">
          <div class="stadt-ort">Nach dem Rennen · in der Stadt</div>
          <div class="stadt-laden show">Die Stadt wird gebaut …</div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
          <div class="stadt-zwinker">😉</div>
          <div class="stadt-skip">${app.control === 'touch' ? '' : app.control === 'keys' ? '<b>Esc</b> überspringen' : `${btn('B')} überspringen`}</div>
        </div>`);
      root.addEventListener('click', () => app.input.inject('confirm'));
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.stadt = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (city) start();
      else {
        laden ||= buildCity(app.worlds.road).then((c) => (city = c));
        laden.then(() => root && st.phase === 'laden' && start()).catch((e) => {
          console.warn('Stadt konnte nicht geladen werden', e);
          if (root) app.go('mode', { minigame: true });
        });
      }
    },

    update(dt) {
      if (st.phase === 'laden') return;
      dt = Math.min(dt, 0.05);
      const inp = app.input;
      st.t += dt;
      inp.touchRide = false;
      const ok = inp.pressed('confirm') || inp.pressed('x');
      if ((inp.pressed('back') || inp.pressed('start')) && st.phase !== 'ende') {
        dialogZu();
        phase('ende');
      }
      tippen(dt);

      // ich stehe die ganze Zeit (Fuß auf dem Pedal), schaue zu Jonas
      const ichKopf = st.phase === 'rede' || st.phase === 'zwinkern' ? -0.85 : st.phase === 'wegfahren' ? -0.4 : st.phase === 'penthouse' || st.phase === 'gedanke' ? 0.45 : 0;
      const hoch = st.phase === 'penthouse' || st.phase === 'gedanke';
      app.bike.head.rotation.x = damp(app.bike.head.rotation.x, hoch ? -0.3 : 0.05, 2, dt);
      app.bike.head.rotation.y = damp(app.bike.head.rotation.y, ichKopf, 3, dt);
      stell(app.bike, ICH.x, ICH.z, Math.PI / 2, 0, dt);
      app.focus.set(ICH.x + 6, 0, ICH.z);

      switch (st.phase) {
        case 'intro': {
          app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
          fahreWeg(st.anfahrt, dt, 7);
          if (st.t > 2.5) $('.stadt-ort').classList.remove('show');
          // Kamera folgt Jonas langsam
          const p = jonas.root.position;
          cam.zielPos.set(ICH.x + 6, 1.8, ICH.z + 5.5);
          cam.zielLook.set(clamp(p.x, ICH.x - 12, ICH.x), 1.4, (p.z + ICH.z) / 2 + 1);
          kamera(dt, 1.4);
          if (st.js >= st.anfahrt.getLength() - 0.05) phase('halt');
          break;
        }
        case 'halt': {
          stell(jonas, JONAS_HALT.x, JONAS_HALT.z, Math.PI / 2, 0, dt);
          jonas.root.rotation.z = damp(jonas.root.rotation.z, 0, 4, dt);
          jonas.head.rotation.y = damp(jonas.head.rotation.y, 0.8, 3, dt);
          if (st.t > 0.5) jonas.ohneBrille = true;
          // Kamera vor die beiden, Blick auf Jonas
          const j = kopf(jonas);
          cam.zielPos.set(JONAS_HALT.x + 3.2, 1.75, (JONAS_HALT.z + ICH.z) / 2 - 1.2);
          cam.zielLook.set(j.x - 0.3, j.y - 0.05, (j.z + ICH.z) / 2);
          kamera(dt, 2);
          if (st.t > 1.1) {
            sag('Jonas', JONAS_SAGT);
            phase('rede');
          }
          break;
        }
        case 'rede': {
          stell(jonas, JONAS_HALT.x, JONAS_HALT.z, Math.PI / 2, 0, dt);
          jonas.head.rotation.y = damp(jonas.head.rotation.y, 0.8 + Math.sin(st.t * 2.3) * 0.06, 3, dt);
          const j = kopf(jonas);
          cam.zielPos.set(JONAS_HALT.x + 2.4, 1.6, ICH.z - 0.7);
          cam.zielLook.set(j.x - 0.2, j.y - 0.12, j.z - 0.9);
          kamera(dt, 1.5);
          if (ok && weiterGedrueckt()) {
            dialogZu();
            phase('zwinkern');
          }
          break;
        }
        case 'zwinkern': {
          stell(jonas, JONAS_HALT.x, JONAS_HALT.z, Math.PI / 2, 0, dt);
          // Nahaufnahme auf Jonas' Gesicht
          const j = kopf(jonas);
          cam.zielPos.set(j.x + 0.8, j.y + 0.0, j.z - 1.05);
          cam.zielLook.copy(j);
          kamera(dt, 3);
          const t = st.t - 0.6;
          jonas.zwinker = t < 0 ? 0 : t < 0.12 ? t / 0.12 : t < 0.65 ? 1 : t < 0.8 ? 1 - (t - 0.65) / 0.15 : 0;
          jonas.head.rotation.z = -0.12 * jonas.zwinker;
          if (t > 0 && !st.ping) {
            st.ping = true;
            app.audio.tone(1320, 0.12, { type: 'sine', vol: 0.06 });
            app.audio.tone(1760, 0.16, { type: 'sine', vol: 0.05, when: 0.09 });
            $('.stadt-zwinker').classList.add('show');
          }
          if (st.t > 2) {
            st.ping = false;
            jonas.head.rotation.z = 0;
            $('.stadt-zwinker').classList.remove('show');
            const a = jonas.root.position;
            st.js = 0;
            st.jv = 0;
            st.jh = null;
            st.weg = new THREE.CatmullRomCurve3([
              new THREE.Vector3(a.x, 0, a.z),
              new THREE.Vector3(a.x + 6, 0, a.z - 0.2),
              new THREE.Vector3(BORDSTEIN.x - 2.5, 0, BORDSTEIN.z + 1.2),
              new THREE.Vector3(BORDSTEIN.x, 0, BORDSTEIN.z),
            ]);
            phase('wegfahren');
          }
          break;
        }
        case 'wegfahren': {
          jonas.head.rotation.y = damp(jonas.head.rotation.y, 0, 3, dt);
          const da = fahreWeg(st.weg, dt, 5);
          const p = jonas.root.position;
          cam.zielPos.set(ICH.x - 2.5, 1.9, ICH.z + 3.2);
          cam.zielLook.set(p.x, 1.3, p.z);
          kamera(dt, 1.5);
          if (da) {
            jonas.walk = true;
            jonas.schieben = true;
            jonas.root.rotation.z = 0;
            st.gehH = jonas.root.rotation.y;
            phase('gehen');
          }
          break;
        }
        case 'gehen': {
          // vom Bordstein zur Tür (Rad wird geschoben), dann im Haus verschwinden
          st.gehH = damp(st.gehH, Math.PI, 3, dt);
          const b = jonas.root.position;
          const v = st.t < 0.5 ? 0 : 1.25;
          const nx = b.x + Math.sin(st.gehH) * v * dt + (TUER.x - b.x) * 0.6 * dt;
          const nz = b.z + Math.cos(st.gehH) * v * dt;
          stell(jonas, nx, nz, st.gehH, v, dt);
          cam.zielPos.set(TUER.x - 5.5, 2.2, TUER.z + 10);
          cam.zielLook.set(TUER.x, 1.6, TUER.z);
          kamera(dt, 1.2);
          if (nz < TUER.z - 1.2) {
            jonas.root.visible = false;
            phase('penthouse');
          }
          break;
        }
        case 'penthouse': {
          // Blick am Hochhaus hoch – oben geht im Penthouse das Licht an
          cam.zielPos.set(TUER.x - 9, 3, TUER.z + 22);
          cam.zielLook.set(TUER.x, st.t < 0.8 ? 3 : 24, TUER.z);
          kamera(dt, 0.9);
          if (st.t > 3.2) city.penthouseLicht.intensity = damp(city.penthouseLicht.intensity, 60, 4, dt);
          if (st.t > 6) {
            sag(char.name || 'Du', DU_DENKST, true);
            phase('gedanke');
          }
          break;
        }
        case 'gedanke': {
          const k = kopf(app.bike);
          // Nahaufnahme: du schaust hoch zum leuchtenden Penthouse
          cam.zielPos.set(ICH.x + 1.9, 1.2, ICH.z - 1.1);
          cam.zielLook.set(k.x, k.y - 0.15, k.z);
          kamera(dt, 1.6);
          if (ok && weiterGedrueckt()) {
            dialogZu();
            app.audio.success();
            phase('ende');
          }
          break;
        }
        case 'ende': {
          kamera(dt, 1);
          app.fx.uFade.value = damp(app.fx.uFade.value, 1.05, 3, dt);
          if (app.fx.uFade.value > 0.98) {
            app.go('mode', { minigame: true });
            return;
          }
          break;
        }
      }
    },

    exit() {
      if (jonas) {
        city?.scene.remove(jonas.root);
        jonas.walk = false;
        jonas.update(0, 0, 0, 0);
      }
      app.bike.head.rotation.y = 0;
      app.bike.head.rotation.x = 0.05;
      root?.remove();
      root = null;
      st.phase = 'aus';
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
