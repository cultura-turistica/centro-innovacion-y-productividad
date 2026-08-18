import React from 'react';
import { notFound } from 'next/navigation';
import CourseSyllabusLayout from '@/components/layout/CourseSyllabusLayout';
import { getCourseConfig } from '@/data/courseRegistry';

export async function generateMetadata({ params }) {
  const { curso } = await params;
  const config = getCourseConfig(curso);
  if (!config) return { title: 'Curso no encontrado' };
  return {
    title: `${config.title} | CIP Next`,
    description: config.description
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

  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor={config.themeColor} 
      themeBg={config.themeBg} 
      selectionColor={`selection:${config.themeBg.replace('bg-', 'bg-')}`} // Simplistic approximation
      baseUrl={`/academia/cursos/${curso}`} 
    />
  );
}
