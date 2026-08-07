import React from 'react';
import { Target, Utensils, Lightbulb, AlertTriangle, BookOpen, Info } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo1({ headerColor, headerGradient, data }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.2)',
          padding: '8px 15px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <Info size={16} /> Metodología D+C+S de Swisscontact
        </div>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }} dangerouslySetInnerHTML={{ __html: data.header.title }}></h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: data.header.description }}></p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title={data.podcast.title}
          subtitle={data.podcast.subtitle}
          audioSrc={data.podcast.audioSrc}
          transcript={<div dangerouslySetInnerHTML={{ __html: data.podcast.transcript }} />}
          color={headerColor || '#16A34A'}
        />

        {/* Ilustración de Internet */}
        <div style={{ marginBottom: '4rem', marginTop: '2rem', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Paisaje Turístico" 
            style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
          />
        </div>
        
        {/* Analogía: El Restaurante */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#16A34A' }}>
          <h4><Utensils size={28} /> {data.restaurante.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.restaurante.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.restaurante.p2 }}></p>
        </div>

        {/* Diferencia interactiva */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#16A34A' }}>{data.comparacion.title}</h3>
        
        <div className="grid-2 mb-10" style={{ gap: '2rem' }}>
          <FlipPillarCard 
            icon={Target}
            title={data.comparacion.producto.title}
            subtitle={data.comparacion.producto.subtitle}
            content={data.comparacion.producto.content}
            color="#2563eb"
            bg="#eff6ff"
          />
          <FlipPillarCard 
            icon={Lightbulb}
            title={data.comparacion.experiencia.title}
            subtitle={data.comparacion.experiencia.subtitle}
            content={data.comparacion.experiencia.content}
            color="#d97706"
            bg="#fef3c7"
          />
        </div>

        {/* Error Común */}
        <div style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', marginBottom: '3rem' }}>
          <div style={{ color: '#ea580c' }}><AlertTriangle size={40} /></div>
          <div>
            <h4 style={{ color: '#9a3412', fontWeight: 800, marginBottom: '0.5rem' }}>{data.error.title}</h4>
            <p style={{ color: '#9a3412', fontSize: '1rem', margin: 0 }} dangerouslySetInnerHTML={{ __html: data.error.description }}></p>
          </div>
        </div>

      </div>
    </div>
  );
}
