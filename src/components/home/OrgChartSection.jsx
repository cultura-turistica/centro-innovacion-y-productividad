import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function OrgChartSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Encabezado limpio */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Estructura Organizacional
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      {/* DIAGRAMA DE FLUJO FIEL (LEFT-TO-RIGHT TREE DIAGRAM) */}
      <div className="relative bg-gradient-to-b from-slate-50/60 to-white border border-slate-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm">
        
        {/* Indicador de desplazamiento en pantallas pequeñas */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 xl:hidden">
          <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
            <Maximize2 className="w-3.5 h-3.5" />
            Desliza horizontalmente para explorar el organigrama completo
          </span>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300">
          <div className="min-w-[1020px] max-w-full flex items-center justify-start xl:justify-center py-6 px-2 relative mx-auto">

            {/* NODO RAÍZ: DIRECCIÓN GENERAL */}
            <div className="flex flex-col justify-center items-center flex-shrink-0 z-10">
              <div className="bg-[#1e3a8a] text-white px-4 py-3.5 rounded-xl shadow-lg border border-blue-900 text-center w-44 transition-transform hover:scale-105 duration-200">
                <div className="text-[10px] font-bold tracking-wider uppercase text-blue-200 mb-0.5">
                  CULTURA T SAS
                </div>
                <div className="text-sm font-extrabold tracking-tight">
                  Dirección General
                </div>
              </div>
            </div>

            {/* CONECTORES DESDE DIRECCIÓN GENERAL A MISIONAL Y APOYO */}
            <div className="w-12 h-[460px] relative flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 48 460" fill="none">
                {/* Hacia Área Misional (arriba) */}
                <path
                  d="M 0 230 C 24 230, 24 92, 42 92"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  fill="none"
                />
                <polygon points="40,88 46,92 40,96" fill="#2563eb" />

                {/* Hacia Área de Apoyo (abajo) */}
                <path
                  d="M 0 230 C 24 230, 24 360, 42 360"
                  stroke="#64748b"
                  strokeWidth="2.5"
                  fill="none"
                />
                <polygon points="40,356 46,360 40,364" fill="#64748b" />
              </svg>
            </div>

            {/* CONTENEDOR DE LAS 2 RAMAS PRINCIPALES */}
            <div className="flex flex-col gap-10 flex-shrink-0">

              {/* ========================================================= */}
              {/* 1. RAMA ÁREA MISIONAL */}
              {/* ========================================================= */}
              <div className="flex items-center relative">
                
                {/* Nodo: ÁREA MISIONAL */}
                <div className="bg-[#2563eb] text-white px-3.5 py-3 rounded-xl shadow-md border border-blue-600 text-center font-bold text-xs tracking-wide w-36 flex-shrink-0">
                  ÁREA MISIONAL
                </div>

                {/* Flecha a Dirección de Operaciones e Innovación */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-full h-4" viewBox="0 0 32 16">
                    <line x1="0" y1="8" x2="26" y2="8" stroke="#2563eb" strokeWidth="2.2" />
                    <polygon points="24,4 30,8 24,12" fill="#2563eb" />
                  </svg>
                </div>

                {/* Nodo: Dirección de Operaciones e Innovación */}
                <div className="bg-[#1d4ed8] text-white px-3 py-3 rounded-xl shadow-md border border-blue-700 text-center font-semibold text-[11px] leading-snug w-40 flex-shrink-0">
                  Dirección de Operaciones e Innovación
                </div>

                {/* Conector curvo hacia Gerencia de Proyectos y CIP Cultura T */}
                <div className="w-10 h-44 relative flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 40 176" fill="none">
                    <path
                      d="M 0 88 C 20 88, 20 38, 34 38"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                    <polygon points="31,34 37,38 31,42" fill="#2563eb" />
                    
                    <path
                      d="M 0 88 C 20 88, 20 138, 34 138"
                      stroke="#2563eb"
                      strokeWidth="2"
                    />
                    <polygon points="31,134 37,138 31,142" fill="#2563eb" />
                  </svg>
                </div>

                {/* ======================================================= */}
                {/* RECUADRO DASHED: NÚCLEO INTEGRADO (Enclosing 2 nodes)   */}
                {/* ======================================================= */}
                <div className="relative border-2 border-dashed border-[#1d4ed8] bg-blue-50/40 rounded-2xl p-3.5 pt-9 flex flex-col justify-around gap-6 flex-shrink-0 shadow-sm">
                  {/* Título superior del Núcleo Integrado */}
                  <div className="absolute -top-3.5 left-1 right-1 text-center pointer-events-none">
                    <span className="inline-block bg-white border border-blue-400 text-blue-950 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-xs tracking-tight">
                      Núcleo Integrado: Sinergia constante entre Proyectos e Innovación
                    </span>
                  </div>

                  {/* Nodo 1 en Núcleo: Gerencia de Proyectos */}
                  <div className="bg-[#2563eb] text-white px-3 py-2.5 rounded-xl shadow font-semibold text-xs text-center w-40 flex-shrink-0">
                    Gerencia de Proyectos
                  </div>

                  {/* Nodo 2 en Núcleo: CIP Cultura T */}
                  <div className="bg-[#2563eb] text-white px-3 py-2.5 rounded-xl shadow font-semibold text-xs text-center w-40 flex-shrink-0">
                    CIP Cultura T
                  </div>
                </div>

                {/* FLECHAS SALIENTES DESDE EL NÚCLEO A LOS SUBPROCESOS/LÍNEAS */}
                <div className="flex flex-col justify-around gap-6 pl-2 flex-shrink-0">
                  
                  {/* Bifurcación 1: Desde Gerencia de Proyectos hacia sus 2 Subprocesos */}
                  <div className="flex items-center">
                    <div className="w-8 h-20 relative flex-shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 32 80" fill="none">
                        <path d="M 0 40 C 16 40, 16 18, 26 18" stroke="#2563eb" strokeWidth="1.8" />
                        <polygon points="24,15 29,18 24,21" fill="#2563eb" />
                        <path d="M 0 40 C 16 40, 16 62, 26 62" stroke="#2563eb" strokeWidth="1.8" />
                        <polygon points="24,59 29,62 24,65" fill="#2563eb" />
                      </svg>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f1f5f9] hover:bg-blue-50 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Subproceso Estructuración
                      </div>
                      <div className="bg-[#f1f5f9] hover:bg-blue-50 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Subproceso Implementación
                      </div>
                    </div>
                  </div>

                  {/* Bifurcación 2: Desde CIP Cultura T hacia sus 2 Líneas */}
                  <div className="flex items-center">
                    <div className="w-8 h-20 relative flex-shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 32 80" fill="none">
                        <path d="M 0 40 C 16 40, 16 18, 26 18" stroke="#2563eb" strokeWidth="1.8" />
                        <polygon points="24,15 29,18 24,21" fill="#2563eb" />
                        <path d="M 0 40 C 16 40, 16 62, 26 62" stroke="#2563eb" strokeWidth="1.8" />
                        <polygon points="24,59 29,62 24,65" fill="#2563eb" />
                      </svg>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f1f5f9] hover:bg-blue-50 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Línea Dllo. Empresarial
                      </div>
                      <div className="bg-[#f1f5f9] hover:bg-blue-50 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Línea Transferencia Conocimiento
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* ========================================================= */}
              {/* 2. RAMA ÁREA DE APOYO */}
              {/* ========================================================= */}
              <div className="flex items-center relative">
                
                {/* Nodo: ÁREA DE APOYO */}
                <div className="bg-[#475569] text-white px-3.5 py-3 rounded-xl shadow-md border border-slate-700 text-center font-bold text-xs tracking-wide w-36 flex-shrink-0">
                  ÁREA DE APOYO
                </div>

                {/* Bifurcación hacia 3 departamentos de apoyo */}
                <div className="w-14 h-56 relative flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 56 224" fill="none">
                    {/* Línea hacia Financiera y Contable */}
                    <path d="M 0 112 C 28 112, 28 26, 48 26" stroke="#64748b" strokeWidth="2" />
                    <polygon points="45,22 51,26 45,30" fill="#64748b" />
                    
                    {/* Línea hacia Tecnologías - TICs */}
                    <path d="M 0 112 L 48 112" stroke="#64748b" strokeWidth="2" />
                    <polygon points="45,108 51,112 45,116" fill="#64748b" />

                    {/* Línea hacia Jurídica y Contratación */}
                    <path d="M 0 112 C 28 112, 28 198, 48 198" stroke="#64748b" strokeWidth="2" />
                    <polygon points="45,194 51,198 45,202" fill="#64748b" />
                  </svg>
                </div>

                {/* Bloque de los 3 Departamentos de Apoyo con sus subnodos */}
                <div className="flex flex-col gap-5 flex-shrink-0">
                  
                  {/* Rama 1: Financiera y Contable */}
                  <div className="flex items-center">
                    <div className="bg-[#475569] text-white px-3 py-2.5 rounded-xl shadow font-semibold text-xs text-center w-44 flex-shrink-0">
                      Financiera y Contable
                    </div>
                    <div className="w-8 h-4 flex items-center justify-center flex-shrink-0">
                      <svg className="w-full h-4" viewBox="0 0 32 16">
                        <line x1="0" y1="8" x2="26" y2="8" stroke="#64748b" strokeWidth="2" />
                        <polygon points="24,4 30,8 24,12" fill="#64748b" />
                      </svg>
                    </div>
                    <div className="bg-[#f1f5f9] hover:bg-slate-200 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                      Nómina, Fiscalización, Facturación
                    </div>
                  </div>

                  {/* Rama 2: Tecnologías - TICs */}
                  <div className="flex items-center">
                    <div className="bg-[#475569] text-white px-3 py-2.5 rounded-xl shadow font-semibold text-xs text-center w-44 flex-shrink-0">
                      Tecnologías - TICs
                    </div>
                    <div className="w-8 h-26 relative flex-shrink-0">
                      <svg className="w-full h-full" viewBox="0 0 32 104" fill="none">
                        <path d="M 0 52 C 16 52, 16 16, 26 16" stroke="#64748b" strokeWidth="1.8" />
                        <polygon points="24,13 29,16 24,19" fill="#64748b" />
                        <line x1="0" y1="52" x2="26" y2="52" stroke="#64748b" strokeWidth="1.8" />
                        <polygon points="24,49 29,52 24,55" fill="#64748b" />
                        <path d="M 0 52 C 16 52, 16 88, 26 88" stroke="#64748b" strokeWidth="1.8" />
                        <polygon points="24,85 29,88 24,91" fill="#64748b" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-[#f1f5f9] hover:bg-slate-200 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Soporte Administrativo
                      </div>
                      <div className="bg-[#f1f5f9] hover:bg-slate-200 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Entornos Analítica de Datos
                      </div>
                      <div className="bg-[#f1f5f9] hover:bg-slate-200 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                        Ecosistema Web E-learning
                      </div>
                    </div>
                  </div>

                  {/* Rama 3: Jurídica y Contratación */}
                  <div className="flex items-center">
                    <div className="bg-[#475569] text-white px-3 py-2.5 rounded-xl shadow font-semibold text-xs text-center w-44 flex-shrink-0">
                      Jurídica y Contratación
                    </div>
                    <div className="w-8 h-4 flex items-center justify-center flex-shrink-0">
                      <svg className="w-full h-4" viewBox="0 0 32 16">
                        <line x1="0" y1="8" x2="26" y2="8" stroke="#64748b" strokeWidth="2" />
                        <polygon points="24,4 30,8 24,12" fill="#64748b" />
                      </svg>
                    </div>
                    <div className="bg-[#f1f5f9] hover:bg-slate-200 border border-slate-300 shadow-xs px-3.5 py-1.5 rounded-xl text-slate-800 text-[11px] font-semibold whitespace-nowrap transition-colors">
                      Asesoría y Contratación
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
