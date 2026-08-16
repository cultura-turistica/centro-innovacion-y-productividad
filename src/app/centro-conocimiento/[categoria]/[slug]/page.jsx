import React from 'react';
import { notFound } from 'next/navigation';
import { Lock } from 'lucide-react';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';

import PhotoHero from '@/components/ui/interactivos/PhotoHero';
import InfoBlock from '@/components/ui/interactivos/InfoBlock';
import GridBlock from '@/components/ui/interactivos/GridBlock';

import IDiBadge from '@/components/ui/conocimiento/IDiBadge';
import FichaTecnicaViewer from '@/components/ui/conocimiento/FichaTecnicaViewer';
import TerritorialMap from '@/components/ui/conocimiento/TerritorialMap';

// Generador de rutas estáticas (SSG)
export function generateStaticParams() {
  const params = [];
  
  // Mapeamos los IDs del registro a rutas
  Object.keys(registroIdi).forEach((slug) => {
    const data = registroIdi[slug];
    let categoria = "proyectos"; // default
    
    // Asignación de categoría semántica para la URL basada en tipoIDI
    if (data.tipoIDI === 'I') categoria = "investigacion";
    if (data.tipoIDI === 'D') categoria = "desarrollos";
    if (data.tipoIDI === 'i') categoria = "innovacion";

    params.push({
      categoria,
      slug
    });
  });

  return params;
}

// Helper para renderizar los bloques dinámicamente
const renderSection = (seccion, index, themeColor) => {
  switch (seccion.type) {
    case 'InfoBlock':
      return <InfoBlock key={index} data={seccion.data} themeColor={themeColor} />;
    case 'GridBlock':
      return <GridBlock key={index} data={seccion.data} themeColor={themeColor} />;
    default:
      console.warn(`Componente ${seccion.type} no soportado en Centro de Conocimiento.`);
      return null;
  }
};

export default function CentroConocimientoPage({ params }) {
  const { slug } = params;
  const conocimientoData = registroIdi[slug];

  // Si no existe la data en el JSON maestro, 404
  if (!conocimientoData) {
    notFound();
  }

  const {
    tipoIDI,
    confidencialidad,
    hero,
    fichaTecnica,
    mapaImpacto,
    secciones
  } = conocimientoData;

  // Transformar data del JSON para adaptarse al PhotoHero existente
  const heroData = {
    title: hero.title,
    description: hero.subtitle,
    bgImage: hero.coverImage
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* LA VITRINA PÚBLICA (Siempre se muestra) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PhotoHero data={heroData} themeColor={hero.themeColor} />
        
        <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
          <IDiBadge tipo={tipoIDI} />
        </div>

        <FichaTecnicaViewer fichaTecnica={fichaTecnica} />
        
        <TerritorialMap mapaImpacto={mapaImpacto} themeColor={hero.themeColor} />
      </div>

      {/* EL ESCUDO DE CONFIDENCIALIDAD */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {confidencialidad?.accesoRestringido ? (
          // RENDERIZADO BLOQUEADO
          <div className="bg-red-50 p-8 rounded-3xl shadow-sm border border-red-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-700">Acceso Restringido</h3>
            <p className="text-red-900 leading-relaxed max-w-2xl">
              {confidencialidad.mensaje || "Este documento es material confidencial del Centro de Innovación."}
            </p>
          </div>
        ) : (
          // RENDERIZADO LIBRE (Contenido Profundo)
          <div className="space-y-12">
            {secciones?.map((seccion, index) => 
              renderSection(seccion, index, hero.themeColor)
            )}
          </div>
        )}
      </div>

    </main>
  );
}
