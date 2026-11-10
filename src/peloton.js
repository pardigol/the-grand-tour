// Das große Fahrerfeld (Peloton): 46 Fahrer mit genau dem gleichen Aufbau wie alle anderen (Rad + Fahrer aus bike.js).
// Damit es auch auf dem iPad flüssig bleibt, wird jedes Bauteil für alle Fahrer gemeinsam gezeichnet (InstancedMesh).
// Die Tretbewegung kommt aus vorher berechneten Bildern (16 Stellungen der Kurbel).
import * as THREE from 'three';
import { Bike } from './bike.js';

const BILDER = 16; // Kurbel-Stellungen
const _base = new THREE.Matrix4();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);

function sichtbar(o, root) {
  for (let x = o; x && x !== root; x = x.parent) if (!x.visible) return false;
  return true;
}

export class Peloton {
  constructor(scene, count) {
    this.count = count;
    this.group = new THREE.Group();
    scene.add(this.group);
    // Vorlage: weißes Trikot, weißer Helm, weißer Rahmen – die Farben kommen je Fahrer dazu
    const vorlage = new Bike();
    vorlage.applyLook({ jersey: '#ffffff', frame: '#ffffff', helmet: '#ffffff', kit: 'plain', paint: 'solid', bar: '#16161b' });
    vorlage.setTires('road');
    const M = vorlage.mats;
    const rolle = new Map([
      [M.jersey, 'jersey'],
      [M.sleeve, 'jersey'],
      [M.jerseyPlain, 'jersey'],
      [M.helmet, 'helmet'],
      [M.frame, 'frame'],
    ]);
    // alle sichtbaren Bauteile einsammeln (ohne Startnummern)
    const teile = [];
    vorlage.root.traverse((o) => {
      if (!o.isMesh || !sichtbar(o, vorlage.root)) return;
      const mat = Array.isArray(o.material) ? o.material[0] : o.material;
      if (mat?.map && mat.map === vorlage.plateTex) return;
      teile.push(o);
    });
    // Für jede Kurbelstellung die Lage jedes Bauteils merken
    this.bilder = [];
    for (let k = 0; k < BILDER; k++) {
      vorlage.crankAngle = (k / BILDER) * Math.PI * 2;
      vorlage.wheelAngle = (k / BILDER) * Math.PI * 2;
      vorlage.update(0, 0, 0, 0);
      vorlage.root.updateMatrixWorld(true);
      this.bilder.push(teile.map((t) => t.matrixWorld.clone()));
    }
    this.meshes = teile.map((t) => {
      const im = new THREE.InstancedMesh(t.geometry, t.material, count);
      im.castShadow = t.castShadow;
      im.receiveShadow = t.receiveShadow;
      im.frustumCulled = false;
      const r = rolle.get(Array.isArray(t.material) ? t.material[0] : t.material);
      if (r) {
        im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3).fill(1), 3);
        im.userData.rolle = r;
      }
      this.group.add(im);
      return im;
    });
    this.crank = new Float32Array(count).map(() => Math.random() * Math.PI * 2);
  }

  // Farben je Fahrer: Trikot, Rahmen, Helm
  setColors(i, farben) {
    const c = new THREE.Color();
    for (const m of this.meshes) {
      const r = m.userData.rolle;
      if (!r) continue;
      m.setColorAt(i, c.set(farben[r]));
      m.instanceColor.needsUpdate = true;
    }
  }

  // Fahrer i an Position (x, h, z) mit Richtung, Neigung, Schräglage; v = Tempo (m/s) für das Treten
  set(i, x, h, z, heading, pitch, lean, v, dt, pedal = true) {
    if (pedal && v > 0.3) this.crank[i] += (v / 0.34 / 3.6) * dt;
    const k = Math.floor((((this.crank[i] / (Math.PI * 2)) % 1) + 1) % 1 * BILDER) % BILDER;
    _e.set(-pitch, heading, lean);
    _base.compose(_p.set(x, h, z), _q.setFromEuler(_e), _s);
    const bild = this.bilder[k];
    for (let j = 0; j < this.meshes.length; j++) this.meshes[j].setMatrixAt(i, _m.multiplyMatrices(_base, bild[j]));
  }

  commit() {
    for (const m of this.meshes) m.instanceMatrix.needsUpdate = true;
  }

  set visible(v) {
    this.group.visible = v;
  }
}
