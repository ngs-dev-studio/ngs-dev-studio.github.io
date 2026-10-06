import { useEffect, useState } from 'react';
import { IG, NAV } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="wrap bar">
        <a className="brand" href="#top">
          <img src="assets/logo.svg" width="44" height="33" alt="" />
          <span>Webs de Boda</span>
        </a>
        <nav className="nav" aria-label="Principal">
          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen((o) => !o)}>Menú</button>
          <ul id="nav-list" className={`nav-list${open ? ' open' : ''}`} onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}>
            {NAV.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
        </nav>
        <a className="btn btn-sm btn-ig" href={IG} target="_blank" rel="noopener">
          <span><span className="long">Escríbeme por </span>Instagram</span>
        </a>
      </div>
    </header>
  );
}
