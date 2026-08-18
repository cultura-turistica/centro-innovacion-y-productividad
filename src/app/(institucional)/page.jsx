import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import PillarsSection from '@/components/home/PillarsSection';
import AboutSection from '@/components/home/AboutSection';
import OrgChartSection from '@/components/home/OrgChartSection';

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24 pt-16">
      <HeroSection />
      <PillarsSection />
      <AboutSection />
      <OrgChartSection />
    </main>
  );
}
