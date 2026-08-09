'use client';
import React, { useState } from 'react';
import { Type, Check } from 'lucide-react';

export default function TypographyTester({ data }) {
  const { fonts, mentor, placeholderText } = data;
  const [brandName, setBrandName] = useState('');
  const [selectedFontId, setSelectedFontId] = useState(fonts[0].id);

  const selectedFont = fonts.find(f => f.id === selectedFontId);
  const displayText = brandName.trim() || placeholderText;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
      
      {/* Header Instructor */}
      <div className="bg-slate-50 p-6 md:p-8 flex items-center gap-6 border-b border-slate-100">
        <div className="w-24 h-24 rounded-full bg-indigo-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
          <img src={mentor.avatar} alt={mentor.name} className="w-20 h-20 object-contain mt-4" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-xl">{mentor.name}</h3>
          <p className="text-sm font-semibold text-indigo-500 mb-2">{mentor.role}</p>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm relative">
            <p className="text-slate-600 leading-relaxed text-sm">{mentor.intro}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        
        {/* Input area */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Type className="h-6 w-6 text-slate-300" />
          </div>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder={placeholderText}
            className="w-full bg-slate-50 border-2 border-slate-200 text-slate-800 text-xl font-bold rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-300 placeholder:font-normal text-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Font Selector */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Clasificaciones</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fonts.map(font => {
                const isSelected = font.id === selectedFontId;
                return (
                  <button
                    key={font.id}
                    onClick={() => setSelectedFontId(font.id)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 relative ${isSelected ? 'border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-slate-800">{font.label}</span>
                      {isSelected && <Check className="w-5 h-5 text-indigo-500" />}
                    </div>
                    <span className={`text-2xl text-slate-600 block truncate ${font.fontFamily}`}>Aa</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visualizer */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-center min-h-[300px]">
            <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/textura1.webp')] bg-cover mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 text-center">
              <h2 
                className={`text-5xl md:text-6xl text-white break-words transition-all duration-300 ${selectedFont.fontFamily}`}
                style={{ lineHeight: '1.2' }}
              >
                {displayText}
              </h2>
            </div>
          </div>

        </div>

        {/* Font Analysis */}
        <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-500">
              <Type className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-indigo-900 text-lg mb-2">Análisis de Personalidad: {selectedFont.label}</h4>
              <p className="text-indigo-800/80 leading-relaxed mb-4">{selectedFont.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedFont.traits.map(trait => (
                  <span key={trait} className="px-3 py-1 bg-indigo-200/50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
