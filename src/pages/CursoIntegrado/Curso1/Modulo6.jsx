import React, { useState } from 'react';
import { Coins, ShieldAlert, Users, Target, CheckCircle2, AlertTriangle } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo6({ headerColor, headerGradient }) {
  const [budgetInfra, setBudgetInfra] = useState(0);
  const [budgetStaff, setBudgetStaff] = useState(0);
  const [budgetMarketing, setBudgetMarketing] = useState(0);
  const [budgetResult, setBudgetResult] = useState(null);

  const totalBudget = 10;
  const currentTotal = budgetInfra + budgetStaff + budgetMarketing;
  const remainingBudget = totalBudget - currentTotal;

  const handleBudgetChange = (setter, val, currentVal) => {
    const newVal = parseInt(val) || 0;
    const diff = newVal - currentVal;
    if (currentTotal + diff <= totalBudget) {
      setter(newVal);
      setBudgetResult(null);
    }
  };

  const evaluateBudget = () => {
    if (currentTotal < totalBudget) {
      setBudgetResult({ success: false, msg: 'Debes asignar los 10 millones completos antes de aprobar el acta.' });
      return;
    }
    if (budgetInfra < 5) {
      setBudgetResult({ success: false, msg: '¡Alerta de Fractura! La asamblea ha rechazado el acta. Según los estatutos, al menos el 50% de los excedentes ($5M) deben reinvertirse en el bien común (infraestructura o fondo de emergencia) para garantizar la Redistribución Social.' });
    } else if (budgetStaff === 0) {
      setBudgetResult({ success: false, msg: '¡Alerta de Deserción! Si no destinas bonificaciones al talento humano (guías y operarios), la motivación caerá y abandonarán el proyecto.' });
    } else {
      setBudgetResult({ success: true, msg: '¡Acta Aprobada! Has logrado un equilibrio magistral. Fortaleciste el tejido social (comunidad), bonificaste a quienes ejecutaron el servicio (asociados) e impulsaste el crecimiento a futuro.' });
    }
  };

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#dcfce7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bbf7d0" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#86efac" d="M0,300 L0,200 Q400,120 800,200 T1200,200 L1200,300 Z" />
                  {/* Ilustración de trofeo y estrellas */}
                  <circle cx="600" cy="180" r="50" fill="#fde047" />
                  <path fill="#eab308" d="M570,160 L630,160 L610,230 L590,230 Z" />
                  <circle cx="500" cy="100" r="10" fill="#fef08a" />
                  <circle cx="700" cy="120" r="15" fill="#fef08a" />
                  <circle cx="850" cy="90" r="8" fill="#fef08a" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 6 (Final)</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Simulador de<br />Casos Reales</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Pon a prueba todo lo aprendido enfrentando un caso complejo de necesidades, roles, responsabilidades y beneficios en la asociación.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Graduado" alt="Éxito" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="El Presupuesto y las Utilidades"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A3.wav"
                transcript={<p>Para terminar, vamos a ver cómo funciona el tema financiero en estos modelos organizativos. Cuando un proyecto comunitario genera utilidades, el objetivo de esos excedentes va más allá del beneficio individual.<br /><br />Por lo general, una parte de esa utilidad se destina al <strong>bien común</strong>, es decir, a reinvertir en el territorio: mejorar un sendero, arreglar infraestructura local o crear un fondo de emergencia para la organización. La otra parte se destina a dar <strong>bonificaciones o pagos justos</strong> a las personas que operaron directamente los servicios, como los guías, transportadores o quienes prepararon los alimentos. La clave de la viabilidad financiera está en buscar un punto medio: si todo se va a la infraestructura, quienes trabajan el día a día se desmotivan; y si todo se va al pago individual, el destino no se desarrolla ni se mantiene. A continuación, van a encontrar un simulador de 10 millones de pesos para que ustedes mismos hagan el ejercicio de cómo buscar ese equilibrio.</p>}
                color={headerColor}
              />
              <div style={{ background: 'white', borderRadius: '25px', padding: '3rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534' }}><Coins size={32} /></div>
                  <div>
                    <h3 style={{ color: '#0f172a', margin: '0', fontSize: '1.5rem', fontWeight: 900 }}>Herramienta: Presupuesto Participativo</h3>
                    <p style={{ color: '#475569', margin: '5px 0 0 0', fontSize: '1rem' }}>Laboratorio de Gobernanza Financiera</p>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '15px', borderLeft: '5px solid #032968', marginBottom: '2.5rem' }}>
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0 }}>
                    Al cierre del ciclo turístico, la asociación ha generado <strong>$10 Millones de pesos</strong> de utilidad neta. Como líder de la Asamblea, debes proyectar la distribución de este excedente utilizando la matriz presupuestal.
                    <br /><br /><strong>Objetivo:</strong> Repartir los fondos asegurando la sostenibilidad del bien común y el incentivo justo a los operadores, sin romper los estatutos comunitarios.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'white', padding: '2rem', borderRadius: '20px', border: '2px solid #e2e8f0' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '2px dashed #cbd5e1' }}>
                    <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a' }}>Fondos Disponibles</h4>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: remainingBudget > 0 ? '#0ea5e9' : '#16a34a' }}>
                      ${remainingBudget} Millones
                    </div>
                  </div>

                  {/* Fila 1: Infraestructura y Bien Común */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldAlert size={18} color="#032968" /> Infraestructura y Bien Común (Techos, Acueducto, Fondo Social)</strong>
                      <span style={{ fontWeight: 'bold', color: '#032968' }}>${budgetInfra}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetInfra}
                      onChange={(e) => handleBudgetChange(setBudgetInfra, e.target.value, budgetInfra)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#032968' }}
                    />
                  </div>

                  {/* Fila 2: Bonificación a Guías y Operadores */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={18} color="#b45309" /> Bonificación Extra (Talento Humano y Guianza)</strong>
                      <span style={{ fontWeight: 'bold', color: '#b45309' }}>${budgetStaff}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetStaff}
                      onChange={(e) => handleBudgetChange(setBudgetStaff, e.target.value, budgetStaff)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#b45309' }}
                    />
                  </div>

                  {/* Fila 3: Marketing y Proyección */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><Target size={18} color="#059669" /> Marketing y Promoción (Mejora comercial)</strong>
                      <span style={{ fontWeight: 'bold', color: '#059669' }}>${budgetMarketing}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetMarketing}
                      onChange={(e) => handleBudgetChange(setBudgetMarketing, e.target.value, budgetMarketing)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#059669' }}
                    />
                  </div>

                  <button
                    onClick={evaluateBudget}
                    style={{ marginTop: '1rem', background: headerColor, color: 'white', border: 'none', padding: '15px 30px', borderRadius: '15px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: `0 10px 20px ${headerColor}40`, transition: 'all 0.2s' }}
                  >
                    Someter Acta a la Asamblea Comunal
                  </button>

                  {budgetResult && (
                    <div className="pop-in" style={{ padding: '2rem', borderRadius: '15px', border: `2px solid ${budgetResult.success ? '#16a34a' : '#ef4444'}`, background: budgetResult.success ? '#f0fdf4' : '#fef2f2', display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {budgetResult.success ? <CheckCircle2 size={50} color="#16a34a" /> : <AlertTriangle size={50} color="#ef4444" />}
                      <div>
                        <h4 style={{ color: budgetResult.success ? '#166534' : '#b91c1c', fontSize: '1.3rem', margin: '0 0 10px 0' }}>{budgetResult.success ? 'Gobernanza Exitosa' : 'Resolución Rechazada'}</h4>
                        <p style={{ color: budgetResult.success ? '#14532d' : '#7f1d1d', margin: 0, fontSize: '1.05rem', lineHeight: '1.5' }}>{budgetResult.msg}</p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
  );
}
