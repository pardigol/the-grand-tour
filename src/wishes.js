// WUNSCHZETTEL: Paul schreibt Ideen fürs Spiel auf.
// Jeder Wunsch wird an einen geheimen Kanal bei ntfy.sh geschickt (dort kann Papa ihn als
// Nachricht aufs Handy bekommen) und zusätzlich im Browser gemerkt, damit Paul seine Liste sieht.
import { CONFIG } from './config.js';
import { el, esc } from './scenes/common.js';

const KEY = 'grandtour.wuensche';

function loadWishes() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

function saveWishes(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* privates Fenster: dann eben nur verschicken */
  }
}

async function sendWish(from, text) {
  const box = CONFIG.wunschzettel.briefkasten;
  if (box) {
    // Wunsch-Briefkasten: legt ein GitHub-Issue an, das die Claude-Cloud sofort bearbeitet
    const res = await fetch(box, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ von: from || 'Paul', text }),
    });
    if (!res.ok) throw new Error('Senden fehlgeschlagen');
    const data = await res.json().catch(() => ({}));
    return data.nummer ?? null;
  }
  const res = await fetch(`https://ntfy.sh/${CONFIG.wunschzettel.kanal}`, {
    method: 'POST',
    body: text,
    headers: {
      Title: `Wunsch von ${from || 'Paul'}`,
      Tags: 'bike,gift',
    },
  });
  if (!res.ok) throw new Error('Senden fehlgeschlagen');
  return null;
}

// ---------- Live-Status: angekommen → Claude arbeitet daran → umgesetzt ----------
const FERTIG = ['umgesetzt', 'uebersprungen'];
const offen = (w) => w.sent && w.nr != null && !FERTIG.includes(w.status);

// Fragt beim Briefkasten den Stand aller offenen Wünsche ab. Gibt die Wünsche zurück, die gerade fertig wurden.
export async function refreshWishStatus() {
  const box = CONFIG.wunschzettel.briefkasten;
  const list = loadWishes();
  const nummern = list.filter(offen).map((w) => w.nr);
  if (!box || !nummern.length) return [];
  let data;
  try {
    const res = await fetch(`${box}?nr=${nummern.join(',')}`, { cache: 'no-store' });
    data = await res.json();
  } catch {
    return [];
  }
  if (!data?.ok) return [];
  const neuFertig = [];
  const frisch = loadWishes();
  for (const w of frisch) {
    const s = w.nr != null && data.status[w.nr];
    if (!s) continue;
    if (s.status !== w.status && FERTIG.includes(s.status)) {
      neuFertig.push(w);
      w.seen = false;
      w.fertigAm = Date.now();
    }
    w.status = s.status;
    w.info = s.info || '';
  }
  saveWishes(frisch);
  return neuFertig;
}

// Gibt es umgesetzte Wünsche, die Paul noch nicht gesehen hat?
export function unseenDone() {
  return loadWishes().filter((w) => FERTIG.includes(w.status) && w.seen === false).length;
}
export function hasOpenWishes() {
  return loadWishes().some(offen);
}

function statusHtml(w) {
  if (!w.sent) return '<div class="wish-item-meta">noch nicht verschickt – wird gleich nachgeholt</div>';
  if (w.nr == null) return '<div class="wish-item-meta">verschickt ✓</div>';
  const st = w.status || 'angekommen';
  const stufe = { angekommen: 1, in_arbeit: 2, umgesetzt: 3, uebersprungen: 3 }[st] || 1;
  const schritte = ['Angekommen', 'Claude arbeitet', st === 'uebersprungen' ? 'Nicht umgesetzt' : 'Umgesetzt'];
  const track = `<div class="wish-track s${stufe} ${st}">${schritte
    .map((t, i) => `<span class="${i < stufe ? 'on' : ''} ${i === stufe - 1 ? 'now' : ''}"><i></i>${t}</span>`)
    .join('')}</div>`;
  let text = '';
  if (st === 'angekommen') text = '📬 Dein Wunsch ist bei Claude angekommen und wartet auf die Bearbeitung.';
  else if (st === 'in_arbeit') text = '🛠️ Claude arbeitet gerade daran<span class="wish-dots"></span>';
  else if (st === 'umgesetzt') {
    const frisch = w.fertigAm && Date.now() - w.fertigAm < 3 * 60 * 1000;
    text = `✅ Umgesetzt! ${esc(w.info || '')}${frisch ? ' <b>In 1–2 Minuten im Spiel – dann die Seite neu laden.</b>' : ''}`;
  } else text = `💬 ${esc(w.info || 'Diesmal nicht umgesetzt.')}`;
  return `${track}<div class="wish-item-meta wish-now">${text}</div>`;
}

const fmt = (t) =>
  new Date(t).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

