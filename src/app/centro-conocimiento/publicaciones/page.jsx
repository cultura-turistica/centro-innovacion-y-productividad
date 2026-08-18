"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';
import IDiBadge from '@/components/ui/conocimiento/IDiBadge';

export default function PublicacionesCatalog() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    // Filtrar proyectos de tipo 'I' o 'D' (Investigación / Desarrollo)
    const pubList = Object.values(registroIdi).filter(
      item => item.tipoIDI === 'I' || item.tipoIDI === 'D'
    );
    setPublicaciones(pubList);
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6] pb-20 relative">
      {/* Textura global */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative z-10">
        {/* Encabezado del Catálogo */}
        <div className="bg-transparent border-b border-slate-200/50 py-16 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/centro-conocimiento" className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium flex items-center gap-1">
                &larr; Volver al Centro
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-4 mt-4">
              <IDiBadge tipo="I" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Publicaciones y Metodologías
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl">
              Catálogo oficial de investigaciones, estudios de caso y metodologías operativas.
            </p>
          </div>
        </div>

        {/* Grilla de Publicaciones */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publicaciones.length === 0 ? (
            <div className="text-center py-20 text-slate-500 bg-white rounded-3xl border border-slate-200 shadow-sm">
              No hay publicaciones disponibles en este momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicaciones.map(pub => (
                <Link key={pub.id} href={`/centro-conocimiento/publicaciones/${pub.id}`} className="group h-full">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                    
                    {/* Header Card */}
                    <div className={`h-32 bg-${pub.hero?.themeColor || 'indigo'}-50 flex items-end p-6 border-b border-slate-100`}>
                      <h3 className="font-bold text-lg text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {pub.hero?.title}
                      </h3>
                    </div>

                    {/* Body Card */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                          {pub.fichaTecnica?.["Categoría"] || "Documento"}
                        </span>
                        <p className="text-sm text-slate-500 line-clamp-3">
                          {pub.fichaTecnica?.["Descripción Corta"] || "Sin descripción disponible."}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-50">
                        <span className="text-indigo-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Leer Documento &rarr;
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
