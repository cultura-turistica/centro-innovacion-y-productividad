import React, { useState } from 'react';
import { Camera, Video, Maximize, Sun, LayoutGrid, ArrowRight, Smartphone, Pencil, Target, CloudUpload, Sparkles, Image as ImageIcon, Heart, Compass, Lightbulb, Film } from 'lucide-react';

export default function Modulo10() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       
       <div style={{textAlign: 'center', marginBottom: '3rem'}}>
         <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: '#dcfce7', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', marginBottom: '1.5rem', color: '#166534'}}>
           <Camera size={40} />
         </div>
         <h3 style={{color: '#055C38', fontSize: '2.5rem', marginBottom: '1rem'}}>Módulo 10: Generación de Contenidos</h3>
         <p style={{color: '#475569', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
           "Una imagen vale más que mil palabras". Aprenderemos a usar nuestro celular no solo para registrar, sino para <strong style={{color: '#055C38'}}>conmover y atraer</strong> nuevos visitantes a través de la fotografía y video de alta calidad.
         </p>
       </div>
       
       {/* AVATARES NARRATIVOS */}
       <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '5rem'}}>
          <div style={{flex: '1 1 300px', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: '40px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)'}}>
             <div style={{position: 'absolute', top: '-20px', right: '-20px', color: 'rgba(22, 101, 52, 0.1)'}}>
               <Sparkles size={120} />
             </div>
             <img src="https://api.dicebear.com/9.x/micah/svg?seed=Javier&backgroundColor=b6e3f4" alt="Javier" style={{width: '140px', height: '140px', borderRadius: '50%', border: '6px solid white', marginBottom: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1}} />
             <h4 style={{fontSize: '1.5rem', color: '#166534', marginBottom: '0.5rem', position: 'relative', zIndex: 1}}>Javier, el Turista</h4>
             <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.5', position: 'relative', zIndex: 1}}><i>"He visto que en redes sociales la gente no solo busca destinos, busca sentimientos. ¿Cómo logramos que una foto de nuestro café se sienta como el abrazo de la abuela?"</i></p>
          </div>
          <div style={{flex: '1 1 300px', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '40px', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)'}}>
             <div style={{position: 'absolute', top: '-20px', right: '-20px', color: 'rgba(59, 130, 246, 0.05)'}}>
               <Smartphone size={120} />
             </div>
             <img src="https://api.dicebear.com/9.x/micah/svg?seed=Camila&backgroundColor=ffdfbf" alt="Camila" style={{width: '140px', height: '140px', borderRadius: '50%', border: '6px solid white', marginBottom: '1.5rem', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', position: 'relative', zIndex: 1}} />
             <h4 style={{fontSize: '1.5rem', color: '#1e40af', marginBottom: '0.5rem', position: 'relative', zIndex: 1}}>Camila, la Anfitriona</h4>
             <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.5', position: 'relative', zIndex: 1}}><i>"Javier, el secreto está en dominar la herramienta que todos tenemos en el bolsillo: el celular. Vamos a aprender a capturar el alma de nuestra ruta cuidando la luz y el encuadre."</i></p>
          </div>
       </div>

       {/* FUNDAMENTOS TÉCNICOS (TARJETAS) */}
       <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h4 style={{color: '#055C38', fontSize: '2rem', marginBottom: '1rem'}}>Fundamentos de Fotografía Móvil</h4>
            <p style={{color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>Antes de disparar, configura tu herramienta para el éxito.</p>
       </div>

       <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem'}}>
         
         <div className="hover-lift glass-card" style={{padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s', background: 'white'}}>
           <div style={{width: '70px', height: '70px', background: '#f8fafc', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', marginBottom: '1.2rem', border: '2px solid #e2e8f0'}}>
             <Maximize size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Resolución</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Configura tu cámara a la máxima resolución disponible. Es mejor que sobre calidad a que falten píxeles.</p>
         </div>

         <div className="hover-lift glass-card" style={{padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s', background: 'white'}}>
           <div style={{width: '70px', height: '70px', background: '#f0fdf4', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', marginBottom: '1.2rem'}}>
             <ImageIcon size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Enfoque Manual</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Toca la pantalla en el punto de interés. Esto asegura que lo importante esté nítido y define la exposición.</p>
         </div>

         <div className="hover-lift glass-card" style={{padding: '2rem', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'transform 0.3s', background: 'white'}}>
           <div style={{width: '70px', height: '70px', background: '#fefce8', borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ca8a04', marginBottom: '1.2rem'}}>
             <Sun size={30}/>
           </div>
           <h5 style={{fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', color: '#0f172a'}}>Optimización de Luz</h5>
           <p style={{fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: '1.5'}}>Ubica siempre la fuente de luz detrás de ti. La luz natural de la mañana o tarde ("hora dorada") es tu mejor aliada.</p>
         </div>
       </div>

       {/* TÉCNICAS DE COMPOSICIÓN (VISUAL) */}
       <div style={{background: '#055C38', borderRadius: '40px', padding: '4rem 2rem', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(5, 92, 56, 0.4)', marginBottom: '5rem'}}>
          
          <div style={{position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '50%', filter: 'blur(40px)'}}></div>
          <div style={{position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(250, 204, 21, 0.1)', borderRadius: '50%', filter: 'blur(40px)'}}></div>

          <div style={{textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1}}>
            <div style={{width: '80px', height: '80px', background: '#22c55e', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', transform: 'rotate(-5deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)'}}>
              <LayoutGrid size={40} style={{transform: 'rotate(5deg)'}}/>
            </div>
            <h4 style={{fontSize: '2.5rem', color: '#bbf7d0', marginBottom: '1rem'}}>Técnicas de Composición</h4>
            <p style={{color: '#dcfce7', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto'}}>No tomes fotos vacías, construye realidades. La forma en que ubicas los objetos cambia el mensaje por completo.</p>
          </div>

          <div style={{maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', position: 'relative', zIndex: 1}}>
             <div style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '25px', padding: '1.5rem', textAlign: 'center'}}>
                <h6 style={{color: '#fef08a', fontSize: '1.2rem', marginBottom: '0.8rem'}}>Regla de Tercios</h6>
                <div style={{aspectRatio: '1', border: '1px dashed rgba(255,255,255,0.4)', position: 'relative', marginBottom: '1rem'}}>
                   <div style={{position: 'absolute', top: '33.3%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
                   <div style={{position: 'absolute', top: '66.6%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
                   <div style={{position: 'absolute', left: '33.3%', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
                   <div style={{position: 'absolute', left: '66.6%', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.2)'}}></div>
                   <div style={{position: 'absolute', top: '33.3%', left: '33.3%', width: '6px', height: '6px', background: '#fef08a', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #fef08a'}}></div>
                </div>
                <p style={{fontSize: '0.85rem', color: '#dcfce7'}}>Coloca el objeto principal en uno de los 4 puntos de intersección.</p>
             </div>
             
             <div style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '25px', padding: '1.5rem', textAlign: 'center'}}>
                <h6 style={{color: '#fef08a', fontSize: '1.2rem', marginBottom: '0.8rem'}}>Líneas Guía</h6>
                <div style={{aspectRatio: '1', position: 'relative', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden'}}>
                   <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)'}}></div>
                   <ArrowRight size={60} style={{position: 'absolute', bottom: '10%', left: '10%', transform: 'rotate(-45deg)', opacity: 0.5}} />
                </div>
                <p style={{fontSize: '0.85rem', color: '#dcfce7'}}>Usa caminos, cercas o ríos para guiar la mirada del espectador.</p>
             </div>

             <div style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '25px', padding: '1.5rem', textAlign: 'center'}}>
                <h6 style={{color: '#fef08a', fontSize: '1.2rem', marginBottom: '0.8rem'}}>Planos Narrativos</h6>
                <div style={{aspectRatio: '1', position: 'relative', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '4px', padding: '4px'}}>
                   <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '4px'}}></div>
                   <div style={{flex: 1.5, background: 'rgba(255,255,255,0.15)', borderRadius: '4px'}}></div>
                   <div style={{flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '4px'}}></div>
                </div>
                <p style={{fontSize: '0.85rem', color: '#dcfce7'}}>Alterna entre Planos Generales (paisaje) y Primeros Planos (detalles/personas).</p>
             </div>

             <div style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '25px', padding: '1.5rem', textAlign: 'center'}}>
                <h6 style={{color: '#fef08a', fontSize: '1.2rem', marginBottom: '0.8rem'}}>Simetría</h6>
                <div style={{aspectRatio: '1', position: 'relative', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                   <div style={{width: '50%', height: '50%', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '2px'}}></div>
                   <div style={{position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'rgba(255,255,255,0.4)'}}></div>
                </div>
                <p style={{fontSize: '0.85rem', color: '#dcfce7'}}>Centra elementos potentes que reflejen orden y equilibrio en la composición.</p>
             </div>
          </div>
       </div>

       {/* PLANIFICACIÓN DE CONTENIDO (TABS/INTERACTIVO) */}
       <div style={{marginBottom: '5rem'}}>
         <h4 style={{color: '#055C38', fontSize: '2rem', textAlign: 'center', marginBottom: '1rem'}}>Diseña tu Plan de Rodaje</h4>
         <p style={{color: '#64748b', fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem'}}>Crea contenido con propósito, no solo fotos al azar. Sigue estos 4 pasos críticos:</p>
         
         <div style={{maxWidth: '800px', margin: '0 auto', background: 'white', border: '1px solid #e2e8f0', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
            <div style={{display: 'flex', background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
               {[
                 { id: 1, icon: <Lightbulb size={18}/>, label: 'Paso 1' },
                 { id: 2, icon: <Target size={18}/>, label: 'Paso 2' },
                 { id: 3, icon: <Smartphone size={18}/>, label: 'Paso 3' },
                 { id: 4, icon: <Pencil size={18}/>, label: 'Paso 4' }
               ].map(tab => (
                 <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{flex: 1, padding: '1.2rem', border: 'none', background: activeTab === tab.id ? 'white' : 'transparent', color: activeTab === tab.id ? '#055C38' : '#94a3b8', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 700, gap: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {tab.icon} <span className="hide-mobile">{tab.label}</span>
                 </button>
               ))}
            </div>

            <div style={{padding: '2.5rem'}}>
               {activeTab === 1 && (
                 <div className="fade-in">
                    <h5 style={{color: '#055C38', fontSize: '1.4rem', marginBottom: '1rem'}}>Define el Mensaje</h5>
                    <p style={{color: '#475569', lineHeight: '1.6'}}>No salgas a grabar sin saber qué quieres decir. ¿Quieres mostrar paz? ¿Aventura? ¿Sabor? Escribe una sola frase que resuma el objetivo del video o foto.</p>
                    <div style={{marginTop: '1.5rem', background: '#f0fdf4', borderLeft: '4px solid #16a34a', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', color: '#166534'}}>
                       <strong>Ejemplo:</strong> "Quiero que el turista sienta que al venir aquí, despertará con el canto de 20 aves distintas."
                    </div>
                 </div>
               )}
               {activeTab === 2 && (
                 <div className="fade-in">
                    <h5 style={{color: '#055C38', fontSize: '1.4rem', marginBottom: '1rem'}}>Segmenta el Canal</h5>
                    <p style={{color: '#475569', lineHeight: '1.6'}}>¿Es para TikTok? (Vertical + dinámico). ¿Para WhatsApp? (Cercano + informativo). ¿Para un folleto? (Horizontal + alta calidad). El formato define cómo debes sostener el celular.</p>
                 </div>
               )}
               {activeTab === 3 && (
                 <div className="fade-in">
                    <h5 style={{color: '#055C38', fontSize: '1.4rem', marginBottom: '1rem'}}>Captura Inteligente</h5>
                    <p style={{color: '#475569', lineHeight: '1.6'}}>Toma al menos 3 versiones de cada escena: un plano general del paisaje, uno de la acción (alguien haciendo algo) y un detalle (manos, texturas, primer plano).</p>
                 </div>
               )}
               {activeTab === 4 && (
                 <div className="fade-in">
                    <h5 style={{color: '#055C38', fontSize: '1.4rem', marginBottom: '1rem'}}>Post-Producción Rápida</h5>
                    <p style={{color: '#475569', lineHeight: '1.6'}}>Usa aplicaciones como <strong>CapCut</strong> o <strong>InShot</strong> para unir tus clips. No olvides poner música que no tenga derechos de autor o usar las gemas que ofrecen las redes sociales directamente.</p>
                 </div>
               )}
            </div>
         </div>
       </div>

       {/* CAJA DE HERRAMIENTAS RECOMENDADAS */}
       <div style={{background: 'linear-gradient(135deg, #022c22 0%, #055C38 100%)', borderRadius: '40px', padding: '3rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem'}}>
          <div style={{flex: '1 1 300px'}}>
             <h4 style={{fontSize: '2rem', marginBottom: '1rem', color: '#bbf7d0'}}>Tu Kit Digital de Bolsillo</h4>
             <p style={{color: '#dcfce7', fontSize: '1.1rem', marginBottom: '2rem'}}>No necesitas ser un experto en diseño para verte como uno. Estas son las herramientas recomendadas por el DataLab SGR.</p>
             <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
               <div style={{background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px'}}><Pencil size={18} color="#fde047"/> Canva (Diseño)</div>
               <div style={{background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px'}}><Film size={18} color="#fca5a5"/> CapCut (Video)</div>
               <div style={{background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px'}}><CloudUpload size={18} color="#93c5fd"/> Google Photos (Nube)</div>
             </div>
          </div>
          <div style={{flex: '1 1 300px', display: 'flex', justifyContent: 'center'}}>
             <div style={{background: 'rgba(255,255,255,0.05)', width: '200px', height: '240px', border: '6px solid rgba(255,255,255,0.1)', borderRadius: '30px', position: 'relative'}}>
                <div style={{position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px'}}></div>
                <div style={{position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '30px', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%'}}></div>
                <div style={{marginTop: '40px', padding: '1.5rem', textAlign: 'center'}}>
                   <div style={{width: '60px', height: '60px', background: '#22c55e', borderRadius: '15px', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.3)'}}>
                      <Camera size={30} color="white"/>
                   </div>
                   <div style={{height: '8px', width: '80%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', margin: '0 auto 8px auto'}}></div>
                   <div style={{height: '8px', width: '60%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', margin: '0 auto'}}></div>
                </div>
             </div>
          </div>
       </div>

    </div>
  );
}
