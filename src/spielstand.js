// Spielstände mit PIN: jede PIN hat ihre eigenen Fahrer und ihren eigenen Fortschritt in der Geschichte.
// Gespeichert wird im Browser (localStorage) – also auf diesem Gerät.
const KEY = 'grandtour.spielstaende.v1';

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
}
