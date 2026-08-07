import React from 'react';
import { BookOpen, Map } from 'lucide-react';

export default function Modulo3({ data, theme = 'orange' }) {
  const themes = {
    orange: {
      headerBg: 'bg-orange-500 bg-linear-to-br from-orange-500 to-amber-400',
      bg: 'bg-orange-500',
      text: 'text-orange-500',
      border: 'border-orange-500'
    },
    blue: {
      headerBg: 'bg-blue-600 bg-linear-to-br from-blue-600 to-sky-400',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    }
  };

  const t = themes[theme] || themes.orange;

  return (
    <div className="flex flex-col flex-1 pb-10">
      {/* Header Rediseñado con Tailwind */}
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-orange-50 shadow-sm mb-10">
        <div className="w-full h-[200px] relative overflow-hidden">
          <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#fed7aa" d="M0,300 L0,200 Q150,150 300,200 T600,200 T900,200 T1200,200 L1200,300 Z" />
            <path fill="#fdba74" d="M0,300 L0,240 Q300,180 600,240 T1200,240 L1200,300 Z" />
            {/* Ilustración de ruinas / vasijas y notas musicales */}
            <rect x="250" y="210" width="80" height="90" fill="#ea580c" />
            <polygon points="240,210 290,160 340,210" fill="#9a3412" />
            <path fill="#c2410c" d="M800,200 Q830,160 860,200 Q880,250 830,290 Q780,250 800,200 Z" />
            <path fill="#9a3412" d="M700,100 Q720,50 740,100 T760,150" fill="none" stroke="#9a3412" strokeWidth="5" />
            <circle cx="760" cy="150" r="10" fill="#9a3412" />
          </svg>
        </div>
        
        <div className={`${t.headerBg} px-8 py-10 flex items-center gap-8 relative z-10 -mt-8 rounded-t-[30px] rounded-b-[20px] shadow-lg`}>
          <div className="flex-1">
            <div className="bg-white/20 px-4 py-1.5 rounded-full inline-block text-white font-semibold mb-4 text-sm backdrop-blur-sm">
              {data.header.label}
            </div>
            <h3 
              className="text-white mb-4 text-3xl md:text-5xl font-black leading-tight drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: data.header.title }}
            ></h3>
            <p className="text-white/90 text-lg font-medium max-w-2xl leading-relaxed">
              {data.header.description}
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://api.dicebear.com/9.x/micah/svg?seed=Patrimonio" 
              alt="Patrimonio" 
              className="w-32 h-32 bg-white rounded-full p-2 shadow-xl border-4 border-white/30" 
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12">
        <div className={`bg-linear-to-r from-slate-50 to-slate-100 border-2 ${t.border} border-opacity-30 rounded-[30px] p-8 md:p-10 relative shadow-lg mb-12`}>
          <h4 className={`${t.text} text-2xl font-extrabold mb-6 flex items-center gap-3`}>
            <BookOpen size={28} /> {data.interactiveCard.title}
          </h4>
          {data.interactiveCard.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium mb-4" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>

        <div className="flex flex-wrap gap-8 mt-8">
          {/* ESTUDIO DE CASO: TANGIBLE */}
          <div className="flex-1 min-w-[300px] bg-white rounded-[25px] overflow-hidden shadow-lg flex flex-col border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="h-[220px] relative bg-blue-100 flex items-center justify-center">
              <svg viewBox="0 0 200 150" className="w-full h-full p-5">
                <rect x="30" y="80" width="140" height="70" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                <rect x="90" y="110" width="20" height="40" fill="#64748b" />
                <rect x="50" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                <rect x="130" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                <polygon points="10,80 100,20 190,80" fill="#ef4444" />
                <polygon points="30,80 100,35 170,80" fill="#f87171" />
              </svg>
              <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                {data.casos.tangible.tag}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-4">
                <Map size={16} /> {data.casos.tangible.location}
              </div>
              <h4 className="text-2xl text-slate-900 font-black mb-4">{data.casos.tangible.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong className="text-slate-800">Antes del turismo:</strong> {data.casos.tangible.before}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                <strong className="text-blue-700">Impacto SPEC:</strong> <span dangerouslySetInnerHTML={{ __html: data.casos.tangible.impact }}></span>
              </p>
            </div>
          </div>

          {/* ESTUDIO DE CASO: INTANGIBLE */}
          <div className="flex-1 min-w-[300px] bg-white rounded-[25px] overflow-hidden shadow-lg flex flex-col border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="h-[220px] relative bg-orange-100 flex items-center justify-center">
              <svg viewBox="0 0 200 150" className="w-full h-full p-5">
                <path d="M40,140 Q100,50 160,140" fill="none" stroke="#22c55e" strokeWidth="8" />
                <path d="M100,100 Q150,100 130,50 Q80,50 100,100" fill="#16a34a" />
                <path d="M90,120 Q40,120 60,70 Q110,70 90,120" fill="#15803d" />
                <circle cx="130" cy="50" r="12" fill="#ef4444" />
                <circle cx="60" cy="70" r="10" fill="#dc2626" />
                <circle cx="90" cy="40" r="8" fill="#b91c1c" />
              </svg>
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                {data.casos.intangible.tag}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-4">
                <Map size={16} /> {data.casos.intangible.location}
              </div>
              <h4 className="text-2xl text-slate-900 font-black mb-4">{data.casos.intangible.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong className="text-slate-800">Antes del turismo:</strong> {data.casos.intangible.before}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                <strong className="text-orange-700">Impacto SPEC:</strong> <span dangerouslySetInnerHTML={{ __html: data.casos.intangible.impact }}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
