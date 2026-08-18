"use client";
import React, { useState } from 'react';
import { MapPin, Check, Zap, Map, Truck, Home, UtensilsCrossed, Compass } from 'lucide-react';
import Image from 'next/image';

const iconMap = {
  Compass,
  Truck,
  Home,
  UtensilsCrossed,
  Map
};

export default function NodeChain({ data }) {
  const { badge, title, description, nodes, success } = data;
  const [activatedNodes, setActivatedNodes] = useState([]);

  const handleNodeClick = (nodeId) => {
    if (!activatedNodes.includes(nodeId)) {
      setActivatedNodes([...activatedNodes, nodeId]);
    }
  };

  const isCompleted = activatedNodes.length === nodes.length;
  const progress = (activatedNodes.length / nodes.length) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto my-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-widest uppercase mb-6 border border-blue-100">
          <MapPin className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p 
          className="text-slate-500 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* Visualización de Nodos y Conexiones */}
      <div className="relative mb-16 pt-8 pb-4">
        {/* Progress Line (Background) */}
        <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-slate-100 rounded-full z-0 hidden md:block"></div>
        
        {/* Progress Line (Active) */}
        <div 
          className="absolute top-1/2 left-0 h-2 -translate-y-1/2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full z-0 transition-all duration-700 ease-out hidden md:block"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Nodos */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
          {nodes.map((node, index) => {
            const isActivated = activatedNodes.includes(node.id);
            
            return (
              <button
                key={node.id}
                onClick={() => handleNodeClick(node.id)}
                className="relative group focus:outline-none"
              >
                {/* Conector vertical para móvil */}
                {index !== nodes.length - 1 && (
                  <div className={`absolute top-full left-1/2 w-1 h-6 -translate-x-1/2 md:hidden transition-colors duration-300 ${isActivated && activatedNodes.includes(nodes[index+1].id) ? 'bg-indigo-400' : 'bg-slate-100'}`}></div>
                )}

                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full flex flex-col items-center justify-center gap-1 transition-all duration-500 border-4 shadow-lg
                  ${isActivated ? 'bg-white border-indigo-500 scale-110 shadow-indigo-200' : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white cursor-pointer'}
                `}>
                  <span className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 flex justify-center items-center">
                    {iconMap[node.icon] ? (
                      React.createElement(iconMap[node.icon], { className: "w-8 h-8 md:w-10 md:h-10 text-indigo-600" })
                    ) : node.icon.startsWith('http') || node.icon.startsWith('/') ? (
                      <Image src={node.icon} alt={node.label} className="w-12 h-12 object-contain" width={1000} height={1000} unoptimized={true} />
                    ) : (
                      node.icon
                    )}
                  </span>
                  
                  {isActivated && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm animate-bounce-short">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                  )}
                </div>
                
                <div className="text-center mt-4">
                  <span className={`font-bold text-sm md:text-base transition-colors duration-300 ${isActivated ? 'text-indigo-700' : 'text-slate-500'}`}>
                    {node.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mensaje de Éxito */}
      <div className={`transition-all duration-700 ease-out overflow-hidden ${isCompleted ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl -mr-10 -mt-10"></div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-indigo-900 mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
              {success.title}
            </h4>
            <p className="text-indigo-800 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: success.message }}>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
