/**
 * Datos globales de Globalízame.
 * Todo lo que aparece en más de una página vive aquí: marca, contacto,
 * navegación, datos legales e integraciones opcionales.
 */

export const site = {
  name: 'Globalízame',
  legalName: 'Globalízame',
  url: 'https://globalizame.com',
  locale: 'es_ES',
  lang: 'es',
  tagline: 'Hacemos que tu negocio venda más y dependa menos de ti.',
  description:
    'Agencia digital para pymes: diseño web, marketing, automatización, inteligencia artificial, software a medida y consultoría. Hacemos que tu negocio venda más y dependa menos de ti.',

  contact: {
    email: 'info@globalizame.com',
    phone: '+34 614 032 312',
    phoneHref: 'tel:+34614032312',
    whatsapp: 'https://wa.me/34614032312',
    // Compromiso de respuesta mostrado en contacto y CTA.
    responseTime: 'Respondemos en menos de 24 horas laborables',
    hours: 'Lunes a viernes, de 9:00 a 18:00',
  },

  /**
   * Datos obligatorios por la LSSI-CE y el RGPD.
   * IMPORTANTE: completar antes de publicar. Mientras un valor empiece por
   * "[", se mostrará resaltado en las páginas legales para que no se olvide.
   */
  legal: {
    owner: '[Razón social o nombre del titular]',
    taxId: '[NIF / CIF]',
    address: '[Domicilio social completo]',
    registry: '[Datos de inscripción en el Registro Mercantil, si aplica]',
    email: 'info@globalizame.com',
    phone: '+34 614 032 312',
    lastUpdated: '16 de octubre de 2026',
  },

  /**
   * Formulario de contacto. Si `endpoint` está vacío, el formulario
   * prepara un email con los datos (mailto) como alternativa.
   * Compatible con Formspree, Getform, Basin, un endpoint propio, etc.
   */
  forms: {
    endpoint: '',
  },

  /**
   * Analítica y herramientas que usan cookies no técnicas.
   * Si alguna está activa, se muestra el banner de consentimiento y los
   * scripts sólo se cargan tras la aceptación del usuario.
   */
  analytics: {
    ga4Id: '', // Ej.: 'G-XXXXXXXXXX'
  },

  social: [] as { label: string; href: string }[],
} as const;

export const consentRequired = Boolean(site.analytics.ga4Id);

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Sobre nosotros', href: '/sobre/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal/' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
  { label: 'Política de cookies', href: '/politica-de-cookies/' },
];
