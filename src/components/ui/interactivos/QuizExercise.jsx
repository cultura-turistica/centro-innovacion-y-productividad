"use client";
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function QuizExercise({ data, themeColor = "#0f766e", themeBg: propThemeBg = "bg-teal-900" }) {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!data) return null;

  const themeBg = data.themeBg || propThemeBg;

  return (
    <div className={`${themeBg} text-white p-8 md:p-12 rounded-3xl shadow-xl`}>
      <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
      <p className="text-white/80 mb-8" dangerouslySetInnerHTML={{ __html: data.description }} />
      
      <div className="space-y-4">
        {data.options.map((opt, idx) => {
          const isSelected = selectedOption === opt.id;
          const isCorrect = isSelected && opt.isCorrect;
          const isWrong = isSelected && !opt.isCorrect;

          let btnClass = "w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between ";
          
          if (!selectedOption) {
            btnClass += "border-white/20 hover:border-white/50 bg-white/5";
          } else if (isCorrect) {
            btnClass += "border-emerald-400 bg-emerald-500/20";
          } else if (isWrong) {
            btnClass += "border-rose-400 bg-rose-500/20";
          } else {
            btnClass += "border-white/10 opacity-50";
          }

          return (
            <div key={idx} className="space-y-3">
              <button 
                onClick={() => !selectedOption && setSelectedOption(opt.id)}
                className={btnClass}
                disabled={selectedOption !== null}
              >
                <span className="font-bold text-lg">{opt.text}</span>
                {isCorrect && <CheckCircle2 className="text-emerald-400 w-6 h-6" />}
              </button>
              
              {isSelected && (
                <div className={`p-4 rounded-xl text-sm font-medium ${isCorrect ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                  {opt.feedback}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
