// Prozedurales Rennrad mit Fahrer. Vorwärts = +z, oben = +y, rechts vom Fahrer = -x.
import * as THREE from 'three';
import { RiderModel } from './rider-model.js';
import { buildShoe, shoeMaterials } from './shoe.js';
import { groupsetById } from './brands.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { drawPlate } from './plate.js';
import { CONFIG } from './config.js';
import { kadenz, gehKadenz } from './gang.js';
import { makeKitCanvas, drawTorso, drawSleeve, drawThigh, drawHelmet, HELM_SCHLITZE } from './kit.js';
import { brandById, brandLabel, contrastColor, isMatte, DEFAULT_LOOK } from './brands.js';

const UP = new THREE.Vector3(0, 1, 0);
const V = (side, up, fwd) => new THREE.Vector3(side, up, fwd);
const _d = new THREE.Vector3();
const _p = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _k = new THREE.Vector3();
const _xAxis = new THREE.Vector3(1, 0, 0);
const _qKragen = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
const _standOff = new THREE.Vector3();

export const WHEEL_R = 0.34;
const BB = V(0, 0.27, -0.08);
const CRANK = 0.17;

// Zahnrad (Kettenblatt oder Ritzel) als flache Scheibe mit Zähnen; innen = Lochradius
function zahnrad(r, zaehne, dicke, innen = r * 0.55) {
  const sh = new THREE.Shape();
  for (let i = 0; i < zaehne; i++) {
    const a0 = (i / zaehne) * Math.PI * 2;
    const da = (Math.PI * 2) / zaehne;
    for (const [f, rr] of [[0, r - 0.004], [0.3, r + 0.002], [0.7, r + 0.002]]) {
      const a = a0 + f * da;
      i === 0 && f === 0 ? sh.moveTo(Math.cos(a) * rr, Math.sin(a) * rr) : sh.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
  }
  const loch = new THREE.Path();
  loch.absarc(0, 0, innen, 0, Math.PI * 2, true);
  sh.holes.push(loch);
  const g = new THREE.ExtrudeGeometry(sh, { depth: dicke, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, -dicke / 2);
  return g;
}

// Frisur als geformte Haar-Oberfläche über dem Kopf (Kopf-Koordinaten: vorne = +z, oben = +y, links = +x).
// 'wuschel' (du): Seiten kurz, oben länger, vorne eine Tolle nach vorne-oben, feine Kämmrillen von vorne nach hinten.
// 'scheitel' (Jonas): Seitenscheitel rechts, oben glatt zur Seite und nach hinten gekämmt.
// Strähnen-Textur: viele feine helle und dunkle Linien, die vom Wirbel aus nach unten laufen
let haarTex = null;
function haarTextur() {
  if (haarTex) return haarTex;
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#c4c4c4';
  g.fillRect(0, 0, 1024, 256);
  let seed = 3;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 2600; i++) {
    const x = r() * 1024;
    const y0 = r() * 60;
    const len = 80 + r() * 180;
    const hell = r() < 0.5;
    g.strokeStyle = hell ? `rgba(255,255,255,${0.12 + r() * 0.25})` : `rgba(0,0,0,${0.12 + r() * 0.3})`;
    g.lineWidth = 1 + r() * 1.6;
    g.beginPath();
    g.moveTo(x, y0);
    g.bezierCurveTo(x + (r() - 0.5) * 14, y0 + len * 0.4, x + (r() - 0.5) * 18, y0 + len * 0.7, x + (r() - 0.5) * 22, y0 + len);
    g.stroke();
  }
  haarTex = new THREE.CanvasTexture(c);
  haarTex.colorSpace = THREE.SRGBColorSpace;
  haarTex.wrapS = THREE.RepeatWrapping;
  haarTex.flipY = false; // Bild oben = Wirbel (v = 0 oben an der Kugel)
  haarTex.anisotropy = 8;
  return haarTex;
}

function baueFrisur(stil, mat) {
  const g = new THREE.Group();
  // Kopfform (wie headGeo): Kugel r = 0,1, skaliert
  const KX = 0.095;
  const KY = 0.108;
  const KZ = 0.106;
  const glatt = (a, b, x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  const geo = new THREE.SphereGeometry(1, 72, 44, 0, Math.PI * 2, 0, Math.PI * 0.66);
  const pos = geo.attributes.position;
  const farben = new Float32Array(pos.count * 3);
  const d = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    d.fromBufferAttribute(pos, i).normalize();
    const oben = d.y; // 1 = Scheitelpunkt
    const vorn = d.z; // 1 = Stirn
    const seite = Math.abs(d.x);
    const top = glatt(0.45, 0.85, oben); // oberer Bereich (lange Haare)
    let dicke;
    let vorschub = 0;
    let quer = 0;
    if (stil === 'scheitel') {
      dicke = 0.005 + top * 0.018;
      // Scheitel rechts (x < 0): dort eine Rille, links davon voller (zur Seite gekämmt)
      const scheitel = Math.exp(-(((d.x + 0.32) / 0.05) ** 2)) * glatt(0.2, 0.6, oben) * glatt(-0.6, 0.2, vorn);
      dicke -= scheitel * 0.006;
      dicke += glatt(-0.3, 0.6, d.x) * top * 0.006;
      // vorne etwas Schwung zur Seite (links)
      quer = glatt(0.2, 0.9, vorn) * top * 0.022;
      vorschub = glatt(0.3, 0.9, vorn) * top * 0.014;
      // Kämmrillen schräg nach hinten
      dicke += 0.0016 * Math.sin((d.x * 0.8 + d.z * 0.6) * 95) * top;
    } else {
      // Seiten kurz (Übergang), oben lang, vorne die Tolle (hoch und etwas nach vorne)
      const tolle = top * glatt(-0.1, 0.75, vorn);
      dicke = 0.004 + top * 0.016 + tolle * 0.032;
      vorschub = tolle * 0.024;
      // Kämmrillen von vorne nach hinten (oben), an den Seiten feiner
      dicke += 0.0022 * Math.sin(d.x * 110 + Math.sin(d.z * 7) * 1.5) * top;
      dicke += 0.0008 * Math.sin(d.z * 140) * (1 - top);
    }
    // Haaransatz: vorne an der Stirn hoch, an den Schläfen und über den Ohren mittel, hinten tief im Nacken.
    // Darunter wird die Haarfläche weich unter die Haut gezogen (kein treppiger Rand).
    const phi = Math.atan2(d.x, d.z);
    const zacken = 0.035 * Math.max(0, Math.sin(phi * 26)) * glatt(0.1, 0.8, vorn); // Haarspitzen am Stirnrand
    const grenze = 0.3 + 0.32 * glatt(0.05, 0.85, vorn) - 0.62 * glatt(0.45, 0.95, -vorn) - 0.24 * glatt(0.45, 0.95, seite) * glatt(-0.35, 0.1, -vorn) - zacken;
    const da = glatt(grenze - 0.02, grenze + 0.07, oben);
    // versteckter Teil weit genug nach innen (unten wird der Kopf zum Kinn schmaler)
    const innen = -0.007 - 0.045 * (1 - glatt(-0.35, 0.25, oben));
    const r = innen + (dicke - innen) * da;
    // Hinterkopf ist im Kopf-Modell runder (z * 1,06 hinten) – dort muss die Haarschicht mit nach außen
    const kz = d.z < 0 && d.y > -0.3 ? KZ * 1.07 : KZ;
    const x = d.x * (KX + r) + quer * da;
    const y = d.y * (KY + r);
    const z = d.z * (kz + r) + vorschub * da;
    pos.setXYZ(i, x, y, z);
    // Farbe: Seiten dunkler (kurz), oben heller, Spitzen der Tolle noch etwas heller
    const hell = 0.62 + 0.38 * top + (stil === 'wuschel' ? 0.12 * top * glatt(0.3, 0.9, vorn) : 0);
    farben[i * 3] = farben[i * 3 + 1] = farben[i * 3 + 2] = Math.min(1.1, hell);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(farben, 3));
  geo.computeVertexNormals();
  const haarMat = mat.clone();
  haarMat.vertexColors = true;
  haarMat.map = haarTextur();
  mat.userData.kopien = [...(mat.userData.kopien || []), haarMat];
  const m = new THREE.Mesh(geo, haarMat);
  m.castShadow = true;
  g.add(m);
  return g;
}

function tube(a, b, r, mat, r2 = r, seg = 10) {
  const len = a.distanceTo(b);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r2, r, len, seg), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(UP, _d.copy(b).sub(a).normalize());
  m.castShadow = true;
  return m;
}

function placeLimb(obj, a, b) {
  obj.position.copy(a).add(b).multiplyScalar(0.5);
  obj.quaternion.setFromUnitVectors(UP, _d.copy(b).sub(a).normalize());
}

// Wie placeLimb, aber dreht das Glied so, dass seine Vorderseite (+z) nach vorne zeigt (für Wade/Oberschenkel)
const _bx = new THREE.Vector3();
const _by = new THREE.Vector3();
const _bz = new THREE.Vector3();
const _bm = new THREE.Matrix4();
const VORNE = new THREE.Vector3(0, 0, 1);
const VORNE_OBEN = new THREE.Vector3(0, 0.6, 1).normalize(); // für den Oberschenkel (beim Fahren zeigt die Vorderseite nach oben)
function placeLimbFwd(obj, a, b, ref = VORNE) {
  obj.position.copy(a).add(b).multiplyScalar(0.5);
  _by.copy(b).sub(a).normalize();
  _bz.copy(ref).addScaledVector(_by, -ref.dot(_by));
  if (_bz.lengthSq() < 1e-6) _bz.set(0, 1, 0);
  _bz.normalize();
  _bx.crossVectors(_by, _bz);
  obj.quaternion.setFromRotationMatrix(_bm.makeBasis(_bx, _by, _bz));
}

// ---------- Gehen: Stellschrauben (Zahlen aus Ganganalysen gesunder Erwachsener, ca. 1,1–1,6 m/s) ----------
const GEHEN = {
  ferseVor: 0.4, // ✏️ Ferse setzt so weit vor der Hüfte auf: Anteil vom Weg, den der Körper über den Fuß geht …
  ferseVorAb: -0.06, // … minus das (bei ganz kleinen Schritten steht der Fuß dann unter dem Körper)
  zehenHoch: -0.25, // ✏️ Fußspitze beim Fersenaufsatz hochgezogen (rad)
  abrollen: 0.9, // ✏️ so steil steht der Fuß beim Abdrücken über den Ballen (rad)
  flachBis: 0.14, // bis hier (Anteil vom Bodenkontakt) rollt der Fuß von der Ferse auf die ganze Sohle
  ferseHebt: 0.62, // ab hier hebt sich die Ferse
  loslassen: 0.06, // so viel (m) darf der hintere Fuß am Ende fehlen – dann geht er schon von der Spitze
  knieGestreckt: 4, // ✏️ Knie beim Aufsetzen fast gestreckt (Grad)
  knieStandmitte: 15, // ✏️ Knie in der Standmitte leicht gebeugt (Grad), echt etwa 15–20
  // Schwungbein bei 1/4, 1/2, 3/4 der Schwungzeit (Grad): Oberschenkel (+ = nach vorne) und Kniebeugung
  oberschenkel: [4, 17, 24], // ✏️
  knie: [60, 46, 14], // ✏️ ~60° kurz nach dem Abheben, dann streckt sich das Bein zum Aufsetzen
  spur: 0.06, // ✏️ Füße setzen fast hintereinander auf (m von der Mitte)
  vorlage: 3, // ✏️ Oberkörper fast aufrecht (Grad)
  beckenDrehen: 4, // ✏️ Becken dreht sich mit dem vorderen Bein (Grad)
  beckenKippen: 0.012, // Hüfte auf der Schwungbein-Seite sinkt ein bisschen (m)
  beckenSeite: 0.02, // ✏️ Becken pendelt seitlich über das Standbein (m)
  schulterDrehen: 1, // Schultern drehen dagegen (mal so viel wie das Becken)
  armMitte: -3, // Oberarm im Mittel fast senkrecht (Grad)
  armSchwung: 17, // ✏️ Arme schwingen locker vor und zurück (Grad)
  ellbogen: 16, // ✏️ Ellbogen nur leicht gebeugt (Grad) …
  ellbogenSpiel: 10, // … vorne etwas mehr
  armAbspreizen: 6,
  handNachInnen: 0.06,
  schiebenDrehen: -8, // ✏️ beim Rad-Schieben ist der Oberkörper etwas zum Rad gedreht (Grad)
};
const SPITZE = new THREE.Vector3(0, 0.012, 0.085); // Schuhspitze, vom Ballen aus gesehen
// weiches Minimum: wie Math.min, aber ohne Knick
const smin = (a, b, k = 0.012) => -k * Math.log(Math.exp(-a / k) + Math.exp(-b / k));

// ---------- Joggen: Stellschrauben (Zahlen aus Messungen an Freizeitläufern) ----------
const JOGGEN = {
  aufsetzen: 0.2, // ✏️ Knöchel setzt so weit (m) vor der Hüfte auf – Mittelfuß fast unter dem Körper
  knieAufsetzen: 18, // ✏️ Kniebeugung beim Aufsetzen (Grad), echt etwa 15–20
  knieAbdruecken: 22, // ✏️ Kniebeugung beim Abdrücken (Grad)
  abdrueckKippen: 0.85, // ✏️ wie steil der Fuß beim Abdrücken steht (rad), Ferse hoch
  federn: 0.045, // ✏️ wie tief die Hüfte beim Abfedern einsinkt (m) – zusammen mit der Flugphase ~6 cm auf und ab
  // Schwungbein nach dem Abdrücken, 4 Zwischenstellungen (Grad): Oberschenkel (+ = nach vorne) und Kniebeugung
  oberschenkel: [-8, 10, 30, 38], // ✏️ höchster Kniehub vorne ~35°
  knie: [62, 96, 100, 80], // ✏️ Fersenhub hinten: ~95° Knie = Ferse etwa auf Kniehöhe
  spur: 0.075, // ✏️ Füße setzen fast auf einer Linie auf (m von der Mitte)
  vorlage: 7, // ✏️ Oberkörper leicht nach vorne geneigt (Grad)
  kopfVorne: 2, // Hals fast senkrecht – der Kopf bleibt ruhig
  beckenDrehen: 5, // ✏️ Becken dreht sich mit dem Bein (Grad)
  schulterDrehen: 1.3, // Schultern drehen dagegen (mal so viel wie das Becken)
  armMitte: -16, // ✏️ Oberarm im Mittel etwas nach hinten (Grad)
  armSchwung: 28, // ✏️ Oberarm schwingt so weit vor und zurück (Grad)
  ellbogen: 92, // ✏️ Ellbogen etwa rechtwinklig gebeugt (Grad)
  ellbogenSpiel: 18, // vorne etwas mehr gebeugt, hinten etwas offener
  armAbspreizen: 9, // Ellbogen ein bisschen nach außen
  handNachInnen: 0.45, // Hände schwingen leicht zur Mitte, aber nicht drüber
};
// weicher Übergang 0 → 1
const glatt = (x) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};
// Weiche Kurve durch gleichmäßig verteilte Werte (u von 0 bis 1)
function kurve(w, u) {
  const n = w.length - 1;
  const f = Math.min(n - 1e-6, Math.max(0, u * n));
  const i = Math.floor(f);
  const t = f - i;
  const p0 = w[Math.max(0, i - 1)];
  const p1 = w[i];
  const p2 = w[i + 1];
  const p3 = w[Math.min(n, i + 2)];
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
}
// Knöchel liegt 9,5 cm über und 12 cm hinter dem Schuh-Mittelpunkt (Ballen); kippt mit dem Fuß
const schuhVersatz = (tilt) => new THREE.Vector3(0, 0.095, -0.12).applyAxisAngle(_xAxis, tilt);
const schuhVomKnoechel = (ankle, tilt) => ankle.clone().sub(schuhVersatz(tilt));
// Zwei Haltungen mischen (Gehen ↔ Joggen); Längen von Arm und Bein bleiben dabei gleich
function mischePose(a, b, w, L) {
  const lerp = (p, q) => p.clone().lerp(q, w);
  const fest = (von, nach, len) => von.clone().add(nach.clone().sub(von).normalize().multiplyScalar(len));
  const beine = a.beine.map((x, i) => {
    const y = b.beine[i];
    const hip = lerp(x.hip, y.hip);
    const knee = fest(hip, lerp(x.knee, y.knee), 0.44);
    const ankle = fest(knee, lerp(x.ankle, y.ankle), 0.43);
    const tilt = x.tilt + (y.tilt - x.tilt) * w;
    return { hip, knee, ankle, tilt, shoe: schuhVomKnoechel(ankle, tilt) };
  });
  const becken = lerp(a.becken, b.becken);
  const tDir = lerp(a.tDir, b.tDir).normalize();
  const top = becken.clone().addScaledVector(tDir, L);
  const arme = a.arme.map((x, i) => {
    const y = b.arme[i];
    const shp = lerp(x.shp, y.shp).add(top).sub(lerp(a.top, b.top));
    const elbow = fest(shp, lerp(x.elbow, y.elbow), 0.27);
    const hand = fest(elbow, lerp(x.hand, y.hand), 0.26);
    return { shp, elbow, hand };
  });
  return { beine, becken, top, tDir, nDir: lerp(a.nDir, b.nDir).normalize(), arme };
}

