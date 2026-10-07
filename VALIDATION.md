# Verificación · BRAVA

7 de octubre de 2026 · build de producción con base `/Brava/`, CSP activa y Chromium. Capturas a 1440 × 960, 1100 × 1000 y móvil 390 × 844.

## Catálogo y medios

- 12 modelos de fichas oficiales; colores/tallas cotejados con variantes de los fabricantes.
- 82 fotos individuales verificadas por archivo, manifiesto, resolución nativa, peso y atribución. Todas las galerías y colores cargaron en el navegador sin imágenes rotas.
- Tablas Schott: 36 filas de medidas oficiales convertidas a centímetros. Se comprobó Café Racer 141, talla 42: pecho plano 63,5 cm.
- Ficha femenina, galería, menú completo y bolsa revisados visualmente. README con tres capturas WebP y GIF de once fotogramas de interfaz real.

## Compra asistida y privacidad

- Perfecto 618, Brown, talla 38, dos unidades: persistencia y mensaje con BV-01, marca, SKU de proveedor, variante exacta y opción de fábrica.
- Ciudad/distrito y Shalom aparecen en la solicitud; no persisten tras recargar. WhatsApp se expone únicamente en el paso comercial de la bolsa.
- Bolsa sin superposición de checkout sobre los artículos; encabezado completo y reinicio de desplazamiento al abrir. Menú móvil 390 × 844 sin desborde horizontal.
- Se descartaron producto inexistente, talla/color inválidos, 999 unidades y duplicados. SKU/precio falsificados en localStorage no alteraron la referencia del pedido.
- Borrar datos locales elimina bolsa y favoritos.
- Instalación limpia con npm 10.9.9, lock regenerado sin árbol previo de Windows y compilación posteriores completadas. CI fija npm y usa acciones compatibles con Node 24.
- Auditoría npm: 0 vulnerabilidades. Recorrido final: 0 errores de ejecución de aplicación.
- Zoom con arrastre y aumento 150% incluido en el recorrido grabado. Pellizco táctil y controles de teclado se mantienen del visor validado previamente.

## Alcance

Se verificaron el frontend y la preparación del mensaje; no se enviaron mensajes de compra ni se realizaron pagos o importaciones. El catálogo no acredita stock en Perú, plazo final, costo de importación, licencia de fotografía ni relación de distribuidor. Los precios finales siguen por cotizar y las condiciones comerciales pendientes se indican de forma transparente.

La calculadora interna, excluida del build, mantiene los escenarios previamente comprobados: costo 100, margen 30%, tasa 18%, dos unidades y envío 20 → 168,57 con envío separado; 185,43 absorbiendo envío. Margen de 100% rechazado. Es una simulación, no una cotización ni determinación tributaria.

## Rediseño de navegación

Guardados conservan búsqueda y categoría. Persistencia, retirada y estado vacío comprobados. Menú móvil de tres enlaces sin filtros ni políticas. Navegador a 320, 390, 768 y 1440 px sin desbordamiento; confirmación de bolsa sin aviso duplicado. Capturas y GIF del README actualizados.

Refinamiento: comprobados guardar/quitar desde la ficha (aria-pressed, relleno y fondo), copiar enlace, margen de cuidados en escritorio, pedido decodificado con BV-03/talla S sin emojis ni caracteres de reemplazo, y adaptación entre 320 y 1440 px.
