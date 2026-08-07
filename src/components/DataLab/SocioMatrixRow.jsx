import React from 'react';

const SocioMatrixRow = ({ 
  altoIcon: AltoIcon, 
  bajoIcon: BajoIcon, 
  altoValue, 
  altoLabel, 
  bajoValue, 
  bajoLabel, 
  bajoBadge = null 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch group hover:bg-slate-50 rounded-xl transition-all duration-300 md:p-3">
       
       {/* Alto Side (Left) - Nivel Alto: Slate 800 (Azul Marino Profundo) */}
       <div className="w-full md:w-[48%] flex items-center justify-end gap-4 p-3 order-2 md:order-1">
          <div className="text-right">
             <p className="text-2xl font-black text-slate-800 tracking-tight">
               {altoValue}<span className="text-base text-slate-600">%</span>
             </p>
             <p className="text-sm font-medium text-slate-500 leading-tight mt-1">{altoLabel}</p>
          </div>
          {AltoIcon && (
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 shadow-sm border border-slate-200">
               <AltoIcon size={18} strokeWidth={2.5} />
            </div>
          )}
       </div>
       
       {/* Elegant Divider (Center) */}
       <div className="hidden md:flex w-[4%] items-center justify-center order-1 md:order-2">
          <div className="w-px h-full min-h-[60px] bg-linear-to-b from-transparent via-slate-300 to-transparent"></div>
       </div>
       
       {/* Bajo Side (Right) - Nivel Bajo: Orange 700 (Terracota) */}
       <div className="w-full md:w-[48%] flex items-center justify-start gap-4 p-3 order-3 md:order-3">
          {BajoIcon && (
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 shadow-sm border border-orange-100">
               <BajoIcon size={18} strokeWidth={2.5} />
            </div>
          )}
          <div className="text-left flex flex-col items-start">
             <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-orange-700 tracking-tight">
                  {bajoValue}<span className="text-base text-orange-500">%</span>
                </p>
                {bajoBadge && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full border border-orange-200">
                    {bajoBadge}
                  </span>
                )}
             </div>
             <p className="text-sm font-medium text-slate-500 leading-tight mt-1">{bajoLabel}</p>
          </div>
       </div>

    </div>
  );
};

export default SocioMatrixRow;
