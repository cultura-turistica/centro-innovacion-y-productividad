import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import AnatomiaNoSSRWrapper from '../../../components/ui/DataLab/Anatomia/AnatomiaNoSSRWrapper';

export const metadata = {
  title: 'Laboratorio: Anatomía del Turista | CIP',
  description: 'Radiografía interactiva del viajero colombiano en 2024.',
};

export default function AnatomiaTuristaPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 
        1. CACHÉ Y CDN: 
        Server Component estático por defecto. Servido instantáneamente desde Edge Network.
        
        La hidratación dinámica ('ssr: false') se delega al componente de cliente 'AnatomiaNoSSRWrapper'
        para cumplir con las reglas estrictas de Next.js 14.
      */}
      <Navbar />
      <div className="pt-24 relative z-10">
        <AnatomiaNoSSRWrapper />
      </div>
    </main>
  );
}
