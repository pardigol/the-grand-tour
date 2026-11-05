// Texturen für die Rad-Kleidung: Trikot, Ärmel, Radhose und Helm.
// Alles wird auf Canvas gezeichnet und auf die Körperteile (Kapseln) gelegt.
// Auf einer Kapsel läuft u einmal um den Körper herum (u = 0 und 1 = vorne, 0.5 = hinten),
// v läuft entlang des Körperteils (bei uns: 0 = Hüfte/Schulter/Hüfte, 1 = Schulter/Ellbogen/Knie).
import * as THREE from 'three';
import { CONFIG } from './config.js';

export const KITS = [
  { id: 'plain', name: 'Einfarbig' },
  { id: 'stripes', name: 'Streifen' },
  { id: 'rainbow', name: 'Weltmeister' },
];

// Die Weltmeister-Farben von oben nach unten
const RAINBOW = ['#0b6cb5', '#d81e2c', '#111111', '#f5c400', '#00a14b'];

function shade(hex, f) {
  const c = new THREE.Color(hex);
  const hsl = {};
  c.getHSL(hsl);
  c.setHSL(hsl.h, hsl.s, Math.max(0, Math.min(1, hsl.l * f)));
  return '#' + c.getHexString();
}

export function makeKitCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return { canvas: c, tex };
}

// Waagerechte Streifen zwischen v0 und v1 (v = 1 oben im Canvas)
function bands(ctx, W, H, v0, v1, colors) {
  const step = (v1 - v0) / colors.length;
  colors.forEach((col, i) => {
    const top = v1 - step * i;
    ctx.fillStyle = col;
    ctx.fillRect(0, (1 - top) * H, W, step * H + 0.6);
  });
}

// Trikot (Oberkörper)
export function drawTorso(k, base, kit) {
  const ctx = k.canvas.getContext('2d');
  const W = k.canvas.width;
  const H = k.canvas.height;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  // dunklere Seitenteile
  ctx.fillStyle = shade(base, 0.62);
  ctx.fillRect(W * 0.19, 0, W * 0.12, H);
  ctx.fillRect(W * 0.69, 0, W * 0.12, H);
  if (kit === 'stripes') {
    bands(ctx, W, H, 0.6, 0.66, ['#ffffff']);
    bands(ctx, W, H, 0.53, 0.56, ['#ffffff']);
  } else if (kit === 'rainbow') {
    bands(ctx, W, H, 0.57, 0.74, RAINBOW);
  }
  // Kragen
  bands(ctx, W, H, 0.95, 1, [kit === 'rainbow' ? '#0b6cb5' : shade(base, 0.5)]);
  // Reißverschluss vorne in der Mitte (u = 0 bzw. 1)
  ctx.fillStyle = 'rgba(20,20,24,0.8)';
  ctx.fillRect(0, 0, 3, H * 0.62);
  ctx.fillRect(W - 3, 0, 3, H * 0.62);
  // Schriftzug hinten oben und vorne auf der Brust
  ctx.fillStyle = kit === 'rainbow' || isLight(base) ? '#1a1a1e' : '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `800 ${Math.round(H * 0.05)}px "Barlow Condensed", Arial, sans-serif`;
  ctx.fillText(CONFIG.gameName.toUpperCase(), W * 0.5, H * 0.13);
  ctx.font = `700 ${Math.round(H * 0.04)}px "Barlow Condensed", Arial, sans-serif`;
  ctx.fillText(CONFIG.gameName.toUpperCase(), W * 0.09, H * 0.2);
  k.tex.needsUpdate = true;
}

// Ärmel (Oberarm): v = 1 am Ellbogen, dort das Bündchen
export function drawSleeve(k, base, kit) {
  const ctx = k.canvas.getContext('2d');
  const W = k.canvas.width;
  const H = k.canvas.height;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  if (kit === 'rainbow') bands(ctx, W, H, 0.76, 0.96, RAINBOW);
  else if (kit === 'stripes') bands(ctx, W, H, 0.82, 0.92, ['#ffffff']);
  bands(ctx, W, H, 0.96, 1, [shade(base, 0.5)]);
  k.tex.needsUpdate = true;
}

// Oberschenkel: Radhose bis kurz über das Knie, dann Haut
export function drawThigh(k, shorts, skin, kit) {
  const ctx = k.canvas.getContext('2d');
  const W = k.canvas.width;
  const H = k.canvas.height;
  ctx.fillStyle = skin;
  ctx.fillRect(0, 0, W, H);
  bands(ctx, W, H, 0, 0.74, [shorts]);
  // Beinabschluss
  if (kit === 'rainbow') bands(ctx, W, H, 0.62, 0.74, RAINBOW);
  else bands(ctx, W, H, 0.69, 0.74, [shade(shorts, isLight(shorts) ? 0.6 : 1.8)]);
  k.tex.needsUpdate = true;
}

// Helm: Lüftungsschlitze auf der Halbkugel (oben im Canvas = Helmmitte)
export function drawHelmet(k, base) {
  const ctx = k.canvas.getContext('2d');
  const W = k.canvas.width;
  const H = k.canvas.height;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(15,15,18,0.85)';
  const cols = 9;
  for (let i = 0; i < cols; i++) {
    const x = ((i + 0.5) / cols) * W;
    ctx.beginPath();
    ctx.ellipse(x, H * 0.38, W * 0.018, H * 0.14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + W / cols / 2, H * 0.72, W * 0.014, H * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  // Rand unten
  ctx.fillStyle = shade(base, 0.7);
  ctx.fillRect(0, H * 0.93, W, H * 0.07);
  k.tex.needsUpdate = true;
}

function isLight(hex) {
  const c = new THREE.Color(hex);
  const hsl = {};
  c.getHSL(hsl);
  return hsl.l > 0.6;
}
