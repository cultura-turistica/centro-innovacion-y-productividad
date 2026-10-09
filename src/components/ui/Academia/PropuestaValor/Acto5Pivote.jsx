import React, { useState } from 'react';
import NickyCharacter from './NickyCharacter';
import { ArrowLeft, Filter, Play, X } from 'lucide-react';

export default function Acto5Pivote({ archetype, profileData, onComplete, onBack }) {
  const [isTheoryModalOpen, setIsTheoryModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentDilemmaIdx, setCurrentDilemmaIdx] = useState(0);
  const [selectedOptId, setSelectedOptId] = useState(null);

  // Múltiples dilemas de clientes (buenos, malos y sugerencias para rechazar)
  const dilemmas = profileData.pivotDilemmas || [profileData.pivotScenario];
  const currentDilemma = dilemmas[currentDilemmaIdx] || dilemmas[0];
  const activeOption = currentDilemma.options.find(o => o.id === selectedOptId);
  const isCorrect = activeOption?.isCorrect;
  const isLastDilemma = currentDilemmaIdx + 1 >= dilemmas.length;

  const handleSelectOption = (optId) => {
    setSelectedOptId(optId);
  };

  const handleNextDilemma = () => {
    setSelectedOptId(null);
    if (isLastDilemma) {
      onComplete();
    } else {
      setCurrentDilemmaIdx(prev => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-5 text-center animate-in fade-in duration-500">
      
      {/* Cabecera Principal */}
      <div className="space-y-3 w-full">
        <div className="flex items-center justify-between w-full">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Pilar 3
            </button>
          ) : <div />}
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-purple-200 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Pilar 4: Ajustar y Evolucionar (El Pivote)
          </span>
          <div className="w-28 hidden sm:block" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          El Filtro de Feedback: No Toda Sugerencia Debe Avanzar
        </h2>
        <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto">
          Tras la apertura, llegan opiniones de todo tipo. <strong>Saber decir NO a sugerencias destructivas es tan vital como pivotar ante dolores reales.</strong>
        </p>
      </div>

      {/* VISTA 1: MINI-JUEGO MULTI-DILEMAS */}
      <div className="w-full bg-white p-6 md:p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-6 animate-in fade-in">
          
          {/* Indicador de Progreso de Dilemas */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-black uppercase tracking-wider text-purple-900">
                Caso {currentDilemmaIdx + 1} de {dilemmas.length}: {currentDilemma.badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {dilemmas.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border border-slate-900 ${
                      idx < currentDilemmaIdx
                        ? 'bg-emerald-500'
                        : idx === currentDilemmaIdx
                        ? 'bg-purple-500 animate-pulse'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsTheoryModalOpen(true)}
                className="py-1.5 px-3.5 rounded-full border border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 font-black text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-[1.5px_1.5px_0px_0px_#0f172a] flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 text-rose-600 fill-rose-600" />
                <span>Video Pilar 4</span>
              </button>
            </div>
          </div>

          {/* PARTE 1: TESTIMONIO DE LA OPINIÓN DEL CLIENTE */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3 bg-amber-50 px-6 py-4 rounded-[28px] border-[2.5px] border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] max-w-xl text-xs md:text-sm font-bold text-slate-900 leading-snug text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">
                  📢 {currentDilemma.clientName}:
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-200 rounded-full border border-slate-900">
                  {currentDilemma.badge}
                </span>
              </div>
              {currentDilemma.feedbackQuote}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-50 border-r-[2.5px] border-b-[2.5px] border-slate-900 rotate-45" />
            </div>

            <NickyCharacter
              color={archetype.color}
              hat={archetype.hat}
              mood={isCorrect ? "excited" : activeOption ? "sad" : (currentDilemma.avatarMood || "neutral")}
              size={76}
              isJumping={isCorrect}
              isShaking={activeOption && !isCorrect}
            />
          </div>

          {/* PARTE 2: LECCIÓN DE FILTRO */}
          <div className="p-3.5 bg-slate-50 rounded-[20px] border border-slate-300 text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-0.5">
              💡 Criterio del Diseñador de Valor:
            </span>
            <p className="text-xs text-slate-700 font-medium">
              {currentDilemma.teaching}
            </p>
          </div>

          {/* PARTE 3: LAS 3 OPCIONES INTERACTIVAS */}
          <div className="space-y-3 text-left">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
              ¿Cómo respondes a esta opinión?
            </span>

            <div className="grid grid-cols-1 gap-3">
              {currentDilemma.options.map((opt) => {
                const isSelected = selectedOptId === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-4 rounded-[22px] border-[2.5px] transition-all text-left flex flex-col space-y-1.5 cursor-pointer ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-600 shadow-[3px_3px_0px_0px_#059669]'
                          : 'bg-rose-50 border-rose-600 shadow-[3px_3px_0px_0px_#e11d48]'
                        : 'bg-white hover:bg-slate-50 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-slate-900 ${
                        opt.archetypeChoice === 'Acierto'
                          ? 'bg-emerald-100 text-emerald-900'
                          : opt.archetypeChoice === 'Exceso'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-rose-100 text-rose-900'
                      }`}>
                        {opt.choiceType}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-600">
                        Satisfacción: {opt.satisfaction}%
                      </span>
                    </div>

                    <h4 className="text-xs md:text-sm font-black text-slate-900 leading-snug">
                      {opt.text}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PARTE 4: FEEDBACK DE LA DECISIÓN */}
          {activeOption && (
            <div className={`p-4 rounded-[22px] border-[2px] border-slate-900 text-left animate-in zoom-in-95 space-y-2 ${
              isCorrect ? 'bg-emerald-100 text-emerald-950' : 'bg-rose-100 text-rose-950'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider">
                  {isCorrect ? '🎯 ¡Excelente Criterio de Negocio!' : '⚠️ Cuidado con este camino'}
                </span>
                <span className="text-xs font-mono font-bold">
                  {activeOption.satisfaction}% de satisfacción
                </span>
              </div>
              <p className="text-xs md:text-sm font-medium leading-relaxed">
                {activeOption.feedback}
              </p>

              {isCorrect && (
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={handleNextDilemma}
                    className="w-full sm:w-auto py-3 px-6 rounded-full border-[2px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
                  >
                    {isLastDilemma
                      ? 'Finalizar y Ver Conclusión'
                      : `Siguiente Caso (${currentDilemmaIdx + 2} de ${dilemmas.length})`}
                  </button>
                  <button
                    onClick={() => setIsTheoryModalOpen(true)}
                    className="w-full sm:w-auto py-3 px-6 rounded-full border-[2px] border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 text-rose-600 fill-rose-600" />
                    <span>Ver Video: Metodología Oficial del Pilar 4</span>
                  </button>
                </div>
              )}
            </div>
          )}
      </div>

      {/* MODAL TEÓRICO DEL PILAR 4 (SOLO TÍTULO Y VIDEO VERTICAL) */}
      {isTheoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[32px] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-5 sm:p-6 space-y-5 text-left my-6 max-h-[95vh] overflow-y-auto">
            
            {/* Encabezado del Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-purple-700 tracking-wider block">
                  Metodología Oficial Strategyzer (Alexander Osterwalder & David Bland)
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Pilar 4: El Filtro de Opiniones y Evolución de la Oferta
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

            {/* Reproductor Vertical de Video (YouTube Shorts: VyEzitobXAc) */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[24px] overflow-hidden border-[3px] border-slate-900 bg-slate-950 shadow-[6px_6px_0px_0px_#0f172a]">
                {!isVideoPlaying ? (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
                    title="Reproducir video explicativo del Pilar 4"
                  >
                    <img
                      src="https://img.youtube.com/vi/VyEzitobXAc/hqdefault.jpg"
                      alt="Portada Video Pilar 4"
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
                    src="https://www.youtube.com/embed/VyEzitobXAc?autoplay=1&rel=0"
                    title="Video Explicativo Pilar 4: El Equilibrio de la Propuesta de Valor"
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
                  handleNextDilemma();
                }}
                className="w-full sm:w-auto py-2.5 px-6 rounded-full border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
              >
                {isLastDilemma ? "Finalizar y Ver Conclusión" : "Siguiente Caso"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
