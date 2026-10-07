export type LegalKey =
  'privacy' | 'terms' | 'shipping' | 'returns' | 'faq' | 'claims' | 'materials';
export interface LegalPage {
  title: string;
  intro: string;
  sections: readonly { title: string; body: string }[];
}
export const LEGAL: Record<LegalKey, LegalPage> = {
  privacy: {
    title: 'Privacidad y datos personales',
    intro:
      'Información sobre el funcionamiento actual de BRAVA. Actualizada el 6 de octubre de 2026.',
    sections: [
      {
        title: 'Quién atiende tus datos',
        body: 'BRAVA atiende consultas sobre esta web y los datos compartidos por su canal comercial de WhatsApp. La ciudad o distrito de entrega es opcional y solo prepara tu solicitud de compra; no se envía a un servidor de BRAVA.',
      },
      {
        title: 'Lo que guarda este sitio',
        body: 'El navegador guarda únicamente referencias de productos, color, talla, cantidad y favoritos. La ciudad/distrito opcional permanece en memoria durante la sesión y se incorpora al mensaje solo al abrir WhatsApp; no se guarda en el navegador. No solicitamos DNI, dirección exacta ni datos de pago en esta web. No hay cuentas, publicidad comportamental ni analítica incorporada.',
      },
      {
        title: 'WhatsApp y terceros',
        body: 'Al abrir WhatsApp, tu selección aparece en un mensaje que tú decides enviar. Los datos que compartas en esa conversación serán tratados por el vendedor y por WhatsApp conforme a sus propias condiciones. No envíes información de tarjetas, claves ni códigos de acceso.',
      },
      {
        title: 'Recursos externos',
        body: 'Las tipografías se solicitan a Google Fonts. GitHub Pages aloja el sitio y puede procesar información técnica de acceso. Estas solicitudes pueden incluir IP y datos del navegador.',
      },
      {
        title: 'Control sobre tus datos',
        body: 'Puedes borrar el carrito y los favoritos desde esta página. Para consultas sobre datos enviados por WhatsApp, contacta al vendedor. El plazo de conservación comercial y el canal formal de derechos de acceso, rectificación, cancelación y oposición deben publicarse al identificar al responsable.',
      },
    ],
  },
  terms: {
    title: 'Condiciones de compra',
    intro:
      'La compra es asistida por WhatsApp. Añadir a la bolsa no genera una reserva ni un cobro.',
    sections: [
      {
        title: 'Catálogo y disponibilidad',
        body: 'La selección usa modelos y variantes publicados por Schott N.Y.C. y Portland Leather Goods en sus tiendas oficiales de USA. Las fotos pertenecen a esos fabricantes y muestran el modelo; no prueban existencia de unidades en Perú. BRAVA no se presenta como distribuidor autorizado. La disponibilidad cambia y la importación se cotiza por encargo; no hay precios finales inventados.',
      },
      {
        title: 'Confirmación del pedido',
        body: 'El vendedor debe confirmar por escrito la variante, talla, cantidad, precio final, gastos de envío, plazo y condiciones de cambio. El pedido se considera acordado únicamente cuando ambas partes aceptan esos datos.',
      },
      {
        title: 'Pago',
        body: 'No se procesan pagos en esta web. Las transferencias en soles o dólares se coordinan con el vendedor identificado. El importe en dólares y tipo de cambio se acuerdan antes del pago; no se calcula conversión automática. El comprobante y el régimen tributario deben verificarse. No transfieras sin verificar identidad y condiciones. Ningún precio del carrito sustituye una cotización confirmada.',
      },
      {
        title: 'Atención comercial',
        body: 'La atención se realiza mediante el canal comercial de BRAVA. Solicita la información contractual y el comprobante correspondientes antes de confirmar una compra.',
      },
    ],
  },
  shipping: {
    title: 'Envíos y entregas',
    intro:
      'Consulta tu distrito y la disponibilidad de la pieza antes de confirmar el pedido.',
    sections: [
      {
        title: 'Cobertura y costos',
        body: 'Realizamos coordinación de envíos dentro de Perú mediante Olva o Shalom, sujetos a cobertura del transportista. La tarifa depende del destino, peso, volumen, embalaje y modalidad; se confirma con la cotización del operador antes de pagar. No se ofrecen envíos internacionales por ahora.',
      },
      {
        title: 'Disponibles y por encargo',
        body: 'Pregunta si la pieza está físicamente disponible o si requiere importación. En pedidos por encargo, solicita el plazo estimado, condiciones ante demoras y gastos incluidos antes de pagar.',
      },
      {
        title: 'Seguimiento y recepción',
        body: 'Solicita un número de seguimiento cuando exista. Al recibir, revisa que color, talla y artículo coincidan con tu pedido. Comunica cualquier incidencia al contacto comercial con evidencia y número de pedido.',
      },
    ],
  },
  returns: {
    title: 'Cambios y devoluciones',
    intro:
      'Las condiciones comerciales y los plazos deben confirmarse antes del pago; no se inventan aquí.',
    sections: [
      {
        title: 'Antes de elegir',
        body: 'Para ropa y calzado, solicita medidas del artículo real y compara con una pieza que te quede bien. Las tallas internacionales pueden variar según marca y modelo.',
      },
      {
        title: 'Solicitud de atención',
        body: 'Comunica producto, fecha de compra, motivo y evidencia al vendedor. La atención de defectos o incumplimientos no debe confundirse con un cambio voluntario de talla o preferencia.',
      },
      {
        title: 'Condiciones por completar',
        body: 'El vendedor debe definir plazo, estado admisible del artículo, costos de retorno, excepciones justificadas y forma de reembolso. No se publica una prohibición general de devoluciones ni una garantía sin respaldo.',
      },
      {
        title: 'Derechos del consumidor',
        body: 'Las condiciones de la tienda no pueden dejar sin efecto derechos reconocidos por la normativa aplicable. El canal de reclamaciones debe estar disponible antes de iniciar ventas.',
      },
    ],
  },
  faq: {
    title: 'Centro de ayuda',
    intro: 'Lo que conviene saber antes de elegir tu próxima pieza.',
    sections: [
      { title: '¿Cómo funciona una compra por encargo?', body: '1. Revisa ficha, galería y medidas. 2. Elige la variante y añádela a la bolsa. 3. Indica ciudad y transportista, si deseas. 4. Envía la solicitud ordenada por WhatsApp. 5. Recibe una cotización con disponibilidad, importe completo y plazo. La compra solo se confirma después de aceptar esas condiciones; añadir a la bolsa no cobra ni reserva.' },
      { title: '¿Cómo elijo una talla sin adivinar?', body: 'Abre la guía en la ficha de la chaqueta. Compara los centímetros de pecho plano, hombros, manga y largo con una prenda tuya extendida. Pecho plano no es contorno corporal; deja margen para la ropa que llevarás debajo. Se conservan las tallas originales de Schott, sin convertirlas arbitrariamente a S/M/L.' },
      { title: '¿Cómo se calcula la entrega?', body: 'Se coordina Olva o Shalom dentro de Perú según cobertura. El destino, peso, volumen y modalidad determinan la tarifa. El pedido debe detallar costo de producto, importación si corresponde, transporte y plazo antes del pago. La web no estima una tarifa de caja sin peso ni cotización del operador.' },
      {
        title: '¿Cómo compro desde un TikTok Live?',
        body: 'Busca el código BV que mostramos junto a cada producto. Elige color y talla, añade a la bolsa y abre WhatsApp para consultar disponibilidad. No hay una transmisión en vivo ni checkout de TikTok integrados en esta web.',
      },
      {
        title: '¿Los artículos vienen de USA?',
        body: 'Los modelos seleccionados se venden en las tiendas oficiales de las marcas en USA. Las cuatro chaquetas Schott indican fabricación en USA; país de venta y de fabricación son datos distintos. En los accesorios Portland no afirmamos fabricación estadounidense. La selección todavía no acredita importación ni stock en Perú.',
      },
      {
        title: '¿Puedo ver el producto real?',
        body: 'Cada ficha incluye fotos oficiales individuales, selector de colores reales y zoom. Las chaquetas tienen vistas con modelos, espalda y detalles cuando el fabricante las publica. Las fotos son del modelo, no de una unidad ya disponible en Perú. El tono puede variar con la luz y la pantalla.',
      },
      {
        title: '¿Qué medios de pago aceptan?',
        body: 'Los medios de pago, el comprobante y el costo total se confirman con el vendedor. Nunca compartas claves ni códigos de tu banco por chat.',
      },
    ],
  },
  materials: {
    title: 'Entiende el cuero antes de elegir',
    intro: 'Compara composición, acabado y construcción; una fotografía por sí sola no prueba calidad.',
    sections: [
      { title: 'Plena flor / full-grain', body: 'Portland describe sus accesorios como cuero de plena flor. Conserva textura y marcas naturales; la pátina y pequeñas diferencias de tono son parte del material. La ficha oficial y la composición del artículo deben coincidir.' },
      { title: 'Steerhide y naked cowhide', body: 'La Perfecto 618 usa steerhide pesado: una elección estructurada. La Café Racer 141 utiliza naked cowhide y forro térmico extraíble. Las chaquetas femeninas seleccionadas son de cuero vacuno; 626VNW tiene acabado envejecido. No son equivalentes al cuero sintético.' },
      { title: 'Acabado y color', body: 'Black, Brown, Honey, Nutmeg, Phoenix y Cognac son nombres publicados por las marcas. No todas las piezas existen en todos esos tonos. El selector muestra solo los colores con fotos del modelo elegido; las chaquetas femeninas de esta selección están publicadas en Black.' },
      { title: 'Limpieza y conservación', body: 'Retira polvo con paño suave seco. Si se moja, deja secar al aire lejos de sol, radiadores y secadores. No uses alcohol, disolventes ni lavadora. Prueba cualquier producto aprobado por la marca en una zona oculta; no apliques acondicionador de forma indiscriminada. Guarda las chaquetas en percha ancha y los bolsos sin aplastarlos.' },
      { title: 'Qué revisar en la ficha', body: 'Busca el modelo exacto, tipo de cuero, forro, cierre, dimensiones y fabricación. Usa el enlace oficial de cada pieza para comprobar las especificaciones. El desgaste previsto y el cuidado dependen del acabado; el cuero no se anuncia aquí como impermeable ni como equipo de protección certificado.' },
    ],
  },
  claims: {
    title: 'Atención y reclamaciones',
    intro:
      'Este contacto de atención no sustituye un Libro de Reclamaciones formal.',
    sections: [
      {
        title: 'Atención comercial',
        body: 'Puedes contactar por WhatsApp al +51 984 119 743 para consultar o reportar una incidencia.',
      },
      {
        title: 'Libro de Reclamaciones',
        body: 'El enlace al Libro de Reclamaciones del proveedor aún no fue proporcionado. Antes de iniciar ventas, debe habilitarse el canal correspondiente y mostrarse un acceso visible. No simulamos un registro oficial ni un envío de reclamo inexistente.',
      },
      {
        title: 'Información oficial',
        body: 'Consulta consumidor.gob.pe para información de Indecopi sobre derechos y canales de orientación.',
      },
    ],
  },
};
