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

export const DEFAULT_LOOK = {
  helmet: '#f6f6f6',
  shorts: '#16161b',
  brand: 'canyon',
  paint: 'solid',
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
