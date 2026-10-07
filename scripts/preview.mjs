import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("dist/jechcommerce-front/browser");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".webp": "image/webp",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    ).replace(/^\/(?:JechCommerce-front|Brava)\/?/, "/");
    let target = resolve(root, "." + path);
    if (target !== root && !target.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    if ((await stat(target)).isDirectory())
      target = resolve(target, "index.html");
    const data = await readFile(target);
    res.writeHead(200, {
      "Content-Type": types[extname(target)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(data);
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(4300, "127.0.0.1", () =>
  console.log(
    "BRAVA production preview: http://127.0.0.1:4300/Brava/",
  ),
);

