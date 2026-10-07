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

Cuero silla de montar `#79482f`, espresso `#241c17`, tiza `#f5f1e8` y latón `#b99a62`. Manrope como única familia para titulares, lectura y controles, con jerarquía por tamaño y peso. Costuras discontinuas y textura discreta hacen referencia al material sin competir con las fotografías oficiales.

`src/design-system.css` concentra los tokens y la composición de esta dirección visual. `src/styles.css` mantiene los componentes de ficha, zoom y bolsa. Sin dependencias adicionales para el rediseño.

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
