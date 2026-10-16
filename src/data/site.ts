/**
 * Datos globales de la marca. Cualquier dato que aparezca en más de una página vive aquí.
 * Los campos `legal` alimentan el aviso legal y la política de privacidad: rellénalos antes de publicar.
 */
export const site = {
  name: 'Globalízame',
  url: 'https://globalizame.com',
  tagline: 'Hacemos que tu negocio venda más y dependa menos de ti.',
  description:
    'Agencia digital para pymes. Diseño web, marketing, automatización, inteligencia artificial, software a medida y consultoría que funcionan como un único sistema.',
  locale: 'es_ES',
  email: 'info@globalizame.com',
  phone: '+34 614 032 312',
  phoneHref: 'tel:+34614032312',
  whatsapp: 'https://wa.me/34614032312',
  legal: {
    // TODO: completar con los datos reales del titular antes de publicar.
    owner: '[Razón social o nombre del titular]',
    taxId: '[NIF / CIF]',
    address: '[Domicilio social completo]',
    registry: '[Datos de inscripción registral, si es sociedad]',
    lastUpdated: '16 de octubre de 2026',
  },
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Sobre nosotros', href: '/sobre/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal/' },
  { label: 'Privacidad', href: '/politica-de-privacidad/' },
  { label: 'Cookies', href: '/politica-de-cookies/' },
];
