import React from 'react';
import './TierraYRaices.css';

const TierraYRaices = () => {
  // Contenido del mockup para el diseño "Tierra y Raíces"
  return (
    <div className="tierra-container">
      <div className="tierra-header">
        <h2>Módulo de Ejemplo: El Árbol de Problemas</h2>
        <p>Un cuaderno de bitácora para explorar los desafíos.</p>
      </div>
      <div className="tierra-content">
        <div className="tierra-card">
          <h3>Paso 1: Identifica los Problemas</h3>
          <p>Usa los siguientes elementos para arrastrar al árbol.</p>
          <div className="muñeco-placeholder">Muñeco 'Campesino'</div>
          <div className="muñeco-placeholder">Muñeco 'Turista'</div>
        </div>
        <div className="tierra-card">
          <h3>Paso 2: Construye el Árbol</h3>
          <p>Clasifica las causas y los efectos.</p>
           <div className="muñeco-placeholder">Icono 'Árbol'</div>
        </div>
      </div>
    </div>
  );
};

export default TierraYRaices;
