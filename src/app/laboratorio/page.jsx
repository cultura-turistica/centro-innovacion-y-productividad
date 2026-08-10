import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import LabCatalog from '../../components/laboratorio/LabCatalog';
import { ChevronRight } from 'lucide-react';

const RESEARCHES = [
  {
    status: "Explorar",
    title: "Perfil del Visitante",
    subtitle: "Tendencias Nacionales 2024",
    category: "Desarrollo Social y Territorio",
    desc: "Análisis demográfico y de comportamiento del turista en Colombia, extraído del estudio oficial de Fontur y MinComercio.",
    action: "Ver Investigación",
    href: "/laboratorios/anatomia-del-turista"
  },
  {
    status: "Explorar",
    title: "Radiografía de lo Inobservado",
    subtitle: "IA para Estimación de Pobreza",
    category: "Desarrollo Social y Territorio",
    desc: "Cruzamos microdatos del DANE con pixeles satelitales empíricos para inferir bayesianamente las vulnerabilidades del territorio a nivel municipal.",
    action: "Ver Investigación",
    href: "/laboratorios/sae-colombia"
  },
  {
    status: "En Desarrollo",
    title: "Migración REDATAM",
    subtitle: "Cartografía Social",
    category: "Desarrollo Social y Territorio",
    desc: "Análisis poblacional usando la arquitectura CEPAL para entender flujos de turismo interurbano.",
    action: "Próximamente"
  },
  {
    status: "Explorar",
    title: "Conservación Ecosistémica",
    subtitle: "La Prosperidad (Tolima)",
    category: "Sostenibilidad y Medio Ambiente",
    desc: "Monitoreo satelital mensual y preservación del Bosque Seco Tropical evaluando la resiliencia ante la ganadería adaptativa.",
    action: "Ver Investigación",
    href: "/laboratorios/tolima"
  },
  {
    status: "Explorar",
    title: "Carbono y Clase",
    subtitle: "La Gran Asfixia",
    category: "Sostenibilidad y Medio Ambiente",
    desc: "Auditoría macroeconómica sobre la hegemonía global de emisiones. Una disección visual de la deuda climática, el calentamiento (CO2 vs CH4), y la brutal desigualdad estructural 'Per Cápita'.",
    action: "Ver Investigación",
    href: "/laboratorios/carbono"
  },
  {
    status: "En Desarrollo",
    title: "Gasto Público Turístico",
    subtitle: "Finanzas y Riesgos FONTUR",
    category: "Economía y Tecnología",
    desc: "Análisis transversal de la dinámica de contratación (2021-2024), detectando modalidades financieras y riesgos.",
    action: "Próximamente"
  },
  {
    status: "En Desarrollo",
    title: "Análisis de Sentimiento",
    subtitle: "Machine Learning (NLP)",
    category: "Economía y Tecnología",
    desc: "Modelos de lenguaje procesando reseñas de usuarios para medir la reputación de los ecosistemas turísticos.",
    action: "Próximamente"
  }
];

export default function LaboratorioPage() {
  return (
    <div className="bg-[url('/assets/images/textura1.webp')] bg-cover bg-center min-h-screen relative font-sans text-slate-800 selection:bg-emerald-100">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
      ></div>
      
      <Navbar />
      <div className="relative z-10">
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          
          {/* Header & Breadcrumb */}
          <div className="mb-16">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              <Link href="/" className="hover:text-emerald-500 transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-emerald-500">Laboratorio de Datos</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-[#0a275a]">DataLab - Inteligencia</span> <span className="text-[#f37321]">Territorial</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
              Explora nuestras investigaciones académicas. Utilizamos ciencia de datos, estadística bayesiana y análisis espacial para transformar millones de registros en narrativas de alto impacto.
            </p>
          </div>

          {/* Client Component: Catálogo */}
          <LabCatalog researches={RESEARCHES} />
          
        </main>
      </div>
    </div>
  );
}
