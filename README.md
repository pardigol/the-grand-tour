# 🚴 The Grand Tour

Ein 3D-Rennrad-Spiel für den Browser, gebaut mit [Three.js](https://threejs.org) und [Vite](https://vitejs.dev).
Gemacht für Paul (11 Jahre). Spielbar mit einem Xbox-Controller oder mit der Tastatur.

---


## Starten

### Am einfachsten: Doppelklick

Im Spielordner auf **„The Grand Tour starten.command“** doppelklicken. Ein Terminal-Fenster geht auf, das Spiel startet und öffnet sich automatisch in Chrome. Beim allerersten Mal werden noch die Bausteine installiert, das dauert etwas länger.

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

Xbox- und PlayStation-Controller (PS4/PS5) funktionieren beide. Bei einem PlayStation-Controller zeigt das Spiel automatisch ✕ ○ □ △ statt A B X Y an.

| Was | Xbox | PlayStation | Tastatur |
| --- | --- | --- | --- |
| Spiel starten | beliebige Taste | beliebige Taste | beliebige Taste |
| Im Menü bewegen | linker Stick / Steuerkreuz | linker Stick / Steuerkreuz | Pfeiltasten |
| Auswählen | **A** | **✕** | Enter |
| Zurück | **B** | **○** | Escape |
| Charakter löschen (2× drücken) | **X** | **□** | Entf |
| Buchstabe löschen (Namenseingabe) | **X** | **□** | Rücktaste |
| Leerzeichen (Namenseingabe) | **Y** | **△** | Leertaste |
| Charaktererstellung: Bereich wechseln (Name & Nummer · Aussehen · Rennrad) | **LB / RB** oder **LT / RT** | **L1 / R1** oder **L2 / R2** | Bild ↓ / Bild ↑ |
| Treten (halten) | **A** | **✕** | W / ↑ / Leertaste |
| Dauertreten an/aus | **B** | **○** | T |
| Fahrradklingel (Kling-Kling) | – | – | K |
| Bremsen | **Y** | **△** | S / ↓ |
| Sprint (15 s Vollgas, danach 30 s Aufladen; ab ¾ Ladung schon möglich, dann kürzer; nochmal drücken = abbrechen) | **X** | **□** | Shift |
| Landen nach einem Drop (Cycle Cross) | **LB + RB** gleichzeitig | **L1 + R1** gleichzeitig | Q + E |
| Lenken (kurz tippen = sanft, länger halten = enge Kurve) | **LT / RT** | **L2 / R2** | A / D / ← / → |
| Leicht lenken (höchstens 40 %) | linker Stick | linker Stick | – |
| Kamera drehen | rechter Stick | rechter Stick | J / L (drehen), I / , (hoch/runter) |
| Kamera-Ansicht wechseln (hinten, Seite, oben, vorne) | rechten Stick drücken | rechten Stick drücken (R3) | C |
| Pause | Menü-Taste | **Options** | Escape |
| Ton an/aus | – | – | M |

Tipp: Chrome oder Edge verwenden. Den Controller per USB oder Bluetooth verbinden und auf dem Startbildschirm einmal eine Taste drücken, erst dann „sieht“ ihn der Browser.

---

## Der Ablauf

1. **Startbildschirm** – filmische Kamerafahrt bei Sonnenaufgang, ein Rennradfahrer rollt über die Landstraße.
2. **Übergang** – das Rad beschleunigt, Bewegungsunschärfe und Geschwindigkeitslinien, ein goldenes Kettenblatt dreht sich ins Menü. Dazu Freilaufklicken und Fahrtwind.
3. **Rennrad oder Cycle Cross** – zwei große Felder. **Rennrad**: Landstraße, schmale Reifen, Gegner Mia, Leo, Emma und Ben. **Cycle Cross**: eigene Strecke – ein 1,7 km langer, schmaler Waldweg aus Erde (1,5 bis 3 m breit, stellenweise ein enger Pfad) durch dichten Wald mit Riesenbäumen, deren Kronen sich über dem Weg schließen, abgesteckt mit rot-weißem Absperrband. Fünf **Drops** (immer auf geraden Stücken, nie direkt hinter einer Kurve): An einem liegenden Baumstamm springst du ab und fliegst knapp eine Sekunde, 1 bis 1,5 m tiefer geht es weiter. Dazu 16 **Felsbrocken** auf dem Weg – fahr drumherum, sonst stürzt du. Zum Landen **L1 + R1 gleichzeitig halten** (Tastatur: Q + E), sonst stürzt du und musst kurz warten. Stollenreifen mit hellen Flanken, ohne Gegner (du fährst allein gegen die Uhr) und mit eigener Fahrerliste: Fahrer, die du bei Cycle Cross anlegst, erscheinen nur dort. Neue Lackierung **„Weltmeister“**: weißer Rahmen mit Regenbogenstreifen an Sitzrohr und Gabel. Rollwerte in `src/config.js` unter `rollen`.
3. **Hauptmenü** – alle Fahrer mit Name und Startnummer, darunter „Neuer Charakter +“.
4. **Charaktererstellung** in drei Schritten:
   - **Name & Startnummer:** Name über die Bildschirmtastatur, Startnummer (1–999) mit dem Stick. Das Startnummernschild in der Mitte zeigt alles sofort an.
   - **Dein Aussehen:** Farben für Helm, Trikot und Hose sowie das **Trikot-Muster**: Einfarbig, Streifen oder Weltmeister (Regenbogen auf Brust, Ärmeln und Hosenbeinen).
   - **Dein Rennrad:** Marke (Canyon, Rose, Colnago oder Cervélo), Lackierung, Rahmenfarbe und Farbe des Lenkerbands. Der Markenname steht groß auf dem Aero-Unterrohr. Lackierung **„Team-Design“**: hinten mattschwarz, vorne die Rahmenfarbe mit gezacktem Übergang, tiefe Felgen mit weißer Schrift, schwarzes Lenkerband – mit Colnago und Weiß sieht das Rad aus wie das Team-Rad aus Pauls Foto.

   Oben ist eine Reiterleiste: Mit **R1/R2** springst du zum nächsten Bereich, mit **L1/L2** zurück. Stick ↑↓ wählt die Zeile, ←→ ändert die Farbe. Das Rad rechts zeigt alles sofort. **B** geht einen Schritt zurück. Wählst du im Hauptmenü einen bestehenden Fahrer mit **A/✕**, kannst du „Rennen fahren“ oder „Fahrer bearbeiten“ wählen.
5. **Rennen auf der Teststrecke** – Du startest gegen vier Gegner (Mia, Leo, Emma und Ben). Nach dem Countdown „3 – 2 – 1 – LOS!“ geht es über drei Runden. Oben siehst du deinen Platz, unten in der Mitte den Sprint-Balken (□ drücken, wenn „bereit“ dasteht). Kommst du ins Ziel, fliegt buntes Konfetti, danach kommt eine Ergebnisliste mit „Nochmal fahren“. Auf der Karte sind die Gegner als farbige Punkte zu sehen. Die Strecke ist eine 2,3 km lange Runde durch Hügel und Wälder. Mit Seen, Wäldern und Bergen. Dazu Rundenzeit, Bestzeit pro Fahrer und eine Streckenkarte links unten mit Wiesen, Wald, Seen und Bergen: Der Pfeil zeigt, wo du bist, die gefahrene Runde leuchtet golden. Mit dem rechten Stick kannst du dich von allen Seiten anschauen.

   **Wunschzettel:** Auf dem Startbildschirm unten rechts (oder Taste Y / △) öffnet sich der Wunschzettel. Dort kann Paul Ideen fürs Spiel aufschreiben und abschicken. Die Wünsche gehen an einen geheimen Kanal bei ntfy.sh (`wunschzettel.kanal` in `src/config.js`). Wer diesen Kanal in der kostenlosen ntfy-App abonniert, bekommt jeden Wunsch als Nachricht aufs Handy. Mit `./wuensche.sh` werden die Wünsche abgeholt und in `WUENSCHE.md` gesammelt (ntfy hebt sie 12 Stunden auf). Bitte nichts Privates hineinschreiben, der Kanal ist nicht verschlüsselt.

   **iPad / Touch:** Das Spiel lässt sich auch auf dem iPad spielen. Im Rennen: linke oder rechte Bildschirmhälfte gedrückt halten = lenken, nach oben wischen = losfahren (nochmal nach oben = Sprint), nach unten wischen = bremsen, beide Seiten gleichzeitig halten = landen nach Drops. Oben rechts gibt es einen kleinen Pause-Knopf. Menüs und die Hinweise unten (A, B …) kann man antippen. Tipp: In Safari „Zum Home-Bildschirm“ wählen, dann startet es wie eine App im Vollbild.

   **Online gegen einen Freund:** Fahrer auswählen → „Online gegen Freund“. Einer wählt „Rennen erstellen“ und bekommt einen 4-stelligen Code, der andere wählt „Rennen beitreten“ und gibt den Code ein. Dann startet der Ersteller das Rennen. Ihr fahrt gleichzeitig auf derselben Strecke, seht euch gegenseitig, könnt Windschatten fahren, und am Ende zählt, wer zuerst im Ziel ist. „Nochmal fahren“ startet für beide neu. Gespielt wird im Modus des Erstellers. Die Verbindung läuft direkt zwischen den beiden Browsern (PeerJS); nur zum Finden wird der kostenlose PeerJS-Dienst genutzt.

   **Zeitfahren:** Am Anfang gibt es neben „Rennrad“ und „Cycle Cross“ jetzt auch „Zeitfahren“. Du fährst allein gegen die Uhr auf der Landstraße, mit Zeitfahrrad (Aufsatzlenker, Scheibenrad hinten, hohe Felge vorne), Zeitfahrhelm und flacher Aero-Haltung. Dadurch hast du 20 % weniger Luftwiderstand (`zeitfahren.luftwiderstand` in `src/config.js`). Zeitfahrer haben ihre eigenen Charaktere. Beim Zeitfahrrad kannst du zusätzlich die Reifenfarbe wählen (z. B. klassisch braun). Unterwegs fährst du beim Zeitfahren durch das Dorf **Paulsdorf**: Häuser mit Fensterläden und Blumenkästen, eine Kirche mit Zwiebelturm, Gehwege, Laternen, Wimpelketten und gelbe Ortsschilder (gebaut in `src/village.js`).

   **Schaltung:** Im Rad-Menü wählst du deine Schaltgruppe: Shimano 105, Ultegra, Dura-Ace oder SRAM Rival, Force, Red. Kurbel, Kettenblatt und Schaltwerk bekommen dann die passenden Farben (bei SRAM Red mit roten Akzenten).

   **Windschatten:** Fahr dicht hinter einen Gegner, dann hast du bis zu 40 % weniger Luftwiderstand. Hinter dem Gegner leuchten blaue Pfeile auf der Straße, oben erscheint „Windschatten“ mit einem Balken. Die Stärke stellst du in `src/config.js` bei `windschatten` ein.

   **Fahrerin:** Dein eigener Fahrer ist jetzt Shannon, ein echtes 3D-Modell von Mixamo. Trikot und Hose haben die Farben deines Charakters. Mit `fahrerModell: false` in `src/config.js` kommt die einfache Figur zurück.

---

## 🧒 Für Paul: Das Spiel selbst verändern

Alles Wichtige steht in **einer einzigen Datei**: `src/config.js`.
Öffne sie mit einem Texteditor (zum Beispiel VS Code), ändere etwas, speichere – und das Spiel im Browser lädt sich von selbst neu. Wenn mal etwas kaputtgeht: einfach die Änderung rückgängig machen (Strg+Z bzw. Cmd+Z).

**Spielnamen ändern**

```js
gameName: 'The Grand Tour',
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

**Rennen einstellen**

```js
raceLaps: 3,       // Anzahl Runden (in src/config.js)
```

Die Gegner änderst du in `src/rivals.js`: Name, Nummer, Trikotfarbe und Kraft (`power` in Watt). Mehr Watt = schwerer zu schlagen.

**Neue Farben**

In `src/brands.js` steht die Farbliste für Helm, Trikot, Hose und Rahmen. Füge einfach eine Zeile hinzu, z. B. `{ hex: '#00ffcc', name: 'Mint' },`

Bei der Rahmenfarbe gibt es statt Grün ein glänzendes **Dunkelgrün**. Matte Rahmenfarben gehen auch: In `src/brands.js` bei `FRAME_COLORS` einer Farbe `matte: true` geben.

**Lenkung einstellen**

```js
steering: { start: 0.25, vollNach: 1.3, stick: 0.4 },
```

`start` = wie stark das Rad beim kurzen Antippen einlenkt (0.25 = ein Viertel). `vollNach` = nach wie vielen Sekunden Halten die volle Lenkung erreicht ist. Kleinere Zahlen = schnellere, schärfere Lenkung. `stick` = wie stark der linke Stick lenken darf (0.4 = 40 %, 0 = gar nicht, 1 = so stark wie L2/R2).

**Sprint einstellen**

```js
sprint: { dauer: 15, aufladen: 30, kraft: 1.6 },
```

`dauer` = wie viele Sekunden der Sprint geht, `aufladen` = wie lange der Balken danach zum Aufladen braucht, `kraft` = wie viel stärker du im Sprint trittst (1.6 = 60 % mehr).

**Schneller fahren**

```js
riderPower: 520,   // mehr Watt = schneller
```

---

## Technik und Entscheidungen

- **Alles prozedural:** Landschaft, Straße, Bäume, Gras, Rennrad und Fahrer werden im Code erzeugt. Es werden keine Modelle heruntergeladen. Das spart Ladezeit, funktioniert offline, und es gibt keine Lizenzfragen. Die Schriften (Cinzel, Barlow Condensed) kommen als npm-Pakete mit, also auch offline.
- **Grafik:** Echte Schatten (Shadow Map, die dem Fahrer folgt), physikalischer Himmel mit Sonnenaufgang, Nebel, Bildbasierte Beleuchtung aus dem Himmel, leuchtende Pollen in der Luft, Bloom, eigener Shader für Bewegungsunschärfe, Speedlines und Vignette, Kantenglättung (MSAA).
- **Leistung:** Pixeldichte auf 1,5 begrenzt, Bäume und Gras als Instanzen. Läuft auf einem normalen Laptop flüssig.
- **Bäume, Büsche, Felsen:** aus dem „Ultimate Nature Pack“ von Quaternius (CC0, frei nutzbar), in `public/modelle/natur`. Beim Rennrad ist Sommer (grün), beim Cycle Cross Herbst (orange, gelbe und rote Blätter, Laub am Boden, fallende Blätter). Umstellen in `src/config.js`: `jahreszeiten: { rennrad: 'sommer', cx: 'herbst' }`.
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

- 🎨 Mehr Aussehen: Hautfarbe, Frisur, Trikot-Muster, Sonnenbrille
- 🚲 Mehr am Rad: Laufräder, Sattel, Zeitfahrrad
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
