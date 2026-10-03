"use client";
import dynamic from 'next/dynamic';
import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Compass } from 'lucide-react';
import TimeoutLoading from '../TimeoutLoading';

// Dynamic Import (ssr: false obligatorio para Canvas/ECharts/DOM)
const AtractivosApp = dynamic(
  () => import('./AtractivosApp'),
  { 
    ssr: false,
    loading: () => (
      <TimeoutLoading 
        text="Cargando investigación y 8,345 atractivos turísticos..." 
        containerClass="w-full h-[50vh] flex flex-col items-center justify-center bg-white border border-slate-200 text-emerald-600 rounded-3xl shadow-xs"
        spinnerColor="border-slate-200 border-t-emerald-500"
      />
    )
  }
);

function LabContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'dashboard' ? 'dashboard' : 'story';
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    if (urlMode === 'dashboard') {
      setMode('dashboard');
    } else {
      setMode('story');
    }
  }, [searchParams]);

  return (
    <div className="w-full">
      {/* Selector de Modos */}
      <div className="flex justify-center mb-10 px-4">
        <div className="bg-white border border-neutral-200/90 p-1 rounded-xl shadow-2xs flex items-center gap-1">
          <button
            onClick={() => setMode('story')}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              mode === 'story'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60'
            }`}
          >
            <BookOpen size={14} />
            <span>Diagnóstico del Caso</span>
          </button>
          
          <button
            onClick={() => setMode('dashboard')}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              mode === 'dashboard'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60'
            }`}
          >
            <Compass size={14} />
            <span>Atlas y Explorador</span>
          </button>
        </div>
      </div>

      <AtractivosApp mode={mode} onSwitchMode={(newMode) => setMode(newMode)} />
    </div>
  );
}

export default function AtractivosNoSSRWrapper() {
  return (
    <Suspense fallback={
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full"></div>
      </div>
    }>
      <LabContent />
    </Suspense>
  );
}
