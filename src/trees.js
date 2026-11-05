// Detailreiche Bäume und Büsche, komplett im Code erzeugt.
// Laubbaum: gebogener Stamm, Äste, Krone aus vielen Blattbüscheln (Karten mit Blatt-Textur).
// Nadelbaum: gerader Stamm mit Etagen aus hängenden Nadelzweigen.
// Tricks wie in modernen Spielen: Normalen zeigen von der Kronenmitte nach außen (weiches Licht),
// innen/unten dunkler (Schatten im Laub), leichter Wind im Vertex-Shader, Blätterschatten per Alpha-Test.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32 } from './noise.js';

const UP = new THREE.Vector3(0, 1, 0);

// ---------- Texturen ----------
function canvasTexture(w, h, draw, repeat = false) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// Ein Büschel aus vielen einzelnen Blättern, am Rand ausgefranst
function leafTexture(seed, hue) {
  const rand = mulberry32(seed);
  return canvasTexture(256, 256, (ctx, w, h) => {
    for (let i = 0; i < 260; i++) {
      // dichter in der Mitte, lockerer am Rand
      const a = rand() * Math.PI * 2;
      const r = Math.pow(rand(), 0.7) * 108;
      const x = w / 2 + Math.cos(a) * r;
      const y = h / 2 + Math.sin(a) * r;
      const len = 9 + rand() * 11;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rand() * Math.PI * 2);
      const l = 22 + rand() * 26 - (r / 108) * 6;
      ctx.fillStyle = `hsl(${hue + rand() * 22 - 8}, ${42 + rand() * 20}%, ${l}%)`;
      ctx.beginPath();
      ctx.ellipse(0, 0, len, len * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `hsla(${hue + 10}, 50%, ${l + 14}%, 0.6)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-len, 0);
      ctx.lineTo(len, 0);
      ctx.stroke();
      ctx.restore();
    }
  });
}

// Nadelzweig: Stiel von links nach rechts, Nadeln schräg nach außen, zur Spitze hin kürzer
function needleTexture(seed) {
  const rand = mulberry32(seed);
  return canvasTexture(256, 128, (ctx, w, h) => {
    const cy = h / 2;
    for (let x = 4; x < w - 6; x += 2.2) {
      const t = x / w;
      const len = (1 - t * 0.75) * 54 * (0.75 + rand() * 0.25);
      for (const side of [-1, 1]) {
        const ang = 0.55 + rand() * 0.35;
        ctx.strokeStyle = `hsl(${118 + rand() * 25}, ${35 + rand() * 20}%, ${14 + rand() * 16}%)`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(x, cy);
        ctx.lineTo(x + Math.cos(ang) * len * 0.6, cy + side * Math.sin(ang) * len);
        ctx.stroke();
      }
    }
    ctx.strokeStyle = '#3d2f1f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w - 10, cy);
    ctx.stroke();
  });
}

// Rinde: senkrechte Furchen
function barkTexture(seed, base) {
  const rand = mulberry32(seed);
  return canvasTexture(
    128,
    256,
    (ctx, w, h) => {
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 140; i++) {
        const x = rand() * w;
        const v = Math.floor(rand() * 60);
        ctx.strokeStyle = `rgba(${v},${v * 0.8},${v * 0.6},${0.25 + rand() * 0.35})`;
        ctx.lineWidth = 1 + rand() * 3;
        ctx.beginPath();
        ctx.moveTo(x, rand() * h);
        ctx.lineTo(x + (rand() - 0.5) * 6, rand() * h);
        ctx.stroke();
      }
    },
    true,
  );
}

// ---------- Geometrie-Bausteine ----------
class Builder {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.uv = [];
    this.col = [];
    this.idx = [];
  }

  // Viereck um center, aufgespannt von halben Achsen a (u-Richtung) und b (v-Richtung)
  quad(center, a, b, normalFn, shadeFn, uvRect = [0, 0, 1, 1]) {
    const base = this.pos.length / 3;
    const [u0, v0, u1, v1] = uvRect;
    const corners = [
      [-1, -1, u0, v0],
      [1, -1, u1, v0],
      [1, 1, u1, v1],
      [-1, 1, u0, v1],
    ];
    const p = new THREE.Vector3();
    for (const [sa, sb, u, v] of corners) {
      p.copy(center).addScaledVector(a, sa).addScaledVector(b, sb);
      this.pos.push(p.x, p.y, p.z);
      const n = normalFn(p);
      this.nor.push(n.x, n.y, n.z);
      this.uv.push(u, v);
      const s = shadeFn(p);
      this.col.push(s, s, s);
    }
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    return g;
  }
}

// Ast/Stamm entlang einer Kurve, der sich nach oben verjüngt
function limbGeo(points, r0, r1, segs = 8, radial = 7, shadeBottom = 0.55) {
  const curve = new THREE.CatmullRomCurve3(points);
  const g = new THREE.TubeGeometry(curve, segs, 1, radial, false);
  const pos = g.attributes.position;
  const col = [];
  const c = new THREE.Vector3();
  const p = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    const ring = Math.floor(i / (radial + 1));
    const t = ring / segs;
    curve.getPointAt(t, c);
    p.fromBufferAttribute(pos, i).sub(c);
    const r = r0 + (r1 - r0) * t;
    p.multiplyScalar(r).add(c);
    pos.setXYZ(i, p.x, p.y, p.z);
    const s = shadeBottom + (1 - shadeBottom) * Math.min(1, p.y / 3);
    col.push(s, s, s);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  // UVs: Rinde wiederholt sich entlang des Stamms
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2, uv.getY(i));
  g.computeVertexNormals();
  return g;
}

// ---------- Laubbaum ----------
function deciduousTree(seed) {
  const rand = mulberry32(seed);
  const crown = new THREE.Vector3((rand() - 0.5) * 0.4, 5.3 + rand() * 0.6, (rand() - 0.5) * 0.4);
  const rad = new THREE.Vector3(2.3 + rand() * 0.5, 1.9 + rand() * 0.4, 2.3 + rand() * 0.5);

  // Stamm mit leichtem Schwung
  const lean = new THREE.Vector3((rand() - 0.5) * 0.5, 0, (rand() - 0.5) * 0.5);
  const trunkTop = new THREE.Vector3(lean.x, 3.6, lean.z);
  const parts = [
    limbGeo(
      [V(0, -0.3, 0), V(lean.x * 0.2, 1.2, lean.z * 0.2), V(lean.x * 0.7, 2.6, lean.z * 0.7), trunkTop, V(crown.x, crown.y - 0.2, crown.z)],
      0.3,
      0.1,
      10,
    ),
  ];
  // Äste in die Krone
  const nBranch = 5 + Math.floor(rand() * 3);
  const clumpCenters = [];
  for (let i = 0; i < nBranch; i++) {
    const a = (i / nBranch) * Math.PI * 2 + rand() * 0.6;
    const startY = 2.6 + rand() * 1.4;
    const start = V(lean.x * (startY / 3.6), startY, lean.z * (startY / 3.6));
    const end = V(
      crown.x + Math.cos(a) * rad.x * (0.55 + rand() * 0.25),
      crown.y + (rand() - 0.3) * rad.y * 0.7,
      crown.z + Math.sin(a) * rad.z * (0.55 + rand() * 0.25),
    );
    const mid = start.clone().lerp(end, 0.5).add(V(0, 0.4, 0));
    parts.push(limbGeo([start, mid, end], 0.11, 0.035, 5, 5));
    clumpCenters.push(end);
  }
  const bark = mergeGeometries(parts);

  // Blattbüschel: an den Astenden und verteilt auf der Kronen-Oberfläche
  const nExtra = 7;
  for (let i = 0; i < nExtra; i++) {
    const y = 1 - (i / (nExtra - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = i * 2.399963;
    clumpCenters.push(
      V(crown.x + Math.cos(th) * r * rad.x * 0.75, crown.y + y * rad.y * 0.7, crown.z + Math.sin(th) * r * rad.z * 0.75),
    );
  }
  clumpCenters.push(V(crown.x, crown.y + rad.y * 0.75, crown.z));

  const b = new Builder();
  const n = new THREE.Vector3();
  const normalFn = (p) => n.copy(p).sub(crown).divide(rad).add(V(0, 0.35, 0)).normalize();
  const shadeFn = (p) => {
    const dy = Math.min(1, Math.max(0, (p.y - (crown.y - rad.y)) / (rad.y * 2)));
    const out = Math.min(1, p.clone().sub(crown).divide(rad).length());
    return 0.38 + 0.62 * (0.55 * dy + 0.45 * out);
  };
  const tmp = new THREE.Vector3();
  for (const c of clumpCenters) {
    const cards = 7;
    for (let k = 0; k < cards; k++) {
      const dir = tmp.set(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize();
      const right = new THREE.Vector3().crossVectors(dir, Math.abs(dir.y) > 0.9 ? V(1, 0, 0) : UP).normalize();
      const up2 = new THREE.Vector3().crossVectors(right, dir).normalize();
      const size = 0.75 + rand() * 0.35;
      const center = c.clone().add(V(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(0.9));
      b.quad(center, right.multiplyScalar(size), up2.multiplyScalar(size), normalFn, shadeFn);
    }
  }
  return { bark, leaves: b.build() };
}

// ---------- Nadelbaum ----------
function pineTree(seed) {
  const rand = mulberry32(seed);
  const height = 9 + rand() * 2;
  const bark = limbGeo([V(0, -0.3, 0), V(0, height * 0.5, 0), V(0, height, 0)], 0.27, 0.04, 8, 7, 0.5);
  const b = new Builder();
  const n = new THREE.Vector3();
  const levels = 13;
  for (let l = 0; l < levels; l++) {
    const t = l / (levels - 1);
    const y = 1.7 + t * (height - 2.0);
    const len = 0.35 + 2.4 * Math.pow(1 - t, 1.05);
    const count = l > levels - 3 ? 4 : 7;
    const droop = 0.28 + rand() * 0.15;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + l * 2.399963 + rand() * 0.4;
      const d = V(Math.cos(a), 0, Math.sin(a));
      // Zweig zeigt nach außen und hängt etwas nach unten
      const along = V(d.x * Math.cos(droop), -Math.sin(droop), d.z * Math.cos(droop)).multiplyScalar(len / 2);
      const center = V(0, y, 0).add(along);
      const side = V(-d.z, 0, d.x).multiplyScalar(len * 0.42);
      const vert = new THREE.Vector3().crossVectors(along, side).normalize().multiplyScalar(len * 0.3);
      const normalFn = (p) => n.set(p.x, 0, p.z).normalize().add(V(0, 0.55, 0)).normalize();
      const shadeFn = (p) => {
        const out = Math.min(1, Math.hypot(p.x, p.z) / (len + 0.01));
        return (0.35 + 0.65 * out) * (0.7 + 0.3 * t);
      };
      // zwei gekreuzte Karten pro Zweig für Volumen
      b.quad(center, along, side, normalFn, shadeFn);
      b.quad(center, along, vert, normalFn, shadeFn);
    }
  }
  // Spitze
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI;
    const normalFn = () => n.set(0, 1, 0);
    b.quad(V(0, height - 0.1, 0), V(0, 0.65, 0), V(Math.cos(a) * 0.25, 0, Math.sin(a) * 0.25), normalFn, () => 0.9, [0, 0, 1, 1]);
  }
  return { bark, leaves: b.build() };
}

// ---------- Busch ----------
function bushGeo(seed) {
  const rand = mulberry32(seed);
  const b = new Builder();
  const center = V(0, 0.55, 0);
  const n = new THREE.Vector3();
  const normalFn = (p) => n.copy(p).sub(center).add(V(0, 0.4, 0)).normalize();
  const shadeFn = (p) => 0.45 + 0.55 * Math.min(1, Math.max(0, p.y / 1.1));
  for (let c = 0; c < 4; c++) {
    const cc = V((rand() - 0.5) * 1.0, 0.4 + rand() * 0.4, (rand() - 0.5) * 1.0);
    for (let k = 0; k < 6; k++) {
      const dir = V(rand() - 0.5, rand() * 0.6, rand() - 0.5).normalize();
      const right = new THREE.Vector3().crossVectors(dir, UP).normalize();
      if (right.lengthSq() < 0.01) right.set(1, 0, 0);
      const up2 = new THREE.Vector3().crossVectors(right, dir).normalize();
      const s = 0.45 + rand() * 0.25;
      b.quad(cc.clone().add(V(rand() - 0.5, rand() * 0.3, rand() - 0.5).multiplyScalar(0.5)), right.multiplyScalar(s), up2.multiplyScalar(s), normalFn, shadeFn);
    }
  }
  return b.build();
}

function V(x, y, z) {
  return new THREE.Vector3(x, y, z);
}

// ---------- Materialien mit Wind ----------
function windify(mat, wind, strength, flutter) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWind = wind;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uWind;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        {
          vec3 ip = vec3(instanceMatrix[3]);
          float ph = ip.x * 0.11 + ip.z * 0.07;
          float h = max(0.0, position.y - 1.0);
          float sway = sin(uWind * 1.1 + ph) * 0.5 + sin(uWind * 2.3 + ph * 1.7) * 0.25;
          transformed.x += sway * ${strength.toFixed(4)} * h * h;
          transformed.z += cos(uWind * 0.9 + ph) * ${(strength * 0.6).toFixed(4)} * h * h;
          transformed += normal * sin(uWind * 5.0 + position.x * 3.0 + position.z * 2.0 + ph) * ${flutter.toFixed(4)};
        }`,
      );
    // Blattkarten von beiden Seiten gleich hell (keine umgedrehten Normalen)
    shader.fragmentShader = shader.fragmentShader.replace(
      'float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;',
      'float faceDirection = 1.0;',
    );
  };
}

export function makeTreeAssets() {
  const wind = { value: 0 };
  const leafTex = [leafTexture(11, 100), leafTexture(23, 88)];
  const needleTex = needleTexture(5);
  const barkTex = barkTexture(3, '#5b4433');
  const pineBarkTex = barkTexture(9, '#4d3a2c');

  const leafMat = (map) => {
    const m = new THREE.MeshStandardMaterial({
      map,
      alphaTest: 0.45,
      side: THREE.DoubleSide,
      vertexColors: true,
      roughness: 0.85,
    });
    windify(m, wind, 0.0012, 0.025);
    return m;
  };
  const depthMat = (map) =>
    new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: 0.45, side: THREE.DoubleSide });
  const barkMat = (map) => {
    const m = new THREE.MeshStandardMaterial({ map, vertexColors: true, roughness: 1 });
    windify(m, wind, 0.0012, 0);
    return m;
  };

  return {
    wind,
    deciduous: [deciduousTree(101), deciduousTree(202), deciduousTree(303)],
    pine: [pineTree(7), pineTree(19)],
    bush: bushGeo(42),
    leafMats: leafTex.map(leafMat),
    leafDepth: leafTex.map(depthMat),
    needleMat: (() => {
      const m = new THREE.MeshStandardMaterial({
        map: needleTex,
        alphaTest: 0.4,
        side: THREE.DoubleSide,
        vertexColors: true,
        roughness: 0.9,
      });
      windify(m, wind, 0.0009, 0.015);
      return m;
    })(),
    needleDepth: depthMat(needleTex),
    barkMat: barkMat(barkTex),
    pineBarkMat: barkMat(pineBarkTex),
  };
}
