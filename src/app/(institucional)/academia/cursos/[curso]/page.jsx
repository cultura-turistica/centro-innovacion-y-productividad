import React from 'react';
import { notFound } from 'next/navigation';
import CourseSyllabusLayout from '@/components/layout/CourseSyllabusLayout';
import { getCourseConfig } from '@/data/courseRegistry';

export async function generateMetadata({ params }) {
  const { curso } = await params;
  const config = getCourseConfig(curso);
  if (!config) return { title: 'Curso no encontrado' };

  let syllabusData = null;
  try {
    const syllabusModule = await import(`@/data/cursos/${curso}/syllabus`);
    syllabusData = syllabusModule.syllabusData;
  } catch (e) {
    // ignore
  }

  const coverImage = syllabusData?.sidebar?.video?.coverImage || '/assets/images/portada_propuesta.webp';

  return {
    title: `${config.title} | CIP`,
    description: config.description,
    alternates: {
      canonical: `https://cip.cultura-t.com/academia/cursos/${curso}`,
    },
    openGraph: {
      title: `${config.title} | CIP`,
      description: config.description,
      url: `https://cip.cultura-t.com/academia/cursos/${curso}`,
      siteName: 'Centro de Innovación y Productividad Cultura T',
      locale: 'es_CO',
      type: 'website',
      images: [
        {
          url: `https://cip.cultura-t.com${coverImage}`,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.title} | CIP`,
      description: config.description,
      images: [`https://cip.cultura-t.com${coverImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  const { catalogoData } = await import('@/data/cursos/catalogo');
  return catalogoData.courses.map(course => ({ curso: course.slug }));
}

export default async function DynamicSyllabusPage({ params }) {
  const { curso } = await params;
  const config = getCourseConfig(curso);

  if (!config) {
    return notFound();
  }

  let syllabusData = null;
  try {
    const syllabusModule = await import(`@/data/cursos/${curso}/syllabus`);
    syllabusData = syllabusModule.syllabusData;
  } catch (error) {
    console.error(`Syllabus data not found for course: ${curso}`);
    return notFound();
  }

  // Generación dinámica de Schema.org estructurado para rastreadores (Googlebot / Bingbot)
  const modulesList = (syllabusData.modules || syllabusData.syllabus || []).map((m) => ({
    '@type': 'Course',
    name: m.title || `Módulo ${m.id}`,
    description: m.description || '',
    timeRequired: m.duration || m.time || 'PT20M',
  }));

  const graphItems = [
    {
      '@type': 'Course',
      name: config.title,
      description: config.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Centro de Innovación y Productividad Cultura T',
        url: 'https://cip.cultura-t.com',
      },
      timeRequired: curso === 'propuesta-valor' ? 'PT2H' : 'PT3H',
      isAccessibleForFree: true,
      inLanguage: 'es',
      hasPart: modulesList,
    },
  ];

  if (curso === 'propuesta-valor') {
    graphItems.push(
      {
        '@type': 'VideoObject',
        name: 'Propuesta de Valor - Introducción y Metodología Oficial',
        description: 'Metodología de Alexander Osterwalder (Strategyzer) para crear experiencias de turismo y cultura con encaje de mercado.',
        thumbnailUrl: ['https://img.youtube.com/vi/I4wFG7PGg4g/maxresdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=I4wFG7PGg4g',
        embedUrl: 'https://www.youtube.com/embed/I4wFG7PGg4g',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 1: El Lienzo del Cliente - Trabajos, Dolores y Alegrías',
        description: 'Descubre los trabajos funcionales, sociales y emocionales del visitante antes de diseñar tu solución.',
        thumbnailUrl: ['https://img.youtube.com/vi/RDiJO7afNTc/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=RDiJO7afNTc',
        embedUrl: 'https://www.youtube.com/embed/RDiJO7afNTc',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 2: El Mapa de Valor y los 3 Encajes - Solución, Mercado y Negocio',
        description: 'Conecta tu oferta con los dolores reales, valida con la multitud orgánica en el mercado y estructura un modelo de negocio rentable.',
        thumbnailUrl: ['https://img.youtube.com/vi/Cdok6lb5O_0/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=Cdok6lb5O_0',
        embedUrl: 'https://www.youtube.com/embed/Cdok6lb5O_0',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 3: Probar sin Quebrar - Experimentos Lean',
        description: 'Protege tu capital de inversión ejecutando experimentos rápidos y económicos de $200 USD antes de construir infraestructura costosa.',
        thumbnailUrl: ['https://img.youtube.com/vi/coTyxfvqpgY/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=coTyxfvqpgY',
        embedUrl: 'https://www.youtube.com/embed/coTyxfvqpgY',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 4: El Filtro de Feedback y el Pivote Estratégico',
        description: 'Aprende cuándo decir SÍ a un dolor real y cuándo decir NO con firmeza a sugerencias fuera de foco que arruinan tu propuesta de valor.',
        thumbnailUrl: ['https://img.youtube.com/vi/VyEzitobXAc/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=VyEzitobXAc',
        embedUrl: 'https://www.youtube.com/embed/VyEzitobXAc',
      }
    );
  } else if (syllabusData.sidebar?.video?.youtubeId) {
    const yId = syllabusData.sidebar.video.youtubeId;
    graphItems.push({
      '@type': 'VideoObject',
      name: `Video Explicativo: ${config.title}`,
      description: config.description,
      thumbnailUrl: [`https://img.youtube.com/vi/${yId}/hqdefault.jpg`],
      uploadDate: '2026-09-01T08:00:00-05:00',
      contentUrl: `https://www.youtube.com/watch?v=${yId}`,
      embedUrl: `https://www.youtube.com/embed/${yId}`,
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseSyllabusLayout 
        data={syllabusData} 
        themeColor={config.themeColor} 
        themeBg={config.themeBg} 
        selectionColor={`selection:${config.themeBg.replace('bg-', 'bg-')}`}
        baseUrl={`/academia/cursos/${curso}`} 
      />
    </>
  );
}

