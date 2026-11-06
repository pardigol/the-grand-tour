#!/bin/bash
# Zeigt Pauls Wünsche vom Wunschzettel (die letzten 12 Stunden liegen bei ntfy.sh bereit)
# und hängt neue an WUENSCHE.md an, damit nichts verloren geht.
cd "$(dirname "$0")"
KANAL=$(grep -o "grandtour-wuensche-[a-z0-9]*" src/config.js | head -1)
curl -s "https://ntfy.sh/$KANAL/json?poll=1&since=all" | python3 -c '
import sys, json, datetime, os
f = "WUENSCHE.md"
old = open(f).read() if os.path.exists(f) else "# Wünsche vom Wunschzettel\n\n"
new = []
for line in sys.stdin:
    try: m = json.loads(line)
    except Exception: continue
    if m.get("event") != "message": continue
    t = datetime.datetime.fromtimestamp(m["time"]).strftime("%d.%m.%Y %H:%M")
    entry = "- [ ] %s · %s: %s" % (t, m.get("title", "Wunsch"), m.get("message", "").replace("\n", " "))
    if m["id"] not in old:
        new.append(entry + " <!-- " + m["id"] + " -->")
    print(entry)
if new:
    open(f, "w").write(old + "\n".join(new) + "\n")
print("\n%d neue Wünsche in WUENSCHE.md gespeichert." % len(new))
'
