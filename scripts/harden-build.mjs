import { readFileSync, writeFileSync } from "node:fs";
const file = new URL(
  "../dist/jechcommerce-front/browser/index.html",
  import.meta.url,
);
const policy =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'";
const html = readFileSync(file, "utf8").replace(
  "<head>",
  `<head><meta http-equiv="Content-Security-Policy" content="${policy}">`,
);
writeFileSync(file, html);
console.log("Production CSP applied.");
