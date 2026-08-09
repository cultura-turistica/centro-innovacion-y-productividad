import React from 'react';
import CourseSyllabusLayout from '../../../../components/layout/CourseSyllabusLayout';
import { syllabusData } from '../../../../data/cursos/curso-2/syllabus';

export default function Curso2Syllabus() {
  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor="#16a34a" 
      themeBg="bg-[#f0fdf4]" 
      selectionColor="selection:bg-green-100"
      baseUrl="/academia/cursos/diseno-producto" 
    />
  );
}
