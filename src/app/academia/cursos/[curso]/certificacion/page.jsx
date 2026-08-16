import React from 'react';
import { notFound } from 'next/navigation';
import CourseCertificationLayout from '../../../../../components/layout/CourseCertificationLayout';
import { getCourseConfig } from '../../../../../data/courseRegistry';

export async function generateMetadata({ params }) {
  const { curso } = await params;
  const config = getCourseConfig(curso);
  if (!config) return { title: 'Certificación no encontrada' };
  
  return {
    title: `Certificación: ${config.title} | CIP Next`,
    description: `Obtén tu certificado oficial del curso ${config.title}.`
  };
}

export async function generateStaticParams() {
  const { catalogoData } = await import('../../../../../data/cursos/catalogo');
  return catalogoData.courses.map(course => ({ curso: course.slug }));
}

export default async function DynamicCertificationPage({ params }) {
  const { curso } = await params;
  const config = getCourseConfig(curso);

  if (!config) {
    return notFound();
  }

  let certificacionData = null;
  try {
    const certModule = await import(`../../../../../data/cursos/${curso}/certificacion`);
    certificacionData = certModule.certificacionData;
  } catch (error) {
    console.error(`Certificacion data not found for course: ${curso}`);
    return notFound();
  }

  // Use the certification theme from the course registry if available
  const themeObj = config.certTheme || {
    selection: `selection:bg-slate-200`,
    hoverText: `hover:text-slate-600`,
    textHighlight: `text-slate-600`,
    primaryBg: `bg-slate-900`,
    blurPrimary: `bg-slate-500/20`,
    blurSecondary: `bg-slate-500/20`,
    badgeBg: `bg-slate-800/50`,
    badgeText: `text-slate-300`,
    badgeBorder: `border-slate-700`,
    textLight: `text-slate-100`,
    btnText: `text-slate-950`,
    themeColorHex: config.themeColor
  };

  return (
    <CourseCertificationLayout
      data={certificacionData}
      courseUrl={`/academia/cursos/${curso}`}
      breadcrumbTitle={config.title}
      theme={themeObj}
    />
  );
}
