import React from 'react';
import CourseModuleLayout from '../../../../../components/layout/CourseModuleLayout';
import ModuleNavigation from '../../../../../components/ui/interactivos/ModuleNavigation';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import CameraSimulator from '../../../../../components/ui/interactivos/CameraSimulator';
import { modulo6Data } from '../../../../../data/cursos/fotografia/modulo-6';

export default function FotografiaModulo6() {
  const themeColor = "#6366f1"; // Indigo 500

  return (
    <CourseModuleLayout 
      breadcrumbCourseTitle="Fundamentos y Composición"
      breadcrumbCourseUrl="/academia/cursos/fotografia"
      moduleTitle="Módulo 6: Simulador Manual"
      themeColor={themeColor}
    >
      <ModuleHero data={modulo6Data.header} themeColor={themeColor} />

      <CameraSimulator data={modulo6Data} themeColor={themeColor} />

      <ModuleNavigation 
        prevUrl="/academia/cursos/fotografia/modulo-5"
        nextUrl="/academia/cursos/fotografia/certificacion"
        courseUrl="/academia/cursos/fotografia"
        themeColor={themeColor}
      />
    </CourseModuleLayout>
  );
}
