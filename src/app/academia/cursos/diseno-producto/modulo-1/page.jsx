import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import ComparisonBlock from '../../../../../components/ui/interactivos/ComparisonBlock';
import { modulo1Data } from '../../../../../data/cursos/curso-2/modulo-1';

export default function Modulo1Page() {
  const themeColor = "#16a34a"; // Verde esmeralda
  const { header, podcast, restaurante, comparacion, error } = modulo1Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <AudioPodcast data={podcast} themeColor={themeColor} />

      <InfoBlock data={restaurante} themeColor={themeColor} />

      <ComparisonBlock data={comparacion} leftTheme="slate" rightTheme="emerald" />

      <InfoBlock data={error} variant="alert" />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto"
        prevText="Volver al Temario"
        nextUrl="/academia/cursos/diseno-producto/modulo-2"
        nextText="Módulo 2: Conocer al Visitante"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
