// Abfrage ganz am Anfang: Womit spielst du? Controller, Tastatur oder iPad (Touch).
// Die Wahl wird im Browser gemerkt und bestimmt, welche Hinweise und Knöpfe angezeigt werden.
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';

export const CONTROLS = [
  { id: 'pad', name: 'Controller', icon: '🎮', sub: 'Xbox oder PlayStation' },
  { id: 'keys', name: 'Tastatur', icon: '⌨️', sub: 'Computer oder Laptop' },
  { id: 'touch', name: 'iPad', icon: '📱', sub: 'mit dem Finger steuern' },
];
const KEY = 'grandtour.steuerung';

export function savedControl() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

// Steuerung anwenden: Body-Klasse für die passenden Hinweise, Touch nur beim iPad
export function applyControl(app, id, merken = true) {
  const c = CONTROLS.some((x) => x.id === id) ? id : 'pad';
  app.control = c;
  if (merken) app.controlChosen = c;
  app.input.touchEnabled = c === 'touch';
  for (const x of CONTROLS) document.body.classList.toggle(`control-${x.id}`, x.id === c);
  if (!merken) return;
  try {
    localStorage.setItem(KEY, c);
  } catch {
    /* privates Fenster: dann eben nur für diesen Besuch */
  }
}

// Vorschlag, wenn noch nichts gewählt wurde
export function guess(app) {
  if (app.input.pad) return 'pad';
  if (matchMedia('(pointer: coarse)').matches) return 'touch';
  return 'keys';
}

export function createControlScene(app) {
  let root;
  let index = 0;
  let first = true;
  let next = 'mode';

  function highlight(silent = false) {
    root.querySelectorAll('.mode-card').forEach((c, i) => c.classList.toggle('selected', i === index));
    if (!silent) app.audio.nav();
  }

  function choose() {
    applyControl(app, CONTROLS[index].id);
    app.audio.select();
    app.go(next, { fromTransition: true });
  }

  return {
    enter(params = {}) {
      next = params.next || 'mode';
      const current = savedControl() || guess(app);
      index = Math.max(0, CONTROLS.findIndex((c) => c.id === current));
      root = el(`
        <div class="screen mode-screen control-screen intro">
          <div class="mode-head">
            <div class="menu-brand">${esc(CONFIG.gameName)}</div>
            <div class="menu-heading">Womit spielst du?</div>
          </div>
          <div class="mode-cards">
            ${CONTROLS.map(
              (c, i) => `
              <div class="mode-card" data-i="${i}">
                <div class="control-icon">${c.icon}</div>
                <div class="mode-name">${esc(c.name)}</div>
                <div class="control-sub">${esc(c.sub)}</div>
              </div>`,
            ).join('')}
          </div>
          <div class="control-note">Das kannst du später bei „Womit fährst du?“ wieder ändern.</div>
          ${hintBar([['A', 'Auswählen']])}
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
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 5, dt);
      app.fx.uLines.value = damp(app.fx.uLines.value, 0, 6, dt);
      const inp = app.input;
      if ((inp.pressed('left') || inp.pressed('up')) && index > 0) {
        index--;
        highlight();
      } else if ((inp.pressed('right') || inp.pressed('down')) && index < CONTROLS.length - 1) {
        index++;
        highlight();
      } else if (inp.pressed('confirm')) choose();
    },

    exit() {
      root.remove();
    },
  };
}
