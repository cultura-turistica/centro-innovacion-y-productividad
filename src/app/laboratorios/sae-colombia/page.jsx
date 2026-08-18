import React from 'react';
import SaeNoSSRWrapper from '../../../components/ui/DataLab/SaeColombia/SaeNoSSRWrapper';

export const metadata = {
  title: 'SAE Colombia: Inferencia de Pobreza | DataLab Cultura T',
  description: 'Estimación en Áreas Pequeñas cruzando luminosidad satelital nocturna con encuestas DANE mediante inferencia bayesiana.',
};

export default function SaeColombiaPage() {
  return (
    <main className="min-h-screen bg-[#0d1117] font-sans text-[#c9d1d9] m-0 p-0">
      {/* 
        1. CACHÉ Y CDN: 
        Server Component estático por defecto. Servido instantáneamente desde Edge Network.
        
        La hidratación dinámica ('ssr: false') y ECharts se delega a SaeNoSSRWrapper
        evitando el bloqueo del SSR y los problemas de CLS.
      */}
      
      <div className="pt-24 relative z-10 w-full">
        <SaeNoSSRWrapper />
      </div>
    </main>
  );
}
