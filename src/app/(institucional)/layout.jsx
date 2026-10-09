import React from 'react';
import Footer from '@/components/layout/Footer';
import HashRouteHandler from '@/components/HashRouteHandler';

export default function InstitucionalLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#faf9f6] relative font-sans text-slate-800 flex flex-col justify-between">
      <HashRouteHandler />
      {/* Textura global */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative flex-1 flex flex-col">
        {children}
      </div>

      <Footer />
    </div>
  );
}
