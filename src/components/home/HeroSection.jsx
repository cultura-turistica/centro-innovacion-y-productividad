import React from 'react';
import { SparklesIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 px-6 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
      <div className="absolute top-10 left-10 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
        <SparklesIcon className="w-3 h-3 text-indigo-500" />
        Apropiación Social del Conocimiento
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
        <span className="text-[#0a275a]">Transformamos Territorios</span> <br/> <span className="text-[#f37321]">con Conocimiento</span>
      </h1>
      
      <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
        Somos el Centro de Innovación y Productividad de Cultura T, especializados en investigación territorial, inteligencia artificial y ecosistemas digitales.
      </p>
    </section>
  );
}
