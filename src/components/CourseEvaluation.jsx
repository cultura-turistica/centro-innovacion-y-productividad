import React, { useState, useEffect } from 'react';
import { ClipboardList, CheckCircle, AlertTriangle, ShieldCheck, Award, Lock, FileText } from 'lucide-react';
import { hashAnswer, generateCertificateSeal } from '../utils/security';
import CertificateGenerator from './CertificateGenerator';

export default function CourseEvaluation({ onComplete, quizData }) {
  // Paso 1: Encuesta Anónima | Paso 2: Quiz | Paso 3: Formulario Legal (Nombres) | Paso 4: Diploma
  const [step, setStep] = useState(1);
  
  // Datos Anónimos
  const [surveyData, setSurveyData] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' });
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizError, setQuizError] = useState('');
  
  // Datos PII (Personal Identifiable Information)
  const [legalData, setLegalData] = useState({ name: '', identification: '' });
  
  const [certificateData, setCertificateData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sistema de Bloqueo por Fallos (Max 2 intentos)
  const LOCK_KEY = `quiz_lock_${quizData.courseId || "default"}`;
  const ATTEMPTS_KEY = `quiz_attempts_${quizData.courseId || "default"}`;
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTimeLeft, setLockoutTimeLeft] = useState('');

  useEffect(() => {
    const lockExpiry = localStorage.getItem(LOCK_KEY);
    if (lockExpiry) {
      const now = new Date().getTime();
      if (now < parseInt(lockExpiry)) {
        setIsLocked(true);
        const hoursLeft = Math.ceil((parseInt(lockExpiry) - now) / (1000 * 60 * 60));
        setLockoutTimeLeft(hoursLeft);
      } else {
        localStorage.removeItem(LOCK_KEY);
        localStorage.removeItem(ATTEMPTS_KEY);
      }
    }
  }, [LOCK_KEY, ATTEMPTS_KEY]);
  // URLs configuradas en el entorno (o quemadas aquí temporalmente)
  const GOOGLE_FORM_SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeQAbPmUdKfUii5XmFmWcS7qvlteufLxhOQ2idQG8QPLomQsw/formResponse";
  const GOOGLE_FORM_LEGAL_URL = "https://docs.google.com/forms/d/e/1FAIpQLScJJ7L1gR5ou-ZmwKD65tu71286J_CxvSsKAxrdfrNF8NIaow/formResponse";

  const handleSurveySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Enviar ENCUESTA de Calidad al Form 1 silenciosamente
    try {
      const surveyForm = new FormData();
      surveyForm.append("entry.1570207125", quizData.courseName); 
      surveyForm.append("entry.749712173", surveyData.nombre || 'No especificado');
      surveyForm.append("entry.579435649", surveyData.ubicacion || 'No especificado');
      surveyForm.append("entry.388691744", surveyData.q1);
      surveyForm.append("entry.360983945", surveyData.q2);
      surveyForm.append("entry.658788181", surveyData.q3);
      surveyForm.append("entry.302596635", surveyData.q4);
      surveyForm.append("entry.1581710942", surveyData.q5);
      surveyForm.append("entry.1452162704", surveyData.q6);

      await fetch(GOOGLE_FORM_SURVEY_URL, { method: 'POST', mode: 'no-cors', body: surveyForm });
    } catch (err) {
      console.log("Error silencioso al enviar encuesta de calidad");
    }

    setIsSubmitting(false);
    setStep(2); // Pasar al Quiz
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setQuizError('');

    if (Object.keys(quizAnswers).length < quizData.questions.length) {
      setQuizError('Por favor responde todas las preguntas del quiz técnico.');
      return;
    }

    // Calcular puntaje
    let correctCount = 0;
    quizData.questions.forEach((q) => {
      const userAnswerHash = hashAnswer(quizAnswers[q.id] || '');
      if (userAnswerHash === q.correctHash) {
        correctCount++;
      }
    });

    const percentage = (correctCount / quizData.questions.length) * 100;

    // Aprobar si es 80% o más
    if (percentage >= 80) {
      setStep(3); // Pasar a recolección de PII
    } else {
      let attempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || '0');
      attempts += 1;
      localStorage.setItem(ATTEMPTS_KEY, attempts);

      if (attempts >= 2) {
        // Bloquear por 6 horas
        const expiry = new Date().getTime() + (6 * 60 * 60 * 1000);
        localStorage.setItem(LOCK_KEY, expiry);
        setIsLocked(true);
        setLockoutTimeLeft(6);
        setQuizError('');
      } else {
        setQuizError(`Has obtenido ${correctCount} de ${quizData.questions.length} respuestas correctas (${Math.round(percentage)}%). Necesitas al menos 80% para aprobar. Te queda ${2 - attempts} oportunidad(es) antes del bloqueo de seguridad.`);
      }
    }
  };

  const handleLegalSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generar el Sello Matemático amarrado al estudiante y al curso
    const date = new Date().toLocaleDateString('es-CO');
    const certData = { 
      nombre: legalData.name, 
      identificacion: legalData.identification,
      curso: quizData.courseName, 
      fecha: date, 
      horas: quizData.horas || "40" 
    };
    const seal = generateCertificateSeal(certData);
    setCertificateData({ ...certData, sello: seal });

    // Enviar DATOS LEGALES al Form 2 silenciosamente
    try {
      const legalForm = new FormData();
      legalForm.append("entry.651357907", quizData.courseName); 
      legalForm.append("entry.1218529443", legalData.name);
      legalForm.append("entry.1542994941", legalData.identification);
      legalForm.append("entry.1172360679", seal);
      legalForm.append("entry.18194693", date);

      await fetch(GOOGLE_FORM_LEGAL_URL, { method: 'POST', mode: 'no-cors', body: legalForm });
    } catch (err) {
      console.log("Error silencioso al guardar datos legales.");
    }

    setIsSubmitting(false);
    setStep(4); // Mostrar diploma
    if (onComplete) onComplete();
  };

  return (
    <div style={{ background: 'white', borderRadius: '24px', padding: '3rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginTop: '2rem' }}>

      {/* ETAPA BLOQUEO DE SEGURIDAD */}
      {isLocked ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <Lock size={64} color="#ef4444" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ color: '#b91c1c', fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
            Acceso Bloqueado por Seguridad
          </h2>
          <p style={{ color: '#475569', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Has superado el límite máximo de 2 intentos permitidos para aprobar la evaluación. Por normas de certificación, debes repasar el contenido antes de volver a intentarlo.
          </p>
          <div style={{ background: '#fee2e2', color: '#991b1b', padding: '1.5rem', borderRadius: '16px', marginTop: '2rem', display: 'inline-block', fontWeight: 'bold' }}>
            ⏳ Vuelve a intentarlo en {lockoutTimeLeft} hora(s)
          </div>
        </div>
      ) : (
        <>
          {/* ETAPA 1: ENCUESTA DE APRENDIZAJE */}
          {step === 1 && (
        <form onSubmit={handleSurveySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1rem', background: '#f0f9ff', padding: '2rem', borderRadius: '16px', border: '1px solid #bae6fd' }}>
            <FileText size={48} color="#0284c7" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ color: '#0369a1', fontSize: '1.8rem', fontWeight: 900 }}>Paso 1: Encuesta de Calidad Obligatoria</h2>
            <p style={{ color: '#0284c7', fontSize: '1.1rem', fontWeight: 600, maxWidth: '600px', margin: '0 auto' }}>
              Para continuar al quiz técnico y certificar tu participación, debes ayudarnos a mejorar respondiendo esta encuesta.
            </p>
            <p style={{ color: '#38bdf8', fontSize: '0.9rem', marginTop: '10px' }}>(Tus respuestas aquí son 100% anónimas)</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Preguntas de Identidad para la Encuesta */}
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Nombre Completo (Obligatorio para registro de calidad)</p>
              <input type="text" required value={surveyData.nombre} onChange={e => setSurveyData({...surveyData, nombre: e.target.value})} placeholder="Ej. Juan Pérez" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Municipio / Departamento</p>
              <input type="text" required value={surveyData.ubicacion} onChange={e => setSurveyData({...surveyData, ubicacion: e.target.value})} placeholder="Ej. Leticia, Amazonas" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
            </div>

            {/* Preguntas de Calidad */}
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>1. ¿Consideras que este curso te ha permitido adquirir nuevos conocimientos que antes no tenías?</p>
              <select required value={surveyData.q1} onChange={e => setSurveyData({...surveyData, q1: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <option value="">Selecciona...</option><option value="Mucho">Mucho</option><option value="Algo">Algo</option><option value="Poco">Poco</option>
              </select>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>2. ¿Qué tanto crees que ha mejorado tu comprensión sobre el tema tratado?</p>
              <select required value={surveyData.q2} onChange={e => setSurveyData({...surveyData, q2: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <option value="">Selecciona...</option><option value="Notablemente">Notablemente</option><option value="Moderadamente">Moderadamente</option><option value="Nada">Nada</option>
              </select>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>3. ¿Sientes que lo aprendido te será verdaderamente útil para aplicarlo en tu entorno profesional o proyecto?</p>
              <select required value={surveyData.q3} onChange={e => setSurveyData({...surveyData, q3: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <option value="">Selecciona...</option><option value="Totalmente">Totalmente</option><option value="Parcialmente">Parcialmente</option><option value="No">No</option>
              </select>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>4. ¿El formato y contenido del curso facilitaron tu proceso de aprendizaje?</p>
              <select required value={surveyData.q4} onChange={e => setSurveyData({...surveyData, q4: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <option value="">Selecciona...</option><option value="Sí, muy claro">Sí, muy claro</option><option value="Regular">Regular</option><option value="No fue claro">No fue claro</option>
              </select>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>5. ¿Consideras que tus habilidades o capacidades se han fortalecido gracias a esta capacitación?</p>
              <select required value={surveyData.q5} onChange={e => setSurveyData({...surveyData, q5: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
                <option value="">Selecciona...</option><option value="Definitivamente">Definitivamente</option><option value="Tal vez">Tal vez</option><option value="No">No</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>6. (Opcional) Déjanos tus comentarios o sugerencias sobre la calidad del curso.</label>
              <textarea value={surveyData.q6} onChange={e => setSurveyData({ ...surveyData, q6: e.target.value })} rows="3" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1' }} />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} style={{ background: '#0284c7', color: 'white', padding: '1rem', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '1.2rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            {isSubmitting ? 'Enviando Respuestas...' : 'Enviar y Pasar al Quiz Técnico'} <CheckCircle size={20} />
          </button>
        </form>
      )}

      {/* ETAPA 2: QUIZ TÉCNICO */}
      {step === 2 && (
        <form onSubmit={handleQuizSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.5s ease-out' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem', background: '#fef3c7', padding: '2rem', borderRadius: '16px', border: '1px solid #fde68a' }}>
            <ClipboardList size={48} color="#d97706" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ color: '#92400e', fontSize: '1.8rem', fontWeight: 900 }}>Paso 2: Evaluación de Conocimientos</h2>
            <p style={{ color: '#b45309', fontSize: '1.1rem', fontWeight: 600, maxWidth: '600px', margin: '0 auto' }}>
              Para poder generar tu certificado oficial, debes aprobar el 80% del quiz técnico.
            </p>
          </div>

          {quizError && (
            <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
              <AlertTriangle size={20} /> {quizError}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {quizData.questions.map((q, idx) => (
              <div key={q.id} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px' }}>
                <p style={{ fontWeight: 700, marginBottom: '1rem' }}>{idx + 1}. {q.text}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {q.options.map(opt => (
                    <label key={opt.id} style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                      <input type="radio" name={q.id} required onChange={() => setQuizAnswers({ ...quizAnswers, [q.id]: opt.id })} style={{ marginTop: '5px' }} /> 
                      <span style={{ lineHeight: '1.4' }}>{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button type="submit" style={{ background: '#16a34a', color: 'white', padding: '1rem', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '1.2rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            Evaluar Resultados <ShieldCheck size={20} />
          </button>
        </form>
      )}

      {/* ETAPA 3: RECOLECCIÓN DE PII (SOLO APROBADOS) */}
      {step === 3 && (
        <form onSubmit={handleLegalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'fadeIn 0.5s ease-out' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Award size={48} color="#eab308" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ color: '#166534', fontSize: '1.8rem', fontWeight: 800 }}>¡Evaluación Aprobada!</h2>
            <p style={{ color: '#475569', fontSize: '1.1rem' }}>Has superado el 80% de aciertos. Por favor, ingresa tus datos legales tal como deseas que aparezcan en tu certificado oficial.</p>
          </div>

          <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '1.5rem', borderRadius: '16px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <Lock size={24} color="#d97706" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, color: '#92400e', fontSize: '0.95rem', lineHeight: '1.5' }}>
              <strong>Aviso de Privacidad:</strong> Tus datos serán vinculados al Sello Matemático criptográfico y registrados en el libro oficial de egresados de Cultura T para efectos de verificación pública de tus competencias.
            </p>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nombres y Apellidos Completos</label>
            <input required type="text" value={legalData.name} onChange={e => setLegalData({ ...legalData, name: e.target.value })} placeholder="Ej. Juan Pérez López" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1.1rem' }} />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Número de Identificación (C.C. o NIT)</label>
            <input required type="text" value={legalData.identification} onChange={e => setLegalData({ ...legalData, identification: e.target.value })} placeholder="Ej. 1.020.304.050" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1.1rem' }} />
          </div>

          <button type="submit" disabled={isSubmitting} style={{ background: '#032968', color: 'white', padding: '1rem', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '1.2rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            {isSubmitting ? 'Registrando en Libro Oficial...' : 'Generar Certificado Oficial'} <Award size={20} />
          </button>
        </form>
      )}

      {/* ETAPA 4: CERTIFICADO EMITIDO */}
      {step === 4 && certificateData && (
        <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
          <h2 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Registro Exitoso</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>Tus datos legales y el Sello de Verificación han sido guardados en el registro público.</p>

          <CertificateGenerator data={certificateData} />
        </div>
      )}
      </>
      )}
    </div>
  );
}
