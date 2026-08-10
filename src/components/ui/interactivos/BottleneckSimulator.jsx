"use client";
import React, { useState, useEffect } from 'react';
import { Users, AlertTriangle, Settings, Zap, Play } from 'lucide-react';

export default function BottleneckSimulator({ data, themeColor = "#f59e0b" }) {
  // Simulator State
  const [isRunning, setIsRunning] = useState(false);
  const [tick, setTick] = useState(0);
  
  // The 4 stages of our journey
  const [stages, setStages] = useState([
    { id: 'entrada', name: 'Recepción', capacity: 10, count: 0, status: 'normal' },
    { id: 'filtro', name: 'Filtro de Seguridad', capacity: 2, count: 0, status: 'normal' }, // Bottleneck
    { id: 'atractivo', name: 'Atracción Principal', capacity: 15, count: 0, status: 'normal' },
    { id: 'salida', name: 'Salida / Tienda', capacity: 5, count: 0, status: 'normal' },
  ]);

  const [hasAddedStaff, setHasAddedStaff] = useState(false);

  // Simulation Loop
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTick(t => t + 1);
      }, 800); // 800ms per tick
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Logic for flowing tourists from one stage to the next
  useEffect(() => {
    if (tick === 0) return;

    setStages(prevStages => {
      const newStages = [...prevStages.map(s => ({ ...s }))];
      
      // Process backwards so we don't move the same tourist twice in one tick
      for (let i = newStages.length - 1; i >= 0; i--) {
        const stage = newStages[i];
        
        // Update status based on count vs capacity
        if (stage.count >= stage.capacity * 1.5) {
          stage.status = 'critical'; // Over 150% capacity = bottleneck red
        } else if (stage.count >= stage.capacity) {
          stage.status = 'warning'; // 100% capacity = warning yellow
        } else {
          stage.status = 'normal';
        }

        // If not the last stage, try to move people to the next stage
        if (i < newStages.length - 1) {
          const nextStage = newStages[i + 1];
          // We can only process 'capacity' number of people per tick
          const peopleToMove = Math.min(stage.count, stage.capacity);
          
          if (peopleToMove > 0) {
            stage.count -= peopleToMove;
            nextStage.count += peopleToMove;
          }
        } else {
          // Last stage (salida) people leave the system entirely
          const peopleToMove = Math.min(stage.count, stage.capacity);
          stage.count -= peopleToMove;
        }
      }
      return newStages;
    });
  }, [tick]);

  const addTourists = () => {
    setStages(prev => {
      const next = [...prev];
      next[0].count += 15; // Inject 15 people at start
      return next;
    });
    if (!isRunning) setIsRunning(true);
  };

  const fixBottleneck = () => {
    setHasAddedStaff(true);
    setStages(prev => {
      const next = [...prev];
      // Increase capacity of the bottleneck stage
      next[1].capacity = 12;
      return next;
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setTick(0);
    setHasAddedStaff(false);
    setStages([
      { id: 'entrada', name: 'Recepción', capacity: 10, count: 0, status: 'normal' },
      { id: 'filtro', name: 'Filtro de Seguridad', capacity: 2, count: 0, status: 'normal' },
      { id: 'atractivo', name: 'Atracción Principal', capacity: 15, count: 0, status: 'normal' },
      { id: 'salida', name: 'Salida / Tienda', capacity: 5, count: 0, status: 'normal' },
    ]);
  };

  if (!data) return null;

  return (
    <div className="bg-white rounded-[3rem] shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="w-8 h-8" style={{ color: themeColor }} />
          <h3 className="text-3xl font-black text-slate-800 tracking-tight">{data.title || "Simulador de Cuello de Botella"}</h3>
        </div>

        <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
          {data.instructions}
        </p>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button 
            onClick={addTourists}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-md flex items-center gap-2"
          >
            <Users size={20} /> Llegada de 15 Turistas (Bus)
          </button>
          
          <button 
            onClick={fixBottleneck}
            disabled={hasAddedStaff}
            className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
              hasAddedStaff 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border border-emerald-300'
            }`}
          >
            <Settings size={20} /> {hasAddedStaff ? 'Flujo Optimizado' : 'Optimizar Flujo (Aumentar Personal)'}
          </button>

          <button 
            onClick={resetSimulation}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all flex items-center gap-2 ml-auto"
          >
             Reiniciar
          </button>
        </div>

        {/* Simulation Visualizer */}
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl relative">
          {!isRunning && tick === 0 && (
             <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 flex items-center justify-center rounded-3xl">
                <div className="text-center">
                  <Play className="w-16 h-16 text-amber-500 mx-auto mb-4 opacity-80" />
                  <p className="font-bold text-slate-700 text-lg">Presiona "Llegada de Turistas" para iniciar</p>
                </div>
             </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between relative">
            {/* Connection line behind the nodes */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-slate-200 -translate-y-1/2 z-0 rounded-full"></div>

            {stages.map((stage, idx) => (
              <div key={stage.id} className="relative z-10 flex-1 min-w-[200px]">
                <div className={`p-6 rounded-2xl border-4 transition-all duration-300 shadow-md ${
                  stage.status === 'critical' ? 'bg-rose-50 border-rose-500 scale-105' :
                  stage.status === 'warning' ? 'bg-amber-50 border-amber-400' :
                  'bg-white border-slate-200'
                }`}>
                  <h4 className="font-bold text-slate-700 mb-2 text-center">{stage.name}</h4>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className={`text-4xl font-black ${
                      stage.status === 'critical' ? 'text-rose-600' :
                      stage.status === 'warning' ? 'text-amber-600' :
                      'text-slate-800'
                    }`}>
                      {stage.count}
                    </span>
                    <Users className="text-slate-400" />
                  </div>

                  <div className="text-xs text-center font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 py-1 px-2 rounded-lg inline-block w-full">
                    Paso: {stage.capacity} / turno
                  </div>

                  {stage.status === 'critical' && (
                    <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                      <AlertTriangle size={24} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-4">
          <div className="text-blue-500 mt-1">💡</div>
          <div>
            <p className="text-blue-900 font-semibold mb-1">Lección del Prototipado:</p>
            <p className="text-blue-800 text-sm">{data.tip}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
