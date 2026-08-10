import React, { useState, useEffect, useRef } from 'react';
import { CARBONO_SANDBOX_DATA } from '../../../../data/laboratorios/carbono';
import EChartsCore from '../../EChartsCore';

const formatCompact = (val) => {
  if (val === null || val === undefined) return '0';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(val);
};

export default function CarbonoSandbox() {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('World');
  const [sandboxData, setSandboxData] = useState([]);
  const [hoveredYear, setHoveredYear] = useState(null);
  
  const chartCoreRef = useRef(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch(`/data/co2/countries_list.json`);
        if (res.ok) {
          const data = await res.json();
          setCountriesList(data);
        }
      } catch (err) { }
    };
    fetchList();
  }, []);

  useEffect(() => {
    const fetchSandbox = async () => {
      try {
        if (!selectedCountry) return;
        const safeVal = selectedCountry.replace(/ /g, "_").replace(/\//g, "_");
        
        const [resCountry, resWorld] = await Promise.all([
          fetch(`/data/co2/country_${safeVal}.json`),
          fetch(`/data/co2/country_World.json`)
        ]);
        
        if (resCountry.ok && resWorld.ok) {
          const dataCountry = await resCountry.json();
          const dataWorld = await resWorld.json();
          
          const mergedData = dataCountry.map(row => {
            const wRow = dataWorld.find(w => w.year === row.year);
            return {
               ...row,
               media_mundial: wRow ? (wRow.co2 / 218) : null // 218 is approx number of countries
            };
          });
          
          setSandboxData(mergedData);
        }
      } catch (err) { }
    };
    fetchSandbox();
  }, [selectedCountry]);

  // Actualizar ECharts cuando los datos cambian
  useEffect(() => {
    if (!chartCoreRef.current || sandboxData.length === 0) return;
    
    const echart = chartCoreRef.current.getEchartsInstance();
    if (!echart) return;

    // Configurar evento updateAxisPointer solo una vez
    if (!echart.__hasAxisPointerEvent) {
      echart.on('updateAxisPointer', (event) => {
        if (event.axesInfo && event.axesInfo.length > 0) {
          // El valor en un eje tipo 'value' es el año
          const year = Math.round(event.axesInfo[0].value);
          // Buscar el row correspondiente (esto asume que el scope del closure tiene el último sandboxData, 
          // usaremos un enfoque más seguro obteniendo data del chart o simplemente con el hook actualizado)
          setHoveredYear((prev) => {
             // Es mejor no depender de un array obsoleto, pero ECharts dispara esto muy seguido,
             // devolver un año para que se actualice es suficiente si se enlaza correctamente.
             return year;
          });
        }
      });
      // Para limpiar cuando se sale del hover
      echart.on('globalout', () => setHoveredYear(null));
      echart.__hasAxisPointerEvent = true;
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'line' },
        formatter: (params) => {
          if (!params || !params.length) return '';
          const dataIndex = params[0].dataIndex;
          const row = sandboxData[dataIndex];
          if (row) {
             setHoveredYear(row);
          }
          // Devolvemos vacío para ocultar el tooltip nativo si queremos,
          // pero dejémoslo nativo también como complemento.
          let html = `<div style="font-weight:bold;margin-bottom:5px;">Año ${params[0].value[0]}</div>`;
          params.forEach(p => {
             html += `<div><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${p.color};"></span>${p.seriesName}: ${formatCompact(p.value[1])}</div>`;
          });
          return html;
        }
      },
      legend: {
        top: 0,
        textStyle: { fontWeight: 'bold', color: '#374151' }
      },
      grid: { top: 40, right: 30, left: 60, bottom: 40 },
      xAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
        axisLabel: { color: '#6b7280' },
        splitLine: { show: false },
        name: 'Historia (Años)',
        nameLocation: 'middle',
        nameGap: 25
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#6b7280', formatter: (val) => formatCompact(val) },
        splitLine: { lineStyle: { type: 'dashed', color: '#e5e7eb' } },
        name: 'Emisiones (Millones Toneladas)',
        nameLocation: 'middle',
        nameGap: 40
      },
      series: [
        {
          name: 'Volumen CO2 País',
          type: 'line',
          data: sandboxData.map(d => [d.year, d.co2]),
          areaStyle: { color: '#ef4444', opacity: 0.3 },
          itemStyle: { color: '#ef4444' },
          showSymbol: false,
          smooth: true
        },
        {
          name: 'Metano País (CO2e)',
          type: 'line',
          data: sandboxData.map(d => [d.year, d.methane]),
          itemStyle: { color: '#f59e0b' },
          lineStyle: { width: 3 },
          showSymbol: false,
          smooth: true
        }
      ]
    };

    if (selectedCountry !== 'World') {
      option.series.push({
        name: 'Media Mundial CO2',
        type: 'line',
        data: sandboxData.map(d => [d.year, d.media_mundial]),
        itemStyle: { color: '#9ca3af' },
        lineStyle: { width: 2, type: 'dashed' },
        showSymbol: false,
        smooth: true
      });
    }

    chartCoreRef.current.setOption(option, { notMerge: true, lazyUpdate: true });
    
  }, [sandboxData, selectedCountry]);

  return (
    <div>
      {/* ATAJOS DE NAVEGACIÓN PROFESIONAL */}
      <div className="flex flex-wrap gap-4 justify-center mt-8 mb-4">
        {CARBONO_SANDBOX_DATA.quickAccess.map((btn, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelectedCountry(btn.value)} 
            className={`px-5 py-2.5 border border-slate-300 rounded-lg font-bold transition-colors shadow-sm ${btn.style} ${selectedCountry === btn.value ? 'ring-2 ring-emerald-500' : ''}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* REEMPLAZO DE REACT-SELECT POR SELECT NATIVO HTML5 */}
      <div className="flex justify-center mt-4 mb-12">
        <div className="relative w-full max-w-md">
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-300 text-slate-700 font-semibold text-lg py-3 px-5 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="" disabled>{CARBONO_SANDBOX_DATA.placeholder}</option>
            {countriesList.map((country, idx) => (
              <option key={idx} value={country}>{country}</option>
            ))}
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>

      {/* Metrics Panel */}
      <div className="flex justify-center flex-wrap gap-8 mb-8 min-h-[80px]">
         {hoveredYear ? (
            <>
              <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm transition-opacity duration-200">
                <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">Año Físico</span>
                <span className="text-2xl font-bold text-slate-900">{hoveredYear.year}</span>
              </div>
              <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm transition-opacity duration-200">
                <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">CO2 Puro</span>
                <span className="text-2xl font-bold text-slate-900">{formatCompact(hoveredYear.co2)} <span className="text-base text-slate-500">M Tons</span></span>
              </div>
              <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm transition-opacity duration-200">
                <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">Metano Eq</span>
                <span className="text-2xl font-bold text-slate-900">{formatCompact(hoveredYear.methane)} <span className="text-base text-slate-500">M Tons</span></span>
              </div>
              <div className="bg-white py-4 px-8 rounded-xl border border-slate-200 text-center min-w-[150px] shadow-sm transition-opacity duration-200">
                <span className="block text-sm text-slate-500 uppercase tracking-widest mb-2 font-semibold">PIB Cápita</span>
                <span className="text-2xl font-bold text-slate-900">${formatCompact(hoveredYear.gdp_per_capita)}</span>
              </div>
            </>
         ) : (
            <div className="text-slate-400 italic flex items-center justify-center h-full">Desliza el mouse sobre el gráfico para auditar métricas exactas...</div>
         )}
      </div>

      {/* ECharts Sandbox Chart (Skeleton for CLS prevention via CSS) */}
      <div className="aspect-[21/9] min-h-[400px] bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-slate-100 relative z-10 w-full overflow-hidden">
         <EChartsCore ref={chartCoreRef} />
      </div>
    </div>
  );
}
