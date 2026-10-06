import { useEffect, useRef, useState } from 'react';
import { DEMOS } from '../data.js';

/** Marco con póster (captura real). La demo en vivo solo se carga cuando el visitante lo pide. */
function Screen({ demo, w, h, poster, alt, mounted }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [live, setLive] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);

  return (
    <div ref={ref} className={`screen${live ? ' live' : ''}${started ? ' active' : ''}`} data-w={w} data-h={h}>
      <img src={poster.src} width={poster.w} height={poster.h} loading="lazy" alt={alt} />
      {started && (
        <iframe
          src={demo.url} width={w} height={h} title={`Demo ${demo.name} en vivo`}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          style={{ transform: `scale(${scale})` }}
          onLoad={() => setLive(true)}
        />
      )}
      {/* El botón solo existe con JS: sin JS el póster y «Ver demo completa» bastan. */}
      {mounted && !started && (
        <button type="button" className="screen-hint" aria-label={`Probar en vivo la demo ${demo.name}`} onClick={() => setStarted(true)}>Probar en vivo</button>
      )}
    </div>
  );
}

export default function Demos() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [entering, setEntering] = useState(null);
  const [mounted, setMounted] = useState(false);
  const tabRefs = useRef([]);
  useEffect(() => setMounted(true), []);

  const show = (idx, focus) => {
    if (idx === current || leaving !== null) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (focus) tabRefs.current[idx]?.focus();
    if (reduce) { setCurrent(idx); return; }
    setLeaving(current);
    setTimeout(() => {
      setLeaving(null);
      setCurrent(idx);
      setEntering(idx);
      setTimeout(() => setEntering(null), 650);
    }, 360);
  };

  const onKey = (e, i) => {
    const k = e.key;
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(k)) return;
    e.preventDefault();
    const n = k === 'Home' ? 0 : k === 'End' ? DEMOS.length - 1 : (i + (k === 'ArrowRight' ? 1 : -1) + DEMOS.length) % DEMOS.length;
    show(n, true);
  };

  return (
    <section className="leaf field-brown reveal-group" id="demos" aria-labelledby="h-demos" style={{ '--above': 'var(--cream)' }}>
      <div className="wrap">
        <div className="sec-head">
          <h2 id="h-demos">Cuatro webs reales para empezar</h2>
          <p>Ábrelas, toca, desplázate. Son demos con datos ficticios y cada detalle se puede cambiar.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Elige una demo">
          {DEMOS.map((d, i) => (
            <button
              key={d.id} ref={(el) => { tabRefs.current[i] = el; }}
              role="tab" id={`tab-${d.id}`} aria-controls={`demo-${d.id}`}
              aria-selected={i === current} tabIndex={i === current ? 0 : -1}
              onClick={() => show(i)} onKeyDown={(e) => onKey(e, i)}
            >{d.name}</button>
          ))}
        </div>

        {DEMOS.map((d, i) => (
          <div
            key={d.id} id={`demo-${d.id}`} role="tabpanel" aria-labelledby={`tab-${d.id}`}
            hidden={i !== current}
            className={`demo-panel${leaving === i ? ' tear-out' : ''}${entering === i ? ' tear-in' : ''}`}
          >
            <div className="demo-copy">
              <h3>{d.name}</h3>
              <p className="demo-line">{d.line}</p>
              <dl className="spec">
                <div><dt>Tipografía</dt><dd>{d.type}</dd></div>
                <div><dt>Paleta</dt><dd className="chips">{d.palette.map((c) => <i key={c} style={{ '--c': c }} />)}</dd></div>
              </dl>
              <a className="btn btn-gold" href={d.url} target="_blank" rel="noopener">
                Ver demo completa<span className="sr"> {d.name}, se abre en otra pestaña</span>
              </a>
            </div>
            <div className="demo-stage">
              <div className="laptop">
                <Screen demo={d} w={1280} h={800} mounted={mounted}
                  poster={{ src: `assets/demos/d-${d.id}.webp`, w: d.desktop.w, h: d.desktop.h }} alt={`Demo ${d.name} en escritorio`} />
              </div>
              <div className="phone phone-sm">
                <span className="phone-notch" aria-hidden="true" />
                <Screen demo={d} w={390} h={844} mounted={mounted}
                  poster={{ src: `assets/demos/m-${d.id}-320.webp`, w: 600, h: 1298 }} alt={`Demo ${d.name} en móvil`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
