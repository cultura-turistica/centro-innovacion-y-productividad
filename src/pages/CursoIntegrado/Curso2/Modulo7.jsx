import React from 'react';
import { Leaf, Globe, Landmark, Users, DollarSign, RotateCcw, Award, ShieldCheck, ListChecks, Info } from 'lucide-react';

export default function Modulo7() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #065f46 0%, #064e3b 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Sostenibilidad: El Corazón del Producto"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          No es un "plus", es el estándar. Aprende a aplicar los criterios globales de sostenibilidad de la GSTC en tu territorio.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Definición Transversal */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #10b981', background: '#f0fdf4'}}>
          <blockquote style={{fontSize: '1.2rem', color: '#065f46', margin: 0, fontWeight: 500}}>
            "El turismo sostenible consiste en crear mejores lugares para visitar y mejores lugares para vivir."
          </blockquote>
          <p style={{marginTop: '1rem', fontSize: '1rem', color: '#166534'}}>
            La sostenibilidad es un enfoque <strong>transversal</strong>: impacta la economía, la cultura y el medio ambiente de forma simultánea.
          </p>
        </div>

        {/* GSTC 4 Pillars */}
        <h3 className="mb-6 text-center" style={{color: '#064e3b'}}>Los 4 Pilares GSTC para Destinos</h3>
        <div className="grid-2 mb-10" style={{gap: '1.5rem'}}>
          <div className="glass-card" style={{padding: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem'}}>
              <Landmark size={24} color="#059669" />
              <h4 style={{color: '#064e3b', margin: 0}}>Gestión Sostenible</h4>
            </div>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Gobernanza, planificación y monitoreo. ¿Cómo se organiza el destino para durar en el tiempo?</p>
          </div>
          <div className="glass-card" style={{padding: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem'}}>
              <DollarSign size={24} color="#059669" />
              <h4 style={{color: '#064e3b', margin: 0}}>Beneficios Económicos</h4>
            </div>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Impacto directo en la comunidad local: empleo digno, compras locales y reparto equitativo.</p>
          </div>
          <div className="glass-card" style={{padding: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem'}}>
              <Users size={24} color="#059669" />
              <h4 style={{color: '#064e3b', margin: 0}}>Sentido de Lugar</h4>
            </div>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Protección del patrimonio cultural y autenticidad. Respeto por las tradiciones y la identidad.</p>
          </div>
          <div className="glass-card" style={{padding: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem'}}>
              <Leaf size={24} color="#059669" />
              <h4 style={{color: '#064e3b', margin: 0}}>Sostenibilidad Ambiental</h4>
            </div>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Gestión de residuos, conservación de biodiversidad y eficiencia en el uso de agua y energía.</p>
          </div>
        </div>

        {/* Case Study: Amazonas */}
        <div style={{background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '1px solid #059669', marginBottom: '3rem'}}>
           <h4 style={{color: '#064e3b', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <Award size={28} /> Caso: Comunidad El Paraíso - Amazonas
           </h4>
           <div className="grid-2" style={{gap: '2rem'}}>
              <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem'}}>
                 <li>✅ <strong>Económico:</strong> 80% de ingresos quedan en la comunidad.</li>
                 <li>✅ <strong>Cultural:</strong> Historias contadas por mayores (Sabedores).</li>
                 <li>✅ <strong>Ambiental:</strong> Carga máxima de 20 visitantes/día. Sin plásticos.</li>
              </ul>
              <div className="glass-card" style={{background: '#065f46', color: 'white', padding: '2rem', textAlign: 'center'}}>
                 <ShieldCheck size={40} style={{margin: '0 auto 1rem auto'}} />
                 <p style={{fontWeight: 700}}>Resultado Impactante</p>
                 <p style={{fontSize: '0.85rem', opacity: 0.9}}>Certificación TourCert y aumento del 40% en visitantes de alto valor.</p>
              </div>
           </div>
        </div>

        {/* Rueda de Impacto Section */}
        <div className="glass-card mb-10" style={{padding: '3rem', textAlign: 'center'}}>
           <h4 style={{color: '#064e3b', marginBottom: '1rem'}}>La Rueda de Impacto</h4>
           <p style={{maxWidth: '600px', margin: '0 auto 2rem auto', color: '#475569'}}>Visualiza el equilibrio de tu producto analizando los impactos positivos y negativos en 3 dimensiones.</p>
           <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              <div style={{width: '150px', height: '150px', border: '3px solid #16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#16A34A'}}>ECONÓMICO</div>
              <div style={{width: '150px', height: '150px', border: '3px solid #3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#3b82f6'}}>SOCIAL</div>
              <div style={{width: '150px', height: '150px', border: '3px solid #f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#f59e0b'}}>AMBIENTAL</div>
           </div>
        </div>

        {/* Certificaciones List */}
        <div style={{marginBottom: '3rem'}}>
           <h4 style={{color: '#064e3b', marginBottom: '1.5rem'}}>Certificaciones en Colombia</h4>
           <div className="grid-2" style={{gap: '1rem'}}>
              {["TourCert", "Green Destinations", "Biosphere", "NTS 45001 (ICONTEC)"].map((cert, i) => (
                <div key={i} style={{padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '10px', background: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
                   <div style={{width: '10px', height: '10px', background: '#059669', borderRadius: '50%'}}></div>
                   <span style={{fontWeight: 600, color: '#334155'}}>{cert}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#064e3b', color: 'white'}}>
           <h4 style={{color: '#34d399', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Evaluación GSTC
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Evalúa tu destino usando el semáforo (Verde, Amarillo, Rojo) para los 4 pilares.",
                "Identifica los 5 criterios más críticos con brechas (donde estás en Rojo).",
                "Aplica la Rueda de Impacto a tu flujo priorizado.",
                "Diseña 3 medidas de mitigación para impactos negativos.",
                "Define una meta de certificación a mediano plazo."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#34d399', color: '#064e3b', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
