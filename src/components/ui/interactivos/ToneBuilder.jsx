'use client';
import React, { useState } from 'react';
import { MessageSquareQuote, Check } from 'lucide-react';
import Image from 'next/image';

export default function ToneBuilder({ data }) {
  const { situations, tones, mentor } = data;
  
  const [selectedSituationId, setSelectedSituationId] = useState(situations[0].id);
  const [selectedToneId, setSelectedToneId] = useState(tones[0].id);

  const selectedSituation = situations.find(s => s.id === selectedSituationId);
  const selectedTone = tones.find(t => t.id === selectedToneId);

  const message = selectedTone.messages[selectedSituation.id];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
      
      {/* Header Instructor */}
      <div className="bg-slate-50 p-6 md:p-8 flex items-center gap-6 border-b border-slate-100">
        <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
          <Image src={mentor.avatar} alt={mentor.name} className="w-20 h-20 object-contain mt-4" width={1000} height={1000} unoptimized={true} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-xl">{mentor.name}</h3>
          <p className="text-sm font-semibold text-orange-500 mb-2">{mentor.role}</p>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm relative">
            <p className="text-slate-600 leading-relaxed text-sm">{mentor.intro}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controles */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Situaciones */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Situación a Comunicar</h4>
              <div className="flex flex-col gap-3">
                {situations.map(sit => {
                  const isSelected = sit.id === selectedSituationId;
                  return (
                    <button
                      key={sit.id}
                      onClick={() => setSelectedSituationId(sit.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${isSelected ? 'border-slate-800 bg-slate-800 text-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-300 text-slate-600'}`}
                    >
                      <span className="font-bold block mb-1">{sit.label}</span>
                      <span className={`text-xs block truncate ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>"{sit.baseMessage}"</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tonos */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Elige un Tono de Voz</h4>
              <div className="grid grid-cols-2 gap-3">
                {tones.map(tone => {
                  const isSelected = tone.id === selectedToneId;
                  return (
                    <button
                      key={tone.id}
                      onClick={() => setSelectedToneId(tone.id)}
                      className={`p-3 rounded-2xl border-2 text-left flex flex-col justify-between min-h-[100px] transition-all duration-300 ${isSelected ? 'border-orange-500 bg-orange-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className={`w-4 h-4 rounded-full ${tone.color}`}></div>
                        {isSelected && <Check className="w-4 h-4 text-orange-500" />}
                      </div>
                      <span className="font-bold text-sm text-slate-700 leading-tight">{tone.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Resultado (Simulador de Chat/Email) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="bg-slate-100 rounded-3xl p-6 md:p-10 relative">
              
              {/* Header decorativo estilo ventana */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div className="mt-8 relative">
                <div className="absolute -left-4 -top-4 text-slate-300">
                  <MessageSquareQuote className="w-12 h-12 opacity-50" />
                </div>
                
                <div className="bg-white p-8 rounded-2xl rounded-tl-none shadow-sm relative z-10 animate-in fade-in zoom-in duration-300" key={message}>
                  <p className="text-slate-800 text-xl leading-relaxed font-medium">
                    {message}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Contexto:</span>
                    <span className="text-sm font-semibold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm">{selectedSituation.label}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tono:</span>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full shadow-sm">{selectedTone.name}</span>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
