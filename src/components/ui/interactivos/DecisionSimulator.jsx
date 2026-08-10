"use client";
import React, { useState } from 'react';
import { Scale, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, RefreshCcw } from 'lucide-react';

export default function DecisionSimulator({ data }) {
  const { badge, title, description, scenarios } = data;
  
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const currentScenario = scenarios[currentScenarioIndex];
  
  const handleOptionSelect = (option) => {
    if (selectedOption) return; // Prevent changing answer after selection
    setSelectedOption(option);
  };
  
  const handleNextScenario = () => {
    setSelectedOption(null);
    setCurrentScenarioIndex(prev => prev + 1);
  };
  
  const handleReset = () => {
    setSelectedOption(null);
    setCurrentScenarioIndex(0);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto my-16 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-rose-100/30">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-700 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-rose-200">
          <Scale className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-slate-500 text-lg" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      {currentScenarioIndex < scenarios.length ? (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-md p-6 md:p-10">
          {/* Scenario Context */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-slate-100 text-slate-600 rounded-xl flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {data.labels?.scenario || "Escenario"} {currentScenarioIndex + 1} {data.labels?.of || "de"} {scenarios.length}
                </h3>
                <p className="text-slate-800 text-lg leading-relaxed font-medium">
                  {currentScenario.context}
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl">
              <p className="text-indigo-900 font-bold">
                {currentScenario.question}
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {currentScenario.options.map(option => {
              const isSelected = selectedOption?.id === option.id;
              const isRevealed = selectedOption !== null;
              
              let styleClass = "bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 cursor-pointer";
              let icon = null;
              
              if (isRevealed) {
                if (isSelected) {
                  if (option.type === 'success') {
                    styleClass = "bg-emerald-50 border-emerald-500 shadow-md";
                    icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />;
                  } else if (option.type === 'warning') {
                    styleClass = "bg-amber-50 border-amber-500 shadow-md";
                    icon = <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />;
                  } else {
                    styleClass = "bg-rose-50 border-rose-500 shadow-md";
                    icon = <ShieldAlert className="w-5 h-5 text-rose-600 flex-shrink-0" />;
                  }
                } else {
                  styleClass = "bg-white border-slate-100 opacity-50 cursor-not-allowed grayscale";
                }
              }

              return (
                <div key={option.id} className="relative">
                  <button
                    onClick={() => handleOptionSelect(option)}
                    disabled={isRevealed}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-start gap-4 ${styleClass}`}
                  >
                    <div className="mt-0.5">
                      {isRevealed && isSelected ? (
                        icon
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"></div>
                      )}
                    </div>
                    <span className={`font-medium ${isRevealed && isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {option.text}
                    </span>
                  </button>
                  
                  {/* Feedback Card */}
                  {isRevealed && isSelected && (
                    <div className="mt-3 p-5 rounded-xl bg-slate-800 text-white shadow-lg ml-9 animate-fade-in">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Impacto en la Comunidad:</h4>
                      <p className="text-sm md:text-base leading-relaxed">
                        {option.impact}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Next Button */}
          {selectedOption && (
            <div className="mt-10 flex justify-end">
              <button 
                onClick={handleNextScenario}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md"
              >
                {currentScenarioIndex < scenarios.length - 1 ? 'Siguiente Escenario' : 'Ver Resultados'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-md p-10 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Simulación Completada</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            La mediación requiere paciencia, escucha activa y decisiones basadas en los acuerdos colectivos. Un tejido social fuerte es el principal atractivo de cualquier destino comunitario.
          </p>
          <button 
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-md"
          >
            <RefreshCcw className="w-4 h-4" />
            Reiniciar Simulador
          </button>
        </div>
      )}
      
    </div>
  );
}
