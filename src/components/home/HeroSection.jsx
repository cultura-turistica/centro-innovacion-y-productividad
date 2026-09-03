import React from 'react';
import { SparklesIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 px-6 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-8 shadow-xs">
        <SparklesIcon className="w-3.5 h-3.5 text-indigo-600" />
        Centro de Innovación y Productividad · Cultura T
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
        <span className="text-[#0a275a]">Transformamos Territorios</span> <br/> <span className="text-[#f37321]">con Conocimiento</span>
      </h1>
      
      <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
        Somos el <strong>Centro de Innovación y Productividad</strong> de Cultura T, especializados en investigación territorial, analítica de datos y herramientas aplicadas para el desarrollo sostenible.
      </p>
    </section>
  );
}
