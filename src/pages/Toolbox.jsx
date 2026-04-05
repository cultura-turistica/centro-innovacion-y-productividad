import React from 'react';
import { PenTool, Wrench } from 'lucide-react';

export default function Toolbox() {
  return (
    <div className="main-container">
      <div className="title-pill mb-4"><PenTool size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Bitácora ASC</div>
      <h2 style={{fontFamily: 'Poppins, sans-serif'}}>Caja de Herramientas para la Acción</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem', fontFamily: 'Poppins, sans-serif'}}>
        Herramientas 100% interactivas diseñadas específicamente para el empresario del sector turismo. Evidencias de transferencia de conocimiento SGR.
      </p>

      {/* Placeholder Herramientas */}
      <div className="glass-card" style={{padding: '4rem', textAlign: 'center'}}>
        <Wrench size={64} color="#055C38" style={{margin: '0 auto 2rem'}}/>
        <h3 style={{fontFamily: 'Poppins, sans-serif'}}>Área en Construcción</h3>
        <p style={{color: '#475569', maxWidth: '600px', margin: '0 auto', fontFamily: 'Poppins, sans-serif'}}>
          Pronto liberaremos nuestros módulos y calculadoras interactivas para que puedas proyectar tus iniciativas de modelo de negocio rural y urbano.
        </p>
      </div>
    </div>
  );
}
