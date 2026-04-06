import React, { useState } from 'react';
import { Type, Image as ImageIcon, Palette, MessageCircle, Star, Megaphone, Presentation, Target, Play, Lightbulb, Compass, Heart, Users, Sparkles, Feather } from 'lucide-react';

export default function Modulo9() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       
       <div style={{textAlign: 'center', marginBottom: '3rem'}}>
         <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: '#e0e7ff', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', marginBottom: '1.5rem', color: '#4338ca'}}>
           <Feather size={40} />
         </div>
         <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem'}}>Módulo 9: Marca Comercial</h3>
         <p style={{color: '#475569', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
           Tu marca no es un logotipo bonito; es todo lo que la gente dice de tu ruta turística cuando tú no estás en la habitación. 
           Es el <strong style={{color: '#032968'}}>alma visual y verbal</strong> de tu comunidad.
         </p>
       </div>
       
       {/* INTRODUCCIÓN CON AVATARES */}
       <div className="grid-responsive" style={{display: 'flex', gap: '2rem', marginBottom: '5rem'}}>
          <div style={{flex: 1, background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '40px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)'}}>
             <div style={{position: 'absolute', top: '-20px', right: '-20px', color: 'rgba(59, 130, 246, 0.1)'}}>
               <Compass size={120} />
             </div>
             <img src="https://api.dicebear.com/9.x/micah/svg?seed=Javier&backgroundColor=b6e3f4" alt="Javier" style={{width: '140px', height: '140px', borderRadius: '50%', border: '6px solid white', marginBottom: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1}} />
             <h4 style={{fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.5rem', position: 'relative', zIndex: 1}}>Javier, el Turista</h4>
             <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.5', position: 'relative', zIndex: 1}}><i>"No recuerdo cómo se llamaba el sendero exacto, pero no puedo olvidar que el guía nos trató como familia y todo estaba pintado de un verde esmeralda deslumbrante."</i></p>
          </div>
          <div style={{flex: 1, background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', borderRadius: '40px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)'}}>
             <div style={{position: 'absolute', top: '-20px', right: '-20px', color: 'rgba(234, 88, 12, 0.05)'}}>
               <Heart size={120} />
             </div>
             <img src="https://api.dicebear.com/9.x/micah/svg?seed=Camila&backgroundColor=ffdfbf" alt="Camila" style={{width: '140px', height: '140px', borderRadius: '50%', border: '6px solid white', marginBottom: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1}} />
             <h4 style={{fontSize: '1.5rem', color: '#ea580c', marginBottom: '0.5rem', position: 'relative', zIndex: 1}}>Camila, la Anfitriona</h4>
             <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.5', position: 'relative', zIndex: 1}}><i>"Hicimos de ese verde esmeralda y la calidez humana nuestra Marca Comercial. Ahora, la gente cruza el país buscando esa misma sensación."</i></p>
          </div>
       </div>

       {/* LOS 6 PILARES DE LA MARCA (GRID ORGANICO) */}
       <div style={{textAlign: 'center', marginBottom: '3rem'}}>
           <h4 style={{color: '#055C38', fontSize: '2rem', marginBottom: '1rem'}}>Los 6 Ladrillos de Tu Identidad</h4>
           <p style={{color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>Construye una presencia que se quede grabada en la memoria, usando estas bases inquebrantables.</p>
       </div>

       <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem'}}>
         
         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#f8fafc', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', marginBottom: '1.2rem', border: '2px solid #e2e8f0'}}>
             <Type size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Nombre</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Corto, pronunciable y pegadizo. Si a un alemán le cuesta pronunciarlo, piénsalo dos veces.</p>
         </div>

         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#f0fdf4', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', marginBottom: '1.2rem'}}>
             <ImageIcon size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Logotipo</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Un símbolo mudo. Debe bordarse bien en una gorra o leerse claro en un icono minúsculo de Instagram.</p>
         </div>

         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#fff1f2', borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', marginBottom: '1.2rem'}}>
             <Palette size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Colores</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Definen la psicología. Azul transmite paz; Naranja irradia energía; Verde grita naturaleza virgen.</p>
         </div>

         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#f5f3ff', borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', marginBottom: '1.2rem'}}>
             <MessageCircle size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Tono de Voz</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>¿Tratas al cliente de un "Usted" majestuoso o lo tratas de "Tú" como a un amigo de toda la vida?</p>
         </div>

         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#fefce8', borderRadius: '30% 70% 20% 80% / 50% 30% 70% 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ca8a04', marginBottom: '1.2rem'}}>
             <Star size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Valores</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Tus reglas de oro. Ej: "Nunca subimos el precio al turista local por encima de lo justo".</p>
         </div>

         <div className="hover-lift" style={{background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s'}}>
           <div style={{width: '70px', height: '70px', background: '#ecfeff', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0891b2', marginBottom: '1.2rem'}}>
             <Megaphone size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>El Mensaje</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Esa única frase inolvidable con la que convences a alguien en una feria o a un inversor apurado.</p>
         </div>
       </div>

       {/* ELEVATOR PITCH INTERACTIVO */}
       <div style={{background: '#032968', borderRadius: '40px', padding: '4rem 2rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(3, 41, 104, 0.4)'}}>
         
         {/* Decoraciones de fondo */}
         <div style={{position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(40px)'}}></div>
         <div style={{position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(250, 204, 21, 0.1)', borderRadius: '50%', filter: 'blur(40px)'}}></div>

         <div style={{textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1}}>
           <div style={{width: '80px', height: '80px', background: '#3b82f6', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', transform: 'rotate(-5deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)'}}>
             <Presentation size={40} style={{transform: 'rotate(5deg)'}}/>
           </div>
           <h4 style={{fontSize: '2.5rem', color: '#bfdbfe', marginBottom: '1rem'}}>El Arte del "Elevator Pitch"</h4>
           <p style={{color: '#93c5fd', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto'}}>Un discurso de 45 segundos. Imagina que subes a un ascensor con el Ministro de Turismo y tienes hasta el piso 10 para convencerlo de ir a tu destino.</p>
         </div>

         {/* Contenedor Interactivo */}
         <div style={{maxWidth: '900px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1}}>
            <div style={{display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem'}}>
               <button onClick={() => setActiveStep(1)} style={{flex: 1, padding: '1.5rem 1rem', background: 'transparent', border: 'none', borderBottom: activeStep === 1 ? '3px solid #fde047' : '3px solid transparent', color: activeStep === 1 ? '#fde047' : '#94a3b8', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                  <Target size={20}/> 1. El Gancho
               </button>
               <button onClick={() => setActiveStep(2)} style={{flex: 1, padding: '1.5rem 1rem', background: 'transparent', border: 'none', borderBottom: activeStep === 2 ? '3px solid #bbf7d0' : '3px solid transparent', color: activeStep === 2 ? '#bbf7d0' : '#94a3b8', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                  <Lightbulb size={20}/> 2. La Solución
               </button>
               <button onClick={() => setActiveStep(3)} style={{flex: 1, padding: '1.5rem 1rem', background: 'transparent', border: 'none', borderBottom: activeStep === 3 ? '3px solid #fca5a5' : '3px solid transparent', color: activeStep === 3 ? '#fca5a5' : '#94a3b8', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                  <Play size={20}/> 3. La Llamada
               </button>
            </div>

            <div style={{padding: '0 2rem 2rem 2rem', minHeight: '180px'}}>
              {activeStep === 1 && (
                <div className="fade-in">
                  <h5 style={{color: '#fde047', fontSize: '1.6rem', marginBottom: '1rem'}}>Despierta su atención</h5>
                  <p style={{color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Haz una pregunta dolorosa o suelta una estadística brutal para que la persona deje de mirar su teléfono de inmediato.</p>
                  <div style={{background: 'rgba(253, 224, 71, 0.1)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #fde047', fontStyle: 'italic', fontSize: '1.1rem', color: '#fef08a'}}>
                    "¿Sabía usted que el 80% de los turistas extranjeros jamás ven la fauna real de nuestra selva porque los paseos comerciales son demasiado ruidosos?"
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="fade-in">
                  <h5 style={{color: '#bbf7d0', fontSize: '1.6rem', marginBottom: '1rem'}}>Presenta tu cura</h5>
                  <p style={{color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Menciona el nombre de tu ruta y por qué ustedes son únicos. No relates un menú de servicios, narra la cura a su dolor.</p>
                  <div style={{background: 'rgba(187, 247, 208, 0.1)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #bbf7d0', fontStyle: 'italic', fontSize: '1.1rem', color: '#dcfce7'}}>
                    "Por eso nuestra asociación indígena creó la 'Ruta Silvestre', el único sendero de 3 días donde caminamos descalzos y en completo silencio, garantizando un avistamiento real."
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="fade-in">
                  <h5 style={{color: '#fca5a5', fontSize: '1.6rem', marginBottom: '1rem'}}>Busca el cierre</h5>
                  <p style={{color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Nunca dejes el ascensor sin pedirle algo material: su tarjeta de presentación, su firma o que prometa ir este sábado.</p>
                  <div style={{background: 'rgba(252, 165, 165, 0.1)', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #fca5a5', fontStyle: 'italic', fontSize: '1.1rem', color: '#fecaca'}}>
                    "Abriremos inscripciones mañana. ¿Me regalaría su tarjeta para enviarle el video promocional inédito por WhatsApp esta misma tarde?"
                  </div>
                </div>
              )}
            </div>
         </div>
       </div>

    </div>
  );
}

