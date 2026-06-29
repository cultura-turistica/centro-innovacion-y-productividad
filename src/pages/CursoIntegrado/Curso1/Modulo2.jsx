import React from 'react';
import { BookOpen, Users, Coins, Leaf, Edit3 } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';

export default function Modulo2({ headerColor, headerGradient }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#dcfce7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bbf7d0" d="M0,300 L0,180 Q300,100 600,180 T1200,180 L1200,300 Z" />
                  <path fill="#86efac" d="M0,300 L0,220 Q400,150 800,220 T1200,220 L1200,300 Z" />
                  <path fill="#4ade80" d="M0,300 L0,260 Q600,180 1200,260 L1200,300 Z" />
                  <circle cx="200" cy="90" r="50" fill="#fef08a" />
                  {/* Patrón de hojitas / cascada SVG */}
                  <path fill="#3b82f6" d="M500,220 Q520,250 500,300 L550,300 Q540,250 560,220 Z" />
                  <circle cx="800" cy="200" r="15" fill="#16a34a" />
                  <circle cx="820" cy="220" r="25" fill="#15803d" />
                  <circle cx="770" cy="210" r="20" fill="#14532d" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 2</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>La Sostenibilidad<br />Rural</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Un delicado equilibrio ecosistémico donde conservar el agua importa tanto como asegurar el alimento en la mesa de las familias campesinas.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Naturaleza" alt="Naturaleza" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Los Tres Ejes de la Sostenibilidad</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>La sostenibilidad territorial es una articulación de tres fuerzas. Si el proyecto genera dinero pero agota los nacederos de agua, se convierte en una operación extractivista condenada al colapso. Si protege estrictamente la biodiversidad pero las familias continúan marginadas económicamente, el modelo es inviable y propicia el desplazamiento.</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Para que el tejido rural perdure, el beneficio económico (superávit), el respeto social (inclusión) y la capacidad de carga ambiental deben operar como un engranaje indisoluble.</p>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Aplicación de Ejes</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Acciones Fundamentales</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>Haz clic sobre cada pilar para revisar las medidas de mitigación requeridas en un sendero ecológico activo.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <FlipPillarCard icon={Leaf} title="Ambiental" subtitle="Protección Ecosistémica" color="#16a34a" bg="#f0fdf4"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #16a34a;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#166534;font-size:1.1rem;display:block;margin-bottom:8px">Manejo de Capacidad de Carga:</strong> Evaluar cuántos caminantes soporta diariamente el sendero sin provocar erosión severa ni espantar a la avifauna residente.</div>`}
                  />
                  <FlipPillarCard icon={Users} title="Social" subtitle="Inclusión Intergeneracional" color="#ea580c" bg="#fff7ed"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #ea580c;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#9a3412;font-size:1.1rem;display:block;margin-bottom:8px">Salvaguardia de Saberes:</strong> Incorporar a los abuelos en el recorrido turístico no como adornos, sino como portadores de la memoria viva y guardianes de las plantas medicinales.</div>`}
                  />
                  <FlipPillarCard icon={Coins} title="Económico" subtitle="Viabilidad Financiera" color="#2563eb" bg="#eff6ff"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #2563eb;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#1e40af;font-size:1.1rem;display:block;margin-bottom:8px">Cálculo de Depreciación:</strong> La rentabilidad debe prever el deterioro físico. Apartar fondos permanentes para la reparación de puentes, señalética y equipos de montaña.</div>`}
                  />
                </div>
              </div>
            </div>
          </div>
  );
}
