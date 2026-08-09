import React from 'react';
import Navbar from '../../../../../components/layout/Navbar';
import ModuleHero from '../../../../../components/ui/interactivos/ModuleHero';
import AudioPodcast from '../../../../../components/academia/AudioPodcast';
import TheoryIntro from '../../../../../components/ui/interactivos/TheoryIntro';
import CaseStudyViewer from '../../../../../components/ui/interactivos/CaseStudyViewer';
import ModuleNavigation from '../../../../../components/academia/ModuleNavigation';
import { ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';
import { modulo6Data } from '../../../../../data/cursos/curso-1/modulo-6';

export default function Modulo6Page() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-teal-100 relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            <Link href="/" className="hover:text-teal-500 transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia" className="hover:text-teal-500 transition-colors">Academia</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/academia/cursos/turismo-comunitario" className="hover:text-teal-500 transition-colors">Curso Turismo Comunitario</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-teal-500">Módulo 6</span>
          </nav>

          {/* Cabecera del Módulo */}
          <section>
            <ModuleHero data={modulo6Data.header} />
          </section>

          {/* Podcast Section */}
          <section id="podcast">
            <AudioPodcast 
              title={modulo6Data.podcast.title}
              subtitle={modulo6Data.podcast.subtitle}
              audioSrc={modulo6Data.podcast.audioSrc}
              transcript={modulo6Data.podcast.transcript}
            />
          </section>

          {/* Introducción */}
          <section>
            <TheoryIntro data={modulo6Data.intro} />
          </section>

          {/* Casos de Estudio */}
          <section>
            <CaseStudyViewer data={modulo6Data.caseStudies} />
          </section>

          {/* Navegación Inferior */}
          <ModuleNavigation 
            prevModule={{ title: 'Módulo 5: Resolución de Conflictos', url: '/academia/cursos/turismo-comunitario/modulo-5' }} 
            nextModule={{ title: 'Cierre y Evaluación', url: '/academia/cursos/turismo-comunitario/certificacion' }} 
            courseUrl="/academia/cursos/turismo-comunitario"
          />
        </main>
      </div>
    </div>
  );
}
