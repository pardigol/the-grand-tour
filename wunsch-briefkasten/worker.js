// Wunsch-Briefkasten (Cloudflare Worker)
// Nimmt Wünsche vom Wunschzettel im Spiel an und legt sie als GitHub-Issue (Label "wunsch") an.
// Das neue Issue startet die Claude-Cloud-Aufgabe, die den Wunsch umsetzt.
// Zusätzlich geht eine Nachricht an den ntfy-Kanal, damit Papa den Wunsch sofort aufs Handy bekommt.
//
// Geheimnis (nicht im Code!): GITHUB_TOKEN – feingranularer Token, nur "Issues: Read and write" für pardigol/the-grand-tour.
// Einstellungen in wrangler.toml: REPO, NTFY_KANAL, ERLAUBTE_SEITEN.

const MAX_TEXT = 400;
const MAX_NAME = 20;
// Ganz einfache Bremse gegen Spam: pro Absender-IP höchstens so viele Wünsche pro Stunde (je Worker-Instanz)
const PRO_STUNDE = 10;
const zaehler = new Map();

function cors(origin, env) {
  const erlaubt = (env.ERLAUBTE_SEITEN || '').split(',').map((s) => s.trim());
  return {
    'Access-Control-Allow-Origin': erlaubt.includes(origin) ? origin : erlaubt[0] || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function antwort(status, daten, headers) {
  return new Response(JSON.stringify(daten), { status, headers: { 'Content-Type': 'application/json', ...headers } });
}

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const h = cors(origin, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: h });
    if (req.method !== 'POST') return antwort(405, { ok: false, fehler: 'Nur POST' }, h);

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
    const von = String(daten.von || 'Paul').trim().slice(0, MAX_NAME) || 'Paul';
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
