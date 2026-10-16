/**
 * Testimonios reales de clientes. Mientras la lista esté vacía, la sección
 * no se muestra. Usa sólo testimonios con permiso expreso del cliente.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];