// Bein-Formen: Wade hinten gewölbt, Schienbein vorne flacher; Oberschenkel vorne kräftiger, unten Hosenbund
function beinForm(mesh, len, art) {
  const p = mesh.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + len / 2) / len; // 0 = oben (Hüfte/Knie), 1 = unten
    let x = p.getX(i);
    let z = p.getZ(i);
    if (art === 'wade') {
      // Placement: +y zeigt vom Knie zum Knöchel; -z = hinten
      if (z < 0) z *= 1 + 0.42 * Math.exp(-(((t - 0.3) / 0.17) ** 2));
      else z *= 0.9;
      x *= 1 - 0.06 * Math.exp(-(((t - 0.3) / 0.2) ** 2));
    } else {
      if (z > 0) z *= 1 + 0.14 * Math.exp(-(((t - 0.45) / 0.25) ** 2));
      else z *= 1 + 0.06 * Math.exp(-(((t - 0.4) / 0.25) ** 2));
      // kleiner Wulst am Hosenbund (Silikonband)
      const bund = Math.exp(-(((t - 0.715) / 0.018) ** 2)) * 0.05;
      x *= 1 + bund;
      z *= 1 + bund;
    }
    p.setX(i, x);
    p.setZ(i, z);
  }
  mesh.geometry.computeVertexNormals();
  return mesh;
}

// Zwei-Knochen-IK: liefert das Gelenk (Knie/Ellbogen) zwischen a und c
function ik(a, c, l1, l2, pole, out) {
  _d.copy(c).sub(a);
  let dist = _d.length();
  dist = Math.min(Math.max(dist, Math.abs(l1 - l2) + 1e-3), l1 + l2 - 1e-3);
  _d.normalize();
  const cosA = (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist);
  const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
  _p.copy(pole).addScaledVector(_d, -pole.dot(_d)).normalize();
  return out.copy(a).addScaledVector(_d, cosA * l1).addScaledVector(_p, sinA * l1);
}

// Feine Stoffstruktur (Strick) als Normalenkarte: lässt Trikot und Hose wie echten Stoff wirken
let fabricNormal = null;
function fabricNormalMap() {
  if (fabricNormal) return fabricNormal;
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const h = (x, y) => {
    x = (x + S) % S;
    y = (y + S) % S;
    return 0.25 * Math.sin((x * Math.PI) / 2) * Math.sin((y * Math.PI) / 4) + 0.15 * Math.sin(((x + y) * Math.PI) / 4);
  };
  const img = ctx.createImageData(S, S);
  const n = new THREE.Vector3();
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      n.set(-(h(x + 1, y) - h(x - 1, y)) * 2, -(h(x, y + 1) - h(x, y - 1)) * 2, 1).normalize();
      const k = (y * S + x) * 4;
      img.data[k] = (n.x * 0.5 + 0.5) * 255;
      img.data[k + 1] = (n.y * 0.5 + 0.5) * 255;
      img.data[k + 2] = (n.z * 0.5 + 0.5) * 255;
      img.data[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  fabricNormal = new THREE.CanvasTexture(c);
  fabricNormal.wrapS = fabricNormal.wrapT = THREE.RepeatWrapping;
  fabricNormal.repeat.set(10, 10);
  return fabricNormal;
}

// Handschuh mit Fingern, die den Griff umfassen (+y = Richtung Unterarm -> Hand)
function gloveGeometry(side) {
  const parts = [new THREE.BoxGeometry(0.058, 0.068, 0.03)];
  for (let k = 0; k < 4; k++) {
    const f = new THREE.CapsuleGeometry(0.0095, 0.034, 2, 6);
    f.rotateX(1.15);
    f.translate(-0.021 + k * 0.014, 0.046, 0.02);
    parts.push(f);
  }
  const thumb = new THREE.CapsuleGeometry(0.0105, 0.03, 2, 6);
  thumb.rotateZ(side * 0.9);
  thumb.translate(side * 0.034, 0.018, 0.012);
  parts.push(thumb);
  return mergeGeometries(parts);
}

// Körperteil mit Muskelform: radius(t) für t = 0 (Anfang) bis 1 (Ende), entlang der Länge len
function shapedLimb(len, radius, mat, steps = 10, um = 14) {
  const pts = [];
  for (let k = 0; k <= steps; k++) {
    const t = k / steps;
    pts.push(new THREE.Vector2(radius(t), -len / 2 + t * len));
  }
  const m = new THREE.Mesh(new THREE.LatheGeometry(pts, um), mat);
  m.castShadow = true;
  return m;
}

// Socke: oben (Bund) etwas weiter, zum Knöchel enger; +y zeigt zum Knöchel (placeLimb)
function sockeMesh(mat) {
  const pts = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12; // 0 = Bund oben, 1 = Knöchel
    const r = 0.047 - 0.007 * t + (t < 0.12 ? 0.003 * (1 - t / 0.12) : 0);
    pts.push(new THREE.Vector2(r, -0.09 + t * 0.18));
  }
  const g = new THREE.LatheGeometry(pts, 20);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  return m;
}
// Strick-Textur der Socken: feine Längsrippen, zwei Streifen in Trikotfarbe am Bund
function drawSocke(canvas, akzent) {
  const g = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  g.fillStyle = '#f7f7f4';
  g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(0,0,0,0.07)';
  for (let x = 0; x < W; x += 6) g.fillRect(x, 0, 2, H);
  // Lathe: v = 0 oben am Bund (Bild unten, flipY), v = 1 am Knöchel
  g.fillStyle = akzent;
  g.fillRect(0, H * 0.84, W, H * 0.05);
  g.fillRect(0, H * 0.74, W, H * 0.05);
  // dunklerer, gerippter Bund ganz oben
  g.fillStyle = 'rgba(0,0,0,0.12)';
  g.fillRect(0, H * 0.93, W, H * 0.07);
}

function limb(len, r, mat) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, Math.max(0.01, len - 2 * r), 4, 10), mat);
  m.castShadow = true;
  return m;
}

const rimCache = {};
// Brillenglas: Verlauf von dunkel oben nach hell unten, zwei Lüftungsschlitze oben (durchsichtig)
let glasTex = null;
function brillenglasTextur() {
  if (glasTex) return glasTex;
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const g = c.getContext('2d');
  const v = g.createLinearGradient(0, 0, 0, 64);
  // (flipY aus: Bildzeile 0 = Unterkante des Glases)
  v.addColorStop(0, '#ffd08a');
  v.addColorStop(0.55, '#ff6a2a');
  v.addColorStop(1, '#5a2a8a');
  g.fillStyle = v;
  g.fillRect(0, 0, 256, 64);
  g.globalCompositeOperation = 'destination-out';
  for (const x of [0.12, 0.88]) {
    g.beginPath();
    g.ellipse(x * 256, 55, 14, 3.2, 0, 0, Math.PI * 2);
    g.fill();
  }
  glasTex = new THREE.CanvasTexture(c);
  glasTex.colorSpace = THREE.SRGBColorSpace;
  glasTex.flipY = false;
  return glasTex;
}

// Bremsscheibe: Bremsspur mit Bohrungen und welligem Rand, innen ein Stern mit Löchern (alles andere durchsichtig)
let bremsTex = null;
function bremsscheibeTextur() {
  if (bremsTex) return bremsTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const M = 128;
  const R = 128; // = 0,081 m
  const r = (m) => (m / 0.081) * R;
  // Bremsspur mit welligem Außenrand
  g.fillStyle = '#d4d7dc';
  g.beginPath();
  for (let i = 0; i <= 360; i++) {
    const a = (i / 360) * Math.PI * 2;
    const rr = r(0.079) + Math.sin(a * 12) * 2.5;
    i ? g.lineTo(M + Math.cos(a) * rr, M + Math.sin(a) * rr) : g.moveTo(M + Math.cos(a) * rr, M + Math.sin(a) * rr);
  }
  g.closePath();
  g.arc(M, M, r(0.06), 0, Math.PI * 2, true);
  g.fill('evenodd');
  // Bohrungen in der Bremsspur
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    const rr = i % 2 ? r(0.067) : r(0.073);
    g.beginPath();
    g.arc(M + Math.cos(a) * rr, M + Math.sin(a) * rr, 3, 0, Math.PI * 2);
    g.fill();
  }
  g.globalCompositeOperation = 'source-over';
  // Stern: sechs geschwungene Arme zur Mitte (dunkel)
  g.fillStyle = '#2b2d33';
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.save();
    g.translate(M, M);
    g.rotate(a);
    g.beginPath();
    g.moveTo(r(0.016), -6);
    g.quadraticCurveTo(r(0.04), -14, r(0.063), -9);
    g.lineTo(r(0.063), 9);
    g.quadraticCurveTo(r(0.04), 2, r(0.016), 6);
    g.closePath();
    g.fill();
    g.restore();
  }
  g.beginPath();
  g.arc(M, M, r(0.022), 0, Math.PI * 2);
  g.fill();
  // Ring zwischen Stern und Spur
  g.strokeStyle = '#9ea2a9';
  g.lineWidth = 3;
  g.beginPath();
  g.arc(M, M, r(0.061), 0, Math.PI * 2);
  g.stroke();
  bremsTex = new THREE.CanvasTexture(c);
  bremsTex.colorSpace = THREE.SRGBColorSpace;
  return bremsTex;
}

function rimTexture(style = 'gold') {
  if (rimCache[style]) return rimCache[style];
  const team = style === 'team';
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#121214';
  ctx.fillRect(0, 0, 512, 512);
  // Carbon-Muster
  for (let i = 0; i < 512; i += 4) {
    ctx.fillStyle = i % 8 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.2)';
    ctx.fillRect(i, 0, 2, 512);
  }
  ctx.translate(256, 256);
  const text = ` ${CONFIG.gameName.toUpperCase()} `;
  // Team-Design: große, weiße Blockschrift auf der tiefen Felge
  ctx.font = team ? '800 46px "Barlow Condensed", Arial, sans-serif' : '800 30px "Barlow Condensed", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const rad = team ? 226 : 233;
  for (let rep = 0; rep < 2; rep++) {
    let ang = rep * Math.PI;
    for (const ch of text) {
      const w = ctx.measureText(ch).width;
      ang += w / 2 / rad;
      ctx.save();
      ctx.rotate(ang);
      ctx.translate(0, -rad);
      ctx.fillStyle = team ? '#f2f2ee' : CONFIG.colors.gold;
      ctx.fillText(ch, 0, 0);
      ctx.restore();
      ang += w / 2 / rad;
    }
  }
  if (!team) {
    ctx.strokeStyle = CONFIG.colors.accent;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 214, 0.3, 1.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 214, 0.3 + Math.PI, 1.4 + Math.PI);
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  rimCache[style] = t;
  return t;
}

