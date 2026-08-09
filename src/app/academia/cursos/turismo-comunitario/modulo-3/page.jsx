import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import TheoryIntro from '../../../../../components/ui/interactivos/TheoryIntro';
import ComparisonCards from '../../../../../components/ui/interactivos/ComparisonCards';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import { modulo3Data } from '../../../../../data/cursos/curso-1/modulo-3';

export default function Modulo3Page() {
  const themeColor = "#d97706";
  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Turismo Comunitario"
      breadcrumbCourseUrl="/academia/cursos/turismo-comunitario"
      moduleTitle="Módulo 3"
      themeColor={themeColor}
      themeBgColor="#faf9f6"
    >
      <ModuleHero data={modulo3Data.header} themeColor={themeColor} />
      
      <TheoryIntro data={modulo3Data.intro} />

      <ComparisonCards data={modulo3Data.cases} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/turismo-comunitario/modulo-2"
        prevText="Módulo 2"
        nextUrl="/academia/cursos/turismo-comunitario/modulo-4"
        nextText="Módulo 4: Operación"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
