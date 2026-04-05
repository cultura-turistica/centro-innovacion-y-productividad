import React from 'react';
import { PenTool, Lightbulb, MonitorSmartphone, Calculator, BookOpen, ArrowRight } from 'lucide-react';
import { coursesInfo } from '../data/courses';

const iconMap = { Lightbulb, MonitorSmartphone, Calculator, BookOpen };

export default function CursosApp({ setCurrentRoute }) {
  const navigateTo = (e, path) => {
    e.preventDefault();
    setCurrentRoute(path);
  };

  return (
    <div className="main-container">
      <div className="title-pill mb-4"><PenTool size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Academia ASC</div>
      <h2 style={{fontFamily: 'Poppins'}}>Cursos y Aplicaciones</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem', fontFamily: 'Poppins'}}>
        Programa 100% Autoguiado. Cursos diseñados metodológicamente para que el empresario turístico aprenda y aplique directo en su territorio.
      </p>

      <div className="grid-3">
        {coursesInfo.map(course => {
          const IconComponent = iconMap[course.iconName] || BookOpen;
          // Temporal router linkage
          const routePath = course.id === 'curso1' ? '/curso-1' : '/cursos';

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
                   <BookOpen size={16} style={{display:'inline-block', marginRight:'5px'}}/> {course.modules} Módulos
                 </div>
                 <a href={`#${routePath}`} onClick={(e) => navigateTo(e, routePath)} className="btn-primary" style={{padding: '8px 20px', background: course.color}}>
                   Iniciar <ArrowRight size={16} />
                 </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
