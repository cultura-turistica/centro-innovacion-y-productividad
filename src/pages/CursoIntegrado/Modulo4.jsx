import React from 'react';
import { ShieldAlert, Handshake, Target } from 'lucide-react';

export default function Modulo4() {
  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#F06000', fontSize: '2.5rem', marginBottom: '1rem'}}>Módulo 4: Resolución de Conflictos</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px'}}>El conflicto no es el fin del recorrido, es una encrucijada natural. Si las rutas turísticas operan desde y con la comunidad, las tensiones llegarán. Lo importante es tener la hoja de ruta para resolverlas.</p>
       
       <div className="grid-2">
         {/* Tarjeta 1 */}
         <div style={{background: '#fef2f2', border: '2px solid #fecaca', borderRadius: '25px', padding: '2rem'}}>
           <div style={{background: '#ef4444', color: 'white', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
             <ShieldAlert size={30}/>
           </div>
           <h4 style={{fontSize: '1.5rem', color: '#991b1b', marginBottom: '1rem'}}>Comunicación Defensiva</h4>
           <p style={{color: '#7f1d1d', lineHeight: '1.6'}}>El principal error en las asociaciones de turismo es tomar retroalimentación como un ataque personal. Evita asumir intenciones y basar respuestas en posiciones de poder ("aquí siempre se ha hecho así").</p>
         </div>

         {/* Tarjeta 2 */}
         <div style={{background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '25px', padding: '2rem'}}>
           <div style={{background: '#22c55e', color: 'white', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
             <Handshake size={30}/>
           </div>
           <h4 style={{fontSize: '1.5rem', color: '#166534', marginBottom: '1rem'}}>Asertividad Comunitaria</h4>
           <p style={{color: '#14532d', lineHeight: '1.6'}}>La comunicación asertiva expresa necesidades sin anular las del otro. Usa el modelo "Cuando pasa X, yo siento Y, y me gustaría que Z". Escucha para entender, no para contestar.</p>
         </div>
       </div>

       <div style={{background: '#eff6ff', borderRadius: '20px', padding: '2rem', marginTop: '3rem', borderLeft: '8px solid #3b82f6'}}>
         <h4 style={{fontSize: '1.3rem', color: '#1e40af', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}><Target /> Matriz Rápida de Resolución</h4>
         <ul style={{color: '#475569', lineHeight: '2', listStyle: 'none', padding: 0}}>
           <li><strong>1. Identificar:</strong> ¿Cuál es el problema real? (Separa el problema de las personas).</li>
           <li><strong>2. Intereses:</strong> ¿Qué necesita cada parte genuinamente?</li>
           <li><strong>3. Lluvia de Ideas:</strong> Generar escenarios donde ambos puedan ganar algo.</li>
           <li><strong>4. Acuerdo Final:</strong> Escribirlo, firmarlo y establecer compromisos medibles.</li>
         </ul>
       </div>
    </div>
  );
}
