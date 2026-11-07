#!/bin/bash
# Baut das Spiel und stellt es auf GitHub Pages online (Zweig gh-pages).
# Aufruf: ./veroeffentlichen.sh
# Hängt einen neuen Stand an gh-pages an (ohne Überschreiben/Force-Push),
# damit es auch aus der Claude-Cloud funktioniert.
set -e
cd "$(dirname "$0")"
npm run build
ORIGIN=$(git remote get-url origin)
TMP=$(mktemp -d)
git fetch -q origin gh-pages
git worktree add -q --detach "$TMP" origin/gh-pages
# alten Inhalt durch den neuen Build ersetzen
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$TMP"
touch "$TMP/.nojekyll"
(
  cd "$TMP"
  git add -A
  if git diff --cached --quiet; then
    echo "Online-Version ist schon aktuell."
  else
    git -c user.name="$(git config user.name || echo Claude)" -c user.email="$(git config user.email || echo noreply@anthropic.com)" \
      commit -q -m "Spiel online gestellt"
    git push -q "$ORIGIN" HEAD:refs/heads/gh-pages
  fi
)
git worktree remove --force "$TMP"
echo "Online: https://pardigol.github.io/the-grand-tour/ (kann 1-2 Minuten dauern)"
