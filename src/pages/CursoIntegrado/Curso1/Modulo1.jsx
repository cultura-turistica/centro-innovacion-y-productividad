import React, { useState } from 'react';
import { BookOpen, Users, Map, Coins, Target, AlertTriangle, Edit3 } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';
import FlipPillarCard from '../../../components/FlipPillarCard';

export default function Modulo1({ headerColor, headerGradient }) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Header Rediseñado con ILUSTRACIÓN SVG in-line garantizada */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0f2fe' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
                  <path fill="#7dd3fc" d="M0,300 L0,200 Q200,100 400,200 T800,200 T1200,200 L1200,300 Z" />
                  <path fill="#38bdf8" d="M0,300 L0,250 Q300,150 600,250 T1200,250 L1200,300 Z" />
                  <circle cx="950" cy="80" r="40" fill="#fef08a" />
                  {/* Arbolitos y casitas ilustradas */}
                  <path fill="#22c55e" d="M200,230 L220,180 L240,230 Z M210,230 L210,250 L230,250 L230,230 Z" />
                  <path fill="#16a34a" d="M800,280 L830,200 L860,280 Z M820,280 L820,300 L840,300 L840,280 Z" />
                  <rect x="500" y="220" width="60" height="40" fill="#fde047" />
                  <polygon points="490,220 530,190 570,220" fill="#ef4444" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 1</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Gobernanza y<br />Turismo Comunitario</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Un modelo organizativo campesino o indígena donde la asamblea local planifica, gestiona y distribuye equitativamente los dividendos del territorio.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Comunidad" alt="Comunidad" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="¿Qué es el turismo comunitario y la gobernanza?"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A1.wav"
                transcript={<p>Hola a todos. Vamos a empezar entendiendo qué es el turismo comunitario. No existe un solo modelo ni una sola forma de hacerlo. El turismo comunitario ocurre cuando los actores locales de un territorio —ya sean asociaciones, cooperativas, empresas locales, o grupos de la comunidad— se organizan para gestionar y ofrecer servicios turísticos. Lo que lo hace diferente es que el control y las decisiones importantes se toman en conjunto por la comunidad, no por un solo dueño externo.<br /><br />A esa capacidad de organizarse y tomar decisiones conjuntas le llamamos "gobernanza", y su herramienta principal suele ser la asamblea o la junta. En la práctica, se ven dos cosas: cuando la gobernanza funciona y los diferentes actores se ponen de acuerdo, se logra una "sinergia", que es cuando el trabajo rinde para todos. Pero cuando la comunicación falla o hay desconfianza por los recursos, se produce lo que llamamos "fatiga comunitaria", donde empiezan los conflictos. El turismo comunitario es un modelo de gestión que depende de cómo se organice la gente. Abajo van a encontrar una herramienta para ver cómo se ven estas dos situaciones.</p>}
                color={headerColor}
              />

              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Autonomía y Defensa del Territorio</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El turismo rural comunitario no es una simple actividad recreativa, es una <strong>herramienta de resistencia y conservación</strong>. Al organizar a las familias locales para prestar servicios de guianza o gastronomía, se frena el extractivismo de capitales externos y se consolida la autonomía económica del territorio. Haz clic en las tarjetas para descubrir los pilares:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  <FlipPillarCard icon={Users} title="Asamblea" subtitle="Órgano de decisión" color="#1d4ed8" bg="#dbeafe"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">El corazón de la Gobernanza.</p><p>Es el órgano supremo donde todas las decisiones estructurales y financieras se someten a votación comunitaria horizontal. Aquí no hay un "jefe" dueño de todo, la comunidad manda.</p>`}
                  />
                  <FlipPillarCard icon={Map} title="Identidad" subtitle="Producto Genuino" color="#15803d" bg="#dcfce7"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">Prohibida la folclorización.</p><p>Se vende la vida campesina real (el ordeño, la siembra, las arepas) sin inventar espectáculos falsos ni disfraces para complacer expectativas irreales del turista.</p>`}
                  />
                  <FlipPillarCard icon={Coins} title="Redistribución" subtitle="Economía local" color="#b45309" bg="#fef3c7"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">Beneficio Colectivo.</p><p>Las utilidades netas del turismo no se van a la capital. Se reinvierten en infraestructura local (escuelas, acueductos) y fondos de emergencia para las familias de la vereda.</p>`}
                  />
                </div>
              </div>

              {/* Dinámica Rediseñada */}
              <div style={{ background: 'white', borderRadius: '25px', padding: '3rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica de Reflexión</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>De la Teoría a la Práctica</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>Selecciona una pestaña para comprender la fricción natural entre las reglas de papel y los desafíos humanos en las veredas.</p>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setSliderValue(0)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue < 50 ? '#166534' : '#f1f5f9', color: sliderValue < 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Target size={20} /> Visión Idealizada
                  </button>
                  <button onClick={() => setSliderValue(100)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue >= 50 ? '#b91c1c' : '#f1f5f9', color: sliderValue >= 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertTriangle size={20} /> Desgaste Práctico
                  </button>
                </div>

                <div style={{ padding: '3rem', borderRadius: '20px', background: sliderValue < 50 ? '#f0fdf4' : '#fef2f2', border: `2px solid ${sliderValue < 50 ? '#bbf7d0' : '#fecaca'}`, transition: 'all 0.4s ease', minHeight: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  {sliderValue < 50 ? (
                    <div className="fade-in">
                      <Target size={60} color="#16a34a" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#166534', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>Sinergia Perfecta</h4>
                      <p style={{ color: '#14532d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Toda la vereda respeta los estatutos de convivencia. Los guías, cocineras y dueños de fincas dividen los ingresos con exactitud matemática, y reinvierten felizmente en el salón comunal.</p>
                    </div>
                  ) : (
                    <div className="fade-in">
                      <AlertTriangle size={60} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#b91c1c', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>Fatiga Comunitaria</h4>
                      <p style={{ color: '#7f1d1d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Aparición de liderazgos caciquistas que acaparan a los turistas. Las familias se cansan de las largas reuniones, surge la desconfianza por el manejo de la caja menor y se rompe el tejido social por la envidia económica.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
  );
}
