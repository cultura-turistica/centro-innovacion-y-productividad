import React, { useState } from 'react';
import { Users, ClipboardList, Diamond, HeartHandshake, UserCircle, Package, Truck, Receipt, Coins, Info } from 'lucide-react';

const canvasData = [
  { id: '1', title: 'Segmentos de Clientes', icon: <UserCircle size={24}/>, color: '#9333ea', desc: '¿Para quién estamos creando valor? ¿Quiénes son nuestros turistas más importantes? (Familias, mochileros, adultos mayores).' },
  { id: '2', title: 'Propuesta de Valor', icon: <Diamond size={24}/>, color: '#ef4444', desc: '¿Qué problema solucionamos al turista? No vendes un viaje, vendes desconexión y paz natural.' },
  { id: '3', title: 'Canales', icon: <Truck size={24}/>, color: '#f97316', desc: '¿Cómo entregamos nuestra propuesta de valor al turista? ¿Agencias, redes sociales, boca a boca?' },
  { id: '4', title: 'Relación con Clientes', icon: <HeartHandshake size={24}/>, color: '#ec4899', desc: '¿Qué tipo de relación espera el turista? ¿Trato automatizado o personalizado/familiar?' },
  { id: '5', title: 'Fuentes de Ingresos', icon: <Coins size={24}/>, color: '#16a34a', desc: '¿Por qué valor están dispuestos a pagar los turistas? ¿Cómo pagarán? (Paquetes, souvenirs, propinas).' },
  { id: '6', title: 'Recursos Clave', icon: <Package size={24}/>, color: '#3b82f6', desc: 'Bienes físicos, intelectuales y económicos que tu negocio requiere para funcionar (Guías, senderos seguros).' },
  { id: '7', title: 'Actividades Clave', icon: <ClipboardList size={24}/>, color: '#f59e0b', desc: '¿Qué acciones diarias o semanales debes ejecutar obligatoriamente para que la ruta no fracase?' },
  { id: '8', title: 'Socios Clave', icon: <Users size={24}/>, color: '#032968', desc: 'Aliados que complementan lo que tú no tienes (Transportistas, restaurantes cercanos, alcaldías).' },
  { id: '9', title: 'Estructura de Costos', icon: <Receipt size={24}/>, color: '#ca8a04', desc: 'Gastos fijos y variables más importantes. ¿Qué recursos son los más caros de mantener en tu ruta?' }
];

