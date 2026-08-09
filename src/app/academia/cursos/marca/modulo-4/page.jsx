import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import TypographyTester from '../../../../../components/ui/interactivos/TypographyTester';
import { modulo4Data } from '../../../../../data/cursos/marca/modulo-4';

export default function MarcaModulo4() {
  const themeColor = "#e11d48"; // Rose 600

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Diseño de Marca"
      breadcrumbCourseUrl="/academia/cursos/marca"
      moduleTitle="Módulo 4: Tipografía"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo4Data.header} themeColor={themeColor} />

      <div className="py-12">
        <TypographyTester data={modulo4Data} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/marca/modulo-3"
        nextUrl="/academia/cursos/marca/modulo-5"
        courseUrl="/academia/cursos/marca"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
