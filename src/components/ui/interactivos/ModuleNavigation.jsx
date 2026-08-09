import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

export default function ModuleNavigation({ prevUrl, prevText, nextUrl, nextText, themeColor = "#2563eb" }) {
  return (
    <div className="w-full border-t border-slate-200 mt-16 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Botón Anterior */}
      <div className="w-full md:w-1/3 flex justify-start">
        {prevUrl ? (
          <Link 
            href={prevUrl}
            className="group flex flex-col items-start px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all w-full max-w-sm"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 transition-colors" style={{ color: themeColor }}>
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </div>
            <span className="text-slate-800 font-bold transition-colors text-left line-clamp-1">
              {prevText}
            </span>
          </Link>
        ) : (
          <div className="w-full max-w-sm"></div>
        )}
      </div>

      {/* Botón Central */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Link 
          href="/academia/cursos/diseno-producto"
          className="flex flex-col items-center justify-center p-4 rounded-2xl text-slate-500 hover:bg-slate-50 transition-colors"
          style={{ color: themeColor }}
        >
          <LayoutGrid className="w-6 h-6 mb-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Temario</span>
        </Link>
      </div>

      {/* Botón Siguiente */}
      <div className="w-full md:w-1/3 flex justify-end">
        {nextUrl ? (
          <Link 
            href={nextUrl}
            className="group flex flex-col items-end px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all w-full max-w-sm text-right"
          >
            <div className="flex items-center justify-end gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 transition-colors" style={{ color: themeColor }}>
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-slate-800 font-bold transition-colors line-clamp-1">
              {nextText}
            </span>
          </Link>
        ) : (
          <div className="w-full max-w-sm"></div>
        )}
      </div>

    </div>
  );
}
