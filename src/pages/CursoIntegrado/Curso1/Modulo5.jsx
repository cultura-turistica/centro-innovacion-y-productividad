import React, { useState } from 'react';
import { BookOpen, MessageCircle, Edit3 } from 'lucide-react';

export default function Modulo5({ headerColor, headerGradient }) {
  const [chatStep, setChatStep] = useState(0);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0f2fe' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
                  {/* Ilustración de dos lados comunicándose */}
                  <path fill="#7dd3fc" d="M300,250 Q300,180 400,180 L450,180 Q450,250 300,250 Z" />
                  <path fill="#38bdf8" d="M900,250 Q900,180 800,180 L750,180 Q750,250 900,250 Z" />
                  <path fill="none" stroke="#0284c7" strokeWidth="4" strokeDasharray="10 10" d="M450,210 C550,150 650,150 750,210" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 5</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Mediación y Resolución<br />de Conflictos</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Donde hay familias vecinas y dinero de por medio, habrá tensiones. Ignorar la fricción destruye el tejido; gestionarla madura la gobernanza.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Mediacion" alt="Mediación" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> El Conflicto Rural es Natural</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>En los esquemas asociativos, <strong>el conflicto no es sinónimo de un proyecto fallido</strong>. Es el síntoma natural de la convivencia local. Suele originarse por una mala comunicación interna, rumores vecinales, o la competencia directa por los turistas (cuando alguien quiere acaparar ingresos).</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Las organizaciones campesinas más fuertes no son las que jamás pelean, sino las que institucionalizan la mediación a través de su asamblea y aplican los 3 pasos de oro:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>1. Escucha Activa</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Permitir que las partes desahoguen la emoción sin interrumpir y sin prejuicios durante las reuniones de comité.</span>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>2. Enfriamiento</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Prohibición de tomar decisiones en caliente, especialmente aquellas relacionadas con castigos severos o distribución financiera.</span>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>3. Acuerdo Justo</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Llevar el consenso final a los estatutos por escrito, creando un precedente para evitar que la fricción se repita a futuro.</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', border: '2px dashed #cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica Práctica: El Chat Veredal</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Tensión en el Sendero</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', textAlign: 'center' }}><strong>Caso real:</strong> En plena temporada alta, la Finca "El Edén" está acaparando a todos los visitantes, rompiendo los acuerdos de rotación de la asociación. Las demás familias exigen su expulsión. Asume el rol de mediador de la asamblea.</p>

                <div style={{ width: '100%', maxWidth: '600px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ background: headerColor, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MessageCircle size={24} color={headerColor} /></div>
                    <div>
                      <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Grupo: Asociación Campesina</h3>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Escribiendo...</span>
                    </div>
                  </div>

                  <div style={{ padding: '2rem', background: '#f1f5f9', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="chat-bubble-in" style={{ background: 'white', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <strong style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Familia González (Guías)</strong>
                      ¡Es un atropello! La Finca El Edén atendió a los 20 turistas y los retuvo toda la tarde. Nosotros nos quedamos con las viandas preparadas. ¡Exigimos que los saquen de la asociación ya mismo! 😡
                    </div>
                    <div className="chat-bubble-in" style={{ animationDelay: '0.5s', animationFillMode: 'both', background: 'white', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <strong style={{ color: '#f59e0b', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Doña Carmen (Hospedaje)</strong>
                      Si las cosas siguen así, yo también me salgo del proyecto. No trabajamos meses para que un solo vecino se lleve el dinero de toda la ruta.
                    </div>

                    {chatStep === 0 && (
                      <div className="fade-in" style={{ marginTop: '20px' }}>
                        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>Elige tu respuesta táctica basada en mediación comunitaria:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <button onClick={() => setChatStep(2)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción A) Castigo Inmediato: Tiene toda la razón la familia González. Finca El Edén queda suspendida un mes por acaparamiento egoísta.
                          </button>
                          <button onClick={() => setChatStep(3)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción B) Enfriamiento e Institucionalidad: Les entiendo la molestia y el impacto. No decidamos enojados. Mañana en la noche citamos a asamblea extraordinaria para oír a El Edén y ajustar las multas del reglamento de rotación.
                          </button>
                          <button onClick={() => setChatStep(2)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción C) Libre Mercado: Compañeros, esto es libre competencia. Si los turistas prefirieron quedarse allá toda la tarde, es porque ofrecen un mejor servicio. ¡Mejoren sus fincas!
                          </button>
                        </div>
                      </div>
                    )}

                    {chatStep === 2 && (
                      <div className="chat-bubble-in shake-animation" style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginTop: '20px' }}>
                        <strong style={{ color: '#b91c1c', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Finca El Edén</strong>
                        ¡Qué autoritarismo! Nos retiramos del proyecto. Igual los turistas nos buscan a nosotros directamente. Adiós. 🚪💥<br /><br />
                        <span style={{ fontSize: '0.85rem', color: '#7f1d1d', fontWeight: 'bold' }}>❌ FRACTURA COMUNITARIA. Ignoraste la mediación. Destruiste el tejido asociativo aplicando castigos impulsivos o la lógica del mercado voraz que desprotege al débil.</span>
                        <button onClick={() => setChatStep(0)} style={{ display: 'block', marginTop: '10px', padding: '8px 20px', background: 'white', border: '2px solid #fca5a5', borderRadius: '10px', color: '#b91c1c', cursor: 'pointer', fontWeight: 'bold' }}>Replantear Estrategia</button>
                      </div>
                    )}

                    {chatStep === 3 && (
                      <div className="chat-bubble-in" style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginTop: '20px' }}>
                        <strong style={{ color: '#15803d', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Junta Directiva</strong>
                        Es lo correcto, líder. Calmemos los ánimos y nos vemos mañana en la caseta comunal. Llevaremos los estatutos impresos. 🙏📝<br /><br />
                        <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 'bold' }}>✅ GOBERNANZA RESILIENTE. Excelente mediación. Aplicaste el "enfriamiento" y derivaste el problema hacia el "acuerdo institucional" para fortalecer las reglas del juego.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
