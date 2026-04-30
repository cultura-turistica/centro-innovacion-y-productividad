import React from 'react';
import { Settings, FileText, Image as ImageIcon, Copy, Award, Clock } from 'lucide-react';

export default function Modulo3() {
  return (
    <div className="fade-in">
      <div style={{
        background: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)',
        padding: '5rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px -10px rgba(6, 78, 59, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
            <Settings size={48} color="#6EE7B7" />
          </div>
        </div>
        <h3 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-1px'}}>
          Configuración y Flujo de Trabajo
        </h3>
        <p style={{fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Antes de disparar, configura tu herramienta. Una vez tomada la foto, organiza y protege tu trabajo.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Stepper de Flujo de Trabajo */}
        <h3 className="mb-6 text-center" style={{color: '#064E3B'}}>El Flujo de Trabajo Profesional</h3>
        <div className="glass-card mb-10" style={{padding: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'}}>
          {[
            { step: 1, title: "Configurar", desc: "RAW/JPEG, ISO, Balance de Blancos" },
            { step: 2, title: "Encuadrar", desc: "Composición y punto de enfoque" },
            { step: 3, title: "Disparar", desc: "Evaluar luz y usar ráfaga si es necesario" },
            { step: 4, title: "Respaldar", desc: "Descargar fotos y añadir metadatos" }
          ].map((item, idx) => (
            <div key={idx} style={{flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <div style={{width: '50px', height: '50px', borderRadius: '50%', background: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem'}}>{item.step}</div>
              <h5 style={{color: '#064E3B', fontWeight: 800, marginBottom: '0.5rem'}}>{item.title}</h5>
              <p style={{fontSize: '0.9rem', color: '#475569'}}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Metáfora Gastronómica: RAW vs JPEG visual */}
        <div style={{ background: '#111827', color: 'white', borderRadius: '30px', padding: '3rem', marginBottom: '4rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ background: '#34D399', display: 'inline-block', color: '#064E3B', padding: '6px 20px', borderRadius: '100px', fontWeight: 800, letterSpacing: '1px', fontSize: '0.8rem', marginBottom: '1.5rem' }}>CALIDAD DE IMAGEN</div>
            <h4 style={{ fontSize: '2.5rem', color: '#F9FAFB', marginBottom: '2.5rem', fontWeight: 900 }}>¿Formato RAW o JPEG? 🍰</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Ingredientes RAW" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                <div style={{padding: '20px'}}>
                  <span style={{ display: 'block', fontWeight: 800, color: '#34D399', fontSize: '1.5rem', marginBottom: '10px' }}>RAW (Crudo)</span>
                  <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: '1.6' }}><strong>Todos los ingredientes puros.</strong> Pesa más y necesita prepararse en software de edición, pero tienes control total del resultado (recuperar sombras, colores exactos).</p>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" alt="Pastel JPEG" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                <div style={{padding: '20px'}}>
                  <span style={{ display: 'block', fontWeight: 800, color: '#60A5FA', fontSize: '1.5rem', marginBottom: '10px' }}>JPEG (Listo)</span>
                  <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: '1.6' }}><strong>El pastel ya horneado.</strong> La cámara lo procesó y comprimió. Es ligero y listo para redes sociales, pero ya no puedes cambiar los "ingredientes".</p>
                </div>
              </div>
            </div>
        </div>

        {/* Metadatos y el "Sidecar" */}
        <h3 className="mb-6 text-center" style={{color: '#064E3B'}}>Los Metadatos: El "Sidecar" de tu Foto</h3>
        <div className="glass-card mb-10" style={{padding: '3rem', borderLeft: '6px solid #10B981'}}>
           <div style={{display: 'flex', alignItems: 'flex-start', gap: '20px'}}>
             <div style={{background: '#ECFDF5', padding: '20px', borderRadius: '20px'}}>
               <FileText size={40} color="#059669" />
             </div>
             <div>
               <p style={{fontSize: '1.15rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                 Si la fotografía es una motocicleta, <strong>los metadatos son el sidecar</strong>. Viajan junto a la foto invisiblemente y contienen información vital: ¿Con qué cámara se tomó? ¿Qué ajustes de apertura y velocidad tenía? Y lo más importante: <strong>¿Quién es el autor?</strong>
               </p>
               
               <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                  <div style={{background: '#F8FAFC', padding: '15px', borderRadius: '12px', flex: 1, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Award size={20} color="#3B82F6" />
                    <span><strong>Autoría:</strong> Fija tus derechos de autor desde la cámara.</span>
                  </div>
                  <div style={{background: '#F8FAFC', padding: '15px', borderRadius: '12px', flex: 1, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Copy size={20} color="#8B5CF6" />
                    <span><strong>Catálogo:</strong> Úsalos para organizar cientos de fotos en Lightroom.</span>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* Velocidad de Ráfaga */}
        <div style={{background: '#FFFBEB', padding: '3rem', borderRadius: '30px', border: '2px solid #FDE68A', display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap'}}>
          <div style={{background: '#F59E0B', color: 'white', padding: '25px', borderRadius: '50%'}}>
            <Clock size={48} />
          </div>
          <div style={{flex: 1, minWidth: '300px'}}>
            <h4 style={{fontSize: '1.8rem', color: '#B45309', marginBottom: '1rem'}}>El Disparo Continuo (Ráfaga)</h4>
            <p style={{fontSize: '1.1rem', color: '#78350F', lineHeight: '1.6'}}>
              Las cámaras pueden capturar desde 3 hasta más de 12 fotogramas por segundo. ¿Cuándo usarlo? No solo en deportes, sino también en <strong>retratos</strong> (para atrapar esa micro-expresión perfecta) o cuando estás fotografiando con <strong>velocidades de obturación lentas sin trípode</strong>: la primera foto saldrá movida por presionar el botón, pero la tercera de la ráfaga estará nítida.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
