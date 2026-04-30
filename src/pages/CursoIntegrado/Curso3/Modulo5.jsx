import React from 'react';
import { Crop, Smartphone, Compass, ArrowUpRight, Maximize, MessageSquare } from 'lucide-react';

export default function Modulo5() {
  return (
    <div className="fade-in">
      <div style={{
        background: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)',
        padding: '5rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px -10px rgba(15, 118, 110, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
            <Crop size={48} color="#99F6E4" />
          </div>
        </div>
        <h3 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-1px'}}>
          Encuadre y Composición
        </h3>
        <p style={{fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Decide qué incluir y qué excluir. El marco es el límite de tu mundo fotográfico.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* El Límite del Marco */}
        <div className="glass-card mb-10" style={{padding: '3rem', borderTop: '6px solid #14B8A6'}}>
           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
             <Maximize size={48} color="#0D9488" style={{marginBottom: '1rem'}} />
             <h4 style={{fontSize: '2rem', color: '#115E59', marginBottom: '1rem'}}>El Encuadre es un Límite</h4>
             <p style={{fontSize: '1.15rem', color: '#475569', lineHeight: '1.7', maxWidth: '800px'}}>
               La idea del encuadre es dictaminar que tu fotografía tiene un marco particular, un borde. Al ponerle un límite al mundo, estás tomando una decisión editorial profunda: <strong>lo que está dentro importa, lo que dejas fuera no existe para el espectador.</strong>
             </p>
           </div>
        </div>

        {/* Orientación Visual Interactiva */}
        <h3 className="mb-6 text-center" style={{color: '#0F766E'}}>Orientación: Vertical vs Horizontal</h3>
        <div className="grid-2 mb-10">
           {/* Vertical */}
           <div style={{background: '#F0FDFA', padding: '2rem', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #99F6E4'}}>
             <div style={{width: '120px', height: '200px', border: '8px solid #0F766E', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
               <Smartphone size={40} color="#0F766E" />
             </div>
             <h4 style={{color: '#115E59'}}>Retrato (Vertical)</h4>
             <p style={{color: '#475569', textAlign: 'center'}}>Ideal para personas o estructuras altas. El ojo del espectador escanea naturalmente de <strong>arriba hacia abajo</strong>.</p>
           </div>

           {/* Horizontal */}
           <div style={{background: '#F0FDFA', padding: '2rem', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #99F6E4'}}>
             <div style={{width: '200px', height: '120px', border: '8px solid #0F766E', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
               <Compass size={40} color="#0F766E" />
             </div>
             <h4 style={{color: '#115E59'}}>Paisaje (Horizontal)</h4>
             <p style={{color: '#475569', textAlign: 'center'}}>Nuestra visión natural es horizontal. Ideal para contar una historia más amplia y escanear de <strong>izquierda a derecha</strong>.</p>
           </div>
        </div>

        {/* Guiar el Ojo (Reglas de Composición Visuales) */}
        <h3 className="mb-6 text-center" style={{color: '#0F766E'}}>Reglas de Composición Clave</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Regla de Tercios */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end', borderRadius: '25px' }}>
            <img src="/images/rule_of_thirds_landscape_1777058892934.png" alt="Regla de los Tercios" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.3) 100%)', zIndex: 1}}></div>
            
            {/* Grid Overlay */}
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none'}}>
               <div style={{position: 'absolute', top: '33.33%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.4)'}}></div>
               <div style={{position: 'absolute', top: '66.66%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.4)'}}></div>
               <div style={{position: 'absolute', left: '33.33%', top: 0, height: '100%', width: '1px', background: 'rgba(255,255,255,0.4)'}}></div>
               <div style={{position: 'absolute', left: '66.66%', top: 0, height: '100%', width: '1px', background: 'rgba(255,255,255,0.4)'}}></div>
               <div style={{position: 'absolute', top: '33.33%', left: '33.33%', width: '12px', height: '12px', background: '#5EEAD4', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #5EEAD4'}}></div>
               <div style={{position: 'absolute', top: '33.33%', left: '66.66%', width: '12px', height: '12px', background: '#5EEAD4', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #5EEAD4'}}></div>
               <div style={{position: 'absolute', top: '66.66%', left: '33.33%', width: '12px', height: '12px', background: '#5EEAD4', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #5EEAD4'}}></div>
               <div style={{position: 'absolute', top: '66.66%', left: '66.66%', width: '12px', height: '12px', background: '#5EEAD4', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #5EEAD4'}}></div>
            </div>

            <div style={{position: 'relative', zIndex: 3, padding: '2rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 800}}>Regla de los Tercios</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Desplaza al sujeto del centro perfecto. Sitúalo en las intersecciones (puntos de interés) para crear tensión y narrativa visual.</p>
            </div>
          </div>

          {/* Líneas Diagonales */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end', borderRadius: '25px' }}>
            <img src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?auto=format&fit=crop&w=800&q=80" alt="Líneas Diagonales (Fuente: Unsplash)" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.3) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 800}}>Líneas Guía</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Usa caminos, vías o líneas arquitectónicas para <strong>guiar el ojo</strong> del espectador directamente hacia el sujeto principal.</p>
            </div>
          </div>

          {/* Simetría */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end', borderRadius: '25px' }}>
            <img src="/images/architectural_symmetry_1777058910502.png" alt="Simetría Arquitectónica" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.3) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 800}}>Simetría</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Coloca el sujeto en el centro exacto. Transmite orden, paz, divinidad o rigidez formal. Muy usado en arquitectura.</p>
            </div>
          </div>

        </div>

        {/* Responder a la Fotografía */}
        <div style={{ background: '#F0FDFA', border: '2px solid #14B8A6', borderRadius: '25px', padding: '2.5rem', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ background: '#0D9488', color: 'white', padding: '15px', borderRadius: '50%' }}>
            <MessageSquare size={32}/>
          </div>
          <div>
            <h4 style={{ color: '#115E59', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Responder a las Fotografías</h4>
            <p style={{ color: '#0F766E', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }}>
              La actividad final de un fotógrafo es escuchar lo que los demás ven en su obra. ¿Qué dicen, significan o revelan tus fotos? Presta atención al <strong>Tono</strong> (luz, oscuridad, calidez) y a cómo esa fotografía hace pensar a tu espectador.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
