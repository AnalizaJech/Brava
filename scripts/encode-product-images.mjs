import sharp from "sharp";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
const entries = JSON.parse(await readFile("output/image-sources.json", "utf8"));
const manifest = [];
for (const e of entries) {
  const directory = resolve("public/images/products", e.id);
  await mkdir(directory, { recursive: true });
  const output = resolve(directory, `${e.color}-${e.view}.webp`);
  const metadata = await sharp(e.source).metadata();
  // Encode the original image without resizing or interpolating extra pixels.
  const info = await sharp(e.source)
    .webp({ quality: 94, effort: 5 })
    .toFile(output);
  manifest.push({
    product: e.id,
    color: e.color,
    view: e.view,
    path: `images/products/${e.id}/${e.color}-${e.view}.webp`,
    width: metadata.width,
    height: metadata.height,
    bytes: info.size,
  });
}
await writeFile(
  "public/images/manifest.json",
  JSON.stringify(manifest, null, 2),
);
console.log(`${manifest.length} independent images encoded without upscaling.`);
