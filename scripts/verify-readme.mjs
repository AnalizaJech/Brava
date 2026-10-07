import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
const readme = await readFile("README.md", "utf8");
const media = [
  "storefront.webp",
  "product-detail.webp",
  "mobile-menu.webp",
  "shopping-demo.gif",
];
for (const name of media) {
  assert(
    readme.includes(`docs/media/${name}`),
    `Missing README reference: ${name}`,
  );
  assert(
    (await stat(`docs/media/${name}`)).size > 0,
    `Missing README media: ${name}`,
  );
}
assert(readme.includes("https://analizajech.github.io/Brava/"));
console.log("README links and visual media verified.");
