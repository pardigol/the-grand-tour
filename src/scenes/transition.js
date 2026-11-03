// 2. ÜBERGANG – das Rad beschleunigt, Bewegungsunschärfe, ein Kettenblatt dreht sich ins Menü
import { el, rideNpc, chaseCamera } from './common.js';

const DURATION = 2.0;

// Kettenblatt als SVG: 42 Zähne, 5 Speichen
function chainringSvg() {
  const teeth = 42;
  const ro = 100;
  const ri = 92;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.3) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.55) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.85) / teeth) * Math.PI * 2;
    const p = (r, a) => `${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)}`;
    d += `${i === 0 ? 'M' : 'L'}${p(ri, a0)} L${p(ro, a1)} L${p(ro, a2)} L${p(ri, a3)} `;
  }
  d += 'Z';
  let spokes = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 360;
    spokes += `<path d="M-9 -18 L-6 -76 Q0 -80 6 -76 L9 -18 Z" transform="rotate(${a})"/>`;
  }
  let bolts = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + Math.PI / 5;
    bolts += `<circle cx="${(Math.cos(a) * 64).toFixed(1)}" cy="${(Math.sin(a) * 64).toFixed(1)}" r="4"/>`;
  }
  return `
  <svg viewBox="-110 -110 220 220" class="chainring">
    <defs>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff1c4"/><stop offset=".45" stop-color="var(--gold)"/><stop offset="1" stop-color="#8a5d1c"/>
      </linearGradient>
    </defs>
    <g fill="url(#gold)">
      <path d="${d} M0 -80 A80 80 0 1 0 0.01 -80 Z" fill-rule="evenodd"/>
      ${spokes}
      <circle r="22"/>
    </g>
    <g fill="#1a1208">${bolts}<circle r="9"/></g>
  </svg>`;
}

const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

export function createTransitionScene(app) {
  let t = 0;
  let root;
  let ring;
  let veil;
  let startSpeed = 6;

  return {
    enter() {
      t = 0;
      startSpeed = app.npc.speed;
      root = el(`<div class="screen transition-screen"><div class="veil"></div><div class="ring-wrap">${chainringSvg()}</div></div>`);
      app.ui.append(root);
      ring = root.querySelector('.ring-wrap');
      veil = root.querySelector('.veil');
      app.titleRoot?.classList.add('leaving');
      app.audio.whoosh(DURATION);
      app.audio.select();
      app.input.rumble(0.5, 250);
    },

    update(dt) {
      t += dt;
      const k = t / DURATION;
      // Rad beschleunigt stark
      app.npc.speed = startSpeed + ease(k * 1.2) * 22;
      app.npc.pedal = t > 0.45;
      rideNpc(app, dt);
      // Harter Schnitt hinter das Rad, dann jagt die Kamera hinterher
      chaseCamera(app, dt, {
        dist: 3.6 + k * 1.5,
        height: 1.15,
        lag: 3 + k * 4,
        fovBase: 50,
        speed: app.npc.speed * 1.4,
        snap: t <= dt,
      });

      // Freilauf am Anfang, dann Fahrtwind
      if (t < 0.45) app.audio.freewheel(dt, 20 + t * 80);
      app.audio.setWind(ease(k * 1.4));

      app.fx.uBlur.value = ease(k * 1.25);
      app.fx.uLines.value = ease((k - 0.1) * 1.6);

      // Kettenblatt erscheint und dreht sich
      const r = ease((t - 0.85) / 0.5);
      const grow = ease((t - 1.45) / 0.5);
      const spin = t * 900 + t * t * 400;
      ring.style.opacity = String(r * (1 - grow));
      ring.style.transform = `translate(-50%, -50%) scale(${0.35 + r * 0.65 + grow * 2.4}) rotate(${spin}deg)`;
      veil.style.opacity = String(ease((t - 1.25) / 0.6));

      if (t >= DURATION) app.go('menu', { fromTransition: true });
    },

    exit() {
      app.titleRoot?.remove();
      app.titleRoot = null;
      root.classList.add('fade-out');
      const r = root;
      setTimeout(() => r.remove(), 500);
      app.audio.setWind(0);
      app.npc.speed = 4;
      app.npc.pedal = true;
    },
  };
}
