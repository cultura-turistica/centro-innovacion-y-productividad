import React from 'react';
import logoUrl from '../assets/Logo_CulturaT_color.png';

export default function Navigation({ currentRoute, setCurrentRoute }) {
  const isActive = (path) => currentRoute === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-content">
        <a href="https://cultura-t.com/" target="_blank" rel="noopener noreferrer" className="logo-group" style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
          <img src={logoUrl} alt="Cultura T Logo" style={{height: '60px', objectFit: 'contain'}} />
        </a>
        <nav className="nav-links">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); setCurrentRoute('/'); }} className={isActive('/')}>Inicio</a>
          <a href="#cursos" onClick={(e) => { e.preventDefault(); setCurrentRoute('/cursos'); }} className={isActive('/cursos')}>Cursos y Herramientas</a>
          <a href="#laboratorio" onClick={(e) => { e.preventDefault(); setCurrentRoute('/laboratorio'); }} className={isActive('/laboratorio')}>Laboratorio de Datos</a>
          <a href="#pensamiento" onClick={(e) => { e.preventDefault(); setCurrentRoute('/pensamiento'); }} className={isActive('/pensamiento')}>Centro Pensamiento</a>
        </nav>
      </div>
    </header>
  );
}
