"use client";
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as echarts from 'echarts/core';
import { ScatterChart, LineChart, CustomChart, MapChart, BarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
  DatasetComponent,
  TitleComponent,
  DataZoomComponent,
  GeoComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Registramos los componentes esenciales de ECharts modularmente
echarts.use([
  ScatterChart,
  LineChart,
  CustomChart,
  MapChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  VisualMapComponent,
  DatasetComponent,
  TitleComponent,
  DataZoomComponent,
  GeoComponent,
  CanvasRenderer
]);

/**
 * Wrapper de alto rendimiento para Apache ECharts (Estándar 2026).
 * Se encarga de instanciar el canvas, gestionar el ResizeObserver,
 * y limpiar la memoria al desmontar.
 * Expone la instancia pura mediante 'ref' para manipular opciones (morphing)
 * imperativamente sin forzar re-renders de React.
 */
const EChartsCore = forwardRef(({
  className = "",
  style = { width: '100%', height: '100%' },
  initialOption = {},
  onInit = null,
  ariaLabel = "Gráfica interactiva de datos"
}, ref) => {
  const chartRef = useRef(null);
  const echartInstance = useRef(null);
  const resizeObserver = useRef(null);

  useEffect(() => {
    let isCancelled = false;

    if (chartRef.current && !echartInstance.current) {
      // 1. Inicialización con DPR limitado (Mejora de rendimiento móvil)
      echartInstance.current = echarts.init(chartRef.current, null, {
        renderer: 'canvas',
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2)
      });

      // 2. Establecer opciones iniciales
      if (!isCancelled && Object.keys(initialOption).length > 0) {
        echartInstance.current.setOption(initialOption, {
          notMerge: true,
          lazyUpdate: true
        });
      }

      if (onInit && !isCancelled) {
        onInit(echartInstance.current);
      }

      // 3. Control de Resize Automático sin causar memory leaks
      resizeObserver.current = new ResizeObserver(() => {
        if (echartInstance.current) {
          echartInstance.current.resize();
        }
      });
      resizeObserver.current.observe(chartRef.current);
    }

    return () => {
      isCancelled = true;
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      if (echartInstance.current) {
        echartInstance.current.dispose();
        echartInstance.current = null;
      }
    };
  }, []); // Solo se ejecuta al montar

  // 4. Exponer instancia de ECharts al componente padre para setOption manual
  useImperativeHandle(ref, () => ({
    getEchartsInstance: () => echartInstance.current,
    setOption: (option, opts = { notMerge: false, lazyUpdate: true }) => {
      if (echartInstance.current) {
        echartInstance.current.setOption(option, opts);
      }
    }
  }));

  return (
    <div
      ref={chartRef}
      className={className}
      style={style}
      role="img"
      aria-label={ariaLabel}
    />
  );
});

EChartsCore.displayName = 'EChartsCore';

export default EChartsCore;
