import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import LabCatalog from '@/components/laboratorio/LabCatalog';
import BrowserWarningBanner from '@/components/BrowserWarningBanner';
import { ChevronRight } from 'lucide-react';
import { LAB_CATALOG_DATA } from '@/data/laboratorios/catalogoData';

export default function LaboratorioPage() {
  const { header, researches } = LAB_CATALOG_DATA;

  return (
    <>
      <BrowserWarningBanner />
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">

          {/* Header & Breadcrumb */}
          <div className="mb-16">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              <Link href="/" className="hover:text-emerald-500 transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-emerald-500">{header.badge}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-[#0a275a]">{header.titlePart1}</span> <span className="text-[#f37321]">{header.titlePart2}</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Client Component: Catálogo */}
          <LabCatalog researches={researches} />

        </main>
    </>
  );
}
