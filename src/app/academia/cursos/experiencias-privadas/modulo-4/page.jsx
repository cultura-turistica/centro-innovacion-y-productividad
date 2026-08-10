import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import AudioPodcast from '../../../../../components/ui/interactivos/AudioPodcast';
import AudienceSelector from '../../../../../components/ui/interactivos/AudienceSelector';
import { modulo4Data } from '../../../../../data/cursos/experiencias-privadas/modulo-4';

export default function Modulo4() {
  const themeColor = "#ef4444"; // Red 500

  const comparacionData = {
    left: {
      title: modulo4Data.comparacion.leftTitle,
      content: modulo4Data.comparacion.leftContent
    },
    right: {
      title: modulo4Data.comparacion.rightTitle,
      content: modulo4Data.comparacion.rightContent
    }
  };

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Experiencias Privadas"
      breadcrumbCourseUrl="/academia/cursos/experiencias-privadas"
      moduleTitle={modulo4Data.header.title}
      themeColor={themeColor}
    >
      <PhotoHero data={modulo4Data.header} themeColor={themeColor} />
      
      <div className="mb-12">
        <AudioPodcast data={modulo4Data.podcast} themeColor={themeColor} />
      </div>

      <InfoBlock data={{
        title: modulo4Data.intro.title,
        paragraphs: [modulo4Data.intro.content],
        theme: {
          gradient: "from-red-500 to-rose-500",
          icon: "Briefcase"
        }
      }} />

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Análisis Crítico</h3>
        <ComparisonBlock 
          data={comparacionData} 
          leftTheme="rose"
          rightTheme="slate"
        />
      </div>

      <div className="my-16">
        <AudienceSelector data={modulo4Data.ejercicio} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/experiencias-privadas/modulo-3"
        nextUrl="/academia/cursos/experiencias-privadas/modulo-5"
        courseUrl="/academia/cursos/experiencias-privadas"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
