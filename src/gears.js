// Gangschaltung: wie viel Kraft man in einem Gang bei einem Tempo auf die Straße bringt.
// Die Werte je Gang stehen in CONFIG.gaenge (src/config.js).
import { CONFIG } from './config.js';

// c = wie schnell man im Verhältnis zur höchsten Trittfrequenz tritt (0 = steht, 1 = dreht durch).
// Gibt zurück, welcher Anteil der vollen Kraft ankommt:
//  - c klein: Gang zu schwer, man drückt gegen die Pedale und bringt wenig Leistung
//  - c in der Mitte: perfekt, volle Leistung
//  - c nahe 1: Gang zu leicht, man strampelt durch und wird nicht schneller
export function powerShare(c) {
  if (c >= 1) return 0;
  if (c > 0.85) return (1 - c) / 0.15;
  if (c < 0.5) return 0.3 + 0.7 * Math.pow(c / 0.5, 1.3);
  return 1;
}

export function gearCount() {
  return CONFIG.gaenge.hoechsttempo.length;
}

// Antriebskraft in Newton für Gang g (1 … 11) bei Tempo v (m/s) und Krafteinsatz throttle (0 … 1)
export function gearDrive(g, v, throttle, boost = 1) {
  const G = CONFIG.gaenge;
  const vmax = G.hoechsttempo[g - 1] / 3.6;
  const c = Math.max(0, v) / vmax;
  const power = CONFIG.riderPower * boost * powerShare(c) * throttle;
  const force = Math.min(power / Math.max(v, 1.5), G.bergkraft[g - 1] * boost);
  return { force, c, rpm: Math.min(c, 1) * G.maxTrittfrequenz };
}
