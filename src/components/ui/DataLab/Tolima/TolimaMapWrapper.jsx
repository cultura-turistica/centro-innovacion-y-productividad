"use client";
import dynamic from 'next/dynamic';

// REGLA DE SUPERVIVENCIA: Carga asíncrona desactivando Server-Side Rendering (SSR)
// Leaflet accede al objeto `window` durante su inicialización. Si Next.js intenta renderizar 
// esto en el servidor, crasheará.
const TolimaMapWrapper = dynamic(
  () => import('./TolimaMap'),
  { 
    ssr: false, 
    loading: () => (
      <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-stone-900 flex items-center justify-center">
        <div className="animate-pulse text-stone-500 font-mono tracking-widest text-sm">
          INICIALIZANDO TELEMETRÍA SATELITAL...
        </div>
      </div>
    )
  }
);

export default TolimaMapWrapper;
