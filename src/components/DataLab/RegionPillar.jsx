import React from 'react';

const RegionPillar = ({ colorTheme, title, code, icon: Icon, stat1, label1, stat2, label2 }) => {
  // Mapping Tailwind dynamic classes safely
  const colorMap = {
    sky: { bg: 'bg-sky-50', line: 'bg-sky-500', text: 'text-sky-600', code: 'text-sky-400', border: 'border-sky-400', hover: 'hover:bg-sky-100' },
    emerald: { bg: 'bg-emerald-50', line: 'bg-emerald-500', text: 'text-emerald-600', code: 'text-emerald-400', border: 'border-emerald-400', hover: 'hover:bg-emerald-100' },
    amber: { bg: 'bg-amber-50', line: 'bg-amber-500', text: 'text-amber-600', code: 'text-amber-400', border: 'border-amber-400', hover: 'hover:bg-amber-100' },
    purple: { bg: 'bg-purple-50', line: 'bg-purple-500', text: 'text-purple-600', code: 'text-purple-400', border: 'border-purple-400', hover: 'hover:bg-purple-100' }
  };
  const theme = colorMap[colorTheme];

  return (
    <div className="bg-slate-50 rounded-3xl p-1 relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-slate-200/60">
       <div className={`absolute top-0 left-0 w-full h-2 ${theme.line}`}></div>
       <div className="bg-white rounded-[22px] h-full p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
             <div className={`w-12 h-12 ${theme.bg} rounded-2xl flex items-center justify-center ${theme.text} group-hover:scale-110 transition-transform`}>
               <Icon size={24}/>
             </div>
             <span className={`text-[10px] font-mono font-bold ${theme.code} ${theme.bg} px-2 py-1 rounded`}>{code}</span>
          </div>
          <h4 className="text-xl font-black text-slate-800 mb-8">{title}</h4>
          
          <div className="space-y-4 flex-grow">
             <div className={`border-l-4 ${theme.border} pl-4`}>
                <p className={`text-3xl font-black ${theme.text} mb-1`}>{stat1}<span className="text-xl">%</span></p>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-tight" dangerouslySetInnerHTML={{ __html: label1 }}></p>
             </div>
             <div className="border-l-4 border-slate-200 pl-4">
                <p className="text-2xl font-black text-slate-700 mb-1">{stat2}<span className="text-lg">%</span></p>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-tight" dangerouslySetInnerHTML={{ __html: label2 }}></p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default RegionPillar;
