'use client';
import React, { useState } from 'react';
import Navbar from '../../../../../components/layout/Navbar';
import CourseEvaluation from '../../../../../components/ui/interactivos/CourseEvaluation';
import { certificacionData } from '../../../../../data/cursos/curso-2/certificacion';
import { ChevronRight, Award, Home } from 'lucide-react';
import Link from 'next/link';

export default function CertificacionPage() {
  const [startEvaluation, setStartEvaluation] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-emerald-100 relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            <Link href="/" className="hover:text-emerald-500 transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia" className="hover:text-emerald-500 transition-colors">Academia</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia/cursos/diseno-producto" className="hover:text-emerald-500 transition-colors">Curso Diseño de Producto</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-emerald-500">Evaluación Final</span>
          </nav>

          {/* Cabecera */}
          <section>
            <div className="bg-emerald-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <div className="relative z-10 text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 text-emerald-300 font-bold text-xs tracking-widest uppercase mb-6 border border-emerald-700">
                  <Award className="w-4 h-4" />
                  <span>{certificacionData.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: certificacionData.title }} />
                <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                  {certificacionData.description}
                </p>
              </div>

              <div className="relative z-10 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 w-full md:w-auto text-center flex-shrink-0">
                 <h3 className="text-2xl font-bold mb-4">{certificacionData.completionTitle}</h3>
                 <p className="text-emerald-100 mb-8 max-w-sm mx-auto">{certificacionData.completionDesc}</p>
                 
                 <div className="flex flex-col gap-4">
                    {!startEvaluation && (
                      <button 
                        onClick={() => setStartEvaluation(true)}
                        className="inline-block bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-black text-lg hover:bg-amber-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                      >
                        {certificacionData.certBtn}
                      </button>
                    )}
                    <Link href="/academia" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                      <Home className="w-5 h-5" />
                      {certificacionData.exitBtn}
                    </Link>
                 </div>
              </div>
            </div>
          </section>

          {/* Bloque de Evaluación */}
          {startEvaluation && (
            <section id="evaluacion" className="scroll-mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CourseEvaluation data={certificacionData} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
