import React, { useState } from 'react';
import { Lightbulb, Clock, Target, UserCheck, ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Leaf, Coins, Users, Landmark, Music } from 'lucide-react';

import Modulo4 from './CursoIntegrado/Modulo4';
import Modulo5 from './CursoIntegrado/Modulo5';
import Modulo6 from './CursoIntegrado/Modulo6';
import Modulo7 from './CursoIntegrado/Modulo7';
import LegacyRenderer from './CursoIntegrado/LegacyRenderer';
import { legacyModules } from './CursoIntegrado/legacyData';

import teamworkImg from '../assets/curso_ilustracion_trabajo_equipo.png';
import voceroImg from '../assets/curso1_vocero.png';
import financieroImg from '../assets/curso1_financiero.png';
import guiaImg from '../assets/curso1_guia.png';
import creadorImg from '../assets/curso1_creador.png';
import sostEarthImg from '../assets/mod2_sostenibilidad.png';
import matHeritageImg from '../assets/mod3_patrimonio_material.png';
import inmatHeritageImg from '../assets/mod3_patrimonio_inmaterial.png';

const roles = [
  { id: 1, title: 'El Vocero', img: voceroImg, desc: 'Comunica y articula las actividades con proveedores, clientes institucionales y aliados.', person: '¿Quién tiene el don de la palabra?' },
  { id: 2, title: 'El Financiero', img: financieroImg, desc: 'Registra rigurosamente las finanzas de la ruta turística y los compromisos económicos.', person: '¿Quién es ordenado con los números?' },
  { id: 3, title: 'El Guía Local', img: guiaImg, desc: 'Lidera los espacios de socialización con visitantes en campo.', person: '¿Quién conoce mejor el territorio?' },
  { id: 4, title: 'El Creador', img: creadorImg, desc: 'Encargado de la fotografía, el video y las redes sociales de la iniciativa.', person: '¿Quién tiene ojo para el arte visual?' }
];

