import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import TheoryIntro from '../../../../../components/ui/interactivos/TheoryIntro';
import DecisionSimulator from '../../../../../components/ui/interactivos/DecisionSimulator';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import { modulo5Data } from '../../../../../data/cursos/curso-1/modulo-5';

export default function Modulo5Page() {
  const themeColor = "#e11d48";
  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Turismo Comunitario"
      breadcrumbCourseUrl="/academia/cursos/turismo-comunitario"
      moduleTitle="Módulo 5"
      themeColor={themeColor}
      themeBgColor="#faf9f6"
    >
      <ModuleHero data={modulo5Data.header} themeColor={themeColor} />
      
      <TheoryIntro data={modulo5Data.intro} />

      <DecisionSimulator data={modulo5Data.simulator} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/turismo-comunitario/modulo-4"
        prevText="Módulo 4"
        nextUrl="/academia/cursos/turismo-comunitario/certificacion"
        nextText="Evaluación Final"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
