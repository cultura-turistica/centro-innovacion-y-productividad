import React from 'react';
import { Camera, Sun, Zap, Eye, Sliders, Image, ArrowRight, Lightbulb, Focus } from 'lucide-react';

export default function Modulo1() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #312E81 100%)',
        padding: '5rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
            <Camera size={48} color="#A5B4FC" />
          </div>
        </div>
        <h3 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-1px'}}>
          Escribir con Luz
        </h3>
        <p style={{fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Domina "El Triángulo de Oro" y descubre cómo transformar cualquier destello de luz en una obra maestra visual.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        {/* Intro Concept */}
        <div className="grid-2 mb-10">
          <div className="glass-card" style={{padding: '3rem', borderTop: '6px solid #4F46E5', background: 'linear-gradient(to bottom, #ffffff, #f5f3ff)'}}>
            <h4 style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#312E81', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: 800}}>
              <Sun size={32} color="#4F46E5"/> ¿Qué es la fotografía?
            </h4>
            <p style={{fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              La palabra fotografía literalmente significa <strong>escritura de luz</strong>. Cuando tomas una foto, no estás capturando un objeto; estás capturando la luz rebotando en ese objeto.
            </p>
            <div style={{ background: '#EEF2FF', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #4F46E5' }}>
              <p style={{ color: '#3730A3', fontWeight: 600, margin: 0, fontStyle: 'italic' }}>
                Tu cámara es un lienzo estéril. La luz es la pintura. El lente es el pincel.
              </p>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center'}}>
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ background: '#E0E7FF', padding: '15px', borderRadius: '12px' }}><Eye size={28} color="#4F46E5"/></div>
              <div>
                <h5 style={{ fontWeight: 800, color: '#1E1B4B', fontSize: '1.2rem', marginBottom: '0.5rem'}}>El Lente Ocular</h5>
                <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0}}>Condensa y dirige la luz dispersa hacia el fondo cerrado de la cámara.</p>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ background: '#E0E7FF', padding: '15px', borderRadius: '12px' }}><Zap size={28} color="#4F46E5"/></div>
              <div>
                <h5 style={{ fontWeight: 800, color: '#1E1B4B', fontSize: '1.2rem', marginBottom: '0.5rem'}}>El Sensor</h5>
                <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0}}>El cerebro digital (antigua película) que convierte esa luz en pixeles RGB.</p>
              </div>
            </div>
          </div>
        </div>

        {/* El Triángulo de Exposición */}
        <h3 className="text-center" style={{color: '#1E1B4B', fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem'}}>Triángulo de Exposición 🔺</h3>
        <p className="text-center" style={{color: '#64748b', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto'}}>
          Las tres variables maestras. Imagina que tomar una foto es llenar un vaso con agua (la luz). Así es como controlas el flujo:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* Apertura */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" alt="Profundidad de Campo" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <div style={{ width: '100%', height: '5px', background: '#3B82F6' }}></div>
            <div style={{ padding: '2rem', flexGrow: 1 }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E3A8A', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Focus size={24}/> 1. Apertura (f-stop)
              </h4>
              <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Controla cuánta luz entra por el lente.
              </p>
              <div style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: '#2563EB', fontSize: '0.9rem' }}>Efecto Visual:</div>
                <div style={{ color: '#1D4ED8', fontWeight: 500 }}>Fondos borrosos (Profundidad de campo superficial).</div>
              </div>
            </div>
          </div>

          {/* Velocidad */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src="/images/long_exposure_traffic_1777058879040.png" alt="Velocidad de Obturación (Larga exposición)" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <div style={{ width: '100%', height: '5px', background: '#EC4899' }}></div>
            <div style={{ padding: '2rem', flexGrow: 1 }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#831843', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sliders size={24}/> 2. Obturador
              </h4>
              <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Controla cuánto tiempo el sensor capta la luz.
              </p>
              <div style={{ background: '#FDF2F8', padding: '1rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: '#DB2777', fontSize: '0.9rem' }}>Efecto Visual:</div>
                <div style={{ color: '#BE185D', fontWeight: 500 }}>Congelar el movimiento vs. barridos y estelas de luz.</div>
              </div>
            </div>
          </div>

          {/* ISO */}
          <div className="glass-card" style={{ padding: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80" alt="Ruido ISO" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <div style={{ width: '100%', height: '5px', background: '#F59E0B' }}></div>
            <div style={{ padding: '2rem', flexGrow: 1 }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#78350F', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sun size={24}/> 3. ISO
              </h4>
              <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                La sensibilidad electrónica a la luz.
              </p>
              <div style={{ background: '#FFFBEB', padding: '1rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, color: '#D97706', fontSize: '0.9rem' }}>Efecto Visual:</div>
                <div style={{ color: '#B45309', fontWeight: 500 }}>Poder disparar de noche vs. ruido (granulado) visual.</div>
              </div>
            </div>
          </div>
        </div>


        {/* Tip Rápido */}
        <div style={{ background: '#EEF2FF', border: '2px dashed #6366F1', borderRadius: '25px', padding: '2.5rem', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ background: '#4F46E5', color: 'white', padding: '15px', borderRadius: '50%' }}>
            <Lightbulb size={32}/>
          </div>
          <div>
            <h4 style={{ color: '#312E81', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.5rem' }}>El gran secreto de los profesionales</h4>
            <p style={{ color: '#4338CA', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }}>
              No existe una "exposición perfecta" universal. Exponer es decidir. A veces quieres una foto subexpuesta (oscura) para dar drama, o un tiempo de exposición largo para que el agua de un río parezca seda. <strong>La técnica sirve a tu imaginación, no al revés.</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
