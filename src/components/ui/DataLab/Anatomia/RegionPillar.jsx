import React from 'react';

const THEME_COLORS = {
  sky: 'bg-sky-50 border-sky-200 text-sky-900',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  amber: 'bg-amber-50 border-amber-200 text-amber-900',
  purple: 'bg-purple-50 border-purple-200 text-purple-900',
};

const ICON_COLORS = {
  sky: 'text-sky-600 bg-sky-100',
  emerald: 'text-emerald-600 bg-emerald-100',
  amber: 'text-amber-600 bg-amber-100',
  purple: 'text-purple-600 bg-purple-100',
};

export default function RegionPillar({ region, Icon }) {
  const themeClass = THEME_COLORS[region.colorTheme] || THEME_COLORS.sky;
  const iconClass = ICON_COLORS[region.colorTheme] || ICON_COLORS.sky;

  return (
    <div className={`rounded-3xl p-6 border flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${themeClass} group`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${iconClass}`}>
         {Icon && <Icon size={32} strokeWidth={1.5} />}
      </div>
      
      <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{region.code}</span>
      <h4 className="text-2xl font-black mb-6">{region.title}</h4>
      
      <div className="w-full space-y-4 bg-white/60 p-4 rounded-2xl">
         <div>
            <div className="text-3xl font-black">{region.stat1}%</div>
            <div className="text-xs font-semibold opacity-70 uppercase tracking-wider mt-1" dangerouslySetInnerHTML={{ __html: region.label1 }}></div>
         </div>
         <div className="h-px w-full bg-black/5"></div>
         <div>
            <div className="text-3xl font-black">{region.stat2}%</div>
            <div className="text-xs font-semibold opacity-70 uppercase tracking-wider mt-1" dangerouslySetInnerHTML={{ __html: region.label2 }}></div>
         </div>
      </div>
    </div>
  );
}
