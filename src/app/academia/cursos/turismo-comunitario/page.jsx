import React from 'react';
import CourseSyllabusLayout from '../../../../components/layout/CourseSyllabusLayout';
import { syllabusData } from '../../../../data/cursos/curso-1/syllabus';

export default function TurismoComunitarioSyllabus() {
  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor="#10b981" 
      themeBg="bg-[#faf9f6]" 
      selectionColor="selection:bg-emerald-100"
      baseUrl="/academia/cursos/turismo-comunitario" 
    />
  );
}
