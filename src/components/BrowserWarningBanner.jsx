"use client";
import React, { useState, useEffect } from 'react';
import { UI_MESSAGES } from '../data/uiData';

export default function BrowserWarningBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { browserWarning } = UI_MESSAGES;

  useEffect(() => {
    // Solo mostramos el banner si el usuario está en Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const hasDismissed = localStorage.getItem('safari-warning-dismissed');
    
    if (isSafari && !hasDismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('safari-warning-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-[100]">
      <div className="bg-white/95 backdrop-blur-xl border border-amber-200 shadow-2xl rounded-2xl p-5 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        
        <div className="flex gap-4 relative z-10">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-800 mb-1">{browserWarning.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: browserWarning.description }} />
            <div className="flex gap-3">
              <button 
                onClick={dismiss}
                className="text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 py-2 px-4 rounded-lg transition-colors"
              >
                {browserWarning.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
