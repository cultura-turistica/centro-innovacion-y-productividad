import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import PhotoHero from '../../../../../components/ui/interactivos/PhotoHero';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import AudioPodcast from '../../../../../components/ui/interactivos/AudioPodcast';
import ValueFormulaBuilder from '../../../../../components/ui/interactivos/ValueFormulaBuilder';
import { modulo2Data } from '../../../../../data/cursos/experiencias-privadas/modulo-2';

export default function Modulo2() {
  const themeColor = "#d946ef"; // Fuchsia 500

  const dimensionesGrid = {
    items: modulo2Data.dimensiones.map((dim, idx) => ({
      title: dim.title,
      description: `<strong>${dim.subtitle}</strong><br/>${dim.content}`,
      icon: idx === 0 ? "Settings" : idx === 1 ? "Heart" : "Users",
      iconColor: themeColor
    }))
  };

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Experiencias Privadas"
      breadcrumbCourseUrl="/academia/cursos/experiencias-privadas"
      moduleTitle={modulo2Data.header.title}
      themeColor={themeColor}
    >
      <PhotoHero data={modulo2Data.header} themeColor={themeColor} />
      
      <div className="mb-12">
        <AudioPodcast data={modulo2Data.podcast} themeColor={themeColor} />
      </div>

      <InfoBlock data={{
        title: modulo2Data.intro.title,
        paragraphs: [modulo2Data.intro.content],
        theme: {
          gradient: "from-fuchsia-500 to-purple-500",
          icon: "Target"
        }
      }} />

      <div className="my-16">
        <h3 className="text-center text-3xl font-black text-slate-800 mb-10">Las 3 Dimensiones del Valor</h3>
        <GridBlock data={dimensionesGrid} themeColor={themeColor} columns={3} />
      </div>

      <div className="my-16">
        <ValueFormulaBuilder data={modulo2Data.ejercicio} themeColor={themeColor} />
      </div>

      <ModuleNavigation 
        prevUrl="/academia/cursos/experiencias-privadas/modulo-1"
        nextUrl="/academia/cursos/experiencias-privadas/modulo-3"
        courseUrl="/academia/cursos/experiencias-privadas"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
