import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import InteractiveVectorScene from '../../../../../components/ui/interactivos/InteractiveVectorScene';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import InfoBlock from '../../../../../components/ui/interactivos/InfoBlock';
import GridBlock from '../../../../../components/ui/interactivos/GridBlock';
import QuizExercise from '../../../../../components/ui/interactivos/QuizExercise';
import { modulo4Data } from '../../../../../data/cursos/curso-2/modulo-4';

export default function Modulo4Page() {
  const themeColor = "#0f766e"; // Teal (basado en el original)
  const { header, escenografia, dimensiones, ejercicio, check } = modulo4Data;

  return (
    <CourseModuleLayout
      breadcrumbCourseTitle="Curso Diseño de Producto"
      breadcrumbCourseUrl="/academia/cursos/diseno-producto"
      moduleTitle={header.title}
      themeColor={themeColor}
    >
      <ModuleHero data={header} themeColor={themeColor} />
      
      <InteractiveVectorScene />

      <InfoBlock data={escenografia} themeColor={themeColor} />

      <GridBlock data={dimensiones} themeColor={themeColor} themeBg="bg-white" themeBorder="border-transparent" />

      <QuizExercise data={ejercicio} themeColor={themeColor} themeBg="bg-teal-900" />

      <InfoBlock data={check} variant="alert" />

      <ModuleNavigation 
        prevUrl="/academia/cursos/diseno-producto/modulo-3"
        prevText="Módulo 3: El Guión de la Experiencia"
        nextUrl="/academia/cursos/diseno-producto/modulo-5"
        nextText="Módulo 5: Cadena de Valor"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
