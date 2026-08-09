import React from 'react';
import Image from 'next/image';

export default function PhotoHero({ data, themeColor = "#4f46e5" }) {
  if (!data) return null;
  const { title, description, bgImage } = data;

  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center rounded-[3rem] overflow-hidden shadow-2xl mb-16">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={bgImage} 
            alt={title} 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        </div>
      )}
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">
          {title}
        </h1>
        {description && (
          <p 
          className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed drop-shadow"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        )}
      </div>
      
      {/* Aesthetic accent line */}
      <div 
        className="absolute bottom-0 left-0 h-2 w-full"
        style={{ backgroundColor: themeColor }}
      ></div>
    </div>
  );
}
