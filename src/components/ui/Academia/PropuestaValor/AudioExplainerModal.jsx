"use client";

import React, { useState } from 'react';
import { Volume2, VolumeX, X, Headphones } from 'lucide-react';

export default function AudioExplainerModal({ title, scriptText, actNumber, isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    if (typeof window === 'undefined') return;

    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(scriptText.replace(/[*_#]/g, ''));
      utterance.lang = 'es-CO';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis?.cancel();
    }
    setIsPlaying(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white rounded-[32px] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-6 md:p-8 space-y-5 animate-in zoom-in-95 duration-200 text-left">
        
        {/* Cabecera con Botón de Cerrar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-indigo-100 rounded-full border border-slate-900">
              <Headphones className="w-5 h-5 text-indigo-700" />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
                Explicación del Facilitador (Acto {actNumber})
              </span>
              <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
            title="Cerrar"
          >
            <X className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Reproductor de Voz */}
        <div className="p-4 bg-amber-50 rounded-[22px] border-[2px] border-slate-900 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-black text-slate-900 block">
              {isPlaying ? 'Reproduciendo audio...' : 'Audio explicativo disponible'}
            </span>
            <span className="text-[11px] text-slate-600">
              {isPlaying ? 'Escucha la traducción pedagógica del acto' : 'Haz clic para escuchar la voz del facilitador'}
            </span>
          </div>

          <button
            onClick={handleTogglePlay}
            className={`py-2 px-4 rounded-full border-[2px] border-slate-900 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] ${
              isPlaying
                ? 'bg-rose-500 text-white hover:bg-rose-600'
                : 'bg-emerald-400 text-slate-900 hover:bg-emerald-500'
            }`}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-4 h-4" /> Detener
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" /> Escuchar Voz
              </>
            )}
          </button>
        </div>

        {/* Texto del Guion para Lectura */}
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
            Transcripción del Facilitador:
          </span>
          <div className="p-4 bg-slate-50 rounded-[20px] border border-slate-200 max-h-60 overflow-y-auto text-xs md:text-sm text-slate-800 leading-relaxed space-y-2 font-medium">
            {scriptText.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Botón de Cierre */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleClose}
            className="py-2.5 px-6 rounded-full border-[2px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
          >
            Volver al Juego 👉
          </button>
        </div>

      </div>
    </div>
  );
}
