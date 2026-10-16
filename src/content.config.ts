import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Colecciones preparadas para la siguiente fase.
 * - blog: artículos en src/content/blog/*.md  → /blog/<slug>/
 * - sectores: páginas por sector en src/content/sectores/*.md → /sectores/<slug>/
 *
 * Las rutas de detalle ya existen; solo generan páginas cuando hay entradas publicadas
 * (draft: false). Los índices /blog/ y /sectores/ se crean cuando haya contenido suficiente.
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Equipo Globalízame'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Slugs de servicios relacionados (ver src/data/services.ts). */
      services: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(true),
    }),
});

const sectores = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sectores' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      description: z.string().max(170),
      lead: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      pains: z.array(z.string()).default([]),
      services: z.array(z.string()).default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      order: z.number().default(99),
      draft: z.boolean().default(true),
    }),
});

export const collections = { blog, sectores };
