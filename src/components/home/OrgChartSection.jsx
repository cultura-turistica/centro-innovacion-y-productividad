import React from 'react';
import { Target, Shield, Coins, Monitor, FileText } from 'lucide-react';

export default function OrgChartSection() {
  return (
    <section className="px-6 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Estructura Organizacional</h2>
        <div className="w-16 h-1 bg-indigo-100 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col items-center">
        {/* Raíz */}
        <div className="relative group z-10">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-white px-8 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">CULTURA T S.A.S.</span>
            <span className="text-lg font-bold text-slate-900">Dirección General</span>
          </div>
        </div>

        {/* Línea vertical principal (conecta raíz a bifurcación) */}
        <div className="w-px h-10 lg:h-12 bg-slate-200"></div>

        {/* Contenedor Principal: Columna en móvil, Fila en Desktop */}
        <div className="w-full relative flex flex-col lg:flex-row justify-center gap-10 lg:gap-0 lg:pt-8">
          
          {/* Línea horizontal puente en desktop (escondida en móvil) */}
          <div className="hidden lg:block absolute top-0 w-[50%] h-px bg-slate-200 left-1/4"></div>

          {/* ===================== ÁREA MISIONAL ===================== */}
          <div className="flex-1 flex flex-col items-center relative lg:w-1/2">
            {/* Conector vertical superior en desktop */}
            <div className="hidden lg:block absolute -top-8 w-px h-8 bg-slate-200"></div>
            
            <div className="bg-indigo-50 px-6 py-4 rounded-xl border border-indigo-100 flex flex-col items-center mb-6 z-10 w-full max-w-[280px] text-center shadow-sm">
              <Target className="w-5 h-5 text-indigo-500 mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1">ÁREA MISIONAL</span>
              <span className="text-sm font-bold text-indigo-900">Dirección de Operaciones e Innovación</span>
            </div>

            {/* Ramas de Área Misional */}
            <div className="flex flex-col gap-4 w-full max-w-[320px] lg:max-w-none lg:w-full lg:px-8 relative before:content-[''] before:absolute before:left-4 lg:before:left-12 before:top-4 before:bottom-4 before:w-px before:bg-indigo-200">
              
              <div className="relative pl-10 lg:pl-20">
                <div className="absolute left-4 lg:left-12 top-1/2 w-6 lg:w-8 h-px bg-indigo-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full relative z-10">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Núcleo Integrado</div>
                  <div className="text-sm font-semibold text-slate-900">Sinergia Proyectos e Innovación</div>
                </div>
              </div>

              <div className="relative pl-10 lg:pl-20">
                <div className="absolute left-4 lg:left-12 top-1/2 w-6 lg:w-8 h-px bg-indigo-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full relative z-10">
                  <div className="text-sm font-semibold text-slate-900 mb-3">Gerencia de Proyectos</div>
                  <div className="flex flex-col gap-2">
                    <span className="bg-indigo-50/80 px-3 py-2 rounded-lg text-xs text-indigo-700 font-medium">Subproceso Estructuración</span>
                    <span className="bg-indigo-50/80 px-3 py-2 rounded-lg text-xs text-indigo-700 font-medium">Subproceso Implementación</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 lg:pl-20">
                <div className="absolute left-4 lg:left-12 top-1/2 w-6 lg:w-8 h-px bg-indigo-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full relative z-10">
                  <div className="text-sm font-semibold text-slate-900 mb-3">CIP Cultura T</div>
                  <div className="flex flex-col gap-2">
                    <span className="bg-rose-50/80 px-3 py-2 rounded-lg text-xs text-rose-700 font-medium">Línea Desarrollo Empresarial</span>
                    <span className="bg-rose-50/80 px-3 py-2 rounded-lg text-xs text-rose-700 font-medium">Línea Transferencia Conocimiento</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Separador puente en móvil (conecta Misional y Apoyo verticalmente) */}
          <div className="lg:hidden w-px h-10 bg-slate-200 mx-auto"></div>

          {/* ===================== ÁREA DE APOYO ===================== */}
          <div className="flex-1 flex flex-col items-center relative lg:w-1/2">
            {/* Conector vertical superior en desktop */}
            <div className="hidden lg:block absolute -top-8 w-px h-8 bg-slate-200"></div>
            
            <div className="bg-emerald-50 px-6 py-4 rounded-xl border border-emerald-100 flex flex-col items-center mb-6 z-10 w-full max-w-[280px] text-center shadow-sm">
              <Shield className="w-5 h-5 text-emerald-500 mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">ÁREA DE APOYO</span>
            </div>

            {/* Ramas de Área de Apoyo */}
            <div className="flex flex-col gap-4 w-full max-w-[320px] lg:max-w-none lg:w-full lg:px-8 relative before:content-[''] before:absolute before:left-4 lg:before:right-12 lg:before:left-auto before:top-4 before:bottom-4 before:w-px before:bg-emerald-200">
              
              <div className="relative pl-10 lg:pl-0 lg:pr-20 text-left lg:text-right flex lg:justify-end">
                <div className="absolute left-4 lg:left-auto lg:right-12 top-1/2 w-6 lg:w-8 h-px bg-emerald-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full lg:max-w-[320px] relative z-10">
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end gap-3 mb-2">
                    <div className="text-sm font-semibold text-slate-900 flex-1 lg:flex-none">Financiera y Contable</div>
                    <Coins className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Nómina, Fiscalización, Facturación</div>
                </div>
              </div>

              <div className="relative pl-10 lg:pl-0 lg:pr-20 text-left lg:text-right flex lg:justify-end">
                <div className="absolute left-4 lg:left-auto lg:right-12 top-1/2 w-6 lg:w-8 h-px bg-emerald-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full lg:max-w-[320px] relative z-10">
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end gap-3 mb-2">
                    <div className="text-sm font-semibold text-slate-900 flex-1 lg:flex-none">Tecnologías - TICs</div>
                    <Monitor className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">Soporte Administrativo, Entornos Analítica de Datos, Ecosistema Web E-learning</div>
                </div>
              </div>

              <div className="relative pl-10 lg:pl-0 lg:pr-20 text-left lg:text-right flex lg:justify-end">
                <div className="absolute left-4 lg:left-auto lg:right-12 top-1/2 w-6 lg:w-8 h-px bg-emerald-200 -z-10"></div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm w-full lg:max-w-[320px] relative z-10">
                  <div className="flex flex-row-reverse lg:flex-row items-center justify-end gap-3 mb-2">
                    <div className="text-sm font-semibold text-slate-900 flex-1 lg:flex-none">Jurídica y Contratación</div>
                    <FileText className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Asesoría y Contratación</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
