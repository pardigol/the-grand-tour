// Nach dem Vertrag: Jonas fährt dich mit dem Teamauto nach Hause.
// Ihr kommt unten aus seinem Haus, geht zum Auto am Straßenrand, steigt ein (Jonas fährt),
// fahrt zwei Blöcke die Hauptstraße entlang – dann geht es weiter in deine neue Wohnung.
import * as THREE from 'three';
import { el } from './common.js';
import { damp } from '../noise.js';
import { Bike } from '../bike.js';
import { getCity, PENTHOUSE } from '../city.js';
import { loadGang, Gang } from '../gang.js';
import { buildAuto } from '../auto.js';
import { loadCharacters } from '../storage.js';

const JONAS_LOOK = { jersey: '#8e2b36', frame: '#16161b', helmet: '#16161b', kit: 'stripes', brand: 'cervelo', bar: '#8e2b36' };
const TUER = { x: PENTHOUSE.x + 1, z: -9.6 };
// ✏️ Wo das Auto parkt und wo es nach zwei Blöcken hält (Hauptstraße, Richtung Osten)
const PARKPLATZ = { x: 24, z: -4.6 };
const ZIEL_X = 163; // kurz vor der übernächsten Kreuzung
const SPUR_Z = -3.0; // rechte Fahrspur
const V_MAX = 12; // m/s ≈ 43 km/h
const GEH = 1.3;

