# Globalízame · web

Web de Globalízame, agencia digital para pymes. Sitio estático con [Astro](https://astro.build): rápido, accesible y sin dependencias de terceros en tiempo de ejecución.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (sitio estático listo para cualquier hosting)
npm run preview
```

## Concepto

**"Que tu negocio venda más y dependa menos de ti."** La web presenta a Globalízame como quien construye un *sistema*, no piezas sueltas: cada servicio es una etapa (Atraer → Convertir → Automatizar → Escalar) con la consultoría marcando el rumbo.

- **Estética:** tecnológica y oscura. Fondo casi negro, texto papel `#F2EFE9` y el verde `#86CA28` como luz (brillos, pulsos, botones).
- **Tipografía:** Inter Tight (titulares y texto), Instrument Serif en cursiva para el énfasis y JetBrains Mono para etiquetas. Autoalojadas (sin Google Fonts → sin transferencia de IP a terceros).
- **Globo interactivo** (`src/components/Globe.astro`): Canvas 2D sin librerías. Gira solo, se puede arrastrar y lanza conexiones desde España con pulsos de luz. Se pausa fuera de pantalla y respeta "reducir movimiento". Los puntos de tierra se regeneran con `node scripts/build-globe.mjs`.
- **Iconos animados** (`src/components/ServiceIcon.astro`): SVG + CSS en el mismo lenguaje que el globo (trazos, nodos y pulsos). Un icono por servicio: embudo que convierte, flujo automatizado, red neuronal, módulos que encajan, radar de consultoría...

## Estructura

```
src/
  data/site.ts          Datos de marca, contacto y datos legales (¡completar!)
  data/services.ts      Catálogo de servicios: genera las páginas /servicios/...
  content.config.ts     Colecciones blog y sectores (preparadas)
  content/blog/         Artículos en Markdown (_LEEME.md = plantilla)
  content/sectores/     Páginas de sector en Markdown (_LEEME.md = plantilla)
  layouts/              BaseLayout (SEO, JSON-LD), LegalLayout, ArticleLayout
  components/           Cabecera con megamenú, pie, cookies, FAQ, calculadora...
  pages/                Rutas
  styles/global.css     Sistema de diseño (tokens, tipografía, botones)
```

## Ampliar la web

**Nuevo servicio o servicio específico:** añade una entrada (con su `icon`; para un icono nuevo, añádelo a `ServiceIcon.astro`) en `src/data/services.ts`. Con `slug: 'diseno-web/tiendas-online'` y `parent: 'diseno-web'` se crea `/servicios/diseno-web/tiendas-online/` y aparece automáticamente en su página padre (bloque "Especialidades"), megamenú, menú móvil, pie, migas de pan, sitemap y datos estructurados.

**Blog:** copia `src/content/blog/_LEEME.md`, rellena el bloque superior y pon `draft: false`. Se publica en `/blog/<archivo>/`. Cuando haya varios artículos, crear el índice `src/pages/blog/index.astro` y añadir "Blog" a `mainNav` en `src/data/site.ts`.

**Sectores:** igual, en `src/content/sectores/` → `/sectores/<archivo>/`.

## Antes de publicar

1. **Datos legales** en `src/data/site.ts` → `legal` (razón social, NIF, domicilio, registro). Mientras falten, aparecen resaltados en amarillo en aviso legal, privacidad y formulario.
2. **Formulario de contacto:** define `PUBLIC_FORM_ENDPOINT` (ver `.env.example`) con cualquier servicio que acepte POST JSON (Formspree, Basin, n8n, Make...). Sin él, el formulario abre el correo del usuario con el mensaje redactado.
3. **Revisar textos** de compromisos (sin permanencias, todo a nombre del cliente, trabajo en remoto...): están redactados como política de la agencia y deben ser ciertos.
4. **Analítica/píxeles:** añadirlos en `BaseLayout.astro` con `type="text/plain" data-consent="analytics"` (o `marketing`) para que solo se carguen tras el consentimiento, y listarlos en la tabla de `politica-de-cookies.astro`.

## SEO incluido

Títulos y descripciones por página, canonical, Open Graph (`public/og/default.png`), `sitemap-index.xml`, `robots.txt`, y JSON-LD: `ProfessionalService`, `WebSite`, `BreadcrumbList`, `Service` con catálogo, `FAQPage`, `ItemList` y `ContactPage`.
