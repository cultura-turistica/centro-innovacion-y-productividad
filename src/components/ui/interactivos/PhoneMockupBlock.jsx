import React from 'react';
import Image from 'next/image';

export default function PhoneMockupBlock({ data, themeColor = "#3b82f6" }) {
  if (!data || !data.items) return null;

  return (
    <div className="w-full my-16 flex flex-col lg:flex-row gap-12 items-center justify-center bg-slate-50 p-8 md:p-12 rounded-[3rem]">
      
      {/* Side Content */}
      <div className="max-w-md text-center lg:text-left flex-1">
        {data.badge && (
          <span 
            className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-3"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            {data.badge}
          </span>
        )}
        <h2 className="text-3xl font-black text-slate-800 mb-4">{data.title}</h2>
        {data.description && <p className="text-slate-600 text-lg mb-6">{data.description}</p>}
        
        <div className="space-y-6 mt-8">
          {data.items.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start text-left">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold" style={{ backgroundColor: themeColor }}>
                {idx + 1}
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{item.title}</h4>
                <p 
                  className="text-sm text-slate-600 mt-1"
                  dangerouslySetInnerHTML={{ __html: item.text || item.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden flex-shrink-0">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 w-32 mx-auto rounded-b-2xl z-20"></div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 bg-white overflow-y-auto pt-10 pb-8 px-4 flex flex-col gap-4 scrollbar-hide">
          <div className="text-center mb-2">
            <h4 className="font-bold text-lg text-slate-800" style={{ color: themeColor }}>Guía Interactiva</h4>
            <p className="text-xs text-slate-400">Desliza para ver</p>
          </div>
          
          {data.items.map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-4 shadow-sm border border-slate-100">
              {item.image && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}
              <h5 className="font-bold text-sm text-slate-800 mb-1">{item.title}</h5>
              <p 
                className="text-xs text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.text || item.description }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
