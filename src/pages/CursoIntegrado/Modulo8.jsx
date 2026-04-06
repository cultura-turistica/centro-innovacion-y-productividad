import React, { useState } from 'react';
import { PiggyBank, TrendingUp, TrendingDown, Scale, Receipt, PiggyBank as Pig, Wallet, Info, FileSpreadsheet } from 'lucide-react';

export default function Modulo8() {
  const [activeTab, setActiveTab] = useState('ingresos');

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>Módulo 8: Finanzas Bioculturales</h3>
       <p style={{color: '#475569', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center'}}>
         "El dinero es una herramienta, no un fin." Si no separas la plata del mercado de tu casa de la plata del transporte de los turistas, la ruta turística se comerá tus ahorros sin que te des cuenta.
       </p>
       
       {/* Finanzas Básicas */}
       <div className="grid-responsive" style={{display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '4rem'}}>
          
          <div style={{flex: 1, minWidth: '220px', background: 'white', borderRadius: '25px', padding: '2rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: '6px solid #16a34a'}}>
             <div style={{width: '90px', height: '90px', margin: '0 auto 1.5rem auto', background: '#dcfce7', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', transition: 'border-radius 0.3s'}}>
               <TrendingUp size={45}/>
             </div>
             <h4 style={{fontSize: '1.4rem', color: '#14532d', marginBottom: '0.5rem'}}>Ingresos</h4>
             <p style={{color: '#475569', fontSize: '0.95rem'}}>Entrada de flujo constante. Salarios, ventas de experiencias y venta de artesanías/souvenirs.</p>
          </div>

          <div style={{flex: 1, minWidth: '220px', background: 'white', borderRadius: '25px', padding: '2rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: '6px solid #ea580c'}}>
             <div style={{width: '90px', height: '90px', margin: '0 auto 1.5rem auto', background: '#ffedd5', borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', transition: 'border-radius 0.3s'}}>
               <TrendingDown size={45}/>
             </div>
             <h4 style={{fontSize: '1.4rem', color: '#9a3412', marginBottom: '0.5rem'}}>Gastos</h4>
             <p style={{color: '#475569', fontSize: '0.95rem'}}>El sudor del dinero. Insumos para la comida, pagos a guías y marketing de la ruta.</p>
          </div>

          <div style={{flex: 1, minWidth: '220px', background: 'white', borderRadius: '25px', padding: '2rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: '6px solid #3b82f6'}}>
             <div style={{width: '90px', height: '90px', margin: '0 auto 1.5rem auto', background: '#dbeafe', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', transition: 'border-radius 0.3s'}}>
               <PiggyBank size={45}/>
             </div>
             <h4 style={{fontSize: '1.4rem', color: '#1e40af', marginBottom: '0.5rem'}}>Ahorros Fijos</h4>
             <p style={{color: '#475569', fontSize: '0.95rem'}}>El seguro de vida de la ruta. Dinero retenido que permite sortear los meses de temporada baja sin morir de hambre.</p>
          </div>

       </div>

       {/* ALERTA CRITICA DE EXPERTO */}
       <div style={{background: '#fef2f2', padding: '2rem', borderRadius: '20px', borderLeft: '6px solid #ef4444', marginBottom: '4rem', display: 'flex', gap: '20px', alignItems: 'center'}}>
          <div style={{background: '#ef4444', padding: '15px', borderRadius: '50%', color: 'white', flexShrink: 0}}>
             <Scale size={35}/>
          </div>
          <div>
            <h4 style={{color: '#991b1b', fontSize: '1.4rem', marginBottom: '0.5rem'}}>La Regla de Oro</h4>
            <p style={{color: '#7f1d1d', margin: 0, fontSize: '1.1rem'}}>Jamás confundan las finanzas personales con las finanzas del emprendimiento. Pónganse un sueldo fijo como guías o anfitriones, pero prohíban estrictamente cruzar dineros extraídos de la actividad para solventar crisis hogareñas repentinas.</p>
          </div>
       </div>

       {/* CONSTRUCTOR DE PRESUPUESTOS DIDÁCTICO */}
       <h4 style={{color: '#055C38', fontSize: '2rem', textAlign: 'center', marginBottom: '1rem'}}>Entendiendo el Flujo (Ejemplo Didáctico)</h4>
       <p style={{textAlign: 'center', color: '#64748b', marginBottom: '2rem'}}>
         Antes de ir a la herramienta del Centro de Datos a meter números, debes comprender cómo se comportan esos rubros en la vida real. Observa este ejemplo ficticio:
       </p>

       <div style={{background: 'white', border: '1px solid #e2e8f0', borderRadius: '25px', overflow: 'hidden', maxWidth: '900px', margin: '0 auto', boxShadow: '0 10px 40px rgba(0,0,0,0.06)'}}>
         
         <div style={{display: 'flex', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap'}}>
            <button onClick={() => setActiveTab('ingresos')} style={{flex: 1, padding: '1.5rem', background: activeTab === 'ingresos' ? '#f0fdf4' : 'transparent', border: 'none', borderBottom: activeTab === 'ingresos' ? '4px solid #16a34a' : '4px solid transparent', cursor: 'pointer', color: activeTab === 'ingresos' ? '#14532d' : '#64748b', fontWeight: 800, fontSize: '1.1rem', transition: 'all 0.3s'}}><Wallet size={20} style={{marginRight: '8px', verticalAlign: 'middle'}}/>Ingresos Base</button>
            <button onClick={() => setActiveTab('gastosf')} style={{flex: 1, padding: '1.5rem', background: activeTab === 'gastosf' ? '#fef2f2' : 'transparent', border: 'none', borderBottom: activeTab === 'gastosf' ? '4px solid #dc2626' : '4px solid transparent', cursor: 'pointer', color: activeTab === 'gastosf' ? '#991b1b' : '#64748b', fontWeight: 800, fontSize: '1.1rem', transition: 'all 0.3s'}}><Receipt size={20} style={{marginRight: '8px', verticalAlign: 'middle'}}/>Gastos Fijos</button>
            <button onClick={() => setActiveTab('gastosv')} style={{flex: 1, padding: '1.5rem', background: activeTab === 'gastosv' ? '#fff7ed' : 'transparent', border: 'none', borderBottom: activeTab === 'gastosv' ? '4px solid #ea580c' : '4px solid transparent', cursor: 'pointer', color: activeTab === 'gastosv' ? '#9a3412' : '#64748b', fontWeight: 800, fontSize: '1.1rem', transition: 'all 0.3s'}}><Receipt size={20} style={{marginRight: '8px', verticalAlign: 'middle'}}/>Gastos Variables</button>
            <button onClick={() => setActiveTab('utilidad')} style={{flex: 1, padding: '1.5rem', background: activeTab === 'utilidad' ? '#eff6ff' : 'transparent', border: 'none', borderBottom: activeTab === 'utilidad' ? '4px solid #2563eb' : '4px solid transparent', cursor: 'pointer', color: activeTab === 'utilidad' ? '#1e40af' : '#64748b', fontWeight: 800, fontSize: '1.1rem', transition: 'all 0.3s'}}><Pig size={20} style={{marginRight: '8px', verticalAlign: 'middle'}}/>Resultado</button>
         </div>

         <div style={{padding: '3rem', minHeight: '300px'}}>
             {activeTab === 'ingresos' && (
                <div className="fade-in">
                  <h4 style={{color: '#16a34a', fontSize: '1.8rem', marginBottom: '1rem'}}>El Efectivo Que Entra (Ventas)</h4>
                  <p style={{color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Supongamos que este mes proyectaste vender 4 paquetes turísticos. Esto representa el 100% de la torta inicial.</p>
                  <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#166534'}}>
                       <span>🎫 Venta: 4 Recorridos Guiados</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Mes a Mes</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#166534'}}>
                       <span>🛏️ Venta: Hospedaje de 2 Días</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Mes a Mes</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: '#166534'}}>
                       <span>🍲 Venta: Almuerzos Extra</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Temporadas</strong>
                     </div>
                  </div>
                </div>
             )}

             {activeTab === 'gastosf' && (
                <div className="fade-in">
                  <h4 style={{color: '#dc2626', fontSize: '1.8rem', marginBottom: '1rem'}}>El Monstruo Anclado (Gastos Fijos)</h4>
                  <p style={{color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Este es el dinero peligroso. Tienes que pagarlo llegue o no llegue ni un solo turista a recorrer la montaña en todo un mes.</p>
                  <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#991b1b'}}>
                       <span>🏠 Arriendo / Pago Plataforma Web</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Obligatorio</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#991b1b'}}>
                       <span>🧑‍🌾 Seguros de Riesgo Médicos</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Obligatorio</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: '#991b1b'}}>
                       <span>💻 Internet y Plan Celular para Redes</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Obligatorio</strong>
                     </div>
                  </div>
                </div>
             )}

             {activeTab === 'gastosv' && (
                <div className="fade-in">
                  <h4 style={{color: '#ea580c', fontSize: '1.8rem', marginBottom: '1rem'}}>Lo Que Sube y Baja (Gastos Variables)</h4>
                  <p style={{color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem'}}>Este rubro no es peligroso porque solo sube de precio cuando vienen muchos turistas (es decir, cuando a la vez ganaste mucho dinero ese mes).</p>
                  <div style={{background: '#f8fafc', padding: '1.5rem', borderRadius: '15px'}}>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#9a3412'}}>
                       <span>🥘 Compra de Ingredientes Extra para sancocho</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Fluctúa</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed #cbd5e1', color: '#9a3412'}}>
                       <span>🚙 Pago de Transporte (Vans extra)</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Fluctúa</strong>
                     </div>
                     <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: '#9a3412'}}>
                       <span>🔦 Compra de linternas de reemplazo por daños</span><strong style={{minWidth: '90px', textAlign: 'right'}}>Fluctúa</strong>
                     </div>
                  </div>
                </div>
             )}

             {activeTab === 'utilidad' && (
                <div className="fade-in">
                  <h4 style={{color: '#2563eb', fontSize: '1.8rem', marginBottom: '1rem'}}>La Fórmula Sagrada (Rentabilidad)</h4>
                  <p style={{color: '#475569', fontSize: '1.1rem', marginBottom: '1.5rem'}}>No confundas la plata que te pasaron por Nequi o Efectivo con "Ganancias Tuyas". Antes de celebrar, tienes que restar los rubros anteriores.</p>
                  <div style={{background: '#eff6ff', padding: '2rem', borderRadius: '15px', textAlign: 'center', border: '2px dashed #93c5fd'}}>
                     <h5 style={{fontSize: '1.5rem', color: '#1e40af'}}>GANANCIA NETA REAL =</h5>
                     <p style={{fontSize: '1.2rem', color: '#3b82f6', fontWeight: 'bold'}}>[ TODOS TUS INGRESOS ] <span style={{color: '#dc2626'}}>- [ TODOS TUS GASTOS ]</span></p>
                  </div>
                  
                  <div style={{marginTop: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '15px', border: '1px solid #cbd5e1', display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <div style={{background: '#055C38', color: 'white', padding: '10px', borderRadius: '10px', flexShrink: 0}}><FileSpreadsheet size={28}/></div>
                    <div>
                      <h5 style={{color: '#055C38', fontSize: '1.1rem', marginBottom: '0.2rem'}}>¿Listo para la magia?</h5>
                      <p style={{color: '#475569', margin: 0, fontSize: '0.95rem'}}>En la Fase Práctica (Menú Herramientas / Centro de Datos), encontrarás una Calculadora Interactiva Automática donde sí meterás tus números reales para obtener tu porcentaje de ganancias exacto.</p>
                    </div>
                  </div>
                </div>
             )}

         </div>
       </div>

    </div>
  );
}
