// 3. HAUPTMENÜ – Liste aller Charaktere plus "Neuer Charakter"
import { CONFIG } from '../config.js';
import { loadCharacters, deleteCharacter } from '../storage.js';
import { brandById } from '../brands.js';
import { el, esc, btn, hintBar, rideNpc, showcaseCamera, formatTime } from './common.js';
import { damp } from '../noise.js';

export function createMenuScene(app) {
  let root;
  let list;
  let chars = [];
  let index = 0;
  let confirmDelete = null;
  let first = true;
  let actions = null; // offenes Auswahlfenster: Index der Aktion

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
            <div class="card-sub">Nr. ${c.number} · ${esc(brandById(c.brand).name)}${c.bestLap ? ` · Bestzeit ${formatTime(c.bestLap)}` : ''}</div>
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
        if (actions !== null) return;
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
      app.bike.applyLook(c);
    } else {
      app.bike.setPlate('?', 'NEU');
      app.bike.applyLook({});
    }
    const hint = root.querySelector('.hint-delete');
    if (hint) hint.style.visibility = c ? 'visible' : 'hidden';
    if (!silent) {
      app.audio.nav();
      app.input.rumble(0.15, 30);
    }
  }

  const ACTIONS = ['Rennen fahren', 'Fahrer bearbeiten'];

  function activate() {
    app.audio.select();
    app.input.rumble(0.35, 80);
    if (index < chars.length) openActions();
    else app.go('creator');
  }

  // Zwei Knöpfe in der Karte: fahren oder bearbeiten
  function openActions() {
    actions = 0;
    const card = list.querySelector('.card.selected');
    card.insertAdjacentHTML(
      'beforeend',
      `<div class="card-actions">${ACTIONS.map((a, i) => `<div class="card-action" data-a="${i}">${a}</div>`).join('')}</div>`,
    );
    card.querySelectorAll('.card-action').forEach((e) =>
      e.addEventListener('click', (ev) => {
        ev.stopPropagation();
        actions = Number(e.dataset.a);
        runAction();
      }),
    );
    renderActions();
  }

  function closeActions() {
    actions = null;
    list.querySelector('.card-actions')?.remove();
  }

  function renderActions() {
    list.querySelectorAll('.card-action').forEach((e, i) => e.classList.toggle('selected', i === actions));
  }

  function runAction() {
    const c = chars[index];
    app.audio.select();
    if (actions === 0) app.go('ride', { character: c });
    else app.go('creator', { edit: c });
  }

  return {
    enter(params = {}) {
      root = el(`
        <div class="screen menu-screen ${params.fromTransition ? 'intro' : ''}">
          <div class="menu-panel">
            <div class="menu-brand">${esc(CONFIG.gameName)}</div>
            <div class="menu-heading">Wähle deinen Fahrer · ${app.mode === 'cx' ? 'Cycle Cross' : 'Rennrad'}</div>
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
      actions = null;
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
      if (actions !== null) {
        if (inp.pressed('left') || inp.pressed('right') || inp.pressed('up') || inp.pressed('down')) {
          actions = 1 - actions;
          renderActions();
          app.audio.nav();
        } else if (inp.pressed('confirm')) runAction();
        else if (inp.pressed('back')) {
          closeActions();
          app.audio.back();
        }
        return;
      }
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
          app.go('mode');
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
