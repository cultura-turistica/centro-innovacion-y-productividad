import React from 'react';
import { PenTool, LineChart, Library, ArrowRight, Info, Target, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tallerImg from '../assets/taller.jpg';

const OrgNode = ({ title, bg, color, items, children, subtitle }) => (
  <div style={{ background: bg || 'white', border: `1px solid ${color || '#e2e8f0'}`, borderRadius: '15px', padding: '1.5rem', flex: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
    <h4 style={{ color: color || '#032968', margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{title}</h4>
    {subtitle && <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: 700 }}>{subtitle}</p>}
    
    {items && items.length > 0 && (
      <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ padding: '0.5rem 0', color: '#475569', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{width: '6px', height: '6px', borderRadius: '50%', background: color || '#e2e8f0', flexShrink: 0}} />
            {item}
          </li>
        ))}
      </ul>
    )}
    {children && (
      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {children}
      </div>
    )}
  </div>
);

export default function Home() {
  const navigate = useNavigate();

  const navigateTo = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="main-container text-center">
      <div className="title-pill mb-6">Apropiación Social del Conocimiento</div>
      <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1'}}>Transformamos Territorios <br/><span style={{color: '#F06000'}}>con Conocimiento</span></h2>
      <p style={{fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3rem', fontFamily: 'Poppins'}}>
        Centro de Innovación y Productividad enfocado en comunidades, Pymes turísticas y emprendedores.
      </p>

      {/* Imagen Real Orgánica */}
      <div style={{
        margin: '0 auto 4rem', 
        maxWidth: '900px', 
        height: '450px', 
        borderRadius: '30px 100px 30px 100px', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(5,92,56,0.15)',
        border: '4px solid white'
        }}>
        <img src={tallerImg} alt="Taller Comunitario" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>

      {/* 3 PILARES SGR - MOVIDOS ARRIBA */}
      <h3 className="mb-8" style={{fontSize: '2.5rem'}}>Nuestros 3 Pilares SGR</h3>

      <div className="grid-3" style={{marginBottom: '6rem'}}>
        {/* Pilar 1 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#F06000'}}><PenTool size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Cursos y Herramientas</h4>
          <p style={{color: '#475569', marginBottom: '2rem', lineHeight: '1.6'}}>Capacitación transformadora. Rutas de aprendizaje interactivas y material práctico para el desarrollo territorial.</p>
          <a href="#cursos" onClick={(e) => navigateTo(e, '/cursos')} className="btn-primary">Ver Academia <ArrowRight size={18}/></a>
        </div>

        {/* Pilar 2 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#055C38'}}><LineChart size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Laboratorio de Datos y Tecnología</h4>
          <p style={{color: '#475569', marginBottom: '2rem', lineHeight: '1.6'}}>El territorio en cifras. Visualización analítica interactiva y estadística de nuestros proyectos en campo.</p>
          <a href="#laboratorio" onClick={(e) => navigateTo(e, '/laboratorio-datos')} className="btn-primary" style={{background: '#055C38'}}>Entrar al Lab <ArrowRight size={18}/></a>
        </div>

        {/* Pilar 3 */}
        <div className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
          <div className="icon-wrapper" style={{background: '#032968'}}><Library size={28}/></div>
          <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>Centro de Pensamiento</h4>
          <p style={{color: '#475569', marginBottom: '2rem', lineHeight: '1.6'}}>Nuestra producción bibliográfica. Documentos de investigación formal, artículos y modelos de gestión publicable.</p>
          <a href="#pensamiento" onClick={(e) => navigateTo(e, '/centro-pensamiento')} className="btn-primary" style={{background: '#032968'}}>Visitar Biblioteca <ArrowRight size={18}/></a>
        </div>
      </div>

      {/* SECCIÓN CULTURA T Y CIP - MOVIDA ABAJO */}
      <div className="grid-2" style={{textAlign: 'left', marginBottom: '5rem', alignItems: 'stretch'}}>
        <div className="glass-card" style={{padding: '3rem', display: 'flex', flexDirection: 'column'}}>
          <div className="icon-wrapper" style={{background: '#055C38', marginBottom: '1.5rem'}}>
            <Info size={32}/>
          </div>
          <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#055C38'}}>Cultura T S.A.S.</h3>
          <p style={{color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem'}}>
            Constituida legalmente en 2018 en Bogotá, somos una firma consultora y ejecutora de proyectos con consolidada trayectoria en el desarrollo, asesoría e implementación de estrategias para el turismo sustentable.
          </p>
          <p style={{color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem'}}>
            Nuestro objetivo abarca la promoción de la sostenibilidad, el fortalecimiento comunitario y la planificación territorial. Implementamos soluciones de ecosistemas web, analítica de datos, innovación y economía popular.
          </p>
          <div style={{marginTop: 'auto', background: 'rgba(5, 92, 56, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(5, 92, 56, 0.2)'}}>
            <strong style={{color: '#055C38', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Propósito:</strong>
            <p style={{color: '#475569', lineHeight: '1.6', margin: 0}}>
              Fortalecer el desarrollo sostenible de las comunidades locales y los territorios, generando bienestar mediante proyectos de impacto ambiental, social, cultural y turístico.
            </p>
          </div>
        </div>

        <div className="glass-card" style={{padding: '3rem', borderTop: '6px solid #F06000', display: 'flex', flexDirection: 'column'}}>
          <div className="icon-wrapper" style={{background: '#F06000', marginBottom: '1.5rem'}}>
            <Target size={32}/>
          </div>
          <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', color: '#032968'}}>El CIP</h3>
          <h4 style={{fontSize: '1.1rem', color: '#F06000', marginBottom: '1.5rem', fontWeight: '800'}}>Centro de Innovación y Productividad</h4>
          <p style={{color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem'}}>
            A través del CIP articulamos a los actores de la cadena de valor del turismo, estableciendo alianzas estratégicas con entidades públicas, privadas y fondos de cooperación para la transformación social y económica.
          </p>
          <div style={{marginTop: 'auto', background: 'rgba(240, 96, 0, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(240, 96, 0, 0.2)'}}>
            <strong style={{color: '#F06000', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Misión Fundamental:</strong>
            <p style={{color: '#475569', lineHeight: '1.6', margin: 0}}>
              Impulsar la competitividad y productividad territorial en los sectores del turismo, la cultura y el desarrollo empresarial. Mediante la prestación de servicios especializados, investigamos y transferimos conocimiento para inducir la innovación continua en las regiones.
            </p>
          </div>
        </div>
      </div>

      {/* NUEVO ORGANIGRAMA UI */}
      <div style={{ marginTop: '3rem', padding: '4rem 2rem', background: 'rgba(255,255,255,0.6)', borderRadius: '40px', border: '1px solid rgba(5,92,56,0.1)' }}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#032968', color: 'white', padding: '10px 25px', borderRadius: '50px', marginBottom: '3rem'}}>
           <Network size={20} />
           <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'white', fontFamily: 'Poppins' }}>Estructura Organizacional</h3>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          {/* RAÍZ */}
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <OrgNode title="CULTURA T S.A.S." subtitle="Dirección General" color="#032968" bg="#f8fafc" />
          </div>

          {/* DIVISIÓN MISIONAL Y APOYO */}
          <div className="grid-2" style={{ width: '100%', gap: '2rem', alignItems: 'stretch', textAlign:'left' }}>
            
            {/* ÁREA MISIONAL */}
            <div style={{ background: '#fff', borderRadius: '25px', padding: '2rem', border: '2px solid rgba(240, 96, 0, 0.2)', boxShadow: '0 10px 30px rgba(240, 96, 0, 0.05)' }}>
              <h3 style={{ color: '#F06000', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>ÁREA MISIONAL</h3>
              
              <OrgNode title="Dirección de Operaciones e Innovación" color="#F06000">
                 
                 <div style={{ background: 'rgba(240,96,0,0.03)', border: '2px dashed rgba(240,96,0,0.3)', borderRadius: '15px', padding: '1.5rem' }}>
                   <p style={{ fontSize: '0.85rem', color: '#F06000', fontWeight: 'bold', textAlign: 'center', margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
                     Núcleo Integrado: Sinergia Proyectos e Innovación
                   </p>
                   {/* En móviles esto se apilará feo si usamos Flex horizontal, mejor flex column con gap */}
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <OrgNode 
                        title="Gerencia de Proyectos" 
                        color="#032968" 
                        items={['Subproceso Estructuración', 'Subproceso Implementación']} 
                      />
                      <OrgNode 
                        title="CIP Cultura T" 
                        color="#055C38" 
                        items={['Línea Desarrollo Empresarial', 'Línea Transferencia Conocimiento']} 
                      />
                   </div>
                 </div>
              </OrgNode>
            </div>

            {/* ÁREA DE APOYO */}
            <div style={{ background: '#fff', borderRadius: '25px', padding: '2rem', border: '2px solid rgba(5, 92, 56, 0.2)', boxShadow: '0 10px 30px rgba(5, 92, 56, 0.05)' }}>
              <h3 style={{ color: '#055C38', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>ÁREA DE APOYO</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <OrgNode 
                  title="Financiera y Contable" 
                  color="#475569" 
                  items={['Nómina, Fiscalización, Facturación']} 
                />
                <OrgNode 
                  title="Tecnologías - TICs" 
                  color="#475569" 
                  items={['Soporte Administrativo', 'Entornos Analítica de Datos', 'Ecosistema Web E-learning']} 
                />
                <OrgNode 
                  title="Jurídica y Contratación" 
                  color="#475569" 
                  items={['Asesoría y Contratación']} 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
