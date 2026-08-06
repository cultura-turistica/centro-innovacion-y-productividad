import React from 'react';
import { motion } from 'framer-motion';

export const AnatomyCard = ({ activeNode }) => {
  return (
    <motion.div
      key={activeNode.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full flex flex-col border-t-8 h-full overflow-y-auto custom-scrollbar"
      style={{ borderTopColor: activeNode.color }}
    >
      <div className="flex items-center space-x-4 mb-6 shrink-0">
        <div 
          className="p-4 rounded-2xl shadow-sm shrink-0" 
          style={{ backgroundColor: `${activeNode.color}15`, color: activeNode.color }}
        >
          {React.createElement(activeNode.icon, { size: 40 })}
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-black leading-tight mb-1 uppercase tracking-wide" style={{ color: activeNode.color }}>
            {activeNode.bodyPart}
          </h2>
          <h3 className="text-lg md:text-2xl font-bold text-slate-700 leading-tight">
            {activeNode.title}
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-medium mt-1">{activeNode.subtitle}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6 shrink-0">
        {activeNode.stats.map((stat, i) => (
          <div key={i} className="flex justify-between items-center bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="text-slate-600 font-semibold text-sm md:text-base">{stat.label}</span>
            <span 
              className="text-xl md:text-2xl font-black"
              style={{ color: activeNode.color }}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-200 relative mb-4 shadow-inner shrink-0">
        <p className="text-slate-700 leading-relaxed text-sm md:text-base z-10 relative font-medium">
          {activeNode.analysis}
        </p>
      </div>

      {activeNode.insight && (
        <div 
          className="p-5 md:p-6 rounded-2xl relative mt-auto shrink-0 border-l-4"
          style={{ 
            backgroundColor: `${activeNode.color}10`, 
            borderColor: activeNode.color
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold tracking-wide uppercase text-xs" style={{ color: activeNode.color }}>Consideración Práctica</span>
          </div>
          <p className="text-slate-800 leading-relaxed text-sm md:text-base font-medium">
            {activeNode.insight}
          </p>
        </div>
      )}
      
      {/* Basic inline style for scrollbar inside the card to keep it clean */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </motion.div>
  );
};
