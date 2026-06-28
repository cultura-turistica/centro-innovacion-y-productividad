import React, { useState } from 'react';
import { 
  BarChart3, 
  CircleDollarSign, 
  HandCoins, 
  TrendingUp, 
  TrendingDown, 
  Calculator, 
  Target, 
  ShieldCheck, 
  Lightbulb, 
  Info, 
  ChevronRight,
  Database,
  PieChart,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function Modulo11() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { 
      id: 1, 
      title: "Costos Fijos", 
      desc: "Lo que pagas sí o sí.", 
      items: ["Personal", "Infraestructura", "Seguros", "Marketing"],
      formula: "Total / Clientes Mensuales",
      color: "#1e40af"
    },
    { 
      id: 2, 
      title: "Costos Variables", 
      desc: "Sube según los clientes.", 
      items: ["Insumos", "Transporte", "Materiales", "Entradas"],
      formula: "Costo x Persona",
      color: "#1e40af"
    },
    { 
      id: 3, 
      title: "Costo Unitario", 
      desc: "Lo que te cuesta un cliente.", 
      formula: "Fijos + Variables",
      color: "#1e40af"
    },
    { 
      id: 4, 
      title: "Margen", 
      desc: "Tu ganancia neta.", 
      formula: "Costo Unitario x %Margen",
      color: "#1e40af"
    }
  ];

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'linear-gradient(to bottom, #f8fafc 0%, white 100%)'}}>
       
       {/* HEADER DEL MÓDULO */}
       <div style={{textAlign: 'center', marginBottom: '4rem'}}>
         <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px', background: '#dbeafe', borderRadius: '30px', marginBottom: '1.5rem', color: '#1e40af', transform: 'rotate(-5deg)', boxShadow: '0 15px 35px rgba(30, 64, 175, 0.15)'}}>
           <BarChart3 size={45} style={{transform: 'rotate(5deg)'}} />
         </div>
         <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 900}}>Módulo 11: Costos y Precios</h3>
         <p style={{color: '#475569', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
           "El precio correcto no es el más barato, sino el que refleja tu valor." Dominaremos el arte de cobrar lo justo para que tu ruta crezca y se vuelva <strong style={{color: '#1e40af'}}>invencible</strong>.
         </p>
       </div>
       
       {/* DIÁLOGO NARRATIVO REVISADO */}
       <div style={{background: 'white', border: '1px solid #e2e8f0', borderRadius: '35px', padding: '2.5rem', marginBottom: '5rem', position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center'}}>
          <div style={{flex: '1 1 400px'}}>
             <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
               <div style={{background: '#1e40af', padding: '8px', borderRadius: '12px', color: 'white'}}><HandCoins size={24}/></div>
               <h4 style={{fontSize: '1.5rem', color: '#1e40af', fontWeight: 800}}>El Dilema de GOGO</h4>
             </div>
             <p style={{fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '1.5rem'}}>
               <i>"GOGO siempre nos repite: Si no sabes cuánto te cuesta despertar cada mañana en tu negocio, estás operando a ciegas. Muchos emprendedores creen que tienen 'ganancia' porque tienen plata en el bolsillo, pero olvidan que esa plata es para pagar la luz del próximo mes."</i>
             </p>
             <div style={{display: 'flex', gap: '10px'}}>
               <img src="https://api.dicebear.com/9.x/micah/svg?seed=Camila&backgroundColor=ffdfbf" style={{width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #e2e8f0'}} alt="Camila"/>
               <img src="https://api.dicebear.com/9.x/micah/svg?seed=Javier&backgroundColor=b6e3f4" style={{width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #e2e8f0'}} alt="Javier"/>
             </div>
          </div>
          <div style={{flex: '1 1 250px', display: 'flex', justifyContent: 'center'}}>
             <div style={{width: '100%', height: '180px', background: '#f8fafc', borderRadius: '25px', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Calculator size={80} color="#cbd5e1" />
             </div>
          </div>
       </div>

       {/* FACTORES DE INFLUENCIA (TARJETAS VARIADAS) */}
       <div style={{marginBottom: '5rem'}}>
          <h4 style={{fontSize: '2rem', color: '#032968', textAlign: 'center', marginBottom: '3rem', fontWeight: 800}}>Factores de Inteligencia de Mercado</h4>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem'}}>
             
             {[
               { icon: <Database size={30}/>, title: "Modelo de Negocio", desc: "Define si eres masivo o exclusivo.", bg: "#eff6ff", color: "#1e40af" },
               { icon: <ShieldCheck size={30}/>, title: "Propuesta de Valor", desc: "Lo que el cliente no encuentra en otro lado.", bg: "#f0fdf4", color: "#166534" },
               { icon: <TrendingUp size={30}/>, title: "Demanda Temporal", desc: "Temporada alta vs temporada baja.", bg: "#fff7ed", color: "#9a3412" },
               { icon: <CircleDollarSign size={30}/>, title: "Valor Percibido", desc: "Lo que el cliente cree que vale tu servicio.", bg: "#f5f3ff", color: "#6b21a8" }
             ].map((f, i) => (
               <div key={i} className="hover-lift" style={{background: f.bg, padding: '2rem', borderRadius: '30px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.05)'}}>
                  <div style={{color: f.color, marginBottom: '1rem', display: 'inline-block'}}>{f.icon}</div>
                  <h5 style={{fontSize: '1.25rem', color: f.color, fontWeight: 800, marginBottom: '0.8rem'}}>{f.title}</h5>
                  <p style={{fontSize: '0.95rem', color: '#475569', margin: 0, lineHeight: '1.5'}}>{f.desc}</p>
               </div>
             ))}

          </div>
       </div>

       {/* SIMULADOR DE PLANTILLA (ESTILO DASHBOARD) */}
       <div style={{background: '#032968', borderRadius: '45px', padding: '4rem 2rem', color: 'white', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 60px rgba(3, 41, 104, 0.3)', marginBottom: '5rem'}}>
          <div style={{position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.1}}><PieChart size={250}/></div>
          
          <div style={{textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1}}>
             <h4 style={{fontSize: '2.2rem', color: '#dbeafe', fontWeight: 900}}>Ruta Maestra hacia el Precio Real</h4>
             <p style={{color: '#93c5fd', fontSize: '1.2rem'}}>Sigue nuestro algoritmo de 4 pasos para no perder dinero jamás.</p>
          </div>

          <div style={{maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', position: 'relative', zIndex: 1}}>
             {steps.map(step => (
               <div key={step.id} onClick={() => setActiveStep(step.id)} style={{
                 background: activeStep === step.id ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                 border: activeStep === step.id ? '2px solid #60a5fa' : '2px solid rgba(255,255,255,0.1)',
                 borderRadius: '30px', padding: '2rem', cursor: 'pointer', transition: 'all 0.3s'
               }}>
                  <div style={{fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem', fontWeight: 800}}>PASO 0{step.id}</div>
                  <h5 style={{fontSize: '1.3rem', fontWeight: 800, color: '#bfdbfe', marginBottom: '0.5rem'}}>{step.title}</h5>
                  <p style={{fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.4', marginBottom: '1.5rem'}}>{step.desc}</p>
                  <div style={{background: 'rgba(0,0,0,0.2)', padding: '10px 15px', borderRadius: '12px', fontSize: '0.85rem'}}>
                     <ArrowUpRight size={14} style={{display: 'inline', marginRight: '5px'}}/> {step.formula}
                  </div>
               </div>
             ))}
          </div>

          {/* DETALLE DEL PASO SELECCIONADO */}
          <div style={{marginTop: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1}}>
             {steps.find(s => s.id === activeStep)?.items ? (
               <div className="fade-in">
                  <h5 style={{fontSize: '1.4rem', color: '#60a5fa', marginBottom: '1.5rem', fontWeight: 800}}>Cálculo Incluído:</h5>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                     {steps.find(s => s.id === activeStep).items.map((item, idx) => (
                       <div key={idx} style={{background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '100px', fontSize: '1rem'}}>{item}</div>
                     ))}
                  </div>
               </div>
             ) : (
               <div className="fade-in" style={{textAlign: 'center'}}>
                  <p style={{fontSize: '1.2rem', opacity: 0.8}}>Este paso integra los cálculos de los pasos anteriores para darte el resultado final.</p>
                  <div style={{fontSize: '2rem', fontWeight: 900, color: '#fde047', marginTop: '1rem'}}>Punto de Equilibrio ✓</div>
               </div>
             )}
          </div>
       </div>

       {/* ESTRATEGIAS DE PRECIO (GRID MODERNO) */}
       <div style={{marginBottom: '5rem'}}>
          <h4 style={{fontSize: '2rem', color: '#032968', textAlign: 'center', marginBottom: '3.5rem', fontWeight: 800}}>Estrategias de Captación</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem'}}>
              
              <div style={{flex: '1 1 400px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '35px', padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.02)'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                    <div style={{width: '50px', height: '50px', background: '#fef3c7', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706'}}><Target size={24}/></div>
                    <h5 style={{fontSize: '1.5rem', fontWeight: 800, color: '#92400e'}}>Penetración Directa</h5>
                 </div>
                 <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.6'}}>Precio bajo inicial para ganar mercado rápidamente. Úsalo cuando lanzas una <strong style={{color: '#b45309'}}>Nueva Escapada</strong> en tu ruta.</p>
              </div>

              <div style={{flex: '1 1 400px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '35px', padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.02)'}}>
                 <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                    <div style={{width: '50px', height: '50px', background: '#ede9fe', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed'}}><Sparkles size={24}/></div>
                    <h5 style={{fontSize: '1.5rem', fontWeight: 800, color: '#5b21b6'}}>Descremado Premium</h5>
                 </div>
                 <p style={{color: '#475569', fontSize: '1.05rem', lineHeight: '1.6'}}>Precio alto para segmentos que buscan exclusividad. Ideal para cenas románticas o <strong style={{color: '#6d28d9'}}>Tours Privados</strong> bajo las estrellas.</p>
              </div>

          </div>
       </div>

       {/* EL CIERRE DE GOGO (ESTILO CRÍTICO) */}
       <div style={{background: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)', borderRadius: '40px', padding: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: '-20px', top: '-20px', opacity: 0.1}}><Calculator size={200} color="#854d0e"/></div>
          <div style={{flex: '1 1 400px', position: 'relative', zIndex: 1}}>
             <h4 style={{fontSize: '2rem', color: '#854d0e', fontWeight: 900, marginBottom: '1.5rem'}}>Última Llamada de GOGO 💡</h4>
             <p style={{color: '#92400e', fontSize: '1.15rem', lineHeight: '1.7', fontWeight: 500}}>
                "No olvides incluir impuestos, comisiones de agencias (15% típico) y un fondo de contingencia en tu precio final. Si olvidas el fondo de contingencia, cuando se rompa una llanta de la Van, el dinero saldrá de tu comida."
             </p>
          </div>
          <div style={{flex: '1 1 300px', textAlign: 'center', position: 'relative', zIndex: 1}}>
             <div style={{background: 'white', width: '220px', height: '220px', borderRadius: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(133, 77, 14, 0.15)', border: '4px solid #fde047'}}>
                <HandCoins size={100} color="#ca8a04" />
             </div>
          </div>
       </div>

    </div>
  );
}
