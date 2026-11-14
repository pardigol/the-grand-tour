// Auswahl vor dem Hauptmenü: Rennrad oder Cycle Cross (CX)
import { CONFIG } from '../config.js';
import { btn, el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';
import { stand, aktuellePin } from '../spielstand.js';

export const MODES = [
  { id: 'road', name: 'Rennrad' },
  { id: 'cx', name: 'Cycle Cross' },
  { id: 'tt', name: 'Zeitfahren' },
];

export const modeName = (id) => (MODES.find((m) => m.id === id) || MODES[0]).name;
// Zeitfahren fährt auf der Landstraße, Cycle Cross im Wald
export const worldOf = (mode) => (mode === 'cx' ? 'cx' : mode === 'tt' ? 'tt' : 'road');

const HINTS = [
  ['A', 'Auswählen'],
  ['Y', 'Steuerung ändern'],
  ['X', 'Flaschenjagd'],
  ['B', 'Zurück'],
];
const HINTS_GAME = [
  ['X', 'Weiterspielen'],
  ['A', 'Spielstand wählen'],
  ['Y', 'Steuerung ändern'],
  ['B', 'Zurück'],
];

// ✏️ Kapitel der Geschichte: Rennen und Zwischenszenen. ab = ab welchem Fortschritt freigeschaltet
const KAPITEL = [
  { name: 'Rennen 1', sub: 'Das große Rennen · Landstraße', ab: 1, art: 'rennen', n: 1 },
  { name: 'In der Stadt', sub: 'Jonas wartet vor seinem Hochhaus', ab: 2, art: 'szene', szene: 'stadt' },
  { name: 'Rennen 2', sub: 'Schneetal mit Schloss', ab: 2, art: 'rennen', n: 2 },
  { name: 'Im Park', sub: 'Joggen am zugefrorenen See', ab: 3, art: 'szene', szene: 'park' },
  { name: 'Zu Jonas', sub: 'Mit dem Rad zur Parker Street 7', ab: 3, art: 'szene', szene: 'stadt', params: { ziel: 'jonas' } },
  { name: 'Bei Jonas', sub: 'Die Wohnung voller Räder', ab: 4, art: 'szene', szene: 'wohnung' },
];

export function createModeScene(app) {
  let root;
  let index = 0;
  let first = true;
  let busy = false;

  function highlight(silent = false) {
    root.querySelectorAll('.mode-card').forEach((c, i) => c.classList.toggle('selected', i === index));
    // Das Rad im Hintergrund zeigt gleich die passenden Reifen
    if (MODES[index]) app.bike.setTires(MODES[index].id);
    // Hinweise unten: auf der Game-Karte heißt A „Spielstand wählen“ und X „Weiterspielen“
    const aufGame = index === MODES.length;
    const hints = root.querySelector('.hints');
    if (hints && hints.dataset.game !== String(aufGame)) {
      const neu = el(hintBar(aufGame ? HINTS_GAME : HINTS));
      neu.dataset.game = String(aufGame);
      hints.replaceWith(neu);
    }
    if (!silent) {
      app.audio.nav();
      app.input.rumble(0.15, 30);
    }
  }

  // Auswahl Rennen 1 / Rennen 2 (wenn freigeschaltet)
  let wahl = null;
  function zeigeWahl() {
    root.querySelectorAll('.rennen-karte').forEach((k, i) => k.classList.toggle('selected', i === wahl));
    root.querySelector('.rennen-karte.selected')?.scrollIntoView({ block: 'nearest' });
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

  // X auf der Game-Karte: da weitermachen, wo man aufgehört hat (das zuletzt erreichte Rennen)
  function weiterspielen() {
    if (busy) return;
    app.audio.select();
    app.input.rumble(0.35, 80);
    const n = stand().rennen || 1;
    if (n >= 4) app.go('wohnung'); // bei Jonas in der Wohnung
    else if (n >= 3) app.go('park'); // nach Rennen 2: Park mit dem Chef von Team Blitz
    else if (n >= 2) starteRennen(2);
    else app.go('story');
  }
  // A auf der Game-Karte: anderen Spielstand wählen (PIN eingeben), danach Kapitel wählen
  function spielstandWaehlen() {
    if (busy) return;
    app.audio.select();
    app.go('pin', { next: 'mode', nachParams: { minigame: true, kapitel: true }, zurueck: true });
  }
  const offen = () => KAPITEL.filter((k) => (stand().rennen || 1) >= k.ab);
  function kapitelZeigen() {
    const liste = offen();
    root.querySelector('.rennen-karten').innerHTML = KAPITEL.map((k, i) => {
      const zu = i >= liste.length;
      return `<div class="rennen-karte ${zu ? 'zu' : ''}" data-i="${i}"><b>${zu ? '🔒 ' : ''}${esc(k.name)}</b><small>${k.art === 'rennen' ? '🚴 ' : '🎬 '}${esc(k.sub)}</small></div>`;
    }).join('');
    root.querySelectorAll('.rennen-karte').forEach((el) =>
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const i = Number(el.dataset.i);
        if (i < offen().length) kapitelStarten(i);
      }),
    );
    wahl = liste.length - 1;
    root.querySelector('.rennen-wahl').classList.add('show');
    zeigeWahl();
  }
  function kapitelStarten(i) {
    const k = KAPITEL[i];
    app.audio.select();
    if (k.art === 'rennen') starteRennen(k.n);
    else app.go(k.szene, k.params || {});
  }

  async function choose() {
    if (busy) return;
    // letzte Karte: das Game (großes Rennen mit Geschichte) → A = Spielstand wählen
    if (index === MODES.length) {
      spielstandWaehlen();
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
                <div class="control-sub">${aktuellePin() ? `Spielstand ${esc(aktuellePin())} · ${(stand().rennen || 1) >= 4 ? 'Bei Jonas' : (stand().rennen || 1) >= 3 ? 'Nach Rennen 2' : 'Rennen ' + (stand().rennen || 1)}` : 'Das große Rennen'}</div>
                <div class="game-knoepfe">
                  <button class="game-knopf game-weiter">${btn('X')}Weiterspielen</button>
                  <button class="game-knopf game-stand">${btn('A')}Spielstand wählen</button>
                </div>
              </div>
          </div>
          ${hintBar(HINTS)}
          <div class="mode-building">Der Wald wird gebaut …</div>
          <div class="rennen-wahl">
            <div class="rennen-titel">Wo willst du weitermachen?</div>
            <div class="rennen-karten"></div>
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
      root.querySelector('.game-weiter').addEventListener('click', (e) => {
        e.stopPropagation();
        weiterspielen();
      });
      root.querySelector('.game-stand').addEventListener('click', (e) => {
        e.stopPropagation();
        spielstandWaehlen();
      });

      wahl = null;
      if (params.kapitel) kapitelZeigen();
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
        const n = offen().length;
        if (inp.pressed('left') || inp.pressed('up')) wahl = (wahl + n - 1) % n;
        else if (inp.pressed('right') || inp.pressed('down')) wahl = (wahl + 1) % n;
        else if (inp.pressed('confirm')) {
          kapitelStarten(wahl);
          return;
        }
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
        if (index === MODES.length) {
          weiterspielen();
          return;
        }
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
