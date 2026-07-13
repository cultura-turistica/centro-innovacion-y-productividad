import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseEvaluation from '../components/CourseEvaluation';

import Modulo1 from './CursoIntegrado/Curso6/Modulo1';
import Modulo2 from './CursoIntegrado/Curso6/Modulo2';
import Modulo3 from './CursoIntegrado/Curso6/Modulo3';
import Modulo4 from './CursoIntegrado/Curso6/Modulo4';
import Modulo5 from './CursoIntegrado/Curso6/Modulo5';

// Definición de la evaluación final para el Curso 6
const curso6QuizData = {
  courseId: "c6_experiencias_privadas",
  questions: [
    {
      question: "¿Cuál es el propósito principal de identificar el 'Job to be Done' (Trabajo a realizar) de un cliente?",
      options: [
        "A. Segmentar a los clientes por su edad y nivel de ingresos para publicidad.",
        "B. Entender la tarea real o problema profundo que intentan resolver al 'contratar' tu experiencia.",
        "C. Copiar las características del producto de la competencia más cercana.",
        "D. Diseñar encuestas de satisfacción más largas y detalladas."
      ],
      correctHash: "2204c3da112e4526d1ed51a37a7837decc42e126fc36b6cb65fccbe308c1d533", // B
      feedback: "El 'Job to be Done' se enfoca en la motivación oculta (funcional, emocional o social) por la cual un cliente busca tu servicio, no en datos demográficos superficiales."
    },
    {
      question: "En el diseño de experiencias, ¿cuál es la diferencia clave entre un 'Minimizador de Dolor' y un 'Amplificador de Deleite'?",
      options: [
        "A. El minimizador elimina una fricción o molestia operativa, mientras que el amplificador inyecta una sorpresa positiva e inesperada.",
        "B. El minimizador cuesta mucho dinero y el amplificador es gratuito.",
        "C. Ambos son lo mismo, solo depende de si el cliente está de buen o mal humor.",
        "D. El minimizador se usa solo en hoteles y el amplificador solo en restaurantes."
      ],
      correctHash: "a4c288dc36573bd237c05051cd10c149ebffc7310065a3177ee8bbd9124be3cb", // A
      feedback: "Los minimizadores previenen la frustración (ej: pagos virtuales si no hay cajeros), y los amplificadores generan asombro (ej: un tinto caliente sorpresa a mitad del camino)."
    },
    {
      question: "Según el concepto de Producto Mínimo Viable (MVP) aplicado a experiencias turísticas, ¿qué debes hacer ANTES de invertir todo tu capital?",
      options: [
        "A. Pedir un crédito bancario enorme para asegurar que el hotel sea 5 estrellas desde el primer día.",
        "B. Diseñar un brochure costoso y pagar publicidad masiva en redes sociales.",
        "C. Lanzar la versión más pequeña y barata de tu idea que ya solucione el problema, para validar si la gente la quiere.",
        "D. Esperar años hasta que cada detalle arquitectónico esté perfecto antes de recibir al primer turista."
      ],
      correctHash: "b62edb7bc732506e789dbb18454b83f510be0da8b3684a0d923bb6d6d45e69e4", // C
      feedback: "El MVP trata de 'podar' lo bonito pero no esencial para salir al mercado rápido y fallar barato, probando si la propuesta de valor funciona en la vida real."
    },
    {
      question: "Al estructurar tu propuesta de valor, ¿por qué es peligroso confundir la promesa FUNCIONAL con un ATRIBUTO SOCIAL?",
      options: [
        "A. Porque los atributos sociales son ilegales en los negocios modernos.",
        "B. Porque si el producto funcional falla (ej. la comida es fea), el atributo social (ej. contratar madres) no será suficiente para que el cliente vuelva.",
        "C. Porque a los turistas no les importan los atributos sociales en lo absoluto.",
        "D. Porque los inversionistas solo financian atributos sociales, no productos funcionales."
      ],
      correctHash: "6c6df9729ff4cd28828b6d859e4bbab96d744ec469792032e29302660d3d8db4", // B
      feedback: "El cliente te contrata primero para resolver una necesidad funcional. El atributo social es un complemento poderoso, pero no reemplaza la calidad fundamental del servicio."
    },
    {
      question: "¿Qué significa realmente 'Iterar' en el contexto del diseño de servicios (Sense & Respond)?",
      options: [
        "A. Cambiar el concepto completo del negocio cada vez que un cliente hace un comentario negativo.",
        "B. Ignorar por completo las quejas de los clientes porque tú eres el experto.",
        "C. Cobrar más caro por el mismo servicio año tras año sin hacer mejoras.",
        "D. Probar diferentes soluciones al menor costo posible, fallar rápido y realizar mejoras constantes basadas en datos y observación."
      ],
      correctHash: "7b470bf6ff3f1bc5415712caeb659e9ec49b109cc92f33b1e3e670498b67104b", // D
      feedback: "Iterar es un proceso sistemático de escucha, prueba y ajuste constante, asumiendo el riesgo de equivocarse de manera controlada para perfeccionar la experiencia."
    }
  ]
};

