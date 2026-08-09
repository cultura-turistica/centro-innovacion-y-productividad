"use client";
import React, { useState } from 'react';
import { Target, AlertTriangle } from 'lucide-react';

const tabsData = {
  ideal: {
    id: 'ideal',
    label: "Visión Idealizada",
    title: "Sinergia Perfecta",
    description: "Toda la vereda respeta los estatutos de convivencia. Los guías, cocineras y dueños de fincas dividen los ingresos con exactitud matemática, y reinvierten felizmente en el salón comunal.",
    icon: Target,
    colors: {
      btnActiveBg: "bg-emerald-600",
      btnActiveText: "text-white",
      btnIdleBg: "bg-slate-100",
      btnIdleText: "text-slate-500",
      panelBg: "bg-emerald-50",
      panelBorder: "border-emerald-200",
      iconColor: "text-emerald-500",
      titleColor: "text-emerald-800",
      descColor: "text-emerald-700"
    }
  },
  desgaste: {
    id: 'desgaste',
    label: "Desgaste Práctico",
    title: "Fatiga Comunitaria",
    description: "Aparición de liderazgos caciquistas que acaparan a los turistas. Las familias se cansan de las largas reuniones, surge la desconfianza por el manejo de la caja menor y se rompe el tejido social por la envidia económica.",
    icon: AlertTriangle,
    colors: {
      btnActiveBg: "bg-rose-600",
      btnActiveText: "text-white",
      btnIdleBg: "bg-slate-100",
      btnIdleText: "text-slate-500",
      panelBg: "bg-rose-50",
      panelBorder: "border-rose-200",
      iconColor: "text-rose-500",
      titleColor: "text-rose-800",
      descColor: "text-rose-700"
    }
  }
};

export default function ReflectionTabs() {
  const [activeTab, setActiveTab] = useState('ideal');

  const currentData = tabsData[activeTab];
  const CurrentIcon = currentData.icon;

  return (
    <div className="py-16">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wide uppercase mb-6">
            Dinámica de Reflexión
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">De la Teoría a la Práctica</h2>
          <p className="text-lg text-slate-600">
            Selecciona una pestaña para comprender la fricción natural entre las reglas de papel y los desafíos humanos en las veredas.
          </p>
        </div>

        {/* Botones de Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
          {Object.values(tabsData).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300
                  ${isActive ? `${tab.colors.btnActiveBg} ${tab.colors.btnActiveText} shadow-lg scale-105` : `${tab.colors.btnIdleBg} ${tab.colors.btnIdleText} hover:bg-slate-200`}
                `}
              >
                <Icon size={20} className={isActive ? "animate-pulse" : ""} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panel de Contenido */}
        <div className={`
          relative z-10 p-10 md:p-16 rounded-3xl transition-all duration-500 border-2 text-center
          ${currentData.colors.panelBg} ${currentData.colors.panelBorder}
        `}>
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeTab}>
            <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 ${currentData.colors.iconColor}`}>
              <CurrentIcon size={40} />
            </div>
            <h3 className={`text-3xl font-bold mb-4 ${currentData.colors.titleColor}`}>
              {currentData.title}
            </h3>
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${currentData.colors.descColor}`}>
              {currentData.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
