// Einheitliche Eingabe: Xbox-Controller (Gamepad-API) und Tastatur.
// Szenen fragen Aktionen ab: input.pressed('confirm'), input.steer, input.throttle ...

const DIRS = ['up', 'down', 'left', 'right'];
const BUTTON_ACTIONS = {
  0: 'confirm', // A
  1: 'back', // B
  2: 'x', // X
  3: 'y', // Y
  4: 'lb',
  5: 'rb',
  6: 'lt',
  7: 'rt',
  8: 'select', // View
  9: 'start', // Menu
  11: 'view', // rechten Stick drücken (R3)
};
const KEY_ACTIONS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  Enter: 'confirm',
  NumpadEnter: 'confirm',
  Escape: 'back',
  Delete: 'x',
  PageUp: 'rb',
  PageDown: 'lb',
};
import { CONFIG } from './config.js';

const DEADZONE = 0.14;

// Sony hat die Hersteller-Nummer 054c. Je nach Browser steht im Namen auch "DualSense" o. Ä.
// Microsoft (045e) zuerst ausschließen, denn auch Xbox-Pads heißen "Wireless Controller".
function isPlayStation(id = '') {
  if (/xbox|045e/i.test(id)) return false;
  return /054c|dualsense|dualshock|playstation|wireless controller/i.test(id);
}
const STICK_ON = 0.55;

