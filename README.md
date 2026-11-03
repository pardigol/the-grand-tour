# 🚴 Pedal Legends

Ein 3D-Rennrad-Spiel für den Browser, gebaut mit [Three.js](https://threejs.org) und [Vite](https://vitejs.dev).
Gemacht für Paul (11 Jahre). Spielbar mit einem Xbox-Controller oder mit der Tastatur.

---

## Starten

### Am einfachsten: Doppelklick

Im Spielordner auf **„Pedal Legends starten.command“** doppelklicken. Ein Terminal-Fenster geht auf, das Spiel startet und öffnet sich automatisch in Chrome. Beim allerersten Mal werden noch die Bausteine installiert, das dauert etwas länger.

- Solange das Terminal-Fenster offen ist, läuft das Spiel. **Fenster schließen = Spiel beenden.**
- Für den Schreibtisch: Datei mit gedrückter **Cmd + Alt** auf den Schreibtisch ziehen. So entsteht eine Verknüpfung (Alias), und die Originaldatei bleibt im Spielordner.

### Von Hand im Terminal

Voraussetzung: [Node.js](https://nodejs.org) (LTS) ist installiert.

```bash
npm install      # nur beim ersten Mal
npm run dev      # startet das Spiel
```

Danach im Browser öffnen: **http://localhost:5173**
(Chrome oder Edge empfohlen. Controller vorher per USB oder Bluetooth verbinden und einmal eine Taste drücken.)

Weitere Befehle:

```bash
npm run build    # baut eine fertige Version in den Ordner "dist"
npm run preview  # zeigt die gebaute Version an
```

---

## Steuerung

| Was | Xbox-Controller | Tastatur |
| --- | --- | --- |
| Spiel starten | beliebige Taste | beliebige Taste |
| Im Menü bewegen | linker Stick / Steuerkreuz | Pfeiltasten |
| Auswählen | **A** | Enter |
| Zurück | **B** | Escape |
| Charakter löschen (2× drücken) | **X** | Entf |
| Buchstabe löschen (Namenseingabe) | **X** | Rücktaste |
| Leerzeichen (Namenseingabe) | **Y** | Leertaste |
| Startnummer ±10 | **LB / RB** | Bild ↓ / Bild ↑ |
| Treten | rechter Trigger **RT** | W / ↑ / Leertaste |
| Bremsen | linker Trigger **LT** | S / ↓ |
| Lenken | linker Stick | A / D / ← / → |
| Pause | **B** oder Menü-Taste | Escape |
| Ton an/aus | – | M |

---

## Der Ablauf

1. **Startbildschirm** – filmische Kamerafahrt bei Sonnenaufgang, ein Rennradfahrer rollt über die Landstraße.
2. **Übergang** – das Rad beschleunigt, Bewegungsunschärfe und Geschwindigkeitslinien, ein goldenes Kettenblatt dreht sich ins Menü. Dazu Freilaufklicken und Fahrtwind.
3. **Hauptmenü** – alle Fahrer mit Name und Startnummer, darunter „Neuer Charakter +“.
4. **Charaktererstellung** – Name über die Bildschirmtastatur, Startnummer (1–999) mit dem Stick. Das Startnummernschild in der Mitte zeigt alles sofort an. „Fertig“ speichert den Fahrer.
5. **Teststrecke** – eine 2,3 km lange Runde durch Hügel und Wälder. Mit Rundenzeit und Bestzeit pro Fahrer.

---

## 🧒 Für Paul: Das Spiel selbst verändern

Alles Wichtige steht in **einer einzigen Datei**: `src/config.js`.
Öffne sie mit einem Texteditor (zum Beispiel VS Code), ändere etwas, speichere – und das Spiel im Browser lädt sich von selbst neu. Wenn mal etwas kaputtgeht: einfach die Änderung rückgängig machen (Strg+Z bzw. Cmd+Z).

**Spielnamen ändern**

```js
gameName: 'Pedal Legends',
```

Schreib zwischen die Anführungszeichen deinen eigenen Namen, z. B. `'Paul Racing'`.

**Farben ändern**

```js
jersey: '#d62839',     // Trikotfarbe
bikeFrame: '#14365c',  // Rahmenfarbe
gold: '#f5c76b',       // Titel und Rahmen im Menü
```

Farben sind Codes wie `#ff0000` (rot), `#00aa00` (grün), `#0066ff` (blau), `#ffcc00` (gelb).
Such im Internet nach „Color Picker“, dort kannst du dir jede Farbe aussuchen und den Code kopieren.

**Sonne und Helligkeit**

```js
sunElevation: 5,   // 0 = Sonne am Horizont, 40 = Mittag
exposure: 0.62,    // höher = helleres Bild
```

**Musik**

- Leiser oder lauter: `volume: 0.45` (0 = aus, 1 = laut).
- Eigene Melodie: Ändere die Akkorde bei `chords`, z. B. `['C4', 'E4', 'G4']`. Buchstabe = Ton, Zahl = Tonhöhe.
- Schneller oder langsamer: `tempo: 78`.
- Dein eigenes Lied: Leg eine MP3-Datei in den Ordner `public/musik` (Ordner anlegen) und schreib
  `file: 'musik/meinlied.mp3'`.

**Schneller fahren**

```js
riderPower: 520,   // mehr Watt = schneller
```

---

## Technik und Entscheidungen

- **Alles prozedural:** Landschaft, Straße, Bäume, Gras, Rennrad und Fahrer werden im Code erzeugt. Es werden keine Modelle heruntergeladen. Das spart Ladezeit, funktioniert offline, und es gibt keine Lizenzfragen. Die Schriften (Cinzel, Barlow Condensed) kommen als npm-Pakete mit, also auch offline.
- **Grafik:** Echte Schatten (Shadow Map, die dem Fahrer folgt), physikalischer Himmel mit Sonnenaufgang, Nebel, Bildbasierte Beleuchtung aus dem Himmel, leuchtende Pollen in der Luft, Bloom, eigener Shader für Bewegungsunschärfe, Speedlines und Vignette, Kantenglättung (MSAA).
- **Leistung:** Pixeldichte auf 1,5 begrenzt, Bäume und Gras als Instanzen. Läuft auf einem normalen Laptop flüssig.
- **Fahrer-Animation:** Beine und Arme werden per Inverse Kinematik an Pedale und Lenker angepasst.
- **Ton:** Alle Geräusche und die Musik werden mit der Web Audio API live erzeugt. Browser erlauben Ton erst nach einer Eingabe. Einige Browser zählen einen Controller-Knopf nicht als Eingabe. Falls es still bleibt, einmal eine Taste auf der Tastatur drücken oder ins Fenster klicken.
- **Charaktererstellung:** In `src/scenes/creator.js` ist sie in Schritte aufgeteilt (`STEPS`). Neue Schritte wie Aussehen oder Rad werden als weiteres Objekt mit `mount`, `update` und `validate` ergänzt. Gespeichert wird im `localStorage` des Browsers.
- **Eigene Entscheidungen**
  - **B** in der Namenseingabe bricht ab, aber erst nach einem zweiten Druck, damit nichts aus Versehen verloren geht. Zum Löschen von Buchstaben gibt es **X**, wie bei der Xbox-Tastatur.
  - Charaktere lassen sich im Menü mit 2× **X** löschen.
  - Der erste Buchstabe wird automatisch groß geschrieben.
  - Auf der Teststrecke gibt es Rundenzeiten. Die Bestzeit wird pro Fahrer gespeichert.

### Projektaufbau

```
src/
  config.js        ← Hier kann Paul alles einstellen
  main.js          Renderer, Effekte, Spielschleife
  world.js         Landschaft, Strecke, Himmel, Licht
  bike.js          Rennrad und Fahrer
  input.js         Controller + Tastatur
  audio.js         Geräusche und Musik
  fx.js            Bewegungsunschärfe-Shader
  storage.js       Speichern der Charaktere
  scenes/          title, transition, menu, creator, ride
```

---

## Ideen für die nächsten Schritte

- 🎨 **Aussehen-Schritt** in der Charaktererstellung: Trikot- und Helmfarbe, Hautfarbe, Frisur
- 🚲 **Rad-Schritt:** Rahmenfarbe, Laufräder, Rennrad vs. Zeitfahrrad
- 🏁 **Echte Rennen** gegen computergesteuerte Fahrer mit Windschatten-Effekt
- ⛰️ **Mehrere Strecken:** Bergetappe mit Serpentinen, Küstenstraße, Stadtkurs mit Kopfsteinpflaster
- 🔁 **Gangschaltung** mit LB/RB und Trittfrequenz-Anzeige
- ⚡ **Energie-Leiste:** Sprinten kostet Kraft, Trinkflasche füllt sie auf
- 🏆 **Trikot-Wertungen** wie bei der Tour de France (Gelb, Grün, Bergtrikot)
- 🌦️ **Tageszeiten und Wetter:** Regen, Abendrot, Nacht mit Lampe
- 👥 **Zwei-Spieler-Modus** mit geteiltem Bildschirm (zwei Controller)
- 📷 **Fotomodus** mit freier Kamera
- 🔊 Zuschauer am Straßenrand, Glocken und Jubel
- 💾 Bestenliste mit allen Rundenzeiten
