import sharp from "sharp";
import {mkdir,readFile} from "node:fs/promises";
await mkdir("output/quality-review",{recursive:true});
const manifest=JSON.parse(await readFile("public/images/manifest.json","utf8"));
for(let batch=0;batch<Math.ceil(manifest.length/12);batch++){
 const tiles=[];
 for(const [i,entry] of manifest.slice(batch*12,batch*12+12).entries()){
  const input=await sharp(`public/${entry.path}`).resize(240,280,{fit:"contain",background:"#ece7df"}).toBuffer();tiles.push({input,left:(i%6)*240,top:Math.floor(i/6)*280});
 }
 await sharp({create:{width:1440,height:560,channels:3,background:"#ece7df"}}).composite(tiles).png().toFile(`output/quality-review/batch-${batch}.png`);
}
console.log("Diagnostic contact sheets ready; each storefront image remains independent.");
