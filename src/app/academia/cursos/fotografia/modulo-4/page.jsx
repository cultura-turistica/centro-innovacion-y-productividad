import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import PhotoGallery from '../../../../../components/ui/interactivos/PhotoGallery';
import { modulo4Data } from '../../../../../data/cursos/fotografia/modulo-4';

export default function FotografiaModulo4() {
  const themeColor = "#be185d"; // Pink 700

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 4: El Arte de Mirar"
      themeColor={themeColor}
    >
      <PhotoHero data={modulo4Data.header} themeColor={themeColor} />

      <PhotoGallery data={modulo4Data.vantagePoint} themeColor={themeColor} />
      
      <PhotoGallery data={modulo4Data.framing} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/fotografia/modulo-3"
        nextUrl="/academia/cursos/fotografia/modulo-5"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
