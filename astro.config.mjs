// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://globalizame.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      // Las páginas legales no aportan nada en buscadores: se indexan, pero con baja prioridad.
      serialize(item) {
        const legal = ['aviso-legal', 'politica-de-privacidad', 'politica-de-cookies'];
        if (legal.some((s) => item.url.includes(s))) item.priority = 0.2;
        return item;
      },
    }),
  ],
});
