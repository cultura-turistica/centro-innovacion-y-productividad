import React from 'react';

export default function SocioMatrixRow({ row, AltoIcon, BajoIcon }) {
  // Convertimos los valores a números para calcular los anchos de las barras
  const altoNum = parseInt(row.altoValue, 10);
  const bajoNum = parseInt(row.bajoValue, 10);
  const maxVal = Math.max(altoNum, bajoNum) + 10; 
  
  const altoWidth = `${(altoNum / maxVal) * 100}%`;
  const bajoWidth = `${(bajoNum / maxVal) * 100}%`;

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center w-full group py-4 md:py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-xl px-2">
      
      {/* Columna Izquierda: Nivel Alto */}
      <div className="w-full md:w-[45%] flex items-center justify-end gap-4 p-2">
        <div className="text-right flex-grow">
          <span className="text-sm font-bold text-slate-700 block">{row.altoLabel}</span>
        </div>
        
        {/* Barra Visual Derecha a Izquierda */}
        <div className="w-24 md:w-32 h-2 bg-slate-100 rounded-full flex justify-end overflow-hidden shrink-0">
          <div className="h-full bg-slate-400 group-hover:bg-slate-600 transition-all duration-700 ease-out" style={{ width: altoWidth }}></div>
        </div>

        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
          {AltoIcon && <AltoIcon size={18} />}
        </div>
        <div className="w-12 text-right font-black text-xl text-slate-800 shrink-0">{row.altoValue}%</div>
      </div>

      {/* Separador Central */}
      <div className="hidden md:flex w-[10%] justify-center relative">
        <div className="w-px h-12 bg-slate-200 absolute top-1/2 -translate-y-1/2"></div>
      </div>

      {/* Columna Derecha: Nivel Bajo */}
      <div className="w-full md:w-[45%] flex items-center justify-start gap-4 p-2">
        <div className="w-12 text-left font-black text-xl text-orange-600 shrink-0">{row.bajoValue}%</div>
        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
          {BajoIcon && <BajoIcon size={18} />}
        </div>
        
        {/* Barra Visual Izquierda a Derecha */}
        <div className="w-24 md:w-32 h-2 bg-slate-100 rounded-full flex justify-start overflow-hidden shrink-0">
          <div className="h-full bg-orange-400 group-hover:bg-orange-500 transition-all duration-700 ease-out" style={{ width: bajoWidth }}></div>
        </div>

        <div className="text-left flex-grow">
          <span className="text-sm font-bold text-slate-700 block">{row.bajoLabel}</span>
          {row.bajoBadge && (
            <span className="inline-block mt-1 bg-red-100 text-red-600 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
              {row.bajoBadge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
