import React, { useState } from 'react';
import { Focus, Eye, Speech, ShieldAlert, Ear, Handshake, Target, CheckSquare, MessageSquare, Scale, Flag } from 'lucide-react';

export default function Modulo4() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>Módulo 4: Resolución de Conflictos</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center'}}>
         En el turismo comunitario, los roces no son una anomalía, son parte de la convivencia biocultural. 
         Lo que destruye una ruta no es el conflicto, sino la falta de asertividad para solucionarlo.
       </p>
       
       {/* 6 CLAVES DE COMUNICACIÓN ASERTIVA */}
       <div style={{background: '#eff6ff', borderRadius: '25px', padding: '2rem', border: '2px solid #bfdbfe', marginBottom: '4rem'}}>
         <h4 style={{color: '#1e40af', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center'}}>6 Claves de la Comunicación Asertiva</h4>
         
         <div className="flex-responsive" style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
           {/* Clave 1 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <Speech color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>1. Mensaje Sencillo</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>Ve directo al punto sin dar tantas vueltas, pero usando respeto.</p>
           </div>
           
           {/* Clave 2 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <Focus color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>2. Postura Corporal</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>Evita cruzar los brazos o dar la espalda mientras hablas.</p>
           </div>

           {/* Clave 3 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <Handshake color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>3. Separar Personas</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>Ataca al problema, no ataques ni insultes a la persona involucrada.</p>
           </div>

           {/* Clave 4 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <Ear color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>4. Escucha Activa</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>Escucha para entender lo que dicen, no solo para contestar.</p>
           </div>

           {/* Clave 5 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <Eye color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>5. Contacto Visual</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>Mirar a los ojos genera transparencia y empatía automática.</p>
           </div>

           {/* Clave 6 */}
           <div style={{background: 'white', borderRadius: '15px', padding: '1.5rem', width: '250px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}>
             <MessageSquare color="#3b82f6" size={30} style={{marginBottom: '1rem'}}/>
             <h5 style={{fontWeight: 800, color: '#032968', marginBottom: '0.5rem'}}>6. Tono de Voz</h5>
             <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}>No subas la voz. Un volumen calmado relaja automáticamente a la otra parte.</p>
           </div>
         </div>
       </div>

       {/* PLANTILLA DE ACUERDOS (TAB-LIKE STEPS) */}
       <h4 style={{color: '#F06000', fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center'}}>Plantilla: Negociación de Acuerdos</h4>
       <p style={{textAlign: 'center', color: '#64748b', marginBottom: '2rem'}}>Al enfrentar un comité para solucionar un roce, sigan este protocolo de 4 fases rigurosamente:</p>
       
       <div style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
          
          <div style={{display: 'flex', borderBottom: '1px solid #cbd5e1', background: '#f8fafc', flexWrap: 'wrap'}}>
            <div onClick={() => setActiveStep(1)} style={{flex: 1, padding: '1.5rem', cursor: 'pointer', textAlign: 'center', borderBottom: activeStep === 1 ? '4px solid #F06000' : '4px solid transparent', background: activeStep === 1 ? 'white' : 'transparent', color: activeStep === 1 ? '#032968' : '#64748b', fontWeight: 800, minWidth: '150px'}}>
               <Target size={20} style={{marginBottom: '5px'}}/ ><br/>1. Puntos
            </div>
            <div onClick={() => setActiveStep(2)} style={{flex: 1, padding: '1.5rem', cursor: 'pointer', textAlign: 'center', borderBottom: activeStep === 2 ? '4px solid #eaa300' : '4px solid transparent', background: activeStep === 2 ? 'white' : 'transparent', color: activeStep === 2 ? '#032968' : '#64748b', fontWeight: 800, minWidth: '150px'}}>
               <Scale size={20} style={{marginBottom: '5px'}}/ ><br/>2. Balanza
            </div>
            <div onClick={() => setActiveStep(3)} style={{flex: 1, padding: '1.5rem', cursor: 'pointer', textAlign: 'center', borderBottom: activeStep === 3 ? '4px solid #16a34a' : '4px solid transparent', background: activeStep === 3 ? 'white' : 'transparent', color: activeStep === 3 ? '#032968' : '#64748b', fontWeight: 800, minWidth: '150px'}}>
               <Handshake size={20} style={{marginBottom: '5px'}}/ ><br/>3. Ganar-Ganar
            </div>
            <div onClick={() => setActiveStep(4)} style={{flex: 1, padding: '1.5rem', cursor: 'pointer', textAlign: 'center', borderBottom: activeStep === 4 ? '4px solid #2563eb' : '4px solid transparent', background: activeStep === 4 ? 'white' : 'transparent', color: activeStep === 4 ? '#032968' : '#64748b', fontWeight: 800, minWidth: '150px'}}>
               <CheckSquare size={20} style={{marginBottom: '5px'}}/ ><br/>4. Acuerdo Firmado
            </div>
          </div>

          <div style={{padding: '3rem', minHeight: '250px'}}>
            {activeStep === 1 && (
              <div className="fade-in">
                <h4 style={{color: '#ea580c', fontSize: '1.5rem', marginBottom: '1rem'}}>Fase 1: Listado de Puntos a Negociar</h4>
                <p style={{color: '#475569', fontSize: '1.1rem', lineHeight: '1.6'}}>No asuman nada. Cada parte involucrada debe agarrar un papel y listar TODOS los puntos de inconformidad operativos o sociales antes de cruzar palabras.</p>
                <div style={{marginTop: '1.5rem', background: '#fff7ed', padding: '1rem', borderLeft: '4px solid #ea580c', borderRadius: '0 10px 10px 0', fontStyle: 'italic', color: '#9a3412'}}>
                  "Ejemplo: Siento que estoy asumiendo todo el costeo del transporte de los turistas mientras que el restaurante se lleva la mayor ganancia de la ruta."
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className="fade-in">
                <h4 style={{color: '#ca8a04', fontSize: '1.5rem', marginBottom: '1rem'}}>Fase 2: Ventajas y Desventajas</h4>
                <p style={{color: '#475569', fontSize: '1.1rem', lineHeight: '1.6'}}>Tomen la lista de molestias y construyan una balanza de empatía poniéndose en los zapatos del otro integrante de la ruta:</p>
                <ul style={{color: '#475569', lineHeight: '2', marginTop: '1rem', fontSize: '1rem'}}>
                  <li>¿Qué gano yo si me salen con lo que pido? / ¿Qué pierdo?</li>
                  <li>¿Qué gana la otra persona si aprueba mi petición? / ¿Qué pierde?</li>
                </ul>
              </div>
            )}
            {activeStep === 3 && (
              <div className="fade-in">
                <h4 style={{color: '#16a34a', fontSize: '1.5rem', marginBottom: '1rem'}}>Fase 3: Lluvia de Escenarios (Ganar-Ganar)</h4>
                <p style={{color: '#475569', fontSize: '1.1rem', lineHeight: '1.6'}}>Prohibido usar las palabras "pero" o "tienes que". Aporten ideas creativas hasta hallar una solución intermedia donde nadie sienta que cedió demasiado.</p>
                <div style={{marginTop: '1.5rem', background: '#f0fdf4', padding: '1rem', borderLeft: '4px solid #16a34a', borderRadius: '0 10px 10px 0', fontStyle: 'italic', color: '#166534'}}>
                  "Escenario Propuesto: Si yo sigo poniendo mi transporte gratis, el restaurante nos dará comida a costo de insumo sin cobrar utilidades a la ruta. Y así abaratamos el paquete global."
                </div>
              </div>
            )}
            {activeStep === 4 && (
              <div className="fade-in">
                <h4 style={{color: '#2563eb', fontSize: '1.5rem', marginBottom: '1rem'}}>Fase 4: Consolidación y Firmas</h4>
                <p style={{color: '#475569', fontSize: '1.1rem', lineHeight: '1.6'}}>Las palabras se las lleva el viento, especialmente si hay plata de por medio o molestias pasadas. Redacten el acuerdo a mano en un cuaderno de bitácora y pongan sus firmas.</p>
                <p style={{fontWeight: 'bold', color: '#1e40af', marginTop: '1rem'}}>¡Ojo! Revisen el cumplimiento a los 15 días.</p>
              </div>
            )}
          </div>
       </div>

    </div>
  );
}
