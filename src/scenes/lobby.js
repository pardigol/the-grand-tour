// ONLINE-LOBBY: Rennen erstellen (Code bekommen) oder mit Code beitreten
import { CONFIG } from '../config.js';
import { el, esc, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';
import { modeName, worldOf } from './mode.js';

export function createLobbyScene(app) {
  let root;
  let char;
  let state; // 'choose' | 'hosting' | 'code' | 'connecting' | 'joined' | 'error'
  let index = 0;
  let digits = ['', '', '', ''];
  let cursor = 0;
  let message = '';
  let first = true;
  let leavingToRide = false;

  const online = () => app.online;

  function render() {
    const body = root.querySelector('.lobby-body');
    const remote = online().remote?.char;
    if (state === 'choose') {
      body.innerHTML = ['Rennen erstellen', 'Rennen beitreten']
        .map(
          (t, i) => `<div class="card lobby-opt ${i === index ? 'selected' : ''}" data-i="${i}">
            <div class="card-info"><div class="card-name">${t}</div>
            <div class="card-sub">${i === 0 ? 'Du bekommst einen Code für deinen Gegner' : 'Gib den Code deines Gegners ein'}</div></div>
            <div class="card-go">›</div></div>`,
        )
        .join('');
      body.querySelectorAll('.lobby-opt').forEach((o) =>
        o.addEventListener('click', () => {
          index = Number(o.dataset.i);
          confirm();
        }),
      );
    } else if (state === 'hosting') {
      const code = online().code;
      body.innerHTML = `
        <div class="lobby-label">Dein Code</div>
        <div class="lobby-code">${esc(code || '…')}</div>
        <div class="lobby-info">${
          remote
            ? `<b>${esc(remote.name)}</b> (Nr. ${esc(remote.number)}) ist da!<br>Drück A zum Starten.`
            : 'Sag deinem Gegner diesen Code.<br>Warte, bis er beitritt …'
        }</div>
        ${remote ? '<div class="card lobby-start selected"><div class="card-info"><div class="card-name">Rennen starten</div></div><div class="card-go">›</div></div>' : '<div class="lobby-wait"></div>'}
        <div class="lobby-mode">Modus: ${esc(modeName(app.mode))}</div>`;
      body.querySelector('.lobby-start')?.addEventListener('click', start);
    } else if (state === 'code') {
      body.innerHTML = `
        <div class="lobby-label">Code eingeben</div>
        <div class="lobby-digits">${digits
          .map((d, i) => `<span class="lobby-digit ${i === cursor ? 'cursor' : ''}">${d === '' ? '·' : d}</span>`)
          .join('')}</div>
        <div class="lobby-info">Zahlen tippen – oder mit ↑ ↓ ändern und ← → wechseln.<br>Dann A drücken.</div>`;
    } else if (state === 'connecting') {
      body.innerHTML = `<div class="lobby-label">Verbinde mit Code ${esc(digits.join(''))} …</div><div class="lobby-wait"></div>`;
    } else if (state === 'joined') {
      body.innerHTML = `
        <div class="lobby-label">Verbunden!</div>
        <div class="lobby-info">${remote ? `Gegner: <b>${esc(remote.name)}</b> (Nr. ${esc(remote.number)})` : ''}<br>Warte, bis dein Gegner das Rennen startet …</div>
        <div class="lobby-wait"></div>
        <div class="lobby-mode">Modus: ${esc(modeName(app.mode))}</div>`;
    } else if (state === 'error') {
      body.innerHTML = `<div class="lobby-label">Hat nicht geklappt</div><div class="lobby-info">${esc(message)}<br>Drück A, um es nochmal zu versuchen.</div>`;
    }
  }

  function setState(s) {
    state = s;
    render();
  }

  function onMessage(msg) {
    if (!root) return;
    if (msg.t === 'code') render();
    else if (msg.t === 'hello') {
      app.audio.success();
      app.input.rumble(0.5, 200);
      // Gast fährt immer im Modus des Erstellers
      if (online().role === 'guest' && msg.mode && msg.mode !== app.mode) {
        app.mode = msg.mode;
        app.useWorld(worldOf(app.mode));
        app.bike.setTires(app.mode);
      }
      if (online().role === 'guest') setState('joined');
      else render();
    } else if (msg.t === 'start') {
      leavingToRide = true;
      app.go('ride', { character: char, online: true });
    } else if (msg.t === 'closed') {
      message = 'Dein Gegner hat das Rennen verlassen.';
      online().close();
      setState('error');
    } else if (msg.t === 'error') {
      message = msg.why;
      online().close();
      setState('error');
      app.audio.error();
    }
  }

  function confirm() {
    app.audio.select();
    if (state === 'choose') {
      if (index === 0) {
        online().host(char, app.mode);
        setState('hosting');
      } else {
        digits = ['', '', '', ''];
        cursor = 0;
        setState('code');
      }
    } else if (state === 'hosting') {
      if (online().remote) start();
    } else if (state === 'code') {
      if (digits.some((d) => d === '')) {
        app.audio.error();
        return;
      }
      online().join(digits.join(''), char, app.mode);
      setState('connecting');
    } else if (state === 'error') {
      setState('choose');
    }
  }

  function start() {
    online().send({ t: 'start' });
    leavingToRide = true;
    app.go('ride', { character: char, online: true });
  }

  function back() {
    app.audio.back();
    if (state === 'code' || state === 'error') {
      online().close();
      setState('choose');
      return;
    }
    online().close();
    if (state === 'choose') app.go('menu', { selectId: char.id });
    else setState('choose');
  }

  return {
    enter(params = {}) {
      char = params.character;
      leavingToRide = false;
      message = '';
      root = el(`
        <div class="screen menu-screen lobby-screen">
          <div class="menu-panel">
            <div class="menu-brand">${esc(CONFIG.gameName)}</div>
            <div class="menu-heading">Online gegen einen Freund</div>
            <div class="lobby-me">Du fährst als <b>${esc(char.name)}</b> · Nr. ${esc(char.number)}</div>
            <div class="lobby-body"></div>
          </div>
          ${hintBar([
            ['A', 'Auswählen'],
            ['B', 'Zurück'],
          ])}
        </div>`);
      app.ui.append(root);
      app.online.listen(onMessage);
      // Schon verbunden (z. B. nach einem Rennen zurück in die Lobby)
      if (app.online.connected) setState(app.online.role === 'host' ? 'hosting' : 'joined');
      else {
        index = 0;
        setState('choose');
      }
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

      const inp = app.input;
      if (state === 'code') {
        // Zahlen über die Tastatur
        for (const ch of inp.chars) {
          if (/^[0-9]$/.test(ch)) {
            digits[cursor] = ch;
            cursor = Math.min(3, cursor + 1);
            app.audio.nav();
          } else if (ch === '\b') {
            if (digits[cursor] === '' && cursor > 0) cursor--;
            digits[cursor] = '';
          }
          render();
        }
        const step = (d) => {
          const v = digits[cursor] === '' ? (d > 0 ? -1 : 10) : Number(digits[cursor]);
          digits[cursor] = String((v + d + 10) % 10);
          app.audio.nav();
          render();
        };
        if (inp.pressed('up')) step(1);
        else if (inp.pressed('down')) step(-1);
        else if (inp.pressed('left') && cursor > 0) {
          cursor--;
          render();
        } else if (inp.pressed('right') && cursor < 3) {
          cursor++;
          render();
        }
      } else if (state === 'choose' && (inp.pressed('up') || inp.pressed('down'))) {
        index = 1 - index;
        app.audio.nav();
        render();
      }
      if (inp.pressed('confirm')) confirm();
      else if (inp.pressed('back')) back();
    },

    exit() {
      root.remove();
      root = null;
      if (!leavingToRide) app.online.listen(null);
    },
  };
}
