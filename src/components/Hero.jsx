import { IG } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="h-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 id="h-hero">Tu boda, <span>en una web.</span></h1>
          <p className="lead">Invitación, horarios, mapa y confirmación de asistentes en un único enlace. La diseño y la programo yo, a mano y contigo.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={IG} target="_blank" rel="noopener">Escríbeme por Instagram</a>
            <a className="link-arrow" href="#demos">Ver las demos</a>
          </div>
          <p className="price-line">
            <span className="was"><span className="sr">Precio habitual </span>100 €</span> <strong>50 €</strong> <span className="tag">Oferta de lanzamiento</span>
          </p>
        </div>
        <div className="hero-visual">
          <span className="giant-one" aria-hidden="true">1</span>
          <div className="phone-slot">
          <a className="phone phone-hero" href="#demos" aria-label="Ver las demos de webs de boda">
            <span className="phone-notch" aria-hidden="true" />
            <img
              src="assets/demos/m-elegante-320.webp"
              srcSet="assets/demos/m-elegante-320.webp 320w, assets/demos/m-elegante.webp 600w"
              sizes="(min-width: 960px) 330px, 292px"
              width="600" height="1298"
              alt="Demo Elegante en un móvil: Elena y Marcos, boda en Sevilla, con cuenta atrás"
              fetchpriority="high"
            />
          </a>
          </div>
          <p className="hero-cap">Demo real: <strong>Elegante</strong></p>
        </div>
      </div>
    </section>
  );
}
