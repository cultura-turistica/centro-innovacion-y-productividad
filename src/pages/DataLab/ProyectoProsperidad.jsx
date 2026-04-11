import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polygon, useMap, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart, CartesianGrid, Legend } from 'recharts';
import { Leaf, Info, RefreshCw, Activity, CheckCircle2, ShieldCheck, TreePine } from 'lucide-react';
import './ProyectoProsperidad.css';

const coordsFinca = [
  [3.433071, -75.213988], [3.433464, -75.213904], [3.433590, -75.213810],
  [3.433638, -75.213614], [3.433658, -75.213466], [3.433674, -75.212634],
  [3.433708, -75.212290], [3.433648, -75.211909], [3.433562, -75.211723],
  [3.433497, -75.211686], [3.432917, -75.211478], [3.432822, -75.211508],
  [3.432763, -75.211602], [3.432491, -75.212232], [3.432326, -75.212841],
  [3.431900, -75.212853], [3.430735, -75.212620], [3.429663, -75.212298],
  [3.429402, -75.212176], [3.429225, -75.212131], [3.428928, -75.212022],
  [3.428503, -75.212185], [3.427957, -75.211871], [3.427629, -75.212263],
  [3.427463, -75.212443], [3.427397, -75.212532], [3.427541, -75.212699],
  [3.427647, -75.212718], [3.427716, -75.212808], [3.427697, -75.213039],
  [3.427602, -75.213256], [3.427531, -75.213582], [3.427507, -75.213787],
  [3.427512, -75.213841], [3.427600, -75.213994], [3.427905, -75.214585],
  [3.428003, -75.214807], [3.428062, -75.214898], [3.428113, -75.215076],
  [3.428149, -75.215352], [3.428136, -75.215632], [3.428168, -75.215782],
  [3.428131, -75.216391], [3.427962, -75.216861], [3.427945, -75.217033],
  [3.427992, -75.217190], [3.427951, -75.217384], [3.427952, -75.217522],
  [3.428189, -75.217680], [3.428338, -75.217792], [3.428455, -75.217820],
  [3.428574, -75.217713], [3.428647, -75.217674], [3.428732, -75.217592],
  [3.429315, -75.217630], [3.429721, -75.217966], [3.429844, -75.217993],
  [3.434336, -75.216654], [3.433071, -75.213988]
];

// Custom hook para calcular los límites del polígono
const boundsFinca = [
  [3.427397, -75.217993], // Suroeste (min lat, min lng)
  [3.434336, -75.211478]  // Noreste (max lat, max lng)
];

// Helper to center and zoom map when steps change
function MapController({ step }) {
  const map = useMap();
  useEffect(() => {
    if (step === 0) {
      map.flyTo([4.5709, -74.2973], 6); // Vista general Colombia
    } else if (step === 1) {
      map.flyTo([3.431, -75.214], 14); // Acercamiento regional
    } else if (step === 2 || step === 3) {
      map.flyTo([3.431, -75.214], 15); // Zoom a la finca
    } else if (step >= 4) {
      map.fitBounds(boundsFinca, { padding: [50, 50] }); // Encuadre exacto de la finca
    }
  }, [step, map]);
  return null;
}

