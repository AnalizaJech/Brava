import { readFile, stat } from "node:fs/promises";
import assert from "node:assert/strict";
import sharp from "sharp";
const manifest=JSON.parse(await readFile("public/images/manifest.json","utf8"));
const sources=JSON.parse(await readFile("docs/catalog-sources.json","utf8"));
const expected=new Set(sources.products.flatMap(p=>p.colors.flatMap(c=>c.gallery.map(i=>i.path))));
assert.equal(manifest.length,expected.size,"Catalog gallery and manifest must match");
const seen=new Set();
for(const entry of manifest){
 assert.match(entry.path,/^images\/products\/[a-z0-9-]+\/\d+-\d+\.webp$/);
 assert(expected.has(entry.path),"Unexpected gallery image");assert(!seen.has(entry.path),"Duplicate media path");seen.add(entry.path);
 const info=await sharp(`public/${entry.path}`).metadata();
 assert(info.width>=1024&&info.height>=1024,`Insufficient native resolution: ${entry.path}`);
 assert.equal(info.width,entry.width);assert.equal(info.height,entry.height);assert.equal((await stat(`public/${entry.path}`)).size,entry.bytes);
 const attribution=sources.photos.find(i=>i.path===entry.path);assert(attribution?.sourcePage&&attribution.sourceUrl&&attribution.owner,"Missing photo provenance");
}
for(const p of sources.products){
 for(const c of p.colors)assert(p.variants.some(v=>v.color===c.name),"Unverified color");
 for(const size of p.sizes)assert(p.variants.some(v=>v.size===size),"Unverified size");
 assert.equal(p.price,0,"Final Peru prices are not established");
}
console.log(`${sources.products.length} real models and ${manifest.length} native product photographs verified.`);
