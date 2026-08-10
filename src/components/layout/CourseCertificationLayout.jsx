'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import CourseEvaluation from '../ui/interactivos/CourseEvaluation';
import { ChevronRight, Award, Home } from 'lucide-react';
import Link from 'next/link';

export default function CourseCertificationLayout({
  data,
  courseUrl,
  breadcrumbTitle,
  theme
}) {
  const [startEvaluation, setStartEvaluation] = useState(false);

  return (
    <div className={`min-h-screen bg-[#faf9f6] text-slate-800 font-sans ${theme.selection} relative`}>
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            <Link href="/" className={`${theme.hoverText} transition-colors`}>Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia" className={`${theme.hoverText} transition-colors`}>Academia</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={courseUrl} className={`${theme.hoverText} transition-colors`}>{breadcrumbTitle}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className={theme.textHighlight}>Evaluación Final</span>
          </nav>

          {/* Cabecera */}
          <section>
            <div className={`${theme.primaryBg} rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8`}>
              <div className={`absolute top-0 right-0 w-64 h-64 ${theme.blurPrimary} rounded-full blur-3xl -mr-20 -mt-20`}></div>
              <div className={`absolute bottom-0 left-0 w-64 h-64 ${theme.blurSecondary} rounded-full blur-3xl -ml-20 -mb-20`}></div>
              
              <div className="relative z-10 text-left max-w-2xl">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs tracking-widest uppercase mb-6 border ${theme.badgeBorder}`}>
                  <Award className="w-4 h-4" />
                  <span>{data.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: data.title }} />
                <p className={`${theme.textLight} text-lg md:text-xl leading-relaxed`}>
                  {data.description}
                </p>
              </div>

              <div className="relative z-10 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 w-full md:w-auto text-center flex-shrink-0">
                 <h3 className="text-2xl font-bold mb-4">{data.completionTitle}</h3>
                 <p className={`${theme.textLight} mb-8 max-w-sm mx-auto`}>{data.completionDesc}</p>
                 
                 <div className="flex flex-col gap-4">
                    {!startEvaluation && (
                      <button 
                        onClick={() => setStartEvaluation(true)}
                        className={`inline-block bg-amber-400 ${theme.btnText} px-8 py-4 rounded-full font-black text-lg hover:bg-amber-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]`}
                      >
                        {data.certBtn}
                      </button>
                    )}
                    <Link href="/academia" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                      <Home className="w-5 h-5" />
                      {data.exitBtn}
                    </Link>
                 </div>
              </div>
            </div>
          </section>

          {/* Motor de Evaluación Interactivo */}
          {startEvaluation && (
            <section id="evaluacion" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CourseEvaluation data={data} themeColor={theme.themeColorHex || "#4f46e5"} />
            </section>
          )}

          {/* Navegación de Salida */}
          <section className="flex justify-center pt-8 border-t border-slate-200">
            <Link 
              href="/academia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-600 font-bold hover:bg-slate-50 transition-colors shadow-sm border border-slate-200"
            >
              <Home className="w-5 h-5" />
              <span>Volver a la Academia</span>
            </Link>
          </section>
          
        </main>
      </div>
    </div>
  );
}
