'use client';
import React, { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

export default function ArchetypeMatcher({ data, themeColor }) {
  const { archetypes, gameData } = data;
  
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [selectedArchetype, setSelectedArchetype] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const currentMatch = gameData.matches[currentMatchIndex];

  const handleSelect = (archId) => {
    if (selectedArchetype !== null) return; // Ya seleccionó en este turno
    
    setSelectedArchetype(archId);
    
    if (archId === currentMatch.archetypeId) {
      setIsCorrect(true);
      setScore(s => s + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentMatchIndex < gameData.matches.length - 1) {
      setCurrentMatchIndex(c => c + 1);
      setSelectedArchetype(null);
      setIsCorrect(null);
    } else {
      setGameFinished(true);
    }
  };

  const restart = () => {
    setCurrentMatchIndex(0);
    setSelectedArchetype(null);
    setIsCorrect(null);
    setScore(0);
    setGameFinished(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-4xl mx-auto">
      {/* Header Instructor */}
      <div className="bg-slate-50 p-6 md:p-8 flex items-center gap-6 border-b border-slate-100">
        <div className="w-24 h-24 rounded-full bg-indigo-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
          <img src={data.mentor.avatar} alt={data.mentor.name} className="w-20 h-20 object-contain mt-4" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-xl">{data.mentor.name}</h3>
          <p className="text-sm font-semibold text-indigo-500 mb-2">{data.mentor.role}</p>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm relative">
            <p className="text-slate-600 leading-relaxed text-sm">{data.mentor.intro}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {!gameFinished ? (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-widest mb-2">Marca a analizar ({currentMatchIndex + 1}/{gameData.matches.length})</p>
              
              {currentMatch.logo ? (
                <div className="flex justify-center h-20 md:h-24 my-4">
                  <img src={currentMatch.logo} alt={currentMatch.brand} className="h-full w-auto object-contain drop-shadow-sm" />
                </div>
              ) : (
                <h2 className="text-4xl md:text-6xl font-black text-slate-800">{currentMatch.brand}</h2>
              )}
              
              <p className="text-slate-500 mt-4">{gameData.instruction}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {archetypes.map((arch) => {
                const isSelected = selectedArchetype === arch.id;
                const isCorrectAnswer = arch.id === currentMatch.archetypeId;
                
                let btnStateClass = "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md";
                
                if (selectedArchetype !== null) {
                   if (isCorrectAnswer) {
                     btnStateClass = "bg-emerald-50 border-emerald-500 shadow-emerald-100 text-emerald-800";
                   } else if (isSelected && !isCorrectAnswer) {
                     btnStateClass = "bg-red-50 border-red-500 shadow-red-100 text-red-800 opacity-50";
                   } else {
                     btnStateClass = "bg-slate-50 border-slate-200 opacity-50";
                   }
                }

                return (
                  <button
                    key={arch.id}
                    onClick={() => handleSelect(arch.id)}
                    disabled={selectedArchetype !== null}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${btnStateClass}`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{arch.name}</h4>
                        {selectedArchetype !== null && isCorrectAnswer && <Check className="w-6 h-6 text-emerald-500" />}
                        {isSelected && !isCorrectAnswer && <X className="w-6 h-6 text-red-500" />}
                      </div>
                      <p className="text-sm opacity-80">{arch.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {selectedArchetype !== null && (
              <div className="flex justify-center pt-6 animate-in fade-in zoom-in duration-300">
                <button 
                  onClick={handleNext}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-colors"
                >
                  {currentMatchIndex < gameData.matches.length - 1 ? "Siguiente Marca" : "Ver Resultados"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6 py-8 animate-in fade-in zoom-in duration-500">
            <div className="w-32 h-32 mx-auto bg-indigo-50 rounded-full flex items-center justify-center">
              <span className="text-5xl font-black text-indigo-500">{score}/{gameData.matches.length}</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800">¡Análisis Completado!</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              {score === gameData.matches.length 
                ? "¡Excelente! Tienes un ojo clínico para detectar la personalidad detrás de las marcas." 
                : "Buen trabajo. Identificar arquetipos requiere práctica para ver más allá del logo."}
            </p>
            <button 
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-bold hover:bg-slate-200 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reintentar Ejercicio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
