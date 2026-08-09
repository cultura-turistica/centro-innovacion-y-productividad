import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import MentorGuide from '../../../../../components/ui/interactivos/MentorGuide';
import ComparisonCards from '../../../../../components/ui/interactivos/ComparisonCards';
import ArtQuote from '../../../../../components/ui/interactivos/ArtQuote';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import { modulo1Data } from '../../../../../data/cursos/marca/modulo-1';

export default function MarcaModulo1() {
  const themeColor = "#e11d48"; // Rose 600

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Diseño de Marca"
      breadcrumbCourseUrl="/academia/cursos/marca"
      moduleTitle="Módulo 1: Identidad vs Imagen"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo1Data.header} themeColor={themeColor} />

      <MentorGuide data={modulo1Data.content.mentor} themeColor={themeColor} />

      {/* Tarjetas de Comparación Interactivas */}
      <ComparisonCards data={modulo1Data.content.comparisonData} />

      {/* Cita Inspiradora */}
      <ArtQuote quote={modulo1Data.content.quote.quote} author={modulo1Data.content.quote.author} role={modulo1Data.content.quote.role} themeColor={themeColor} />

      {/* Grilla visual de elementos */}
      <div className="pb-16 max-w-5xl mx-auto -mt-8 relative z-10">
        <GridBlock data={modulo1Data.content.gridData} themeColor={themeColor} themeBg="bg-white" themeBorder="border-slate-100" columns={3} />
      </div>

      <ModuleNavigation 
        prevUrl={null}
        nextUrl="/academia/cursos/marca/modulo-2"
        courseUrl="/academia/cursos/marca"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
