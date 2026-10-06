import { IG, FB, TT, FEATURES, VS, STEPS, PRICE_LIST, FAQ, PALETTES, FONTS } from '../data.js';

const Features = () => (
  <section className="leaf field-cream" id="incluye" aria-labelledby="h-incluye" style={{ '--above': 'var(--brown)' }}>
    <div className="wrap">
      <div className="sec-head">
        <h2 id="h-incluye">Todo lo que necesita el día, en un solo sitio</h2>
        <p>Esto es lo que ya llevan las demos. Se puede quitar, añadir o cambiar.</p>
      </div>
      <ul className="features">
        {FEATURES.map(([t, p]) => <li className="reveal" key={t}><h3>{t}</h3><p>{p}</p></li>)}
      </ul>
    </div>
  </section>
);

/** El personalizador funciona solo con CSS (:has sobre radios): también sin JS. */
const Personaliza = () => (
  <section className="leaf field-gold" id="personaliza" aria-labelledby="h-pers" style={{ '--above': 'var(--cream)' }}>
    <div className="wrap pers-grid">
      <div className="pers-copy">
        <h2 id="h-pers">Tuya hasta el último detalle</h2>
        <p>Las demos son solo un punto de partida. Cambio la tipografía, los colores, las fotos, los textos y las secciones, y construyo la idea que traigas.</p>
        <p className="pers-hint">Prueba: la misma invitación con otra paleta y otra letra.</p>
        <fieldset className="ctl">
          <legend>Paleta</legend>
          {PALETTES.map(([id, label, c], i) => (
            <span key={id} style={{ display: 'contents' }}>
              <input type="radio" name="pal" id={id} defaultChecked={i === 0} />
              <label htmlFor={id}><i style={{ '--c': c }} />{label}</label>
            </span>
          ))}
        </fieldset>
        <fieldset className="ctl">
          <legend>Tipografía</legend>
          {FONTS.map(([id, label], i) => (
            <span key={id} style={{ display: 'contents' }}>
              <input type="radio" name="fnt" id={id} defaultChecked={i === 0} />
              <label htmlFor={id}>{label}</label>
            </span>
          ))}
        </fieldset>
      </div>
      <figure className="pers-card" aria-label="Ejemplo de invitación con datos ficticios">
        <div className="inv">
          <p className="inv-small">Nos casamos</p>
          <p className="inv-names">Ana <span>&amp;</span> Luis</p>
          <p className="inv-date">Sábado 5 de junio</p>
          <p className="inv-place">Ejemplo con datos ficticios</p>
          <span className="inv-btn">Confirmar asistencia</span>
        </div>
      </figure>
    </div>
  </section>
);

const Papel = () => (
  <section className="leaf field-brown" id="papel" aria-labelledby="h-papel" style={{ '--above': 'var(--gold)' }}>
    <div className="wrap">
      <div className="sec-head"><h2 id="h-papel">Papel o web: qué cambia cuando algo cambia</h2></div>
      <div className="vs">
        <div className="vs-row vs-head" aria-hidden="true"><span /><span>En papel</span><span>En tu web</span></div>
        {VS.map(([t, a, b]) => (
          <div className="vs-row reveal" key={t}>
            <h3>{t}</h3>
            <p data-l="En papel">{a}</p>
            <p data-l="En tu web">{b}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Como = () => (
  <section className="leaf field-sand" id="como" aria-labelledby="h-como" style={{ '--above': 'var(--brown)' }}>
    <div className="wrap">
      <div className="sec-head">
        <h2 id="h-como">Así de simple</h2>
        <p>Trabajo yo solo y hablamos de tú a tú, por Instagram.</p>
      </div>
      <ol className="steps">
        {STEPS.map(([t, p], i) => (
          <li className="step reveal" key={t}><span className="step-n" aria-hidden="true">{i + 1}</span><h3>{t}</h3><p>{p}</p></li>
        ))}
      </ol>
    </div>
  </section>
);

const Precio = () => (
  <section className="leaf field-brown" id="precio" aria-labelledby="h-precio" style={{ '--above': 'var(--sand)' }}>
    <div className="wrap price-wrap">
      <h2 id="h-precio" className="price-title">Un solo precio</h2>
      <div className="price-card">
        <p className="price-tag">Oferta de lanzamiento</p>
        <p className="price-was"><span className="sr">Precio habitual: </span><s>100 €</s></p>
        <p className="price-now"><span className="sr">Precio ahora: </span>50 €</p>
        <ul className="price-list">{PRICE_LIST.map((x) => <li key={x}>{x}</li>)}</ul>
        <a className="btn btn-primary btn-block" href={IG} target="_blank" rel="noopener">Quiero mi web</a>
      </div>
    </div>
  </section>
);

const Planners = () => (
  <section className="leaf field-cream" id="planners" aria-labelledby="h-plan" style={{ '--above': 'var(--brown)' }}>
    <div className="wrap plan-grid">
      <h2 id="h-plan">Para wedding planners</h2>
      <div className="plan-copy">
        <p>Ofrece a tus parejas una web de boda como extra de tu servicio. Tú se la presentas y yo me ocupo de diseñarla y programarla.</p>
        <p>Tus parejas reciben una web hecha a su medida, y tú un detalle más que ofrecer sin añadir trabajo a tu agenda.</p>
        <a className="btn btn-primary" href={IG} target="_blank" rel="noopener">Hablemos de colaborar</a>
      </div>
    </div>
  </section>
);

const Faq = () => (
  <section className="leaf field-sand" id="faq" aria-labelledby="h-faq" style={{ '--above': 'var(--cream)' }}>
    <div className="wrap faq-wrap">
      <h2 id="h-faq">Preguntas frecuentes</h2>
      <div className="faq">
        {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </div>
  </section>
);

const Contacto = () => (
  <section className="leaf field-brown contact" id="contacto" aria-labelledby="h-cont" style={{ '--above': 'var(--sand)' }}>
    <div className="wrap contact-grid">
      <div>
        <h2 id="h-cont">Cuéntame tu boda</h2>
        <p className="lead">Escríbeme un mensaje directo por Instagram y te respondo. Dime la fecha, el estilo que te gusta y qué te gustaría que llevara tu web.</p>
        <a className="btn btn-gold btn-lg" href={IG} target="_blank" rel="noopener">Escríbeme por Instagram</a>
      </div>
      <ul className="contact-list" aria-label="Datos de contacto">
        <li><span>Instagram</span><a href={IG} target="_blank" rel="noopener">@webs.de.boda</a></li>
        {/* Para ampliar: añade aquí más <li> (email, teléfono, WhatsApp) cuando los tengas. Ver TODO.md */}
      </ul>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="wrap foot">
      <a className="brand brand-foot" href="#top">
        <img src="assets/logo.svg" width="52" height="39" alt="" />
        <span>Webs de Boda <small>Invitaciones Web</small></span>
      </a>
      <ul className="foot-links">
        <li><a href={IG} target="_blank" rel="noopener">Instagram</a></li>
        <li><a href={FB} target="_blank" rel="noopener">Facebook</a></li>
        <li><a href={TT} target="_blank" rel="noopener">TikTok</a></li>
      </ul>
      <p className="foot-note">Las demos son ejemplos con nombres y datos ficticios.</p>
    </div>
  </footer>
);

/** Todas las secciones tras las demos, en el orden de la página. */
export default function Sections() {
  return (
    <>
      <Features />
      <Personaliza />
      <Papel />
      <Como />
      <Precio />
      <Planners />
      <Faq />
      <Contacto />
    </>
  );
}
