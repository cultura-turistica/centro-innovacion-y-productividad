import React from 'react';
import Navbar from '../../components/layout/Navbar';
import CourseCatalog from '../../components/academia/CourseCatalog';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { catalogoData } from '../../data/cursos/catalogo';

export default function AcademiaPage() {
  const { header, courses } = catalogoData;

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-fuchsia-100 relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          
          {/* Header & Breadcrumb */}
          <div className="mb-16">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              {header.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {item.url ? (
                    <Link href={item.url} className="hover:text-fuchsia-600 transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-fuchsia-600">{item.label}</span>
                  )}
                  {index < header.breadcrumb.length - 1 && <ChevronRight className="w-3 h-3" />}
                </React.Fragment>
              ))}
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className={header.titlePart1Color}>{header.titlePart1}</span> <span className={header.titlePart2Color}>{header.titlePart2}</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Client Component: Catálogo y Buscador */}
          <CourseCatalog courses={courses} />
          
        </main>
      </div>
    </div>
  );
}
