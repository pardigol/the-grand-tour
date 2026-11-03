// Streckenkarte für die linke untere Ecke: Strecke von oben, gefahrene Runde in Gold, Fahrer als Punkt.
import { CONFIG } from './config.js';

const SIZE = 210; // Größe in CSS-Pixeln
const PAD = 14;

export class Minimap {
  constructor(world, canvas) {
    this.world = world;
    this.canvas = canvas;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.height = SIZE * this.dpr;
    canvas.style.width = canvas.style.height = `${SIZE}px`;
    this.ctx = canvas.getContext('2d');

    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    for (let i = 0; i < world.N; i++) {
      minX = Math.min(minX, world.px[i]);
      maxX = Math.max(maxX, world.px[i]);
      minZ = Math.min(minZ, world.pz[i]);
      maxZ = Math.max(maxZ, world.pz[i]);
    }
    this.scale = (SIZE - PAD * 2) / Math.max(maxX - minX, maxZ - minZ);
    this.ox = PAD + (SIZE - PAD * 2 - (maxX - minX) * this.scale) / 2 - minX * this.scale;
    this.oz = PAD + (SIZE - PAD * 2 - (maxZ - minZ) * this.scale) / 2 - minZ * this.scale;

    // Die Strecke selbst ändert sich nie -> einmal vorzeichnen
    this.base = document.createElement('canvas');
    this.base.width = this.base.height = canvas.width;
    const b = this.base.getContext('2d');
    b.scale(this.dpr, this.dpr);
    b.lineJoin = b.lineCap = 'round';
    this.tracePath(b, 0, world.N);
    b.closePath();
    b.strokeStyle = 'rgba(0,0,0,0.55)';
    b.lineWidth = 8;
    b.stroke();
    b.strokeStyle = 'rgba(240,234,222,0.85)';
    b.lineWidth = 4;
    b.stroke();
    // Start/Ziel
    const sx = this.mx(world.px[0]);
    const sz = this.mz(world.pz[0]);
    const nx = -world.tz[0];
    const nz = world.tx[0];
    b.strokeStyle = CONFIG.colors.gold;
    b.lineWidth = 3;
    b.lineCap = 'butt';
    b.beginPath();
    b.moveTo(sx - nx * 8, sz - nz * 8);
    b.lineTo(sx + nx * 8, sz + nz * 8);
    b.stroke();
  }

  mx(x) {
    return this.ox + x * this.scale;
  }

  mz(z) {
    return this.oz + z * this.scale;
  }

  tracePath(ctx, from, to) {
    const w = this.world;
    ctx.beginPath();
    for (let i = from; i <= to; i++) {
      const k = i % w.N;
      const x = this.mx(w.px[k]);
      const z = this.mz(w.pz[k]);
      if (i === from) ctx.moveTo(x, z);
      else ctx.lineTo(x, z);
    }
  }

  // progress = gefahrene Meter der aktuellen Runde (oder null vor dem Start)
  draw(x, z, heading, progress) {
    const ctx = this.ctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.drawImage(this.base, 0, 0);
    ctx.scale(this.dpr, this.dpr);
    ctx.lineJoin = ctx.lineCap = 'round';

    if (progress != null && progress > 0) {
      const to = Math.min(this.world.N, Math.floor(progress / this.world.ds));
      this.tracePath(ctx, 0, to);
      ctx.strokeStyle = CONFIG.colors.gold;
      ctx.lineWidth = 4;
      ctx.shadowColor = CONFIG.colors.gold;
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Fahrer: Pfeil in Fahrtrichtung
    const px = this.mx(x);
    const pz = this.mz(z);
    const fx = Math.sin(heading);
    const fz = Math.cos(heading);
    ctx.beginPath();
    ctx.moveTo(px + fx * 10, pz + fz * 10);
    ctx.lineTo(px - fx * 5 + fz * 6, pz - fz * 5 - fx * 6);
    ctx.lineTo(px - fx * 2, pz - fz * 2);
    ctx.lineTo(px - fx * 5 - fz * 6, pz - fz * 5 + fx * 6);
    ctx.closePath();
    ctx.fillStyle = CONFIG.colors.accent;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }
}
