import React from 'react';
import { Target, Users, FlaskConical, MessageSquare, ListChecks, Info, ClipboardCheck, AlertTriangle } from 'lucide-react';

export default function Modulo9() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Valida antes de Invertir"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          No lances tu producto a ciegas. Aprende a probarlo con personas reales para asegurar su éxito comercial y operativo.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* ¿Por Qué Validar? */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #0d9488', background: '#f0fdfa'}}>
          <h4 style={{color: '#0f766e', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Target size={24} /> Reducción de Riesgos
          </h4>
          <p style={{fontSize: '1.1rem', color: '#134e4a'}}>
            La validación permite descubrir problemas críticos cuando aún es barato arreglarlos. Es mejor descubrir un error con 10 personas en un "try-out" que con 1000 clientes reales.
          </p>
        </div>

        {/* Métodos de Validación Table */}
        <h3 className="mb-6 text-center" style={{color: '#134e4a'}}>Métodos de Validación</h3>
        <div className="glass-card mb-10" style={{padding: 0, overflow: 'hidden'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f1f5f9'}}>
              <tr>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#0f766e'}}>Método</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#0f766e'}}>Ventajas</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#0f766e'}}>Ideal para...</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Focus Group</td>
                <td style={{padding: '1.2rem'}}>Rápido y económico.</td>
                <td style={{padding: '1.2rem'}}>Validar la idea y el precio.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Try-out en Campo</td>
                <td style={{padding: '1.2rem'}}>Feedback sobre la operación real.</td>
                <td style={{padding: '1.2rem'}}>Probar tiempos y logística.</td>
              </tr>
              <tr>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Encuesta a Operadores</td>
                <td style={{padding: '1.2rem'}}>Visión comercial experta.</td>
                <td style={{padding: '1.2rem'}}>Validar si el producto es "vendible".</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Case Study: Ruta del Cacao */}
        <div style={{background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #0d9488', marginBottom: '3rem'}}>
           <h4 style={{color: '#0f766e', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <FlaskConical size={28} /> Caso: "Ruta del Cacao" - Santander
           </h4>
           <div className="grid-2" style={{gap: '2rem'}}>
              <div className="glass-card" style={{background: 'white', padding: '1.5rem'}}>
                 <h5 style={{color: '#0d9488', marginBottom: '1rem'}}>Fase 1: Focus Group</h5>
                 <p style={{fontSize: '0.9rem'}}>Se presentó la idea a 5 operadores. Feedback: "Falta información de dificultad física". Ajuste: Se añadió escala de esfuerzo.</p>
              </div>
              <div className="glass-card" style={{background: 'white', padding: '1.5rem'}}>
                 <h5 style={{color: '#0d9488', marginBottom: '1rem'}}>Fase 2: Try-out</h5>
                 <p style={{fontSize: '0.9rem'}}>Prueba real con 8 personas. Problema: El almuerzo se retrasó 45 min. Ajuste: Se cambió el horario de salida para dar margen.</p>
              </div>
           </div>
        </div>

        {/* Guías Rápidas */}
        <div className="grid-2 mb-10" style={{gap: '1.5rem'}}>
           <div style={{padding: '2rem', background: '#f0fdfa', borderRadius: '25px', border: '1px solid #5eead4'}}>
              <h4 style={{color: '#0f766e', marginBottom: '1rem'}}>Tips para Focus Group</h4>
              <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                 <li>• Reúne 6-10 personas del perfil ideal.</li>
                 <li>• Explica el producto en 15 minutos.</li>
                 <li>• No te defiendas, ¡escucha!</li>
              </ul>
           </div>
           <div style={{padding: '2rem', background: '#f0fdfa', borderRadius: '25px', border: '1px solid #5eead4'}}>
              <h4 style={{color: '#0f766e', marginBottom: '1rem'}}>Tips para Try-out</h4>
              <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                 <li>• Selecciona participantes que no te conozcan.</li>
                 <li>• Ten un observador externo (que no sea el guía).</li>
                 <li>• Registra tiempos reales vs planeados.</li>
              </ul>
           </div>
        </div>

        {/* Warning Alert */}
        <div style={{background: '#fff7ed', border: '1px solid #f97316', borderRadius: '15px', padding: '1.5rem', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '3rem'}}>
           <AlertTriangle size={24} color="#ea580c" style={{flexShrink: 0}} />
           <p style={{color: '#9a3412', fontSize: '0.95rem', margin: 0}}>
             <strong>Cuidado:</strong> No valides con amigos o familiares. Suelen dar feedback complaciente ("todo está lindo"). Busca desconocidos que representen a tu Buyer Persona.
           </p>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#0f766e', color: 'white'}}>
           <h4 style={{color: '#5eead4', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Plan de Validación
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Define qué método de validación usarás primero.",
                "Lista 5 personas o empresas candidatas para participar.",
                "Prepara tus materiales visuales (fotos, ficha técnica).",
                "Diseña un cuestionario de 10 preguntas clave.",
                "Define cómo capturarás el feedback (grabación, notas, fotos).",
                "Establece una fecha para tu primera sesión de validación."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#5eead4', color: '#0f766e', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
