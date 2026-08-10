import React from 'react';
import CourseSyllabusLayout from '../../../../components/layout/CourseSyllabusLayout';
import { syllabusData } from '../../../../data/cursos/experiencias-privadas/syllabus';

export default function ExperienciasPrivadasSyllabus() {
  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor="#1e40af" 
      themeBg="bg-[#eff6ff]" 
      selectionColor="selection:bg-blue-200"
      baseUrl="/academia/cursos/experiencias-privadas" 
    />
  );
}
