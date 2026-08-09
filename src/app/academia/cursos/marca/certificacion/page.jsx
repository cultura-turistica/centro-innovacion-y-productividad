'use client';
import React, { useState } from 'react';
import Navbar from '../../../../../components/layout/Navbar';
import CourseEvaluation from '../../../../../components/ui/interactivos/CourseEvaluation';
import { certificacionData } from '../../../../../data/cursos/marca/certificacion';
import { ChevronRight, Award, Home } from 'lucide-react';
import Link from 'next/link';

export default function MarcaCertificacionPage() {
  const [startEvaluation, setStartEvaluation] = useState(false);
  const themeColor = "#e11d48"; // Rose 600

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-rose-100 relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            <Link href="/" className="hover:text-rose-500 transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia" className="hover:text-rose-500 transition-colors">Academia</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia/cursos/marca" className="hover:text-rose-500 transition-colors">Diseño de Marca</Link>
          </nav>
          
          {/* Header */}
          <header className="relative">
            <div className="absolute top-0 left-0 w-20 h-1 bg-rose-600 rounded-full"></div>
            <div className="pt-8">
              <span className="text-sm font-black text-rose-500 tracking-widest uppercase mb-4 block">
                {certificacionData.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
                  dangerouslySetInnerHTML={{ __html: certificacionData.title }}
              />
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                {certificacionData.description}
              </p>
            </div>
          </header>

          <div className="max-w-3xl mx-auto">
            {!startEvaluation ? (
              <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Award className="w-12 h-12 text-rose-500" />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-4">{certificacionData.completionTitle}</h2>
                <p className="text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
                  {certificacionData.completionDesc}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/academia/cursos/marca"
                    className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Home className="w-5 h-5" />
                    {certificacionData.exitBtn}
                  </Link>
                  <button 
                    onClick={() => setStartEvaluation(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
                  >
                    {certificacionData.certBtn}
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-in slide-in-from-bottom-8 fade-in duration-500">
                <CourseEvaluation data={certificacionData} themeColor={themeColor} />
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
