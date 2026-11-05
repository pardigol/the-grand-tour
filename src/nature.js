// Lädt die Natur-Modelle (Bäume, Büsche, Felsen, Holz) aus public/modelle/natur.
// Quelle: "Ultimate Nature Pack" von Quaternius (CC0). Die Farben stehen in den .mtl-Dateien;
// wir machen daraus Vertex-Farben, damit jeder Baumtyp mit nur einem Material gezeichnet wird.
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const BASE = 'modelle/natur/';

const SETS = {
  sommer: { common: 'CommonTree', birch: 'BirchTree', willow: 'Willow', pine: 'PineTree', pineAlt: 'PineTree' },
  herbst: { common: 'CommonTree_Autumn', birch: 'BirchTree_Autumn', willow: 'Willow_Autumn', pine: 'PineTree', pineAlt: 'PineTree_Autumn' },
};

function parseMtl(text) {
  const colors = {};
  let name = null;
  for (const line of text.split('\n')) {
    const p = line.trim().split(/\s+/);
    if (p[0] === 'newmtl') name = p[1];
    // Werte aus Blender sind linear und recht dunkel -> etwas aufhellen, damit die Farben leuchten
    else if (p[0] === 'Kd' && name) colors[name] = new THREE.Color(Math.min(1, p[1] * 1.6), Math.min(1, p[2] * 1.6), Math.min(1, p[3] * 1.6));
  }
  return colors;
}

// Eine OBJ-Datei -> eine Geometrie mit Farben, unten auf y = 0, mittig
async function loadModel(name) {
  const [objText, mtlText] = await Promise.all([
    fetch(BASE + name + '.obj').then((r) => r.text()),
    fetch(BASE + name + '.mtl').then((r) => r.text()),
  ]);
  const colors = parseMtl(mtlText);
  const group = new OBJLoader().parse(objText);
  const parts = [];
  group.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (!g.attributes.normal) g.computeVertexNormals();
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    const groups = g.groups.length ? g.groups : [{ start: 0, count: g.attributes.position.count, materialIndex: 0 }];
    const col = new Float32Array(g.attributes.position.count * 3);
    for (const gr of groups) {
      const c = colors[mats[gr.materialIndex]?.name] || new THREE.Color(0.5, 0.5, 0.5);
      for (let i = gr.start; i < gr.start + gr.count; i++) {
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute('position', g.attributes.position);
    out.setAttribute('normal', g.attributes.normal);
    out.setAttribute('color', new THREE.BufferAttribute(col, 3));
    parts.push(out);
  });
  const geo = mergeGeometries(parts);
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  geo.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
  geo.computeBoundingBox();
  return geo;
}

const range = (name, n) => Array.from({ length: n }, (_, i) => `${name}_${i + 1}`);

// Lädt alles, was die Welten brauchen. Gibt null zurück, wenn etwas fehlt (dann gibt es die alten Bäume).
export async function loadNature() {
  try {
    const want = new Set();
    for (const set of Object.values(SETS)) for (const n of Object.values(set)) range(n, 5).forEach((x) => want.add(x));
    ['Bush_1', 'Bush_2', 'BushBerries_1', 'BushBerries_2', 'TreeStump_Moss', 'WoodLog_Moss', ...range('Rock_Moss', 7)].forEach((x) =>
      want.add(x),
    );
    const names = [...want];
    const geos = await Promise.all(names.map(loadModel));
    const byName = Object.fromEntries(names.map((n, i) => [n, geos[i]]));
    const pick = (season) => {
      const s = SETS[season] || SETS.sommer;
      return {
        common: range(s.common, 5).map((n) => byName[n]),
        birch: range(s.birch, 5).map((n) => byName[n]),
        willow: range(s.willow, 5).map((n) => byName[n]),
        pine: range(s.pine, 5).map((n) => byName[n]),
        pineAlt: range(s.pineAlt, 5).map((n) => byName[n]),
      };
    };
    return {
      trees: { sommer: pick('sommer'), herbst: pick('herbst') },
      bushes: ['Bush_1', 'Bush_2', 'BushBerries_1', 'BushBerries_2'].map((n) => byName[n]),
      rocks: range('Rock_Moss', 7).map((n) => byName[n]),
      stump: byName.TreeStump_Moss,
      log: byName.WoodLog_Moss,
    };
  } catch (e) {
    console.warn('Natur-Modelle konnten nicht geladen werden, nutze einfache Bäume.', e);
    return null;
  }
}
