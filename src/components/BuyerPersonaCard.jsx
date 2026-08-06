import React from 'react';
import { User, Plane, Car, Bus, Bed, Wallet, Map } from 'lucide-react';

export const BuyerPersonaCard = ({ persona }) => {
  // Configuración de Colores dinámicos basados en el nivel
  let themeColor = 'bg-blue-500';
  let badgeColor = 'bg-blue-100 text-blue-700 border-blue-200';
  let iconBg = 'bg-blue-50 text-blue-600';
  
  if (persona.nivelSocioeconomico === 'Alto') {
    themeColor = 'bg-emerald-500';
    badgeColor = 'bg-emerald-100 text-emerald-700 border-emerald-200';
    iconBg = 'bg-emerald-50 text-emerald-600';
  } else if (persona.nivelSocioeconomico === 'Medio') {
    themeColor = 'bg-blue-500';
    badgeColor = 'bg-blue-100 text-blue-700 border-blue-200';
    iconBg = 'bg-blue-50 text-blue-600';
  } else {
    themeColor = 'bg-amber-500';
    badgeColor = 'bg-amber-100 text-amber-700 border-amber-200';
    iconBg = 'bg-amber-50 text-amber-600';
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] transition-all flex flex-col h-full relative overflow-hidden group">
      
      {/* Decorative top bar */}
      <div className={`absolute top-0 left-0 w-full h-1 ${themeColor}`}></div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-5 mt-2">
        <div className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center`}>
          <User className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 leading-tight mb-1">{persona.nombre}</h3>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeColor}`}>
            Nivel {persona.nivelSocioeconomico}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
        {persona.descripcion}
      </p>

      {/* Attributes Bars */}
      <div className="space-y-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-500 flex items-center gap-1.5"><Wallet className="w-3.5 h-3.5"/> Presupuesto</span>
            <span className="text-slate-800">{persona.atributos.presupuesto}%</span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className={`h-full ${themeColor} rounded-full transition-all duration-1000`} style={{ width: `${persona.atributos.presupuesto}%` }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-500 flex items-center gap-1.5"><Map className="w-3.5 h-3.5"/> Planeación Digital</span>
            <span className="text-slate-800">{persona.atributos.planeacion}%</span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className={`h-full ${themeColor} rounded-full transition-all duration-1000 delay-100`} style={{ width: `${persona.atributos.planeacion}%` }}></div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="border border-slate-100 rounded-lg p-3 bg-white">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5"/> Alojamiento
          </div>
          <div className="text-slate-700 text-sm font-semibold">{persona.alojamientoPreferido.split(' ')[0]}</div>
        </div>
        <div className="border border-slate-100 rounded-lg p-3 bg-white">
          <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-1 flex items-center gap-1.5">
            {persona.transportePreferido.includes('Avión') ? <Plane className="w-3.5 h-3.5"/> : 
             persona.transportePreferido.includes('Carro') ? <Car className="w-3.5 h-3.5"/> : <Bus className="w-3.5 h-3.5"/>}
            Transporte
          </div>
          <div className="text-slate-700 text-sm font-semibold">{persona.transportePreferido.split(' ')[0]}</div>
        </div>
      </div>
      
      {/* Footer Edades */}
      <div className="pt-4 border-t border-slate-100">
        <div className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-2">Edades Principales:</div>
        <div className="flex flex-wrap gap-2">
          {persona.edades.map((e, idx) => (
            <span key={idx} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-xs font-medium text-slate-600">
              {e.rango}: <span className="font-bold text-slate-800">{e.porcentaje}%</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
