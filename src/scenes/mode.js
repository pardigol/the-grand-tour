// Auswahl vor dem Hauptmenü: Rennrad oder Cycle Cross (CX)
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';
import { stand } from '../spielstand.js';

export const MODES = [
  { id: 'road', name: 'Rennrad' },
  { id: 'cx', name: 'Cycle Cross' },
  { id: 'tt', name: 'Zeitfahren' },
];

export const modeName = (id) => (MODES.find((m) => m.id === id) || MODES[0]).name;
// Zeitfahren fährt auf der Landstraße, Cycle Cross im Wald
export const worldOf = (mode) => (mode === 'cx' ? 'cx' : mode === 'tt' ? 'tt' : 'road');

export function createModeScene(app) {
  let root;
  let index = 0;
  let first = true;
  let busy = false;

  function highlight(silent = false) {
    root.querySelectorAll('.mode-card').forEach((c, i) => c.classList.toggle('selected', i === index));
    // Das Rad im Hintergrund zeigt gleich die passenden Reifen
    if (MODES[index]) app.bike.setTires(MODES[index].id);
    if (!silent) {
      app.audio.nav();
      app.input.rumble(0.15, 30);
    }
  }

  // Auswahl Rennen 1 / Rennen 2 (wenn freigeschaltet)
  let wahl = null;
  function zeigeWahl() {
    root.querySelectorAll('.rennen-karte').forEach((k, i) => k.classList.toggle('selected', i === wahl));
  }
  async function starteRennen(n) {
    busy = true;
    if (n === 2 && !app.worlds.schnee) {
      const note = root.querySelector('.mode-building');
      note.textContent = 'Das Schneetal wird gebaut …';
      note.classList.add('show');
      await new Promise((r) => setTimeout(r, 60));
      await app.prepareWorld('schnee');
    }
    busy = false;
    app.go('story', { rennen: n });
  }

  async function choose() {
    if (busy) return;
    // letzte Karte: das Game (großes Rennen mit Geschichte)
    if (index === MODES.length) {
      app.audio.select();
      // Rennen 2 schon erreicht? Dann wählen, welches Rennen
      if (stand().rennen >= 2) {
        wahl = wahl == null ? stand().rennen - 1 : wahl;
        root.querySelector('.rennen-wahl').classList.add('show');
        zeigeWahl();
        return;
      }
      app.go('story');
      return;
    }
    app.mode = MODES[index].id;
    app.audio.select();
    app.input.rumble(0.35, 80);
    const kind = worldOf(app.mode);
    if (app.worlds[kind]) {
      app.useWorld(kind);
      app.go('menu');
      return;
    }
    // Wald bzw. Dorf werden beim ersten Mal gebaut: kurz einen Hinweis zeigen, damit es nicht hängt
    busy = true;
    const note = root.querySelector('.mode-building');
    note.textContent = kind === 'tt' ? 'Das Dorf wird gebaut …' : 'Der Wald wird gebaut …';
    note.classList.add('show');
    await new Promise((r) => setTimeout(r, 60));
    await app.prepareWorld(kind);
    busy = false;
    app.go('menu');
  }


  return {
    enter(params = {}) {
      index = params.minigame ? MODES.length : Math.max(0, MODES.findIndex((m) => m.id === app.mode));
      root = el(`
        <div class="screen mode-screen ${params.fromTransition ? 'intro' : ''}">
          <div class="mode-head">
            <div class="menu-brand">${esc(CONFIG.gameName)}</div>
            <div class="menu-heading">Womit fährst du?</div>
          </div>
          <div class="mode-cards">
            ${MODES.map(
              (m, i) => `
              <div class="mode-card" data-i="${i}">
                <div class="mode-name">${esc(m.name)}</div>
              </div>`,
            ).join('')}
              <div class="mode-card mode-card-game" data-i="${MODES.length}">
                <div class="mode-name">🎮 Game</div>
                <div class="control-sub">Das große Rennen</div>
              </div>
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
            ['Y', 'Steuerung ändern'],
            ['X', 'Flaschenjagd'],
            ['B', 'Zurück'],
          ])}
          <div class="mode-building">Der Wald wird gebaut …</div>
          <div class="rennen-wahl">
            <div class="rennen-titel">Welches Rennen?</div>
            <div class="rennen-karten">
              <div class="rennen-karte" data-n="1"><b>Rennen 1</b><small>Das große Rennen · Landstraße</small></div>
              <div class="rennen-karte" data-n="2"><b>Rennen 2</b><small>Schneetal mit Schloss</small></div>
            </div>
          </div>
        </div>`);
      app.ui.append(root);
      root.querySelectorAll('.mode-card').forEach((c) =>
        c.addEventListener('click', () => {
          index = Number(c.dataset.i);
          highlight(true);
          choose();
        }),
      );
      root.querySelectorAll('.rennen-karte').forEach((k) =>
        k.addEventListener('click', (e) => {
          e.stopPropagation();
          starteRennen(Number(k.dataset.n));
        }),
      );
      wahl = null;
      highlight(true);
      first = true;
      app.npc.speed = 4;
      app.npc.pedal = true;
      app.audio.setMusicLevel(1);
    },

    update(dt) {
      const p = rideNpc(app, dt);
      showcaseCamera(app, dt, p, first);
      first = false;
      app.fx.uBlur.value = damp(app.fx.uBlur.value, 0, 5, dt);
      app.fx.uLines.value = damp(app.fx.uLines.value, 0, 6, dt);
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 5, dt);

      const inp = app.input;
      if (busy) return;
      // Rennen-Auswahl offen
      if (wahl != null) {
        if (inp.pressed('left') || inp.pressed('up')) wahl = 0;
        else if (inp.pressed('right') || inp.pressed('down')) wahl = 1;
        else if (inp.pressed('confirm')) starteRennen(wahl + 1);
        else if (inp.pressed('back')) {
          wahl = null;
          root.querySelector('.rennen-wahl').classList.remove('show');
          app.audio.back();
          return;
        } else return;
        app.audio.nav();
        zeigeWahl();
        return;
      }
      if ((inp.pressed('left') || inp.pressed('up')) && index > 0) {
        index--;
        highlight();
      } else if ((inp.pressed('right') || inp.pressed('down')) && index < MODES.length) {
        index++;
        highlight();
      } else if (inp.pressed('confirm')) choose();
      else if (inp.pressed('x')) {
        app.audio.select();
        app.go('minigame');
      } else if (inp.pressed('y')) {
        app.audio.select();
        app.go('control', { next: 'mode' });
      }
      else if (inp.pressed('back')) {
        app.audio.back();
        app.go('title');
      }
    },

    exit() {
      root.remove();
    },
  };
}
