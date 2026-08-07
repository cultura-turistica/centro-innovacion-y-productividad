import React, { useState } from 'react';
import { UserCircle, Search, Eye, Ear, MessageSquare, Heart, Scissors, AlertTriangle, Tent, Baby, Gem, MapPin } from 'lucide-react';
import avatarPiloto2 from '../../../assets/avatars/avatarPiloto2.svg';
import avatarJobSocial from '../../../assets/avatars/avatarJobSocial.svg';
import avatarBusiness from '../../../assets/avatars/avatarBusiness.svg';
import avatarMVP1 from '../../../assets/avatars/avatarMVP1.svg';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo2({ headerColor, headerGradient, data }) {
  const [activeQuadrant, setActiveQuadrant] = useState('ve');

  const empatiaContent = {
    ve: { icon: Eye, title: data.empatia.content.ve.title, text: data.empatia.content.ve.text },
    oye: { icon: Ear, title: data.empatia.content.oye.title, text: data.empatia.content.oye.text },
    siente: { icon: Heart, title: data.empatia.content.siente.title, text: data.empatia.content.siente.text },
    dice: { icon: MessageSquare, title: data.empatia.content.dice.title, text: data.empatia.content.dice.text }
  };

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          {data.header.title}
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          {data.header.description}
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title={data.podcast.title}
          subtitle={data.podcast.subtitle}
          audioSrc={data.podcast.audioSrc}
          transcript={<div dangerouslySetInnerHTML={{ __html: data.podcast.transcript }} />}
          color={headerColor || '#16A34A'}
        />
        
        {/* Analogía */}
        <div className="theory-block" style={{ marginTop: '2rem', borderLeftColor: headerColor || '#2563eb' }}>
          <h4><Scissors size={28} /> {data.sastre.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.sastre.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.sastre.p2 }}></p>
        </div>

        {/* Mapa de Empatía Interactivo */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#2563eb' }}>{data.empatia.title}</h3>
        <p className="text-center mb-8" style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 2rem auto' }} dangerouslySetInnerHTML={{ __html: data.empatia.description }}></p>

        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px dashed #cbd5e1', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            
            {Object.keys(empatiaContent).map((key) => {
              const Icon = empatiaContent[key].icon;
              const isActive = activeQuadrant === key;
              return (
                <div 
                  key={key} 
                  onClick={() => setActiveQuadrant(key)}
                  style={{
                    background: isActive ? headerColor : 'white',
                    color: isActive ? 'white' : '#475569',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? `0 10px 20px ${headerColor}40` : '0 5px 15px rgba(0,0,0,0.05)',
                    border: `2px solid ${isActive ? headerColor : '#e2e8f0'}`,
                    textAlign: 'center'
                  }}
                >
                  <Icon size={32} style={{ margin: '0 auto 10px auto' }} />
                  <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{empatiaContent[key].title}</h5>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', minHeight: '150px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '1.15rem', color: '#1e293b', margin: 0, lineHeight: 1.6 }}>
              <strong>{empatiaContent[activeQuadrant].title}:</strong> <br/>
              {empatiaContent[activeQuadrant].text}
            </p>
          </div>
        </div>

        {/* Caso de Estudio */}
        <div style={{ background: '#eff6ff', padding: '3rem', borderRadius: '30px', border: '2px solid #3b82f6', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '-15px', right: '30px', background: '#3b82f6', color: 'white', padding: '5px 20px', borderRadius: '20px', fontWeight: 800, fontSize: '0.9rem' }}>
             {data.caso.tag}
           </div>
           <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ background: 'white', padding: '10px', borderRadius: '50%', border: '4px solid #3b82f6' }}>
                <UserCircle size={70} color="#3b82f6" />
              </div>
              <div>
                <h4 style={{ color: '#1e40af', fontSize: '1.8rem', margin: '0 0 5px 0', fontWeight: 900 }}>{data.caso.name}</h4>
                <div style={{ background: '#bfdbfe', color: '#1e40af', padding: '4px 15px', borderRadius: '100px', fontSize: '0.85rem', display: 'inline-block', fontWeight: 700 }}>{data.caso.profile}</div>
              </div>
           </div>
           
           <div className="grid-2 mt-8" style={{ gap: '2rem' }}>
              <div>
                 <p style={{ fontSize: '1.05rem', color: '#1e3a8a', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: data.caso.dolor }}></p>
                 <p style={{ fontSize: '1.05rem', color: '#1e3a8a', lineHeight: 1.6, marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: data.caso.ganancia }}></p>
              </div>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 20px rgba(59,130,246,0.1)' }}>
                 <div style={{ color: '#ea580c', display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1rem' }}>
                   <AlertTriangle size={24} />
                   <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{data.caso.malaDecision.title}</h5>
                 </div>
                 <p style={{ fontSize: '0.95rem', color: '#475569', margin: 0 }} dangerouslySetInnerHTML={{ __html: data.caso.malaDecision.text }}></p>
              </div>
           </div>
        </div>

        {/* Incompatibilidad de Perfiles */}
        <div style={{ marginTop: '4rem' }}>
          <h3 className="mb-4 text-center" style={{ color: headerColor || '#2563eb' }}>
            {data.incompatibilidad.title}
          </h3>
          <p className="text-center mb-8" style={{ color: '#475569', maxWidth: '700px', margin: '0 auto 2rem auto' }} dangerouslySetInnerHTML={{ __html: data.incompatibilidad.description }}></p>

          <div className="grid-2" style={{ gap: '2rem' }}>
            
            {/* Conflicto 1 */}
            <div style={{ background: '#fff1f2', border: '2px solid #fecdd3', borderRadius: '25px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#fecaca', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarPiloto2} alt="Mochilero Fiestero" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>{data.incompatibilidad.conflicto1.perfil1}</h5>
                </div>
                
                <div style={{ color: '#e11d48', fontWeight: 900, fontSize: '1.5rem', padding: '0 10px' }}>VS</div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#bbf7d0', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarJobSocial} alt="Turismo Familiar" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>{data.incompatibilidad.conflicto1.perfil2}</h5>
                </div>
              </div>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #f43f5e', fontSize: '0.95rem', color: '#881337', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: data.incompatibilidad.conflicto1.incompatibilidad }}></div>
            </div>

            {/* Conflicto 2 */}
            <div style={{ background: '#fff1f2', border: '2px solid #fecdd3', borderRadius: '25px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#fef08a', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarBusiness} alt="Turista Lujo" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>{data.incompatibilidad.conflicto2.perfil1}</h5>
                </div>
                
                <div style={{ color: '#e11d48', fontWeight: 900, fontSize: '1.5rem', padding: '0 10px' }}>VS</div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ background: '#bfdbfe', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', margin: '0 auto 10px auto', overflow: 'hidden' }}>
                     <img src={avatarMVP1} alt="Aventurero Low Cost" style={{ height: '90%' }} />
                   </div>
                   <h5 style={{ margin: 0, color: '#be123c', fontWeight: 800 }}>{data.incompatibilidad.conflicto2.perfil2}</h5>
                </div>
              </div>
              <div style={{ background: 'white', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #f43f5e', fontSize: '0.95rem', color: '#881337', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: data.incompatibilidad.conflicto2.incompatibilidad }}></div>
            </div>
            
          </div>

          {/* Conclusión Metodológica */}
          <div className="theory-block" style={{ marginTop: '3rem', borderLeftColor: headerColor || '#2563eb' }}>
            <p style={{ margin: 0, fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: data.incompatibilidad.nota }}></p>
          </div>
        </div>

      </div>
    </div>
  );
}
