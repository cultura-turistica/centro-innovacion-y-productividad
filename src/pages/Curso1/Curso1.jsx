import React, { useState } from 'react';
import { BookOpen, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importamos data de Curso 1 para el prototipo
import { curso1Data } from '../../data/curso1Data';
import Modulo1 from './Modulo1';
import Modulo2 from './Modulo2';
import Modulo3 from './Modulo3';
import Modulo4 from './Modulo4';
import Modulo5 from './Modulo5';
import Modulo6 from './Modulo6';
import TCourseEvaluation from '../../components/tailwind/TCourseEvaluation';

export default function Curso1() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const totalSteps = 7; // Módulo 1-6 + Evaluación

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  const getStepTitle = () => {
    switch(step) {
      case 1: return 'Módulo 1: Introducción a la Economía Pluricultural';
      case 2: return 'Módulo 2: Conservación de la Naturaleza';
      case 3: return 'Módulo 3: Valoración de Recursos Históricos y Culturales';
      case 4: return 'Módulo 4: Creación de un Ecosistema Sostenible';
      case 5: return 'Módulo 5: Mediación y Resolución de Conflictos';
      case 6: return 'Módulo 6: Sostenibilidad Financiera';
      case 7: return 'Evaluación Final y Certificación';
      default: return '';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col min-h-screen">
      {/* Píldora de título usando clases puras de Tailwind */}
      <div className="bg-sky-100 text-blue-700 px-6 py-2 rounded-full font-bold inline-flex items-center gap-2 mb-6 shadow-sm w-fit">
        <BookOpen size={18} /> 
        <span>Prototipo Tailwind (Gold Standard)</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 transition-colors duration-300 tracking-tight">
        {getStepTitle()}
      </h2>
      
      {/* Progress Bar Tailwind */}
      <div className="bg-white/70 backdrop-blur-md rounded-[20px] p-4 flex items-center gap-4 mb-8 shadow-sm border border-slate-200">
        <span className="font-bold text-slate-500 text-sm">Progreso:</span>
        <div className="flex-1 bg-slate-200 h-2.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(step/totalSteps)*100}%` }}
          ></div>
        </div>
        <span className="font-extrabold text-blue-600">{Math.round((step/totalSteps)*100)}%</span>
      </div>

      <div className="bg-white/85 backdrop-blur-lg border border-sky-100 rounded-[30px] shadow-2xl relative overflow-hidden min-h-[500px]">
        {step === 1 && <Modulo1 data={curso1Data.modulo1} theme="blue" />}
        {step === 2 && <Modulo2 data={curso1Data.modulo2} theme="green" />}
        {step === 3 && <Modulo3 data={curso1Data.modulo3} theme="orange" />}
        {step === 4 && <Modulo4 data={curso1Data.modulo4} theme="indigo" />}
        {step === 5 && <Modulo5 data={curso1Data.modulo5} theme="cyan" />}
        {step === 6 && <Modulo6 data={curso1Data.modulo6} theme="emerald" />}
        {step === 7 && (
          <div className="flex flex-col flex-1 pb-10">
            <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-yellow-100 shadow-sm mb-10">
              <div className="w-full h-[200px] relative overflow-hidden">
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full">
                  <path fill="#fde68a" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#fcd34d" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
                  <circle cx="300" cy="200" r="15" fill="#f59e0b" />
                  <circle cx="500" cy="150" r="20" fill="#f59e0b" />
                  <circle cx="800" cy="220" r="25" fill="#f59e0b" />
                  <circle cx="900" cy="150" r="15" fill="#f59e0b" />
                </svg>
              </div>
              <div className="bg-amber-600 bg-linear-to-br from-amber-600 to-orange-700 px-8 py-10 flex items-center gap-8 relative z-10 -mt-8 rounded-t-[30px] rounded-b-[20px] shadow-lg">
                <div className="flex-1">
                  <div className="bg-white/20 px-4 py-1.5 rounded-full inline-block text-white font-semibold mb-4 text-sm backdrop-blur-sm">
                    {curso1Data.certificacion.badge}
                  </div>
                  <h3 
                    className="text-white mb-4 text-3xl md:text-5xl font-black leading-tight drop-shadow-md"
                    dangerouslySetInnerHTML={{ __html: curso1Data.certificacion.title }}
                  ></h3>
                  <p className="text-white/90 text-lg font-medium max-w-2xl leading-relaxed">
                    {curso1Data.certificacion.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://api.dicebear.com/9.x/micah/svg?seed=Certificado&backgroundColor=fef08a" 
                    alt="Logro" 
                    className="w-32 h-32 bg-white rounded-full p-2 shadow-xl border-4 border-white/30" 
                  />
                </div>
              </div>
            </div>

            <div className="px-4 md:px-12">
              {!showEvaluation ? (
                <div className="text-center p-12 bg-white rounded-[24px] shadow-xl border border-slate-200 animate-in fade-in duration-500">
                  <BookOpen size={64} className="text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-slate-900 text-3xl font-black mb-4">{curso1Data.certificacion.completionTitle}</h2>
                  <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
                    {curso1Data.certificacion.completionDesc}
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <button 
                      onClick={() => navigate('/cursos')} 
                      className="px-8 py-4 rounded-xl bg-slate-100 text-slate-600 font-bold text-lg hover:bg-slate-200 transition-colors"
                    >
                      {curso1Data.certificacion.exitBtn}
                    </button>
                    <button 
                      onClick={() => { setStep(1); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                      className="px-8 py-4 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-lg hover:bg-indigo-100 transition-colors"
                    >
                      Reiniciar Curso
                    </button>
                    <button 
                      onClick={() => setShowEvaluation(true)} 
                      className="px-8 py-4 rounded-xl bg-amber-600 text-white font-bold text-lg hover:bg-amber-700 transition-colors flex items-center gap-2 shadow-lg shadow-amber-600/30"
                    >
                      {curso1Data.certificacion.certBtn} <CheckCircle2 size={24} />
                    </button>
                  </div>
                </div>
              ) : (
                <TCourseEvaluation 
                  quizData={curso1Data.quiz} 
                  encuestaData={curso1Data.encuesta}
                  legalDataText={curso1Data.formularioLegal}
                  onComplete={() => console.log('Evaluación Completada')} 
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls Tailwind */}
      <div className="flex justify-between mt-10">
        {step === 1 ? (
          <button 
            onClick={() => navigate('/cursos')} 
            className="px-6 py-3 rounded-full bg-white text-slate-500 border-2 border-slate-200 font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18}/> Salir
          </button>
        ) : (
          <button 
            onClick={prevStep} 
            className="px-6 py-3 rounded-full bg-white text-slate-600 border-2 border-slate-300 font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18}/> Anterior
          </button>
        )}

        {step < totalSteps && (
          <button 
            onClick={nextStep} 
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1"
          >
            Continuar <ArrowRight size={18}/>
          </button>
        )}
      </div>
    </div>
  );
}
