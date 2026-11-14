// Der Park im Winter: verschneite Hügel, ein zugefrorener See, eine Joggingrunde um den See (mit Anstiegen),
// große verschneite Tannen und eine Bank mit Blick auf den See.
// Schnee-Textur: Snow006 von ambientCG (CC0). Bäume aus dem Natur-Paket (nature.js).
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { mulberry32, smoothstep } from './noise.js';

// ✏️ Wo alles liegt (Meter). Die Bank schaut nach +z auf den See.
export const BANK = { x: 0, z: 7.4 };
export const SEE = { x: 0, z: 34, rx: 26, rz: 17 };
// Die Joggingrunde: eine Ellipse um den See (leicht geschlängelt)
export const RUNDE = { rx: 46, rz: 30 };
const WEG_BREIT = 1.7; // halbe Breite

// Punkt der Runde bei Winkel a (a = -π/2: vorne bei der Bank)
export function rundenPunkt(a) {
  const w = 1 + 0.06 * Math.sin(a * 3 + 0.7) + 0.04 * Math.sin(a * 5);
  return { x: SEE.x + Math.cos(a) * RUNDE.rx * w, z: SEE.z + Math.sin(a) * RUNDE.rz * w };
}

// Geländehöhe: Hügel rund um den See, flach am Ufer und bei der Bank
export function parkHoehe(x, z) {
  const dx = (x - SEE.x) / SEE.rx;
  const dz = (z - SEE.z) / SEE.rz;
  const d = Math.sqrt(dx * dx + dz * dz); // 1 = Ufer
  if (d < 1.08) {
    const t = Math.max(0, 1 - d / 1.08);
    return -1.3 * t * (2 - t) * 0.9;
  }
  const ramp = smoothstep(1.15, 1.9, d);
  const beiBank = smoothstep(5, 15, Math.hypot(x - BANK.x, z - BANK.z));
  const hug = 3.6 * Math.sin(x * 0.055 + 1.3) * Math.cos(z * 0.06 - 0.4) + 2.2 * Math.sin(x * 0.021 - z * 0.034 + 2) + 2.4;
  return Math.max(0, hug) * ramp * beiBank + Math.max(0, d - 2.4) * 6;
}

