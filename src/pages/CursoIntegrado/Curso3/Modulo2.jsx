import React, { useState } from 'react';
import { Smartphone, Camera, Zap, Sun, Focus, Sliders, Maximize, Image as ImageIcon } from 'lucide-react';

export default function Modulo2() {
  const [activeFeature, setActiveFeature] = useState('focus');

  const features = {
    focus: {
      title: "Enfoque Táctil",
      desc: "Toca la pantalla para decirle al lente dónde condensar la luz. La cámara ajustará la nitidez sobre ese punto exacto.",
      icon: <Focus size={24} color="#3B82F6" />
    },
    exposure: {
      title: "Exposición (Brillo)",
      desc: "Desliza el dedo hacia arriba o hacia abajo (en iPhone) o usa el deslizador para hacer la foto más clara o más oscura antes de disparar.",
      icon: <Sun size={24} color="#F59E0B" />
    },
    modes: {
      title: "Modos de Disparo",
      desc: "Automático es rápido, pero usar modos como 'Pro' o 'Retrato' te da control sobre la profundidad de campo y la velocidad.",
      icon: <Sliders size={24} color="#10B981" />
    }
  };

  return (
    <div className="fade-in">
      <div style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
        padding: '5rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px -10px rgba(49, 46, 129, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
            <Smartphone size={48} color="#818CF8" />
          </div>
        </div>
        <h3 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-1px'}}>
          Tu Equipo: La Cámara en tu Bolsillo
        </h3>
        <p style={{fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Desde la histórica Kodak Brownie hasta tu Smartphone moderno. Conoce tu herramienta y cómo tomar el control manual.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Celular Interactivo */}
        <h3 className="text-center" style={{color: '#1E1B4B', fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem'}}>Anatomía de tu Smartphone 📱</h3>
        <p className="text-center" style={{color: '#64748b', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto'}}>
          Haz clic en las zonas del celular para entender los controles que a menudo pasamos por alto.
        </p>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center', marginBottom: '5rem'}}>
          
          {/* Mockup Celular */}
          <div style={{
            width: '300px',
            height: '600px',
            background: '#000',
            borderRadius: '40px',
            border: '12px solid #1E293B',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            flexShrink: 0
          }}>
            {/* Pantalla (Imagen de fondo simulada) */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to bottom, #3b82f6, #10b981)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px'
            }}>
               {/* UI Top */}
               <div style={{display: 'flex', justifyContent: 'space-between', color: 'white'}}>
                 <Zap size={20} />
                 <div style={{display: 'flex', gap: '10px'}}>
                   <div style={{width: '20px', height: '20px', border: '2px solid white', borderRadius: '5px'}}></div>
                   <div style={{width: '20px', height: '20px', border: '2px solid white', borderRadius: '5px', opacity: 0.5}}></div>
                 </div>
               </div>

               {/* Focus Box Interactivo */}
               <div 
                 onClick={() => setActiveFeature('focus')}
                 style={{
                   width: '100px', height: '100px', border: '2px solid #FCD34D', position: 'absolute', top: '40%', left: '30%',
                   display: 'flex', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer',
                   boxShadow: activeFeature === 'focus' ? '0 0 15px rgba(252, 211, 77, 0.8)' : 'none',
                   transition: 'all 0.3s'
                 }}>
                  {/* Slider de exposición pegado al focus */}
                  <div 
                    onClick={(e) => { e.stopPropagation(); setActiveFeature('exposure'); }}
                    style={{
                      height: '100%', width: '20px', borderLeft: '1px solid rgba(252, 211, 77, 0.5)', 
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#FCD34D'
                    }}>
                     <Sun size={14} style={{marginBottom: '5px'}} />
                     <div style={{flexGrow: 1, width: '2px', background: '#FCD34D'}}></div>
                  </div>
               </div>

               {/* UI Bottom */}
               <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                  <div style={{display: 'flex', justifyContent: 'center', gap: '20px', color: 'white', fontSize: '0.8rem', fontWeight: 600}}>
                    <span onClick={() => setActiveFeature('modes')} style={{cursor: 'pointer', color: activeFeature === 'modes' ? '#FCD34D' : 'white'}}>FOTO</span>
                    <span style={{opacity: 0.7}}>RETRATO</span>
                    <span style={{opacity: 0.7}}>PRO</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{width: '40px', height: '40px', background: 'rgba(255,255,255,0.3)', borderRadius: '10px'}}><ImageIcon size={20} color="white" style={{margin: '10px'}}/></div>
                    <div style={{width: '60px', height: '60px', background: 'white', borderRadius: '50%', border: '4px solid #E2E8F0'}}></div>
                    <div style={{width: '40px', height: '40px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Camera size={20} color="white" /></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Panel de Información del Celular */}
          <div className="glass-card" style={{flex: '1 1 300px', maxWidth: '500px', padding: '2.5rem', background: 'white'}}>
             <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem'}}>
               {features[activeFeature].icon}
               <h4 style={{fontSize: '1.8rem', color: '#1E1B4B', margin: 0}}>{features[activeFeature].title}</h4>
             </div>
             <p style={{fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', marginBottom: '2rem'}}>
               {features[activeFeature].desc}
             </p>
             <div style={{background: '#EEF2FF', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #4F46E5', fontSize: '0.95rem', color: '#3730A3'}}>
               <strong>Tip:</strong> Si dejas el dedo presionado en la pantalla (iPhone/Galaxy), se activará el bloqueo AE/AF (Bloqueo de Exposición y Enfoque).
             </div>
          </div>
        </div>

        {/* Cámaras Clásicas vs Modernas */}
        <div className="grid-2 mb-10">
           <div className="glass-card" style={{padding: '0', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'flex-end'}}>
             <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" alt="Cámara Clásica" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.8}} />
             <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', zIndex: 1}}></div>
             <div style={{position: 'relative', zIndex: 2, padding: '2.5rem'}}>
               <h4 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 800}}>Kodak Brownie (1924)</h4>
               <p style={{color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6'}}>
                 Las primeras cámaras "Point & Shoot". Todo preconfigurado: solo apuntabas y disparabas sin control sobre la luz.
               </p>
             </div>
           </div>
           <div className="glass-card" style={{padding: '0', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'flex-end'}}>
             <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&w=800&q=80" alt="Cámara Moderna" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.8}} />
             <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(16,185,129,0.9), transparent)', zIndex: 1}}></div>
             <div style={{position: 'relative', zIndex: 2, padding: '2.5rem'}}>
               <h4 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 800}}>El Control Moderno: MAPS</h4>
               <p style={{color: '#ecfdf5', fontSize: '1.05rem', lineHeight: '1.6'}}>
                 <strong>M</strong>anual, <strong>A</strong>pertura (Prioridad), <strong>P</strong>rograma, <strong>S</strong>hutter (Velocidad). Tú decides.
               </p>
             </div>
           </div>
        </div>

        {/* Accesorios Esenciales */}
        <div style={{ background: '#1E293B', color: 'white', borderRadius: '30px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <h4 style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem', fontWeight: 800 }}>Accesorios Esenciales para tu Celular 🎒</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: 0, borderRadius: '20px', overflow: 'hidden' }}>
              <img src="/images/smartphone_tripod_1777058924777.webp" alt="Trípode Pequeño Celular" style={{width: "100%", height: "150px", objectFit: "cover"}} />
              <div style={{padding: '2rem'}}>
                <div style={{ color: '#60A5FA', marginBottom: '1rem' }}><Camera size={32}/></div>
                <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Trípode Pequeño</h5>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Vital para fotos nocturnas o ríos efecto seda (evita el movimiento de la mano).</p>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: 0, borderRadius: '20px', overflow: 'hidden' }}>
              <img src="/images/macro_phone_lens_1777061014302.webp" alt="Lente Macro para Celular" style={{width: "100%", height: "150px", objectFit: "cover"}} />
              <div style={{padding: '2rem'}}>
                <div style={{ color: '#34D399', marginBottom: '1rem' }}><Maximize size={32}/></div>
                <h5 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lentes Clip-on</h5>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Añaden características especiales como <strong>Macro</strong> o <strong>Gran Angular</strong> a la lente de tu celular.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
