import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import PhotoGallery from '../../../../../components/ui/interactivos/PhotoGallery';
import { modulo5Data } from '../../../../../data/cursos/fotografia/modulo-5';

export default function FotografiaModulo5() {
  const themeColor = "#0f766e"; // Teal 700

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 5: Encuadre y Composición"
      themeColor={themeColor}
    >
      <PhotoHero data={modulo5Data.header} themeColor={themeColor} />

      <InfoBlock data={modulo5Data.theFrame} />

      <GridBlock data={modulo5Data.orientation} themeColor={themeColor} columns={2} />
      
      <PhotoGallery data={modulo5Data.compositionRules} themeColor={themeColor} />

      <InfoBlock data={{
        title: modulo5Data.proTip.title,
        paragraphs: modulo5Data.proTip.paragraphs
      }} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/fotografia/modulo-4"
        nextUrl="/academia/cursos/fotografia/modulo-6"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
