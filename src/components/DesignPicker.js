import React, { useState } from 'react';
import './DesignPicker.css';

// Importar los componentes de cada propuesta de diseño
import TierraYRaices from './TierraYRaices';
// import NeonAncestral from './NeonAncestral';
// import BentoLibre from './BentoLibre';

const DesignPicker = () => {
  const [activeTab, setActiveTab] = useState('tierra');

  const renderContent = () => {
    switch (activeTab) {
      case 'tierra':
        return <TierraYRaices />;
      case 'neon':
        return <div>Contenido de Neón Ancestral</div>; // <NeonAncestral />;
      case 'bento':
        return <div>Contenido de Bento Libre</div>; // <BentoLibre />;
      default:
        return null;
    }
  };

  return (
    <div className="design-picker-container">
      <div className="picker-header">
        <h1>Elige un Prototipo Visual</h1>
        <p>Navega las pestañas para explorar los diferentes conceptos de diseño para la plataforma de Cultura T.</p>
      </div>
      <div className="picker-tabs">
        <button
          className={`tab ${activeTab === 'tierra' ? 'active' : ''}`}
          onClick={() => setActiveTab('tierra')}
        >
          Tierra y Raíces
        </button>
        <button
          className={`tab ${activeTab === 'neon' ? 'active' : ''}`}
          onClick={() => setActiveTab('neon')}
        >
          Neón Ancestral
        </button>
        <button
          className={`tab ${activeTab === 'bento' ? 'active' : ''}`}
          onClick={() => setActiveTab('bento')}
        >
          Bento Libre
        </button>
      </div>
      <div className="picker-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default DesignPicker;
