// 4. CHARAKTERERSTELLUNG
// Aufgebaut aus "Schritten".
// Schritte: Name & Startnummer, Aussehen, Rennrad. Weitere Schritte können in STEPS ergänzt werden.
import { addCharacter, updateCharacter, newCharacterDraft } from '../storage.js';
import { KITS } from '../kit.js';
import { BRANDS, COLORS, FRAME_COLORS, BAR_COLORS, PAINTS, GROUPSETS, DEFAULT_LOOK, brandLabel } from '../brands.js';
import { el, esc, btn, hintBar, rideNpc, showcaseCamera } from './common.js';

const NAME_MAX = 12;

// ---------- Schritt 1: Name & Startnummer ----------
const KEY_ROWS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ü'],
  ['Y', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ä', '-'],
];
const SPECIAL = [
  { k: 'shift', label: '⇧ Groß/klein', span: 3 },
  { k: 'space', label: 'Leerzeichen', span: 4 },
  { k: 'del', label: '⌫ Löschen', span: 3 },
];

function buildGrid() {
  const grid = KEY_ROWS.map((r) => r.map((ch) => ({ k: ch, label: ch, span: 1 })));
  const last = [];
  for (const s of SPECIAL) for (let i = 0; i < s.span; i++) last.push(s);
  grid.push(last);
  return grid;
}

