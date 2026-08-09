"use client";
import React, { useState } from 'react';
import { Target, AlertTriangle, Leaf, Users, Coins, Castle, Music } from 'lucide-react';

const iconMap = {
  Target,
  AlertTriangle,
  Leaf,
  Users,
  Coins,
  Castle,
  Music
};

export default function ReflectionTabs({ data }) {
  const [activeTab, setActiveTab] = useState(data.items[0].id);
  const currentData = data.items.find(t => t.id === activeTab);
  const CurrentIcon = iconMap[currentData.icon] || Target;

  return (
    <div className="py-16">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wide uppercase mb-6">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{data.title}</h2>
          <p className="text-lg text-slate-600">
            {data.description}
          </p>
        </div>

        {/* Botones de Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
          {data.items.map((tab) => {
            const Icon = iconMap[tab.icon] || Target;
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
