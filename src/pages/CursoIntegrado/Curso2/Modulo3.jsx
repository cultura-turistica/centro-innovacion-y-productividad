import React from 'react';
import { Share2, Compass, Home, MapPin, TrendingUp, Info } from 'lucide-react';

export default function Modulo3() {
  return (
    <div className="fade-in">
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #032968 0%, #1e40af 100%)',
        padding: '3rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.2rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "De dónde vienen y hacia dónde van"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          El flujo de visitantes es el río de vida de un destino. Aprende a mapear los puertos, nodos y corredores para captar la demanda.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Conceptos Base */}
        <div className="grid-3 mb-10">
          <div className="glass-card" style={{padding: '2rem', textAlign: 'center', borderTop: '5px solid #16A34A'}}>
            <Home size={32} color="#16A34A" style={{margin: '0 auto 1rem auto'}}/>
            <h4 style={{color: '#032968', marginBottom: '0.8rem'}}>Puertos de Entrada</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Aeropuertos, terminales o peajes donde el turista toca el territorio por primera vez.</p>
          </div>
          <div className="glass-card" style={{padding: '2rem', textAlign: 'center', borderTop: '5px solid #F06000'}}>
            <MapPin size={32} color="#F06000" style={{margin: '0 auto 1rem auto'}}/>
            <h4 style={{color: '#032968', marginBottom: '0.8rem'}}>Nodos</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Puntos de alta concentración: parques principales, monumentos o centros de visitantes.</p>
          </div>
          <div className="glass-card" style={{padding: '2rem', textAlign: 'center', borderTop: '5px solid #3b82f6'}}>
            <Share2 size={32} color="#3b82f6" style={{margin: '0 auto 1rem auto'}}/>
            <h4 style={{color: '#032968', marginBottom: '0.8rem'}}>Corredores</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Las rutas o vías que conectan los puntos. Es donde ocurre el desplazamiento fluido.</p>
          </div>
        </div>

        {/* Visualización de Flujo */}
        <div className="glass-card mb-10" style={{padding: '3rem', background: '#f8fafc', border: '1px solid #e2e8f0'}}>
           <h4 style={{color: '#032968', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <TrendingUp size={24} /> Análisis de Trayectoria
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                 <div style={{width: '80px', height: '80px', background: '#16A34A', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>PUERTO</div>
                 <div style={{flexGrow: 1, height: '4px', background: 'linear-gradient(to right, #16A34A, #F06000)'}}></div>
                 <div style={{width: '80px', height: '80px', background: '#F06000', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>NODO</div>
                 <div style={{flexGrow: 1, height: '4px', background: 'linear-gradient(to right, #F06000, #3b82f6)'}}></div>
                 <div style={{width: '80px', height: '80px', background: '#3b82f6', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>DESTINO</div>
              </div>
              <p style={{color: '#64748b', fontStyle: 'italic', textAlign: 'center'}}>
                "Si el turista llega al Puerto pero no encuentra el Corredor hacia tu Nodo, tu producto será invisible."
              </p>
           </div>
        </div>

        {/* Tipos de Flujo */}
        <div className="grid-2 mb-10">
           <div style={{background: '#eff6ff', padding: '2rem', borderRadius: '25px', border: '2px solid #bfdbfe'}}>
              <h4 style={{color: '#1e40af', marginBottom: '1rem'}}>Flujo Primario</h4>
              <p style={{fontSize: '0.95rem', color: '#475569'}}>Es la ruta principal que siguen el 80% de los visitantes. Suele ser la vía más rápida o más publicitada.</p>
           </div>
           <div style={{background: '#f0fdf4', padding: '2rem', borderRadius: '25px', border: '2px solid #bbf7d0'}}>
              <h4 style={{color: '#166534', marginBottom: '1rem'}}>Flujo Secundario</h4>
              <p style={{fontSize: '0.95rem', color: '#475569'}}>Rutas alternativas para nichos específicos (senderismo, observación de aves, rutas gastronómicas).</p>
           </div>
        </div>

        {/* Ejercicio de Mapeo */}
        <div className="glass-card" style={{padding: '3rem', border: '3px solid #16A34A'}}>
           <h4 style={{color: '#166534', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <Compass size={28} /> Ejercicio: Mapeo de Flujos Locales
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
              <div style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                 <div style={{background: '#16A34A', color: 'white', width: '25px', height: '25px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>1</div>
                 <p style={{margin: 0}}>Identifica el <strong>Puerto de Entrada</strong> más cercano (ej. Terminal de transportes).</p>
              </div>
              <div style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                 <div style={{background: '#16A34A', color: 'white', width: '25px', height: '25px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>2</div>
                 <p style={{margin: 0}}>Dibuja el <strong>Corredor</strong> (vía principal) que trae a la gente hacia tu municipio.</p>
              </div>
              <div style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                 <div style={{background: '#16A34A', color: 'white', width: '25px', height: '25px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>3</div>
                 <p style={{margin: 0}}>Ubica el <strong>Nodo</strong> principal donde la gente se detiene (ej. Parque Central).</p>
              </div>
           </div>
        </div>

        {/* Info Tip */}
        <div style={{marginTop: '3rem', background: '#fef3c7', padding: '1.5rem', borderRadius: '15px', display: 'flex', gap: '15px', alignItems: 'center'}}>
           <Info size={24} color="#92400e" style={{flexShrink: 0}} />
           <p style={{color: '#92400e', fontSize: '0.95rem', margin: 0}}>
             <strong>Dato ASC:</strong> Si tu iniciativa está fuera del flujo primario, necesitas señalización física o una estrategia digital de "Fricción Cero" para atraer al flujo secundario.
           </p>
        </div>
      </div>
    </div>
  );
}
