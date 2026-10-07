import sharp from "sharp";
await sharp("output/readme-storefront.png")
  .webp({ quality: 92 })
  .toFile("docs/media/storefront.webp");
await sharp("output/readme-product.png")
  .webp({ quality: 92 })
  .toFile("docs/media/product-detail.webp");
await sharp("output/readme-mobile-menu.png")
  .webp({ quality: 92 })
  .toFile("docs/media/mobile-menu.webp");
console.log("README screenshots encoded.");
