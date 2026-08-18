import React from 'react';
import Image from 'next/image';

export default function ModuleHero({ data, themeColor }) {
  const { label, title, titlePart1, titlePart2, description, image, theme: dataTheme } = data;
  
  // Si no hay tema explícito, construir uno genérico basado en themeColor
  const theme = dataTheme || {
    bg: "bg-white",
    border: "border-slate-200",
    accent1: "bg-emerald-100",
    accent2: "bg-teal-100",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-800",
    badgeBorder: "border-slate-200",
    gradientText: "from-emerald-600 to-teal-500"
  };
  
  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${theme.bg} ${theme.border} border shadow-sm mt-8`}>
      {/* Elementos decorativos (Glassmorphism sutil) */}
      <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 ${theme.accent1} rounded-full blur-3xl pointer-events-none`}></div>
      <div className={`absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 ${theme.accent2} rounded-full blur-3xl pointer-events-none`}></div>
      
      <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          {label && (
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${theme.badgeBg} backdrop-blur-sm border ${theme.badgeBorder} ${theme.badgeText} text-sm font-bold tracking-wide uppercase shadow-sm`}>
              {label}
            </div>
          )}
          
          {title ? (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              {title}
            </h1>
          ) : (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              {titlePart1} <br className="hidden md:block" />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>
                {titlePart2}
              </span>
            </h1>
          )}
          
          <p 
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {image && (
          <div className="hidden md:block flex-shrink-0 relative">
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-60"></div>
            <Image src={image} 
              alt={title || "Imagen del Módulo"} 
              className={`relative z-10 w-full h-full max-w-[250px] max-h-[250px] object-cover ${data.imageContainerClass || 'drop-shadow-xl rounded-2xl'}`} width={1000} height={1000} unoptimized={true} />
          </div>
        )}
      </div>
    </div>
  );
}