export class Input {
  constructor() {
    this.keys = new Set();
    this.queue = [];
    this.charQueue = [];
    this.frame = new Set();
    this.chars = [];
    this.prevButtons = [];
    this.dirTime = { up: 0, down: 0, left: 0, right: 0 };
    this.dirRepeat = { up: 0, down: 0, left: 0, right: 0 };
    this.steer = 0;
    this.steerHold = 0;
    this.steerDir = 0;
    this.lookX = 0;
    this.lookY = 0;
    this.throttle = 0;
    this.brake = 0;
    this.pad = null;
    this.usingPad = false;
    this.layout = 'xbox';

    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Tab', 'Backspace'].includes(e.key)) {
        e.preventDefault();
      }
      this.usingPad = false;
      this.keys.add(e.code);
      if (!e.repeat) this.queue.push('any');
      const a = KEY_ACTIONS[e.key];
      if (a) this.queue.push(a);
      if (e.code === 'KeyC') this.queue.push('view');
      if (e.code === 'KeyT') this.queue.push('cruise');
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.queue.push('sprint');
      if (e.code === 'KeyQ') this.queue.push('gearDown');
      if (e.code === 'KeyE') this.queue.push('gearUp');
      if (e.key === 'Escape') this.queue.push('pause');
      if (e.key === 'Backspace') this.charQueue.push('\b');
      else if (e.key.length === 1) this.charQueue.push(e.key);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    window.addEventListener('mousedown', () => this.queue.push('any'));
  }

  // Für automatische Tests: input.inject('confirm')
  inject(action) {
    this.queue.push(action);
    if (action !== 'any') this.queue.push('any');
  }

  pressed(action) {
    return this.frame.has(action);
  }

  // Wie lange eine Richtung schon gehalten wird (für schnelleres Hochzählen)
  holdTime(dir) {
    return this.dirTime[dir];
  }

  rumble(strength = 0.3, ms = 60) {
    const act = this.pad && this.pad.vibrationActuator;
    if (!act || !act.playEffect) return;
    try {
      const p = act.playEffect('dual-rumble', {
        duration: ms,
        strongMagnitude: strength,
        weakMagnitude: strength,
      });
      if (p && p.catch) p.catch(() => {});
    } catch {
      /* Controller ohne Vibration */
    }
  }

  update(dt) {
    this.frame.clear();
    for (const a of this.queue) this.frame.add(a);
    this.queue.length = 0;
    this.chars = this.charQueue;
    this.charQueue = [];

    // Controller abfragen
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let pad = null;
    for (const p of pads) {
      if (p && p.connected) {
        pad = p;
        if (p.mapping === 'standard') break;
      }
    }
    this.pad = pad;
    const layout = pad && isPlayStation(pad.id) ? 'ps' : 'xbox';
    if (layout !== this.layout) {
      this.layout = layout;
      document.body.classList.toggle('pad-ps', layout === 'ps');
    }

    const held = { up: false, down: false, left: false, right: false };
    let padSteer = 0;
    let stickSteer = 0;
    let padThrottle = 0;
    let padBrake = 0;
    let lookX = 0;
    let lookY = 0;

    if (pad) {
      const b = pad.buttons;
      for (let i = 0; i < b.length; i++) {
        const now = !!(b[i] && (b[i].pressed || b[i].value > 0.5));
        const was = !!this.prevButtons[i];
        if (now && !was) {
          this.frame.add('any');
          this.usingPad = true;
          const a = BUTTON_ACTIONS[i];
          if (a) this.frame.add(a);
          if (i === 1) this.frame.add('cruise'); // B / ○: Dauertreten an/aus
        }
        this.prevButtons[i] = now;
      }
      const ax = pad.axes[0] || 0;
      const ay = pad.axes[1] || 0;
      if (Math.abs(ax) > Math.abs(ay)) {
        held.left = ax < -STICK_ON;
        held.right = ax > STICK_ON;
      } else {
        held.up = ay < -STICK_ON;
        held.down = ay > STICK_ON;
      }
      const btn = (i) => !!(b[i] && b[i].pressed);
      held.up ||= btn(12);
      held.down ||= btn(13);
      held.left ||= btn(14);
      held.right ||= btn(15);
      if (Math.abs(ax) > 0.3 || Math.abs(ay) > 0.3) this.usingPad = true;

      // Gelenkt wird nur mit den Triggern LT/RT (L2/R2): je fester, desto stärker.
      // Der linke Stick lenkt nur schwach mit (siehe unten).
      const val = (i) => (b[i] ? b[i].value : 0);
      padSteer = val(7) - val(6);
      // Linker Stick lenkt zusätzlich, aber nur schwach (stufenlos)
      stickSteer = Math.abs(ax) > DEADZONE ? (ax - Math.sign(ax) * DEADZONE) / (1 - DEADZONE) : 0;
      // A (✕) tritt, Y (△) bremst – X (□) ist der Sprint
      padThrottle = val(0);
      padBrake = val(3);
      // Rechter Stick: Kamera
      const rx = pad.axes[2] || 0;
      const ry = pad.axes[3] || 0;
      lookX = Math.abs(rx) > DEADZONE ? rx : 0;
      lookY = Math.abs(ry) > DEADZONE ? ry : 0;
    }

    // Stick/Steuerkreuz wie Tasten behandeln, mit Wiederholung beim Halten
    for (const d of DIRS) {
      if (held[d]) {
        if (this.dirTime[d] === 0) this.frame.add(d);
        this.dirTime[d] += dt;
        if (this.dirTime[d] > 0.35) {
          this.dirRepeat[d] += dt;
          const interval = this.dirTime[d] > 1.6 ? 0.035 : 0.09;
          if (this.dirRepeat[d] >= interval) {
            this.dirRepeat[d] = 0;
            this.frame.add(d);
          }
        }
      } else {
        this.dirTime[d] = 0;
        this.dirRepeat[d] = 0;
      }
    }

    // Analoge Werte für das Fahren (Tastatur als Ersatz)
    const k = this.keys;
    let keySteer = 0;
    if (k.has('KeyA') || k.has('ArrowLeft')) keySteer -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) keySteer += 1;
    const keyThrottle = k.has('KeyW') || k.has('ArrowUp') || k.has('Space') ? 1 : 0;
    const keyBrake = k.has('KeyS') || k.has('ArrowDown') ? 1 : 0;

    // Lenkung wächst mit der Haltedauer: kurz tippen = sanft, lange halten = enge Kurve
    const raw = Math.max(-1, Math.min(1, padSteer + keySteer));
    const dir = Math.abs(raw) > 0.05 ? Math.sign(raw) : 0;
    if (dir !== 0 && dir === this.steerDir) this.steerHold += dt;
    else this.steerHold = 0;
    this.steerDir = dir;
    const { start, vollNach, stick = 0.4 } = CONFIG.steering;
    const t = Math.min(1, this.steerHold / vollNach);
    const ramp = start + (1 - start) * t * t * (3 - 2 * t);
    const target = Math.max(-1, Math.min(1, raw * ramp + stickSteer * stick));
    // weich nachführen: Einlenken etwas langsamer als Zurücklenken
    const rate = Math.abs(target) > Math.abs(this.steer) ? 3 : 7;
    this.steer += Math.max(-rate * dt, Math.min(rate * dt, target - this.steer));

    // Kamera auch per Tastatur: J/L drehen, I/K hoch/runter
    if (k.has('KeyJ')) lookX -= 1;
    if (k.has('KeyL')) lookX += 1;
    if (k.has('KeyI')) lookY -= 1;
    if (k.has('KeyK')) lookY += 1;
    this.lookX = Math.max(-1, Math.min(1, lookX));
    this.lookY = Math.max(-1, Math.min(1, lookY));
    this.throttle = Math.max(padThrottle, keyThrottle);
    this.brake = Math.max(padBrake, keyBrake);
  }
}
