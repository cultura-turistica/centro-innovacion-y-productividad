import React from 'react';
import { UsersRound, Sparkles, MapPin, Target, Wallet, LightbulbOff, Briefcase, CheckCircle2, TrendingUp, User } from 'lucide-react';

export default function Modulo6() {
  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>Módulo 6: Segmentación de Mercado</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center'}}>
         No vendes a "todos". Si intentas agradar a todos los turistas del mundo, tu experiencia será genérica y aburrida.
         Segmentar significa encontrar exactamente a tu <strong>Turista Ideal</strong>.
       </p>
       
       {/* POR QUÉ ES IMPORTANTE */}
       <div className="grid-responsive" style={{display: 'flex', gap: '2rem', marginBottom: '4rem'}}>
         <div style={{flex: 1, background: '#032968', borderRadius: '25px', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
           <h4 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#60a5fa'}}><Sparkles size={28}/> El Poder del Foco</h4>
           <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
             Dividir un mercado masivo en grupos más pequeños nos permite crear campañas precisas. Gastamos menos dinero en publicidad inútil y nos convertimos en favoritos absolutos de un grupo selecto.
           </p>
           <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><CheckCircle2 color="#60a5fa"/> Estrategias más baratas</div>
           <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px'}}><CheckCircle2 color="#60a5fa"/> Mayor rentabilidad natural</div>
         </div>

         {/* INFOGRAFIA DATOS DEL TURISTA EN COLOMBIA */}
         <div style={{flex: 1, background: '#f0fdf4', border: '3px solid #166534', borderRadius: '25px', padding: '2rem'}}>
           <h4 style={{fontSize: '1.5rem', color: '#166534', marginBottom: '1rem'}}><TrendingUp /> El Turista Promedio (Colombia)</h4>
           <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'}}>
             <div style={{background: 'white', padding: '1rem', borderRadius: '15px'}}><span style={{fontWeight: 800, color: '#166534', display: 'block', fontSize: '1.2rem'}}>30-60</span> Años de Edad</div>
             <div style={{background: 'white', padding: '1rem', borderRadius: '15px'}}><span style={{fontWeight: 800, color: '#166534', display: 'block', fontSize: '1.2rem'}}>8 Días</span> Estancia Promedio</div>
             <div style={{background: 'white', padding: '1rem', borderRadius: '15px'}}><span style={{fontWeight: 800, color: '#166534', display: 'block', fontSize: '1.2rem'}}>$1,600</span> Gasto Aprox (USD)</div>
             <div style={{background: 'white', padding: '1rem', borderRadius: '15px'}}><span style={{fontWeight: 800, color: '#166534', display: 'block', fontSize: '1.2rem'}}>Dic-Abr</span> Temporada Alta</div>
           </div>
         </div>
       </div>

       {/* MAPA BUYER PERSONA */}
       <div style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: '25px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
         <h4 style={{color: '#F06000', fontSize: '2rem', textAlign: 'center', marginBottom: '1rem'}}>Ficha: Diseño de Buyer Persona</h4>
         <p style={{color: '#64748b', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto'}}>El Buyer Persona es un perfil semi-ficticio. ¡Ponle un nombre y cara inventados para entender qué busca en tu ruta!</p>

         <div className="grid-responsive" style={{display: 'flex', gap: '2rem'}}>
           
           {/* Lado Datos Biográficos */}
           <div style={{flex: 1, background: '#eff6ff', borderRadius: '20px', padding: '2rem'}}>
             <div style={{width: '60px', height: '60px', background: '#3b82f6', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
               <User size={30}/>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
               <div style={{background: 'white', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}><UsersRound color="#3b82f6"/> <strong>Nombre:</strong> "Carlos, el Aventurero Rápido"</div>
               <div style={{background: 'white', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}><Target color="#3b82f6"/> <strong>Edad:</strong> 28 - 35 años</div>
               <div style={{background: 'white', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}><MapPin color="#3b82f6"/> <strong>Origen:</strong> Bogotá, D.C.</div>
               <div style={{background: 'white', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}><Briefcase color="#3b82f6"/> <strong>Ocupación:</strong> Ingeniero / Oficinista</div>
               <div style={{background: 'white', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px'}}><Wallet color="#3b82f6"/> <strong>Ingreso:</strong> Medio-Alto (Dispuesto a pagar confort)</div>
             </div>
           </div>

           {/* Lado Psicología */}
           <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
             
             <div style={{background: '#fef2f2', padding: '1.5rem', borderLeft: '5px solid #ef4444', borderRadius: '0 15px 15px 0'}}>
                <h5 style={{fontWeight: 800, color: '#991b1b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}><LightbulbOff size={20}/> Dolores y Dudas</h5>
                <p style={{color: '#7f1d1d', margin: 0}}>Le estresa la ciudad. Teme que la ruta rural no tenga señal celular o sea peligrosa. No quiere recorridos de más de 3 horas.</p>
             </div>

             <div style={{background: '#fff7ed', padding: '1.5rem', borderLeft: '5px solid #f97316', borderRadius: '0 15px 15px 0'}}>
                <h5 style={{fontWeight: 800, color: '#9a3412', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}><Sparkles size={20}/> Intereses (Qué Busca)</h5>
                <p style={{color: '#7c2d12', margin: 0}}>Busca fotos perfectas para Instagram, comida abundante tradicional y adrenalina segura que lo desconecte de la oficina el fin de semana.</p>
             </div>

             <div style={{background: '#f0fdf4', padding: '1.5rem', borderLeft: '5px solid #16a34a', borderRadius: '0 15px 15px 0'}}>
                <h5 style={{fontWeight: 800, color: '#166534', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}><CheckCircle2 size={20}/> Nuestro Antídoto</h5>
                <p style={{color: '#14532d', margin: 0}}>Ofrecerle un "Escape Express": 2 horas de sendero intenso, rematado con sancocho leño en un mirador instagrameable. Se vende en combo.</p>
             </div>

           </div>

         </div>

       </div>

    </div>
  );
}
