"use client";
import React, { useState } from 'react';
import { MapPin, Sparkles, Castle, Music } from 'lucide-react';

const iconMap = {
  Castle,
  Music
};
export default function ComparisonCards({ data }) {
  const [activeCase, setActiveCase] = useState(null);
  const { badge, title, description, items } = data;

  return (
    <div className="w-full max-w-5xl mx-auto my-16 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-100">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-slate-200">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p 
          className="text-slate-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((study) => {
          const Icon = iconMap[study.icon] || Sparkles;
          const isActive = activeCase === study.id;

          return (
            <div
              key={study.id}
              onMouseEnter={() => setActiveCase(study.id)}
              onMouseLeave={() => setActiveCase(null)}
              onClick={() => setActiveCase(isActive ? null : study.id)}
              className={`relative cursor-pointer transition-all duration-500 ease-out rounded-[2rem] overflow-hidden border-2 
                ${isActive ? study.borderClass : 'border-slate-100 hover:border-slate-200'}
                ${isActive ? 'shadow-2xl scale-[1.02]' : `shadow-md ${study.hoverClass}`}
                bg-white flex flex-col h-full`}
            >
              {/* Etiqueta Superior */}
              <div className="absolute top-6 right-6">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${study.bgClass} ${study.colorClass}`}>
                  {study.tag}
                </span>
              </div>

              {/* Cabecera (Siempre visible) */}
              <div className="p-8 pb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${study.bgClass} ${study.colorClass}`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {study.location}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {study.title}
                </h3>
              </div>

              {/* Contenido (Animado) */}
              <div className="p-8 pt-0 flex-grow">
                <div className="grid grid-cols-1 grid-rows-1">
                  
                  {/* Antes (Visible por defecto, se desvanece o baja opacidad) */}
                  <div className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${isActive ? 'opacity-0 blur-sm pointer-events-none' : 'opacity-100 blur-0'}`}>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Antes:</h4>
                    <p className="text-slate-600 italic" dangerouslySetInnerHTML={{ __html: study.before }}>
                    </p>
                  </div>

                  {/* Impacto (Aparece en hover) */}
                  <div className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out transform ${isActive ? 'translate-y-0 opacity-100 z-10' : 'translate-y-8 opacity-0 pointer-events-none -z-10'}`}>
                    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-5 border-l-4 ${study.borderClass} shadow-lg`}>
                      <h4 className={`text-xs font-bold uppercase tracking-widest mb-2 ${study.colorClass}`}>
                        El Impacto Comunitario:
                      </h4>
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: study.impact }}>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
