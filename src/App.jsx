import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CursosApp from './pages/CursosApp';
import Curso1 from './pages/Curso1';
import DataLab from './pages/DataLab';
import ThinkTank from './pages/ThinkTank';
import './index.css';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  const renderPage = () => {
    switch(currentRoute) {
      case '/': return <Home setCurrentRoute={setCurrentRoute} />;
      case '/cursos': return <CursosApp setCurrentRoute={setCurrentRoute} />;
      case '/curso-1': return <Curso1 />;
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
