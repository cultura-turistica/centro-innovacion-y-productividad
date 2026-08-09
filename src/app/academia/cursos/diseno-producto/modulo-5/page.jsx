import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import GapMatrix from '../../../../../components/ui/interactivos/GapMatrix';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import { modulo5Data } from '../../../../../data/cursos/curso-2/modulo-5';

export default function Modulo5Page() {
  const themeColor = "#eab308"; // Amarillo/Dorado
  const { header, podcast, engranaje, grafico } = modulo5Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <AudioPodcast data={podcast} themeColor={themeColor} />

      <InfoBlock data={engranaje} themeColor={themeColor} />

      <GapMatrix data={grafico} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-4"
        prevText="Módulo 4"
        nextUrl="/academia/cursos/diseno-producto/modulo-6"
        nextText="Módulo 6: Ficha"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
