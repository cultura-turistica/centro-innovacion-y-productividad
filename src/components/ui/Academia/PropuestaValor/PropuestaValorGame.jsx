"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { JUEGO_DATA } from '@/data/cursos/propuesta-valor/juegoData';
import SeleccionArquetipo from './SeleccionArquetipo';
import Acto1Diseccion from './Acto1Diseccion';
import Acto2DisenoEncaje from './Acto2DisenoEncaje';
import Acto4Experimentos from './Acto4Experimentos';
import Acto5Pivote from './Acto5Pivote';
import Acto6Conclusion from './Acto6Conclusion';

export default function PropuestaValorGame() {
  const [currentAct, setCurrentAct] = useState(0); // 0 = Selección, 1..4 = 4 Pilares del Libro, 5 = Conclusión
  const [selectedArchetypeId, setSelectedArchetypeId] = useState('martin');

  const handleActChange = (newAct) => {
    setCurrentAct(newAct);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentArchetype = JUEGO_DATA.archetypes.find(a => a.id === selectedArchetypeId) || JUEGO_DATA.archetypes[0];
  const currentProfileData = JUEGO_DATA.profiles[selectedArchetypeId] || JUEGO_DATA.profiles.martin;

  const ACT_LABELS = [
    "Paso 0: Elegir Turista",
    "Pilar 1: El Lienzo del Cliente",
    "Pilar 2: Diseñar y Encajar",
    "Pilar 3: Probar sin Quebrar",
    "Pilar 4: Ajustar y Evolucionar",
    "Maestría Final"
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 flex flex-col justify-between selection:bg-amber-200">
      
      {/* Barra Superior con botón para volver e indicador secuencial */}
      <header className="px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-200/80 bg-white/70 backdrop-blur-xs">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/academia/cursos/propuesta-valor"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-800 transition-colors"
            title="Salir al temario del curso"
          >
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Temario</span>
          </Link>

          {currentAct > 0 && (
            <button
              onClick={() => handleActChange(currentAct - 1)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-slate-900 bg-white hover:bg-slate-100 text-xs font-black uppercase tracking-wider text-slate-900 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
              title="Volver a la etapa anterior"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-700" />
              <span>Volver {currentAct === 1 ? 'a Personajes' : `al Pilar ${currentAct - 1}`}</span>
            </button>
          )}
        </div>
        
        {/* Indicador de paso actual (solo informativo, no saltable) */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider px-3.5 py-1 bg-slate-900 text-white rounded-full">
            {ACT_LABELS[currentAct]}
          </span>
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-slate-400 hidden md:inline">
          Strategyzer × Nicky Case
        </span>
      </header>

      {/* Escenario Central */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
        {/* ACTO 0: SELECCIÓN DE ARQUETIPO */}
        {currentAct === 0 && (
          <SeleccionArquetipo
            archetypes={JUEGO_DATA.archetypes}
            selectedArchetypeId={selectedArchetypeId}
            onSelect={(id) => setSelectedArchetypeId(id)}
            onContinue={() => handleActChange(1)}
          />
        )}

        {/* ACTO 1: EL LIENZO (PILAR 1) */}
        {currentAct === 1 && (
          <Acto1Diseccion
            archetype={currentArchetype}
            profileData={currentProfileData}
            onComplete={() => handleActChange(2)}
            onBack={() => handleActChange(0)}
          />
        )}

        {/* ACTO 2: DISEÑAR Y ENCAJAR (PILAR 2: CÍRCULO 25 CLIENTES + 3 ENCAJES) */}
        {currentAct === 2 && (
          <Acto2DisenoEncaje
            archetype={currentArchetype}
            profileData={currentProfileData}
            onComplete={() => handleActChange(3)}
            onBack={() => handleActChange(1)}
          />
        )}

        {/* ACTO 3: PROBAR SIN QUEBRAR (PILAR 3: TESTING BUSINESS IDEAS) */}
        {currentAct === 3 && (
          <Acto4Experimentos
            archetype={currentArchetype}
            profileData={currentProfileData}
            onComplete={() => handleActChange(4)}
            onBack={() => handleActChange(2)}
          />
        )}

        {/* ACTO 4: AJUSTAR Y EVOLUCIONAR (PILAR 4: EL PIVOTE) */}
        {currentAct === 4 && (
          <Acto5Pivote
            archetype={currentArchetype}
            profileData={currentProfileData}
            onComplete={() => handleActChange(5)}
            onBack={() => handleActChange(3)}
          />
        )}

        {/* ACTO 5: CONCLUSIÓN Y MAESTRÍA (LAS 3 REGLAS DE ORO) */}
        {currentAct === 5 && (
          <Acto6Conclusion
            data={JUEGO_DATA}
            onReplayWithOther={() => handleActChange(0)}
            onBack={() => handleActChange(4)}
          />
        )}
      </main>

      {/* Pie de página limpio y sin botones de salto ni sonido */}
      <div className="py-2 text-center text-[10px] font-mono font-bold text-slate-400 select-none">
        Simulador Didáctico Interactivo • Diseñando la Propuesta de Valor
      </div>
    </div>
  );
}