export default function ProyectoProsperidad() {
  const [step, setStep] = useState(0);
  const [dataMaster, setDataMaster] = useState(null);
  const stepsRefs = useRef([]);

  useEffect(() => {
    // Esconder la navegacion global para inmersión
    const nav = document.querySelector('.header');
    if (nav) nav.style.display = 'none';

    fetch('/data/PROSPERIDAD_MASTER_DATA_CULTURAT.json')
      .then(r => r.json())
      .then(d => setDataMaster(d))
      .catch(e => console.error("Error cargando maestro:", e));

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepId = parseInt(entry.target.getAttribute('data-step'), 10);
          setStep(stepId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    stepsRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      if (nav) nav.style.display = 'block'; 
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !stepsRefs.current.includes(el)) {
      stepsRefs.current.push(el);
    }
  };

  if (!dataMaster) return <div style={{color:'white', padding: '2rem'}}>Cargando Laboratorio...</div>;

  const { transicion_uso_suelo, monitoreo_salud_mensual } = dataMaster;

  // Custom tooltips
  const CustomTooltipTimeSeries = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-tooltip">
          <h4>Vigencia: {label}</h4>
          {payload.map((p, i) => (
             <p key={i} style={{color: p.color, margin: '2px 0'}}>
               {p.name}: <strong>{p.value} Ha</strong>
             </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomTooltipSalud = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-tooltip">
          <h4>Fecha: {label}</h4>
          {payload.map((p, i) => (
             <p key={i} style={{color: p.color, margin: '2px 0'}}>
               {p.name}: <strong>{p.value.toFixed(3)}</strong>
             </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="prosperidad-container">
      
      {/* MAPA DE FONDO FIJO */}
      <div className="map-background">
        <MapContainer center={[4.5709, -74.2973]} zoom={6} zoomControl={false} scrollWheelZoom={false} dragging={false}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri"
          />
          <MapController step={step} />
          {step > 0 && (
            <Polygon 
              positions={coordsFinca} 
              pathOptions={{ 
                color: step >= 2 ? '#22C55E' : '#eab308', 
                weight: 3, 
                fillColor: step >= 2 ? '#22C55E' : 'transparent', 
                fillOpacity: step >= 4 ? 0 : (step >= 2 ? 0.3 : 0) // Quitar opacidad si se muestra el raster
              }} 
            />
          )}
          {step >= 4 && (
            <ImageOverlay
              url="/data/cobertura_2026.png"
              bounds={boundsFinca}
              opacity={0.8}
            />
          )}
        </MapContainer>
        <div className="map-overlay"></div>
      </div>

      {/* TEXTO DE TRANSPARENCIA RADICAL SIEMPRE VISIBLE ABAJO O EN MENU */}
        <div className="transparency-note">
        <ShieldCheck size={20} style={{marginRight: '8px', color: '#68E18F'}}/>
        <div>
          <strong>Transparencia de Datos: Hipótesis de Supuesto Ambiental</strong>
          <p>
            Este laboratorio presenta un <strong>ejercicio académico y teórico</strong>. Las cifras de carbono expuestas son estimaciones no verificadas y no representan créditos generados ni victorias climáticas de Cultura T. 
            Para la <b>Capacidad Estimada de Stock</b>, se asume un modelo teórico de <b>25 tC/ha</b>. Para la <b>Captura Posible</b>, se proyecta teóricamente un Flujo Medio Anual de <b>1.5 tCO2e/ha/año</b>. 
            El objetivo de estas métricas es evaluar cómo podríamos iniciar la vigilancia ecosistémica bajo intervenciones moderadas, apoyándonos en lineamientos teóricos forestales, sin certificar de ninguna forma una captura real o adjudicada.
          </p>
        </div>
      </div>

      {/* SCROLLYTELLING CONTENT */}
      <div className="scrolly-content">
        
        {/* TITULO */}
        <div className="step-empty">
           <div className="hero-title glass-panel">
              <TreePine size={48} color="#22C55E"/>
              <h1>La Prosperidad</h1>
              <h2>Resiliencia en el Bosque Seco Tropical</h2>
              <p>Desplázate hacia abajo para explorar la historia visual de la conservación.</p>
           </div>
        </div>

        {/* ACTO 1: LA HERENCIA */}
        <div className="step" data-step="1" ref={addToRefs}>
          <div className="glass-panel text-panel">
            <h2>El Origen (2018-2022)</h2>
            <p>
              El predio "La Prosperidad" fue adquirido entre 2018 y 2019 con el objetivo inicial de desarrollar un proyecto turístico que no pudo materializarse por costos. Durante este periodo, su ecosistema de bosque nativo se mantuvo intacto, de forma casi virgen, sin cultivos ni animales.
            </p>
            <p>
              Esta etapa representa la línea base del territorio antes de cualquier intervención humana directa.
            </p>
            
            {/* CUADRO TIPO IMAGEN CON EL POLÍGONO EXACTO */}
            <div className="mini-map-frame" style={{height: '220px', width: '100%', marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)'}}>
               <MapContainer center={[3.431, -75.214]} zoom={14} zoomControl={false} scrollWheelZoom={false} dragging={false} style={{height: '100%', width: '100%'}}>
                 <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                 <Polygon positions={coordsFinca} pathOptions={{ color: '#fff', weight: 2, fillOpacity: 0.1, fillColor: '#fff' }} />
               </MapContainer>
            </div>
            <p className="micro-desc" style={{marginTop: '10px', textAlign: 'center'}}>Linderos exactos del predio "La Prosperidad"</p>
          </div>
        </div>

        {/* ACTO 2: LA GESTION */}
        <div className="step" data-step="2" ref={addToRefs}>
          <div className="glass-panel data-panel wide-panel">
            <h2>La Intervención (2023-2026)</h2>
            <p>
              A partir de 2023, la socia propietaria inició una intervención moderada en el predio: se construyó una casa rústica, se introdujeron pastos para ganadería y se plantaron algunos árboles frutales, constituyendo así la intervención principal actual.
            </p>
            <p>
              El propósito de este laboratorio no es presentar una victoria climática, sino trazar un supuesto teórico: observar el tejido forestal que permanece y <strong>estimar su capacidad ecosistémica posible</strong> (no verificada) ante los nuevos cambios, promoviendo la vigilancia satelital.
            </p>

            <div className="stats-grid">
               <div className="stat-box highlight-green">
                  <h4>Bosque Protegido (2026)</h4>
                  <div className="big-num">32.82 Ha <CheckCircle2 size={24} /></div>
                  <small>Intacto y preservado.</small>
               </div>
               <div className="stat-box highlight-orange">
                  <h4>Crecimiento del Matorral</h4>
                  <div className="big-num">1.98 → 4.67 Ha</div>
                  <small>Insight clave de regeneración o transición por estrés hídrico.</small>
               </div>
            </div>

            <div className="chart-row">
               <div className="chart-container">
                 <h4 className="chart-title">Transición de Uso de Suelo (Hectáreas)</h4>
                 <ResponsiveContainer width="100%" height={250}>
                   <AreaChart data={transicion_uso_suelo}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#2b3b4d" />
                     <XAxis dataKey="Año" stroke="#fff" />
                     <YAxis stroke="#fff" />
                     <Tooltip content={<CustomTooltipTimeSeries />} />
                     <Legend />
                     <Area type="monotone" dataKey="Agua" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                     <Area type="monotone" dataKey="Bosque" stackId="1" stroke="#22c55e" fill="#22c55e" />
                     <Area type="monotone" dataKey="Pastizal" stackId="1" stroke="#eab308" fill="#eab308" />
                     <Area type="monotone" dataKey="Matorral" stackId="1" stroke="#f97316" fill="#f97316" />
                     <Area type="monotone" dataKey="Cultivos" stackId="1" stroke="#a855f7" fill="#a855f7" />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="chart-container">
                 <h4 className="chart-title">Potencial Teórico de Carbono</h4>
                 <p className="micro-desc">Capacidad estimada y posibles capturas (Supuesto no verificado).</p>
                 <ResponsiveContainer width="100%" height={230}>
                   <ComposedChart data={transicion_uso_suelo}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#2b3b4d" />
                     <XAxis dataKey="Año" stroke="#fff" tick={{fontSize: 12}} />
                     <YAxis yAxisId="stock" stroke="#10b981" tick={{fontSize: 10}} domain={['dataMin - 100', 'dataMax + 100']} hide />
                     <YAxis yAxisId="captura" orientation="right" stroke="#0ea5e9" tick={{fontSize: 10}} domain={[45, 56]} />
                     <Tooltip />
                     <Legend />
                     <Area yAxisId="stock" type="monotone" dataKey="Calculo_Stock_CO2e" name="Capacidad Estimada Stock (tCO2e)" fill="#10b981" fillOpacity={0.2} stroke="#10b981" strokeWidth={2} />
                     <Bar yAxisId="captura" dataKey="Calculo_Captura_Anual" name="Posible Captura Teórica (tCO2e/año)" fill="#0ea5e9" barSize={30} radius={[4, 4, 0, 0]} />
                   </ComposedChart>
                 </ResponsiveContainer>
               </div>
            </div>

          </div>
        </div>

        {/* ACTO 3: LA EVIDENCIA */}
        <div className="step" data-step="3" ref={addToRefs}>
          <div className="glass-panel data-panel wide-panel">
            <h2>La Evidencia Satelital</h2>
            <p>
              ¿Cómo probamos que el ecosistema no decayó tras la llegada de la ganadería?
              Para ello, procesamos y unificamos <strong>59 registros mensuales consecutivos</strong> de índices satelitales.
            </p>
            <p className="micro-desc" style={{marginBottom: '1rem'}}>
              <span style={{color: '#4ade80'}}>■ NDVI:</span> Salud y vigor de la vegetación.<br/>
              <span style={{color: '#38bdf8'}}>■ NDMI:</span> Estrés hídrico (humedad del dosel).<br/>
              <span style={{color: '#60a5fa'}}>■ NDWI:</span> Índice de agua (cuerpos de agua/inundación).
            </p>

            <div style={{width: '100%', height: '350px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monitoreo_salud_mensual} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2b3b4d" />
                  <XAxis dataKey="fecha" stroke="#94a3b8" fontSize={10} tick={{fill: '#94a3b8'}} tickFormatter={(v) => v.split('-')[0] === '2021' || v.split('-')[1] === '01' ? v : ''} />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip content={<CustomTooltipSalud />} />
                  <Legend />
                  <Line type="monotone" dot={false} dataKey="salud_vegetacion_ndvi" name="NDVI (Vigor Vegetal)" stroke="#4ade80" strokeWidth={3} />
                  <Line type="monotone" dot={false} dataKey="humedad_dosel_ndmi" name="NDMI (Humedad)" stroke="#38bdf8" strokeWidth={3} />
                  <Line type="monotone" dot={false} dataKey="indice_agua_ndwi" name="NDWI (Índice Agua)" stroke="#60a5fa" strokeWidth={3} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="insight-conclusion">
               <Activity size={24} />
               <span>A pesar de las fluctuaciones climáticas anuales, el vigor general no colapsó, demostrando resiliencia tras la adaptación productiva.</span>
            </div>

          </div>
        </div>

        {/* ACTO 4: COBERTURA Y ENCUADRE */}
        <div className="step" data-step="4" ref={addToRefs}>
          <div className="glass-panel text-panel">
            <h2>El Territorio en Detalle</h2>
            <p>
              El polígono que observas enmarca exactamente las coordenadas de <strong>La Prosperidad</strong>. 
            </p>
            <p>
              Aquí es donde la vigilancia espacial toma sentido. Al superponer algoritmos de clasificación de coberturas (Bosque, Matorral, Pastizal), visualizamos la composición del terreno sin pisarlo.
            </p>
          </div>
        </div>

        {/* CONCLUSIÓN Y REFLEXIÓN FINAL */}
        <div className="step" data-step="5" ref={addToRefs}>
          <div className="glass-panel data-panel">
            <h2>Conclusión: El Valor del Monitoreo Remoto</h2>
            <p>
              Tradicionalmente, certificar la captura de CO2 requiere procesos altamente técnicos, invasivos y costosos: 
              parcelas de muestreo físico en tierra, medición de diámetros de árboles (biometría), e incluso escáneres LiDAR o talas controladas.
            </p>
            <p>
              <strong>¿Por qué utilizamos exclusivamente telemetría satelital para este ejercicio hipotético?</strong><br/>
              Porque nos brinda una capacidad de vigilancia ecosistémica ininterrumpida y a bajo costo. Monitorear los índices de verdor (NDVI) y agua (NDWI) desde el espacio nos permite validar, de forma teórica pero fundamentada, que la introducción de un modelo productivo en un predio adyacente no está aniquilando el bosque circundante.
            </p>
            <div className="insight-conclusion" style={{marginTop: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#dcfce7'}}>
               <CheckCircle2 size={32} color="#4ade80" />
               <span style={{fontSize: '0.95rem'}}>
                 El acercamiento teórico al CO2 (modelos Nivel 1) no busca vender bonos hoy, sino comprobar internamente la robustez del ecosistema. 
                 Es el primer paso ineludible: demostrar con datos remotos que el tejido forestal soporta el cambio, antes de justificar la inversión en certificaciones terrestres oficiales.
               </span>
            </div>
          </div>
        </div>

        <div className="step-empty" style={{height: '50vh'}}></div>
      </div>
    </div>
  );
}
