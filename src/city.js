// Die Stadt: eine Straße mit Kreuzung, Häuserreihen links und rechts, ein hohes Haus mit Penthouse.
// Modelle: "Downtown City MegaKit" von Quaternius (CC0), liegt in public/modelle/stadt.
// Wird nur einmal gebaut (beim ersten Besuch) und dann wiederverwendet.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Sky } from 'three/addons/objects/Sky.js';

const BASE = 'modelle/stadt/';
const TEILE = [
  'Building_Large_2',
  'Building_Medium_2_001',
  'Building_Small_1',
  'Street_4Lane',
  'Street_4WayIntersection',
  'Prop_Bollard',
  'Prop_Planter_Single',
  'Prop_ManholeCover',
];

// ✏️ Das hohe Haus, in dem Jonas wohnt (Penthouse ganz oben)
export const PENTHOUSE = { x: 16, z: -9.4 };
const STRASSE_HALB = 9; // halbe Straßenbreite inkl. Gehweg (Street_4Lane ist 18 m breit)

async function laden() {
  const loader = new GLTFLoader();
  const teile = await Promise.all(TEILE.map((n) => loader.loadAsync(BASE + n + '.gltf')));
  const M = {};
  TEILE.forEach((n, i) => {
    const s = teile[i].scene;
    s.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = !n.startsWith('Street');
      if (n.startsWith('Street')) o.userData.boden = true;
      o.receiveShadow = true;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (m.map) m.map.anisotropy = 8;
        // Die Farben an den Ecken sind nur eine Maske für Abnutzung (für andere Spiele-Engines) – nicht anzeigen
        m.vertexColors = false;
        // Fenster: etwas spiegelnd, damit der Himmel drin glänzt
        if (m.name === 'MI_Glass') {
          m.roughness = 0.08;
          m.metalness = 0.6;
        }
      }
    });
    M[n] = s;
  });
  return M;
}

