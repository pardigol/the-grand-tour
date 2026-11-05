// Die 3D-Welt: Himmel bei Sonnenaufgang, Hügel, Rundstrecke, Bäume, Gras und Licht.
// Alles wird prozedural im Code erzeugt – es werden keine Dateien geladen.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeNoise2D, mulberry32, smoothstep, lerp, clamp } from './noise.js';
import { CONFIG } from './config.js';

export const ROAD_HALF = 3.6;
export const SHOULDER_HALF = 5.0;
const WORLD_SIZE = 1800;
const TERRAIN_SEG = 320;
const CELL = 20;

function canvasTex(w, h, draw, { repeat = null, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
  }
  t.anisotropy = 8;
  return t;
}

function speckle(ctx, w, h, rand, base, spread, count, size = 1) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const v = Math.floor(rand() * spread);
    ctx.fillStyle = `rgba(${v},${v},${v},${0.08 + rand() * 0.18})`;
    ctx.fillRect(rand() * w, rand() * h, size + rand() * size, size + rand() * size);
  }
}

export class World {
  constructor(renderer) {
    this.scene = new THREE.Scene();
    this.rand = mulberry32(1337);
    this.n1 = makeNoise2D(11);
    this.n2 = makeNoise2D(23);
    this.n3 = makeNoise2D(37);
    this._nr = { found: false, dist: 0, i: 0, f: 0, h: 0, s: 0, lateral: 0 };
    this.focus = new THREE.Vector3();

    this.setupLakes();
    this.buildTrack();
    this.buildSky(renderer);
    this.buildLights();
    this.buildTerrain();
    this.buildLakes();
    this.buildRoad();
    this.buildVegetation();
    this.buildProps();
    this.buildClouds();
    this.buildMotes();
  }

  // ---------- Höhen ----------
  fbm(x, z) {
    let a = 1;
    let f = 1;
    let s = 0;
    let n = 0;
    for (let o = 0; o < 4; o++) {
      s += a * this.n1(x * f, z * f);
      n += a;
      a *= 0.5;
      f *= 2.03;
    }
    return s / n;
  }

  // ---------- Seen ----------
  setupLakes() {
    // Positionen so gewählt, dass die Seen mindestens 50 m von der Straße entfernt sind
    this.lakes = [
      { x: -40, z: -30, r: 120 },
      { x: 180, z: 140, r: 60 },
      { x: -200, z: 170, r: 60 },
      { x: -560, z: 0, r: 70 },
    ];
    for (const l of this.lakes) {
      // Wasserspiegel knapp unter dem tiefsten Punkt des Ufers, damit nichts überläuft
      let lvl = Infinity;
      for (let k = 0; k < 64; k++) {
        const a = (k / 64) * Math.PI * 2;
        const R = this.lakeRadius(l, a) * 1.3;
        lvl = Math.min(lvl, this.rawHeight(l.x + Math.cos(a) * R, l.z + Math.sin(a) * R));
      }
      l.level = lvl - 0.4;
    }
  }

  // Unregelmäßiges Ufer: Radius schwankt mit dem Winkel
  lakeRadius(l, a) {
    return l.r * (1 + 0.22 * this.n3(Math.cos(a) * 1.2 + l.x * 0.013, Math.sin(a) * 1.2 + l.z * 0.013));
  }

  // Liegt der Punkt in einem See (inklusive Ufer)? Gibt den See zurück oder null.
  lakeAt(x, z, margin = 0) {
    for (const l of this.lakes) {
      const dx = x - l.x;
      const dz = z - l.z;
      const d = Math.hypot(dx, dz);
      if (d > l.r * 1.6 + margin) continue;
      if (d < this.lakeRadius(l, Math.atan2(dz, dx)) * 1.3 + margin) return l;
    }
    return null;
  }

  baseHeight(x, z) {
    let h = this.rawHeight(x, z);
    for (const l of this.lakes) {
      const dx = x - l.x;
      const dz = z - l.z;
      const d = Math.hypot(dx, dz);
      if (d > l.r * 1.6) continue;
      const R = this.lakeRadius(l, Math.atan2(dz, dx)) * 1.3;
      if (d >= R) continue;
      const bowl = l.level - 4.5 * (1 - (d / R) * (d / R));
      h = lerp(bowl, h, smoothstep(R * 0.58, R, d));
    }
    return h;
  }

