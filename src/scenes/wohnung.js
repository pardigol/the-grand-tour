// Oben bei Jonas: Du kommst in seine Penthouse-Wohnung. Jonas und der Chef von Team Blitz begrüßen dich,
// an den Wänden hängen überall Rennräder (rotes Colnago, grünes Canyon in Team-Lackierung …).
import * as THREE from 'three';
import { el, btn } from './common.js';
import { clamp, damp } from '../noise.js';
import { Bike } from '../bike.js';
import { buildWohnung, EINGANG } from '../wohnung.js';
import { loadGang, Gang } from '../gang.js';
import { loadChef, makeChef } from '../chef.js';
import { rennenFreischalten, rolleSetzen } from '../spielstand.js';
import { loadCharacters } from '../storage.js';

// ✏️ Was gesagt wird
const JONAS_SAGT = 'Da bist du ja! Willkommen in meiner Wohnung. Schau dich ruhig um – das sind alles meine Räder.';
const CHEF_NAME = 'Chef von Team Blitz';
const CHEF_SAGT = 'Schön, dass Sie gekommen sind. Setzen wir uns – wir haben Ihnen ein Angebot zu machen.';
const DU_DENKST = 'Wahnsinn … überall Räder! Das rote Colnago, das grüne Canyon in Team-Lackierung …';
const VERTRAG_SAGT =
  'In dem Vertrag sind enthalten: eine Penthouse-Wohnung, ein Vollsponsoring, die Aufnahme in unser Team – und dass Sie sich aussuchen können, was Sie machen wollen: Kletterer, Sprinter oder Allrounder. Da aber nur die Nummer zwei.';
