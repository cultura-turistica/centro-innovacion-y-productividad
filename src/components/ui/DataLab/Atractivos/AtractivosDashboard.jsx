"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import * as topojson from 'topojson-client';
import { 
  X, 
  Map as MapIcon, 
  Filter, 
  PieChart, 
  BarChart2, 
  Layers, 
  Eye, 
  Info,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import EChartsCore from '../../EChartsCore';
import FichaTecnicaViewer from '../../conocimiento/FichaTecnicaViewer';

export default function AtractivosDashboard({ data, onSwitchToStory }) {
  const [mapRegistered, setMapRegistered] = useState(false);
  
  // Filtros
  const [selectedDepto, setSelectedDepto] = useState('Todos');
  const [selectedCiudad, setSelectedCiudad] = useState('Todos');
  const [selectedJerarquia, setSelectedJerarquia] = useState('Todas');
  const [selectedPatrimonio, setSelectedPatrimonio] = useState('Todos');
  const [selectedAtractivo, setSelectedAtractivo] = useState(null);

  const chartRef = useRef(null);

  // Diccionario de centroides departamentales para zoom inteligente
  const DEPARTAMENTO_CENTROIDS = useMemo(() => ({
    'ANTIOQUIA': [-75.404, 6.741],
    'ATLÁNTICO': [-75.018, 10.94],
    'BOGOTÁ D.C.': [-74.159, 4.396],
    'BOLÍVAR': [-74.163, 7.951],
    'BOYACÁ': [-72.777, 5.671],
    'CALDAS': [-75.412, 5.325],
    'CAQUETÁ': [-74.058, 0.879],
    'CASANARE': [-71.816, 5.309],
    'CAUCA': [-76.974, 2.707],
    'CESAR': [-73.503, 10.038],
    'CHOCÓ': [-76.797, 5.497],
    'CÓRDOBA': [-75.741, 8.509],
    'CUNDINAMARCA': [-74.411, 5.084],
    'GUANÍA': [-69.163, 2.642],
    'GUAVIARE': [-72.204, 1.92],
    'HUILA': [-75.779, 2.254],
    'LA GUAJIRA': [-72.511, 11.434],
    'MAGDALENA': [-74.185, 10.517],
    'META': [-72.519, 3.505],
    'NARIÑO': [-78.0, 1.723],
    'NORTE DE SANTANDER': [-72.84, 8.136],
    'PUTUMAYO': [-76.227, 0.715],
    'QUINDÍO': [-75.715, 4.467],
    'RISARALDA': [-75.955, 5.016],
    'ARCHIPIÉLAGO DE SAN ANDRÉS PROVIDENCIA Y SANTA CATALINA': [-81.707, 12.55],
    'SANTANDER': [-73.336, 6.698],
    'SUCRE': [-74.924, 8.69],
    'TOLIMA': [-75.22, 4.175],
    'VALLE DEL CAUCA': [-76.587, 3.736],
    'VAUPÉS': [-70.701, 0.832],
    'VICHADA': [-69.467, 4.695],
    'AMAZONAS': [-71.417, -1.224],
    'ARAUCA': [-70.797, 6.652]
  }), []);

  // 1. Cargar TopoJSON oficial de Colombia (WGS84) y registrar mapa con nombres exactos
  useEffect(() => {
    fetch('/data/sae/co-all.topo.json')
      .then(res => res.json())
      .then(topoData => {
        const objectKey = Object.keys(topoData.objects)[0];
        const geoJsonData = topojson.feature(topoData, topoData.objects[objectKey]);

        const cleanStr = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().replace(/[^A-Z]/g, '');

        geoJsonData.features.forEach(f => {
          const tName = f.properties.name || (f.id === 'CO.3653' ? 'Isla Malpelo' : '');
          const tKey = cleanStr(tName);
          
          let matched = null;
          if (tKey.includes('BOGOTA')) matched = 'BOGOTÁ D.C.';
          else if (tKey.includes('ANDRES')) matched = 'ARCHIPIÉLAGO DE SAN ANDRÉS PROVIDENCIA Y SANTA CATALINA';
          else if (tKey.includes('GUAINIA')) matched = 'GUANÍA';
          else {
            matched = Object.keys(DEPARTAMENTO_CENTROIDS).find(d => cleanStr(d) === tKey);
          }
          if (matched) {
            f.properties.name = matched;
          } else {
            f.properties.name = tName || 'Isla Malpelo';
          }
        });

        echarts.registerMap('colombia', geoJsonData);
        setMapRegistered(true);
      })
      .catch(err => console.error("Error al cargar TopoJSON departamental:", err));
  }, [DEPARTAMENTO_CENTROIDS]);

  // 2. Extracción dinámica de Departamentos y Ciudades
  const departamentos = useMemo(() => {
    if (!data) return [];
    const deptos = data.map(d => d.departamento).filter(Boolean);
    return ['Todos', ...new Set(deptos)].sort();
  }, [data]);

  const ciudades = useMemo(() => {
    if (!data) return [];
    let filtered = data;
    if (selectedDepto !== 'Todos') {
      filtered = data.filter(d => d.departamento === selectedDepto);
    }
    const ciu = filtered.map(d => d.ciudad).filter(Boolean);
    return ['Todos', ...new Set(ciu)].sort();
  }, [data, selectedDepto]);

  useEffect(() => {
    setSelectedCiudad('Todos');
  }, [selectedDepto]);

  // 3. Dataset filtrado reactivo
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(d => {
      const matchDepto = selectedDepto === 'Todos' || d.departamento === selectedDepto;
      const matchCiudad = selectedCiudad === 'Todos' || d.ciudad === selectedCiudad;
      
      let matchJerarquia = true;
      if (selectedJerarquia === 'Recursos' || selectedJerarquia === 'Local') {
        matchJerarquia = d.significado === 'Local';
      } else if (selectedJerarquia === 'Atractivos') {
        matchJerarquia = d.significado !== 'Local';
      } else if (selectedJerarquia === 'Regional') {
        matchJerarquia = d.significado === 'Regional';
      } else if (selectedJerarquia === 'Nacional') {
        matchJerarquia = d.significado === 'Nacional';
      } else if (selectedJerarquia === 'Internacional') {
        matchJerarquia = d.significado === 'Internacional';
      }

      // Soporta tanto 'Patrimonio Natural' como 'Sitios Naturales' o 'Patrimonio Cultural'
      let matchPatrimonio = true;
      if (selectedPatrimonio === 'Patrimonio Natural') {
        matchPatrimonio = d.patrimonio === 'Patrimonio Natural' || d.patrimonio === 'Sitios Naturales';
      } else if (selectedPatrimonio === 'Patrimonio Cultural') {
        matchPatrimonio = d.patrimonio === 'Patrimonio Cultural';
      }

      return matchDepto && matchCiudad && matchJerarquia && matchPatrimonio;
    });
  }, [data, selectedDepto, selectedCiudad, selectedJerarquia, selectedPatrimonio]);

  // 4. Cálculo de métricas departamentales reactivas al filtro
  const departmentalStats = useMemo(() => {
    if (!filteredData) return {};
    const map = {};
    filteredData.forEach(d => {
      const depto = d.departamento;
      if (!depto) return;
      if (!map[depto]) {
        map[depto] = {
          nombre: depto,
          count: 0,
          recursos: 0,
          atractivos: 0,
          totalScore: 0,
          calidadScore: 0
        };
      }
      map[depto].count++;
      if (d.significado === 'Local') {
        map[depto].recursos++;
      } else {
        map[depto].atractivos++;
      }
      map[depto].totalScore += (d.total || 0);
      map[depto].calidadScore += (d.subtotal || 0);
    });

    Object.keys(map).forEach(key => {
      const item = map[key];
      item.recursosPct = item.count > 0 ? Math.round((item.recursos / item.count) * 100) : 0;
      item.atractivosPct = item.count > 0 ? Math.round((item.atractivos / item.count) * 100) : 0;
      item.avgTotal = item.count > 0 ? (item.totalScore / item.count).toFixed(1) : '0';
      item.avgCalidad = item.count > 0 ? (item.calidadScore / item.count).toFixed(1) : '0';
    });

    return map;
  }, [filteredData]);

  // 5. Configuración de regiones geográficas con color base constante
  const departmentRegions = useMemo(() => {
    return Object.keys(DEPARTAMENTO_CENTROIDS).map(depto => {
      const isSelected = selectedDepto === depto;
      return {
        name: depto,
        itemStyle: {
          areaColor: isSelected ? '#e2e8f0' : '#f1f5f9',
          borderColor: isSelected ? '#0f172a' : '#cbd5e1',
          borderWidth: isSelected ? 2 : 0.75
        },
        emphasis: {
          itemStyle: {
            areaColor: '#e2e8f0',
            borderColor: '#0f172a',
            borderWidth: 1.5
          }
        }
      };
    });
  }, [DEPARTAMENTO_CENTROIDS, selectedDepto]);

  // 6. Puntos georreferenciados (Scatter WGS84)
  const scatterPoints = useMemo(() => {
    if (!filteredData) return [];
    return filteredData.map(d => {
      const lng = d.longitud || 0;
      const lat = d.latitud || 0;
      
      let color = '#3b82f6';
      if (d.significado === 'Local') color = '#f59e0b'; // Ámbar (Recurso)
      else if (d.significado === 'Regional') color = '#3b82f6'; // Azul (Regional)
      else if (d.significado === 'Nacional') color = '#6366f1'; // Índigo (Nacional)
      else if (d.significado === 'Internacional') color = '#10b981'; // Esmeralda (Internacional)

      return {
        name: d.nombredelinventario || 'Atractivo Turístico',
        value: [lng, lat, d.nombredelinventario, d.patrimonio, d.significado, d.total],
        itemStyle: { color, opacity: 0.88 },
        symbolSize: d.significado === 'Internacional' ? 6 : 4,
        rawData: d
      };
    });
  }, [filteredData]);

  // 8. Opciones de ECharts con proporciones reales y sin crashes
  const mapOptions = useMemo(() => {
    if (!mapRegistered) return {};

    const centerCoord = selectedDepto !== 'Todos' && DEPARTAMENTO_CENTROIDS[selectedDepto]
      ? DEPARTAMENTO_CENTROIDS[selectedDepto]
      : [-73.5, 4.5];

    const zoomLevel = selectedDepto !== 'Todos' ? 3.0 : 1.15;

    const seriesList = [
      {
        name: 'Atractivos Georreferenciados',
        type: 'scatter',
        coordinateSystem: 'geo',
        large: true,
        largeThreshold: 2000,
        animation: false,
        data: scatterPoints
      }
    ];

    return {
      backgroundColor: 'transparent',
      geo: {
        map: 'colombia',
        roam: true,
        center: centerCoord,
        zoom: zoomLevel,
        aspectScale: 0.95, // Proporción áurea geográfica exacta de Colombia
        label: { show: false },
        itemStyle: {
          areaColor: '#f1f5f9',
          borderColor: '#cbd5e1',
          borderWidth: 0.75
        },
        emphasis: {
          itemStyle: {
            areaColor: '#e2e8f0',
            borderColor: '#0f172a',
            borderWidth: 1.5
          },
          label: { show: false }
        },
        regions: departmentRegions
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        borderColor: '#e2e8f0',
        padding: [10, 14],
        textStyle: { color: '#0f172a' },
        extraCssText: 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border-radius: 12px; max-width: 320px;',
        formatter: (params) => {
          // Tooltip de Punto Georreferenciado
          if (params.seriesType === 'scatter' && params.data?.rawData) {
            const d = params.data.rawData;
            const isRecurso = d.significado === 'Local';
            return `
              <div style="font-family: inherit; font-size: 12px;">
                <div style="font-weight: 800; font-size: 13px; color: #0f172a; margin-bottom: 4px; line-height: 1.3;">
                  “${d.nombredelinventario || 'Atractivo Turístico'}”
                </div>
                <div style="color: #64748b; font-size: 11px; margin-bottom: 6px;">
                  ${d.ciudad || ''}, ${d.departamento || ''}
                </div>
                <div style="display: flex; gap: 4px; margin-bottom: 6px;">
                  <span style="background: ${isRecurso ? '#fef3c7' : '#dbeafe'}; color: ${isRecurso ? '#92400e' : '#1e40af'}; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px;">
                    ${isRecurso ? 'Recurso Local (6 pts)' : `Atractivo (${d.significado})`}
                  </span>
                  <span style="background: #f1f5f9; color: #334155; font-size: 10px; padding: 2px 6px; border-radius: 4px;">
                    ${d.patrimonio || 'General'}
                  </span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; border-top: 1px solid #f1f5f9; padding-top: 4px;">
                  <span style="color: #64748b;">Puntaje Calidad:</span>
                  <strong>${d.subtotal || 0} / 70</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; margin-top: 2px;">
                  <span style="color: #64748b;">Puntuación Total:</span>
                  <strong style="color: #0f172a;">${d.total || 0} / 100</strong>
                </div>
                <div style="margin-top: 6px; font-size: 10px; color: #2563eb; font-weight: bold; text-align: center;">
                  Clic para abrir Ficha Oficial MinCIT
                </div>
              </div>
            `;
          }

          // Tooltip de Departamento en Geo
          if (params.componentType === 'geo') {
            const depto = params.name;
            const stats = departmentalStats[depto];
            if (!stats) {
              return `
                <div style="font-family: inherit; font-size: 12px; padding: 4px;">
                  <strong style="color: #0f172a; font-size: 13px;">${depto}</strong>
                  <div style="color: #94a3b8; font-size: 11px; margin-top: 2px;">0 bienes inventariados en la muestra</div>
                </div>
              `;
            }
            return `
              <div style="font-family: inherit; font-size: 12px; min-width: 220px;">
                <div style="font-weight: 800; font-size: 14px; color: #0f172a; margin-bottom: 4px; border-bottom: 1px solid #f1f5f9; padding-bottom: 4px;">
                  ${stats.nombre}
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                  <span style="color: #64748b;">Total Bienes:</span>
                  <strong style="color: #0f172a;">${stats.count.toLocaleString()}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                  <span style="color: #d97706;">Recursos Locales:</span>
                  <strong>${stats.recursos} (${stats.recursosPct}%)</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                  <span style="color: #2563eb;">Atractivos Reales:</span>
                  <strong>${stats.atractivos} (${stats.atractivosPct}%)</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 4px; padding-top: 4px; border-top: 1px solid #f1f5f9;">
                  <span style="color: #64748b;">Puntaje Promedio:</span>
                  <strong style="color: #10b981;">${stats.avgTotal} / 100</strong>
                </div>
                <div style="margin-top: 6px; font-size: 10px; color: #10b981; font-weight: bold; text-align: center;">
                  Clic para filtrar departamento
                </div>
              </div>
            `;
          }

          return '';
        }
      },
      series: seriesList
    };
  }, [mapRegistered, departmentRegions, scatterPoints, selectedDepto, departmentalStats, DEPARTAMENTO_CENTROIDS]);

  // 9. Evento Clic en el Mapa: Filtrar departamento o abrir ficha de punto
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.getEchartsInstance();
      if (chart) {
        chart.off('click');
        chart.on('click', (params) => {
          if (params.componentType === 'geo') {
            const depto = params.name;
            if (depto && departmentalStats[depto]) {
              setSelectedDepto(prev => prev === depto ? 'Todos' : depto);
            }
          } else if (params.data && params.data.rawData) {
            setSelectedAtractivo(params.data.rawData);
          }
        });
      }
    }
  }, [mapOptions, departmentalStats]);

  // 9. Gráfico de Anillo: Composición de Patrimonio
  const doughnutOptions = useMemo(() => {
    const counts = {};
    filteredData.forEach(d => {
      const p = d.patrimonio || 'No Clasificado';
      counts[p] = (counts[p] || 0) + 1;
    });

    const pieData = Object.keys(counts)
      .map(key => ({ name: key, value: counts[key] }))
      .sort((a, b) => b.value - a.value);

    return {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: ['42%', '70%'],
          itemStyle: {
            borderRadius: 6,
            borderColor: '#ffffff',
            borderWidth: 2
          },
          label: { show: false },
          data: pieData,
          color: ['#f97316', '#10b981', '#3b82f6', '#8b5cf6']
        }
      ]
    };
  }, [filteredData]);

  // 10. Gráfico de Barras: Top Grupos
  const barOptions = useMemo(() => {
    const counts = {};
    filteredData.forEach(d => {
      const grupo = d.grupo || 'Sin Grupo';
      counts[grupo] = (counts[grupo] || 0) + 1;
    });

    const sortedCats = Object.keys(counts)
      .map(key => ({ name: key, count: counts[key] }))
      .sort((a, b) => a.count - b.count)
      .slice(-5);

    return {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '8%', bottom: '3%', top: '5%', containLabel: true },
      xAxis: { type: 'value', show: false },
      yAxis: { 
        type: 'category', 
        data: sortedCats.map(c => c.name), 
        axisLabel: { color: '#64748b', width: 110, overflow: 'truncate' },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      series: [
        {
          type: 'bar',
          data: sortedCats.map(c => c.count),
          itemStyle: { color: '#2563eb', borderRadius: [0, 4, 4, 0] },
          barWidth: '50%',
          label: {
            show: true,
            position: 'right',
            color: '#0f172a',
            fontSize: 10,
            fontWeight: 'bold'
          }
        }
      ]
    };
  }, [filteredData]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 font-sans relative">
      
      {/* HEADER DE FILTROS Y RESUMEN */}
      <div className="w-full mb-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col gap-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100 text-emerald-600">
              <Filter size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Atlas y Explorador MinCIT</h2>
              <p className="text-xs text-slate-500 font-medium">
                {filteredData.length.toLocaleString()} bienes evaluados en la visualización
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onSwitchToStory && (
              <button
                onClick={onSwitchToStory}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all border border-slate-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span>← Volver al Diagnóstico del Caso</span>
              </button>
            )}

            {(selectedDepto !== 'Todos' || selectedCiudad !== 'Todos' || selectedJerarquia !== 'Todas' || selectedPatrimonio !== 'Todos') && (
              <button
                onClick={() => { 
                  setSelectedDepto('Todos'); 
                  setSelectedCiudad('Todos');
                  setSelectedJerarquia('Todas');
                  setSelectedPatrimonio('Todos');
                }}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl border border-neutral-300 transition-all cursor-pointer"
              >
                Restablecer Filtros
              </button>
            )}
          </div>
        </div>

        {/* Barra de 4 Filtros Reactivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Departamento</label>
            <select 
              value={selectedDepto}
              onChange={(e) => setSelectedDepto(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-xs"
            >
              {departamentos.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Municipio / Ciudad</label>
            <select 
              value={selectedCiudad}
              onChange={(e) => setSelectedCiudad(e.target.value)}
              disabled={selectedDepto === 'Todos'}
              className="w-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-xs disabled:opacity-50 disabled:bg-slate-50"
            >
              {ciudades.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Clasificación / Jerarquía</label>
            <select 
              value={selectedJerarquia}
              onChange={(e) => setSelectedJerarquia(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-xs"
            >
              <option value="Todas">Todas las jerarquías (8,345)</option>
              <option value="Recursos">Recursos Turísticos (Local: 6 pts)</option>
              <option value="Atractivos">Atractivos Turísticos (≥ 12 pts)</option>
              <option value="Regional">Atractivo Regional (12 pts)</option>
              <option value="Nacional">Atractivo Nacional (18 pts)</option>
              <option value="Internacional">Atractivo Internacional (30 pts)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Clase de Patrimonio</label>
            <select 
              value={selectedPatrimonio}
              onChange={(e) => setSelectedPatrimonio(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-xs"
            >
              <option value="Todos">Todas las clases (8,345)</option>
              <option value="Patrimonio Cultural">Patrimonio Cultural (6,677)</option>
              <option value="Patrimonio Natural">Patrimonio Natural (1,668)</option>
            </select>
          </div>
        </div>
      </div>

      {/* CUADRÍCULA PRINCIPAL: MAPA + GRÁFICOS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-0 mb-8">
        
        {/* COLUMNA IZQUIERDA: MAPA INTERACTIVO (8 COLUMNAS) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-5 relative shadow-xs min-h-[580px] lg:min-h-[720px] flex flex-col">
          
          {/* Barra de Controles del Mapa */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 z-10">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700">
              <MapIcon size={14} className="text-emerald-600" />
              <span>Cartografía Base de Colombia</span>
            </div>

            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
              {filteredData.length.toLocaleString()} puntos georreferenciados
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {!mapRegistered ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <div className="animate-spin w-8 h-8 border-3 border-emerald-200 border-t-emerald-600 rounded-full"></div>
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Cargando cartografía oficial...</span>
              </div>
            ) : (
              <EChartsCore 
                ref={chartRef} 
                options={mapOptions} 
                notMerge={true}
                ariaLabel="Mapa interactivo de cobertura y atractivos turísticos" 
              />
            )}
          </div>

          {/* Leyenda visual del mapa */}
          <div className="pt-3 pb-1 border-t border-slate-100 mt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-slate-700">Jerarquía del Bien:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
                <span>Local (Recurso: 6 pts)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span>
                <span>Regional (12 pts)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]"></span>
                <span>Nacional (18 pts)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                <span>Internacional (30 pts)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <span>Clic en un punto para ver ficha técnica • Rueda para zoom libre</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: GRÁFICOS DE COMPOSICIÓN (4 COLUMNAS) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Gráfico 1: Dona de Patrimonio */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col">
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <PieChart size={14} className="text-orange-500" />
              Composición de Patrimonio
            </h3>
            <div className="w-full h-[220px]">
              <EChartsCore options={doughnutOptions} ariaLabel="Gráfico de patrimonio" />
            </div>
          </div>

          {/* Gráfico 2: Barras Top Grupos */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col">
            <h3 className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <BarChart2 size={14} className="text-blue-500" />
              Top 5 Grupos en Selección
            </h3>
            <div className="w-full h-[220px]">
              <EChartsCore options={barOptions} ariaLabel="Gráfico de grupos" />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL / PANEL LATERAL: FICHA TÉCNICA */}
      {selectedAtractivo && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs transition-opacity">
          <div className="w-full md:w-[500px] h-full bg-white border-l border-slate-200 shadow-2xl p-6 overflow-y-auto transition-transform duration-300 ease-out text-slate-800">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">Ficha Oficial MinCIT</span>
                <h3 className="text-base font-bold text-slate-900 leading-tight">
                  {selectedAtractivo.nombredelinventario || "Detalle del Atractivo"}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedAtractivo(null)}
                className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            
            {selectedAtractivo.descripción && (
              <div className="mb-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Descripción del Bien</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedAtractivo.descripción}
                </p>
              </div>
            )}

            <FichaTecnicaViewer 
              fichaTecnica={{
                "Departamento": selectedAtractivo.departamento,
                "Municipio": selectedAtractivo.ciudad,
                "Jerarquía": `${selectedAtractivo.significado || 'Sin clasificar'} (${selectedAtractivo.significado_puntaje || 0} pts)`,
                "Puntaje Calidad": `${selectedAtractivo.subtotal || 0} / 70 pts`,
                "Puntaje Total": `${selectedAtractivo.total || 0} / 100 pts`,
                "Clase de Patrimonio": selectedAtractivo.patrimonio,
                "Tipo": selectedAtractivo.tipodepatrimonio,
                "Grupo": selectedAtractivo.grupo,
                "Componente": selectedAtractivo.componente,
                "Elemento": selectedAtractivo.elemento,
                "Clima": selectedAtractivo.clima || "No especificado",
                "Código MinCIT": selectedAtractivo.códigodelrecursoturistico,
                ...(selectedAtractivo.actividades && selectedAtractivo.actividades.length > 0 ? { "Actividades": selectedAtractivo.actividades } : {})
              }}
            />
          </div>
        </div>
      )}


    </div>
  );
}
