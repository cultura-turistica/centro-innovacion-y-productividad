import React from 'react';
import { BookOpen, Map } from 'lucide-react';

export default function Modulo3({ headerColor, headerGradient }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#ffedd5' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#fed7aa" d="M0,300 L0,200 Q150,150 300,200 T600,200 T900,200 T1200,200 L1200,300 Z" />
                  <path fill="#fdba74" d="M0,300 L0,240 Q300,180 600,240 T1200,240 L1200,300 Z" />
                  {/* Ilustración de ruinas / vasijas y notas musicales */}
                  <rect x="250" y="210" width="80" height="90" fill="#ea580c" />
                  <polygon points="240,210 290,160 340,210" fill="#9a3412" />
                  <path fill="#c2410c" d="M800,200 Q830,160 860,200 Q880,250 830,290 Q780,250 800,200 Z" />
                  <path fill="#9a3412" d="M700,100 Q720,50 740,100 T760,150" fill="none" stroke="#9a3412" strokeWidth="5" />
                  <circle cx="760" cy="150" r="10" fill="#9a3412" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 3</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Tesoros Locales:<br />El Patrimonio</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>En el turismo cultural, el oro no se extrae, el oro se muestra y se protege. Conoce las dos caras de la moneda de nuestra riqueza.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Patrimonio" alt="Patrimonio" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> La Materia Prima del Turismo</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El Patrimonio rural es la herencia cultural viva de una comunidad, no una pieza de museo. Es la <strong>materia prima principal</strong> de cualquier proyecto comunitario. Sin embargo, su mercantilización extrema puede llevar a la <em>folclorización</em> (actuar tradiciones falsas o exageradas únicamente para satisfacer al forastero).</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>El reto es transformar ese patrimonio en un producto turístico sin que pierda su dignidad, dividiéndolo conceptualmente en dos vertientes clásicas:</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                {/* ESTUDIO DE CASO: TANGIBLE (BARICHARA) */}
                <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
                  <div style={{ height: '220px', position: 'relative', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ padding: '20px' }}>
                      <rect x="30" y="80" width="140" height="70" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                      <rect x="90" y="110" width="20" height="40" fill="#64748b" />
                      <rect x="50" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                      <rect x="130" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                      <polygon points="10,80 100,20 190,80" fill="#ef4444" />
                      <polygon points="30,80 100,35 170,80" fill="#f87171" />
                    </svg>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#032968', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Tangible</div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <Map size={16} /> Barichara, Santander
                    </div>
                    <h4 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, margin: '0 0 15px 0' }}>El rescate de la tapia pisada</h4>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                      <strong>Antes del turismo:</strong> Las casas patrimoniales de tierra se derrumbaban al ser percibidas como "símbolo de pobreza", reemplazadas por ladrillo industrial.<br /><br />
                      <strong>Impacto SPEC:</strong> El turismo comunitario de alto valor arquitectónico convirtió la tapia en un activo económico. Los habitantes locales fundaron escuelas taller de oficios tradicionales para restaurar fachadas, multiplicando por 10 el valor de sus propiedades y <strong>salvaguardando el paisaje cultural</strong> que hoy es monumento nacional.
                    </p>
                  </div>
                </div>

                {/* ESTUDIO DE CASO: INTANGIBLE (PACÍFICO/CAFÉ) */}
                <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
                  <div style={{ height: '220px', position: 'relative', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ padding: '20px' }}>
                      <path d="M40,140 Q100,50 160,140" fill="none" stroke="#22c55e" strokeWidth="8" />
                      <path d="M100,100 Q150,100 130,50 Q80,50 100,100" fill="#16a34a" />
                      <path d="M90,120 Q40,120 60,70 Q110,70 90,120" fill="#15803d" />
                      <circle cx="130" cy="50" r="12" fill="#ef4444" />
                      <circle cx="60" cy="70" r="10" fill="#dc2626" />
                      <circle cx="90" cy="40" r="8" fill="#b91c1c" />
                    </svg>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ea580c', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Intangible</div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <Map size={16} /> Paisaje Cultural Cafetero, Quindío
                    </div>
                    <h4 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, margin: '0 0 15px 0' }}>La cultura del recolector</h4>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                      <strong>Antes del turismo:</strong> Los cantos de vaquería y la técnica de recolección de café manual estaban muriendo por el desinterés de los jóvenes rurales que migraban a la ciudad.<br /><br />
                      <strong>Impacto SPEC:</strong> Al estructurar la "Ruta de la Finca Tradicional", el turista paga por la <em>experiencia viva</em>. Los abuelos volvieron a ser los maestros (guías principales), el dialecto campesino se reconoció como valor cultural y los jóvenes encontraron en el turismo una razón económica para <strong>preservar la herencia de sus ancestros</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
