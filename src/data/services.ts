import type { ServiceIconName } from '@/components/ServiceIcon.astro';

/**
 * Catálogo de servicios.
 *
 * Cada entrada genera automáticamente su página en /servicios/<slug>/ (ver src/pages/servicios/[...slug].astro).
 * Para añadir un servicio específico (p. ej. /servicios/diseno-web/tiendas-online/) basta con añadir
 * una entrada con `slug: 'diseno-web/tiendas-online'` y `parent: 'diseno-web'`: aparecerá en su página
 * padre, en las migas de pan, en el sitemap y con sus datos estructurados.
 *
 * En los textos, *así* se marca el énfasis tipográfico (cursiva serif).
 */

export type Stage = 'Atraer' | 'Convertir' | 'Automatizar' | 'Escalar' | 'Dirigir';

export interface Service {
  slug: string;
  parent?: string;
  order: number;
  name: string;
  navLabel: string;
  stage: Stage;
  icon: ServiceIconName;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  card: { title: string; text: string };
  forYou: string[];
  deliverables: { title: string; text: string }[];
  outcomes: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  /** Muestra la calculadora de horas recuperadas. */
  calculator?: boolean;
}

export const services: Service[] = [
  {
    slug: 'diseno-web',
    icon: 'diseno-web',
    order: 1,
    name: 'Diseño web',
    navLabel: 'Diseño web',
    stage: 'Convertir',
    seo: {
      title: 'Diseño web para pymes que convierte visitas en clientes',
      description:
        'Diseñamos y desarrollamos webs rápidas, claras y medibles para pymes. Estrategia, diseño a medida, SEO técnico y un panel que puedes gestionar tú.',
    },
    hero: {
      eyebrow: 'Diseño web',
      title: 'Una web que *vende* mientras tú haces otra cosa.',
      lead: 'Tu web es el único comercial que trabaja 24 horas. La diseñamos para que explique bien lo que haces, inspire confianza en segundos y convierta visitas en conversaciones.',
    },
    card: {
      title: 'Webs que convierten',
      text: 'Diseño a medida, rápido y medible. Pensado para que te escriban, no solo para que te vean.',
    },
    forYou: [
      'Tu web actual te da vergüenza enviarla a un cliente.',
      'Recibes visitas, pero casi nadie te escribe.',
      'Cada cambio pequeño depende de un programador.',
      'No sabes qué páginas funcionan ni de dónde llegan tus clientes.',
    ],
    deliverables: [
      { title: 'Estrategia y arquitectura', text: 'Definimos a quién hablas, qué tiene que hacer cada visitante y cómo se organiza el contenido para que llegue ahí sin perderse.' },
      { title: 'Textos que venden', text: 'Escribimos contigo los mensajes clave. Claros, concretos y con tu tono. Sin relleno ni frases de catálogo.' },
      { title: 'Diseño a medida', text: 'Una identidad visual coherente con tu marca, diseñada para tu negocio. Nada de plantillas con tu logo encima.' },
      { title: 'Desarrollo rápido', text: 'Código limpio, carga casi instantánea y buena nota en Core Web Vitals. La velocidad también es diseño.' },
      { title: 'SEO técnico desde el día uno', text: 'Estructura, metadatos, datos estructurados, sitemap y redirecciones. La base para que Google te entienda.' },
      { title: 'Medición y autonomía', text: 'Analítica respetuosa con la privacidad, objetivos de conversión configurados y un panel sencillo para que edites tú.' },
    ],
    outcomes: [
      { title: 'Más contactos cualificados', text: 'Llamadas a la acción claras y formularios pensados para filtrar curiosos de clientes reales.' },
      { title: 'Menos explicaciones', text: 'La web responde las dudas de siempre antes de que te las pregunten por teléfono.' },
      { title: 'Una base para crecer', text: 'Preparada para conectar con tu CRM, tus campañas y tus automatizaciones cuando lo necesites.' },
    ],
    process: [
      { title: 'Descubrimiento', text: 'Entendemos tu negocio, tu cliente ideal y lo que hoy no funciona.' },
      { title: 'Estructura y mensajes', text: 'Mapa de páginas, recorridos y textos clave antes de dibujar un píxel.' },
      { title: 'Diseño', text: 'Propuesta visual sobre páginas reales, iterada contigo.' },
      { title: 'Desarrollo y lanzamiento', text: 'Construcción, pruebas en todos los dispositivos, migración y puesta en marcha.' },
      { title: 'Medir y mejorar', text: 'Revisamos datos reales y ajustamos lo que frena la conversión.' },
    ],
    faqs: [
      { q: '¿Podré actualizar la web yo mismo?', a: 'Sí. Dejamos un panel de edición sencillo para textos, imágenes y entradas, y te enseñamos a usarlo. Los cambios estructurales los hacemos nosotros si lo prefieres.' },
      { q: '¿El dominio y la web serán míos?', a: 'Siempre. El dominio, el código y las cuentas se registran a nombre de tu empresa. Si algún día quieres irte, te lo llevas todo.' },
      { q: '¿Hacéis también tiendas online?', a: 'Sí. Diseñamos tanto webs corporativas como tiendas online y catálogos con reserva o presupuesto. Elegimos la tecnología según lo que vendes y cómo lo gestionas.' },
      { q: '¿Qué pasa con mi web actual y su posicionamiento?', a: 'Planificamos la migración con redirecciones página a página para no perder el posicionamiento que ya tienes.' },
    ],
    related: ['marketing', 'automatizacion', 'consultoria'],
  },
  {
    slug: 'marketing',
    icon: 'marketing',
    order: 2,
    name: 'Marketing digital',
    navLabel: 'Marketing digital',
    stage: 'Atraer',
    seo: {
      title: 'Marketing digital para pymes: captación medible',
      description:
        'SEO, campañas en Google y Meta, contenidos y email marketing para pymes. Captación medida en clientes y euros, no en "me gusta".',
    },
    hero: {
      eyebrow: 'Marketing digital',
      title: 'Clientes que llegan *solos*, no a golpe de favor.',
      lead: 'Si tu negocio vive del boca a boca, vive de la suerte. Construimos canales de captación que puedes medir, prever y escalar: SEO, campañas, contenidos y email.',
    },
    card: {
      title: 'Captación medible',
      text: 'SEO, campañas y contenidos medidos en clientes y euros, no en "me gusta".',
    },
    forYou: [
      'La mayoría de tus clientes llegan por recomendación y no sabes cómo conseguir más.',
      'Has probado anuncios y sentiste que tirabas el dinero.',
      'Publicas en redes cuando te acuerdas, sin un plan.',
      'Nadie te sabe decir cuánto te cuesta conseguir un cliente.',
    ],
    deliverables: [
      { title: 'SEO y contenidos', text: 'Investigamos qué busca tu cliente y creamos las páginas y artículos que responden a esas búsquedas. Tráfico que no se apaga al dejar de pagar.' },
      { title: 'Google Ads', text: 'Campañas de búsqueda para captar a quien ya te necesita hoy, con control estricto de palabras clave y presupuesto.' },
      { title: 'Meta Ads y redes', text: 'Anuncios en Instagram y Facebook para generar demanda y reimpactar a quien ya te conoce.' },
      { title: 'Email y nutrición', text: 'Secuencias automáticas que acompañan a cada contacto hasta que está listo para comprar.' },
      { title: 'Perfil de empresa en Google', text: 'Optimizamos tu ficha local, reseñas y presencia en mapas: clave si tus clientes están cerca.' },
      { title: 'Medición de verdad', text: 'Seguimiento de conversiones de extremo a extremo e informes que entiendes: coste por cliente, no jerga.' },
    ],
    outcomes: [
      { title: 'Un flujo predecible', text: 'Sabes cuántos contactos entran cada mes y qué canal los trae.' },
      { title: 'Cada euro, justificado', text: 'Si un canal no rinde, lo cortamos. Si rinde, lo escalamos.' },
      { title: 'Activos que se acumulan', text: 'Contenidos y posicionamiento que siguen trabajando meses después.' },
    ],
    process: [
      { title: 'Auditoría', text: 'Analizamos tu mercado, competencia, web y datos actuales.' },
      { title: 'Plan de canales', text: 'Elegimos los dos o tres canales con más retorno para tu caso. No hace falta estar en todas partes.' },
      { title: 'Lanzamiento', text: 'Configuramos medición, campañas y calendario de contenidos.' },
      { title: 'Optimización continua', text: 'Pruebas, ajustes y un informe mensual claro con decisiones, no solo números.' },
    ],
    faqs: [
      { q: '¿Cuánto debería invertir en anuncios?', a: 'Depende de tu sector, tu margen y tu objetivo. En el diagnóstico calculamos cuánto puedes pagar por un cliente y, a partir de ahí, un presupuesto razonable para validar antes de escalar.' },
      { q: '¿Cuándo se ven resultados?', a: 'Las campañas de pago generan datos desde las primeras semanas. El SEO es una inversión a medio plazo: construye un activo que crece con los meses.' },
      { q: '¿Gestionáis también redes sociales?', a: 'Gestionamos redes cuando tienen sentido como canal de captación. Si tu cliente no decide por Instagram, te lo diremos.' },
      { q: '¿Tengo que firmar permanencia?', a: 'No trabajamos con permanencias. Preferimos que te quedes porque los números salen.' },
    ],
    related: ['diseno-web', 'automatizacion', 'inteligencia-artificial'],
  },
  {
    slug: 'automatizacion',
    icon: 'automatizacion',
    order: 3,
    name: 'Automatización e integraciones',
    navLabel: 'Automatización',
    stage: 'Automatizar',
    seo: {
      title: 'Automatización de procesos e integraciones para pymes',
      description:
        'Conectamos tu web, CRM, facturación, email y hojas de cálculo para que las tareas repetitivas se hagan solas. Menos copiar y pegar, menos errores.',
    },
    hero: {
      eyebrow: 'Automatización e integraciones',
      title: 'Lo repetitivo, que lo haga *el sistema*.',
      lead: 'Copiar datos de un sitio a otro, enviar el mismo email, perseguir facturas, actualizar la hoja de cálculo... Conectamos tus herramientas para que esas tareas pasen solas, sin errores y sin ti.',
    },
    card: {
      title: 'Procesos que se hacen solos',
      text: 'Conectamos tus herramientas para eliminar el copiar y pegar y los olvidos.',
    },
    forYou: [
      'Pasas horas cada semana moviendo datos entre programas.',
      'Se te escapan contactos o seguimientos porque nadie los apunta.',
      'Tus herramientas no se hablan entre sí.',
      'Tu equipo hace tareas que una máquina haría mejor.',
    ],
    deliverables: [
      { title: 'Mapa de procesos', text: 'Dibujamos cómo fluye hoy el trabajo y detectamos dónde se pierde tiempo, dinero o información.' },
      { title: 'Integraciones', text: 'Conectamos web, CRM, ERP, facturación, email, calendario y hojas de cálculo con herramientas como Make, n8n, Zapier o API propias.' },
      { title: 'Captación a CRM', text: 'Cada contacto entra solo en tu CRM, se etiqueta, se asigna y recibe respuesta al momento.' },
      { title: 'Documentos y facturas', text: 'Presupuestos, contratos y facturas que se generan, se envían y se archivan sin intervención.' },
      { title: 'Avisos y seguimientos', text: 'Recordatorios automáticos a clientes y al equipo para que nada se quede en el aire.' },
      { title: 'Paneles de control', text: 'Los números de tu negocio en un solo sitio, actualizados solos.' },
    ],
    outcomes: [
      { title: 'Horas devueltas', text: 'Tiempo que vuelve a ti o a tu equipo para tareas que sí necesitan una persona.' },
      { title: 'Cero olvidos', text: 'Ningún contacto, factura o seguimiento depende de la memoria de nadie.' },
      { title: 'Un negocio que escala', text: 'Puedes atender más clientes sin contratar al mismo ritmo.' },
    ],
    process: [
      { title: 'Diagnóstico', text: 'Entrevistas cortas con quien hace el trabajo y mapa de procesos.' },
      { title: 'Priorización', text: 'Ordenamos por impacto y esfuerzo. Empezamos por lo que más tiempo devuelve.' },
      { title: 'Construcción', text: 'Automatizamos por fases, con pruebas y sin parar tu operativa.' },
      { title: 'Documentación y soporte', text: 'Cada flujo queda documentado y monitorizado. Si algo falla, lo sabemos antes que tú.' },
    ],
    faqs: [
      { q: '¿Tengo que cambiar las herramientas que ya uso?', a: 'Normalmente no. Primero conectamos lo que ya tienes. Solo proponemos un cambio si una herramienta bloquea el crecimiento.' },
      { q: '¿Qué pasa si una automatización falla?', a: 'Diseñamos cada flujo con avisos de error y registros. Si algo se rompe, recibimos una alerta y lo corregimos.' },
      { q: '¿Es seguro conectar mis datos?', a: 'Usamos conexiones oficiales, permisos mínimos y cumplimos el RGPD. Tus datos siguen en tus herramientas y bajo tu control.' },
      { q: '¿Por dónde se suele empezar?', a: 'Por la entrada de contactos y el seguimiento comercial: suele ser donde más tiempo y más ventas se pierden.' },
    ],
    related: ['inteligencia-artificial', 'software', 'consultoria'],
    calculator: true,
  },
  {
    slug: 'inteligencia-artificial',
    icon: 'inteligencia-artificial',
    order: 4,
    name: 'Inteligencia artificial',
    navLabel: 'Inteligencia artificial',
    stage: 'Automatizar',
    seo: {
      title: 'Inteligencia artificial aplicada para pymes',
      description:
        'Asistentes, agentes y automatizaciones con IA conectados a los datos de tu negocio. IA útil y medible, sin humo ni promesas mágicas.',
    },
    hero: {
      eyebrow: 'Inteligencia artificial',
      title: 'IA que trabaja, *no que impresiona*.',
      lead: 'Aplicamos la inteligencia artificial donde ahorra tiempo o genera ventas de verdad: atender, clasificar, redactar, resumir y decidir con tus propios datos. Si no aporta, te lo decimos.',
    },
    card: {
      title: 'IA aplicada, sin humo',
      text: 'Asistentes y agentes conectados a tus datos que atienden, redactan y clasifican por ti.',
    },
    forYou: [
      'Respondes una y otra vez las mismas preguntas de clientes.',
      'Tienes mucha información y poco tiempo para leerla.',
      'Has probado ChatGPT, pero no sabes cómo meterlo en tu operativa.',
      'Quieres usar IA sin poner en riesgo los datos de tus clientes.',
    ],
    deliverables: [
      { title: 'Asistentes de atención', text: 'Responden en tu web, WhatsApp o email con la información de tu negocio, 24/7, y derivan a una persona cuando hace falta.' },
      { title: 'Agentes internos', text: 'Clasifican emails, extraen datos de documentos, preparan borradores y actualizan tus sistemas.' },
      { title: 'Conocimiento de empresa', text: 'Un buscador inteligente sobre tus procedimientos, catálogos y documentación para que tu equipo encuentre respuestas al instante.' },
      { title: 'Contenido asistido', text: 'Flujos para generar fichas de producto, propuestas o respuestas con tu tono, siempre con revisión humana.' },
      { title: 'Formación del equipo', text: 'Talleres prácticos para que tu equipo use la IA con criterio en su día a día.' },
      { title: 'Privacidad y control', text: 'Elegimos modelos y proveedores según la sensibilidad de los datos, con límites y registros claros.' },
    ],
    outcomes: [
      { title: 'Respuesta inmediata', text: 'Tus clientes no esperan a que alguien esté libre para recibir una respuesta.' },
      { title: 'Menos trabajo de despacho', text: 'Leer, copiar, clasificar y resumir pasa a ser cosa de minutos.' },
      { title: 'Decisiones con contexto', text: 'La información de tu empresa, accesible para quien la necesita.' },
    ],
    process: [
      { title: 'Casos de uso', text: 'Identificamos dónde la IA tiene retorno claro y dónde no.' },
      { title: 'Prototipo', text: 'Una prueba funcional con tus datos reales para validar antes de invertir más.' },
      { title: 'Integración', text: 'Lo conectamos a tus herramientas y a tus procesos, con supervisión humana donde importa.' },
      { title: 'Medición y ajuste', text: 'Revisamos calidad de respuestas, costes y tiempo ahorrado.' },
    ],
    faqs: [
      { q: '¿La IA va a sustituir a mi equipo?', a: 'Nuestro enfoque es quitarle a tu equipo el trabajo repetitivo para que dedique su tiempo a lo que requiere criterio y trato humano.' },
      { q: '¿Qué pasa con la privacidad de mis datos?', a: 'Definimos qué datos se usan, dónde se procesan y quién accede. Cuando hace falta, usamos proveedores con procesamiento en la UE y acuerdos de tratamiento de datos.' },
      { q: '¿Y si la IA se equivoca?', a: 'Diseñamos con límites: respuestas basadas en tu información, derivación a una persona ante dudas y revisión humana en lo sensible.' },
      { q: '¿Necesito tener los datos ordenados antes?', a: 'Ayuda, pero no es imprescindible. Parte del trabajo es ordenar la información que la IA va a utilizar.' },
    ],
    related: ['automatizacion', 'software', 'consultoria'],
  },
  {
    slug: 'software',
    icon: 'software',
    order: 5,
    name: 'Software y aplicaciones',
    navLabel: 'Software y aplicaciones',
    stage: 'Escalar',
    seo: {
      title: 'Desarrollo de software y aplicaciones para pymes',
      description:
        'Aplicaciones web, apps móviles, áreas de cliente y herramientas internas para pymes. Software que encaja con tu forma de trabajar.',
    },
    hero: {
      eyebrow: 'Software y aplicaciones',
      title: 'Herramientas que encajan con *tu manera* de trabajar.',
      lead: 'Cuando las hojas de cálculo se quedan cortas y los programas genéricos te obligan a trabajar a su manera, construimos aplicaciones web, apps y áreas de cliente que se adaptan a tu negocio.',
    },
    card: {
      title: 'Apps y herramientas',
      text: 'Aplicaciones web, áreas de cliente y apps que se adaptan a tu negocio, no al revés.',
    },
    forYou: [
      'Tu negocio funciona a base de hojas de cálculo que solo entiende una persona.',
      'Pagas varios programas que no terminan de cubrir lo que necesitas.',
      'Tus clientes te piden un sitio donde ver sus pedidos, citas o documentos.',
      'Tienes una idea de producto digital y necesitas un equipo para construirla.',
    ],
    deliverables: [
      { title: 'Aplicaciones web', text: 'Herramientas internas y plataformas accesibles desde cualquier navegador, sin instalaciones.' },
      { title: 'Áreas de cliente', text: 'Portales donde tus clientes consultan pedidos, reservan, descargan documentos o pagan.' },
      { title: 'Apps móviles', text: 'Aplicaciones para iOS y Android cuando el móvil es el centro de la experiencia.' },
      { title: 'Paneles de gestión', text: 'Un único sitio para gestionar clientes, pedidos, stock o equipos, con los permisos adecuados.' },
      { title: 'Integración con lo que ya tienes', text: 'Conectado a tu ERP, CRM, pasarela de pago o facturación desde el primer día.' },
      { title: 'Mantenimiento y evolución', text: 'Actualizaciones, seguridad, copias y nuevas funciones según crece el negocio.' },
    ],
    outcomes: [
      { title: 'Un sistema propio', text: 'Tu forma de trabajar convertida en una herramienta, no en un manual.' },
      { title: 'Menos licencias', text: 'Una solución que sustituye varias suscripciones que se pisaban.' },
      { title: 'Una ventaja difícil de copiar', text: 'Servicio y eficiencia que tus competidores no pueden comprar hechos.' },
    ],
    process: [
      { title: 'Definición', text: 'Requisitos, usuarios y prioridades. Qué es imprescindible y qué puede esperar.' },
      { title: 'Prototipo navegable', text: 'Pruebas la herramienta antes de escribir una línea de código.' },
      { title: 'Desarrollo por entregas', text: 'Versiones funcionales cada pocas semanas. Ves avances reales, no promesas.' },
      { title: 'Lanzamiento y evolución', text: 'Puesta en marcha, formación y un plan de mejoras.' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta una aplicación?', a: 'Depende del alcance. Por eso empezamos definiendo una primera versión con lo imprescindible, con presupuesto cerrado, y crecemos desde ahí.' },
      { q: '¿El código será mío?', a: 'Sí. El código, los datos y la infraestructura quedan a nombre de tu empresa.' },
      { q: '¿Qué tecnologías usáis?', a: 'Tecnologías modernas, estables y con comunidad amplia, para que tu aplicación no dependa de nosotros para siempre.' },
      { q: '¿Es mejor a medida o un programa ya hecho?', a: 'Si existe un programa que cubre el 90 % de lo que necesitas, te recomendaremos ese. El software a medida tiene sentido cuando tu proceso es tu ventaja.' },
    ],
    related: ['automatizacion', 'inteligencia-artificial', 'consultoria'],
  },
  {
    slug: 'software/a-medida',
    icon: 'software-a-medida',
    parent: 'software',
    order: 1,
    name: 'Software a medida',
    navLabel: 'Software a medida',
    stage: 'Escalar',
    seo: {
      title: 'Software a medida para pymes: hecho para tu proceso',
      description:
        'Desarrollamos software a medida para pymes: ERP ligeros, CRM, gestión de pedidos, presupuestadores y herramientas internas diseñadas alrededor de tu proceso.',
    },
    hero: {
      eyebrow: 'Software a medida',
      title: 'Hecho para *tu cerradura*, no para la de todos.',
      lead: 'Hay procesos que te hacen diferente y ningún programa estándar entiende. Diseñamos software a medida alrededor de cómo trabajas tú: presupuestadores, gestión de pedidos, ERP ligeros, CRM y herramientas internas.',
    },
    card: {
      title: 'A medida de tu proceso',
      text: 'ERP ligeros, CRM, presupuestadores y herramientas internas diseñados alrededor de cómo trabajas.',
    },
    forYou: [
      'Tu proceso es tu ventaja competitiva y ningún software estándar lo respeta.',
      'Has adaptado tu negocio a un programa en lugar de al revés.',
      'Pierdes horas en presupuestos, planificación o control de producción.',
      'Necesitas unificar información dispersa en un solo sistema.',
    ],
    deliverables: [
      { title: 'Presupuestadores y configuradores', text: 'Calcula precios complejos en segundos y genera la propuesta con tu imagen.' },
      { title: 'Gestión de pedidos y producción', text: 'Del pedido a la entrega, con estados, responsables y avisos automáticos.' },
      { title: 'CRM y ERP ligeros', text: 'Solo las funciones que usas, con el lenguaje de tu sector y sin licencias por usuario.' },
      { title: 'Planificación y recursos', text: 'Calendarios, turnos, rutas o reservas ajustados a tus reglas.' },
      { title: 'Migración de datos', text: 'Traemos la información de tus hojas de cálculo y programas actuales, limpia y ordenada.' },
      { title: 'Arquitectura preparada para IA', text: 'Datos estructurados desde el inicio para incorporar automatizaciones e inteligencia artificial.' },
    ],
    outcomes: [
      { title: 'El proceso, protegido', text: 'Tu forma de hacer las cosas queda en el sistema, no solo en la cabeza de alguien.' },
      { title: 'Equipo autónomo', text: 'Cualquiera puede hacer el trabajo siguiendo la herramienta.' },
      { title: 'Costes previsibles', text: 'Sin licencias que suben con cada usuario que contratas.' },
    ],
    process: [
      { title: 'Inmersión', text: 'Observamos cómo trabaja tu equipo y documentamos el proceso real.' },
      { title: 'Diseño funcional', text: 'Flujos, pantallas y reglas de negocio validados con quien lo va a usar.' },
      { title: 'Versión 1', text: 'Lo imprescindible, funcionando y en uso real lo antes posible.' },
      { title: 'Iteración', text: 'Mejoras guiadas por el uso diario, no por suposiciones.' },
    ],
    faqs: [
      { q: '¿Cuánto tiempo lleva una primera versión?', a: 'Lo definimos al cerrar el alcance. Priorizamos una primera versión pequeña y útil para que empieces a usarla pronto y crezca con lo que aprendemos.' },
      { q: '¿Y si mañana trabajo con otro proveedor?', a: 'El código es tuyo, está documentado y usa tecnologías estándar. Cualquier equipo competente puede continuarlo.' },
      { q: '¿Se puede conectar con mi programa de facturación?', a: 'En la mayoría de los casos, sí. Revisamos las opciones de integración de tus herramientas en la fase de definición.' },
    ],
    related: ['automatizacion', 'inteligencia-artificial', 'consultoria'],
  },
  {
    slug: 'consultoria',
    icon: 'consultoria',
    order: 6,
    name: 'Consultoría',
    navLabel: 'Consultoría',
    stage: 'Dirigir',
    seo: {
      title: 'Consultoría digital para pymes: plan antes que herramientas',
      description:
        'Diagnóstico digital, hoja de ruta y acompañamiento para pymes. Te ayudamos a decidir qué hacer primero, qué no hacer y cuánto invertir.',
    },
    hero: {
      eyebrow: 'Consultoría',
      title: 'Primero *el rumbo*. Después, las herramientas.',
      lead: 'Antes de gastar en una web, una campaña o un software, conviene saber qué problema resuelve y en qué orden. Te ayudamos a decidir con datos, sin vender humo ni piezas que no necesitas.',
    },
    card: {
      title: 'Rumbo y prioridades',
      text: 'Diagnóstico y hoja de ruta para invertir en lo que de verdad mueve tu negocio.',
    },
    forYou: [
      'Sabes que tienes que digitalizarte, pero no por dónde empezar.',
      'Has invertido en herramientas que nadie usa.',
      'Recibes propuestas de proveedores y no sabes evaluarlas.',
      'Quieres crecer sin que todo siga pasando por ti.',
    ],
    deliverables: [
      { title: 'Diagnóstico digital', text: 'Una foto honesta de tu web, captación, procesos, herramientas y datos.' },
      { title: 'Hoja de ruta', text: 'Qué hacer, en qué orden, con qué presupuesto y qué resultado esperar de cada paso.' },
      { title: 'Selección de herramientas', text: 'Te ayudamos a elegir CRM, ERP o plataformas sin comisiones ni compromisos con nadie.' },
      { title: 'Revisión de propuestas', text: 'Evaluamos presupuestos de terceros para que decidas con criterio.' },
      { title: 'Acompañamiento', text: 'Sesiones periódicas para tomar decisiones, revisar avances y mantener el rumbo.' },
      { title: 'Formación', text: 'Tu equipo entiende las herramientas y los datos que usa cada día.' },
    ],
    outcomes: [
      { title: 'Claridad', text: 'Sabes qué hacer este trimestre y qué puede esperar.' },
      { title: 'Menos dinero mal invertido', text: 'Cada inversión digital responde a un objetivo de negocio.' },
      { title: 'Decisiones propias', text: 'Entiendes lo que compras y por qué.' },
    ],
    process: [
      { title: 'Sesión inicial', text: 'Entendemos tu negocio, tus objetivos y tus límites.' },
      { title: 'Análisis', text: 'Revisamos datos, herramientas y procesos, y hablamos con tu equipo.' },
      { title: 'Plan', text: 'Hoja de ruta priorizada, con presupuesto orientativo y métricas.' },
      { title: 'Ejecución', text: 'La llevas a cabo con tu equipo, con quien elijas o con nosotros.' },
    ],
    faqs: [
      { q: '¿Tengo que contrataros después para ejecutar el plan?', a: 'No. El plan es tuyo y puedes ejecutarlo con quien quieras. Si decides hacerlo con nosotros, ya conocemos tu negocio.' },
      { q: '¿Es solo para empresas grandes?', a: 'Al contrario. Una pyme no puede permitirse invertir en lo que no toca: por eso la consultoría tiene más sentido cuanto más ajustado es el presupuesto.' },
      { q: '¿Cómo son las sesiones?', a: 'En remoto o presencial, con un orden del día claro y un resumen escrito con las decisiones tomadas.' },
    ],
    related: ['diseno-web', 'marketing', 'automatizacion'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Servicios de primer nivel, ordenados. */
export const topServices = services.filter((s) => !s.parent).sort((a, b) => a.order - b.order);

/** Subservicios de un servicio, ordenados. */
export const childrenOf = (slug: string) =>
  services.filter((s) => s.parent === slug).sort((a, b) => a.order - b.order);

export const serviceHref = (s: Pick<Service, 'slug'>) => `/servicios/${s.slug}/`;

/** Cadena de ancestros (del más alto al más cercano). */
export const ancestorsOf = (s: Service): Service[] => {
  const chain: Service[] = [];
  let current = s.parent ? getService(s.parent) : undefined;
  while (current) {
    chain.unshift(current);
    current = current.parent ? getService(current.parent) : undefined;
  }
  return chain;
};
