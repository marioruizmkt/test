import { site } from '@/data/site';
import type { Faq } from '@/data/services';

const abs = (path: string) => new URL(path, site.url).href;

export const breadcrumbSchema = (items: { label: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    item: abs(c.href),
  })),
});

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (s: { name: string; description: string; href: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.description,
  url: abs(s.href),
  serviceType: s.name,
  provider: { '@id': `${site.url}/#organization` },
  areaServed: { '@type': 'Country', name: 'España' },
});

export const webPageSchema = (p: { type?: string; name: string; description: string; href: string }) => ({
  '@context': 'https://schema.org',
  '@type': p.type ?? 'WebPage',
  name: p.name,
  description: p.description,
  url: abs(p.href),
  inLanguage: 'es-ES',
  isPartOf: { '@type': 'WebSite', name: site.name, url: `${site.url}/` },
});
