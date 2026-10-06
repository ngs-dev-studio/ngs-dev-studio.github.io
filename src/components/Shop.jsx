import { PRODUCTOS, sinEnlace } from '../data/productos.js';

const eur = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

const LEGAL = [
  ['legal/condiciones-de-venta.html', 'Condiciones de venta'],
  ['legal/devoluciones-y-envios.html', 'Devoluciones y envíos'],
  ['legal/privacidad.html', 'Privacidad'],
];

/** Tienda: el catálogo sale de src/data/productos.js. Cada «Comprar» lleva a un Stripe Payment Link. */
export default function Shop() {
  const hayEjemplos = PRODUCTOS.some(sinEnlace);

  return (
    <section className="leaf field-gold" id="tienda" aria-labelledby="h-tienda" style={{ '--above': 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 id="h-tienda">Tienda</h2>
          <p>Regalos para invitados y pequeños detalles para el día de la boda.</p>
          {hayEjemplos && (
            <p className="shop-note">Vista previa: los productos y los precios son de ejemplo. La tienda aún no está abierta.</p>
          )}
        </div>

        <ul className="shop-grid">
          {PRODUCTOS.map((p) => (
            <li className="product reveal" key={p.id} id={`producto-${p.id}`}>
              <img src={p.imagen} width="800" height="800" loading="lazy" alt={p.alt} />
              <div className="product-body">
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <p className="product-price">
                  {p.precio == null ? <span className="product-tbd">Precio por definir</span> : <><span className="sr">Precio: </span>{eur.format(p.precio)}</>}
                </p>
                {sinEnlace(p) ? (
                  <button type="button" className="btn btn-soon" disabled>Próximamente</button>
                ) : (
                  <a className="btn btn-primary" href={p.paymentLink} target="_blank" rel="noopener noreferrer">
                    Comprar<span className="sr"> {p.nombre}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <ul className="shop-legal" aria-label="Información legal de la tienda">
          {LEGAL.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
        </ul>
      </div>
    </section>
  );
}
