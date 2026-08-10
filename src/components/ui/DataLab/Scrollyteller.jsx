"use client";
import React, { useState, useEffect, useRef } from 'react';

/**
 * Componente genérico de Scrollytelling.
 * Desacopla la lógica del IntersectionObserver de la UI.
 * 
 * @param {Array} steps - Arreglo de objetos con la narrativa (textos).
 * @param {Function} renderBackground - Función que recibe (activeStep) y retorna el componente visual (ej. Gráficos dinámicos).
 */
export default function Scrollyteller({ steps = [], renderBackground }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Gatilla exactamente a la mitad de la pantalla
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [steps]);

  return (
    <section className="relative w-full mx-auto flex flex-col md:flex-row-reverse items-start">
      
      {/* 1. VISUAL LAYER (Sticky Background) */}
      <div className="sticky top-0 w-full md:w-[60%] h-[50vh] md:h-screen flex items-center justify-center z-0">
        <div className="w-full h-full relative">
           {renderBackground(activeStep)}
        </div>
      </div>
      
      {/* 2. NARRATIVE LAYER (Scrolling Text) */}
      <div className="w-full md:w-[40%] px-4 md:px-8 py-8 md:py-16 flex flex-col z-10 -mt-[10vh] md:mt-0 relative pointer-events-none">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            data-index={idx} 
            ref={(el) => (stepRefs.current[idx] = el)}
            className={`flex flex-col justify-center min-h-[70vh] md:min-h-screen transition-opacity duration-700 ease-out pointer-events-auto ${
              activeStep === idx ? 'opacity-100' : 'opacity-20'
            }`}
          >
            {/* Caja de texto del paso */}
            <div className="bg-slate-900/90 p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-slate-700 relative overflow-hidden">
              {step.title && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h2>
              )}
              {step.content && (
                <div 
                  className="text-base md:text-lg leading-relaxed text-slate-300"
                  dangerouslySetInnerHTML={{ __html: step.content }} 
                />
              )}
              {step.customComponent && (
                <div className="mt-6 w-full">
                  {step.customComponent}
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Padding final para que el último paso pueda centrarse en la pantalla */}
        <div className="h-[50vh]"></div>
      </div>
      
    </section>
  );
}
