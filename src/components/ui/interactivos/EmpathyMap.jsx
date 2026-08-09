"use client";
import React, { useState } from 'react';
import { Eye, Ear, Heart, MessageSquare } from 'lucide-react';

export default function EmpathyMap({ data, themeColor = "#2563eb" }) {
  const [activeQuadrant, setActiveQuadrant] = useState('ve');

  const icons = {
    ve: Eye,
    oye: Ear,
    siente: Heart,
    dice: MessageSquare
  };

  if (!data || !data.content) return null;

  const content = data.content;

  return (
    <div className="bg-slate-50 p-6 md:p-12 rounded-3xl border-2 border-dashed border-slate-300 mb-12">
      <h3 className="text-2xl font-bold text-center mb-4" style={{ color: themeColor }}>{data.title}</h3>
      <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: data.description }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Object.keys(content).map((key) => {
          const Icon = icons[key];
          const isActive = activeQuadrant === key;
          
          return (
            <button
              key={key}
              onClick={() => setActiveQuadrant(key)}
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 border-2 focus:outline-none focus:ring-4 focus:ring-opacity-50`}
              style={{
                backgroundColor: isActive ? themeColor : 'white',
                borderColor: isActive ? themeColor : '#e2e8f0',
                color: isActive ? 'white' : '#475569',
                boxShadow: isActive ? `0 10px 20px ${themeColor}40` : '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            >
              {Icon && <Icon size={32} />}
              <span className="font-bold text-lg">{content[key].title}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl min-h-[150px] flex items-center border border-slate-100">
        <div className="text-lg text-slate-800 leading-relaxed">
          <strong style={{ color: themeColor }} className="text-xl block mb-2">{content[activeQuadrant].title}:</strong>
          {content[activeQuadrant].text}
        </div>
      </div>
    </div>
  );
}
