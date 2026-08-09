"use client";
import React, { useState } from 'react';

export default function InteractivePillars({ data }) {
  const [activePillar, setActivePillar] = useState(null);
  const { title, description, items } = data;

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl font-black text-slate-900">{title}</h2>
        <p className="text-lg text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {items.map((pillar) => (
          <div 
            key={pillar.id}
            onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
            className={`
              relative group cursor-pointer rounded-[2rem] p-8 transition-all duration-500
              ${activePillar === pillar.id ? 'bg-white shadow-2xl scale-[1.02]' : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-2'}
              border border-slate-100
            `}
          >
            {/* Top Avatar & Title */}
            <div className={`flex flex-col items-center text-center transition-all duration-500 ${activePillar === pillar.id ? '-translate-y-4' : ''}`}>
              <div className={`w-28 h-28 mb-6 rounded-full ${pillar.bgLight} p-4 flex items-center justify-center relative`}>
                <div className={`absolute inset-0 bg-gradient-to-tr ${pillar.color} opacity-10 rounded-full`}></div>
                <img 
                  src={`/assets/images/avatars/${pillar.avatar}`} 
                  alt={pillar.title} 
                  className="w-full h-full object-contain relative z-10 drop-shadow-md"
                  onError={(e) => {
                     e.target.src = `https://api.dicebear.com/9.x/micah/svg?seed=${pillar.title}`;
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{pillar.title}</h3>
              <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">{pillar.subtitle}</span>
            </div>

            {/* Revealed Content */}
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${activePillar === pillar.id ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
            `}>
              <div className={`p-5 rounded-2xl ${pillar.bgLight} border border-white/50`}>
                <p className={`font-bold ${pillar.textDark} mb-2`}>{pillar.contentIntro}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.contentBody}</p>
              </div>
            </div>
            
            {/* Indicador de Click */}
            <div className={`
              absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-slate-200 transition-all duration-300
              ${activePillar === pillar.id ? 'opacity-0 scale-x-0' : `opacity-100 group-hover:w-12 ${pillar.indicatorBg}`}
            `}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
