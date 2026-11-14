// Echte Bewegungen zum Gehen und Stehen: "Universal Animation Library" von Quaternius (CC0).
// Die Datei enthält eine Puppe mit Skelett und vielen Animationen (Gehen, Stehen, Reden …).
// Wir zeigen die Puppe nicht – wir lesen nur jedes Bild die Gelenke ab und stellen damit
// Arme, Beine und Oberkörper unserer eigenen Fahrer-Figur (bike.js) hin.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

const URL = 'modelle/animation/UAL1_Standard.glb';
// Gehen und Joggen spielen wir NICHT mehr mit "Walk_Loop"/"Jog_Fwd_Loop" ab (falscher Takt, Füße rutschten,
// Joggen hüpfte viel zu hoch), sondern bauen es selbst nach echten Messwerten nach (bike.js). Hier wird nur der Takt gezählt.
// ✏️ ab diesem Tempo (m/s) beginnt das nachgebaute Joggen, voll ist es JOG_BREITE später.
// Zügiges Gehen in der Stadt (1,6 m/s) bleibt darunter.
const JOG_AB = 1.8;
const JOG_BREITE = 0.6;
// ✏️ Schritte pro Minute beim Joggen: echte Läufer machen bei 2,8 m/s etwa 160–170 Schritte
export const kadenz = (v) => THREE.MathUtils.clamp(140 + 9 * v, 150, 180);
// ✏️ Schritte pro Minute beim Gehen: echte Menschen machen bei 1,3–1,6 m/s etwa 110–120 Schritte
export const gehKadenz = (v) => THREE.MathUtils.clamp(70 + 32 * v, 60, 130);
const GEH_DREH = 0.3; // ✏️ wie viel "Trippel-Tempo" (m/s) pro rad/s Drehung auf der Stelle
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
    // Schritte: wie stark (gehW, jogW) und wo im Schritt (jogPhase: 0 = linker Fuß setzt auf, 0,5 = rechter)
    this.gehW = 0;
    this.jogW = 0;
    this.jogPhase = 0;
    this.vSchritt = 0;
    this.sitzen = false;
    this.bones = {};
    this.obj.traverse((o) => {
      if (KNOCHEN.includes(o.name)) this.bones[o.name] = o;
    });
    this.reden = false;
  }

  // speed in m/s; dreh = wie schnell sich die Figur gerade dreht (rad/s); reden = beim Stehen mit Händen erzählen
  // Die Puppe liefert nur noch Stehen, Reden und Sitzen. Gehen und Joggen baut bike.js selbst nach Messwerten
  // (schrittPose, jogPose) – hier wird nur ausgerechnet, wie stark und in welchem Takt.
  update(dt, speed, dreh = 0) {
    // beim Drehen auf der Stelle trippelt man mit kleinen Schritten mit
    const vSchritt = Math.max(speed, Math.min(0.5, Math.abs(dreh) * GEH_DREH));
    const gehen = this.sitzen ? 0 : THREE.MathUtils.smoothstep(vSchritt, 0.04, 0.4);
    const sitz = this.sitzen ? 1 : 0;
    const ziel = {
      walk: 0,
      jog: 0,
      idle: (1 - sitz) * (this.reden ? 0 : 1),
      talk: (1 - sitz) * (this.reden ? 1 : 0),
      sit: sitz * (this.reden ? 0 : 1),
      sitTalk: sitz * (this.reden ? 1 : 0),
    };
    const k = 1 - Math.exp(-6 * dt);
    for (const n of ['walk', 'idle', 'talk', 'jog', 'sit', 'sitTalk']) {
      this.w[n] += (ziel[n] - this.w[n]) * k;
      this[n].setEffectiveWeight(this.w[n]);
    }
    // gehW: 0 = stehen/sitzen (Puppe), 1 = Schritte; jogW: Anteil Joggen an den Schritten
    this.gehW += (gehen - this.gehW) * (1 - Math.exp(-10 * dt)); // ✏️ wie schnell Stehen ↔ Gehen überblendet
    const jz = THREE.MathUtils.smoothstep(speed, JOG_AB, JOG_AB + JOG_BREITE);
    this.jogW += (jz - this.jogW) * k;
    this.vSchritt = vSchritt;
    // Takt: eine Runde = zwei Schritte (links + rechts); 0 = linke Ferse/linker Fuß setzt auf
    if (this.gehW > 0.001) {
      const proMin = gehKadenz(vSchritt) + (kadenz(Math.max(speed, 1)) - gehKadenz(vSchritt)) * this.jogW;
      this.jogPhase = (this.jogPhase + (dt * proMin) / 120) % 1;
    }
    this.mixer.update(dt);
    this.obj.updateMatrixWorld(true);
  }

  // Lage eines Gelenks (in der Figur: vorne = +z, oben = +y, links = +x)
  punkt(name, out) {
    return this.bones[name].getWorldPosition(out);
  }
}
