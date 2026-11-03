#!/bin/bash
# Doppelklick-Starter fuer The Grand Tour.
# Wechselt automatisch in den Ordner, in dem diese Datei liegt, installiert beim
# ersten Mal alles Noetige, startet das Spiel und oeffnet es in Chrome.
# Solange dieses Terminal-Fenster offen ist, laeuft das Spiel.
# Fenster schliessen (oder Ctrl+C) = Spiel beenden.

cd "$(dirname "$0")"
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
URL="http://localhost:5173"

echo "Starte The Grand Tour in: $(pwd)"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js fehlt. Bitte von https://nodejs.org (LTS) installieren und dann nochmal doppelklicken."
  read -p "Druecke Enter zum Beenden..."
  exit 1
fi

oeffne_spiel() {
  if [ -d "/Applications/Google Chrome.app" ]; then
    open -a "Google Chrome" "$URL"
  else
    open "$URL"
  fi
}

# Laeuft das Spiel schon (z. B. in einem anderen Fenster)? Dann nur den Browser oeffnen.
if curl -s -o /dev/null "$URL"; then
  echo "Das Spiel laeuft schon. Oeffne den Browser ..."
  oeffne_spiel
  sleep 2
  exit 0
fi

# Beim ersten Start (oder nach einem Update) die Pakete installieren
if [ ! -d node_modules ] || [ package.json -nt node_modules ]; then
  echo "Installiere die Spiel-Bausteine (nur beim ersten Mal, dauert etwas) ..."
  npm install || { read -p "Installation fehlgeschlagen. Druecke Enter zum Beenden..."; exit 1; }
  touch node_modules
  echo ""
fi

# Browser oeffnen, sobald das Spiel bereit ist
(
  for i in $(seq 1 60); do
    if curl -s -o /dev/null "$URL"; then
      oeffne_spiel
      exit 0
    fi
    sleep 0.5
  done
) &

echo "Das Spiel startet. Viel Spass, Paul!"
echo "Zum Beenden einfach dieses Fenster schliessen."
echo ""
npm run dev
