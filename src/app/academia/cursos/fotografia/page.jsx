import React from 'react';
import CourseSyllabusLayout from '../../../../components/layout/CourseSyllabusLayout';
import { syllabusData } from '../../../../data/cursos/fotografia/syllabus';

export default function FotografiaSyllabus() {
  return (
    <CourseSyllabusLayout 
      data={syllabusData} 
      themeColor="#0f172a" 
      themeBg="bg-[#faf9f6]" 
      selectionColor="selection:bg-slate-200"
      baseUrl="/academia/cursos/fotografia" 
    />
  );
}
