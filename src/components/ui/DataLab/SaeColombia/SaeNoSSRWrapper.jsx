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
      <div className="w-full h-full max-w-[850px] mx-auto bg-[#161b22] md:rounded-xl md:border md:border-white/5 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#161b22] border-t-[#fca311] rounded-full animate-spin"></div>
      </div>
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

import { UI_MESSAGES } from '../../../../data/uiData';

const TimeoutProtectedSkeleton = () => {
  const [isTimedOut, setIsTimedOut] = React.useState(false);
  const { timeoutLoading } = UI_MESSAGES;

  React.useEffect(() => {
    const timer = setTimeout(() => setIsTimedOut(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (isTimedOut) {
    return (
      <div className="w-full max-w-[1400px] mx-auto h-[60vh] flex flex-col items-center justify-center text-center p-6 gap-6 rounded-3xl border border-red-500/20 bg-[#161b22]/50 shadow-sm relative z-50">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{timeoutLoading.title}</h3>
          <p className="text-sm text-[#8b949e] max-w-sm">{timeoutLoading.descriptionSafari}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 bg-[#fca311] text-[#0d1117] font-bold rounded-lg hover:bg-[#e0920f] transition-colors shadow-md active:scale-95"
        >
          {timeoutLoading.button}
        </button>
      </div>
    );
  }

  return <LoadingSkeleton />;
};

// Dynamic Import (ssr: false es mandatorio para ECharts/Canvas/DOM)
const InteractiveClient = dynamic(
  () => import('./SaeScrollytelling'),
  { 
    ssr: false,
    loading: () => <TimeoutProtectedSkeleton />
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
