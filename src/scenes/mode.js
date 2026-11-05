// Auswahl vor dem Hauptmenü: Rennrad oder Cyclocross (CX)
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';

export const MODES = [
  {
    id: 'road',
    name: 'Rennrad',
    sub: 'Asphalt und Tempo',
    info: 'Schmale, glatte Reifen: sehr schnell auf der Straße, auf Wiese und Schotter wird es zäh.',
  },
  {
    id: 'cx',
    name: 'Cyclocross (CX)',
    sub: 'Wiese, Schotter, Matsch',
    info: 'Dicke Stollenreifen: rollt viel besser abseits der Straße, auf Asphalt etwas langsamer.',
  },
];

// Kleines Rad-Symbol: CX mit Stollen an den Reifen
function bikeIcon(cx) {
  const tire = (x) =>
    cx
      ? `<circle cx="${x}" cy="62" r="24" fill="none" stroke="currentColor" stroke-width="7" stroke-dasharray="4 3"/>
         <circle cx="${x}" cy="62" r="20" fill="none" stroke="currentColor" stroke-width="3"/>`
      : `<circle cx="${x}" cy="62" r="24" fill="none" stroke="currentColor" stroke-width="3.5"/>`;
  return `<svg viewBox="0 0 160 100" class="mode-icon">
    ${tire(36)}${tire(124)}
    <path d="M36 62 L66 62 L96 30 L58 30 Z M66 62 L52 22 M96 30 L124 62 M92 18 L98 30 M46 20 L60 20 M88 18 L104 16"
      fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
}

export function createModeScene(app) {
  let root;
  let index = 0;
  let first = true;

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
    app.mode = MODES[index].id;
    app.audio.select();
    app.input.rumble(0.35, 80);
    app.go('menu');
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
                ${bikeIcon(m.id === 'cx')}
                <div class="mode-name">${esc(m.name)}</div>
                <div class="mode-sub">${esc(m.sub)}</div>
                <div class="mode-info">${esc(m.info)}</div>
              </div>`,
            ).join('')}
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
            ['B', 'Zurück'],
          ])}
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
