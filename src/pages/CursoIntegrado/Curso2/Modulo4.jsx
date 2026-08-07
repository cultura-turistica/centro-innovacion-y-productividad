import React from 'react';
import { Home, Coffee, AlertTriangle, Route, Settings, CheckCircle2, Camera, BedDouble, Compass, Signal, CheckCircle } from 'lucide-react';

export default function Modulo4({ headerColor, headerGradient, data }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #0f766e 0%, #042f2e 100%)',
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

        {/* Ilustración Vectorial (Escenografía) */}
        <div style={{ marginTop: '-1.5rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 800 300" style={{ width: '100%', maxWidth: '900px', height: 'auto', borderRadius: '30px', boxShadow: '0 15px 30px rgba(15,118,110,0.15)', background: 'linear-gradient(to bottom, #f0fdfa, #ccfbf1)' }}>
            <rect width="800" height="300" fill="transparent" />
            {/* Sol */}
            <circle cx="650" cy="80" r="40" fill="#fef08a" />
            <circle cx="650" cy="80" r="55" fill="#fef08a" opacity="0.4" />
            {/* Nubes */}
            <path d="M 150 90 Q 170 70 190 90 Q 220 80 230 100 Q 250 100 240 120 L 140 120 Q 130 100 150 90" fill="#ffffff" opacity="0.8" />
            <path d="M 500 120 Q 520 100 540 120 Q 570 110 580 130 Q 600 130 590 150 L 490 150 Q 480 130 500 120" fill="#ffffff" opacity="0.6" />
            {/* Montañas Fondo */}
            <polygon points="100,250 300,100 500,250" fill="#99f6e4" />
            <polygon points="400,250 550,140 700,250" fill="#5eead4" />
            {/* Montañas Frente */}
            <polygon points="-50,300 150,150 400,300" fill="#2dd4bf" />
            <polygon points="250,300 450,120 750,300" fill="#14b8a6" />
            {/* Tienda (Glamping) */}
            <polygon points="400,280 450,220 500,280" fill="#fef3c7" />
            <polygon points="450,220 480,240 500,280 470,280" fill="#fde68a" />
            <polygon points="440,280 450,250 460,280" fill="#92400e" />
            {/* Árboles Pinos */}
            <g transform="translate(150, 240)">
              <polygon points="20,40 10,20 30,20" fill="#0f766e" />
              <polygon points="20,25 15,10 25,10" fill="#0f766e" />
              <polygon points="20,15 15,0 25,0" fill="#0f766e" />
              <rect x="18" y="40" width="4" height="10" fill="#78350f" />
            </g>
            <g transform="translate(200, 230) scale(1.2)">
              <polygon points="20,40 10,20 30,20" fill="#115e59" />
              <polygon points="20,25 15,10 25,10" fill="#115e59" />
              <polygon points="20,15 15,0 25,0" fill="#115e59" />
              <rect x="18" y="40" width="4" height="10" fill="#78350f" />
            </g>
            <g transform="translate(600, 250) scale(0.9)">
              <polygon points="20,40 10,20 30,20" fill="#0f766e" />
              <polygon points="20,25 15,10 25,10" fill="#0f766e" />
              <polygon points="20,15 15,0 25,0" fill="#0f766e" />
              <rect x="18" y="40" width="4" height="10" fill="#78350f" />
            </g>
            {/* Suelo */}
            <rect x="0" y="280" width="800" height="20" fill="#042f2e" />
          </svg>
        </div>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#8b5cf6' }}>
          <h4><Camera size={28} /> {data.escenografia.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.escenografia.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.escenografia.p2 }}></p>
        </div>

        <h3 className="mb-6 text-center mt-12" style={{ color: headerColor || '#8b5cf6' }}>{data.dimensiones.title}</h3>
        
        <div className="grid-2 mb-10" style={{ gap: '20px' }}>
          
          <div style={{ background: '#f5f3ff', padding: '2rem', borderRadius: '20px', border: '1px solid #ddd6fe' }}>
            <h4 style={{ color: '#6d28d9', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BedDouble size={24} /> {data.dimensiones.alojamiento.title}</h4>
            <p style={{ color: '#4c1d95', margin: 0 }}>{data.dimensiones.alojamiento.text}</p>
          </div>

          <div style={{ background: '#fef2f2', padding: '2rem', borderRadius: '20px', border: '1px solid #fecaca' }}>
            <h4 style={{ color: '#b91c1c', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Coffee size={24} /> {data.dimensiones.alimentacion.title}</h4>
            <p style={{ color: '#7f1d1d', margin: 0 }}>{data.dimensiones.alimentacion.text}</p>
          </div>

          <div style={{ background: '#ecfdf5', padding: '2rem', borderRadius: '20px', border: '1px solid #a7f3d0' }}>
            <h4 style={{ color: '#047857', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Compass size={24} /> {data.dimensiones.actividades.title}</h4>
            <p style={{ color: '#064e3b', margin: 0 }}>{data.dimensiones.actividades.text}</p>
          </div>

          <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
            <h4 style={{ color: '#1d4ed8', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Signal size={24} /> {data.dimensiones.infraestructura.title}</h4>
            <p style={{ color: '#1e3a8a', margin: 0 }}>{data.dimensiones.infraestructura.text}</p>
          </div>

        </div>

        {/* Ejercicio Práctico */}
        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
          <h4 style={{ color: '#334155', fontSize: '1.5rem', marginBottom: '1.5rem' }}>{data.ejercicio.title}</h4>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: data.ejercicio.description }}></p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.ejercicio.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                style={{
                  background: selectedOption === opt.id ? (opt.correct ? '#ecfdf5' : '#fef2f2') : 'white',
                  border: `2px solid ${selectedOption === opt.id ? (opt.correct ? '#10b981' : '#ef4444') : '#e2e8f0'}`,
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: '#334155',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{opt.text}</span>
                {selectedOption === opt.id && (
                  opt.correct ? <CheckCircle color="#10b981" /> : <AlertTriangle color="#ef4444" />
                )}
              </button>
            ))}
          </div>

          {selectedOption && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              background: data.ejercicio.options.find(o => o.id === selectedOption)?.correct ? '#dcfce7' : '#fee2e2',
              borderRadius: '15px',
              color: data.ejercicio.options.find(o => o.id === selectedOption)?.correct ? '#166534' : '#991b1b',
              animation: 'fadeIn 0.5s'
            }}>
              <strong>{data.ejercicio.options.find(o => o.id === selectedOption)?.correct ? '¡Correcto!' : 'Incorrecto.'}</strong> {data.ejercicio.options.find(o => o.id === selectedOption)?.reason}
            </div>
          )}
        </div>

        {/* Check de Validación */}
        <div style={{ background: '#f5f3ff', padding: '2rem', borderRadius: '20px', borderLeft: '5px solid #8b5cf6', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(139,92,246,0.2)' }}>
            <CheckCircle size={35} color="#8b5cf6" />
          </div>
          <div>
            <h4 style={{ color: '#5b21b6', margin: '0 0 5px 0', fontSize: '1.3rem' }}>{data.check.title}</h4>
            <p style={{ color: '#4c1d95', margin: 0 }} dangerouslySetInnerHTML={{ __html: data.check.text }}></p>
          </div>
        </div>

      </div>
    </div>
  );
}
