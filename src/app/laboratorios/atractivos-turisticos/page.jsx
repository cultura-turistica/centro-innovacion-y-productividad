import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Database, Info } from 'lucide-react';
import AtractivosNoSSRWrapper from '../../../components/ui/DataLab/Atractivos/AtractivosNoSSRWrapper';
import { ATRACTIVOS_HERO_DATA } from '../../../data/laboratorios/atractivos';

export const metadata = {
  title: 'Inventario Turístico de Colombia | DataLab Cultura T',
  description: 'Evaluación y análisis de 8,345 registros del Inventario Turístico de Colombia bajo la metodología oficial MinCIT 2020.',
  openGraph: {
    title: 'Inventario Turístico de Colombia | DataLab Cultura T',
    description: 'Evaluación y análisis de 8,345 registros del Inventario Turístico de Colombia bajo la metodología oficial MinCIT 2020.',
    url: 'https://cip.cultura-t.com/laboratorios/atractivos-turisticos',
    siteName: 'Centro de Innovación y Productividad Cultura T',
    locale: 'es_CO',
    type: 'article',
  },
};

export default function AtractivosTuristicosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ResearchProject',
    name: 'Inventario Turístico de Colombia',
    description: ATRACTIVOS_HERO_DATA.subtitle,
    url: 'https://cip.cultura-t.com/laboratorios/atractivos-turisticos',
    parentOrganization: {
      '@type': 'ResearchOrganization',
      name: 'Centro de Innovación y Productividad Cultura T',
      url: 'https://cip.cultura-t.com'
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative pb-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Schema.org JSON-LD para indexación y SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-6">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/laboratorio" className="hover:text-emerald-600 transition-colors">Laboratorio de Datos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-emerald-600">Inventario Turístico</span>
        </nav>

        {/* HERO SECTION SSR */}
        <header className="max-w-4xl mx-auto text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-100 text-emerald-800 border border-emerald-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {ATRACTIVOS_HERO_DATA.badge}
          </span>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            <span className="text-[#0a275a]">{ATRACTIVOS_HERO_DATA.titlePart1}</span>{' '}
            <span className="text-[#f37321]">{ATRACTIVOS_HERO_DATA.titlePart2}</span>
          </h1>

          <p className="text-base md:text-lg font-normal text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {ATRACTIVOS_HERO_DATA.subtitle}
          </p>

          {/* BARRA DE 4 KPIS MAESTROS SSR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-4">
            {ATRACTIVOS_HERO_DATA.kpis.map((kpi, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {kpi.label}
                </span>
                <span className={`text-2xl md:text-3xl font-black ${kpi.accent} block mb-1`}>
                  {kpi.value}
                </span>
                <span className="text-xs text-slate-500 leading-tight block">
                  {kpi.detail}
                </span>
              </div>
            ))}
          </div>
        </header>
      </div>

      {/* ISLA DINÁMICA DE CLIENTE (DATA STORY + ATLAS EXPLORATORIO) */}
      <AtractivosNoSSRWrapper />
    </main>
  );
}
