"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, GeoComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import * as topojson from 'topojson-client';

echarts.use([MapChart, TooltipComponent, GeoComponent, CanvasRenderer]);

export default function TerritorialMap({ proyectos, onProjectClick }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const mapContainerRef = useRef(null);
  const chartInstance = useRef(null);

  const idToNameRef = useRef({});

  useEffect(() => {
    fetch('/data/conocimiento/colombia-municipios.topo.json')
      .then(res => {
        if (!res.ok) throw new Error("Mapa municipal no encontrado");
        return res.json();
      })
      .then(topoJsonData => {
        const objectKey = Object.keys(topoJsonData.objects)[0];
        const geoJsonData = topojson.feature(topoJsonData, topoJsonData.objects[objectKey]);

        if (geoJsonData.features) {
          geoJsonData.features.forEach(f => {
            const divipola = String(f.id);
            const rawName = f.properties.MPIO_CNMBR || f.properties.name || divipola;
            // ECharts uses feature.properties.name as default identifier.
            // If it's missing, let's ensure it has it so it matches
            if (!f.properties.name) {
              f.properties.name = rawName;
            }
            idToNameRef.current[divipola] = f.properties.name;
          });
        }

        echarts.registerMap('colombia_municipios', geoJsonData);
        setIsMapLoaded(true);
      })
      .catch(err => {
        console.warn("Falla al cargar colombia-municipios.topo.json, intentando fallback departamental...", err);
        fetch('/data/sae/co-all.topo.json')
          .then(res => res.json())
          .then(topoJsonData => {
            const objectKey = Object.keys(topoJsonData.objects)[0];
            const geoJsonData = topojson.feature(topoJsonData, topoJsonData.objects[objectKey]);
            if (geoJsonData.features) {
              geoJsonData.features.forEach(f => {
                const divipola = String(f.id);
                const rawName = f.properties.name || divipola;
                if (!f.properties.name) f.properties.name = rawName;
                idToNameRef.current[divipola] = f.properties.name;
              });
            }
            echarts.registerMap('colombia_municipios', geoJsonData);
            setIsMapLoaded(true);
          })
          .catch(() => setMapError(true));
      });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !mapContainerRef.current || !proyectos) return;

    if (!chartInstance.current) {
      chartInstance.current = echarts.init(mapContainerRef.current, null, {
        renderer: 'canvas',
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2)
      });
    }

    const chart = chartInstance.current;
    const idToName = idToNameRef.current;

    const munToProjects = {};
    const mapData = [];
    const paintedMuns = new Set();

    proyectos.forEach(proyecto => {
      const { mapaImpacto } = proyecto;
      if (!mapaImpacto || !mapaImpacto.activo) return;

      const { municipiosEjecutados = [], municipiosEnDesarrollo = [] } = mapaImpacto;
      
      const colorEjecutado = '#10b981'; // bg-emerald-500
      const colorDesarrollo = '#fbbf24'; // bg-amber-400

      municipiosEjecutados.forEach(id => {
        if (!munToProjects[id]) munToProjects[id] = [];
        munToProjects[id].push(proyecto);

        if (!paintedMuns.has(id)) {
          const echartsName = idToName[id] || id;
          mapData.push({
            name: echartsName,
            divipola: id,
            value: 1,
            itemStyle: { areaColor: colorEjecutado, borderColor: '#ffffff', borderWidth: 1 }
          });
          paintedMuns.add(id);
        }
      });

      municipiosEnDesarrollo.forEach(id => {
        if (!munToProjects[id]) munToProjects[id] = [];
        munToProjects[id].push(proyecto);

        if (!paintedMuns.has(id)) {
          const echartsName = idToName[id] || id;
          mapData.push({
            name: echartsName,
            divipola: id,
            value: 2,
            itemStyle: { areaColor: colorDesarrollo, borderColor: '#ffffff', borderWidth: 0.5 }
          });
          paintedMuns.add(id);
        }
      });
    });

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e2e8f0',
        extraCssText: 'width: 280px; white-space: normal; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); border-radius: 12px;',
        textStyle: { color: '#334155' },
        formatter: (params) => {
          const divipola = params.data?.divipola;
          if (!divipola || !munToProjects[divipola]) return null;
          const projs = munToProjects[divipola];

          let zonaTitulo = params.name;
          for (let p of projs) {
            if (p.mapaImpacto?.datosZonas?.[divipola]?.titulo) {
              zonaTitulo = p.mapaImpacto.datosZonas[divipola].titulo;
              break;
            }
          }

          const maxProjectsToShow = 3;
          const displayedProjs = projs.slice(0, maxProjectsToShow);
          const remainingProjs = projs.length - maxProjectsToShow;

          const projectListHTML = displayedProjs.map(p =>
            `<li style="margin-bottom: 6px; white-space: normal; line-height: 1.4;"><span style="color: #64748b; font-size: 12px;">• “${p.hero?.title || 'Proyecto'}”</span></li>`
          ).join('');

          const remainingHTML = remainingProjs > 0
            ? `<li style="margin-top: 6px;"><span style="color: #10b981; font-size: 11px; font-weight: bold;">+ ${remainingProjs} proyecto${remainingProjs > 1 ? 's' : ''} más...</span></li>`
            : '';

          return `
            <div style="padding: 4px; width: 250px; white-space: normal; word-wrap: break-word;">
              <strong style="color: #0f172a; font-size: 14px; line-height: 1.2; display: block; margin-bottom: 4px;">${zonaTitulo}</strong>
              <span style="color: #10b981; font-size: 11px; font-weight: bold; display: block; margin-bottom: 8px;">${projs.length} Proyecto${projs.length > 1 ? 's' : ''}</span>
              <ul style="margin: 0; padding-left: 0; list-style: none;">
                ${projectListHTML}
                ${remainingHTML}
              </ul>
              <span style="color: #0f172a; font-size: 11px; margin-top: 10px; display: block; border-top: 1px solid #e2e8f0; padding-top: 6px;">Click para filtrar catálogo</span>
            </div>
          `;
        }
      },
      series: [
        {
          name: 'Municipios',
          type: 'map',
          map: 'colombia_municipios',
          roam: true,
          zoom: 1.2,
          itemStyle: {
            areaColor: '#f1f5f9',
            borderColor: '#e2e8f0',
            borderWidth: 0.5
          },
          emphasis: {
            itemStyle: { areaColor: '#e2e8f0' },
            label: { show: false }
          },
          data: mapData
        }
      ]
    };

    chart.setOption(option, true);

    chart.off('click');
    chart.on('click', function (params) {
      const divipola = params.data?.divipola;
      if (divipola && munToProjects[divipola] && onProjectClick) {
        onProjectClick(divipola); 
      }
    });

    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMapLoaded, proyectos, onProjectClick]);

  return (
    <div className="w-full relative aspect-square md:aspect-auto min-h-[550px] rounded-2xl overflow-hidden bg-transparent">
      {!isMapLoaded && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 animate-pulse bg-slate-50">
          Inicializando Mapa Nacional...
        </div>
      )}
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-red-50">
          Error cargando la topología.
        </div>
      )}
      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100%', minHeight: '550px', visibility: isMapLoaded ? 'visible' : 'hidden' }} 
      />
    </div>
  );
}
