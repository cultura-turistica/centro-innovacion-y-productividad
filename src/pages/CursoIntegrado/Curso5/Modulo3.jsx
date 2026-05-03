import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Palette, Droplets, AlertTriangle, Globe, Activity, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Modulo3Curso5() {
  const [textColor, setTextColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#eab308'); // Yellow default to show fail

  // Basic luminance calculation for contrast ratio simulation
  const getLuminance = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const a = [r, g, b].map(v => {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (color1, color2) => {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  };

  const contrast = getContrastRatio(textColor, bgColor);
  const passAA = contrast >= 4.5;
  const passLargeAA = contrast >= 3.0;

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Módulo 3: Colorimetría y Accesibilidad</title>
      </Helmet>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Palette size={18} style={{ marginRight: '8px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MÓDULO 3: COLORIMETRÍA AVANZADA</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Ciencia del Color y Accesibilidad (WCAG)
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            El color no se elige por gusto personal. Es una decisión estratégica que debe evaluar el contexto cultural y cumplir estrictos estándares técnicos de accesibilidad visual.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Cultural Context */}
        <div className="glass-card" style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '4rem', borderTop: '6px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <Globe size={40} color="#10b981" style={{ marginRight: '20px' }} />
            <div>
              <span style={{ color: '#64748b', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Contexto Sociocultural</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>El Significado no es Universal</h2>
            </div>
          </div>
          
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
            Un error grave en la globalización de marcas es asumir que la psicología del color occidental aplica en todo el mundo. Si tu proyecto de turismo o emprendimiento apunta a visitantes internacionales, debes conocer las traducciones culturales del color.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#ef4444', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>ROJO</div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Occidente:</strong> Urgencia, pasión, peligro, error.</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>China/Asia:</strong> Buena suerte, prosperidad, matrimonios.</p>
                <p style={{ margin: '0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Sudáfrica:</strong> Luto y sacrificio.</p>
              </div>
            </div>

            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#f8fafc', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px', borderBottom: '1px solid #e2e8f0' }}>BLANCO</div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Occidente:</strong> Pureza, paz, minimalismo, bodas.</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Este de Asia:</strong> Muerte, luto, reencarnación.</p>
                <p style={{ margin: '0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>India:</strong> Renuncia a los placeres terrenales (usado por viudas).</p>
              </div>
            </div>

            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#eab308', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>AMARILLO</div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Occidente:</strong> Felicidad, calidez, precaución (señales).</p>
                <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>Medio Oriente:</strong> Luto o pérdida.</p>
                <p style={{ margin: '0', fontSize: '0.95rem' }}><strong style={{ color: '#0f172a' }}>América Latina:</strong> En algunos países se asocia con envidia o celos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* WCAG Contrast Simulator */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#ea580c', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Laboratorio Técnico</span>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: 800, marginTop: '0.5rem' }}>Simulador de Accesibilidad WCAG</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '800px', margin: '1rem auto' }}>
              El estándar internacional <strong>Web Content Accessibility Guidelines (WCAG)</strong> exige que los colores de tu marca tengan suficiente contraste matemático para que personas con problemas visuales puedan leerlos. La regla exige un ratio mínimo de <strong>4.5:1</strong>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            
            {/* Controls */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 800 }}>Mide tu contraste</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Juega con los colores para ver cómo un diseño que parece "bonito", puede fallar legalmente en estándares de accesibilidad digital.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>
                  <span>Color de Texto</span>
                  <span style={{ fontFamily: 'monospace', color: '#64748b' }}>{textColor}</span>
                </label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} style={{ width: '50px', height: '50px', cursor: 'pointer', border: 'none', padding: 0 }} />
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#ffffff', '#0f172a', '#ef4444', '#3b82f6'].map(c => (
                      <div key={c} onClick={() => setTextColor(c)} style={{ width: '30px', height: '30px', background: c, borderRadius: '4px', cursor: 'pointer', border: '1px solid #cbd5e1' }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600, color: '#334155' }}>
                  <span>Color de Fondo</span>
                  <span style={{ fontFamily: 'monospace', color: '#64748b' }}>{bgColor}</span>
                </label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ width: '50px', height: '50px', cursor: 'pointer', border: 'none', padding: 0 }} />
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#eab308', '#032968', '#f8fafc', '#10b981'].map(c => (
                      <div key={c} onClick={() => setBgColor(c)} style={{ width: '30px', height: '30px', background: c, borderRadius: '4px', cursor: 'pointer', border: '1px solid #cbd5e1' }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview & Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: bgColor, color: textColor, padding: '2rem', borderRadius: '12px', textAlign: 'center', transition: 'all 0.2s', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.5rem', margin: '0 0 10px 0', fontWeight: 800 }}>Texto Grande (Ej. Títulos)</h4>
                <p style={{ fontSize: '1rem', margin: 0, fontWeight: 500 }}>Texto normal de cuerpo. (Ej. Párrafos y botones).</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ flex: 1, background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', marginBottom: '5px', fontFamily: 'monospace' }}>
                    {contrast.toFixed(2)}:1
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Ratio Matemático</div>
                </div>

                <div style={{ flex: 1, background: passAA ? '#ecfdf5' : '#fef2f2', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${passAA ? '#a7f3d0' : '#fecaca'}`, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  {passAA ? <CheckCircle size={32} color="#10b981" style={{ marginBottom: '10px' }} /> : <XCircle size={32} color="#ef4444" style={{ marginBottom: '10px' }} />}
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: passAA ? '#065f46' : '#991b1b' }}>
                    {passAA ? 'APROBADO (AA)' : 'FALLA (WCAG)'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: passAA ? '#047857' : '#b91c1c', marginTop: '5px' }}>Para texto normal</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* UI Rule: 60-30-10 */}
        <div style={{ background: '#f0f9ff', borderLeft: '8px solid #0ea5e9', padding: '2.5rem', borderRadius: '0 16px 16px 0', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#0369a1', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <Activity size={28} style={{ marginRight: '10px' }} />
            Arquitectura de Color UI: La Regla 60-30-10
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#075985', lineHeight: 1.7, margin: 0 }}>
            Para llevar los colores de tu marca a una página web o un diseño de Instagram, usa esta fórmula probada: <strong>60% Color Dominante</strong> (usualmente fondos neutros o blancos para que el diseño respire), <strong>30% Color Secundario</strong> (el color principal de tu marca, usado en barras y menús) y <strong>10% Color de Acento</strong> (un color altamente contrastante, usado única y exclusivamente para los botones de "Comprar" o "Reservar").
          </p>
        </div>

      </div>
    </div>
  );
}
