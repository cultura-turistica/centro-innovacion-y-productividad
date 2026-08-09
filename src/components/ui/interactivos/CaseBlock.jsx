import React from 'react';

export default function CaseBlock({ data, themeColor = "#2563eb", themeBg = "bg-blue-50", themeBorder = "border-blue-200" }) {
  if (!data) return null;

  return (
    <div className={`${themeBg} p-8 rounded-3xl border-2 ${themeBorder} relative mt-8`}>
      {data.tag && (
        <div 
          className="absolute top-0 right-8 -mt-4 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm"
          style={{ backgroundColor: themeColor }}
        >
          {data.tag}
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2" style={{ color: themeColor }}>
        {data.name || data.title}
      </h3>
      
      {data.profile && (
        <p className="font-bold mb-6 opacity-80" style={{ color: themeColor }}>
          {data.profile}
        </p>
      )}
      
      <div className="space-y-4 mb-6">
        {data.dolor && <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: data.dolor }} />}
        {data.ganancia && <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: data.ganancia }} />}
        {data.description && <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: data.description }} />}
      </div>
      
      {data.malaDecision && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-rose-600 mb-2">{data.malaDecision.title}</h4>
          <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: data.malaDecision.text }} />
        </div>
      )}

      {data.buenaDecision && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-4">
          <h4 className="font-bold text-emerald-600 mb-2">{data.buenaDecision.title}</h4>
          <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: data.buenaDecision.text }} />
        </div>
      )}
    </div>
  );
}
