// Online gegen einen Freund: zwei Browser verbinden sich direkt (WebRTC über PeerJS).
// Der kostenlose PeerJS-Dienst hilft nur beim ersten Finden; die Rennen-Daten gehen direkt hin und her.
import Peer from 'peerjs';

const PREFIX = 'the-grand-tour-v1-';

// Nur die Felder, die der andere zum Anzeigen braucht
export function publicChar(c) {
  const keys = ['name', 'number', 'jersey', 'frame', 'helmet', 'shorts', 'brand', 'paint', 'kit', 'bar', 'groupset', 'tires'];
  const out = {};
  for (const k of keys) if (c[k] != null) out[k] = c[k];
  return out;
}

export class Online {
  constructor() {
    this.peer = null;
    this.conn = null;
    this.role = null; // 'host' oder 'guest'
    this.code = null;
    this.remote = null; // { char, mode }
    this.listener = null;
    this.status = 'off'; // 'off' | 'waiting' | 'connecting' | 'connected' | 'closed' | 'error'
  }

  get connected() {
    return this.status === 'connected';
  }

  // Wer gerade zuhört (Lobby oder Rennen), bekommt alle Nachrichten
  listen(fn) {
    this.listener = fn;
  }

  emit(msg) {
    this.listener?.(msg);
  }

  // Rennen erstellen: Code ausdenken und warten, bis jemand beitritt
  host(me, mode, tries = 0) {
    this.close();
    this.role = 'host';
    this.me = { char: publicChar(me), mode };
    this.code = String(1000 + Math.floor(Math.random() * 9000));
    this.status = 'waiting';
    const peer = (this.peer = new Peer(PREFIX + this.code));
    peer.on('error', (e) => {
      // Code schon vergeben: einfach einen neuen nehmen
      if (e.type === 'unavailable-id' && tries < 5) return this.host(me, mode, tries + 1);
      this.fail(e);
    });
    peer.on('open', () => this.emit({ t: 'code', code: this.code }));
    peer.on('connection', (conn) => {
      if (this.conn) {
        conn.close();
        return;
      }
      this.attach(conn);
    });
  }

  // Einem Rennen mit Code beitreten
  join(code, me, mode) {
    this.close();
    this.role = 'guest';
    this.me = { char: publicChar(me), mode };
    this.code = code;
    this.status = 'connecting';
    const peer = (this.peer = new Peer());
    peer.on('error', (e) => this.fail(e));
    peer.on('open', () => this.attach(peer.connect(PREFIX + code, { reliable: true })));
    // Kommt nach 12 Sekunden keine Verbindung zustande, Bescheid sagen
    clearTimeout(this.joinTimer);
    this.joinTimer = setTimeout(() => {
      if (this.status === 'connecting') this.fail({ type: 'timeout' });
    }, 12000);
  }

  attach(conn) {
    this.conn = conn;
    conn.on('open', () => {
      clearTimeout(this.joinTimer);
      this.status = 'connected';
      conn.send({ t: 'hello', ...this.me });
    });
    conn.on('data', (msg) => {
      if (!msg || typeof msg !== 'object') return;
      if (msg.t === 'bye') {
        this.status = 'closed';
        this.emit({ t: 'closed' });
        return;
      }
      if (msg.t === 'hello') {
        this.remote = { char: msg.char, mode: msg.mode };
      }
      this.emit(msg);
    });
    conn.on('close', () => {
      if (this.status === 'connected') {
        this.status = 'closed';
        this.emit({ t: 'closed' });
      }
    });
    conn.on('error', (e) => this.fail(e));
  }

  send(msg) {
    if (this.connected && this.conn?.open) this.conn.send(msg);
  }

  fail(e) {
    if (this.status === 'off') return;
    this.status = 'error';
    const why =
      e?.type === 'peer-unavailable' || e?.type === 'timeout'
        ? 'Kein Rennen mit diesem Code gefunden.'
        : e?.type === 'network' || e?.type === 'server-error' || e?.type === 'socket-error'
          ? 'Keine Verbindung zum Internet-Dienst.'
          : 'Die Verbindung hat nicht geklappt.';
    this.emit({ t: 'error', why });
  }

  close() {
    clearTimeout(this.joinTimer);
    const was = this.status;
    this.status = 'off';
    try {
      if (was === 'connected') this.conn?.send({ t: 'bye' });
    } catch {
      /* egal */
    }
    this.conn?.close();
    this.peer?.destroy();
    this.conn = null;
    this.peer = null;
    this.remote = null;
  }
}
