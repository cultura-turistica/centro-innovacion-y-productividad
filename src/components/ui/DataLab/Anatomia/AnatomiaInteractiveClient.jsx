"use client";
import React, { useState } from 'react';
import { Info, MapPin, TrendingUp, CheckCircle2, PieChart, Users, Compass, Activity, Smartphone, PhoneCall, Plane, Bus, Building, Home, ShieldCheck, AlertCircle } from 'lucide-react';
import { ANATOMY_DATA, SINTESIS_TEXT, REGIONAL_DATA, MATRIX_DATA, DIRECTRICES_DATA } from '../../../../data/laboratorios/anatomia';
import AnatomyNode from './AnatomyNode';
import AnatomyCard from './AnatomyCard';
import RegionPillar from './RegionPillar';
import SocioMatrixRow from './SocioMatrixRow';

// Icon Map for dynamic rendering
const ICON_MAP = {
  PieChart, Users, Compass, Activity, Smartphone, PhoneCall, Plane, Bus, Building, Home, ShieldCheck, AlertCircle
};

export default function AnatomiaInteractiveClient() {
  const [activePart, setActivePart] = useState('cabeza');

  // Helper to parse markdown bold
  const parseMarkdownBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="main-container bg-slate-50 min-h-screen pt-24 pb-20 text-slate-900 font-sans">
      
      {/* HEADER */}
      <header className="mb-12 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          Anatomía del Turista
        </h1>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
          Una radiografía interactiva del viajero colombiano en 2024. 
          Basado en los hallazgos reales de la Encuesta de Turistas.
          <strong className="block text-indigo-600 mt-2">Interactúa con el cuerpo para explorar el diagnóstico.</strong>
        </p>
      </header>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-stretch px-4 pb-16">
        
        {/* LEFT COL: THE USER'S IMAGE + DIRECTRIZ */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full lg:h-[550px] min-h-[500px] relative shadow-xl rounded-3xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-4 shrink-0">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50 to-white"></div>

          <div className="relative inline-block w-full max-w-sm md:max-w-md z-10">
            <img 
              src="/assets/images/colombian_tourist.png"
              alt="Anatomía del Turista"
              className="w-full h-auto drop-shadow-md mix-blend-multiply"
            />
            
            {/* INTERACTIVE NODES (Hotspots) */}
            {Object.values(ANATOMY_DATA).map((node) => (
              <AnatomyNode 
                key={node.id} 
                node={node} 
                isActive={activePart === node.id}
                onClick={() => setActivePart(node.id)}
              />
            ))}
          </div>
        </div>

        {/* CARTA DE DIRECTRIZ (Debajo de la imagen) */}
        {activePart && ANATOMY_DATA[activePart] && (
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden flex-grow flex flex-col justify-center animate-in fade-in duration-500">
            {/* Theming based on active part */}
            <div className="absolute top-0 left-0 w-1.5 h-full" style={{
               backgroundColor: ANATOMY_DATA[activePart].colorTheme === 'purple' ? '#9333ea' :
                                ANATOMY_DATA[activePart].colorTheme === 'red' ? '#dc2626' :
                                ANATOMY_DATA[activePart].colorTheme === 'sky' ? '#0284c7' :
                                ANATOMY_DATA[activePart].colorTheme === 'blue' ? '#2563eb' :
                                ANATOMY_DATA[activePart].colorTheme === 'emerald' ? '#059669' : '#d97706'
            }}></div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
               Directriz Estratégica
            </h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              {ANATOMY_DATA[activePart].insight}
            </p>
          </div>
        )}
        </div>

        {/* RIGHT COL: DYNAMIC DATA PANEL */}
        <div className="lg:h-auto flex flex-col w-full">
          {activePart && ANATOMY_DATA[activePart] && (
            <AnatomyCard activeNode={ANATOMY_DATA[activePart]} />
          )}
        </div>
      </div>

      {/* SÍNTESIS GLOBAL */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 md:p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <Info className="text-indigo-600 w-6 h-6" />
            Síntesis Global del Turista
          </h3>
          <p className="text-slate-700 leading-relaxed font-medium text-justify">
            {SINTESIS_TEXT}
          </p>
        </div>
      </div>

      {/* INFOGRAFÍA DE ALTO VALOR */}
      <div className="bg-white border-t border-slate-200 w-full py-20 px-4 mt-16 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3 block">Infografía Avanzada</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Análisis Comparativo Estructural
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Visualización de las brechas de comportamiento turístico según vectores territoriales y capacidad adquisitiva.
            </p>
          </div>

          {/* 1. DATA PILLARS: REGIONES */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
               <div className="bg-slate-900 text-white p-2 rounded-lg"><MapPin size={24} /></div>
               <h3 className="text-2xl font-black text-slate-900">Vector Regional</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGIONAL_DATA.map((region) => (
                <RegionPillar 
                  key={region.id}
                  region={region}
                  Icon={ICON_MAP[region.iconName]}
                />
              ))}
            </div>
          </div>

          {/* 2. INFOGRAFÍA MATRIZ: SOCIOECONÓMICA */}
          <div className="mt-20 pt-10">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
               <div className="bg-slate-900 text-white p-2 rounded-lg"><TrendingUp size={24} /></div>
               <h3 className="text-2xl font-black text-slate-900">Matriz de Capacidad Adquisitiva</h3>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-12 overflow-hidden relative">
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
               
               {/* Cabeceras de Matriz */}
               <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative z-10">
                  <div className="w-full md:w-[45%] text-center md:text-right p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-4 md:mb-0">
                     <span className="text-xs font-mono font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Nivel Alto</span>
                     <h4 className="text-3xl font-black text-slate-900 leading-tight">Más de 4 <br/><span className="text-xl font-bold text-slate-400">SMMLV</span></h4>
                  </div>
                  
                  <div className="w-full md:w-[10%] flex justify-center py-4 md:py-0">
                     <div className="bg-slate-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-sm uppercase tracking-widest shadow-xl ring-4 ring-white">Vs</div>
                  </div>

                  <div className="w-full md:w-[45%] text-center md:text-left p-4 bg-orange-50 rounded-2xl border border-orange-200">
                     <span className="text-xs font-mono font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Nivel Bajo</span>
                     <h4 className="text-3xl font-black text-orange-900 leading-tight">Menos de 2 <br/><span className="text-xl font-bold text-orange-400">SMMLV</span></h4>
                  </div>
               </div>

               {/* Filas de Comparación */}
               <div className="space-y-4 md:space-y-0 relative z-10">
                  {MATRIX_DATA.map((row) => (
                    <SocioMatrixRow 
                      key={row.id}
                      row={row}
                      AltoIcon={ICON_MAP[row.altoIconName]}
                      BajoIcon={ICON_MAP[row.bajoIconName]}
                    />
                  ))}
               </div>

               {/* Implicaciones */}
               <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start relative z-10 border border-slate-200 shadow-sm">
                  {/* Directriz A */}
                  <div className="w-full md:w-1/2">
                     <div className="flex items-center gap-2 mb-4">
                       <span className="bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Segmento A</span>
                       <h5 className="font-bold text-slate-800">{DIRECTRICES_DATA.segmentoA.titulo}</h5>
                     </div>
                     <ul className="space-y-3 text-sm text-slate-600 font-medium">
                       {DIRECTRICES_DATA.segmentoA.items.map((item, index) => (
                         <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-slate-400 mt-0.5 shrink-0" />
                            <span>{parseMarkdownBold(item)}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                  
                  <div className="hidden md:block w-px self-stretch bg-slate-200"></div>
                  
                  {/* Directriz B */}
                  <div className="w-full md:w-1/2">
                     <div className="flex items-center gap-2 mb-4">
                       <span className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">Segmento B</span>
                       <h5 className="font-bold text-orange-900">{DIRECTRICES_DATA.segmentoB.titulo}</h5>
                     </div>
                     <ul className="space-y-3 text-sm text-slate-600 font-medium">
                       {DIRECTRICES_DATA.segmentoB.items.map((item, index) => (
                         <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-orange-400 mt-0.5 shrink-0" />
                            <span>{parseMarkdownBold(item)}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
