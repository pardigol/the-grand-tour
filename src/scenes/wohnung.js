// Oben bei Jonas: Du kommst in seine Penthouse-Wohnung. Jonas und der Chef von Team Blitz begrüßen dich,
// an den Wänden hängen überall Rennräder (rotes Colnago, grünes Canyon in Team-Lackierung …).
import * as THREE from 'three';
import { el, btn } from './common.js';
import { damp } from '../noise.js';
import { Bike } from '../bike.js';
import { buildWohnung, EINGANG } from '../wohnung.js';
import { loadGang, Gang } from '../gang.js';
import { loadChef, makeChef } from '../chef.js';
import { rennenFreischalten } from '../spielstand.js';
import { loadCharacters } from '../storage.js';

// ✏️ Was gesagt wird
const JONAS_SAGT = 'Da bist du ja! Willkommen in meiner Wohnung. Schau dich ruhig um – das sind alles meine Räder.';
const CHEF_NAME = 'Chef von Team Blitz';
const CHEF_SAGT = 'Schön, dass Sie gekommen sind. Setzen wir uns – wir haben Ihnen ein Angebot zu machen.';
const DU_DENKST = 'Wahnsinn … überall Räder! Das rote Colnago, das grüne Canyon in Team-Lackierung …';
const JONAS_LOOK = { jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' };

const ZIEL = { x: -2.2, z: 0.8 }; // hier bleibst du stehen
const JONAS_PLATZ = { x: -0.8, z: -0.9 };
const CHEF_PLATZ = { x: 0.7, z: -1.4 };
const TEMPO = 1.3;
const TIPP_ZEIT = 0.028;

export function createWohnungScene(app) {
  let root = null;
  let wohnung = null;
  let laden = null;
  let gangDatei = null;
  let chefDatei = null;
  let jonas = null;
  let chef = null;
  let char = null;
  const st = {};
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), zielPos: new THREE.Vector3(), zielLook: new THREE.Vector3() };
  const $ = (s) => root.querySelector(s);
  const phase = (p) => {
    st.phase = p;
    st.t = 0;
  };

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
    if (n !== vorher && n % 3 === 0 && st.text[n - 1] !== ' ') app.audio.tone(st.phase === 'gedanke' ? 520 : 300 + Math.random() * 60, 0.04, { type: 'triangle', vol: 0.035 });
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

  // ---------- Kamera ----------
  function kamera(dt, k = 2.2) {
    for (const a of ['x', 'y', 'z']) {
      cam.pos[a] = damp(cam.pos[a], cam.zielPos[a], k, dt);
      cam.look[a] = damp(cam.look[a], cam.zielLook[a], k * 1.4, dt);
    }
    app.camera.position.copy(cam.pos);
    app.camera.lookAt(cam.look);
  }

  // ---------- Figuren (zu Fuß, ohne Rad) ----------
  const _off = new THREE.Vector3();
  const _up = new THREE.Vector3(0, 1, 0);
  function figur(b, x, z, h, v, dt) {
    _off.copy(b.gehOffset || new THREE.Vector3(0.55, 0, 0.3)).applyAxisAngle(_up, h);
    b.root.position.set(x - _off.x, 0, z - _off.z);
    b.root.rotation.set(0, h, 0);
    b.update(dt, v, 0, 0);
  }
  const drehe = (h, ziel, k, dt) => h + (((ziel - h + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-k * dt));
  const kopf = (o) => o.getWorldPosition(new THREE.Vector3());
  const zuFuss = (b, an) => {
    b.walk = an;
    b.schieben = false;
    b.ohneBrille = an;
    b.setOhneRad(an);
    b.setOhneHelm(an);
  };

  function start() {
    app.setWorld(wohnung);
    const b = app.bike;
    if (gangDatei) b.gang ||= new Gang(gangDatei);
    zuFuss(b, true);
    if (b.gang) {
      b.gang.sitzen = false;
      b.gang.reden = false;
    }
    if (!jonas) {
      jonas = new Bike();
      jonas.applyLook(JONAS_LOOK);
      jonas.setTires('road');
      jonas.augenFarbe = '#5a3b22';
      if (gangDatei) jonas.gang = new Gang(gangDatei);
    }
    zuFuss(jonas, true);
    wohnung.scene.add(jonas.root);
    if (!chef && chefDatei) chef = makeChef(chefDatei);
    if (chef) {
      wohnung.scene.add(chef.obj);
      Object.assign(chef, { x: CHEF_PLATZ.x, z: CHEF_PLATZ.z, h: Math.atan2(ZIEL.x - CHEF_PLATZ.x, ZIEL.z - CHEF_PLATZ.z) });
      chef.spiel('Idle', 0);
    }
    Object.assign(st, { x: EINGANG.x, z: EINGANG.z, h: Math.PI, v: 0, jh: Math.atan2(EINGANG.x - JONAS_PLATZ.x, EINGANG.z - JONAS_PLATZ.z), text: null, weiter: false });
    figur(b, st.x, st.z, st.h, 0, 0);
    figur(jonas, JONAS_PLATZ.x, JONAS_PLATZ.z, st.jh, 0, 0);
    cam.zielPos.set(st.x + 0.6, 1.75, st.z + 2.6);
    cam.zielLook.set(st.x, 1.3, st.z - 3);
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
      rennenFreischalten(4); // Fortschritt: bei Jonas in der Wohnung
      root = el(`
        <div class="screen stadt-screen">
          <div class="stadt-ort">Parker Street 7 · ganz oben</div>
          <div class="stadt-laden show">Oben bei Jonas …</div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
          <div class="stadt-skip">${app.control === 'touch' ? '' : app.control === 'keys' ? '<b>Esc</b> überspringen' : `${btn('B')} überspringen`}</div>
        </div>`);
      $('.stadt-dialog').addEventListener('click', () => app.input.inject('confirm'));
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.wohnung = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (wohnung) start();
      else {
        laden ||= Promise.all([loadGang(), loadChef()]).then(([g, c]) => {
          gangDatei = g;
          chefDatei = c;
          wohnung = buildWohnung(app.worlds.road);
        });
        laden.then(() => root && st.phase === 'laden' && start()).catch((e) => {
          console.warn('Wohnung konnte nicht geladen werden', e);
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
      if ((inp.pressed('back') || inp.pressed('start')) && st.phase !== 'ende') {
        dialogZu();
        phase('ende');
      }
      tippen(dt);
      app.focus.set(st.x, 0, st.z);
      chef?.update(dt);

      // Jonas schaut zu dir
      st.jh = drehe(st.jh, Math.atan2(st.x - JONAS_PLATZ.x, st.z - JONAS_PLATZ.z), 2, dt);
      if (jonas.gang) jonas.gang.reden = st.phase === 'jonas';
      figur(jonas, JONAS_PLATZ.x, JONAS_PLATZ.z, st.jh, 0, dt);
      if (chef) chef.h = drehe(chef.h, Math.atan2(st.x - chef.x, st.z - chef.z), 2, dt);

      switch (st.phase) {
        case 'rein': {
          app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
          if (st.t > 3) $('.stadt-ort').classList.remove('show');
          const zx = ZIEL.x - st.x;
          const zz = ZIEL.z - st.z;
          const d = Math.hypot(zx, zz);
          if (d > 0.1) {
            st.h = drehe(st.h, Math.atan2(zx, zz), 3, dt);
            st.v = damp(st.v, TEMPO * Math.min(1, d), 4, dt);
            st.x += Math.sin(st.h) * st.v * dt;
            st.z += Math.cos(st.h) * st.v * dt;
          } else st.v = damp(st.v, 0, 8, dt);
          figur(b, st.x, st.z, st.h, st.v, dt);
          // Kamera folgt dir in den Raum, Blick auf die Wand mit den Rädern
          cam.zielPos.set(st.x + 1.2, 1.8, st.z + 3.2);
          cam.zielLook.set(st.x - 0.8, 1.4, st.z - 3);
          kamera(dt, 1.6);
          if (d < 0.15 && st.t > 1) {
            if (chef) chef.spiel('Wave', 0.3);
            sag('Jonas', JONAS_SAGT);
            phase('jonas');
          }
          break;
        }
        case 'jonas':
        case 'chef':
        case 'gedanke': {
          st.h = drehe(st.h, Math.atan2((JONAS_PLATZ.x + CHEF_PLATZ.x) / 2 - st.x, (JONAS_PLATZ.z + CHEF_PLATZ.z) / 2 - st.z), 3, dt);
          st.v = 0;
          figur(b, st.x, st.z, st.h, 0, dt);
          const k = kopf(b.head);
          if (st.phase === 'jonas') {
            cam.zielPos.set(k.x - 0.5, k.y + 0.2, k.z + 1.0);
            cam.zielLook.copy(kopf(jonas.head)).add(new THREE.Vector3(0, -0.15, 0));
            kamera(dt, 1.5);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              if (chef) chef.spiel('Idle', 0.4);
              sag(CHEF_NAME, CHEF_SAGT);
              phase('chef');
            }
          } else if (st.phase === 'chef') {
            cam.zielPos.set(k.x - 0.3, k.y + 0.2, k.z + 1.1);
            cam.zielLook.copy(chef ? kopf(chef.kopf) : k).add(new THREE.Vector3(0, -0.15, 0));
            kamera(dt, 1.5);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              sag(char.name || 'Du', DU_DENKST, true);
              phase('gedanke');
            }
          } else {
            // Kamera schwenkt langsam über die Räder an den Wänden
            // erst die linke Wand (rotes Colnago, grünes Canyon), dann die Rückwand, dann rechts
            const t = st.t;
            if (t < 5) {
              cam.zielPos.set(-2.6, 1.55, 0.6);
              cam.zielLook.set(-6, 1.45, -1.6 + t * 0.7);
            } else if (t < 9) {
              cam.zielPos.set(0.5, 1.6, -0.5);
              cam.zielLook.set(2.5, 1.45, 5);
            } else {
              cam.zielPos.set(2.4, 1.55, 0.2);
              cam.zielLook.set(6, 1.45, -0.6 + Math.sin(t * 0.3));
            }
            kamera(dt, 0.9);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              app.audio.success();
              phase('ende');
            }
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
      zuFuss(b, false);
      b.head.rotation.set(0.05, 0, 0);
      b.update(0, 0, 0, 0);
      if (jonas) wohnung?.scene.remove(jonas.root);
      if (chef) wohnung?.scene.remove(chef.obj);
      root?.remove();
      root = null;
      st.phase = 'aus';
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
