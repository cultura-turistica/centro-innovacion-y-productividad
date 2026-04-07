import React from 'react';
import { Layers, AlertCircle, CheckCircle2, XCircle, ArrowRight, ListChecks, Info, Settings } from 'lucide-react';

export default function Modulo6() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Cada eslabón cuenta: La Cadena de Valor"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Un producto turístico es tan fuerte como su eslabón más débil. Aprende a identificar y cerrar las brechas de tu destino.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Qué es la Cadena de Valor */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #64748b'}}>
          <h4 style={{color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Layers size={24} /> La Red de Vínculos
          </h4>
          <p style={{fontSize: '1.1rem', color: '#334155'}}>
            La cadena de valor no es lineal; es una <strong>red de servicios</strong> (transporte, alojamiento, guiado) que el visitante experimenta. Si uno falla, la experiencia completa se ve comprometida.
          </p>
        </div>

        {/* Eslabones Típicos Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem'}}>
          {[
            "Transporte Local", "Alojamiento", "Alimentación", "Atractivos", 
            "Actividades", "Guiado", "Comercialización", "Seguros"
          ].map((item, i) => (
            <div key={i} style={{background: 'white', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 600, color: '#475569'}}>
               {item}
            </div>
          ))}
        </div>

        {/* Case Study: Ruta de las Mariposas */}
        <div style={{background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #64748b', marginBottom: '3rem'}}>
           <h4 style={{color: '#1e293b', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <Settings size={28} /> Caso: Ruta de las Mariposas - Meta
           </h4>
           
           <div className="grid-2" style={{gap: '2rem'}}>
              <div>
                 <h5 style={{color: '#475569', marginBottom: '1rem', fontWeight: 800}}>Cadena de Valor Ideal</h5>
                 <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem'}}>
                    <li>🚌 Transporte: Bogotá → Villavicencio → Comunidad</li>
                    <li>🏠 Alojamiento: Eco-lodge comunitario</li>
                    <li>🍽️ Alimentación: Comidas típicas locales</li>
                    <li>🦋 Atractivos: Santuario de mariposas</li>
                    <li>👨‍🏫 Guiado: 2 guías certificados</li>
                 </ul>
              </div>
              <div>
                 <h5 style={{color: '#e11d48', marginBottom: '1rem', fontWeight: 800}}>Brechas Identificadas (Puntos Críticos)</h5>
                 <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem'}}>
                    <li style={{color: '#e11d48'}}><XCircle size={14} inline style={{marginRight: '6px'}}/> Solo 1 guía certificado (necesitan 3).</li>
                    <li style={{color: '#e11d48'}}><XCircle size={14} inline style={{marginRight: '6px'}}/> Website no funcional.</li>
                    <li style={{color: '#e11d48'}}><XCircle size={14} inline style={{marginRight: '6px'}}/> Baños del eco-lodge requieren renovación.</li>
                    <li style={{color: '#e11d48'}}><XCircle size={14} inline style={{marginRight: '6px'}}/> Falta señalización en senderos.</li>
                 </ul>
              </div>
           </div>
        </div>

        {/* Análisis de Brechas Table */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>Matriz de Análisis de Brechas</h3>
        <div className="glass-card mb-10" style={{padding: 0, overflow: 'hidden'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f8fafc'}}>
              <tr>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Eslabón</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Oferta Necesaria</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Brecha</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Alojamiento</td>
                <td style={{padding: '1.2rem'}}>10 habs con baño privado</td>
                <td style={{padding: '1.2rem'}}>Faltan 5 habitaciones + baños</td>
                <td style={{padding: '1.2rem'}}><span style={{background: '#fee2e2', color: '#ef4444', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800}}>ALTA</span></td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Guiado</td>
                <td style={{padding: '1.2rem'}}>3 guías bilingües</td>
                <td style={{padding: '1.2rem'}}>Faltan 2 guías + certificación</td>
                <td style={{padding: '1.2rem'}}><span style={{background: '#fee2e2', color: '#ef4444', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800}}>ALTA</span></td>
              </tr>
              <tr>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Señalización</td>
                <td style={{padding: '1.2rem'}}>15 puntos marcados</td>
                <td style={{padding: '1.2rem'}}>Diseño e instalación</td>
                <td style={{padding: '1.2rem'}}><span style={{background: '#fef3c7', color: '#d97706', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800}}>MEDIA</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tipos de Brechas Cards */}
        <div className="grid-3 mb-10" style={{gap: '1.5rem'}}>
          <div style={{padding: '1.5rem', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0'}}>
             <h5 style={{color: '#032968', marginBottom: '0.5rem'}}>Infraestructura</h5>
             <p style={{fontSize: '0.85rem', color: '#64748b'}}>Faltan instalaciones, servicios públicos o conectividad física.</p>
          </div>
          <div style={{padding: '1.5rem', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0'}}>
             <h5 style={{color: '#032968', marginBottom: '0.5rem'}}>Capacidad</h5>
             <p style={{fontSize: '0.85rem', color: '#64748b'}}>Falta de personal entrenado, bilingüe o certificado.</p>
          </div>
          <div style={{padding: '1.5rem', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0'}}>
             <h5 style={{color: '#032968', marginBottom: '0.5rem'}}>Calidad</h5>
             <p style={{fontSize: '0.85rem', color: '#64748b'}}>Los servicios existen pero no cumplen con el estándar del flujo.</p>
          </div>
        </div>

        {/* Tip Box */}
        <div style={{background: '#fefce8', padding: '1.5rem', borderRadius: '15px', border: '1px solid #facc15', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '3rem'}}>
           <Info size={24} color="#a16207" style={{flexShrink: 0}} />
           <p style={{color: '#854d0e', fontSize: '1rem', margin: 0}}>
             <strong>Criterio de Críticidad:</strong> Prioriza las brechas sin las cuales el producto NO puede operar. Lo "deseable" puede esperar a una segunda fase.
           </p>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#1e293b', color: 'white'}}>
           <h4 style={{color: '#94a3b8', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Mapeo de Tu Cadena de Valor
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Dibuja el gráfico de tu cadena de valor ideal.",
                "Identifica la oferta actual (qué existe hoy y quién lo ofrece).",
                "Define la oferta necesaria para satisfacer a tu Buyer Persona.",
                "Identifica las brechas (qué falta o qué está débil).",
                "Prioriza las brechas (Alta, Media, Baja) según impacto y urgencia.",
                "Convierte las brechas en acciones concretas para tu plan de trabajo."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#94a3b8', color: '#1e293b', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
