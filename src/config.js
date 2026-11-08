// ✏️  HIER KANNST DU DAS SPIEL GANZ EINFACH VERÄNDERN!
// Ändere einen Wert, speichere die Datei – das Spiel lädt sich von selbst neu.

export const CONFIG = {
  // Der Name des Spiels (Startbildschirm und Menü)
  gameName: 'The Grand Tour',
  subtitle: 'Ein Rennrad-Abenteuer',
  startPrompt: 'Beliebige Taste drücken, um zu starten',

  // Wunschzettel auf dem Startbildschirm: Wünsche gehen an diesen geheimen Kanal bei ntfy.sh.
  // In der ntfy-App (iPhone/Android) diesen Kanal abonnieren, dann kommt jeder Wunsch als Nachricht aufs Handy.
  // briefkasten: Adresse des Wunsch-Briefkastens (Cloudflare Worker), der aus jedem Wunsch ein GitHub-Issue macht.
  // Ist sie leer, gehen Wünsche direkt an den ntfy-Kanal.
  wunschzettel: { kanal: 'grandtour-wuensche-8e640057d92d3c19', briefkasten: 'https://grand-tour-wunsch.google-e22.workers.dev' },

  // Farben – als Farbcode (#rrggbb). Tipp: Suche im Internet nach "Color Picker".
  colors: {
    gold: '#f5c76b', // Titel, Rahmen und Hervorhebungen
    accent: '#ff7a3d', // zweite Akzentfarbe
    jersey: '#d62839', // Trikotfarbe für neue Charaktere
    bikeFrame: '#14365c', // Rahmenfarbe des Rennrads
  },

  // Der Himmel: Höhe der Sonne in Grad (0 = Horizont, 5 = Sonnenaufgang, 40 = Mittag)
  sunElevation: 5,
  // Helligkeit des ganzen Bildes (0.4 = dunkel, 0.9 = hell)
  exposure: 0.62,

  // Der Fahrer auf dem Startbildschirm
  // true = echte Fahrerin (Shannon von Mixamo) statt der einfachen Figur
  fahrerModell: true,
  titleRider: { number: 11, name: 'PAUL', brand: 'canyon' },

  // Musik
  music: {
    volume: 0.45, // 0 = aus, 1 = laut
    // Eigenes Lied? Lege eine MP3 in den Ordner "public/musik" und trage hier den Namen ein,
    // zum Beispiel: file: 'musik/meinlied.mp3'
    file: '',
    tempo: 78, // Schläge pro Minute für die eingebaute Musik
    // Die Akkorde der eingebauten Musik (je ein Takt)
    chords: [
      ['A3', 'C4', 'E4'],
      ['F3', 'A3', 'C4'],
      ['C3', 'E3', 'G3'],
      ['G3', 'B3', 'D4'],
    ],
  },

  // Lautstärke der Geräusche (Menü, Fahrtwind, Freilauf)
  soundVolume: 0.8,
  // Lautstärke des Fahrtwinds (0 = aus, 1 = so laut wie früher)
  windLautstaerke: 0.3,

  // Zeitfahren: Luftwiderstand im Vergleich zum Rennrad (0.8 = 20 % weniger dank Aero-Haltung und Zeitfahrrad)
  zeitfahren: { luftwiderstand: 0.8 },

  // Windschatten: so viel weniger Luftwiderstand ganz dicht hinter einem Gegner (0.4 = 40 %)
  windschatten: 0.4,

  // Wie stark du in die Pedale trittst (Watt). Mehr = schneller!
  riderPower: 520,

  // Lenkung: Beim kurzen Antippen lenkt das Rad nur leicht ein (start = Anteil der vollen Stärke).
  // Je länger du L2/R2 hältst, desto stärker wird die Kurve – voll nach "vollNach" Sekunden.
  // stick = wie stark der linke Stick lenken darf (0.4 = 40 % der vollen Lenkung, 0 = gar nicht)
  steering: { start: 0.25, vollNach: 1.3, stick: 0.4 },

  // Sprint (□ / X): so viele Sekunden lang, danach so viele Sekunden Aufladen, und so viel stärker (1.6 = 60 % mehr Kraft)
  // abLadung: ab welchem Ladestand man schon sprinten darf (0.75 = drei Viertel). Dann dauert der Sprint entsprechend kürzer.
  sprint: { dauer: 15, aufladen: 30, kraft: 1.6, abLadung: 0.75 },

  // Rollwiderstand je Untergrund (kleiner = rollt besser) für Rennrad und Cycle Cross (CX)
  rollen: {
    rennrad: { asphalt: 0.005, schotter: 0.02, wiese: 0.06 },
    cx: { asphalt: 0.008, schotter: 0.011, wiese: 0.022 },
  },

  // Jahreszeit je Strecke: 'sommer' (grün) oder 'herbst' (bunte Blätter, Laub am Boden)
  jahreszeiten: { rennrad: 'sommer', cx: 'herbst' },

  // Wie viele Runden ein Rennen dauert (eine Runde = etwa 3 bis 4 Minuten)
  raceLaps: 3,
};
