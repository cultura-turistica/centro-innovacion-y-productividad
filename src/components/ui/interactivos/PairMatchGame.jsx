"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function PairMatchGame({ data, themeColor = "#8b5cf6" }) {
  if (!data || !data.pairs) return null;
  
  const { title, description, pairs } = data;
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [errorDef, setErrorDef] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (matchedPairs.length === pairs.length) {
      setIsCompleted(true);
    }
  }, [matchedPairs, pairs.length]);

  const handleTermClick = (id) => {
    if (matchedPairs.includes(id)) return;
    setSelectedTerm(selectedTerm === id ? null : id);
    setErrorDef(null);
  };

  const handleDefClick = (id) => {
    if (!selectedTerm) return;
    if (matchedPairs.includes(id)) return;

    if (selectedTerm === id) {
      setMatchedPairs([...matchedPairs, id]);
      setSelectedTerm(null);
      setErrorDef(null);
    } else {
      setErrorDef(id);
      setTimeout(() => setErrorDef(null), 800);
    }
  };

  // Mezclar definiciones
  const [shuffledDefs, setShuffledDefs] = useState([]);
  useEffect(() => {
    setShuffledDefs([...pairs].sort(() => Math.random() - 0.5));
  }, [pairs]);

  return (
    <div className="w-full mx-auto my-16 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-100">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4" style={{ color: themeColor }}>
          {title}
        </h2>
        <p 
          className="text-slate-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Términos */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-700 text-center mb-6 uppercase tracking-wider">Concepto</h3>
          {pairs.map((pair) => {
            const isMatched = matchedPairs.includes(pair.id);
            const isSelected = selectedTerm === pair.id;

            return (
              <button
                key={`term-${pair.id}`}
                onClick={() => handleTermClick(pair.id)}
                className={`w-full p-4 rounded-xl font-bold text-left transition-all ${
                  isMatched 
                    ? "bg-slate-100 text-slate-400 cursor-default border-2 border-slate-200" 
                    : isSelected
                      ? "ring-4 ring-offset-2 scale-105"
                      : "hover:scale-105 shadow-sm border-2 border-transparent"
                }`}
                style={{ 
                  backgroundColor: isMatched ? undefined : (pair.termBg || themeColor),
                  color: isMatched ? undefined : (pair.termBg ? '#1e293b' : 'white'),
                  '--tw-ring-color': themeColor
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{pair.term}</span>
                  {isMatched && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Definiciones */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-700 text-center mb-6 uppercase tracking-wider">Ejemplo / Definición</h3>
          {shuffledDefs.map((pair) => {
            const isMatched = matchedPairs.includes(pair.id);
            const isError = errorDef === pair.id;

            return (
              <button
                key={`def-${pair.id}`}
                onClick={() => handleDefClick(pair.id)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  isMatched 
                    ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-200 cursor-default" 
                    : isError
                      ? "bg-rose-50 text-rose-700 border-2 border-rose-400 animate-shake"
                      : "bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{pair.definition}</span>
                  {isError && <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isCompleted && (
        <div className="mt-12 p-8 bg-emerald-50 rounded-2xl border-2 border-emerald-200 text-center animate-fade-in">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-800 mb-2">¡Excelente!</h3>
          <p className="text-emerald-700">Has logrado emparejar todas las acciones SMART correctamente.</p>
        </div>
      )}
    </div>
  );
}
