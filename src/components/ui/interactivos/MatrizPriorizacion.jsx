"use client";
import React, { useState } from 'react';
import { Target, CheckCircle2, GripVertical, Info } from 'lucide-react';

export default function MatrizPriorizacion({ data, themeColor = "#10b981" }) {
  const [items, setItems] = useState(
    data?.items?.map(item => ({ ...item, currentQuadrant: null })) || []
  );

  const quadrants = [
    { id: 'q1', name: 'Quick Wins', desc: 'Alto Impacto, Bajo Esfuerzo', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { id: 'q2', name: 'Proyectos Mayores', desc: 'Alto Impacto, Alto Esfuerzo', bg: 'bg-blue-50', border: 'border-blue-200' },
    { id: 'q3', name: 'Rellenos (Fill-ins)', desc: 'Bajo Impacto, Bajo Esfuerzo', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 'q4', name: 'Pozo de Dinero (Evitar)', desc: 'Bajo Impacto, Alto Esfuerzo', bg: 'bg-rose-50', border: 'border-rose-200' },
  ];

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('itemId', id);
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('opacity-50');
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // allow drop
  };

  const handleDrop = (e, quadrantId) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('itemId');
    
    if (itemId) {
      setItems(prev => prev.map(item => 
        item.id === itemId ? { ...item, currentQuadrant: quadrantId } : item
      ));
    }
  };

  const getItemsInQuadrant = (quadrantId) => {
    return items.filter(item => item.currentQuadrant === quadrantId);
  };

  const unassignedItems = items.filter(item => !item.currentQuadrant);
  
  const isComplete = items.length > 0 && unassignedItems.length === 0;

  if (!data) return null;

  return (
    <div className="bg-white rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8" style={{ color: themeColor }} />
          <h3 className="text-3xl font-black text-slate-800 tracking-tight">{data.title || "Matriz de Priorización (Impacto vs Esfuerzo)"}</h3>
        </div>

        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
          {data.instructions}
        </p>

        {/* Unassigned Items (Backlog) */}
        <div className="mb-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-6">
          <h4 className="font-bold text-slate-500 uppercase tracking-wider text-sm mb-4">Backlog de Iniciativas (Arrastra hacia la matriz)</h4>
          <div className="flex flex-wrap gap-4 min-h-[60px]">
            {unassignedItems.length === 0 && (
              <p className="text-slate-400 italic text-sm py-2">Has asignado todas las iniciativas.</p>
            )}
            {unassignedItems.map(item => (
              <div 
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragEnd={handleDragEnd}
                className="bg-white border border-slate-300 shadow-sm px-4 py-3 rounded-xl cursor-grab active:cursor-grabbing flex items-center gap-2 hover:border-emerald-400 hover:shadow-md transition-all select-none"
              >
                <GripVertical className="text-slate-400 w-4 h-4" />
                <span className="font-semibold text-slate-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quadrants.map(q => (
            <div 
              key={q.id}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, q.id)}
              className={`min-h-[150px] rounded-2xl border-2 p-5 flex flex-col ${q.bg} ${q.border} transition-colors`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-slate-800">{q.name}</h4>
                  <span className="text-xs font-semibold text-slate-500">{q.desc}</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-2">
                {getItemsInQuadrant(q.id).map(item => (
                  <div 
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onDragEnd={handleDragEnd}
                    className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm px-3 py-2 rounded-lg cursor-grab active:cursor-grabbing flex items-center gap-2 text-sm select-none"
                  >
                    <GripVertical className="text-slate-400 w-3 h-3 flex-shrink-0" />
                    <span className="font-semibold text-slate-700 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4 animate-in slide-in-from-bottom-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-emerald-900 font-bold text-lg mb-2">¡Matriz Completada!</p>
              <p className="text-emerald-800 text-sm mb-4">Tu Product Roadmap ahora está claro. Ya sabes dónde enfocar a tu equipo mañana mismo.</p>
              
              <div className="bg-white/60 p-4 rounded-xl text-sm text-slate-700 border border-emerald-100">
                <span className="font-bold flex items-center gap-2 mb-2"><Info className="w-4 h-4 text-emerald-600"/> Tip de Producto:</span>
                Ejecuta siempre los <strong>Quick Wins</strong> primero. Evita a toda costa los <strong>Pozos de Dinero</strong> (Alto esfuerzo, bajo impacto).
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
