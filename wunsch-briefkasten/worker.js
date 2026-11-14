// Wunsch-Briefkasten (Cloudflare Worker)
// Nimmt Wünsche vom Wunschzettel im Spiel an und legt sie als GitHub-Issue (Label "wunsch") an.
// Das neue Issue startet die Claude-Cloud-Aufgabe, die den Wunsch umsetzt.
// Zusätzlich geht eine Nachricht an den ntfy-Kanal, damit Papa den Wunsch sofort aufs Handy bekommt.
//
// Außerdem: Spielstände geräteübergreifend (KV-Speicher SPIELSTAENDE), Adresse /spielstand?pin=1234
//
// Geheimnis (nicht im Code!): GITHUB_TOKEN – feingranularer Token, nur "Issues: Read and write" für pardigol/the-grand-tour.
// Einstellungen in wrangler.toml: REPO, NTFY_KANAL, ERLAUBTE_SEITEN.

const MAX_TEXT = 400;
const MAX_NAME = 20;
// Ganz einfache Bremse gegen Spam: pro Absender-IP höchstens so viele Wünsche pro Stunde (je Worker-Instanz)
const PRO_STUNDE = 10;
const zaehler = new Map();
// Status der Wünsche kurz zwischenspeichern (spart GitHub-Abfragen)
let statusCache = { zeit: 0, daten: null };

// Liest wunsch-status.json aus dem Projekt (die Claude-Cloud schreibt dort hinein)
async function wunschStatus(env) {
  if (statusCache.daten && Date.now() - statusCache.zeit < 10_000) return statusCache.daten;
  const r = await fetch(`https://api.github.com/repos/${env.REPO}/contents/wunsch-status.json?ref=main`, {
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.raw+json',
      'User-Agent': 'grand-tour-wunsch-briefkasten',
    },
  });
  if (!r.ok) throw new Error('Status nicht lesbar: ' + r.status);
  const daten = await r.json();
  statusCache = { zeit: Date.now(), daten };
  return daten;
}

// Alle Wünsche (GitHub-Issues mit Label "wunsch", die der Briefkasten angelegt hat) samt Status
let listeCache = { zeit: 0, daten: null };
async function alleWuensche(env) {
  if (listeCache.daten && Date.now() - listeCache.zeit < 20_000) return listeCache.daten;
  const r = await fetch(`https://api.github.com/repos/${env.REPO}/issues?labels=wunsch&state=all&per_page=100&sort=created&direction=desc`, {
    headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json', 'User-Agent': 'grand-tour-wunsch-briefkasten' },
  });
  if (!r.ok) throw new Error('Liste nicht lesbar: ' + r.status);
  const issues = await r.json();
  const status = await wunschStatus(env).catch(() => ({}));
  const daten = issues
    .filter((i) => !i.pull_request && i.user?.login === env.REPO.split('/')[0])
    .map((i) => {
      const von = (i.title.match(/^Wunsch von (.+?):/) || [])[1] || 'Unbekannt';
      // Wunschtext steht im Body als Zitat ("> …")
      const text = (i.body || '')
        .split('\n')
        .filter((z) => z.startsWith('>'))
        .map((z) => z.replace(/^>\s?/, ''))
        .join(' ')
        .trim() || i.title.replace(/^Wunsch von .+?:\s*/, '');
      const st = status[String(i.number)] || { status: 'angekommen', info: '' };
      return { nr: i.number, von, text, am: i.created_at, status: st.status, info: st.info || '' };
    });
  listeCache = { zeit: Date.now(), daten };
  return daten;
}

