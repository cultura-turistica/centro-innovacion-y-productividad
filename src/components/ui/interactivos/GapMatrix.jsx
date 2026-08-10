import React from 'react';
import { Settings, Tool, DollarSign } from 'lucide-react';

export default function GapMatrix({ data, themeColor = "#eab308" }) {
  if (!data || !data.eslabones) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-12">
      <div className="bg-slate-50 border-b border-slate-200 p-8 text-center">
        <h3 className="text-2xl font-bold mb-4" style={{ color: themeColor }}>{data.title}</h3>
        <p className="text-slate-600 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>

      <div className="p-4 md:p-8 space-y-6">
        {data.eslabones.map((item, index) => (
          <div key={index} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            
            <div className="flex-1">
              <h4 className="text-xl font-black text-slate-800 mb-4">{item.title}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">{data.labels?.need || "Lo que se necesita"}</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.necesidad}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-rose-500 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 block">{data.labels?.reality || "Lo que hay hoy"}</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.realidad}</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-64 flex-shrink-0 bg-amber-50 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">{data.labels?.gap || "LA BRECHA"}</span>
              </div>
              <p className="text-amber-900 text-sm mb-4">{item.brecha}</p>
              
              <div className="bg-white/60 p-3 rounded-lg text-xs">
                <span className="font-bold text-slate-700 block mb-1">{data.labels?.solution || "¿Cómo se cierra?"}</span>
                <span className="text-slate-600">{item.solucion}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
