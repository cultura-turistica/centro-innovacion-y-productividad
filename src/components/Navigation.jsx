import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoUrl from '../assets/Logo_CulturaT_color.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Inicio', path: 'https://cultura-t.com/', isExternal: true },
    { label: 'Mi Academia', path: '/cursos', isExternal: false },
    { label: 'Laboratorio de Datos', path: '/laboratorio-datos', isExternal: false },
    { label: 'Centro de Pensamiento', path: '/centro-pensamiento', isExternal: false }
  ];

  const handleNavClick = (e, path, isExternal) => {
    if (isExternal) return;
    e.preventDefault();
    navigate(path);
    closeMenu();
  };

  return (
    <header className="header" style={{zIndex: 1000}}>
      <div className="header-content">
        <a href="https://cultura-t.com/" className="logo-group" style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
          <img src={logoUrl} alt="Cultura T Logo" style={{height: '50px', objectFit: 'contain'}} />
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links hide-mobile">
          {navItems.map(item => (
            item.isExternal ? (
              <a key={item.label} href={item.path}>{item.label}</a>
            ) : (
              <a 
                key={item.path} 
                href={`#${item.path}`} 
                onClick={(e) => handleNavClick(e, item.path, false)} 
                className={isActive(item.path)}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle show-mobile" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Drawer Overlay */}
        <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
           <div className="drawer-header">
              <img src={logoUrl} alt="Logo" style={{height: '40px'}} />
              <button onClick={closeMenu} className="close-btn"><X size={28} /></button>
           </div>
           <nav className="drawer-links">
              {navItems.map(item => (
                item.isExternal ? (
                  <a key={item.label} href={item.path} onClick={closeMenu}>{item.label}</a>
                ) : (
                  <a 
                    key={item.path} 
                    href={`#${item.path}`} 
                    onClick={(e) => handleNavClick(e, item.path, false)} 
                    className={isActive(item.path)}
                  >
                    {item.label}
                  </a>
                )
              ))}
           </nav>
        </div>
        {isMenuOpen && <div className="drawer-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

