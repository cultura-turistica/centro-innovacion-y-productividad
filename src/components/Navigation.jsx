import React from 'react';
import { Compass } from 'lucide-react';

export default function Navigation({ currentRoute, setCurrentRoute }) {
  const isActive = (path) => currentRoute === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-group" style={{cursor: 'pointer'}} onClick={() => setCurrentRoute('/')}>
          <Compass size={32} />
          <span>Cultura T</span>
        </div>
        <nav className="nav-links">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); setCurrentRoute('/'); }} className={isActive('/')}>Inicio</a>
          <a href="#cursos" onClick={(e) => { e.preventDefault(); setCurrentRoute('/cursos'); }} className={isActive('/cursos')}>Cursos y Aplicaciones</a>
          <a href="#laboratorio" onClick={(e) => { e.preventDefault(); setCurrentRoute('/laboratorio'); }} className={isActive('/laboratorio')}>Laboratorio de Datos</a>
          <a href="#pensamiento" onClick={(e) => { e.preventDefault(); setCurrentRoute('/pensamiento'); }} className={isActive('/pensamiento')}>Centro Pensamiento</a>
        </nav>
      </div>
    </header>
  );
}
