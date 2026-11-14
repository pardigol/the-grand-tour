// Nach Rennen 2: Du joggst durch den Park und machst eine Pause auf einer Bank mit Blick auf den See.
// Da kommt der Chef von Team Blitz (im Anzug) und macht dir ein Angebot.
// Danach: „Am nächsten Tag …“ – du fährst in der Stadt zu Jonas (Parker Street 7).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { el, btn } from './common.js';
import { clamp, damp } from '../noise.js';
import { buildPark, BANK, SEE, RUNDE, rundenPunkt, parkHoehe } from '../park.js';
import { loadGang, Gang } from '../gang.js';
import { rennenFreischalten } from '../spielstand.js';
import { loadCharacters } from '../storage.js';

// ✏️ Was der Chef sagt
const CHEF_NAME = 'Chef von Team Blitz';
const CHEF_SAGT = 'Wir hätten Interesse, Sie in unserem Team zu haben. Ich würde sagen, wir treffen uns morgen bei Jonas, Parker Street 7, und besprechen alles Weitere.';
const DU_DENKST = 'Wow … Team Blitz will mich haben!';
// ✏️ Hier joggst du los: auf der Runde rechts neben der Bank, dann einmal um den See
const START_WINKEL = -Math.PI / 2 + 0.28;
// ✏️ Dein Winter-Laufoutfit im Park
const OUTFIT = { jacke: '#1f4e8c', hose: '#1b1c22', handschuhe: '#1b1c22', muetze: '#c8352c', muetzeRand: '#f2f2f2', bommel: '#ffffff' };
const CHEF_START = { x: 17, z: 2.5 }; // von hier kommt der Chef
const CHEF_STEHT = { x: BANK.x + 1.55, z: BANK.z + 1.25 }; // hier bleibt er vor dir stehen
const JOG = 2.8; // m/s
const TIPP_ZEIT = 0.028;

let chefLaden = null;
function loadChef() {
  chefLaden ||= new GLTFLoader().loadAsync('modelle/chef/chef.gltf').catch((e) => {
    console.warn('Chef konnte nicht geladen werden', e);
    return null;
  });
  return chefLaden;
}

