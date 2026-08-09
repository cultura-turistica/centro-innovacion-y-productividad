import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import EmpathyMap from '../../../../../components/ui/interactivos/EmpathyMap';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import CaseBlock from '../../../../../components/ui/interactivos/CaseBlock';
import { modulo2Data } from '../../../../../data/cursos/curso-2/modulo-2';

export default function Modulo2Page() {
  const themeColor = "#2563eb"; // Azul para Modulo 2
  const { header, podcast, sastre, empatia, caso, incompatibilidad } = modulo2Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <AudioPodcast data={podcast} themeColor={themeColor} />

      <InfoBlock data={sastre} themeColor={themeColor} />

      <EmpathyMap data={empatia} themeColor={themeColor} />

      <CaseBlock data={caso} themeColor={themeColor} themeBg="bg-blue-50" themeBorder="border-blue-200" />

      <InfoBlock data={incompatibilidad} variant="alert" />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-1"
        prevText="Módulo 1"
        nextUrl="/academia/cursos/diseno-producto/modulo-3"
        nextText="Módulo 3: El Guión de la Experiencia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
