import React, { useState } from 'react';
import { Map, CalendarClock, TrendingUp, CheckCircle, LineChart, Target, Crosshair, Ruler, CheckSquare, Lightbulb, Clock } from 'lucide-react';
import MatchPuzzle from '../../../components/MatchPuzzle';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo7({ headerColor, headerGradient }) {
  const [activeStep, setActiveStep] = useState(0);

  const smartSteps = [
    { title: "Específica (S)", desc: "No digas 'mejorar baños'. Di 'instalar 2 baños con rampa en la finca X'.", icon: <Crosshair size={20} /> },
    { title: "Medible (M)", desc: "¿Cómo sabes que se logró? Ejemplo: '100% de la obra terminada e inspeccionada'.", icon: <Ruler size={20} /> },
    { title: "Alcanzable (A)", desc: "¿Tienes el dinero y el permiso para hacerlo? Si no, cambia la meta.", icon: <CheckSquare size={20} /> },
    { title: "Relevante (R)", desc: "¿Realmente soluciona el problema de nuestro turista objetivo?", icon: <Lightbulb size={20} /> },
    { title: "Tiempo (T)", desc: "Fecha límite exacta. Ej: 'Antes del 15 de Octubre, previo a temporada alta'.", icon: <Clock size={20} /> }
  ];

  const smartPuzzlePairs = [
    { id: 's', term: 'S - Específica', definition: 'Instalar 3 señales bilingües en el sendero.', termBg: '#fee2e2', defBg: 'white' },
    { id: 'm', term: 'M - Medible', definition: 'Llegar a 50 encuestas con 90% de aprobación.', termBg: '#fef3c7', defBg: 'white' },
    { id: 'a', term: 'A - Alcanzable', definition: 'Tengo $1M ahorrado para comprar las carpas.', termBg: '#dcfce7', defBg: 'white' },
    { id: 'r', term: 'R - Relevante', definition: 'Capacitar guías atrae más turistas extranjeros.', termBg: '#e0e7ff', defBg: 'white' },
    { id: 't', term: 'T - Tiempo', definition: 'Implementar el menú antes del 15 de Noviembre.', termBg: '#f3e8ff', defBg: 'white' }
  ];

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          Plan de Trabajo y Seguimiento
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Garantiza que el proyecto no se quede en el papel. Acciones concretas y presupuestos.
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title="Por qué mueren los proyectos"
          subtitle="Audio Instructor"
          audioSrc="/audio/C2-M7.wav"
          transcript={<p>Para cerrar, quiero hablarles de por qué la mayoría de los proyectos turísticos fracasan en la fase de implementación. No es por falta de pasión, ni siquiera por falta de dinero. Fracasan porque se quedan en "buenas intenciones".<br/><br/>Reunirse con la comunidad y decir "vamos a mejorar el servicio al cliente" es una buena intención, pero es gaseoso, nadie sabe qué hacer el lunes por la mañana. En cambio, decir "María capacitará a 5 guías en manejo de quejas este viernes a las 4 de la tarde en el salón comunal" es una acción. Eso es la metodología S.M.A.R.T: quitarle el romanticismo a los planes y ponerles responsables, fechas límite y números que se puedan medir. Las ideas maravillosas sin un cronograma exacto, son solo alucinaciones. A continuación, pondrás a prueba tu capacidad de convertir ideas abstractas en acciones reales.</p>}
          color={headerColor || '#b91c1c'}
        />

        {/* Foto Real de Objetivo (Unsplash) */}
        <div style={{ marginTop: '2rem', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '800px', height: '350px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Darts_in_a_dartboard.jpg/1280px-Darts_in_a_dartboard.jpg" 
              alt="Objetivo SMART" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#b91c1c' }}>
          <h4><Map size={28} /> La Analogía del GPS</h4>
          <p>
            Imagina que estás en un viaje por carretera. El diseño del producto es saber a dónde vas (la playa). Las brechas son los obstáculos en el camino. <strong>El Plan de Trabajo es tu GPS</strong>: te dice exactamente qué ruta tomar, cuánto combustible (presupuesto) necesitas y a qué hora vas a llegar.
          </p>
          <p>
            Sin el GPS (Matriz 7), el proyecto se perderá en promesas vacías y las brechas nunca se cerrarán.
          </p>
        </div>

        {/* Metodología SMART Interactiva */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#b91c1c' }}>Acciones S.M.A.R.T.</h3>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '4rem' }}>
           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {smartSteps.map((step, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  style={{ 
                    padding: '1rem 1.5rem', 
                    background: activeStep === i ? (headerColor || '#b91c1c') : '#f8fafc', 
                    color: activeStep === i ? 'white' : '#475569', 
                    borderRadius: '15px', 
                    cursor: 'pointer', 
                    fontWeight: activeStep === i ? 800 : 500,
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}
                >
                  {step.icon}
                  <span>{step.title}</span>
                </div>
              ))}
           </div>
           <div style={{ flex: 1.5, background: '#fef2f2', border: '2px dashed #fca5a5', padding: '3rem', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h4 style={{ color: '#991b1b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>{smartSteps[activeStep].title}</h4>
                <p style={{ color: '#7f1d1d', fontSize: '1.2rem', lineHeight: 1.6 }}>{smartSteps[activeStep].desc}</p>
              </div>
           </div>
        </div>

        {/* Juego: Puzzle de Emparejamiento SMART */}
        <div style={{ marginBottom: '5rem' }}>
          <MatchPuzzle 
            title="Reto: Empareja las Acciones SMART" 
            description="Haz clic en la letra de la metodología SMART (izquierda) y luego haz clic en el ejemplo correcto que le corresponde (derecha)."
            pairs={smartPuzzlePairs} 
          />
        </div>

        {/* Seguimiento */}
        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #e2e8f0' }}>
           <h4 style={{ color: '#0f172a', fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Los 2 Tipos de Seguimiento</h4>
           
           <div className="grid-2" style={{ gap: '2rem' }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                 <CalendarClock size={40} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                 <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e3a8a' }}>Seguimiento Técnico (Corto Plazo)</h5>
                 <p style={{ color: '#475569', marginTop: '10px' }}>Reuniones quincenales para verificar que la alcaldía, el hotel o el ministerio estén cumpliendo con sus tareas del Plan de Trabajo. <i>¿Se instaló la señal o no?</i></p>
              </div>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                 <LineChart size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
                 <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#065f46' }}>Seguimiento Estratégico (Mediano Plazo)</h5>
                 <p style={{ color: '#475569', marginTop: '10px' }}>Después del lanzamiento (24 a 36 meses). Monitorea si el producto realmente atrae turistas y si está generando ingresos a la comunidad como se planeó.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
