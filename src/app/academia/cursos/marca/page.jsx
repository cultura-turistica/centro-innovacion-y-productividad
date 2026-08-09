import React from 'react';
import CourseSyllabusLayout from '../../../../components/layout/CourseSyllabusLayout';
import { syllabusData } from '../../../../data/cursos/marca/syllabus';

export default function MarcaSyllabus() {
  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor="#e11d48" // rose-600
      themeBg="bg-[#faf9f6]" 
      selectionColor="selection:bg-rose-100"
      baseUrl="/academia/cursos/marca" 
    />
  );
}
