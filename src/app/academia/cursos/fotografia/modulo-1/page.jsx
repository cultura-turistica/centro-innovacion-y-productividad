import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import PhotoGallery from '../../../../../components/ui/interactivos/PhotoGallery';
import ArtQuote from '../../../../../components/ui/interactivos/ArtQuote';
import BeforeAfterSlider from '../../../../../components/ui/interactivos/BeforeAfterSlider';
import { modulo1Data } from '../../../../../data/cursos/fotografia/modulo-1';

export default function FotografiaModulo1() {
  const themeColor = "#0f172a"; // Slate 900 para estilo portafolio oscuro/elegante

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 1: Escribir con Luz"
      themeColor={themeColor}
    >
      <PhotoHero data={modulo1Data.header} themeColor={themeColor} />

      <InfoBlock data={modulo1Data.intro} />
      
      <ArtQuote quote={modulo1Data.intro.quote} themeColor={themeColor} />

      <GridBlock data={modulo1Data.hardware} themeColor={themeColor} columns={2} />

      <PhotoGallery data={modulo1Data.exposureTriangle} themeColor={themeColor} />

      {modulo1Data.sliders && modulo1Data.sliders.map(slider => (
        <div key={slider.id} className="my-16">
          <h3 className="text-center text-2xl font-bold text-slate-800 mb-8">{slider.title}</h3>
          <BeforeAfterSlider {...slider} />
        </div>
      ))}

      <InfoBlock data={{
        title: modulo1Data.proTip.title,
        paragraphs: [modulo1Data.proTip.description]
      }} />

      <ModuleNavigation 
        prevUrl={null}
        nextUrl="/academia/cursos/fotografia/modulo-2"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
