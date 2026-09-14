import { catalogoData } from '@/data/cursos/catalogo';
import { dataRegistry } from '@/data/moduleRegistry';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';

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
    { url: `${baseUrl}/laboratorios/carbono`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/laboratorios/sae-colombia`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/laboratorios/tolima`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // 3. Cursos (Syllabus, Herramienta y Certificación)
  const courseRoutes = [];
  catalogoData.courses.forEach((course) => {
    courseRoutes.push({
      url: `${baseUrl}/academia/cursos/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85
    });

    if (course.slug === 'calculadora-costeo') {
      courseRoutes.push({
        url: `${baseUrl}/academia/cursos/calculadora-costeo/herramienta`,
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

  // 5. Publicaciones del Centro de Conocimiento
  const publicationRoutes = [];
  Object.keys(registroIdi).forEach((slug) => {
    const pub = registroIdi[slug];
    if (pub.tipoIDI === 'I' || pub.tipoIDI === 'D') {
      publicationRoutes.push({
        url: `${baseUrl}/centro-conocimiento/publicaciones/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.75
      });
    }
  });

  return [
    ...mainRoutes,
    ...labRoutes,
    ...courseRoutes,
    ...moduleRoutes,
    ...publicationRoutes
  ];
}
