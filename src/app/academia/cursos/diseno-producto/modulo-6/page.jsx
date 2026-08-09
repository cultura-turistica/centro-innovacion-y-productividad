import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import ProductSheet from '../../../../../components/ui/interactivos/ProductSheet';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import StepList from '../../../../../components/ui/interactivos/StepList';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import { modulo6Data } from '../../../../../data/cursos/curso-2/modulo-6';

export default function Modulo6Page() {
  const themeColor = "#0f766e"; // Teal
  const { header, ensayo, ficha, protocolo, tecnicas } = modulo6Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <InfoBlock data={ensayo} themeColor={themeColor} />

      <ProductSheet data={ficha} themeColor={themeColor} />

      <StepList data={protocolo} themeColor={themeColor} />

      <GridBlock data={tecnicas} themeColor={themeColor} themeBg="bg-teal-50" themeBorder="border-teal-200" />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-5"
        prevText="Módulo 5"
        nextUrl="/academia/cursos/diseno-producto/modulo-7"
        nextText="Módulo 7: Empaquetamiento"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
