// Einstiegspunkt: Renderer, Effekte, Spielschleife und Wechsel zwischen den Bildschirmen.
import './style.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/800.css';
import '@fontsource/barlow-condensed/500.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/barlow-condensed/800.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CONFIG } from './config.js';
import { World } from './world.js';
import { Bike } from './bike.js';
import { Input } from './input.js';
import { AudioEngine } from './audio.js';
import { FxShader } from './fx.js';
import { createTitleScene } from './scenes/title.js';
import { createTransitionScene } from './scenes/transition.js';
import { createMenuScene } from './scenes/menu.js';
import { createModeScene } from './scenes/mode.js';
import { createCreatorScene } from './scenes/creator.js';
import { createRideScene } from './scenes/ride.js';

document.title = CONFIG.gameName;
const rootStyle = document.documentElement.style;
rootStyle.setProperty('--gold', CONFIG.colors.gold);
rootStyle.setProperty('--accent', CONFIG.colors.accent);

// Kurz warten, damit der Ladebildschirm sichtbar wird (klappt auch in Hintergrund-Tabs)
const nextFrame = () => new Promise((r) => setTimeout(r, 30));

async function boot() {
  const ui = document.getElementById('ui');
  const loading = document.getElementById('loading');

  // Schriften laden, damit die Startnummern richtig aussehen
  await Promise.all([
    document.fonts.load('800 64px "Barlow Condensed"'),
    document.fonts.load('700 64px "Barlow Condensed"'),
    document.fonts.load('600 64px "Cinzel"'),
  ]).catch(() => {});
  await nextFrame();
  await nextFrame();

  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = CONFIG.exposure;
  document.getElementById('game').appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 6000);
  const world = new World(renderer);
  const bike = new Bike();
  world.scene.add(bike.root);

  // Post-Processing: Bloom (Leuchten) + eigener Effekt (Unschärfe, Linien, Vignette)
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  const renderPass = new RenderPass(world.scene, camera);
  composer.addPass(renderPass);
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), 0.5, 0.55, 0.92);
  composer.addPass(bloom);
  const fxPass = new ShaderPass(FxShader);
  composer.addPass(fxPass);
  composer.addPass(new OutputPass());

  const app = {
    renderer,
    camera,
    world,
    bike,
    composer,
    ui,
    input: new Input(),
    audio: new AudioEngine(),
    fx: fxPass.uniforms,
    focus: new THREE.Vector3(),
    npc: { s: 0, speed: 6, lateral: 1.5, pedal: true },
    mode: 'road', // 'road' = Rennrad, 'cx' = Cycle Cross
    worlds: { road: world },
    // Zur Welt des Modus wechseln (Landstraße oder Waldweg). Der Wald wird erst beim ersten Mal gebaut.
    useWorld(kind) {
      if (!this.worlds[kind]) this.worlds[kind] = new World(renderer, kind);
      const w = this.worlds[kind];
      if (w === this.world) return;
      this.world.scene.remove(this.bike.root);
      w.scene.add(this.bike.root);
      this.world = w;
      renderPass.scene = w.scene;
      this.npc.s = w.length * 0.1;
      // Auf dem schmalen Waldweg fährt der Vorführ-Fahrer weiter in der Mitte
      this.npc.lateral = w.cx ? 0.5 : 1.5;
    },
    time: 0,
    scenes: {},
    current: null,
    currentName: '',
    go(name, params) {
      this.current?.exit();
      this.currentName = name;
      this.current = this.scenes[name];
      this.current.enter(params || {});
    },
  };
  app.scenes = {
    title: createTitleScene(app),
    transition: createTransitionScene(app),
    mode: createModeScene(app),
    menu: createMenuScene(app),
    creator: createCreatorScene(app),
    ride: createRideScene(app),
  };
  window.__game = app; // praktisch zum Ausprobieren in der Browser-Konsole

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    fxPass.uniforms.uAspect.value = w / h;
  }
  window.addEventListener('resize', resize);
  resize();

  // Ton aktivieren, sobald der Spieler etwas drückt; M = Ton an/aus
  window.addEventListener('keydown', (e) => {
    app.audio.unlock();
    if (e.code === 'KeyM' && app.currentName !== 'creator') app.audio.toggleMute();
  });
  window.addEventListener('pointerdown', () => app.audio.unlock());

  app.go('title');
  // Einmal rendern, bevor der Ladebildschirm verschwindet
  if (window.innerWidth && window.innerHeight) composer.render(0);
  loading.classList.add('done');
  setTimeout(() => loading.remove(), 900);

  let last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    app.time += dt;
    app.input.update(dt);
    if (app.input.pressed('any')) {
      app.audio.unlock();
      app.audio.startMusic();
    }
    app.current.update(dt);
    app.world.update(dt, app.focus, camera, app.time);
    fxPass.uniforms.uTime.value = app.time;
    // Nicht rendern, solange das Fenster keine Größe hat (z. B. minimiert)
    if (window.innerWidth && window.innerHeight) composer.render(dt);
  }
  requestAnimationFrame(frame);
}

boot();
