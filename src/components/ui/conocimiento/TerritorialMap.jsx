"use client";
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function TerritorialMap({ mapaImpacto, themeColor = "emerald" }) {
  const [activePopup, setActivePopup] = useState(null);

  if (!mapaImpacto || !mapaImpacto.activo) return null;

  const { zonasActivas = [], datosZonas = {} } = mapaImpacto;

  // Mapa base del Meta/Tolima/Colombia en SVG (Ejemplo conceptual con 3 paths)
  // En producción, este SVG tendría los paths reales de los municipios.
  const regionesSVG = [
    { id: "uribe", path: "M 10 10 L 50 10 L 50 50 L 10 50 Z", cx: 30, cy: 30 },
    { id: "mesetas", path: "M 55 10 L 95 10 L 95 50 L 55 50 Z", cx: 75, cy: 30 },
    { id: "macarena", path: "M 30 60 L 70 60 L 70 95 L 30 95 Z", cx: 50, cy: 75 }
  ];

  // Helper para clases dinámicas Tailwind basado en themeColor
  const getThemeClasses = () => {
    const themes = {
      emerald: "fill-emerald-500 hover:fill-emerald-400 stroke-emerald-700",
      indigo: "fill-indigo-500 hover:fill-indigo-400 stroke-indigo-700",
      blue: "fill-blue-500 hover:fill-blue-400 stroke-blue-700"
    };
    return themes[themeColor] || themes.emerald;
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 mb-12 relative overflow-hidden flex flex-col md:flex-row gap-8">
      
      {/* Contenedor del Mapa SVG Puro */}
      <div className="w-full md:w-2/3 relative aspect-square md:aspect-auto min-h-[400px]">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-xl"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Renderizado Condicionado de Polígonos */}
          {regionesSVG.map((region) => {
            const isActive = zonasActivas.includes(region.id);
            
            return (
              <path
                key={region.id}
                d={region.path}
                className={`
                  transition-all duration-300 ease-in-out
                  ${isActive 
                    ? `cursor-pointer ${getThemeClasses()} drop-shadow-md z-10` 
                    : "fill-slate-800 stroke-slate-700 pointer-events-none"
                  }
                `}
                strokeWidth="0.5"
                onMouseEnter={() => isActive && setActivePopup(region.id)}
                onMouseLeave={() => setActivePopup(null)}
                onClick={() => isActive && setActivePopup(region.id)}
              />
            );
          })}
          
          {/* Marcadores Estéticos sobre Zonas Activas */}
          {regionesSVG.map((region) => {
            if (!zonasActivas.includes(region.id)) return null;
            return (
              <circle 
                key={`marker-${region.id}`} 
                cx={region.cx} 
                cy={region.cy} 
                r="1.5" 
                className="fill-white animate-pulse pointer-events-none" 
              />
            );
          })}
        </svg>
      </div>

      {/* Panel de Información Lateral (Popup Dinámico) */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          {mapaImpacto.titulo || "Impacto Territorial"}
        </h3>
        
        {activePopup && datosZonas[activePopup] ? (
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-${themeColor}-500/20 text-${themeColor}-400`}>
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                {datosZonas[activePopup].titulo}
              </h4>
            </div>
            
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {datosZonas[activePopup].descripcion}
            </p>
            
            <div className="space-y-3">
              {datosZonas[activePopup].metricas?.map((metrica, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-${themeColor}-400`} />
                  <span className="text-sm font-medium text-slate-200">{metrica}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-slate-500 italic text-sm border border-slate-800 border-dashed rounded-xl p-6 text-center">
            Pasa el cursor sobre las zonas resaltadas en el mapa para descubrir el impacto.
          </div>
        )}
      </div>
    </div>
  );
}
