import React, { useState } from 'react';
import { BookOpen, Clock, Target, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

// Modules for Curso 2
import Modulo1 from './CursoIntegrado/Curso2/Modulo1';
import Modulo2 from './CursoIntegrado/Curso2/Modulo2';
import Modulo3 from './CursoIntegrado/Curso2/Modulo3';
import Modulo4 from './CursoIntegrado/Curso2/Modulo4';
import Modulo5 from './CursoIntegrado/Curso2/Modulo5';
import Modulo6 from './CursoIntegrado/Curso2/Modulo6';
import Modulo7 from './CursoIntegrado/Curso2/Modulo7';
import Modulo8 from './CursoIntegrado/Curso2/Modulo8';
import Modulo9 from './CursoIntegrado/Curso2/Modulo9';
import Modulo10 from './CursoIntegrado/Curso2/Modulo10';
import Modulo11 from './CursoIntegrado/Curso2/Modulo11';
import { useNavigate } from 'react-router-dom';

export default function Curso2() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const totalSteps = 11;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  const headerColor = '#16A34A'; // Green theme for Curso 2
  
  const modTitles = [
    "Módulo 1: Fundamentos del Producto Turístico",
    "Módulo 2: Análisis del Destino Turístico",
    "Módulo 3: Metodología de Flujos de Visitantes",
    "Módulo 4: Conceptualización de la Experiencia",
    "Módulo 5: Perfil del Visitante Priorizado",
    "Módulo 6: Cadena de Valor del Producto",
    "Módulo 7: Sostenibilidad y Criterios GSTC",
    "Módulo 8: Ficha Técnica del Producto",
    "Módulo 9: Validación del Producto",
    "Módulo 10: Plan de Trabajo y Acción",
    "Módulo 11: Comercialización y Canales"
  ];

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#dcfce7', color: '#16A34A', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <BookOpen size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso 2: Diseño de Producto Turístico Territorial
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
        ) : step === 7 ? (
          <Modulo7 />
        ) : step === 8 ? (
          <Modulo8 />
        ) : step === 9 ? (
          <Modulo9 />
        ) : step === 10 ? (
          <Modulo10 />
        ) : step === 11 ? (
          <Modulo11 />
        ) : (
          <div style={{padding: 'clamp(1.5rem, 5vw, 3rem)', textAlign: 'center'}}>
             <div style={{background: '#f0fdf4', padding: '3rem', borderRadius: '20px', border: '2px dashed #16A34A'}}>
                <h3 style={{color: '#166534'}}>Contenido en Remasterización</h3>
                <p style={{color: '#475569', maxWidth: '500px', margin: '1rem auto'}}>
                  Estamos transformando el contenido del <strong>{modTitles[step-1]}</strong> para brindarte la mejor experiencia visual.
                </p>
                <div className="mt-4">
                   <div className="inline-block animate-pulse bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                      Fase de Diseño ASC...
                   </div>
                </div>
             </div>
          </div>
        )}
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
          <button onClick={nextStep} className="btn-primary" style={{background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer'}}>
            Continuar <ArrowRight size={18}/>
          </button>
        ) : (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{background: '#166534', boxShadow: '0 10px 20px rgba(22,101,52,0.3)', cursor: 'pointer'}}>
            Finalizar Curso <CheckCircle2 size={18}/>
          </button>
        )}
      </div>

    </div>
  );
}
