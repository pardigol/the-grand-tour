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
  // drei Rückentaschen unten am Rücken (hinten = Mitte des Canvas)
  ctx.strokeStyle = shade(base, 0.55);
  ctx.lineWidth = 3;
  const px = W * 0.36;
  const pw = W * 0.28;
  ctx.strokeRect(px, H * 0.8, pw, H * 0.16);
  ctx.beginPath();
  ctx.moveTo(px + pw / 3, H * 0.8);
  ctx.lineTo(px + pw / 3, H * 0.96);
  ctx.moveTo(px + (2 * pw) / 3, H * 0.8);
  ctx.lineTo(px + (2 * pw) / 3, H * 0.96);
  ctx.stroke();
  // Nähte an den Seiten
  ctx.strokeStyle = 'rgba(0,0,0,0.18)';
  ctx.lineWidth = 2;
  for (const x of [0.19, 0.31, 0.69, 0.81]) {
    ctx.beginPath();
    ctx.moveTo(W * x, 0);
    ctx.lineTo(W * x, H);
    ctx.stroke();
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
// Helm-Textur: x = vorne → hinten, y = linke Seite → rechte Seite (siehe helmetGeometry in bike.js)
// Lüftungsschlitze des Helms: [y (links→rechts), x0, x1 (vorne→hinten), Dicke] – werden auch in 3D eingetieft (bike.js)
export const HELM_SCHLITZE = [
  [0.5, 0.2, 0.62, 0.05],
  [0.39, 0.16, 0.7, 0.045],
  [0.61, 0.16, 0.7, 0.045],
  [0.28, 0.2, 0.66, 0.04],
  [0.72, 0.2, 0.66, 0.04],
  [0.18, 0.3, 0.58, 0.035],
  [0.82, 0.3, 0.58, 0.035],
  [0.34, 0.06, 0.1, 0.035],
  [0.44, 0.06, 0.1, 0.035],
  [0.56, 0.06, 0.1, 0.035],
  [0.66, 0.06, 0.1, 0.035],
  [0.42, 0.8, 0.88, 0.04],
  [0.58, 0.8, 0.88, 0.04],
];

export function drawHelmet(k, base) {
  const ctx = k.canvas.getContext('2d');
  const W = k.canvas.width;
  const H = k.canvas.height;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  // dunkler Streifen in der Mitte (Akzent), leicht abgesetzt
  ctx.fillStyle = shade(base, 0.82);
  ctx.fillRect(W * 0.08, H * 0.47, W * 0.86, H * 0.06);
  // Lüftungsschlitze: lang, abgerundet, längs von vorne nach hinten
  const schlitz = (x0, x1, y, dicke) => {
    ctx.beginPath();
    ctx.moveTo(x0 * W, y * H);
    ctx.lineTo(x1 * W, y * H);
    ctx.lineWidth = dicke * H;
    ctx.lineCap = 'round';
    ctx.stroke();
  };
  // Rand der Schlitze etwas dunkler (Schatten), innen fast schwarz (man schaut in den Helm)
  ctx.strokeStyle = shade(base, 0.6);
  for (const [y, x0, x1, d] of HELM_SCHLITZE) schlitz(x0, x1, y, d * 1.45);
  ctx.strokeStyle = 'rgba(14,14,17,0.95)';
  for (const [y, x0, x1, d] of HELM_SCHLITZE) schlitz(x0, x1, y, d);
  k.tex.needsUpdate = true;
}

function isLight(hex) {
  const c = new THREE.Color(hex);
  const hsl = {};
  c.getHSL(hsl);
  return hsl.l > 0.6;
}