export async function buildCity(roadWorld) {
  const M = await laden();
  const scene = new THREE.Scene();
  const setze = (name, x, z, rotY = 0, y = 0) => {
    const o = M[name].clone();
    o.position.set(x, y, z);
    o.rotation.y = rotY;
    scene.add(o);
    return o;
  };

  // ---------- Straße entlang x, Kreuzung bei x = 0 ----------
  const KREUZ = 12.33;
  setze('Street_4WayIntersection', 0, 0);
  for (let x = KREUZ + 3; x < 130; x += 6) {
    setze('Street_4Lane', x, 0);
    setze('Street_4Lane', -x, 0);
  }
  // Querstraße (entlang z)
  for (let z = KREUZ + 3; z < 90; z += 6) {
    setze('Street_4Lane', 0, z, Math.PI / 2);
    setze('Street_4Lane', 0, -z, Math.PI / 2);
  }
  // Boden zwischen den Blöcken
  const boden = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.MeshStandardMaterial({ color: '#7d7a74', roughness: 0.95 }),
  );
  boden.rotation.x = -Math.PI / 2;
  boden.position.y = -0.2;
  boden.receiveShadow = true;
  boden.userData.boden = true;
  scene.add(boden);

  // ---------- Häuserreihen ----------
  // Breite der Häuser entlang der Front (aus den Modellen gemessen)
  const HAUS = {
    Building_Large_2: { links: -9.32, rechts: 11.32 },
    Building_Medium_2_001: { links: -7.53, rechts: 7.53 },
    Building_Small_1: { links: -7.23, rechts: 5.23 },
  };
  const folge = ['Building_Medium_2_001', 'Building_Small_1', 'Building_Medium_2_001', 'Building_Large_2', 'Building_Small_1'];
  // eine Reihe an der Straße: Front zeigt zur Straße
  const reihe = (seite, von, bis, start = 0, ausser = null) => {
    let x = von;
    let i = start;
    while (x < bis) {
      const n = folge[i++ % folge.length];
      const h = HAUS[n];
      const w = h.rechts - h.links;
      if (!ausser || x + w < ausser[0] || x > ausser[1]) {
        // Nordseite (z < 0): Front zeigt nach +z; Südseite gedreht
        if (seite < 0) setze(n, x - h.links, -STRASSE_HALB - 0.4);
        else setze(n, x + h.rechts, STRASSE_HALB + 0.4, Math.PI);
      }
      x += w + 0.2;
    }
  };
  // Norden, östlich der Kreuzung: hier steht das Penthouse-Haus
  const pent = setze('Building_Large_2', PENTHOUSE.x, PENTHOUSE.z);
  reihe(-1, PENTHOUSE.x + 11.6, 130, 1);
  reihe(-1, -130, -KREUZ - 0.5, 2);
  reihe(1, KREUZ + 0.5, 130, 0);
  reihe(1, -130, -KREUZ - 0.5, 3);
  // zweite Reihe dahinter (nur für die Skyline)
  for (const z of [-48, 48]) {
    let x = -130;
    let i = z > 0 ? 2 : 4;
    while (x < 130) {
      const n = folge[i++ % folge.length];
      const h = HAUS[n];
      if (Math.abs(x) > 14) setze(n, x - h.links, z, z > 0 ? Math.PI : 0, 0);
      x += h.rechts - h.links + 1;
    }
  }

  // ---------- Kleinkram am Gehweg ----------
  for (let x = -60; x <= 70; x += 7) {
    if (Math.abs(x) < 16) continue;
    setze('Prop_Bollard', x, -7.6);
    setze('Prop_Bollard', x + 3.5, 7.6);
  }
  for (const x of [-30, -44, 34, 52]) setze('Prop_Planter_Single', x, x > 0 ? 7.2 : -7.2);
  setze('Prop_ManholeCover', -6, 2.5);
  setze('Prop_ManholeCover', 28, -3);

  // ---------- Penthouse: die Fenster im obersten Stock leuchten warm, wenn Jonas oben ankommt ----------
  const glow = { value: 0 };
  pent.traverse((o) => {
    if (!o.isMesh || o.material.name !== 'MI_Glass') return;
    const m = o.material.clone();
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uGlow = glow;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vHoch;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvHoch = position.y;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vHoch;\nuniform float uGlow;')
        .replace(
          '#include <dithering_fragment>',
          '#include <dithering_fragment>\nif (vHoch > 25.2) { gl_FragColor.rgb += vec3(1.0, 0.72, 0.38) * uGlow * 1.5; gl_FragColor.a = max(gl_FragColor.a, uGlow * 0.95); }',
        );
    };
    o.material = m;
  });
  const licht = {
    set intensity(k) {
      glow.value = Math.min(1, k / 60);
      this._k = k;
    },
    get intensity() {
      return this._k || 0;
    },
  };

  // ---------- Himmel und Licht (wie auf der Landstraße) ----------
  const sky = new Sky();
  sky.scale.setScalar(10000);
  sky.material = roadWorld.sky.material;
  scene.add(sky);
  scene.environment = roadWorld.scene.environment;
  scene.environmentIntensity = 0.6;
  scene.fog = new THREE.FogExp2(new THREE.Color('#c9b3a2'), 0.004);
  const hemi = new THREE.HemisphereLight('#b9cdf5', '#5b4634', 1.0);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffd4a8', 3.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -40;
  sc.right = sc.top = 40;
  sc.near = 1;
  sc.far = 220;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  const lightDir = new THREE.Vector3(-0.45, 0.62, 0.64).normalize();

  scene.updateMatrixWorld(true);
  const bodenTeile = [];
  scene.traverse((o) => o.isMesh && o.userData.boden && bodenTeile.push(o));
  const ray = new THREE.Raycaster();
  const _o = new THREE.Vector3();
  const _down = new THREE.Vector3(0, -1, 0);

  return {
    kind: 'stadt',
    scene,
    sky,
    sun,
    pent,
    penthouseLicht: licht,
    cx: false,
    tt: false,
    length: 1,
    update(dt, focus) {
      sun.position.copy(focus).addScaledVector(lightDir, 140);
      sun.target.position.copy(focus);
    },
    // Höhe der Straße bzw. des Gehwegs an (x, z)
    hoehe(x, z) {
      ray.set(_o.set(x, 5, z), _down);
      const hit = ray.intersectObjects(bodenTeile, false)[0];
      return hit ? hit.point.y : 0;
    },
    nearest() {
      return { found: false, s: 0, dist: 0 };
    },
  };
}
