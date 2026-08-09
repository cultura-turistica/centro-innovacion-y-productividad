import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import TheoryIntro from '../../../../../components/ui/interactivos/TheoryIntro';
import ActionAccordion from '../../../../../components/ui/interactivos/ActionAccordion';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import { modulo2Data } from '../../../../../data/cursos/curso-1/modulo-2';

export default function Modulo2Page() {
  const themeColor = "#059669"; // Emerald 600
  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Turismo Comunitario"
      breadcrumbCourseUrl="/academia/cursos/turismo-comunitario"
      moduleTitle="Módulo 2"
      themeColor={themeColor}
      themeBgColor="#faf9f6"
    >
      <ModuleHero data={modulo2Data.header} themeColor={themeColor} />
      
      <TheoryIntro data={modulo2Data.intro} />

      <ActionAccordion data={modulo2Data.accordion} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/turismo-comunitario/modulo-1"
        prevText="Módulo 1"
        nextUrl="/academia/cursos/turismo-comunitario/modulo-3"
        nextText="Módulo 3: Planificación"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
