// Spielstände mit PIN: jede PIN hat ihre eigenen Fahrer und ihren eigenen Fortschritt in der Geschichte.
// Gespeichert wird im Browser (localStorage) UND im Internet (Cloudflare, über den Wunsch-Briefkasten),
// damit man auf jedem Gerät mit derselben PIN weiterspielen kann (Handy von Oma, Mac von Opa …).
import { CONFIG } from './config.js';

const KEY = 'grandtour.spielstaende.v1';
const FAHRER_KEY = (p) => `pedal-legends.characters.v1.pin.${p}`;
const CLOUD = CONFIG.wunschzettel?.briefkasten ? CONFIG.wunschzettel.briefkasten + '/spielstand' : null;

let pin = null;

function alle() {
  try {
    const o = JSON.parse(localStorage.getItem(KEY) || '{}');
    return o && typeof o === 'object' ? o : {};
  } catch {
    return {};
  }
}
function schreiben(o) {
  try {
    localStorage.setItem(KEY, JSON.stringify(o));
  } catch {
    /* Speicher voll oder gesperrt */
  }
}

export const aktuellePin = () => pin;
export const gibtEsStand = (p) => !!alle()[p];

// Spielstand öffnen (oder neu anlegen). Liefert { neu: true/false }
export function oeffnen(p) {
  const o = alle();
  const ersterÜberhaupt = Object.keys(o).length === 0;
  const neu = !o[p];
  if (neu) {
    o[p] = { rennen: 1, angelegt: Date.now() };
    schreiben(o);
  }
  pin = p;
  if (neu) hochladen();
  return { neu, ersterÜberhaupt };
}

export function stand() {
  return (pin && alle()[pin]) || { rennen: 1 };
}

// Fortschritt: bis zu welchem Rennen der Geschichte man gekommen ist
export function rennenFreischalten(n) {
  if (!pin) return;
  const o = alle();
  if (!o[pin]) o[pin] = { rennen: 1, angelegt: Date.now() };
  o[pin].rennen = Math.max(o[pin].rennen || 1, n);
  o[pin].zuletzt = Date.now();
  schreiben(o);
  hochladen();
}

// Rolle im Team (aus dem Vertrag): 'sprinter' | 'kletterer' | 'allrounder'
export function rolleSetzen(r) {
  if (!pin) return;
  const o = alle();
  if (!o[pin]) o[pin] = { rennen: 1, angelegt: Date.now() };
  o[pin].rolle = r;
  o[pin].zuletzt = Date.now();
  schreiben(o);
  hochladen();
}

// ---------- Im Internet speichern und laden ----------
// Lädt den Spielstand zur PIN aus dem Internet (wenn er dort neuer ist als hier) und legt ihn auf diesem Gerät ab.
// Gibt 'geladen' | 'keiner' | 'offline' zurück.
export async function ausDemInternet(p, warten = 5000) {
  if (!CLOUD) return 'offline';
  try {
    const ctrl = new AbortController();
    const uhr = setTimeout(() => ctrl.abort(), warten);
    const r = await fetch(`${CLOUD}?pin=${encodeURIComponent(p)}`, { signal: ctrl.signal, cache: 'no-store' });
    clearTimeout(uhr);
    if (!r.ok) return 'offline';
    const { daten } = await r.json();
    if (!daten) return 'keiner';
    const o = alle();
    const hier = o[p];
    // nur übernehmen, wenn es hier nichts gibt oder das im Internet neuer ist
    if (!hier || (daten.stand?.zuletzt || daten.zeit || 0) >= (hier.zuletzt || hier.angelegt || 0)) {
      o[p] = { rennen: 1, angelegt: Date.now(), ...daten.stand };
      schreiben(o);
      try {
        if (Array.isArray(daten.fahrer) && daten.fahrer.length) localStorage.setItem(FAHRER_KEY(p), JSON.stringify(daten.fahrer));
      } catch {
        /* egal */
      }
    }
    return 'geladen';
  } catch {
    return 'offline';
  }
}

// Schickt den aktuellen Spielstand ins Internet (gesammelt, höchstens alle 2 Sekunden)
let hochTimer = null;
export function hochladen() {
  if (!CLOUD || !pin) return;
  clearTimeout(hochTimer);
  const p = pin;
  hochTimer = setTimeout(async () => {
    const o = alle();
    let fahrer = [];
    try {
      fahrer = JSON.parse(localStorage.getItem(FAHRER_KEY(p)) || '[]');
    } catch {
      /* egal */
    }
    try {
      await fetch(CLOUD, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pin: p, stand: o[p] || {}, fahrer }) });
    } catch {
      /* offline: beim nächsten Speichern klappt es */
    }
  }, 2000);
}
