import React, { useState } from 'react';
import { Palette, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Modules for Curso Branding
import Modulo1 from './CursoIntegrado/Curso5/Modulo1';
import Modulo2 from './CursoIntegrado/Curso5/Modulo2';
import Modulo3 from './CursoIntegrado/Curso5/Modulo3';
import Modulo4 from './CursoIntegrado/Curso5/Modulo4';
import Modulo5 from './CursoIntegrado/Curso5/Modulo5';

export default function Curso5() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  const headerColor = '#ea580c'; // Orange theme for Branding
  
  const modTitles = [
    "Módulo 1: Fundamentos de Marca y Diferenciación",
    "Módulo 2: Personalidad y Arquetipos",
    "Módulo 3: Psicología del Color",
    "Módulo 4: Tipografía y Anatomía del Logotipo",
    "Módulo 5: Ecosistema Digital (Instagram)"
  ];

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#ffedd5', color: '#ea580c', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <Palette size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso: Diseño de Marca e Identidad Visual
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
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{background: '#9a3412', boxShadow: '0 10px 20px rgba(154,52,18,0.3)', border: 'none', cursor: 'pointer', color: 'white'}}>
            Finalizar Curso <CheckCircle2 size={18}/>
          </button>
        )}
      </div>

    </div>
  );
}