const identityStep = {
  id: 'identity',
  title: 'Name & Startnummer',
  tab: 'Name & Nummer',
  hints: [
    ['A', 'Taste drücken'],
    ['X', 'Buchstabe löschen'],
    ['Y', 'Leerzeichen'],
    ['B', 'Abbrechen'],
  ],

  mount(container, draft, ctx) {
    this.draft = draft;
    this.ctx = ctx;
    this.grid = buildGrid();
    this.zone = 'kb';
    this.r = 1;
    this.c = 0;
    this.upper = !draft.name;
    this.autoLower = !draft.name;
    container.innerHTML = `
      <div class="creator-body">
        <div class="plate-stage">
          <div class="plate big">
            <i class="hole tl"></i><i class="hole tr"></i><i class="hole bl"></i><i class="hole br"></i>
            <div class="plate-number"></div>
            <div class="plate-name"></div>
          </div>
        </div>
        <div class="creator-controls">
          <div class="panel kb-panel" data-zone="kb">
            <div class="field-label">Dein Name</div>
            <div class="name-field"><span class="name-text"></span><span class="caret"></span><span class="name-count"></span></div>
            <div class="keyboard">
              ${this.grid
                .map((row, ri) => {
                  const seen = new Set();
                  return `<div class="kb-row">${row
                    .map((key) => {
                      if (seen.has(key)) return '';
                      seen.add(key);
                      return `<div class="key ${key.span > 1 ? 'wide' : ''}" style="--span:${key.span}" data-k="${esc(key.k)}" data-r="${ri}">${esc(key.label)}</div>`;
                    })
                    .join('')}</div>`;
                })
                .join('')}
            </div>
          </div>
          <div class="panel num-panel" data-zone="num">
            <div class="field-label">Startnummer</div>
            <div class="number-picker">
              <div class="arrow up">▲</div>
              <div class="number-value"></div>
              <div class="arrow down">▼</div>
            </div>
            <div class="small-hint">Stick ↑↓ · halten = schneller</div>
          </div>
          <div class="panel done-panel" data-zone="done">
            <div class="done-btn">Fertig <span>✓</span></div>
            <div class="error-msg"></div>
          </div>
        </div>
      </div>`;
    this.root = container;
    this.keyEls = [...container.querySelectorAll('.key')];
    this.keyEls.forEach((k) =>
      k.addEventListener('click', () => {
        const r = Number(k.dataset.r);
        const c = this.grid[r].findIndex((x) => x.k === k.dataset.k);
        this.zone = 'kb';
        this.r = r;
        this.c = c;
        this.press(this.grid[r][c]);
      }),
    );
    container.querySelector('.arrow.up').addEventListener('click', () => this.changeNumber(1));
    container.querySelector('.arrow.down').addEventListener('click', () => this.changeNumber(-1));
    container.querySelector('.done-btn').addEventListener('click', () => ctx.next());
    this.refresh();
  },

  get key() {
    return this.grid[this.r][this.c];
  },

  refresh() {
    const d = this.draft;
    const q = (s) => this.root.querySelector(s);
    q('.name-text').textContent = d.name;
    q('.name-count').textContent = `${d.name.length}/${NAME_MAX}`;
    q('.plate-number').textContent = d.number;
    q('.plate-name').textContent = d.name || 'DEIN NAME';
    q('.plate-name').classList.toggle('placeholder', !d.name);
    q('.number-value').textContent = d.number;
    for (const p of this.root.querySelectorAll('.panel')) p.classList.toggle('active', p.dataset.zone === this.zone);
    const cur = this.key;
    this.keyEls.forEach((k) => {
      k.classList.toggle('focus', this.zone === 'kb' && k.dataset.k === cur.k && Number(k.dataset.r) === this.r);
      if (k.dataset.k.length === 1 && /[A-ZÄÖÜ]/.test(k.dataset.k)) {
        k.textContent = this.upper ? k.dataset.k : k.dataset.k.toLowerCase();
      }
    });
    q('.done-btn').classList.toggle('focus', this.zone === 'done');
    this.ctx.preview(d);
  },

  typeChar(ch) {
    const d = this.draft;
    if (d.name.length >= NAME_MAX) {
      this.ctx.audio.error();
      this.bump('.name-field');
      return;
    }
    d.name += ch;
    if (this.autoLower && this.upper && /[A-Za-zÄÖÜäöü]/.test(ch)) {
      this.upper = false;
      this.autoLower = false;
    }
    this.ctx.audio.key();
    this.clearError();
  },

  backspace() {
    const d = this.draft;
    if (!d.name.length) return;
    d.name = d.name.slice(0, -1);
    if (!d.name.length) {
      this.upper = true;
      this.autoLower = true;
    }
    this.ctx.audio.key();
  },

  press(key) {
    if (key.k === 'shift') {
      this.upper = !this.upper;
      this.autoLower = false;
      this.ctx.audio.key();
    } else if (key.k === 'space') {
      if (this.draft.name.length && !this.draft.name.endsWith(' ')) this.typeChar(' ');
    } else if (key.k === 'del') this.backspace();
    else this.typeChar(this.upper ? key.k : key.k.toLowerCase());
    this.flashKey();
    this.refresh();
  },

  flashKey() {
    const k = this.keyEls.find((e) => e.classList.contains('focus'));
    if (!k) return;
    k.classList.remove('pressed');
    void k.offsetWidth;
    k.classList.add('pressed');
  },

  bump(sel) {
    const e = this.root.querySelector(sel);
    e.classList.remove('shake');
    void e.offsetWidth;
    e.classList.add('shake');
  },

  changeNumber(delta) {
    const d = this.draft;
    let n = d.number + delta;
    if (n > 999) n = delta > 1 ? 999 : 1;
    if (n < 1) n = delta < -1 ? 1 : 999;
    d.number = n;
    this.ctx.audio.nav();
    const v = this.root.querySelector('.number-value');
    v.classList.remove('tick-up', 'tick-down');
    void v.offsetWidth;
    v.classList.add(delta > 0 ? 'tick-up' : 'tick-down');
    this.refresh();
  },

  move(dr, dc) {
    const a = this.ctx.audio;
    if (this.zone === 'kb') {
      if (dr) {
        const r = this.r + dr;
        if (r < 0 || r >= this.grid.length) return;
        this.r = r;
      } else {
        let c = this.c;
        const cur = this.key;
        do c += dc;
        while (c >= 0 && c < 10 && this.grid[this.r][c] === cur);
        if (c >= 10) {
          this.zone = 'num';
        } else if (c < 0) return;
        else {
          // auf den Anfang einer breiten Taste springen
          const k = this.grid[this.r][c];
          this.c = this.grid[this.r].indexOf(k);
        }
      }
    } else if (this.zone === 'num') {
      if (dr) return this.changeNumber(-dr * 1);
      if (dc < 0) {
        this.zone = 'kb';
        this.c = 9;
        this.c = this.grid[this.r].indexOf(this.grid[this.r][9]);
      } else this.zone = 'done';
    } else if (this.zone === 'done') {
      if (dc < 0) this.zone = 'num';
      else return;
    }
    a.nav();
    this.refresh();
  },

  update(input) {
    if (input.pressed('up')) {
      // Beim Halten der Richtung zählt die Nummer schneller
      if (this.zone === 'num' && input.holdTime('up') > 1.6) this.changeNumber(5);
      else this.move(-1, 0);
    }
    if (input.pressed('down')) {
      if (this.zone === 'num' && input.holdTime('down') > 1.6) this.changeNumber(-5);
      else this.move(1, 0);
    }
    if (input.pressed('left')) this.move(0, -1);
    if (input.pressed('right')) this.move(0, 1);
    if (input.pressed('x')) {
      this.backspace();
      this.refresh();
    }
    if (input.pressed('y')) {
      this.press({ k: 'space' });
    }
    if (input.pressed('start')) {
      this.zone = 'done';
      this.refresh();
      this.ctx.next();
      return;
    }

    // Echte Tastatur
    for (const ch of input.chars) {
      if (this.zone === 'num') {
        if (/\d/.test(ch)) {
          const s = String(this.draft.number);
          let n = Number(this.typedDigits ? s + ch : ch);
          if (n > 999) n = Number(ch);
          this.draft.number = Math.max(1, n);
          this.typedDigits = true;
          this.refresh();
        } else if (ch === '\b') {
          this.draft.number = Math.max(1, Math.floor(this.draft.number / 10));
          this.refresh();
        }
        continue;
      }
      this.typedDigits = false;
      if (ch === '\b') this.backspace();
      else if (ch === ' ') {
        if (this.draft.name.length && !this.draft.name.endsWith(' ')) this.typeChar(' ');
      } else if (/^[\p{L}\d\-]$/u.test(ch)) this.typeChar(ch);
      this.refresh();
    }

    if (input.pressed('confirm')) {
      if (this.zone === 'kb') this.press(this.key);
      else if (this.zone === 'num') {
        this.zone = 'done';
        this.ctx.audio.nav();
        this.refresh();
      } else this.ctx.next();
    }
  },

  clearError() {
    this.root.querySelector('.error-msg').textContent = '';
  },

  validate() {
    this.draft.name = this.draft.name.trim();
    if (!this.draft.name) {
      this.root.querySelector('.error-msg').textContent = 'Bitte gib zuerst einen Namen ein.';
      this.bump('.name-field');
      this.zone = 'kb';
      this.refresh();
      return false;
    }
    return true;
  },

  unmount() {},
};

