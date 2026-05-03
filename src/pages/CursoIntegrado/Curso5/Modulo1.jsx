import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Network, TrendingUp, Gem, Shield, Users, Target, ArrowRight, Eye, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Modulo1Curso5() {
  const [activePrism, setActivePrism] = useState('fisico');
  const [activeEquity, setActiveEquity] = useState(null);

  const kapfererPrism = {
    fisico: { id: 'fisico', name: '1. Físico (Apariencia)', icon: Eye, color: '#3b82f6', desc: 'Los elementos tangibles y visuales que el turista puede tocar y ver. Tu logo, la arquitectura de tu posada, los uniformes y hasta la limpieza del lugar.', example: 'El uso de madera recuperada en la señalética y uniformes de fibras naturales que comunican rusticidad y respeto por el entorno.' },
    personalidad: { id: 'personalidad', name: '2. Personalidad', icon: Target, color: '#ec4899', desc: 'El carácter de tu marca si fuera una persona. ¿Es un guía sabio y tranquilo? ¿Es un joven aventurero y energético?', example: 'Un tono de voz acogedor, sencillo y experto, que hace sentir al turista que está en buenas manos.' },
    cultura: { id: 'cultura', name: '3. Cultura', icon: Network, color: '#10b981', desc: 'El sistema de valores que guía todo lo que haces. Es tu compromiso ético con el territorio y la comunidad.', example: 'La cultura de "Sostenibilidad Radical": donde no se usa plástico y cada ingrediente del menú se compra a menos de 5km a la redonda.' },
    relacion: { id: 'relacion', name: '4. Relación', icon: Users, color: '#f59e0b', desc: 'El tipo de vínculo que estableces con el visitante. En turismo, esto define la calidez del servicio.', example: 'La relación de "Anfitrión Local": No eres un empleado de hotel, eres un vecino que abre las puertas de su territorio con orgullo.' },
    reflejo: { id: 'reflejo', name: '5. Reflejo (El Cliente)', icon: Briefcase, color: '#8b5cf6', desc: 'Cómo se ve desde afuera el cliente ideal de tu marca. Es la "foto" de quién usa tus servicios.', example: 'Un viajero consciente, curioso, que prefiere una caminata por el monte que un centro comercial.' },
    autoimagen: { id: 'autoimagen', name: '6. Autoimagen', icon: Gem, color: '#ea580c', desc: 'Cómo se siente el turista internamente al elegirte. ¿Se siente más responsable? ¿Más aventurero?', example: 'Al elegirte, el turista siente: "Soy una persona que ayuda a conservar la naturaleza y apoya el desarrollo local".' }
  };

  const aakerEquity = [
    { title: 'Reconocimiento (Awareness)', desc: '¿La gente en tu región o país sabe que tu emprendimiento existe? ¿Eres lo primero que piensan cuando buscan "turismo de naturaleza"?' },
    { title: 'Lealtad (Loyalty)', desc: 'El activo más valioso. ¿Tus clientes te recomiendan y quieren volver cada año?' },
    { title: 'Calidad Percibida', desc: '¿El turista siente que el precio que pagó por la experiencia vale totalmente la pena? La percepción de valor es clave.' },
    { title: 'Asociaciones de Marca', desc: 'Lo que la mente del turista vincula a tu nombre. (Ej. Tu Marca = Seguridad, Paz y Comida Deliciosa).' }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>
      <Helmet>
        <title>Módulo 1: Fundamentos de Marca para el Territorio</title>
      </Helmet>

      {/* Hero Section */}
      <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Briefcase size={18} style={{ marginRight: '8px', color: '#60a5fa' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>MÓDULO 1: ESTRATEGIA DE MARCA</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Construyendo la Identidad de tu Negocio Turístico
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Superemos el mito de que "la marca es solo un logo". Vamos a definir el alma de tu proyecto usando herramientas profesionales adaptadas a la realidad de nuestro turismo.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* Aaker Brand Equity */}
        <div className="glass-card" style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', marginBottom: '4rem', borderTop: '6px solid #032968' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <TrendingUp size={40} color="#032968" style={{ marginRight: '20px' }} />
            <div>
              <span style={{ color: '#64748b', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>El Valor de tu Nombre</span>
              <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>¿Cuánto vale tu marca? (Brand Equity)</h2>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                El concepto de <strong>Brand Equity</strong> (Capital de Marca) fue estructurado por el destacado teórico <strong>David Aaker</strong> en 1991. Aaker revolucionó el marketing al demostrar que la marca no es un elemento decorativo, sino un activo financiero corporativo.
              </p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
                El valor de tu negocio no es solo tu infraestructura (tu casa o tus botes); es el conjunto de activos y pasivos vinculados a tu nombre. Una marca fuerte según el modelo de Aaker es lo que te permite sostener precios premium, crear barreras de entrada para la competencia y asegurar la lealtad del turista.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Strategy&backgroundColor=e2e8f0" alt="Estrategia" style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid white', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
              <div style={{ marginTop: '10px', fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>Estrategia de Territorio</div>
              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Pensando en el Futuro</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {aakerEquity.map((item, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveEquity(idx)}
                onMouseLeave={() => setActiveEquity(null)}
                style={{
                  background: activeEquity === idx ? '#f1f5f9' : 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  transform: activeEquity === idx ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: activeEquity === idx ? '0 10px 15px -3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#cbd5e1', marginBottom: '10px' }}>0{idx + 1}</div>
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '10px', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kapferer Prism Interactive */}
        <div className="glass-card" style={{ background: '#f8fafc', borderRadius: '16px', padding: '3rem', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)', marginBottom: '4rem', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
              <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>La Herramienta Maestra</span>
              <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem' }}>El Prisma de Identidad de Kapferer</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, margin: '0 auto 1rem auto' }}>
                Desarrollado en 1986 por el investigador francés <strong>Jean-Noël Kapferer</strong>, uno de los expertos más reconocidos mundialmente en gestión de marcas. Kapferer argumentó que las marcas fuertes son capaces de tejer de forma coherente todas sus facetas en un sistema estructurado.
              </p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, margin: '0 auto' }}>
                Para que tu marca sea creíble, debe ser coherente. El modelo de Kapferer divide la identidad en 6 facetas (Físico, Personalidad, Cultura, Relación, Reflejo y Autoimagen). Si una no encaja con la otra, se rompe la ilusión y el turista no confiará. <strong>Haz clic en cada faceta para ver su teoría y aplicación a tu proyecto.</strong>
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Prism Visualization */}
            <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', width: '100%' }}>
                {Object.values(kapfererPrism).map((facet) => {
                  const Icon = facet.icon;
                  const isActive = activePrism === facet.id;
                  return (
                    <button
                      key={facet.id}
                      onClick={() => setActivePrism(facet.id)}
                      style={{
                        background: isActive ? facet.color : 'white',
                        color: isActive ? 'white' : '#475569',
                        border: isActive ? 'none' : '1px solid #cbd5e1',
                        padding: '1.5rem 1rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isActive ? `0 10px 20px -5px ${facet.color}60` : '0 2px 4px rgba(0,0,0,0.05)',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      <Icon size={28} style={{ marginBottom: '10px', color: isActive ? 'white' : facet.color }} />
                      <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>{facet.name}</span>
                    </button>
                  );
                })}
              </div>
              <div style={{ position: 'absolute', top: '10%', bottom: '10%', left: '50%', width: '2px', background: 'linear-gradient(to bottom, transparent, #94a3b8, transparent)', zIndex: 0 }}></div>
            </div>

            {/* Facet Detail */}
            <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', borderTop: `6px solid ${kapfererPrism[activePrism].color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                {React.createElement(kapfererPrism[activePrism].icon, { size: 36, color: kapfererPrism[activePrism].color, style: { marginRight: '15px' } })}
                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, margin: 0 }}>
                  {kapfererPrism[activePrism].name}
                </h3>
              </div>
              <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.6, marginBottom: '2rem' }}>
                {kapfererPrism[activePrism].desc}
              </p>
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', borderLeft: `4px solid ${kapfererPrism[activePrism].color}` }}>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '8px', fontSize: '0.95rem', textTransform: 'uppercase' }}>Ejemplo Turístico:</strong>
                <p style={{ margin: 0, color: '#475569', fontStyle: 'italic', lineHeight: 1.5 }}>{kapfererPrism[activePrism].example}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Conclusion */}
        <div style={{ background: '#ecfdf5', borderLeft: '8px solid #10b981', padding: '2.5rem', borderRadius: '0 16px 16px 0', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#065f46', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <Shield size={28} style={{ marginRight: '10px' }} />
            Aplicación Práctica en tu Territorio
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#047857', lineHeight: 1.7, margin: 0 }}>
            No diseñes un logotipo hasta que no hayas definido tu Prisma de Identidad. Si eres un proyecto de turismo comunitario, tu <strong>Cultura</strong> debe gritar "Sostenibilidad", tu <strong>Relación</strong> debe ser de "Anfitrión Local", y tu <strong>Físico</strong> (colores, logo, fotografía) debe reflejar esos valores. La coherencia entre estas 6 dimensiones es lo que convierte a un emprendimiento en una marca legítima e imbatible.
          </p>
        </div>

      </div>
    </div>
  );
}
