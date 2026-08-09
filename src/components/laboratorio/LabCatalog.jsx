"use client";

import React, { useState, useMemo } from 'react';
import ResearchCard from './ResearchCard';

const CATEGORY_DESCRIPTIONS = {
  'Todos': null,
  'Desarrollo Social y Territorio': 'Modelos demográficos y estimación de pobreza para entender las vulnerabilidades y dinámicas sociales en Colombia.',
  'Sostenibilidad y Medio Ambiente': 'Análisis del impacto ecológico, huella de carbono y resiliencia de los ecosistemas territoriales.',
  'Economía y Tecnología': 'Auditorías financieras y uso de machine learning para medir la percepción y gestión del gasto público turístico.'
};

const CATEGORIES = Object.keys(CATEGORY_DESCRIPTIONS);

export default function LabCatalog({ researches }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredResearches = useMemo(() => {
    let result = researches;
    if (activeCategory !== 'Todos') {
      result = researches.filter(item => item.category === activeCategory);
    }
    
    // Ordenar: Primero los 'Explorar', al final los 'En Desarrollo'
    return [...result].sort((a, b) => {
      if (a.status === 'Explorar' && b.status !== 'Explorar') return -1;
      if (a.status !== 'Explorar' && b.status === 'Explorar') return 1;
      return 0;
    });
  }, [researches, activeCategory]);

  return (
    <div className="w-full">
      {/* Selector de Categorías (Pestañas institucionales) */}
      <div className="flex flex-wrap items-center gap-2 md:gap-8 w-full border-b border-slate-200 mb-8 pb-4">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-semibold px-2 py-2 transition-all duration-300 relative ${
              activeCategory === category 
                ? 'text-slate-900' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute -bottom-[17px] left-0 w-full h-0.5 bg-slate-900 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Descripción de la Categoría Activa (Oculta en 'Todos') */}
      {CATEGORY_DESCRIPTIONS[activeCategory] && (
        <div className="mb-12 bg-white/50 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl max-w-3xl">
          <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-emerald-400 pl-4">
            {CATEGORY_DESCRIPTIONS[activeCategory]}
          </p>
        </div>
      )}

      {/* Grid Plano de Investigaciones (Máximo 2 columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredResearches.map((research, index) => (
          <ResearchCard key={index} research={research} />
        ))}
      </div>
    </div>
  );
}
