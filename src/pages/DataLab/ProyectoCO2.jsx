import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ZAxis, Bar, ComposedChart, Legend } from 'recharts';
import { Factory, TrendingUp, Scale, ChevronDown, Beaker, Globe2 } from 'lucide-react';
import Select from 'react-select';
import { STEPS } from '../../data/co2Data';

// Map icon strings to components
const ICON_MAP = {
  Factory,
  TrendingUp,
  Scale
};

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

  // Custom Scrolly Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-lg text-sm">
          <p className="font-bold mb-2 text-slate-900">{label}</p>
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
    if (loading) return <div className="text-slate-400 italic flex items-center justify-center h-full">Procesando Vectores...</div>;
    
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
                  <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-lg text-sm">
                    <p className="text-emerald-600 text-lg font-bold mb-2">{data.country}</p>
                    <p className="my-1"><strong>PIB Per Cápita:</strong> ${formatCompact(data.gdp_per_capita)}</p>
                    <p className="my-1"><strong>C02 Per Cápita:</strong> {formatCompact(data.co2_per_capita)} Tons</p>
                    <p className="my-1"><strong>Población:</strong> {formatCompact(data.population)}</p>
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
    <div 
      className="w-full min-h-screen text-slate-900 font-sans relative pb-20"
      style={{
        backgroundColor: '#f8fafc',
        backgroundImage: `
          radial-gradient(circle at top right, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
          radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.08) 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%236b7280' fill-opacity='0.4'/%3E%3C/svg%3E")
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* HEADER */}
      <header className="pt-24 pb-16 px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
          Carbono y Clase: La Gran Asfixia
        </h1>
        <p className="text-lg md:text-2xl font-semibold mb-8 text-emerald-600">
          Deuda Histórica vs. La Huella Actual
        </p>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-slate-600 leading-relaxed text-left bg-slate-100 p-6 rounded-xl border-l-4 border-emerald-500">
          Este laboratorio de datos audita la hegemonía global bajo un lente estricto: la producción histórica de <strong>Dióxido de Carbono (CO2)</strong> y <strong>Metano (CH4)</strong> correlacionados con la acumulación de la riqueza (PIB). Antes de apuntar la responsabilidad del colapso climático, debemos diseccionar las cifras puras. Aquí analizaremos visualmente qué naciones quemaron el mundo para industrializarse, y cómo la manipulación de cifras absolutas esconde la verdadera desigualdad estructural impuesta por el 10% más rico de la población.
        </p>
        <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold animate-bounce">
          <span>Explora los Datos</span>
          <ChevronDown size={24} />
        </div>
      </header>

      {/* SCROLLYTELLING */}
      <section className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-start gap-8">
        
        {/* Sticky Chart Container */}
        <div className="sticky top-20 w-full md:w-[60%] h-[50vh] md:h-[80vh] flex items-center justify-center bg-white rounded-none md:rounded-3xl shadow-md border-y md:border border-slate-100 p-4 md:p-8 transition-all duration-500 z-10">
          <div className="w-full h-full relative">
             {renderScrollyChart()}
          </div>
        </div>
        
        {/* Narrative Steps */}
        <div className="w-full md:w-[40%] px-4 md:pl-8 md:pr-4 py-8 md:py-16 flex flex-col z-20 -mt-[10vh] md:mt-0">
          {STEPS.map((step, idx) => {
            const IconComponent = ICON_MAP[step.iconName];
            return (
              <div 
                key={step.id} 
                data-index={idx} 
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`flex flex-col justify-center min-h-auto md:min-h-screen mb-[70vh] md:mb-0 transition-all duration-700 ease-out ${
                  activeStep === idx ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-5'
                }`}
              >
                <div className="bg-white/95 md:bg-white/90 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-slate-100 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-emerald-600">
                  {IconComponent && <IconComponent size={40} className="text-emerald-600 mb-6" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                  <div className="font-serif italic text-slate-800 border-l-4 border-slate-200 pl-6 mt-8">
                    "{step.insight}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ANATOMÍA DEL CARBONO (TRANSPARENCIA) */}
      <section className="bg-slate-900 text-slate-100 py-24 px-8 mt-12 md:mt-0">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Beaker size={32} className="text-emerald-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white m-0">Transparencia Metodológica: El Crimen de la Física</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-emerald-500 mb-4 text-xl font-bold">El Potencial de Calentamiento (GWP)</h3>
              <p className="leading-relaxed text-slate-400">Sumar toneladas de Metano (CH4) con Dióxido de Carbono (CO2) es un error estadístico. El metano calienta la atmósfera hasta <strong className="text-slate-200">~28 veces más</strong> que el CO2 en un horizonte de 100 años (GWP100). Hemos usado equivalencias en CO2e rigurosas garantizadas por Our World in Data.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-emerald-500 mb-4 text-xl font-bold">Curvas Base Poblacionales</h3>
              <p className="leading-relaxed text-slate-400">El Laboratorio descartó "Agrupaciones Geo-Económicas" genéricas. Usamos filtrado de códigos ISO. Los deciles y ránkings se han calculado sumando la curva demográfica progresiva y descartando los datos faltantes (`NaNs`) genuinos previos a 1850 para no destruir artificialmente el promedio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAJA DE ARENA (SANDBOX ANALÍTICO) */}
      <section className="py-24 px-4 md:px-8 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-bold">Laboratorio Lúdico Abierto</h2>
            <p className="text-slate-500 text-lg">Juega directamente con la base de datos maestra purgada. Compara tu país contra el promedio mundial.</p>
            
            {/* ATAJOS DE NAVEGACIÓN PROFESIONAL */}
            <div className="flex flex-wrap gap-4 justify-center mt-8 mb-4">
              <button onClick={() => setSelectedCountry({value: 'United States', label: 'United States'})} className="px-5 py-2.5 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors">🇺🇸 USA</button>
              <button onClick={() => setSelectedCountry({value: 'China', label: 'China'})} className="px-5 py-2.5 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors">🇨🇳 China</button>
              <button onClick={() => setSelectedCountry({value: 'India', label: 'India'})} className="px-5 py-2.5 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors">🇮🇳 India</button>
              <button onClick={() => setSelectedCountry({value: 'Qatar', label: 'Qatar'})} className="px-5 py-2.5 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-colors">🇶🇦 Qatar (Top Riqueza)</button>
              <button onClick={() => setSelectedCountry({value: 'World', label: 'World'})} className="px-5 py-2.5 bg-emerald-500 text-white border border-emerald-600 rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-sm">🌍 Todo el Planeta</button>
            </div>

            <div className="inline-flex items-center justify-center gap-4 bg-white py-2 px-4 rounded-full border border-slate-300 shadow-sm mt-4 w-full max-w-md mx-auto text-left">
              <Select 
                options={countriesList}
                value={selectedCountry}
                onChange={(option) => setSelectedCountry(option)}
                placeholder="Busca una Nación Autónoma..."
                isSearchable={true}
                className="w-full text-lg font-semibold text-slate-700 border-none outline-none"
                styles={{
                  control: (base) => ({ ...base, border: 0, boxShadow: 'none' })
                }}
              />
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="flex justify-center flex-wrap gap-8 mb-8 min-h-[80px]">
             {hoveredYear ? (
                <>
                  <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm">
                    <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">Año Físico</span>
                    <span className="text-2xl font-bold text-slate-900">{hoveredYear.year}</span>
                  </div>
                  <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm">
                    <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">CO2 Puro</span>
                    <span className="text-2xl font-bold text-slate-900">{formatCompact(hoveredYear.co2)} <span className="text-base text-slate-500">M Tons</span></span>
                  </div>
                  <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm">
                    <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">Metano Equivalente</span>
                    <span className="text-2xl font-bold text-slate-900">{formatCompact(hoveredYear.methane)} <span className="text-base text-slate-500">M Tons</span></span>
                  </div>
                  <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm">
                    <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">PIB Cápita</span>
                    <span className="text-2xl font-bold text-slate-900">${formatCompact(hoveredYear.gdp_per_capita)}</span>
                  </div>
                </>
             ) : (
                <div className="text-slate-400 italic flex items-center justify-center h-full">Desliza el mouse sobre el gráfico para auditar métricas exactas...</div>
             )}
          </div>

          {/* Sandbox Chart */}
          <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-slate-100">
            <ResponsiveContainer width="100%" height={450}>
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
