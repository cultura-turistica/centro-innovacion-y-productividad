import React, { useState } from 'react';
import { Camera, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Modules for Curso Fotografía
import Modulo1 from './CursoIntegrado/Curso3/Modulo1';
import Modulo2 from './CursoIntegrado/Curso3/Modulo2';
import Modulo3 from './CursoIntegrado/Curso3/Modulo3';
import Modulo4 from './CursoIntegrado/Curso3/Modulo4';
import Modulo5 from './CursoIntegrado/Curso3/Modulo5';
import Modulo6 from './CursoIntegrado/Curso3/Modulo6';

export default function Curso4() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  const headerColor = '#4F46E5'; // Indigo theme for Photography
  
  const modTitles = [
    "Módulo 1: La Luz y la Cámara (Fundamentos)",
    "Módulo 2: Tu Equipo (Cámaras y Smartphones)",
    "Módulo 3: Configuración y Flujo de Trabajo",
    "Módulo 4: El Arte de Mirar (Punto de Vista)",
    "Módulo 5: Encuadre y Composición",
    "Módulo 6: Práctica (Simulador de Cámara)"
  ];

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#E0E7FF', color: '#4F46E5', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <Camera size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso: Fundamentos y Composición Fotográfica
      </div>
      
      <h2 style={{color: headerColor, transition: 'color 0.3s ease'}}>{modTitles[step-1]}</h2>
      
      {/* Progress Bar */}
      <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem'}}>
        <span style={{fontWeight: 700, color: '#475569', fontSize: '0.9rem'}}>Progreso:</span>
        <div style={{flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden'}}>
          <div style={{width: `${(step/totalSteps)*100}%`, background: headerColor, height: '100%', borderRadius: '10px', transition: 'all 0.5s ease'}}></div>
        </div>
        <span style={{fontWeight: 800, color: headerColor}}>{Math.round((step/totalSteps)*100)}%</span>
      </div>

      <div className="glass-card" style={{padding: '0', position: 'relative', overflow: 'hidden', minHeight: '500px'}}>
        {step === 1 ? (
          <Modulo1 />
        ) : step === 2 ? (
          <Modulo2 />
        ) : step === 3 ? (
          <Modulo3 />
        ) : step === 4 ? (
          <Modulo4 />
        ) : step === 5 ? (
          <Modulo5 />
        ) : step === 6 ? (
          <Modulo6 />
        ) : null}
      </div>

      {/* Navigation Controls */}
      <div className="next-prev-container" style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Volver al Catálogo
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, border: 'none', cursor: 'pointer', color: 'white'}}>
            Continuar <ArrowRight size={18}/>
          </button>
        ) : (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{background: '#312E81', boxShadow: '0 10px 20px rgba(49,46,129,0.3)', border: 'none', cursor: 'pointer', color: 'white'}}>
            Finalizar Curso <CheckCircle2 size={18}/>
          </button>
        )}
      </div>

    </div>
  );
}
