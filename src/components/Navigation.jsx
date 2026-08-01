import React, { useState } from 'react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoUrl from '../assets/Logo_CulturaT_color.webp';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, loginWithGoogle, logout } = useAuth() || {};

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Inicio CIP', path: '/', isExternal: false },
    { label: 'Mi Academia', path: '/cursos', isExternal: false },
    { label: 'Laboratorio de Datos', path: '/laboratorio-datos', isExternal: false },
    { label: 'Centro de Pensamiento', path: '/centro-pensamiento', isExternal: false },
    { label: 'Sitio Corporativo', path: 'https://cultura-t.com/', isExternal: true }
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
          {currentUser ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '1rem'}}>
              <img src={currentUser.photoURL} alt="User" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
              <button onClick={logout} style={{background: 'none', border: 'none', cursor: 'pointer', color: '#e5e7eb'}} title="Cerrar sesión">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button onClick={loginWithGoogle} style={{marginLeft: '1rem', background: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold'}}>
              <LogIn size={18} /> Entrar
            </button>
          )}
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
              {currentUser ? (
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 0'}}>
                  <img src={currentUser.photoURL} alt="User" style={{width: '40px', height: '40px', borderRadius: '50%'}} />
                  <span style={{color: 'white'}}>{currentUser.displayName}</span>
                  <button onClick={() => { logout(); closeMenu(); }} style={{background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', marginLeft: 'auto'}}>
                    <LogOut size={24} />
                  </button>
                </div>
              ) : (
                <button onClick={() => { loginWithGoogle(); closeMenu(); }} style={{marginTop: '1rem', background: '#3b82f6', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold', width: '100%'}}>
                  <LogIn size={20} /> Iniciar Sesión
                </button>
              )}
           </nav>
        </div>
        {isMenuOpen && <div className="drawer-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

