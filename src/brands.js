// Radmarken und Farben für die Charaktererstellung.
// ✏️ Hier kannst du weitere Farben ergänzen.

export const BRANDS = [
  { id: 'canyon', name: 'Canyon', land: 'Deutschland', font: '800 italic', upper: true },
  { id: 'rose', name: 'Rose', land: 'Deutschland', font: '800', upper: true },
  { id: 'colnago', name: 'Colnago', land: 'Italien', font: '800', upper: true, wide: true },
  { id: 'cervelo', name: 'Cervélo', land: 'Kanada', font: '700 italic', upper: false },
];

export const COLORS = [
  { hex: '#f6f6f6', name: 'Weiß' },
  { hex: '#16161b', name: 'Schwarz' },
  { hex: '#9aa0a6', name: 'Grau' },
  { hex: '#d62839', name: 'Rot' },
  { hex: '#f4a12a', name: 'Orange' },
  { hex: '#f2d14b', name: 'Gelb' },
  { hex: '#2bb24c', name: 'Grün' },
  { hex: '#1fa88f', name: 'Türkis' },
  { hex: '#2f7cf6', name: 'Blau' },
  { hex: '#14365c', name: 'Dunkelblau' },
  { hex: '#8a3ffc', name: 'Lila' },
  { hex: '#ff6fb5', name: 'Pink' },
  { hex: '#d4af37', name: 'Gold' },
];

// Rahmenfarben: wie COLORS, aber statt Grün ein dunkles, glänzendes Renngrün.
// ✏️ Matte Farben: einfach "matte: true" an eine Farbe schreiben, z. B. { hex: '#145a32', name: 'Mattgrün', matte: true }
export const FRAME_COLORS = COLORS.map((c) => (c.hex === '#2bb24c' ? { hex: '#145a32', name: 'Dunkelgrün' } : c));

// Lenkerband-Farben: wie COLORS, aber mit einem etwas dunkleren Orange
export const BAR_COLORS = COLORS.map((c) => (c.hex === '#f4a12a' ? { hex: '#d9731c', name: 'Orange' } : c));

export function isMatte(hex) {
  return FRAME_COLORS.some((c) => c.matte && c.hex === hex);
}

export const PAINTS = [
  { id: 'solid', name: 'Einfarbig' },
  { id: 'team', name: 'Team-Design' },
  { id: 'rainbow', name: 'Weltmeister' },
];

// Schaltgruppen: Farbe von Kurbel, Kettenblatt und Schaltwerk
// kraft: wie gut die Schaltung ist (1 = normal, 105 ist die Mitte). Dura-Ace und Red AXS sind am besten.
// ✏️ Weitere Gruppen einfach ergänzen
export const GROUPSETS = [
  { id: '105', name: '105', maker: 'Shimano', crank: '#26272c', ring: '#1b1c20', accent: '#b9bdc4', kraft: 1.0 },
  { id: 'ultegra', name: 'Ultegra', maker: 'Shimano', crank: '#55585f', ring: '#3d4046', accent: '#d5d8dd', kraft: 1.02 },
  { id: 'duraace', name: 'Dura-Ace', maker: 'Shimano', crank: '#2e3036', ring: '#a9aeb6', accent: '#e8eaee', kraft: 1.05 },
  { id: 'rival', name: 'Rival AXS', maker: 'SRAM', crank: '#141416', ring: '#141416', accent: '#6f747c', kraft: 0.97 },
  { id: 'force', name: 'Force AXS', maker: 'SRAM', crank: '#3a3d43', ring: '#2a2c31', accent: '#a3a8b0', kraft: 1.02 },
  { id: 'red', name: 'Red AXS', maker: 'SRAM', crank: '#101012', ring: '#101012', accent: '#c8102e', kraft: 1.05 },
];

// Reifenfarben fürs Zeitfahrrad
export const TIRE_COLORS = [
  { hex: '#1c1c1c', name: 'Schwarz' },
  { hex: '#b8864e', name: 'Braun (Classic)' },
  { hex: '#f1f1ee', name: 'Weiß' },
  { hex: '#d62839', name: 'Rot' },
  { hex: '#f2d14b', name: 'Gelb' },
  { hex: '#2f7cf6', name: 'Blau' },
  { hex: '#2bb24c', name: 'Grün' },
  { hex: '#ff6fb5', name: 'Pink' },
];

export function groupsetById(id) {
  return GROUPSETS.find((g) => g.id === id) || GROUPSETS[0];
}

export const DEFAULT_LOOK = {
  groupset: '105',
  helmet: '#f6f6f6',
  shorts: '#16161b',
  brand: 'canyon',
  paint: 'solid',
  kit: 'plain',
};

export function brandById(id) {
  return BRANDS.find((b) => b.id === id) || BRANDS[0];
}

export function brandLabel(b) {
  return b.upper ? b.name.toUpperCase() : b.name.toLowerCase();
}

// Helle Schrift auf dunklem Rahmen, dunkle Schrift auf hellem Rahmen
export function contrastColor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#111111' : '#ffffff';
}
