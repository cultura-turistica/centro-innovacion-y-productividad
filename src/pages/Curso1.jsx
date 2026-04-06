import React, { useState } from 'react';
import { Lightbulb, Clock, Target, UserCheck, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import teamworkImg from '../assets/curso_ilustracion_trabajo_equipo.png';
import voceroImg from '../assets/curso1_vocero.png';
import financieroImg from '../assets/curso1_financiero.png';
import guiaImg from '../assets/curso1_guia.png';
import creadorImg from '../assets/curso1_creador.png';

const roles = [
  { id: 1, title: 'El Vocero', img: voceroImg, desc: 'Comunica y articula las actividades con proveedores, clientes institucionales y aliados.', person: '¿Quién tiene el don de la palabra?' },
  { id: 2, title: 'El Financiero', img: financieroImg, desc: 'Registra rigurosamente las finanzas de la ruta turística y los compromisos económicos.', person: '¿Quién es ordenado con los números?' },
  { id: 3, title: 'El Guía Local', img: guiaImg, desc: 'Lidera los espacios de socialización de la ruta biocultural con los visitantes en campo.', person: '¿Quién conoce mejor el territorio?' },
  { id: 4, title: 'El Creador', img: creadorImg, desc: 'Encargado de la fotografía, el video y las redes sociales de la iniciativa.', person: '¿Quién tiene ojo para el arte visual?' }
];

export default function Curso1({ setCurrentRoute }) {
  const [flipped, setFlipped] = useState({});
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#dbeafe', color: '#0066FF', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <Lightbulb size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso: Innovación y Emprendimiento
      </div>
      
      <h2 style={{fontFamily: 'Poppins', color: '#032968'}}>Módulo 1: Pensar y Trabajar en Colectivo</h2>
      
      {/* Progress Bar Dinámica */}
      <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
        <span style={{fontWeight: 700, color: '#475569', fontSize: '0.9rem'}}>Progreso del Módulo:</span>
        <div style={{flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden'}}>
          <div style={{width: `${(step/totalSteps)*100}%`, background: '#0066FF', height: '100%', borderRadius: '10px', transition: 'width 0.5s ease'}}></div>
        </div>
        <span style={{fontWeight: 800, color: '#0066FF'}}>{Math.round((step/totalSteps)*100)}%</span>
      </div>

      <div className="glass-card" style={{padding: '0', position: 'relative', overflow: 'hidden'}}>
        
        {/* Renderizado dinámico de los Pasos (Wizard) */}
        
        {step === 1 && (
          <div className="fade-in">
            <div style={{position: 'relative', height: '350px', background: '#055C38'}}>
               <img src={teamworkImg} alt="Trabajo en Equipo" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8}} />
               <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, #055C38)', height: '150px'}}></div>
               <div style={{position: 'absolute', bottom: '2rem', left: '10%', right: '10%', textAlign: 'center'}}>
                 <h3 style={{color: 'white', marginBottom: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2rem)', textShadow: '0 4px 10px rgba(0,0,0,0.5)'}}>Unidos alcanzamos más lejos</h3>
                 <p style={{color: '#bbf7d0', fontSize: 'clamp(1rem, 3vw, 1.2rem)', textShadow: '0 2px 5px rgba(0,0,0,0.5)'}}>La asociatividad es la pieza clave en las rutas turísticas.</p>
               </div>
            </div>

            <div style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
              <div className="grid-2">
                <div style={{background: '#eff6ff', border: '2px solid #bfdbfe', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
                  <div style={{background: '#3b82f6', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <Clock size={24}/>
                  </div>
                  <div>
                    <h4 style={{fontWeight: 800, color: '#1e40af', marginBottom: '5px'}}>Tiempo Estimado</h4>
                    <p style={{fontSize: '0.9rem', color: '#475569', marginBottom: '5px'}}><strong>30-45 mins</strong> en plataforma.</p>
                    <p style={{fontSize: '0.9rem', color: '#64748b'}}>+ 1 h. aplicando la dinámica con tu equipo.</p>
                  </div>
                </div>

                <div style={{background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
                  <div style={{color: '#ea580c', flexShrink: 0}}><Target size={30}/></div>
                  <div>
                    <h4 style={{fontWeight: 800, color: '#9a3412', marginBottom: '5px'}}>Objetivo Principal</h4>
                    <p style={{fontSize: '0.9rem', color: '#475569'}}>Identificar la estructura de roles naturales dentro de nuestro emprendimiento comunitario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
            <h3 style={{color: '#032968', marginBottom: '1.5rem', fontSize: '2rem'}}>¿Cómo se sostiene la Red?</h3>
            <p style={{fontSize: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '3rem'}}>
              Trabajar en equipo es un acto de confianza voluntaria. Nos conectamos para un objetivo común, 
              pero la única manera de evitar desgastes es <strong>hablando claro sobre lo que cada quien sabe y quiere hacer.</strong> Todos tienen un recurso vital que aportar al rompecabezas.
            </p>

            {/* Consejo Interactivo (Acordeon Visual) */}
            <div style={{background: '#F06000', color: 'white', borderRadius: '20px', padding: '2px', boxShadow: '0 10px 30px rgba(240,96,0,0.2)'}}>
               <div style={{background: '#032968', borderRadius: '18px', padding: '2.5rem', position: 'relative'}}>
                 <div style={{
                   position: 'absolute', top: '-25px', left: '2rem', width: '50px', height: '50px', 
                   background: '#F06000', borderRadius: '50%', border: '4px solid white',
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
                 }}>
                   <UserCheck size={24} color="white"/>
                 </div>
                 <h4 style={{color: '#fde047', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Alerta del Experto</h4>
                 <p style={{fontSize: '1.1rem', margin: 0, lineHeight: '1.6'}}>
                   Las urgencias de cada miembro varían. Quizás tú pienses a largo plazo, pero tu compañero necesita ingresos inmediatos. 
                   <span style={{color: '#fef08a'}}> Habla sobre expectativas de ganancia y frecuencias antes de asignar roles definitivos.</span>
                 </p>
               </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
             <h3 style={{color: '#055C38', marginBottom: '1rem', textAlign: 'center', fontSize: '2rem'}}>Toca las tarjetas para revelar los talentos naturales</h3>
             <p style={{color: '#64748b', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem'}}>En lugar de llenar planas de Excel corporativas, distribuyan la responsabilidad visualmente según sus pasiones y la esencia de su comunidad.</p>

             <div className="grid-2">
               {roles.map(role => (
                 <div key={role.id} className={`flip-card ${flipped[role.id] ? 'flipped' : ''}`} onClick={() => toggleFlip(role.id)}>
                   <div className="flip-card-inner">
                     <div className="flip-card-front" style={{padding: '1rem'}}>
                       <img src={role.img} alt={role.title} style={{height: '140px', objectFit: 'contain', marginBottom: '1rem', mixBlendMode: 'multiply'}} />
                       <h4 style={{fontSize: '1.5rem', color: '#032968', margin: 0, fontFamily: 'Poppins'}}>{role.title}</h4>
                     </div>
                     <div className="flip-card-back">
                       <h4 style={{color: '#fde047', marginBottom: '1rem'}}>{role.title}</h4>
                       <p style={{fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.5'}}>{role.desc}</p>
                       <div style={{background: '#F06000', padding: '10px 20px', borderRadius: '100px', fontSize: '0.8.5rem', fontWeight: 800}}>
                         {role.person}
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             
             <div style={{background: '#dcfce7', color: '#055C38', padding: '1.5rem', borderRadius: '15px', marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '15px'}}>
               <CheckCircle2 size={30} />
               <p style={{margin: 0, fontWeight: 600}}>¡Has revisado completamente el Módulo de Asociatividad!</p>
             </div>
          </div>
        )}

      </div>

      {/* Controles de Navegación del Wizard */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem'}}>
        {step === 1 ? (
          <button onClick={() => setCurrentRoute('/cursos')} className="btn-primary" style={{background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Salir al Catálogo
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{background: 'white', color: '#032968', boxShadow: 'none', border: '2px solid #bfdbfe', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Pestaña Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{background: '#032968', boxShadow: '0 10px 20px rgba(3,41,104,0.3)', cursor: 'pointer'}}>
            Continuar Lectura <ArrowRight size={18}/>
          </button>
        ) : (
          <button onClick={() => setCurrentRoute('/cursos')} className="btn-primary" style={{background: '#055C38', boxShadow: '0 10px 20px rgba(5,92,56,0.3)', cursor: 'pointer'}}>
            Finalizar Módulo <CheckCircle2 size={18}/>
          </button>
        )}
      </div>

    </div>
  );
}
