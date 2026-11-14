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
  // einzelnes Modell (nur das Penthouse-Haus, weil es eigene Fenster bekommt)
  const einzeln = (name, x, z, rotY = 0) => {
    const o = M[name].clone();
    o.position.set(x, 0, z);
    o.rotation.y = rotY;
    scene.add(o);
    return o;
  };
  // alles andere wird gesammelt und am Ende gemeinsam gezeichnet (InstancedMesh: schnell auch auf dem iPad)
  const plaetze = new Map();
  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _y = new THREE.Vector3(0, 1, 0);
  const _one = new THREE.Vector3(1, 1, 1);
  const setze = (name, x, z, rotY = 0) => {
    if (!plaetze.has(name)) plaetze.set(name, []);
    plaetze.get(name).push(new THREE.Matrix4().compose(new THREE.Vector3(x, 0, z), _q.setFromAxisAngle(_y, rotY).clone(), _one));
  };

  // ---------- Straßenraster ----------
  // Straßen entlang x bei z = 0 (Hauptstraße) und z = ±QZ, entlang z bei x = 0 und x = ±QX
  const KREUZ = 12.33;
  const QZ = 78;
  const QX = 90;
  const WEIT = 190;
  const XS = [-QX, 0, QX];
  const ZS = [-QZ, 0, QZ];
  for (const x of XS) for (const z of ZS) setze('Street_4WayIntersection', x, z);
  for (const z of ZS)
    for (let x = -WEIT; x <= WEIT; x += 6) if (!liste(x)) setze('Street_4Lane', x, z);
  function liste(x) {
    return XS.some((k) => Math.abs(x - k) < KREUZ + 2.9);
  }
  for (const x of XS)
    for (let z = -WEIT; z <= WEIT; z += 6) if (!ZS.some((k) => Math.abs(z - k) < KREUZ + 2.9)) setze('Street_4Lane', x, z, Math.PI / 2);
  // Boden zwischen den Blöcken
  const boden = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.MeshStandardMaterial({ color: '#7d7a74', roughness: 0.95 }));
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
  const folge = ['Building_Medium_2_001', 'Building_Small_1', 'Building_Medium_2_001', 'Building_Large_2', 'Building_Small_1', 'Building_Large_2'];
  let zaehler = 0;
  // Reihe an einer Straße entlang x (bei z = zs): seite -1 = Nordseite (Front nach +z), +1 = Südseite
  const reiheX = (zs, seite, von, bis) => {
    let x = von;
    while (true) {
      const n = folge[zaehler++ % folge.length];
      const h = HAUS[n];
      const w = h.rechts - h.links;
      if (x + w > bis) break;
      if (seite < 0) setze(n, x - h.links, zs - STRASSE_HALB - 0.4);
      else setze(n, x + h.rechts, zs + STRASSE_HALB + 0.4, Math.PI);
      x += w + 0.2;
    }
  };
  // Reihe an einer Straße entlang z (bei x = xs): seite -1 = Westseite (Front nach +x), +1 = Ostseite
  const reiheZ = (xs, seite, von, bis) => {
    let z = von;
    while (true) {
      const n = folge[zaehler++ % folge.length];
      const h = HAUS[n];
      const w = h.rechts - h.links;
      if (z + w > bis) break;
      if (seite < 0) setze(n, xs - STRASSE_HALB - 0.4, z + h.rechts, Math.PI / 2);
      else setze(n, xs + STRASSE_HALB + 0.4, z - h.links, -Math.PI / 2);
      z += w + 0.2;
    }
  };
  // Abschnitte zwischen den Kreuzungen
  const abschnitte = (kreuz) => {
    const out = [];
    const k = [-WEIT - 20, ...kreuz, WEIT + 20];
    for (let i = 0; i < k.length - 1; i++) out.push([k[i] + KREUZ + 0.5, k[i + 1] - KREUZ - 0.5]);
    return out;
  };
  const pent = einzeln('Building_Large_2', PENTHOUSE.x, PENTHOUSE.z);
  for (const zs of ZS)
    for (const [a, b] of abschnitte(XS))
      for (const seite of [-1, 1]) {
        // hier steht das Penthouse-Haus (Hauptstraße, Nordseite, östlich der Kreuzung)
        if (zs === 0 && seite < 0 && a > 0 && a < QX) {
          reiheX(zs, seite, PENTHOUSE.x + 11.6, b);
          continue;
        }
        reiheX(zs, seite, a, b);
      }
  // an den Querstraßen nur zwischen den Häuserreihen der Längsstraßen (sonst stehen Ecken ineinander)
  const TIEFE = STRASSE_HALB + 0.4 + 16.5;
  for (const xs of XS)
    for (let i = 0; i < ZS.length - 1; i++)
      for (const seite of [-1, 1]) reiheZ(xs, seite, ZS[i] + TIEFE, ZS[i + 1] - TIEFE);

  // ---------- Hausnummer: Parker Street 7 (Jonas' Hochhaus) ----------
  {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 160;
    const c = cv.getContext('2d');
    c.fillStyle = '#1d4f8f';
    c.fillRect(0, 0, 512, 160);
    c.strokeStyle = '#ffffff';
    c.lineWidth = 8;
    c.strokeRect(10, 10, 492, 140);
    c.fillStyle = '#ffffff';
    c.font = '700 64px sans-serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('Parker Street 7', 256, 84);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    const schild = new THREE.Group();
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 10), new THREE.MeshStandardMaterial({ color: '#4a4f57', metalness: 0.7, roughness: 0.4 }));
    mast.position.y = 1.3;
    const tafel = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.47, 0.03), [
      new THREE.MeshStandardMaterial({ color: '#1d4f8f' }),
      new THREE.MeshStandardMaterial({ color: '#1d4f8f' }),
      new THREE.MeshStandardMaterial({ color: '#1d4f8f' }),
      new THREE.MeshStandardMaterial({ color: '#1d4f8f' }),
      new THREE.MeshStandardMaterial({ map: t }),
      new THREE.MeshStandardMaterial({ map: t }),
    ]);
    tafel.position.y = 2.45;
    schild.add(mast, tafel);
    schild.traverse((o) => o.isMesh && (o.castShadow = true));
    schild.position.set(PENTHOUSE.x + 4.2, 0.15, -7.4);
    scene.add(schild);
  }

  // ---------- Kleinkram am Gehweg (keine Poller mehr) ----------
  for (const x of [-30, -44, 34, 52, -110, 120]) setze('Prop_Planter_Single', x, x > 0 ? 7.2 : -7.2);
  setze('Prop_ManholeCover', -6, 2.5);
  setze('Prop_ManholeCover', 28, -3);

  // gesammelte Modelle gemeinsam zeichnen
  for (const [name, liste] of plaetze) {
    const vorlage = M[name];
    vorlage.updateMatrixWorld(true);
    vorlage.traverse((o) => {
      if (!o.isMesh) return;
      const im = new THREE.InstancedMesh(o.geometry, o.material, liste.length);
      liste.forEach((m, k) => im.setMatrixAt(k, _m.multiplyMatrices(m, o.matrixWorld)));
      im.instanceMatrix.needsUpdate = true;
      im.castShadow = o.castShadow;
      im.receiveShadow = o.receiveShadow;
      im.userData.boden = o.userData.boden;
      im.computeBoundingSphere();
      scene.add(im);
    });
  }

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
