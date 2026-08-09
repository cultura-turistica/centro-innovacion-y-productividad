import React from 'react';
import { BookOpen, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CourseCard({ course }) {
  const isTool = course.info.toLowerCase().includes('herramienta');
  const Icon = isTool ? Wrench : BookOpen;
  
  // URL destino (por defecto '#' si no tiene slug, para evitar errores en cursos no implementados)
  const href = course.slug ? `/academia/cursos/${course.slug}` : '#';

  return (
    <Link href={href} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col h-full cursor-pointer text-left">
      <div className="flex items-start justify-between mb-6 gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full">
          {course.category}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium bg-slate-50 px-3 py-1.5 rounded-full whitespace-nowrap">
          <Icon className="w-3.5 h-3.5" />
          <span>{course.info}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
        {course.title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-8">
        {course.description}
      </p>
      
      <div className="text-sm font-semibold text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto border-t border-slate-100 pt-6">
        {course.action}
        <ArrowRight className="w-4 h-4 text-indigo-500" />
      </div>
    </Link>
  );
}
