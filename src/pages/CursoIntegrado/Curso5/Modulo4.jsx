import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Type, ArrowUpDown, ArrowLeftRight, Settings2, Grid, Layers, XOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Modulo4Curso5() {
  const [kerning, setKerning] = useState(0); // Tracking actually, but labeled simplistically for UI
  const [leading, setLeading] = useState(1.2);
  const [activeTab, setActiveTab] = useState('anatomy');

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Módulo 4: Anatomía Tipográfica</title>
      </Helmet>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Type size={18} style={{ marginRight: '8px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MÓDULO 4: INGENIERÍA TEXTUAL</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Anatomía Tipográfica y "Font Pairing"
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Escribir no es diseñar. La tipografía es el esqueleto visual de la comunicación. Aprende las matemáticas del espaciado (Kerning y Leading) y cómo combinar fuentes como un profesional.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Typographic Spacing Lab */}
        <div className="glass-card" style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '4rem', borderTop: '6px solid #eab308' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <Settings2 size={40} color="#eab308" style={{ marginRight: '20px' }} />
            <div>
              <span style={{ color: '#64748b', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Laboratorio de Legibilidad</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>El Ritmo: Tracking y Leading</h2>
            </div>
          </div>
          
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '800px' }}>
            Un buen diseño tipográfico es invisible. Si el usuario nota que el texto es difícil de leer, has fracasado. Juega con los controles para ver cómo el espacio matemático entre las letras y las líneas altera la percepción visual de la marca.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            
            {/* Controls */}
            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center' }}>
                    <ArrowLeftRight size={18} style={{ marginRight: '8px', color: '#3b82f6' }} />
                    Tracking (Espaciado General)
                  </label>
                  <span style={{ color: '#64748b', fontWeight: 600, fontFamily: 'monospace' }}>{kerning}px</span>
                </div>
                <input 
                  type="range" min="-3" max="15" step="0.5" value={kerning} onChange={(e) => setKerning(e.target.value)}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
                  <strong>Tip:</strong> Aumentar el tracking en títulos todo en MAYÚSCULAS transmite elegancia premium (ej. marcas de lujo). Nunca uses tracking negativo.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center' }}>
                    <ArrowUpDown size={18} style={{ marginRight: '8px', color: '#10b981' }} />
                    Leading (Interlineado)
                  </label>
                  <span style={{ color: '#64748b', fontWeight: 600, fontFamily: 'monospace' }}>{leading}x</span>
                </div>
                <input 
                  type="range" min="0.8" max="2.5" step="0.1" value={leading} onChange={(e) => setLeading(e.target.value)}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
                  <strong>Tip:</strong> El "Leading" correcto para cuerpo de texto en pantallas es entre 1.5 y 1.6. Si las líneas están muy juntas, el ojo se pierde al saltar de renglón.
                </p>
              </div>
            </div>

            {/* Live Text Viewer */}
            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 style={{ 
                margin: '0 0 20px 0', 
                fontSize: '2rem', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: `${kerning}px`,
                color: '#0f172a',
                fontFamily: "'Inter', sans-serif",
                transition: 'letter-spacing 0.1s'
              }}>
                TURISMO PREMIUM
              </h1>
              <p style={{ 
                margin: 0, 
                fontSize: '1.1rem', 
                color: '#475569', 
                lineHeight: leading,
                fontFamily: "'Inter', sans-serif",
                transition: 'line-height 0.1s'
              }}>
                Diseñar una identidad visual sin dominar la tipografía es como construir una casa sin cimientos. El espacio negativo (el blanco) es tan importante como el espacio positivo (la tinta).
              </p>
            </div>
          </div>
        </div>

        {/* Font Families & Pairing */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: 800, textAlign: 'center', marginBottom: '1rem' }}>Clasificación y "Font Pairing"</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
            Emparejar tipografías es como maridar vino y queso. El objetivo es crear <strong>Contraste</strong>, no conflicto. Nunca emparejes dos fuentes que se parezcan mucho, parecerá un error del sistema.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Serif */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1 }}>Ag</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#032968', marginBottom: '10px', fontWeight: 800 }}>Serif (Con Remates)</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Tienen "paticas" que guían el ojo. Excelentes para textos largos impresos (libros). Transmiten autoridad, historia, intelectualidad y lujo tradicional.
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #032968' }}>
                <strong>Pairing ideal:</strong> Combínala con una Sans-Serif ultra limpia para darle modernidad.
              </div>
            </div>

            {/* Sans Serif */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "'Helvetica', sans-serif", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1 }}>Ag</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#16a34a', marginBottom: '10px', fontWeight: 800 }}>Sans-Serif (Palo Seco)</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Limpias y geométricas. Nacieron para las pantallas digitales. Transmiten accesibilidad, innovación, limpieza y estabilidad corporativa.
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #16a34a' }}>
                <strong>Pairing ideal:</strong> Combínala con una Slab Serif gruesa para títulos de impacto.
              </div>
            </div>

            {/* Slab Serif */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 800, fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1 }}>Ag</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#ea580c', marginBottom: '10px', fontWeight: 800 }}>Slab Serif / Egipcias</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Remates cuadrados, gruesos como bloques. Transmiten muchísima fuerza, maquinaria, industrialización y audacia. Pésimas para texto pequeño.
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #ea580c' }}>
                <strong>Pairing ideal:</strong> Úsala SOLO en Títulos H1 gigantes.
              </div>
            </div>

            {/* Monospace */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "monospace", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1 }}>Ag</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '10px', fontWeight: 800 }}>Monospace</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Cada letra ocupa el mismo ancho matemático (como las máquinas de escribir). Transmiten estética cruda (Raw), código, tecnología profunda o documentos clasificados.
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #8b5cf6' }}>
                <strong>Pairing ideal:</strong> Excelente para detalles técnicos o metadatos en un diseño moderno.
              </div>
            </div>

            {/* Script */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "'Brush Script MT', cursive", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1 }}>Ag</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#ec4899', marginBottom: '10px', fontWeight: 800 }}>Script (Manuscrita)</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Imitan el trazo humano, la caligrafía o las firmas. Transmiten elegancia, romanticismo, creatividad o artesanía (hecho a mano).
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #ec4899' }}>
                <strong>Pairing ideal:</strong> NUNCA la uses todo en mayúsculas ni en cuerpo de texto. Úsala solo en firmas o detalles de acento.
              </div>
            </div>

            {/* Display */}
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontFamily: "Impact, sans-serif", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1, letterSpacing: '2px' }}>AG</h1>
              <h3 style={{ fontSize: '1.2rem', color: '#eab308', marginBottom: '10px', fontWeight: 800 }}>Display (Decorativa)</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Diseñadas exclusivamente para gritar y llamar la atención. Formas extremas, rebeldes o muy ruidosas. Su legibilidad es pésima en tamaños pequeños.
              </p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', color: '#64748b', borderLeft: '3px solid #eab308' }}>
                <strong>Pairing ideal:</strong> Excelente para el título principal de un póster combinada con una Sans-Serif neutral.
              </div>
            </div>
          </div>
        </div>

        {/* Warning Note */}
        <div style={{ background: '#fffbeb', borderLeft: '8px solid #f59e0b', padding: '2.5rem', borderRadius: '0 16px 16px 0', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#b45309', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <XOctagon size={28} style={{ marginRight: '10px' }} />
            Cuidado con la Altura-X (x-height)
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#92400e', lineHeight: 1.7, margin: 0 }}>
            La <strong>Altura de la X</strong> es el alto que tienen las letras minúsculas (sin contar las que suben como la 'h' o bajan como la 'p'). Las tipografías modernas diseñadas para pantallas (como Inter o Roboto) tienen una Altura-X muy grande, lo que engaña al ojo haciéndole creer que la letra es mayor y más legible en celulares. Al elegir la fuente para tu web, revisa siempre este parámetro.
          </p>
        </div>

      </div>
    </div>
  );
}
