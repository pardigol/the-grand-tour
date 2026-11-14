// Der Chef von Team Blitz (Anzug-Modell aus public/modelle/chef, mit eigenen Animationen).
// Jede Szene bekommt eine eigene Kopie (makeChef), die Pistole aus dem Modell wird ausgeblendet.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

let laden = null;
export function loadChef() {
  laden ||= new GLTFLoader().loadAsync('modelle/chef/chef.gltf').catch((e) => {
    console.warn('Chef konnte nicht geladen werden', e);
    return null;
  });
  return laden;
}

export function makeChef(gltf) {
  if (!gltf) return null;
  const obj = cloneSkinned(gltf.scene);
  // Das Modell hat eine Pistole dabei – die braucht der Chef nicht
  obj.traverse((o) => {
    if (o.name === 'Pistol') o.visible = false;
  });
  obj.traverse((o) => {
    if (o.isMesh && o.visible) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.frustumCulled = false;
    }
  });
  // auf 1,84 m Größe bringen
  const bb = new THREE.Box3().setFromObject(obj);
  obj.scale.setScalar(1.84 / Math.max(0.01, bb.max.y - bb.min.y));
  const mixer = new THREE.AnimationMixer(obj);
  const clip = (n) => gltf.animations.find((a) => a.name === n);
  const aktionen = {};
  for (const n of ['Walk', 'Idle', 'Wave', 'Idle_Neutral', 'Interact']) if (clip(n)) aktionen[n] = mixer.clipAction(clip(n));
  for (const n of ['Wave', 'Interact']) {
    if (!aktionen[n]) continue;
    aktionen[n].setLoop(THREE.LoopOnce);
    aktionen[n].clampWhenFinished = true;
  }
  let kopf = obj;
  obj.traverse((o) => {
    if (o.name === 'Head') kopf = o;
  });
  const chef = {
    obj,
    mixer,
    aktionen,
    jetzt: null,
    kopf,
    x: 0,
    z: 0,
    y: 0,
    h: 0,
    spiel(name, fade = 0.35) {
      const a = aktionen[name] || aktionen.Idle;
      if (!a || chef.jetzt === a) return;
      a.reset().play();
      if (chef.jetzt) a.crossFadeFrom(chef.jetzt, fade, false);
      chef.jetzt = a;
    },
    update(dt) {
      obj.position.set(chef.x, chef.y, chef.z);
      obj.rotation.y = chef.h;
      mixer.update(dt);
    },
  };
  chef.spiel('Idle', 0);
  return chef;
}
