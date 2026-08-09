import React from 'react';
import { Camera, Map, Star, Clock } from 'lucide-react';

export default function StoryboardCards({ data, themeColor = "#f97316" }) {
  if (!data || !data.cards) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4" style={{ color: themeColor }}>{data.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {data.cards.map((card, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 -mr-10 -mt-10 pointer-events-none">
              <Camera size={128} />
            </div>
            
            <div className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                 style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
              {card.s}
            </div>
            
            <h4 className="text-xl font-black text-slate-800 mb-3">{card.t}</h4>
            <p className="text-slate-600 leading-relaxed text-sm">{card.d}</p>
          </div>
        ))}
      </div>

      {data.explicacion && (
        <div className="mt-10 bg-slate-50 border-l-4 p-6 rounded-r-2xl shadow-sm" style={{ borderColor: themeColor }}>
          <h4 className="font-bold text-lg mb-2" style={{ color: themeColor }}>{data.explicacion.title}</h4>
          <p className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: data.explicacion.text }} />
        </div>
      )}
    </div>
  );
}
