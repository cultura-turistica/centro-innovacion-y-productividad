import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import ToneBuilder from '../../../../../components/ui/interactivos/ToneBuilder';
import { modulo5Data } from '../../../../../data/cursos/marca/modulo-5';

export default function MarcaModulo5() {
  const themeColor = "#e11d48"; // Rose 600

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Diseño de Marca"
      breadcrumbCourseUrl="/academia/cursos/marca"
      moduleTitle="Módulo 5: Voz y Tono"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo5Data.header} themeColor={themeColor} />

      <div className="py-12">
        <ToneBuilder data={modulo5Data} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/marca/modulo-4"
        nextUrl="/academia/cursos/marca/certificacion"
        courseUrl="/academia/cursos/marca"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
