# Seguridad y privacidad de BRAVA

Frontend estático en Angular, sin autenticación ni procesamiento de pagos. La solicitud de compra por WhatsApp no confirma inventario, reserva ni cobro.

## Controles

- Carrito restaurado contra identificadores y combinaciones de color/talla del catálogo; cantidades enteras de 1 a 5, sin duplicados. Valores monetarios manipulados en localStorage no se usan.
- Solo referencias de productos y favoritos se guardan en el navegador. Ciudad/distrito y transporte permanecen en memoria hasta recargar; no se envían al servidor de BRAVA.
- Interpolación segura de Angular; sin `innerHTML`, `eval` ni bypass de sanitización.
- WhatsApp comercial con destino fijo, texto codificado y enlaces externos con `noopener noreferrer`.
- CSP de producción: scripts propios sin inline/eval, objetos y envíos de formularios bloqueados. Estilos dinámicos de Angular permitidos.
- Diálogos con foco contenido, retorno al control de origen, Escape y fondo inerte.
- Imágenes locales WebP sin metadatos EXIF. No se publica RUC, correo personal, domicilio o nombre legal del propietario en archivos actuales, interfaz ni capturas.

## Verificación

Consultar [VALIDATION.md](VALIDATION.md) para el build, auditoría y flujo del catálogo real. Los recursos se validan en CI antes de publicar.

## Límites

GitHub Pages no permite configurar headers arbitrarios. La CSP en meta no admite `frame-ancestors`; esta implementación no afirma que impida el enmarcado. Google Fonts y GitHub Pages procesan solicitudes técnicas, descritas en Privacidad.

El navegador no es prueba de compra ni fuente confiable de precio. Un futuro pago automático necesita backend que valide inventario y precios y verifique webhooks. La web actual cotiza la importación sin inventar precios en Perú.

La retirada de información de los archivos actuales no modifica commits históricos ni sus metadatos. Las comunicaciones comerciales y documentos contractuales requieren tratamiento de datos por el vendedor fuera de este frontend.
