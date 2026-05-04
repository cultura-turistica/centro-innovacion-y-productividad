import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  // Mapa de nombres legibles para las rutas
  const routeNames = {
    'cursos': 'Academia SGR',
    'laboratorio-datos': 'Laboratorio de Datos',
    'centro-pensamiento': 'Centro de Pensamiento',
    'turismo-comunitario': 'Turismo Comunitario',
    'diseno-producto': 'Diseño de Producto',
    'finanzas-y-costeo': 'Finanzas y Costeo',
    'proyecto-sae': 'Proyecto SAE',
    'proyecto-prosperidad': 'Proyecto Prosperidad',
    'proyecto-co2': 'Proyecto CO2'
  };

  return (
    <nav aria-label="breadcrumb" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px', 
      marginBottom: '1.5rem', 
      fontSize: '0.85rem',
      color: '#64748b',
      fontWeight: 600
    }}>
      <Link to="/" style={{ color: '#032968', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Home size={14} style={{ marginRight: '4px' }} /> Inicio
      </Link>
      
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const name = routeNames[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} style={{ color: '#cbd5e1' }} />
            {last ? (
              <span style={{ color: '#F06000' }}>{name}</span>
            ) : (
              <Link to={to} style={{ color: '#032968', textDecoration: 'none' }}>
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
