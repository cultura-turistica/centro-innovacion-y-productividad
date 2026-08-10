"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Scrollyteller from '../Scrollyteller';
import EChartsCore from '../../EChartsCore';
import TolimaMapWrapper from './TolimaMapWrapper';

export default function TolimaScrollytelling({ narrativa }) {
  const [data, setData] = useState(null);
  const [activeStep, setActiveStep] = useState(0); // Para forzar montaje/desmontaje

  useEffect(() => {
    // Cargar los datos maestros oficiales
    fetch('/data/PROSPERIDAD_MASTER_DATA_CULTURAT.json')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(e => console.error("Error loading master data:", e));
  }, []);

  const getLulcOption = () => {
    if (!data) return {};
    const { transicion_uso_suelo } = data;
    const years = transicion_uso_suelo.map(d => d.Año);
    return {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      legend: { textStyle: { color: '#a8a29e' }, bottom: 0 },
      grid: { left: '10%', right: '5%', bottom: '20%', top: '5%' },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years,
        axisLine: { lineStyle: { color: '#57534e' } },
        axisLabel: { color: '#a8a29e' }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: { lineStyle: { color: '#292524', type: 'dashed' } },
        axisLabel: { color: '#a8a29e', formatter: '{value} Ha' }
      },
      series: [
        { name: 'Bosque', type: 'line', stack: 'Total', areaStyle: {}, showSymbol: false, data: transicion_uso_suelo.map(d => d.Bosque), itemStyle: { color: '#22c55e' } },
        { name: 'Matorral', type: 'line', stack: 'Total', areaStyle: {}, showSymbol: false, data: transicion_uso_suelo.map(d => d.Matorral), itemStyle: { color: '#f97316' } },
        { name: 'Pastizal', type: 'line', stack: 'Total', areaStyle: {}, showSymbol: false, data: transicion_uso_suelo.map(d => d.Pastizal), itemStyle: { color: '#eab308' } },
        { name: 'Agua', type: 'line', stack: 'Total', areaStyle: {}, showSymbol: false, data: transicion_uso_suelo.map(d => d.Agua), itemStyle: { color: '#3b82f6' } }
      ]
    };
  };

  const getCarbonOption = () => {
    if (!data) return {};
    const { transicion_uso_suelo } = data;
    const years = transicion_uso_suelo.map(d => d.Año);
    return {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      legend: { textStyle: { color: '#a8a29e' }, bottom: 0 },
      grid: { left: '10%', right: '10%', bottom: '20%', top: '10%' },
      xAxis: {
        type: 'category',
        data: years,
        axisLine: { lineStyle: { color: '#57534e' } },
        axisLabel: { color: '#a8a29e' }
      },
      yAxis: [
        {
          type: 'value',
          min: 'dataMin',
          axisLine: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false }
        },
        {
          type: 'value',
          min: 45,
          max: 56,
          axisLine: { show: false },
          splitLine: { lineStyle: { color: '#292524', type: 'dashed' } },
          axisLabel: { color: '#0ea5e9', fontSize: 10 }
        }
      ],
      series: [
        { 
          name: 'Capacidad Stock', 
          type: 'line', 
          yAxisIndex: 0,
          areaStyle: { opacity: 0.2 }, 
          data: transicion_uso_suelo.map(d => d.Calculo_Stock_CO2e), 
          itemStyle: { color: '#10b981' } 
        },
        { 
          name: 'Posible Captura Anual', 
          type: 'bar', 
          yAxisIndex: 1,
          barWidth: '40%',
          data: transicion_uso_suelo.map(d => d.Calculo_Captura_Anual), 
          itemStyle: { color: '#0ea5e9', borderRadius: [4, 4, 0, 0] } 
        }
      ]
    };
  };

  const getHealthOption = () => {
    if (!data) return {};
    const { monitoreo_salud_mensual } = data;
    const dates = monitoreo_salud_mensual.map(d => d.fecha);
    return {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      legend: { textStyle: { color: '#a8a29e' }, bottom: 0 },
      dataZoom: [{ type: 'inside', start: 0, end: 100 }],
      grid: { left: '10%', right: '5%', bottom: '20%', top: '5%' },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dates,
        axisLine: { lineStyle: { color: '#57534e' } },
        axisLabel: { 
          color: '#a8a29e',
          fontSize: 10,
          formatter: (val) => val.endsWith('-01') || val.endsWith('-06') ? val : '' 
        }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: { lineStyle: { color: '#292524', type: 'dashed' } },
        axisLabel: { color: '#a8a29e' }
      },
      series: [
        { name: 'NDVI (Vigor)', type: 'line', showSymbol: false, data: monitoreo_salud_mensual.map(d => d.salud_vegetacion_ndvi), itemStyle: { color: '#4ade80' }, lineStyle: { width: 3 } },
        { name: 'NDMI (Humedad)', type: 'line', showSymbol: false, data: monitoreo_salud_mensual.map(d => d.humedad_dosel_ndmi), itemStyle: { color: '#38bdf8' }, lineStyle: { width: 2 } },
        { name: 'NDWI (Agua)', type: 'line', showSymbol: false, data: monitoreo_salud_mensual.map(d => d.indice_agua_ndwi), itemStyle: { color: '#60a5fa' }, lineStyle: { width: 2, type: 'dashed' } }
      ]
    };
  };

  const steps = useMemo(() => {
    return [
      {
        // ACTO 1
        title: narrativa.acto1.titulo,
        content: `<p>${narrativa.acto1.p1}</p><p>${narrativa.acto1.p2}</p>`
      },
      {
        // ACTO 2
        title: narrativa.acto2.titulo,
        content: `<p>${narrativa.acto2.p1}</p><p>${narrativa.acto2.p2}</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div class="bg-black/30 p-4 rounded-xl border-l-4 border-green-500">
                      <strong class="text-green-400 block uppercase text-xs mb-1">${narrativa.acto2.stats[0].titulo}</strong>
                      <span class="text-3xl font-bold text-white">${narrativa.acto2.stats[0].numero}</span>
                      <small class="block text-stone-400 leading-tight mt-1">${narrativa.acto2.stats[0].subtitulo}</small>
                    </div>
                    <div class="bg-black/30 p-4 rounded-xl border-l-4 border-orange-500">
                      <strong class="text-orange-400 block uppercase text-xs mb-1">${narrativa.acto2.stats[1].titulo}</strong>
                      <span class="text-3xl font-bold text-white">${narrativa.acto2.stats[1].numero}</span>
                      <small class="block text-stone-400 leading-tight mt-1">${narrativa.acto2.stats[1].subtitulo}</small>
                    </div>
                  </div>`,
        customComponent: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-black/40 border border-white/5 rounded-xl p-4 h-[250px]">
              <h4 className="text-sm font-bold text-stone-300 mb-2">Transición de Uso de Suelo (Ha)</h4>
              {/* Solo monta si está activo para evitar fugas de memoria y WebGL limits */}
              {activeStep === 1 && data && <EChartsCore initialOption={getLulcOption()} />}
            </div>
            <div className="bg-black/40 border border-white/5 rounded-xl p-4 h-[250px]">
              <h4 className="text-sm font-bold text-stone-300 mb-2">Potencial Teórico de Carbono</h4>
              {activeStep === 1 && data && <EChartsCore initialOption={getCarbonOption()} />}
            </div>
          </div>
        )
      },
      {
        // ACTO 3
        title: narrativa.acto3.titulo,
        content: `<p>${narrativa.acto3.p1}</p>
                  <p class="text-sm text-stone-400 my-4">
                    <span class="text-green-400">■ NDVI:</span> Salud vegetal &nbsp;
                    <span class="text-sky-400">■ NDMI:</span> Estrés hídrico &nbsp;
                    <span class="text-blue-400">■ NDWI:</span> Agua
                  </p>`,
        customComponent: (
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 h-[300px] mt-4">
            {activeStep === 2 && data && <EChartsCore initialOption={getHealthOption()} />}
            <div className="bg-sky-400/10 border border-sky-400/30 p-3 rounded-lg mt-2">
              <span className="text-sm text-sky-100">{narrativa.acto3.conclusion}</span>
            </div>
          </div>
        )
      },
      {
        // ACTO 4
        title: narrativa.acto4.titulo,
        content: `<p>${narrativa.acto4.p1}</p><p>${narrativa.acto4.p2}</p>`
      },
      {
        // ACTO 5
        title: narrativa.acto5.titulo,
        content: `<p>${narrativa.acto5.p1}</p><p>${narrativa.acto5.p2}</p>
                  <div class="mt-4 p-4 border border-green-500/30 bg-green-900/20 rounded-xl">
                    <strong class="text-green-400 block mb-2">Conclusión del Laboratorio</strong>
                    <span class="text-sm text-green-100 leading-relaxed">${narrativa.acto5.conclusionFinal}</span>
                  </div>`
      }
    ];
  }, [narrativa, data, activeStep]);

  // Sobrescribimos la capa visual (renderBackground) para que sea el mapa interactivo
  // Modificamos Scrollyteller para capturar el estado interno del scroll (hack a través del prop renderBackground)
  // En este diseño, Scrollyteller llama a renderBackground(activeStep). Lo usamos para actualizar el estado local
  // de forma segura y renderizar condicionalmente las gráficas.
  const renderBackground = (currentStep) => {
    // Sincronización del estado de forma segura sin causar infinite loops
    if (currentStep !== activeStep) {
      // Usar setTimeout para evitar el "cannot update during existing state transition" en React
      setTimeout(() => setActiveStep(currentStep), 0);
    }
    
    return <TolimaMapWrapper activeStep={currentStep} />;
  };

  return (
    <Scrollyteller steps={steps} renderBackground={renderBackground} />
  );
}
