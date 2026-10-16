import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog. Crea un archivo Markdown en src/content/blog/ para publicar.
 * El índice /blog/ y la página del artículo se generan automáticamente
 * en cuanto exista al menos una entrada sin `draft: true`.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      category: z.string().default('Negocio digital'),
      services: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
