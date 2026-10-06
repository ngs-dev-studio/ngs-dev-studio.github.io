// CATÁLOGO DE LA TIENDA: único archivo que hay que tocar para añadir, cambiar o quitar productos.
//
// Cada producto es un objeto con estos campos:
//   id           identificador único, sin espacios (también sirve para el anclaje)
//   nombre       título que se ve en la tarjeta
//   descripcion  una o dos frases
//   precio       número en euros (12 = 12,00 €). Usa null si aún no hay precio ("Precio por definir")
//   imagen       ruta relativa a /public, p. ej. 'assets/tienda/mi-producto.svg' (o .webp/.jpg)
//   alt          texto alternativo de la imagen
//   paymentLink  enlace de pago de Stripe (https://buy.stripe.com/...).
//                Mientras contenga REEMPLAZAR (o esté vacío) el botón sale desactivado: «Próximamente».
//
// DATOS DE EJEMPLO: nombres, textos y precios son provisionales hasta validar el catálogo real.

export const PLACEHOLDER = 'REEMPLAZAR';

export const PRODUCTOS = [
  {
    id: 'vela-invitados',
    nombre: 'Vela aromática',
    descripcion: 'Detalle para invitados en tarro de cristal, con etiqueta con vuestros nombres y la fecha.',
    precio: 4.5,
    imagen: 'assets/tienda/vela.svg',
    alt: 'Imagen provisional: vela en un tarro de cristal',
    paymentLink: 'https://buy.stripe.com/REEMPLAZAR_ENLACE',
  },
  {
    id: 'jabon-personalizado',
    nombre: 'Jabón artesano personalizado',
    descripcion: 'Pastilla pequeña envuelta en papel, pensada como recuerdo de mesa para cada invitado.',
    precio: 3.9,
    imagen: 'assets/tienda/jabon.svg',
    alt: 'Imagen provisional: pastilla de jabón envuelta en papel',
    paymentLink: 'https://buy.stripe.com/REEMPLAZAR_ENLACE',
  },
  {
    id: 'bolsa-tela',
    nombre: 'Bolsa de tela de boda',
    descripcion: 'Bolsa de algodón para el kit de bienvenida o para repartir los detalles del día.',
    precio: 8,
    imagen: 'assets/tienda/bolsa.svg',
    alt: 'Imagen provisional: bolsa de tela con asas',
    paymentLink: 'https://buy.stripe.com/REEMPLAZAR_ENLACE',
  },
  {
    id: 'caja-detalles',
    nombre: 'Caja de detalles',
    descripcion: 'Caja con tapa para preparar vuestros regalos: se entrega vacía, lista para rellenar.',
    precio: 12,
    imagen: 'assets/tienda/caja.svg',
    alt: 'Imagen provisional: caja de regalo con lazo',
    paymentLink: 'https://buy.stripe.com/REEMPLAZAR_ENLACE',
  },
];

/** ¿Está el enlace de pago sin rellenar? (vacío o con el marcador REEMPLAZAR) */
export const sinEnlace = (p) => !p.paymentLink || p.paymentLink.includes(PLACEHOLDER);
