import React from 'react';

export default function StepList({ data, themeColor = "#0f766e", themeBg: propThemeBg = "bg-slate-800", themeText: propThemeText = "text-white" }) {
  if (!data || (!data.pasos && !data.steps)) return null;

  const themeBg = data.themeBg || propThemeBg;
  const themeText = data.themeText || propThemeText;

  const steps = data.pasos || data.steps;

  return (
    <div className={`${themeBg} p-8 md:p-12 rounded-3xl shadow-xl ${themeText}`}>
      <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
      <p className="text-slate-300 mb-8">{data.description}</p>
      
      <div className="space-y-4">
        {steps.map((paso, i) => (
          <div key={i} className="bg-slate-700 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
            <div 
              className="text-white w-10 h-10 flex items-center justify-center font-bold rounded-full flex-shrink-0"
              style={{ backgroundColor: themeColor }}
            >
              {i + 1}
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{paso.title}</h4>
              <p className="text-slate-300 text-sm">{paso.desc || paso.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
