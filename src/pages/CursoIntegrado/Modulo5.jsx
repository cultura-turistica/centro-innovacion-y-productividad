import React, { useState } from 'react';
import { Briefcase, Key, Compass } from 'lucide-react';

export default function Modulo5() {
  const [activeTab, setActiveTab] = useState('value');

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <h3 style={{color: '#055C38', fontSize: '2.5rem', marginBottom: '1rem'}}>Módulo 5: Modelo de Negocio</h3>
       <p style={{color: '#475569', marginBottom: '2rem', fontSize: '1.2rem'}}>Un emprendimiento no es mágico. Necesita una estructura. El modelo Canvas adaptado al turismo rural nos permite ver todas las piezas del rompecabezas en un solo lienzo.</p>
       
       <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
         <button onClick={() => setActiveTab('value')} style={{background: activeTab === 'value' ? '#055C38' : '#e2e8f0', color: activeTab === 'value' ? 'white' : '#475569', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}><Key size={18}/> Propuesta de Valor</button>
         <button onClick={() => setActiveTab('routes')} style={{background: activeTab === 'routes' ? '#F06000' : '#e2e8f0', color: activeTab === 'routes' ? 'white' : '#475569', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}><Compass size={18}/> Canales y Rutas</button>
         <button onClick={() => setActiveTab('ops')} style={{background: activeTab === 'ops' ? '#032968' : '#e2e8f0', color: activeTab === 'ops' ? 'white' : '#475569', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}><Briefcase size={18}/> Operaciones Clave</button>
       </div>

       <div style={{background: 'white', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', minHeight: '250px'}}>
         {activeTab === 'value' && (
           <div className="fade-in">
             <h4 style={{color: '#055C38', fontSize: '1.5rem', marginBottom: '1rem'}}>¿Por qué nos eligen?</h4>
             <p style={{color: '#475569', lineHeight: '1.8'}}>No vendes un recorrido por la montaña; vendes <strong>desconexión urbana y reconexión biocultural</strong>. Tu propuesta de valor es el corazón del negocio (lo que solucionas al turista).</p>
             <div style={{background: '#f0fdf4', padding: '1rem', borderRadius: '10px', marginTop: '1rem', borderLeft: '4px solid #166534'}}>
               💡 <strong>Aplica:</strong> Haz una lista de 3 cosas que hace tu ruta turística que ninguna agencia comercial en la ciudad puede igualar.
             </div>
           </div>
         )}
         {activeTab === 'routes' && (
           <div className="fade-in">
             <h4 style={{color: '#F06000', fontSize: '1.5rem', marginBottom: '1rem'}}>¿Cómo nos encuentran?</h4>
             <p style={{color: '#475569', lineHeight: '1.8'}}>Puedes tener la cascada más hermosa, pero si el acceso es imposible o no existes en Google Maps, no hay negocio. Los Canales de distribución incluyen alianzas con agencias, redes sociales y boca a boca comercial.</p>
           </div>
         )}
         {activeTab === 'ops' && (
           <div className="fade-in">
             <h4 style={{color: '#032968', fontSize: '1.5rem', marginBottom: '1rem'}}>Los Engranajes Invisibles</h4>
             <p style={{color: '#475569', lineHeight: '1.8'}}>Aquí listamos tus Alianzas Clave (transporte local, restaurantes vecinos) y tus Recursos Clave (guías capacitados, registro nacional de turismo RNT, equipos de seguridad). Sin estos engranajes, la operación colapsa a la primera eventualidad.</p>
           </div>
         )}
       </div>
    </div>
  );
}