function cors(origin, env) {
  const erlaubt = (env.ERLAUBTE_SEITEN || '').split(',').map((s) => s.trim());
  return {
    'Access-Control-Allow-Origin': erlaubt.includes(origin) ? origin : erlaubt[0] || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

// ---------- Spielstände (geräteübergreifend) ----------
// Gespeichert wird pro PIN: Fortschritt in der Geschichte und die Fahrer (Aussehen, Name). Nichts weiter.
const MAX_STAND = 60_000; // Zeichen
const LESEN_PRO_STUNDE = 120; // Bremse gegen Durchprobieren von PINs
const leseZaehler = new Map();
function zuViel(map, ip, max) {
  const jetzt = Date.now();
  const z = (map.get(ip) || []).filter((t) => jetzt - t < 3600_000);
  if (z.length >= max) return true;
  z.push(jetzt);
  map.set(ip, z);
  return false;
}
async function spielstand(req, env, h) {
  const origin = req.headers.get('Origin') || '';
  const erlaubt = (env.ERLAUBTE_SEITEN || '').split(',').map((s) => s.trim());
  if (!erlaubt.includes(origin)) return antwort(403, { ok: false, fehler: 'Nicht erlaubt' }, h);
  if (!env.SPIELSTAENDE) return antwort(500, { ok: false, fehler: 'Kein Speicher eingerichtet' }, h);
  const ip = req.headers.get('CF-Connecting-IP') || 'unbekannt';
  if (req.method === 'GET') {
    const pin = new URL(req.url).searchParams.get('pin') || '';
    if (!/^\d{4}$/.test(pin)) return antwort(400, { ok: false, fehler: 'PIN ungültig' }, h);
    if (zuViel(leseZaehler, ip, LESEN_PRO_STUNDE)) return antwort(429, { ok: false, fehler: 'Zu viele Anfragen' }, h);
    const roh = await env.SPIELSTAENDE.get('pin:' + pin);
    return antwort(200, { ok: true, daten: roh ? JSON.parse(roh) : null }, { ...h, 'Cache-Control': 'no-store' });
  }
  if (req.method === 'POST') {
    let d;
    try {
      d = await req.json();
    } catch {
      return antwort(400, { ok: false, fehler: 'Ungültige Daten' }, h);
    }
    const pin = String(d.pin || '');
    if (!/^\d{4}$/.test(pin)) return antwort(400, { ok: false, fehler: 'PIN ungültig' }, h);
    const text = JSON.stringify({ stand: d.stand || {}, fahrer: Array.isArray(d.fahrer) ? d.fahrer : [], zeit: Date.now() });
    if (text.length > MAX_STAND) return antwort(413, { ok: false, fehler: 'Spielstand zu groß' }, h);
    await env.SPIELSTAENDE.put('pin:' + pin, text);
    return antwort(200, { ok: true }, h);
  }
  return antwort(405, { ok: false, fehler: 'Nur GET/POST' }, h);
}

function antwort(status, daten, headers) {
  return new Response(JSON.stringify(daten), { status, headers: { 'Content-Type': 'application/json', ...headers } });
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const h = cors(origin, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: h });
    if (new URL(req.url).pathname === '/spielstand') return spielstand(req, env, h);
    // Status abfragen: GET ?nr=3,4 → { "3": {status, info, zeit}, … } (unbekannt = "angekommen")
    if (req.method === 'GET' && new URL(req.url).searchParams.has('liste')) {
      try {
        return antwort(200, { ok: true, wuensche: await alleWuensche(env) }, { ...h, 'Cache-Control': 'no-store' });
      } catch (e) {
        return antwort(502, { ok: false, fehler: String(e.message || e) }, h);
      }
    }
    if (req.method === 'GET') {
      const nummern = (new URL(req.url).searchParams.get('nr') || '')
        .split(',')
        .map((n) => n.trim())
        .filter((n) => /^\d{1,6}$/.test(n))
        .slice(0, 50);
      try {
        const alle = await wunschStatus(env);
        const aus = {};
        for (const n of nummern) aus[n] = alle[n] || { status: 'angekommen', info: '' };
        return antwort(200, { ok: true, status: aus }, { ...h, 'Cache-Control': 'no-store' });
      } catch (e) {
        return antwort(502, { ok: false, fehler: String(e.message || e) }, h);
      }
    }
    if (req.method !== 'POST') return antwort(405, { ok: false, fehler: 'Nur GET/POST' }, h);

    // nur vom Spiel aus
    const erlaubt = (env.ERLAUBTE_SEITEN || '').split(',').map((s) => s.trim());
    if (!erlaubt.includes(origin)) return antwort(403, { ok: false, fehler: 'Nicht erlaubt' }, h);

    const ip = req.headers.get('CF-Connecting-IP') || 'unbekannt';
    const jetzt = Date.now();
    const z = (zaehler.get(ip) || []).filter((t) => jetzt - t < 3600_000);
    if (z.length >= PRO_STUNDE) return antwort(429, { ok: false, fehler: 'Zu viele Wünsche – bitte später nochmal.' }, h);
    z.push(jetzt);
    zaehler.set(ip, z);

    let daten;
    try {
      daten = await req.json();
    } catch {
      return antwort(400, { ok: false, fehler: 'Ungültige Daten' }, h);
    }
    const text = String(daten.text || '').trim().slice(0, MAX_TEXT);
    // nur der Vorname (das Projekt ist öffentlich) – Zusätze in Klammern wie „(Test)“ bleiben erhalten
    const roh = String(daten.von || 'Paul').trim().slice(0, MAX_NAME);
    const von = (roh.match(/^[^\s(]+(\s*\([^)]*\))?/) || ['Paul'])[0] || 'Paul';
    if (text.length < 3) return antwort(400, { ok: false, fehler: 'Wunsch ist zu kurz' }, h);

    // GitHub-Issue anlegen
    const kurz = text.replace(/\s+/g, ' ').slice(0, 60);
    const gh = await fetch(`https://api.github.com/repos/${env.REPO}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'grand-tour-wunsch-briefkasten',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `Wunsch von ${von}: ${kurz}`,
        body: `**Wunsch von ${von}** (über den Wunschzettel im Spiel)\n\n> ${text.replace(/\n/g, '\n> ')}\n\n_Wird automatisch von Claude bearbeitet._`,
        labels: ['wunsch'],
      }),
    });
    if (!gh.ok) {
      return antwort(502, { ok: false, fehler: 'GitHub hat den Wunsch nicht angenommen', status: gh.status }, h);
    }
    const issue = await gh.json();

    // Papa Bescheid geben (Fehler hier sind egal)
    if (env.NTFY_KANAL) {
      try {
        await fetch(`https://ntfy.sh/${env.NTFY_KANAL}`, {
          method: 'POST',
          body: text,
          headers: { Title: `Wunsch von ${von}`, Tags: 'bike,gift', Click: issue.html_url },
        });
      } catch {
        /* egal */
      }
    }
    return antwort(200, { ok: true, nummer: issue.number }, h);
  },
};
