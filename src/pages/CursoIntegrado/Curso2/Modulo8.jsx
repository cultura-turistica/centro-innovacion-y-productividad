import React from 'react';
import { ClipboardList, Clock, Shield, Map, HelpCircle, DollarSign, Download, ListChecks, Info, FileText } from 'lucide-react';

export default function Modulo8() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "La Biblia de tu Producto: La Ficha Técnica"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Consolida la información conceptual, técnica y operativa en un solo documento para garantizar la calidad y facilitar la venta.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Qué es la Ficha */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #475569'}}>
          <h4 style={{color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <FileText size={24} /> ¿Para qué sirve la Ficha Técnica?
          </h4>
          <p style={{fontSize: '1.1rem', color: '#334155'}}>
            Es el documento que permite que cualquier actor (guía, vendedor, administrador) entienda exactamente cómo funciona el producto, evitando errores operativos y promesas incumplidas al cliente.
          </p>
        </div>

        {/* Secciones de la Ficha Grid */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>Anatomía de una Ficha Técnica Perfecta</h3>
        <div className="grid-3 mb-10" style={{gap: '1.5rem'}}>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Info size={18} /> Identificación
            </div>
            <p style={{fontSize: '0.85rem'}}>Nombre, destino, duración y temporada recomendada.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Clock size={18} /> Itinerario
            </div>
            <p style={{fontSize: '0.85rem'}}>Cronograma detallado de actividades y traslados.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Shield size={18} /> Servicios e Inclusiones
            </div>
            <p style={{fontSize: '0.85rem'}}>Alojamiento, alimentación, seguros y guianza.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <HelpCircle size={18} /> Requisitos
            </div>
            <p style={{fontSize: '0.85rem'}}>Condición física, equipamiento y restricciones.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Map size={18} /> Info Práctica
            </div>
            <p style={{fontSize: '0.85rem'}}>Punto de encuentro, clima y qué llevar.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem'}}>
            <div style={{color: '#334155', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <DollarSign size={18} /> Comercial
            </div>
            <p style={{fontSize: '0.85rem'}}>Precios, políticas de cancelación y reservas.</p>
          </div>
        </div>

        {/* Example: Amanecer en el Nevado */}
        <div style={{background: '#f1f5f9', padding: '3rem', borderRadius: '30px', border: '2px solid #475569', marginBottom: '3rem'}}>
           <h4 style={{color: '#1e293b', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <ClipboardList size={28} /> Ejemplo: Amanecer en el Nevado
           </h4>
           <div style={{background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}>
              <div className="grid-2" style={{gap: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem'}}>
                 <div>
                    <p style={{margin: '0 0 8px 0'}}><strong>Duración:</strong> 14 Horas</p>
                    <p style={{margin: '0 0 8px 0'}}><strong>Dificultad:</strong> Alta</p>
                    <p style={{margin: '0 0 8px 0'}}><strong>Grupo:</strong> Máximo 8 pax</p>
                 </div>
                 <div>
                    <p style={{margin: '0 0 8px 0'}}><strong>Temporada:</strong> Dic - Mar</p>
                    <p style={{margin: '0 0 8px 0'}}><strong>Precio:</strong> $450.000 COP</p>
                    <p style={{margin: '0 0 8px 0'}}><strong>Punto:</strong> Plaza Principal</p>
                 </div>
              </div>
              <div style={{marginTop: '1.5rem'}}>
                 <p style={{fontWeight: 700, marginBottom: '0.5rem', color: '#1e293b'}}>Resumen de Inclusiones:</p>
                 <p style={{fontSize: '0.9rem', color: '#475569', lineHeight: '1.6'}}>
                    Transporte 4x4, guía certificado de alta montaña, desayuno energético, almuerzo, equipo de seguridad completo, seguro de asistencia médica y fotografía profesional.
                 </p>
              </div>
           </div>
        </div>

        {/* Fichas Complementarias */}
        <div className="mb-10">
           <h4 style={{color: '#032968', marginBottom: '1.5rem'}}>Fichas Complementarias Necesarias</h4>
           <div className="grid-2" style={{gap: '1rem'}}>
              {["Ficha de Atractivo", "Ficha de Alojamiento", "Ficha de Actividad", "Ficha de Proveedor"].map((item, i) => (
                <div key={i} style={{padding: '1.5rem', background: 'white', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                   <span style={{fontWeight: 700, color: '#334155'}}>{item}</span>
                   <Download size={18} color="#94a3b8" />
                </div>
              ))}
           </div>
        </div>

        {/* Tip Box */}
        <div style={{background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', border: '1px solid #0ea5e9', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '3rem'}}>
           <Info size={24} color="#0284c7" style={{flexShrink: 0}} />
           <p style={{color: '#075985', fontSize: '1rem', margin: 0}}>
             <strong>Formato Sugerido:</strong> Mantén este documento en la nube (Google Docs). Permite actualizaciones rápidas y lectura compartida con tus aliados.
           </p>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#334155', color: 'white'}}>
           <h4 style={{color: '#cbd5e1', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Tu Propia Ficha Técnica
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Consolida toda la información recopilada en módulos anteriores.",
                "Describe paso a paso el itinerario operativo.",
                "Detalla con precisión qué incluye y qué NO incluye el precio.",
                "Establece los requisitos mínimos de salud y equipo para el visitante.",
                "Define tu política de cancelación y cambios.",
                "Asegúrate de que un guía nuevo pueda operar el tour solo usando esta ficha."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#cbd5e1', color: '#334155', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
