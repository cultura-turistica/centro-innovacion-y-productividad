import React from 'react';
import img_0 from '../../../assets/fotografia/picado_angulo_1777070305361.webp';
import img_1 from '../../../assets/fotografia/cenital_drone_view_1777069889768.webp';
import img_2 from '../../../assets/fotografia/primer_plano_retrato_1777069904150.webp';
import img_3 from '../../../assets/fotografia/primerisimo_primer_plano_ojo_1777069915629.webp';
import img_4 from '../../../assets/fotografia/plano_detalle_insecto_1777069928884.webp';
import { Eye, MapPin, Minimize2, Video, Mountain } from 'lucide-react';

export default function Modulo4() {
  return (
    <div className="fade-in">
      <div style={{
        background: 'linear-gradient(135deg, #BE185D 0%, #831843 100%)',
        padding: '5rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '4rem',
        boxShadow: '0 20px 40px -10px rgba(131, 24, 67, 0.4)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
            <Eye size={48} color="#FBCFE8" />
          </div>
        </div>
        <h3 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-1px'}}>
          El Arte de Mirar
        </h3>
        <p style={{fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Aprende a encontrar el "Punto de Vista" perfecto y descubre cómo cambiar la posición de la cámara cambia todo el significado.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Punto de Vista (Vantage Point) */}
        <h3 className="mb-6 text-center" style={{color: '#831843'}}>El Punto de Vista (Vantage Point)</h3>
        <p className="text-center" style={{color: '#475569', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto'}}>
          Como destacó John Szarkowski en el MoMA en 1964, el punto de vista es <strong>¿Dónde está la cámara?</strong> Literalmente. ¿Arriba? ¿Abajo? ¿De lado?
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80" alt="Normal (Fuente: Unsplash)" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#475569', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Nivel del Ojo</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>El Punto Normal</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>A la altura de los ojos. Cómodo, seguro y transmite cómo entendemos el mundo habitualmente.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src={img_0} alt="Picado" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#3B82F6', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Desde Arriba</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Picado</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Fotografiar hacia abajo. El sujeto parece más pequeño o integrado en su entorno.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Contrapicado (Fuente: Unsplash)" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#F59E0B', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Desde Abajo</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Contrapicado</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Fotografiar hacia arriba. Otorga grandeza y poder al sujeto. Los hace imponentes.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src={img_1} alt="Cenital Drone" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#10B981', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Aéreo Total</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Cenital</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>La cámara apunta totalmente hacia el suelo a 90 grados. Ideal para fotos de drones o vistas de pájaro.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src={img_2} alt="Primer Plano" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#8B5CF6', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Cercano</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Primer Plano</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>En retratos, corta por encima del pecho. Aísla al sujeto de su contexto para enfocarnos completamente en su emoción.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src={img_3} alt="Primerísimo Primer Plano Ojo" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#EC4899', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Extremo</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Primerísimo Primer Plano</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Enfoca una parte muy específica del rostro (como los ojos). Crea una intimidad e intensidad visual enorme.</p>
            </div>
          </div>

          <div className="glass-card perspective-card" style={{padding: '0', position: 'relative', overflow: 'hidden', height: '350px', display: 'flex', alignItems: 'flex-end'}}>
            <img src={img_4} alt="Foto Macro Detalle" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}} />
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%)', zIndex: 1}}></div>
            <div style={{position: 'relative', zIndex: 2, padding: '2rem', width: '100%'}}>
              <div style={{display: 'inline-block', background: '#F97316', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px'}}>Específico</div>
              <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem'}}>Plano Detalle</h4>
              <p style={{fontSize: '0.9rem', color: '#cbd5e1', margin: 0}}>Muestra un objeto, textura o bicho pequeño. Cuenta una micro-historia visual en modo macro.</p>
            </div>
          </div>
        </div>

        {/* El efecto de estar muy cerca */}
        <div style={{ background: '#FDF2F8', border: '2px dashed #F472B6', borderRadius: '25px', padding: '2.5rem', display: 'flex', gap: '25px', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <div style={{ background: '#BE185D', color: 'white', padding: '20px', borderRadius: '20px' }}>
            <Minimize2 size={40}/>
          </div>
          <div style={{flex: 1, minWidth: '300px'}}>
            <h4 style={{ color: '#831843', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.8rem' }}>El Efecto de estar "Muy Cerca"</h4>
            <p style={{ color: '#9D174D', fontSize: '1.1rem', margin: 0, lineHeight: '1.6' }}>
              Cuando tomamos un punto de vista que está "demasiado cerca", el contexto normal desaparece. Literalmente transformamos lo fotografiado. Una hoja de planta vista muy de cerca puede parecer una "extraña jungla" o una textura abstracta irreconocible. Acercarse aísla e intensifica.
            </p>
          </div>
        </div>

        {/* Trabajar la escena */}
        <h3 className="mb-6 text-center" style={{color: '#831843'}}>Trabajar la Escena</h3>
        <div className="glass-card mb-10" style={{padding: '0', overflow: 'hidden'}}>
           <div style={{display: 'flex', flexWrap: 'wrap'}}>
              <div style={{flex: '1 1 300px', background: '#111827', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                 <Video size={48} color="#F472B6" style={{marginBottom: '1.5rem'}} />
                 <h4 style={{fontSize: '2rem', marginBottom: '1rem'}}>¿Qué significa esto?</h4>
                 <p style={{fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.7'}}>
                   "Trabajar una escena" no es algo actoral ni de películas. Significa que, al encontrar un sujeto interesante, <strong>no tomas una sola foto y te vas</strong>.
                 </p>
                 <br />
                 <p style={{fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.7'}}>
                   Te mueves. Te agachas. Te subes a una silla. Das unos pasos a la derecha. Cambias la exposición. Tomas 10 o 20 fotos variando el punto de vista hasta que encuentras la imagen perfecta.
                 </p>
              </div>
              <div style={{flex: '1 1 300px', background: '#F8FAFC', padding: '3rem', position: 'relative'}}>
                 <div style={{position: 'absolute', top: '10%', right: '10%', opacity: 0.1}}><Mountain size={150} /></div>
                 <h5 style={{color: '#475569', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 800}}>El Proceso de Trabajar la Escena:</h5>
                 <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px'}}>
                   <li style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                     <span style={{background: '#DB2777', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>1</span>
                     <span style={{color: '#334155', fontWeight: 500}}>Tomas el "Disparo Seguro" (Normal).</span>
                   </li>
                   <li style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                     <span style={{background: '#BE185D', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>2</span>
                     <span style={{color: '#334155', fontWeight: 500}}>Observas la luz: ¿hay una sombra molesta?</span>
                   </li>
                   <li style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                     <span style={{background: '#9D174D', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>3</span>
                     <span style={{color: '#334155', fontWeight: 500}}>Cambias el punto de vista para corregirlo.</span>
                   </li>
                   <li style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                     <span style={{background: '#831843', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>4</span>
                     <span style={{color: '#334155', fontWeight: 500}}>Rompes la simetría moviéndote de lado.</span>
                   </li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