  rawHeight(x, z) {
    const r = Math.hypot(x, z);
    let h = this.fbm(x * 0.0035, z * 0.0035) * 16 + this.n2(x * 0.02, z * 0.02) * 1.2;
    const m = smoothstep(660, 880, r);
    if (m > 0) {
      const ridge = 1 - Math.abs(this.fbm(x * 0.0032 + 7, z * 0.0032 - 3));
      h += m * (35 + ridge * ridge * 120);
    }
    return h;
  }

  // ---------- Strecke ----------
  buildTrack() {
    const pts = [];
    const K = 16;
    for (let k = 0; k < K; k++) {
      const a = (k / K) * Math.PI * 2;
      const r = 360 + 80 * Math.sin(3 * a + 0.6) + 45 * Math.sin(5 * a + 1.9) + 25 * Math.sin(7 * a);
      pts.push(new THREE.Vector3(Math.cos(a) * r * 1.18, 0, Math.sin(a) * r * 0.95));
    }
    const curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    const N = 2400;
    const sp = curve.getSpacedPoints(N);
    this.N = N;
    this.length = curve.getLength();
    this.ds = this.length / N;
    const px = (this.px = new Float32Array(N));
    const pz = (this.pz = new Float32Array(N));
    const ph = (this.ph = new Float32Array(N));
    const tx = (this.tx = new Float32Array(N));
    const tz = (this.tz = new Float32Array(N));
    for (let i = 0; i < N; i++) {
      px[i] = sp[i].x;
      pz[i] = sp[i].z;
    }
    for (let i = 0; i < N; i++) {
      const a = (i - 1 + N) % N;
      const b = (i + 1) % N;
      const dx = px[b] - px[a];
      const dz = pz[b] - pz[a];
      const l = Math.hypot(dx, dz);
      tx[i] = dx / l;
      tz[i] = dz / l;
    }
    // Straßenhöhe = geglättete Geländehöhe
    let h = new Float32Array(N);
    for (let i = 0; i < N; i++) h[i] = this.baseHeight(px[i], pz[i]);
    const R = 50;
    for (let pass = 0; pass < 3; pass++) {
      const out = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        let s = 0;
        for (let k = -R; k <= R; k++) s += h[(i + k + N) % N];
        out[i] = s / (2 * R + 1);
      }
      h = out;
    }
    // Lange Anstiege und Abfahrten über die ganze Runde (Stärke in CONFIG.berge).
    // Cosinus, damit Start/Ziel flach auf einer Kuppe liegt.
    const bergA = 11 * CONFIG.berge;
    const bergB = 2.5 * CONFIG.berge;
    for (let i = 0; i < N; i++) {
      const th = (i / N) * Math.PI * 2;
      h[i] += bergA * Math.cos(3 * th) + bergB * Math.cos(7 * th) - (bergA + bergB);
    }
    ph.set(h);

