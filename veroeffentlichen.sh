#!/bin/bash
# Baut das Spiel und stellt es auf GitHub Pages online (Zweig gh-pages).
# Aufruf: ./veroeffentlichen.sh
set -e
cd "$(dirname "$0")"
npm run build
TMP=$(mktemp -d)
cp -R dist/. "$TMP"
touch "$TMP/.nojekyll"
cd "$TMP"
git init -q -b gh-pages
git add -A
git commit -q -m "Spiel online gestellt"
git push -f -q "$(git -C "$OLDPWD" remote get-url origin)" gh-pages
rm -rf "$TMP"
echo "Online: https://pardigol.github.io/the-grand-tour/ (kann 1-2 Minuten dauern)"
