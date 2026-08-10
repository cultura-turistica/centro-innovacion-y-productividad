"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import { SAE_NARRATIVA } from '../../../../data/laboratorios/sae';

// Skeleton UI para evitar Cumulative Layout Shift (CLS)
// Conserva un alto aspecto de 80vh o mínimo 600px simulando el lienzo ECharts
const LoadingSkeleton = () => (
  <div className="w-full flex flex-col md:flex-row-reverse relative max-w-[1400px] mx-auto items-start animate-pulse">
    {/* Panel Gráfico Simulado */}
    <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] p-4 md:p-0">
      <div className="w-full h-full max-w-[850px] mx-auto bg-[#161b22] md:rounded-xl md:border md:border-white/5" />
    </div>
    
    {/* Panel Narrativo Simulado */}
    <div className="w-full md:w-1/2 max-w-full md:max-w-[450px] px-6 pt-[5vh] pb-[20vh]">
      <div className="h-10 bg-[#161b22] rounded w-3/4 mb-6"></div>
      <div className="h-4 bg-[#161b22] rounded w-full mb-3"></div>
      <div className="h-4 bg-[#161b22] rounded w-5/6 mb-3"></div>
      <div className="h-4 bg-[#161b22] rounded w-4/6 mb-3"></div>
    </div>
  </div>
);

// Dynamic Import (ssr: false es mandatorio para ECharts/Canvas/DOM)
const InteractiveClient = dynamic(
  () => import('./SaeScrollytelling'),
  { 
    ssr: false,
    loading: () => <LoadingSkeleton />
  }
);

export default function SaeNoSSRWrapper() {
  return (
    <div className="w-full pb-20">
      <header className="py-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#fca311] font-bold uppercase tracking-widest text-sm mb-6 inline-block border-b-2 border-[#fca311] pb-1">
          {SAE_NARRATIVA.header.pill}
        </span>
        <h1 className="text-4xl md:text-[4.5rem] text-white font-black leading-tight mb-8 tracking-tight font-serif">
          {SAE_NARRATIVA.header.title}
        </h1>
        <p className="font-serif text-lg md:text-2xl italic font-light text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
          {SAE_NARRATIVA.header.subtitle}
        </p>
      </header>

      <InteractiveClient />
    </div>
  );
}
