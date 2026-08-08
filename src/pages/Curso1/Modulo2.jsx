import React from 'react';
import { BookOpen, Users, Coins, Leaf, Edit3 } from 'lucide-react';
import TFlipCard from '../../components/tailwind/TFlipCard';

export default function Modulo2({ data, theme = 'green' }) {
  // Theme mappings based on color passed in
  const themes = {
    blue: {
      headerBg: 'bg-blue-600 bg-linear-to-br from-blue-600 to-sky-400',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    },
    green: {
      headerBg: 'bg-green-600 bg-linear-to-br from-green-600 to-emerald-400',
      bg: 'bg-green-600',
      text: 'text-green-700',
      border: 'border-green-600'
    }
  };

  const t = themes[theme] || themes.green;

  return (
    <div className="flex flex-col flex-1 pb-10">
      {/* Header Rediseñado con Tailwind */}
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-green-100 shadow-sm mb-10">
        <div className={`${t.headerBg} px-8 py-10 flex items-center gap-8 relative z-10 rounded-t-[30px] rounded-b-[20px] shadow-lg`}>
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
          
        </div>
      </div>

      <div className="px-4 md:px-12">
        <div className={`bg-linear-to-r from-slate-50 to-slate-100 border-2 ${t.border} border-opacity-30 rounded-[30px] p-8 md:p-10 relative shadow-lg mb-12`}>
          <h4 className={`${t.text} text-2xl font-extrabold mb-6 flex items-center gap-3`}>
            <BookOpen size={28} /> {data.interactiveCard.title}
          </h4>
          {data.interactiveCard.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium mb-6" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[30px] p-8 md:p-12 text-center border-2 border-dashed border-slate-300">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-6 py-2 rounded-full font-extrabold text-sm uppercase mb-6 tracking-wide shadow-sm">
            <Edit3 size={16} /> {data.aplicacion.label}
          </div>
          <h3 className="text-slate-900 m-0 mb-4 text-3xl font-black tracking-tight">{data.aplicacion.title}</h3>
          <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">{data.aplicacion.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TFlipCard 
              icon={Leaf} 
              title={data.aplicacion.pillars[0].title} 
              subtitle={data.aplicacion.pillars[0].subtitle} 
              colorClass="text-green-600" 
              bgClass="bg-green-50"
              borderClass="border-green-600"
              shadowClass="shadow-green-600/30"
              content={data.aplicacion.pillars[0].content}
            />
            <TFlipCard 
              icon={Users} 
              title={data.aplicacion.pillars[1].title} 
              subtitle={data.aplicacion.pillars[1].subtitle} 
              colorClass="text-orange-600" 
              bgClass="bg-orange-50"
              borderClass="border-orange-600"
              shadowClass="shadow-orange-600/30"
              content={data.aplicacion.pillars[1].content}
            />
            <TFlipCard 
              icon={Coins} 
              title={data.aplicacion.pillars[2].title} 
              subtitle={data.aplicacion.pillars[2].subtitle} 
              colorClass="text-blue-600" 
              bgClass="bg-blue-50"
              borderClass="border-blue-600"
              shadowClass="shadow-blue-600/30"
              content={data.aplicacion.pillars[2].content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
