import React, { useState } from 'react';
import { Lightbulb, Film, Image as ImageIcon, Music, Hand, Coffee, Wind, Target, Sun, Leaf, Camera, Utensils } from 'lucide-react';

const SceneFlipCard = ({ esc }) => {
  const Icon = esc.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="interactive-card hover-scale"
      style={{ perspective: '1000px', cursor: 'pointer', height: '280px', minWidth: '280px', flex: '0 0 auto' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        style={{ 
          position: 'relative', width: '100%', height: '100%', 
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
      >
        {/* Frente de la Tarjeta */}
        <div 
          style={{ 
            position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
            background: 'white', padding: '2rem', borderRadius: '20px', borderTop: `6px solid ${esc.c}`, 
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', textAlign: 'center'
          }}
        >
          <div style={{ background: esc.bg, color: esc.c, width: '90px', height: '90px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
            <Icon size={40} />
          </div>
          <h5 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e293b', margin: '0 0 10px 0' }}>{esc.s}</h5>
          <p style={{ color: esc.c, fontSize: '1rem', fontWeight: 700, margin: 0 }}>{esc.t}</p>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '15px', background: '#f1f5f9', padding: '4px 10px', borderRadius: '15px' }}>Clic para revelar</span>
        </div>

        {/* Reverso de la Tarjeta */}
        <div 
          style={{ 
            position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
            background: esc.bg, padding: '2rem', borderRadius: '20px', border: `2px solid ${esc.c}`, 
            boxShadow: `0 10px 25px ${esc.c}30`, transform: 'rotateY(180deg)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'
          }}
        >
          <h5 style={{ fontSize: '1.1rem', fontWeight: 900, color: esc.c, marginBottom: '15px' }}>{esc.t}</h5>
          <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>{esc.d}</p>
        </div>
      </div>
    </div>
  );
};

export default function Modulo3({ headerColor, headerGradient, data }) {
  const [activeSense, setActiveSense] = useState('vista');

  const senses = {
    vista: { icon: ImageIcon, title: data.sentidos.items.vista.title, text: data.sentidos.items.vista.text, color: '#3b82f6' },
    oido: { icon: Music, title: data.sentidos.items.oido.title, text: data.sentidos.items.oido.text, color: '#8b5cf6' },
    tacto: { icon: Hand, title: data.sentidos.items.tacto.title, text: data.sentidos.items.tacto.text, color: '#ea580c' },
    olfato: { icon: Wind, title: data.sentidos.items.olfato.title, text: data.sentidos.items.olfato.text, color: '#16a34a' },
    gusto: { icon: Coffee, title: data.sentidos.items.gusto.title, text: data.sentidos.items.gusto.text, color: '#eab308' }
  };

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          {data.header.title}
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          {data.header.description}
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#ea580c' }}>
          <h4><Film size={28} /> {data.cine.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.cine.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.cine.p2 }}></p>
        </div>

        {/* Los 5 Sentidos Interactivos */}
        <h3 className="mb-4 text-center" style={{ color: headerColor || '#ea580c' }}>{data.sentidos.title}</h3>
        <p className="text-center mb-8" style={{ color: '#475569' }}>{data.sentidos.description}</p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {Object.keys(senses).map((key) => {
            const SenseIcon = senses[key].icon;
            const isActive = activeSense === key;
            return (
              <div 
                key={key}
                onMouseEnter={() => setActiveSense(key)}
                onMouseLeave={() => setActiveSense(null)}
                style={{
                  width: isActive ? '300px' : '80px',
                  height: '80px',
                  background: isActive ? senses[key].color : 'white',
                  color: isActive ? 'white' : '#64748b',
                  borderRadius: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: isActive ? '0 25px' : '0',
                  justifyContent: isActive ? 'flex-start' : 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: isActive ? `0 10px 20px ${senses[key].color}40` : '0 4px 10px rgba(0,0,0,0.05)',
                  border: `2px solid ${isActive ? senses[key].color : '#e2e8f0'}`,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', minWidth: '300px' }}>
                  <SenseIcon size={30} />
                  {isActive && (
                    <div style={{ animation: 'popIn 0.3s forwards' }}>
                      <strong style={{ display: 'block', fontSize: '1.1rem' }}>{senses[key].title}</strong>
                      <span style={{ fontSize: '0.8rem', opacity: 0.9, lineHeight: 1.2, display: 'block', maxWidth: '200px' }}>
                        {senses[key].text}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Ejercicio: Storyboard */}
        <div style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', padding: '3rem', borderRadius: '30px', border: '2px solid #fed7aa', boxShadow: '0 20px 40px rgba(234,88,12,0.1)' }}>
           <h4 style={{ color: '#9a3412', fontSize: '1.6rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <Film size={28} color="#ea580c" /> {data.storyboard.title}
           </h4>
           
           {/* Ejemplo Primero (Tarjetas Giratorias) */}
           <div className="grid-4" style={{ gap: '20px', marginBottom: '3rem' }}>
             {[
               { s: data.storyboard.cards[0].s, t: data.storyboard.cards[0].t, d: data.storyboard.cards[0].d, c: "#3b82f6", bg: "#eff6ff", icon: Sun },
               { s: data.storyboard.cards[1].s, t: data.storyboard.cards[1].t, d: data.storyboard.cards[1].d, c: "#10b981", bg: "#ecfdf5", icon: Leaf },
               { s: data.storyboard.cards[2].s, t: data.storyboard.cards[2].t, d: data.storyboard.cards[2].d, c: "#8b5cf6", bg: "#f5f3ff", icon: Camera },
               { s: data.storyboard.cards[3].s, t: data.storyboard.cards[3].t, d: data.storyboard.cards[3].d, c: "#ea580c", bg: "#fff7ed", icon: Utensils }
             ].map((esc, i) => (
               <SceneFlipCard key={i} esc={esc} />
             ))}
           </div>

           {/* Explicación de por qué se hace */}
           <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', display: 'flex', gap: '25px', alignItems: 'flex-start', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
             <div style={{ background: '#ea580c', padding: '18px', borderRadius: '50%', color: 'white', flexShrink: 0 }}>
               <Target size={35} />
             </div>
             <div>
               <h5 style={{ fontSize: '1.4rem', color: '#9a3412', margin: '0 0 15px 0', fontWeight: 800 }}>{data.storyboard.explicacion.title}</h5>
               <p style={{ margin: 0, color: '#475569', lineHeight: 1.7, fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: data.storyboard.explicacion.text }}></p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
