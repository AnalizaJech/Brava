# Fotografía y medios de BRAVA

La tienda utiliza **82 fotografías oficiales individuales de 12 modelos reales**, publicadas en las fichas de Schott N.Y.C. y Portland Leather Goods. No utiliza mosaicos ni renders generados como evidencia de un producto de marca.

## Procedencia

`docs/catalog-sources.json` identifica para cada fotografía su URL original, página del modelo, propietario, color, texto alternativo y fecha de consulta (7 de octubre de 2026). También registra las variantes de fábrica y especificaciones que respaldan la selección. Las marcas y fotografías pertenecen a sus titulares; este registro acredita procedencia, no concede licencia ni condición de distribuidor. Confirmar derechos de uso antes de una explotación comercial del material.

Se publican solo variantes existentes: las chaquetas femeninas seleccionadas están en Black; no se inventó el tono burdeos de la referencia del usuario. Las fotos con modelos, prendas abiertas/cerradas, interior o espalda proceden del fabricante cuando están disponibles. No se fabrican vistas ausentes.

## Calidad

Los originales tienen al menos 1400 × 1400 píxeles, y las chaquetas llegan a 2560 × 3200. Se convierten a WebP con calidad 94 sin redimensionar, recortar ni aumentar artificialmente resolución. Sharp elimina los metadatos del original. Cada foto conserva un archivo independiente en `public/images/products/{producto}/{color}-{vista}.webp`.

`public/images/manifest.json` registra dimensiones y peso. `npm run verify:assets` coteja el manifiesto con las galerías, comprueba resolución mínima, archivos, tamaños, unicidad y atribuciones. El zoom limita ampliación por resolución nativa y tamaño del visor. Las hojas de contacto de `scripts/review-product-images.mjs` son exclusivamente diagnósticas, no se cargan en el escaparate.

Para recodificar originales locales, preparar `output/image-sources.json` con ID, índice de color/vista y ruta de origen, y ejecutar `node scripts/encode-product-images.mjs`. Las rutas locales y originales temporales quedan fuera del repositorio.

## README

Las capturas y el GIF muestran la interfaz real mediante Playwright CLI (`scripts/capture-readme.js`). `node scripts/encode-readme-media.mjs` convierte las capturas, y `python scripts/assemble-readme-gif.py` reúne los fotogramas (Pillow). El GIF demuestra variantes, perspectivas, zoom con arrastre y confirmación al añadir a la bolsa. No son mockups estáticos del sistema.
