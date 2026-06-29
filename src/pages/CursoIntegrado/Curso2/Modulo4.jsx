import React from 'react';
import { Home, Coffee, AlertTriangle, Route, Settings, CheckCircle2 } from 'lucide-react';

export default function Modulo4({ headerColor, headerGradient }) {
  const [selectedOptionId, setSelectedOptionId] = React.useState(null);

  const options = [
    { id: 'A', text: 'Transporte en vehículo SUV privado con aire acondicionado y conductor bilingüe.', correct: false, reason: 'Esto es un requerimiento estándar para el turismo de lujo. No arruinará la experiencia.' },
    { id: 'B', text: 'Alojamiento en una suite boutique ecológica con sábanas de 400 hilos.', correct: false, reason: 'Excelente elección. Es un requerimiento alineado perfectamente a su perfil.' },
    { id: 'C', text: 'Alimentación tradicional en un mercado público sin facilidades de baños limpios.', correct: true, reason: '¡Exacto! El turista de lujo valora la gastronomía auténtica, pero NUNCA transará con la falta de higiene o incomodidad sanitaria. Es su "intransable".' }
  ];

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
          Establecer Condiciones de Consumo
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          La "Escenografía y Utilería". Convierte tu diseño en un producto viable y seguro.
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
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#0f766e', marginBottom: '4rem' }}>
          <h4><Settings size={28} /> La Analogía de la Escenografía</h4>
          <p>
            Imagina una obra de teatro. Tienes a los mejores actores (los guías) y un guion digno de un Óscar (la experiencia). Pero si el día de la obra, los asientos del público están rotos, la comida de la cafetería está rancia y no hay baños limpios... <strong>la obra será un fracaso.</strong>
          </p>
          <p>
            En turismo, las Condiciones de Consumo (Matriz 4) son esa escenografía. Son los requerimientos <strong>intransables</strong> de alojamiento, comida, transporte y logística que exige tu turista para no quejarse.
          </p>
        </div>

        {/* Las 4 Dimensiones */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#0f766e' }}>Las 4 Dimensiones Clave</h3>
        
        <div className="grid-2 mb-10" style={{ gap: '2rem' }}>
          
          <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '25px', border: '2px solid #bbf7d0' }}>
            <div style={{ background: '#22c55e', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Home size={24} />
            </div>
            <h4 style={{ color: '#166534', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>1. Alojamiento</h4>
            <p style={{ color: '#15803d', fontSize: '1rem', lineHeight: 1.6 }}>
              ¿El turista acepta dormir en hamaca o exige habitación privada con agua caliente? Define los "intransables" (Ej. limpieza impecable, mosquiteros).
            </p>
          </div>

          <div style={{ background: '#fffbeb', padding: '2rem', borderRadius: '25px', border: '2px solid #fde68a' }}>
            <div style={{ background: '#f59e0b', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Coffee size={24} />
            </div>
            <h4 style={{ color: '#92400e', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>2. Alimentación</h4>
            <p style={{ color: '#b45309', fontSize: '1rem', lineHeight: 1.6 }}>
              ¿Son exploradores gastronómicos o prefieren menús internacionales seguros? Considera restricciones dietéticas (vegetarianos, alergias).
            </p>
          </div>

          <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '25px', border: '2px solid #bfdbfe' }}>
            <div style={{ background: '#3b82f6', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Route size={24} />
            </div>
            <h4 style={{ color: '#1e40af', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>3. Actividades</h4>
            <p style={{ color: '#1d4ed8', fontSize: '1rem', lineHeight: 1.6 }}>
              ¿Qué nivel de intensidad física soportan? ¿Es una caminata de 1 hora plana o un ascenso de 4 horas? No puedes obligar a la tercera edad a trepar rocas.
            </p>
          </div>

          <div style={{ background: '#f5f3ff', padding: '2rem', borderRadius: '25px', border: '2px solid #ddd6fe' }}>
            <div style={{ background: '#8b5cf6', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Settings size={24} />
            </div>
            <h4 style={{ color: '#4c1d95', fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px' }}>4. Infraestructura</h4>
            <p style={{ color: '#6d28d9', fontSize: '1rem', lineHeight: 1.6 }}>
              Vías de acceso, señalización, cobertura móvil, baños públicos y protocolos médicos. ¿Hay señal de celular en caso de emergencia?
            </p>
          </div>

        </div>

        {/* Ejercicio Práctico */}
        <div className="interactive-card hover-scale" style={{ background: 'white', borderRadius: '30px', padding: '3rem', border: '2px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginBottom: '4rem' }}>
          <h4 style={{ color: '#0f172a', fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle size={30} color="#eab308" /> Ejercicio Práctico: El Intransable
          </h4>
          <p style={{ fontSize: '1.15rem', color: '#475569', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Estás diseñando una experiencia para el perfil de <strong>"Turista de Alto Lujo"</strong> (exigen privacidad absoluta, máximo confort y exclusividad). ¿Cuál de las siguientes condiciones de consumo arruinaría por completo su experiencia?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {options.map(opt => {
              const isSelected = selectedOptionId === opt.id;
              let status = 'idle';
              if (selectedOptionId) {
                if (isSelected) status = opt.correct ? 'correct' : 'wrong';
                else if (opt.correct) status = 'correct'; // highlight the correct one if they guess wrong
              }

              return (
                <div 
                  key={opt.id}
                  onClick={() => !selectedOptionId && setSelectedOptionId(opt.id)}
                  style={{ 
                    padding: '1.5rem', 
                    borderRadius: '15px', 
                    border: `2px solid ${status === 'idle' ? '#e2e8f0' : status === 'correct' ? '#22c55e' : status === 'wrong' ? '#ef4444' : '#e2e8f0'}`,
                    background: status === 'idle' ? 'white' : status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : 'white',
                    cursor: selectedOptionId ? 'default' : 'pointer',
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
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'white', borderRadius: '10px', color: opt.correct ? '#15803d' : '#b91c1c', fontSize: '1rem', borderLeft: `4px solid ${opt.correct ? '#15803d' : '#b91c1c'}` }}>
                      {opt.reason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {selectedOptionId && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                onClick={() => setSelectedOptionId(null)}
                style={{ background: '#f1f5f9', color: '#475569', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 600 }}
              >
                Reintentar Ejercicio
              </button>
            </div>
          )}
        </div>

        {/* Check de Validación */}
        <div style={{ background: '#f8fafc', border: '2px dashed #94a3b8', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ background: '#cbd5e1', color: 'white', borderRadius: '50%', padding: '10px' }}><CheckCircle2 size={40} color="#0f172a" /></div>
          <div>
            <h4 style={{ color: '#0f172a', fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.2rem' }}>Hito de Diseño Superado</h4>
            <p style={{ color: '#475569', fontSize: '1rem', margin: 0 }}>
              Al diligenciar la <strong>Matriz 4</strong> con estos elementos, culmina formalmente la <b>Fase 1 (Diseño)</b>. Ya tienes el qué y el para quién. ¡Es hora de pasar a la Fase 2 (Planificación) para construirlo!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
