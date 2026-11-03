// Alle Geräusche und die Musik werden live im Browser erzeugt (Web Audio API).
import { CONFIG } from './config.js';

const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
export function noteFreq(n) {
  const m = /^([A-G])([#b]?)(-?\d)$/.exec(n);
  if (!m) return 440;
  const semi = NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (parseInt(m[3], 10) + 1) * 12;
  return 440 * Math.pow(2, (semi - 69) / 12);
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.fwPhase = 0;
    this.musicStarted = false;
    this.muted = false;
  }

  // Browser erlauben Ton erst nach einer Taste oder einem Klick
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.build();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
  }

  get ok() {
    return !!this.ctx && this.ctx.state === 'running';
  }

  build() {
    const c = this.ctx;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    comp.connect(c.destination);
    this.master = c.createGain();
    this.master.connect(comp);

    this.sfx = c.createGain();
    this.sfx.gain.value = CONFIG.soundVolume;
    this.sfx.connect(this.master);

    // Musik mit Hall
    this.musicBus = c.createGain();
    this.musicBus.gain.value = CONFIG.music.volume;
    this.musicBus.connect(this.master);
    this.musicIn = c.createGain();
    this.musicIn.connect(this.musicBus);
    const verb = c.createConvolver();
    verb.buffer = this.impulse(3.2);
    const wet = c.createGain();
    wet.gain.value = 0.55;
    this.musicIn.connect(verb);
    verb.connect(wet);
    wet.connect(this.musicBus);

    // Rauschen für Wind, Klicks und Whoosh
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    // Fahrtwind
    const src = c.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    this.windFilter = c.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = 400;
    this.windGain = c.createGain();
    this.windGain.gain.value = 0;
    src.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.sfx);
    src.start();
  }

  impulse(seconds) {
    const c = this.ctx;
    const len = Math.floor(c.sampleRate * seconds);
    const buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    return buf;
  }

  toggleMute() {
    if (!this.ctx) return;
    this.muted = !this.muted;
    this.master.gain.setTargetAtTime(this.muted ? 0 : 1, this.ctx.currentTime, 0.05);
  }

  tone(freq, dur, { type = 'sine', vol = 0.2, attack = 0.005, slideTo = null, when = 0, dest = null } = {}) {
    if (!this.ok) return;
    const c = this.ctx;
    const t = c.currentTime + when;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(dest || this.sfx);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  noiseBurst(dur, { vol = 0.3, freq = 3000, type = 'highpass', q = 1, when = 0 } = {}) {
    if (!this.ok) return;
    const c = this.ctx;
    const t = c.currentTime + when;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f);
    f.connect(g);
    g.connect(this.sfx);
    s.start(t, Math.random() * 1.5);
    s.stop(t + dur + 0.02);
  }

  // Menü-Geräusche
  nav() {
    this.tone(720, 0.08, { type: 'triangle', vol: 0.13, slideTo: 960 });
  }
  select() {
    this.tone(880, 0.1, { type: 'triangle', vol: 0.16 });
    this.tone(1320, 0.16, { type: 'triangle', vol: 0.14, when: 0.07 });
  }
  back() {
    this.tone(620, 0.14, { type: 'triangle', vol: 0.14, slideTo: 360 });
  }
  error() {
    this.tone(150, 0.22, { type: 'square', vol: 0.07 });
  }
  key() {
    this.noiseBurst(0.03, { vol: 0.2, freq: 2600, type: 'bandpass', q: 2 });
    this.tone(1400, 0.035, { vol: 0.04 });
  }
  success() {
    ['C5', 'E5', 'G5', 'C6'].forEach((n, i) =>
      this.tone(noteFreq(n), 0.35, { type: 'triangle', vol: 0.13, when: i * 0.08 }),
    );
  }
  lap() {
    ['G5', 'C6', 'E6'].forEach((n, i) => this.tone(noteFreq(n), 0.4, { type: 'square', vol: 0.05, when: i * 0.1 }));
  }

  whoosh(dur = 1.8) {
    if (!this.ok) return;
    const c = this.ctx;
    const t = c.currentTime;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = 'bandpass';
    f.Q.value = 0.9;
    f.frequency.setValueAtTime(200, t);
    f.frequency.exponentialRampToValueAtTime(2800, t + dur * 0.7);
    f.frequency.exponentialRampToValueAtTime(700, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.6, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f);
    f.connect(g);
    g.connect(this.sfx);
    s.start(t);
    s.stop(t + dur + 0.1);
  }

  // Freilauf-Klicken: rate = Klicks pro Sekunde
  freewheel(dt, rate) {
    if (!this.ok || rate <= 0) {
      this.fwPhase = 0;
      return;
    }
    this.fwPhase += rate * dt;
    let n = 0;
    while (this.fwPhase >= 1 && n < 6) {
      this.fwPhase -= 1;
      this.noiseBurst(0.006, { vol: 0.32, freq: 4500, when: n * (1 / Math.max(rate, 1)) });
      n++;
    }
    if (this.fwPhase > 1) this.fwPhase = 0;
  }

  setWind(level) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.windGain.gain.setTargetAtTime(level * 0.3, t, 0.15);
    this.windFilter.frequency.setTargetAtTime(300 + level * 2400, t, 0.2);
  }

  setMusicLevel(v) {
    if (!this.ctx) return;
    this.musicBus.gain.setTargetAtTime(CONFIG.music.volume * v, this.ctx.currentTime, 0.6);
  }

  startMusic() {
    if (!this.ok || this.musicStarted) return;
    this.musicStarted = true;
    if (CONFIG.music.file) {
      const el = new Audio(CONFIG.music.file);
      el.loop = true;
      const node = this.ctx.createMediaElementSource(el);
      node.connect(this.musicBus);
      el.play().catch(() => {});
      return;
    }
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.15;
    this.timer = setInterval(() => this.schedule(), 50);
  }

  schedule() {
    const c = this.ctx;
    const eighth = 30 / CONFIG.music.tempo;
    const chords = CONFIG.music.chords;
    while (this.nextTime < c.currentTime + 0.3) {
      const t = this.nextTime;
      const bar = Math.floor(this.step / 8);
      const inBar = this.step % 8;
      const chord = chords[bar % chords.length];
      if (inBar === 0) {
        this.pad(chord, eighth * 8.5, t);
        this.bass(noteFreq(chord[0]) / 2, eighth * 8, t);
        if (bar % 4 === 0) this.bell(noteFreq(chord[2]) * 4, t + eighth * 4);
      }
      if (bar >= 2) {
        const pattern = [0, 1, 2, 1, 0, 2, 1, 2];
        const f = noteFreq(chord[pattern[inBar]]) * 2;
        this.pluck(f, t, inBar % 2 === 0 ? 0.07 : 0.045);
      }
      this.nextTime += eighth;
      this.step++;
    }
  }

  pad(chord, dur, t) {
    const c = this.ctx;
    const f = c.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(500, t);
    f.frequency.linearRampToValueAtTime(1400, t + dur * 0.5);
    f.frequency.linearRampToValueAtTime(600, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.05, t + dur * 0.35);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    f.connect(g);
    g.connect(this.musicIn);
    for (const n of chord) {
      for (const det of [-8, 8]) {
        const o = c.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = noteFreq(n);
        o.detune.value = det;
        o.connect(f);
        o.start(t);
        o.stop(t + dur + 0.1);
      }
    }
  }

  bass(freq, dur, t) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.16, t + 0.3);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.musicBus);
    o.start(t);
    o.stop(t + dur + 0.1);
  }

  pluck(freq, t, vol) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = 'triangle';
    o.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    o.connect(g);
    g.connect(this.musicIn);
    o.start(t);
    o.stop(t + 0.6);
  }

  bell(freq, t) {
    const c = this.ctx;
    for (const [mult, vol] of [
      [1, 0.04],
      [2.76, 0.015],
    ]) {
      const o = c.createOscillator();
      o.frequency.value = freq * mult;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);
      o.connect(g);
      g.connect(this.musicIn);
      o.start(t);
      o.stop(t + 2.6);
    }
  }
}
