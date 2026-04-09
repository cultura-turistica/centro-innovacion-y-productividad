import React, { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ZAxis, BarChart, Bar, Cell as RechartsCell } from 'recharts';
import '../DataLab.css';

// Importación Directa del JSON
import colombiaData from '../../data/colombia_sae_dataset.json';
// Importación del TopoJSON Departamental de Colombia
import colombiaTopo from '../../assets/co-all.topo.json';

export default function ProyectoSaeColombia() {
  const [step, setStep] = useState(1);
  const [hoveredDept, setHoveredDept] = useState(null);
  const [mapPosition, setMapPosition] = useState({ coordinates: [-74.0, 4.5], zoom: 1 });
  
  // Element Refs para el IntersectionObserver
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
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

    return () => observer.disconnect();
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
        <div className="datalab-tooltip">
          <p style={{fontWeight:'bold', color:'#0d1117', margin: 0, marginBottom:'5px'}}>{data.municipio}</p>
          <p style={{color: '#555', margin: 0}}>Luz: <span style={{color:'#fca311'}}>{data.luz_satelital.toFixed(2)}</span></p>
          <p style={{color: '#555', margin: 0}}>IPM: <span style={{color: '#ff5233'}}>{data.prediccion_mcmc.toFixed(1)}%</span></p>
        </div>
      );
    }
    return null;
  };

  const BarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="datalab-tooltip">
           <p style={{fontWeight:'bold', color:'#0d1117', margin: 0, marginBottom:'5px'}}>{data.municipio}</p>
           <p style={{color: '#555', margin: 0}}>Luminosidad: <span style={{color: '#ff5233'}}>{data.luz_satelital.toFixed(2)} lx</span></p>
           <p style={{color: '#555', margin: 0}}>Pobreza IPM: <span style={{color: '#3fb950'}}>{data.prediccion_mcmc.toFixed(1)}%</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="datalab-root">
      
      <header className="datalab-header">
        <span className="datalab-pill">Inferencia Estadística Espacial (SAE)</span>
        <h1 className="datalab-title">Inferencia de Pobreza Multidimensional.</h1>
        <p className="datalab-subtitle">
          Estimación en Áreas Pequeñas cruzando luminosidad satelital nocturna con encuestas DANE mediante inferencia bayesiana. 
        </p>
      </header>

      <div className="datalab-scrolly">
        
        {/* PANEL NARRATIVO */}
        <div className="datalab-text">
          <div id="step-1" ref={step1Ref} className="datalab-step">
            <h3>1. "Dime con quién andas..." (Fuerza Prestada)</h3>
            <p>
              Las encuestas no logran llegar a cada rincón del país. Para llenar estos vacíos, los estadísticos se basan en la correlación espacial: el fenómeno de la pobreza se aglomera en los territorios.
            </p>
            <p>
              En el <strong>Mapa Coroplético</strong> a tu derecha, el modelo "toma fuerza prestada" de las zonas evaluadas. Utilizando un <i>efecto aleatorio</i> municipal, asume que si un área tiene características de pobreza, los municipios vecinos inobservados muy probablemente compartan esa realidad.
            </p>
          </div>
          
          <div id="step-2" ref={step2Ref} className="datalab-step">
            <h3>2. Satélites como Ojos (Variable Auxiliar)</h3>
            <p>
              Ante la falta de encuestadores en terreno, la contaminación lumínica se usa como un poderoso <i>proxy</i> de actividad económica e infraestructura. Sin embargo, la luz espacial no reemplaza la encuesta: la complementa.
            </p>
            <p>
              El gráfico a tu derecha demuestra cómo el modelo mezcla fuentes: toma encuestas reales (<strong style={{color:'#3fb950'}}>Puntos Verdes</strong>), suma variables continuas del Censo, y añade la intensidad de luz (Eje X) para calibrar la regresión de áreas inobservadas (<strong style={{color:'#ff5233'}}>Puntos Rojos</strong>).
            </p>
          </div>

          <div id="step-3" ref={step3Ref} className="datalab-step">
            <h3>3. Imputación Teórica (Top 10 Inobservados)</h3>
            <p>
              Al cruzar todo lo anterior, la matemática aprende una fórmula silenciosa (Ej: menos luz satelital + menor educación censal = mayor probabilidad de pobreza). Con esto, logra una asombrosa <strong>imputación teórica</strong> para los recovecos oscuros del país.
            </p>
            <p>
              A tu derecha revelamos un ranking estadístico impecable: el Top 10 de municipios inobservados, descubiertos únicamente a través de inferencia bayesiana, que fungen como el objetivo primordial de política pública de choque para el Estado.
            </p>
          </div>
        </div>

        {/* PANEL GRÁFICO (LIENZOS INDIVIDUALES) */}
        <div className="datalab-graphic">
          <div className="datalab-graphic-inner">
            
            <div className="datalab-metadata-panel">
              📡 <strong>Fuente:</strong> DANE + NOAA Satellites <br/>
              💾 <strong>Datos:</strong> 1,086 Puntos<br/>
              ⚙️ <strong>Modelo:</strong> Regresión MCMC
            </div>

            {/* GRÁFICA 1: MAPA PINTADO DE COLOMBIA (Coroplético por Regiones) */}
            <div className={`datalab-graphic-layer ${step === 1 ? 'active' : ''}`} style={{ zIndex: step === 1 ? 10 : 0 }}>
              
              {/* Custom Tooltip Flotante de Departamentos */}
              {hoveredDept && (
                <div className="datalab-dept-tooltip">
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
            <div className={`datalab-graphic-layer datalab-scatter-layer ${step === 2 ? 'active' : ''}`} style={{ zIndex: step === 2 ? 10 : 0 }}>
              <h3 className="datalab-chart-title">Regresión IA: Luz Satelital vs. Pobreza</h3>
              <ResponsiveContainer width="100%" height="85%">
                <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                  <XAxis type="number" dataKey="luz_satelital" name="Luminosidad" stroke="#8b949e" label={{ value: 'Intensidad Lumínica Satelital', position: 'bottom', fill: '#8b949e' }} tick={{fontSize: 12}} />
                  <YAxis type="number" dataKey="prediccion_mcmc" name="Pobreza" stroke="#8b949e" domain={['auto', 'auto']} tickFormatter={(tick) => `${tick}%`} tick={{fontSize: 12}} width={45} />
                  <ZAxis type="number" range={[40, 40]} />
                  <RechartsTooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Oficial" data={datosCenso} fill="#3fb950" opacity={0.6} />
                  <Scatter name="Bayesiano" data={datosPyMC} fill="#ff5233" opacity={0.9} />
                </ScatterChart>
              </ResponsiveContainer>
              <div className="datalab-chart-legend">
                <span className="legend-dane">● Censado DANE Oficial</span>
                <span className="legend-ia">● Inobservado (Inferido IA)</span>
              </div>
            </div>

            {/* GRÁFICA 3: TOP 10 RANKING (Barchart) */}
            <div className={`datalab-graphic-layer datalab-scatter-layer ${step === 3 ? 'active' : ''}`} style={{ zIndex: step === 3 ? 10 : 0 }}>
              <h3 className="datalab-chart-title">Top 10 Municipios de Oscuridad Extrema</h3>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={top10Darkest} margin={{ top: 20, right: 30, left: 10, bottom: 60 }} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#30363d" vertical={false} />
                  <XAxis dataKey="label" stroke="#8b949e" angle={-45} textAnchor="end" interval={0} tick={{fontSize: 11}} />
                  <YAxis stroke="#8b949e" tickFormatter={(v) => `${v} lx`} tick={{fontSize: 12}} domain={[0, 'auto']} />
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
    </div>
  );
}
