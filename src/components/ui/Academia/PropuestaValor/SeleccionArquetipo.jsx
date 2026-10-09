import React from 'react';
import NickyCharacter from './NickyCharacter';

export default function SeleccionArquetipo({ archetypes, selectedArchetypeId, onSelect, onContinue }) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 animate-in fade-in duration-500">
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-amber-300 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Paso 0: El Cliente Abstracto No Existe
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Elige a tu Turista de Prueba
        </h1>
        <p className="text-sm sm:text-base font-medium text-slate-600 max-w-xl mx-auto leading-relaxed">
          No puedes diseñar una propuesta de valor para “todo el mundo”. Cada cliente tiene dolores, miedos y expectativas radicalmente distintas. Elige a quién vas a investigar:
        </p>
      </div>

      {/* Los 3 Arquetipos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        {archetypes.map((arch) => {
          const isSelected = selectedArchetypeId === arch.id;

          return (
            <button
              key={arch.id}
              onClick={() => onSelect(arch.id)}
              className={`p-6 rounded-[32px] border-[3px] transition-all flex flex-col justify-between cursor-pointer text-left ${
                isSelected
                  ? 'border-slate-900 bg-white shadow-[6px_6px_0px_0px_#0f172a] -translate-y-1'
                  : 'border-slate-300 bg-white/70 hover:border-slate-500 hover:bg-white shadow-[2px_2px_0px_0px_#cbd5e1]'
              }`}
            >
              <div>
                {/* Avatar y Badge */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <NickyCharacter
                    color={arch.color}
                    hat={arch.hat}
                    mood={isSelected ? "happy" : "neutral"}
                    size={64}
                    isJumping={isSelected}
                  />
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    isSelected ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {arch.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-1">
                  {arch.name}
                </h3>
                <span className="text-xs font-bold text-slate-500 block mb-3">
                  {arch.tagline}
                </span>

                <p className="text-xs font-medium text-slate-600 leading-relaxed mb-4">
                  {arch.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <blockquote className="text-[11px] font-bold italic text-slate-800 leading-snug">
                  {arch.quote}
                </blockquote>
              </div>
            </button>
          );
        })}
      </div>

      {/* Botón de Confirmación */}
      {selectedArchetypeId && (
        <button
          onClick={onContinue}
          className="py-4 px-10 rounded-full border-[3px] border-slate-900 bg-slate-900 text-white font-black text-sm uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-0.5 animate-in zoom-in-95"
        >
          Investigar la Mente de este Turista 👉
        </button>
      )}
    </div>
  );
}
