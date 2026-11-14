// Am Abend nach dem Vertrag: Du betrittst zum ersten Mal deine eigene Penthouse-Wohnung,
// schaust dich um (Bett vor der Pyramiden-Wand, Pflanzen, Blick über die Stadt) und entdeckst dein neues Colnago.
import * as THREE from 'three';
import { el, btn } from './common.js';
import { damp } from '../noise.js';
import { buildMeineWohnung, loadMeineWohnung, MEIN_EINGANG } from '../meineWohnung.js';
import { loadGang, Gang } from '../gang.js';
import { rennenFreischalten } from '../spielstand.js';
import { loadCharacters } from '../storage.js';

// ✏️ Was du denkst
const GEDANKE_REIN = 'Das ist jetzt wirklich MEINE Wohnung? Wahnsinn …';
const GEDANKE_RAD = 'Und da steht es: mein eigenes Colnago mit Dura-Ace. Morgen geht es los mit Team Blitz!';
const ZIEL = { x: -0.6, z: 0.2 }; // hier bleibst du in der Mitte stehen
const AM_FENSTER = { x: -0.3, z: -2.4 }; // hier stehst du am Ende vor deinem Rad
const TEMPO = 1.3;
const TIPP_ZEIT = 0.028;

export function createMeineWohnungScene(app) {
  let root = null;
  let welt = null;
  let laden = null;
  let gangDatei = null;
  let char = null;
  const st = {};
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), zielPos: new THREE.Vector3(), zielLook: new THREE.Vector3() };
  const $ = (s) => root.querySelector(s);
  const phase = (p) => {
    st.phase = p;
    st.t = 0;
  };

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
    if (n !== vorher && n % 3 === 0 && st.text[n - 1] !== ' ') app.audio.tone(520, 0.04, { type: 'triangle', vol: 0.035 });
    $('.stadt-text').textContent = st.text.slice(0, n);
    if (n >= st.text.length) {
      st.fertig = true;
      $('.stadt-weiter').classList.add('show');
    }
  }
  function weiterGedrueckt() {
    if (!st.text) return false;
    if (!st.fertig) {
      st.tippT = 99;
      tippen(0);
      return false;
    }
    return true;
  }
  function kamera(dt, k = 2) {
    for (const a of ['x', 'y', 'z']) {
      cam.pos[a] = damp(cam.pos[a], cam.zielPos[a], k, dt);
      cam.look[a] = damp(cam.look[a], cam.zielLook[a], k * 1.4, dt);
    }
    app.camera.position.copy(cam.pos);
    app.camera.lookAt(cam.look);
  }
  const _off = new THREE.Vector3();
  const _up = new THREE.Vector3(0, 1, 0);
  function figur(b, x, z, h, v, dt) {
    _off.copy(b.gehOffset || new THREE.Vector3(0.55, 0, 0.3)).applyAxisAngle(_up, h);
    b.root.position.set(x - _off.x, 0, z - _off.z);
    b.root.rotation.set(0, h, 0);
    b.update(dt, v, 0, 0);
  }
  const drehe = (h, ziel, k, dt) => h + (((ziel - h + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-k * dt));
  // zu einem Punkt gehen; true = angekommen
  function gehZu(ziel, dt) {
    const zx = ziel.x - st.x;
    const zz = ziel.z - st.z;
    const d = Math.hypot(zx, zz);
    if (d > 0.1) {
      st.h = drehe(st.h, Math.atan2(zx, zz), 3, dt);
      st.v = damp(st.v, TEMPO * Math.min(1, d), 4, dt);
      st.x += Math.sin(st.h) * st.v * dt;
      st.z += Math.cos(st.h) * st.v * dt;
      return false;
    }
    st.v = damp(st.v, 0, 8, dt);
    return true;
  }

  function start() {
    app.setWorld(welt);
    const b = app.bike;
    if (gangDatei) b.gang ||= new Gang(gangDatei);
    b.walk = true;
    b.schieben = false;
    b.ohneBrille = true;
    b.setOhneRad(true);
    b.setOhneHelm(true);
    if (b.gang) b.gang.sitzen = false;
    Object.assign(st, { x: MEIN_EINGANG.x, z: MEIN_EINGANG.z, h: Math.PI, v: 0, text: null, weiter: false });
    figur(b, st.x, st.z, st.h, 0, 0);
    cam.zielPos.set(st.x + 0.4, 1.7, st.z + 2.4);
    cam.zielLook.set(st.x + 1, 1.3, st.z - 3);
    cam.pos.copy(cam.zielPos);
    cam.look.copy(cam.zielLook);
    kamera(0);
    $('.stadt-laden').classList.remove('show');
    $('.stadt-ort').classList.add('show');
    app.fx.uFade.value = 1;
    phase('rein');
  }

  return {
    enter(params = {}) {
      const alle = loadCharacters();
      char = params.character || alle.find((c) => (c.mode || 'road') === 'road') || alle[0] || { name: 'Du', number: 1, jersey: '#d23c3c' };
      app.mode = 'road';
      app.bike.applyLook({ ...char, jersey: '#efeee9' });
      app.bike.setTires('road');
      rennenFreischalten(5); // Fortschritt: deine eigene Wohnung
      root = el(`
        <div class="screen stadt-screen">
          <div class="stadt-ort">Am Abend · deine neue Wohnung</div>
          <div class="stadt-laden show">Deine Wohnung wird aufgeschlossen …</div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
        </div>`);
      $('.stadt-dialog').addEventListener('click', () => app.input.inject('confirm'));
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.meineWohnung = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (welt) start();
      else {
        laden ||= Promise.all([loadGang(), loadMeineWohnung()]).then(([g, M]) => {
          gangDatei = g;
          welt = buildMeineWohnung(app.worlds.road, M);
        });
        laden.then(() => root && st.phase === 'laden' && start()).catch((e) => {
          console.warn('Deine Wohnung konnte nicht geladen werden', e);
          if (root) app.go('mode', { minigame: true });
        });
      }
    },

    update(dt) {
      if (st.phase === 'laden') return;
      dt = Math.min(dt, 0.05);
      const inp = app.input;
      const b = app.bike;
      st.t += dt;
      const ok = inp.pressed('confirm') || inp.pressed('x');
      tippen(dt);
      app.focus.set(st.x, 0, st.z);

      switch (st.phase) {
        case 'rein': {
          app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
          if (st.t > 3) $('.stadt-ort').classList.remove('show');
          const da = gehZu(ZIEL, dt);
          figur(b, st.x, st.z, st.h, st.v, dt);
          cam.zielPos.set(st.x - 0.6, 1.75, st.z + 3);
          cam.zielLook.set(st.x + 1.2, 1.2, st.z - 2.5);
          kamera(dt, 1.5);
          if (da && st.t > 1) {
            sag(char.name || 'Du', GEDANKE_REIN, true);
            phase('umschauen');
          }
          break;
        }
        case 'umschauen': {
          // Kamera schwenkt: erst zum Bett vor der Pyramiden-Wand, dann zur Fensterfront
          figur(b, st.x, st.z, st.h, 0, dt);
          const t = Math.min(st.t, 10);
          const a = -0.9 + t * 0.12;
          cam.zielPos.set(-1.4 + Math.sin(a) * 1.2, 1.65, 1.6 + Math.cos(a) * 0.8);
          cam.zielLook.set(3.2 - t * 0.4, 1.1, 0.3 - t * 0.35);
          kamera(dt, 0.9);
          if (ok && weiterGedrueckt()) {
            dialogZu();
            phase('zumRad');
          }
          break;
        }
        case 'zumRad': {
          const da = gehZu(AM_FENSTER, dt);
          if (da) st.h = drehe(st.h, Math.PI * 0.95, 3, dt);
          figur(b, st.x, st.z, st.h, st.v, dt);
          cam.zielPos.set(st.x - 2.2, 1.5, st.z + 1.6);
          cam.zielLook.set(0.6, 0.8, -3.3);
          kamera(dt, 1.2);
          if (da && st.t > 2) {
            sag(char.name || 'Du', GEDANKE_RAD, true);
            phase('rad');
          }
          break;
        }
        case 'rad': {
          figur(b, st.x, st.z, st.h, 0, dt);
          // Blick über dein Rad hinaus auf die Stadt
          cam.zielPos.set(-1.6, 1.4, -1.2);
          cam.zielLook.set(1.2, 0.9, -4.2);
          kamera(dt, 0.8);
          if (ok && weiterGedrueckt()) {
            dialogZu();
            app.audio.success();
            phase('ende');
          }
          break;
        }
        case 'ende': {
          kamera(dt, 1);
          app.fx.uFade.value = damp(app.fx.uFade.value, 1.05, 2.5, dt);
          if (app.fx.uFade.value > 0.98 && !st.weiter) {
            st.weiter = true;
            const l = $('.stadt-laden');
            l.textContent = 'Fortsetzung folgt …';
            l.classList.add('show');
            setTimeout(() => root && app.go('mode', { minigame: true }), 2500);
          }
          break;
        }
      }
    },

    exit() {
      const b = app.bike;
      b.walk = false;
      b.ohneBrille = false;
      b.setOhneRad(false);
      b.setOhneHelm(false);
      b.head.rotation.set(0.05, 0, 0);
      b.update(0, 0, 0, 0);
      root?.remove();
      root = null;
      st.phase = 'aus';
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
