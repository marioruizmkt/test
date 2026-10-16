/**
 * Catálogo de servicios.
 *
 * Cada entrada genera automáticamente su página en /servicios/<slug>/,
 * aparece en el menú, en el índice de servicios y en el sitemap.
 *
 * Para añadir un servicio específico (p. ej. /servicios/marketing/seo/):
 *   1. Añade una entrada con `slug: 'marketing/seo'` y `parent: 'marketing'`.
 *   2. Añade su imagen en src/assets/images/ e impórtala aquí.
 * La página padre lo listará en su bloque de «Especialidades».
 */
import type { ImageMetadata } from 'astro';

import imgWeb from '@/assets/images/diseno-web.jpg';
import imgMarketing from '@/assets/images/marketing.jpg';
import imgAuto from '@/assets/images/automatizacion.jpg';
import imgIA from '@/assets/images/inteligencia-artificial.jpg';
import imgSoftware from '@/assets/images/software.jpg';
import imgMedida from '@/assets/images/a-medida.jpg';
import imgConsultoria from '@/assets/images/consultoria.jpg';

export type PillarId = 'vender' | 'depender' | 'decidir';

export const pillars: Record<PillarId, { label: string; title: string; text: string }> = {
  vender: {
    label: 'Vender más',
    title: 'Que te encuentren, te elijan y te compren.',
    text: 'Una presencia digital que trabaja como tu mejor comercial: atrae a quien te necesita y le da motivos para decidirse por ti.',
  },
  depender: {
    label: 'Depender menos de ti',
    title: 'Que el negocio funcione aunque tú no estés.',
    text: 'Procesos, herramientas e inteligencia artificial que hacen el trabajo repetitivo para que tú puedas dedicarte a lo importante.',
  },
  decidir: {
    label: 'Decidir con criterio',
    title: 'Saber qué hacer primero y por qué.',
    text: 'Una mirada externa, con método y sin humo, para invertir donde de verdad hay retorno.',
  },
};