    // Raster für schnelle "Wo ist die nächste Straße?"-Abfragen
    this.grid = new Map();
    for (let i = 0; i < N; i++) {
      const key = this.cellKey(Math.floor(px[i] / CELL), Math.floor(pz[i] / CELL));
      let arr = this.grid.get(key);
      if (!arr) this.grid.set(key, (arr = []));
      arr.push(i);
    }
  }

  cellKey(cx, cz) {
    return (cx + 1000) * 4000 + (cz + 1000);
  }

  // Nächster Punkt auf der Straße. Gibt ein wiederverwendetes Objekt zurück!
  nearest(x, z) {
    const res = this._nr;
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    let best = Infinity;
    let bi = -1;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const arr = this.grid.get(this.cellKey(cx + dx, cz + dz));
        if (!arr) continue;
        for (let k = 0; k < arr.length; k++) {
          const i = arr[k];
          const ddx = this.px[i] - x;
          const ddz = this.pz[i] - z;
          const d = ddx * ddx + ddz * ddz;
          if (d < best) {
            best = d;
            bi = i;
          }
        }
      }
    }
    if (bi < 0) {
      res.found = false;
      res.dist = Infinity;
      return res;
    }
    const N = this.N;
    best = Infinity;
    for (const a of [(bi - 1 + N) % N, bi]) {
      const b = (a + 1) % N;
      const ax = this.px[a];
      const az = this.pz[a];
      const abx = this.px[b] - ax;
      const abz = this.pz[b] - az;
      const t = clamp(((x - ax) * abx + (z - az) * abz) / (abx * abx + abz * abz), 0, 1);
      const qx = ax + abx * t;
      const qz = az + abz * t;
      const d = (x - qx) * (x - qx) + (z - qz) * (z - qz);
      if (d < best) {
        best = d;
        res.i = a;
        res.f = t;
        res.lateral = (x - qx) * -this.tz[a] + (z - qz) * this.tx[a];
      }
    }
    const b = (res.i + 1) % N;
    res.found = true;
    res.dist = Math.sqrt(best);
    res.h = lerp(this.ph[res.i], this.ph[b], res.f);
    res.s = (res.i + res.f) * this.ds;
    return res;
  }

  terrainHeight(x, z) {
    const nr = this.nearest(x, z);
    const b = this.baseHeight(x, z);
    if (!nr.found) return b;
    const w = smoothstep(ROAD_HALF + 1.2, ROAD_HALF + 22, nr.dist);
    return lerp(nr.h - 0.15, b, w);
  }

  // Höhe des Bodens, auf dem ein Rad fährt, und welche Oberfläche
  groundAt(x, z, out = {}) {
    const nr = this.nearest(x, z);
    if (nr.found && nr.dist < ROAD_HALF + 0.2) {
      out.h = nr.h + 0.06;
      out.surface = 'road';
    } else if (nr.found && nr.dist < SHOULDER_HALF) {
      out.h = nr.h + 0.03 - smoothstep(ROAD_HALF + 0.5, SHOULDER_HALF, nr.dist) * 0.12;
      out.surface = 'gravel';
    } else {
      out.h = this.terrainHeight(x, z);
      out.surface = 'grass';
    }
    return out;
  }

  // Position auf der Strecke: s = Meter ab Start, lateral = seitlicher Versatz (+ = rechts)
  poseAt(s, lateral = 0, out = {}) {
    const L = this.length;
    s = ((s % L) + L) % L;
    const f = s / this.ds;
    const i = Math.floor(f) % this.N;
    const j = (i + 1) % this.N;
    const t = f - Math.floor(f);
    const txv = lerp(this.tx[i], this.tx[j], t);
    const tzv = lerp(this.tz[i], this.tz[j], t);
    const l = Math.hypot(txv, tzv);
    out.tx = txv / l;
    out.tz = tzv / l;
    out.x = lerp(this.px[i], this.px[j], t) - out.tz * lateral;
    out.z = lerp(this.pz[i], this.pz[j], t) + out.tx * lateral;
    out.h = lerp(this.ph[i], this.ph[j], t) + 0.06;
    out.heading = Math.atan2(out.tx, out.tz);
    const a = this.ph[(i - 2 + this.N) % this.N];
    const b = this.ph[(i + 3) % this.N];
    out.pitch = Math.atan2(b - a, this.ds * 5);
    out.s = s;
    return out;
  }

  // ---------- Himmel & Licht ----------
  buildSky(renderer) {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    const u = sky.material.uniforms;
    u.turbidity.value = 7;
    u.rayleigh.value = 2.4;
    u.mieCoefficient.value = 0.006;
    u.mieDirectionalG.value = 0.86;

    // Die Sonne geht hinter dem Startbereich auf
    const pose = this.poseAt(this.length - 100);
    const elev = THREE.MathUtils.degToRad(CONFIG.sunElevation);
    this.sunDir = new THREE.Vector3(-pose.tx * Math.cos(elev), Math.sin(elev), -pose.tz * Math.cos(elev))
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.35)
      .normalize();
    u.sunPosition.value.copy(this.sunDir);
    this.scene.add(sky);
    this.sky = sky;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const envSky = new Sky();
    envSky.scale.setScalar(50);
    envSky.material = sky.material;
    envScene.add(envSky);
    this.scene.environment = pmrem.fromScene(envScene, 0.04).texture;
    this.scene.environmentIntensity = 0.55;
    pmrem.dispose();

    this.scene.fog = new THREE.FogExp2(new THREE.Color('#c9a58f'), 0.0013);
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight('#b9cdf5', '#5b4634', 0.9);
    this.scene.add(hemi);

    // Das Sonnenlicht steht etwas höher als die sichtbare Sonne – so bleibt die Landschaft hell
    const az = Math.atan2(this.sunDir.x, this.sunDir.z);
    const el = THREE.MathUtils.degToRad(17);
    this.lightDir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    const sun = new THREE.DirectionalLight('#ffc994', 3.4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = sc.bottom = -32;
    sc.right = sc.top = 32;
    sc.near = 1;
    sc.far = 260;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    this.scene.add(sun, sun.target);
    this.sun = sun;
  }

  // ---------- Gelände ----------
  buildTerrain() {
    const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, TERRAIN_SEG, TERRAIN_SEG);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const count = pos.count;
    const roadW = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const nr = this.nearest(x, z);
      const b = this.baseHeight(x, z);
      let h = b;
      if (nr.found) {
        const w = smoothstep(ROAD_HALF + 1.2, ROAD_HALF + 22, nr.dist);
        h = lerp(nr.h - 0.15, b, w);
        roadW[i] = 1 - smoothstep(SHOULDER_HALF, SHOULDER_HALF + 5, nr.dist);
      }
      pos.setY(i, h);
    }
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal;

    const cGrassA = new THREE.Color('#3f6b25');
    const cGrassB = new THREE.Color('#86a33c');
    const cDry = new THREE.Color('#b9a457');
    const cRock = new THREE.Color('#7d756b');
    const cSnow = new THREE.Color('#f4efe9');
    const cDirt = new THREE.Color('#8d7457');
    const cSand = new THREE.Color('#cbb98b');
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = pos.getY(i);
      const g = this.n3(x * 0.012, z * 0.012) * 0.5 + 0.5;
      c.copy(cGrassA).lerp(cGrassB, g);
      const dry = smoothstep(0.25, 0.8, this.n2(x * 0.004 + 50, z * 0.004));
      c.lerp(cDry, dry * 0.55);
      const slope = 1 - nrm.getY(i);
      const rock = clamp(smoothstep(0.18, 0.4, slope) + smoothstep(50, 100, h) * 0.7, 0, 1);
      c.lerp(cRock, rock);
      const snow = smoothstep(115, 150, h + this.n1(x * 0.02, z * 0.02) * 12);
      c.lerp(cSnow, snow);
      c.lerp(cDirt, roadW[i] * 0.85);
      // Sandstrand am See
      const lake = this.lakeAt(x, z, 4);
      if (lake) c.lerp(cSand, smoothstep(lake.level + 1.4, lake.level - 0.2, h));
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const rand = mulberry32(5);
    const grassTex = canvasTex(
      256,
      256,
      (ctx, w, h) => {
        speckle(ctx, w, h, rand, '#e8e8e8', 255, 9000, 1);
        for (let i = 0; i < 1600; i++) {
          ctx.fillStyle = `rgba(30,40,10,${0.08 + rand() * 0.12})`;
          ctx.fillRect(rand() * w, rand() * h, 1, 2 + rand() * 4);
        }
      },
      { repeat: [360, 360] },
    );
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: grassTex, roughness: 0.95 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.scene.add(mesh);
  }

  buildLakes() {
    const mat = new THREE.MeshStandardMaterial({
      color: '#2c6a8e',
      roughness: 0.05,
      metalness: 0.15,
      transparent: true,
      opacity: 0.9,
      envMapIntensity: 1.5,
    });
    for (const l of this.lakes) {
      const geo = new THREE.CircleGeometry(1, 96);
      const pos = geo.attributes.position;
      for (let i = 1; i < pos.count; i++) {
        const a = Math.atan2(pos.getY(i), pos.getX(i));
        // Nach dem Hinlegen landet Winkel a bei -a in der Welt
        const R = this.lakeRadius(l, -a) * 1.3;
        pos.setXY(i, Math.cos(a) * R, Math.sin(a) * R);
      }
      // Kreis liegt in der x/y-Ebene -> flach hinlegen
      geo.rotateX(-Math.PI / 2);
      const water = new THREE.Mesh(geo, mat);
      water.position.set(l.x, l.level, l.z);
      water.receiveShadow = true;
      this.scene.add(water);
    }
  }

  // ---------- Straße ----------
  buildRoad() {
    const N = this.N;
    const rand = mulberry32(9);
    const asphalt = canvasTex(256, 1024, (ctx, w, h) => {
      speckle(ctx, w, h, rand, '#45464a', 255, 26000, 1.2);
      // Flicken & Reifenspuren
      for (let i = 0; i < 18; i++) {
        ctx.fillStyle = `rgba(20,20,22,${0.08 + rand() * 0.1})`;
        ctx.fillRect(rand() * w, rand() * h, 20 + rand() * 60, 30 + rand() * 120);
      }
      ctx.fillStyle = 'rgba(15,15,15,0.18)';
      ctx.fillRect(w * 0.2, 0, w * 0.1, h);
      ctx.fillRect(w * 0.7, 0, w * 0.1, h);
      // Randlinien und Mittellinie
      ctx.fillStyle = '#eceae2';
      ctx.fillRect(w * 0.035, 0, w * 0.03, h);
      ctx.fillRect(w * 0.935, 0, w * 0.03, h);
      ctx.fillRect(w * 0.49, 0, w * 0.02, h * 0.5);
    });
    asphalt.wrapT = THREE.RepeatWrapping;
    const gravel = canvasTex(
      256,
      256,
      (ctx, w, h) => {
        speckle(ctx, w, h, rand, '#8a7a66', 255, 12000, 1.5);
      },
      { repeat: [1, 1] },
    );
    gravel.wrapS = gravel.wrapT = THREE.RepeatWrapping;

    const road = [];
    const roadUv = [];
    const sh = [];
    const shUv = [];
    for (let k = 0; k <= N; k++) {
      const i = k % N;
      const x = this.px[i];
      const z = this.pz[i];
      const h = this.ph[i];
      const sx = -this.tz[i];
      const sz = this.tx[i];
      const v = (k * this.ds) / 12;
      road.push(x - sx * ROAD_HALF, h + 0.06, z - sz * ROAD_HALF, x + sx * ROAD_HALF, h + 0.06, z + sz * ROAD_HALF);
      roadUv.push(0, v, 1, v);
      const a = SHOULDER_HALF;
      const b = ROAD_HALF + 0.3;
      sh.push(
        x - sx * a, h - 0.12, z - sz * a,
        x - sx * b, h + 0.035, z - sz * b,
        x + sx * b, h + 0.035, z + sz * b,
        x + sx * a, h - 0.12, z + sz * a,
      );
      const vv = (k * this.ds) / 4;
      shUv.push(0, vv, 0.4, vv, 0.6, vv, 1, vv);
    }
    const roadIdx = [];
    const shIdx = [];
    for (let k = 0; k < N; k++) {
      const l0 = k * 2;
      const l1 = (k + 1) * 2;
      roadIdx.push(l0, l0 + 1, l1, l0 + 1, l1 + 1, l1);
      const s0 = k * 4;
      const s1 = (k + 1) * 4;
      for (let q = 0; q < 3; q++) shIdx.push(s0 + q, s0 + q + 1, s1 + q, s0 + q + 1, s1 + q + 1, s1 + q);
    }
    const mk = (verts, uvs, idx) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    };
    const roadMesh = new THREE.Mesh(
      mk(road, roadUv, roadIdx),
      new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, metalness: 0.0, envMapIntensity: 0.6 }),
    );
    roadMesh.receiveShadow = true;
    const shMesh = new THREE.Mesh(
      mk(sh, shUv, shIdx),
      new THREE.MeshStandardMaterial({ map: gravel, roughness: 1, polygonOffset: true, polygonOffsetFactor: 1 }),
    );
    shMesh.receiveShadow = true;
    this.scene.add(roadMesh, shMesh);
  }

  // ---------- Bäume, Gras, Blumen, Steine ----------
  instanced(geo, mat, matrices, colors, { cast = true, receive = true } = {}) {
    const m = new THREE.InstancedMesh(geo, mat, matrices.length);
    matrices.forEach((mx, i) => m.setMatrixAt(i, mx));
    if (colors) colors.forEach((c, i) => m.setColorAt(i, c));
    m.castShadow = cast;
    m.receiveShadow = receive;
    m.instanceMatrix.needsUpdate = true;
    this.scene.add(m);
    return m;
  }

  buildVegetation() {
    const rand = this.rand;
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const mtx = (x, y, z, s, sy = s, yaw = rand() * Math.PI * 2) =>
      new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), q.setFromAxisAngle(up, yaw).clone(), new THREE.Vector3(s, sy, s));

    // Baum-Formen
    const pineCrown = mergeGeometries([
      new THREE.ConeGeometry(1.9, 4.2, 8).translate(0, 3.6, 0),
      new THREE.ConeGeometry(1.4, 3.4, 8).translate(0, 5.7, 0),
      new THREE.ConeGeometry(0.85, 2.4, 8).translate(0, 7.4, 0),
    ]);
    const pineTrunk = new THREE.CylinderGeometry(0.16, 0.28, 2.4, 6).translate(0, 1.2, 0);
    const leafCrown = new THREE.IcosahedronGeometry(2.3, 1);
    const lp = leafCrown.attributes.position;
    for (let i = 0; i < lp.count; i++) {
      const x = lp.getX(i);
      const y = lp.getY(i);
      const z = lp.getZ(i);
      const k = 1 + this.n1(x * 1.3 + 3, z * 1.3 + y) * 0.22;
      lp.setXYZ(i, x * k, y * k * 0.85, z * k);
    }
    leafCrown.translate(0, 4.4, 0);
    leafCrown.computeVertexNormals();
    const leafTrunk = new THREE.CylinderGeometry(0.2, 0.32, 3.2, 6).translate(0, 1.6, 0);

    const crownMat = new THREE.MeshStandardMaterial({ color: '#ffffff', flatShading: true, roughness: 0.9 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#5a4030', roughness: 1 });

    const pines = [];
    const pineCol = [];
    const leafs = [];
    const leafCol = [];
    const lim = 860;
    let tries = 0;
    while (pines.length + leafs.length < 2600 && tries++ < 40000) {
      const x = (rand() * 2 - 1) * lim;
      const z = (rand() * 2 - 1) * lim;
      if (Math.hypot(x, z) > 870) continue;
      const dens = this.n3(x * 0.006 + 20, z * 0.006);
      if (dens < 0.05 && rand() > 0.08) continue;
      const nr = this.nearest(x, z);
      if (nr.found && nr.dist < 11) continue;
      if (this.lakeAt(x, z, 6)) continue;
      const h = this.terrainHeight(x, z);
      if (h > 120) continue;
      const s = 0.75 + rand() * 0.75;
      if (h > 45 || dens > 0.45 || rand() < 0.35) {
        pines.push(mtx(x, h - 0.2, z, s, s * (0.9 + rand() * 0.4)));
        pineCol.push(new THREE.Color().setHSL(0.31 + rand() * 0.05, 0.45, 0.17 + rand() * 0.08));
      } else {
        leafs.push(mtx(x, h - 0.2, z, s));
        leafCol.push(new THREE.Color().setHSL(0.18 + rand() * 0.1, 0.5, 0.25 + rand() * 0.12));
      }
    }
    this.instanced(pineCrown, crownMat, pines, pineCol);
    this.instanced(pineTrunk, trunkMat, pines);
    this.instanced(leafCrown, crownMat, leafs, leafCol);
    this.instanced(leafTrunk, trunkMat, leafs);

    // Grasbüschel entlang der Straße
    const blades = [];
    for (let k = 0; k < 3; k++) {
      const g = new THREE.BufferGeometry();
      const w = 0.05;
      g.setAttribute('position', new THREE.Float32BufferAttribute([-w, 0, 0, w, 0, 0, 0.03, 0.55, 0], 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute([0.18, 0.3, 0.08, 0.18, 0.3, 0.08, 0.75, 0.8, 0.35], 3));
      g.rotateZ((rand() - 0.5) * 0.5);
      g.rotateY((k / 3) * Math.PI + rand() * 0.4);
      g.translate((rand() - 0.5) * 0.15, 0, (rand() - 0.5) * 0.15);
      g.computeVertexNormals();
      blades.push(g);
    }
    const tuft = mergeGeometries(blades);
    const grass = [];
    const grassCol = [];
    const flowers = [];
    const flowerCol = [];
    const flowerPalette = ['#f2d14b', '#ffffff', '#e2455b', '#9b6bd6', '#ff9a3c'].map((c) => new THREE.Color(c));
    const pose = {};
    for (let i = 0; i < 22000; i++) {
      const s = rand() * this.length;
      const side = rand() < 0.5 ? -1 : 1;
      const lat = side * (SHOULDER_HALF + 0.3 + Math.pow(rand(), 1.6) * 45);
      this.poseAt(s, lat, pose);
      if (this.lakeAt(pose.x, pose.z, 1)) continue;
      const h = this.terrainHeight(pose.x, pose.z);
      const sc = 0.7 + rand() * 0.9;
      grass.push(mtx(pose.x, h - 0.05, pose.z, sc, sc * (0.8 + rand() * 0.8)));
      grassCol.push(new THREE.Color().setHSL(0.2 + rand() * 0.06, 0.4, 0.4 + rand() * 0.3));
      if (rand() < 0.1) {
        flowers.push(mtx(pose.x + rand() - 0.5, h + 0.28 + rand() * 0.1, pose.z + rand() - 0.5, 0.6 + rand() * 0.5));
        flowerCol.push(flowerPalette[Math.floor(rand() * flowerPalette.length)]);
      }
    }
    const grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 1 });
    this.instanced(tuft, grassMat, grass, grassCol, { cast: false });
    this.instanced(
      new THREE.IcosahedronGeometry(0.07, 0),
      new THREE.MeshStandardMaterial({ color: '#fff', roughness: 0.7 }),
      flowers,
      flowerCol,
      { cast: false },
    );

    // Steine
    const rocks = [];
    for (let i = 0; i < 260; i++) {
      const x = (rand() * 2 - 1) * 800;
      const z = (rand() * 2 - 1) * 800;
      const nr = this.nearest(x, z);
      if (nr.found && nr.dist < 7) continue;
      if (this.lakeAt(x, z, 2)) continue;
      const s = 0.4 + rand() * 1.8;
      rocks.push(
        new THREE.Matrix4().compose(
          new THREE.Vector3(x, this.terrainHeight(x, z) - s * 0.3, z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
          new THREE.Vector3(s, s * 0.7, s * (0.8 + rand() * 0.4)),
        ),
      );
    }
    this.instanced(
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.MeshStandardMaterial({ color: '#8b8580', roughness: 0.95, flatShading: true }),
      rocks,
    );

    // Strohballen auf den Feldern
    const bales = [];
    for (let i = 0; i < 60; i++) {
      const s = rand() * this.length;
      const lat = (rand() < 0.5 ? -1 : 1) * (18 + rand() * 60);
      this.poseAt(s, lat, pose);
      const h = this.terrainHeight(pose.x, pose.z);
      if (h > 30 || this.lakeAt(pose.x, pose.z, 3)) continue;
      bales.push(
        new THREE.Matrix4().compose(
          new THREE.Vector3(pose.x, h + 0.7, pose.z),
          new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand() * 3, Math.PI / 2)),
          new THREE.Vector3(1, 1, 1),
        ),
      );
    }
    this.instanced(
      new THREE.CylinderGeometry(0.75, 0.75, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: '#d2b15e', roughness: 1 }),
      bales,
    );
  }

  // ---------- Leitpfosten & Start/Ziel-Bogen ----------
  buildProps() {
    const pose = {};
    const posts = [];
    const caps = [];
    for (let s = 0; s < this.length; s += 50) {
      for (const side of [-1, 1]) {
        this.poseAt(s, side * (SHOULDER_HALF + 0.5), pose);
        const h = this.terrainHeight(pose.x, pose.z);
        posts.push(new THREE.Matrix4().makeTranslation(pose.x, h + 0.5, pose.z));
        caps.push(new THREE.Matrix4().makeTranslation(pose.x, h + 0.92, pose.z));
      }
    }
    this.instanced(new THREE.BoxGeometry(0.12, 1.0, 0.12), new THREE.MeshStandardMaterial({ color: '#f2f2ee' }), posts);
    this.instanced(
      new THREE.BoxGeometry(0.13, 0.16, 0.13),
      new THREE.MeshStandardMaterial({ color: '#ff7a1a', emissive: '#ff5a00', emissiveIntensity: 0.6 }),
      caps,
      null,
      { cast: false },
    );

    // Start/Ziel-Bogen
    this.poseAt(0, 0, pose);
    const arch = new THREE.Group();
    arch.position.set(pose.x, pose.h, pose.z);
    arch.rotation.y = pose.heading;
    const pillarMat = new THREE.MeshStandardMaterial({ color: '#1b2233', roughness: 0.5, metalness: 0.4 });
    const halfW = SHOULDER_HALF + 0.8;
    for (const side of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 6.2, 0.5), pillarMat);
      p.position.set(side * halfW, 3.0, 0);
      p.castShadow = true;
      arch.add(p);
    }
    const bannerTex = canvasTex(1024, 192, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, '#101a33');
      g.addColorStop(0.5, '#1d2f5c');
      g.addColorStop(1, '#101a33');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = CONFIG.colors.gold;
      ctx.fillRect(0, 8, w, 6);
      ctx.fillRect(0, h - 14, w, 6);
      ctx.font = '800 92px "Barlow Condensed", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('START  •  ZIEL', w / 2, h / 2 - 12);
      ctx.font = '600 30px "Cinzel", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(CONFIG.gameName.toUpperCase(), w / 2, h - 40);
    });
    const banner = new THREE.Mesh(
      new THREE.BoxGeometry(halfW * 2 + 0.5, 1.5, 0.25),
      new THREE.MeshStandardMaterial({ map: bannerTex, emissive: '#ffffff', emissiveMap: bannerTex, emissiveIntensity: 0.25 }),
    );
    banner.position.y = 5.6;
    banner.castShadow = true;
    arch.add(banner);
    // Zielstrich
    const checker = canvasTex(256, 32, (ctx, w, h) => {
      for (let x = 0; x < 16; x++)
        for (let y = 0; y < 2; y++) {
          ctx.fillStyle = (x + y) % 2 ? '#111' : '#f4f4f0';
          ctx.fillRect(x * 16, y * 16, 16, 16);
        }
    });
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(ROAD_HALF * 2, 0.9),
      new THREE.MeshStandardMaterial({ map: checker, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 }),
    );
    line.rotation.x = -Math.PI / 2;
    line.position.y = 0.012;
    line.receiveShadow = true;
    arch.add(line);
    // Kleine Fahnen
    const flagMat = new THREE.MeshStandardMaterial({ color: CONFIG.colors.accent, side: THREE.DoubleSide });
    for (let k = -3; k <= 3; k++) {
      if (k === 0) continue;
      for (const side of [-1, 1]) {
        const f = new THREE.Group();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 3.4), pillarMat);
        pole.position.y = 1.7;
        const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.1), flagMat);
        flag.position.set(0, 2.7, 0.35);
        flag.rotation.y = Math.PI / 2;
        f.add(pole, flag);
        f.position.set(side * (SHOULDER_HALF + 3), 0, k * 7);
        arch.add(f);
      }
    }
    this.scene.add(arch);
  }

  // ---------- Wolken ----------
  buildClouds() {
    const rand = mulberry32(77);
    const tex = canvasTex(256, 128, (ctx, w, h) => {
      for (let i = 0; i < 40; i++) {
        const x = w * (0.15 + rand() * 0.7);
        const y = h * (0.45 + (rand() - 0.5) * 0.35);
        const r = 18 + rand() * 30;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, 'rgba(255,255,255,0.35)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
    });
    for (let i = 0; i < 26; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        color: new THREE.Color().setHSL(0.05 + rand() * 0.04, 0.7, 0.78 + rand() * 0.1),
        fog: false,
        depthWrite: false,
        transparent: true,
        opacity: 0.55 + rand() * 0.35,
      });
      const s = new THREE.Sprite(mat);
      const a = rand() * Math.PI * 2;
      const d = 1300 + rand() * 1200;
      s.position.set(Math.cos(a) * d, 220 + rand() * 380, Math.sin(a) * d);
      const sc = 380 + rand() * 500;
      s.scale.set(sc, sc * 0.4, 1);
      this.scene.add(s);
    }
  }

  // ---------- Leuchtende Pollen in der Luft ----------
  buildMotes() {
    const n = 350;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n * 3; i++) pos[i] = (Math.random() - 0.5) * 50;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const tex = canvasTex(64, 64, (ctx) => {
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.3, 'rgba(255,230,180,0.6)');
      g.addColorStop(1, 'rgba(255,200,120,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
    });
    const mat = new THREE.PointsMaterial({
      size: 0.09,
      map: tex,
      color: new THREE.Color(2.2, 1.7, 1.1),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.motes = new THREE.Points(geo, mat);
    this.motes.frustumCulled = false;
    this.scene.add(this.motes);
  }

  update(dt, focus, camera, time) {
    // Schattenkamera folgt dem Geschehen
    this.sun.position.copy(focus).addScaledVector(this.lightDir, 120);
    this.sun.target.position.copy(focus);

    const p = this.motes.geometry.attributes.position;
    const cx = camera.position.x;
    const cy = camera.position.y;
    const cz = camera.position.z;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i) + Math.sin(time * 0.5 + i) * 0.15 * dt + 0.25 * dt;
      let y = p.getY(i) + Math.cos(time * 0.4 + i * 1.7) * 0.1 * dt;
      let z = p.getZ(i) + 0.1 * dt;
      const wrap = (v, c) => (v - c > 25 ? v - 50 : v - c < -25 ? v + 50 : v);
      x = wrap(x, cx);
      if (y - cy < -2) y += 16;
      else if (y - cy > 14) y -= 16;
      z = wrap(z, cz);
      p.setXYZ(i, x, y, z);
    }
    p.needsUpdate = true;
  }
}
