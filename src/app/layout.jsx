import './globals.css'
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  metadataBase: new URL('https://cip.cultura-t.com'),
  title: {
    default: 'Centro de Innovación y Productividad Cultura T | CIP',
    template: '%s | Centro de Innovación y Productividad Cultura T'
  },
  description: 'Centro de Innovación y Productividad Cultura T (CIP). Investigación territorial, inteligencia de datos, metodologías aplicadas y herramientas abiertas para el turismo sostenible y la productividad regional en Colombia.',
  keywords: [
    'Centro de Innovación y Productividad',
    'Centro de Innovación y Productividad Cultura T',
    'Cultura T',
    'CIP',
    'Turismo Sostenible Colombia',
    'Inteligencia Territorial',
    'DataLab Turismo',
    'Desarrollo Territorial',
    'Innovación Turística'
  ],
  authors: [{ name: 'Cultura T S.A.S.', url: 'https://cip.cultura-t.com' }],
  creator: 'Cultura T S.A.S.',
  publisher: 'Centro de Innovación y Productividad Cultura T',
  openGraph: {
    title: 'Centro de Innovación y Productividad Cultura T | CIP',
    description: 'Investigación territorial, inteligencia de datos y herramientas abiertas para la innovación turística y la productividad en Colombia.',
    url: 'https://cip.cultura-t.com',
    siteName: 'Centro de Innovación y Productividad Cultura T',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Innovación y Productividad Cultura T | CIP',
    description: 'Investigación territorial, inteligencia de datos y herramientas abiertas para la innovación turística.',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Centro de Innovación y Productividad Cultura T',
  alternateName: 'CIP',
  url: 'https://cip.cultura-t.com',
  logo: 'https://cip.cultura-t.com/icon.png',
  description: 'Investigación territorial, inteligencia de datos, metodologías aplicadas y herramientas abiertas para el turismo sostenible y la productividad regional en Colombia.',
  sameAs: [
    'https://cultura-t.com'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

