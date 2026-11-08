// 1. STARTBILDSCHIRM – filmische Kamerafahrt bei Sonnenaufgang
import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { el, esc, rideNpc, btn, noStart } from './common.js';
import { CONTROLS, applyControl } from './control.js';
import { openWishes, refreshWishStatus, unseenDone, hasOpenWishes } from '../wishes.js';

export function createTitleScene(app) {
  let root;
  let t = 0;
  let wishOpen = false;
  let wishTimer = null;

  // Kleiner Hinweis am Knopf: Wunsch in Arbeit / Wunsch umgesetzt
  function updateWishBadge() {
    const b = root?.querySelector('.wish-badge');
    if (!b) return;
    const n = unseenDone();
    b.textContent = n ? `✨ ${n === 1 ? 'Wunsch erledigt!' : `${n} Wünsche erledigt!`}` : hasOpenWishes() ? '🛠️ in Arbeit' : '';
    b.classList.toggle('show', !!b.textContent);
    b.classList.toggle('done', n > 0);
  }
  async function watchWishes() {
    clearTimeout(wishTimer);
    if (!root) return;
    if (!wishOpen && hasOpenWishes()) {
      const fertig = await refreshWishStatus();
      if (fertig.length) app.audio.success();
    }
    updateWishBadge();
    wishTimer = setTimeout(watchWishes, 20000);
  }
  const camPos = new THREE.Vector3();
  const look = new THREE.Vector3();

  function openWish() {
    if (wishOpen) return;
    wishOpen = true;
    app.audio.select();
    openWishes(app, () => {
      // kurz warten, damit der Schließen-Klick nicht das Spiel startet
      setTimeout(() => (wishOpen = false), 250);
      updateWishBadge();
    });
  }

  return {
    enter() {
      t = 0;
      root = el(`
        <div class="screen title-screen">
          <div class="letterbox top"></div><div class="letterbox bottom"></div>
          <div class="title-wrap">
            <div class="title-kicker">${esc(CONFIG.subtitle)}</div>
            <h1 class="game-title" data-text="${esc(CONFIG.gameName)}">${esc(CONFIG.gameName)}</h1>
            <div class="ornament"><span></span><i></i><span></span></div>
            <div class="press-start">${esc(CONFIG.startPrompt)}</div>
          </div>
          <div class="title-controls" role="group" aria-label="Womit spielst du?">
            <span class="title-controls-label">Ich spiele mit</span>
            ${CONTROLS.map((c) => `<button class="title-control" data-c="${c.id}"><span>${c.icon}</span>${esc(c.name)}</button>`).join('')}
          </div>
          <button class="wish-button">${btn('Y')}<span>🎁 Wunschzettel</span><b class="wish-badge"></b></button>
          <div class="sparkles">${Array.from({ length: 24 }, (_, i) => `<b style="--i:${i};--x:${(i * 37) % 100};--d:${3 + (i % 5)}s"></b>`).join('')}</div>
        </div>`);
      app.ui.append(root);
      app.titleRoot = root;
      const wb = root.querySelector('.wish-button');
      // Klick soll nicht gleichzeitig das Spiel starten
      noStart(wb);
      wb.addEventListener('click', () => openWish());
      // Steuerung gleich auf der ersten Seite wählen (Controller, Tastatur, iPad)
      const tc = root.querySelector('.title-controls');
      noStart(tc);
      const markControl = () => {
        tc.querySelectorAll('.title-control').forEach((b) => b.classList.toggle('active', b.dataset.c === app.controlChosen));
        // Auf dem iPad gibt es keine Taste: passenden Hinweis zeigen
        root.querySelector('.press-start').textContent = app.control === 'touch' ? 'Zum Starten antippen' : CONFIG.startPrompt;
      };
      tc.querySelectorAll('.title-control').forEach((b) =>
        b.addEventListener('click', () => {
          applyControl(app, b.dataset.c);
          app.controlChosen = b.dataset.c;
          app.audio.unlock();
          app.audio.select();
          markControl();
        }),
      );
      markControl();
      watchWishes();
      app.fx.uFade.value = 1;
      app.fx.uBlur.value = 0;
      app.fx.uLines.value = 0;
      app.npc.s = app.world.length - 150;
      app.npc.speed = 6;
      app.npc.lateral = app.world.cx ? 0.5 : 1.5;
      app.npc.pedal = true;
      const tr = CONFIG.titleRider;
      app.bike.setPlate(tr.number, tr.name);
      app.bike.applyLook(CONFIG.titleRider);
      app.bike.setTires(app.mode);
      app.audio.setWind(0);
      app.audio.setMusicLevel(1);
      app.audio.startMusic();
    },

    update(dt) {
      t += dt;
      app.fx.uFade.value = Math.max(0, 1 - t / 2.5);
      const p = rideNpc(app, dt);

      // Kamera kreist langsam vom Vorderrad zur Seite
      const phi = 0.55 + t * 0.03 + Math.sin(t * 0.05) * 0.2;
      const dist = 5.0 - Math.sin(t * 0.07) * 1.0;
      // links vom Fahrer, damit die Kamera nie durch Leitpfosten fährt
      const sx = p.tz;
      const sz = -p.tx;
      const fwd = Math.cos(phi) * dist;
      const side = Math.sin(phi) * dist;
      camPos.set(p.x + p.tx * fwd + sx * side, 0, p.z + p.tz * fwd + sz * side);
      camPos.y = Math.max(p.h + 0.9 + Math.sin(t * 0.11) * 0.35, app.world.terrainHeight(camPos.x, camPos.z) + 0.6);
      // leichtes "Handkamera"-Wackeln
      camPos.x += Math.sin(t * 0.7) * 0.05;
      camPos.y += Math.sin(t * 0.9 + 1) * 0.03;
      app.camera.position.copy(camPos);
      look.set(p.x, p.h + 0.95, p.z);
      app.camera.lookAt(look);
      app.camera.fov = 42;
      app.camera.updateProjectionMatrix();

      if (wishOpen) return;
      if (t > 0.5 && app.input.pressed('y')) {
        openWish();
        return;
      }
      if (t > 0.5 && app.input.pressed('any')) {
        app.audio.unlock();
        app.audio.startMusic();
        app.go('transition');
      }
    },

    exit() {
      clearTimeout(wishTimer);
      // Der Übergang blendet den Titel aus; danach wird er sicher entfernt
      const r = root;
      setTimeout(() => r.remove(), 700);
    },
  };
}
