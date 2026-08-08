import React, { useState } from 'react';

export default function TFlipCard({ icon: Icon, title, subtitle, content, colorClass = 'text-green-600', bgClass = 'bg-green-50', borderClass = 'border-green-600', shadowClass = 'shadow-green-600/30' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1000px] cursor-pointer h-full min-h-[450px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Lado Frontal */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white p-6 rounded-[25px] shadow-xl flex flex-col items-center justify-center text-center border-2 border-slate-100 group-hover:border-slate-300 transition-colors">
          <div className={`${bgClass} w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-xl ${shadowClass}`}>
            <Icon size={60} className={colorClass} />
          </div>
          <h4 className={`${colorClass} text-3xl font-black mb-2`}>{title}</h4>
          <p className="text-slate-500 text-lg m-0">{subtitle}</p>
          <div className="mt-8 bg-slate-100 px-6 py-2 rounded-full text-slate-600 text-sm font-bold animate-pulse">
            Clic para revelar
          </div>
        </div>

        {/* Lado Trasero */}
        <div className={`absolute w-full h-full [backface-visibility:hidden] ${bgClass} p-10 rounded-[25px] shadow-xl [transform:rotateY(180deg)] flex flex-col justify-start border-2 ${borderClass} overflow-y-auto`}>
          <h4 className={`mb-6 font-black ${colorClass} text-2xl flex items-center gap-3 shrink-0`}>
            <Icon size={28} /> {title}
          </h4>
          <div className="text-lg text-slate-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
