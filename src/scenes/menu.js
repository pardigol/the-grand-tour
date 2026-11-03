// 3. HAUPTMENÜ – Liste aller Charaktere plus "Neuer Charakter"
import { CONFIG } from '../config.js';
import { loadCharacters, deleteCharacter } from '../storage.js';
import { el, esc, btn, hintBar, rideNpc, showcaseCamera, formatTime } from './common.js';
import { damp } from '../noise.js';

export function createMenuScene(app) {
  let root;
  let list;
  let chars = [];
  let index = 0;
  let confirmDelete = null;
  let first = true;

  function render() {
    chars = loadCharacters();
    index = Math.min(index, chars.length);
    const cards = chars
      .map(
        (c, i) => `
        <div class="card" data-i="${i}">
          <div class="mini-plate"><span>${c.number}</span></div>
          <div class="card-info">
            <div class="card-name">${esc(c.name)}</div>
            <div class="card-sub">Startnummer ${c.number}${c.bestLap ? ` · Bestzeit ${formatTime(c.bestLap)}` : ''}</div>
          </div>
          <div class="card-go">›</div>
        </div>`,
      )
      .join('');
    list.innerHTML = `${cards}
      <div class="card card-new" data-i="${chars.length}">
        <div class="card-info"><div class="card-name">Neuer Charakter</div>
        <div class="card-sub">${chars.length ? 'Lege einen weiteren Fahrer an' : 'Lege deinen ersten Fahrer an'}</div></div>
        <div class="plus">+</div>
      </div>`;
    list.querySelectorAll('.card').forEach((c) =>
      c.addEventListener('click', () => {
        index = Number(c.dataset.i);
        highlight();
        activate();
      }),
    );
    highlight(true);
  }

  function highlight(silent = false) {
    list.querySelectorAll('.card').forEach((c, i) => {
      c.classList.toggle('selected', i === index);
      c.classList.toggle('confirm-delete', i === index && confirmDelete === index);
    });
    const sel = list.querySelector('.card.selected');
    sel?.scrollIntoView({ block: 'nearest', behavior: silent ? 'auto' : 'smooth' });
    const c = chars[index];
    if (c) {
      app.bike.setPlate(c.number, c.name);
      app.bike.setColors({ jersey: c.jersey, frame: c.frame });
    } else {
      app.bike.setPlate('?', 'NEU');
      app.bike.setColors({ jersey: CONFIG.colors.jersey, frame: CONFIG.colors.bikeFrame });
    }
    const hint = root.querySelector('.hint-delete');
    if (hint) hint.style.visibility = c ? 'visible' : 'hidden';
    if (!silent) {
      app.audio.nav();
      app.input.rumble(0.15, 30);
    }
  }

  function activate() {
    app.audio.select();
    app.input.rumble(0.35, 80);
    if (index < chars.length) app.go('ride', { character: chars[index] });
    else app.go('creator');
  }

  return {
    enter(params = {}) {
      root = el(`
        <div class="screen menu-screen ${params.fromTransition ? 'intro' : ''}">
          <div class="menu-panel">
            <div class="menu-brand">${esc(CONFIG.gameName)}</div>
            <div class="menu-heading">Wähle deinen Fahrer</div>
            <div class="menu-list"></div>
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
            ['B', 'Zurück'],
          ])}
        </div>`);
      root.querySelector('.hints').insertAdjacentHTML('beforeend', `<span class="hint hint-delete">${btn('X')}Löschen</span>`);
      app.ui.append(root);
      list = root.querySelector('.menu-list');
      if (params.selectId) {
        const i = loadCharacters().findIndex((c) => c.id === params.selectId);
        if (i >= 0) index = i;
      }
      confirmDelete = null;
      render();
      first = true;
      app.npc.speed = 4;
      app.npc.pedal = true;
      app.audio.setMusicLevel(1);
      app.audio.setWind(0.05);
    },

    update(dt) {
      const p = rideNpc(app, dt);
      showcaseCamera(app, dt, p, first);
      first = false;
      app.fx.uBlur.value = damp(app.fx.uBlur.value, 0, 5, dt);
      app.fx.uLines.value = damp(app.fx.uLines.value, 0, 6, dt);
      app.fx.uFade.value = damp(app.fx.uFade.value, 0, 5, dt);

      const inp = app.input;
      const total = chars.length + 1;
      if (inp.pressed('up') && index > 0) {
        index--;
        confirmDelete = null;
        highlight();
      } else if (inp.pressed('down') && index < total - 1) {
        index++;
        confirmDelete = null;
        highlight();
      } else if (inp.pressed('confirm')) {
        activate();
      } else if (inp.pressed('back')) {
        if (confirmDelete !== null) {
          confirmDelete = null;
          highlight(true);
          app.audio.back();
        } else {
          app.audio.back();
          app.go('title');
        }
      } else if (inp.pressed('x') && index < chars.length) {
        if (confirmDelete === index) {
          deleteCharacter(chars[index].id);
          confirmDelete = null;
          app.audio.back();
          app.input.rumble(0.6, 150);
          render();
        } else {
          confirmDelete = index;
          app.audio.error();
          highlight(true);
        }
      }
    },

    exit() {
      root.remove();
    },
  };
}
