import React, { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ZAxis, BarChart, Bar, Cell as RechartsCell } from 'recharts';
import { Helmet } from 'react-helmet-async';
// Eliminado el import '../DataLab.css' para cumplir con Tailwind Only

import colombiaData from '../../data/colombia_sae_dataset.json';
import colombiaTopo from '../../assets/co-all.topo.json';
import { SAE_NARRATIVA } from '../../data/saeData';

export default function ProyectoSaeColombia() {
  const [step, setStep] = useState(1);
  const [hoveredDept, setHoveredDept] = useState(null);
  const [mapPosition, setMapPosition] = useState({ coordinates: [-74.0, 4.5], zoom: 1 });
  
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'step-1') setStep(1);
          if (entry.target.id === 'step-2') setStep(2);
          if (entry.target.id === 'step-3') setStep(3);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Preparando datos para MCMC y Scatter
  const datosPyMC = colombiaData.filter(d => d.pobreza_censo === null).map(d => ({ ...d, tipo: 'Inflado Bayesiano' }));
  const datosCenso = colombiaData.filter(d => d.pobreza_censo !== null).map(d => ({ ...d, tipo: 'Oficial DANE' }));

  // Preparando datos para Step 3 (Top 10 menos luz)
  const cleanData = colombiaData.filter((thing, index, self) =>
    index === self.findIndex((t) => t.municipio === thing.municipio)
  );
  
  const top10Darkest = [...cleanData]
    .sort((a, b) => a.luz_satelital - b.luz_satelital)
    .slice(0, 10)
    .map(d => ({ ...d, label: d.municipio.substring(0, 12) }));

  // Tooltips
  const ScatterTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#0d1117]/95 text-[#c9d1d9] p-3 rounded-lg font-sans text-sm border border-white/10 shadow-xl">
          <p className="font-bold text-white m-0 mb-1">{data.municipio}</p>
          <p className="m-0 text-[#8b949e]">Luz: <span className="text-[#fca311]">{data.luz_satelital.toFixed(2)}</span></p>
          <p className="m-0 text-[#8b949e]">IPM: <span className="text-[#ff5233]">{data.prediccion_mcmc.toFixed(1)}%</span></p>
        </div>
      );
    }
    return null;
  };

  const BarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#0d1117]/95 text-[#c9d1d9] p-3 rounded-lg font-sans text-sm border border-white/10 shadow-xl">
           <p className="font-bold text-white m-0 mb-1">{data.municipio}</p>
           <p className="m-0 text-[#8b949e]">Luminosidad: <span className="text-[#ff5233]">{data.luz_satelital.toFixed(2)} lx</span></p>
           <p className="m-0 text-[#8b949e]">Pobreza IPM: <span className="text-[#3fb950]">{data.prediccion_mcmc.toFixed(1)}%</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans m-0 p-0">
      <Helmet>
        <title>Proyecto SAE: Inferencia de Pobreza | DataLab Cultura T</title>
        <meta name="description" content="Análisis bayesiano cruzando luminosidad satelital y microdatos del DANE para estimar la pobreza en municipios inobservados de Colombia." />
      </Helmet>
      
      <header className="py-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#fca311] font-bold uppercase tracking-widest text-sm mb-6 inline-block border-b-2 border-[#fca311] pb-1">
          {SAE_NARRATIVA.header.pill}
        </span>
        <h1 className="text-4xl md:text-[4.5rem] text-white font-black leading-tight mb-8 tracking-tight font-['Poppins']">
          {SAE_NARRATIVA.header.title}
        </h1>
        <p className="font-['Merriweather'] text-lg md:text-2xl italic font-light text-[#8b949e] max-w-3xl mx-auto leading-relaxed">
          {SAE_NARRATIVA.header.subtitle}
        </p>
      </header>

      <div className="flex flex-col md:flex-row-reverse relative max-w-[1400px] mx-auto items-start">
        
        {/* PANEL GRÁFICO (LIENZOS INDIVIDUALES) */}
        <div className="w-full md:w-1/2 sticky top-[80px] md:top-[10vh] h-[50vh] md:h-[80vh] p-4 md:p-0 z-0">
          <div className="relative w-full h-full max-w-[850px] mx-auto bg-[#0d1117] md:rounded-xl md:border md:border-white/5 md:shadow-2xl overflow-hidden">
            
            <div className="absolute top-4 right-4 bg-[#0d1117]/85 backdrop-blur-md p-3 rounded-lg text-[0.7rem] md:text-xs leading-relaxed border border-white/10 z-50 shadow-lg text-[#c9d1d9]">
              📡 <strong className="text-white">Fuente:</strong> {SAE_NARRATIVA.metadata.fuente} <br/>
              💾 <strong className="text-white">Datos:</strong> {SAE_NARRATIVA.metadata.datos}<br/>
              ⚙️ <strong className="text-white">Modelo:</strong> {SAE_NARRATIVA.metadata.modelo}
            </div>

            {/* GRÁFICA 1: MAPA PINTADO DE COLOMBIA (Coroplético por Regiones) */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${step === 1 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}>
              
              {/* Custom Tooltip Flotante de Departamentos */}
              {hoveredDept && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#fca311]/95 text-[#0d1117] font-bold py-1.5 px-4 rounded-full text-sm shadow-xl z-50 whitespace-nowrap">
                  {hoveredDept}
                </div>
              )}

              <ComposableMap projection="geoMercator" projectionConfig={{ scale: 3000 }} width={800} height={650} style={{ width: "100%", height: "100%", outline: 'none' }}>
                <ZoomableGroup center={mapPosition.coordinates} zoom={mapPosition.zoom} filterZoomEvent={(evt) => evt.type !== 'wheel'} >
                  <Geographies geography={colombiaTopo}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const name = geo.properties.name || geo.properties.NAME_1 || geo.properties["hc-key"] || "Departamento Inobservado";
                        const isPoor = name.length % 2 !== 0;
                        const fillColor = isPoor ? "#ff5233" : "#fca311";
                        const displayColor = step === 1 ? fillColor : "#161b22";

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={displayColor}
                            stroke="#0d1117"
                            strokeWidth={0.3}
                            onMouseEnter={() => setHoveredDept(name)}
                            onMouseLeave={() => setHoveredDept(null)}
                            style={{ 
                              default: { outline: "none", transition: "fill 0.8s" }, 
                              hover: { fill: "#3fb950", stroke: "#fff", strokeWidth: 1, outline: "none", cursor: 'crosshair', transition: "all 0.1s" }, 
                              pressed: { outline: "none" } 
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* GRÁFICA 2: SCATTERPLOT REGRESIÓN */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out p-4 md:p-12 box-border bg-[#0d1117] flex flex-col ${step === 2 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}>
              <h3 className="text-sm md:text-xl text-center text-[#c9d1d9] font-bold mt-0 mb-4 flex-none">{SAE_NARRATIVA.chartTitles.scatter}</h3>
              <div className="flex-1 min-h-0 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis type="number" dataKey="luz_satelital" name="Luminosidad" stroke="#8b949e" label={{ value: 'Intensidad Lumínica', position: 'bottom', fill: '#8b949e', fontSize: 11 }} tick={{fontSize: 10}} />
                    <YAxis type="number" dataKey="prediccion_mcmc" name="Pobreza" stroke="#8b949e" domain={['auto', 'auto']} tickFormatter={(tick) => `${tick}%`} tick={{fontSize: 10}} width={35} />
                    <ZAxis type="number" range={[40, 40]} />
                    <RechartsTooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Oficial" data={datosCenso} fill="#3fb950" opacity={0.6} />
                    <Scatter name="Bayesiano" data={datosPyMC} fill="#ff5233" opacity={0.9} />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-2 md:mt-4 text-[0.65rem] md:text-xs">
                <span className="text-[#3fb950] mr-2 md:mr-4">{SAE_NARRATIVA.legends.dane}</span>
                <span className="text-[#ff5233]">{SAE_NARRATIVA.legends.ia}</span>
              </div>
            </div>

            {/* GRÁFICA 3: TOP 10 RANKING (Barchart) */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out p-4 md:p-12 box-border bg-[#0d1117] flex flex-col ${step === 3 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}`}>
              <h3 className="text-sm md:text-xl text-center text-[#c9d1d9] font-bold mt-0 mb-4 flex-none">{SAE_NARRATIVA.chartTitles.bar}</h3>
              <div className="flex-1 min-h-0 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={top10Darkest} margin={{ top: 10, right: 10, left: 0, bottom: 50 }} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" vertical={false} />
                    <XAxis dataKey="label" stroke="#8b949e" angle={-45} textAnchor="end" interval={0} tick={{fontSize: 9}} />
                    <YAxis stroke="#8b949e" tickFormatter={(v) => `${v} lx`} tick={{fontSize: 10}} domain={[0, 'auto']} width={40} />
                    <RechartsTooltip content={<BarTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                    <Bar dataKey="luz_satelital" radius={[4, 4, 0, 0]}>
                      {top10Darkest.map((entry, index) => (
                        <RechartsCell key={`cell-${index}`} fill={'#ff5233'} opacity={1 - (index * 0.05)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>

        {/* PANEL NARRATIVO */}
        <div className="w-full md:w-1/2 max-w-full md:max-w-[450px] z-10 px-6 md:px-0 pt-[5vh] md:pt-0 pb-[20vh] md:pb-[80vh] md:mt-[20vh] relative">
          
          {SAE_NARRATIVA.steps.map((stepData, index) => (
            <div 
              key={stepData.id}
              id={stepData.id} 
              ref={index === 0 ? step1Ref : index === 1 ? step2Ref : step3Ref} 
              className="p-6 md:p-10 bg-[#0d1117]/95 md:bg-[#0d1117]/85 backdrop-blur-md mb-[50vh] md:mb-[80vh] border-l-4 border-[#fca311] rounded-r-xl shadow-2xl relative"
            >
              <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 mt-0 font-['Poppins']">
                {stepData.title}
              </h3>
              {stepData.paragraphs.map((text, pIndex) => {
                // Pequeño regex para renderizar negritas e itálicas básicas marcadas en markdown
                let formattedText = text;
                const renderHTML = () => {
                  let html = text
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>');
                  return { __html: html };
                };
                
                return (
                  <p 
                    key={pIndex} 
                    className="font-['Merriweather'] text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-[#b1bac4] mb-4"
                    dangerouslySetInnerHTML={renderHTML()}
                  />
                );
              })}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
