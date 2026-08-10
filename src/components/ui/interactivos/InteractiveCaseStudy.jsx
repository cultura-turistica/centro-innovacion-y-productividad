"use client";
import React, { useState } from 'react';
import { Lightbulb, Target, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function InteractiveCaseStudy({ data, themeColor = "#3b82f6" }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showRevelation, setShowRevelation] = useState(false);

  if (!data) return null;

  const handleSelect = (opcion) => {
    if (showRevelation) return;
    setSelectedOption(opcion);
    setShowRevelation(true);
  };

  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-200">
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8" style={{ color: themeColor }} />
          <h3 className="text-3xl font-black tracking-tight text-slate-800">Caso Real: {data.empresa}</h3>
        </div>
        
        <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">
          {data.titulo}
        </p>

        {/* Contexto */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100">
          <h4 className="font-bold uppercase tracking-widest text-xs mb-3" style={{ color: themeColor }}>El Desafío Inicial</h4>
          <div className="prose prose-slate max-w-none text-slate-700" dangerouslySetInnerHTML={{ __html: data.contexto }} />
        </div>

        {/* Pregunta Interactiva */}
        {!showRevelation && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
              <AlertCircle className="text-amber-500" />
              {data.pregunta || "¿Qué decisión tomarías tú como líder?"}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.opciones.map((opcion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(opcion)}
                  className="text-left p-6 rounded-2xl border-2 border-slate-100 bg-white hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md transition-all group"
                  style={{ '--hover-border': themeColor }}
                >
                  <span className="block font-bold text-slate-700 group-hover:text-blue-600 mb-2 transition-colors">
                    Opción {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    {opcion.texto}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Revelación */}
        {showRevelation && (
          <div className="mt-10 pt-10 border-t border-slate-100 animate-in zoom-in-95 duration-500">
            <div className="flex items-start gap-4 mb-8">
              <div className={`p-3 rounded-full flex-shrink-0 ${selectedOption?.esCorrecta ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                {selectedOption?.esCorrecta ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-2 ${selectedOption?.esCorrecta ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {selectedOption?.esCorrecta ? "¡Pensamiento de Innovador!" : "Esa es la trampa corporativa común."}
                </h4>
                <p className="text-slate-600">
                  {selectedOption?.retroalimentacion}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
              <Lightbulb className="absolute -top-6 -right-6 w-32 h-32 text-blue-500/10" />
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4" style={{ color: themeColor }}>Lo que realmente sucedió</h4>
              <div className="prose prose-slate max-w-none text-slate-800" dangerouslySetInnerHTML={{ __html: data.revelacion }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
