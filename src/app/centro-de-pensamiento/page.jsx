import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PublicationCard from '../../components/pensamiento/PublicationCard';

import Navbar from '../../components/layout/Navbar';

const PUBLICATIONS = [
  {
    category: "Metodología I+D+i",
    date: "Noviembre 2024",
    title: "Modelo de Apropiación y Fortalecimiento en Turismo Comunitario Regenerativo",
    description: "Metodología estructurada de 11 fases operativas para intervenir ecosistemas locales y estructurar comercialmente rutas turísticas.",
    authors: "Cultura T SAS",
    action: "Ver PDF"
  },
  {
    category: "Investigación Externa",
    date: "Febrero 2025",
    title: "Resiliencia de Ecosistemas ante la Dinámica de Turismo Masivo",
    description: "Estudio longitudinal sobre la capacidad de carga turística en ecosistemas vulnerables y propuestas de mitigación climática.",
    authors: "Universidad Nacional de Colombia, Grupo de Investigación Ambiental",
    action: "Ver PDF"
  }
];

export default function CentroPensamientoPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-indigo-100 relative">
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
          
          {/* Encabezado */}
          <div className="mb-16">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              <Link href="/" className="hover:text-indigo-500 transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-indigo-500">Centro de Pensamiento</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-[#0a275a]">Centro de</span> <span className="text-[#f37321]">Pensamiento</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
              Un ecosistema colaborativo y abierto. Aquí reside la producción bibliográfica y de investigación generada tanto por el CIP como por nuestros aliados académicos.
            </p>
          </div>

          {/* Listado de Publicaciones */}
          <div className="flex flex-col gap-6">
            {PUBLICATIONS.map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
