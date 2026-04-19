import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ZAxis, Bar, ComposedChart, Legend } from 'recharts';
import { Factory, TrendingUp, Scale, ChevronDown, Beaker, Globe2 } from 'lucide-react';
import Select from 'react-select';
import './ProyectoCO2.css';

const STEPS = [
  {
    id: 'hegemonic',
    icon: <Factory size={40} className="step-icon" />,
    title: 'El Ocaso Hegemónico',
    text: 'La civilización moderna quemó el mundo antes de que Asia despertara. Desde los albores de la Revolución Industrial hasta los años ochenta, Estados Unidos y Europa mantuvieron un monopolio absoluto sobre el carbono atmosférico. Todo el peso del colapso climático contemporáneo fue construido en esta ventana.',
    insight: 'El Norte quemó el puente.',
    query: 'macro_continents',
    year: 1980
  },
  {
    id: 'crossing',
    icon: <TrendingUp size={40} className="step-icon" />,
    title: 'El Punto de Ruptura (2006)',
    text: 'Estados Unidos mantuvo la hegemonía durante un siglo, pero el dragón lo asfixió recientemente. Impulsada por su entrada a la Organización Mundial del Comercio (OMC), la rápida reconfiguración de la "Fábrica del Mundo" fracturó la estadística.',
    insight: 'Fue exactamente al cierre del año 2006 cuando las industrias de China sobrepasaron estructuralmente la gigantesca masa bruta norteamericana.',
    query: 'cross_2006',
    year: 2024
  },
  {
    id: 'gini',
    icon: <Scale size={40} className="step-icon" />,
    title: 'Desigualdad Estructural',
    text: 'Asia quema carbón salvajemente, sí. Pero culpar a los países emergentes viendo solo su volumen total distorsiona las matemáticas. Re-evaluar bajo un lente "Per Cápita" destruye esa ficción. Estados Unidos y el top rico individual vuelven al estrado. La asfixia no es democrática: mientras el 10% más rico compra tiempo, el 50% más pobre ya se está quedando sin aire.',
    insight: 'Al agrupar a las naciones por su nivel de riqueza, el 10% más rico de la población global es responsable del 27.0% de las emisiones totales del planeta, mientras que la mitad inferior del mundo sobrevive emitiendo apenas un 15.4%. Y esto es una estimación conservadora que no contabiliza la extrema desigualdad interna entre multimillonarios y ciudadanos de a pie.',
    query: 'scatter',
    year: 2022
  }
];

// Helper Profesional para limpieza de variables crudas de la BD
const formatCompact = (val) => {
  if (val === null || val === undefined) return '0';
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1
  }).format(val);
};

