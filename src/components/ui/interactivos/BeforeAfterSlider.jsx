"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider({ 
  imageBefore, 
  imageAfter, 
  labelBefore = "Antes", 
  labelAfter = "Después",
  themeColor = "#4f46e5",
  effectBefore = null // e.g. "noise", "blur"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  if (!imageBefore || !imageAfter) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-xl shadow-slate-200/50 bg-slate-100"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image 
            src={imageAfter} 
            alt={labelAfter} 
            fill 
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {/* Before Image (Clipped overlay) */}
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image 
            src={imageBefore} 
            alt={labelBefore} 
            fill 
            className={`object-cover ${
              effectBefore === 'blur' ? 'blur-md' : 
              effectBefore === 'noise' ? 'brightness-[1.1] contrast-[0.8] saturate-[0.6]' : ''
            }`}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          
          {/* Noise Overlay Effect */}
          {effectBefore === 'noise' && (
            <>
              {/* Luminance noise (Grayscale) */}
              <div 
                className="absolute inset-0 mix-blend-hard-light opacity-50 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0, 1 0 0 0 0, 1 0 0 0 0, 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              ></div>
              {/* Chrominance noise (Color speckles) */}
              <div 
                className="absolute inset-0 mix-blend-color opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
              ></div>
            </>
          )}
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 flex justify-center items-center pointer-events-none"
          style={{ 
            left: `${sliderPosition}%`, 
            transform: 'translateX(-50%)',
            backgroundColor: 'white'
          }}
        >
          <div 
            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 pointer-events-auto"
            style={{ color: themeColor }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 -ml-2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {labelBefore}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {labelAfter}
          </span>
        </div>
      </div>
    </div>
  );
}
