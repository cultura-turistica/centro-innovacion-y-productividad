import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserCircle, Compass, Heart, Crown, Rocket, Zap, Shield, Wand2, Star, Link as LinkIcon, MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Modulo2Curso5() {
  const [selectedArchetype, setSelectedArchetype] = useState(null);

  const archetypes = [
    {
      id: 'explorador',
      name: 'El Explorador',
      icon: Compass,
      color: '#059669',
      dicebearUrl: 'https://api.dicebear.com/9.x/avataaars/svg?top=winterHat1&clothing=overall&accessories=wayfarers&clothesColor=929598&backgroundColor=059669&eyes=default&mouth=smile&skinColor=edb98a&hairColor=2c1b18',
      brandName: 'Patagonia',
      brandDomain: 'patagonia.com',
      brandDesc: 'No venden ropa, venden aventura y conservación. Te inspiran a salir de la rutina y explorar el mundo.',
      desc: 'Busca la libertad, el descubrimiento y salir de la rutina.',
      brandVoice: 'Audaz, enérgico, inspirador y directo.',
      phrase: '"La vida empieza donde termina tu zona de confort. Descubre lo inexplorado con nosotros."',
      visuals: 'Fotografía en gran angular de personas diminutas en paisajes inmensos. Uso de luz natural, tonos verdes y tierra.'
    },
    {
      id: 'cuidador',
      name: 'El Cuidador',
      icon: Heart,
      color: '#ec4899',
      dicebearUrl: 'https://api.dicebear.com/9.x/avataaars/svg?top=bun&clothing=shirtVNeck&mouth=smile&eyes=happy&clothesColor=ffafb9&backgroundColor=ec4899&skinColor=ffdbb4&hairColor=4a312c',
      brandName: 'Johnson & Johnson',
      brandDomain: 'jnj.com',
      brandDesc: 'Su enfoque es la protección maternal, la seguridad de la familia y el cuidado incondicional.',
      desc: 'Protege y nutre a los demás. Transmite seguridad, paz y empatía.',
      brandVoice: 'Cálido, maternal, protector y amable.',
      phrase: '"Relájate, nosotros nos encargamos de todo para que disfrutes con tu familia en paz y seguridad."',
      visuals: 'Fotografía con luz suave, rostros sonrientes, colores pasteles (rosa, azul claro). Enfoque en la hospitalidad.'
    },
    {
      id: 'mago',
      name: 'El Mago',
      icon: Wand2,
      color: '#8b5cf6',
      dicebearUrl: 'https://api.dicebear.com/9.x/avataaars/svg?top=turban&facialHair=beardMajestic&clothing=blazerAndSweater&accessories=round&clothesColor=262e33&backgroundColor=8b5cf6&eyes=default&mouth=serious&skinColor=d08b5b',
      brandName: 'Disney',
      brandDomain: 'disney.com',
      brandDesc: 'Prometen hacer tus sueños realidad. Venden la magia y la transformación de lo ordinario en extraordinario.',
      desc: 'Transforma la realidad y crea experiencias místicas e inolvidables.',
      brandVoice: 'Místico, carismático, visionario y articulado.',
      phrase: '"Experimenta la magia de la selva. Te llevamos a un viaje que transformará la forma en que ves el mundo."',
      visuals: 'Colores oscuros con destellos de luz (morados, azules noche). Fotografía etérea, desenfoques artísticos, misticismo.'
    },
    {
      id: 'gobernante',
      name: 'El Gobernante',
      icon: Crown,
      color: '#f59e0b',
      dicebearUrl: 'https://api.dicebear.com/9.x/avataaars/svg?top=shortFlat&facialHair=beardMajestic&clothing=blazerAndShirt&accessories=prescription02&skinColor=ae5d29&backgroundColor=f59e0b&eyes=default&mouth=serious&hairColor=2c1b18',
      brandName: 'Rolex',
      brandDomain: 'rolex.com',
      brandDesc: 'Representan el poder absoluto, el estatus social y la excelencia técnica sin compromisos.',
      desc: 'Representa poder, exclusividad, estatus y liderazgo.',
      brandVoice: 'Autoritario, sofisticado, exclusivo y refinado.',
      phrase: '"La excelencia no se negocia. Descubre el estándar de oro en confort y privacidad reservado para ti."',
      visuals: 'Mucho espacio en blanco, tipografías clásicas (serif), paleta de colores negra/blanca/dorada. Imágenes de lujo y perfección.'
    },
    {
      id: 'rebelde',
      name: 'El Rebelde',
      icon: Zap,
      color: '#1f2937',
      dicebearUrl: 'https://api.dicebear.com/9.x/avataaars/svg?top=shavedSides&clothing=hoodie&accessories=sunglasses&facialHair=beardLight&clothesColor=3c4f5c&backgroundColor=1f2937&eyes=squint&mouth=serious&skinColor=edb98a&hairColor=2c1b18',
      brandName: 'Harley-Davidson',
      brandDomain: 'harley-davidson.com',
      brandDesc: 'Venden libertad pura y rebeldía. Están en contra de lo tradicional y lo corporativo.',
      desc: 'Rompe las reglas. Es disruptivo, atrevido y contracorriente.',
      brandVoice: 'Irreverente, provocador, rudo y directo.',
      phrase: '"Olvida los tours aburridos para turistas normales. Ensúciate las botas y rompe las reglas con nosotros."',
      visuals: 'Altos contrastes, texturas de ruido/grano, colores agresivos (negro, naranja neón, rojo). Fotografía cruda y callejera.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Módulo 2: Arquetipos y Brand Voice</title>
      </Helmet>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <UserCircle size={18} style={{ marginRight: '8px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MÓDULO 2: ARQUETIPOS DE JUNG</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Arquetipos Psicológicos y "Brand Voice"
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Carl Jung demostró que el subconsciente humano responde a patrones de personalidad universales. Descubre cómo definir la Voz de tu Marca para conectar instintivamente con tu nicho de mercado.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Archetypes Grid */}
        <div className="glass-card" style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '4rem', borderTop: '6px solid #8b5cf6' }}>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem', fontWeight: 800, textAlign: 'center' }}>
            Simulador de Brand Voice (Voz de Marca)
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
            Si vendes turismo extremo pero redactas tus posts en Instagram pidiendo "por favor, anímate a venir", estás rompiendo el arquetipo. <strong>Selecciona una personalidad abajo</strong> para ver cómo cambia radicalmente la manera en que la empresa se comunica visual y textualmente.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {archetypes.map((arch) => {
              const Icon = arch.icon;
              const isSelected = selectedArchetype === arch.id;
              
              return (
                <div 
                  key={arch.id}
                  onClick={() => setSelectedArchetype(isSelected ? null : arch.id)}
                  style={{ 
                    background: isSelected ? arch.color : '#f8fafc',
                    borderRadius: '16px',
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isSelected ? `0 20px 25px -5px ${arch.color}40` : 'inset 0 2px 4px 0 rgba(0,0,0,0.02)',
                    border: isSelected ? 'none' : '1px solid #e2e8f0',
                    color: isSelected ? 'white' : '#0f172a',
                    transform: isSelected ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={arch.dicebearUrl} alt={arch.name} style={{ width: '80px', height: '80px', borderRadius: '50%', border: `4px solid ${isSelected ? 'white' : arch.color}`, marginRight: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'all 0.3s' }} />
                      <div style={{ position: 'absolute', bottom: 0, right: '15px', background: isSelected ? 'white' : arch.color, color: isSelected ? arch.color : 'white', borderRadius: '50%', padding: '6px', display: 'flex', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', transition: 'all 0.3s' }}>
                        <Icon size={16} />
                      </div>
                    </div>
                    <h4 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>{arch.name}</h4>
                  </div>
                  
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: isSelected ? 'rgba(255,255,255,0.9)' : '#475569', marginBottom: '1.5rem' }}>
                    {arch.desc}
                  </p>

                  {isSelected && (
                    <div style={{ animation: 'fadeIn 0.5s ease' }}>
                      <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                          <MessageSquareQuote size={18} style={{ marginRight: '8px', opacity: 0.8 }} />
                          <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>
                            Tono de Voz (Tu Mensaje):
                          </strong>
                        </div>
                        <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>{arch.brandVoice}</p>
                        <p style={{ margin: 0, fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem', color: '#fcd34d' }}>{arch.phrase}</p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.3)' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '5px' }}>
                          Dirección de Arte Visual:
                        </strong>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>{arch.visuals}</p>
                      </div>

                      {/* Real World Brand Example using Clearbit */}
                      <div style={{ background: 'white', color: '#0f172a', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                          <Star size={20} style={{ color: arch.color, marginRight: '10px' }} />
                          <strong style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: arch.color }}>Ejemplo del Mundo Real</strong>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '12px', border: '1px solid #e2e8f0', minWidth: '70px', display: 'flex', justifyContent: 'center' }}>
                            <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${arch.brandDomain}&size=128`} alt={`Logo ${arch.brandName}`} style={{ width: '50px', height: '50px', objectFit: 'contain' }} onError={(e) => e.target.style.display = 'none'} />
                          </div>
                          <div>
                            <h5 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 5px 0' }}>{arch.brandName}</h5>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569', lineHeight: 1.5 }}>{arch.brandDesc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!isSelected && (
                    <div style={{ textAlign: 'center', color: arch.color, fontSize: '0.9rem', fontWeight: 700, marginTop: '1rem' }}>
                      Cargar ADN de Marca ↓
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Practical Task */}
        <div style={{ background: '#ecfdf5', borderLeft: '8px solid #10b981', padding: '2.5rem', borderRadius: '0 16px 16px 0', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <Shield size={28} style={{ marginRight: '10px' }} />
            Regla de Oro: Evita la Esquizofrenia de Marca
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#047857', lineHeight: 1.7, margin: 0 }}>
            Una marca sufre de <strong>esquizofrenia corporativa</strong> cuando su logotipo es del "Gobernante" (Lujo, Negro y Dorado), pero sus publicaciones en redes usan tipografías de "El Bufón" (Comic Sans, Memes) y sus textos hablan como "El Cuidador". Debes elegir <strong>UN</strong> arquetipo primario y adherirte a él con precisión quirúrgica en todos los puntos de contacto con el cliente.
          </p>
        </div>

      </div>
    </div>
  );
}
