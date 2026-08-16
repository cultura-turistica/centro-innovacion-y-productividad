import React from 'react';
import Link from 'next/link';
import { ChevronRight, Microscope, Code2, Rocket } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';

const getIcon = (tipo) => {
  if (tipo === 'I') return <Microscope className="w-5 h-5" />;
  if (tipo === 'D') return <Code2 className="w-5 h-5" />;
  return <Rocket className="w-5 h-5" />;
};

const getCategoryUrl = (tipo) => {
  if (tipo === 'I') return "investigacion";
  if (tipo === 'D') return "desarrollos";
  return "innovacion";
};

export default function CentroConocimientoCatalog() {
  const activos = Object.values(registroIdi);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-indigo-100 relative">
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
          
          {/* Encabezado */}
          <div className="mb-16 max-w-4xl">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              <Link href="/" className="hover:text-indigo-500 transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-indigo-500">Centro de Conocimiento (I+D+i)</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-[#0a275a]">Centro de</span> <span className="text-[#f37321]">Conocimiento</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              El repositorio oficial de Inteligencia Estratégica del CIP. Aquí documentamos nuestra producción en Investigación teórica (I), Desarrollo tecnológico (D) e Innovación territorial aplicada (i).
            </p>
          </div>

          {/* Grilla de Activos de I+D+i */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activos.map((activo) => {
              const url = `/centro-conocimiento/${getCategoryUrl(activo.tipoIDI)}/${activo.id}`;
              const isConfidential = activo.confidencialidad?.accesoRestringido;
              const themeColor = activo.hero.themeColor || "indigo";

              return (
                <Link 
                  href={url} 
                  key={activo.id}
                  className={`group relative bg-white rounded-3xl p-8 border-l-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border-slate-100`}
                  style={{ borderLeftColor: themeColor }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-slate-50 text-slate-700`}>
                        {getIcon(activo.tipoIDI)}
                      </div>
                      {isConfidential && (
                        <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">
                          SECRETO EMPRESARIAL
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {activo.hero.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-2">
                      {activo.hero.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center text-sm font-semibold text-indigo-500 group-hover:translate-x-2 transition-transform">
                    <span>Explorar Detalle</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
}
