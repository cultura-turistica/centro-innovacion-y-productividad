import React, { useState } from 'react';
import { Settings, Route, Home, Camera, ArrowRight, Wrench, AlertTriangle } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo5({ headerColor, headerGradient }) {
  const [selectedGapId, setSelectedGapId] = useState(null);

  const gapOptions = [
    { id: 'A', text: 'El albergue no ofrece shows nocturnos ni tiene piscina climatizada.', correct: false, reason: '¡Cascarita! Un turista especializado en aves se levanta a las 4:00 AM para ir a la selva; no busca vida nocturna ni lujos genéricos. Evaluar esto como brecha es diseñar para el perfil equivocado.' },
    { id: 'B', text: 'El menú de la cena típica solo tiene 2 opciones en lugar de 5.', correct: false, reason: '¡Cascarita! Aunque la variedad es deseable, para un "pajarero" duro, la comida es un elemento funcional. Una pequeña limitación en el menú no arruina la experiencia si el avistamiento es estelar.' },
    { id: 'C', text: 'Los senderos del parque abren a las 8:00 AM porque a esa hora llega el personal.', correct: true, reason: '¡Exacto! Esta es una brecha estructural crítica. El 90% de la actividad de las aves ocurre al amanecer (5:30 AM). Si la operación (facilidades) no está alineada con la necesidad biológica del atractivo, toda la cadena colapsa.' }
  ];

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          FASE 2: Cadena de Valor y Brechas
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          De la imaginación a la realidad. Identifica qué te falta para ofrecer la experiencia perfecta.
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title="El Eslabón Roto"
          subtitle="Audio Instructora"
          audioSrc="/audio/C2-M5.wav"
          transcript={<p>El turismo es, quizás, la industria más interconectada que existe. Piensa en esto como una obra de teatro: tú puedes tener el mejor hotel del mundo (el actor principal), y el mejor restaurante de la región (el actor secundario). Pero, ¿qué pasa si la vía para llegar al pueblo está destruida, o si el transportador local cobra precios injustos? La obra de teatro se arruina antes de empezar.<br/><br/>A esto le llamamos la Cadena de Valor. La experiencia del turista no empieza cuando entra a tu hotel, empieza desde que se sube al bus en su ciudad de origen. Si hay un solo eslabón roto, una sola "brecha" —como la falta de señalización, mala conexión a internet o basura en las calles—, el turista calificará mal toda la experiencia, por más que tu hotel haya sido perfecto. Por eso, en el turismo territorial no competimos entre vecinos; dependemos de que todo el ecosistema funcione impecablemente. Abajo verás cómo identificar esos eslabones rotos.</p>}
          color={headerColor || '#4f46e5'}
        />

        {/* Ilustración Vectorial (Engranajes/Cadena) */}
        <div style={{ marginTop: '2rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 800 300" style={{ width: '100%', maxWidth: '900px', height: 'auto', borderRadius: '30px', boxShadow: '0 15px 30px rgba(79,70,229,0.15)', background: 'linear-gradient(to bottom, #eef2ff, #e0e7ff)' }}>
            <rect width="800" height="300" fill="transparent" />
            
            {/* Connection Line / Chain */}
            <path d="M 150 150 L 650 150" stroke="#c7d2fe" strokeWidth="8" strokeDasharray="15,10" />
            
            {/* Gear 1 (Transporte) */}
            <g transform="translate(200, 140)">
              <circle cx="0" cy="0" r="50" fill="#818cf8" />
              <circle cx="0" cy="0" r="20" fill="#eef2ff" />
              <path d="M -15 -60 L 15 -60 L 10 -45 L -10 -45 Z" fill="#6366f1" />
              <path d="M -15 60 L 15 60 L 10 45 L -10 45 Z" fill="#6366f1" />
              <path d="M -60 -15 L -60 15 L -45 10 L -45 -10 Z" fill="#6366f1" />
              <path d="M 60 -15 L 60 15 L 45 10 L 45 -10 Z" fill="#6366f1" />
              <path d="M -42 -42 L -30 -54 L -23 -40 L -33 -33 Z" fill="#6366f1" />
              <path d="M 42 42 L 30 54 L 23 40 L 33 33 Z" fill="#6366f1" />
              <path d="M 42 -42 L 54 -30 L 40 -23 L 33 -33 Z" fill="#6366f1" />
              <path d="M -42 42 L -54 30 L -40 23 L -33 33 Z" fill="#6366f1" />
              <text x="0" y="90" textAnchor="middle" fill="#4f46e5" fontWeight="bold" fontSize="18">Transporte</text>
            </g>

            {/* Gear 2 (Brecha - Rojo) */}
            <g transform="translate(400, 140)">
              <circle cx="0" cy="0" r="60" fill="#fca5a5" />
              <circle cx="0" cy="0" r="25" fill="#eef2ff" />
              <path d="M -15 -70 L 15 -70 L 10 -55 L -10 -55 Z" fill="#ef4444" />
              <path d="M -15 70 L 15 70 L 10 55 L -10 55 Z" fill="#ef4444" />
              <path d="M -70 -15 L -70 15 L -55 10 L -55 -10 Z" fill="#ef4444" />
              {/* Diente Roto */}
              <path d="M 70 -15 L 70 15 L 55 10 L 55 -10 Z" fill="#f87171" opacity="0.3" stroke="#ef4444" strokeDasharray="3,3" />
              <path d="M -50 -50 L -35 -65 L -25 -50 L -38 -38 Z" fill="#ef4444" />
              <path d="M 50 50 L 35 65 L 25 50 L 38 38 Z" fill="#ef4444" />
              <path d="M 50 -50 L 65 -35 L 50 -25 L 38 -38 Z" fill="#ef4444" />
              <path d="M -50 50 L -65 35 L -50 25 L -38 38 Z" fill="#ef4444" />
              <text x="0" y="100" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="20">¡BRECHA!</text>
            </g>

            {/* Gear 3 (Actividad) */}
            <g transform="translate(600, 140)">
              <circle cx="0" cy="0" r="50" fill="#34d399" />
              <circle cx="0" cy="0" r="20" fill="#eef2ff" />
              <path d="M -15 -60 L 15 -60 L 10 -45 L -10 -45 Z" fill="#10b981" />
              <path d="M -15 60 L 15 60 L 10 45 L -10 45 Z" fill="#10b981" />
              <path d="M -60 -15 L -60 15 L -45 10 L -45 -10 Z" fill="#10b981" />
              <path d="M 60 -15 L 60 15 L 45 10 L 45 -10 Z" fill="#10b981" />
              <path d="M -42 -42 L -30 -54 L -23 -40 L -33 -33 Z" fill="#10b981" />
              <path d="M 42 42 L 30 54 L 23 40 L 33 33 Z" fill="#10b981" />
              <path d="M 42 -42 L 54 -30 L 40 -23 L 33 -33 Z" fill="#10b981" />
              <path d="M -42 42 L -54 30 L -40 23 L -33 33 Z" fill="#10b981" />
              <text x="0" y="90" textAnchor="middle" fill="#059669" fontWeight="bold" fontSize="18">Actividad</text>
            </g>
          </svg>
        </div>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#4f46e5' }}>
          <h4><Settings size={28} /> La Analogía del Engranaje</h4>
          <p>
            Imagina un reloj suizo hermosísimo. Todos los engranajes funcionan perfecto... excepto uno que está roto. ¿Qué le pasa al reloj? <strong>Se detiene por completo.</strong>
          </p>
          <p>
            En turismo pasa lo mismo: tienes un atractivo increíble, un hotel lujoso y comida deliciosa. Pero si el <strong>transporte</strong> (el taxista o el bus) es grosero, inseguro o impuntual, toda la experiencia del turista se arruina. La <b>Cadena de Valor</b> sirve para encontrar ese engranaje roto.
          </p>
        </div>

        {/* Gráfico de Cadena de Valor Interactivo Visual */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#4f46e5' }}>El Gráfico de la Cadena (Matriz 5)</h3>
        <p className="text-center mb-8" style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Reconstruye paso a paso el viaje del turista. Lo que <b>necesita</b> vs lo que <b>existe hoy</b>. La diferencia entre ambos se llama <strong>BRECHA</strong>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          
          {/* Eslabón 1 */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ background: '#3b82f6', color: 'white', padding: '15px', borderRadius: '15px' }}><Route size={24} /></div>
            <div style={{ flex: 1 }}>
              <h5 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>1. Transporte y Llegada</h5>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Necesidad:</strong> Vía pavimentada y buses cómodos.</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Realidad:</strong> Buses sin aire acondicionado.</p>
            </div>
            <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px 15px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 800 }}>Brecha: Capacitar transportadores</div>
            <ArrowRight size={24} color="#94a3b8" style={{ position: 'absolute', bottom: '-20px', left: '35px', transform: 'rotate(90deg)' }} />
          </div>

          {/* Eslabón 2 */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ background: '#8b5cf6', color: 'white', padding: '15px', borderRadius: '15px' }}><Home size={24} /></div>
            <div style={{ flex: 1 }}>
              <h5 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>2. Alojamiento</h5>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Necesidad:</strong> Espacio seguro para bicicletas.</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Realidad:</strong> Hoteles prohíben meter bicis.</p>
            </div>
            <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px 15px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 800 }}>Brecha: Crear bici-parqueaderos</div>
            <ArrowRight size={24} color="#94a3b8" style={{ position: 'absolute', bottom: '-20px', left: '35px', transform: 'rotate(90deg)' }} />
          </div>

          {/* Eslabón 3 */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #e2e8f0' }}>
            <div style={{ background: '#10b981', color: 'white', padding: '15px', borderRadius: '15px' }}><Camera size={24} /></div>
            <div style={{ flex: 1 }}>
              <h5 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#1e293b' }}>3. Atractivo (La Finca)</h5>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Necesidad:</strong> Señalización en inglés y español.</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}><strong>Realidad:</strong> Cero señalización.</p>
            </div>
            <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px 15px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 800 }}>Brecha: Instalar señales</div>
          </div>

        </div>

        {/* Cierre */}
        <div style={{ background: '#eff6ff', border: '2px solid #93c5fd', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ color: '#2563eb' }}><Wrench size={40} /></div>
          <div>
            <h4 style={{ color: '#1e40af', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.2rem' }}>El valor de la matriz</h4>
            <p style={{ color: '#1e3a8a', fontSize: '1rem', margin: 0 }}>
              Esta herramienta es valiosa porque evita que hagamos "listas de deseos" al azar. Cada brecha identificada responde <b>estrictamente</b> a una necesidad del turista que nos falta por cubrir.
            </p>
          </div>
        </div>

        {/* Ejercicio Práctico - Juego Trampa */}
        <div className="interactive-card hover-scale" style={{ background: 'white', borderRadius: '30px', padding: '3rem', border: '2px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginTop: '4rem', marginBottom: '4rem' }}>
          <h4 style={{ color: '#0f172a', fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle size={30} color="#eab308" /> Juego Trampa: Detecta la Brecha
          </h4>
          <p style={{ fontSize: '1.15rem', color: '#475569', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Imagina un destino de <strong>avistamiento de aves de clase mundial</strong> en la selva. Cuentan con los biólogos más expertos del país, binoculares de última tecnología, un albergue ecológico impecable, transporte VIP y comida típica deliciosa. Sin embargo, los turistas más especializados se van profundamente frustrados y dejan reseñas de 1 estrella. ¿Dónde crees que está realmente el engranaje roto en la Cadena de Valor metodológica?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {gapOptions.map(opt => {
              const isSelected = selectedGapId === opt.id;
              let status = 'idle';
              if (selectedGapId) {
                if (isSelected) status = opt.correct ? 'correct' : 'wrong';
                else if (opt.correct) status = 'correct';
              }

              return (
                <div 
                  key={opt.id}
                  onClick={() => !selectedGapId && setSelectedGapId(opt.id)}
                  style={{ 
                    padding: '1.5rem', 
                    borderRadius: '15px', 
                    border: '2px solid ' + (status === 'idle' ? '#e2e8f0' : status === 'correct' ? '#22c55e' : status === 'wrong' ? '#ef4444' : '#e2e8f0'),
                    background: status === 'idle' ? 'white' : status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : 'white',
                    cursor: selectedGapId ? 'default' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '45px', height: '45px', borderRadius: '50%', 
                      background: status === 'idle' ? '#f1f5f9' : status === 'correct' ? '#22c55e' : status === 'wrong' ? '#ef4444' : '#f1f5f9',
                      color: status === 'idle' ? '#64748b' : 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem',
                      flexShrink: 0
                    }}>{opt.id}</div>
                    <span style={{ fontSize: '1.1rem', color: '#1e293b', flex: 1, fontWeight: isSelected ? 700 : 500 }}>{opt.text}</span>
                  </div>
                  {isSelected && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'white', borderRadius: '10px', color: opt.correct ? '#15803d' : '#b91c1c', fontSize: '1rem', borderLeft: '4px solid ' + (opt.correct ? '#15803d' : '#b91c1c') }}>
                      {opt.reason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {selectedGapId && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                onClick={() => setSelectedGapId(null)}
                style={{ background: '#f1f5f9', color: '#475569', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 600 }}
              >
                Reintentar Juego
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
