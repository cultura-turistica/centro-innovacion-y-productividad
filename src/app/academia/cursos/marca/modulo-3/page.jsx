import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import ColorPsychologyLab from '../../../../../components/ui/interactivos/ColorPsychologyLab';
import { modulo3Data } from '../../../../../data/cursos/marca/modulo-3';

export default function MarcaModulo3() {
  const themeColor = "#e11d48"; // Rose 600

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Diseño de Marca"
      breadcrumbCourseUrl="/academia/cursos/marca"
      moduleTitle="Módulo 3: Psicología del Color"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo3Data.header} themeColor={themeColor} />

      <div className="py-12">
        <ColorPsychologyLab data={modulo3Data} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/marca/modulo-2"
        nextUrl="/academia/cursos/marca/modulo-4"
        courseUrl="/academia/cursos/marca"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
