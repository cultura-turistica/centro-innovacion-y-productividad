import CalculadoraCosteo from '@/components/ui/Academia/CalculadoraCosteo/CalculadoraCosteo';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'Calculadora de Costeo Turístico | CIP',
  description: 'Herramienta interactiva para calcular costos, gastos, utilidad, comisiones y precios finales de paquetes turísticos (Metodología PNUD).',
};

export default function CalculadoraCosteoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <CalculadoraCosteo />
    </div>
  );
}