export type Item = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  parent?: string;
  pillar: PillarId;
  name: string;
  /** Titular H1. Admite <em> para el acento tipográfico. */
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  lead: string;
  image: ImageMetadata;
  imageAlt: string;
  tags: string[];
  forYouIf: string[];
  outcomes: Item[];
  includes: Item[];
  process: Item[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'diseno-web',
    pillar: 'vender',
    name: 'Diseño web',
    title: 'Webs que <em>venden</em>, no que decoran.',
    seoTitle: 'Diseño web para pymes que convierte visitas en clientes',
    description:
      'Diseño y desarrollo de páginas web y tiendas online para pymes: rápidas, claras, bien posicionadas y pensadas para conseguir clientes. Presupuesto cerrado.',
    summary: 'Webs y tiendas online rápidas, claras y pensadas para convertir visitas en clientes.',
    lead: 'Tu web es lo primero que ve un cliente antes de llamarte. La diseñamos para que entienda en cinco segundos qué haces, confíe en ti y dé el paso: pedir presupuesto, reservar o comprar.',
    image: imgWeb,
    imageAlt: 'Tarjetas de papel dispuestas como la maqueta de una página web, con una pieza verde destacada.',
    tags: ['Webs corporativas', 'Tiendas online', 'Landing pages', 'SEO técnico', 'Rediseño'],
    forYouIf: [
      'Tu web actual es antigua, lenta o no se ve bien en el móvil.',
      'Recibes visitas pero casi nadie te escribe ni te llama.',
      'Te da reparo enviar el enlace a un cliente porque no refleja lo que vales.',
      'Cada cambio pequeño depende de alguien que tarda semanas en responder.',
    ],
    outcomes: [
      { title: 'Más contactos de calidad', text: 'Mensajes claros, llamadas a la acción visibles y formularios sin fricción para que quien llega, escriba.' },
      { title: 'Una imagen a tu altura', text: 'Un diseño propio, cuidado al detalle, que transmite la confianza que ya generas en persona.' },
      { title: 'Autonomía total', text: 'Una web que puedes actualizar tú mismo, en tu dominio y con tus cuentas. Sin ataduras.' },
    ],
    includes: [
      { title: 'Estrategia y contenidos', text: 'Definimos a quién hablas, qué necesita oír y en qué orden. Te ayudamos con los textos.' },
      { title: 'Diseño a medida', text: 'Nada de plantillas genéricas: identidad visual coherente con tu marca y tu sector.' },
      { title: 'Desarrollo rápido', text: 'Carga en menos de dos segundos, puntuaciones altas en Core Web Vitals y accesibilidad cuidada.' },
      { title: 'SEO desde la base', text: 'Arquitectura, metadatos, datos estructurados y velocidad para que Google te entienda desde el primer día.' },
      { title: 'Medición', text: 'Analítica configurada y respetuosa con la privacidad para saber qué funciona.' },
      { title: 'Formación y soporte', text: 'Te enseñamos a gestionarla y seguimos a tu lado después del lanzamiento.' },
    ],
    process: [
      { title: 'Descubrimiento', text: 'Entendemos tu negocio, tus clientes y tus objetivos. Analizamos tu web actual y a tu competencia.' },
      { title: 'Arquitectura y mensaje', text: 'Estructura de páginas, recorrido del usuario y textos clave antes de dibujar un solo píxel.' },
      { title: 'Diseño y desarrollo', text: 'Diseño visual, revisiones contigo y desarrollo optimizado para móvil, velocidad y SEO.' },
      { title: 'Lanzamiento y mejora', text: 'Publicación sin sobresaltos, formación y revisión de resultados en las semanas siguientes.' },
    ],
    faqs: [
      { q: '¿Cuánto tarda en estar lista una web?', a: 'Una web corporativa suele estar lista en cuatro a seis semanas; una tienda online, entre seis y diez. Te damos un calendario cerrado antes de empezar.' },
      { q: '¿Podré modificarla yo mismo?', a: 'Sí. Te entregamos la web con un gestor sencillo y una formación práctica para que cambies textos, imágenes o productos sin depender de nadie.' },
      { q: '¿El dominio y la web serán míos?', a: 'Siempre. El dominio, el alojamiento, las cuentas y el contenido están a tu nombre. Si un día decides irte, te lo llevas todo.' },
      { q: '¿Incluye el posicionamiento en Google?', a: 'Incluye el SEO técnico y on-page de base. Si quieres crecer en búsquedas de forma sostenida, lo trabajamos dentro del servicio de marketing.' },
    ],
    related: ['marketing', 'automatizacion', 'consultoria'],
  },
  {
    slug: 'marketing',
    pillar: 'vender',
    name: 'Marketing digital',
    title: 'Clientes que llegan <em>cada semana</em>, no de vez en cuando.',
    seoTitle: 'Marketing digital y captación de clientes para pymes',
    description:
      'SEO, publicidad en Google y redes sociales, email marketing y embudos de captación para pymes. Estrategias medibles para conseguir clientes de forma constante.',
    summary: 'SEO, publicidad y embudos de captación para conseguir clientes de forma constante y medible.',
    lead: 'El boca a boca es estupendo, pero no se puede planificar. Construimos un sistema de captación que trae oportunidades de forma predecible, con números claros sobre lo que cuesta cada cliente.',
    image: imgMarketing,
    imageAlt: 'Formación de aviones de papel blancos guiada por un avión verde.',
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Email marketing', 'Embudos de venta', 'Analítica'],
    forYouIf: [
      'Tus ventas suben y bajan sin que sepas muy bien por qué.',
      'Has probado anuncios, pero no sabes si recuperaste lo invertido.',
      'Tu competencia aparece en Google antes que tú.',
      'Publicas en redes por obligación, sin una estrategia detrás.',
    ],
    outcomes: [
      { title: 'Captación predecible', text: 'Un flujo constante de oportunidades que puedes prever y escalar.' },
      { title: 'Cada euro, medido', text: 'Sabrás cuánto te cuesta conseguir un cliente y qué canal te los trae.' },
      { title: 'Visibilidad donde importa', text: 'Presencia en las búsquedas y canales en los que tus clientes deciden.' },
    ],
    includes: [
      { title: 'Estrategia de captación', text: 'Público, propuesta de valor, canales y objetivos con cifras concretas.' },
      { title: 'Posicionamiento SEO', text: 'Contenido, SEO local y técnico para aparecer cuando te buscan.' },
      { title: 'Publicidad de pago', text: 'Campañas en Google y Meta optimizadas para coste por cliente, no por clics.' },
      { title: 'Email y seguimiento', text: 'Secuencias automáticas que convierten interesados en clientes y clientes en habituales.' },
      { title: 'Landing pages', text: 'Páginas específicas para cada campaña, diseñadas para convertir.' },
      { title: 'Informes que se entienden', text: 'Un panel claro y una reunión mensual para decidir los siguientes pasos.' },
    ],
    process: [
      { title: 'Auditoría', text: 'Revisamos tu presencia actual, tus datos y a tu competencia para encontrar las oportunidades rápidas.' },
      { title: 'Plan', text: 'Definimos canales, presupuesto y objetivos medibles para los próximos tres meses.' },
      { title: 'Ejecución', text: 'Lanzamos campañas, contenidos y automatizaciones, y lo medimos todo desde el primer día.' },
      { title: 'Optimización', text: 'Cada mes reforzamos lo que funciona y cortamos lo que no. Sin inercias.' },
    ],
    faqs: [
      { q: '¿Cuánto tengo que invertir en publicidad?', a: 'Depende de tu sector y de tus objetivos. Empezamos con una cifra prudente, demostramos resultados y escalamos sólo cuando los números lo justifican.' },
      { q: '¿Cuándo empezaré a ver resultados?', a: 'La publicidad de pago genera datos y contactos desde las primeras semanas. El SEO es una inversión a medio plazo: los resultados sólidos suelen llegar entre el tercer y el sexto mes.' },
      { q: '¿Hay permanencia?', a: 'No trabajamos con permanencias largas. Preferimos que te quedes porque los números salen.' },
      { q: '¿Quién es el dueño de las cuentas publicitarias?', a: 'Tú. Las cuentas de Google, Meta y analítica se crean a tu nombre y nosotros accedemos como gestores.' },
    ],
    related: ['diseno-web', 'automatizacion', 'inteligencia-artificial'],
  },
  {
    slug: 'automatizacion',
    pillar: 'depender',
    name: 'Automatización e integraciones',
    title: 'Que las tareas repetitivas <em>se hagan solas</em>.',
    seoTitle: 'Automatización de procesos e integraciones para pymes',
    description:
      'Automatizamos tareas repetitivas e integramos tus herramientas (CRM, facturación, email, tienda online, hojas de cálculo) para que tu pyme ahorre horas cada semana.',
    summary: 'Conectamos tus herramientas y automatizamos el trabajo repetitivo para recuperar horas cada semana.',
    lead: 'Copiar datos de un sitio a otro, enviar el mismo email, perseguir facturas, actualizar la hoja de cálculo… Son horas que nadie ve y que se comen tu semana. Las automatizamos para que tu equipo se dedique a lo que aporta valor.',
    image: imgAuto,
    imageAlt: 'Hilera curva de fichas de dominó negras cayendo en cadena, iniciada por una ficha verde.',
    tags: ['Flujos automáticos', 'CRM', 'Facturación', 'Integraciones API', 'Make', 'n8n', 'Zapier'],
    forYouIf: [
      'Tu equipo pasa datos a mano de un programa a otro.',
      'Hay tareas que sólo se hacen si tú te acuerdas.',
      'Los presupuestos, las facturas o los recordatorios se retrasan.',
      'Usas varias herramientas que no se hablan entre sí.',
    ],
    outcomes: [
      { title: 'Horas recuperadas', text: 'Eliminamos el trabajo mecánico para que tu equipo dedique su tiempo a clientes y ventas.' },
      { title: 'Cero olvidos', text: 'Procesos que se ejecutan siempre igual, a su hora, con o sin ti delante.' },
      { title: 'Datos en un solo sitio', text: 'Tus herramientas conectadas y la información siempre actualizada.' },
    ],
    includes: [
      { title: 'Mapa de procesos', text: 'Identificamos qué tareas consumen más tiempo y cuáles conviene automatizar primero.' },
      { title: 'Integración de herramientas', text: 'CRM, ERP, facturación, tienda online, calendario, email y hojas de cálculo, conectados.' },
      { title: 'Flujos automáticos', text: 'Altas de clientes, presupuestos, seguimiento, cobros, avisos e informes que se generan solos.' },
      { title: 'Documentos automáticos', text: 'Contratos, propuestas y facturas generados a partir de tus datos en segundos.' },
      { title: 'Alertas inteligentes', text: 'Sólo te avisamos cuando algo requiere tu atención. Lo demás, sucede.' },
      { title: 'Mantenimiento', text: 'Supervisamos los flujos y los adaptamos cuando cambian tus herramientas.' },
    ],
    process: [
      { title: 'Diagnóstico', text: 'Observamos cómo trabajáis hoy y medimos el tiempo que se va en cada tarea.' },
      { title: 'Priorización', text: 'Elegimos las automatizaciones con más retorno y menos complejidad para empezar.' },
      { title: 'Implantación', text: 'Construimos, probamos con casos reales y documentamos cada flujo.' },
      { title: 'Acompañamiento', text: 'Formamos al equipo y medimos las horas ahorradas para decidir el siguiente paso.' },
    ],
    faqs: [
      { q: '¿Tengo que cambiar las herramientas que uso?', a: 'Normalmente no. Primero intentamos conectar lo que ya tienes. Sólo recomendamos un cambio si te ahorra dinero o problemas de verdad.' },
      { q: '¿Qué pasa si una automatización falla?', a: 'Diseñamos cada flujo con avisos de error y alternativas manuales. Además, lo supervisamos para detectar incidencias antes que tú.' },
      { q: '¿Es seguro conectar mis datos?', a: 'Usamos conexiones oficiales, permisos mínimos y herramientas que cumplen el RGPD. Tus credenciales quedan siempre bajo tu control.' },
      { q: '¿Cuánto se tarda en ver el ahorro?', a: 'Las primeras automatizaciones suelen estar funcionando en dos o tres semanas, y el ahorro de tiempo se nota desde ese momento.' },
    ],
    related: ['inteligencia-artificial', 'software', 'consultoria'],
  },
  {
    slug: 'inteligencia-artificial',
    pillar: 'depender',
    name: 'Inteligencia artificial',
    title: 'Inteligencia artificial <em>útil</em>, aplicada a tu día a día.',
    seoTitle: 'Inteligencia artificial para pymes: asistentes y automatización con IA',
    description:
      'Implantamos inteligencia artificial en pymes: asistentes que atienden clientes, análisis de documentos, generación de contenidos y agentes que trabajan con tus datos. Con criterio y seguridad.',
    summary: 'Asistentes, agentes y herramientas de IA aplicadas a tareas reales de tu negocio.',
    lead: 'La IA no es una moda ni un truco de feria: bien aplicada, responde a clientes, lee documentos, prepara borradores y resume información por ti. Te ayudamos a usarla donde de verdad ahorra tiempo y dinero, con seguridad y sin humo.',
    image: imgIA,
    imageAlt: 'Prisma de cristal que descompone la luz del sol en haces verdes sobre papel.',
    tags: ['Asistentes con IA', 'Atención al cliente', 'Análisis de documentos', 'Agentes', 'Formación'],
    forYouIf: [
      'Respondes una y otra vez las mismas preguntas de clientes.',
      'Pierdes horas leyendo, clasificando o resumiendo documentos.',
      'Te interesa la IA, pero no sabes por dónde empezar ni en qué fiarte.',
      'Tu equipo ya usa herramientas de IA sin ninguna pauta común.',
    ],
    outcomes: [
      { title: 'Atención 24/7', text: 'Asistentes que responden con la información de tu negocio, a cualquier hora, y derivan a una persona cuando hace falta.' },
      { title: 'Trabajo de horas en minutos', text: 'Lectura de documentos, propuestas, resúmenes y clasificaciones resueltas al instante.' },
      { title: 'IA con criterio', text: 'Uso seguro, alineado con el RGPD y la normativa europea, con supervisión humana donde importa.' },
    ],
    includes: [
      { title: 'Detección de casos de uso', text: 'Analizamos tu negocio para encontrar dónde la IA aporta un retorno claro.' },
      { title: 'Asistentes conversacionales', text: 'Para web, WhatsApp o email, entrenados con tu información y tu tono.' },
      { title: 'Procesamiento de documentos', text: 'Extracción de datos de facturas, pedidos, contratos o formularios.' },
      { title: 'Agentes conectados', text: 'IA que consulta y actualiza tus herramientas para completar tareas de principio a fin.' },
      { title: 'Contenidos asistidos', text: 'Flujos para preparar propuestas, fichas de producto o publicaciones con tu estilo.' },
      { title: 'Formación del equipo', text: 'Talleres prácticos y pautas de uso para sacarle partido con seguridad.' },
    ],
    process: [
      { title: 'Exploración', text: 'Identificamos tareas candidatas y estimamos el ahorro de cada una.' },
      { title: 'Prototipo', text: 'Construimos una primera versión con tus datos reales para validar que funciona.' },
      { title: 'Implantación', text: 'Integramos la solución en tus herramientas con controles de calidad y privacidad.' },
      { title: 'Evolución', text: 'Medimos su uso, ajustamos respuestas y ampliamos a nuevos casos.' },
    ],
    faqs: [
      { q: '¿La IA va a sustituir a mi equipo?', a: 'Nuestro enfoque es el contrario: quitarle a tu equipo el trabajo repetitivo para que se dedique a lo que requiere criterio y trato humano.' },
      { q: '¿Qué pasa con la privacidad de mis datos?', a: 'Elegimos proveedores y configuraciones que no usan tus datos para entrenar modelos, minimizamos la información que se comparte y documentamos el tratamiento conforme al RGPD.' },
      { q: '¿Y si el asistente responde algo incorrecto?', a: 'Limitamos sus respuestas a tu información validada, definimos cuándo debe derivar a una persona y revisamos las conversaciones para mejorarlo.' },
      { q: '¿Necesito tener muchos datos?', a: 'No. Muchos casos funcionan con la documentación que ya tienes: catálogos, preguntas frecuentes, procedimientos o correos.' },
    ],
    related: ['automatizacion', 'software', 'consultoria'],
  },
  {
    slug: 'software',
    pillar: 'depender',
    name: 'Software y aplicaciones',
    title: 'Herramientas digitales que <em>encajan</em> con tu forma de trabajar.',
    seoTitle: 'Desarrollo de software y aplicaciones para pymes',
    description:
      'Desarrollo de aplicaciones web y móviles, áreas de cliente, paneles de gestión y herramientas internas para pymes. Software fiable, fácil de usar y que es tuyo.',
    summary: 'Aplicaciones web y móviles, áreas de cliente y herramientas internas fiables y fáciles de usar.',
    lead: 'Cuando las hojas de cálculo se quedan cortas y los programas genéricos no se adaptan, toca construir la herramienta adecuada. Diseñamos y desarrollamos aplicaciones sencillas de usar, robustas y pensadas para crecer contigo.',
    image: imgSoftware,
    imageAlt: 'Bloques modulares de cerámica apilados en equilibrio con una pieza verde central.',
    tags: ['Aplicaciones web', 'Apps móviles', 'Áreas de cliente', 'Paneles de gestión', 'Herramientas internas'],
    forYouIf: [
      'Tu negocio funciona a base de hojas de cálculo que sólo entiende una persona.',
      'Pagas varias suscripciones que hacen a medias lo que necesitas.',
      'Tus clientes te piden un área privada, reservas online o una app.',
      'Quieres convertir tu forma de trabajar en una ventaja que otros no tengan.',
    ],
    outcomes: [
      { title: 'Un sistema, no un parche', text: 'Toda la información y los procesos clave en una herramienta clara y fiable.' },
      { title: 'Mejor experiencia de cliente', text: 'Reservas, pedidos, seguimiento y documentos disponibles para tus clientes en todo momento.' },
      { title: 'Preparado para crecer', text: 'Una base técnica sólida que soporta más clientes, más equipo y nuevas funciones.' },
    ],
    includes: [
      { title: 'Análisis funcional', text: 'Convertimos tu forma de trabajar en requisitos claros y priorizados.' },
      { title: 'Diseño de producto', text: 'Prototipos navegables y pruebas con usuarios antes de programar.' },
      { title: 'Desarrollo web y móvil', text: 'Tecnología moderna, segura y mantenible, desplegada en la nube.' },
      { title: 'Integraciones', text: 'Conexión con tu facturación, pasarela de pago, CRM o cualquier sistema con API.' },
      { title: 'Calidad y seguridad', text: 'Pruebas, copias de seguridad, control de accesos y buenas prácticas desde el inicio.' },
      { title: 'Soporte y evolución', text: 'Mantenimiento, mejoras continuas y un equipo que conoce tu producto.' },
    ],
    process: [
      { title: 'Definición', text: 'Talleres para entender el problema, los usuarios y el alcance de una primera versión.' },
      { title: 'Prototipo', text: 'Diseñamos la experiencia y la validamos contigo y con usuarios reales.' },
      { title: 'Desarrollo por fases', text: 'Entregas cada dos semanas para que veas avances reales y puedas opinar.' },
      { title: 'Lanzamiento y evolución', text: 'Puesta en marcha acompañada, métricas de uso y hoja de ruta de mejoras.' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta desarrollar una aplicación?', a: 'Depende del alcance. Por eso empezamos definiendo una primera versión con lo imprescindible, con un presupuesto cerrado, y evolucionamos a partir de ahí.' },
      { q: '¿El código será mío?', a: 'Sí. La propiedad del código y de los datos es tuya, y te entregamos la documentación necesaria para que cualquier equipo pueda continuar.' },
      { q: '¿Es mejor una herramienta a medida o un programa existente?', a: 'Si existe una herramienta que resuelve bien tu problema, te lo diremos. Recomendamos desarrollo propio sólo cuando aporta una ventaja clara.' },
      { q: '¿Ofrecéis mantenimiento?', a: 'Sí. Ofrecemos planes de mantenimiento con actualizaciones de seguridad, copias de seguridad, monitorización y una bolsa de horas para mejoras.' },
    ],
    related: ['software/a-medida', 'automatizacion', 'inteligencia-artificial'],
  },
  {
    slug: 'software/a-medida',
    parent: 'software',
    pillar: 'depender',
    name: 'Software a medida',
    title: 'Software hecho <em>a tu medida</em>, no al revés.',
    seoTitle: 'Desarrollo de software a medida para pymes',
    description:
      'Desarrollo de software a medida para pymes: ERP, CRM, gestión de pedidos, producción o servicios adaptados exactamente a tus procesos. Código propio, escalable y documentado.',
    summary: 'Programas diseñados exactamente para tus procesos: gestión, producción, pedidos o servicios.',
    lead: 'Los programas estándar te obligan a adaptar tu negocio a ellos. El software a medida hace justo lo contrario: recoge tu forma de trabajar, la mejora y la convierte en una herramienta que nadie más tiene.',
    image: imgMedida,
    imageAlt: 'Bloque de escayola rodeado con una cinta métrica de sastre, alfileres verdes y tijeras de latón.',
    tags: ['ERP a medida', 'CRM a medida', 'Gestión de pedidos', 'Producción', 'Portales B2B'],
    forYouIf: [
      'Has probado varios programas y ninguno se adapta a tu forma de trabajar.',
      'Tu proceso es tu ventaja competitiva y no quieres renunciar a él.',
      'Necesitas unir en un solo sistema lo que hoy está repartido en cinco.',
      'El coste acumulado de licencias ya supera lo que costaría algo propio.',
    ],
    outcomes: [
      { title: 'Encaje perfecto', text: 'Cada pantalla y cada flujo responden a cómo trabajáis, sin funciones que sobran.' },
      { title: 'Activo propio', text: 'Un software que es tuyo, sin licencias por usuario y que aumenta el valor de tu empresa.' },
      { title: 'Eficiencia medible', text: 'Menos pasos, menos errores y más capacidad con el mismo equipo.' },
    ],
    includes: [
      { title: 'Consultoría de procesos', text: 'Analizamos y simplificamos el proceso antes de digitalizarlo.' },
      { title: 'Arquitectura escalable', text: 'Base técnica preparada para crecer en usuarios, datos y funcionalidades.' },
      { title: 'Roles y permisos', text: 'Cada persona ve y hace exactamente lo que necesita.' },
      { title: 'Migración de datos', text: 'Traemos tu información desde hojas de cálculo o programas anteriores.' },
      { title: 'Informes y cuadros de mando', text: 'Indicadores en tiempo real para tomar decisiones con datos.' },
      { title: 'Documentación completa', text: 'Técnica y de usuario, para que el conocimiento no dependa de nadie.' },
    ],
    process: [
      { title: 'Inmersión', text: 'Pasamos tiempo con tu equipo para entender el proceso real, no el teórico.' },
      { title: 'Diseño de la solución', text: 'Definimos funcionalidades, arquitectura, fases y presupuesto cerrado por fase.' },
      { title: 'Construcción iterativa', text: 'Entregas frecuentes que tu equipo prueba con casos reales.' },
      { title: 'Implantación', text: 'Migración, formación, puesta en marcha acompañada y soporte continuo.' },
    ],
    faqs: [
      { q: '¿Cuánto tiempo lleva un software a medida?', a: 'Una primera versión útil suele estar en funcionamiento entre dos y cuatro meses. Después, se amplía por fases según prioridades.' },
      { q: '¿Qué pasa si mañana necesito cambiar algo?', a: 'Para eso lo construimos a medida: el sistema evoluciona contigo. Ofrecemos planes de evolución con bolsa de horas.' },
      { q: '¿Y si dejo de trabajar con vosotros?', a: 'El código, los datos y la documentación son tuyos. Lo desarrollamos con tecnologías estándar para que cualquier equipo pueda continuarlo.' },
      { q: '¿Se puede conectar con lo que ya uso?', a: 'Sí. Lo integramos con tu facturación, contabilidad, tienda online, pasarela de pago o cualquier sistema que disponga de API.' },
    ],
    related: ['software', 'automatizacion', 'consultoria'],
  },
  {
    slug: 'consultoria',
    pillar: 'decidir',
    name: 'Consultoría',
    title: 'Antes de invertir, <em>saber dónde</em>.',
    seoTitle: 'Consultoría de transformación digital para pymes',
    description:
      'Consultoría digital para pymes: diagnóstico, plan de digitalización priorizado, selección de herramientas y acompañamiento. Decisiones con criterio y retorno medible.',
    summary: 'Diagnóstico, plan priorizado y acompañamiento para invertir en digital con criterio.',
    lead: 'Hay mil herramientas, mil proveedores y mil opiniones. Te ayudamos a ver tu negocio con perspectiva, decidir qué hacer primero y qué no hacer, y ejecutar el plan con o sin nosotros.',
    image: imgConsultoria,
    imageAlt: 'Brújula de latón con aguja verde sobre un mapa de papel en blanco.',
    tags: ['Diagnóstico digital', 'Plan de digitalización', 'Selección de herramientas', 'Kit Digital', 'Acompañamiento'],
    forYouIf: [
      'Sabes que tienes que digitalizarte, pero no por dónde empezar.',
      'Has invertido en herramientas o proveedores que no dieron resultado.',
      'Recibes ofertas de todo tipo y no sabes cuál te conviene.',
      'Quieres crecer sin que el negocio dependa todavía más de ti.',
    ],
    outcomes: [
      { title: 'Claridad', text: 'Una fotografía honesta de tu situación y de las oportunidades con más retorno.' },
      { title: 'Un plan priorizado', text: 'Qué hacer, en qué orden, con qué presupuesto y cómo medirlo.' },
      { title: 'Decisiones sin humo', text: 'Una opinión independiente para elegir herramientas y proveedores con criterio.' },
    ],
    includes: [
      { title: 'Diagnóstico 360°', text: 'Revisamos ventas, marketing, operaciones, herramientas y datos.' },
      { title: 'Entrevistas al equipo', text: 'Escuchamos a quienes trabajan cada día en los procesos.' },
      { title: 'Hoja de ruta', text: 'Iniciativas priorizadas por impacto, coste y esfuerzo, a 3, 6 y 12 meses.' },
      { title: 'Selección de herramientas', text: 'Comparativas objetivas y recomendaciones adaptadas a tu tamaño.' },
      { title: 'Ayudas y subvenciones', text: 'Orientación sobre programas públicos de digitalización disponibles para tu empresa.' },
      { title: 'Acompañamiento', text: 'Sesiones periódicas para revisar avances y ajustar el plan.' },
    ],
    process: [
      { title: 'Conversación inicial', text: 'Una primera sesión para entender tu negocio y tus prioridades.' },
      { title: 'Análisis', text: 'Recogemos datos, revisamos herramientas y entrevistamos al equipo.' },
      { title: 'Plan de acción', text: 'Te presentamos el diagnóstico y una hoja de ruta clara y priorizada.' },
      { title: 'Ejecución acompañada', text: 'La ejecutas con tu equipo, con nosotros o con quien elijas, con nuestro seguimiento.' },
    ],
    faqs: [
      { q: '¿Estoy obligado a contrataros después la ejecución?', a: 'No. El plan es tuyo y está pensado para que puedas ejecutarlo con quien quieras. Si confías en nosotros para hacerlo, encantados.' },
      { q: '¿Cuánto dura una consultoría?', a: 'Un diagnóstico con su hoja de ruta suele llevar entre dos y cuatro semanas, según el tamaño de la empresa.' },
      { q: '¿Es útil para empresas muy pequeñas?', a: 'Especialmente. En una empresa pequeña cada euro y cada hora cuentan, y acertar con las prioridades marca la diferencia.' },
      { q: '¿Podéis ayudarme con subvenciones?', a: 'Te orientamos sobre las ayudas públicas de digitalización vigentes y te ayudamos a encajar el plan en ellas cuando es posible.' },
    ],
    related: ['automatizacion', 'diseno-web', 'inteligencia-artificial'],
  },
];

/* ——— Helpers ——— */

export const serviceHref = (slug: string) => `/servicios/${slug}/`;

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const topLevelServices = services.filter((s) => !s.parent);

export const childrenOf = (slug: string) => services.filter((s) => s.parent === slug);

export const servicesByPillar = (pillar: PillarId) =>
  topLevelServices.filter((s) => s.pillar === pillar);

/** Número correlativo (01, 02…) de los servicios principales. */
export const serviceNumber = (slug: string) => {
  const root = slug.split('/')[0];
  const i = topLevelServices.findIndex((s) => s.slug === root);
  return String(i + 1).padStart(2, '0');
};
