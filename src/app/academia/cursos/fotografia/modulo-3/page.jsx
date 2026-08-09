import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import PhotoGallery from '../../../../../components/ui/interactivos/PhotoGallery';
import { modulo3Data } from '../../../../../data/cursos/fotografia/modulo-3';

export default function FotografiaModulo3() {
  const themeColor = "#065f46"; // Emerald 800

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 3: Configuración y Flujo"
      themeColor={themeColor}
    >
      <PhotoHero data={modulo3Data.header} themeColor={themeColor} />

      <GridBlock data={modulo3Data.workflow} themeColor={themeColor} columns={4} />

      <PhotoGallery data={modulo3Data.rawVsJpeg} themeColor={themeColor} />
      
      <InfoBlock data={modulo3Data.metadata} />
      
      <InfoBlock data={modulo3Data.burstMode} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/fotografia/modulo-2"
        nextUrl="/academia/cursos/fotografia/modulo-4"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
