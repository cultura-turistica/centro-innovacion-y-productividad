import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import StoryboardCards from '../../../../../components/ui/interactivos/StoryboardCards';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import { modulo3Data } from '../../../../../data/cursos/curso-2/modulo-3';

export default function Modulo3Page() {
  const themeColor = "#f97316"; // Naranja
  const { header, cine, sentidos, storyboard } = modulo3Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <InfoBlock data={cine} themeColor={themeColor} />

      <GridBlock data={sentidos} themeColor={themeColor} themeBg="bg-orange-50" themeBorder="border-orange-200" />

      <StoryboardCards data={storyboard} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-2"
        prevText="Módulo 2"
        nextUrl="/academia/cursos/diseno-producto/modulo-4"
        nextText="Módulo 4: Consumo"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
