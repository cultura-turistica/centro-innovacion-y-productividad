import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PenTool, Lightbulb, MonitorSmartphone, Calculator, BookOpen, ArrowRight, X, Search, Filter, Wrench } from 'lucide-react';
import { coursesInfo } from '../data/courses';

import { useNavigate } from 'react-router-dom';

const iconMap = { Lightbulb, MonitorSmartphone, Calculator, BookOpen };

export default function CursosApp() {
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["Todos", ...new Set(coursesInfo.map(c => c.category))];
  
  const filteredCourses = coursesInfo.filter(c => {
    const matchCategory = activeCategory === "Todos" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });
  
  const [targetRoute, setTargetRoute] = useState('');

  const handleStartCourse = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="main-container">
      <Helmet>
        <title>Academia | Centro de Innovación y Productividad Cultura T</title>
        <meta name="description" content="Capacitación transformadora. Rutas de aprendizaje interactivas y material práctico para el desarrollo territorial, el turismo sostenible y finanzas de proyectos." />
        <link rel="canonical" href="https://cip.cultura-t.com/cursos" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Academia | Centro de Innovación y Productividad Cultura T" />
        <meta property="og:description" content="Rutas de aprendizaje interactivas y material práctico para el desarrollo territorial y el turismo sostenible." />
        <meta property="og:url" content="https://cip.cultura-t.com/cursos" />
        <meta property="og:image" content="https://cultura-t.com/wp-content/uploads/2025/08/cropped-Logo_CulturaT_color-scaled-1.webp" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Academia | Centro de Innovación y Productividad Cultura T" />
        <meta name="twitter:description" content="Rutas de aprendizaje interactivas y material práctico para el desarrollo territorial." />

        {/* BREADCRUMBS SCHEMA (Metodología Hostinger/SEO Pro) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://cip.cultura-t.com"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Academia",
                "item": "https://cip.cultura-t.com/cursos"
              }]
            }
          `}
        </script>
      </Helmet>

      <div className="title-pill mb-4"><PenTool size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Academia</div>
      <h2 style={{color: '#032968'}}>Cursos y Herramientas</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem', fontFamily: 'Poppins'}}>
        Programa 100% Autoguiado. Cursos diseñados metodológicamente para que el empresario turístico aprenda y aplique directo en su territorio.
      </p>

      {/* Search and Filter Toolbar */}
      <div style={{
        display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '3rem', 
        background: 'white', padding: '15px', borderRadius: '12px', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        border: '1px solid #e2e8f0', alignItems: 'center'
      }}>
        {/* Search Input */}
        <div style={{flex: '1 1 300px', position: 'relative'}}>
          <Search size={18} style={{position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8'}} />
          <input 
            type="text" 
            placeholder="Buscar curso por nombre o palabra clave..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%', padding: '12px 15px 12px 40px', borderRadius: '8px', 
              border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box',
              outline: 'none', transition: 'border-color 0.2s'
            }}
          />
        </div>
        
        {/* Category Dropdown */}
        <div style={{flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '0 15px', borderRadius: '8px', border: '1px solid #cbd5e1'}}>
          <Filter size={18} color="#64748b" />
          <select 
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{
              width: '100%', padding: '12px 0', background: 'transparent', border: 'none',
              fontSize: '0.95rem', color: '#475569', outline: 'none', cursor: 'pointer'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid-3">
        {filteredCourses.length === 0 ? (
          <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#64748b', fontSize: '1.1rem'}}>
            No se encontraron cursos que coincidan con tu búsqueda.
          </div>
        ) : (
          filteredCourses.map(course => {
            const IconComponent = iconMap[course.iconName] || BookOpen;
            const routePath = 
              course.id === 'curso1' ? '/turismo-comunitario' : 
              course.id === 'curso2' ? '/diseno-producto' : 
              course.id === 'costeo' ? '/finanzas-y-costeo' :
              course.id === 'fotografia' ? '/fundamentos-fotografia' :
              course.id === 'diseno-marca' ? '/diseno-marca' :
              course.id === 'empresas' ? '/micro-experiencias' :
              '/cursos';

            return (
              <div key={course.id} className="glass-card" style={{padding: '2rem', display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%', background: course.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                    border: '2px dashed #1e293b'
                  }}>
                    <IconComponent size={30} />
                  </div>
                  <span style={{fontSize: '0.8rem', fontWeight: 800, background: '#f1f5f9', padding: '5px 15px', borderRadius: '100px', color: '#475569'}}>
                    {course.category}
                  </span>
                </div>
                <h3 style={{fontSize: '1.3rem', color: '#032968', marginBottom: '10px'}}>{course.title}</h3>
                <p style={{color: '#475569', fontSize: '1rem', marginBottom: '2rem', flexGrow: 1}}>{course.description}</p>
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem'}}>
                  <div style={{fontSize: '0.9rem', color: '#64748b', fontWeight: 700}}>
                    {course.isTool ? (
                      <><Wrench size={16} style={{display:'inline-block', marginRight:'5px'}}/> Herramienta Interactiva</>
                    ) : (
                      <><BookOpen size={16} style={{display:'inline-block', marginRight:'5px'}}/> {course.modules} Módulos</>
                    )}
                  </div>
                  {course.status === 'dev' ? (
                    <button disabled className="btn-primary" style={{padding: '8px 20px', background: '#cbd5e1', color: '#64748b', border: 'none', cursor: 'not-allowed'}}>
                      Próximamente
                    </button>
                  ) : (
                    <button onClick={(e) => handleStartCourse(e, routePath)} className="btn-primary" style={{padding: '8px 20px', background: course.color, border: 'none', cursor: 'pointer'}}>
                      {course.isTool ? 'Abrir Herramienta' : 'Iniciar'} <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )
          })
        )}
      </div>

    </div>
  );
}
