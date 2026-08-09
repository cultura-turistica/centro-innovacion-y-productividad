import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import TheoryIntro from '../../../../../components/ui/interactivos/TheoryIntro';
import MatchGame from '../../../../../components/ui/interactivos/MatchGame';
import NodeChain from '../../../../../components/ui/interactivos/NodeChain';
import FeatureImage from '../../../../../components/ui/interactivos/FeatureImage';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import { modulo4Data } from '../../../../../data/cursos/curso-1/modulo-4';

export default function Modulo4Page() {
  const themeColor = "#4f46e5";
  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Turismo Comunitario"
      breadcrumbCourseUrl="/academia/cursos/turismo-comunitario"
      moduleTitle="Módulo 4"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo4Data.header} themeColor={themeColor} />
      
      <TheoryIntro data={modulo4Data.intro} />

      <FeatureImage data={modulo4Data.feature} />

      <AudioPodcast 
        title={modulo4Data.podcast.title}
        subtitle={modulo4Data.podcast.subtitle}
        audioSrc={modulo4Data.podcast.audioSrc}
        transcript={modulo4Data.podcast.transcript}
        themeColor={themeColor}
      />

      <NodeChain data={modulo4Data.nodeChain} />

      <MatchGame data={modulo4Data.matchGame} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/turismo-comunitario/modulo-3"
        prevText="Módulo 3"
        nextUrl="/academia/cursos/turismo-comunitario/modulo-5"
        nextText="Módulo 5: Mercadeo"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
