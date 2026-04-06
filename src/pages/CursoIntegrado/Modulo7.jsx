import React from 'react';
import { Compass, BookOpen, Map, LifeBuoy, UtensilsCrossed, ScrollText, Leaf, BookHeart, Smile, Gamepad2, Theater } from 'lucide-react';

export default function Modulo7() {
  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#F06000', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>Módulo 7: Guionaje y Guianza</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center'}}>
         "El guía es el puente invisible entre el destino y el visitante." Un destino sin historia es solo paisaje; es el guía local quien le inyecta el alma biocultural al recorrido.
       </p>
       
       {/* LAS 4 FUNCIONES DEL GUÍA (Con diseño "Blob"/Orgánico fecthing una ilustración) */}
       <div style={{background: '#fff7ed', borderRadius: '30px', padding: '3rem', border: '2px solid #fed7aa', marginBottom: '4rem'}}>
         <h4 style={{textAlign: 'center', color: '#ea580c', fontSize: '1.8rem', marginBottom: '2.5rem'}}>El Rol del Intérprete Local (Ley 300)</h4>
         
         <div className="grid-responsive" style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            {/* Orientar */}
            <div style={{flex: 1, minWidth: '200px', textAlign: 'center'}}>
               <div style={{width: '100px', height: '100px', margin: '0 auto 1rem auto', background: '#f97316', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'border-radius 0.3s ease-in-out'}}>
                 <Compass size={45} strokeWidth={1.5}/>
               </div>
               <h5 style={{color: '#9a3412', fontSize: '1.2rem', fontWeight: 800}}>Orientar</h5>
               <p style={{color: '#7c2d12', fontSize: '0.9rem'}}>Brindar información clara, precisa y directa sobre a dónde vamos y por dónde caminamos.</p>
            </div>

            {/* Instruir */}
            <div style={{flex: 1, minWidth: '200px', textAlign: 'center'}}>
               <div style={{width: '100px', height: '100px', margin: '0 auto 1rem auto', background: '#3b82f6', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'border-radius 0.3s ease-in-out'}}>
                 <BookOpen size={45} strokeWidth={1.5}/>
               </div>
               <h5 style={{color: '#1e40af', fontSize: '1.2rem', fontWeight: 800}}>Educar</h5>
               <p style={{color: '#1e3a8a', fontSize: '0.9rem'}}>Inyectar conocimientos ancestrales al turista y explicarle los peligros biológicos o geográficos de pisar mal.</p>
            </div>

            {/* Conducir */}
            <div style={{flex: 1, minWidth: '200px', textAlign: 'center'}}>
               <div style={{width: '100px', height: '100px', margin: '0 auto 1rem auto', background: '#16a34a', borderRadius: '50% 50% 20% 80% / 25% 80% 20% 75%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'border-radius 0.3s ease-in-out'}}>
                 <Map size={45} strokeWidth={1.5}/>
               </div>
               <h5 style={{color: '#14532d', fontSize: '1.2rem', fontWeight: 800}}>Conducir</h5>
               <p style={{color: '#064e3b', fontSize: '0.9rem'}}>Liderar a la "manada" con respeto y cortesía, sin dejarlos regados por el monte.</p>
            </div>

            {/* Asistir */}
            <div style={{flex: 1, minWidth: '200px', textAlign: 'center'}}>
               <div style={{width: '100px', height: '100px', margin: '0 auto 1rem auto', background: '#eab308', borderRadius: '80% 20% 50% 50% / 50% 50% 80% 20%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'border-radius 0.3s ease-in-out'}}>
                 <LifeBuoy size={45} strokeWidth={1.5}/>
               </div>
               <h5 style={{color: '#854d0e', fontSize: '1.2rem', fontWeight: 800}}>Rescatar</h5>
               <p style={{color: '#713f12', fontSize: '0.9rem'}}>Si alguien se dobla un pie o le da un golpe de calor, el guía tiene que tener lista la reacción de Primeros Auxilios.</p>
            </div>
         </div>
       </div>

       {/* MATRIZ DE NARRATIVA GASTRONÓMICA / HISTÓRICA */}
       <div className="grid-responsive" style={{display: 'flex', gap: '2rem', marginBottom: '4rem'}}>
         
         <div style={{flex: 1, background: 'white', borderRadius: '25px', padding: '2rem', border: '1px solid #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
           <h4 style={{color: '#032968', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}><UtensilsCrossed /> Construye tu Relato (Guionaje)</h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
             {/* Paso 1 */}
             <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
               <h5 style={{color: '#3b82f6', fontWeight: 800, marginBottom: '0.5rem'}}>1. Anatomía Visual</h5>
               <p style={{color: '#475569', fontSize: '0.95rem', margin: 0}}>¿Esa empanada está frita al rescoldo o al carbón? Narra los colores y el humo para que el turista empiece a salivar visualmente.</p>
             </div>
             {/* Paso 2 */}
             <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
               <h5 style={{color: '#f97316', fontWeight: 800, marginBottom: '0.5rem'}}>2. La Semilla Herencia</h5>
               <p style={{color: '#475569', fontSize: '0.95rem', margin: 0}}>Cuéntale al extranjero quién sembró ese alimento. ¿Cómo tu abuelo preparaba la tierra antes de llover?</p>
             </div>
             {/* Paso 3 */}
             <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
               <h5 style={{color: '#16a34a', fontWeight: 800, marginBottom: '0.5rem'}}>3. El Secreto Sagrado</h5>
               <p style={{color: '#475569', fontSize: '0.95rem', margin: 0}}>Acompáñalo del mito. "Esta planta solo la arrancamos en cuarto menguante, porque si no, amarga". <i>Eso nunca lo olvidan.</i></p>
             </div>
           </div>
         </div>

         {/* HERRAMIENTAS ADICIONALES DE NARRATIVA */}
         <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem'}}>
           <div style={{background: '#055C38', color: 'white', borderRadius: '25px', padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
             <h4 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: '#86efac'}}>Técnicas Extra de Guianza</h4>
             
             <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px'}}>
               <li style={{display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px'}}>
                 <ScrollText size={30} color="#bbf7d0"/><span style={{fontSize: '1.1rem'}}>No eches carreta histórica aburrida. Cuenta chismes de las abuelas. Relatos de vida cortos.</span>
               </li>
               <li style={{display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px'}}>
                 <Smile size={30} color="#bbf7d0"/><span style={{fontSize: '1.1rem'}}>Usa humor inteligente, sin llegar a la ofensa ni invadir culturas ajenas.</span>
               </li>
               <li style={{display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px'}}>
                 <Leaf size={30} color="#bbf7d0"/><span style={{fontSize: '1.1rem'}}>Quítale la vista e invoca sus otros sentidos. Hazlo oler flores machacadas, sentir resina.</span>
               </li>
               <li style={{display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px'}}>
                 <Gamepad2 size={30} color="#bbf7d0"/><span style={{fontSize: '1.1rem'}}>Juegos grupales simples rompen el hielo para los turistas tímidos.</span>
               </li>
             </ul>
           </div>
         </div>
       </div>

    </div>
  );
}
