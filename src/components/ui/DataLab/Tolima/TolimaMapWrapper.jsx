"use client";
import dynamic from 'next/dynamic';

import React from 'react';
import { UI_MESSAGES } from '../../../../data/uiData';

const LoadingSkeleton = () => (
  <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-stone-900 flex flex-col items-center justify-center gap-4">
    <div className="w-12 h-12 border-4 border-stone-800 border-t-amber-500 rounded-full animate-spin"></div>
    <div className="animate-pulse text-stone-500 font-mono tracking-widest text-sm">
      INICIALIZANDO TELEMETRÍA SATELITAL...
    </div>
  </div>
);

const TimeoutProtectedSkeleton = () => {
  const [isTimedOut, setIsTimedOut] = React.useState(false);
  const { timeoutLoading } = UI_MESSAGES;

  React.useEffect(() => {
    const timer = setTimeout(() => setIsTimedOut(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (isTimedOut) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-stone-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 gap-6">
        <div className="w-16 h-16 bg-red-900/30 text-red-500 rounded-full flex items-center justify-center border border-red-500/30">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-100 mb-2">{timeoutLoading.title}</h3>
          <p className="text-sm text-stone-400 max-w-sm">{timeoutLoading.descriptionSatelital}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 bg-amber-600 text-stone-900 font-bold rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-amber-500/20 active:scale-95"
        >
          {timeoutLoading.button}
        </button>
      </div>
    );
  }

  return <LoadingSkeleton />;
};

// REGLA DE SUPERVIVENCIA: Carga asíncrona desactivando Server-Side Rendering (SSR)
// Leaflet accede al objeto `window` durante su inicialización. Si Next.js intenta renderizar 
// esto en el servidor, crasheará.
const TolimaMapWrapper = dynamic(
  () => import('./TolimaMap'),
  { 
    ssr: false, 
    loading: () => <TimeoutProtectedSkeleton />
  }
);

export default TolimaMapWrapper;
