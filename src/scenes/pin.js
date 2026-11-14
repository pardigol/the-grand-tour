// Nach dem Startbildschirm: PIN eingeben (4 Ziffern). Jede PIN ist ein eigener Spielstand.
// Bedienung: Ziffern-Tasten auf der Tastatur, Antippen, oder mit dem Controller über das Zahlenfeld.
import { el, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';
import { savedControl } from './control.js';
import { oeffnen } from '../spielstand.js';
import { setCharacterPin } from '../storage.js';

const LAENGE = 4;
const TASTEN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', 'OK'];

export function createPinScene(app) {
  let root = null;
  let pin = '';
  let index = 0; // markierte Taste (Controller)
  let first = true;
  let fertig = 0; // > 0: Spielstand geöffnet, kurz anzeigen, dann weiter
  let next = 'mode';
  let nachParams = {};
  let zurueck = false; // von der Game-Karte gekommen: B bei leerer PIN = zurück
  let onKey = null;

  const $ = (s) => root.querySelector(s);

  function zeichnen() {
    root.querySelectorAll('.pin-feld').forEach((f, i) => {
      f.classList.toggle('voll', i < pin.length);
      f.classList.toggle('jetzt', i === pin.length);
    });
    root.querySelectorAll('.pin-taste').forEach((t, i) => t.classList.toggle('selected', i === index && app.control === 'pad'));
    $('.pin-ok').classList.toggle('bereit', pin.length === LAENGE);
  }

  function taste(t) {
    if (fertig) return;
    if (t === '⌫') {
      pin = pin.slice(0, -1);
      app.audio.back();
    } else if (t === 'OK') bestaetigen();
    else if (pin.length < LAENGE) {
      pin += t;
      app.audio.key();
    }
    zeichnen();
  }

  function bestaetigen() {
    if (pin.length < LAENGE) {
      app.audio.error();
      const b = $('.pin-felder');
      b.classList.remove('wackeln');
      void b.offsetWidth;
      b.classList.add('wackeln');
      return;
    }
    const { neu, ersterÜberhaupt } = oeffnen(pin);
    setCharacterPin(pin, ersterÜberhaupt);
    app.spielstandPin = pin;
    app.audio.success();
    $('.pin-info').innerHTML = neu ? `Neuer Spielstand angelegt!<small>Merk dir deine PIN: <b>${pin}</b></small>` : 'Willkommen zurück!<small>Dein Spielstand ist geladen.</small>';
    $('.pin-info').classList.add('show');
    fertig = neu ? 2.6 : 1.4;
  }

  return {
    enter(params = {}) {
      pin = '';
      index = 0;
      fertig = 0;
      first = true;
      next = params.next || (savedControl() ? 'mode' : 'control');
      nachParams = params.nachParams || {};
      zurueck = !!params.zurueck;
      root = el(`
        <div class="screen pin-screen">
          <div class="pin-box">
            <div class="pin-titel">Spielstand</div>
            <div class="pin-sub">Gib deine PIN ein (4 Ziffern).<br>Neue PIN = neuer Spielstand.</div>
            <div class="pin-felder">${'<i class="pin-feld"></i>'.repeat(LAENGE)}</div>
            <div class="pin-tasten">
              ${TASTEN.map((t) => `<button class="pin-taste ${t === 'OK' ? 'pin-ok' : ''}" data-t="${t}">${t}</button>`).join('')}
            </div>
            <div class="pin-info"></div>
          </div>
        </div>`);
      app.ui.append(root);
      root.querySelectorAll('.pin-taste').forEach((b) =>
        b.addEventListener('click', (e) => {
          e.preventDefault();
          taste(b.dataset.t);
        }),
      );
      // Tastatur: Ziffern, Löschen, Enter
      onKey = (e) => {
        if (/^[0-9]$/.test(e.key)) taste(e.key);
        else if (e.key === 'Backspace') taste('⌫');
      };
      window.addEventListener('keydown', onKey);
      zeichnen();
      app.npc.speed = 4;
      app.npc.pedal = true;
    },

    update(dt) {
      const p = rideNpc(app, dt);
      showcaseCamera(app, dt, p, first);
      first = false;
      app.fx.uBlur.value = damp(app.fx.uBlur.value, 0.6, 5, dt);
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 5, dt);
      if (fertig) {
        fertig -= dt;
        if (fertig <= 0) app.go(next, { fromTransition: true, ...nachParams });
        return;
      }
      const inp = app.input;
      // Controller: über das Zahlenfeld (3 Spalten) wandern
      if (inp.pressed('left') && index % 3 > 0) index--;
      else if (inp.pressed('right') && index % 3 < 2) index++;
      else if (inp.pressed('up') && index >= 3) index -= 3;
      else if (inp.pressed('down') && index < TASTEN.length - 3) index += 3;
      else if (inp.pressed('confirm')) {
        // mit dem Controller: markierte Taste; mit der Tastatur: Enter = OK
        if (app.control === 'pad') taste(TASTEN[index]);
        else bestaetigen();
      } else if (inp.pressed('back')) {
        if (zurueck && !pin.length) {
          app.audio.back();
          app.go(next, nachParams);
          return;
        }
        taste('⌫');
      }
      else if (inp.pressed('start')) bestaetigen();
      else return;
      zeichnen();
    },

    exit() {
      window.removeEventListener('keydown', onKey);
      root?.remove();
      root = null;
      app.fx.uBlur.value = 0;
    },
  };
}
