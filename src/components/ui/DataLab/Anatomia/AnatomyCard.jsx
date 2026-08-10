import React from 'react';
import { Brain, Eye, Heart, Wallet, Footprints, Leaf, TrendingUp } from 'lucide-react';

const ICON_MAP = {
  Brain, Eye, Heart, Wallet, Footprints, Leaf
};

const THEME_COLORS = {
  purple: 'text-purple-600 bg-purple-100',
  red: 'text-red-600 bg-red-100',
  sky: 'text-sky-600 bg-sky-100',
  blue: 'text-blue-600 bg-blue-100',
  emerald: 'text-emerald-600 bg-emerald-100',
  amber: 'text-amber-600 bg-amber-100',
};

const BORDER_COLORS = {
  purple: 'border-purple-200',
  red: 'border-red-200',
  sky: 'border-sky-200',
  blue: 'border-blue-200',
  emerald: 'border-emerald-200',
  amber: 'border-amber-200',
};

export default function AnatomyCard({ activeNode }) {
  if (!activeNode) return null;

  const Icon = ICON_MAP[activeNode.iconName] || Brain;
  const themeClasses = THEME_COLORS[activeNode.colorTheme] || THEME_COLORS.purple;
  const borderClass = BORDER_COLORS[activeNode.colorTheme] || BORDER_COLORS.purple;

  return (
    <div key={activeNode.id} className="w-full flex-grow flex flex-col animate-in fade-in slide-in-from-right-4 duration-500 ease-out">
      {/* Tarjeta de Encabezado */}
      <div className={`bg-white rounded-t-3xl border-t border-x ${borderClass} p-8 flex-shrink-0 relative overflow-hidden`}>
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${themeClasses}`}>
             <Icon size={32} />
          </div>
          <div>
            <span className="uppercase tracking-widest font-black text-xs text-slate-400 block mb-1">
              {activeNode.bodyPart}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {activeNode.title}
            </h2>
          </div>
        </div>
        <p className="text-lg text-slate-600 font-medium relative z-10">
          {activeNode.subtitle}
        </p>
      </div>

      {/* Contenido (Scrollable si es muy largo) */}
      <div className={`bg-slate-50 border-x border-b ${borderClass} rounded-b-3xl p-8 flex-grow flex flex-col shadow-lg overflow-y-auto`}>
        
        {/* Métricas (Stats) */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <TrendingUp size={14} /> Distribución Estructural
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeNode.metrics.map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-slate-300 transition-colors">
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  {stat.label}
                </span>
                <span className={`text-xl font-black ${themeClasses.split(' ')[0]}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnóstico */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${themeClasses.split(' ')[1]}`}></span>
              Diagnóstico de Situación
            </h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {activeNode.analysis}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