// ---------- Auswahl-Schritte (Farben, Marke) ----------
// Stick ↑↓ wählt die Zeile, ←→ ändert sofort die Auswahl. Das Rad rechts zeigt alles live.
function choiceStep({ id, title, tab, rows }) {
  return {
    id,
    title,
    tab,
    seeBike: true,
    hints: [
      ['A', 'Weiter'],
      ['B', 'Zurück'],
    ],

    mount(container, draft, ctx) {
      this.draft = draft;
      this.ctx = ctx;
      this.row = 0;
      const opt = (r, o, oi) => {
        if (r.type === 'brand')
          return `<div class="brand-opt" data-o="${oi}"><span class="brand-logo ${o.serif ? 'serif' : ''} ${o.font.includes('italic') ? 'italic' : ''}">${esc(brandLabel(o))}</span><small>${esc(o.land)}</small></div>`;
        if (r.type === 'group')
          return `<div class="brand-opt group-opt" data-o="${oi}"><i class="group-dot" style="--c:${o.accent}"></i><span>${esc(o.name)}</span><small>${esc(o.maker)}</small></div>`;
        if (r.type === 'paint')
          return `<div class="brand-opt paint-opt" data-o="${oi}"><i class="paint-preview ${o.id}"></i><span>${esc(o.name)}</span></div>`;
        return `<div class="swatch ${o.matte ? 'matte' : ''}" data-o="${oi}" style="--c:${o.hex}"></div>`;
      };
      container.innerHTML = `
        <div class="choice-panel">
          ${rows
            .map(
              (r, ri) => `
            <div class="choice-row" data-r="${ri}">
              <div class="choice-head"><span class="field-label">${esc(r.label)}</span><span class="choice-name"></span></div>
              <div class="choice-opts ${r.type}">${r.options.map((o, oi) => opt(r, o, oi)).join('')}</div>
            </div>`,
            )
            .join('')}
          <div class="choice-row done-row" data-r="${rows.length}">
            <div class="done-btn">${ctx.isLast(this) ? 'Fertig' : 'Weiter'} <span>${ctx.isLast(this) ? '✓' : '›'}</span></div>
          </div>
        </div>`;
      this.root = container;
      container.querySelectorAll('.choice-row').forEach((rowEl) => {
        const ri = Number(rowEl.dataset.r);
        rowEl.querySelectorAll('[data-o]').forEach((o) =>
          o.addEventListener('click', () => {
            this.row = ri;
            this.select(ri, Number(o.dataset.o));
          }),
        );
      });
      container.querySelector('.done-btn').addEventListener('click', () => ctx.next());
      this.refresh();
    },

    valueOf(r, o) {
      return o.id ?? o.hex;
    },

    current(ri) {
      const r = rows[ri];
      return r.options.findIndex((o) => this.valueOf(r, o) === this.draft[r.key]);
    },

    select(ri, oi) {
      const r = rows[ri];
      this.draft[r.key] = this.valueOf(r, r.options[oi]);
      this.ctx.audio.nav();
      this.ctx.preview(this.draft);
      this.refresh();
    },

    refresh() {
      this.root.querySelectorAll('.choice-row').forEach((rowEl) => {
        const ri = Number(rowEl.dataset.r);
        rowEl.classList.toggle('active', ri === this.row);
        if (ri >= rows.length) return;
        const cur = this.current(ri);
        rowEl.querySelectorAll('[data-o]').forEach((o) => o.classList.toggle('selected', Number(o.dataset.o) === cur));
        const r = rows[ri];
        const o = r.options[cur];
        rowEl.querySelector('.choice-name').textContent = o ? o.name : '';
      });
      this.root.querySelector('.done-btn').classList.toggle('focus', this.row === rows.length);
      this.root.querySelector(`.choice-row[data-r="${this.row}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },

    update(input) {
      if (input.pressed('up') && this.row > 0) {
        this.row--;
        this.ctx.audio.nav();
        this.refresh();
      }
      if (input.pressed('down') && this.row < rows.length) {
        this.row++;
        this.ctx.audio.nav();
        this.refresh();
      }
      if (this.row < rows.length && (input.pressed('left') || input.pressed('right'))) {
        const n = rows[this.row].options.length;
        const cur = Math.max(0, this.current(this.row));
        this.select(this.row, (cur + (input.pressed('right') ? 1 : -1) + n) % n);
      }
      if (input.pressed('confirm')) {
        if (this.row < rows.length) {
          this.row++;
          this.ctx.audio.nav();
          this.refresh();
        } else this.ctx.next();
      }
      if (input.pressed('start')) this.ctx.next();
    },

    validate() {
      return true;
    },

    unmount() {},
  };
}

const looksStep = choiceStep({
  id: 'looks',
  title: 'Dein Aussehen',
  tab: 'Aussehen',
  rows: [
    { key: 'helmet', label: 'Helm', type: 'color', options: COLORS },
    { key: 'jersey', label: 'Trikot', type: 'color', options: COLORS },
    { key: 'kit', label: 'Trikot-Muster', type: 'paint', options: KITS },
    { key: 'shorts', label: 'Hose', type: 'color', options: COLORS },
  ],
});

const bikeStep = choiceStep({
  id: 'bike',
  title: 'Dein Rennrad',
  tab: 'Rennrad',
  rows: [
    { key: 'brand', label: 'Marke', type: 'brand', options: BRANDS },
    { key: 'paint', label: 'Lackierung', type: 'paint', options: PAINTS },
    { key: 'frame', label: 'Rahmenfarbe', type: 'color', options: FRAME_COLORS },
    { key: 'bar', label: 'Lenkerband', type: 'color', options: BAR_COLORS },
    { key: 'groupset', label: 'Schaltung', type: 'group', options: GROUPSETS },
  ],
});

const STEPS = [identityStep, looksStep, bikeStep];

// ---------- Die Szene, die durch die Schritte führt ----------
export function createCreatorScene(app) {
  let root;
  let body;
  let stepIndex = 0;
  let draft;
  let cancelArmed = 0;
  let first = true;
  let editing = false;

  function mountStep() {
    const step = STEPS[stepIndex];
    root.querySelector('.step-label').textContent =
      `${editing ? 'Fahrer bearbeiten' : 'Neuer Charakter'} · Schritt ${stepIndex + 1} von ${STEPS.length}`;
    root.querySelector('.step-title').textContent = step.title;
    // Reiterleiste: L1/L2 zurück, R1/R2 weiter
    root.querySelector('.step-tabs').innerHTML = `${btn('LB')}${STEPS.map(
      (s, i) => `<span class="step-tab ${i === stepIndex ? 'active' : ''} ${i < stepIndex ? 'done' : ''}" data-i="${i}">${esc(s.tab)}</span>`,
    ).join('<i class="tab-dot"></i>')}${btn('RB')}`;
    root.querySelectorAll('.step-tab').forEach((t) => t.addEventListener('click', () => goTo(Number(t.dataset.i))));
    // Bei den Farb-Schritten soll man das Rad rechts gut sehen
    root.classList.toggle('see-bike', !!step.seeBike);
    const hints = stepIndex === 0 ? step.hints : step.hints.map(([b, t]) => [b, b === 'B' ? 'Zurück' : t]);
    root.querySelector('.hints').outerHTML = hintBar(hints);
    step.mount(body, draft, ctx);
    ctx.preview(draft);
    const doneBtn = body.querySelector('.done-btn');
    if (doneBtn && stepIndex < STEPS.length - 1) doneBtn.firstChild.textContent = 'Weiter ';
  }

  // Zu einem anderen Bereich wechseln. Vorwärts nur, wenn der aktuelle Bereich fertig ist (z. B. Name).
  function goTo(i) {
    if (i < 0 || i >= STEPS.length || i === stepIndex || stepIndex < 0) return;
    const step = STEPS[stepIndex];
    if (i > stepIndex && !step.validate()) {
      app.audio.error();
      app.input.rumble(0.4, 120);
      return;
    }
    step.unmount();
    stepIndex = i;
    app.audio.nav();
    app.input.rumble(0.15, 40);
    mountStep();
  }

  const ctx = {
    audio: app.audio,
    preview(d) {
      app.bike.setPlate(d.number, d.name || ' ');
      app.bike.applyLook(d);
    },
    isLast(step) {
      return STEPS.indexOf(step) === STEPS.length - 1;
    },
    next() {
      const step = STEPS[stepIndex];
      if (!step.validate()) {
        app.audio.error();
        app.input.rumble(0.4, 120);
        return;
      }
      step.unmount();
      if (stepIndex < STEPS.length - 1) {
        stepIndex++;
        app.audio.select();
        mountStep();
        return;
      }
      if (editing) updateCharacter(draft);
      else addCharacter(draft);
      app.audio.success();
      app.input.rumble(0.5, 200);
      root.classList.add('saved');
      const id = draft.id;
      setTimeout(() => app.currentName === 'creator' && app.go('menu', { selectId: id }), 650);
      stepIndex = -1;
    },
  };

  return {
    // params.edit = bestehender Charakter, der bearbeitet wird
    enter(params = {}) {
      editing = !!params.edit;
      draft = editing ? { ...DEFAULT_LOOK, ...params.edit } : newCharacterDraft(app.mode);
      stepIndex = 0;
      cancelArmed = 0;
      first = true;
      root = el(`
        <div class="screen creator-screen">
          <header class="creator-head">
            <div class="step-tabs"></div>
            <div class="step-label"></div>
            <h2 class="step-title"></h2>
          </header>
          <div class="step-body"></div>
          ${hintBar([])}
          <div class="toast"></div>
        </div>`);
      body = root.querySelector('.step-body');
      app.ui.append(root);
      mountStep();
    },

    update(dt) {
      const p = rideNpc(app, dt);
      showcaseCamera(app, dt, p, first);
      first = false;
      if (stepIndex < 0) return;

      cancelArmed = Math.max(0, cancelArmed - dt);
      const inp = app.input;
      if (inp.pressed('rb') || inp.pressed('rt')) {
        goTo(stepIndex + 1);
        return;
      }
      if (inp.pressed('lb') || inp.pressed('lt')) {
        goTo(stepIndex - 1);
        return;
      }
      // B in einem späteren Schritt: einen Schritt zurück
      if (app.input.pressed('back') && stepIndex > 0) {
        STEPS[stepIndex].unmount();
        stepIndex--;
        app.audio.back();
        mountStep();
        return;
      }
      if (app.input.pressed('back')) {
        if (cancelArmed > 0) {
          app.audio.back();
          app.go('menu', editing ? { selectId: draft.id } : {});
          return;
        }
        cancelArmed = 2;
        app.audio.back();
        const toast = root.querySelector('.toast');
        toast.innerHTML = `Nochmal ${btn('B')} drücken, um abzubrechen`;
        toast.classList.add('show');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
        return;
      }
      STEPS[stepIndex].update(app.input);
    },

    exit() {
      root.remove();
    },
  };
}
