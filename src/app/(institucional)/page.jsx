import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import PillarsSection from '@/components/home/PillarsSection';
import AboutSection from '@/components/home/AboutSection';
import OrgChartSection from '@/components/home/OrgChartSection';

export const metadata = {
  title: {
    absolute: 'Centro de Innovación y Productividad Cultura T | CIP',
  },
  description: 'Somos el Centro de Innovación y Productividad de Cultura T. Investigamos, desarrollamos tecnología y transferimos metodologías aplicadas para el desarrollo sostenible de los territorios en Colombia.',
  alternates: {
    canonical: 'https://cip.cultura-t.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'Centro de Innovación y Productividad Cultura T',
    alternateName: ['CIP Cultura T', 'Centro de Innovación y Productividad', 'Cultura T'],
    url: 'https://cip.cultura-t.com',
    logo: 'https://cip.cultura-t.com/icon.png',
    description: 'Centro de Innovación y Productividad especializado en investigación territorial, analítica de datos y turismo sostenible.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO'
    }
  };

  return (
    <main className="flex flex-col gap-24 pb-24 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <PillarsSection />
      <AboutSection />
      <OrgChartSection />
    </main>
  );
}
