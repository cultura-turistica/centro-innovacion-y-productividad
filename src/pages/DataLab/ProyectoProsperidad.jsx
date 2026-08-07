import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polygon, useMap, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, ComposedChart, CartesianGrid, Legend } from 'recharts';
import { Leaf, Info, RefreshCw, Activity, CheckCircle2, ShieldCheck, TreePine } from 'lucide-react';
import { coordsFinca, boundsFinca, NARRATIVA } from '../../data/prosperidadData';

// Helper to center and zoom map when steps change
function MapController({ step }) {
  const map = useMap();
  useEffect(() => {
    // Force leaflet to recalculate dimensions (fixes the giant grey block bug)
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

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

function FixMapSize() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, [map]);
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

    fetch(`${import.meta.env.BASE_URL}data/PROSPERIDAD_MASTER_DATA_CULTURAT.json`)
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

  if (!dataMaster) return <div className="text-white p-8">Cargando Laboratorio...</div>;

  const { transicion_uso_suelo, monitoreo_salud_mensual } = dataMaster;

  // Custom tooltips
  const CustomTooltipTimeSeries = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 border border-white/20 backdrop-blur-md p-4 rounded-lg text-white shadow-lg">
          <h4 className="m-0 mb-2 text-sm text-slate-400 uppercase border-b border-white/10 pb-1">Vigencia: {label}</h4>
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
        <div className="bg-slate-900/90 border border-white/20 backdrop-blur-md p-4 rounded-lg text-white shadow-lg">
          <h4 className="m-0 mb-2 text-sm text-slate-400 uppercase border-b border-white/10 pb-1">Fecha: {label}</h4>
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
    <div className="relative w-screen min-h-screen -ml-[50vw] left-1/2 overflow-x-hidden bg-slate-900 text-slate-50 font-sans">
      
      {/* MAPA DE FONDO FIJO */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <MapContainer center={[4.5709, -74.2973]} zoom={6} zoomControl={false} scrollWheelZoom={false} dragging={false} className="w-full h-full" style={{ height: '100vh', width: '100vw' }}>
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
              url={`${import.meta.env.BASE_URL}data/cobertura_2026.webp`}
              bounds={boundsFinca}
              opacity={0.8}
            />
          )}
        </MapContainer>
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-slate-900/95 to-slate-900/60 md:bg-linear-to-r md:from-slate-900/95 md:via-slate-900/70 md:to-slate-900/10 pointer-events-none z-10"></div>
      </div>

      {/* TEXTO DE TRANSPARENCIA RADICAL */}
      <div className="md:fixed md:bottom-0 md:left-0 md:w-full md:bg-slate-900/90 md:backdrop-blur-md md:border-t md:border-white/10 md:py-4 md:px-8 md:flex md:items-start md:z-[100] text-xs leading-relaxed text-slate-300 block static p-8 z-50 relative bg-slate-900/95">
        <ShieldCheck size={20} className="mr-2 text-emerald-400 shrink-0 mt-1"/>
        <div className="max-w-6xl">
          <strong className="block text-slate-50 mb-1.5 text-[0.85rem] uppercase tracking-wider">{NARRATIVA.transparencia.titulo}</strong>
          <p className="m-0">
            {NARRATIVA.transparencia.texto}
          </p>
        </div>
      </div>

      {/* SCROLLYTELLING CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 pointer-events-none">
        
        {/* TITULO */}
        <div className="min-h-screen flex items-center justify-center py-16">
           <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto text-center max-w-3xl">
              <TreePine size={48} color="#22C55E" className="mx-auto mb-4"/>
              <h1 className="text-5xl md:text-6xl font-extrabold mt-0 mb-2 bg-linear-to-br from-green-400 to-green-500 bg-clip-text text-transparent font-['Poppins']">{NARRATIVA.tituloHero.titulo}</h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-normal mb-4">{NARRATIVA.tituloHero.subtitulo}</h2>
              <p className="text-lg leading-relaxed text-slate-300 mb-4">{NARRATIVA.tituloHero.instruccion}</p>
           </div>
        </div>

        {/* ACTO 1: LA HERENCIA */}
        <div className="min-h-screen flex items-center justify-center md:justify-start py-16" data-step="1" ref={addToRefs}>
          <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto md:mx-0 max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] mb-6 text-white">{NARRATIVA.acto1.titulo}</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">{NARRATIVA.acto1.p1}</p>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">{NARRATIVA.acto1.p2}</p>
            
            {/* CUADRO TIPO IMAGEN CON EL POLÍGONO EXACTO */}
            <div className="h-[220px] w-full mt-6 rounded-xl overflow-hidden border border-white/20">
               <MapContainer center={[3.431, -75.214]} zoom={14} zoomControl={false} scrollWheelZoom={false} dragging={false} className="w-full h-full" style={{ height: '100%', width: '100%' }}>
                 <FixMapSize />
                 <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                 <Polygon positions={coordsFinca} pathOptions={{ color: '#fff', weight: 2, fillOpacity: 0.1, fillColor: '#fff' }} />
               </MapContainer>
            </div>
            <p className="text-sm text-slate-400 mt-2.5 text-center">{NARRATIVA.acto1.caption}</p>
          </div>
        </div>

        {/* ACTO 2: LA GESTION */}
        <div className="min-h-screen flex items-center justify-center py-16" data-step="2" ref={addToRefs}>
          <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto max-w-5xl w-full">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] mb-6 text-white">{NARRATIVA.acto2.titulo}</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">{NARRATIVA.acto2.p1}</p>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto2.p2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
               <div className="bg-black/30 rounded-xl p-6 border border-white/5 border-l-4 border-l-green-500">
                  <h4 className="text-sm uppercase text-slate-400 m-0 mb-2 font-semibold">{NARRATIVA.acto2.stats[0].titulo}</h4>
                  <div className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2 mb-1">{NARRATIVA.acto2.stats[0].numero} <CheckCircle2 size={24} /></div>
                  <small className="block text-sm text-slate-300">{NARRATIVA.acto2.stats[0].subtitulo}</small>
               </div>
               <div className="bg-black/30 rounded-xl p-6 border border-white/5 border-l-4 border-l-orange-500">
                  <h4 className="text-sm uppercase text-slate-400 m-0 mb-2 font-semibold">{NARRATIVA.acto2.stats[1].titulo}</h4>
                  <div className="text-3xl md:text-4xl font-extrabold text-white flex items-center gap-2 mb-1">{NARRATIVA.acto2.stats[1].numero}</div>
                  <small className="block text-sm text-slate-300">{NARRATIVA.acto2.stats[1].subtitulo}</small>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
               <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                 <h4 className="text-base m-0 mb-4 text-slate-200 font-['Poppins']">Transición de Uso de Suelo (Hectáreas)</h4>
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
               
               <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                 <h4 className="text-base m-0 mb-2 text-slate-200 font-['Poppins']">Potencial Teórico de Carbono</h4>
                 <p className="text-sm text-slate-400 mb-4">Capacidad estimada y posibles capturas (Supuesto no verificado).</p>
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
        <div className="min-h-screen flex items-center justify-center py-16" data-step="3" ref={addToRefs}>
          <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto max-w-5xl w-full">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] mb-6 text-white">{NARRATIVA.acto3.titulo}</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto3.p1}
            </p>
            <p className="text-sm text-slate-400 mb-4">
              <span className="text-green-400">■ NDVI:</span> Salud y vigor de la vegetación.<br/>
              <span className="text-sky-400">■ NDMI:</span> Estrés hídrico (humedad del dosel).<br/>
              <span className="text-blue-400">■ NDWI:</span> Índice de agua (cuerpos de agua/inundación).
            </p>

            <div className="w-full h-[350px]">
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
            
            <div className="bg-sky-400/10 border border-sky-400/30 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 mt-8 text-sky-100">
               <Activity size={24} className="text-sky-400 shrink-0" />
               <span>{NARRATIVA.acto3.conclusion}</span>
            </div>

          </div>
        </div>

        {/* ACTO 4: COBERTURA Y ENCUADRE */}
        <div className="min-h-screen flex items-center justify-center md:justify-start py-16" data-step="4" ref={addToRefs}>
          <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto md:mx-0 max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] mb-6 text-white">{NARRATIVA.acto4.titulo}</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto4.p1}
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto4.p2}
            </p>
          </div>
        </div>

        {/* CONCLUSIÓN Y REFLEXIÓN FINAL */}
        <div className="min-h-screen flex items-center justify-center py-16" data-step="5" ref={addToRefs}>
          <div className="bg-slate-900/65 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl pointer-events-auto transition-all duration-500 mx-auto max-w-4xl w-full">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] mb-6 text-white">{NARRATIVA.acto5.titulo}</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto5.p1}
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              {NARRATIVA.acto5.p2}
            </p>
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 mt-8 text-green-100">
               <CheckCircle2 size={32} className="text-green-400 shrink-0" />
               <span className="text-[0.95rem]">
                 {NARRATIVA.acto5.conclusionFinal}
               </span>
            </div>
          </div>
        </div>

        <div className="min-h-[50vh]"></div>
      </div>
    </div>
  );
}
