import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import AudioPodcast from '../../../../../components/ui/interactivos/AudioPodcast';
import InteractiveCaseStudy from '../../../../../components/ui/interactivos/InteractiveCaseStudy';
import InterviewSimulator from '../../../../../components/ui/interactivos/InterviewSimulator';
import { modulo1Data } from '../../../../../data/cursos/experiencias-privadas/modulo-1';

export default function Modulo1() {
  const themeColor = "#2563eb"; // Azul vibrante (themeColor)

  const comparacionData = {
    left: {
      title: modulo1Data.comparacion.leftTitle,
      content: modulo1Data.comparacion.leftContent
    },
    right: {
      title: modulo1Data.comparacion.rightTitle,
      content: modulo1Data.comparacion.rightContent
    }
  };

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Experiencias Privadas"
      breadcrumbCourseUrl="/academia/cursos/experiencias-privadas"
      moduleTitle={modulo1Data.header.title}
      themeColor={themeColor}
    >
      <PhotoHero data={modulo1Data.header} themeColor={themeColor} />
      
      <div className="mb-12">
        <AudioPodcast data={modulo1Data.podcast} themeColor={themeColor} />
      </div>

      <InfoBlock data={{
        title: modulo1Data.intro.title,
        paragraphs: [modulo1Data.intro.content],
        theme: {
          gradient: "from-blue-500 to-cyan-500",
          icon: "Lightbulb"
        }
      }} />

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Paradigma de Investigación</h3>
        <ComparisonBlock 
          data={comparacionData} 
          leftTheme="rose"
          rightTheme="emerald"
        />
      </div>

      <div className="my-16">
        <InteractiveCaseStudy data={modulo1Data.casoReal} themeColor={themeColor} />
      </div>

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Simulador de Entrevista de Valor</h3>
        <InterviewSimulator data={modulo1Data.ejercicio} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl={null}
        nextUrl="/academia/cursos/experiencias-privadas/modulo-2"
        courseUrl="/academia/cursos/experiencias-privadas"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