// Maske für das Team-Design: oben Weiß (Rahmenfarbe), unten Schwarz, dazwischen ein gezackter Übergang.
// from = ab welcher Höhe (0 = Rohranfang, 1 = Rohrende) die Farbe beginnt, flip = umgedreht,
// rows/gap = wie viele Zackenreihen und wie weit auseinander (kleiner = kürzerer Übergang).
const maskCache = {};
function fadeMask(from, flip = false, rows = 7, gap = 20) {
  const key = `${from}-${flip}-${rows}-${gap}`;
  if (maskCache[key]) return maskCache[key];
  const W = 128;
  const H = 512;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  if (flip) {
    ctx.translate(0, H);
    ctx.scale(1, -1);
  }
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  const y0 = (1 - from) * H; // Canvas-Oben = Rohrende
  ctx.fillRect(0, 0, W, y0);
  // Zacken, die nach unten immer kleiner und seltener werden
  for (let row = 0; row < rows; row++) {
    const n = 8;
    const size = 26 - row * 3.2;
    const y = y0 + row * gap;
    for (let i = 0; i < n; i++) {
      if (row > 2 && (i + row) % 2) continue;
      const x = ((i + (row % 2) * 0.5) / n) * W;
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y - 2);
      ctx.lineTo(x + size / 2, y - 2);
      ctx.lineTo(x, y + size * 1.1);
      ctx.closePath();
      ctx.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  maskCache[key] = t;
  return t;
}

// Breiter Reifen mit Stollen: auf der Lauffläche stehen kleine Klötze nach außen
function cxTireGeometry() {
  const R = 0.318;
  const g = new THREE.TorusGeometry(R, 0.026, 10, 144);
  const pos = g.attributes.position;
  const cols = [];
  const p = new THREE.Vector3();
  const c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i);
    const ang = Math.atan2(p.y, p.x);
    c.set(Math.cos(ang) * R, Math.sin(ang) * R, 0);
    const off = p.clone().sub(c);
    const outward = off.dot(c) / (off.length() * R + 1e-6);
    const knob = (ang / (Math.PI * 2)) * 40;
    if (outward > 0.2 && knob - Math.floor(knob) < 0.5) p.addScaledVector(off.normalize(), 0.006);
    pos.setXYZ(i, p.x, p.y, p.z);
    // Lauffläche schwarz, Seitenwände honigfarben (wie bei Cycle-Cross-Reifen üblich)
    const c3 = outward > 0.35 ? TREAD : SIDEWALL;
    cols.push(c3.r, c3.g, c3.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  g.computeVertexNormals();
  return g;
}
const TREAD = new THREE.Color('#1e1a16');
const SIDEWALL = new THREE.Color('#c39a5a');

// Weltmeister-Lackierung: Rohr in Rahmenfarbe mit den fünf Regenbogenstreifen zwischen from und to
// (0 = Rohranfang, 1 = Rohrende). Reihenfolge von oben: Blau, Rot, Schwarz, Gelb, Grün.
const rainbowCache = {};
// ---------- Helm ----------
// Schale als Folge von Bögen von vorne (t = 0) nach hinten (t = 1). Jeder Bogen geht vom linken
// Rand über den Scheitel zum rechten Rand. UV: u = vorne → hinten, v = links → rechts (für die Schlitze).
const HELM_RINGE = 64;
const HELM_UM = 56;
const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
function helmForm(t) {
  const z = 0.122 - t * 0.3;
  const rund = (m, vorn, hinten) => {
    const d = (t - m) / (t < m ? vorn : hinten);
    return Math.sqrt(Math.max(0, 1 - d * d));
  };
  const w = 0.11 * rund(0.42, 0.42, 0.58) ** 0.9;
  const h = 0.122 * rund(0.4, 0.4, 0.6) ** 0.85;
  // Unterkante: vorne über den Augenbrauen, an den Seiten über den Ohren, hinten tief am Hinterkopf
  const unten = 0.03 - 0.06 * smooth(0, 0.86, t) + 0.012 * smooth(0.86, 1, t);
  return { z, w, h, unten };
}
function helmPunkt(t, a, out) {
  const f = helmForm(t);
  const c = Math.cos(a);
  return out.set(f.w * Math.sin(a), f.unten + f.h * Math.sign(c) * Math.abs(c) ** 0.75, f.z);
}
// Wie tief liegt der Helm an Stelle (t = vorne→hinten, v = links→rechts) in einem Schlitz? (Textur 256 × 128)
function schlitzTiefe(t, v) {
  let best = 0;
  for (const [y, x0, x1, d] of HELM_SCHLITZE) {
    const px = Math.min(Math.max(t, x0), x1);
    const dist = Math.hypot((t - px) * 256, (v - y) * 128);
    const r = (d * 128) / 2;
    const k = 1 - smooth(r * 0.7, r * 1.25, dist);
    best = Math.max(best, k);
  }
  return best * 0.007;
}
function helmetGeometry() {
  const pos = [];
  const uv = [];
  const idx = [];
  const p = new THREE.Vector3();
  for (let r = 0; r <= HELM_RINGE; r++) {
    const t = r / HELM_RINGE;
    for (let k = 0; k <= HELM_UM; k++) {
      const v = k / HELM_UM;
      helmPunkt(t, (v - 0.5) * Math.PI, p);
      // Lüftungsschlitze richtig eingetieft (gleiche Lage wie in der Textur, kit.js)
      const tief = schlitzTiefe(t, v);
      if (tief > 0) {
        const f = helmForm(t);
        _k.set(p.x, p.y - f.unten, 0).normalize();
        p.addScaledVector(_k, -tief);
      }
      pos.push(p.x, p.y, p.z);
      uv.push(t, v);
    }
  }
  const n = HELM_UM + 1;
  for (let r = 0; r < HELM_RINGE; r++) {
    for (let k = 0; k < HELM_UM; k++) {
      const a = r * n + k;
      idx.push(a, a + 1, a + n, a + 1, a + n + 1, a + n);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
// dünner Rand entlang der Unterkante (links und rechts)
function helmetRimGeometry() {
  const pts = [];
  const p = new THREE.Vector3();
  for (let r = HELM_RINGE; r >= 0; r--) pts.push(helmPunkt(r / HELM_RINGE, -Math.PI / 2, p).clone());
  for (let r = 1; r <= HELM_RINGE; r++) pts.push(helmPunkt(r / HELM_RINGE, Math.PI / 2, p).clone());
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.0045, 5, false);
}

function rainbowTexture(base, from, to, topIsStart) {
  const key = `${base}-${from}-${to}-${topIsStart}`;
  if (rainbowCache[key]) return rainbowCache[key];
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 32, 512);
  const colors = ['#0b6cb5', '#d81e2c', '#111111', '#f5c400', '#00a14b'];
  const band = (to - from) / colors.length;
  colors.forEach((col, i) => {
    // Canvas oben = Rohrende (v = 1)
    const v1 = topIsStart ? from + band * (i + 1) : to - band * i;
    ctx.fillStyle = col;
    ctx.fillRect(0, (1 - v1) * 512, 32, band * 512 + 0.5);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  rainbowCache[key] = t;
  return t;
}

export class Bike {
  constructor() {
    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.wheelAngle = 0;
    this.crankAngle = 0;

    // Sportstoff: leichter Glanz (sheen) und feine Strickstruktur
    const fabric = (opts) =>
      new THREE.MeshPhysicalMaterial({
        roughness: 0.68,
        sheen: 0.7,
        sheenRoughness: 0.45,
        sheenColor: new THREE.Color('#ffffff'),
        normalMap: fabricNormalMap(),
        normalScale: new THREE.Vector2(0.35, 0.35),
        ...opts,
      });
    const m = (this.mats = {
      frame: new THREE.MeshPhysicalMaterial({
        color: CONFIG.colors.bikeFrame,
        metalness: 0.4,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
      accent: new THREE.MeshPhysicalMaterial({ color: CONFIG.colors.gold, metalness: 0.7, roughness: 0.25, clearcoat: 1 }),
      black: new THREE.MeshStandardMaterial({ color: '#17171a', roughness: 0.45, metalness: 0.3 }),
      alu: new THREE.MeshStandardMaterial({ color: '#b9bcc2', roughness: 0.25, metalness: 1 }),
      tire: new THREE.MeshStandardMaterial({ color: '#1c1c1c', roughness: 0.9 }),
      cxTire: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.95 }),
      tape: new THREE.MeshStandardMaterial({ color: '#f1f1ee', roughness: 0.7 }),
      // Schaltgruppe (Farben je nach Shimano/SRAM-Modell)
      crankArm: new THREE.MeshPhysicalMaterial({ color: '#26272c', metalness: 0.6, roughness: 0.3, clearcoat: 1 }),
      ring: new THREE.MeshStandardMaterial({ color: '#1b1c20', metalness: 0.7, roughness: 0.3 }),
      groupAccent: new THREE.MeshStandardMaterial({ color: '#b9bdc4', metalness: 0.8, roughness: 0.25 }),
      jersey: fabric({}),
      // Haut: weicher, warmer Schimmer statt Plastik
      skin: new THREE.MeshPhysicalMaterial({
        color: '#e2ad8c',
        roughness: 0.55,
        sheen: 0.35,
        sheenRoughness: 0.7,
        sheenColor: new THREE.Color('#ff9f7a'),
      }),
      shorts: fabric({ color: '#16161b', roughness: 0.6 }),
      shoe: new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.4 }),
      helmet: new THREE.MeshPhysicalMaterial({ roughness: 0.3, clearcoat: 1 }),
      // verspiegelte Brillengläser und schwarzer Rahmen
      glasses: new THREE.MeshPhysicalMaterial({
        color: '#ff8a2a',
        roughness: 0.05,
        metalness: 1,
        envMapIntensity: 2.2,
        iridescence: 1,
        iridescenceIOR: 1.8,
        iridescenceThicknessRange: [200, 700],
      }),
      glassFrame: new THREE.MeshStandardMaterial({ color: '#111114', roughness: 0.4 }),
      glove: fabric({ color: '#f1f1ee', roughness: 0.75 }),
      hair: new THREE.MeshPhysicalMaterial({ color: '#9c6a3c', roughness: 0.65, sheen: 0.6, sheenRoughness: 0.4, sheenColor: new THREE.Color('#c08a5a') }),
      jerseyPlain: fabric({}),
      sole: new THREE.MeshStandardMaterial({ color: '#141416', roughness: 0.6 }),
      sleeve: fabric({}),
      // Socken: weißer Strick mit Rippen und Streifen in Trikotfarbe am Bund
      sock: fabric({ roughness: 0.85 }),
      thigh: fabric({ roughness: 0.6 }),
    });
    // Vorderer, farbiger Teil beim Team-Design (mit gezacktem Übergang)
    const paint = (map) =>
      new THREE.MeshPhysicalMaterial({ map, roughness: 0.3, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
    this.teamMats = {
      // Unterrohr: nur oben weiß, damit der Schriftzug in der Mitte auf Schwarz steht
      down: paint(fadeMask(0.86, false, 4, 12)),
      top: paint(fadeMask(0.4)),
      fork: paint(fadeMask(0.45, true)),
      solid: paint(null),
    };
    this.frameColor = CONFIG.colors.bikeFrame;
    this.design = 'solid';

    this.buildFrame(m);
    this.buildWheels(m);
    this.buildDrivetrain(m);
    this.buildCockpit(m);
    this.buildRider(m);
    this.buildKit(m);
    this.buildPlates();
    this.buildDecals();
    this.setBrand(DEFAULT_LOOK.brand);
    this.update(0, 0, 0, 0);
  }

  buildFrame(m) {
    const R = V(0, WHEEL_R, -0.5);
    const ST = V(0, 0.8, -0.24);
    const HT = V(0, 0.86, 0.36);
    const HB = V(0, 0.7, 0.4);
    const f = this.root;
    // Rohre, die beim Team-Design umgefärbt werden
    this.tubes = {
      down: tube(BB, HB, 0.032, m.frame, 0.027),
      top: tube(ST, HT, 0.017, m.frame, 0.016),
      head: tube(HB, HT, 0.026, m.frame),
    };
    // Aero-Form: von der Seite höher als von vorne
    this.tubes.down.scale.z = 1.9;
    this.tubes.top.scale.z = 1.4;
    this.tubes.head.scale.z = 1.3;
    f.add(this.tubes.down, this.tubes.top, this.tubes.head);
    // weiche Übergänge an den Rohrverbindungen (oben und unten am Steuerrohr, am Sitzrohr oben)
    this.gelenke = [];
    for (const [p, r, sz] of [[HT, 0.03, 1.3], [HB, 0.034, 1.5], [ST, 0.024, 1.4]]) {
      const k = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), m.frame);
      k.position.copy(p);
      k.scale.set(1, 1, sz);
      k.castShadow = true;
      f.add(k);
      this.gelenke.push(k);
    }
    this.tubes.seat = tube(BB, ST, 0.019, m.frame, 0.017);
    this.tubes.seat.scale.z = 1.5; // Aero-Sitzrohr
    f.add(this.tubes.seat);
    // Tretlagergehäuse
    const tretlager = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.085, 16), m.frame);
    tretlager.rotation.z = Math.PI / 2;
    tretlager.position.copy(BB);
    f.add(tretlager);
    this.frameParts = [tretlager];
    for (const s of [-1, 1]) {
      // Kettenstreben: vorne kräftig, hinten schlanker
      const ks = tube(V(s * 0.03, BB.y, BB.z - 0.01), V(s * 0.062, R.y, R.z + 0.02), 0.013, m.frame, 0.008);
      ks.scale.z = 1.4;
      // tief angesetzte Sitzstreben wie bei modernen Aero-Rädern
      const ss = tube(V(s * 0.014, 0.63, -0.2), V(s * 0.062, R.y + 0.01, R.z + 0.015), 0.011, m.frame, 0.007);
      ss.scale.z = 1.5;
      // Ausfallende
      const af = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.05, 0.05), m.frame);
      af.position.set(s * 0.062, R.y, R.z + 0.012);
      f.add(ks, ss, af);
      this.frameParts.push(ks, ss, af);
    }
    // Zierstreifen auf dem Oberrohr
    this.stripe = tube(V(0, 0.812, -0.15), V(0, 0.845, 0.2), 0.0175, m.accent, 0.0175);
    f.add(this.stripe);
    // Sattelstütze und Sattel
    const stuetze = tube(ST, V(0, 0.88, -0.265), 0.0135, m.black);
    stuetze.scale.z = 1.6; // Aero-Sattelstütze
    f.add(stuetze);
    // Sattelklemme
    const klemme = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.016, 12), m.black);
    klemme.position.copy(ST).add(V(0, 0.006, -0.002));
    f.add(klemme);
    // Rotes Rücklicht an der Sattelstütze
    const licht = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.045, 0.02),
      new THREE.MeshStandardMaterial({ color: '#ff2a2a', emissive: '#ff0000', emissiveIntensity: 0.8 })
    );
    licht.position.set(0, 0.83, -0.285);
    f.add(licht);
    // Sattel: vorne schmale Nase, hinten breit, mit Aussparung in der Mitte und Streben darunter
    const form = new THREE.Shape();
    const umriss = [
      [0, 0.135], [0.018, 0.13], [0.022, 0.08], [0.03, 0.02], [0.055, -0.05], [0.07, -0.1], [0.066, -0.125], [0.04, -0.135], [0, -0.128],
    ];
    form.moveTo(0, umriss[0][1]);
    for (const [x, y] of umriss.slice(1)) form.lineTo(x, y);
    for (const [x, y] of umriss.slice(0, -1).reverse()) form.lineTo(-x, y);
    const loch = new THREE.Path();
    loch.absellipse(0, -0.045, 0.012, 0.05, 0, Math.PI * 2);
    form.holes.push(loch);
    const sg = new THREE.ExtrudeGeometry(form, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.008, bevelSegments: 3, curveSegments: 10 });
    sg.rotateX(Math.PI / 2);
    const saddle = new THREE.Mesh(sg, new THREE.MeshPhysicalMaterial({ color: '#16161a', roughness: 0.55, clearcoat: 0.3 }));
    saddle.rotation.x = -0.05;
    saddle.position.set(0, 0.918, -0.235);
    saddle.castShadow = true;
    f.add(saddle);
    for (const sd of [-1, 1]) {
      const strebe = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(sd * 0.012, 0.9, -0.12), V(sd * 0.022, 0.888, -0.2), V(sd * 0.03, 0.888, -0.3), V(sd * 0.045, 0.9, -0.355)]), 10, 0.0035, 6),
        m.alu,
      );
      f.add(strebe);
    }
    // Trinkflasche am Sitzrohr, damit der Schriftzug auf dem Unterrohr frei bleibt
    this.bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 12), m.accent);
    this.bottle.position.copy(BB).lerp(ST, 0.5);
    this.bottle.position.z += 0.06;
    this.bottle.quaternion.setFromUnitVectors(UP, _d.copy(ST).sub(BB).normalize());
    f.add(this.bottle);
    // Deckel und Flaschenhalter
    const deckel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.03, 0.03, 12), m.black);
    deckel.position.y = 0.115;
    this.bottle.add(deckel);
    for (const sd of [-1, 1]) {
      const halter = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.003, 4, 16, Math.PI * 0.7), m.black);
      halter.rotation.y = Math.PI / 2;
      halter.rotation.z = sd > 0 ? -Math.PI * 0.35 : Math.PI * 0.65;
      halter.position.y = sd * 0.05;
      halter.rotation.x = Math.PI / 2;
      this.bottle.add(halter);
    }
  }

  makeWheel(m, rimMat) {
    const g = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.317, 0.023, 14, 64), m.tire);
    tire.rotation.y = Math.PI / 2;
    tire.castShadow = true;
    g.add(tire);
    // Cyclocross: dicker Reifen mit Stollen (wird mit setTires umgeschaltet)
    const cx = new THREE.Mesh(cxTireGeometry(), m.cxTire);
    cx.rotation.y = Math.PI / 2;
    cx.castShadow = true;
    cx.visible = false;
    g.add(cx);
    (this.roadTires ||= []).push(tire);
    (this.cxTires ||= []).push(cx);
    // Goldene Speichenreflektoren
    for (let k = 0; k < 4; k++) {
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.008), m.accent);
      const ang = (k * Math.PI) / 2;
      r.position.set(0, Math.sin(ang) * 0.2, Math.cos(ang) * 0.2);
      r.rotation.x = -ang;
      g.add(r);
    }
    for (const s of [-1, 1]) {
      const rim = new THREE.Mesh(new THREE.RingGeometry(0.232, 0.306, 56, 1), rimMat);
      rim.rotation.y = (s * Math.PI) / 2;
      rim.position.x = s * 0.012;
      g.add(rim);
    }
    // Felgenrand: runde Kante außen und innen, damit die Felge nicht mehr flach wirkt
    for (const rr of [0.3, 0.234]) {
      const edge = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.006, 6, 56), m.alu);
      edge.rotation.y = Math.PI / 2;
      g.add(edge);
    }
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.306, 0.306, 0.024, 56, 1, true), m.black);
    band.rotation.z = Math.PI / 2;
    g.add(band);
    const spokes = [];
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const side = i % 2 ? 1 : -1;
      const start = V(side * 0.03, Math.cos(a) * 0.025, Math.sin(a) * 0.025);
      const end = V(side * 0.006, Math.cos(a) * 0.234, Math.sin(a) * 0.234);
      const len = start.distanceTo(end);
      const sg = new THREE.CylinderGeometry(0.0022, 0.0022, len, 4);
      sg.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, end.clone().sub(start).normalize()));
      sg.translate((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2);
      spokes.push(sg);
    }
    g.add(new THREE.Mesh(mergeGeometries(spokes), m.alu));
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.1, 12), m.alu);
    hub.rotation.z = Math.PI / 2;
    g.add(hub);
    // Nabenflansche (die kleinen Scheiben, an denen die Speichen hängen)
    for (const sd of [-1, 1]) {
      const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.008, 16), m.alu);
      fl.rotation.z = Math.PI / 2;
      fl.position.x = sd * 0.03;
      g.add(fl);
    }
    // Ventil am Reifen
    const valve = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.03, 6), m.alu);
    valve.position.set(0, 0.29, 0);
    g.add(valve);
    return g;
  }

  buildWheels(m) {
    const rimMat = (this.rimMat = new THREE.MeshStandardMaterial({
      map: rimTexture(),
      roughness: 0.3,
      metalness: 0.3,
      side: THREE.DoubleSide,
    }));
    this.rearWheel = this.makeWheel(m, rimMat);
    this.rearWheel.position.set(0, WHEEL_R, -0.5);
    this.root.add(this.rearWheel);
    // Zeitfahren: geschlossenes Scheibenrad hinten
    const carbon = new THREE.MeshPhysicalMaterial({ color: '#1a1b1f', roughness: 0.35, metalness: 0.3, clearcoat: 1 });
    // linsenförmig: in der Mitte dicker, damit die Speichen ganz verdeckt sind
    const lens = [V(0.001, 0.04, 0), V(0.03, 0.038, 0), V(0.306, 0.013, 0), V(0.306, -0.013, 0), V(0.03, -0.038, 0), V(0.001, -0.04, 0)].map((p) => new THREE.Vector2(p.x, p.y));
    this.disc = new THREE.Mesh(new THREE.LatheGeometry(lens, 56), carbon);
    this.disc.rotation.z = Math.PI / 2;
    this.disc.visible = false;
    this.rearWheel.add(this.disc);

    // Lenkbarer Vorderbau: dreht sich um eine Achse beim Steuerrohr
    this.steer = new THREE.Group();
    this.steer.position.set(0, 0, 0.45);
    this.root.add(this.steer);
    this.frontWheel = this.makeWheel(m, rimMat);
    this.frontWheel.position.set(0, WHEEL_R, 0.05);
    this.steer.add(this.frontWheel);
    // Zeitfahren: hohe Carbonfelge vorne
    this.deepRim = new THREE.Group();
    for (const s of [-1, 1]) {
      const r = new THREE.Mesh(new THREE.RingGeometry(0.17, 0.307, 56, 1), carbon);
      r.rotation.y = (s * Math.PI) / 2;
      r.position.x = s * 0.014;
      this.deepRim.add(r);
    }
    this.deepRim.visible = false;
    this.frontWheel.add(this.deepRim);
    this.forkTubes = [-1, 1].map((s) => {
      const t = tube(V(s * 0.045, 0.7, -0.05), V(s * 0.05, WHEEL_R, 0.05), 0.011, m.frame, 0.018);
      t.scale.z = 1.7; // Aero-Gabel: von der Seite breit
      return t;
    });
    this.forkCrown = tube(V(0, 0.7, -0.05), V(0, 0.72, -0.05), 0.03, m.frame);
    this.steer.add(...this.forkTubes, this.forkCrown);
    // Kassette: 11 Ritzel, außen klein, innen groß
    const ritzel = [];
    for (let k = 0; k < 11; k++) {
      const r = 0.026 + k * 0.0024;
      const g = zahnrad(r, Math.round(r * 400), 0.0025);
      g.rotateY(Math.PI / 2);
      g.translate(-0.062 + k * 0.0034, 0, 0);
      ritzel.push(g);
    }
    const cas = new THREE.Mesh(mergeGeometries(ritzel), m.alu);
    cas.position.set(0, WHEEL_R, -0.5);
    this.root.add(cas);
    // Scheibenbremsen: Bremsscheibe mit Bohrungen und Stern (dreht sich mit), Bremssattel am Rahmen bzw. an der Gabel
    const scheibe = new THREE.MeshStandardMaterial({ map: bremsscheibeTextur(), alphaTest: 0.5, metalness: 0.85, roughness: 0.32, side: THREE.DoubleSide });
    for (const w of [this.rearWheel, this.frontWheel]) {
      const d = new THREE.Mesh(new THREE.CircleGeometry(0.081, 48), scheibe);
      d.rotation.y = Math.PI / 2;
      d.position.x = 0.046;
      w.add(d);
      const nabe = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.012, 16), m.black);
      nabe.rotation.z = Math.PI / 2;
      nabe.position.x = 0.046;
      w.add(nabe);
    }
    const RoundBox = (w, h, d, r) => {
      const g = new THREE.BoxGeometry(w, h, d, 4, 4, 4);
      const p = g.attributes.position;
      const v = new THREE.Vector3();
      const hw = w / 2 - r, hh = h / 2 - r, hd = d / 2 - r;
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        const c = new THREE.Vector3(Math.max(-hw, Math.min(hw, v.x)), Math.max(-hh, Math.min(hh, v.y)), Math.max(-hd, Math.min(hd, v.z)));
        v.sub(c).normalize().multiplyScalar(r).add(c);
        p.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals();
      return g;
    };
    const sattelMat = new THREE.MeshPhysicalMaterial({ color: '#2a2b30', metalness: 0.6, roughness: 0.35, clearcoat: 0.6 });
    const sattel = () => {
      const g = new THREE.Group();
      // zwei Hälften links und rechts der Scheibe, oben verbunden
      for (const sx of [-1, 1]) {
        const h = new THREE.Mesh(RoundBox(0.014, 0.032, 0.062, 0.006), sattelMat);
        h.position.x = sx * 0.01;
        h.castShadow = true;
        g.add(h);
      }
      const bruecke = new THREE.Mesh(RoundBox(0.034, 0.012, 0.05, 0.005), sattelMat);
      bruecke.position.y = 0.018;
      g.add(bruecke);
      // Zierplatte außen in der Farbe der Schaltgruppe
      const zier = new THREE.Mesh(RoundBox(0.003, 0.02, 0.046, 0.0014), m.groupAccent);
      zier.position.set(0.0175, -0.001, 0);
      g.add(zier);
      // Bremsbeläge im Schlitz (links und rechts der Scheibe)
      for (const sx of [-1, 1]) {
        const belag = new THREE.Mesh(new THREE.BoxGeometry(0.002, 0.016, 0.036), new THREE.MeshStandardMaterial({ color: '#8a7a5c', roughness: 0.8 }));
        belag.position.set(sx * 0.0035, -0.004, 0);
        g.add(belag);
      }
      // Entlüftungsnippel oben
      const nippel = new THREE.Mesh(new THREE.CylinderGeometry(0.0025, 0.003, 0.008, 8), m.alu);
      nippel.position.set(0.006, 0.027, 0.012);
      g.add(nippel);
      // Befestigungsplatte mit zwei Schrauben (zum Rahmen bzw. zur Gabel)
      const platte = new THREE.Mesh(RoundBox(0.01, 0.012, 0.07, 0.004), sattelMat);
      platte.position.set(0.004, 0.03, 0);
      g.add(platte);
      for (const z of [-0.026, 0.026]) {
        const kopf = new THREE.Mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.005, 10), m.alu);
        kopf.position.set(0.004, 0.038, z);
        g.add(kopf);
      }
      for (const z of [-0.018, 0.018]) {
        const schraube = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.006, 8), m.alu);
        schraube.rotation.z = Math.PI / 2;
        schraube.position.set(0.019, 0.004, z);
        g.add(schraube);
      }
      return g;
    };
    const hs = sattel();
    hs.position.set(0.046, WHEEL_R - 0.06, -0.445);
    hs.rotation.x = -0.75;
    this.root.add(hs);
    const vs = sattel();
    vs.position.set(0.046, WHEEL_R - 0.062, -0.008);
    vs.rotation.x = 0.8;
    this.steer.add(vs);
    // Bremsleitungen: vorne an der Gabel hoch zum Lenker, hinten an der Kettenstrebe entlang
    const leitung = new THREE.MeshStandardMaterial({ color: '#141416', roughness: 0.5 });
    this.steer.add(
      new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(0.058, WHEEL_R - 0.04, -0.02), V(0.06, WHEEL_R + 0.12, 0.0), V(0.055, 0.7, -0.03), V(0.05, 0.84, -0.05), V(0.12, 0.9, 0.02)]), 24, 0.0028, 5),
        leitung,
      ),
    );
    this.root.add(
      new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(0.05, WHEEL_R - 0.035, -0.43), V(0.04, 0.3, -0.25), V(0.03, 0.28, -0.1), V(0.03, 0.42, 0.05), V(0.03, 0.66, 0.33)]), 30, 0.0025, 5),
        leitung,
      ),
    );
  }

  buildDrivetrain(m) {
    this.crank = new THREE.Group();
    this.crank.position.copy(BB);
    this.root.add(this.crank);
    // Zwei Kettenblätter mit echten Zähnen (53 und 39)
    for (const [r, n, x] of [[0.105, 53, -0.066], [0.078, 39, -0.059]]) {
      const g = zahnrad(r, n, 0.004, r - 0.02);
      g.rotateY(Math.PI / 2);
      const ring = new THREE.Mesh(g, m.ring);
      ring.position.x = x;
      ring.castShadow = true;
      this.crank.add(ring);
    }
    // Spinne: vier Arme zu den Kettenblättern
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.075, 0.016), m.crankArm);
      sp.position.set(-0.07, Math.cos(a) * 0.045, Math.sin(a) * 0.045);
      sp.rotation.x = a;
      this.crank.add(sp);
    }
    // Kurbelarme: am Tretlager breit, zum Pedal schmaler, runde Enden
    for (const s of [-1, 1]) {
      const arm = tube(V(s * -0.085, 0, 0), V(s * -0.088, -s * CRANK, 0), 0.016, m.crankArm, 0.011, 12);
      arm.scale.z = 1.6; // von der Seite breit, von vorne schmal
      this.crank.add(arm);
      const ende = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.012, 12), m.crankArm);
      ende.rotation.z = Math.PI / 2;
      ende.position.set(s * -0.088, -s * CRANK, 0);
      this.crank.add(ende);
    }
    const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.19, 10), m.black);
    axle.rotation.z = Math.PI / 2;
    this.crank.add(axle);
    // Ziermarke außen auf der Kurbel (z. B. rot bei SRAM Red)
    const badge = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.004, 20), m.groupAccent);
    badge.rotation.z = Math.PI / 2;
    badge.position.x = -0.077;
    this.crank.add(badge);
    // Schaltwerk am hinteren Ausfallende
    const rd = new THREE.Group();
    rd.position.set(-0.07, WHEEL_R - 0.05, -0.47);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.07, 0.04), m.crankArm);
    body.rotation.x = 0.4;
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.035, 0.02), m.groupAccent);
    plate.position.set(-0.013, 0.005, 0);
    plate.rotation.x = 0.4;
    const cage = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.09, 0.03), m.crankArm);
    cage.position.set(0.004, -0.07, 0.01);
    rd.add(body, plate, cage);
    for (const y of [-0.035, -0.105]) {
      const pulley = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.008, 12), m.black);
      pulley.rotation.z = Math.PI / 2;
      pulley.position.set(0.006, y, 0.01);
      rd.add(pulley);
    }
    this.root.add(rd);
    // Kette: oben vom großen Blatt zum Ritzel, hinten um das Schaltwerk und unten zurück
    const kx = -0.062;
    const RP = V(kx, WHEEL_R, -0.5);
    const kette = new THREE.CatmullRomCurve3(
      [
        V(kx, BB.y + 0.106, BB.z),
        V(kx, RP.y + 0.04, RP.z + 0.01),
        V(kx, RP.y + 0.02, RP.z - 0.038),
        V(kx, RP.y - 0.035, RP.z - 0.03),
        V(kx, WHEEL_R - 0.085, -0.468),
        V(kx, WHEEL_R - 0.165, -0.455),
        V(kx, WHEEL_R - 0.15, -0.43),
        V(kx, BB.y - 0.106, BB.z),
        V(kx, BB.y - 0.075, BB.z + 0.075),
        V(kx, BB.y, BB.z + 0.107),
        V(kx, BB.y + 0.075, BB.z + 0.075),
      ],
      true,
      'centripetal',
    );
    const ketteMesh = new THREE.Mesh(
      new THREE.TubeGeometry(kette, 160, 0.0032, 5, true),
      new THREE.MeshStandardMaterial({ color: '#7d8087', metalness: 0.9, roughness: 0.45 }),
    );
    ketteMesh.scale.set(1, 1, 1);
    this.root.add(ketteMesh);
    // Pedale (bleiben waagerecht)
    this.pedals = [-1, 1].map((s) => {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.018, 0.07), m.black);
      p.userData.side = s;
      this.root.add(p);
      return p;
    });
  }

  buildCockpit(m) {
    const s = this.steer;
    // Vorbau
    s.add(tube(V(0, 0.86, -0.08), V(0, 0.9, 0.03), 0.016, m.black));
    // Rennlenker (beim Zeitfahren ausgeblendet)
    const road = (this.roadBars = new THREE.Group());
    s.add(road);
    // Aero-Oberlenker: in der Mitte flach (wie ein Flügel), außen rund mit Lenkerband
    const flach = tube(V(-0.13, 0.9, 0.03), V(0.13, 0.9, 0.03), 0.013, m.black);
    flach.scale.set(1, 1, 2.2);
    flach.rotation.z += 0;
    road.add(flach);
    for (const sx of [-1, 1]) road.add(tube(V(sx * 0.13, 0.9, 0.03), V(sx * 0.21, 0.9, 0.03), 0.013, m.tape));
    for (const side of [-1, 1]) {
      const x = side * 0.21;
      const pts = [V(x, 0.9, 0.03), V(x, 0.91, 0.1), V(x, 0.86, 0.13), V(x, 0.79, 0.09), V(x, 0.78, 0.0)];
      const curve = new THREE.CatmullRomCurve3(pts);
      const drop = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.013, 8), m.tape);
      drop.castShadow = true;
      road.add(drop);
      // Lenkerstopfen am Ende
      const stopfen = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 12), m.black);
      stopfen.position.set(x, 0.78, -0.004);
      stopfen.rotation.x = Math.PI / 2;
      road.add(stopfen);
      // Schalt-/Bremsgriffe: runder Griffkörper mit Hörnchen vorne und Bremshebel nach unten
      const hood = new THREE.Mesh(new THREE.CapsuleGeometry(0.017, 0.055, 4, 10), m.black);
      hood.position.set(x, 0.925, 0.105);
      hood.rotation.x = -1.15;
      hood.scale.set(0.9, 1, 1.15);
      hood.castShadow = true;
      road.add(hood);
      const horn = new THREE.Mesh(new THREE.SphereGeometry(0.014, 10, 8), m.black);
      horn.position.set(x, 0.945, 0.135);
      road.add(horn);
      const hebel = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(x, 0.93, 0.13), V(x, 0.89, 0.15), V(x, 0.84, 0.14), V(x, 0.81, 0.12)]), 10, 0.0075, 6),
        m.black,
      );
      road.add(hebel);
    }
    // Fahrradklingel auf dem Vorbau (nur am Rennlenker sichtbar)
    const klingel = new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), m.accent);
    klingel.position.set(0.05, 0.915, 0.03);
    road.add(klingel);
    this.buildAeroBars(m);
  }

  // Zeitfahr-Cockpit: flacher Basislenker mit Hörnern, Armschalen und geschwungene Verlängerungen
  buildAeroBars(m) {
    const carbon = new THREE.MeshPhysicalMaterial({ color: '#16171b', roughness: 0.35, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.15 });
    const pad = new THREE.MeshStandardMaterial({ color: '#2a2b30', roughness: 0.95 });
    const cupMat = carbon.clone();
    cupMat.side = THREE.DoubleSide;
    const tt = (this.ttBars = new THREE.Group());
    // Basislenker als flaches Flügelprofil
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.014, 0.045), carbon);
    wing.position.set(0, 0.885, 0.035);
    wing.castShadow = true;
    tt.add(wing);
    for (const side of [-1, 1]) {
      const x = side * 0.19;
      // Hörner nach vorne mit Bremshebel am Ende
      const horn = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(x, 0.885, 0.04), V(x + side * 0.02, 0.882, 0.1), V(x + side * 0.022, 0.87, 0.17)]), 12, 0.013, 8),
        carbon,
      );
      tt.add(horn);
      const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.006, 0.06, 8), m.black);
      lever.position.set(x + side * 0.022, 0.84, 0.18);
      lever.rotation.x = 0.3;
      tt.add(lever);
      // Erhöhung und Armschale mit Polster
      const px = side * 0.095;
      tt.add(tube(V(px, 0.89, -0.04), V(px, 0.925, -0.04), 0.012, carbon));
      // offene Halbschale (unten rund, oben offen), innen sichtbar
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.12, 14, 1, true, -Math.PI / 2, Math.PI), cupMat);
      cup.rotation.x = Math.PI / 2;
      cup.position.set(px, 0.972, -0.04);
      tt.add(cup);
      const cushion = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.012, 0.11), pad);
      cushion.position.set(px, 0.934, -0.04);
      tt.add(cushion);
      // Verlängerung: unten gerade, vorne nach oben gebogen (Ski-Form)
      const ex = side * 0.055;
      const ext = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([V(side * 0.07, 0.915, -0.07), V(ex, 0.918, 0.05), V(ex, 0.922, 0.15), V(ex, 0.94, 0.2), V(ex, 0.965, 0.22)]),
          20,
          0.011,
          8,
        ),
        carbon,
      );
      ext.castShadow = true;
      tt.add(ext);
      // Schalter am Ende der Verlängerung
      const shifter = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.011, 0.03, 8), m.black);
      shifter.position.set(ex, 0.978, 0.225);
      shifter.rotation.x = -0.6;
      tt.add(shifter);
    }
    // Brücke zwischen den Verlängerungen
    tt.add(tube(V(-0.06, 0.917, 0.0), V(0.06, 0.917, 0.0), 0.008, carbon));
    tt.visible = false;
    this.steer.add(tt);
  }

  buildRider(m) {
    const r = (this.rider = new THREE.Group());
    this.root.add(r);
    this.hip = V(0, 0.94, -0.2); // etwas tiefer sitzen (Wunsch)
    // tief gebeugte, sportliche Haltung: Schultern weit vorne und tief über dem Lenker
    this.shoulder = V(0, 1.2, 0.25);

    // Becken
    const pelvis = (this.pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.1, 4, 10), m.shorts));
    pelvis.rotation.z = Math.PI / 2;
    pelvis.position.copy(this.hip);
    pelvis.castShadow = true;
    r.add(pelvis);

    // Oberkörper
    this.torso = new THREE.Group();
    const torsoLen = this.hip.distanceTo(this.shoulder) + 0.04;
    const torsoMesh = limb(torsoLen, 0.15, m.jersey);
    // breite Schultern, schmale Taille
    const tg = torsoMesh.geometry;
    tg.computeBoundingBox();
    const y0 = tg.boundingBox.min.y;
    const y1 = tg.boundingBox.max.y;
    const tp = tg.attributes.position;
    for (let i = 0; i < tp.count; i++) {
      const t = (tp.getY(i) - y0) / (y1 - y0);
      const wide = 1.02 + 0.38 * Math.pow(Math.max(0, (t - 0.25) / 0.75), 1.4);
      tp.setX(i, tp.getX(i) * wide);
      let z = tp.getZ(i) * (0.9 - 0.12 * t);
      // runder Rücken in der gebeugten Haltung (-z = Rücken), etwas Brust vorne oben
      if (z < 0) z -= 0.035 * Math.sin(Math.PI * t);
      else if (t > 0.55) z += 0.015 * Math.sin(Math.PI * (t - 0.55) / 0.45);
      tp.setZ(i, z);
    }
    tg.computeVertexNormals();
    this.torso.add(torsoMesh);
    placeLimb(this.torso, this.hip, this.shoulder);
    r.add(this.torso);

    // Kopf
    this.head = new THREE.Group();
    const headGeo = new THREE.SphereGeometry(0.1, 28, 22);
    // Kopfform: unten schmaler (Kiefer), Kinn etwas vor, Hinterkopf rund
    {
      const hp = headGeo.attributes.position;
      for (let i = 0; i < hp.count; i++) {
        let x = hp.getX(i);
        let y = hp.getY(i);
        let z = hp.getZ(i);
        if (y < 0) x *= 1 - 0.28 * (-y / 0.1);
        if (y < -0.02 && z > 0) z += 0.014 * Math.min(1, (-y - 0.02) / 0.05) * (z / 0.1);
        if (z < 0 && y > -0.03) z *= 1.06;
        hp.setXYZ(i, x, y, z);
      }
    }
    headGeo.scale(0.95, 1.08, 1.06);
    headGeo.computeVertexNormals();
    const headMesh = new THREE.Mesh(headGeo, m.skin);
    // (kein extra Kinn mehr – der Kopf ist ein runder Ball)
    headMesh.castShadow = true;
    this.head.add(headMesh);
    // Rennrad-Helm: längliche Schale (vorne über der Stirn, hinten flach auslaufend), Lüftungsschlitze
    // kommen aus der Textur (kit.js drawHelmet), innen dunkler Schaum, unten ein dünner Rand
    const helmGeo = helmetGeometry();
    const helmet = new THREE.Mesh(helmGeo, m.helmet);
    helmet.position.set(0, 0.006, -0.004);
    helmet.castShadow = true;
    this.head.add(helmet);
    this.helmMesh = helmet;
    // Volle Haare (nur sichtbar ohne Helm, z. B. beim Joggen im Park)
    this.haarVoll = new THREE.Group();
    this.haarVoll.visible = false;
    this.head.add(this.haarVoll);
    this.setFrisur('wuschel');
    this.riemen = [];
    const innen = new THREE.Mesh(helmGeo, (m.helmInnen ||= new THREE.MeshStandardMaterial({ color: '#1b1b1f', roughness: 0.9, side: THREE.BackSide })));
    innen.scale.setScalar(0.985);
    helmet.add(innen);
    const rand = new THREE.Mesh(helmetRimGeometry(), m.glassFrame);
    helmet.add(rand);
    // Mittelrippe: erhöhter Grat von vorne nach hinten über die Mitte des Helms
    {
      const pts = [];
      const q = new THREE.Vector3();
      for (let i = 0; i <= 20; i++) pts.push(helmPunkt(0.1 + i * 0.039, 0, q).clone().add(new THREE.Vector3(0, 0.002, 0)));
      const rippe = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.0055, 8), m.helmet);
      rippe.scale.x = 1.8;
      rippe.castShadow = true;
      helmet.add(rippe);
    }
    // rotes Rücklicht hinten am Helm
    {
      const f = helmForm(0.93);
      const licht = new THREE.Mesh(
        new THREE.BoxGeometry(0.03, 0.011, 0.008),
        new THREE.MeshStandardMaterial({ color: '#ff3a2a', emissive: '#ff1a0a', emissiveIntensity: 1.2, roughness: 0.3 }),
      );
      licht.position.set(0, f.unten + 0.03, f.z - 0.012);
      licht.rotation.x = 0.5;
      helmet.add(licht);
    }
    // Verstellrad hinten am Hinterkopf (wie bei echten Helmen)
    const rad = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 14), m.glassFrame);
    rad.rotation.x = Math.PI / 2 - 0.4;
    rad.position.set(0, -0.045, -0.15);
    helmet.add(rad);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.003, 4, 24, Math.PI * 0.9), m.glassFrame);
    band.rotation.set(Math.PI / 2 + 0.35, 0, Math.PI * 0.05 + Math.PI);
    band.position.set(0, -0.035, -0.08);
    helmet.add(band);
    // Sportbrille: ein gewölbtes Schild-Glas über beiden Augen (mit Aussparung für die Nase),
    // oben ein schmaler Rahmen, seitlich Bügel bis zu den Ohren
    const brille = new THREE.Group();
    const RX = 0.104;
    const RZ = 0.124;
    const A = 1.12; // so weit geht das Glas um den Kopf (Winkel)
    const glasPunkt = (u, v, aussen = 0) => {
      const a = u * A;
      const oben = 0.024 - 0.008 * u * u;
      const nase = 0.016 * Math.exp(-((u / 0.2) ** 2));
      const unten = -0.03 + 0.014 * u * u + nase;
      const y = unten + (oben - unten) * v;
      const bauch = 0.004 * Math.sin(Math.PI * v) + aussen;
      return new THREE.Vector3(Math.sin(a) * (RX + bauch), y, Math.cos(a) * (RZ + bauch) - 0.004);
    };
    {
      const NU = 40;
      const NV = 8;
      const pos = [];
      const uvs = [];
      const idx = [];
      for (let i = 0; i <= NU; i++)
        for (let k = 0; k <= NV; k++) {
          const p = glasPunkt(-1 + (2 * i) / NU, k / NV);
          pos.push(p.x, p.y, p.z);
          uvs.push(i / NU, k / NV);
        }
      for (let i = 0; i < NU; i++)
        for (let k = 0; k < NV; k++) {
          const a0 = i * (NV + 1) + k;
          const b0 = a0 + NV + 1;
          idx.push(a0, b0, a0 + 1, a0 + 1, b0, b0 + 1);
        }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      // Glas mit Farbverlauf (oben dunkler) und zwei kleinen Lüftungsschlitzen oben in den Ecken
      m.glasses.map = brillenglasTextur();
      m.glasses.color.set('#ffffff');
      m.glasses.side = THREE.DoubleSide;
      m.glasses.alphaTest = 0.5;
      const glas = new THREE.Mesh(g, m.glasses);
      brille.add(glas);
    }
    // Rahmen oben am Glas und kleine Nasenpads
    const rahmenPunkte = [];
    for (let i = 0; i <= 24; i++) rahmenPunkte.push(glasPunkt(-1.02 + (2.04 * i) / 24, 1, 0.001));
    brille.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rahmenPunkte), 48, 0.0035, 6), m.glassFrame));
    for (const sx of [-1, 1]) {
      const pad = new THREE.Mesh(new THREE.SphereGeometry(0.005, 6, 4), m.glassFrame);
      pad.position.copy(glasPunkt(sx * 0.16, 0.25, -0.006));
      brille.add(pad);
      // Bügel: vom Glasrand nach hinten zum Ohr
      const start = glasPunkt(sx * 1.02, 0.85, 0.001);
      const buegelKurve = new THREE.CatmullRomCurve3([start, new THREE.Vector3(sx * 0.103, 0.012, 0.03), new THREE.Vector3(sx * 0.1, 0.004, -0.02), new THREE.Vector3(sx * 0.092, -0.012, -0.04)]);
      const buegel = new THREE.Mesh(new THREE.TubeGeometry(buegelKurve, 16, 0.0028, 5), m.glassFrame);
      buegel.scale.set(1, 1.6, 1);
      brille.add(buegel);
      // Gummi-Enden in Trikotfarbe hinter dem Ohr
      const endKurve = new THREE.CatmullRomCurve3([new THREE.Vector3(sx * 0.1, 0.002, -0.022), new THREE.Vector3(sx * 0.094, -0.01, -0.038), new THREE.Vector3(sx * 0.085, -0.022, -0.046)]);
      brille.add(new THREE.Mesh(new THREE.TubeGeometry(endKurve, 8, 0.0036, 6), m.jerseyPlain));
      // Scharnier am Glasrand
      const scharnier = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.012, 0.01), m.glassFrame);
      scharnier.position.copy(start);
      brille.add(scharnier);
    }
    brille.position.set(0, 0.004, 0);
    this.head.add(brille);
    this.brille = [brille];
    // Nase und Ohren
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.035, 6), m.skin);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, -0.022, 0.1);
    this.head.add(nose);
    for (const sx of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), m.skin);
      ear.scale.set(0.45, 1, 0.7);
      ear.position.set(sx * 0.098, -0.008, -0.01);
      this.head.add(ear);
      // Kinnriemen vom Helm unter das Kinn
      const strap = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(sx * 0.1, 0.03, 0.0), V(sx * 0.085, -0.05, 0.03), V(0, -0.098, 0.045)]), 8, 0.0045, 4),
        m.glassFrame,
      );
      this.head.add(strap);
      this.riemen.push(strap);
    }
    // Zeitfahrhelm: lange Spitze nach hinten (nur beim Zeitfahren sichtbar)
    const tail = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), m.helmet);
    tail.scale.set(0.1, 0.075, 0.2);
    tail.position.set(0, 0.035, -0.11);
    tail.rotation.x = -0.25;
    tail.visible = false;
    tail.userData.tt = true;
    this.head.add(tail);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.128, 18, 10, -Math.PI * 0.32, Math.PI * 0.64, Math.PI * 0.42, Math.PI * 0.2), m.glasses);
    visor.position.set(0, 0.005, 0.005);
    visor.visible = false;
    visor.userData.tt = true;
    this.head.add(visor);
    // Haare im Nacken unter dem Helm
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 8, Math.PI * 1.2, Math.PI * 0.6, Math.PI * 0.42, Math.PI * 0.3), m.hair);
    hair.scale.set(0.97, 1.08, 1.08);
    hair.position.set(0, -0.004, -0.004);
    this.head.add(hair);
    this.haarHinten = hair; // nur mit Helm sichtbar (ohne Helm gibt es die ganze Frisur)
    // (kein Grat mehr oben auf dem Helm – stand wie eine Antenne ab)
    // Kopf tiefer, Blick trotzdem nach vorne auf die Straße
    this.head.position.set(0, 1.31, 0.39);
    this.head.rotation.x = 0.05;
    r.add(this.head);
    // Hals: Länge 1, wird jedes Bild vom Kragen bis in den Kopf hinein gespannt (updateHals)
    this.neck = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.056, 1, 14), m.skin);
    this.neck.castShadow = true;
    r.add(this.neck);
    // Trikotkragen um den Hals
    this.kragen = new THREE.Mesh(new THREE.TorusGeometry(0.058, 0.02, 8, 20), m.jerseyPlain);
    r.add(this.kragen);
    this.halsBasis = V(0, 1.19, 0.25);
    // Sitz-Haltung merken (zum Zurückstellen nach dem Gehen)
    this._sitz = [this.torso, this.head, this.pelvis].map((o) => [o, o.position.clone(), o.quaternion.clone()]);
    this.updateHals();

    // Arme und Beine (werden jedes Bild neu ausgerichtet)
    this.arms = [-1, 1].map((s) => ({
      s,
      // Oberarm mit Bizeps, Unterarm zum Handgelenk schmaler
      upper: shapedLimb(0.27, (t) => 0.044 + 0.009 * Math.sin(Math.PI * Math.min(1, t * 1.1)), m.sleeve),
      lower: shapedLimb(0.26, (t) => 0.041 - 0.015 * t + 0.006 * Math.exp(-(((t - 0.2) / 0.2) ** 2)), m.skin),
      hand: new THREE.Mesh(gloveGeometry(s), m.glove),
      elbow: new THREE.Mesh(new THREE.SphereGeometry(0.041, 10, 8), m.skin),
      cap: new THREE.Mesh(new THREE.SphereGeometry(0.054, 12, 8), m.jerseyPlain),
    }));
    // Rennradschuhe: Riemen und Zierstreifen in Trikotfarbe
    this.shoeMats = { ...shoeMaterials(), accent: m.jerseyPlain };
    this.legs = [-1, 1].map((s) => ({
      s,
      // Oberschenkel oben kräftig, zum Knie schmaler; Wade mit Muskel
      thigh: beinForm(shapedLimb(0.44, (t) => 0.086 - 0.026 * t + 0.007 * Math.sin(Math.PI * t), m.thigh, 18), 0.44, 'oberschenkel'),
      shin: beinForm(shapedLimb(0.43, (t) => 0.043 + 0.012 * Math.exp(-(((t - 0.3) / 0.2) ** 2)) - 0.012 * t, m.skin, 16), 0.43, 'wade'),
      knee: new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 10), m.skin),
      sock: sockeMesh(m.sock),
      shoe: buildShoe(this.shoeMats),
    }));
    for (const a of this.arms) {
      a.hand.castShadow = true;
      r.add(a.upper, a.lower, a.hand, a.elbow, a.cap);
    }
    for (const l of this.legs) {
      r.add(l.thigh, l.shin, l.sock, l.shoe, l.knee);
    }
  }

  // Texturen für Trikot, Ärmel, Radhose und Helm
  buildKit(m) {
    this.kitTex = {
      torso: makeKitCanvas(512, 512),
      sleeve: makeKitCanvas(128, 128),
      thigh: makeKitCanvas(128, 256),
      helmet: makeKitCanvas(256, 128),
    };
    m.jersey.map = this.kitTex.torso.tex;
    m.sleeve.map = this.kitTex.sleeve.tex;
    m.thigh.map = this.kitTex.thigh.tex;
    m.helmet.map = this.kitTex.helmet.tex;
    this.sockCanvas = document.createElement('canvas');
    this.sockCanvas.width = 128;
    this.sockCanvas.height = 128;
    this.sockTex = new THREE.CanvasTexture(this.sockCanvas);
    this.sockTex.colorSpace = THREE.SRGBColorSpace;
    m.sock.map = this.sockTex;
    this.kitCol = { jersey: CONFIG.colors.jersey, shorts: '#16161b', helmet: '#f6f6f6' };
    this.kit = 'plain';
    this.updateKit();
  }

  updateKit() {
    const c = this.kitCol;
    drawTorso(this.kitTex.torso, c.jersey, this.kit);
    this.mats.jerseyPlain.color.set(c.jersey);
    drawSleeve(this.kitTex.sleeve, c.jersey, this.kit);
    drawThigh(this.kitTex.thigh, c.shorts, '#' + this.mats.skin.color.getHexString(), this.kit);
    drawHelmet(this.kitTex.helmet, c.helmet, c.jersey);
    drawSocke(this.sockCanvas, c.jersey);
    this.sockTex.needsUpdate = true;
    // Goldener Helm glänzt wie echtes Gold
    const gold = c.helmet.toLowerCase() === '#d4af37';
    this.mats.helmet.metalness = gold ? 0.85 : 0;
    this.mats.helmet.roughness = gold ? 0.18 : 0.3;
    this.mats.helmet.needsUpdate = true;
    this.model?.setKit(c);
  }

  // Echtes 3D-Modell (Mixamo) statt der einfachen Figur benutzen
  useModel(scene) {
    const model = new RiderModel(scene);
    this.model = model;
    this.root.add(scene);
    this.rider.visible = false;
    // Helm, Brille und Haare im Nacken von der einfachen Figur übernehmen (ohne Gesicht)
    const helmet = this.head.clone();
    for (const c of [...helmet.children]) if (c.material === this.mats.skin) helmet.remove(c);
    helmet.position.set(0, 0.107, 0.034);
    helmet.rotation.set(0.12, 0, 0);
    helmet.scale.setScalar(1.12);
    model.attach('Head', helmet);
    this.modelHelmet = helmet;
    // Rückennummer mitten auf den Rücken
    this.backPlate.removeFromParent();
    this.backPlate.position.set(0, 0.063, -0.145);
    this.backPlate.rotation.set(0, Math.PI, 0);
    model.attach('Spine1', this.backPlate);
    model.setKit(this.kitCol);
    // eigene Rennradschuhe statt der Turnschuhe des Modells
    model.attachShoes(() => buildShoe(this.shoeMats));
    this.update(0, 0, 0, 0);
  }

  buildPlates() {
    this.plateCanvas = document.createElement('canvas');
    this.plateCanvas.width = 512;
    this.plateCanvas.height = 384;
    this.plateTex = new THREE.CanvasTexture(this.plateCanvas);
    this.plateTex.colorSpace = THREE.SRGBColorSpace;
    this.plateTex.anisotropy = 8;
    const mat = new THREE.MeshStandardMaterial({ map: this.plateTex, roughness: 0.6 });

    // Rückennummer auf dem Trikot: gebogen, damit sie genau auf dem runden Rücken anliegt
    // (ein flaches Schild steckte halb im Körper, nur die Ecken schauten heraus)
    const body = this.torso.children.find((c) => c.isMesh);
    body.geometry.computeBoundingBox();
    const bb = body.geometry.boundingBox;
    const rx = Math.max(-bb.min.x, bb.max.x) + 0.006;
    const rz = -bb.min.z + 0.006;
    const pg = new THREE.PlaneGeometry(0.26, 0.2, 20, 1);
    const pp = pg.attributes.position;
    for (let i = 0; i < pp.count; i++) {
      const x = pp.getX(i);
      pp.setZ(i, rz * Math.sqrt(Math.max(0, 1 - (x / rx) ** 2)));
    }
    pg.computeVertexNormals();
    const back = new THREE.Mesh(pg, mat);
    back.position.set(0, 0.02, 0);
    back.rotation.set(0, Math.PI, 0);
    this.torso.add(back);
    this.backPlate = back;

    // Rahmennummer unter dem Sattel – auf beiden Seiten lesbar
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.1275), mat);
      p.position.set(s * 0.016, 0.8, -0.33);
      p.rotation.y = (s * Math.PI) / 2;
      this.root.add(p);
    }
    this.setPlate(1, '');
  }

  // Markenschriftzug links und rechts auf dem Unterrohr
  buildDecals() {
    this.decalCanvas = document.createElement('canvas');
    this.decalCanvas.width = 512;
    this.decalCanvas.height = 128;
    this.decalTex = new THREE.CanvasTexture(this.decalCanvas);
    this.decalTex.colorSpace = THREE.SRGBColorSpace;
    this.decalTex.anisotropy = 8;
    const mat = new THREE.MeshStandardMaterial({
      map: this.decalTex,
      transparent: true,
      roughness: 0.3,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    const HB = V(0, 0.7, 0.4);
    const dir = HB.clone().sub(BB);
    const len = dir.length();
    dir.normalize();
    // genau in der Mitte des Unterrohrs
    const mid = BB.clone().lerp(HB, 0.5);
    for (const s of [-1, 1]) {
      const n = V(s, 0, 0);
      // Schrift so ausrichten, dass sie auf beiden Seiten aufrecht und nicht gespiegelt ist
      const u = s > 0 ? dir.clone().negate() : dir.clone();
      const v = new THREE.Vector3().crossVectors(n, u);
      // Seitenverhältnis wie die Zeichenfläche (512 x 128)
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(len * 0.48, len * 0.48 * (128 / 512)), mat);
      plane.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, v, n));
      plane.position.copy(mid).addScaledVector(n, 0.033);
      this.root.add(plane);
    }
  }

  setBrand(id) {
    const b = brandById(id);
    this.brand = b.id;
    const c = this.decalCanvas;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    const family = b.serif ? '"Cinzel", Georgia, serif' : '"Barlow Condensed", Arial, sans-serif';
    // breite Marken (z. B. Colnago) mit Abstand zwischen den Buchstaben
    if (ctx.letterSpacing !== undefined) ctx.letterSpacing = b.wide ? '6px' : '0px';
    ctx.font = `${b.font} 104px ${family}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = contrastColor(this.design === 'team' ? '#111114' : this.frameColor);
    const text = brandLabel(b);
    const w = ctx.measureText(text).width;
    if (w > c.width * 0.95) ctx.font = `${b.font} ${Math.floor((104 * c.width * 0.95) / w)}px ${family}`;
    ctx.fillText(text, c.width / 2, c.height / 2 + 2);
    this.decalTex.needsUpdate = true;
  }

  // Alle Farben und die Marke eines Charakters übernehmen
  applyLook(c = {}) {
    this.design = c.paint || DEFAULT_LOOK.paint;
    this.kit = c.kit || 'plain';
    // Lenkerband: eigene Farbe, sonst passend zur Lackierung
    this.barColor = c.bar || null;
    this.setColors({
      jersey: c.jersey || CONFIG.colors.jersey,
      frame: c.frame || CONFIG.colors.bikeFrame,
      helmet: c.helmet || DEFAULT_LOOK.helmet,
      shorts: c.shorts || DEFAULT_LOOK.shorts,
    });
    this.setBrand(c.brand || DEFAULT_LOOK.brand);
    this.setGroupset(c.groupset || DEFAULT_LOOK.groupset);
    this.tireColor = c.tires || null;
    this.applyTireColor();
  }

  // Reifenfarbe (nur beim Zeitfahrrad einstellbar, sonst schwarz)
  applyTireColor() {
    this.mats.tire.color.set(this.aero && this.tireColor ? this.tireColor : '#1c1c1c');
  }

  // ✏️ Frisur (sichtbar ohne Helm): 'wuschel' = Strähnen mit Pony, 'scheitel' = Seitenscheitel mit Tolle
  setFrisur(stil = 'wuschel', farbe = null) {
    if (farbe) {
      this.mats.hair.color.set(farbe);
      for (const k of this.mats.hair.userData.kopien || []) k.color.set(farbe);
    }
    if (this.frisur === stil) return;
    this.frisur = stil;
    this.haarVoll.clear();
    this.haarVoll.add(baueFrisur(stil, this.mats.hair));
  }

  // ohne Helm (Park): Helm und Kinnriemen weg, dafür volle Haare
  setOhneHelm(an) {
    this.helmMesh.visible = !an;
    for (const r of this.riemen) r.visible = !an;
    this.haarVoll.visible = an;
    if (this.haarHinten) this.haarHinten.visible = !an;
  }

  // Anderes Outfit (z. B. Winter-Laufsachen im Park): { jacke, hose, muetze, handschuhe } oder null = wieder Radtrikot
  setOutfit(o) {
    const teile = [];
    const torso = this.torso.children.find((c) => c.isMesh && c !== this.backPlate);
    teile.push([torso, 'jacke'], [this.kragen, 'jacke'], [this.pelvis, 'hose']);
    for (const a of this.arms) teile.push([a.upper, 'jacke'], [a.lower, 'jacke'], [a.elbow, 'jacke'], [a.cap, 'jacke'], [a.hand, 'handschuhe']);
    for (const l of this.legs) teile.push([l.thigh, 'hose'], [l.shin, 'hose'], [l.knee, 'hose']);
    if (o && !this._outfitAlt) {
      this._outfitAlt = new Map(teile.map(([m]) => [m, m.material]));
      const stoff = (farbe, rau = 0.8) => new THREE.MeshPhysicalMaterial({ color: farbe, roughness: rau, sheen: 0.4, sheenColor: new THREE.Color('#ffffff') });
      const mats = { jacke: stoff(o.jacke), hose: stoff(o.hose, 0.7), handschuhe: stoff(o.handschuhe || o.hose) };
      for (const [m, k] of teile) m.material = mats[k];
      this.backPlate.visible = false;
      // Mütze mit Bommel
      if (!this.muetze) {
        const g = new THREE.Group();
        const kappe = new THREE.Mesh(new THREE.SphereGeometry(0.106, 22, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), stoff('#fff'));
        kappe.scale.set(0.98, 1.12, 1.1);
        const rand = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.018, 8, 26), stoff('#fff'));
        rand.rotation.x = Math.PI / 2;
        rand.position.y = 0.01;
        rand.scale.set(1.0, 1.1, 1);
        const bommel = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), stoff('#fff', 1));
        bommel.position.y = 0.125;
        g.add(kappe, rand, bommel);
        g.position.set(0, 0.012, -0.006);
        g.rotation.x = -0.18;
        g.traverse((x) => x.isMesh && (x.castShadow = true));
        this.head.add(g);
        this.muetze = g;
      }
      const [kappe, rand, bommel] = this.muetze.children;
      kappe.material.color.set(o.muetze || o.jacke);
      rand.material.color.set(o.muetzeRand || o.muetze || o.jacke);
      bommel.material.color.set(o.bommel || '#ffffff');
      this.muetze.visible = true;
    } else if (!o && this._outfitAlt) {
      for (const [m, mat] of this._outfitAlt) m.material = mat;
      this._outfitAlt = null;
      this.backPlate.visible = true;
      if (this.muetze) this.muetze.visible = false;
    }
  }

  // nur die Figur zeigen, das Rad ausblenden (zu Fuß unterwegs)
  setOhneRad(an) {
    if (an && !this._radSicht) {
      this._radSicht = new Map();
      for (const c of this.root.children) {
        if (c === this.rider) continue;
        this._radSicht.set(c, c.visible);
        c.visible = false;
      }
    } else if (!an && this._radSicht) {
      for (const [c, v] of this._radSicht) c.visible = v;
      this._radSicht = null;
    }
  }

  setGroupset(id) {
    const g = groupsetById(id);
    this.groupset = g.id;
    this.mats.crankArm.color.set(g.crank);
    this.mats.ring.color.set(g.ring);
    this.mats.groupAccent.color.set(g.accent);
  }

  // Lackierung anwenden: 'solid' = einfarbig, 'team' = hinten mattschwarz, vorne Rahmenfarbe mit Zacken
  applyPaint() {
    const m = this.mats;
    const team = this.design === 'team';
    const t = this.teamMats;
    // Matte Farben: rau und ohne Klarlack, glänzende: glatt mit Klarlack
    const matte = isMatte(this.frameColor);
    const finish = (mat) => {
      mat.roughness = matte ? 0.72 : 0.3;
      mat.metalness = matte ? 0.05 : 0.3;
      mat.clearcoat = matte ? 0 : 1;
    };
    if (team) {
      m.frame.color.set('#111114');
      m.frame.roughness = 0.55;
      m.frame.metalness = 0.2;
      m.frame.clearcoat = 0.25;
      for (const k of ['down', 'top', 'fork', 'solid']) {
        t[k].color.set(this.frameColor);
        finish(t[k]);
      }
    } else {
      m.frame.color.set(this.frameColor);
      finish(m.frame);
    }
    // Weltmeister: Regenbogenstreifen am Sitzrohr (oben) und an der Gabel (Mitte)
    const rainbow = this.design === 'rainbow';
    const rb = (from, to, topIsStart) =>
      new THREE.MeshPhysicalMaterial({
        map: rainbowTexture('#' + new THREE.Color(this.frameColor).getHexString(), from, to, topIsStart),
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 1,
      });
    if (rainbow && this.rainbowFor !== this.frameColor) {
      this.rainbowFor = this.frameColor;
      this.rainbowMats = { seat: rb(0.5, 0.82, false), fork: rb(0.3, 0.62, true) };
    }
    this.tubes.seat.material = rainbow ? this.rainbowMats.seat : m.frame;
    this.tubes.down.material = team ? t.down : m.frame;
    this.tubes.top.material = team ? t.top : m.frame;
    this.tubes.head.material = team ? t.solid : m.frame;
    this.gelenke[0].material = this.gelenke[1].material = team ? t.solid : m.frame;
    for (const f of this.forkTubes) f.material = team ? t.fork : rainbow ? this.rainbowMats.fork : m.frame;
    this.forkCrown.material = team ? t.solid : m.frame;
    const dark = team || rainbow;
    this.stripe.visible = !dark;
    m.accent.color.set(dark ? '#1b1b1e' : CONFIG.colors.gold);
    m.tape.color.set(this.barColor || (dark ? '#1b1b1e' : '#f1f1ee'));
    this.rimMat.map = rimTexture(dark ? 'team' : 'gold');
    this.rimMat.needsUpdate = true;
  }

  // 'road' = schmale Rennradreifen, 'cx' = Cyclocross-Stollenreifen
  setTires(mode) {
    const cx = mode === 'cx';
    for (const t of this.roadTires) t.visible = !cx;
    for (const t of this.cxTires) t.visible = cx;
    // Zeitfahren: Aufsatzlenker, Scheibenrad, hohe Felge vorne, Zeitfahrhelm, flache Haltung
    const tt = (this.aero = mode === 'tt');
    this.ttBars.visible = tt;
    this.roadBars.visible = !tt;
    this.applyTireColor();
    this.disc.visible = tt;
    this.deepRim.visible = tt;
    for (const h of [this.head, this.modelHelmet]) h?.traverse((o) => o.userData.tt && (o.visible = tt));
    this.update(0, 0, 0, 0);
  }

  setPlate(number, name) {
    this.plateNumber = number;
    this.plateName = name;
    drawPlate(this.plateCanvas, number, name);
    this.plateTex.needsUpdate = true;
  }

  setColors({ jersey, frame, helmet, shorts } = {}) {
    // Kleidungsfarben stecken in den Texturen; das Material selbst bleibt weiß
    if (jersey) this.kitCol.jersey = jersey;
    if (frame) this.frameColor = frame;
    this.applyPaint();
    if (helmet) this.kitCol.helmet = helmet;
    if (shorts) {
      this.kitCol.shorts = shorts;
      this.mats.shorts.color.set(shorts);
    }
    if (jersey || helmet || shorts) this.updateKit();
    // Schriftfarbe an die Rahmenfarbe anpassen
    if (frame && this.brand) this.setBrand(this.brand);
  }

  // speed in m/s, crankRate in rad/s (0 = Freilauf), steer -1..1
  // Hals vom Kragen (halsBasis) bis unter den Kopf spannen – folgt jeder Kopfbewegung, keine Lücke mehr
  updateHals() {
    this.head.updateMatrix();
    const oben = _a.set(0, -0.055, -0.012).applyMatrix4(this.head.matrix);
    const unten = this.halsBasis;
    placeLimb(this.neck, unten, oben);
    this.neck.scale.set(1, unten.distanceTo(oben) + 0.02, 1);
    this.kragen.position.copy(unten);
    this.kragen.quaternion.copy(this.neck.quaternion).multiply(_qKragen);
  }

  // Gesicht: this.ohneBrille = Brille abgenommen (Augen sichtbar), this.zwinker 0 … 1 = rechtes Auge zu
  updateGesicht() {
    const zeigen = !!this.ohneBrille;
    if (zeigen && !this.augen) this.baueAugen();
    for (const p of this.brille) p.visible = !zeigen;
    if (!this.augen) return;
    // ab und zu blinzeln (alle 2,5 … 5,5 Sekunden, ganz kurz)
    const jetzt = performance.now() / 1000;
    if (!this._blinzelAb) this._blinzelAb = jetzt + 1 + Math.random() * 3;
    let blink = 0;
    if (jetzt > this._blinzelAb) {
      const t = jetzt - this._blinzelAb;
      blink = t < 0.07 ? t / 0.07 : t < 0.14 ? 1 - (t - 0.07) / 0.07 : 0;
      if (t > 0.14) this._blinzelAb = jetzt + 2.5 + Math.random() * 3;
    }
    const z = this.zwinker || 0;
    for (const a of this.augen) {
      a.g.visible = zeigen;
      // Oberlid: offen etwas über der Iris (-1.05), zu bei +0.25; Braue zieht beim Zwinkern mit
      const k = Math.max(blink, a.s < 0 ? z : 0);
      a.lid.rotation.x = -1.05 + 1.3 * k;
      a.braue.position.y = 0.031 - 0.006 * (a.s < 0 ? z : 0) + (a.s > 0 ? 0.006 * z : 0);
      a.braue.rotation.z = a.s * (0.08 + (a.s > 0 ? 0.12 * z : 0));
    }
  }

  // Augen: Augapfel, farbige Iris mit Pupille und Lichtpunkt, Ober- und Unterlid mit Wimpernrand, gebogene Braue
  baueAugen() {
    const haut = this.mats.skin;
    const weiss = new THREE.MeshStandardMaterial({ color: '#f3eee6', roughness: 0.25 });
    const iris = new THREE.MeshStandardMaterial({ color: this.augenFarbe || '#4a78a8', roughness: 0.35 });
    const pupille = new THREE.MeshStandardMaterial({ color: '#08080a', roughness: 0.2 });
    const glanz = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const wimpern = new THREE.MeshStandardMaterial({ color: '#1a120d', roughness: 0.6 });
    const brauenMat = new THREE.MeshStandardMaterial({ color: this.brauenFarbe || '#3b2a1e', roughness: 0.8 });
    const R = 0.0155;
    // Kugelkappe nach vorne (+z): für Iris und Pupille
    const kappe = (r, winkel, mat) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 6, 0, Math.PI * 2, 0, winkel), mat);
      m.rotation.x = Math.PI / 2;
      return m;
    };
    this.augen = [-1, 1].map((s) => {
      const g = new THREE.Group();
      // etwas in den Kopf eingesetzt, leicht nach außen gedreht
      g.position.set(s * 0.035, 0.012, 0.084);
      g.rotation.y = s * 0.12;
      const ball = new THREE.Mesh(new THREE.SphereGeometry(R, 18, 12), weiss);
      const ir = kappe(R * 1.012, 0.62, iris);
      const pu = kappe(R * 1.02, 0.28, pupille);
      const licht = new THREE.Mesh(new THREE.SphereGeometry(0.0022, 8, 6), glanz);
      licht.position.set(-0.004, 0.004, R * 0.99);
      // Oberlid: Hautschale, schiebt sich beim Blinzeln/Zwinkern übers Auge
      const lid = new THREE.Mesh(new THREE.SphereGeometry(R * 1.1, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), haut);
      const rand = new THREE.Mesh(new THREE.TorusGeometry(R * 1.1, 0.0013, 4, 24, Math.PI), wimpern);
      rand.rotation.set(Math.PI / 2, 0, 0);
      lid.add(rand);
      // Unterlid: schmale Hautschale von unten
      const unter = new THREE.Mesh(new THREE.SphereGeometry(R * 1.08, 18, 6, 0, Math.PI * 2, 0, 0.75), haut);
      unter.rotation.x = Math.PI - 0.35;
      // Braue: gebogener Bogen über dem Auge
      const bogen = new THREE.CatmullRomCurve3([V(-0.016, -0.002, 0), V(0, 0.003, 0.004), V(0.016, -0.003, 0)]);
      const braue = new THREE.Mesh(new THREE.TubeGeometry(bogen, 10, 0.0028, 5, false), brauenMat);
      braue.position.set(0, 0.031, 0.01);
      g.add(ball, ir, pu, licht, lid, unter, braue);
      this.head.add(g);
      return { s, g, lid, braue };
    });
  }

  // Gehen neben dem Rad: Fahrer steht links vom Rad (+x) und hält mit der rechten Hand den Lenker
  // Gehen mit echten Bewegungen (gang.js): Gelenke der Animations-Puppe ablesen und unsere Figur danach hinstellen.
  // Beim Joggen bauen wir die Bewegung selbst nach echten Messwerten (jogPose) und blenden weich über.
  updateWalkAnim(dt, speed) {
    const g = this.gang;
    // wie schnell dreht sich die Figur gerade? (fürs Trippeln beim Umdrehen auf der Stelle)
    const h = this.root.rotation.y;
    const dreh = dt > 0 && this._hAlt != null ? Math.atan2(Math.sin(h - this._hAlt), Math.cos(h - this._hAlt)) / dt : 0;
    this._hAlt = h;
    // wie schnell bewegt sich die Figur wirklich? (beim Rad-Schieben geht sie in Kurven außen herum)
    const ort = _k.copy(this.gehOffset || V(0.55, 0, 0.3)).applyAxisAngle(UP, h).add(this.root.position);
    const weg = this._ortAlt && dt > 0 ? Math.hypot(ort.x - this._ortAlt.x, ort.z - this._ortAlt.z) : 0;
    (this._ortAlt ||= new THREE.Vector3()).copy(ort);
    const vFigur = weg < 0.5 && dt > 0 ? weg / dt : 0;
    speed = Math.max(speed, Math.min(vFigur, 1.6)); // ✏️ nur fürs Gehen (Joggen startet erst ab 1,8 m/s)
    g.update(dt, speed, dreh);
    const off = (this.gehOffset ||= V(0.55, 0, 0.3));
    this.rider.rotation.set(0, 0, 0);
    this.rider.position.copy(off);
    const L = (this._torsoL ||= this.hip.distanceTo(this.shoulder));
    // Schritte: Gehen und Joggen nach Messwerten, weich ineinander geblendet
    let schritt = null;
    if (g.gehW > 0.001) {
      const jw = g.jogW;
      if (jw < 0.999) schritt = this.schrittPose(g.jogPhase, speed, L);
      if (jw > 0.001) {
        const jp = this.jogPose(g.jogPhase, Math.max(speed, 1.2), L);
        schritt = schritt ? mischePose(schritt, jp, jw, L) : jp;
      }
    }
    // Stehen, Reden, Sitzen kommen von der Animations-Puppe
    let pose = g.gehW < 0.999 || !schritt ? this.animPose(g, L) : null;
    if (schritt) pose = pose ? mischePose(pose, schritt, g.gehW, L) : schritt;
    // Beim Losgehen und Stehenbleiben (Stehen ↔ Gehen ↔ Joggen wird überblendet) bleibt ein Fuß, der am Boden steht,
    // in der Welt stehen, statt mitzurutschen. Die Verschiebung (korr) wird danach weich wieder abgebaut.
    const anker = (this._anker ||= [{ welt: null, korr: new THREE.Vector3() }, { welt: null, korr: new THREE.Vector3() }]);
    const zwischen = (w) => w > 0.02 && w < 0.98;
    const ueber = !g.sitzen && (zwischen(g.gehW) || (g.gehW > 0.5 && zwischen(g.jogW)));
    this.root.updateWorldMatrix(true, false);
    this.rider.updateWorldMatrix(false, false);
    pose.beine.forEach((b, i) => {
      const a = anker[i];
      const boden = b.shoe.y < 0.02; // Ballen (fast) am Boden
      if (ueber && boden && !a.welt) a.welt = this.rider.localToWorld(b.shoe.clone().add(a.korr));
      if (ueber && boden) {
        a.korr.copy(this.rider.worldToLocal(a.welt.clone())).sub(b.shoe).setY(0);
        // ✏️ zu weit weg (20 cm)? dann loslassen
        if (a.korr.length() > 0.2) a.welt = null;
      } else a.welt = null;
      if (!a.welt) a.korr.multiplyScalar(Math.exp(-10 * dt)); // weich zurück zur eigentlichen Stellung
      if (a.korr.lengthSq() < 1e-8) return;
      b.shoe.add(a.korr);
      const ziel = b.ankle.clone().add(a.korr);
      b.knee = ik(b.hip, ziel, 0.44, 0.43, _k.set(0, 0, 1), new THREE.Vector3());
      b.ankle = b.knee.clone().addScaledVector(ziel.sub(b.knee).normalize(), 0.43);
      b.shoe = schuhVomKnoechel(b.ankle, b.tilt);
    });
    // Beine
    for (let i = 0; i < 2; i++) {
      const l = this.legs[i];
      const b = pose.beine[i];
      l.shoe.position.copy(b.shoe);
      l.shoe.rotation.set(b.tilt, 0, 0);
      placeLimbFwd(l.thigh, b.hip, b.knee, VORNE_OBEN);
      l.knee.position.copy(b.knee);
      placeLimbFwd(l.shin, b.knee, b.ankle);
      const d = b.ankle.clone().sub(b.knee).normalize();
      placeLimb(l.sock, b.ankle.clone().addScaledVector(d, -0.16), b.ankle.clone().addScaledVector(d, 0.02));
    }
    // Becken, Oberkörper, Hals, Kopf
    this.pelvis.position.copy(pose.becken);
    placeLimb(this.torso, pose.becken, pose.top);
    this.halsBasis.copy(pose.top).addScaledVector(pose.tDir, -0.03);
    this.head.position.copy(pose.top).addScaledVector(pose.nDir, 0.145);
    // Arme
    for (let i = 0; i < 2; i++) {
      const a = this.arms[i];
      let { shp, elbow, hand } = pose.arme[i];
      if (this.schieben && a.s < 0) {
        // rechte Hand am linken Lenkergriff
        hand = V(0.21, 0.94, 0.45).sub(off);
        elbow = ik(shp, hand, 0.27, 0.26, _k.set(a.s * 0.15, -0.2, -1), new THREE.Vector3());
      }
      placeLimb(a.upper, shp, elbow);
      placeLimb(a.lower, elbow, hand);
      a.hand.position.copy(hand);
      a.hand.quaternion.copy(a.lower.quaternion);
      a.elbow.position.copy(elbow);
      a.cap.position.copy(shp).add(_k.set(-a.s * 0.01, -0.012, 0));
    }
  }

  // Haltung aus der Animations-Puppe (Stehen, Reden, Sitzen)
  animPose(g, L) {
    const P = (n) => g.punkt(n, new THREE.Vector3());
    const dir = (a, b) => P(b).sub(P(a)).normalize();
    // Beine: Richtung der Knochen aus der Animation, Längen von unserer Figur
    const beine = this.legs.map((l) => {
      const sd = l.s > 0 ? 'l' : 'r';
      const hip = P('thigh_' + sd);
      const knee = hip.clone().addScaledVector(dir('thigh_' + sd, 'calf_' + sd), 0.44);
      const ankle = knee.clone().addScaledVector(dir('calf_' + sd, 'foot_' + sd), 0.43);
      const fb = P('ball_' + sd).sub(P('foot_' + sd));
      // Fußknochen ist im Stand schon 0,54 rad geneigt – das ist bei uns "flach"
      const tilt = Math.atan2(-fb.y, Math.hypot(fb.x, fb.z)) - 0.54;
      const shoe = schuhVomKnoechel(ankle, tilt);
      const ferse = shoe.clone().add(_k.set(0, 0, -0.185).applyAxisAngle(_xAxis, tilt));
      return { hip, knee, ankle, tilt, shoe, tief: Math.min(shoe.y, ferse.y) };
    });
    // so weit absenken/anheben, dass der tiefere Fuß genau auf dem Boden steht
    const y0 = -Math.min(beine[0].tief, beine[1].tief);
    const hoch = (v) => v.setY(v.y + y0);
    for (const b of beine) [b.hip, b.knee, b.ankle, b.shoe].forEach(hoch);
    const becken = hoch(P('pelvis'));
    const shL = hoch(P('upperarm_l'));
    const shR = hoch(P('upperarm_r'));
    const oben = shL.clone().add(shR).multiplyScalar(0.5);
    const tDir = oben.clone().sub(becken).normalize();
    const top = becken.clone().addScaledVector(tDir, L);
    const quer = shL.clone().sub(shR).normalize();
    const arme = this.arms.map((a) => {
      const sd = a.s > 0 ? 'l' : 'r';
      const shp = top.clone().addScaledVector(quer, a.s * 0.19).add(_k.set(0, -0.03, 0));
      const elbow = shp.clone().addScaledVector(dir('upperarm_' + sd, 'lowerarm_' + sd), 0.27);
      const hand = elbow.clone().addScaledVector(dir('lowerarm_' + sd, 'hand_' + sd), 0.26);
      return { shp, elbow, hand };
    });
    return { beine, becken, top, tDir, nDir: dir('neck_01', 'Head'), arme };
  }

  // Gehen, nachgebaut nach Ganganalysen (ca. 1,1–1,6 m/s): ~110–120 Schritte/min, Ferse setzt mit hochgezogener
  // Fußspitze auf, Fuß rollt über die Sohle zum Ballen ab, ~20 % der Zeit stehen beide Füße am Boden.
  // Die Hüfte ist in der Standmitte am höchsten (Bein fast gestreckt wie ein umgedrehtes Pendel) und sinkt,
  // wenn beide Füße am Boden sind – ca. 4–5 cm auf und ab. Arme fast gestreckt, gegengleich zu den Beinen.
  // ph = wo im Schritt (0 = linke Ferse setzt auf), v = Tempo in m/s
  schrittPose(ph, v, L) {
    const J = GEHEN;
    const D2R = Math.PI / 180;
    const L1 = 0.44;
    const L2 = 0.43;
    const vS = Math.max(v, this.gang.vSchritt || 0); // Takt (auch beim Trippeln auf der Stelle)
    const T = 120 / gehKadenz(vS); // Dauer von zwei Schritten (s)
    const beta = THREE.MathUtils.clamp(0.66 - 0.03 * v, 0.58, 0.66); // Anteil, in dem ein Fuß am Boden ist
    const tc = beta * T;
    const weg = v * tc; // so weit geht der Körper über den stehenden Fuß hinweg → kein Rutschen
    const gross = glatt(weg / 0.7); // 0 = trippeln, 1 = richtige Schritte
    const ferseIC = J.ferseVor * weg + J.ferseVorAb;
    const beinLang = (knick) => Math.sqrt(L1 * L1 + L2 * L2 + 2 * L1 * L2 * Math.cos(knick * D2R));
    const lMax = beinLang(J.knieGestreckt);
    const hTop = 0.095 + beinLang(J.knieStandmitte);
    const pendel = glatt(vS / 0.6);
    const cAuf = (c) => ((c % 1) + 1) % 1;
    const legC = (s, cL) => (s > 0 ? cL : cAuf(cL + 0.5));
    const cLvon = (s, c) => (s > 0 ? c : cAuf(c + 0.5));
    const psiAt = (cL) => -J.beckenDrehen * D2R * Math.cos(2 * Math.PI * cL) * gross;
    const seiteAt = (cL) => J.beckenSeite * Math.cos(2 * Math.PI * (cL - 0.3)) * pendel;
    const kippAt = (s, cL) => s * J.beckenKippen * Math.cos(2 * Math.PI * (cL - 0.3)) * pendel;
    const hipXZ = (s, cL) => V(s * 0.09, 0, 0).applyAxisAngle(UP, psiAt(cL)).add(_k.set(seiteAt(cL), 0, 0));
    // Standfuß: erst Ferse (Spitze hoch), dann ganze Sohle, dann Ballen (Ferse hoch)
    // fest[s] = wo der Fuß gerade wirklich am Boden steht (siehe unten), sonst aus Tempo und Takt ausgerechnet
    const fest = {};
    const standFuss = (s, c, jetzt = false) => {
      const u = Math.min(1, c / beta);
      const f = jetzt && fest[s];
      const x = f ? f.x : s * J.spur;
      const fz = f ? f.z - 0.185 : ferseIC - v * u * tc; // Ferse, als ob der Fuß flach stünde
      let tilt;
      let shoe;
      if (u < J.flachBis) {
        tilt = J.zehenHoch * (1 - glatt(u / J.flachBis));
        shoe = V(x, 0, fz).add(V(0, 0, 0.185).applyAxisAngle(_xAxis, tilt));
      } else {
        tilt = u < J.ferseHebt ? 0 : J.abrollen * glatt((u - J.ferseHebt) / (1 - J.ferseHebt));
        // Abrollen über die Schuhspitze: die Spitze bleibt am Boden, Ballen und Ferse heben sich
        shoe = V(x, 0, fz + 0.185).add(SPITZE).sub(SPITZE.clone().applyAxisAngle(_xAxis, tilt));
      }
      return { shoe, tilt, ankle: shoe.clone().add(schuhVersatz(tilt)) };
    };
    // Hüfthöhe: so hoch wie es geht, aber jedes Standbein muss seinen Fuß noch erreichen
    const hoehe = (cL, jetzt = false) => {
      let h = hTop;
      for (const s of [1, -1]) {
        const c = legC(s, cL);
        const hp = hipXZ(s, cL);
        let f;
        let los;
        if (c < beta) {
          f = standFuss(s, c, jetzt);
          // kurz vor dem Abheben darf der Fuß schon von der Spitze gehen (sonst müsste die Hüfte absacken)
          los = J.loslassen * glatt((c / beta - 0.7) / 0.3);
        } else if (c > 0.88) {
          // das Schwungbein kommt gleich auf: die Hüfte senkt sich schon vorher weich auf die richtige Höhe
          f = standFuss(s, 0);
          f.ankle.z += v * (1 - c) * T;
          los = 0.15 * (1 - glatt((c - 0.88) / 0.12));
        } else continue;
        const dz = f.ankle.z - hp.z;
        const dx = f.ankle.x - hp.x;
        h = smin(h, f.ankle.y + Math.sqrt(Math.max(0.2, lMax * lMax - dz * dz - dx * dx)) - kippAt(s, cL) + los);
      }
      return h;
    };
    const winkel = (hp, an) => {
      const kn = ik(hp, an, L1, L2, _k.set(0, 0, 1), new THREE.Vector3());
      const th = Math.atan2(kn.z - hp.z, hp.y - kn.y);
      const sh = Math.atan2(an.z - kn.z, kn.y - an.y);
      return [th, th - sh];
    };

    const cL = cAuf(ph);
    // Standfüße kleben in der Welt fest: auch beim Bremsen, Losgehen oder Drehen rutscht nichts.
    // Beim Aufsetzen merken wir uns den Punkt (Ballen, flach gedacht) in Weltkoordinaten.
    this.root.updateWorldMatrix(true, false);
    this.rider.updateWorldMatrix(false, false);
    const tritt = (this._tritt ||= {});
    for (const s of [1, -1]) {
      const c = legC(s, cL);
      const t = tritt[s];
      if (c >= beta) {
        tritt[s] = null;
        continue;
      }
      const soll = V(s * J.spur, 0, ferseIC - v * Math.min(1, c / beta) * tc + 0.185);
      let hier = t && t.c <= c + 1e-6 ? this.rider.worldToLocal(t.welt.clone()).setY(0) : null;
      if (!hier) {
        // neuer Schritt: Punkt merken
        hier = soll;
        tritt[s] = { welt: this.rider.localToWorld(soll.clone()), c };
      } else {
        t.c = c;
        // läuft die Figur ganz anders als gedacht (z. B. seitlich ums Rad herum), wird der Fuß höchstens
        // 25 cm weit festgehalten und dann mitgezogen – lieber kurz schleifen als springen
        const weit = hier.distanceTo(soll);
        if (weit > 0.25) {
          hier.lerp(soll, 1 - 0.25 / weit);
          t.welt = this.rider.localToWorld(hier.clone());
        }
      }
      fest[s] = hier;
    }
    const yH = hoehe(cL, true);
    const psi = psiAt(cL);
    const becken = V(seiteAt(cL), yH - 0.02, 0);
    const neig = J.vorlage * D2R;
    const tDir = V(0, Math.cos(neig), Math.sin(neig));
    const top = becken.clone().addScaledVector(tDir, L);
    const quer = V(1, 0, 0).applyAxisAngle(UP, -psi * J.schulterDrehen + (this.schieben ? J.schiebenDrehen * D2R : 0));

    const beine = this.legs.map((l) => {
      const s = l.s;
      const c = legC(s, cL);
      const hip = hipXZ(s, cL).setY(yH + kippAt(s, cL));
      let knee;
      let ankle;
      let tilt;
      if (c < beta) {
        const f = standFuss(s, c, true);
        tilt = f.tilt;
        knee = ik(hip, f.ankle, L1, L2, _k.set(s * 0.05, 0, 1), new THREE.Vector3());
        ankle = knee.clone().addScaledVector(f.ankle.clone().sub(knee).normalize(), L2);
      } else {
        // Schwungbein: Winkel aus der Messkurve; Anfang (Abdrücken) und Ende (Aufsetzen) passen zum Standbein
        const u = (c - beta) / (1 - beta);
        const ort = (cc) => {
          const cl = cLvon(s, cc);
          const f = standFuss(s, cc);
          return winkel(hipXZ(s, cl).setY(hoehe(cl) + kippAt(s, cl)), f.ankle).concat(f.tilt);
        };
        const [thTO, kTO, tTO] = ort(beta - 1e-4);
        const [thIC, kIC, tIC] = ort(0);
        const o = J.oberschenkel.map((w) => w * (0.4 + 0.6 * gross) * D2R);
        const k = J.knie.map((w, i) => w * (i === 2 ? 1 : 0.75 + 0.25 * gross) * D2R);
        const th = kurve([thTO, o[0], o[1], o[2], thIC], u);
        const kn = kurve([kTO, k[0], k[1], k[2], kIC], u);
        const sh = th - kn; // Unterschenkel (von senkrecht, + = Fuß vor dem Knie)
        const sh3 = o[2] - k[2];
        tilt = kurve([tTO + (thTO - kTO), 0.1, 0, J.zehenHoch * 0.6 + sh3, tIC + (thIC - kIC)], u) - sh;
        knee = hip.clone().add(V(0, -Math.cos(th) * L1, Math.sin(th) * L1));
        ankle = knee.clone().add(V(0, -Math.cos(sh) * L2, Math.sin(sh) * L2));
        const x = s * J.spur;
        ankle.x = x;
        knee.x = (hip.x + x) / 2 + s * 0.01;
        // Fuß darf nicht durch den Boden schleifen: notfalls Knöchel anheben und Knie neu beugen
        const ballen = schuhVomKnoechel(ankle, tilt);
        const sohle = Math.min(ballen.y, ballen.y + SPITZE.clone().applyAxisAngle(_xAxis, tilt).y, ankle.y - 0.095 * Math.cos(tilt) + 0.065 * Math.sin(tilt));
        if (sohle < 0.006) {
          ankle.y += 0.006 - sohle;
          knee = ik(hip, ankle, L1, L2, _k.set(s * 0.05, 0, 1), new THREE.Vector3());
        }
      }
      return { hip, knee, ankle, tilt, shoe: schuhVomKnoechel(ankle, tilt) };
    });

    // Arme: locker, fast gestreckt, gegengleich zum Bein derselben Seite
    const arme = this.arms.map((a) => {
      const c = legC(a.s, cL);
      const w = Math.cos(2 * Math.PI * (c - 0.5)) * gross; // +1 = Arm ganz vorne
      const al = (J.armMitte + J.armSchwung * w) * D2R;
      const fl = (J.ellbogen + J.ellbogenSpiel * w) * D2R;
      const shp = top.clone().addScaledVector(quer, a.s * 0.19).add(_k.set(0, -0.03, 0));
      const ab = J.armAbspreizen * D2R;
      const elbow = shp.clone().addScaledVector(V(a.s * Math.sin(ab), -Math.cos(al), Math.sin(al)).normalize(), 0.27);
      const be = al + fl;
      const hand = elbow.clone().addScaledVector(V(-a.s * J.handNachInnen, -Math.cos(be), Math.sin(be)).normalize(), 0.26);
      return { shp, elbow, hand };
    });
    return { beine, becken, top, tDir, nDir: V(0, Math.cos(3 * D2R), Math.sin(3 * D2R)), arme };
  }

  // Joggen, nachgebaut nach Messungen an echten Freizeitläufern (ca. 2,5–3 m/s):
  // ~165 Schritte/min, Bodenkontakt ~0,27 s, kurze Flugphase, Fuß setzt knapp vor der Hüfte mit dem Mittelfuß auf,
  // Becken hebt und senkt sich ~6 cm, Ferse schwingt hinten bis etwa Kniehöhe, Arme im ~90°-Winkel locker vor-zurück.
  // ph = wo im Laufschritt (0 = linker Fuß setzt auf), v = Tempo in m/s
  jogPose(ph, v, L) {
    const T = 120 / kadenz(v); // ✏️ Dauer von zwei Schritten (s), Kadenz steht in gang.js
    const tc = THREE.MathUtils.clamp(0.38 - 0.047 * v, 0.2, 0.34); // ✏️ Bodenkontakt eines Fußes (s), schneller = kürzer
    const beta = Math.min(0.45, tc / T); // Anteil der Runde, in dem der Fuß am Boden ist
    const flug = Math.max(0, T / 2 - tc); // Flugphase pro Schritt (s): beide Füße in der Luft
    const D2R = Math.PI / 180;
    const J = JOGGEN;
    const L1 = 0.44;
    const L2 = 0.43;
    const beinLang = (knick) => Math.sqrt(L1 * L1 + L2 * L2 + 2 * L1 * L2 * Math.cos(knick * D2R));
    // Wo der Knöchel beim Aufsetzen und beim Abdrücken ist (vor/hinter der Hüfte)
    const zIC = J.aufsetzen;
    const ballIC = zIC + 0.12;
    const ballTO = ballIC - v * tc; // so weit läuft der Körper über den stehenden Fuß hinweg → kein Rutschen
    const knTO = schuhVersatz(J.abdrueckKippen);
    const ankTO = { y: knTO.y, z: ballTO + knTO.z };
    // Hüfthöhe beim Aufsetzen und Abdrücken: so, dass das Knie dort nur leicht gebeugt ist
    const hIC = 0.095 + Math.sqrt(beinLang(J.knieAufsetzen) ** 2 - zIC * zIC);
    const hTO = ankTO.y + Math.sqrt(Math.max(0.3, beinLang(J.knieAbdruecken) ** 2 - ankTO.z * ankTO.z));
    const huefte = (c) => {
      // c = Anteil eines Schritts (0 = Aufsetzen); erst federn (absinken), dann fliegen (Bogen nach oben)
      const s = tc / (T / 2);
      if (c < s) {
        const u = c / s;
        return hIC + (hTO - hIC) * u - J.federn * Math.sin(Math.PI * u);
      }
      const w = (c - s) / (1 - s);
      return hTO + (hIC - hTO) * w + 4 * ((9.81 * flug * flug) / 8) * w * (1 - w);
    };
    const cL = ((ph % 1) + 1) % 1;
    const yH = huefte((cL * 2) % 1);
    // Becken dreht sich mit dem vorderen Bein mit, die Schultern drehen dagegen
    const psi = -J.beckenDrehen * D2R * Math.cos(2 * Math.PI * cL);
    const becken = V(0, yH - 0.02, 0);
    const neig = J.vorlage * D2R;
    const tDir = V(0, Math.cos(neig), Math.sin(neig));
    const top = becken.clone().addScaledVector(tDir, L);
    const quer = V(1, 0, 0).applyAxisAngle(UP, -psi * J.schulterDrehen);

    const beine = this.legs.map((l) => {
      const s = l.s;
      const c = s > 0 ? cL : (cL + 0.5) % 1;
      const hip = V(s * 0.09, 0, 0).applyAxisAngle(UP, psi).setY(yH);
      const x = s * J.spur;
      let knee;
      let ankle;
      let tilt;
      if (c < beta) {
        // Standbein: Fußballen fest am Boden, Körper läuft drüber; ab der Hälfte hebt sich die Ferse
        const u = c / beta;
        tilt = J.abdrueckKippen * glatt((u - 0.5) / 0.5);
        const ball = V(x, 0, ballIC - v * u * tc);
        ankle = ball.clone().add(schuhVersatz(tilt).setX(0));
        knee = ik(hip, ankle, L1, L2, _k.set(s * 0.08, 0, 1), new THREE.Vector3());
        ankle = knee.clone().addScaledVector(ankle.clone().sub(knee).normalize(), L2);
      } else {
        // Schwungbein: Winkel von Oberschenkel und Knie aus einer Messkurve, Anfang/Ende passend zum Standbein
        const u = (c - beta) / (1 - beta);
        const winkel = (hp, an) => {
          const kn = ik(hp, an, L1, L2, _k.set(0, 0, 1), new THREE.Vector3());
          const th = Math.atan2(kn.z - hp.z, hp.y - kn.y);
          const sh = Math.atan2(an.z - kn.z, kn.y - an.y);
          return [th, th - sh];
        };
        // Abdrücken (Hüfte dort, wo sie beim Abdrücken war)
        const [thTO, kTO] = winkel(V(0, hTO, 0), V(0, ankTO.y, ankTO.z));
        const [thIC, kIC] = winkel(V(0, hIC, 0), V(0, 0.095, zIC));
        const th = kurve([thTO, J.oberschenkel[0] * D2R, J.oberschenkel[1] * D2R, J.oberschenkel[2] * D2R, J.oberschenkel[3] * D2R, thIC], u);
        const kn = kurve([kTO, J.knie[0] * D2R, J.knie[1] * D2R, J.knie[2] * D2R, J.knie[3] * D2R, kIC], u);
        const sh = th - kn; // Unterschenkel (von senkrecht, + = Fuß vor dem Knie)
        // Fuß: Spitze anfangs nach unten gestreckt, vor dem Aufsetzen wieder flach
        const pTO = J.abdrueckKippen + (thTO - kTO);
        const pIC = 0 + (thIC - kIC);
        const sh4 = (J.oberschenkel[3] - J.knie[3]) * D2R; // vor dem Aufsetzen: Fuß schon flach (Spitze minimal hoch)
        tilt = kurve([pTO, 0.5, 0.35, 0.15, sh4 - 0.03, pIC], u) - sh;
        knee = hip.clone().add(V(0, -Math.cos(th) * L1, Math.sin(th) * L1));
        ankle = knee.clone().add(V(0, -Math.cos(sh) * L2, Math.sin(sh) * L2));
        ankle.x = x;
        knee.x = (hip.x + x) / 2 + s * 0.01;
        // Fuß darf nicht durch den Boden schleifen: notfalls Knöchel anheben und Knie neu beugen
        const sohle = Math.min(schuhVomKnoechel(ankle, tilt).y, ankle.y - 0.095 * Math.cos(tilt) + 0.065 * Math.sin(tilt)); // Ballen und Ferse
        if (sohle < 0.005) {
          ankle.y += 0.005 - sohle;
          knee = ik(hip, ankle, L1, L2, _k.set(s * 0.05, 0, 1), new THREE.Vector3());
        }
      }
      return { hip, knee, ankle, tilt, shoe: schuhVomKnoechel(ankle, tilt) };
    });

    // Arme: Oberarm schwingt gegen das Bein derselben Seite, Ellbogen etwa rechtwinklig
    const arme = this.arms.map((a) => {
      const c = a.s > 0 ? cL : (cL + 0.5) % 1;
      const w = Math.cos(2 * Math.PI * (c - 0.52)); // +1 = Arm ganz vorne (wenn das andere Bein aufsetzt)
      const al = (J.armMitte + J.armSchwung * w) * D2R;
      const fl = (J.ellbogen + J.ellbogenSpiel * w) * D2R;
      const shp = top.clone().addScaledVector(quer, a.s * 0.19).add(_k.set(0, -0.03, 0));
      const ab = J.armAbspreizen * D2R;
      const elbow = shp.clone().addScaledVector(V(a.s * Math.sin(ab), -Math.cos(al), Math.sin(al)).normalize(), 0.27);
      const be = al + fl;
      const hand = elbow.clone().addScaledVector(V(-a.s * J.handNachInnen, -Math.cos(be), Math.sin(be)).normalize(), 0.26);
      return { shp, elbow, hand };
    });
    const nDir = V(0, Math.cos(J.kopfVorne * D2R), Math.sin(J.kopfVorne * D2R));
    return { beine, becken, top, tDir, nDir, arme };
  }

  updateWalk(dt, speed) {
    if (this.gang) {
      this._warGehen = true;
      this.updateWalkAnim(dt, speed);
      return;
    }
    this._warGehen = true;
    const off = (this.gehOffset ||= V(0.55, 0, 0.3));
    this.rider.rotation.set(0, 0, 0);
    this.rider.position.copy(off);
    const w = Math.min(1, speed / 0.8);
    this.gehPhase = (this.gehPhase || 0) + (speed / 0.9) * Math.PI * 2 * dt;
    const ph = this.gehPhase;
    const hip = V(0, 0.9 + Math.abs(Math.cos(ph)) * 0.025 * w, 0);
    this.pelvis.position.copy(hip);
    const sh = V(0, hip.y + 0.5, 0.06);
    placeLimb(this.torso, hip, sh);
    this.halsBasis.set(0, sh.y - 0.03, 0.06);
    this.head.position.set(0, sh.y + 0.15, 0.09);
    for (const l of this.legs) {
      const s = l.s;
      const p = ph + (s > 0 ? Math.PI : 0);
      const foot = _a.set(s * 0.1, 0.08 * Math.max(0, Math.cos(p)) * w, 0.06 + 0.2 * Math.sin(p) * w);
      l.shoe.position.copy(foot);
      l.shoe.rotation.set(-0.15 * Math.max(0, Math.cos(p)) * w, 0, 0);
      const ankle = _b.copy(foot).add(_k.set(0, 0.095, -0.12));
      const hipC = hip.clone().add(_k.set(s * 0.09, 0, 0));
      const knee = ik(hipC, ankle, 0.44, 0.43, _k.set(s * 0.05, 0, 1), new THREE.Vector3());
      placeLimbFwd(l.thigh, hipC, knee, VORNE_OBEN);
      l.knee.position.copy(knee);
      const dir = ankle.clone().sub(knee).normalize();
      const ankleR = knee.clone().addScaledVector(dir, 0.43);
      placeLimbFwd(l.shin, knee, ankleR);
      placeLimb(l.sock, ankleR.clone().addScaledVector(dir, -0.16), ankleR.clone().addScaledVector(dir, 0.02));
    }
    for (const a of this.arms) {
      const shp = V(a.s * 0.19, sh.y - 0.03, 0.05);
      let hand;
      if (this.schieben && a.s < 0) {
        // rechte Hand am linken Lenkergriff
        hand = V(0.21, 0.94, 0.45).sub(off);
      } else {
        const p = ph + (a.s > 0 ? 0 : Math.PI);
        hand = V(a.s * 0.23, shp.y - 0.49, 0.05 + 0.17 * Math.sin(p) * w);
      }
      const elbow = ik(shp, hand, 0.27, 0.26, _k.set(a.s * 0.15, -0.2, -1), new THREE.Vector3());
      placeLimb(a.upper, shp, elbow);
      placeLimb(a.lower, elbow, hand);
      a.hand.position.copy(hand);
      a.hand.quaternion.copy(a.lower.quaternion);
      a.elbow.position.copy(elbow);
      a.cap.position.copy(shp).add(_k.set(-a.s * 0.01, -0.012, 0));
    }
    // Pedale stehen still
    for (const l of this.legs) {
      const ang = l.s > 0 ? this.crankAngle + Math.PI : this.crankAngle;
      this.pedals[l.s > 0 ? 1 : 0].position.set(l.s * 0.12, BB.y - CRANK * Math.cos(ang), BB.z - CRANK * Math.sin(ang));
    }
  }

  update(dt, speed, crankRate, steer) {
    this.wheelAngle += (speed / WHEEL_R) * dt;
    this.rearWheel.rotation.x = this.wheelAngle;
    this.frontWheel.rotation.x = this.wheelAngle;
    this.crankAngle += crankRate * dt;
    this.crank.rotation.x = this.crankAngle;
    this.steer.rotation.y = -steer * 0.5; // ✏️ wie weit das Vorderrad beim Lenken einschlägt (0,5 ≈ 29°)

    this.updateGesicht();
    // Absteigen und gehen (this.walk = true): der Fahrer läuft neben dem Rad und schiebt es
    if (this.walk) {
      this.updateWalk(dt, speed);
      this.updateHals();
      return;
    }
    if (this._warGehen) {
      this._warGehen = false;
      this.halsBasis.set(0, 1.19, 0.25);
      for (const [o, p, q] of this._sitz) {
        o.position.copy(p);
        o.quaternion.copy(q);
      }
      for (const l of this.legs) l.shoe.rotation.set(0, 0, 0);
    }

    const ca = this.crankAngle;
    const bob = Math.sin(ca * 2) * 0.006 * Math.min(1, Math.abs(crankRate) / 4);
    // Wiegetritt (aus dem Sattel, z. B. beim Sprint): this.stand = 0 sitzen … 1 stehen
    this.standK = (this.standK || 0) + ((this.stand || 0) - (this.standK || 0)) * (1 - Math.exp(-6 * dt));
    const st = this.aero ? 0 : this.standK;
    // Sprint wie die Profis: aus dem Sattel, Becken nach vorne, Rücken flach und so tief wie möglich
    // Radwurf an der Ziellinie (this.wurf 0 … 1): Rad nach vorne schieben, Arme lang, Körper tief nach hinten
    this.wurfK = (this.wurfK || 0) + ((this.wurf || 0) - (this.wurfK || 0)) * (1 - Math.exp(-28 * dt));
    const wf = this.aero ? 0 : this.wurfK;
    const th = 0.2 * st + 0.28 * wf;
    this.rider.rotation.x = th;
    const pivot = _standOff.copy(this.hip).applyAxisAngle(_xAxis, th);
    this.rider.position.set(0, bob + 0.06 * st - 0.07 * wf, 0.13 * st - 0.3 * wf).add(this.hip).sub(pivot);
    this.rider.updateMatrix();
    const toRider = (this._toRider ||= new THREE.Matrix4()).copy(this.rider.matrix).invert();
    // Rad schaukelt im Takt der Pedale hin und her
    if (st > 0.01) this.root.rotation.z += Math.sin(ca) * 0.11 * st;
    this.torso.rotation.y = 0;

    // Pedale und Beine
    for (const l of this.legs) {
      const s = l.s;
      // s=1 = linker Fuß (+x), s=-1 = rechter Fuß (Kettenseite)
      const ang = s > 0 ? ca + Math.PI : ca;
      const pedal = this.pedals[s > 0 ? 1 : 0];
      pedal.position.set(s * 0.12, BB.y - CRANK * Math.cos(ang), BB.z - CRANK * Math.sin(ang));
      const foot = _a.copy(pedal.position).applyMatrix4(toRider);
      // Schuhplatte sitzt auf dem Pedal
      l.shoe.position.copy(foot).add(_k.set(0, 0.008, 0));
      // Fußspitze zeigt hinten im Tritt nach unten, vorne etwas nach oben (wie bei echten Fahrern)
      const tilt = 0.06 + 0.22 * Math.sin(ang);
      l.shoe.rotation.x = tilt;
      // Knöchel sitzt hinter und über dem Fußballen
      const ankle = _b.copy(foot).add(_k.set(0, 0.095, -0.12).applyAxisAngle(_xAxis, tilt));
      const hip = _p.copy(this.hip).add(_k.set(s * 0.09, 0, 0));
      const hipC = hip.clone();
      const knee = ik(hipC, ankle, 0.44, 0.43, _k.set(s * 0.12, 0.1, 1), new THREE.Vector3());
      placeLimbFwd(l.thigh, hipC, knee, VORNE_OBEN);
      l.knee.position.copy(knee);
      // Schienbein mit fester Länge Richtung Knöchel
      const dir = ankle.clone().sub(knee).normalize();
      const ankleR = knee.clone().addScaledVector(dir, 0.43);
      placeLimbFwd(l.shin, knee, ankleR);
      // Socken bis zur Wadenmitte
      placeLimb(l.sock, ankleR.clone().addScaledVector(dir, -0.16), ankleR.clone().addScaledVector(dir, 0.02));
    }

    // Arme zu den Griffen (folgen dem Lenker)
    const steerA = this.steer.rotation.y;
    const hands = (this._hands ||= [new THREE.Vector3(), new THREE.Vector3()]);
    for (const a of this.arms) {
      // Schultern passend zur tiefen Haltung: Arme dadurch stärker angewinkelt
      const sh = V(a.s * 0.19, 1.19, 0.23);
      const hx = a.s * 0.21;
      const hz = 0.1 + 0.45;
      // Zeitfahren: Hände vorne an den Verlängerungen
      const ax = this.aero ? a.s * 0.058 : hx;
      // im Sprint unten am Lenker (Unterlenker)
      const az = this.aero ? 0.45 + 0.17 : hz - 0.03 * st;
      const hand = V(
        ax * Math.cos(steerA) + (az - 0.45) * Math.sin(steerA),
        this.aero ? 0.95 : 0.94 - 0.12 * st,
        0.45 - ax * Math.sin(steerA) + (az - 0.45) * Math.cos(steerA),
      );
      const handBike = hand.clone();
      hand.applyMatrix4(toRider);
      // Ellbogen eng am Körper: zeigen nach unten/hinten, nicht nach außen
      const elbow = ik(sh, hand, 0.27, 0.26, _k.set(a.s * 0.05, -0.75, -0.35), new THREE.Vector3());
      placeLimb(a.upper, sh, elbow);
      placeLimb(a.lower, elbow, hand);
      a.hand.position.copy(hand);
      hands[a.s > 0 ? 1 : 0].copy(handBike);
      a.hand.quaternion.copy(a.lower.quaternion);
      a.elbow.position.copy(elbow);
      a.cap.position.copy(sh).add(_k.set(-a.s * 0.01, -0.012, 0));
    }
    this.updateHals();
    if (this.model) {
      this.model.pose({
        hip: (this._hipS ||= new THREE.Vector3()).copy(this.hip).add(_k.set(0, 0.06 * st - 0.07 * wf, 0.13 * st - 0.3 * wf)),
        pedals: [this.pedals[0].position, this.pedals[1].position],
        angles: [ca, ca + Math.PI],
        hands,
        bob,
        aero: this.aero,
        stand: st,
      });
    }
  }
}
