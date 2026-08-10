"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as echarts from 'echarts';
import * as topojson from 'topojson-client';
import EChartsCore from '../../EChartsCore';
import { SAE_NARRATIVA } from '../../../../data/laboratorios/sae';

export default function SaeScrollytelling() {
  const [step, setStep] = useState(1);
  const [colombiaData, setColombiaData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const chartRef = useRef(null);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  // Intersection Observer para Scrollytelling
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
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

  // Carga asíncrona de datos y registro de mapa TopoJSON
  useEffect(() => {
    Promise.all([
      fetch('/data/sae/dataset.json').then(res => res.json()),
      fetch('/data/sae/co-all.topo.json').then(res => res.json())
    ]).then(([dataset, topoJsonData]) => {
      const objectKey = Object.keys(topoJsonData.objects)[0];
      const geoJsonData = topojson.feature(topoJsonData, topoJsonData.objects[objectKey]);
      
      // ECharts v5 soporta TopoJSON nativamente al registrar el mapa
      echarts.registerMap('colombia', geoJsonData);
      setColombiaData(dataset);
      setIsDataLoaded(true);
    }).catch(err => console.error("Error cargando datos SAE:", err));
  }, []);

  // Memoización de datos procesados
  const { datosCenso, datosPyMC, top10Darkest } = useMemo(() => {
    if (!colombiaData.length) return { datosCenso: [], datosPyMC: [], top10Darkest: [] };
    
    const pyMC = colombiaData.filter(d => d.pobreza_censo === null);
    const censo = colombiaData.filter(d => d.pobreza_censo !== null);

    const cleanData = colombiaData.filter((thing, index, self) =>
      index === self.findIndex((t) => t.municipio === thing.municipio)
    );
    const top10 = [...cleanData]
      .sort((a, b) => a.luz_satelital - b.luz_satelital)
      .slice(0, 10)
      .map(d => ({ ...d, label: d.municipio.substring(0, 12) }));

    return { datosCenso: censo, datosPyMC: pyMC, top10Darkest: top10 };
  }, [colombiaData]);

  // Actualización dinámica de EChartsCore basada en el paso actual
  useEffect(() => {
    if (!isDataLoaded || !chartRef.current) return;
    const chart = chartRef.current.getEchartsInstance();
    if (!chart) return;

    let option = {};

    if (step === 1) {
      // PASO 1: MAPA COROPLÉTICO
      option = {
        backgroundColor: 'transparent',
        title: {
          text: SAE_NARRATIVA.chartTitles.map,
          left: 'center',
          textStyle: { color: '#c9d1d9', fontSize: 14 }
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: '#0d1117f2',
          borderColor: '#ffffff1a',
          textStyle: { color: '#c9d1d9' },
          formatter: '{b}'
        },
        series: [
          {
            name: 'Colombia',
            type: 'map',
            map: 'colombia',
            roam: true,
            zoom: 1.2,
            aspectScale: 1,
            itemStyle: {
              areaColor: '#fca311',
              borderColor: '#0d1117',
              borderWidth: 0.5
            },
            emphasis: {
              itemStyle: {
                areaColor: '#3fb950',
                borderColor: '#fff',
                borderWidth: 1
              },
              label: { show: false }
            },
            data: []
          }
        ]
      };
    } else if (step === 2) {
      // PASO 2: DISPERSIÓN (SCATTER)
      option = {
        backgroundColor: 'transparent',
        title: {
          text: SAE_NARRATIVA.chartTitles.scatter,
          left: 'center',
          textStyle: { color: '#c9d1d9', fontSize: 14 }
        },
        grid: { top: 60, right: 20, bottom: 40, left: 50 },
        tooltip: {
          backgroundColor: 'rgba(13, 17, 23, 0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          textStyle: { color: '#c9d1d9' },
          formatter: (params) => {
            const d = params.data;
            return `<strong style="color:white">${d[2]}</strong><br/>
                    Luz: <span style="color:#fca311">${d[0].toFixed(2)}</span><br/>
                    IPM: <span style="color:#ff5233">${d[1].toFixed(1)}%</span>`;
          }
        },
        xAxis: {
          type: 'value',
          name: 'Intensidad Lumínica',
          nameLocation: 'middle',
          nameGap: 25,
          splitLine: { lineStyle: { type: 'dashed', color: '#30363d' } },
          axisLabel: { color: '#8b949e', fontSize: 10 },
          nameTextStyle: { color: '#8b949e', fontSize: 11 }
        },
        yAxis: {
          type: 'value',
          name: 'Pobreza (%)',
          splitLine: { lineStyle: { type: 'dashed', color: '#30363d' } },
          axisLabel: { color: '#8b949e', fontSize: 10, formatter: '{value}%' },
          nameTextStyle: { color: '#8b949e', fontSize: 11 }
        },
        legend: {
          bottom: 0,
          textStyle: { color: '#8b949e', fontSize: 10 },
          data: ['Oficial', 'Bayesiano']
        },
        series: [
          {
            name: 'Oficial',
            type: 'scatter',
            animationDurationUpdate: 1500,
            itemStyle: { color: '#3fb95099' },
            symbolSize: 6,
            data: datosCenso.map(d => [d.luz_satelital, d.prediccion_mcmc, d.municipio])
          },
          {
            name: 'Bayesiano',
            type: 'scatter',
            animationDurationUpdate: 1500,
            itemStyle: { color: '#ff5233e6' },
            symbolSize: 6,
            data: datosPyMC.map(d => [d.luz_satelital, d.prediccion_mcmc, d.municipio])
          }
        ]
      };
    } else if (step === 3) {
      // PASO 3: GRÁFICO DE BARRAS (TOP 10)
      option = {
        backgroundColor: 'transparent',
        title: {
          text: SAE_NARRATIVA.chartTitles.bar,
          left: 'center',
          textStyle: { color: '#c9d1d9', fontSize: 14 }
        },
        grid: { top: 60, right: 20, bottom: 80, left: 50 },
        tooltip: {
          backgroundColor: 'rgba(13, 17, 23, 0.95)',
          borderColor: 'rgba(255,255,255,0.1)',
          textStyle: { color: '#c9d1d9' },
          formatter: (params) => {
            const d = top10Darkest[params.dataIndex];
            return `<strong style="color:white">${d.municipio}</strong><br/>
                    Luminosidad: <span style="color:#ff5233">${d.luz_satelital.toFixed(2)} lx</span><br/>
                    Pobreza IPM: <span style="color:#3fb950">${d.prediccion_mcmc.toFixed(1)}%</span>`;
          }
        },
        xAxis: {
          type: 'category',
          data: top10Darkest.map(d => d.label),
          axisLabel: { color: '#8b949e', interval: 0, rotate: 45, fontSize: 9 },
          axisTick: { show: false },
          splitLine: { show: false }
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { type: 'dashed', color: '#30363d' } },
          axisLabel: { color: '#8b949e', fontSize: 10, formatter: '{value} lx' }
        },
        series: [
          {
            type: 'bar',
            animationDurationUpdate: 1500,
            data: top10Darkest.map((d, index) => {
              // Convert alpha to 2-digit hex
              const alpha = Math.max(0.2, 1 - (index * 0.05));
              const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
              return {
                value: d.luz_satelital,
                itemStyle: {
                  color: `#ff5233${alphaHex}`
                }
              };
            }),
            itemStyle: {
              color: '#ff5233',
              borderRadius: [4, 4, 0, 0]
            }
          }
        ]
      };
    }

    chart.setOption(option, true);
  }, [step, isDataLoaded, datosCenso, datosPyMC, top10Darkest]);

  return (
    <div className="flex flex-col md:flex-row-reverse relative max-w-[1400px] mx-auto items-start">
      {/* Panel Gráfico ÚNICO ECharts */}
      <div className="w-full md:w-1/2 sticky top-[80px] md:top-[10vh] h-[50vh] md:h-[80vh] p-4 md:p-0 z-0">
        <div className="relative w-full h-full max-w-[850px] mx-auto bg-[#0d1117] md:rounded-xl md:border md:border-white/5 md:shadow-2xl overflow-hidden">
          
          <div className="absolute top-4 right-4 bg-[#0d1117]/85 backdrop-blur-md p-3 rounded-lg text-[0.7rem] md:text-xs leading-relaxed border border-white/10 z-50 shadow-lg text-[#c9d1d9]">
            📡 <strong className="text-white">Fuente:</strong> {SAE_NARRATIVA.metadata.fuente} <br/>
            💾 <strong className="text-white">Datos:</strong> {SAE_NARRATIVA.metadata.datos}<br/>
            ⚙️ <strong className="text-white">Modelo:</strong> {SAE_NARRATIVA.metadata.modelo}
          </div>

          {!isDataLoaded ? (
            <div className="w-full h-full flex items-center justify-center text-slate-500 animate-pulse">
               Inicializando Motor ECharts y Cartografía...
            </div>
          ) : (
            <EChartsCore 
              ref={chartRef} 
              className="w-full h-full" 
              ariaLabel="Visualización interactiva espacial y estadística del modelo SAE"
            />
          )}

        </div>
      </div>

      {/* Panel Narrativo (Scrollytelling) */}
      <div className="w-full md:w-1/2 max-w-full md:max-w-[450px] z-10 px-6 md:px-0 pt-[5vh] md:pt-0 pb-[20vh] md:pb-[80vh] md:mt-[20vh] relative">
        {SAE_NARRATIVA.steps.map((stepData, index) => {
          const isFirst = index === 0;
          const isSecond = index === 1;
          const ref = isFirst ? step1Ref : isSecond ? step2Ref : step3Ref;
          
          return (
            <div 
              key={stepData.id}
              id={stepData.id} 
              ref={ref} 
              className={`p-6 md:p-10 bg-[#0d1117]/95 md:bg-[#0d1117]/85 backdrop-blur-md mb-[50vh] md:mb-[80vh] border-l-4 border-[#fca311] rounded-r-xl shadow-2xl relative transition-opacity duration-500 ${step === index + 1 ? 'opacity-100' : 'opacity-40'}`}
            >
              <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 mt-0 font-serif">
                {stepData.title}
              </h3>
              {stepData.paragraphs.map((text, pIndex) => {
                let html = text
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>');
                
                return (
                  <p 
                    key={pIndex} 
                    className="font-serif text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-[#b1bac4] mb-4"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
