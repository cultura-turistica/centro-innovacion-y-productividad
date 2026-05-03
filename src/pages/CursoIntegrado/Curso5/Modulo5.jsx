import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, Hash, Camera, ShieldAlert, Sparkles, AlertTriangle, MonitorPlay, Component, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Modulo5Curso5() {
  const [activeStrategy, setActiveStrategy] = useState('polished');

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Módulo 5: Ecosistema Gráfico Final</title>
      </Helmet>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Component size={18} style={{ marginRight: '8px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MÓDULO 5: IMPLEMENTACIÓN</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            El Ecosistema Gráfico Final
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Ya tienes el Prisma de Identidad, el Arquetipo, los Códigos de Color (WCAG) y la Ingeniería Tipográfica. Ahora debes integrarlos en un ecosistema vivo (Web y Redes Sociales) que domine el algoritmo.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Core Concept: Visual Architecture */}
        <div className="glass-card" style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '4rem', borderTop: '6px solid #ef4444' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 800 }}>
              La Guerra de los Formatos: Pulido vs Crudo
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto' }}>
              En 2024, el mayor error de una empresa es diseñar TODO de forma corporativa. El algoritmo de redes sociales castiga severamente el contenido que parece "anuncio publicitario". Debes dominar la dualidad entre el contenido editorial (para prestigio) y el contenido crudo (para alcance).
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '2rem' }}>
            <button 
              onClick={() => setActiveStrategy('polished')}
              style={{ padding: '12px 30px', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem', border: activeStrategy === 'polished' ? 'none' : '2px solid #e2e8f0', background: activeStrategy === 'polished' ? '#0f172a' : 'white', color: activeStrategy === 'polished' ? 'white' : '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.3s' }}
            >
              <Sparkles size={20} style={{ marginRight: '10px' }} /> Diseño Pulido (Editorial)
            </button>
            <button 
              onClick={() => setActiveStrategy('raw')}
              style={{ padding: '12px 30px', borderRadius: '50px', fontWeight: 700, fontSize: '1.1rem', border: activeStrategy === 'raw' ? 'none' : '2px solid #e2e8f0', background: activeStrategy === 'raw' ? '#ea580c' : 'white', color: activeStrategy === 'raw' ? 'white' : '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.3s' }}
            >
              <Camera size={20} style={{ marginRight: '10px' }} /> Contenido Crudo (UGC)
            </button>
          </div>

          <div style={{ background: activeStrategy === 'polished' ? '#f8fafc' : '#fff7ed', padding: '3rem', borderRadius: '16px', transition: 'background 0.3s', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'center' }}>
            {activeStrategy === 'polished' ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <div style={{ aspectRatio: '1', background: '#cbd5e1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Foto High-End</div>
                  <div style={{ aspectRatio: '1', background: '#0f172a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e2e8f0', padding: '20px', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>FRASE INSPIRACIONAL SERIF</div>
                  <div style={{ aspectRatio: '1', background: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>Logo / Infografía</div>
                  <div style={{ aspectRatio: '1', background: '#cbd5e1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Foto High-End</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem', fontWeight: 800 }}>Estética Editorial y Autoridad</h3>
                  <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Aplicación estricta del Kerning, la paleta WCAG y el Prisma de Identidad. El diseño es perfecto y calculado.
                  </p>
                  <ul style={{ paddingLeft: '20px', color: '#334155', lineHeight: 1.8 }}>
                    <li><strong>Objetivo:</strong> Generar confianza, justificar precios altos y mostrar prestigio institucional.</li>
                    <li><strong>Dónde se usa:</strong> Página Web oficial, Folletos de Venta (PDF), Presentaciones Corporativas, el 30% del Feed de Instagram.</li>
                    <li><strong>Alerta del algoritmo:</strong> Tiene bajo engagement natural porque se percibe frío. No esperes likes aquí.</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  <div style={{ height: '300px', background: '#cbd5e1', borderRadius: '8px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '15px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }}></div>
                    <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                      <div style={{ background: '#ea580c', display: 'inline-block', padding: '3px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '5px' }}>REELS / TIKTOK</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.2 }}>"Un día trabajando como guía en la montaña..." (Video Grabado con el Celular)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', color: '#9a3412', marginBottom: '1rem', fontWeight: 800 }}>User Generated Content (UGC) & "Raw"</h3>
                  <p style={{ color: '#7c2d12', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Olvídate de la perfección tipográfica. Este es el contenido humano, "sucio", real y sin filtros.
                  </p>
                  <ul style={{ paddingLeft: '20px', color: '#9a3412', lineHeight: 1.8 }}>
                    <li><strong>Objetivo:</strong> Crear viralidad, alcance algorítmico, y conectar de humano a humano.</li>
                    <li><strong>Dónde se usa:</strong> Instagram Reels, Historias (Stories), TikTok. Ocupa el 70% de la estrategia diaria.</li>
                    <li><strong>Regla de Identidad:</strong> Aunque sea crudo, el <strong>Tono de Voz (Arquetipo)</strong> no se pierde. Si eres "El Sabio", hablas a cámara enseñando; si eres "El Rebelde", grabas mostrando riesgo.</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* The Algorithm Funnel */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>El Embudo Visual 2024</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            
            <div style={{ padding: '3rem 2rem', textAlign: 'center', borderRight: '1px solid #e2e8f0', position: 'relative' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#3b82f6' }}>
                <MonitorPlay size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>1. Tráfico (Video Raw)</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                El algoritmo de Meta (Instagram) muestra videos cortos "sucios" y auténticos a gente que no te sigue. Aquí no vendes, solo entretienes o educas.
              </p>
            </div>

            <div style={{ padding: '3rem 2rem', textAlign: 'center', borderRight: '1px solid #e2e8f0' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#10b981' }}>
                <LayoutGrid size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>2. Interés (El Feed)</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                El usuario entra a tu perfil por el video. Tu "Feed" (Grilla) debe estar estructurado con la regla 60-30-10 y tipografía estricta. Entienden tu nivel corporativo al instante.
              </p>
            </div>

            <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
              <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#8b5cf6' }}>
                <Hash size={30} />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>3. Retención (SEO Visual)</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                No uses Hashtags genéricos (#Turismo). Usa long-tail keywords (#TurismoComunitarioColombia). Mantén el prisma de identidad y el Tono de Voz de tu Arquetipo intactos.
              </p>
            </div>

          </div>
        </div>

        {/* Warning: Authentic vs Polished */}
        <div style={{ background: '#fffbeb', borderLeft: '8px solid #f59e0b', padding: '2.5rem', borderRadius: '0 16px 16px 0', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#b45309', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <ShieldAlert size={28} style={{ marginRight: '10px' }} />
            Recapitulación Estratégica del Territorio
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#92400e', lineHeight: 1.7, margin: 0 }}>
            Has aprendido a transicionar del diseño intuitivo a la arquitectura de marca profesional. La legitimidad de tu proyecto no se mide en "likes", sino en el **Brand Equity (Aaker)** que eres capaz de construir. Mide el éxito de tu ecosistema gráfico evaluando tu capacidad para mantener precios altos sin perder la fidelidad del cliente, gracias a una percepción de marca inquebrantable.
          </p>
        </div>

        {/* End of course */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'linear-gradient(135deg, #032968 0%, #0f172a 100%)', color: 'white', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)', border: '1px solid #1e293b' }}>
          <Award size={64} color="#fbbf24" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>¡Certificación en Ingeniería de Marca!</h2>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Estás listo para construir marcas legítimas, de alto valor financiero y estructuradas sobre ciencia visual.
          </p>
          <Link to="/cursos" style={{ display: 'inline-block', background: '#fbbf24', color: '#854d0e', padding: '15px 40px', borderRadius: '50px', fontWeight: 800, textDecoration: 'none', fontSize: '1.1rem', transition: 'all 0.3s ease', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            VOLVER A LA ACADEMIA
          </Link>
        </div>

      </div>
    </div>
  );
}
