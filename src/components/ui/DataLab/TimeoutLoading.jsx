"use client";
import React, { useState, useEffect } from 'react';
import { UI_MESSAGES } from '../../../data/uiData';

export default function TimeoutLoading({ text, containerClass, spinnerColor }) {
  const [isTimedOut, setIsTimedOut] = useState(false);
  const { timeoutLoading } = UI_MESSAGES;

  useEffect(() => {
    const timer = setTimeout(() => setIsTimedOut(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (isTimedOut) {
    return (
      <div className={`${containerClass} bg-red-50/50 flex-col items-center justify-center text-center p-6 gap-6 rounded-3xl border border-red-100 shadow-sm relative z-50`}>
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-900 mb-2">{timeoutLoading.title}</h3>
          <p className="text-sm text-red-700/80 max-w-sm">{timeoutLoading.descriptionSafari}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md active:scale-95"
        >
          {timeoutLoading.button}
        </button>
      </div>
    );
  }

  return (
    <div className={`${containerClass} flex-col items-center justify-center gap-4`}>
      <div className={`w-12 h-12 border-4 ${spinnerColor} rounded-full animate-spin`}></div>
      <p className="font-semibold uppercase tracking-widest text-sm text-slate-500">{text}</p>
    </div>
  );
}
