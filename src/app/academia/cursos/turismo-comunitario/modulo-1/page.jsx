import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import InteractivePillars from '../../../../../components/ui/interactivos/InteractivePillars';
import ReflectionTabs from '../../../../../components/ui/interactivos/ReflectionTabs';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import { modulo1Data } from '../../../../../data/cursos/curso-1/modulo-1';

export default function Modulo1Page() {
  const themeColor = "#4f46e5";
  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Turismo Comunitario"
      breadcrumbCourseUrl="/academia/cursos/turismo-comunitario"
      moduleTitle="Módulo 1"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo1Data.header} themeColor={themeColor} />
      
      <AudioPodcast 
        title={modulo1Data.podcast.title}
        subtitle={modulo1Data.podcast.subtitle}
        audioSrc={modulo1Data.podcast.audioSrc}
        transcript={modulo1Data.podcast.transcript}
        themeColor={themeColor}
      />

      <InteractivePillars data={modulo1Data.pillars} />

      <ReflectionTabs data={modulo1Data.tabs} />

      <ModuleNavigation 
        nextUrl="/academia/cursos/turismo-comunitario/modulo-2"
        nextText="Módulo 2: Sostenibilidad Rural"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
