"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// 3. HIDRATACIÓN PROGRESIVA (Code Splitting & No SSR)
// Este wrapper de cliente es el encargado de cargar la UI pesada de forma dinámica.
// Next.js requiere que 'ssr: false' se ejecute desde un entorno "use client".
const AnatomiaInteractiveClient = dynamic(
  () => import('./AnatomiaInteractiveClient'),
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-500 gap-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="font-semibold uppercase tracking-widest text-sm">Iniciando escáner anatómico...</p>
      </div>
    )
  }
);

export default function AnatomiaNoSSRWrapper() {
  return <AnatomiaInteractiveClient />;
}
