// Hilfsfunktionen, die mehrere Bildschirme gemeinsam nutzen.
import * as THREE from 'three';
import { damp } from '../noise.js';
import { WHEEL_R } from '../bike.js';

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Knöpfe/Fenster, deren Antippen nicht gleichzeitig „beliebige Taste“ im Spiel auslösen soll
export function noStart(node) {
  for (const t of ['mousedown', 'pointerdown', 'touchstart']) node.addEventListener(t, (e) => e.stopPropagation(), { passive: true });
}

export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

// PlayStation-Symbole zu den Xbox-Knöpfen. Angezeigt wird per CSS (body.pad-ps) die passende Variante.
const PS = { A: '✕', B: '○', X: '□', Y: '△', LB: 'L1', RB: 'R1', LT: 'L2', RT: 'R2' };
// Tastatur-Variante (body.control-keys)
const KEYS = { A: 'Enter', B: 'Esc', X: 'Entf', Y: 'Y', LB: 'Bild↓', RB: 'Bild↑', LT: 'A', RT: 'D' };
export const btn = (b) =>
  `<span class="btn btn-${b.toLowerCase()}"><i class="glyph-xbox">${b}</i><i class="glyph-ps">${PS[b] ?? b}</i><i class="glyph-keys">${KEYS[b] ?? b}</i></span>`;

export function hintBar(items) {
  const ACT = { A: 'confirm', B: 'back', X: 'x', Y: 'y', LB: 'lb', RB: 'rb' };
  return `<footer class="hints">${items
    .map(([b, t]) => `<span class="hint" ${ACT[b] ? `data-act="${ACT[b]}"` : ''}>${btn(b)}${t}</span>`)
    .join('')}</footer>`;
}

// Ein computergesteuerter Fahrer auf der Strecke (Startbildschirm, Menü)
const pose = {};
export function rideNpc(app, dt) {
  const n = app.npc;
  n.s += n.speed * dt;
  app.world.poseAt(n.s, n.lateral, pose);
  const b = app.bike.root;
  b.position.set(pose.x, pose.h, pose.z);
  b.rotation.set(-pose.pitch, pose.heading, 0);
  const cadence = n.speed > 0.5 ? n.speed / WHEEL_R / 3.6 : 0;
  app.bike.update(dt, n.speed, n.pedal === false ? 0 : cadence, 0);
  app.focus.set(pose.x, pose.h, pose.z);
  return pose;
}

// Verfolgerkamera hinter dem Rad
const _target = new THREE.Vector3();
const _look = new THREE.Vector3();
export function chaseCamera(app, dt, { dist = 4.4, height = 1.75, lag = 4, fovBase = 58, speed = 0, snap = false } = {}) {
  const cam = app.camera;
  const b = app.bike.root;
  const h = b.rotation.y;
  const fx = Math.sin(h);
  const fz = Math.cos(h);
  _target.set(b.position.x - fx * dist, b.position.y + height, b.position.z - fz * dist);
  const ground = app.world.terrainHeight(_target.x, _target.z) + 0.7;
  if (_target.y < ground) _target.y = ground;
  if (snap) cam.position.copy(_target);
  else {
    cam.position.x = damp(cam.position.x, _target.x, lag, dt);
    cam.position.y = damp(cam.position.y, _target.y, lag, dt);
    cam.position.z = damp(cam.position.z, _target.z, lag, dt);
  }
  _look.set(b.position.x + fx * 3, b.position.y + 1.0, b.position.z + fz * 3);
  cam.lookAt(_look);
  const fov = fovBase + Math.min(speed, 20) * 0.9;
  cam.fov = snap ? fov : damp(cam.fov, fov, 3, dt);
  cam.updateProjectionMatrix();
}

// Seitliche Kamerafahrt für Menü und Charaktererstellung: Rad steht rechts im Bild.
// Die Kamera steht links vom Fahrer auf der Straße, so stört kein Leitpfosten.
const _right = new THREE.Vector3();
export function showcaseCamera(app, dt, p, snap = false) {
  const cam = app.camera;
  const sx = p.tz;
  const sz = -p.tx;
  const t = app.time;
  const dist = 4.4;
  _target.set(p.x + sx * dist + p.tx * 1.2, p.h + 1.2 + Math.sin(t * 0.2) * 0.1, p.z + sz * dist + p.tz * 1.2);
  if (snap) cam.position.copy(_target);
  else cam.position.lerp(_target, 1 - Math.exp(-5 * dt));
  cam.fov = 40;
  cam.updateProjectionMatrix();
  // Halbe Bildbreite in Rad-Entfernung -> Rad landet bei etwa 70 % der Bildbreite
  const halfW = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * dist * cam.aspect;
  _look.set(p.x, p.h + 0.85, p.z).sub(cam.position);
  _right.crossVectors(_look, cam.up).normalize();
  _look.add(cam.position).addScaledVector(_right, -halfW * 0.42);
  cam.lookAt(_look);
}

export function formatTime(t) {
  if (t == null) return '–:––.–';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(1)}`;
}