export function createParkScene(app) {
  let root = null;
  let park = null;
  let laden = null;
  let gangDatei = null;
  let chefDatei = null;
  let chef = null; // { obj, mixer, aktionen, jetzt }
  let char = null;
  const st = {};
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), zielPos: new THREE.Vector3(), zielLook: new THREE.Vector3() };
  const $ = (s) => root.querySelector(s);
  const phase = (p) => {
    st.phase = p;
    st.t = 0;
  };

  // ---------- Sprechblase (wie in der Stadt) ----------
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
    if (n !== vorher && n % 3 === 0 && st.text[n - 1] !== ' ') app.audio.tone(st.phase === 'gedanke' ? 520 : 250 + Math.random() * 40, 0.04, { type: 'triangle', vol: 0.035 });
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
  function tipp(text) {
    const t = $('.stadt-tipp');
    if (t.dataset.text === text) return;
    t.dataset.text = text;
    if (text) t.innerHTML = text;
    t.classList.toggle('show', !!text);
  }
  const laufText = () =>
    app.control === 'touch'
      ? 'Nach oben wischen = joggen, links/rechts halten = lenken'
      : app.control === 'keys'
        ? '<b>W</b> joggen · <b>A</b> <b>D</b> lenken'
        : `${btn('A')} halten = joggen · ${btn('LT')}${btn('RT')} lenken`;

  // ---------- Kamera ----------
  function kamera(dt, k = 2.2) {
    for (const a of ['x', 'y', 'z']) {
      cam.pos[a] = damp(cam.pos[a], cam.zielPos[a], k, dt);
      cam.look[a] = damp(cam.look[a], cam.zielLook[a], k * 1.4, dt);
    }
    app.camera.position.copy(cam.pos);
    app.camera.lookAt(cam.look);
  }
  function folgeKamera() {
    const sx = Math.sin(st.h);
    const sz = Math.cos(st.h);
    const hk = parkHoehe(st.x - sx * 4.2, st.z - sz * 4.2);
    const hv = parkHoehe(st.x + sx * 3, st.z + sz * 3);
    cam.zielPos.set(st.x - sx * 4.2, Math.max(hk, parkHoehe(st.x, st.z)) + 2.0, st.z - sz * 4.2);
    cam.zielLook.set(st.x + sx * 3, hv + 1.1, st.z + sz * 3);
  }

  // ---------- Du (Figur ohne Rad) ----------
  // st.x/st.z = wo deine Figur steht; das Rad-Objekt wird so verschoben, dass die Figur genau dort ist
  const _off = new THREE.Vector3();
  function ichStellen(dt) {
    const b = app.bike;
    _off.copy(b.gehOffset || new THREE.Vector3(0.55, 0, 0.3)).applyAxisAngle(new THREE.Vector3(0, 1, 0), st.h);
    b.root.position.set(st.x - _off.x, parkHoehe(st.x, st.z), st.z - _off.z);
    b.root.rotation.set(0, st.h, 0);
    b.update(dt, st.v, 0, 0);
  }
  const drehe = (h, ziel, k, dt) => h + (((ziel - h + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-k * dt));
  const kopf = (o) => o.getWorldPosition(new THREE.Vector3());

  // ---------- Chef ----------
  function chefBauen() {
    if (chef || !chefDatei) return;
    const obj = chefDatei.scene;
    // Das Modell hat eine Pistole dabei – die braucht der Chef nicht
    obj.traverse((o) => {
      if (o.name === 'Pistol') o.visible = false;
    });
    obj.traverse((o) => {
      if (o.isMesh && o.visible) {
        o.castShadow = true;
        o.receiveShadow = true;
        o.frustumCulled = false;
      }
    });
    // auf 1,84 m Größe bringen
    const bb = new THREE.Box3().setFromObject(obj);
    const s = 1.84 / Math.max(0.01, bb.max.y - bb.min.y);
    obj.scale.setScalar(s);
    const mixer = new THREE.AnimationMixer(obj);
    const clip = (n) => chefDatei.animations.find((a) => a.name === n);
    const aktionen = {};
    for (const n of ['Walk', 'Idle', 'Wave', 'Idle_Neutral']) if (clip(n)) aktionen[n] = mixer.clipAction(clip(n));
    if (aktionen.Wave) {
      aktionen.Wave.setLoop(THREE.LoopOnce);
      aktionen.Wave.clampWhenFinished = true;
    }
    let kopfKnochen = null;
    obj.traverse((o) => {
      if (o.name === 'Head') kopfKnochen = o;
    });
    chef = { obj, mixer, aktionen, jetzt: null, kopf: kopfKnochen || obj, x: 0, z: 0, h: 0, v: 0 };
  }
  function chefSpiel(name, fade = 0.35) {
    const a = chef?.aktionen[name] || chef?.aktionen.Idle;
    if (!a || chef.jetzt === a) return;
    a.reset().play();
    if (chef.jetzt) a.crossFadeFrom(chef.jetzt, fade, false);
    chef.jetzt = a;
  }
  function chefStellen(dt) {
    if (!chef) return;
    chef.obj.position.set(chef.x, parkHoehe(chef.x, chef.z), chef.z);
    chef.obj.rotation.y = chef.h;
    chef.mixer.update(dt);
  }

  function start() {
    app.setWorld(park);
    if (gangDatei) app.bike.gang ||= new Gang(gangDatei);
    chefBauen();
    if (chef) {
      park.scene.add(chef.obj);
      chef.obj.visible = false;
    }
    const b = app.bike;
    b.walk = true;
    b.schieben = false;
    b.ohneBrille = true;
    b.setOhneRad(true);
    b.setOhneHelm(true);
    b.setOutfit(OUTFIT);
    b.stand = 0;
    if (b.gang) {
      b.gang.sitzen = false;
      b.gang.reden = false;
    }
    const sp = rundenPunkt(START_WINKEL);
    const sq = rundenPunkt(START_WINKEL + 0.01);
    Object.assign(st, { x: sp.x, z: sp.z, h: Math.atan2(sq.x - sp.x, sq.z - sp.z), v: 0, text: null, weiter: false, bankHoehe: false, runde: 0, wAlt: null });
    ichStellen(0);
    folgeKamera();
    cam.pos.copy(cam.zielPos);
    cam.look.copy(cam.zielLook);
    kamera(0);
    $('.stadt-laden').classList.remove('show');
    $('.stadt-ort').classList.add('show');
    app.fx.uFade.value = 1;
    phase('joggen');
  }

  return {
    enter(params = {}) {
      const alle = loadCharacters();
      char = params.character || alle.find((c) => (c.mode || 'road') === 'road') || alle[0] || { name: 'Du', number: 1, jersey: '#d23c3c' };
      app.mode = 'road';
      app.bike.applyLook({ ...char, jersey: '#efeee9' }); // weißes Trikot wie im Game
      app.bike.setTires('road');
      rennenFreischalten(3); // Fortschritt: nach Rennen 2 geht es im Park weiter
      root = el(`
        <div class="screen stadt-screen">
          <div class="stadt-ort">Nach dem Rennen · im Park</div>
          <div class="stadt-laden show">Der Park wird gebaut …</div>
          <div class="story-tipp stadt-tipp"></div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
        </div>`);
      $('.stadt-dialog').addEventListener('click', () => app.input.inject('confirm'));
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.park = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (park) start();
      else {
        laden ||= Promise.all([loadGang(), loadChef()]).then(([g, c]) => {
          gangDatei = g;
          chefDatei = c;
          park = buildPark(app.worlds.road);
        });
        laden.then(() => root && st.phase === 'laden' && start()).catch((e) => {
          console.warn('Park konnte nicht geladen werden', e);
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
      inp.touchRide = st.phase === 'joggen';
      const ok = inp.pressed('confirm') || inp.pressed('x');
      tippen(dt);
      app.focus.set(st.x, 0, st.z);
      chefStellen(dt);

      // Kopf: beim Sitzen auf den See, dann zum Chef
      const zumChef = chef && ['chefKommt', 'winken', 'rede', 'gedanke'].includes(st.phase);
      let kopfY = 0;
      if (zumChef) kopfY = clamp(Math.atan2(chef.x - st.x, chef.z - st.z) - st.h, -0.9, 0.9);
      b.head.rotation.y = damp(b.head.rotation.y, kopfY, 3, dt);
      b.head.rotation.x = damp(b.head.rotation.x, st.phase === 'pause' ? 0.08 : zumChef ? -0.08 : 0.05, 2, dt);

      switch (st.phase) {
        case 'joggen': {
          app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
          if (st.t > 2.8) $('.stadt-ort').classList.remove('show');
          const bankVorne = { x: BANK.x, z: BANK.z + 1.1 };
          const d = Math.hypot(bankVorne.x - st.x, bankVorne.z - st.z);
          // wie weit bist du schon um den See gelaufen?
          const w = Math.atan2((st.z - SEE.z) / RUNDE.rz, (st.x - SEE.x) / RUNDE.rx);
          if (st.wAlt != null) st.runde += Math.atan2(Math.sin(w - st.wAlt), Math.cos(w - st.wAlt));
          st.wAlt = w;
          const geschafft = st.runde > Math.PI * 2 * 0.86;
          const prozent = clamp(Math.round((st.runde / (Math.PI * 2)) * 100), 0, 100);
          if (st.t > 1.2)
            tipp(
              geschafft
                ? d > 6
                  ? '<small>Runde geschafft! Jetzt ab zur Bank – Zeit für eine Pause.</small>'
                  : ''
                : `${laufText()}<br><small>Lauf einmal um den See · ${prozent} %</small>`,
            );
          st.v = damp(st.v, JOG * inp.throttle, 4, dt);
          // bergauf etwas langsamer, bergab schneller
          const steig = parkHoehe(st.x + Math.sin(st.h), st.z + Math.cos(st.h)) - parkHoehe(st.x, st.z);
          st.v *= 1 - clamp(steig * 0.25, -0.15, 0.3) * dt * 4;
          if (st.v > 0.2 || Math.abs(inp.steer) > 0.1) st.h -= inp.steer * 1.8 * dt;
          // Lenkhilfe: ohne Lenken folgst du dem Weg um den See
          if (Math.abs(inp.steer) < 0.1 && st.v > 0.3) {
            // nach der Runde: zur Bank
            const z = geschafft ? bankVorne : rundenPunkt(w + 0.16);
            st.h = drehe(st.h, Math.atan2(z.x - st.x, z.z - st.z), geschafft ? 2.5 : 1.4, dt);
          }
          st.x += Math.sin(st.h) * st.v * dt;
          st.z += Math.cos(st.h) * st.v * dt;
          // nicht in den See und nicht aus dem Park
          const dx = (st.x - SEE.x) / (SEE.rx + 1);
          const dz = (st.z - SEE.z) / (SEE.rz + 1);
          const r = Math.sqrt(dx * dx + dz * dz);
          if (r < 1) {
            st.x = SEE.x + (dx / r) * (SEE.rx + 1);
            st.z = SEE.z + (dz / r) * (SEE.rz + 1);
          }
          st.x = clamp(st.x, -110, 110);
          st.z = clamp(st.z, -50, 110);
          ichStellen(dt);
          folgeKamera();
          kamera(dt, 3);
          if (geschafft && d < 3) {
            tipp('');
            $('.stadt-ort').classList.remove('show');
            phase('hinsetzen');
          }
          break;
        }
        case 'hinsetzen': {
          // vor die Bank gehen, umdrehen (Blick auf den See) und hinsetzen
          const zx = BANK.x - st.x;
          const zz = BANK.z + 0.75 - st.z;
          const d = Math.hypot(zx, zz);
          if (d > 0.08 && st.t < 3) {
            st.h = drehe(st.h, Math.atan2(zx, zz), 4, dt);
            st.v = damp(st.v, Math.min(0.9, d * 1.5), 5, dt);
            st.x += Math.sin(st.h) * st.v * dt;
            st.z += Math.cos(st.h) * st.v * dt;
          } else {
            st.v = 0;
            st.h = drehe(st.h, 0, 4, dt);
            if (Math.abs(st.h % (Math.PI * 2)) < 0.15 || st.t > 4) {
              b.gang && (b.gang.sitzen = true);
              phase('sitzen');
            }
          }
          ichStellen(dt);
          cam.zielPos.set(BANK.x - 2.6, 1.7, BANK.z + 3.4);
          cam.zielLook.set(BANK.x, 0.9, BANK.z);
          kamera(dt, 1.8);
          break;
        }
        case 'sitzen':
        case 'pause':
        case 'chefKommt':
        case 'winken':
        case 'rede':
        case 'gedanke': {
          // Becken genau über die Sitzfläche schieben
          ichStellen(dt);
          const becken = b.pelvis.getWorldPosition(new THREE.Vector3());
          st.x += (BANK.x - becken.x) * Math.min(1, dt * 4);
          st.z += (BANK.z + 0.02 - becken.z) * Math.min(1, dt * 4);
          if (!st.bankHoehe && st.phase === 'pause' && st.t > 0.5) {
            // Bank so hoch machen, dass du richtig drauf sitzt
            st.bankHoehe = true;
            park.bank.scale.y = clamp((becken.y - 0.06) / 0.46, 0.8, 1.3);
          }
          if (st.phase === 'sitzen') {
            cam.zielPos.set(BANK.x - 2.2, 1.6, BANK.z + 3);
            cam.zielLook.set(BANK.x, 0.8, BANK.z);
            kamera(dt, 1.5);
            if (st.t > 1.6) phase('pause');
          } else if (st.phase === 'pause') {
            // Blick über die Bank auf den See
            cam.zielPos.set(BANK.x + 0.9, 1.75, BANK.z - 3.2);
            cam.zielLook.set(SEE.x - 2, 0.6, SEE.z - 4);
            kamera(dt, 0.8);
            if (st.t > 1) tipp('Kurze Pause … was für ein Blick auf den See.');
            if (st.t > 5.5) {
              tipp('');
              if (chef) {
                chef.obj.visible = true;
                Object.assign(chef, { x: CHEF_START.x, z: CHEF_START.z, h: -Math.PI / 2 });
                chefSpiel('Walk', 0);
              }
              phase('chefKommt');
            }
          } else if (st.phase === 'chefKommt') {
            if (chef) {
              // den Weg entlang, dann zu dir
              const zx = CHEF_STEHT.x - chef.x;
              const zz = CHEF_STEHT.z - chef.z;
              const d = Math.hypot(zx, zz);
              chef.h = drehe(chef.h, Math.atan2(zx, zz), 2.5, dt);
              const v = Math.min(1.25, d * 1.2);
              chef.x += Math.sin(chef.h) * v * dt;
              chef.z += Math.cos(chef.h) * v * dt;
              const m = new THREE.Vector3((chef.x + st.x) / 2, 1, (chef.z + st.z) / 2);
              cam.zielPos.set(m.x - 1, 1.9, m.z + 6.5);
              cam.zielLook.copy(m);
              kamera(dt, 1.2);
              if (d < 0.25) {
                chefSpiel('Wave', 0.3);
                phase('winken');
              }
            } else phase('winken');
          } else if (st.phase === 'winken') {
            if (chef) chef.h = drehe(chef.h, Math.atan2(st.x - chef.x, st.z - chef.z), 3, dt);
            const k = kopf(b.head);
            cam.zielPos.set(k.x - 0.9, k.y + 0.35, k.z - 1.4);
            cam.zielLook.copy(chef ? kopf(chef.kopf) : k).add(new THREE.Vector3(0, -0.15, 0));
            kamera(dt, 1.6);
            if (st.t > 1.8) {
              chefSpiel('Idle', 0.5);
              sag(CHEF_NAME, CHEF_SAGT);
              phase('rede');
            }
          } else if (st.phase === 'rede') {
            if (chef) chef.h = drehe(chef.h, Math.atan2(st.x - chef.x, st.z - chef.z), 3, dt);
            const k = kopf(b.head);
            cam.zielPos.set(k.x - 0.8, k.y + 0.3, k.z - 1.25);
            cam.zielLook.copy(chef ? kopf(chef.kopf) : k).add(new THREE.Vector3(0, -0.12, 0));
            kamera(dt, 1.2);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              sag(char.name || 'Du', DU_DENKST, true);
              phase('gedanke');
            }
          } else if (st.phase === 'gedanke') {
            const k = kopf(b.head);
            cam.zielPos.set(k.x + 0.9, k.y - 0.1, k.z + 1.1);
            cam.zielLook.copy(k);
            kamera(dt, 1.4);
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
            l.textContent = 'Am nächsten Tag …';
            l.classList.add('show');
            setTimeout(() => root && app.go('stadt', { character: char, ziel: 'jonas' }), 2200);
          }
          break;
        }
      }
    },

    exit() {
      const b = app.bike;
      if (b.gang) {
        b.gang.sitzen = false;
        b.gang.reden = false;
      }
      b.setOhneRad(false);
      b.setOhneHelm(false);
      b.setOutfit(null);
      b.walk = false;
      b.ohneBrille = false;
      b.head.rotation.set(0.05, 0, 0);
      b.update(0, 0, 0, 0);
      if (park) park.bank.scale.y = 1;
      if (chef) chef.obj.visible = false;
      app.input.touchRide = false;
      root?.remove();
      root = null;
      st.phase = 'aus';
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
