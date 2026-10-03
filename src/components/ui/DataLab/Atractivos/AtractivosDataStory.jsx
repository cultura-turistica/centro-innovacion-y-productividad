"use client";
import React, { useState } from 'react';
import { 
  ArrowRight,
  SlidersHorizontal,
  Compass,
  Building,
  TreePine,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { DATA_STORY_ACTS } from '../../../../data/laboratorios/atractivos';

export default function AtractivosDataStory({ onSwitchToDashboard }) {
  const [activeTab, setActiveTab] = useState('acto-1');
  const [selectedVarianza, setSelectedVarianza] = useState(0);
  const [selectedFormula, setSelectedFormula] = useState('cultural-material');
  const [selectedComposicion, setSelectedComposicion] = useState('cultural');

  const acto1 = DATA_STORY_ACTS[0];
  const acto2 = DATA_STORY_ACTS[1];
  const acto3 = DATA_STORY_ACTS[2];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* NAVEGACIÓN EDITORIAL DE CAPÍTULOS */}
      <div className="border-b border-neutral-200 mb-10">
        <nav className="flex space-x-8 overflow-x-auto pb-px" aria-label="Capítulos de la investigación">
          {DATA_STORY_ACTS.map((acto) => {
            const isActive = activeTab === acto.id;
            return (
              <button
                key={acto.id}
                onClick={() => setActiveTab(acto.id)}
                className={`group inline-flex items-center py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
              >
                <span className={`mr-2.5 font-mono text-xs ${isActive ? 'text-neutral-900 font-bold' : 'text-neutral-400'}`}>
                  {acto.numero}
                </span>
                <span>{acto.etiqueta}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ============================================================== */}
      {/* ACTO 1: FRONTERA DE SIGNIFICANCIA                             */}
      {/* ============================================================== */}
      {activeTab === 'acto-1' && (
        <section className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs transition-all">
          
          {/* Header editorial sin redundancias */}
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
              Capítulo 01 / Criterio Ontológico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-3">
              {acto1.titulo}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {acto1.bajada}
            </p>
          </div>

          {/* Gráfico de distribución proporcional de mercado */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
              <span>Recursos Locales: 62.90%</span>
              <span className="font-semibold text-neutral-900">Umbral MinCIT ≥ 12 pts</span>
              <span>Atractivos de Mercado: 37.10%</span>
            </div>
            
            {/* Barra visual de proporción */}
            <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden flex">
              <div 
                className="bg-amber-600 h-full w-[62.9%] transition-all duration-700" 
                title="Recursos Turísticos (62.90%)"
              />
              <div 
                className="bg-neutral-800 h-full w-[37.1%] transition-all duration-700" 
                title="Atractivos Turísticos (37.10%)"
              />
            </div>
          </div>

          {/* Comparativa analítica en dos columnas sin duplicación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100 mb-10">
            
            {/* Columna Recursos */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-neutral-900">
                  {acto1.recursos.porcentaje}
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  ({acto1.recursos.cantidad.toLocaleString()} bienes)
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                {acto1.recursos.titulo} <span className="font-normal text-xs text-neutral-500">• {acto1.recursos.escala}</span>
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {acto1.recursos.sintesis}
              </p>
            </div>

            {/* Columna Atractivos */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-neutral-900">
                  {acto1.atractivos.porcentaje}
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  ({acto1.atractivos.cantidad.toLocaleString()} bienes)
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                {acto1.atractivos.titulo} <span className="font-normal text-xs text-neutral-500">• {acto1.atractivos.escala}</span>
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {acto1.atractivos.sintesis}
              </p>
            </div>
          </div>

          {/* Desglose de las 4 escalas en tira tipográfica limpia */}
          <div className="pt-6 border-t border-neutral-100">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-4">
              Desglose de los 8,345 registros por jerarquía oficial
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {acto1.desgloseSignificado.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/60">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-800">{item.nivel}</span>
                    <span className="font-mono text-neutral-500">{item.puntos}</span>
                  </div>
                  <div className="text-lg font-bold text-neutral-900 mb-1">
                    {item.porcentaje}
                  </div>
                  <span className="text-[11px] text-neutral-500 block">
                    {item.cantidad.toLocaleString()} registros
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* ACTO 2: AUTOPSIA DEL PUNTAJE (70/30 Y VARIANZA)               */}
      {/* ============================================================== */}
      {activeTab === 'acto-2' && (
        <section className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs transition-all">
          
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
              Capítulo 02 / Ponderación Técnica
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-3">
              {acto2.titulo}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {acto2.bajada}
            </p>
          </div>

          {/* FÓRMULAS NORMATIVAS: PONDERACIÓN CALIDAD (70 PTS) */}
          <div className="mb-10 p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">
                  Criterios de Calidad Técnica (70 puntos máximos)
                </h3>
                <p className="text-xs text-neutral-500">
                  Estructura metodológica diferenciada por tipología de activo:
                </p>
              </div>

              {/* Selector de universo */}
              <div className="inline-flex p-1 bg-white rounded-lg border border-neutral-200 text-xs shadow-2xs">
                {acto2.formulasUniversos.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setSelectedFormula(u.id)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                      selectedFormula === u.id
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {u.nombre}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcriterios de la fórmula activa */}
            {(() => {
              const currentFormula = acto2.formulasUniversos.find(f => f.id === selectedFormula) || acto2.formulasUniversos[0];
              return (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {currentFormula.subcriterios.map((sub, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-neutral-200/70 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono text-neutral-400">0{idx + 1}</span>
                            <span className="text-xs font-mono font-semibold text-neutral-600">{sub.porcentaje}</span>
                          </div>
                          <h4 className="font-semibold text-neutral-900 text-sm mb-1">{sub.nombre}</h4>
                          <p className="text-xs text-neutral-500 leading-relaxed">{sub.desc}</p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between">
                          <span className="text-[11px] text-neutral-400">Puntaje</span>
                          <span className="text-sm font-bold font-mono text-neutral-900">{sub.puntos} pts</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 pt-2 border-t border-neutral-200/50">
                    <span>Ámbito: <strong>{currentFormula.cobertura}</strong></span>
                    <span className="font-mono text-neutral-700">70 pts Calidad + 30 pts Significancia = 100 pts Máx.</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* DOS CASOS DE ESTUDIO EMPÍRICO: VARIANZA Y RUINAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
            
            {/* Caso 1: Varianza Comprimida */}
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                  Patrón 01 / Sesgo Estadístico
                </span>
                <h3 className="text-base font-bold text-neutral-900">
                  Calificación Municipal en Bloque
                </h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Municipios donde múltiples sitios recibieron notas idénticas (desviación típica anómala frente a la media nacional de σ ≈ 13.8):
                </p>
              </div>

              {/* Selector de caso */}
              <div className="flex gap-2">
                {acto2.casosVarianza.map((caso, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVarianza(idx)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      selectedVarianza === idx 
                        ? 'bg-neutral-900 text-white font-bold' 
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {caso.municipio.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Detalle del caso */}
              {(() => {
                const item = acto2.casosVarianza[selectedVarianza];
                return (
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-neutral-900">{item.municipio}</span>
                      <span className="font-mono font-bold text-red-600">σ = {item.desviacion}</span>
                    </div>
                    <div className="text-xs font-mono text-neutral-600">
                      {item.totalBienes} bienes • {item.notaIdentica}
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed pt-2 border-t border-neutral-200/50">
                      {item.diagnostico}
                    </p>
                  </div>
                );
              })()}
            </div>

            {/* Caso 2: Las 17 Ruinas Ilustres */}
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                  Patrón 02 / Paradoja Normativa
                </span>
                <h3 className="text-base font-bold text-neutral-900">
                  Las 17 “Ruinas Ilustres”
                </h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {acto2.ruinasIlustres.sintesis}
                </p>
              </div>

              <div className="space-y-2.5">
                {acto2.ruinasIlustres.ejemplos.map((ej, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">{ej.nombre}</div>
                      <div className="text-[11px] text-neutral-500">{ej.estado}</div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-200/80 text-neutral-800 shrink-0">
                      {ej.jerarquia}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* ACTO 3: SESGO DEL CEMENTO Y SILENCIO DE LA BIODIVERSIDAD      */}
      {/* ============================================================== */}
      {activeTab === 'acto-3' && (
        <section className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12 shadow-xs transition-all">
          
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
              Capítulo 03 / Asimetría Estructural
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-3">
              {acto3.titulo}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {acto3.bajada}
            </p>
          </div>

          {/* VISUALIZACIÓN EDITORIAL: ASIMETRÍA 80% VS 20% */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            
            {/* Lado izquierdo: Switcher de los dos universos con sus datos */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-mono uppercase text-neutral-400">Distribución del Inventario</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedComposicion('cultural')}
                    className={`text-xs px-2.5 py-1 rounded font-medium cursor-pointer transition-colors ${
                      selectedComposicion === 'cultural'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    Patrimonio Cultural (80%)
                  </button>
                  <button
                    onClick={() => setSelectedComposicion('natural')}
                    className={`text-xs px-2.5 py-1 rounded font-medium cursor-pointer transition-colors ${
                      selectedComposicion === 'natural'
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    Sitios Naturales (20%)
                  </button>
                </div>
              </div>

              {/* Contenido según selección */}
              {selectedComposicion === 'cultural' ? (
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {acto3.composicionGlobal.cultural.detalle}
                  </p>
                  <div className="space-y-2">
                    {acto3.desgloseCultural.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-between text-xs">
                        <span className="font-medium text-neutral-800">{item.categoria}</span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-neutral-400">{item.count.toLocaleString()}</span>
                          <span className="font-bold text-neutral-900">{item.porcentaje}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {acto3.composicionGlobal.natural.detalle}
                  </p>
                  <div className="space-y-2">
                    {acto3.desgloseNatural.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/60 flex items-center justify-between text-xs">
                        <span className="font-medium text-neutral-800">{item.categoria}</span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-neutral-400">{item.count.toLocaleString()}</span>
                          <span className="font-bold text-neutral-900">{item.porcentaje}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Lado derecho: El contraste de las dos críticas metodológicas (Diseño sobrio, sin cajas de colores pastel) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase text-neutral-400 block border-b border-neutral-200 pb-3">
                Vicios Metodológicos Documentados
              </span>
              
              <div className="space-y-4">
                {acto3.criticasMetodologicas.map((critica, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                      {critica.titulo}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {critica.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACCIÓN EDITORIAL: ACCESO AL ATLAS Y FICHAS TÉCNICAS */}
          <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500 text-center sm:text-left">
              Continúa con el análisis espacial georreferenciado de los 8,345 registros en el mapa interactivo.
            </p>
            <button
              onClick={onSwitchToDashboard}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-all cursor-pointer shadow-xs active:scale-98"
            >
              <span>Explorar Atlas y Fichas Técnicas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      )}

    </div>
  );
}
