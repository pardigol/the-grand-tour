// Speichert die Charaktere im Browser (localStorage).
import { CONFIG } from './config.js';
import { DEFAULT_LOOK } from './brands.js';
import { hochladen } from './spielstand.js';

// Interner Speichername bleibt gleich, damit angelegte Fahrer erhalten bleiben
const KEY = 'pedal-legends.characters.v1';
// Jeder Spielstand (PIN) hat seine eigenen Fahrer
let keyPin = KEY;
export function setCharacterPin(pin, alteUebernehmen = false) {
  const neu = pin ? `${KEY}.pin.${pin}` : KEY;
  try {
    // beim allerersten Spielstand die bisherigen Fahrer übernehmen, damit nichts verloren geht
    if (alteUebernehmen && neu !== KEY && !localStorage.getItem(neu) && localStorage.getItem(KEY)) localStorage.setItem(neu, localStorage.getItem(KEY));
  } catch {
    /* egal */
  }
  keyPin = neu;
}

export function loadCharacters() {
  try {
    const list = JSON.parse(localStorage.getItem(keyPin) || '[]');
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveAll(list) {
  try {
    localStorage.setItem(keyPin, JSON.stringify(list));
  } catch {
    /* Speicher voll oder gesperrt */
  }
  hochladen(); // Fahrer auch im Internet speichern (für andere Geräte)
}

// Ein neuer Charakter. Weitere Felder (Aussehen, Rad ...) können später ergänzt werden.
// mode: 'road' (Rennrad), 'cx' (Cycle Cross) oder 'tt' (Zeitfahren) – jeder Modus hat seine eigenen Fahrer
export function newCharacterDraft(mode = 'road') {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    name: '',
    number: 1,
    jersey: CONFIG.colors.jersey,
    frame: CONFIG.colors.bikeFrame,
    helmet: DEFAULT_LOOK.helmet,
    shorts: DEFAULT_LOOK.shorts,
    brand: DEFAULT_LOOK.brand,
    paint: DEFAULT_LOOK.paint,
    kit: DEFAULT_LOOK.kit,
    bar: '#f6f6f6',
    mode,
    bestLap: null,
    createdAt: Date.now(),
    version: 1,
  };
}

export function addCharacter(c) {
  const list = loadCharacters();
  list.push(c);
  saveAll(list);
}

export function updateCharacter(c) {
  saveAll(loadCharacters().map((x) => (x.id === c.id ? c : x)));
}

export function deleteCharacter(id) {
  saveAll(loadCharacters().filter((x) => x.id !== id));
}
