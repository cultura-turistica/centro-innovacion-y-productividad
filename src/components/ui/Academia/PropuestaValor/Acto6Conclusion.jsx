import React, { useState } from 'react';
import Link from 'next/link';
import NickyCharacter from './NickyCharacter';
import { ArrowLeft, Award } from 'lucide-react';

export default function Acto6Conclusion({ data, onReplayWithOther, onBack }) {
  const [activeTab, setActiveTab] = useState('rules'); // 'rules' | 'comparison'

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-6 text-center animate-in fade-in duration-500">
      <div className="space-y-2 w-full">
        <div className="flex items-center justify-between w-full">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Pilar 4
            </button>
          ) : <div />}
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-emerald-300 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Fin de la Simulación: Maestría Strategyzer
          </span>
          <div className="w-28 hidden sm:block" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
          La Tríada de la Propuesta de Valor
        </h2>
        <p className="text-sm font-medium text-slate-600 max-w-md mx-auto">
          Has recorrido los 4 pilares esenciales de Alexander Osterwalder e Yves Pigneur.
        </p>
      </div>

      <div className="w-full bg-white p-6 md:p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-6">
        
        {/* Fiesta de los 3 Muñequitos Celebrando con colores 100% diferenciados */}
        <div className="flex justify-center items-end gap-6 pb-4 border-b border-slate-200">
          <div className="flex flex-col items-center">
            <NickyCharacter color="blue" hat="bucket" mood="happy" size={56} isJumping={true} />
            <span className="text-[10px] font-black uppercase text-blue-700 mt-1">Martín</span>
          </div>
          <div className="flex flex-col items-center">
            <NickyCharacter color="pink" hat="beret" mood="excited" size={60} isJumping={true} />
            <span className="text-[10px] font-black uppercase text-rose-700 mt-1">Elena</span>
          </div>
          <div className="flex flex-col items-center">
            <NickyCharacter color="amber" hat="safari" mood="money" size={56} isJumping={true} />
            <span className="text-[10px] font-black uppercase text-amber-700 mt-1">Familia</span>
          </div>
        </div>

        {/* Pestañas de Vista: Reglas de Oro vs. Matriz de Contraste */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 rounded-full border-[2px] font-black text-xs cursor-pointer transition-all ${
              activeTab === 'rules'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            📜 Las 3 Reglas de Oro
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-full border-[2px] font-black text-xs cursor-pointer transition-all ${
              activeTab === 'comparison'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            ⚖️ Matriz de Contraste: “El Cliente Abstracto No Existe”
          </button>
        </div>

        {/* PESTAÑA 1: REGLAS DE ORO */}
        {activeTab === 'rules' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left animate-in fade-in">
            {data.rules.map((rule) => (
              <div
                key={rule.number}
                className="p-5 rounded-[24px] border-[2px] border-slate-900 bg-amber-50/50 shadow-[3px_3px_0px_0px_#0f172a] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-indigo-600 block mb-2 font-mono">
                    #{rule.number}
                  </span>
                  <h4 className="text-xs md:text-sm font-black text-slate-900 mb-1.5 leading-snug">
                    {rule.title}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-600 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PESTAÑA 2: MATRIZ DE CONTRASTE ENTRE LOS 3 ARQUETIPOS */}
        {activeTab === 'comparison' && (
          <div className="overflow-x-auto text-left animate-in fade-in">
            <table className="w-full text-xs border-[2px] border-slate-900 rounded-[20px] overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-3 border-r border-slate-700 font-black">Dimensión</th>
                  <th className="p-3 border-r border-slate-700 font-black text-blue-300">Martín (Ejecutivo)</th>
                  <th className="p-3 border-r border-slate-700 font-black text-rose-300">Elena (Investigadora)</th>
                  <th className="p-3 font-black text-amber-300">Familia Ramírez (Padres)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-black bg-slate-50 border-r border-slate-200">Trabajo Principal</td>
                  <td className="p-3 border-r border-slate-200">Huir del ruido, desconectar mente y descansar.</td>
                  <td className="p-3 border-r border-slate-200">Aprender técnicas ancestrales con maestras vivas.</td>
                  <td className="p-3">Que los niños conozcan el campo sin pantallas.</td>
                </tr>
                <tr>
                  <td className="p-3 font-black bg-slate-50 border-r border-slate-200">Dolor Extremo</td>
                  <td className="p-3 border-r border-slate-200 text-rose-700 font-bold">Música vecina estridente y trocha sin señal.</td>
                  <td className="p-3 border-r border-slate-200 text-rose-700 font-bold">Turismo de parque temático y explotación.</td>
                  <td className="p-3 text-rose-700 font-bold">Accidente infantil o intoxicación sin médico a 3h.</td>
                </tr>
                <tr>
                  <td className="p-3 font-black bg-slate-50 border-r border-slate-200">Solución Ganadora</td>
                  <td className="p-3 border-r border-slate-200">Silencio 24/7 + Auxilio 4x4 + Café de origen.</td>
                  <td className="p-3 border-r border-slate-200">Círculo de palabra en maloca + Pago directo.</td>
                  <td className="p-3">Senderos con barandas + Paramédico + Huerta lúdica.</td>
                </tr>
                <tr>
                  <td className="p-3 font-black bg-slate-50 border-r border-slate-200">Si haces un “producto para todos”</td>
                  <td className="p-3 border-r border-slate-200 text-slate-500">Odia el bullicio de los niños y los bailes del pueblo.</td>
                  <td className="p-3 border-r border-slate-200 text-slate-500">Odia los lujos impersonales y el consumismo.</td>
                  <td className="p-3 text-slate-500">No puede llevar a niños a retiros de silencio o ayuno.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Oportunidad de Certificación Oficial */}
        <div className="p-6 md:p-8 rounded-[28px] border-[2.5px] border-slate-900 bg-gradient-to-br from-indigo-50 via-purple-50 to-emerald-50 shadow-[4px_4px_0px_0px_#0f172a] text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" /> Certificación Oficial Disponible
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900">
            ¿Listo para certificar tus competencias en Diseño de la Propuesta de Valor?
          </h3>
          <p className="text-xs md:text-sm font-medium text-slate-600 max-w-xl mx-auto leading-relaxed">
            Has completado la simulación. Presenta la evaluación oficial de 10 preguntas tipo caso (2 horas certificables) y obtén tu certificado oficial con sello de verificación criptográfica de Cultura T.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/academia/cursos/propuesta-valor/certificacion"
              className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full border-[2.5px] border-slate-900 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              <Award className="w-4 h-4" /> Presentar Examen y Certificarme (2 Horas)
            </Link>
          </div>
        </div>

        {/* Acciones de Cierre */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
          {onBack && (
            <button
              onClick={onBack}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-white text-slate-800 font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Pilar 4
            </button>
          )}
          <button
            onClick={onReplayWithOther}
            className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-amber-300 text-slate-900 font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
          >
            ↻ Probar con Otro Personaje
          </button>
          <Link
            href="/academia/cursos/propuesta-valor/certificacion"
            className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-indigo-600 text-white font-black text-xs uppercase tracking-wider hover:bg-indigo-700 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] text-center inline-flex items-center justify-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5" /> Certificarme
          </Link>
          <Link
            href="/academia"
            className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] text-center"
          >
            Academia
          </Link>
        </div>
      </div>
    </div>
  );
}