export default function Modulo5() {
  const [activeSquare, setActiveSquare] = useState(canvasData[1]);

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#055C38', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>Módulo 5: El Lienzo Canvas</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center'}}>
         Un emprendimiento biocultural no sobrevive de la pasión, necesita estructura. 
         El <strong>Modelo Canvas</strong> te permite ver las 9 piezas de tu negocio en una sola pantalla. Toca cualquier bloque para investigarlo.
       </p>
       
       {/* CONTENEDOR CANVAS ADAPTATIVO */}
       <div className="grid-responsive" style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
         
         {/* PANEL DERECHO DE EXPLICACIÓN DETALLADA (Sticky/Fijo) */}
         <div style={{flex: '1', minWidth: '300px'}}>
            <div style={{background: 'white', border: `3px solid ${activeSquare.color}`, borderRadius: '25px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'sticky', top: '20px'}}>
              <div style={{width: '60px', height: '60px', borderRadius: '15px', background: `${activeSquare.color}15`, color: activeSquare.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
                {activeSquare.icon}
              </div>
              <h4 style={{fontSize: '1.8rem', color: activeSquare.color, marginBottom: '1rem'}}>{activeSquare.title}</h4>
              <p style={{color: '#475569', lineHeight: '1.8', fontSize: '1.1rem'}}>{activeSquare.desc}</p>
              
              <div style={{marginTop: '2rem', background: '#f8fafc', padding: '1rem', borderRadius: '10px', fontSize: '0.9rem', color: '#64748b', display: 'flex', gap: '10px'}}>
                <Info size={20} style={{flexShrink: 0}} color="#94a3b8"/>
                <span><i>Selecciona otro bloque en el esquema izquierdo para estudiarlo. Recuerda dibujar esto con Post-its en tu organización.</i></span>
              </div>
            </div>
         </div>

         {/* PANEL IZQUIERDO DE 9 BLOQUES (GRID CSS) */}
         <div style={{flex: '2', minWidth: '350px'}}>
           <div style={{display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gridTemplateRows: 'repeat(4, auto)', gap: '10px'}}>
             
             {/* SOCIETIES / ACTIVIDADES (Izquierda del Canvas) */}
             <div onClick={() => setActiveSquare(canvasData[7])} style={{gridColumn: '1 / 3', gridRow: '1 / 4', background: activeSquare.id === '8' ? `${canvasData[7].color}15` : 'white', border: `2px solid ${canvasData[7].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[7].color}}>{canvasData[7].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Socios<br/>Clave</p>
             </div>

             <div onClick={() => setActiveSquare(canvasData[6])} style={{gridColumn: '3 / 5', gridRow: '1 / 3', background: activeSquare.id === '7' ? `${canvasData[6].color}15` : 'white', border: `2px solid ${canvasData[6].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[6].color}}>{canvasData[6].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Actividades<br/>Clave</p>
             </div>

             <div onClick={() => setActiveSquare(canvasData[5])} style={{gridColumn: '3 / 5', gridRow: '3 / 4', background: activeSquare.id === '6' ? `${canvasData[5].color}15` : 'white', border: `2px solid ${canvasData[5].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[5].color}}>{canvasData[5].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Recursos<br/>Clave</p>
             </div>

             {/* PROPOSICION DE VALOR (Centro del Canvas) */}
             <div onClick={() => setActiveSquare(canvasData[1])} style={{gridColumn: '5 / 7', gridRow: '1 / 4', background: activeSquare.id === '2' ? `${canvasData[1].color}15` : 'white', border: `2px solid ${canvasData[1].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[1].color}}>{canvasData[1].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155', fontSize: '1.2rem'}}>Propuesta<br/>de Valor</p>
             </div>

             {/* RELACION / CANALES (Derecha del Canvas) */}
             <div onClick={() => setActiveSquare(canvasData[3])} style={{gridColumn: '7 / 9', gridRow: '1 / 3', background: activeSquare.id === '4' ? `${canvasData[3].color}15` : 'white', border: `2px solid ${canvasData[3].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[3].color}}>{canvasData[3].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Relación<br/>Clientes</p>
             </div>

             <div onClick={() => setActiveSquare(canvasData[2])} style={{gridColumn: '7 / 9', gridRow: '3 / 4', background: activeSquare.id === '3' ? `${canvasData[2].color}15` : 'white', border: `2px solid ${canvasData[2].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[2].color}}>{canvasData[2].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Canales</p>
             </div>

             {/* SEGMENTOS (Extremo Derecho) */}
             <div onClick={() => setActiveSquare(canvasData[0])} style={{gridColumn: '9 / 11', gridRow: '1 / 4', background: activeSquare.id === '1' ? `${canvasData[0].color}15` : 'white', border: `2px solid ${canvasData[0].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[0].color}}>{canvasData[0].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Segmentos<br/>Clientes</p>
             </div>

             {/* COSTOS (Abajo Izquierda) */}
             <div onClick={() => setActiveSquare(canvasData[8])} style={{gridColumn: '1 / 6', gridRow: '4 / 5', marginTop: '10px', background: activeSquare.id === '9' ? `${canvasData[8].color}15` : 'white', border: `2px solid ${canvasData[8].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[8].color}}>{canvasData[8].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Estructura de Costos</p>
             </div>

             {/* INGRESOS (Abajo Derecha) */}
             <div onClick={() => setActiveSquare(canvasData[4])} style={{gridColumn: '6 / 11', gridRow: '4 / 5', marginTop: '10px', background: activeSquare.id === '5' ? `${canvasData[4].color}15` : 'white', border: `2px solid ${canvasData[4].color}`, borderRadius: '15px', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s'}}>
                <div style={{color: canvasData[4].color}}>{canvasData[4].icon}</div>
                <p style={{fontWeight: 800, marginTop: '10px', color: '#334155'}}>Fuentes de Ingresos</p>
             </div>

           </div>
         </div>

       </div>

    </div>
  );
}
