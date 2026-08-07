import React, { useState, useEffect } from 'react';
import { ClipboardList, CheckCircle, AlertTriangle, ShieldCheck, Award, Lock, FileText, LogIn } from 'lucide-react';
import { hashAnswer, generateCertificateSeal } from '../../utils/security';
import CertificateGenerator from '../CertificateGenerator';
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function TCourseEvaluation({ onComplete, quizData, encuestaData, legalDataText }) {
  // Paso 1: Formulario Legal (Nombres/Auth) | Paso 2: Encuesta | Paso 3: Quiz | Paso 4: Diploma
  const [step, setStep] = useState(1);
  const { currentUser, loginWithGoogle, loginWithEmail, registerWithEmail } = useAuth() || {};
  
  // Datos Anónimos
  const [surveyData, setSurveyData] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', q6: '' });
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizError, setQuizError] = useState('');
  
  // Datos PII (Personal Identifiable Information)
  const [legalData, setLegalData] = useState({ name: '', identification: '' });
  
  const [certificateData, setCertificateData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados para Autenticación con Correo
  const [emailAuth, setEmailAuth] = useState('');
  const [passwordAuth, setPasswordAuth] = useState('');
  const [authMode, setAuthMode] = useState('login'); // 'login' o 'register'
  const [authError, setAuthError] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // Sistema de Bloqueo por Fallos (Max 2 intentos)
  const LOCK_KEY = `quiz_lock_${quizData?.courseId || "default"}`;
  const ATTEMPTS_KEY = `quiz_attempts_${quizData?.courseId || "default"}`;
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

  const handleSurveySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Guardar ENCUESTA de Calidad en Firestore silenciosamente (si hay usuario)
    if (currentUser && db) {
      try {
        const surveyId = `${currentUser.uid}_${quizData?.courseId || "default"}_${new Date().getTime()}`;
        await setDoc(doc(db, 'course_surveys', surveyId), {
          userId: currentUser.uid,
          courseId: quizData?.courseId || "default",
          courseName: quizData?.courseName,
          responses: surveyData,
          submittedAt: new Date().toISOString()
        });
      } catch (err) {
        console.error("Error guardando encuesta de calidad", err);
      }
    }

    setIsSubmitting(false);
    setStep(3); // Pasar al Quiz
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
      // Generar certificado automáticamente después de aprobar el quiz
      const date = new Date().toLocaleDateString('es-CO');
      const certData = { 
        nombre: legalData.name, 
        identificacion: legalData.identification,
        curso: quizData?.courseName, 
        fecha: date, 
        horas: quizData?.horas || "40" 
      };
      const seal = generateCertificateSeal(certData);
      setCertificateData({ ...certData, sello: seal });

      if (currentUser && db) {
        try {
          const certId = seal.substring(0, 15);
          setDoc(doc(db, 'certificates', certId), {
            userId: currentUser.uid,
            courseId: quizData?.courseId || "default",
            courseName: quizData?.courseName,
            studentName: legalData.name,
            identification: legalData.identification,
            cryptographicSeal: seal,
            issuedAt: new Date().toISOString()
          });
        } catch (error) {
          console.error("Error guardando certificado en Firebase", error);
        }
      }

      setStep(4); // Pasar al Diploma
      if (onComplete) onComplete();
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
  const handleLegalSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      setAuthError('Debes iniciar sesión para continuar.');
      return;
    }
    setIsSubmitting(false);
    setStep(2); // Pasar a la Encuesta
  };

  return (
    <div className="bg-white rounded-[24px] p-6 md:p-12 border border-slate-200 shadow-xl mt-8">
      {/* ETAPA BLOQUEO DE SEGURIDAD */}
      {isLocked ? (
        <div className="text-center py-12">
          <Lock size={64} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-red-700 text-3xl font-black mb-4">
            Acceso Bloqueado por Seguridad
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Has superado el límite máximo de 2 intentos permitidos para aprobar la evaluación. Por normas de certificación, debes repasar el contenido antes de volver a intentarlo.
          </p>
          <div className="bg-red-50 text-red-800 px-8 py-4 rounded-2xl mt-8 inline-block font-bold border-2 border-red-100 shadow-sm">
            ⏳ Vuelve a intentarlo en {lockoutTimeLeft} hora(s)
          </div>
        </div>
      ) : (
        <>
          {/* ETAPA 1: RECOLECCIÓN DE PII Y AUTENTICACIÓN */}
          {step === 1 && (
            <form onSubmit={handleLegalSubmit} className="flex flex-col gap-8 animate-in zoom-in-95 fade-in duration-500">
              <div className="text-center mb-4">
                <FileText size={48} className="text-slate-500 mx-auto mb-4 drop-shadow-md" />
                <h2 className="text-slate-800 text-3xl font-black mb-3">{legalDataText?.title || "Paso 1: Formulario Obligatorio"}</h2>
                <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium">{legalDataText?.description}</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm">
                <Lock size={28} className="text-yellow-600 shrink-0 mt-1" />
                <p className="m-0 text-yellow-800 text-base leading-relaxed font-medium">
                  <strong className="block mb-1 text-lg">{legalDataText?.privacyNoticeTitle}</strong> {legalDataText?.privacyNotice}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <label className="block mb-2 font-bold text-slate-800 text-lg">{legalDataText?.nameLabel}</label>
                  <input required type="text" value={legalData.name} onChange={e => setLegalData({ ...legalData, name: e.target.value })} placeholder={legalDataText?.namePlaceholder} className="w-full p-4 rounded-xl border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none text-slate-700 bg-white font-medium text-lg transition-all" />
                </div>
                
                <div>
                  <label className="block mb-2 font-bold text-slate-800 text-lg">{legalDataText?.idLabel}</label>
                  <input required type="text" value={legalData.identification} onChange={e => setLegalData({ ...legalData, identification: e.target.value })} placeholder={legalDataText?.idPlaceholder} className="w-full p-4 rounded-xl border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none text-slate-700 bg-white font-medium text-lg transition-all" />
                </div>
              </div>

              {!currentUser ? (
                <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 text-center mt-4 shadow-sm">
                  <h3 className="text-blue-700 m-0 mb-6 text-2xl font-black">{legalDataText?.authPrompt}</h3>
                  
                  <div className="flex flex-col gap-6 max-w-md mx-auto text-left">
                    
                    <button type="button" onClick={loginWithGoogle} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl border-none font-bold text-lg cursor-pointer flex justify-center items-center gap-3 transition-colors shadow-md">
                      <LogIn size={24} /> {legalDataText?.googleBtn}
                    </button>

                    <div className="flex items-center gap-4 text-slate-500 font-bold uppercase text-sm">
                      <hr className="flex-1 border-t-2 border-slate-200" />
                      <span>{legalDataText?.orEmail}</span>
                      <hr className="flex-1 border-t-2 border-slate-200" />
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      {authError && <div className="text-red-600 bg-red-50 p-3 rounded-lg mb-4 text-sm text-center font-bold border border-red-200">{authError}</div>}
                      
                      <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl">
                        <button type="button" onClick={() => { setAuthMode('login'); setAuthError(''); }} className={`flex-1 p-3 rounded-lg font-bold transition-colors ${authMode === 'login' ? 'bg-white text-blue-600 shadow-sm' : 'bg-transparent text-slate-600 hover:text-slate-800'}`}>{legalDataText?.loginTab}</button>
                        <button type="button" onClick={() => { setAuthMode('register'); setAuthError(''); }} className={`flex-1 p-3 rounded-lg font-bold transition-colors ${authMode === 'register' ? 'bg-white text-blue-600 shadow-sm' : 'bg-transparent text-slate-600 hover:text-slate-800'}`}>{legalDataText?.registerTab}</button>
                      </div>

                      <div className="flex flex-col gap-4">
                        <input type="email" placeholder={legalDataText?.emailPlaceholder} value={emailAuth} onChange={e => setEmailAuth(e.target.value)} className="w-full p-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-700 font-medium" />
                        <input type="password" placeholder={legalDataText?.passwordPlaceholder} value={passwordAuth} onChange={e => setPasswordAuth(e.target.value)} className="w-full p-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-slate-700 font-medium" />
                        
                        <button 
                          type="button" 
                          disabled={isAuthLoading || !emailAuth || !passwordAuth}
                          onClick={async () => {
                            setIsAuthLoading(true);
                            setAuthError('');
                            try {
                              if (authMode === 'login') {
                                await loginWithEmail(emailAuth, passwordAuth);
                              } else {
                                await registerWithEmail(emailAuth, passwordAuth);
                              }
                            } catch (err) {
                              setAuthError(err.message.includes('auth/invalid-credential') ? 'Correo o contraseña incorrectos.' : (err.message.includes('email-already') ? 'El correo ya está registrado.' : 'Error de autenticación. Verifica tus datos o habilita este método en Firebase.'));
                            }
                            setIsAuthLoading(false);
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl border-none font-bold text-lg mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                          {isAuthLoading ? legalDataText?.processingBtn : (authMode === 'login' ? legalDataText?.loginBtn : legalDataText?.registerBtn)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl border-none font-black text-xl cursor-pointer flex justify-center items-center gap-3 mt-4 transition-colors shadow-xl disabled:opacity-70">
                  {isSubmitting ? legalDataText?.processingBtn : legalDataText?.continueBtn} <Award size={24} />
                </button>
              )}
            </form>
          )}

          {/* ETAPA 2: ENCUESTA DE APRENDIZAJE */}
          {step === 2 && (
            <form onSubmit={handleSurveySubmit} className="flex flex-col gap-8 animate-in fade-in duration-500">
              
              <div className="text-center mb-4 bg-sky-50 p-8 rounded-2xl border border-sky-200 shadow-inner">
                <FileText size={48} className="text-sky-600 mx-auto mb-4" />
                <h2 className="text-sky-800 text-2xl md:text-3xl font-black mb-2">{encuestaData?.title || "Paso 2: Encuesta de Calidad Obligatoria"}</h2>
                <p className="text-sky-700 text-lg font-semibold max-w-2xl mx-auto">
                  {encuestaData?.description}
                </p>
                <p className="text-sky-600 text-sm mt-3 font-medium">{encuestaData?.anonymousNotice}</p>
              </div>

              <div className="flex flex-col gap-6">
                {(encuestaData?.questions || []).map(q => (
                  <div key={q.id} className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-slate-800 mb-4 text-lg">{q.label}</p>
                    <select required value={surveyData[q.id]} onChange={e => setSurveyData({...surveyData, [q.id]: e.target.value})} className="w-full p-4 rounded-xl border-2 border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none text-slate-700 bg-white cursor-pointer transition-all">
                      <option value="">Selecciona...</option>
                      {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                ))}

                <div>
                  <label className="block mb-2 font-bold text-slate-800 text-lg">{encuestaData?.commentsLabel}</label>
                  <textarea value={surveyData.q6} onChange={e => setSurveyData({ ...surveyData, q6: e.target.value })} rows="3" className="w-full p-4 rounded-xl border-2 border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20 outline-none text-slate-700 bg-white resize-y transition-all" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="bg-sky-600 hover:bg-sky-700 text-white p-5 rounded-2xl border-none font-bold text-xl cursor-pointer flex justify-center items-center gap-3 transition-colors shadow-lg disabled:opacity-70">
                {isSubmitting ? 'Enviando...' : (encuestaData?.submitBtn || 'Enviar')} <CheckCircle size={24} />
              </button>
            </form>
          )}

          {/* ETAPA 3: QUIZ TÉCNICO (CALIFICACIÓN) */}
          {step === 3 && (
            <form onSubmit={handleQuizSubmit} className="flex flex-col gap-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div className="text-center mb-4 bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-inner">
                <ClipboardList size={48} className="text-amber-600 mx-auto mb-4" />
                <h2 className="text-amber-800 text-2xl md:text-3xl font-black mb-2">Paso 3: Calificación Final</h2>
                <p className="text-amber-700 text-lg font-semibold max-w-2xl mx-auto">
                  Para poder generar tu certificado oficial, debes aprobar el 80% de esta calificación.
                </p>
              </div>

              {quizError && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border-l-4 border-red-500 flex items-center gap-3 font-bold shadow-sm">
                  <AlertTriangle size={24} className="shrink-0" /> {quizError}
                </div>
              )}

              <div className="flex flex-col gap-6">
                {quizData.questions.map((q, idx) => (
                  <div key={q.id} className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-slate-800 mb-6 text-xl">{idx + 1}. {q.text}</p>
                    <div className="flex flex-col gap-4">
                      {q.options.map(opt => (
                        <label key={opt.id} className="flex gap-4 cursor-pointer items-start p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors group">
                          <input type="radio" name={q.id} required onChange={() => setQuizAnswers({ ...quizAnswers, [q.id]: opt.id })} className="mt-1 w-5 h-5 text-emerald-600 bg-slate-100 border-slate-300 focus:ring-emerald-500 focus:ring-2 cursor-pointer" /> 
                          <span className="leading-relaxed text-slate-700 font-medium group-hover:text-emerald-900">{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-2xl border-none font-bold text-xl cursor-pointer flex justify-center items-center gap-3 transition-colors shadow-lg">
                Evaluar Resultados <ShieldCheck size={24} />
              </button>
            </form>
          )}



          {/* ETAPA 4: CERTIFICADO EMITIDO */}
          {step === 4 && certificateData && (
            <div className="text-center animate-in zoom-in fade-in duration-700">
              <h2 className="text-slate-900 text-4xl font-black mb-3">Registro Exitoso</h2>
              <p className="text-slate-600 text-xl mb-12 font-medium">Tus datos legales y el Sello de Verificación han sido guardados en el registro público.</p>

              <CertificateGenerator data={certificateData} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
