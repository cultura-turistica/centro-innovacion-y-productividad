import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import PillarsSection from '../components/home/PillarsSection';
import AboutSection from '../components/home/AboutSection';
import OrgChartSection from '../components/home/OrgChartSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans selection:bg-indigo-100 relative">
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{ backgroundImage: "url('/assets/images/textura1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-24 pb-24 pt-16">
          <HeroSection />
          <PillarsSection />
          <AboutSection />
          <OrgChartSection />
        </main>
      </div>
    </div>
  );
}
