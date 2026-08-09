import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import PhotoGallery from '../../../../../components/ui/interactivos/PhotoGallery';
import { modulo2Data } from '../../../../../data/cursos/fotografia/modulo-2';

import PhoneMockupBlock from '../../../../../components/ui/interactivos/PhoneMockupBlock';

export default function FotografiaModulo2() {
  const themeColor = "#312e81"; // Indigo 900 

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 2: La Cámara en tu Bolsillo"
      themeColor={themeColor}
    >
      <PhotoHero data={modulo2Data.header} themeColor={themeColor} />

      <GridBlock data={modulo2Data.anatomy} themeColor={themeColor} columns={3} />
      
      <InfoBlock data={{
        title: modulo2Data.proTip.title,
        paragraphs: modulo2Data.proTip.paragraphs
      }} />

      <PhotoGallery data={modulo2Data.classicVsModern} themeColor={themeColor} />

      <PhoneMockupBlock data={modulo2Data.accessories} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/fotografia/modulo-1"
        nextUrl="/academia/cursos/fotografia/modulo-3"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
