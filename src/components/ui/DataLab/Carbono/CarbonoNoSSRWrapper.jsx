"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const CarbonoScrollytelling = dynamic(
  () => import('./CarbonoScrollytelling'),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center bg-slate-50 text-slate-500 gap-4">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <p className="font-semibold uppercase tracking-widest text-sm">Cargando Atlas de Emisiones...</p>
      </div>
    )
  }
);

const CarbonoSandbox = dynamic(
  () => import('./CarbonoSandbox'),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-[400px] flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl text-slate-500 gap-4 border border-slate-100">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
        <p className="font-semibold uppercase tracking-widest text-sm">Iniciando Laboratorio Lúdico...</p>
      </div>
    )
  }
);

export default function CarbonoNoSSRWrapper({ mode }) {
  if (mode === 'scrollytelling') {
    return <CarbonoScrollytelling />;
  }
  if (mode === 'sandbox') {
    return <CarbonoSandbox />;
  }
  return null;
}
