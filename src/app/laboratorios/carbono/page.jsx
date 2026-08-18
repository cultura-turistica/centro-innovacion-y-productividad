import React from 'react';
import { ChevronDown, Beaker } from 'lucide-react';
import { CARBONO_HERO_DATA, CARBONO_TRANSPARENCIA_DATA, CARBONO_SANDBOX_DATA } from '../../../data/laboratorios/carbono';
import CarbonoNoSSRWrapper from '../../../components/ui/DataLab/Carbono/CarbonoNoSSRWrapper';

export const metadata = {
  title: `${CARBONO_HERO_DATA.title} | CIP`,
  description: CARBONO_HERO_DATA.description,
};

// Helper for bold text
const renderMarkdownBold = (text, highlightClass = "font-bold text-slate-900") => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className={highlightClass}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

export default function CarbonoPage() {
  return (
    <main className="w-full min-h-screen text-slate-900 font-sans relative pb-20 bg-[#f8fafc]">


      <div className="relative z-10 pt-24">
        {/* HERO SECTION (SEO Friendly SSR) */}
        <header className="pt-8 pb-16 px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
            {CARBONO_HERO_DATA.title}
          </h1>
          <p className="text-lg md:text-2xl font-semibold mb-8 text-emerald-600">
            {CARBONO_HERO_DATA.subtitle}
          </p>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-slate-600 leading-relaxed text-left bg-slate-100 p-6 rounded-xl border-l-4 border-emerald-500">
            {renderMarkdownBold(CARBONO_HERO_DATA.description, "font-bold text-emerald-700")}
          </p>
          <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold animate-bounce">
            <span>{CARBONO_HERO_DATA.cta}</span>
            <ChevronDown size={24} />
          </div>
        </header>

        {/* SCROLLYTELLING GRAPHICS SECTION (Delegated to NoSSRWrapper) */}
        {/* Se pasa un modo prop para indicarle al wrapper qué pintar */}
        <CarbonoNoSSRWrapper mode="scrollytelling" />

        {/* TRANSPARENCIA METODOLÓGICA (SEO Friendly SSR) */}
        <section className="bg-slate-900 text-slate-100 py-24 px-8 mt-12 md:mt-0">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Beaker size={32} className="text-emerald-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-white m-0">{CARBONO_TRANSPARENCIA_DATA.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CARBONO_TRANSPARENCIA_DATA.cards.map((card, idx) => (
                <div key={idx} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-colors">
                  <h3 className="text-emerald-500 mb-4 text-xl font-bold">{card.title}</h3>
                  <p className="leading-relaxed text-slate-400">
                    {renderMarkdownBold(card.content, "font-bold text-emerald-400")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SANDBOX SECTION (SEO Header SSR + Interactive NoSSR Graph) */}
        <section className="py-24 px-4 md:px-8 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-bold">{CARBONO_SANDBOX_DATA.title}</h2>
              <p className="text-slate-500 text-lg">{CARBONO_SANDBOX_DATA.description}</p>
            </div>
            
            {/* Componente Lógico del Sandbox */}
            <CarbonoNoSSRWrapper mode="sandbox" />
          </div>
        </section>
      </div>
    </main>
  );
}
