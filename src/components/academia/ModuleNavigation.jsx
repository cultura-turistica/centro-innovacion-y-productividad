import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

export default function ModuleNavigation({ prevModule, nextModule, courseUrl }) {
  return (
    <div className="w-full border-t border-slate-200 mt-16 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Botón Anterior */}
      <div className="w-full md:w-1/3 flex justify-start">
        {prevModule ? (
          <Link 
            href={prevModule.url}
            className="group flex flex-col items-start px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all w-full max-w-sm"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-indigo-500 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </div>
            <span className="text-slate-800 font-bold group-hover:text-indigo-600 transition-colors text-left line-clamp-1">
              {prevModule.title}
            </span>
          </Link>
        ) : (
          <div className="w-full max-w-sm"></div> // Espaciador
        )}
      </div>

      {/* Botón Central (Syllabus/Catálogo) */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Link 
          href={courseUrl}
          className="flex flex-col items-center justify-center p-4 rounded-2xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          title="Volver al Temario del Curso"
        >
          <LayoutGrid className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Temario</span>
        </Link>
      </div>

      {/* Botón Siguiente */}
      <div className="w-full md:w-1/3 flex justify-end">
        {nextModule ? (
          <Link 
            href={nextModule.url}
            className="group flex flex-col items-end px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all w-full max-w-sm"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-indigo-500 transition-colors">
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-slate-800 font-bold group-hover:text-indigo-600 transition-colors text-right line-clamp-1">
              {nextModule.title}
            </span>
          </Link>
        ) : (
          <div className="w-full max-w-sm"></div> // Espaciador
        )}
      </div>
      
    </div>
  );
}
