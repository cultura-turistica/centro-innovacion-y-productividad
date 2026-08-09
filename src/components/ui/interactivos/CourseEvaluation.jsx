"use client";

"use client";
import React, { useState } from 'react';
import { ClipboardList, CheckCircle, Award, FileText, ChevronRight } from 'lucide-react';
import { hashAnswer, generateCertificateSeal } from '../../../utils/security';
import CertificateGenerator from './CertificateGenerator';
import { db } from '../../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function CourseEvaluation({ data, onComplete }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Datos Anónimos Encuesta
  const [surveyData, setSurveyData] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '', comments: '' });
  
  // Datos Quiz
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizError, setQuizError] = useState('');
  
  // Datos Legales
  const [legalData, setLegalData] = useState({ name: '', identification: '' });
  const [certificateData, setCertificateData] = useState(null);

  const handleSurveySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Guardar encuesta de calidad
    if (db) {
      try {
        const surveyId = `survey_${data.quiz.courseId}_${new Date().getTime()}`;
        await setDoc(doc(db, 'course_surveys', surveyId), {
          courseId: data.quiz.courseId,
          courseName: data.quiz.courseName,
          responses: surveyData,
          submittedAt: new Date().toISOString()
        });
      } catch (err) {
        console.error("Error guardando encuesta de calidad", err);
      }
    }

    setIsSubmitting(false);
    setStep(2); // Pasar al Quiz
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    setQuizError('');

    if (Object.keys(quizAnswers).length < data.quiz.questions.length) {
      setQuizError('Por favor responde todas las preguntas de la evaluación.');
      return;
    }

    // Calcular puntaje
    let correctCount = 0;
    data.quiz.questions.forEach((q) => {
      const userAnswerHash = hashAnswer(quizAnswers[q.id] || '');
      if (userAnswerHash === q.correctHash) {
        correctCount++;
      }
    });

    const percentage = (correctCount / data.quiz.questions.length) * 100;

    if (percentage >= 80) {
      setStep(3); // Pasar a recolección PII
    } else {
      setQuizError(`Has obtenido ${correctCount} de ${data.quiz.questions.length} respuestas correctas (${Math.round(percentage)}%). Necesitas al menos 80% para aprobar. Intenta de nuevo.`);
    }
  };

  const handleLegalSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const date = new Date().toLocaleDateString('es-CO');
    const certData = { 
      nombre: legalData.name, 
      identificacion: legalData.identification,
      curso: data.quiz.courseName, 
      fecha: date, 
      horas: data.quiz.horas || "40" 
    };
    const seal = generateCertificateSeal(certData);
    setCertificateData({ ...certData, sello: seal });

    if (db) {
      try {
        const certId = seal.substring(0, 15);
        await setDoc(doc(db, 'certificates', certId), {
          courseId: data.quiz.courseId,
          courseName: data.quiz.courseName,
          studentName: legalData.name,
          identification: legalData.identification,
          cryptographicSeal: seal,
          issuedAt: new Date().toISOString()
        });
      } catch (error) {
        console.error("Error guardando certificado en Firebase", error);
      }
    }

    setIsSubmitting(false);
    setStep(4);
    if (onComplete) onComplete();
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 max-w-4xl mx-auto mt-12">
      
      {/* Indicador de Progreso */}
      <div className="flex justify-between items-center mb-12">
        {[
          { icon: ClipboardList, label: "Encuesta", num: 1 },
          { icon: CheckCircle, label: "Evaluación", num: 2 },
          { icon: FileText, label: "Registro", num: 3 },
          { icon: Award, label: "Diploma", num: 4 }
        ].map((item, index) => {
          const isActive = step >= item.num;
          return (
            <div key={index} className="flex flex-col items-center gap-2 relative z-10 flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold ${isActive ? 'text-emerald-700' : 'text-slate-400'}`}>{item.label}</span>
              {index < 3 && (
                <div className={`absolute top-6 left-[60%] w-[80%] h-[2px] -z-10 ${step > item.num ? 'bg-emerald-600' : 'bg-slate-100'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* STEP 1: ENCUESTA */}
      {step === 1 && (
        <form onSubmit={handleSurveySubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-2">{data.encuesta.title}</h3>
            <p className="text-slate-600">{data.encuesta.description} <span className="text-emerald-600 font-semibold">{data.encuesta.anonymousNotice}</span></p>
          </div>

          <div className="space-y-8">
            {data.encuesta.questions.map((q) => (
              <div key={q.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-4">{q.label}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {q.options.map((opt, i) => (
                    <label key={i} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${surveyData[q.id] === opt ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20' : 'bg-white border-slate-200 hover:border-emerald-300'}`}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={surveyData[q.id] === opt}
                        onChange={(e) => setSurveyData({ ...surveyData, [q.id]: e.target.value })}
                        required
                        className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500"
                      />
                      <span className="font-medium text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-4">{data.encuesta.commentsLabel}</p>
              <textarea
                value={surveyData.comments}
                onChange={(e) => setSurveyData({ ...surveyData, comments: e.target.value })}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                rows="4"
                placeholder="Escribe tus comentarios aquí..."
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              {isSubmitting ? 'Procesando...' : data.encuesta.submitBtn}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {/* STEP 2: QUIZ */}
      {step === 2 && (
        <form onSubmit={handleQuizSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-2">{data.quiz.title}</h3>
            <p className="text-slate-600">Para aprobar necesitas obtener un 80% o más de aciertos.</p>
          </div>

          {quizError && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl font-medium text-center border border-red-100">
              {quizError}
            </div>
          )}

          <div className="space-y-6">
            {data.quiz.questions.map((q, idx) => (
              <div key={q.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-800 mb-4">{idx + 1}. {q.text}</p>
                <div className="flex flex-col gap-3">
                  {q.options.map((opt) => (
                    <label key={opt.id} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${quizAnswers[q.id] === opt.id ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20' : 'bg-white border-slate-200 hover:border-emerald-300'}`}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.id}
                        checked={quizAnswers[q.id] === opt.id}
                        onChange={(e) => setQuizAnswers({ ...quizAnswers, [q.id]: e.target.value })}
                        className="w-4 h-4 text-emerald-600 mt-1"
                      />
                      <span className="font-medium text-slate-700 leading-tight">{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              Evaluar y Continuar
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: FORMULARIO PII */}
      {step === 3 && (
        <form onSubmit={handleLegalSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">¡Evaluación Aprobada!</h3>
            <p className="text-slate-600 max-w-lg mx-auto">{data.formularioLegal.description}</p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
            <div>
              <label className="block font-bold text-slate-800 mb-2">{data.formularioLegal.nameLabel}</label>
              <input
                type="text"
                required
                value={legalData.name}
                onChange={(e) => setLegalData({ ...legalData, name: e.target.value.toUpperCase() })}
                placeholder={data.formularioLegal.namePlaceholder}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 uppercase"
              />
            </div>
            
            <div>
              <label className="block font-bold text-slate-800 mb-2">{data.formularioLegal.idLabel}</label>
              <input
                type="text"
                required
                value={legalData.identification}
                onChange={(e) => setLegalData({ ...legalData, identification: e.target.value })}
                placeholder={data.formularioLegal.idPlaceholder}
                className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-800">{data.formularioLegal.privacyNoticeTitle}</span> {data.formularioLegal.privacyNotice}
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Award className="w-5 h-5" />
              {isSubmitting ? data.formularioLegal.processingBtn : data.formularioLegal.continueBtn}
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: DIPLOMA */}
      {step === 4 && certificateData && (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="text-center">
            <h3 className="text-3xl font-black text-slate-900 mb-4">¡Felicidades, {certificateData.nombre.split(' ')[0]}!</h3>
            <p className="text-slate-600 max-w-xl mx-auto">Tu certificado ha sido generado y registrado exitosamente en el libro oficial.</p>
          </div>
          
          <CertificateGenerator data={certificateData} />
        </div>
      )}
    </div>
  );
}
