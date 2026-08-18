"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const TerritorialMap = dynamic(() => import('./TerritorialMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[550px] flex items-center justify-center bg-slate-50 rounded-2xl animate-pulse text-slate-400 border border-slate-100">
      Cargando motor vectorial interactivo...
    </div>
  )
});

export default function TerritorialMapWrapper(props) {
  return <TerritorialMap {...props} />;
}
