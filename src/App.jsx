import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Toolbox from './pages/Toolbox';
import DataLab from './pages/DataLab';
import ThinkTank from './pages/ThinkTank';
import './index.css';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  const renderPage = () => {
    switch(currentRoute) {
      case '/': return <Home setCurrentRoute={setCurrentRoute} />;
      case '/herramientas': return <Toolbox />;
      case '/laboratorio': return <DataLab />;
      case '/pensamiento': return <ThinkTank />;
      default: return <Home />;
    }
  };

  return (
    <div className="layout">
      <Navigation currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      {renderPage()}
    </div>
  );
}
