import React from 'react';

export default function InstitucionalLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] relative font-sans text-slate-800">
      {/* Textura global */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
