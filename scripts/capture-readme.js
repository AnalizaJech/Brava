async (page) => {
  await page.goto("http://127.0.0.1:4300/Brava/");
  await page.evaluate(() => {
    for (const key of [
      "brava:cart:v2",
      "brava:favorites:v2",
      "bruna:cart:v1",
      "bruna:favorites:v1",
    ])
      localStorage.removeItem(key);
  });
  await page.reload();
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.evaluate(() => document.fonts.ready);
  await page.locator(".hero-photo").waitFor();
  await page.screenshot({ path: "output/readme-storefront.png" });
  await page
    .getByRole("button", { name: "Ver detalles de Perfecto 137W", exact: true })
    .click();
  await page.locator(".gallery-main img").evaluate((img) => img.decode());
  await page.getByRole("button", { name: "M", exact: true }).click();
  await page.locator(".gallery-thumbnails img").evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
  await page.screenshot({ path: "output/readme-product.png" });
  await page.getByRole("button", { name: "Cerrar", exact: true }).click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
  await page.screenshot({ path: "output/readme-mobile-menu.png" });
  await page.getByRole("button", { name: "Cerrar menú", exact: true }).click();
  await page.setViewportSize({ width: 1100, height: 1000 });
  await page.goto("http://127.0.0.1:4300/Brava/");
  await page
    .getByRole("button", { name: "Ver detalles de Perfecto 618", exact: true })
    .click();
  let frame = 0;
  const shot = async () => {
    await page.screenshot({
      path: `output/gif-frame-${String(frame++).padStart(2, "0")}.png`,
    });
  };
  await page.locator(".gallery-main img").evaluate((img) => img.decode());
  await page.getByRole("button", { name: "38", exact: true }).click();
  await shot();
  await page
    .getByRole("button", { name: "Elegir color Brown", exact: true })
    .click();
  await page.waitForFunction(() =>
    document
      .querySelector(".gallery-main img")
      .getAttribute("src")
      .endsWith("/1-0.webp"),
  );
  await page.locator(".gallery-main img").evaluate((img) => img.decode());
  await shot();
  await page
    .getByRole("button", { name: "Ver perspectiva Cuello", exact: true })
    .click();
  await page.waitForFunction(() =>
    document
      .querySelector(".gallery-main img")
      .getAttribute("src")
      .endsWith("/1-1.webp"),
  );
  await page.locator(".gallery-main img").evaluate((img) => img.decode());
  await shot();
  await page
    .getByRole("button", { name: "Ver perspectiva Modelo · frente", exact: true })
    .click();
  await page.waitForFunction(() =>
    document
      .querySelector(".gallery-main img")
      .getAttribute("src")
      .endsWith("/1-2.webp"),
  );
  await page.locator(".gallery-main img").evaluate((img) => img.decode());
  await shot();
  await page
    .getByRole("button", { name: "Ampliar imagen del producto", exact: true })
    .click();
  await shot();
  await page
    .getByRole("button", { name: "Aumentar zoom", exact: true })
    .click();
  await page.waitForFunction(() =>
    document.querySelector(".zoom-tools").textContent.includes("150%"),
  );
  await shot();
  const b = await page.locator(".zoom-stage").boundingBox();
  await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
  await page.mouse.down();
  for (let step = 1; step <= 4; step++) {
    await page.mouse.move(
      b.x + b.width / 2 + step * 15,
      b.y + b.height / 2 + step * 8,
    );
    await shot();
  }
  await page.mouse.up();
  await page.getByRole("button", { name: "Cerrar", exact: true }).click();
  await page
    .getByRole("button", { name: "Añadir a mi bolsa", exact: false })
    .click();
  await page.waitForSelector(".cart-confirmation");
  await page.waitForFunction(() => document.querySelector(".modal").scrollTop === 0);
  await shot();
  await page.getByRole("button", { name: "Cerrar", exact: true }).click();
  console.log("README screenshots and 11 demonstration frames captured.");
};
