import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import AudioPodcast from '../../../../../components/ui/interactivos/AudioPodcast';
import BottleneckSimulator from '../../../../../components/ui/interactivos/BottleneckSimulator';
import { modulo3Data } from '../../../../../data/cursos/experiencias-privadas/modulo-3';

export default function Modulo3() {
  const themeColor = "#f59e0b"; // Amber 500

  const comparacionData = {
    left: {
      title: modulo3Data.comparacion.leftTitle,
      content: modulo3Data.comparacion.leftContent
    },
    right: {
      title: modulo3Data.comparacion.rightTitle,
      content: modulo3Data.comparacion.rightContent
    }
  };

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Experiencias Privadas"
      breadcrumbCourseUrl="/academia/cursos/experiencias-privadas"
      moduleTitle={modulo3Data.header.title}
      themeColor={themeColor}
    >
      <PhotoHero data={modulo3Data.header} themeColor={themeColor} />
      
      <div className="mb-12">
        <AudioPodcast data={modulo3Data.podcast} themeColor={themeColor} />
      </div>

      <InfoBlock data={{
        title: modulo3Data.intro.title,
        paragraphs: [modulo3Data.intro.content],
        theme: {
          gradient: "from-amber-500 to-orange-500",
          icon: "Hammer"
        }
      }} />

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Técnicas de Validación</h3>
        <ComparisonBlock 
          data={comparacionData} 
          leftTheme="slate"
          rightTheme="emerald"
        />
      </div>

      <div className="my-16">
        <BottleneckSimulator data={modulo3Data.ejercicio} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/experiencias-privadas/modulo-2"
        nextUrl="/academia/cursos/experiencias-privadas/modulo-4"
        courseUrl="/academia/cursos/experiencias-privadas"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
