import React from 'react';
import { FileText, Megaphone, Users, UserCheck, Smile, Frown, CheckCircle, ClipboardList } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';
import afroAvatar from '../../../assets/avatars/afro.svg';
import hipsterAvatar from '../../../assets/avatars/hipster.svg';
import oldmanAvatar from '../../../assets/avatars/oldman.svg';
import tryoutAvatar from '../../../assets/avatars/tryout.svg';

export default function Modulo6({ headerColor, headerGradient, data }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #c026d3 0%, #701a75 100%)',
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
        
        {/* Ilustración Vectorial Profesional (Estilo Lápiz/Hand-drawn) */}
        <div style={{ marginTop: '-1.5rem', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="https://illustrations.popsy.co/purple/product-launch.svg" 
            alt="Lanzamiento de producto y validación" 
            style={{ width: '100%', maxWidth: '500px', height: 'auto', dropShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>

        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#06b6d4' }}>
          <h4><Users size={28} /> {data.ensayo.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.ensayo.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.ensayo.p2 }}></p>
        </div>

        {/* Ficha de Producto - Caso Práctico */}
        <h3 className="mb-4 text-center mt-12" style={{ color: headerColor || '#06b6d4' }}>{data.ficha.title}</h3>
        <p className="text-center mb-10" style={{ color: '#475569' }}>
          {data.ficha.description}
        </p>
        
        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #e2e8f0', marginBottom: '4rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <div className="grid-2" style={{ gap: '20px' }}>
            
            {/* Columna Izquierda */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #06b6d4' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.nombre.label}</div>
                <div style={{ color: '#1e293b', fontSize: '1.2rem', fontWeight: 700 }}>{data.ficha.campos.nombre.value}</div>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #0ea5e9' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.promesa.label}</div>
                <div style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.5 }}>{data.ficha.campos.promesa.value}</div>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #3b82f6' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.perfil.label}</div>
                <ul style={{ color: '#334155', fontSize: '0.95rem', margin: '0', paddingLeft: '20px', lineHeight: 1.6 }}>
                  {data.ficha.campos.perfil.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            {/* Columna Derecha */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #f59e0b' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.brechas.label}</div>
                <ul style={{ color: '#334155', fontSize: '0.95rem', margin: '0', paddingLeft: '20px', lineHeight: 1.6 }}>
                  {data.ficha.campos.brechas.items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #10b981' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.actores.label}</div>
                <div style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.5 }}>{data.ficha.campos.actores.value}</div>
              </div>

              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '4px solid #8b5cf6' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 800, marginBottom: '5px' }}>{data.ficha.campos.canales.label}</div>
                <div style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.5 }}>{data.ficha.campos.canales.value}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Protocolo de Validación */}
        <div style={{ background: '#fffbeb', border: '2px solid #fde68a', borderRadius: '25px', padding: '3rem', marginBottom: '3rem' }}>
          <h4 style={{ color: '#92400e', fontSize: '1.6rem', marginBottom: '1rem' }}>{data.protocolo.title}</h4>
          <p style={{ color: '#b45309', marginBottom: '2rem', fontSize: '1.1rem' }}>
            {data.protocolo.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {data.protocolo.pasos.map((paso, i) => (
              <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', display: 'flex', gap: '20px', alignItems: 'flex-start', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ background: '#f59e0b', color: 'white', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>
                  {i+1}
                </div>
                <div>
                  <h5 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#92400e', fontWeight: 800 }}>{paso.title}</h5>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instrumentos de Validación */}
        <h3 className="mb-4 text-center mt-12" style={{ color: headerColor || '#06b6d4' }}>{data.tecnicas.title}</h3>
        <div className="grid-2 mb-10" style={{ gap: '2rem' }}>
          
          <div style={{ background: '#ecfdf5', padding: '2rem', borderRadius: '20px', border: '1px solid #a7f3d0' }}>
            <h4 style={{ color: '#047857', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={24} /> {data.tecnicas.tryout.title}
            </h4>
            <div style={{ color: '#059669', fontWeight: 700, marginBottom: '1rem' }}>{data.tecnicas.tryout.subtitle}</div>
            <ul style={{ color: '#064e3b', margin: 0, paddingLeft: '20px', lineHeight: 1.6 }}>
              {data.tecnicas.tryout.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>

          <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '20px', border: '1px solid #bfdbfe' }}>
            <h4 style={{ color: '#1d4ed8', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MessageSquare size={24} /> {data.tecnicas.focusgroup.title}
            </h4>
            <div style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>{data.tecnicas.focusgroup.subtitle}</div>
            <ul style={{ color: '#1e3a8a', margin: 0, paddingLeft: '20px', lineHeight: 1.6 }}>
              {data.tecnicas.focusgroup.items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
