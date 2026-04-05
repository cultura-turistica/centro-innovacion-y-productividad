import React from 'react';
import { PenTool, LineChart, Library, ArrowRight } from 'lucide-react';
import tallerImg from '../assets/taller.jpg';

export default function Home({ setCurrentRoute }) {
  const navigateTo = (e, path) => {
    e.preventDefault();
    setCurrentRoute(path);
  };

  return (
    <div className="main-container text-center">
      <div className="title-pill mb-6">Apropiación Social del Conocimiento</div>
      <h2 style={{fontSize: '4rem', lineHeight: '1.1'}}>Transformamos Territorios <br/><span style={{color: '#F06000'}}>con Conocimiento</span></h2>
      <p style={{fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3rem', fontFamily: 'Poppins'}}>
        Centro de Innovación y Productividad enfocado en comunidades, Pymes turísticas y emprendedores.
      </p>

      {/* Imagen Real Orgánica */}
      <div style={{
        margin: '0 auto 4rem', 
        maxWidth: '800px', 
        height: '400px', 
        borderRadius: '30px 100px 30px 100px', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(5,92,56,0.15)',
        border: '3px solid white'
        }}>
        <img src={tallerImg} alt="Taller Comunitario" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>

      <h3 className="mb-8">Nuestros 3 Pilares SGR</h3>

      <div className="grid-3">
        {/* Pilar 1 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#F06000'}}><PenTool size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Caja de Herramientas y Bitácora</h4>
          <p style={{color: '#475569', marginBottom: '2rem'}}>Conocimiento para la acción. Herramientas técnicas interactivas y calculadoras para el ecosistema turístico.</p>
          <a href="#herramientas" onClick={(e) => navigateTo(e, '/herramientas')} className="btn-primary">Ver Herramientas <ArrowRight size={18}/></a>
        </div>

        {/* Pilar 2 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#055C38'}}><LineChart size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Laboratorio de Datos y Tecnología</h4>
          <p style={{color: '#475569', marginBottom: '2rem'}}>El territorio en cifras. Visualización analítica interactiva y estadística de nuestros proyectos en campo.</p>
          <a href="#laboratorio" onClick={(e) => navigateTo(e, '/laboratorio')} className="btn-primary" style={{background: '#055C38'}}>Entrar al Lab <ArrowRight size={18}/></a>
        </div>

        {/* Pilar 3 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#032968'}}><Library size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Centro de Pensamiento</h4>
          <p style={{color: '#475569', marginBottom: '2rem'}}>Nuestra producción bibliográfica. Documentos de investigación formal, artículos y modelos de gestión publicable.</p>
          <a href="#pensamiento" onClick={(e) => navigateTo(e, '/pensamiento')} className="btn-primary" style={{background: '#032968'}}>Visitar Biblioteca <ArrowRight size={18}/></a>
        </div>
      </div>
    </div>
  );
}