export default function Curso1({ setCurrentRoute }) {
  const [flipped, setFlipped] = useState({});
  const [step, setStep] = useState(1);
  const [activeAcc, setActiveAcc] = useState(null);
  
  // Mod1: 1,2,3. Mod2: 4,5. Mod3: 6. Mod4: 7. Mod5: 8. Mod6-11: 9-14. End: 15
  const totalSteps = 15;

  const toggleFlip = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({top: 0, behavior: 'smooth'}); };

  // Detect current Modulo based on step
  let headerColor = '#032968';
  let modTitle = 'Módulo 1: Pensar y Trabajar en Colectivo';
  
  if (step >= 4 && step <= 5) { headerColor = '#055C38'; modTitle = 'Módulo 2: Turismo Sostenible'; }
  else if (step === 6) { headerColor = '#F06000'; modTitle = 'Módulo 3: Patrimonio Cultural'; }
  else if (step === 7) { headerColor = '#F06000'; modTitle = 'Módulo 4: Resolución de Conflictos'; }
  else if (step === 8) { headerColor = '#055C38'; modTitle = 'Módulo 5: Modelo de Negocio'; }
  else if (step === 9) { headerColor = '#032968'; modTitle = 'Módulo 6: Segmentación de Mercado'; }
  else if (step === 10) { headerColor = '#F06000'; modTitle = 'Módulo 7: Guionaje y Guianza'; }
  else if (step >= 11 && step <= 14) { 
    headerColor = '#032968'; 
    modTitle = legacyModules.find(m => m.id === (step - 3))?.title || `Módulo ${step - 3}`; 
  }
  else if (step === 15) { headerColor = '#166534'; modTitle = 'Finalización Cursos SGR'; }

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#dbeafe', color: '#0066FF', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
        <Lightbulb size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso Integrado SGR: (Fundación de Ruta Comunitaria)
      </div>
      
      <h2 style={{color: headerColor, transition: 'color 0.3s ease'}}>{modTitle}</h2>
      
      {/* Progress Bar 15 steps */}
      <div style={{background: 'rgba(255,255,255,0.7)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem'}}>
        <span style={{fontWeight: 700, color: '#475569', fontSize: '0.9rem'}}>Progreso Global:</span>
        <div style={{flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden'}}>
          <div style={{width: `${(step/totalSteps)*100}%`, background: headerColor, height: '100%', borderRadius: '10px', transition: 'all 0.5s ease'}}></div>
        </div>
        <span style={{fontWeight: 800, color: headerColor}}>{Math.round((step/totalSteps)*100)}%</span>
      </div>

      <div className="glass-card" style={{padding: '0', position: 'relative', overflow: 'hidden', minHeight: '500px'}}>
        
        {/* --- MODULO 1 --- */}
        {step === 1 && (
          <div className="fade-in">
            <div style={{position: 'relative', height: '350px', background: '#055C38'}}>
               <img src={teamworkImg} alt="Equipo" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8}} />
               <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, #055C38)', height: '150px'}}></div>
               <div style={{position: 'absolute', bottom: '2rem', left: '10%', right: '10%', textAlign: 'center'}}>
                 <h3 style={{color: 'white', marginBottom: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2rem)'}}>Unidos alcanzamos más lejos</h3>
               </div>
            </div>
            <div style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
              <div className="grid-2">
                <div style={{background: '#eff6ff', border: '2px solid #bfdbfe', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
                  <div style={{background: '#3b82f6', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}><Clock size={24}/></div>
                  <div>
                    <h4 style={{fontWeight: 800, color: '#1e40af'}}>Ahorro del Tiempo</h4>
                    <p style={{fontSize: '0.9rem', color: '#475569'}}><strong>11 Módulos</strong> consolidados en uno.</p>
                  </div>
                </div>
                <div style={{background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
                  <div style={{color: '#ea580c', flexShrink: 0}}><Target size={30}/></div>
                  <div>
                    <h4 style={{fontWeight: 800, color: '#9a3412'}}>Objetivo Principal</h4>
                    <p style={{fontSize: '0.9rem', color: '#475569'}}>Estructurar los roles naturales de tu comunidad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
            <h3 style={{color: '#032968', marginBottom: '1.5rem', fontSize: '2rem'}}>¿Cómo se sostiene la Red?</h3>
            <p style={{fontSize: '1.2rem', color: '#475569', lineHeight: '1.8', marginBottom: '3rem'}}>Trabajar en equipo es un acto de confianza voluntaria. La única manera de evitar desgastes es hablando claro sobre lo que cada quien sabe y quiere hacer.</p>
            <div style={{background: '#F06000', color: 'white', borderRadius: '20px', padding: '2px'}}>
               <div style={{background: '#032968', borderRadius: '18px', padding: '2.5rem', position: 'relative'}}>
                 <div style={{position: 'absolute', top: '-25px', left: '2rem', width: '50px', height: '50px', background: '#F06000', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><UserCheck size={24} color="white"/></div>
                 <h4 style={{color: '#fde047', fontWeight: 800}}>Alerta del Experto</h4>
                 <p style={{fontSize: '1.1rem', margin: 0}}>Habla sobre expectativas de ganancia y frecuencias antes de asignar roles definitivos.</p>
               </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
             <h3 style={{color: '#055C38', textAlign: 'center', fontSize: '2rem'}}>Descubre a tu Equipo Ideal</h3>
             <p style={{color: '#64748b', textAlign: 'center', marginBottom: '3rem'}}>Toca las tarjetas botánicas y mira si alguien de tu comunidad hace "match" con el rol.</p>
             <div className="grid-2">
               {roles.map(role => (
                 <div key={role.id} className={`flip-card ${flipped[role.id] ? 'flipped' : ''}`} onClick={() => toggleFlip(role.id)}>
                   <div className="flip-card-inner">
                     <div className="flip-card-front" style={{padding: '1rem'}}>
                       <img src={role.img} alt={role.title} style={{height: '160px', objectFit: 'contain', marginBottom: '1rem', mixBlendMode: 'multiply'}} />
                     </div>
                     <div className="flip-card-back">
                       <h4 style={{color: '#fde047', marginBottom: '1rem'}}>{role.title}</h4>
                       <p style={{fontSize: '1rem', marginBottom: '1.5rem'}}>{role.desc}</p>
                       <div style={{background: '#F06000', padding: '8px 15px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800}}>{role.person}</div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* --- MODULO 2 --- */}
        {step === 4 && (
          <div className="fade-in">
             <div style={{position: 'relative', height: '400px', background: '#055C38', overflow: 'hidden'}}>
               <img src={sostEarthImg} alt="Sostenibilidad" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, mixBlendMode: 'screen'}} />
               <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(255,255,255,0.9) 80%, white 100%)', height: '150px'}}></div>
             </div>
             <div style={{padding: 'clamp(1.5rem, 5vw, 3rem)', textAlign: 'center', marginTop: '-3rem', position: 'relative', zIndex: 10}}>
                <h3 style={{color: '#055C38', fontSize: '2.5rem', fontWeight: 900}}>"Satisfacer el presente sin comprometer el futuro"</h3>
                <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', margin: '0 auto'}}>Ese es el mantra de Naciones Unidas. La Sostenibilidad SGR no es un certificado de cartón, es un triángulo de tres puntas que evita que tu paraíso expire.</p>
             </div>
          </div>
        )}

        {step === 5 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
             <h3 style={{color: '#055C38', marginBottom: '2rem'}}>Los 3 Pilares del Crecimiento Orgánico</h3>
             <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
               
               {/* Acordeon Ambiental */}
               <div style={{border: '2px solid #86efac', borderRadius: '20px', overflow: 'hidden'}}>
                 <div onClick={() => setActiveAcc(activeAcc === 'amb' ? null : 'amb')} style={{background: '#f0fdf4', padding: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}><Leaf size={28} color="#166534"/><h4 style={{margin: 0, color: '#166534', fontSize: '1.3rem'}}>Impacto Ambiental</h4></div>
                    {activeAcc === 'amb' ? <ChevronUp color="#166534"/> : <ChevronDown color="#166534"/>}
                 </div>
                 {activeAcc === 'amb' && (
                   <div style={{padding: '1.5rem', background: 'white', color: '#475569'}}>
                     Proteger nuestra casa. No basta con no tirar basura; implica calcular la carga máxima del sendero ecológico y proteger la vida silvestre.
                     <div style={{background: '#f8fafc', padding: '1rem', borderRadius: '10px', marginTop: '1rem', borderLeft: '4px solid #166534'}}>💡 <i>Ejemplo SGR:</i> Implementar un biodigestor o usar energías limpias en cabañas turísticas.</div>
                   </div>
                 )}
               </div>

               {/* Acordeon Social */}
               <div style={{border: '2px solid #fdba74', borderRadius: '20px', overflow: 'hidden'}}>
                 <div onClick={() => setActiveAcc(activeAcc === 'soc' ? null : 'soc')} style={{background: '#fff7ed', padding: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}><Users size={28} color="#9a3412"/><h4 style={{margin: 0, color: '#9a3412', fontSize: '1.3rem'}}>Impacto Social</h4></div>
                    {activeAcc === 'soc' ? <ChevronUp color="#9a3412"/> : <ChevronDown color="#9a3412"/>}
                 </div>
                 {activeAcc === 'soc' && (
                   <div style={{padding: '1.5rem', background: 'white', color: '#475569'}}>
                     Inclusión y comunidad. Si el turismo trae dinero solo a tu bolsillo y ruido a tus vecinos, el modelo estallará.
                     <div style={{background: '#f8fafc', padding: '1rem', borderRadius: '10px', marginTop: '1rem', borderLeft: '4px solid #9a3412'}}>💡 <i>Ejemplo SGR:</i> Contratar a cocineras de tradición oral que preserven recetas extintas de la región.</div>
                   </div>
                 )}
               </div>

               {/* Acordeon Económico */}
               <div style={{border: '2px solid #93c5fd', borderRadius: '20px', overflow: 'hidden'}}>
                 <div onClick={() => setActiveAcc(activeAcc === 'eco' ? null : 'eco')} style={{background: '#eff6ff', padding: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}><Coins size={28} color="#1e40af"/><h4 style={{margin: 0, color: '#1e40af', fontSize: '1.3rem'}}>Impacto Económico</h4></div>
                    {activeAcc === 'eco' ? <ChevronUp color="#1e40af"/> : <ChevronDown color="#1e40af"/>}
                 </div>
                 {activeAcc === 'eco' && (
                   <div style={{padding: '1.5rem', background: 'white', color: '#475569'}}>
                     Debe ser negocio. Sin rentabilidad, el proyeto es filantropía temporal. El dinero debe fluir formal y legalmente para mantener la cadena intacta.
                     <div style={{background: '#f8fafc', padding: '1rem', borderRadius: '10px', marginTop: '1rem', borderLeft: '4px solid #1e40af'}}>💡 <i>Ejemplo SGR:</i> Pagar salarios justos por encima del mínimo local a los arrieros y guías.</div>
                   </div>
                 )}
               </div>

             </div>
          </div>
        )}

        {/* --- MODULO 3 --- */}
        {step === 6 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
            <h3 style={{color: '#F06000', textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem'}}>Nuestros Tesoros (El Patrimonio)</h3>
            <p style={{textAlign: 'center', color: '#64748b', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto'}}>En Turismo Cultural, el oro no se extrae, el oro se muestra. Mira las dos caras de la moneda de nuestro Patrimonio:</p>
            
            <div className="flex-responsive" style={{display: 'flex', gap: '2rem'}}>
               <div style={{flex: 1, background: '#f8fafc', border: '2px solid #cbd5e1', borderRadius: '25px', padding: '2rem', textAlign: 'center'}}>
                 <img src={matHeritageImg} style={{width: '200px', mixBlendMode: 'multiply', marginBottom: '1.5rem'}} alt="Material" />
                 <Landmark size={40} color="#032968" style={{margin: '0 auto 1rem auto'}}/>
                 <h4 style={{fontSize: '1.5rem', color: '#032968'}}>Tangible / Material</h4>
                 <p style={{color: '#475569', fontSize: '0.9rem', marginTop: '1rem'}}>Iglesias centenarias, petroglifos, telares antiquísimos y utensilios arqueológicos. Lo puedes tocar y fotografiar fíjamente.</p>
               </div>
               
               <div style={{flex: 1, background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '25px', padding: '2rem', textAlign: 'center'}}>
                 <img src={inmatHeritageImg} style={{width: '200px', mixBlendMode: 'multiply', marginBottom: '1.5rem'}} alt="Inmaterial" />
                 <Music size={40} color="#ea580c" style={{margin: '0 auto 1rem auto'}}/>
                 <h4 style={{fontSize: '1.5rem', color: '#ea580c'}}>Intangible / Inmaterial</h4>
                 <p style={{color: '#475569', fontSize: '0.9rem', marginTop: '1rem'}}>Cantos de vaquería, recetas orales de la abuela, rituales de siembra, carnavales. Viven en la gente, no en las rocas.</p>
               </div>
            </div>
          </div>
        )}

        {/* --- MODULOS NATIVOS 4 AL 7 --- */}
        {step === 7 && <Modulo4 />}
        {step === 8 && <Modulo5 />}
        {step === 9 && <Modulo6 />}
        {step === 10 && <Modulo7 />}

        {/* --- MODULOS 8 al 11 HTML LEGACY RENDERER --- */}
        {step >= 11 && step <= 14 && (
          <LegacyRenderer moduleData={legacyModules.find(m => m.id === (step - 3))} />
        )}

        {/* --- MODULO 12 FINAL / COMPLETO --- */}
        {step === 15 && (
          <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)', textAlign: 'center'}}>
             <div style={{width: '100px', height: '100px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto'}}>
               <CheckCircle2 size={50}/>
             </div>
             <h2 style={{color: '#166534', fontSize: '3rem'}}>¡Curso 100% Aprobado!</h2>
             <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '600px', margin: '0 auto'}}>
               Has completado integralmente los 11 Módulos. Desde las finanzas locales, pasando por la mercadotecnia turística hasta consolidar el patrimonio biocultural y tu modelo Canvas.
             </p>
             
             <div style={{background: '#eff6ff', padding: '2rem', borderRadius: '20px', marginTop: '3rem', border: '2px dashed #93c5fd', maxWidth: '600px', margin: '3rem auto 0 auto'}}>
               <h4 style={{color: '#1e40af', fontWeight: 800}}>👉 Descarga tus Herramientas Físicas</h4>
               <p style={{color: '#64748b'}}>Ve ahora mismo al DataLab (Menú Horizontal) y diligencia tus plantillas financieras y de costos para aprobar la Fase Práctica.</p>
             </div>
          </div>
        )}

      </div>

      {/* Controles de Navegación del Engine */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem'}}>
        {step === 1 ? (
          <button onClick={() => setCurrentRoute('/cursos')} className="btn-primary" style={{background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Salir al Catálogo
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer'}}>
            <ArrowLeft size={18}/> Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer'}}>
            Continuar Módulo <ArrowRight size={18}/>
          </button>
        ) : (
          <button onClick={() => setCurrentRoute('/cursos')} className="btn-primary" style={{background: '#166534', boxShadow: '0 10px 20px rgba(22,101,52,0.3)', cursor: 'pointer'}}>
            Cerrar y Reclamar Certificado
          </button>
        )}
      </div>

    </div>
  );
}
