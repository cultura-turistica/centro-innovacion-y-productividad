import React, { useState } from 'react';
import { UserCircle, Search, Eye, Ear, MessageSquare, Heart, Scissors, AlertTriangle, Tent, Baby, Gem, MapPin } from 'lucide-react';
import avatarPiloto2 from '../../../assets/avatars/avatarPiloto2.svg';
import avatarJobSocial from '../../../assets/avatars/avatarJobSocial.svg';
import avatarBusiness from '../../../assets/avatars/avatarBusiness.svg';
import avatarMVP1 from '../../../assets/avatars/avatarMVP1.svg';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo2({ headerColor, headerGradient }) {
  const [activeQuadrant, setActiveQuadrant] = useState('ve');

  const empatiaContent = {
    ve: {
      icon: Eye,
      title: '¿Qué ve en su entorno?',
      text: 'Observa la oferta del mercado, qué destinos publican sus amigos en Instagram, y evalúa si las promesas de los catálogos de turismo son auténticas o simples "trampas para turistas".'
    },
    oye: {
      icon: Ear,
      title: '¿Qué escucha?',
      text: 'Oye las recomendaciones (boca a boca) de familiares, reseñas en TripAdvisor y lo que dicen los líderes de opinión de su nicho (ej. mochileros vs. lujo).'
    },
    siente: {
      icon: Heart,
      title: '¿Qué piensa y siente?',
      text: 'Sus motivaciones reales. A veces busca escapar de la ciudad, sanar, reconectar o aprender. Siente miedo a ser estafado o a que su viaje arruine el ecosistema.'
    },
    dice: {
      icon: MessageSquare,
      title: '¿Qué dice y hace?',
      text: 'Su comportamiento: planea con 6 meses de anticipación, viaja en grupo, siempre lleva botas de trekking y documenta todo en sus redes.'
    }
  };

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          Conocer al Visitante (Paso 1.1)
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          No diseñamos para todos, diseñamos para ALGUIEN. Aprende a construir tu Buyer Persona Turístico.
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title="El Enemigo es 'Para Todo el Mundo'"
          subtitle="Audio Instructora"
          audioSrc="/audio/C2-M2.wav"
          transcript={<p>Hablemos de a quién le vendemos. Cuando le preguntas a un emprendedor "Oye, ¿para quién es tu producto turístico?", casi siempre responden: "¡Para todos! Familias, mochileros, extranjeros, abuelitos... para todo el mundo".<br/><br/>En turismo, diseñar un producto "para todo el mundo" es la receta perfecta para no venderle a nadie. Un mochilero europeo que busca aventura extrema en la selva, no necesita los mismos servicios, ni el mismo menú, ni la misma publicidad que una familia con dos niños pequeños que busca descansar el fin de semana. Tratar de complacerlos a los dos al mismo tiempo hará que tu experiencia sea genérica y aburrida. Conocer a tu 'Buyer Persona' significa tener la valentía de decir: "Mi producto es exclusivamente para este tipo de persona", y enfocarse en hacerlos inmensamente felices.</p>}
          color={headerColor || '#16A34A'}
        />
        
        {/* Analogía */}
        <div className="theory-block" style={{ marginTop: '2rem', borderLeftColor: headerColor || '#2563eb' }}>
          <h4><Scissors size={28} /> La Analogía del Sastre</h4>
          <p>
            Imagina a un sastre haciendo un traje carísimo sin saber quién se lo va a poner. Podría ser para un jugador de baloncesto o para un niño. Es imposible que quede bien.
          </p>
          <p>
            En turismo, si dices <strong>"mi producto es para todo el mundo"</strong>, estás diseñando un traje a ciegas. Tienes que definir exactamente para quién es: ¿Extranjeros de tercera edad? ¿Familias nacionales con niños? Sus necesidades cambian radicalmente.
          </p>
        </div>

        {/* Mapa de Empatía Interactivo */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#2563eb' }}>El Mapa de Empatía</h3>
        <p className="text-center mb-8" style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Haz clic en cada cuadrante para entender qué ocurre en la cabeza de tu futuro turista ("Buyer Persona").
        </p>

        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px dashed #cbd5e1', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            
            {Object.keys(empatiaContent).map((key) => {
              const Icon = empatiaContent[key].icon;
              const isActive = activeQuadrant === key;
              return (
                <div 
                  key={key} 
                  onClick={() => setActiveQuadrant(key)}
                  style={{
                    background: isActive ? headerColor : 'white',
                    color: isActive ? 'white' : '#475569',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? `0 10px 20px ${headerColor}40` : '0 5px 15px rgba(0,0,0,0.05)',
                    border: `2px solid ${isActive ? headerColor : '#e2e8f0'}`,
                    textAlign: 'center'
                  }}
                >
                  <Icon size={32} style={{ margin: '0 auto 10px auto' }} />
                  <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{empatiaContent[key].title}</h5>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', minHeight: '150px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '1.15rem', color: '#1e293b', margin: 0, lineHeight: 1.6 }}>
              <strong>{empatiaContent[activeQuadrant].title}:</strong> <br/>
              {empatiaContent[activeQuadrant].text}
            </p>
          </div>
        </div>

        {/* Caso de Estudio */}
        <div style={{ background: '#eff6ff', padding: '3rem', borderRadius: '30px', border: '2px solid #3b82f6', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '-15px', right: '30px', background: '#3b82f6', color: 'white', padding: '5px 20px', borderRadius: '20px', fontWeight: 800, fontSize: '0.9rem' }}>
             CASO PRÁCTICO
           </div>
           <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ background: 'white', padding: '10px', borderRadius: '50%', border: '4px solid #3b82f6' }}>
                <UserCircle size={70} color="#3b82f6" />
              </div>
              <div>
                <h4 style={{ color: '#1e40af', fontSize: '1.8rem', margin: '0 0 5px 0', fontWeight: 900 }}>"Mr. Beekhof"</h4>
                <div style={{ background: '#bfdbfe', color: '#1e40af', padding: '4px 15px', borderRadius: '100px', fontSize: '0.85rem', display: 'inline-block', fontWeight: 700 }}>Turista Holandés, 62 años</div>
              </div>
           </div>
           
           <div className="grid-2 mt-8" style={{ gap: '2rem' }}>
              <div>
                 <p style={{ fontSize: '1.05rem', color: '#1e3a8a', lineHeight: 1.6 }}>
                   <strong>El Dolor (Frustración):</strong> Le aterra enfermarse durante el viaje o la inseguridad física. 
                   Viaja en grupo de tercera edad y evita sobresaltos.
                 </p>
                 <p style={{ fontSize: '1.05rem', color: '#1e3a8a', lineHeight: 1.6, marginTop: '1rem' }}>
                   <strong>La Ganancia (Aspiración):</strong> Busca actividades culturales muy tranquilas (terapias de relajación, folclor suave), prefiere comer en hoteles por bioseguridad y exige agua caliente 24/7.
                 </p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 20px rgba(59,130,246,0.1)' }}>
                 <div style={{ color: '#ea580c', display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                   <AlertTriangle size={24} />
                   <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Mala Decisión</h5>
                 </div>
                 <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }}>
                   Si le ofreces a Mr. Beekhof una cabalgata de 4 horas o dormir en hamaca, <strong>tu producto fracasará</strong>. No porque el producto sea malo, sino porque el sastre hizo el traje equivocado.
                 </p>
              </div>
           </div>
        </div>

        {/* Incompatibilidad de Perfiles */}
        <div style={{ marginTop: '4rem' }}>
          <h3 className="mb-4 text-center" style={{ color: headerColor || '#2563eb' }}>
            ¿Por qué no diseñar para todos? (Incompatibilidad de Perfiles)
          </h3>
          <p className="text-center mb-8" style={{ color: '#475569', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            No es solo que los servicios que buscan sean distintos, es que mezclar ciertos perfiles en un mismo espacio puede generar un <strong>conflicto directo</strong> y arruinar la experiencia de todos. Eliges a un público para también <i>descartar</i> a otro.
          </p>

          <div className="grid-2" style={{ gap: '2rem' }}>
            
            {/* Conflicto 1 */}
            <div style={{ background: '#fff1f2', border: '2px solid #fecdd3', borderRadius: '25px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#fecaca', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarPiloto2} alt="Mochilero Fiestero" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>Mochilero Fiestero</h5>
                </div>
                
                <div style={{ color: '#e11d48', fontWeight: 900, fontSize: '1.5rem', padding: '0 10px' }}>VS</div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#bbf7d0', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarJobSocial} alt="Turismo Familiar" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>Turismo Familiar</h5>
                </div>
              </div>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #f43f5e', fontSize: '0.95rem', color: '#881337', lineHeight: 1.5 }}>
                <strong>Incompatibilidad:</strong> Un grupo de amigos que busca salir de fiesta, escuchar música hasta la madrugada y tener un viaje nocturno muy activo, choca con el itinerario de una familia con niños que busca silencio a las 9 PM, seguridad y descanso. Mezclarlos en el mismo hotel o tour generará quejas y arruinará la experiencia de ambos.
              </div>
            </div>

            {/* Conflicto 2 */}
            <div style={{ background: '#fff1f2', border: '2px solid #fecdd3', borderRadius: '25px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#fef08a', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarBusiness} alt="Turista Lujo" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>Turista Alto Lujo</h5>
                </div>
                
                <div style={{ color: '#e11d48', fontWeight: 900, fontSize: '1.5rem', padding: '0 10px' }}>VS</div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#bfdbfe', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarMVP1} alt="Aventurero Low Cost" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>Aventurero "Low-Cost"</h5>
                </div>
              </div>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #f43f5e', fontSize: '0.95rem', color: '#881337', lineHeight: 1.5 }}>
                <strong>Incompatibilidad:</strong> El perfil de lujo exige exclusividad y burbujas de servicio. Mezclarlos en el mismo tour con turistas de presupuesto ajustado arruina la promesa de exclusividad por la que pagó el primero, y hace sentir incómodo al segundo.
              </div>
            </div>
            
          </div>

          {/* Conclusión Metodológica */}
          <div className="theory-block" style={{ marginTop: '3rem', borderLeftColor: headerColor || '#2563eb' }}>
            <p style={{ margin: 0, fontSize: '1.05rem' }}>
              <strong>Nota Metodológica (D+C+S):</strong> Ningún perfil de turista es "malo" por sí mismo. En un destino maduro, el mochilero y el turista de lujo <strong>pueden coexistir en la misma ciudad</strong>. Sin embargo, la metodología nos enseña que a nivel de <strong>Producto</strong> debes elegir y priorizar. Intentar complacer a ambos públicos en la misma habitación, en el mismo tour o en el mismo restaurante es el error. Diseñas tu producto específico para el segmento que elegiste priorizar.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
