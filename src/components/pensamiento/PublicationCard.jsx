import React from 'react';
import { FileText, Download } from 'lucide-react';

export default function PublicationCard({ publication }) {
  return (
    <div className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      
      {/* Icono decorativo estilo Paper */}
      <div className="hidden md:flex flex-shrink-0 w-16 h-20 bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-200 transition-colors">
        <FileText className="w-8 h-8" strokeWidth={1.5} />
      </div>

      <div className="flex-1 flex flex-col w-full h-full">
        {/* Metadatos superiores */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
            {publication.category}
          </span>
          <span className="text-sm font-semibold text-slate-400">
            {publication.date}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors leading-tight">
          {publication.title}
        </h3>

        {/* Descripción */}
        <p className="text-slate-600 mb-5 leading-relaxed">
          {publication.description}
        </p>

        {/* Autores */}
        <div className="mt-auto">
          <div className="text-sm font-medium text-slate-500 mb-6 border-l-2 border-slate-200 pl-3">
            Autores: <span className="text-slate-700">{publication.authors}</span>
          </div>

          {/* Botón Acción */}
          <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-5 py-2.5 rounded-xl transition-colors w-fit">
            <Download className="w-4 h-4" />
            {publication.action}
          </button>
        </div>
      </div>
    </div>
  );
}