export default function AtlasCarbono() {
  const [activeStep, setActiveStep] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const stepRefs = useRef([]);

  // Sandbox State
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({ value: 'World', label: 'World' });
  const [sandboxData, setSandboxData] = useState([]);
  const [hoveredYear, setHoveredYear] = useState(null);

  // Fetch Scrollytelling
  useEffect(() => {
    const fetchStepData = async () => {
      setLoading(true);
      try {
        const stepConfig = STEPS[activeStep];
        const res = await fetch(`${import.meta.env.BASE_URL}data/co2/${stepConfig.query}.json`);
        const data = await res.json();
        setChartData(data);
      } catch (err) {
        console.error("Error fetching step data:", err);
      }
      setLoading(false);
    };
    fetchStepData();
  }, [activeStep]);

  // Fetch Sandbox List Formatted for React-Select
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/co2/countries_list.json`);
        const data = await res.json();
        const formattedList = data.map(c => ({ value: c, label: c }));
        setCountriesList(formattedList);
      } catch (err) { }
    };
    fetchList();
  }, []);

  // Fetch Sandbox Data based on selection (With World Media Embedding Context)
  useEffect(() => {
    const fetchSandbox = async () => {
      try {
        if (!selectedCountry) return;
        
        const safeVal = selectedCountry.value.replace(/ /g, "_").replace(/\//g, "_");
        // Petición Dual Paralela para traer la Data Cruda del País + Benchmark Global (Desde Json Estáticos)
        const [resCountry, resWorld] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/co2/country_${safeVal}.json`),
          fetch(`${import.meta.env.BASE_URL}data/co2/country_World.json`)
        ]);
        
        const dataCountry = await resCountry.json();
        const dataWorld = await resWorld.json();
        
        // Inyectar Media Mundial País (Total CO2 Mundo / ~218 Naciones Soberanas)
        const mergedData = dataCountry.map(row => {
          const wRow = dataWorld.find(w => w.year === row.year);
          return {
             ...row,
             media_mundial: wRow ? (wRow.co2 / 218) : null
          };
        });
        
        setSandboxData(mergedData);
      } catch (err) { }
    };
    fetchSandbox();
  }, [selectedCountry]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          if (activeStep !== index) setActiveStep(index);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    stepRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [activeStep]);

  // Custom Scrolly Tooltip (Aplicando el Formateador Senior)
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ background: '#fff', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <p className="label" style={{ fontWeight: 'bold' }}>{label}</p>
          {payload.map((p, i) => (
             <p key={i} style={{ color: p.color || p.fill, margin: '2px 0' }}>
                {p.name}: {formatCompact(p.value)} {p.name.includes("Cápita") ? "" : "M Tons"}
             </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderScrollyChart = () => {
    if (loading) return <div className="loader-text">Procesando Vectores...</div>;
    
    if (activeStep === 0) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
            <XAxis dataKey="year" type="number" domain={['dataMin', 'dataMax']} tick={{ fill: '#6b7280' }} tickMargin={10} minTickGap={30} label={{ value: 'Línea de Tiempo (Años)', position: 'bottom', offset: 15, fill: '#6b7280', fontSize: 14 }} />
            <YAxis tickFormatter={(val) => formatCompact(val)} tick={{ fill: '#6b7280' }} label={{ value: 'Emisiones CO2 (Millones Ton)', angle: -90, position: 'left', offset: 25, fill: '#6b7280', fontSize: 14 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="North America" stackId="1" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
            <Area type="monotone" dataKey="Europe" stackId="1" stroke="#db2777" fill="#ec4899" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      );
    } else if (activeStep === 1) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
            {/* Obligando a XAxis a ser numérico para que ReferenceLine caiga exacto sobre 2006 */}
            <XAxis dataKey="year" type="number" domain={['dataMin', 'dataMax']} tick={{ fill: '#6b7280' }} tickMargin={10} label={{ value: 'Línea de Tiempo (Años)', position: 'bottom', offset: 15, fill: '#6b7280', fontSize: 14 }} />
            <YAxis tickFormatter={(val) => formatCompact(val)} tick={{ fill: '#6b7280' }} label={{ value: 'Emisiones CO2 (Millones Ton)', angle: -90, position: 'left', offset: 25, fill: '#6b7280', fontSize: 14 }} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine x={2006} stroke="#ef4444" strokeWidth={2} strokeDasharray="3 3" label={{ position: 'top', value: 'Cruce OMC 2006', fill: '#ef4444', fontSize: 14, fontWeight: 'bold' }} />
            <Line type="monotone" dataKey="United States" stroke="#2563eb" strokeWidth={4} dot={false} />
            <Line type="monotone" dataKey="China" stroke="#dc2626" strokeWidth={4} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (activeStep === 2) {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis type="number" dataKey="gdp_per_capita" name="PIB per Cápita" scale="log" domain={['auto', 'auto']} tickFormatter={(val) => `$${formatCompact(val)}`} tick={{ fill: '#6b7280' }} tickMargin={10} label={{ value: 'Riqueza Per Cápita (PIB USD)', position: 'bottom', offset: 15, fill: '#6b7280', fontSize: 14 }} />
            <YAxis type="number" dataKey="co2_per_capita" name="CO2 per Cápita" scale="log" domain={['auto', 'auto']} tickFormatter={(val) => formatCompact(val)} tick={{ fill: '#6b7280' }} label={{ value: 'CO2 Per Cápita (Ton)', angle: -90, position: 'left', offset: 10, fill: '#6b7280', fontSize: 14 }} />
            <ZAxis type="number" dataKey="population" name="Población" range={[60, 2000]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="custom-tooltip" style={{ background: '#fff', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <p className="label" style={{ color: '#059669', fontSize: '1.2rem', fontWeight:'bold', margin: '0 0 8px 0' }}>{data.country}</p>
                    <p style={{margin:'4px 0'}}><strong>PIB Per Cápita:</strong> ${formatCompact(data.gdp_per_capita)}</p>
                    <p style={{margin:'4px 0'}}><strong>C02 Per Cápita:</strong> {formatCompact(data.co2_per_capita)} Tons</p>
                    <p style={{margin:'4px 0'}}><strong>Población:</strong> {formatCompact(data.population)}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Scatter name="Naciones" data={chartData} fill="#10b981" fillOpacity={0.6} stroke="#047857" />
          </ScatterChart>
        </ResponsiveContainer>
      );
    }
  };

  return (
    <div className="proyecto-co2-container">
      {/* HEADER */}
      <header className="co2-header">
        <h1>Carbono y Clase: La Gran Asfixia</h1>
        <p className="co2-subtitle" style={{ fontWeight: '600', color: '#059669', marginBottom: '1rem' }}>Deuda Histórica vs. La Huella Actual</p>
        <p className="co2-intro-text" style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.15rem', color: '#4b5563', lineHeight: '1.8', textAlign: 'left', backgroundColor: '#f3f4f6', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
          Este laboratorio de datos audita la hegemonía global bajo un lente estricto: la producción histórica de <strong>Dióxido de Carbono (CO2)</strong> y <strong>Metano (CH4)</strong> correlacionados con la acumulación de la riqueza (PIB). Antes de apuntar la responsabilidad del colapso climático, debemos diseccionar las cifras puras. Aquí analizaremos visualmente qué naciones quemaron el mundo para industrializarse, y cómo la manipulación de cifras absolutas esconde la verdadera desigualdad estructural impuesta por el 10% más rico de la población.
        </p>
        <div className="scroll-indicator">
          <span>Explora los Datos</span>
          <ChevronDown size={24} />
        </div>
      </header>

      {/* SCROLLYTELLING */}
      <section className="scrolly-section">
        <div className="chart-sticky-container">
          <div className="chart-wrapper">
             {renderScrollyChart()}
          </div>
        </div>
        <div className="steps-container">
          {STEPS.map((step, idx) => (
            <div 
              key={step.id} data-index={idx} ref={(el) => (stepRefs.current[idx] = el)}
              className={`step-card ${activeStep === idx ? 'active' : ''}`}
            >
              <div className="step-content">
                {step.icon}
                <h2>{step.title}</h2>
                <p>{step.text}</p>
                <div className="insight-text">"{step.insight}"</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANATOMÍA DEL CARBONO (TRANSPARENCIA) */}
      <section className="physics-section">
        <div className="physics-container">
          <div className="physics-header">
            <Beaker size={32} className="text-emerald-600" />
            <h2>Transparencia Metodológica: El Crimen de la Física</h2>
          </div>
          <div className="physics-grid">
            <div className="physics-card">
              <h3>El Potencial de Calentamiento (GWP)</h3>
              <p>Sumar toneladas de Metano (CH4) con Dióxido de Carbono (CO2) es un error estadístico. El metano calienta la atmósfera hasta <strong>~28 veces más</strong> que el CO2 en un horizonte de 100 años (GWP100). Hemos usado equivalencias en CO2e rigurosas garantizadas por Our World in Data.</p>
            </div>
            <div className="physics-card">
              <h3>Curvas Base Poblacionales</h3>
              <p>El Laboratorio descartó "Agrupaciones Geo-Económicas" genéricas. Usamos filtrado de códigos ISO. Los deciles y ránkings se han calculado sumando la curva demográfica progresiva y descartando los datos faltantes (`NaNs`) genuinos previos a 1850 para no destruir artificialmente el promedio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAJA DE ARENA (SANDBOX ANALÍTICO) */}
      <section className="sandbox-section">
        <div className="sandbox-container">
          <div className="sandbox-header">
            <h2>Laboratorio Lúdico Abierto</h2>
            <p style={{color:'#6b7280', fontSize:'1.1rem'}}>Juega directamente con la base de datos maestra purgada. Compara tu país contra el promedio mundial.</p>
            
            {/* ATAJOS DE NAVEGACIÓN PROFESIONAL */}
            <div className="sandbox-shortcuts" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
              <button onClick={() => setSelectedCountry({value: 'United States', label: 'United States'})} style={{ padding: '0.6rem 1.2rem', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🇺🇸 USA</button>
              <button onClick={() => setSelectedCountry({value: 'China', label: 'China'})} style={{ padding: '0.6rem 1.2rem', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🇨🇳 China</button>
              <button onClick={() => setSelectedCountry({value: 'India', label: 'India'})} style={{ padding: '0.6rem 1.2rem', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🇮🇳 India</button>
              <button onClick={() => setSelectedCountry({value: 'Qatar', label: 'Qatar'})} style={{ padding: '0.6rem 1.2rem', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🇶🇦 Qatar (Top Riqueza)</button>
              <button onClick={() => setSelectedCountry({value: 'World', label: 'World'})} style={{ padding: '0.6rem 1.2rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🌍 Todo el Planeta</button>
            </div>

            <div className="sandbox-controls" style={{ minWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
              <Select 
                options={countriesList}
                value={selectedCountry}
                onChange={(option) => setSelectedCountry(option)}
                placeholder="Busca una Nación Autónoma (Ej. Colombia, World...)"
                isSearchable={true}
              />
            </div>
          </div>

          <div className="sandbox-metrics">
             {hoveredYear ? (
                <>
                  <div className="metric-box">
                    <span className="metric-title">Año Físico</span>
                    <span className="metric-value">{hoveredYear.year}</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-title">CO2 Puro</span>
                    <span className="metric-value">{formatCompact(hoveredYear.co2)} <span style={{fontSize:'1rem'}}>M Tons</span></span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-title">Metano Equivalente</span>
                    <span className="metric-value">{formatCompact(hoveredYear.methane)} <span style={{fontSize:'1rem'}}>M Tons</span></span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-title">PIB Cápita</span>
                    <span className="metric-value">${formatCompact(hoveredYear.gdp_per_capita)}</span>
                  </div>
                </>
             ) : (
                <div className="metric-placeholder">Desliza el mouse sobre el gráfico para auditar métricas exactas...</div>
             )}
          </div>

          <div className="sandbox-chart">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart 
                  data={sandboxData} 
                  margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
                  onMouseMove={(state) => {
                    if (state.isTooltipActive) {
                      setHoveredYear(state.activePayload[0].payload);
                    } else {
                      setHoveredYear(null);
                    }
                  }}
                  onMouseLeave={() => setHoveredYear(null)}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis dataKey="year" type="number" domain={['dataMin', 'dataMax']} tick={{ fill: '#6b7280' }} minTickGap={20} tickMargin={10} label={{ value: 'Historia (Años)', position: 'bottom', offset: 15, fill: '#6b7280', fontSize: 14 }} />
                <YAxis yAxisId="left" tick={{ fill: '#6b7280' }} tickFormatter={(val) => formatCompact(val)} label={{ value: 'Emisiones (Millones Toneladas)', angle: -90, position: 'left', offset: 30, fill: '#6b7280', fontSize: 14 }} />
                <Tooltip content={<div style={{display:'none'}}></div>} />
                <Legend verticalAlign="top" height={40} wrapperStyle={{ fontWeight: 'bold' }} />
                <Area yAxisId="left" type="monotone" dataKey="co2" name="Volumen CO2 País" fill="#ef4444" stroke="#dc2626" fillOpacity={0.3} />
                <Line yAxisId="left" type="monotone" dataKey="methane" name="Metano País (CO2e)" stroke="#f59e0b" strokeWidth={3} dot={false} />
                {selectedCountry && selectedCountry.value !== 'World' && (
                   <Line yAxisId="left" type="monotone" dataKey="media_mundial" name="Media Mundial CO2" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
