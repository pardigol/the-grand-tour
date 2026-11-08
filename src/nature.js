// Lädt die Natur-Modelle (Bäume, Büsche, Felsen, Holz) aus public/modelle/natur.
// Quelle: "Ultimate Nature Pack" von Quaternius (CC0). Die Farben stehen in den .mtl-Dateien;
// wir machen daraus Vertex-Farben, damit jeder Baumtyp mit nur einem Material gezeichnet wird.
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

const BASE = 'modelle/natur/';

const SETS = {
  sommer: { common: 'CommonTree', birch: 'BirchTree', willow: 'Willow', pine: 'PineTree', pineAlt: 'PineTree' },
  herbst: { common: 'CommonTree_Autumn', birch: 'BirchTree_Autumn', willow: 'Willow_Autumn', pine: 'PineTree', pineAlt: 'PineTree_Autumn' },
};

function parseMtl(text, hell = 1.6) {
  const colors = {};
  let name = null;
  for (const line of text.split('\n')) {
    const p = line.trim().split(/\s+/);
    if (p[0] === 'newmtl') name = p[1];
    // Werte aus Blender sind linear und recht dunkel -> etwas aufhellen, damit die Farben leuchten
    else if (p[0] === 'Kd' && name) colors[name] = new THREE.Color(Math.min(1, p[1] * hell), Math.min(1, p[2] * hell), Math.min(1, p[3] * hell));
  }
  return colors;
}

// Eine OBJ-Datei -> eine Geometrie mit Farben, unten auf y = 0, mittig
// base = Ordner, hell = Aufhellung der Farben, fuss = am Stammfuß ausrichten (Bäume) statt an der Mitte (Häuser)
export async function loadModel(name, base = BASE, hell = 1.6, fuss = true) {
  const [objText, mtlText] = await Promise.all([
    fetch(base + name + '.obj').then((r) => r.text()),
    fetch(base + name + '.mtl').then((r) => r.text()),
  ]);
  const colors = parseMtl(mtlText, hell);
  // Einzelne Linien („l …“) entfernen – sonst macht der Loader aus dem ganzen Modell Linien
  const group = new OBJLoader().parse(objText.replace(/^l .*$/gm, ''));
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
  // Am Stammfuß ausrichten: Mitte der untersten Punkte (bei schiefen Bäumen liegt die Krone daneben)
  const pos = geo.attributes.position;
  const limit = bb.min.y + (bb.max.y - bb.min.y) * 0.06;
  let sx = 0;
  let sz = 0;
  let n = 0;
  for (let i = 0; i < pos.count; i++) {
    if (pos.getY(i) <= limit) {
      sx += pos.getX(i);
      sz += pos.getZ(i);
      n++;
    }
  }
  const cx = n && fuss ? sx / n : (bb.min.x + bb.max.x) / 2;
  const cz = n && fuss ? sz / n : (bb.min.z + bb.max.z) / 2;
  geo.translate(-cx, -bb.min.y, -cz);
  // gleiche Eckpunkte zusammenlegen: viel weniger Arbeit für die Grafikkarte (wichtig fürs iPad)
  const out = mergeVertices(geo, 1e-4);
  out.computeBoundingBox();
  return out;
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

// Dorf fürs Zeitfahren: "Medieval Village Pack" von Quaternius (CC0), liegt in public/modelle/dorf
export const DORF_HAEUSER = ['House_1', 'House_2', 'House_3', 'House_4', 'Inn', 'Blacksmith', 'Stable', 'Sawmill', 'Mill', 'Bell_Tower'];
export const DORF_DINGE = ['Well', 'MarketStand_1', 'MarketStand_2', 'Cart', 'Barrel', 'Crate', 'Fence', 'Bench_1', 'Gazebo', 'Hay', 'Bags', 'Package_1', 'Bonfire_Lit'];
export async function loadVillageModels() {
  try {
    const base = 'modelle/dorf/';
    const all = [...DORF_HAEUSER, ...DORF_DINGE];
    const geos = await Promise.all(all.map((n) => loadModel(n, base, 1.9, false)));
    return Object.fromEntries(all.map((n, i) => [n, geos[i]]));
  } catch (e) {
    console.warn('Dorf-Modelle konnten nicht geladen werden.', e);
    return null;
  }
}