const JONAS_RAD = 'Und du bekommst dein eigenes Rennrad: ein Colnago mit einer Shimano Dura-Ace!';
const DU_UEBERLEGST = 'Penthouse, Vollsponsoring, ein eigenes Colnago … und ich bin jetzt bei Team Blitz!';
// ✏️ Sitzplätze auf dem Sofa (Becken) und wo der Chef am Tisch steht
const SITZ_ICH = { x: -0.25, z: 1.2 };
const SITZ_JONAS = { x: 1.25, z: 1.2 };
const CHEF_TISCH = { x: 0.45, z: -1.05 };
// ✏️ Rollen, die man im Vertrag wählen kann
const ROLLEN = [
  { id: 'sprinter', name: 'Sprinter', icon: '⚡', text: 'Schnell auf den letzten Metern' },
  { id: 'kletterer', name: 'Kletterer', icon: '⛰️', text: 'Stark am Berg' },
  { id: 'allrounder', name: 'Allrounder', icon: '🚴', text: 'Gut auf jedem Gelände' },
];
const COLNAGO = { x: -5.7, y: 1.45, z: -2.6 };
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
  // Figur zum Sofa gehen lassen, umdrehen und hinsetzen (Becken genau über den Sitzplatz). Gibt true zurück, wenn sie sitzt.
  function hinsetzen(bike, f, sitz, dt) {
    const g = bike.gang;
    if (!g?.sitzen) {
      const zx = sitz.x - f.x;
      const zz = sitz.z - 0.75 - f.z;
      const d = Math.hypot(zx, zz);
      if (d > 0.1) {
        f.h = drehe(f.h, Math.atan2(zx, zz), 4, dt);
        f.v = damp(f.v, TEMPO * Math.min(1, d * 1.5), 4, dt);
        f.x += Math.sin(f.h) * f.v * dt;
        f.z += Math.cos(f.h) * f.v * dt;
      } else {
        f.v = damp(f.v, 0, 8, dt);
        // umdrehen: mit dem Rücken zum Sofa, Blick zum Fenster (-z)
        f.h = drehe(f.h, Math.PI, 4, dt);
        if (Math.abs(Math.sin(f.h)) < 0.08 && Math.cos(f.h) < 0 && g) g.sitzen = true;
      }
      figur(bike, f.x, f.z, f.h, f.v, dt);
      return false;
    }
    f.v = 0;
    figur(bike, f.x, f.z, f.h, 0, dt);
    const becken = bike.pelvis.getWorldPosition(new THREE.Vector3());
    f.x += (sitz.x - becken.x) * Math.min(1, dt * 4);
    f.z += (sitz.z - becken.z) * Math.min(1, dt * 4);
    return true;
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

  // ---------- Vertrag: Rolle wählen und unterschreiben ----------
  function rollenZeigen() {
    root.querySelectorAll('.rolle-knopf').forEach((k, i) => {
      k.classList.toggle('selected', i === st.rolleI);
      k.classList.toggle('gewaehlt', st.rolle === ROLLEN[i].id);
    });
  }
  function rolleWaehlen() {
    const r = ROLLEN[st.rolleI];
    st.rolle = r.id;
    rolleSetzen(r.id);
    app.audio.select();
    rollenZeigen();
    $('.vertrag-gross').classList.add('unterschreiben');
    const cv = $('.unterschrift canvas');
    cv.getContext('2d').clearRect(0, 0, cv.width, cv.height);
    st.tinte = 0;
    st.minX = Infinity;
    st.maxX = -Infinity;
    st.stift = { x: 40, y: 85 };
    $('.vertrag-tipp').innerHTML =
      app.control === 'touch'
        ? 'Unterschreib mit dem Finger im Feld!'
        : app.control === 'keys'
          ? 'Unterschreib mit der Maus im Feld!'
          : 'Kritzle mit dem <b>linken Stick</b> im Zickzack deine Unterschrift!';
    phase('unterschrift');
  }
  // ein Stück Unterschrift zeichnen (blaue Tinte)
  function linie(a, b) {
    const g = $('.unterschrift canvas').getContext('2d');
    g.strokeStyle = '#1b3a8a';
    g.lineWidth = 4;
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.beginPath();
    g.moveTo(a.x, a.y);
    g.lineTo(b.x, b.y);
    g.stroke();
    st.tinte += Math.hypot(b.x - a.x, b.y - a.y);
    st.minX = Math.min(st.minX, a.x, b.x);
    st.maxX = Math.max(st.maxX, a.x, b.x);
    if (Math.hypot(b.x - a.x, b.y - a.y) > 2 && Math.random() < 0.25) app.audio.tone(1800 + Math.random() * 600, 0.02, { type: 'triangle', vol: 0.015 });
  }

  function start() {
    app.setWorld(wohnung);
    const b = app.bike;
    if (gangDatei) b.gang ||= new Gang(gangDatei);
    zuFuss(b, true);
    wohnung.vertrag.blatt.visible = false;
    wohnung.vertrag.stift.visible = false;
    if (jonas?.gang) jonas.gang.sitzen = false;
    if (b.gang) {
      b.gang.sitzen = false;
      b.gang.reden = false;
    }
    if (!jonas) {
      jonas = new Bike();
      jonas.applyLook(JONAS_LOOK);
      jonas.setTires('road');
      jonas.augenFarbe = '#5a3b22';
      jonas.setFrisur('scheitel', '#2b1d14'); // Jonas: dunkler Seitenscheitel
      if (gangDatei) jonas.gang = new Gang(gangDatei);
    }
    zuFuss(jonas, true);
    wohnung.scene.add(jonas.root);
    st.jonas = jonas; // zum Ausprobieren in der Konsole
    if (!chef && chefDatei) chef = makeChef(chefDatei);
    if (chef) {
      wohnung.scene.add(chef.obj);
      Object.assign(chef, { x: CHEF_PLATZ.x, z: CHEF_PLATZ.z, h: Math.atan2(ZIEL.x - CHEF_PLATZ.x, ZIEL.z - CHEF_PLATZ.z) });
      chef.spiel('Idle', 0);
    }
    Object.assign(st, { jx: JONAS_PLATZ.x, jz: JONAS_PLATZ.z, jv: 0, x: EINGANG.x, z: EINGANG.z, h: Math.PI, v: 0, jh: Math.atan2(EINGANG.x - JONAS_PLATZ.x, EINGANG.z - JONAS_PLATZ.z), text: null, weiter: false });
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
          <div class="vertrag-karte">
            <div class="vertrag-titel">Vertrag · Team Blitz</div>
            <ul>
              <li>🏙️ Eine Penthouse-Wohnung</li>
              <li>💶 Vollsponsoring</li>
              <li>🚴 Aufnahme ins Team Blitz</li>
              <li>🎯 Du wählst: Kletterer, Sprinter oder Allrounder<small>als Nummer zwei</small></li>
            </ul>
          </div>
          <div class="vertrag-gross">
            <div class="vertrag-titel">Vertrag · Team Blitz</div>
            <ul>
              <li>🏙️ Eine Penthouse-Wohnung</li>
              <li>💶 Vollsponsoring</li>
              <li>🚴 Aufnahme ins Team Blitz (als Nummer zwei)</li>
            </ul>
            <div class="vertrag-frage">Was willst du sein?</div>
            <div class="rollen">
              ${ROLLEN.map((r, i) => `<button class="rolle-knopf" data-i="${i}"><span>${r.icon}</span><b>${r.name}</b><small>${r.text}</small></button>`).join('')}
            </div>
            <div class="unterschrift">
              <canvas width="520" height="150"></canvas>
              <div class="unterschrift-linie">Unterschrift</div>
              <div class="unterschrift-stempel">Unterschrieben ✓</div>
            </div>
            <div class="vertrag-tipp"></div>
          </div>
          <div class="stadt-dialog">
            <div class="stadt-name"></div>
            <div class="stadt-text"></div>
            <div class="stadt-weiter">${app.control === 'touch' ? 'Tippen' : app.control === 'keys' ? '<b>Enter</b>' : btn('A')} ▶</div>
          </div>
        </div>`);
      $('.stadt-dialog').addEventListener('click', () => app.input.inject('confirm'));
      root.querySelectorAll('.rolle-knopf').forEach((k) =>
        k.addEventListener('click', (e) => {
          e.stopPropagation();
          if (st.phase !== 'wahl') return;
          st.rolleI = Number(k.dataset.i);
          rolleWaehlen();
        }),
      );
      // Unterschreiben mit Finger oder Maus
      const cv = $('.unterschrift canvas');
      const punkt = (e) => {
        const r = cv.getBoundingClientRect();
        return { x: ((e.clientX - r.left) / r.width) * cv.width, y: ((e.clientY - r.top) / r.height) * cv.height };
      };
      cv.addEventListener('pointerdown', (e) => {
        if (st.phase !== 'unterschrift') return;
        e.preventDefault();
        cv.setPointerCapture(e.pointerId);
        st.stift = punkt(e);
        st.zeichnet = true;
      });
      cv.addEventListener('pointermove', (e) => {
        if (!st.zeichnet || st.phase !== 'unterschrift') return;
        const p = punkt(e);
        linie(st.stift, p);
        st.stift = p;
      });
      const hoch = () => (st.zeichnet = false);
      cv.addEventListener('pointerup', hoch);
      cv.addEventListener('pointercancel', hoch);
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
      tippen(dt);
      app.focus.set(st.x, 0, st.z);
      chef?.update(dt);

      const sitzPhase = ['hinsetzen', 'vertragHin', 'vertrag', 'wahl', 'unterschrift', 'unterschrieben', 'rad', 'ueberlegen', 'ende'].includes(st.phase);
      // Jonas: erst schaut er zu dir, beim Hinsetzen geht er zum Sofa
      if (jonas.gang) jonas.gang.reden = st.phase === 'jonas' || st.phase === 'rad';
      if (!sitzPhase) {
        st.jh = drehe(st.jh, Math.atan2(st.x - st.jx, st.z - st.jz), 2, dt);
        figur(jonas, st.jx, st.jz, st.jh, 0, dt);
        if (chef) chef.h = drehe(chef.h, Math.atan2(st.x - chef.x, st.z - chef.z), 2, dt);
      } else {
        const j = { x: st.jx, z: st.jz, h: st.jh, v: st.jv };
        hinsetzen(jonas, j, SITZ_JONAS, dt);
        Object.assign(st, { jx: j.x, jz: j.z, jh: j.h, jv: j.v });
        // der Chef stellt sich auf die andere Seite des Couchtischs
        if (chef) {
          const zx = CHEF_TISCH.x - chef.x;
          const zz = CHEF_TISCH.z - chef.z;
          const d = Math.hypot(zx, zz);
          if (d > 0.08) {
            chef.h = drehe(chef.h, Math.atan2(zx, zz), 3, dt);
            chef.x += Math.sin(chef.h) * Math.min(1.1, d * 1.5) * dt;
            chef.z += Math.cos(chef.h) * Math.min(1.1, d * 1.5) * dt;
            chef.spiel('Walk', 0.3);
          } else {
            chef.h = drehe(chef.h, 0, 3, dt);
            if (chef.jetzt === chef.aktionen.Walk) chef.spiel('Idle', 0.4);
          }
        }
      }

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
              phase('hinsetzen');
            }
          }
          break;
        }
        case 'hinsetzen':
        case 'vertragHin':
        case 'vertrag':
        case 'wahl':
        case 'unterschrift':
        case 'unterschrieben':
        case 'rad':
        case 'ueberlegen': {
          const ich = { x: st.x, z: st.z, h: st.h, v: st.v };
          const sitzt = hinsetzen(b, ich, SITZ_ICH, dt);
          Object.assign(st, { x: ich.x, z: ich.z, h: ich.h, v: ich.v });
          if (st.phase === 'hinsetzen') {
            // von der Fensterseite auf Sofa und Tisch
            cam.zielPos.set(0.5, 1.8, -3.4);
            cam.zielLook.set(0.5, 0.75, 0.9);
            kamera(dt, 1.2);
            if (sitzt && jonas.gang?.sitzen && st.t > 4) {
              if (chef) chef.spiel('Interact', 0.3);
              phase('vertragHin');
            }
          } else if (st.phase === 'vertragHin') {
            cam.zielPos.set(0.5, 1.6, -2.6);
            cam.zielLook.set(0.45, 0.5, -0.2);
            kamera(dt, 1.5);
            if (st.t > 0.7) {
              wohnung.vertrag.blatt.visible = true;
              wohnung.vertrag.stift.visible = true;
            }
            if (st.t > 1.8) {
              if (chef) chef.spiel('Idle', 0.5);
              $('.vertrag-karte').classList.add('show');
              sag(CHEF_NAME, VERTRAG_SAGT);
              phase('vertrag');
            }
          } else if (st.phase === 'vertrag') {
            // über deine Schulter auf den Chef, der Vertrag liegt auf dem Tisch
            const k = kopf(b.head);
            cam.zielPos.set(k.x - 0.45, k.y + 0.35, k.z + 0.9);
            cam.zielLook.copy(chef ? kopf(chef.kopf) : k).add(new THREE.Vector3(0, -0.4, 0));
            kamera(dt, 1.3);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              $('.vertrag-karte').classList.remove('show');
              // Vertrag groß anzeigen: Rolle wählen
              st.rolleI = 0;
              st.rolle = null;
              $('.vertrag-gross').classList.remove('unterschreiben', 'fertig');
              $('.vertrag-gross').classList.add('show');
              $('.vertrag-tipp').innerHTML = app.control === 'touch' ? 'Tippe an, was du sein willst.' : '◀ ▶ wählen · bestätigen mit ' + (app.control === 'keys' ? '<b>Enter</b>' : '✕ / A');
              rollenZeigen();
              phase('wahl');
            }
          } else if (st.phase === 'wahl' || st.phase === 'unterschrift' || st.phase === 'unterschrieben') {
            cam.zielPos.set(0.5, 1.4, -1.0);
            cam.zielLook.set(0.55, 0.45, -0.05);
            kamera(dt, 1.2);
            if (st.phase === 'wahl') {
              const n = ROLLEN.length;
              if (inp.pressed('left') || inp.pressed('up')) st.rolleI = (st.rolleI + n - 1) % n;
              else if (inp.pressed('right') || inp.pressed('down')) st.rolleI = (st.rolleI + 1) % n;
              else if (inp.pressed('confirm')) {
                rolleWaehlen();
                return;
              } else return;
              app.audio.nav();
              rollenZeigen();
            } else if (st.phase === 'unterschrift') {
              // Stick: Stift bewegt sich mit, zeichnet beim Bewegen
              const sx = inp.stickL?.x || 0;
              const sy = inp.stickL?.y || 0;
              if (Math.abs(sx) + Math.abs(sy) > 0.1) {
                const cv = $('.unterschrift canvas');
                const p = { x: clamp(st.stift.x + sx * 520 * dt, 10, cv.width - 10), y: clamp(st.stift.y + sy * 360 * dt, 10, cv.height - 10) };
                linie(st.stift, p);
                st.stift = p;
              }
              // genug gekritzelt (lang genug und breit genug)? Dann ist unterschrieben
              if (st.tinte > 1100 && st.maxX - st.minX > 260) {
                $('.vertrag-gross').classList.add('fertig');
                app.audio.success();
                app.input.rumble?.(0.6, 200);
                phase('unterschrieben');
              }
            } else if (st.t > 2) {
              $('.vertrag-gross').classList.remove('show');
              sag('Jonas', JONAS_RAD);
              phase('rad');
            }
          } else if (st.phase === 'rad') {
            // Blick auf das rote Colnago an der Wand
            cam.zielPos.set(COLNAGO.x + 2.2, 1.6, COLNAGO.z + 1.4);
            cam.zielLook.set(COLNAGO.x, COLNAGO.y - 0.2, COLNAGO.z);
            kamera(dt, 1.2);
            if (ok && weiterGedrueckt()) {
              dialogZu();
              sag(char.name || 'Du', DU_UEBERLEGST, true);
              phase('ueberlegen');
            }
          } else {
            const k = kopf(b.head);
            cam.zielPos.set(k.x + 0.25, k.y + 0.05, k.z - 0.9);
            cam.zielLook.copy(k);
            kamera(dt, 1.3);
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
      if (b.gang) b.gang.sitzen = false;
      if (jonas?.gang) jonas.gang.sitzen = false;
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
