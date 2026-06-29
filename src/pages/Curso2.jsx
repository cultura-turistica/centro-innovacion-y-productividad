import React, { useState } from 'react';
import { BookOpen, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseEvaluation from '../components/CourseEvaluation';

// Modules for Curso 2
import Modulo1 from './CursoIntegrado/Curso2/Modulo1';
import Modulo2 from './CursoIntegrado/Curso2/Modulo2';
import Modulo3 from './CursoIntegrado/Curso2/Modulo3';
import Modulo4 from './CursoIntegrado/Curso2/Modulo4';
import Modulo5 from './CursoIntegrado/Curso2/Modulo5';
import Modulo6 from './CursoIntegrado/Curso2/Modulo6';
import Modulo7 from './CursoIntegrado/Curso2/Modulo7';

export default function Curso2() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const totalSteps = 8; // 7 Módulos + 1 Evaluación

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  const headerColor = '#16A34A'; // Green theme for Curso 2
  const headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
  
  const modTitles = [
    "Módulo 1: Fundamentos del Producto Turístico",
    "Módulo 2: Conocer al Visitante (Buyer Persona)",
    "Módulo 3: Conceptualizar la Experiencia",
    "Módulo 4: Condiciones de Consumo",
    "Módulo 5: Cadena de Valor y Brechas",
    "Módulo 6: Ficha de Producto y Validación",
    "Módulo 7: Plan de Trabajo y Seguimiento",
    "Evaluación Final"
  ];

  const curso2QuizData = {
    courseName: "Diseño de Producto Turístico Territorial",
    courseId: "C2-Producto",
    horas: "5",
    questions: [
      {
        id: "q1",
        text: "En el Módulo 2 vimos el concepto de 'Buyer Persona'. ¿Qué significa esto?",
        options: [
          { id: "a", text: "Una lista de agencias de viaje con las que hay que firmar contratos." },
          { id: "b", text: "Un perfil semi-ficticio de tu cliente ideal, incluyendo sus dolores, deseos y comportamientos." },
          { id: "c", text: "La persona encargada de cobrar a los turistas cuando llegan al territorio." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d" // hash of "b"
      },
      {
        id: "q2",
        text: "¿Por qué NO se recomiendan los planes abstractos como 'hacer un folleto', sino acciones S.M.A.R.T?",
        options: [
          { id: "a", text: "Porque la metodología S.M.A.R.T exige que sean medibles, con un responsable y un límite de tiempo claro." },
          { id: "b", text: "Porque hacer un folleto es muy costoso para la comunidad." },
          { id: "c", text: "Porque el turismo no necesita publicidad." }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb" // hash of "a"
      },
      {
        id: "q3",
        text: "¿Qué elemento es fundamental dentro de la 'Ficha de Producto' vista en el Módulo 6?",
        options: [
          { id: "a", text: "La lista detallada de los ingredientes de cada comida." },
          { id: "b", text: "Los nombres de todos los habitantes del municipio." },
          { id: "c", text: "El itinerario por horas, los costos asociados y el precio final de venta." }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6" // hash of "c"
      },
      {
        id: "q4",
        text: "En el análisis de la 'Cadena de Valor' (Módulo 5), ¿qué se considera una 'brecha'?",
        options: [
          { id: "a", text: "Un espacio físico o distancia muy larga entre dos atractivos turísticos." },
          { id: "b", text: "Un eslabón faltante o deficiente que rompe la continuidad y calidad de la experiencia del turista." },
          { id: "c", text: "La diferencia de precios entre dos hoteles de la misma categoría." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d" // hash of "b"
      },
      {
        id: "q5",
        text: "Según el Módulo 3, ¿cuál es el enfoque principal al redactar la 'Promesa de Valor' de una experiencia?",
        options: [
          { id: "a", text: "Hacer un cronograma exhaustivo de todos los lugares que se visitarán." },
          { id: "b", text: "Enfocarse exclusivamente en ofrecer los precios más bajos del mercado." },
          { id: "c", text: "Transmitir la transformación emocional, el mensaje o el aprendizaje clave que se llevará el turista." }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6" // hash of "c"
      }
    ]
  };

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#dcfce7', color: '#16A34A', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <BookOpen size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Diseño de Producto Turístico Territorial
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
          <Modulo1 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 2 ? (
          <Modulo2 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 3 ? (
          <Modulo3 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 4 ? (
          <Modulo4 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 5 ? (
          <Modulo5 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 6 ? (
          <Modulo6 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 7 ? (
          <Modulo7 headerColor={headerColor} headerGradient={headerGradient} />
        ) : step === 8 ? (
          <div style={{ padding: '2rem', height: '100%', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
            {!showEvaluation ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(12px)', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)', margin: 'auto' }}>
                <CheckCircle2 size={72} color="#16A34A" style={{ margin: '0 auto 1.5rem auto', filter: 'drop-shadow(0 10px 15px rgba(22,163,74,0.3))' }} />
                <h2 style={{ color: '#064e3b', fontSize: '2.8rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>¡Misión Cumplida!</h2>
                <p style={{ color: '#334155', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
                  Has finalizado todos los módulos de Diseño de Producto Turístico Territorial. Ahora viene el verdadero reto: <strong>Demuestra lo que aprendiste.</strong>
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => navigate('/cursos')} style={{ padding: '1rem 2rem', borderRadius: '16px', background: 'white', color: '#64748b', border: '2px solid #e2e8f0', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s' }}>
                    Terminar y Salir
                  </button>
                  <button onClick={() => setShowEvaluation(true)} style={{ padding: '1rem 2rem', borderRadius: '16px', background: 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(22,163,74,0.3)', transition: 'all 0.3s' }}>
                    Presentar Prueba Final <CheckCircle2 size={20} />
                  </button>
                </div>
              </div>
            ) : (
              <CourseEvaluation quizData={curso2QuizData} />
            )}
          </div>
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
