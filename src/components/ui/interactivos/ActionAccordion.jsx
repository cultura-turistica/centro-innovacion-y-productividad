"use client";
import React, { useState } from 'react';
import { ChevronDown, Edit3, Leaf, Users, Coins } from 'lucide-react';

const iconMap = {
  Leaf,
  Users,
  Coins
};
export default function ActionAccordion({ data }) {
  const [activePillar, setActivePillar] = useState(null);
  const { badge, title, description, items } = data;

  return (
    <div className="w-full max-w-6xl mx-auto my-16 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-100">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm border border-amber-200">
          <Edit3 className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p 
          className="text-slate-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((pillar) => {
          const Icon = iconMap[pillar.icon] || Edit3;
          const isActive = activePillar === pillar.id;

          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(isActive ? null : pillar.id)}
              className={`relative flex flex-col text-left transition-all duration-300 ease-out rounded-3xl overflow-hidden border-2 
                ${isActive ? pillar.borderClass : 'border-slate-100 hover:border-slate-200'}
                ${isActive ? 'shadow-lg scale-[1.02]' : 'shadow-sm hover:shadow-md'}
                bg-white group`}
            >
              <div className={`p-8 w-full transition-colors duration-300 ${isActive ? pillar.bgClass : ''}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner 
                  ${isActive ? 'bg-white' : pillar.bgClass} ${pillar.colorClass}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm">
                  {pillar.subtitle}
                </p>

                <div className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`p-5 rounded-2xl bg-white border-l-4 ${pillar.borderClass} shadow-sm mt-4`}>
                    <strong className={`block mb-2 ${pillar.colorClass} font-bold`}>
                      {pillar.contentTitle}
                    </strong>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.contentDesc}
                    </p>
                  </div>
                </div>

                <div className={`absolute top-8 right-8 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-slate-300" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
