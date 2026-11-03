// Speichert die Charaktere im Browser (localStorage).
import { CONFIG } from './config.js';

const KEY = 'pedal-legends.characters.v1';

export function loadCharacters() {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveAll(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* Speicher voll oder gesperrt */
  }
}

// Ein neuer Charakter. Weitere Felder (Aussehen, Rad ...) können später ergänzt werden.
export function newCharacterDraft() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
    name: '',
    number: 1,
    jersey: CONFIG.colors.jersey,
    frame: CONFIG.colors.bikeFrame,
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
