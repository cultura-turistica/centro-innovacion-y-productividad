import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import AudioPodcast from '../../../../../components/ui/interactivos/AudioPodcast';
import InteractiveCaseStudy from '../../../../../components/ui/interactivos/InteractiveCaseStudy';
import MatrizPriorizacion from '../../../../../components/ui/interactivos/MatrizPriorizacion';
import { modulo5Data } from '../../../../../data/cursos/experiencias-privadas/modulo-5';

export default function Modulo5() {
  const themeColor = "#10b981"; // Emerald 500

  const comparacionData = {
    left: {
      title: modulo5Data.comparacion.leftTitle,
      content: modulo5Data.comparacion.leftContent
    },
    right: {
      title: modulo5Data.comparacion.rightTitle,
      content: modulo5Data.comparacion.rightContent
    }
  };

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Experiencias Privadas"
      breadcrumbCourseUrl="/academia/cursos/experiencias-privadas"
      moduleTitle={modulo5Data.header.title}
      themeColor={themeColor}
    >
      <PhotoHero data={modulo5Data.header} themeColor={themeColor} />
      
      <div className="mb-12">
        <AudioPodcast data={modulo5Data.podcast} themeColor={themeColor} />
      </div>

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Sense & Respond</h3>
        <ComparisonBlock 
          data={comparacionData} 
          leftTheme="slate"
          rightTheme="emerald"
        />
      </div>

      <div className="my-16">
        <InteractiveCaseStudy data={modulo5Data.casoReal} themeColor={themeColor} />
      </div>

      <div className="my-16">
        <MatrizPriorizacion data={modulo5Data.ejercicio} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/experiencias-privadas/modulo-4"
        nextUrl="/academia/cursos/experiencias-privadas/certificacion"
        courseUrl="/academia/cursos/experiencias-privadas"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