// Öffnet das Fenster. onClose wird aufgerufen, wenn es wieder zu ist.
export function openWishes(app, onClose) {
  const root = el(`
    <div class="wish-overlay">
      <div class="wish-card">
        <button class="wish-close" title="Schließen">✕</button>
        <div class="wish-kicker">${esc(CONFIG.gameName)}</div>
        <h2>Mein Wunschzettel</h2>
        <p class="wish-intro">Was soll es im Spiel noch geben? Schreib deinen Wunsch auf – er wird direkt an die Spiele-Werkstatt geschickt.</p>
        <label class="wish-label">Dein Name</label>
        <input class="wish-name" maxlength="20" placeholder="Paul">
        <label class="wish-label">Dein Wunsch</label>
        <textarea class="wish-text" maxlength="400" rows="4" placeholder="Zum Beispiel: Ich wünsche mir einen goldenen Helm!"></textarea>
        <div class="wish-row">
          <span class="wish-count">0 / 400</span>
          <button class="wish-send">Wunsch abschicken</button>
        </div>
        <div class="wish-status"></div>
        <div class="wish-list-head">Deine Wünsche</div>
        <div class="wish-list"></div>
      </div>
    </div>`);
  const $ = (s) => root.querySelector(s);
  const nameIn = $('.wish-name');
  const textIn = $('.wish-text');
  try {
    nameIn.value = localStorage.getItem(KEY + '.name') || '';
  } catch {
    /* egal */
  }

  function renderList() {
    const list = loadWishes();
    $('.wish-list').innerHTML = list.length
      ? list
          .slice()
          .reverse()
          .map(
            (w) => `<div class="wish-item ${w.sent ? '' : 'pending'} st-${w.status || 'neu'} ${w.seen === false ? 'fresh' : ''}">
              <div class="wish-item-text">${esc(w.text)}</div>
              <div class="wish-item-time">${fmt(w.at)}</div>
              ${statusHtml(w)}
            </div>`,
          )
          .join('')
      : '<div class="wish-empty">Noch keine Wünsche – leg los!</div>';
  }

  // Noch nicht verschickte Wünsche (z. B. ohne Internet) nachholen
  async function retryPending() {
    const list = loadWishes();
    let changed = false;
    for (const w of list) {
      if (w.sent) continue;
      try {
        w.nr = await sendWish(w.from, w.text);
        w.sent = true;
        w.status = w.nr != null ? 'angekommen' : undefined;
        changed = true;
      } catch {
        break;
      }
    }
    if (changed) {
      saveWishes(list);
      renderList();
    }
  }

  async function submit() {
    const text = textIn.value.trim();
    const from = nameIn.value.trim() || 'Paul';
    if (text.length < 3) {
      $('.wish-status').textContent = 'Schreib erst deinen Wunsch auf 🙂';
      app.audio.error();
      textIn.focus();
      return;
    }
    try {
      localStorage.setItem(KEY + '.name', from);
    } catch {
      /* egal */
    }
    const wish = { text, from, at: Date.now(), sent: false };
    const list = loadWishes();
    list.push(wish);
    saveWishes(list);
    $('.wish-send').disabled = true;
    $('.wish-status').textContent = 'Wird verschickt …';
    try {
      const nr = await sendWish(from, text);
      wish.sent = true;
      const l2 = loadWishes();
      const mine = l2.find((w) => w.at === wish.at);
      if (mine) {
        mine.sent = true;
        mine.nr = nr;
        if (nr != null) mine.status = 'angekommen';
      }
      saveWishes(l2);
      $('.wish-status').textContent =
        nr != null ? 'Danke! Dein Wunsch ist bei Claude angekommen. 🎉 Unten siehst du, wie weit er ist.' : 'Danke! Dein Wunsch ist angekommen. 🎉';
      poll();
      app.audio.success();
      textIn.value = '';
    } catch {
      $('.wish-status').textContent = 'Gerade kein Internet – der Wunsch ist gemerkt und wird später verschickt.';
      app.audio.error();
    }
    $('.wish-send').disabled = false;
    updateCount();
    renderList();
  }

  function updateCount() {
    $('.wish-count').textContent = `${textIn.value.length} / 400`;
  }

  // Solange das Fenster offen ist und Wünsche in Arbeit sind: alle 8 Sekunden nachsehen
  let timer = null;
  async function poll() {
    clearTimeout(timer);
    const fertig = await refreshWishStatus();
    if (!root.isConnected) return;
    if (fertig.some((w) => w.status === 'umgesetzt')) app.audio.success();
    renderList();
    // Wer das Fenster offen hat, hat die fertigen Wünsche gesehen
    const l = loadWishes();
    if (l.some((w) => w.seen === false)) {
      setTimeout(() => {
        const l2 = loadWishes();
        l2.forEach((w) => w.seen === false && (w.seen = true));
        saveWishes(l2);
      }, 4000);
    }
    if (hasOpenWishes()) timer = setTimeout(poll, 8000);
  }

  function close() {
    clearTimeout(timer);
    root.remove();
    window.removeEventListener('keydown', onKey, true);
    onClose?.();
  }

  function onKey(e) {
    if (e.key === 'Escape') {
      e.stopPropagation();
      close();
    }
  }

  // Klicks und Tasten im Fenster sollen das Spiel nicht starten
  root.addEventListener('mousedown', (e) => e.stopPropagation());
  root.addEventListener('keydown', (e) => e.stopPropagation());
  $('.wish-close').addEventListener('click', close);
  $('.wish-send').addEventListener('click', submit);
  textIn.addEventListener('input', updateCount);
  textIn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) submit();
  });
  window.addEventListener('keydown', onKey, true);
  root.addEventListener('click', (e) => {
    if (e.target === root) close();
  });

  document.body.append(root);
  renderList();
  retryPending().then(poll);
  setTimeout(() => textIn.focus(), 50);
  return { close };
}
