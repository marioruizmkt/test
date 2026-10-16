/**
 * Sectores. Cuando añadas el primero, se generarán automáticamente
 * /sectores/ y /sectores/<slug>/, y aparecerán en el pie de página.
 *
 * Ejemplo:
 * {
 *   slug: 'clinicas',
 *   name: 'Clínicas y centros de salud',
 *   title: 'Más pacientes, <em>menos</em> llamadas.',
 *   description: 'Meta descripción para buscadores.',
 *   summary: 'Resumen para tarjetas e índice.',
 *   lead: 'Entradilla de la página.',
 *   challenges: ['…'],
 *   services: ['diseno-web', 'automatizacion'],
 * }
 */
export type Sector = {
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  lead: string;
  challenges: string[];
  /** Slugs de servicios recomendados (ver src/data/services.ts). */
  services: string[];
};

export const sectors: Sector[] = [];
