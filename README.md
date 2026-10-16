# Globalízame — web corporativa

Web de Globalízame, agencia digital para pymes. Construida con [Astro](https://astro.build) como sitio estático: rápida, segura, sin dependencias de terceros en el navegador y fácil de alojar en cualquier servicio (Netlify, Vercel, Cloudflare Pages, un hosting tradicional…).

## Puesta en marcha

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera la web estática en dist/
npm run preview  # sirve dist/ localmente
npm run check    # comprobación de tipos y plantillas
```

Requiere Node 18.20+ (recomendado Node 22).

## Concepto

**«Que tu negocio venda más y dependa menos de ti.»** La web se organiza en tres palancas —*Vender más*, *Depender menos de ti* y *Decidir con criterio*— que agrupan los seis servicios.

- **Paleta**: papel `#F2EFE9`, tinta `#141714` y verde `#86CA28` como señal (nunca como color de texto sobre papel, por contraste).
- **Tipografía**: Bricolage Grotesque (titulares y texto) + Instrument Serif cursiva para el acento emocional. Se sirven desde la propia web (sin Google Fonts) por rendimiento y privacidad.
- **Fotografía**: bodegones editoriales sobre papel con luz dura de tarde y un objeto verde por imagen (una metáfora por servicio), más fotografía documental cálida para las páginas humanas. Generadas con Higgsfield.
- **Detalles**: etiquetas con forma de bocadillo (guiño al logotipo), notificaciones animadas en la portada, lista de servicios con vista previa que sigue al cursor y un **test interactivo** «¿Cuánto depende tu negocio de ti?» que recomienda servicios y prerrellena el formulario de contacto.

## Estructura

```
src/
├── data/
│   ├── site.ts           # Marca, contacto, datos legales, formulario y analítica
│   ├── services.ts       # Catálogo de servicios (genera sus páginas)
│   ├── sectors.ts        # Sectores (vacío: preparado para la fase 2)
│   └── testimonials.ts   # Testimonios reales (vacío: la sección se oculta)
├── content/blog/         # Artículos del blog en Markdown
├── content.config.ts     # Esquema del blog
├── pages/
│   ├── index.astro
│   ├── servicios/index.astro
│   ├── servicios/[...slug].astro   # Plantilla de cada servicio y subservicio
│   ├── sobre/ · contacto/
│   ├── aviso-legal · politica-de-privacidad · politica-de-cookies
│   ├── sectores/         # Se genera sólo cuando hay sectores
│   └── blog/             # Se genera sólo cuando hay artículos publicados
├── components/           # Cabecera, pie, test, formulario, FAQ, CTA…
├── layouts/              # Base (SEO, schema.org) y Legal
├── assets/               # Imágenes (optimizadas a WebP en el build) y marca
└── styles/global.css     # Sistema de diseño: tokens, tipografía, botones
```

## Cómo ampliar

### Añadir un servicio específico
Añade una entrada en `src/data/services.ts` con `slug: 'padre/hijo'` y `parent: 'padre'` (ver `software/a-medida`). Se crea su página, aparece en el menú, en el pie, en el sitemap y en el bloque *Especialidades* de la página padre.

### Activar sectores
Añade sectores a `src/data/sectors.ts` (hay un ejemplo comentado). Se generan `/sectores/` y `/sectores/<slug>/` y aparece el enlace en el pie.

### Publicar en el blog
Duplica `src/content/blog/plantilla-articulo.md`, cambia el nombre (será la URL), rellena el encabezado y pon `draft: false`. En cuanto haya un artículo publicado se generan `/blog/` y el enlace en el pie.

### Testimonios
Añade testimonios reales (con permiso del cliente) a `src/data/testimonials.ts` y la sección aparecerá en la portada.

## Antes de publicar (pendiente)

1. **Datos legales** en `src/data/site.ts` → `legal`: razón social, NIF/CIF, domicilio y datos registrales. Mientras falten, aparecen resaltados en verde en las páginas legales.
2. **Formulario**: indica un `forms.endpoint` (Formspree, Getform, Basin o un endpoint propio). Sin él, el formulario abre el programa de correo del usuario con el mensaje preparado.
3. **Analítica (opcional)**: al rellenar `analytics.ga4Id` se activa automáticamente el banner de cookies (aceptar y rechazar con el mismo peso, según la AEPD), la tabla de cookies de la política y la carga de Google Analytics sólo tras el consentimiento.
4. **Revisar compromisos comerciales** mostrados en la web por si no reflejan la política real: respuesta en menos de 24 h laborables, horario L–V 9:00–18:00, presupuesto cerrado, sin permanencias, propiedad de dominios/código/cuentas del cliente y plazos orientativos de las FAQ.
5. **Dominio**: la URL canónica es `https://globalizame.com` (`astro.config.mjs` y `site.ts`).

## SEO y rendimiento

- HTML estático, imágenes responsive en WebP, fuentes propias precargadas y CSS en línea cuando es pequeño.
- Metadatos, Open Graph (`public/og.jpg`), URL canónicas, `sitemap-index.xml` y `robots.txt` automáticos.
- Datos estructurados schema.org: `ProfessionalService`, `Service`, `BreadcrumbList`, `FAQPage`, `AboutPage`, `ContactPage` y `BlogPosting`.
- Accesible: navegación por teclado, enlace para saltar al contenido, foco visible, `prefers-reduced-motion` respetado y contraste AA en el texto.
