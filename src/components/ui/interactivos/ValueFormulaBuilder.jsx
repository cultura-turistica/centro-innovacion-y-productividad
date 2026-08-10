"use client";
import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export default function ValueFormulaBuilder({ data, themeColor = "#8b5cf6" }) {
  const [selections, setSelections] = useState({
    direccion: null,
    metrica: null,
    objeto: null,
    clarificador: null
  });
  const [showResult, setShowResult] = useState(false);

  if (!data || !data.options) return null;

  const handleSelect = (category, value) => {
    setSelections(prev => {
      const next = { ...prev, [category]: value };
      if (next.direccion && next.metrica && next.objeto && next.clarificador) {
        setTimeout(() => setShowResult(true), 500);
      }
      return next;
    });
  };

  const handleReset = () => {
    setSelections({ direccion: null, metrica: null, objeto: null, clarificador: null });
    setShowResult(false);
  };

  const isComplete = selections.direccion && selections.metrica && selections.objeto && selections.clarificador;

  const renderCategory = (key, label, colorClass) => {
    return (
      <div className="mb-6">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">{label}</h4>
        <div className="flex flex-wrap gap-3">
          {data.options[key].map((opt, idx) => {
            const isSelected = selections[key] === opt;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(key, opt)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border-2
                  ${isSelected 
                    ? `${colorClass} shadow-md scale-105` 
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
                  }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Layers className="w-8 h-8" style={{ color: themeColor }} />
          <h3 className="text-3xl font-black text-slate-800 tracking-tight">{data.title || "Constructor de Contrato Oculto"}</h3>
        </div>

        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
          {data.instructions}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Builder area */}
          <div className={`${showResult ? 'opacity-50 pointer-events-none transition-opacity' : ''}`}>
            {renderCategory('direccion', '1. Dirección', 'bg-violet-100 border-violet-500 text-violet-700')}
            {renderCategory('metrica', '2. Métrica', 'bg-blue-100 border-blue-500 text-blue-700')}
            {renderCategory('objeto', '3. Objeto', 'bg-emerald-100 border-emerald-500 text-emerald-700')}
            {renderCategory('clarificador', '4. Clarificador Contextual', 'bg-amber-100 border-amber-500 text-amber-700')}
          </div>

          {/* Result area */}
          <div className="flex flex-col h-full">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Tu Contrato Oculto (Job to be Done)</h4>
            
            <div className={`flex-1 rounded-3xl border-2 p-8 flex flex-col justify-center transition-all duration-500 ${isComplete ? 'bg-slate-50 border-emerald-400 shadow-inner' : 'bg-slate-50 border-dashed border-slate-300'}`}>
              
              {!isComplete && (
                <div className="text-center text-slate-400">
                  <p>Selecciona una opción de cada categoría para formular el valor oculto.</p>
                </div>
              )}

              {isComplete && (
                <div className="animate-in fade-in zoom-in duration-500">
                  <div className="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-8">
                    <span className="text-violet-600 inline-block mb-2 mr-2">{selections.direccion}</span>
                    <span className="text-blue-600 inline-block mb-2 mr-2">{selections.metrica}</span>
                    <span className="text-emerald-600 inline-block mb-2 mr-2">{selections.objeto}</span>
                    <br/>
                    <span className="text-amber-600 font-bold bg-amber-100 px-3 py-1 rounded-lg mt-2 inline-block text-xl">
                      {selections.clarificador}
                    </span>
                  </div>

                  {showResult && (
                    <div className="bg-emerald-100 text-emerald-800 p-4 rounded-2xl flex items-start gap-3 animate-in slide-in-from-bottom-4">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-600" />
                      <div>
                        <p className="font-bold mb-1">¡Fórmula Completada!</p>
                        <p className="text-sm text-emerald-700">Este es el verdadero trabajo por el cual te contratan. No vendes características, vendes la solución a esta fórmula.</p>
                      </div>
                    </div>
                  )}

                  {showResult && (
                    <button 
                      onClick={handleReset}
                      className="mt-6 flex items-center gap-2 text-slate-500 hover:text-slate-800 font-semibold transition-colors mx-auto"
                    >
                      <RotateCcw size={16} /> Crear otra fórmula
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
