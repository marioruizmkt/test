// Genera los puntos de tierra del globo del hero (src/data/globe-dots.json).
// Uso: node scripts/build-globe.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/land-50m.json', import.meta.url)));
const land = feature(topo, topo.objects.land);

// Muestreo uniforme de la esfera (espiral de Fibonacci)
const N = 16000;
const golden = Math.PI * (3 - Math.sqrt(5));
const out = [];
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const t = golden * i;
  const lat = (Math.asin(y) * 180) / Math.PI;
  const lon = ((Math.atan2(Math.sin(t) * r, Math.cos(t) * r) * 180) / Math.PI);
  if (lat < -60) continue; // sin Antártida
  if (geoContains(land, [lon, lat])) out.push(Math.round(lat * 10), Math.round(lon * 10));
}
writeFileSync(new URL('../src/data/globe-dots.json', import.meta.url), JSON.stringify(out));
console.log(`${out.length / 2} puntos`);
