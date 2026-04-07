import React from 'react';
import { Target, Utensils, Lightbulb, AlertTriangle, ListChecks, ArrowRight } from 'lucide-react';

export default function Modulo1() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "El producto es lo que se vende, la experiencia es lo que se recuerda"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Comprende la estructura técnica de tu oferta para convertir un simple atractivo en un negocio rentable y memorable.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        {/* Objetivos */}
        <div className="grid-2 mb-10">
          <div className="glass-card" style={{padding: '2rem', borderLeft: '6px solid #16A34A'}}>
            <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', color: '#166534', marginBottom: '1.5rem'}}>
              <Target size={24} /> Objetivos de Aprendizaje
            </h4>
            <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <li style={{display: 'flex', gap: '10px', fontSize: '0.95rem'}}>
                <div style={{color: '#16A34A'}}>•</div> Diferenciar producto de experiencia.
              </li>
              <li style={{display: 'flex', gap: '10px', fontSize: '0.95rem'}}>
                <div style={{color: '#16A34A'}}>•</div> Dominar la analogía del restaurante.
              </li>
              <li style={{display: 'flex', gap: '10px', fontSize: '0.95rem'}}>
                <div style={{color: '#16A34A'}}>•</div> Identificar los 5 componentes esenciales.
              </li>
            </ul>
          </div>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="icon-wrapper" style={{background: '#16A34A', width: '120px', height: '120px', borderRadius: '40px'}}>
              <Utensils size={60} />
            </div>
          </div>
        </div>

        {/* Analogía del Restaurante */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>La Analogía del Restaurante 🍽️</h3>
        <div className="glass-card mb-10" style={{overflow: 'hidden', padding: 0}}>
           <table style={{width: '100%', borderCollapse: 'collapse'}}>
             <thead style={{background: '#f0fdf4', borderBottom: '2px solid #16A34A'}}>
               <tr>
                 <th style={{padding: '1.5rem', textAlign: 'left', color: '#166534'}}>Restaurante</th>
                 <th style={{padding: '1.5rem', textAlign: 'left', color: '#166534'}}>Destino Turístico</th>
               </tr>
             </thead>
             <tbody>
               <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                 <td style={{padding: '1.2rem', fontWeight: 700}}>Local y Equipamiento</td>
                 <td style={{padding: '1.2rem', color: '#475569'}}>Infraestructura (vías, servicios)</td>
               </tr>
               <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                 <td style={{padding: '1.2rem', fontWeight: 700}}>Menú y Especialidad</td>
                 <td style={{padding: '1.2rem', color: '#475569'}}>Posicionamiento y Oferta</td>
               </tr>
               <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                 <td style={{padding: '1.2rem', fontWeight: 700}}>Cocinero y Meseros</td>
                 <td style={{padding: '1.2rem', color: '#475569'}}>Guías y Operadores locales</td>
               </tr>
               <tr style={{borderBottom: '1px solid #e2e8f0', background: '#f8fafc'}}>
                 <td style={{padding: '1.2rem', fontWeight: 700, color: '#16A34A'}}>El Plato Servido</td>
                 <td style={{padding: '1.2rem', fontWeight: 800, color: '#166534'}}>PRODUCTO TURÍSTICO</td>
               </tr>
             </tbody>
           </table>
        </div>

        {/* Case Study */}
        <div style={{background: '#032968', color: 'white', borderRadius: '30px', padding: '3rem', marginBottom: '3rem', position: 'relative'}}>
           <div style={{position: 'absolute', top: '-20px', right: '2rem', background: '#F06000', color: 'white', padding: '5px 20px', borderRadius: '100px', fontWeight: 800}}>Caso Santander</div>
           <h4 style={{fontSize: '1.8rem', color: '#fde047', marginBottom: '1.5rem'}}>🏞️ El Valle de las Mariposas</h4>
           <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
             Tenían los "ingredientes" (paisajes hermosos), pero no el "plato". Los turistas pasaban pero no compraban. 
             Al diseñar el producto <strong>"Día de Mariposa"</strong> (bienvenida + taller + almuerzo + obsequio), el gasto por persona subió 400%.
           </p>
           <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span style={{display: 'block', fontWeight: 800, color: '#16A34A'}}>$150.000 COP</span>
                <span style={{fontSize: '0.8rem'}}>Gasto promedio por persona</span>
              </div>
              <div style={{background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)'}}>
                <span style={{display: 'block', fontWeight: 800, color: '#16A34A'}}>85% RECOMENDACIÓN</span>
                <span style={{fontSize: '0.8rem'}}>Satisfacción garantizada</span>
              </div>
           </div>
        </div>

        {/* Error Común Alert */}
        <div style={{background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', marginBottom: '3rem'}}>
           <div style={{color: '#ea580c'}}><AlertTriangle size={40}/></div>
           <div>
              <h4 style={{color: '#9a3412', fontWeight: 800, marginBottom: '0.5rem'}}>⚠️ Error Común: "El Árbol Bonito"</h4>
              <p style={{color: '#9a3412', fontSize: '1rem'}}>
                Un árbol bonito no es un producto. Un <strong>recorrido interpretativo</strong> de 2 horas con guía certificado, hidratación y equipo de seguridad SÍ es un producto.
              </p>
           </div>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#f0fdf4', border: '3px solid #16A34A'}}>
           <h4 style={{color: '#166534', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Inventario de Tu Territorio
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Lista 5 atractivos clave de tu zona.",
                "Identifica qué servicios (comida, cama) existen hoy.",
                "Evalúa de 1 a 5 el estado actual de esos servicios.",
                "Define tus 2 brechas más críticas.",
                "Describe cómo sería tu 'Plato Servido' ideal."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#16A34A', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', color: '#1e293b'}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Quote GOGO */}
        <div style={{marginTop: '4rem', padding: '2rem', background: '#032968', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center'}}>
           <div style={{background: '#fde047', color: '#032968', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Lightbulb size={24}/></div>
           <p style={{color: 'white', fontStyle: 'italic', margin: 0}}>
             "Tu producto es la solución que el turista está dispuesto a pagar. Diseña con la mente en el cliente y el corazón en el territorio."
           </p>
        </div>
      </div>
    </div>
  );
}
