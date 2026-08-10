import React, { useState, useEffect, useRef } from 'react';
import { Factory, TrendingUp, Scale } from 'lucide-react';
import { CARBONO_SCROLLY_STEPS } from '../../../../data/laboratorios/carbono';
import EChartsCore from '../../EChartsCore';

const ICON_MAP = { Factory, TrendingUp, Scale };

const formatCompact = (val) => {
  if (val === null || val === undefined) return '0';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(val);
};

export default function CarbonoScrollytelling() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);
  const chartCoreRef = useRef(null);
  
  // Cache for datasets to avoid refetching
  const datasetsCache = useRef({});

  // 1. Intersection Observer para detectar el paso activo
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveStep(index);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    stepRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // 2. Fetch y actualización de Opciones ECharts (El Patrón Experto 2026)
  useEffect(() => {
    const updateChart = async () => {
      if (!chartCoreRef.current) return;
      const stepConfig = CARBONO_SCROLLY_STEPS[activeStep];
      const query = stepConfig.query;

      // Lazy load & Cache
      let data = datasetsCache.current[query];
      if (!data) {
        try {
          const res = await fetch(`/data/co2/${query}.json`);
          if (res.ok) {
            data = await res.json();
            datasetsCache.current[query] = data;
          }
        } catch (e) {
          console.error("Error fetching", e);
          return;
        }
      }

      if (!data) return;

      const echart = chartCoreRef.current;
      
      // Opciones según el paso activo
      let option = {};
      const commonGrid = { top: 60, right: 40, left: 60, bottom: 60 };
      const commonXAxis = {
        type: 'value',
        scale: true,
        splitLine: { show: false },
        axisLabel: { color: '#6b7280' },
        nameTextStyle: { color: '#6b7280', fontSize: 14 }
      };
      const commonYAxis = {
        type: 'value',
        splitLine: { lineStyle: { type: 'dashed', color: '#e5e7eb' } },
        axisLabel: { color: '#6b7280', formatter: (val) => formatCompact(val) },
        nameTextStyle: { color: '#6b7280', fontSize: 14 }
      };

      if (activeStep === 0) {
        // Area Chart: NA vs Europe
        option = {
          tooltip: { trigger: 'axis' },
          grid: commonGrid,
          xAxis: { ...commonXAxis, name: 'Línea de Tiempo (Años)', nameLocation: 'middle', nameGap: 30, min: 'dataMin', max: 'dataMax' },
          yAxis: { ...commonYAxis, name: 'Emisiones CO2 (M Tons)' },
          series: [
            {
              name: 'North America',
              type: 'line',
              areaStyle: { opacity: 0.6 },
              data: data.map(d => [d.year, d['North America']]),
              smooth: true,
              showSymbol: false,
              itemStyle: { color: '#2563eb' }
            },
            {
              name: 'Europe',
              type: 'line',
              areaStyle: { opacity: 0.6 },
              data: data.map(d => [d.year, d['Europe']]),
              smooth: true,
              showSymbol: false,
              itemStyle: { color: '#db2777' }
            }
          ]
        };
      } else if (activeStep === 1) {
        // Line Chart: US vs China
        option = {
          tooltip: { trigger: 'axis' },
          grid: commonGrid,
          xAxis: { ...commonXAxis, name: 'Línea de Tiempo (Años)', nameLocation: 'middle', nameGap: 30, min: 'dataMin', max: 'dataMax' },
          yAxis: { ...commonYAxis, name: 'Emisiones CO2 (M Tons)' },
          series: [
            {
              name: 'United States',
              type: 'line',
              data: data.map(d => [d.year, d['United States']]),
              smooth: true,
              showSymbol: false,
              lineStyle: { width: 4 },
              itemStyle: { color: '#2563eb' }
            },
            {
              name: 'China',
              type: 'line',
              data: data.map(d => [d.year, d['China']]),
              smooth: true,
              showSymbol: false,
              lineStyle: { width: 4 },
              itemStyle: { color: '#dc2626' }
            },
            {
              type: 'line',
              markLine: {
                symbol: ['none', 'none'],
                label: { formatter: 'Cruce OMC 2006', color: '#ef4444', fontWeight: 'bold' },
                lineStyle: { color: '#ef4444', type: 'dashed', width: 2 },
                data: [{ xAxis: 2006 }]
              }
            }
          ]
        };
      } else if (activeStep === 2) {
        // Scatter Chart: Wealth vs CO2
        option = {
          tooltip: {
            trigger: 'item',
            formatter: (params) => {
              const d = params.data;
              return `
                <div style="font-size:14px; font-weight:bold; color:#047857; margin-bottom:4px;">${d[3]}</div>
                <div>PIB Cápita: $${formatCompact(d[0])}</div>
                <div>CO2 Cápita: ${formatCompact(d[1])} Tons</div>
                <div>Población: ${formatCompact(d[2])}</div>
              `;
            }
          },
          grid: commonGrid,
          xAxis: { ...commonXAxis, type: 'log', name: 'Riqueza Per Cápita (PIB USD)', nameLocation: 'middle', nameGap: 30 },
          yAxis: { ...commonYAxis, type: 'log', name: 'CO2 Per Cápita (Ton)' },
          dataset: {
            source: data.map(d => [d.gdp_per_capita, d.co2_per_capita, d.population, d.country])
          },
          series: [
            {
              type: 'scatter',
              large: true,
              largeThreshold: 2000,
              progressive: 400,
              itemStyle: { color: '#10b981', opacity: 0.6, borderColor: '#047857', borderWidth: 1 },
              encode: {
                x: 0,
                y: 1,
                tooltip: [0, 1, 2, 3]
              },
              symbolSize: (val) => {
                // Scale symbol by population loosely
                const size = Math.sqrt(val[2]) / 2;
                return Math.max(5, Math.min(size, 40));
              }
            }
          ]
        };
      }

      // 3. Ejecutar la interpolación / Morphing nativo de ECharts
      echart.setOption(option, {
        notMerge: true, // Forzamos notMerge porque las series cambian radicalmente de Line a Scatter
        lazyUpdate: true
      });
    };

    updateChart();
  }, [activeStep]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-start gap-8">
      {/* Sticky Chart Container con Skeleton CSS para evitar CLS */}
      <div className="sticky top-20 w-full md:w-[60%] h-[50vh] md:h-[80vh] flex items-center justify-center bg-white rounded-none md:rounded-3xl shadow-md border-y md:border border-slate-100 p-4 md:p-8 transition-all duration-500 z-10 overflow-hidden">
        <EChartsCore ref={chartCoreRef} />
      </div>
      
      {/* Narrative Steps */}
      <div className="w-full md:w-[40%] px-4 md:pl-8 md:pr-4 py-8 md:py-16 flex flex-col z-20 -mt-[10vh] md:mt-0">
        {CARBONO_SCROLLY_STEPS.map((step, idx) => {
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
  );
}
