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

export default function Modulo3({ headerColor, headerGradient }) {
  const [activeSense, setActiveSense] = useState(null);

  const senses = {
    vista: { icon: ImageIcon, title: 'Vista', text: 'Ver la magia de colores al amanecer en un bosque inundable. Colores cálidos, sonrisas, arquitectura limpia.', color: '#3b82f6' },
    oido: { icon: Music, title: 'Oído', text: 'Escuchar leyendas narradas por locales, el sonido de aves endémicas o la cumbia tradicional.', color: '#8b5cf6' },
    tacto: { icon: Hand, title: 'Tacto', text: 'Sentir la textura del barro en un taller de cerámica o el agua fría de la cascada.', color: '#ea580c' },
    olfato: { icon: Wind, title: 'Olfato', text: 'Oler el café recién tostado en la mañana o la leña quemada del fogón.', color: '#16a34a' },
    gusto: { icon: Coffee, title: 'Gusto', text: 'Saborear la semilla de cacao fresca o un plato típico recién preparado.', color: '#eab308' }
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
          Conceptualizar la Experiencia (Matriz 2)
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Diseña las emociones, la memoria y los 5 sentidos que atraparán al visitante.
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#ea580c' }}>
          <h4><Film size={28} /> La Analogía del Guion de Cine</h4>
          <p>
            Imagina que eres el director de una película. No le dices al actor simplemente "camina por el bosque". Le dices: <i>"Camina lentamente, siente la humedad del suelo, respira profundo y mira con asombro la luz que entra por las ramas"</i>.
          </p>
          <p>
            En turismo, la <strong>experiencia es el guion</strong> y el turista es tu actor principal. Tienes que definir exactamente qué va a sentir, qué va a aprender y qué recordará cuando regrese a casa.
          </p>
        </div>

        {/* Los 5 Sentidos Interactivos */}
        <h3 className="mb-4 text-center" style={{ color: headerColor || '#ea580c' }}>El Diseño de los 5 Sentidos</h3>
        <p className="text-center mb-8" style={{ color: '#475569' }}>Pasa el cursor (o toca) cada sentido para ver cómo se diseña una experiencia inmersiva.</p>

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
             <Film size={28} color="#ea580c" /> El Mapa Visual de la Experiencia (Storyboard)
           </h4>
           
           {/* Ejemplo Primero (Tarjetas Giratorias) */}
           <div className="grid-4" style={{ gap: '20px', marginBottom: '3rem' }}>
             {[
               { s: "Escena 1", t: "Llegada Inmersiva", d: "El turista llega a la finca, se le recibe con un jugo de gulupa (Gusto) y se le cuenta la historia de la familia con música suave de fondo (Oído).", c: "#3b82f6", bg: "#eff6ff", icon: Sun },
               { s: "Escena 2", t: "Conexión Física", d: "Recorrido por el sendero. El guía invita al turista a tocar la textura del musgo y la tierra húmeda (Tacto).", c: "#10b981", bg: "#ecfdf5", icon: Leaf },
               { s: "Escena 3", t: "El Clímax Visual", d: "Llegada al mirador justo al atardecer (Vista). Un momento diseñado exclusivamente para el asombro y el silencio.", c: "#8b5cf6", bg: "#f5f3ff", icon: Camera },
               { s: "Escena 4", t: "Anclaje de Memoria", d: "Cena tradicional en fogón de leña (Olfato) y entrega de un pequeño recuerdo artesanal para llevar a casa.", c: "#ea580c", bg: "#fff7ed", icon: Utensils }
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
               <h5 style={{ fontSize: '1.4rem', color: '#9a3412', margin: '0 0 15px 0', fontWeight: 800 }}>¿Por qué mapeamos visualmente la experiencia?</h5>
               <p style={{ margin: 0, color: '#475569', lineHeight: 1.7, fontSize: '1.1rem' }}>
                 Al desglosar tu producto en "escenas" secuenciales (como un director de cine) logras tres cosas críticas antes de operar:
                 <br/><br/>
                 1. <strong>Identificas vacíos:</strong> Te das cuenta si hay baches de aburrimiento (ej. 2 horas en un bus donde no ocurre nada) y los llenas de contenido. <br/>
                 2. <strong>Distribuyes los sentidos:</strong> Garantizas que no todo sea 100% visual. Aseguras que huelan, escuchen y toquen en momentos específicos de la ruta. <br/>
                 3. <strong>Diseñas el Clímax:</strong> Controlas en qué momento exacto de la curva de tiempo el turista sentirá la máxima emoción, asegurando que esa sea la memoria principal que se lleve a casa.
               </p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
