"use client";
import React, { useState } from 'react';
import { BookOpen, MapPin, XCircle, CheckCircle, Lightbulb, ChevronRight } from 'lucide-react';

export default function CaseStudyViewer({ data }) {
  const { badge, title, description, cases } = data;
  const [activeCaseId, setActiveCaseId] = useState(cases[0].id);

  const activeCase = cases.find(c => c.id === activeCaseId);

  return (
    <div className="w-full max-w-5xl mx-auto my-16 bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-teal-100/30">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-bold text-xs tracking-widest uppercase mb-6 border border-teal-100">
          <BookOpen className="w-4 h-4" />
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

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Lista de Casos (Sidebar) */}
        <div className="lg:w-1/3 flex flex-col gap-3">
          {cases.map((c, index) => {
            const isActive = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCaseId(c.id)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border-2 flex items-center justify-between group
                  ${isActive 
                    ? 'bg-teal-50 border-teal-500 shadow-md' 
                    : 'bg-white border-slate-100 hover:border-teal-200 hover:bg-slate-50'
                  }
                `}
              >
                <div>
                  <span className={`block text-xs font-bold uppercase tracking-widest mb-1 ${isActive ? 'text-teal-600' : 'text-slate-400'}`}>
                    Caso {index + 1}
                  </span>
                  <span className={`block font-bold leading-tight ${isActive ? 'text-teal-900' : 'text-slate-700 group-hover:text-teal-700'}`}>
                    {c.name}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-teal-500 translate-x-1' : 'text-slate-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Detalle del Caso (Main) */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-lg relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-70 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-teal-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wider uppercase">{activeCase.location}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                {activeCase.name}
              </h3>
              
              <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed">
                {activeCase.context}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Aciertos */}
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3 text-emerald-700">
                    <CheckCircle className="w-6 h-6" />
                    <h4 className="font-bold">Acierto</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: activeCase.success }}></p>
                </div>

                {/* Errores */}
                <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100">
                  <div className="flex items-center gap-3 mb-3 text-rose-700">
                    <XCircle className="w-6 h-6" />
                    <h4 className="font-bold">Error</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeCase.mistake}</p>
                </div>
              </div>

              {/* Lección Aprendida */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-6 md:p-8 rounded-2xl text-white shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-teal-100 text-xs mb-2">Lección Aprendida</h4>
                  <p className="text-lg font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: activeCase.lesson }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
