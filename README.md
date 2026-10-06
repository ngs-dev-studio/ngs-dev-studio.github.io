# Webs de Boda · web corporativa

Landing de una sola página para **Webs de Boda | Invitaciones Web** (Instagram [@webs.de.boda](https://www.instagram.com/webs.de.boda/)).
Hecha con **Vite + React 18** y **prerenderizada en el build**: el HTML final ya contiene todo el contenido (SEO, redes sociales y navegadores sin JS) y React lo hidrata. Sin servidor.

## Estructura

```
index.html              plantilla (metadatos, Open Graph, JSON-LD, fuentes)
src/data.js             TODOS los textos, demos, precios y FAQ
src/components/         Header, Hero, Demos, Sections (resto de secciones y pie)
src/styles.css          estilos (variables de paleta y tipografía al inicio, `:root`)
src/entry-server.jsx    render a HTML para el prerenderizado
scripts/prerender.mjs   inyecta el HTML renderizado en dist/index.html
public/                 logo, imagen Open Graph, capturas reales de las demos, favicon, sitemap, robots
.github/workflows/      despliegue automático a GitHub Pages
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/ (build + prerender)
npm run preview    # sirve dist/
```

## Desplegar en GitHub Pages

1. El repositorio es `ngs-dev-studio/ngs-dev-studio.github.io` (sitio raíz de la organización, publicado en `https://ngs-dev-studio.github.io/`).
2. En el repositorio: *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila y publica `dist/`.
4. Deja `.impeccable/` fuera del repositorio (ya está en `.gitignore`).
5. Si el dominio final es otro, cambia la URL en `index.html` (`canonical`, `og:url`, `og:image`, JSON-LD), `public/sitemap.xml` y `public/robots.txt`.

Las rutas son relativas (`base: './'`): funciona en la raíz o en un subdirectorio.

## Notas de mantenimiento

- Precio: aparece en el hero y el bloque de precio (`src/components/`), en los metadatos y en el JSON-LD de `index.html` (50 € / antes 100 €). Si cambia, actualiza los cuatro sitios.
- Las demos se muestran con capturas reales (`public/assets/demos/`) y la demo viva se carga solo al pulsar «Probar en vivo». Si cambias una demo, regenera su captura.
- En Windows, no dejes un servidor sirviendo `dist/` mientras ejecutas `npm run build` (bloquea los archivos).
- Pendientes y datos por completar: ver `TODO.md`.

## Tienda (rama `feature/tienda-stripe`, sin publicar)

Sección `#tienda` de la página (con enlace «Tienda» en la navegación). Cobro con **Stripe Payment Links**: cada botón «Comprar» abre un enlace de pago externo; no hay servidor ni claves.

**Añadir, cambiar o quitar un producto:** edita solo `src/data/productos.js`. Cada producto es un objeto con `id`, `nombre`, `descripcion`, `precio` (número en euros, o `null` = «Precio por definir»), `imagen`, `alt` y `paymentLink`. Añade la imagen en `public/assets/tienda/`.

**Sustituir los enlaces de Stripe:** en Stripe crea un Payment Link por producto y pega su URL (`https://buy.stripe.com/...`) en `paymentLink`. Mientras el enlace esté vacío o contenga `REEMPLAZAR`, el botón sale desactivado con el texto «Próximamente»; cuando haya enlace real pasa solo a «Comprar». Si todos los enlaces son reales, el aviso «Vista previa» desaparece solo.

**Textos legales:** `public/legal/` contiene plantillas de *Condiciones de venta*, *Devoluciones y envíos* y *Privacidad*. Son **borradores** con huecos marcados (`[A DEFINIR]`) y avisan en pantalla de que no valen hasta su revisión legal. Los enlaces a ellos están bajo el catálogo.

**Decisiones simples (cámbialas si quieres):**
- Es una sección de la página única, no una página aparte; los textos legales son páginas HTML estáticas sencillas (sin router).
- Los 4 productos, sus textos, precios e imágenes (ilustraciones SVG) son de ejemplo.
- Para no publicarla, no hagas merge de esta rama a `main` (GitHub Pages publica desde `main`).
