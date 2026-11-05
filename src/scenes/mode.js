// Auswahl vor dem Hauptmenü: Rennrad oder Cycle Cross (CX)
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';

export const MODES = [
  { id: 'road', name: 'Rennrad' },
  { id: 'cx', name: 'Cycle Cross' },
];

export function createModeScene(app) {
  let root;
  let index = 0;
  let first = true;
  let busy = false;

  function highlight(silent = false) {
    root.querySelectorAll('.mode-card').forEach((c, i) => c.classList.toggle('selected', i === index));
    // Das Rad im Hintergrund zeigt gleich die passenden Reifen
    app.bike.setTires(MODES[index].id);
    if (!silent) {
      app.audio.nav();
      app.input.rumble(0.15, 30);
    }
  }

  function choose() {
    if (busy) return;
    app.mode = MODES[index].id;
    app.audio.select();
    app.input.rumble(0.35, 80);
    if (app.worlds[app.mode]) {
      app.useWorld(app.mode);
      app.go('menu');
      return;
    }
    // Der Wald wird beim ersten Mal gebaut: kurz einen Hinweis zeigen, damit es nicht hängt
    busy = true;
    root.querySelector('.mode-building').classList.add('show');
    setTimeout(() => {
      app.useWorld(app.mode);
      busy = false;
      app.go('menu');
    }, 60);
  }

  return {
    enter(params = {}) {
      index = Math.max(0, MODES.findIndex((m) => m.id === app.mode));
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
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
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
      } else if ((inp.pressed('right') || inp.pressed('down')) && index < MODES.length - 1) {
        index++;
        highlight();
      } else if (inp.pressed('confirm')) choose();
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
