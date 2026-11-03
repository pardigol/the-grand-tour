// ✏️  HIER KANNST DU DAS SPIEL GANZ EINFACH VERÄNDERN!
// Ändere einen Wert, speichere die Datei – das Spiel lädt sich von selbst neu.

export const CONFIG = {
  // Der Name des Spiels (Startbildschirm und Menü)
  gameName: 'Pedal Legends',
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

  // Wie stark du in die Pedale trittst (Watt). Mehr = schneller!
  riderPower: 520,

  // Wie viele Runden ein Rennen dauert (eine Runde = etwa 3 bis 4 Minuten)
  raceLaps: 3,
};
