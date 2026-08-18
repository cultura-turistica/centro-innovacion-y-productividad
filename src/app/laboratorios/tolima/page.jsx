import React from 'react';
import { NARRATIVA } from '@/data/laboratorios/tolimaData';
import TolimaScrollytelling from '@/components/ui/DataLab/Tolima/TolimaScrollytelling';

export const metadata = {
  title: 'Conservación Ecosistémica Tolima | Laboratorio de Datos',
  description: 'Monitoreo satelital mensual y preservación del Bosque Seco Tropical evaluando la resiliencia ante la ganadería adaptativa.',
};

export default function TolimaLabPage() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-lime-900 selection:text-lime-100 relative">


      <div className="relative z-10">

        <main className="flex flex-col pt-32 pb-24">
          {/* Hero Section del Laboratorio */}
          <section className="max-w-7xl mx-auto px-6 w-full mb-16">
            <div className="inline-block bg-lime-900/50 text-lime-400 border border-lime-800/50 px-4 py-1.5 rounded-full text-sm font-extrabold tracking-widest uppercase mb-6">
              Laboratorio de Datos
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
              {NARRATIVA.tituloHero.titulo} <br />
              <span className="text-amber-500">Conservación Ecosistémica</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-400 font-medium max-w-3xl leading-relaxed">
              {NARRATIVA.tituloHero.subtitulo}
            </p>
            
            <div className="mt-8 flex items-center gap-4 border-t border-stone-800 pt-8 max-w-3xl">
              <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500 font-black">
                D
              </div>
              <div>
                <div className="text-stone-300 font-bold">Fuente de Datos</div>
                <div className="text-stone-500 text-sm">{NARRATIVA.transparencia.titulo}</div>
              </div>
            </div>
          </section>

          {/* Contenedor del Scrollytelling interactivo */}
          <section className="w-full">
            <TolimaScrollytelling narrativa={NARRATIVA} />
          </section>
        </main>
      </div>
    </div>
  );
}
