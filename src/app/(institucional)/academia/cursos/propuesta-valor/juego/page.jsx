import React from 'react';
import PropuestaValorGame from '@/components/ui/Academia/PropuestaValor/PropuestaValorGame';

export const metadata = {
  title: 'Juego Interactivo: Diseñando la Propuesta de Valor | CIP',
  description: 'Aprende jugando con la metodología oficial de Alexander Osterwalder (Strategyzer). Descubre los trabajos y dolores del cliente, diseña los 3 encajes, experimenta sin quebrar y pivotea tu modelo de negocio en turismo y cultura. Curso 100% certificable.',
  alternates: {
    canonical: 'https://cip.cultura-t.com/academia/cursos/propuesta-valor/juego',
  },
  openGraph: {
    title: 'Juego Interactivo: Diseñando la Propuesta de Valor | CIP',
    description: 'Explicación explorable e interactiva (estilo Nicky Case) basada en Strategyzer para dominar el encaje de valor y evitar el fracaso comercial en turismo y cultura.',
    url: 'https://cip.cultura-t.com/academia/cursos/propuesta-valor/juego',
    siteName: 'Centro de Innovación y Productividad Cultura T',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://cip.cultura-t.com/assets/images/portada_propuesta.webp',
        width: 1080,
        height: 1920,
        alt: 'Portada del Juego Interactivo Propuesta de Valor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juego Interactivo: Diseñando la Propuesta de Valor | CIP',
    description: 'Metodología Strategyzer aplicada en formato juego interactivo. 100% certificable.',
    images: ['https://cip.cultura-t.com/assets/images/portada_propuesta.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PropuestaValorJuegoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Juego Interactivo: Diseñando la Propuesta de Valor',
        description: 'Explicación explorable e interactiva (estilo Nicky Case) basada en la metodología de Alexander Osterwalder (Strategyzer) para dominar el encaje de valor y evitar el fracaso comercial en proyectos de turismo y cultura.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Centro de Innovación y Productividad Cultura T',
          url: 'https://cip.cultura-t.com',
          logo: 'https://cip.cultura-t.com/icon.png',
        },
        educationalCredentialAwarded: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Certificado de Aprobación: Diseño de la Propuesta de Valor',
          credentialCategory: 'Certificación Oficial',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Centro de Innovación y Productividad Cultura T',
          },
        },
        timeRequired: 'PT2H',
        isAccessibleForFree: true,
        inLanguage: 'es',
        hasPart: [
          {
            '@type': 'Course',
            name: 'Pilar 1: El Lienzo del Cliente',
            description: 'Identificación de trabajos funcionales, sociales y emocionales del cliente, dolores agudos y alegrías, previniendo la trampa de enamorarse de la solución.',
            timeRequired: 'PT30M',
          },
          {
            '@type': 'Course',
            name: 'Pilar 2: El Mapa de Valor y los 3 Encajes',
            description: 'Diseño de la propuesta de valor con encaje en papel, validación con la multitud orgánica en el mercado y encaje en el modelo de negocio mediante decisiones de pricing.',
            timeRequired: 'PT40M',
          },
          {
            '@type': 'Course',
            name: 'Pilar 3: Probar sin Quebrar (Experimentos Lean)',
            description: 'Gestión prudente de capital y pruebas de validación rápida de bajo costo ($200 USD) antes de incurrir en endeudamiento de infraestructura.',
            timeRequired: 'PT25M',
          },
          {
            '@type': 'Course',
            name: 'Pilar 4: El Filtro de Feedback y el Pivote Estratégico',
            description: 'Criterio para discernir retroalimentación real del mercado, diciendo SÍ a dolores estructurales y NO con asertividad a peticiones que desvirtúan la propuesta.',
            timeRequired: 'PT25M',
          },
        ],
      },
      {
        '@type': 'VideoObject',
        name: 'Propuesta de Valor - Introducción y Metodología Oficial',
        description: 'Metodología de Alexander Osterwalder (Strategyzer) aplicada para crear experiencias de turismo y cultura que la gente realmente quiera y pague.',
        thumbnailUrl: ['https://img.youtube.com/vi/I4wFG7PGg4g/maxresdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=I4wFG7PGg4g',
        embedUrl: 'https://www.youtube.com/embed/I4wFG7PGg4g',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 1: El Lienzo del Cliente - Trabajos, Dolores y Alegrías',
        description: 'Aprende a mapear los trabajos funcionales, sociales y emocionales de tu arquetipo y a detectar sus dolores y deseos antes de crear productos.',
        thumbnailUrl: ['https://img.youtube.com/vi/RDiJO7afNTc/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=RDiJO7afNTc',
        embedUrl: 'https://www.youtube.com/embed/RDiJO7afNTc',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 2: El Mapa de Valor y los 3 Encajes - Solución, Mercado y Negocio',
        description: 'Conoce los 3 niveles de encaje: en papel, con clientes en el mercado simulado y en las cuentas claras del modelo de negocio.',
        thumbnailUrl: ['https://img.youtube.com/vi/Cdok6lb5O_0/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=Cdok6lb5O_0',
        embedUrl: 'https://www.youtube.com/embed/Cdok6lb5O_0',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 3: Probar sin Quebrar - Experimentos Lean',
        description: 'Cómo proteger $5,000 USD de capital probando con $200 USD antes de construir infraestructura costosa que nadie va a usar.',
        thumbnailUrl: ['https://img.youtube.com/vi/coTyxfvqpgY/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=coTyxfvqpgY',
        embedUrl: 'https://www.youtube.com/embed/coTyxfvqpgY',
      },
      {
        '@type': 'VideoObject',
        name: 'Pilar 4: El Filtro de Feedback y el Pivote Estratégico',
        description: 'Aprende a diferenciar el feedback constructivo del ruido de turistas distractores que te harían perder rentabilidad y foco.',
        thumbnailUrl: ['https://img.youtube.com/vi/VyEzitobXAc/hqdefault.jpg'],
        uploadDate: '2026-10-01T08:00:00-05:00',
        contentUrl: 'https://www.youtube.com/watch?v=VyEzitobXAc',
        embedUrl: 'https://www.youtube.com/embed/VyEzitobXAc',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Marcado semántico indexable para motores de búsqueda y robots */}
      <section className="sr-only" aria-label="Contenido pedagógico del curso">
        <h1>Juego Interactivo: Diseñando la Propuesta de Valor</h1>
        <p>
          Metodología de Alexander Osterwalder (Strategyzer) con mecánica de explicación
          explorable interactiva (estilo Nicky Case). Diseña propuestas de valor para tres arquetipos
          territoriales: Martín (Ejecutivo Urbano Agobiado), Elena (Viajera Cultural e Inmersiva) y
          Familia Ramírez (Padres con niños pequeños).
        </p>
        <h2>Estructura Pedagógica del Curso</h2>
        <ul>
          <li>
            <strong>Pilar 1 - El Lienzo del Cliente:</strong> Trabajos funcionales, sociales y
            emocionales. Identificación de dolores graves y alegrías esperadas. Video oficial:
            https://www.youtube.com/watch?v=RDiJO7afNTc
          </li>
          <li>
            <strong>Pilar 2 - El Mapa de Valor y los 3 Encajes:</strong> Encaje en papel
            (aliviadores y creadores de ganancias), encaje en mercado (simulador de multitud y clientes
            afines) y encaje en negocio (dilema de precios y márgenes). Video oficial:
            https://www.youtube.com/watch?v=Cdok6lb5O_0
          </li>
          <li>
            <strong>Pilar 3 - Probar sin Quebrar (Experimentos Lean):</strong> Gestión de $5,000 USD
            de capital y pruebas baratas de $200 USD para validar hipótesis de riesgo. Video oficial:
            https://www.youtube.com/watch?v=coTyxfvqpgY
          </li>
          <li>
            <strong>Pilar 4 - El Filtro de Feedback y el Pivote:</strong> Criterio para decir SÍ a
            dolores reales y NO a sugerencias fuera de foco. Video oficial:
            https://www.youtube.com/watch?v=VyEzitobXAc
          </li>
          <li>
            <strong>Certificación Oficial:</strong> Examen evaluativo de 10 casos prácticos con 2 horas
            certificables bajo denominación Diseño de la Propuesta de Valor.
          </li>
        </ul>
      </section>
      <PropuestaValorGame />
    </>
  );
}

