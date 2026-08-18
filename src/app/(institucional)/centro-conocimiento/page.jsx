import React from 'react';
import Link from 'next/link';

export default function CentroConocimientoHub() {
  return (
    <main className="pb-20 relative">
        {/* Encabezado del Hub Principal */}
        <div className="bg-transparent border-b border-slate-200/50 py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Centro de Conocimiento
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              El repositorio oficial de Investigación, Desarrollo e Innovación (I+D+i). Descubre nuestro impacto territorial y explora las metodologías que hemos creado.
            </p>
          </div>
        </div>

        {/* Portales de Navegación */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Portal a Proyectos */}
            <Link href="/centro-conocimiento/proyectos" className="group">
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  Proyectos de Innovación
                </h2>
                <p className="text-slate-500 mb-6">
                  Explora el mapa interactivo de Colombia para conocer la implementación y el impacto real de nuestras estrategias en los territorios.
                </p>
                <div className="mt-auto text-emerald-500 font-semibold flex items-center gap-2">
                  Ver Mapa Territorial <span className="text-xl">&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Portal a Publicaciones */}
            <Link href="/centro-conocimiento/publicaciones" className="group">
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  Publicaciones y Metodologías
                </h2>
                <p className="text-slate-500 mb-6">
                  Catálogo de investigaciones, protocolos y metodologías operativas desarrolladas por nosotros y aliados estratégicos.
                </p>
                <div className="mt-auto text-indigo-500 font-semibold flex items-center gap-2">
                  Explorar Catálogo <span className="text-xl">&rarr;</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
    </main>
  );
}
