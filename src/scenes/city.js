// Nach dem großen Rennen: in der Stadt triffst du Jonas auf dem Bürgersteig.
// Du gehst selbst (dein Rad schiebst du neben dir her). Vorne vor seinem Hochhaus wartet Jonas,
// kommt dir entgegen, sagt seinen Satz, zwinkert dir zu und schiebt sein Rad ins Haus.
// Oben im Penthouse geht das Licht an. Dann denkst du: „Na dann ab zum nächsten Rennen!“
import * as THREE from 'three';
import { el, btn } from './common.js';
import { clamp, damp } from '../noise.js';
import { Bike } from '../bike.js';
import { buildCity, PENTHOUSE } from '../city.js';
import { loadGang, Gang } from '../gang.js';

// ✏️ Was Jonas sagt und was du dir danach denkst
const JONAS_SAGT = 'Wenn du so weitermachst, müssen wir dich wohl ins Team einkaufen. Mal schauen, was das nächste Rennen bringt!';
const DU_DENKST = 'Na dann ab zum nächsten Rennen!';
const JONAS_LOOK = { jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' };

// Wo alles stattfindet: Die Straße läuft entlang x, der Bürgersteig auf der Nordseite liegt bei z ≈ -6 … -9.
const START = { x: -14, z: -7.0 }; // hier stehst du am Anfang (mit dem Rad)
const TUER = { x: PENTHOUSE.x + 1, z: -9.6 }; // Eingang von Jonas' Hochhaus
const JONAS_START = { x: TUER.x + 2.5, z: -7.0 }; // Jonas wartet vor seinem Haus
const GEHWEG = { min: -8.0, max: -6.6 }; // so weit darf das Rad zur Hauswand bzw. zur Straße
const TEMPO = 1.6; // m/s zügig gehen
const ABSTAND = 2.7; // so nah kommt ihr euch beim Reden

const TIPP_ZEIT = 0.028; // Sekunden pro Buchstabe

export function createCityScene(app) {
  let root = null;
  let city = null;
  let laden = null;
  let jonas = null;
  let char = null;
  let gangDatei = null; // Animationen zum Gehen (gang.js)
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

  function tipp(text) {
    const t = $('.stadt-tipp');
    if (t.dataset.text === text) return;
    t.dataset.text = text;
    if (text) t.innerHTML = text;
    t.classList.toggle('show', !!text);
  }
  const gehText = () =>
    app.control === 'touch'
      ? 'Nach oben wischen = gehen, links/rechts halten = lenken'
      : app.control === 'keys'
        ? '<b>W</b> gehen · <b>A</b> <b>D</b> lenken'
        : `${btn('A')} halten = gehen · ${btn('LT')}${btn('RT')} lenken`;

  // ---------- Figuren (beide gehen und schieben ihr Rad) ----------
  function stell(bike, x, z, heading, speed, dt) {
    bike.root.position.set(x, city.hoehe(x, z), z);
    bike.root.rotation.set(0, heading, 0);
    bike.update(dt, speed, 0, 0);
  }
  // Ich: Position, Richtung, Tempo
  function ichStellen(dt) {
    stell(app.bike, st.x, st.z, st.h, st.v, dt);
  }
  function jonasStellen(dt) {
    stell(jonas, st.jx, st.jz, st.jh, st.jv, dt);
  }
  // Richtung langsam zum Ziel drehen (kürzester Weg)
  const drehe = (h, ziel, k, dt) => h + (((ziel - h + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-k * dt));

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
  // Kamera hinter dir (beim Gehen)
  function folgeKamera() {
    const sx = Math.sin(st.h);
    const sz = Math.cos(st.h);
    cam.zielPos.set(st.x - sx * 4.4, 2.15, st.z - sz * 4.4 + 1.2);
    cam.zielLook.set(st.x + sx * 3, 1.1, st.z + sz * 3 - 0.4);
  }

  const kopf = (bike) => bike.head.getWorldPosition(new THREE.Vector3());
  const person = (bike) => bike.rider.getWorldPosition(new THREE.Vector3());

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
    // echte Geh-Bewegungen für Jonas und dich
    if (gangDatei) {
      jonas.gang ||= new Gang(gangDatei);
      app.bike.gang ||= new Gang(gangDatei);
      jonas.gang.reden = false;
    }
    jonas.root.visible = true;
    jonas.walk = true;
    jonas.schieben = true;
    jonas.ohneBrille = true;
    jonas.zwinker = 0;
    jonas.head.rotation.set(0, 0, 0);
    app.bike.walk = true;
    app.bike.schieben = true;
    app.bike.stand = 0;
    app.bike.head.rotation.set(0.05, 0, 0);
    city.penthouseLicht.intensity = 0;
    Object.assign(st, { x: START.x, z: START.z, h: Math.PI / 2, v: 0, jx: JONAS_START.x, jz: JONAS_START.z, jh: -Math.PI / 2, jv: 0, text: null });
    ichStellen(0);
    jonasStellen(0);
    folgeKamera();
    cam.pos.copy(cam.zielPos);
    cam.look.copy(cam.zielLook);
    kamera(0);
    $('.stadt-laden').classList.remove('show');
    $('.stadt-ort').classList.add('show');
    app.fx.uFade.value = 1;
    phase('laufen');
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
          <div class="story-tipp stadt-tipp"></div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
          <div class="stadt-zwinker">😉</div>
          <div class="stadt-skip">${app.control === 'touch' ? '' : app.control === 'keys' ? '<b>Esc</b> überspringen' : `${btn('B')} überspringen`}</div>
        </div>`);
      $('.stadt-dialog').addEventListener('click', () => app.input.inject('confirm'));
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.stadt = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (city) start();
      else {
        laden ||= Promise.all([buildCity(app.worlds.road), loadGang()]).then(([c, g]) => {
          city = c;
          gangDatei = g;
        });
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
      inp.touchRide = st.phase === 'laufen';
      const ok = inp.pressed('confirm') || inp.pressed('x');
      if ((inp.pressed('back') || inp.pressed('start')) && st.phase !== 'ende') {
        dialogZu();
        tipp('');
        phase('ende');
      }
      tippen(dt);
      app.focus.set(st.x, 0, st.z);

      // Köpfe: zueinander schauen, beim Penthouse nach oben
      const reden = st.phase === 'rede' || st.phase === 'zwinkern';
      const hoch = st.phase === 'penthouse' || st.phase === 'gedanke';
      app.bike.head.rotation.x = damp(app.bike.head.rotation.x, hoch ? -0.35 : 0.05, 2, dt);
      app.bike.head.rotation.y = damp(app.bike.head.rotation.y, reden ? -0.12 : hoch ? 0.5 : 0, 3, dt);

      // ---------- du gehst selbst ----------
      if (st.phase === 'laufen') {
        app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
        if (st.t > 2.5) $('.stadt-ort').classList.remove('show');
        if (st.t > 1.2) tipp(st.x < JONAS_START.x - 14 ? `${gehText()}<br><small>Da vorne vor dem Hochhaus wartet Jonas!</small>` : '');
        st.v = damp(st.v, TEMPO * inp.throttle, 5, dt);
        if (st.v > 0.2 || Math.abs(inp.steer) > 0.1) st.h -= inp.steer * 1.9 * dt;
        st.x += Math.sin(st.h) * st.v * dt;
        st.z += Math.cos(st.h) * st.v * dt;
        // auf dem Bürgersteig bleiben, nicht an Jonas vorbei
        st.z = clamp(st.z, GEHWEG.min, GEHWEG.max);
        st.x = clamp(st.x, -26, st.jx - ABSTAND + 0.05);
        ichStellen(dt);
        // Jonas kommt dir entgegen, sobald du nah genug bist
        const luecke = st.jx - st.x;
        st.jv = damp(st.jv, luecke < 12 && luecke > ABSTAND + 0.1 ? 1.1 : 0, 4, dt);
        st.jx = Math.max(st.x + ABSTAND, st.jx - st.jv * dt);
        // er schaut zu dir, wenn du kommst
        jonas.head.rotation.y = damp(jonas.head.rotation.y, luecke < 12 ? 0.1 : 0.5 * Math.sin(st.t * 0.5), 2, dt);
        jonasStellen(dt);
        folgeKamera();
        kamera(dt, 3);
        if (luecke <= ABSTAND + 0.15) {
          tipp('');
          st.v = 0;
          st.jv = 0;
          phase('treffen');
        }
        return;
      }

      ichStellen(dt);
      jonasStellen(dt);
      const P = person(app.bike);
      const J = person(jonas);
      const mitte = P.clone().add(J).multiplyScalar(0.5);

      switch (st.phase) {
        case 'treffen': {
          // beide drehen sich zueinander, Kamera zur Seite (von der Straße aus)
          st.h = drehe(st.h, Math.PI / 2, 3, dt);
          st.jh = drehe(st.jh, -Math.PI / 2, 3, dt);
          cam.zielPos.set(mitte.x + 0.4, 1.6, mitte.z + 3.4);
          cam.zielLook.set(mitte.x, 1.35, mitte.z);
          kamera(dt, 2.2);
          if (st.t > 0.9) {
            if (jonas.gang) jonas.gang.reden = true;
            sag('Jonas', JONAS_SAGT);
            phase('rede');
          }
          break;
        }
        case 'rede': {
          jonas.head.rotation.y = damp(jonas.head.rotation.y, 0.12 + Math.sin(st.t * 2.3) * 0.06, 3, dt);
          // über deine Schulter auf Jonas
          const k = kopf(app.bike);
          cam.zielPos.set(k.x - 0.9, k.y + 0.12, k.z + 0.75);
          cam.zielLook.copy(kopf(jonas)).add(new THREE.Vector3(0, -0.18, 0));
          kamera(dt, 1.6);
          if (ok && weiterGedrueckt()) {
            dialogZu();
            phase('zwinkern');
          }
          break;
        }
        case 'zwinkern': {
          // Nahaufnahme auf Jonas' Gesicht (von dir aus gesehen)
          const j = kopf(jonas);
          cam.zielPos.set(j.x - 0.95, j.y + 0.02, j.z + 0.35);
          cam.zielLook.copy(j);
          kamera(dt, 3);
          const t = st.t - 0.6;
          jonas.zwinker = t < 0 ? 0 : t < 0.12 ? t / 0.12 : t < 0.65 ? 1 : t < 0.8 ? 1 - (t - 0.65) / 0.15 : 0;
          jonas.head.rotation.z = 0.12 * jonas.zwinker;
          if (t > 0 && !st.ping) {
            st.ping = true;
            app.audio.tone(1320, 0.12, { type: 'sine', vol: 0.06 });
            app.audio.tone(1760, 0.16, { type: 'sine', vol: 0.05, when: 0.09 });
            $('.stadt-zwinker').classList.add('show');
          }
          if (st.t > 2) {
            st.ping = false;
            if (jonas.gang) jonas.gang.reden = false;
            jonas.head.rotation.z = 0;
            $('.stadt-zwinker').classList.remove('show');
            phase('heim');
          }
          break;
        }
        case 'heim': {
          // Jonas schiebt sein Rad zur Haustür und geht hinein
          jonas.head.rotation.y = damp(jonas.head.rotation.y, 0, 3, dt);
          const zx = TUER.x - st.jx;
          const zz = TUER.z - 1.4 - st.jz;
          st.jh = drehe(st.jh, Math.atan2(zx, zz), 2.5, dt);
          st.jv = damp(st.jv, st.t < 0.6 ? 0 : 1.2, 3, dt);
          st.jx += Math.sin(st.jh) * st.jv * dt;
          st.jz += Math.cos(st.jh) * st.jv * dt;
          cam.zielPos.set(TUER.x - 4.5, 2.0, TUER.z + 9.5);
          cam.zielLook.set((st.jx + TUER.x) / 2, 1.4, TUER.z + 1);
          kamera(dt, 1.2);
          if (st.jz < TUER.z - 1.0) {
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
          // Nahaufnahme: du schaust hoch zum leuchtenden Penthouse
          const k = kopf(app.bike);
          cam.zielPos.set(k.x + 1.3, k.y - 0.35, k.z - 0.9);
          cam.zielLook.set(k.x, k.y - 0.05, k.z);
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
      // wieder aufs Rad
      app.bike.walk = false;
      app.bike.schieben = false;
      app.bike.head.rotation.set(0.05, 0, 0);
      app.bike.update(0, 0, 0, 0);
      app.input.touchRide = false;
      root?.remove();
      root = null;
      st.phase = 'aus';
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
