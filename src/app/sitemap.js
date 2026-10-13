import { catalogoData } from '@/data/cursos/catalogo';
import { dataRegistry } from '@/data/moduleRegistry';

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = 'https://cip.cultura-t.com';
  const currentDate = new Date();

  // 1. Rutas Principales e Institucionales
  const mainRoutes = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/academia`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/laboratorio`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/centro-conocimiento`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/centro-conocimiento/proyectos`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/centro-conocimiento/publicaciones`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/verificar`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // 2. Laboratorios de Datos
  const labRoutes = [
    { url: `${baseUrl}/laboratorios/anatomia-del-turista`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/laboratorios/atractivos-turisticos`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/laboratorios/carbono`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/laboratorios/sae-colombia`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/laboratorios/tolima`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Catálogo de Videos Oficiales para Googlebot Video
  const COURSE_VIDEOS = {
    'propuesta-valor': [
      {
        title: 'Propuesta de Valor - Introducción y Metodología Oficial Strategyzer',
        thumbnail_loc: 'https://img.youtube.com/vi/I4wFG7PGg4g/maxresdefault.jpg',
        description: 'Aprende jugando con la metodología de Alexander Osterwalder (Strategyzer) para crear experiencias de turismo y cultura con encaje de mercado.',
        content_loc: 'https://www.youtube.com/watch?v=I4wFG7PGg4g',
        player_loc: 'https://www.youtube.com/embed/I4wFG7PGg4g',
      },
      {
        title: 'Pilar 1: El Lienzo del Cliente - Trabajos, Dolores y Alegrías',
        thumbnail_loc: 'https://img.youtube.com/vi/RDiJO7afNTc/hqdefault.jpg',
        description: 'Descubre los trabajos funcionales, sociales y emocionales del visitante antes de diseñar tu solución y evita la trampa de la solución.',
        content_loc: 'https://www.youtube.com/watch?v=RDiJO7afNTc',
        player_loc: 'https://www.youtube.com/embed/RDiJO7afNTc',
      },
      {
        title: 'Pilar 2: El Mapa de Valor y los 3 Encajes - Solución, Mercado y Negocio',
        thumbnail_loc: 'https://img.youtube.com/vi/Cdok6lb5O_0/hqdefault.jpg',
        description: 'Conecta tu oferta con los dolores reales, valida con la multitud orgánica en el mercado y estructura un modelo de negocio rentable.',
        content_loc: 'https://www.youtube.com/watch?v=Cdok6lb5O_0',
        player_loc: 'https://www.youtube.com/embed/Cdok6lb5O_0',
      },
      {
        title: 'Pilar 3: Probar sin Quebrar - Experimentos Lean',
        thumbnail_loc: 'https://img.youtube.com/vi/coTyxfvqpgY/hqdefault.jpg',
        description: 'Protege tu capital de inversión ejecutando experimentos rápidos y económicos de $200 USD antes de construir infraestructura costosa.',
        content_loc: 'https://www.youtube.com/watch?v=coTyxfvqpgY',
        player_loc: 'https://www.youtube.com/embed/coTyxfvqpgY',
      },
      {
        title: 'Pilar 4: El Filtro de Feedback y el Pivote Estratégico',
        thumbnail_loc: 'https://img.youtube.com/vi/VyEzitobXAc/hqdefault.jpg',
        description: 'Aprende cuándo decir SÍ a un dolor real y cuándo decir NO con firmeza a sugerencias fuera de foco que arruinan tu propuesta de valor.',
        content_loc: 'https://www.youtube.com/watch?v=VyEzitobXAc',
        player_loc: 'https://www.youtube.com/embed/VyEzitobXAc',
      }
    ],
    'turismo-comunitario': [
      {
        title: 'Ruta de Formación Turismo Comunitario',
        thumbnail_loc: 'https://img.youtube.com/vi/-eqqzauu3Hk/hqdefault.jpg',
        description: 'Desarrollo de capacidades para la gestión comunitaria de rutas turísticas sostenibles.',
        content_loc: 'https://www.youtube.com/watch?v=-eqqzauu3Hk',
        player_loc: 'https://www.youtube.com/embed/-eqqzauu3Hk'
      }
    ],
    'diseno-producto': [
      {
        title: 'Diseño de Producto Turístico Territorial',
        thumbnail_loc: 'https://img.youtube.com/vi/-h7XRblQX0c/hqdefault.jpg',
        description: 'Metodología de 7 pasos para transformar recursos locales en experiencias de alto valor.',
        content_loc: 'https://www.youtube.com/watch?v=-h7XRblQX0c',
        player_loc: 'https://www.youtube.com/embed/-h7XRblQX0c'
      }
    ],
    'calculadora-costeo': [
      {
        title: 'Calculadora de Costeo Turístico',
        thumbnail_loc: 'https://img.youtube.com/vi/LWCyv7y7ylA/hqdefault.jpg',
        description: 'Herramienta interactiva para estructurar y proyectar costos, gastos y rentabilidad con metodología PNUD.',
        content_loc: 'https://www.youtube.com/watch?v=LWCyv7y7ylA',
        player_loc: 'https://www.youtube.com/embed/LWCyv7y7ylA'
      }
    ],
    'marca': [
      {
        title: 'Diseño de Marca e Identidad Visual',
        thumbnail_loc: 'https://img.youtube.com/vi/oVrqPz-IUec/hqdefault.jpg',
        description: 'Arquitectura visual, psicología del color y arquetipos de marca para el turismo.',
        content_loc: 'https://www.youtube.com/watch?v=oVrqPz-IUec',
        player_loc: 'https://www.youtube.com/embed/oVrqPz-IUec'
      }
    ],
    'fotografia': [
      {
        title: 'Fundamentos y Composición Fotográfica',
        thumbnail_loc: 'https://img.youtube.com/vi/g2Mn3Nu4HSo/hqdefault.jpg',
        description: 'Domina la luz, el encuadre y las reglas visuales para crear fotografías turísticas de impacto.',
        content_loc: 'https://www.youtube.com/watch?v=g2Mn3Nu4HSo',
        player_loc: 'https://www.youtube.com/embed/g2Mn3Nu4HSo'
      }
    ]
  };

  // 3. Cursos (Syllabus, Herramienta, Juego y Certificación con Videos para el Robot)
  const courseRoutes = [];
  catalogoData.courses.forEach((course) => {
    const courseEntry = {
      url: `${baseUrl}/academia/cursos/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85
    };

    if (COURSE_VIDEOS[course.slug]) {
      courseEntry.videos = COURSE_VIDEOS[course.slug];
    }

    courseRoutes.push(courseEntry);

    if (course.slug === 'calculadora-costeo') {
      courseRoutes.push({
        url: `${baseUrl}/academia/cursos/calculadora-costeo/herramienta`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8
      });
    } else if (course.slug === 'propuesta-valor') {
      courseRoutes.push({
        url: `${baseUrl}/academia/cursos/propuesta-valor/juego`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
        videos: COURSE_VIDEOS['propuesta-valor'].slice(1) // Los 4 pilares interactivos
      });
      courseRoutes.push({
        url: `${baseUrl}/academia/cursos/propuesta-valor/certificacion`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8
      });
    } else {
      courseRoutes.push({
        url: `${baseUrl}/academia/cursos/${course.slug}/certificacion`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.75
      });
    }
  });

  // 4. Módulos individuales de los Cursos
  const moduleRoutes = [];
  for (const curso in dataRegistry) {
    for (const modulo in dataRegistry[curso]) {
      moduleRoutes.push({
        url: `${baseUrl}/academia/cursos/${curso}/${modulo}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7
      });
    }
  }

  return [
    ...mainRoutes,
    ...labRoutes,
    ...courseRoutes,
    ...moduleRoutes
  ];
}
