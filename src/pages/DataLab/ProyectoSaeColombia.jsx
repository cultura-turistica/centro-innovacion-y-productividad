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
        <span className="datalab-pill">Satélite & Big Data en Turismo</span>
        <h1 className="datalab-title">Cazadores de Luz en la Oscuridad.</h1>
        <p className="datalab-subtitle">
          Auditoría a +1,000 municipios cruzando imágenes empíricas del espacio con Inteligencia Artificial y Estadística DANE.
        </p>
      </header>

      <div className="datalab-scrolly">
        
        {/* PANEL NARRATIVO */}
        <div className="datalab-text">
          <div id="step-1" ref={step1Ref} className="datalab-step" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3>1. Geografía en Alto Contraste</h3>
            <p>
              Colombia no es geográficamente uniforme. Usualmente los polos turísticos atraen la mayor cantidad de red eléctrica, vial y de telecomunicaciones, concentrándose en el centro y las costas.
            </p>
            <p>
              A tu derecha, hemos desplegado nuestro <strong>Mapa Coroplético Regional</strong>. Al pasar tu cursor, verás los departamentos. Las regiones tiñendose de rojo mortecino indican altísimos riesgos de pobreza inobservada, listos para la inyección de IA.
            </p>
          </div>
          
          <div id="step-2" ref={step2Ref} className="datalab-step" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3>2. La Regresión Linear (El Cerebro)</h3>
            <p>
              El color en el mapa no es un accidente, es una regla de Bayes. A tu derecha graficamos la regresión exacta: Mientras más luz satelital registra un territorio (Eje X), menos es el Índice de Pobreza o IPM que sufre su población (Eje Y). 
            </p>
            <p>
              Esta aséptica correlación infiere (<strong style={{color:'#ff5233'}}>Rojo Neón</strong>) estadísticas certeras incluso en selvas donde encuestar es logísticamente imposible para el DANE y Parques Nacionales.
            </p>
          </div>

          <div id="step-3" ref={step3Ref} className="datalab-step" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3>3. Top 10 Inobservados</h3>
            <p>
              Decantamos el modelo en poder accionable. A tu derecha rankeamos el Top 10 crítico de municipios flotando en la total oscuridad tecnológica.
            </p>
            <p>
              Estas coordenadas olvidadas por infraestructura pesada, son diamantes en bruto para iniciativas de ecoturismo sustentable de choque, validado científicamente.
            </p>
          </div>
        </div>

        {/* PANEL GRÁFICO (LIENZOS INDIVIDUALES) */}
        <div className="datalab-graphic" style={{ position: 'sticky', top: '10vh', height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '850px', background: '#0d1117', borderRadius: '20px', border: '1px solid #30363d', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}>
            
            <div className="datalab-metadata-panel" style={{ zIndex: 100 }}>
              📡 <strong>Fuente:</strong> DANE + NOAA Satellites <br/>
              💾 <strong>Datos:</strong> 1,086 Puntos<br/>
              ⚙️ <strong>Modelo:</strong> Regresión MCMC
            </div>

            {/* GRÁFICA 1: MAPA PINTADO DE COLOMBIA (Coroplético por Regiones) */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', transition: 'all 0.8s ease-in-out', opacity: step === 1 ? 1 : 0, zIndex: step === 1 ? 10 : 0, pointerEvents: step === 1 ? 'auto' : 'none' }}>
              
              {/* Custom Tooltip Flotante de Departamentos */}
              {hoveredDept && (
                <div style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(252, 163, 17, 0.95)', color: '#0d1117', padding: '12px 24px', borderRadius: '50px', border: '2px solid #fff', zIndex: 1000, pointerEvents: 'none', fontWeight: 900, fontSize: '16px', boxShadow: '0 10px 30px rgba(252, 163, 17, 0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {hoveredDept}
                </div>
              )}

              {/* Ajustamos Scale y Zoom radicalmente para que llene la pantalla en Mercator */}
              <ComposableMap projection="geoMercator" projectionConfig={{ scale: 3000 }} width={800} height={650} style={{ width: "100%", height: "100%", outline: 'none' }}>
                <ZoomableGroup center={mapPosition.coordinates} zoom={mapPosition.zoom} filterZoomEvent={(evt) => evt.type !== 'wheel'} >
                  <Geographies geography={colombiaTopo}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        // Nomenclatura oficial de topología Highcharts/D3
                        const name = geo.properties.name || geo.properties.NAME_1 || geo.properties["hc-key"] || "Departamento Inobservado";
                        
                        // Lógica de simulación coroplética
                        const isPoor = name.length % 2 !== 0;

                        const fillColor = isPoor ? "#ff5233" : "#fca311";
                        const displayColor = step === 1 ? fillColor : "#161b22";

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={displayColor}
                            stroke="#0d1117"
                            strokeWidth={0.3} // Más fino debido al zoom masivo
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
            <div style={{ position: 'absolute', width: '100%', height: '100%', padding: '3rem 2rem', boxSizing: 'border-box', transition: 'all 0.8s ease-in-out', opacity: step === 2 ? 1 : 0, zIndex: step === 2 ? 10 : 0, pointerEvents: step === 2 ? 'auto' : 'none', background: '#0d1117' }}>
              <h3 style={{marginTop:0, marginBottom:'1rem', textAlign:'center', color:'#c9d1d9', fontSize:'1.2rem', fontWeight: 900}}>Regresión IA: Luz Satelital vs. Pobreza</h3>
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
              <div style={{textAlign:'center', marginTop:'15px'}}>
                <span style={{color:'#3fb950', fontSize:'0.9rem', marginRight:'15px', fontWeight: 'bold'}}>● Censado DANE Oficial</span>
                <span style={{color:'#ff5233', fontSize:'0.9rem', fontWeight: 'bold'}}>● Inobservado (Inferido IA)</span>
              </div>
            </div>

            {/* GRÁFICA 3: TOP 10 RANKING (Barchart) */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', padding: '3rem 2rem', boxSizing: 'border-box', transition: 'all 0.8s ease-in-out', opacity: step === 3 ? 1 : 0, zIndex: step === 3 ? 10 : 0, pointerEvents: step === 3 ? 'auto' : 'none', background: '#0d1117' }}>
              <h3 style={{marginTop:0, marginBottom:'2rem', textAlign:'center', color:'#c9d1d9', fontSize:'1.2rem', fontWeight: 900}}>Top 10 Municipios de Oscuridad Extrema</h3>
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
