import React from 'react';
import { notFound } from 'next/navigation';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';

import PhotoHero from '@/components/ui/interactivos/PhotoHero';
import InfoBlock from '@/components/ui/interactivos/InfoBlock';
import GridBlock from '@/components/ui/interactivos/GridBlock';

import IDiBadge from '@/components/ui/conocimiento/IDiBadge';
import FichaTecnicaViewer from '@/components/ui/conocimiento/FichaTecnicaViewer';

export function generateStaticParams() {
  const params = [];
  Object.keys(registroIdi).forEach((slug) => {
    const data = registroIdi[slug];
    if (data.tipoIDI === 'I' || data.tipoIDI === 'D') {
      params.push({ slug });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const conocimientoData = registroIdi[slug];

  if (!conocimientoData) {
    return { title: 'No Encontrado - Cultura T' };
  }

  // Regla Tipográfica: Asegurarnos de limpiar y formatear con comillas “ ” si fuera necesario
  const title = `“${conocimientoData.hero?.title}” | Centro de Conocimiento`;
  const description = conocimientoData.hero?.subtitle 
    ? `Descubre más sobre “${conocimientoData.hero.subtitle}”.` 
    : 'Explora este documento en el Centro de Conocimiento e Innovación.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    }
  };
}

const renderSection = (seccion, index, themeColor) => {
  switch (seccion.type) {
    case 'InfoBlock':
      return <InfoBlock key={index} data={seccion.data} themeColor={themeColor} />;
    case 'GridBlock':
      return <GridBlock key={index} data={seccion.data} themeColor={themeColor} />;
    default:
      return null;
  }
};

export default async function PublicacionPage({ params }) {
  const { slug } = await params;
  const conocimientoData = registroIdi[slug];

  if (!conocimientoData || (conocimientoData.tipoIDI !== 'I' && conocimientoData.tipoIDI !== 'D')) {
    notFound();
  }

  const { tipoIDI, hero, fichaTecnica, secciones } = conocimientoData;

  const heroData = {
    title: hero.title,
    description: hero.subtitle,
    bgImage: hero.coverImage
  };

  return (
    <main className="pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PhotoHero data={heroData} themeColor={hero.themeColor} />
        
        <div className="mt-8 flex justify-between items-center flex-wrap gap-4 mb-8">
          <IDiBadge tipo={tipoIDI} />
        </div>

        <FichaTecnicaViewer fichaTecnica={fichaTecnica} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-12">
        {secciones?.map((seccion, index) => 
          renderSection(seccion, index, hero.themeColor)
        )}
      </div>
    </main>
  );
}
