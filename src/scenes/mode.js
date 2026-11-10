// Auswahl vor dem Hauptmenü: Rennrad oder Cycle Cross (CX)
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';

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

  async function choose() {
    if (busy) return;
    // letzte Karte: das Minispiel
    if (index === MODES.length) {
      app.audio.select();
      app.go('minigame');
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
                <div class="mode-name">🎮 Minispiel</div>
                <div class="control-sub">Flaschenjagd</div>
              </div>
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
            ['Y', 'Steuerung ändern'],
            ['B', 'Zurück'],
          ])}
          <div class="mode-building">Der Wald wird gebaut …</div>
        </div>`);
      app.ui.append(root);
      root.querySelectorAll('.mode-card').forEach((c) =>
        c.addEventListener('click', () => {
          index = Number(c.dataset.i);
          highlight(true);
          choose();
        }),
      );
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
      if ((inp.pressed('left') || inp.pressed('up')) && index > 0) {
        index--;
        highlight();
      } else if ((inp.pressed('right') || inp.pressed('down')) && index < MODES.length) {
        index++;
        highlight();
      } else if (inp.pressed('confirm')) choose();
      else if (inp.pressed('y')) {
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