export function createAutofahrtScene(app) {
  let root = null;
  let city = null;
  let gangDatei = null;
  let laden = null;
  let jonas = null;
  let auto = null;
  let char = null;
  const st = {};
  const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), zielPos: new THREE.Vector3(), zielLook: new THREE.Vector3() };
  const $ = (s) => root.querySelector(s);
  const phase = (p) => {
    st.phase = p;
    st.t = 0;
  };
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
  function figur(b, f, dt) {
    _off.copy(b.gehOffset || new THREE.Vector3(0.55, 0, 0.3)).applyAxisAngle(_up, f.h);
    b.root.position.set(f.x - _off.x, city.hoehe(f.x, f.z), f.z - _off.z);
    b.root.rotation.set(0, f.h, 0);
    b.update(dt, f.v, 0, 0);
  }
  const drehe = (h, ziel, k, dt) => h + (((ziel - h + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * (1 - Math.exp(-k * dt));
  // Figur über eine Liste von Wegpunkten gehen lassen; true = angekommen
  function geh(f, dt) {
    const z = f.weg[0];
    if (!z) {
      f.v = damp(f.v, 0, 8, dt);
      return true;
    }
    const dx = z[0] - f.x;
    const dz = z[1] - f.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.15) {
      f.weg.shift();
      return false;
    }
    f.h = drehe(f.h, Math.atan2(dx, dz), 4, dt);
    f.v = damp(f.v, GEH * Math.min(1, d * 1.5 + (f.weg.length > 1 ? 1 : 0)), 4, dt);
    f.x += Math.sin(f.h) * f.v * dt;
    f.z += Math.cos(f.h) * f.v * dt;
    return false;
  }
  const zuFuss = (b, an) => {
    b.walk = an;
    b.schieben = false;
    b.ohneBrille = an;
    b.setOhneRad(an);
    b.setOhneHelm(an);
  };

  function start() {
    app.setWorld(city);
    const b = app.bike;
    if (gangDatei) b.gang ||= new Gang(gangDatei);
    zuFuss(b, true);
    if (!jonas) {
      jonas = new Bike();
      jonas.applyLook(JONAS_LOOK);
      jonas.setTires('road');
      jonas.setFrisur('scheitel', '#2b1d14');
      jonas.augenFarbe = '#5a3b22';
      if (gangDatei) jonas.gang = new Gang(gangDatei);
    }
    zuFuss(jonas, true);
    jonas.root.visible = true;
    b.root.visible = true;
    city.scene.add(jonas.root);
    if (!auto) auto = buildAuto();
    city.scene.add(auto.group);
    // Türen des Autos (Auto schaut nach +x): Beifahrer zum Gehweg (-z), Fahrer zur Straße (+z)
    const beifahrer = [PARKPLATZ.x + 0.35, PARKPLATZ.z - 1.35];
    const fahrer = [PARKPLATZ.x + 0.35, PARKPLATZ.z + 1.35];
    st.ich = { x: TUER.x + 0.4, z: TUER.z + 1.2, h: 0, v: 0, weg: [[TUER.x + 1.5, -7.2], [beifahrer[0] - 0.8, -6.6], beifahrer] };
    st.jo = { x: TUER.x - 0.6, z: TUER.z + 1.0, h: 0, v: 0, weg: [[TUER.x + 1, -7.6], [PARKPLATZ.x + 3.4, -6.4], [PARKPLATZ.x + 3.4, PARKPLATZ.z + 1.6], fahrer] };
    st.auto = { x: PARKPLATZ.x, z: PARKPLATZ.z, v: 0 };
    st.weiter = false;
    figur(b, st.ich, 0);
    figur(jonas, st.jo, 0);
    auto.group.position.set(st.auto.x, city.hoehe(st.auto.x, st.auto.z), st.auto.z);
    auto.group.rotation.set(0, Math.PI / 2, 0);
    cam.zielPos.set(TUER.x - 4, 2.2, TUER.z + 13);
    cam.zielLook.set(TUER.x + 4, 1.0, TUER.z + 3);
    cam.pos.copy(cam.zielPos);
    cam.look.copy(cam.zielLook);
    kamera(0);
    $('.stadt-laden').classList.remove('show');
    $('.stadt-ort').classList.add('show');
    app.fx.uFade.value = 1;
    phase('zumAuto');
  }

  return {
    enter(params = {}) {
      const alle = loadCharacters();
      char = params.character || alle.find((c) => (c.mode || 'road') === 'road') || alle[0] || { name: 'Du', number: 1, jersey: '#d23c3c' };
      app.mode = 'road';
      app.bike.applyLook({ ...char, jersey: '#efeee9' });
      app.bike.setTires('road');
      root = el(`
        <div class="screen stadt-screen">
          <div class="stadt-ort">Unten vor Jonas' Haus</div>
          <div class="stadt-laden show">Runter auf die Straße …</div>
        </div>`);
      app.ui.append(root);
      app.audio.setMusicLevel(0.3);
      app.autofahrt = st; // zum Ausprobieren in der Konsole
      app.fx.uFade.value = 1;
      phase('laden');
      if (city) start();
      else {
        laden ||= Promise.all([getCity(app.worlds.road), loadGang()]).then(([c, g]) => {
          city = c;
          gangDatei = g;
        });
        laden.then(() => root && st.phase === 'laden' && start()).catch((e) => {
          console.warn('Autofahrt konnte nicht geladen werden', e);
          if (root) app.go('meineWohnung', { character: char });
        });
      }
    },

    update(dt) {
      if (st.phase === 'laden') return;
      dt = Math.min(dt, 0.05);
      st.t += dt;
      const b = app.bike;
      app.focus.set(st.auto.x, 0, st.auto.z);

      switch (st.phase) {
        case 'zumAuto': {
          // ihr geht beide zum Auto: du zur Beifahrertür, Jonas ums Auto herum zur Fahrertür
          app.fx.uFade.value = damp(app.fx.uFade.value, 0, 2, dt);
          if (st.t > 3) $('.stadt-ort').classList.remove('show');
          const ichDa = geh(st.ich, dt);
          const joDa = geh(st.jo, dt);
          figur(b, st.ich, dt);
          figur(jonas, st.jo, dt);
          auto.update(dt, 0);
          cam.zielPos.set(PARKPLATZ.x - 7, 2.2, PARKPLATZ.z + 8); // von der Straßenseite
          cam.zielLook.set((st.ich.x + PARKPLATZ.x) / 2, 1.0, (st.ich.z + PARKPLATZ.z) / 2);
          kamera(dt, 1.2);
          if (ichDa && joDa && st.t > 2) {
            // einsteigen: Türen klappen, ihr seid im Auto
            app.audio.tone(180, 0.12, { type: 'square', vol: 0.05 });
            app.audio.tone(170, 0.12, { type: 'square', vol: 0.05, when: 0.35 });
            b.root.visible = false;
            jonas.root.visible = false;
            phase('einsteigen');
          }
          break;
        }
        case 'einsteigen': {
          kamera(dt, 1);
          if (st.t > 1.2) {
            // Motor an
            app.audio.tone(70, 0.8, { type: 'sawtooth', vol: 0.05, slideTo: 110 });
            phase('fahren');
          }
          break;
        }
        case 'fahren': {
          const a = st.auto;
          const rest = ZIEL_X - a.x;
          // anfahren, zügig fahren, vor dem Ziel weich abbremsen
          const ziel = Math.min(V_MAX, Math.sqrt(Math.max(0, 2 * 2.2 * rest)));
          a.v = damp(a.v, ziel, a.v < ziel ? 0.6 : 3, dt);
          a.x += a.v * dt;
          // auf die Fahrspur einscheren, am Ende wieder an den Rand
          const zZiel = rest < 25 ? PARKPLATZ.z : SPUR_Z;
          a.z = damp(a.z, zZiel, 0.9, dt);
          auto.group.position.set(a.x, city.hoehe(a.x, a.z), a.z);
          auto.group.rotation.y = Math.PI / 2 + (zZiel - a.z) * 0.05 * Math.min(1, a.v / 4);
          auto.update(dt, a.v);
          // Kamera: erst seitlich mitfahren, dann von hinten
          const seitlich = st.t < 6;
          if (seitlich) {
            cam.zielPos.set(a.x + 2, 1.6, a.z + 7.5); // seitlich von der Straße aus
            cam.zielLook.set(a.x + 1, 1.0, a.z);
          } else {
            cam.zielPos.set(a.x - 8, 3.0, a.z + 1.5);
            cam.zielLook.set(a.x + 6, 1.2, a.z);
          }
          kamera(dt, seitlich ? 2.5 : 1.6);
          if (rest < 0.3 && a.v < 0.2) phase('ankunft');
          break;
        }
        case 'ankunft': {
          kamera(dt, 1);
          auto.update(dt, 0);
          app.fx.uFade.value = damp(app.fx.uFade.value, 1.05, 2, dt);
          if (app.fx.uFade.value > 0.98 && !st.weiter) {
            st.weiter = true;
            const l = $('.stadt-laden');
            l.textContent = 'Zwei Blöcke weiter …';
            l.classList.add('show');
            setTimeout(() => root && app.go('meineWohnung', { character: char, mitJonas: true }), 1800);
          }
          break;
        }
      }
    },

    exit() {
      const b = app.bike;
      zuFuss(b, false);
      b.root.visible = true;
      b.update(0, 0, 0, 0);
      if (jonas) city?.scene.remove(jonas.root);
      if (auto) city?.scene.remove(auto.group);
      root?.remove();
      root = null;
      st.phase = 'aus';
      st.weiter = false;
      app.useWorld('road');
      app.fx.uFade.value = 0;
    },
  };
}
