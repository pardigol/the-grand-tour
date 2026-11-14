// Echte Bewegungen zum Gehen und Stehen: "Universal Animation Library" von Quaternius (CC0).
// Die Datei enthält eine Puppe mit Skelett und vielen Animationen (Gehen, Stehen, Reden …).
// Wir zeigen die Puppe nicht – wir lesen nur jedes Bild die Gelenke ab und stellen damit
// Arme, Beine und Oberkörper unserer eigenen Fahrer-Figur (bike.js) hin.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

const URL = 'modelle/animation/UAL1_Standard.glb';
const JOG_TEMPO = 2.6; // m/s beim Joggen ("Jog_Fwd_Loop")
const GEH_TEMPO = 0.98; // m/s, so schnell läuft die Puppe in "Walk_Loop"
const KNOCHEN = [
  'pelvis', 'spine_03', 'neck_01', 'Head',
  'upperarm_l', 'lowerarm_l', 'hand_l', 'upperarm_r', 'lowerarm_r', 'hand_r',
  'thigh_l', 'calf_l', 'foot_l', 'ball_l', 'thigh_r', 'calf_r', 'foot_r', 'ball_r',
];

let laden = null;
export function loadGang() {
  laden ||= new GLTFLoader()
    .loadAsync(URL)
    .catch((e) => {
      console.warn('Animationen konnten nicht geladen werden', e);
      return null;
    });
  return laden;
}

export class Gang {
  constructor(gltf) {
    this.obj = cloneSkinned(gltf.scene);
    this.obj.traverse((o) => o.isMesh && (o.visible = false));
    this.mixer = new THREE.AnimationMixer(this.obj);
    const clip = (n) => gltf.animations.find((a) => a.name === n);
    this.walk = this.mixer.clipAction(clip('Walk_Loop'));
    this.idle = this.mixer.clipAction(clip('Idle_Loop'));
    this.talk = this.mixer.clipAction(clip('Idle_Talking_Loop'));
    // Joggen und auf der Bank sitzen (Park)
    this.jog = this.mixer.clipAction(clip('Jog_Fwd_Loop'));
    this.sit = this.mixer.clipAction(clip('Sitting_Idle_Loop'));
    this.sitTalk = this.mixer.clipAction(clip('Sitting_Talking_Loop'));
    for (const a of [this.walk, this.idle, this.talk, this.jog, this.sit, this.sitTalk]) {
      a.play();
      a.setEffectiveWeight(0);
    }
    this.w = { walk: 0, idle: 1, talk: 0, jog: 0, sit: 0, sitTalk: 0 };
    this.sitzen = false;
    this.bones = {};
    this.obj.traverse((o) => {
      if (KNOCHEN.includes(o.name)) this.bones[o.name] = o;
    });
    this.reden = false;
  }

  // speed in m/s; reden = beim Stehen mit Händen erzählen
  update(dt, speed) {
    const gehen = this.sitzen ? 0 : Math.min(1, speed / 0.35);
    // ab etwa 1,5 m/s wird aus Gehen Joggen
    const j = Math.min(1, Math.max(0, (speed - 1.4) / 0.8));
    const steh = this.sitzen ? 0 : 1 - gehen;
    const sitz = this.sitzen ? 1 : 0;
    const ziel = {
      walk: gehen * (1 - j),
      jog: gehen * j,
      idle: steh * (this.reden ? 0 : 1),
      talk: steh * (this.reden ? 1 : 0),
      sit: sitz * (this.reden ? 0 : 1),
      sitTalk: sitz * (this.reden ? 1 : 0),
    };
    const k = 1 - Math.exp(-6 * dt);
    this.jog.timeScale = THREE.MathUtils.clamp(speed / JOG_TEMPO, 0.6, 1.6);
    for (const n of ['walk', 'idle', 'talk', 'jog', 'sit', 'sitTalk']) {
      this.w[n] += (ziel[n] - this.w[n]) * k;
      this[n].setEffectiveWeight(this.w[n]);
    }
    this.walk.timeScale = THREE.MathUtils.clamp(speed / GEH_TEMPO, 0.5, 2);
    this.mixer.update(dt);
    this.obj.updateMatrixWorld(true);
  }

  // Lage eines Gelenks (in der Figur: vorne = +z, oben = +y, links = +x)
  punkt(name, out) {
    return this.bones[name].getWorldPosition(out);
  }
}
