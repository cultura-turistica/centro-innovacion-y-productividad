import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import ArchetypeMatcher from '../../../../../components/ui/interactivos/ArchetypeMatcher';
import { modulo2Data } from '../../../../../data/cursos/marca/modulo-2';

export default function MarcaModulo2() {
  const themeColor = "#e11d48"; // Rose 600

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Diseño de Marca"
      breadcrumbCourseUrl="/academia/cursos/marca"
      moduleTitle="Módulo 2: Arquetipos"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo2Data.header} themeColor={themeColor} />

      <div className="py-12">
        <ArchetypeMatcher data={modulo2Data} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/marca/modulo-1"
        nextUrl="/academia/cursos/marca/modulo-3"
        courseUrl="/academia/cursos/marca"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
