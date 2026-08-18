import React from 'react';
import Image from 'next/image';

export default function MentorGuide({ data, themeColor = "#e11d48" }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-4xl mx-auto my-12 relative">
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full" style={{ backgroundColor: themeColor }}></div>
      
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Avatar Section */}
        <div className="flex-shrink-0 text-center">
          <div 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto flex items-center justify-center overflow-hidden bg-slate-50 relative z-10"
            style={{ boxShadow: `0 10px 25px -5px ${themeColor}40` }}
          >
            <Image src={data.avatar} alt={data.name} className="w-28 h-28 object-contain mt-4" width={1000} height={1000} unoptimized={true} />
          </div>
          <h3 className="font-bold text-slate-800 text-xl mt-4">{data.name}</h3>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: themeColor }}>{data.role}</p>
        </div>

        {/* Dialogues Section */}
        <div className="flex-1 space-y-4 relative z-10">
          {data.dialogues && data.dialogues.map((dialogue, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 p-6 rounded-2xl rounded-tl-none border border-slate-100 text-slate-700 leading-relaxed shadow-sm relative"
            >
              {idx === 0 && (
                <div 
                  className="absolute -left-3 top-0 w-0 h-0 border-t-[12px] border-t-slate-50 border-l-[12px] border-l-transparent"
                ></div>
              )}
              <div dangerouslySetInnerHTML={{ __html: dialogue }} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
