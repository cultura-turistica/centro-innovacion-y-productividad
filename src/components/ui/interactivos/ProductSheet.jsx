import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function ProductSheet({ data, themeColor = "#0f766e" }) {
  if (!data || !data.campos) return null;

  return (
    <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-2 mb-12 overflow-hidden relative" style={{ borderColor: themeColor }}>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-10 -mt-10 pointer-events-none">
        <FileText size={128} color={themeColor} />
      </div>

      <div className="p-8 border-b-2 bg-slate-50 relative z-10" style={{ borderBottomColor: themeColor }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-white" style={{ backgroundColor: themeColor }}>
          Formato Oficial
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">{data.title}</h3>
        <p className="text-slate-600 max-w-2xl">{data.description}</p>
      </div>

      <div className="p-8 space-y-6">
        {Object.keys(data.campos).map((key, index) => {
          const campo = data.campos[key];
          return (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <div className="md:w-1/3 flex-shrink-0">
                <h4 className="font-bold text-slate-500 uppercase tracking-wide text-sm">{campo.label}</h4>
              </div>
              <div className="md:w-2/3">
                {campo.value ? (
                  <p className="text-slate-800 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: campo.value }} />
                ) : campo.items ? (
                  <ul className="space-y-2">
                    {campo.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0" style={{ color: themeColor }} />
                        <span className="text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
