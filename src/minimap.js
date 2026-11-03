// Streckenkarte für die linke untere Ecke: Landschaft von oben (Wiesen, Wald, Berge, Seen),
// die Strecke, die gefahrene Runde in Gold und der Fahrer als Pfeil.
import { CONFIG } from './config.js';
import { smoothstep, clamp } from './noise.js';

const MARGIN = 110; // so viele Meter Landschaft rund um die Strecke zeigen
const RES = 140; // Auflösung der Landschaftskarte

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
    minX -= MARGIN;
    maxX += MARGIN;
    minZ -= MARGIN;
    maxZ += MARGIN;
    this.scale = (SIZE - PAD * 2) / Math.max(maxX - minX, maxZ - minZ);
    this.ox = PAD + (SIZE - PAD * 2 - (maxX - minX) * this.scale) / 2 - minX * this.scale;
    this.oz = PAD + (SIZE - PAD * 2 - (maxZ - minZ) * this.scale) / 2 - minZ * this.scale;

    // Die Strecke selbst ändert sich nie -> einmal vorzeichnen
    this.base = document.createElement('canvas');
    this.base.width = this.base.height = canvas.width;
    const b = this.base.getContext('2d');
    b.scale(this.dpr, this.dpr);
    b.save();
    b.beginPath();
    b.roundRect(0, 0, SIZE, SIZE, 10);
    b.clip();
    b.imageSmoothingEnabled = true;
    b.drawImage(this.renderTerrain(), 0, 0, SIZE, SIZE);
    b.restore();
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

  // Landschaft Pixel für Pixel einfärben
  renderTerrain() {
    const w = this.world;
    const c = document.createElement('canvas');
    c.width = c.height = RES;
    const ctx = c.getContext('2d');
    const img = ctx.createImageData(RES, RES);
    const px = SIZE / RES;
    const col = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
    const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
    const grassA = col('#5f9140');
    const grassB = col('#8db657');
    const dry = col('#bfae63');
    const forest = col('#2e5a2a');
    const rock = col('#8c8279');
    const snow = col('#f4f2ec');
    const sand = col('#d8c896');
    const deep = col('#245f92');
    const shallow = col('#5aa0d4');

    for (let j = 0; j < RES; j++) {
      for (let i = 0; i < RES; i++) {
        const x = ((i + 0.5) * px - this.ox) / this.scale;
        const z = ((j + 0.5) * px - this.oz) / this.scale;
        const h = w.baseHeight(x, z);
        let c3;
        const lake = w.lakeAt(x, z);
        if (lake && h < lake.level) {
          c3 = mix(shallow, deep, smoothstep(0, 3, lake.level - h));
        } else {
          c3 = mix(grassA, grassB, w.n3(x * 0.006, z * 0.006) * 0.35 + 0.5);
          c3 = mix(c3, dry, smoothstep(0.25, 0.8, w.n2(x * 0.004 + 50, z * 0.004)) * 0.5);
          // Wald: gleiche Regel wie beim Pflanzen der Bäume
          if (h < 120) c3 = mix(c3, forest, smoothstep(0.0, 0.25, w.n3(x * 0.006 + 20, z * 0.006)) * 0.75);
          c3 = mix(c3, rock, smoothstep(45, 95, h));
          c3 = mix(c3, snow, smoothstep(110, 140, h));
          if (lake) c3 = mix(c3, sand, smoothstep(lake.level + 1.4, lake.level, h));
          // Hangschatten: Licht kommt von links oben
          const dx = w.baseHeight(x + 6, z) - h;
          const dz = w.baseHeight(x, z + 6) - h;
          const shade = clamp(1 - (dx + dz) * 0.07, 0.55, 1.3);
          c3 = [c3[0] * shade, c3[1] * shade, c3[2] * shade];
        }
        const k = (j * RES + i) * 4;
        img.data[k] = c3[0];
        img.data[k + 1] = c3[1];
        img.data[k + 2] = c3[2];
        img.data[k + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return c;
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
  // rivals = Gegner mit x, z und Trikotfarbe
  draw(x, z, heading, progress, rivals = []) {
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

    // Gegner als farbige Punkte
    for (const r of rivals) {
      ctx.beginPath();
      ctx.arc(this.mx(r.x), this.mz(r.z), 4.5, 0, Math.PI * 2);
      ctx.fillStyle = r.jersey;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();
    }

    // Fahrer: Pfeil in Fahrtrichtung (über den Gegnern)
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
