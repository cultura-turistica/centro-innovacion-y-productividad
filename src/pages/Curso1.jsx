import React, { useState } from 'react';
import { Lightbulb, Clock, Target, ClipboardCheck, ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

export default function Curso1() {
  const [currentModule, setCurrentModule] = useState(1);

  return (
    <div className="main-container">
      <div className="title-pill mb-4" style={{background: '#dbeafe', color: '#0066FF'}}>
        <Lightbulb size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Curso: Innovación y Emprendimiento
      </div>
      
      <h2 style={{fontFamily: 'Poppins', color: '#032968'}}>Módulo 1: Pensar y Trabajar en Colectivo</h2>
      
      {/* Progress Bar simulada */}
      <div style={{background: 'rgba(255,255,255,0.5)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem'}}>
        <span style={{fontWeight: 700, color: '#475569', fontSize: '0.9rem'}}>Progreso:</span>
        <div style={{flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden'}}>
          <div style={{width: '25%', background: '#0066FF', height: '100%', borderRadius: '10px'}}></div>
        </div>
        <span style={{fontWeight: 800, color: '#0066FF'}}>25%</span>
      </div>

      {/* Contenido Principal */}
      <div className="glass-card" style={{padding: '3rem', position: 'relative', overflow: 'hidden'}}>
        
        {/* Encabezado Decorativo */}
        <div style={{background: '#055C38', color: 'white', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', marginBottom: '2.5rem'}}>
          <h3 style={{color: 'white', marginBottom: '0.5rem'}}>"Unidos alcanzamos más lejos"</h3>
          <p style={{color: '#bbf7d0', opacity: 0.9}}>Trabajo en equipo y asociatividad para rutas turísticas</p>
        </div>

        {/* Tiempo y Objetivos */}
        <div className="grid-2" style={{marginBottom: '3rem'}}>
           <div style={{background: '#eff6ff', border: '2px solid #bfdbfe', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
             <div style={{background: '#3b82f6', color: 'white', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
               <Clock size={24}/>
             </div>
             <div>
               <h4 style={{fontWeight: 800, color: '#1e40af', marginBottom: '5px'}}>Tiempo Estimado</h4>
               <p style={{fontSize: '0.9rem', color: '#475569', marginBottom: '5px'}}><strong>30-45 mins</strong> en plataforma.</p>
               <p style={{fontSize: '0.9rem', color: '#64748b'}}>+ 1 hora en tu negocio aplicando los roles.</p>
             </div>
           </div>

           <div style={{background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '20px', padding: '1.5rem', display: 'flex', gap: '15px'}}>
             <div style={{color: '#ea580c', flexShrink: 0}}><Target size={30}/></div>
             <div>
               <h4 style={{fontWeight: 800, color: '#9a3412', marginBottom: '5px'}}>Objetivo del Módulo</h4>
               <p style={{fontSize: '0.9rem', color: '#475569'}}>Sensibilizar sobre la importancia del trabajo en equipo para alcanzar los objetivos en rutas bioculturales.</p>
             </div>
           </div>
        </div>

        {/* Contenido Texto */}
        <div style={{marginBottom: '3rem'}}>
          <h3 style={{color: '#032968'}}>Del Trabajo Colectivo a la Asociatividad</h3>
          <p style={{fontSize: '1.1rem', color: '#475569', lineHeight: '1.8'}}>
            Trabajar en equipo es cuando decidimos unir fuerzas de manera voluntaria con otras personas para alcanzar un objetivo en común. 
            En este proceso, compartimos ideas, sumamos esfuerzos y juntos superamos los obstáculos gracias a una comunicación abierta y efectiva.
          </p>
        </div>

        {/* Consejo Gogo */}
        <div style={{background: '#032968', color: 'white', padding: '2rem', borderRadius: '20px', position: 'relative', marginBottom: '3rem', marginTop: '4rem'}}>
           <div style={{
             position: 'absolute', top: '-30px', left: '2rem', width: '60px', height: '60px', 
             background: '#F06000', borderRadius: '50%', border: '4px solid white',
             display: 'flex', alignItems: 'center', justifyContent: 'center'
           }}>
             <UserCheck size={28} color="white"/>
           </div>
           <h4 style={{color: '#fde047', fontWeight: 800, marginLeft: '5rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px'}}>Consejo de Análisis</h4>
           <div style={{background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
             <p style={{margin: 0, lineHeight: '1.6'}}>
               Las urgencias y paciencia de cada miembro pueden variar. Un compañero puede necesitar cubrir gastos inmediatos, mientras otro piensa a largo plazo. 
               <span style={{color: '#fef08a'}}> Creen espacios seguros para definir claramente estas perspectivas antes de asociarse.</span>
             </p>
           </div>
        </div>

        {/* Plantilla Interactiva Simulada */}
        <div style={{border: '2px solid #055C38', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem'}}>
           <div style={{background: '#055C38', color: 'white', padding: '15px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px'}}>
             <ClipboardCheck size={20}/> Plantilla Práctica: Distribuir Roles de Equipo
           </div>
           <div style={{padding: '20px'}}>
             <p style={{fontSize: '0.9rem', color: '#475569', marginBottom: '1rem'}}>
               <strong>Instrucciones:</strong> Copia esta matriz en tu cuaderno. Reúne a tu equipo y asigense responsabilidades claras.
             </p>
             <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem'}}>
               <thead>
                 <tr style={{background: '#f1f5f9', color: '#334155', textAlign: 'left'}}>
                   <th style={{padding: '10px', borderBottom: '2px solid #cbd5e1'}}>Rol</th>
                   <th style={{padding: '10px', borderBottom: '2px solid #cbd5e1'}}>Actividad a cargo</th>
                   <th style={{padding: '10px', borderBottom: '2px solid #cbd5e1'}}>Responsable</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0', fontWeight: 700}}>Vocero</td>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0'}}>Comunica actividades con aliados</td>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontStyle: 'italic'}}>[Nombre]</td>
                 </tr>
                 <tr>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0', fontWeight: 700}}>Guianza</td>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0'}}>Lidera la ruta con visitantes</td>
                   <td style={{padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontStyle: 'italic'}}>[Nombre]</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>

      </div>

      {/* Navegacion Módulos */}
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem'}}>
        <button className="btn-primary" style={{background: 'transparent', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0'}}>
          <ArrowLeft size={18}/> Atrás
        </button>
        <button className="btn-primary" style={{background: '#032968'}}>
          Siguiente Módulo <ArrowRight size={18}/>
        </button>
      </div>

    </div>
  );
}