export function buildPark(roadWorld) {
  const scene = new THREE.Scene();
  const rand = mulberry32(42);
  const tl = new THREE.TextureLoader();
  const tex = (name, srgb, rep) => {
    const t = tl.load('texturen/schnee/' + name + '.jpg');
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rep, rep);
    t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };

  // ---------- Verschneite Hügel ----------
  const GROESSE = 420;
  const bodenGeo = new THREE.PlaneGeometry(GROESSE, GROESSE, 140, 140);
  bodenGeo.rotateX(-Math.PI / 2);
  const bp = bodenGeo.attributes.position;
  for (let i = 0; i < bp.count; i++) bp.setY(i, parkHoehe(bp.getX(i), bp.getZ(i)));
  bodenGeo.computeVertexNormals();
  const REP = GROESSE / 6; // ein Texturbild = 6 m
  const schneeMat = new THREE.MeshStandardMaterial({
    map: tex('farbe', true, REP),
    normalMap: tex('normal', false, REP),
    roughnessMap: tex('rauheit', false, REP),
    roughness: 1,
    color: '#ffffff',
  });
  schneeMat.normalScale.set(0.8, 0.8);
  const boden = new THREE.Mesh(bodenGeo, schneeMat);
  boden.receiveShadow = true;
  scene.add(boden);

  // ---------- Joggingrunde (festgetretener Schnee) ----------
  const N = 360;
  const pos = [];
  const idx = [];
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2;
    const p = rundenPunkt(a);
    const q = rundenPunkt(a + 0.001);
    const tx = q.x - p.x;
    const tz = q.z - p.z;
    const l = Math.hypot(tx, tz);
    const nx = -tz / l;
    const nz = tx / l;
    for (const s of [-1, 1]) {
      const x = p.x + nx * s * WEG_BREIT;
      const z = p.z + nz * s * WEG_BREIT;
      pos.push(x, parkHoehe(x, z) + 0.05, z);
    }
    if (i < N) idx.push(i * 2, i * 2 + 2, i * 2 + 1, i * 2 + 1, i * 2 + 2, i * 2 + 3);
  }
  const wegGeo = new THREE.BufferGeometry();
  wegGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  wegGeo.setIndex(idx);
  wegGeo.computeVertexNormals();
  const weg = new THREE.Mesh(
    wegGeo,
    new THREE.MeshStandardMaterial({ color: '#c4c9d1', roughness: 0.9, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 }),
  );
  weg.receiveShadow = true;
  scene.add(weg);
  // kurzer Weg von der Runde zur Bank
  const zurBank = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.6), weg.material);
  zurBank.rotation.x = -Math.PI / 2;
  zurBank.position.set(BANK.x, 0.05, BANK.z - 1.8);
  scene.add(zurBank);

  // ---------- Zugefrorener See ----------
  const eisGeo = new THREE.CircleGeometry(1, 72);
  eisGeo.rotateX(-Math.PI / 2);
  const eis = new THREE.Mesh(
    eisGeo,
    new THREE.MeshPhysicalMaterial({ color: '#cfe4f0', roughness: 0.12, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.3 }),
  );
  eis.scale.set(SEE.rx, 1, SEE.rz);
  eis.position.set(SEE.x, -0.55, SEE.z);
  eis.receiveShadow = true;
  scene.add(eis);
  // Schneeverwehungen auf dem Eis
  const wehe = new THREE.MeshStandardMaterial({ color: '#f4f7fb', roughness: 1 });
  for (let i = 0; i < 9; i++) {
    const w = new THREE.Mesh(new THREE.CircleGeometry(1, 20), wehe);
    w.rotation.x = -Math.PI / 2;
    const a = rand() * Math.PI * 2;
    const r = 0.25 + rand() * 0.6;
    w.scale.set(2 + rand() * 4, 1 + rand() * 2, 1);
    w.rotation.z = rand() * 3;
    w.position.set(SEE.x + Math.cos(a) * SEE.rx * r, -0.53, SEE.z + Math.sin(a) * SEE.rz * r);
    scene.add(w);
  }

  // ---------- Bank, Laternen, Mülleimer ----------
  const bank = parkbank();
  bank.position.set(BANK.x, 0, BANK.z);
  scene.add(bank);
  for (let k = 0; k < 10; k++) {
    const a = -Math.PI / 2 + 0.28 + (k / 10) * Math.PI * 2;
    const p = rundenPunkt(a);
    const l = laterne();
    const nx = p.x - SEE.x;
    const nz = p.z - SEE.z;
    const n = Math.hypot(nx, nz);
    const x = p.x + (nx / n) * (WEG_BREIT + 0.9);
    const z = p.z + (nz / n) * (WEG_BREIT + 0.9);
    l.position.set(x, parkHoehe(x, z), z);
    scene.add(l);
  }
  const eimer = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.75, 14), new THREE.MeshStandardMaterial({ color: '#2f4a33', roughness: 0.6, metalness: 0.4 }));
  eimer.position.set(BANK.x + 1.6, 0.375, BANK.z + 0.1);
  eimer.castShadow = true;
  scene.add(eimer);

  // ---------- Große verschneite Bäume ----------
  const natur = roadWorld.nature;
  const amWeg = (x, z, r) => {
    for (let i = 0; i < 120; i++) {
      const p = rundenPunkt((i / 120) * Math.PI * 2);
      if (Math.hypot(p.x - x, p.z - z) < WEG_BREIT + 1.2 + r) return true;
    }
    return false;
  };
  const frei = (x, z, r) => {
    const dx = (x - SEE.x) / (SEE.rx + 3 + r);
    const dz = (z - SEE.z) / (SEE.rz + 3 + r);
    if (dx * dx + dz * dz < 1) return false;
    if (Math.hypot(x - BANK.x, z - BANK.z) < 8 + r) return false;
    return !amWeg(x, z, r);
  };
  if (natur) {
    const mat = schneeBaumMaterial();
    const tannen = natur.trees.sommer.pine;
    const birken = natur.trees.sommer.birch;
    const proSorte = new Map();
    const _q = new THREE.Quaternion();
    const _y = new THREE.Vector3(0, 1, 0);
    const setz = (geo, x, z, s) => {
      if (!proSorte.has(geo)) proSorte.set(geo, []);
      proSorte.get(geo).push(new THREE.Matrix4().compose(new THREE.Vector3(x, parkHoehe(x, z) - 0.2, z), _q.setFromAxisAngle(_y, rand() * 6.28).clone(), new THREE.Vector3(s, s, s)));
    };
    // ✏️ große Tannen direkt an der Runde (innen und außen), damit man durch einen Wald joggt
    for (let k = 0; k < 70; k++) {
      const a = (k / 70) * Math.PI * 2 + rand() * 0.05;
      if (Math.abs(((a + Math.PI / 2 + Math.PI) % (Math.PI * 2)) - Math.PI) < 0.35) continue; // Blick von der Bank frei lassen
      const p = rundenPunkt(a);
      const nx = p.x - SEE.x;
      const nz = p.z - SEE.z;
      const n = Math.hypot(nx, nz);
      const seite = rand() < 0.65 ? 1 : -1;
      const ab = WEG_BREIT + 3 + rand() * 6;
      const x = p.x + (nx / n) * ab * seite;
      const z = p.z + (nz / n) * ab * seite;
      if (!frei(x, z, 1.5)) continue;
      setz(rand() < 0.85 ? tannen[Math.floor(rand() * 5)] : birken[Math.floor(rand() * 5)], x, z, 1.9 + rand() * 1.1);
    }
    // weiter draußen: dichter Winterwald
    let n = 0;
    for (let tries = 0; tries < 4000 && n < 220; tries++) {
      const a = rand() * Math.PI * 2;
      const r = 70 + rand() * 120;
      const x = SEE.x + Math.cos(a) * r * 1.2;
      const z = SEE.z + Math.sin(a) * r;
      if (!frei(x, z, 2)) continue;
      setz(tannen[Math.floor(rand() * 5)], x, z, 1.6 + rand() * 1.4);
      n++;
    }
    for (const [geo, liste] of proSorte) {
      const im = new THREE.InstancedMesh(geo, mat, liste.length);
      liste.forEach((m, k) => im.setMatrixAt(k, m));
      im.castShadow = true;
      im.receiveShadow = true;
      im.computeBoundingSphere();
      scene.add(im);
    }
  }

  // ---------- Schneeflocken ----------
  const FLOCKEN = 2500;
  const fp = new Float32Array(FLOCKEN * 3);
  for (let i = 0; i < FLOCKEN; i++) {
    fp[i * 3] = (rand() - 0.5) * 60;
    fp[i * 3 + 1] = rand() * 22;
    fp[i * 3 + 2] = (rand() - 0.5) * 60;
  }
  const flockenGeo = new THREE.BufferGeometry();
  flockenGeo.setAttribute('position', new THREE.BufferAttribute(fp, 3));
  const flocken = new THREE.Points(flockenGeo, new THREE.PointsMaterial({ color: '#ffffff', size: 0.07, transparent: true, opacity: 0.9, depthWrite: false }));
  flocken.frustumCulled = false;
  scene.add(flocken);

  // ---------- Winterhimmel und Licht ----------
  const sky = new Sky();
  sky.scale.setScalar(10000);
  sky.material = roadWorld.sky.material;
  scene.add(sky);
  scene.environment = roadWorld.scene.environment;
  scene.environmentIntensity = 0.45;
  scene.fog = new THREE.FogExp2(new THREE.Color('#d9e2ec'), 0.007);
  scene.add(new THREE.HemisphereLight('#c9dcf5', '#aab6c6', 0.9));
  const sun = new THREE.DirectionalLight('#fff0de', 2.0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = sc.bottom = -35;
  sc.right = sc.top = 35;
  sc.near = 1;
  sc.far = 220;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);
  const lightDir = new THREE.Vector3(-0.5, 0.6, -0.55).normalize();

  return {
    kind: 'park',
    scene,
    sky,
    sun,
    bank,
    cx: false,
    tt: false,
    length: 1,
    update(dt, focus) {
      sun.position.copy(focus).addScaledVector(lightDir, 120);
      sun.target.position.copy(focus);
      // Flocken fallen langsam und folgen dir
      for (let i = 0; i < FLOCKEN; i++) {
        let y = fp[i * 3 + 1] - dt * (0.9 + (i % 7) * 0.12);
        if (y < 0) y += 22;
        fp[i * 3 + 1] = y;
        fp[i * 3] += Math.sin(y * 0.7 + i) * dt * 0.25;
      }
      flockenGeo.attributes.position.needsUpdate = true;
      flocken.position.set(Math.round(focus.x / 60) * 60, parkHoehe(focus.x, focus.z) - 2, Math.round(focus.z / 60) * 60);
    },
    hoehe: parkHoehe,
    nearest() {
      return { found: false, s: 0, dist: 0 };
    },
  };
}

