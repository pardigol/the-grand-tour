// MINISPIEL „Flaschenjagd“: von oben auf die Straße schauen, Spur wechseln,
// Trinkflaschen einsammeln und Hütchen, Schlaglöchern und Schafen ausweichen.
// Steuerung: ← → (Tastatur/Controller) oder links/rechts antippen (iPad).
import { el, hintBar, rideNpc, showcaseCamera } from './common.js';
import { damp } from '../noise.js';

const REKORD = 'grandtour.minispiel.rekord';
const SPUREN = 3;
const LEBEN = 3;

function rekordLesen() {
  try {
    return Number(localStorage.getItem(REKORD)) || 0;
  } catch {
    return 0;
  }
}
function rekordSchreiben(v) {
  try {
    localStorage.setItem(REKORD, String(v));
  } catch {
    /* privates Fenster */
  }
}

export function createMinigameScene(app) {
  let root, canvas, ctx;
  let W = 0, H = 0, dpr = 1;
  let state; // 'ready' | 'play' | 'over'
  let lane, laneX, things, punkte, leben, zeit, scroll, nextRow, blink, rekord, neuerRekord, wackel;
  let first = true;

  // Maße der Straße (in CSS-Pixeln)
  const roadW = () => Math.min(W * 0.86, 460);
  const roadL = () => (W - roadW()) / 2;
  const laneW = () => roadW() / SPUREN;
  const laneMid = (i) => roadL() + laneW() * (i + 0.5);
  const playerY = () => H * 0.8;
  const tempo = () => H * Math.min(1.35, 0.5 + zeit * 0.014); // Pixel pro Sekunde

  function reset() {
    lane = 1;
    laneX = laneMid(1);
    things = [];
    punkte = 0;
    leben = LEBEN;
    zeit = 0;
    scroll = 0;
    nextRow = H * 0.25;
    blink = 0;
    wackel = 0;
    neuerRekord = false;
  }

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = innerWidth;
    H = innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (lane !== undefined) laneX = laneMid(lane);
  }

  // Eine neue Reihe oben am Rand: höchstens zwei Hindernisse, eine Spur bleibt immer frei
  function spawnRow() {
    const frei = Math.floor(Math.random() * SPUREN);
    const hindernisse = Math.random() < 0.35 + Math.min(0.4, zeit * 0.01) ? 2 : 1;
    const andere = [0, 1, 2].filter((i) => i !== frei).sort(() => Math.random() - 0.5);
    for (let k = 0; k < hindernisse; k++) {
      const r = Math.random();
      things.push({ lane: andere[k], y: -60, typ: r < 0.45 ? 'huetchen' : r < 0.8 ? 'loch' : 'schaf', wobble: Math.random() * 6 });
    }
    if (Math.random() < 0.75) things.push({ lane: frei, y: -60, typ: Math.random() < 0.1 ? 'gold' : 'flasche', wobble: 0 });
  }

  function wechsel(d) {
    const n = Math.max(0, Math.min(SPUREN - 1, lane + d));
    if (n === lane) return;
    lane = n;
    app.audio.nav();
  }

  function start() {
    reset();
    state = 'play';
    app.audio.select();
    render();
  }

  function ende() {
    state = 'over';
    app.audio.error();
    app.input.rumble(0.6, 300);
    if (punkte > rekord) {
      rekord = punkte;
      neuerRekord = true;
      rekordSchreiben(rekord);
      setTimeout(() => app.audio.success(), 350);
    }
    render();
  }

  // Text-Teil (Punkte, Herzen, Meldungen) als HTML über der Zeichnung
  function render() {
    const hud = root.querySelector('.mg-hud');
    hud.innerHTML = `
      <div class="mg-score">🍶 ${punkte}</div>
      <div class="mg-lives">${'❤️'.repeat(Math.max(0, leben))}${'🤍'.repeat(LEBEN - Math.max(0, leben))}</div>
      <div class="mg-best">Rekord ${rekord}</div>`;
    const msg = root.querySelector('.mg-msg');
    if (state === 'ready') {
      msg.innerHTML = `<div class="mg-title">Flaschenjagd</div>
        <div class="mg-text">Sammle Trinkflaschen 🍶 (goldene zählen 5).<br>Weiche Hütchen, Schlaglöchern und Schafen aus!<br>
        ${app.control === 'touch' ? 'Links oder rechts antippen = Spur wechseln.' : '← → = Spur wechseln.'}</div>
        <div class="mg-go">${app.control === 'touch' ? 'Antippen zum Starten' : 'A drücken zum Starten'}</div>`;
    } else if (state === 'over') {
      msg.innerHTML = `<div class="mg-title">${neuerRekord ? 'Neuer Rekord!' : 'Sturz!'}</div>
        <div class="mg-text">Du hast <b>${punkte}</b> ${punkte === 1 ? 'Flasche' : 'Flaschen'} gesammelt.</div>
        <div class="mg-go">${app.control === 'touch' ? 'Antippen für noch einmal' : 'A = noch einmal'}</div>`;
    } else msg.innerHTML = '';
    msg.classList.toggle('show', state !== 'play');
  }

  function onPointer(e) {
    if (e.target !== canvas && !e.target.closest('.mg-msg')) return;
    if (state !== 'play') {
      start();
      return;
    }
    wechsel(e.clientX < W / 2 ? -1 : 1);
  }

  // ---------- Zeichnen ----------
  function drawRoad() {
    const L = roadL();
    const R = roadW();
    ctx.clearRect(0, 0, W, H);
    // Wiese links und rechts (halb durchsichtig, die 3D-Welt schimmert durch)
    ctx.fillStyle = 'rgba(46, 92, 40, 0.88)';
    ctx.fillRect(L - 46, 0, 46, H);
    ctx.fillRect(L + R, 0, 46, H);
    ctx.fillStyle = '#4b4b52';
    ctx.fillRect(L, 0, R, H);
    // Randlinien
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(L + 4, 0, 5, H);
    ctx.fillRect(L + R - 9, 0, 5, H);
    // gestrichelte Spurlinien, die nach unten laufen
    const dash = 46;
    const off = scroll % (dash * 2);
    for (let i = 1; i < SPUREN; i++) {
      const x = L + laneW() * i - 2;
      for (let y = -dash * 2 + off; y < H; y += dash * 2) ctx.fillRect(x, y, 4, dash);
    }
    // Grasbüschel am Rand, damit man das Tempo spürt
    ctx.fillStyle = 'rgba(120, 170, 70, 0.9)';
    for (let y = -40 + (scroll * 1.0) % 80; y < H; y += 80) {
      ctx.fillRect(L - 30, y, 8, 14);
      ctx.fillRect(L + R + 20, y + 40, 8, 14);
    }
  }

  function drawThing(t) {
    const x = laneMid(t.lane);
    const s = laneW() * 0.36;
    ctx.save();
    ctx.translate(x, t.y);
    if (t.typ === 'flasche' || t.typ === 'gold') {
      ctx.rotate(Math.sin(zeit * 4 + t.lane) * 0.25);
      ctx.fillStyle = t.typ === 'gold' ? '#f5c76b' : '#3d8fe0';
      ctx.beginPath();
      ctx.roundRect(-s * 0.32, -s * 0.55, s * 0.64, s * 1.15, s * 0.18);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.fillRect(-s * 0.32, -s * 0.12, s * 0.64, s * 0.18);
      ctx.fillStyle = '#222';
      ctx.fillRect(-s * 0.13, -s * 0.75, s * 0.26, s * 0.22);
      if (t.typ === 'gold') {
        ctx.strokeStyle = 'rgba(255, 240, 180, 0.9)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.95 + Math.sin(zeit * 8) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else if (t.typ === 'huetchen') {
      ctx.fillStyle = '#ff7a1a';
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.8);
      ctx.lineTo(s * 0.6, s * 0.6);
      ctx.lineTo(-s * 0.6, s * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.fillRect(-s * 0.36, -s * 0.05, s * 0.72, s * 0.2);
      ctx.fillStyle = '#ff7a1a';
      ctx.fillRect(-s * 0.75, s * 0.55, s * 1.5, s * 0.18);
    } else if (t.typ === 'loch') {
      ctx.fillStyle = '#26262b';
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.85, s * 0.5, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#3a3a40';
      ctx.beginPath();
      ctx.ellipse(-s * 0.15, -s * 0.08, s * 0.45, s * 0.24, 0.2, 0, Math.PI * 2);
      ctx.fill();
    } else if (t.typ === 'schaf') {
      // Schaf läuft ein bisschen hin und her
      ctx.translate(Math.sin(zeit * 2 + t.wobble) * s * 0.25, 0);
      ctx.fillStyle = '#f4f1ea';
      for (const [dx, dy] of [[-0.35, -0.2], [0.35, -0.2], [-0.35, 0.3], [0.35, 0.3], [0, 0.05], [0, -0.4], [0, 0.5]]) {
        ctx.beginPath();
        ctx.arc(dx * s, dy * s, s * 0.38, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#2b2b2b';
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.85, s * 0.24, s * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Fahrer von oben: zwei Reifen, Lenker, Rücken im Trikot, Helm
  function drawPlayer() {
    if (blink > 0 && Math.floor(blink * 12) % 2 === 0) return;
    const s = laneW() * 0.42;
    const tilt = (laneMid(lane) - laneX) / laneW();
    const trikot = app.bike.kitCol?.jersey || '#d23c3c';
    ctx.save();
    ctx.translate(laneX + Math.sin(wackel * 30) * wackel * 20, playerY());
    ctx.rotate(-tilt * 0.35);
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.roundRect(-s * 0.09, -s * 1.15, s * 0.18, s * 0.75, s * 0.08);
    ctx.roundRect(-s * 0.09, s * 0.35, s * 0.18, s * 0.75, s * 0.08);
    ctx.fill();
    ctx.fillStyle = '#ccc';
    ctx.fillRect(-s * 0.5, -s * 0.72, s, s * 0.08);
    ctx.fillStyle = typeof trikot === 'string' ? trikot : '#d23c3c';
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.05, s * 0.38, s * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    // Arme zum Lenker
    ctx.strokeStyle = '#e8b896';
    ctx.lineWidth = s * 0.12;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-s * 0.3, -s * 0.3);
    ctx.lineTo(-s * 0.42, -s * 0.7);
    ctx.moveTo(s * 0.3, -s * 0.3);
    ctx.lineTo(s * 0.42, -s * 0.7);
    ctx.stroke();
    ctx.fillStyle = '#f5c76b';
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.5, s * 0.22, s * 0.27, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function draw() {
    drawRoad();
    for (const t of things) drawThing(t);
    drawPlayer();
  }

  function step(dt) {
    zeit += dt;
    const v = tempo();
    scroll += v * dt;
    blink = Math.max(0, blink - dt);
    wackel = Math.max(0, wackel - dt * 2);
    laneX = damp(laneX, laneMid(lane), 14, dt);
    nextRow -= v * dt;
    if (nextRow <= 0) {
      spawnRow();
      nextRow = H * Math.max(0.24, 0.42 - zeit * 0.003) * (0.85 + Math.random() * 0.3);
    }
    const py = playerY();
    const hit = laneW() * 0.4;
    let changed = false;
    for (const t of things) {
      t.y += v * dt;
      if (t.done || Math.abs(t.y - py) > hit || Math.abs(laneMid(t.lane) - laneX) > laneW() * 0.45) continue;
      if (t.typ === 'flasche' || t.typ === 'gold') {
        t.done = true;
        punkte += t.typ === 'gold' ? 5 : 1;
        app.audio.key();
        changed = true;
      } else if (blink <= 0) {
        t.done = true;
        leben--;
        blink = 1.2;
        wackel = 0.5;
        app.input.rumble(0.5, 150);
        changed = true;
        if (leben <= 0) {
          ende();
          return;
        }
        app.audio.error();
      }
    }
    things = things.filter((t) => !t.done && t.y < H + 80);
    if (changed) render();
  }

  return {
    enter() {
      rekord = rekordLesen();
      root = el(`
        <div class="screen minigame-screen">
          <canvas class="mg-canvas"></canvas>
          <div class="mg-hud"></div>
          <div class="mg-msg"></div>
          ${hintBar([
            ['A', 'Start'],
            ['B', 'Zurück'],
          ])}
        </div>`);
      app.ui.append(root);
      canvas = root.querySelector('canvas');
      ctx = canvas.getContext('2d');
      resize();
      addEventListener('resize', resize);
      root.addEventListener('pointerdown', onPointer);
      reset();
      state = 'ready';
      render();
      first = true;
      app.npc.speed = 6;
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
      if (inp.pressed('back')) {
        app.audio.back();
        app.go('mode', { minigame: true });
        return;
      }
      if (state === 'play') {
        if (inp.pressed('left')) wechsel(-1);
        else if (inp.pressed('right')) wechsel(1);
        step(Math.min(dt, 0.05));
      } else if (inp.pressed('confirm')) start();
      draw();
    },

    exit() {
      removeEventListener('resize', resize);
      root.remove();
      root = null;
    },
  };
}
