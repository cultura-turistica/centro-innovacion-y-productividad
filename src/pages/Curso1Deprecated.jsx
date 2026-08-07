import React, { useState } from 'react';
import { Lightbulb, ArrowLeft, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseEvaluation from '../components/CourseEvaluation';
import useCourseProgress from '../utils/useCourseProgress';

import Modulo1 from './CursoIntegrado/Curso1/Modulo1';
import Modulo2 from './CursoIntegrado/Curso1/Modulo2';
import Modulo3 from './CursoIntegrado/Curso1/Modulo3';
import Modulo4 from './CursoIntegrado/Curso1/Modulo4';
import Modulo5 from './CursoIntegrado/Curso1/Modulo5';
import Modulo6 from './CursoIntegrado/Curso1/Modulo6';
import { curso1Data } from '../data/curso1Data';

export default function Curso1Deprecated() {
  const navigate = useNavigate();
  const { step, setStep, showEvaluation, setShowEvaluation, resetProgress } = useCourseProgress('curso1');
  const totalSteps = 7;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const prevStep = () => { 
    if (step === 7 && showEvaluation) {
      setShowEvaluation(false);
    } else if (step > 1) {
      setStep(step - 1); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const curso1QuizData = curso1Data.quiz;

  let headerColor = '#032968';
  let headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  if (step === 2) {
    headerColor = '#055C38';
    headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
  }
  else if (step === 3) {
    headerColor = '#ea580c';
    headerGradient = 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
  }
  else if (step === 4) {
    headerColor = '#032968';
    headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  }
  else if (step === 5) {
    headerColor = '#2563eb';
    headerGradient = 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)';
  }
  else if (step === 6) {
    headerColor = '#166534';
    headerGradient = 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)';
  }

  return (
    <div className="main-container">
      <style>
        {`
          .shake-animation { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
          @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
          
          .pop-in { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
          @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          
          .chat-bubble-in { animation: chatIn 0.3s ease-out forwards; transform-origin: bottom left; }
          @keyframes chatIn { 0% { transform: scale(0.9) translateY(10px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }

          input[type=range].custom-slider {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
          }
          input[type=range].custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: #ffffff;
            border: 4px solid #0284c7;
            cursor: pointer;
            margin-top: -16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: transform 0.1s;
          }
          input[type=range].custom-slider::-webkit-slider-thumb:active {
            transform: scale(1.1);
          }
          input[type=range].custom-slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: #e2e8f0;
            border-radius: 10px;
          }
          
          .node-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 1s ease forwards; }
          @keyframes drawLine { to { stroke-dashoffset: 0; } }

          .theory-block { background: white; border-radius: 20px; padding: 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); margin-bottom: 2rem; border-left: 5px solid ${headerColor}; }
          .theory-block h4 { color: ${headerColor}; font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; display: flex; alignItems: center; gap: 10px; }
          .theory-block p { color: #475569; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1rem; }
          
          .lab-badge { display: inline-flex; align-items: center; gap: 8px; background: #fef3c7; color: #d97706; padding: 8px 20px; border-radius: 30px; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem; border: 2px solid #fde68a; }
        `}
      </style>

      <div className="title-pill mb-4" style={{ background: '#dbeafe', color: '#0066FF', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <Lightbulb size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }} />
        Formación en Turismo Comunitario
      </div>

      <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
        <span style={{ fontWeight: 700, color: '#475569', fontSize: '0.9rem' }}>Progreso:</span>
        <div style={{ flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / totalSteps) * 100}%`, background: headerColor, height: '100%', borderRadius: '10px', transition: 'all 0.5s ease' }}></div>
        </div>
        <span style={{ fontWeight: 800, color: headerColor }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>

        {step === 1 && <Modulo1 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo1} />}
        {step === 2 && <Modulo2 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo2} />}
        {step === 3 && <Modulo3 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo3} />}
        {step === 4 && <Modulo4 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo4} />}
        {step === 5 && <Modulo5 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo5} />}
        {step === 6 && <Modulo6 headerColor={headerColor} headerGradient={headerGradient} data={curso1Data.modulo6} />}

        {step === 7 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#fef3c7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#fde68a" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#fcd34d" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
                  <circle cx="300" cy="200" r="15" fill="#f59e0b" />
                  <circle cx="500" cy="150" r="20" fill="#f59e0b" />
                  <circle cx="800" cy="220" r="25" fill="#f59e0b" />
                  <circle cx="900" cy="150" r="15" fill="#f59e0b" />
                </svg>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)', padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>{curso1Data.certificacion.badge}</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: curso1Data.certificacion.title }}></h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>{curso1Data.certificacion.description}</p>
                </div>
                <div className="hidden md:block">
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Certificado&backgroundColor=fef08a" alt="Logro" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              {!showEvaluation ? (
                <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <Award size={64} color="#eab308" style={{ margin: '0 auto 1rem auto' }} />
                  <h2 style={{ color: '#0f172a', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>{curso1Data.certificacion.completionTitle}</h2>
                  <p style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    {curso1Data.certificacion.completionDesc}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => navigate('/cursos')} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#f1f5f9', color: '#475569', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                      {curso1Data.certificacion.exitBtn}
                    </button>
                    <button onClick={resetProgress} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#e0e7ff', color: '#3730a3', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                      Reiniciar Curso
                    </button>
                    <button onClick={() => setShowEvaluation(true)} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#d97706', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(217,119,6,0.2)' }}>
                      {curso1Data.certificacion.certBtn} <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <CourseEvaluation quizData={curso1QuizData} />
              )}
            </div>
          </div>
        )}

      </div>

      <div className="next-prev-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem' }}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer' }}>
            <ArrowLeft size={18} /> Salir
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{ background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer' }}>
            <ArrowLeft size={18} /> Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{ background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer', border: 'none', color: 'white' }}>
            Siguiente Módulo <ArrowRight size={18} />
          </button>
        ) : (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: '#166534', boxShadow: '0 10px 20px rgba(22,101,52,0.3)', cursor: 'pointer', border: 'none', color: 'white' }}>
            Terminar y Salir
          </button>
        )}
      </div>

    </div>
  );
}