// Bäume mit Schnee: alles, was nach oben zeigt, wird weiß
function schneeBaumMaterial() {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vOben;')
      .replace('#include <defaultnormal_vertex>', '#include <defaultnormal_vertex>\nvOben = (vec4(transformedNormal, 0.0) * viewMatrix).y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vOben;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 0.99), smoothstep(-0.1, 0.5, vOben) * 0.85);');
  };
  mat.customProgramCacheKey = () => 'parkSchnee';
  return mat;
}

// Klassische Parkbank: Holzlatten auf schwarzem Eisengestell. Sitzhöhe 0,46 m, schaut nach +z.
function parkbank() {
  const g = new THREE.Group();
  const holz = new THREE.MeshStandardMaterial({ color: '#9a6a3f', roughness: 0.75 });
  const eisen = new THREE.MeshStandardMaterial({ color: '#1d1f22', roughness: 0.45, metalness: 0.6 });
  const BREIT = 1.8;
  const latte = (y, z, rx = 0) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(BREIT, 0.03, 0.085), holz);
    m.position.set(0, y, z);
    m.rotation.x = rx;
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
  };
  for (let k = 0; k < 4; k++) latte(0.46, 0.2 - k * 0.1);
  for (let k = 0; k < 3; k++) latte(0.62 + k * 0.12, -0.2 - k * 0.035, -0.28);
  for (const sx of [-1, 1]) {
    const x = sx * (BREIT / 2 - 0.12);
    const bein = (a, b, r = 0.022) => {
      const len = a.distanceTo(b);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 8), eisen);
      m.position.copy(a).add(b).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
      m.castShadow = true;
      g.add(m);
    };
    const V = (y, z) => new THREE.Vector3(x, y, z);
    bein(V(0, 0.22), V(0.44, 0.22));
    bein(V(0, -0.22), V(0.92, -0.32));
    bein(V(0.44, 0.24), V(0.44, -0.24));
    bein(V(0.44, 0.24), V(0.66, 0.2));
    bein(V(0.66, 0.24), V(0.66, -0.26));
  }
  return g;
}

function laterne() {
  const g = new THREE.Group();
  const eisen = new THREE.MeshStandardMaterial({ color: '#1d1f22', roughness: 0.45, metalness: 0.6 });
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 3.6, 10), eisen);
  mast.position.y = 1.8;
  mast.castShadow = true;
  g.add(mast);
  const kopf = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.4, 6), new THREE.MeshStandardMaterial({ color: '#fff3d0', emissive: '#ffd890', emissiveIntensity: 0.6 }));
  kopf.position.y = 3.75;
  g.add(kopf);
  const dach = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.25, 6), eisen);
  dach.position.y = 4.07;
  g.add(dach);
  const schnee = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.08, 6), new THREE.MeshStandardMaterial({ color: '#f4f7fb', roughness: 1 }));
  schnee.position.y = 4.2;
  g.add(schnee);
  return g;
}
