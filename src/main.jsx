import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
// En build llega HTML prerenderizado (se hidrata); en `npm run dev` el contenedor está vacío (se monta desde cero).
if (root.querySelector('header')) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
