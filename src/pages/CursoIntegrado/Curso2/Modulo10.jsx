import React from 'react';
import { Briefcase, UserCheck, Timer, BarChart, Flag, Layers, ListChecks, Info, TrendingUp, DollarSign } from 'lucide-react';

export default function Modulo10() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "De la Idea a la Acción: El Plan de Trabajo"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Las grandes ideas sin ejecución son solo ilusiones. Aprende a estructurar un plan operativo con responsables, recursos y tiempos reales.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Estructura del Plan */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #1d4ed8'}}>
          <h4 style={{color: '#1e3a8a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Briefcase size={24} /> El ADN de un Plan Ejecutable
          </h4>
          <p style={{fontSize: '1.1rem', color: '#334155'}}>
            Un plan de trabajo efectivo no es una lista de deseos; es un mapa de ruta que asigna <strong>responsabilidades únicas</strong> y recursos específicos para cada meta.
          </p>
        </div>

        {/* Componentes Grid */}
        <h3 className="mb-6 text-center" style={{color: '#1e3a8a'}}>Componentes del Plan</h3>
        <div className="grid-3 mb-10" style={{gap: '1.5rem'}}>
          <div className="glass-card" style={{padding: '1.5rem'}}>
             <div style={{color: '#1e40af', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
               <UserCheck size={18} /> Responsable
             </div>
             <p style={{fontSize: '0.85rem'}}>Persona única encargada de que la acción suceda. Evita asignar "comités".</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
             <div style={{color: '#1e40af', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
               <Timer size={18} /> Cronograma
             </div>
             <p style={{fontSize: '0.85rem'}}>Fechas de inicio y fin realistas, considerando festivos y temporadas.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
             <div style={{color: '#1e40af', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
               <DollarSign size={18} /> Recursos
             </div>
             <p style={{fontSize: '0.85rem'}}>Presupuesto, herramientas y alianzas necesarias para la ejecución.</p>
          </div>
        </div>

        {/* Example: Valle de las Mariposas */}
        <div style={{background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #1e40af', marginBottom: '3rem'}}>
           <h4 style={{color: '#1e3a8a', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <BarChart size={28} /> Caso: Plan de Trabajo "Valle de las Mariposas"
           </h4>
           <div className="glass-card mb-6" style={{padding: 0, overflow: 'hidden', background: 'white'}}>
             <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem'}}>
               <thead style={{background: '#f1f5f9'}}>
                 <tr>
                   <th style={{padding: '1rem', textAlign: 'left'}}>Actividad</th>
                   <th style={{padding: '1rem', textAlign: 'left'}}>Responsable</th>
                   <th style={{padding: '1rem', textAlign: 'left'}}>Tiempo</th>
                   <th style={{padding: '1rem', textAlign: 'left'}}>Prioridad</th>
                 </tr>
               </thead>
               <tbody>
                 <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                   <td style={{padding: '1rem'}}>Certificar 2 guías</td>
                   <td style={{padding: '1rem'}}>Carlos Mendoza</td>
                   <td style={{padding: '1rem'}}>Feb - Mar</td>
                   <td style={{padding: '1rem'}}><span style={{color: '#ef4444', fontWeight: 700}}>ALTA</span></td>
                 </tr>
                 <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                   <td style={{padding: '1rem'}}>Renovar baños lodge</td>
                   <td style={{padding: '1rem'}}>Ana Rodríguez</td>
                   <td style={{padding: '1rem'}}>Mar - Abr</td>
                   <td style={{padding: '1rem'}}><span style={{color: '#ef4444', fontWeight: 700}}>ALTA</span></td>
                 </tr>
                 <tr>
                   <td style={{padding: '1rem'}}>Señalización senderos</td>
                   <td style={{padding: '1rem'}}>Luis Hernández</td>
                   <td style={{padding: '1rem'}}>Abr 2026</td>
                   <td style={{padding: '1rem'}}><span style={{color: '#d97706', fontWeight: 700}}>MEDIA</span></td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <p style={{fontSize: '0.9rem', color: '#64748b', margin: 0}}><strong>Presupuesto Estimado:</strong> $8.300.000 COP</p>
              <div style={{display: 'flex', gap: '10px'}}>
                 <span style={{background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700}}>Financiado al 60%</span>
              </div>
           </div>
        </div>

        {/* Categorías de Acción */}
        <h4 className="mb-6" style={{color: '#1e3a8a'}}>Categorías para Organizar tus Acciones</h4>
        <div className="grid-2 mb-10" style={{gap: '1rem'}}>
          <div style={{padding: '1.5rem', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px'}}>
             <div style={{color: '#1e40af'}}><Layers size={24} /></div>
             <div>
                <h5 style={{margin: '0 0 5px 0', color: '#1e3a8a'}}>Infraestructura</h5>
                <p style={{margin: 0, fontSize: '0.85rem', color: '#64748b'}}>Obras físicas, equipamiento y señalización del lugar.</p>
             </div>
          </div>
          <div style={{padding: '1.5rem', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', gap: '15px'}}>
             <div style={{color: '#1e40af'}}><TrendingUp size={24} /></div>
             <div>
                <h5 style={{margin: '0 0 5px 0', color: '#1e3a8a'}}>Promoción</h5>
                <p style={{margin: 0, fontSize: '0.85rem', color: '#64748b'}}>Marketing, redes sociales y canales de venta.</p>
             </div>
          </div>
        </div>

        {/* Tip Box */}
        <div style={{background: '#eff6ff', padding: '1.5rem', borderRadius: '15px', border: '1px solid #3b82f6', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '3rem'}}>
           <Info size={24} color="#1d4ed8" style={{flexShrink: 0}} />
           <p style={{color: '#1e40af', fontSize: '1rem', margin: 0}}>
             <strong>Metodología:</strong> El plan debe ser un documento vivo. Usa Google Sheets o Trello para hacer seguimiento quincenal con todo el equipo.
           </p>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#1e3a8a', color: 'white'}}>
           <h4 style={{color: '#93c5fd', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Tu Plan de Acción
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Toma las brechas prioritarias del Módulo 6.",
                "Define 1-3 acciones concretas para cerrar cada brecha.",
                "Asigna un responsable individual para cada tarea.",
                "Estima el costo y busca la fuente de financiación.",
                "Define la fecha de cumplimiento (Deadline).",
                "Establece una reunión de seguimiento mensual con los líderes."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#93c5fd', color: '#1e3a8a', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
