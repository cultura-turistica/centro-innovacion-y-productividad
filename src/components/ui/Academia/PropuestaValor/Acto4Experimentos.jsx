import React, { useState, useEffect } from 'react';
import NotaProbarMenorCosto from './NotaProbarMenorCosto';
import { ArrowRight, ArrowLeft, X, Play, DollarSign, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

export default function Acto4Experimentos({ archetype, profileData, onComplete, onBack }) {
  const [isTheoryModalOpen, setIsTheoryModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Actividad interactiva: Experimento Lean del Arquetipo
  const leanData = profileData.leanExperiment;
  const [selectedExpId, setSelectedExpId] = useState(null);
  const [shuffledExperiments, setShuffledExperiments] = useState([]);
  const [isExperimentSolved, setIsExperimentSolved] = useState(false);

  useEffect(() => {
    if (leanData?.experiments) {
      const exps = [...leanData.experiments];
      for (let i = exps.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [exps[i], exps[j]] = [exps[j], exps[i]];
      }
      setShuffledExperiments(exps);
    }
  }, [archetype?.id, leanData]);

  const activeExp = leanData?.experiments?.find(e => e.id === selectedExpId);

  const handleSelectExperiment = (exp) => {
    setSelectedExpId(exp.id);
    if (exp.isWinner) {
      setIsExperimentSolved(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-6 text-center animate-in fade-in duration-500">
      
      {/* Cabecera Principal */}
      <div className="space-y-3 w-full">
        <div className="flex items-center justify-between w-full">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Pilar 2
            </button>
          ) : <div />}
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-emerald-200 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Pilar 3: Probar sin Quebrar
          </span>
          <div className="w-28 hidden sm:block" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          ¿Cómo Probar una Propuesta de Valor al Menor Costo?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
          Antes de comprometer capital o edificar infraestructura, el método de Alexander Osterwalder exige validar si existe demanda real y disposición de pago comprobada mediante experimentos de bajo riesgo.
        </p>
      </div>

      {/* NOTA INFORMATIVA CON EJEMPLOS REALES EN OTRAS INDUSTRIAS */}
      <NotaProbarMenorCosto />

      {/* RETO PRÁCTICO INTERACTIVO: EL EXPERIMENTO DEL ARQUETIPO */}
      {leanData && (
        <div className="w-full bg-white p-6 md:p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-6 text-left animate-in fade-in">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                Misión de Validación Práctica
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Diseña el Experimento de Menor Costo para {archetype.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-400 text-emerald-900 text-xs font-mono font-black self-start sm:self-auto">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>Presupuesto Inicial: $5,000 USD</span>
            </div>
          </div>

          {/* Tarjeta de Hipótesis y Tarjeta de Prueba */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-rose-50 rounded-[22px] border-2 border-rose-300 space-y-2">
              <div className="flex items-center gap-2 text-rose-900">
                <ShieldAlert className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-wider">
                  {leanData.hypothesisCard.title}
                </span>
              </div>
              <p className="text-xs text-rose-950 font-bold leading-relaxed">
                "{leanData.hypothesisCard.creemosQue}"
              </p>
              <span className="text-[10px] font-bold text-rose-700 block">
                ⚠️ {leanData.hypothesisCard.criticidad}
              </span>
            </div>

            <div className="p-4 bg-indigo-50 rounded-[22px] border-2 border-indigo-300 space-y-2">
              <div className="flex items-center gap-2 text-indigo-900">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase tracking-wider">
                  {leanData.testCard.title}
                </span>
              </div>
              <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                <strong>Para verificar:</strong> {leanData.testCard.paraVerificar}
              </p>
              <p className="text-[11px] text-indigo-800 leading-tight">
                <strong>Métrica de éxito:</strong> {leanData.testCard.tendremosRazonSi}
              </p>
            </div>
          </div>

          {/* Opciones de Experimentos */}
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
              ¿Qué decisión de inversión tomas para validar esta hipótesis?
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(shuffledExperiments.length > 0 ? shuffledExperiments : leanData.experiments).map((exp, idx) => {
                const isSelected = selectedExpId === exp.id;
                const isRevealed = selectedExpId !== null;

                return (
                  <button
                    key={exp.id}
                    onClick={() => handleSelectExperiment(exp)}
                    className={`p-4 rounded-[22px] border-[2.5px] transition-all text-left flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? exp.isWinner
                          ? 'bg-emerald-50 border-emerald-600 shadow-[3px_3px_0px_0px_#059669]'
                          : 'bg-rose-50 border-rose-600 shadow-[3px_3px_0px_0px_#e11d48]'
                        : isRevealed
                        ? 'bg-white border-slate-300 opacity-60'
                        : 'bg-white hover:bg-slate-50 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]'
                    }`}
                  >
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-slate-300 bg-slate-100 text-slate-700">
                          {isRevealed ? exp.type : `Opción ${String.fromCharCode(65 + idx)}`}
                        </span>
                        <span className="font-mono text-xs font-black text-slate-800">
                          Costo: ${exp.cost} USD
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                        {exp.name}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                      <span>Certeza esperada:</span>
                      <span className="font-mono">{isRevealed ? exp.evidenceScore : "???"}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback del Experimento Seleccionado */}
          {activeExp && (
            <div className={`p-4 rounded-[22px] border-[2.5px] space-y-2 animate-in zoom-in-95 ${
              activeExp.isWinner 
                ? 'bg-emerald-100/80 border-emerald-600 text-emerald-950' 
                : 'bg-rose-100/80 border-rose-600 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                  {activeExp.isWinner ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>¡Excelente Decisión Metodológica!</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-rose-700" />
                      <span>¡Cuidado! Error de Inversión Prematura</span>
                    </>
                  )}
                </span>
                <span className="font-mono font-black text-xs">
                  Caja Restante: ${activeExp.cashLeft} USD
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {activeExp.outcome}
              </p>
              {!activeExp.isWinner && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-rose-900">
                    💡 Vuelve a intentar seleccionando un experimento de menor costo y mayor agilidad.
                  </span>
                </div>
              )}
            </div>
          )}

        </div>
      )}

      {/* Barra de Acciones del Pilar 3 (SOLO ACTIVA TRAS SUPERAR EL EXPERIMENTO) */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
        <button
          onClick={onComplete}
          disabled={!isExperimentSolved}
          className={`w-full sm:w-auto py-3.5 px-8 rounded-full border-[2.5px] border-slate-900 font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_0px_#0f172a] flex items-center justify-center gap-2 ${
            isExperimentSolved
              ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer'
              : 'bg-slate-100 text-slate-400 border-slate-300 opacity-60 cursor-not-allowed shadow-none'
          }`}
        >
          <span>{isExperimentSolved ? "Continuar al Pilar 4: Ajustar y Evolucionar" : "Supera el experimento de bajo costo para avanzar 🔒"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {isExperimentSolved && (
          <button
            onClick={() => setIsTheoryModalOpen(true)}
            className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_0px_#0f172a] flex items-center justify-center gap-2 animate-in fade-in"
          >
            <Play className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>Ver Video: Metodología Oficial del Pilar 3</span>
          </button>
        )}
      </div>

      {/* MODAL TEÓRICO DEL PILAR 3 (SOLO TÍTULO Y VIDEO VERTICAL) */}
      {isTheoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[32px] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-5 sm:p-6 space-y-5 text-left my-6 max-h-[95vh] overflow-y-auto">
            
            {/* Encabezado del Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider block">
                  Metodología Oficial Strategyzer (Alexander Osterwalder & David Bland)
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Pilar 3: Probar sin Quebrar (Experimentos Lean)
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                }}
                className="p-1.5 rounded-full hover:bg-slate-100 border-2 border-slate-900 text-slate-700 transition-colors cursor-pointer shrink-0"
                title="Cerrar Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reproductor Vertical de Video (YouTube Shorts: coTyxfvqpgY) */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[24px] overflow-hidden border-[3px] border-slate-900 bg-slate-950 shadow-[6px_6px_0px_0px_#0f172a]">
                {!isVideoPlaying ? (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
                    title="Reproducir video explicativo del Pilar 3"
                  >
                    <img
                      src="https://img.youtube.com/vi/coTyxfvqpgY/hqdefault.jpg"
                      alt="Portada Video Pilar 3"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-rose-600 border-2 border-white flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300">
                        <Play className="w-9 h-9 ml-1 fill-white" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                        Reproducir Video
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/coTyxfvqpgY?autoplay=1&rel=0"
                    title="Video Explicativo Pilar 3: Probar sin Quebrar"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </div>

            {/* Botones al Final del Modal */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                }}
                className="w-full sm:w-auto py-2.5 px-5 rounded-full border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                ✕ Cerrar
              </button>
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                  onComplete();
                }}
                className="w-full sm:w-auto py-2.5 px-6 rounded-full border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
              >
                Continuar al Pilar 4
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
