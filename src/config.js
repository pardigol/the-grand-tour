// ✏️  HIER KANNST DU DAS SPIEL GANZ EINFACH VERÄNDERN!
// Ändere einen Wert, speichere die Datei – das Spiel lädt sich von selbst neu.

export const CONFIG = {
  // Der Name des Spiels (Startbildschirm und Menü)
  gameName: 'The Grand Tour',
  subtitle: 'Ein Rennrad-Abenteuer',
  startPrompt: 'Beliebige Taste drücken, um zu starten',

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
  // Extra-Regler nur für die Fahrgeräusche (Fahrtwind und Freilaufklicken): 0 = aus, 1 = laut
  fahrgeraeusche: 0.35,

  // Wie stark du in die Pedale trittst (Watt). Mehr = schneller!
  riderPower: 520,

  // Lenkung: Beim kurzen Antippen lenkt das Rad nur leicht ein (start = Anteil der vollen Stärke).
  // Je länger du L2/R2 hältst, desto stärker wird die Kurve – voll nach "vollNach" Sekunden.
  // stick = wie stark der linke Stick lenken darf (0.4 = 40 % der vollen Lenkung, 0 = gar nicht)
  steering: { start: 0.25, vollNach: 1.3, stick: 0.4 },

  // Sprint (□ / X): so viele Sekunden lang, danach so viele Sekunden Aufladen, und so viel stärker (1.6 = 60 % mehr Kraft)
  sprint: { dauer: 15, aufladen: 30, kraft: 1.6 },

  // Gangschaltung (L1 = runter, R1 = hoch; Tastatur Q / E). Je ein Wert pro Gang, Gang 1 … 11.
  gaenge: {
    start: 6, // mit diesem Gang startest du
    // Höchsttempo je Gang in km/h: schneller geht es nicht, weil man nicht schneller treten kann
    hoechsttempo: [22, 26, 30, 34, 38, 42, 46, 50, 54, 57, 62],
    // Kraft am Berg je Gang in Newton: wie stark du beim Anfahren und am steilen Berg schiebst
    bergkraft: [420, 370, 325, 285, 250, 220, 195, 172, 152, 135, 120],
    maxTrittfrequenz: 120, // Kurbelumdrehungen pro Minute, wenn der Gang "durchdreht"
  },

  // Windschatten: so viel weniger Luftwiderstand ganz dicht hinter einem Gegner (0.4 = 40 %)
  windschatten: 0.4,

  // Wie bergig die Strecke ist (0 = flach, 1 = normal, 1.5 = sehr bergig)
  berge: 1,

  // Wie viele Runden ein Rennen dauert (eine Runde = etwa 3 bis 4 Minuten)
  raceLaps: 3,
};
