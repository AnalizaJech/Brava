# BRAVA · Sistema de diseño

## Una función, un lugar

- **Inicio** presenta qué se vende y permite entrar a la tienda.
- **Tienda** contiene categorías, búsqueda y orden. El encabezado permanece estable.
- **La esencia** explica el cuero y conduce a sus cuidados.
- **Guardados** abre un panel independiente. Nunca cambia categoría, búsqueda ni orden del catálogo; guardar no añade a la bolsa.
- **Bolsa** reúne variantes y prepara la solicitud comercial por WhatsApp.
- **Footer** contiene ayuda y condiciones comerciales. El menú principal no contiene filtros ni enlaces legales.

No hay una colección LIVE paralela. Los códigos BV siguen identificando productos para cualquier canal comercial.

## Identidad visual

Dirección editorial de marroquinería: blanco cálido `#fcfbf8`, tinta `#282622`, lino `#f1ede6` y cacao `#815333`. Sin texturas, costuras decorativas ni bloques negros dominantes.

**Cormorant Garamond** para marca y títulos de portada, colección, esencia y paneles. **Jost** para lectura, nombres de productos, precios y controles. Dos funciones tipográficas estables, con pesos contenidos. Fallback Georgia para títulos y sans-serif para lectura; `font-display: swap` permite leer mientras cargan las fuentes.

Fotografías completas en tarjetas verticales 4:5. Jerarquía de tarjeta: nombre, cotización, marca/referencia, categoría y colores. Categoría activa con subrayado; búsqueda y orden separados del menú. Footer claro y paneles con las mismas reglas de espacio y color.

`src/design-system.css` concentra tokens y composición, con escalas de margen y sección mediante `clamp()`. `src/styles.css` conserva la base de los componentes. No se añaden dependencias.

### Referencias ecommerce consultadas

- [LOEWE: bolsos](https://www.loewe.com/int/en/women/bags): presentación de productos, categorías y controles de lista.
- [Mulberry: bolsos](https://www.mulberry.com/gb/shop/women/bags): jerarquía de catálogo, guardados, bolsa y atención al cliente.
- [Polène: handbags](https://eng.polene-paris.com/collections/handbags): separación entre modelos, categorías y materiales.

Estas referencias orientan la organización; BRAVA conserva su nombre, catálogo real, canales comerciales y composición propia.

## Interacción y accesibilidad

Enlaces para navegación, botones para acciones, nombres accesibles en iconos, SVG decorativos ocultos a lectores, foco visible, acceso directo a tienda, avisos de resultados y confirmación de bolsa. Modal con bloqueo de fondo, Escape, contención de foco y desplazamiento. Menú móvil a pantalla completa; objetivos principales de 44 px. Movimiento reducido respetado.

Una confirmación visible al añadir a bolsa; sin segundo aviso redundante. Variantes, medidas y fotografías permanecen en la ficha. No se inventan existencias ni precios finales.

## Criterios consultados

- [Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design): dirección visual distintiva y ejecución adaptable.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines): semántica, foco, estados vacíos, imágenes e interacción.
- [Nielsen Norman Group: reconocimiento frente a recuerdo](https://www.nngroup.com/articles/recognition-and-recall/): acciones y contexto visibles.
- [Baymard: navegación ecommerce](https://baymard.com/research-articles/ecommerce-navigation-best-practice): alcance y navegación comprensibles.

## Comprobación

Probado en navegador a 320, 390, 768 y 1440 px: sin desbordamiento horizontal; guardados independientes, persistencia y estado vacío; menú de tres enlaces; variantes, zoom y confirmación única de bolsa. Compilación para `/Brava/`, CSP y verificación de 12 modelos y 82 fotografías conservadas.

## Refinamiento de ficha

Organización inspirada en la ficha oficial de [Schott 141](https://www.schottnyc.com/products/141-classic-racer-leather-motorcycle-jacket): galería, modelo, variantes, acción de bolsa y especificaciones. Corazones rellenos y fondo contrastado al guardar, iconos SVG coherentes, cuidados con margen interior y mensaje comercial sin emojis para evitar caracteres rotos en clientes de WhatsApp.
