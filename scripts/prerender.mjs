// Prerenderiza <App/> dentro de dist/index.html: el contenido existe sin JS (SEO, redes) y React lo hidrata.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const file = path.join(root, 'dist', 'index.html');
const html = fs.readFileSync(file, 'utf8');
if (!html.includes('<!--app-->')) throw new Error('Marcador <!--app--> no encontrado en dist/index.html');
let out = html.replace('<!--app-->', render());
// Mueve el script del bundle al final del body: no compite con el CSS por el ancho de banda del primer render.
const m = out.match(/<script type="module"[^>]*><\/script>\s*/);
if (m) out = out.replace(m[0], '').replace('</body>', `${m[0].trim()}\n</body>`);
fs.writeFileSync(file, out);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('Prerender OK');
