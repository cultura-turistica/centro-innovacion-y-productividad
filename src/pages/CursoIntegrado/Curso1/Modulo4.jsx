import React, { useState } from 'react';
import { HeartHandshake, TrendingUp, Map, Camera, Award, Check, Edit3, BookOpen, Users } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';

const roles = [
  { id: 1, title: 'El Vocero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Vocero&backgroundColor=b6e3f4', target: 'alianzas', color: '#3b82f6', benefit: 'Reconocimiento y liderazgo', task: 'Negocia con proveedores' },
  { id: 2, title: 'El Financiero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Financiero&backgroundColor=c0aede', target: 'dinero', color: '#10b981', benefit: 'Confianza y estabilidad', task: 'Registra los ingresos' },
  { id: 3, title: 'El Guía', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Guia&backgroundColor=ffdfbf', target: 'turistas', color: '#f59e0b', benefit: 'Intercambio cultural', task: 'Recorre el sendero' },
  { id: 4, title: 'El Creador', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Creador&backgroundColor=d1d4f9', target: 'redes', color: '#8b5cf6', benefit: 'Expansión de la ruta', task: 'Toma fotos y videos' }
];

export default function Modulo4({ headerColor, headerGradient }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [matchedRoles, setMatchedRoles] = useState({});
  const [shakeTarget, setShakeTarget] = useState(null);
  const [activeNodes, setActiveNodes] = useState([]);

  const handleMatch = (targetId) => {
    if (!selectedRole) return;
    if (selectedRole.target === targetId) {
      setMatchedRoles(prev => ({ ...prev, [targetId]: selectedRole }));
      setSelectedRole(null);
    } else {
      setShakeTarget(targetId);
      setTimeout(() => setShakeTarget(null), 500);
    }
  };

  const handleNodeClick = (id) => {
    if (!activeNodes.includes(id)) {
      setActiveNodes([...activeNodes, id]);
    }
  };

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0e7ff' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#c7d2fe" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#a5b4fc" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
                  {/* Nodos conectados estilo red */}
                  <line x1="300" y1="200" x2="500" y2="150" stroke="#4f46e5" strokeWidth="4" />
                  <line x1="500" y1="150" x2="800" y2="220" stroke="#4f46e5" strokeWidth="4" />
                  <line x1="800" y1="220" x2="900" y2="150" stroke="#4f46e5" strokeWidth="4" />
                  <circle cx="300" cy="200" r="15" fill="#4338ca" />
                  <circle cx="500" cy="150" r="20" fill="#4338ca" />
                  <circle cx="800" cy="220" r="25" fill="#4338ca" />
                  <circle cx="900" cy="150" r="15" fill="#4338ca" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 4</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>La Red Asociativa<br />(Trabajo en Colectivo)</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Unirse no es simplemente amontonarse. La asociatividad exige delegar la autoridad productiva y confiar plenamente en los roles de los vecinos.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Equipo" alt="Equipo" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="La Red Asociativa y los Roles"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A2.wav"
                transcript={<p>Pasemos ahora al concepto de la "red asociativa". En una iniciativa de turismo, una sola persona, o incluso un solo negocio, rara vez puede hacerlo todo solo. Una red asociativa es cuando los diferentes actores del territorio se unen y se reparten las tareas según lo que cada uno sabe hacer mejor, formando una cadena.<br /><br />Por ejemplo, hay quienes tienen mucha facilidad para negociar, ellos asumen el rol de <strong>Voceros</strong>. Otros son muy organizados con los números, esos asumen el rol <strong>Financiero</strong> para llevar las cuentas claras. El que conoce bien el terreno y tiene manejo de grupos, asume el rol de <strong>Guía</strong>. Y el que sabe manejar la tecnología para vender la ruta, es el <strong>Creador</strong>. Trabajar en red significa que cada eslabón se enfoca en hacer su parte muy bien, y confía en que los demás harán la suya para que el turista tenga una buena experiencia. En el ejercicio que sigue, van a poder ver cómo se acomoda cada uno de estos roles.</p>}
                color={headerColor}
              />
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Anatomía del Equipo Comunitario</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El 90% de los proyectos de turismo rural fracasan no por falta de atractivo natural, sino por <strong>la desintegración de la red interna</strong>. La asociatividad es la integración voluntaria donde diferentes nodos (fincas posadas, transportistas, guías, artesanos) unen sus eslabones.</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Exige tres pilares: <strong>Confianza plena</strong> en el cumplimiento ajeno, <strong>Objetivos unificados</strong> para la rentabilidad de la vereda, y <strong>Complementariedad técnica</strong> (asignar tareas con base en habilidades naturales y no favoritismos).</p>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica 1: Roles Claros</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Complementariedad Operativa</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem' }}>Toca un talento humano (avatar) y asígnalo a su estación de responsabilidad territorial.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  {roles.filter(r => !Object.values(matchedRoles).find(m => m.id === r.id)).map(role => (
                    <div
                      key={role.id} onClick={() => setSelectedRole(role)}
                      style={{ padding: '1rem', background: selectedRole?.id === role.id ? '#eff6ff' : 'white', border: selectedRole?.id === role.id ? '3px solid #3b82f6' : '3px solid #e2e8f0', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', width: '120px' }}>
                      <img src={role.img} alt={role.title} style={{ height: '70px', marginBottom: '10px' }} />
                      <h5 style={{ margin: 0, color: '#334155', fontSize: '0.9rem' }}>{role.title}</h5>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { id: 'alianzas', label: 'Gestión de Alianzas', icon: <HeartHandshake size={30} color="#3b82f6" /> },
                    { id: 'dinero', label: 'Libros de Cuentas', icon: <TrendingUp size={30} color="#10b981" /> },
                    { id: 'turistas', label: 'Líder de Recorridos', icon: <Map size={30} color="#f59e0b" /> },
                    { id: 'redes', label: 'Marketing Visual', icon: <Camera size={30} color="#8b5cf6" /> }
                  ].map(zone => (
                    <div
                      key={zone.id} onClick={() => handleMatch(zone.id)} className={shakeTarget === zone.id ? 'shake-animation' : ''}
                      style={{ border: matchedRoles[zone.id] ? `3px solid ${matchedRoles[zone.id].color}` : '3px dashed #cbd5e1', background: matchedRoles[zone.id] ? `${matchedRoles[zone.id].color}15` : 'white', borderRadius: '20px', padding: '1.5rem', textAlign: 'center', cursor: selectedRole ? 'pointer' : 'default', transition: 'all 0.3s' }}>
                      {matchedRoles[zone.id] ? (
                        <div className="pop-in">
                          <img src={matchedRoles[zone.id].img} alt="" style={{ height: '60px', marginBottom: '10px' }} />
                          <h4 style={{ margin: '0 0 5px 0', color: matchedRoles[zone.id].color }}>{matchedRoles[zone.id].title}</h4>
                          <div style={{ background: 'white', padding: '5px', borderRadius: '10px', fontSize: '0.8rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center' }}><Award size={14} color="#16a34a" /> {matchedRoles[zone.id].benefit}</div>
                        </div>
                      ) : (
                        <div style={{ opacity: 0.5 }}><div style={{ marginBottom: '10px' }}>{zone.icon}</div><h5 style={{ margin: 0, color: '#64748b' }}>{zone.label}</h5></div>
                      )}
                    </div>
                  ))}
                </div>

                {Object.keys(matchedRoles).length === 4 && (
                  <div className="pop-in" style={{ marginTop: '3rem', background: '#e0e7ff', padding: '3rem 2rem', borderRadius: '25px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#c7d2fe', color: '#4338ca', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica 2: Cadena de Valor</div>
                    <h3 style={{ color: '#312e81', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Consolidar la Red</h3>
                    <p style={{ color: '#4338ca', fontSize: '1.1rem', marginBottom: '3rem' }}>Ahora toca los 4 nodos logísticos rurales para enlazar la experiencia del viajero mediante una comunicación fluida.</p>

                    <div style={{ width: '300px', height: '300px', position: 'relative', margin: '2rem auto' }}>
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                        {activeNodes.includes(1) && activeNodes.includes(2) && <line x1="25" y1="25" x2="275" y2="25" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(2) && activeNodes.includes(3) && <line x1="275" y1="25" x2="275" y2="275" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(3) && activeNodes.includes(4) && <line x1="275" y1="275" x2="25" y2="275" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(4) && activeNodes.includes(1) && <line x1="25" y1="275" x2="25" y2="25" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                      </svg>
                      {[{ id: 1, top: 0, left: 0, label: 'Guianza' }, { id: 2, top: 0, right: 0, label: 'Transporte' }, { id: 3, bottom: 0, right: 0, label: 'Hospedaje' }, { id: 4, bottom: 0, left: 0, label: 'Cocina Local' }].map(node => (
                        <div key={node.id} onClick={() => handleNodeClick(node.id)} style={{ position: 'absolute', width: '50px', height: '50px', background: activeNodes.includes(node.id) ? '#3730a3' : 'white', border: '4px solid #3730a3', borderRadius: '50%', zIndex: 2, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeNodes.includes(node.id) ? 'white' : '#3730a3', ...(node.top !== undefined ? { top: node.top } : {}), ...(node.bottom !== undefined ? { bottom: node.bottom } : {}), ...(node.left !== undefined ? { left: node.left } : {}), ...(node.right !== undefined ? { right: node.right } : {}) }}>
                          {activeNodes.includes(node.id) ? <Check size={20} /> : <span style={{ fontWeight: 'bold' }}>{node.id}</span>}
                          <div style={{ position: 'absolute', top: node.top === 0 ? '-30px' : '60px', color: '#3730a3', fontWeight: 'bold', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{node.label}</div>
                        </div>
                      ))}
                    </div>

                    {activeNodes.length === 4 && (
                      <div className="pop-in" style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                        <h4 style={{ color: '#312e81', margin: '0 0 10px 0', fontSize: '1.2rem' }}>¡El encadenamiento está asegurado!</h4>
                        <p style={{ color: '#475569', margin: 0 }}>Si un solo nodo de la vereda falla (ej. el transporte rural se retrasa o la cocinera no recibe el mensaje), la cadena completa colapsa frente al turista. La comunicación oportuna blinda la red.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
  );
}
