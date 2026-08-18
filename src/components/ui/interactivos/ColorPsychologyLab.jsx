'use client';
import React, { useState } from 'react';
import { Palette, Droplet } from 'lucide-react';
import Image from 'next/image';

export default function ColorPsychologyLab({ data }) {
  const { emotions, mentor } = data;
  const [selectedEmotionId, setSelectedEmotionId] = useState(emotions[0].id);

  const selectedEmotion = emotions.find(e => e.id === selectedEmotionId);

  // Mapeo dinámico para Tailwind safelisting (ya que Tailwind no purga clases generadas dinámicamente si no están explícitas)
  // Como usamos nombres base, mapearemos los colores directamente o usaremos inline styles para los fondos si es más seguro.
  // Pero como son Tailwind colors estándar, usaremos un diccionario.
  const colorMap = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    red: { bg: 'bg-red-600', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
    green: { bg: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    slate: { bg: 'bg-slate-900', text: 'text-slate-900', light: 'bg-slate-100', border: 'border-slate-300' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-500', light: 'bg-emerald-50', border: 'border-emerald-200' },
    rose: { bg: 'bg-rose-500', text: 'text-rose-500', light: 'bg-rose-50', border: 'border-rose-200' },
    amber: { bg: 'bg-amber-500', text: 'text-amber-500', light: 'bg-amber-50', border: 'border-amber-200' },
    fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-500', light: 'bg-fuchsia-50', border: 'border-fuchsia-200' }
  };

  const primary = colorMap[selectedEmotion.primaryColor] || colorMap.blue;
  const secondary = colorMap[selectedEmotion.secondaryColor] || colorMap.slate;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
      
      {/* Header Instructor */}
      <div className="bg-slate-50 p-6 md:p-8 flex items-center gap-6 border-b border-slate-100 transition-colors duration-500">
        <div className={`w-24 h-24 rounded-full ${primary.light} border-4 border-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0 transition-colors duration-500`}>
          <Image src={mentor.avatar} alt={mentor.name} className="w-20 h-20 object-contain mt-4" width={1000} height={1000} unoptimized={true} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-xl">{mentor.name}</h3>
          <p className={`text-sm font-semibold ${primary.text} mb-2 transition-colors duration-500`}>{mentor.role}</p>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm relative">
            <p className="text-slate-600 leading-relaxed text-sm">{mentor.intro}</p>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Selector de Emociones */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Palette className="w-4 h-4" />
            {data.labels?.prompt || "¿Qué deseas transmitir?"}
          </h4>
          
          <div className="flex flex-col gap-3">
            {emotions.map(emotion => {
              const isSelected = selectedEmotionId === emotion.id;
              const emPrimary = colorMap[emotion.primaryColor];
              return (
                <button
                  key={emotion.id}
                  onClick={() => setSelectedEmotionId(emotion.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${isSelected ? `${emPrimary.border} ${emPrimary.light} shadow-sm` : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                >
                  <div className={`w-6 h-6 rounded-full shadow-inner ${emPrimary.bg}`}></div>
                  <span className={`font-bold ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>{emotion.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Laboratorio Visual */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`p-8 rounded-3xl ${primary.light} border ${primary.border} transition-all duration-500 relative overflow-hidden`}>
            
            {/* Decoración de fondo */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full ${primary.bg} opacity-5 blur-3xl transition-all duration-500`}></div>
            <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full ${secondary.bg} opacity-5 blur-3xl transition-all duration-500`}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl ${primary.bg} shadow-lg transition-colors duration-500 flex items-center justify-center`}>
                  <Droplet className="w-6 h-6 text-white opacity-80" />
                </div>
                <div className={`w-10 h-10 rounded-xl ${secondary.bg} shadow-md transition-colors duration-500`}></div>
              </div>
              
              <h2 className={`text-3xl font-black mb-4 ${primary.text} transition-colors duration-500`}>
                {selectedEmotion.label}
              </h2>
              
              <p className="text-slate-700 leading-relaxed mb-8 font-medium">
                {selectedEmotion.description}
              </p>

              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{data.labels?.brands || "Marcas que usan esta psicología:"}</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedEmotion.exampleBrands.map(brand => (
                    <span key={brand} className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-bold text-slate-700 border border-white shadow-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
