"use client";
import React, { useState } from 'react';
import { X, Check, Users, ShieldAlert, CheckCircle2, RefreshCcw } from 'lucide-react';

export default function AudienceSelector({ data, themeColor = "#ef4444" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState(null); // 'win', 'lose_mass_market', 'lose_wrong'

  if (!data || !data.profiles) return null;

  const currentProfile = data.profiles[currentIndex];

  const handleSelect = (profile) => {
    if (profile.isEarlyAdopter) {
      setResult({ status: 'win', message: profile.feedback });
    } else {
      setResult({ status: 'lose', message: profile.feedback });
    }
  };

  const handleReject = () => {
    if (currentIndex < data.profiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Out of cards
      setResult({ status: 'empty', message: "Rechazaste a todos. Recuerda que siempre hay un Early Adopter dispuesto a probar tu MVP." });
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setResult(null);
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8" style={{ color: themeColor }} />
          <h3 className="text-3xl font-black text-slate-800 tracking-tight">{data.title || "Selector de Audiencia para MVP"}</h3>
        </div>

        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
          {data.instructions}
        </p>

        <div className="max-w-md mx-auto">
          {!result && currentProfile && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-300">
              {/* Card */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 mb-8 text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: themeColor }}></div>
                
                <h4 className="text-2xl font-black text-slate-800 mb-2">{currentProfile.type}</h4>
                <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                  {currentProfile.budget}
                </div>
                
                <p className="text-slate-600 italic mb-6">"{currentProfile.quote}"</p>
                
                <ul className="text-left text-sm text-slate-500 space-y-3 mb-4">
                  {currentProfile.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span> {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-6">
                <button 
                  onClick={handleReject}
                  className="w-16 h-16 rounded-full bg-white border-2 border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-50 hover:border-rose-400 hover:scale-110 transition-all shadow-md"
                  title="Descartar"
                >
                  <X size={32} strokeWidth={3} />
                </button>
                <button 
                  onClick={() => handleSelect(currentProfile)}
                  className="w-16 h-16 rounded-full bg-white border-2 border-emerald-200 text-emerald-500 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-400 hover:scale-110 transition-all shadow-md"
                  title="Seleccionar para mi MVP"
                >
                  <Check size={32} strokeWidth={3} />
                </button>
              </div>
              <p className="text-center text-slate-400 text-xs font-bold uppercase mt-6 tracking-widest">
                Perfil {currentIndex + 1} de {data.profiles.length}
              </p>
            </div>
          )}

          {result && (
            <div className="animate-in zoom-in-95 duration-300">
              <div className={`p-8 rounded-3xl border-2 text-center ${
                result.status === 'win' ? 'bg-emerald-50 border-emerald-200' : 
                result.status === 'lose' ? 'bg-rose-50 border-rose-200' :
                'bg-slate-50 border-slate-200'
              }`}>
                {result.status === 'win' ? (
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                ) : (
                  <ShieldAlert className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                )}
                
                <h4 className={`text-2xl font-black mb-4 ${
                  result.status === 'win' ? 'text-emerald-800' : 'text-rose-800'
                }`}>
                  {result.status === 'win' ? '¡Excelente decisión!' : 'Peligro para tu MVP'}
                </h4>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  {result.message}
                </p>

                <button 
                  onClick={handleReset}
                  className="px-6 py-3 bg-white border border-slate-300 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 mx-auto"
                >
                  <RefreshCcw size={18} /> Volver a intentar
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
          <div className="text-amber-500 mt-1 font-black text-xl">💡</div>
          <div>
            <p className="text-slate-800 font-bold mb-1">El Secreto del Early Adopter:</p>
            <p className="text-slate-600 text-sm">{data.tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
