import React from 'react';
import { ArrowRight, Clock, FlaskConical } from 'lucide-react';

export default function ResearchCard({ research }) {
  const isDev = research.status === 'En Desarrollo';

  return (
    <div className={`group relative p-8 rounded-[2rem] ${
      isDev ? 'bg-slate-50/90 border-2 border-dashed border-slate-200' : 'bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
    } transition-all duration-300 ease-out flex flex-col h-full`}>
      
      <div className="flex flex-wrap items-start justify-between mb-6 gap-3">
        {/* Badge de Categoría */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
          {research.category}
        </span>
        
        {/* Badge de Estado */}
        {isDev ? (
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold bg-slate-100 px-3 py-1.5 rounded-full whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" />
            <span>En Desarrollo</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold bg-emerald-50 px-3 py-1.5 rounded-full whitespace-nowrap">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Explorar</span>
          </div>
        )}
      </div>
      
      <h3 className={`text-xl font-bold mb-2 leading-tight transition-colors ${
        isDev ? 'text-slate-600' : 'text-slate-900 group-hover:text-emerald-600'
      }`}>
        {research.title}
      </h3>
      <h4 className={`text-sm font-semibold mb-4 tracking-wide ${isDev ? 'text-slate-400' : 'text-emerald-500'}`}>
        {research.subtitle}
      </h4>
      
      <p className={`text-sm leading-relaxed flex-grow mb-8 ${isDev ? 'text-slate-500' : 'text-slate-600'}`}>
        {research.desc}
      </p>
      
      {isDev ? (
        <div className="text-sm font-semibold text-slate-400 flex items-center gap-2 mt-auto border-t border-slate-100 pt-6 cursor-not-allowed">
          {research.action}
          <Clock className="w-4 h-4" />
        </div>
      ) : (
        <button className="text-sm font-semibold text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto border-t border-slate-100 pt-6">
          {research.action}
          <ArrowRight className="w-4 h-4 text-emerald-500" />
        </button>
      )}
    </div>
  );
}
