import React from 'react';

export default function ModuleHeader() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-indigo-50 border border-indigo-100 shadow-sm mt-8">
      {/* Elementos decorativos (Glassmorphism sutil) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-indigo-200 text-indigo-700 text-sm font-bold tracking-wide uppercase shadow-sm">
            Módulo 1
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Gobernanza y <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Turismo Comunitario
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Un modelo organizativo campesino o indígena donde la asamblea local planifica, gestiona y distribuye equitativamente los dividendos del territorio.
          </p>
        </div>

        <div className="hidden md:block flex-shrink-0 relative">
          <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-60"></div>
          <img 
            src="/assets/images/curso_ilustracion_trabajo_equipo.webp" 
            alt="Comunidad trabajando en red" 
            className="relative z-10 w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
