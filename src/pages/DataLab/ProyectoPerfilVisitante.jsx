import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Info, Brain, Footprints, Heart, Leaf, MapPin, TrendingUp, PieChart, Users, Compass, Activity, Smartphone, PhoneCall, Plane, Bus, Building, Home, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ANATOMY_DATA } from '../../data/anatomyData';
import { AnatomyNode } from '../../components/DataLab/AnatomyNode';
import { AnatomyCard } from '../../components/DataLab/AnatomyCard';
import SocioMatrixRow from '../../components/DataLab/SocioMatrixRow';
import RegionPillar from '../../components/DataLab/RegionPillar';
import { SINTESIS_TEXT, REGIONAL_DATA, MATRIX_DATA, DIRECTRICES_DATA } from '../../data/perfilVisitanteData';

// Mapa de iconos para renderizar dinámicamente desde el string del JSON
const ICON_MAP = {
  PieChart, Users, Compass, Activity, Smartphone, PhoneCall, Plane, Bus, Building, Home, ShieldCheck, AlertCircle
};

const ProyectoPerfilVisitante = () => {
  const [activePart, setActivePart] = useState('cabeza');

  // Función auxiliar para parsear negritas Markdown simples a JSX
  const parseMarkdownBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      <div className="main-container bg-slate-50 min-h-screen pt-24 text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
        
        {/* HEADER */}
        <header className="mb-12 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4" style={{
            background: 'linear-gradient(135deg, #4F46E5, #9333EA, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Anatomía del Turista
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
            Una radiografía interactiva del viajero colombiano en 2024. 
            Basado en los hallazgos reales de la Encuesta de Turistas.
            <strong className="block text-indigo-600 mt-2">Pasa el cursor sobre el cuerpo para explorar el diagnóstico.</strong>
          </p>
        </header>

        {/* MAIN CONTENT GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-stretch px-4 pb-16">
          
          {/* LEFT COL: THE USER'S IMAGE */}
          <div className="glass-card w-full lg:h-[700px] min-h-[500px] relative shadow-xl rounded-3xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-4">
            {/* Background mesh */}
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 left-0 w-full h-full" style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
                  backgroundColor: '#ffffff'
               }}></div>
            </div>

            {/* Tight Wrapper for perfectly aligned percentage coordinates */}
            <div className="relative inline-block w-full max-w-sm md:max-w-md z-10">
                <img 
                    src="/colombian_tourist.png"
                    alt="Anatomía del Turista"
                    className="w-full h-auto drop-shadow-md"
                    style={{ mixBlendMode: 'multiply' }}
                />
                
                {/* INTERACTIVE NODES */}
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

          {/* RIGHT COL: DYNAMIC DATA PANEL */}
          <div className="lg:h-[700px] flex flex-col w-full h-auto">
            <AnimatePresence mode="wait">
              {activePart && ANATOMY_DATA[activePart] && (
                <AnatomyCard activeNode={ANATOMY_DATA[activePart]} />
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* SÍNTESIS GLOBAL */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Info className="text-indigo-600" />
              Síntesis Global del Turista
            </h3>
            <p className="text-slate-700 leading-relaxed font-medium text-justify">
              {SINTESIS_TEXT}
            </p>
          </div>
        </div>

        {/* INFOGRAFÍA DE ALTO VALOR: VECTORES DE COMPORTAMIENTO */}
        <div className="bg-white border-t border-slate-200 w-full py-20 px-4 mt-16 relative overflow-hidden">
          {/* Subtle graph background */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '40px 40px' }}></div>
          
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
                    colorTheme={region.colorTheme}
                    title={region.title}
                    code={region.code}
                    icon={ICON_MAP[region.iconName]}
                    stat1={region.stat1}
                    label1={region.label1}
                    stat2={region.stat2}
                    label2={region.label2}
                  />
                ))}

              </div>
            </div>

            {/* 2. INFOGRAFÍA MATRIZ: SOCIOECONÓMICA */}
            <div>
              <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                 <div className="bg-slate-900 text-white p-2 rounded-lg"><TrendingUp size={24} /></div>
                 <h3 className="text-2xl font-black text-slate-900">Matriz de Capacidad Adquisitiva</h3>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-12 overflow-hidden relative">
                 {/* Decorative background axis */}
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

                 {/* Filas de Comparación (Desktop Matrix Layout) */}
                 <div className="space-y-4 md:space-y-0 relative z-10">
                    
                    {MATRIX_DATA.map((row) => (
                      <SocioMatrixRow 
                        key={row.id}
                        altoIcon={ICON_MAP[row.altoIconName]}
                        bajoIcon={ICON_MAP[row.bajoIconName]}
                        altoValue={row.altoValue}
                        altoLabel={row.altoLabel}
                        bajoValue={row.bajoValue}
                        bajoLabel={row.bajoLabel}
                        bajoBadge={row.bajoBadge}
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
    </>
  );
};

export default ProyectoPerfilVisitante;