export default function Curso6() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 13; // 12 + 1 para evaluación
  const [showEvaluation, setShowEvaluation] = useState(false);

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const prevStep = () => { 
    if (step === 13 && showEvaluation) {
      setShowEvaluation(false);
    } else if (step > 1) {
      setStep(step - 1); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  let headerColor = '#032968';
  let headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  let modTitle = 'Módulo 1: Descubrimiento y Empatía';

  if (step >= 4 && step <= 6) { 
    headerColor = '#055C38'; 
    headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
    modTitle = 'Módulo 2: El Tablero de Propuesta de Valor'; 
  }
  else if (step >= 7 && step <= 8) { 
    headerColor = '#F06000'; 
    headerGradient = 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
    modTitle = 'Módulo 3: Prototipado y Validación'; 
  }
  else if (step >= 9 && step <= 10) { 
    headerColor = '#166534'; 
    headerGradient = 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)';
    modTitle = 'Módulo 4: Estructuración del Negocio y MVP'; 
  }
  else if (step >= 11 && step <= 12) { 
    headerColor = '#4c1d95'; 
    headerGradient = 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)';
    modTitle = 'Módulo 5: Ciclo de Sense & Respond'; 
  }
  else if (step === 13) {
    headerColor = '#0f172a';
    headerGradient = 'linear-gradient(135deg, #334155 0%, #0f172a 100%)';
    modTitle = 'Evaluación y Certificación';
  }

  return (
    <div className="main-container">
      <style>{`
        .interactive-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
        .hover-scale { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .hover-scale:hover { transform: scale(1.1) rotate(2deg); }
        .reveal-content { max-height: 0; opacity: 0; overflow: hidden; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .interactive-card:hover .reveal-content { max-height: 200px; opacity: 1; margin-top: 15px; }
        .pulse-icon { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
      `}</style>
      
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div className="title-pill" style={{ background: '#eff6ff', color: '#1e40af', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', margin: 0 }}>
          <Briefcase size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }} />
          Arquitectura de Experiencias Privadas
        </div>
        <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>
          Módulo Empresarial Avanzado
        </div>
      </div>

      <h2 style={{ color: headerColor, transition: 'color 0.3s ease', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.5px' }}>{modTitle}</h2>

      {/* Progress Bar Interactiva */}
      <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '40px', height: '40px', background: headerColor, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          {step}
        </div>
        <div style={{ flexGrow: 1, background: '#e2e8f0', height: '12px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / totalSteps) * 100}%`, background: headerGradient, height: '100%', borderRadius: '10px', transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
        </div>
        <span style={{ fontWeight: 800, color: headerColor, fontSize: '1.2rem' }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>
        {step >= 1 && step <= 3 && <Modulo1 step={step} headerColor={headerColor} headerGradient={headerGradient} />}
        {step >= 4 && step <= 6 && <Modulo2 step={step} headerColor={headerColor} headerGradient={headerGradient} />}
        {step >= 7 && step <= 8 && <Modulo3 step={step} headerColor={headerColor} headerGradient={headerGradient} />}
        {step >= 9 && step <= 10 && <Modulo4 step={step} headerColor={headerColor} headerGradient={headerGradient} />}
        {step >= 11 && step <= 12 && <Modulo5 step={step} headerColor={headerColor} headerGradient={headerGradient} />}
        
        {step === 13 && (
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
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Cierre y Evaluación</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Certificación<br />Oficial</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Demuestra lo aprendido en el curso y obtén tu certificado verificado.</p>
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
                  <h2 style={{ color: '#0f172a', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>¡Has completado el contenido!</h2>
                  <p style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Felicidades por completar el estudio del Módulo Empresarial Avanzado. Si lo deseas, puedes realizar la evaluación de conocimientos para obtener tu certificado oficial.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => navigate('/cursos')} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#f1f5f9', color: '#475569', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                      Terminar y Salir
                    </button>
                    <button onClick={() => setShowEvaluation(true)} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#d97706', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(217,119,6,0.2)' }}>
                      Obtener Certificado (Opcional) <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <CourseEvaluation quizData={curso6QuizData} />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="next-prev-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '2px solid #e2e8f0', paddingTop: '2rem' }}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Salir
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{ background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{ background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Siguiente Etapa <ArrowRight size={18} />
          </button>
        ) : (
          <div style={{width: '10px'}}></div>
        )}
      </div>
    </div>
  );
}
