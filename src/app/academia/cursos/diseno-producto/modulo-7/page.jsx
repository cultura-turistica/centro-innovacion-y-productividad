import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PairMatchGame from '../../../../../components/ui/interactivos/PairMatchGame';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import StepList from '../../../../../components/ui/interactivos/StepList';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import { modulo7Data } from '../../../../../data/cursos/curso-2/modulo-7';

export default function Modulo7Page() {
  const themeColor = "#8b5cf6"; // Morado
  const { header, podcast, gps, smart, puzzle, seguimiento } = modulo7Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <AudioPodcast data={podcast} themeColor={themeColor} />

      <InfoBlock data={gps} themeColor={themeColor} />

      <StepList data={smart} themeColor={themeColor} themeBg="bg-violet-900" />

      <PairMatchGame data={puzzle} themeColor={themeColor} />

      <ComparisonBlock data={seguimiento} leftTheme="slate" rightTheme="slate" />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-6"
        prevText="Módulo 6"
        nextUrl="/academia/cursos/diseno-producto/certificacion"
        nextText="Evaluación Final"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
