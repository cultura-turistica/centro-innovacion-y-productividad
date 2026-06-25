import React from 'react';

// Este componente inyecta el HTML heredado pero limpia y aplica nuestros nuevos estilos a traves de CSS global.
export default function LegacyRenderer({ moduleData }) {
  if (!moduleData) return null;

  return (
    <div className="fade-in" style={{padding: 'clamp(1.5rem, 5vw, 3rem)'}}>
       <div className="title-pill mb-4" style={{background: 'rgba(5,92,56,0.1)', color: '#055C38'}}>
          Contenido Adaptado
       </div>
       <h3 style={{color: '#032968', fontSize: '2.5rem', marginBottom: '1rem'}}>{moduleData.title}</h3>
       
       <div 
         className="legacy-content-wrapper" 
         dangerouslySetInnerHTML={{ __html: moduleData.html }} 
         style={{marginTop: '2rem'}}
       />
    </div>
  );
}
