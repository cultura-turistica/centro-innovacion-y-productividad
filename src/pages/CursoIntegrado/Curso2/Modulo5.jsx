import React, { useState } from 'react';
import { Settings, Route, Home, Camera, ArrowRight, Wrench, AlertTriangle } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo5({ headerColor, headerGradient, data }) {
  const [selectedGapId, setSelectedGapId] = useState(null);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
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
          color={headerColor || '#d946ef'}
        />

        {/* Ilustración Vectorial (Engranajes/Cadena) */}
        <div style={{ marginTop: '2rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 800 300" style={{ width: '100%', maxWidth: '900px', height: 'auto', borderRadius: '30px', boxShadow: '0 15px 30px rgba(79,70,229,0.15)', background: 'linear-gradient(to bottom, #eef2ff, #e0e7ff)' }}>
            <rect width="800" height="300" fill="transparent" />
            
            {/* Connection Line / Chain */}
            <path d="M 150 150 L 650 150" stroke="#c7d2fe" strokeWidth="8" strokeDasharray="15,10" />
            
            {/* Gear 1 (Transporte) */}
            <g transform="translate(200, 140)">
              <circle cx="0" cy="0" r="50" fill="#818cf8" />
              <circle cx="0" cy="0" r="20" fill="#eef2ff" />
              <path d="M -15 -60 L 15 -60 L 10 -45 L -10 -45 Z" fill="#6366f1" />
              <path d="M -15 60 L 15 60 L 10 45 L -10 45 Z" fill="#6366f1" />
              <path d="M -60 -15 L -60 15 L -45 10 L -45 -10 Z" fill="#6366f1" />
              <path d="M 60 -15 L 60 15 L 45 10 L 45 -10 Z" fill="#6366f1" />
              <path d="M -42 -42 L -30 -54 L -23 -40 L -33 -33 Z" fill="#6366f1" />
              <path d="M 42 42 L 30 54 L 23 40 L 33 33 Z" fill="#6366f1" />
              <path d="M 42 -42 L 54 -30 L 40 -23 L 33 -33 Z" fill="#6366f1" />
              <path d="M -42 42 L -54 30 L -40 23 L -33 33 Z" fill="#6366f1" />
              <text x="0" y="90" textAnchor="middle" fill="#4f46e5" fontWeight="bold" fontSize="18">Transporte</text>
            </g>

            {/* Gear 2 (Brecha - Rojo) */}
            <g transform="translate(400, 140)">
              <circle cx="0" cy="0" r="60" fill="#fca5a5" />
              <circle cx="0" cy="0" r="25" fill="#eef2ff" />
              <path d="M -15 -70 L 15 -70 L 10 -55 L -10 -55 Z" fill="#ef4444" />
              <path d="M -15 70 L 15 70 L 10 55 L -10 55 Z" fill="#ef4444" />
              <path d="M -70 -15 L -70 15 L -55 10 L -55 -10 Z" fill="#ef4444" />
              {/* Diente Roto */}
              <path d="M 70 -15 L 70 15 L 55 10 L 55 -10 Z" fill="#f87171" opacity="0.3" stroke="#ef4444" strokeDasharray="3,3" />
              <path d="M -50 -50 L -35 -65 L -25 -50 L -38 -38 Z" fill="#ef4444" />
              <path d="M 50 50 L 35 65 L 25 50 L 38 38 Z" fill="#ef4444" />
              <path d="M 50 -50 L 65 -35 L 50 -25 L 38 -38 Z" fill="#ef4444" />
              <path d="M -50 50 L -65 35 L -50 25 L -38 38 Z" fill="#ef4444" />
              <text x="0" y="100" textAnchor="middle" fill="#dc2626" fontWeight="bold" fontSize="20">¡BRECHA!</text>
            </g>

            {/* Gear 3 (Actividad) */}
            <g transform="translate(600, 140)">
              <circle cx="0" cy="0" r="50" fill="#34d399" />
              <circle cx="0" cy="0" r="20" fill="#eef2ff" />
              <path d="M -15 -60 L 15 -60 L 10 -45 L -10 -45 Z" fill="#10b981" />
              <path d="M -15 60 L 15 60 L 10 45 L -10 45 Z" fill="#10b981" />
              <path d="M -60 -15 L -60 15 L -45 10 L -45 -10 Z" fill="#10b981" />
              <path d="M 60 -15 L 60 15 L 45 10 L 45 -10 Z" fill="#10b981" />
              <path d="M -42 -42 L -30 -54 L -23 -40 L -33 -33 Z" fill="#10b981" />
              <path d="M 42 42 L 30 54 L 23 40 L 33 33 Z" fill="#10b981" />
              <path d="M 42 -42 L 54 -30 L 40 -23 L 33 -33 Z" fill="#10b981" />
              <path d="M -42 42 L -54 30 L -40 23 L -33 33 Z" fill="#10b981" />
              <text x="0" y="90" textAnchor="middle" fill="#059669" fontWeight="bold" fontSize="18">Actividad</text>
            </g>
          </svg>
        </div>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#d946ef' }}>
          <h4><Settings size={28} /> {data.engranaje.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.engranaje.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.engranaje.p2 }}></p>
        </div>

        {/* Gráfico de Cadena de Valor Interactivo Visual */}
        <h3 className="mb-4 text-center mt-12" style={{ color: headerColor || '#d946ef' }}>{data.grafico.title}</h3>
        <p className="text-center mb-10" style={{ color: '#475569' }} dangerouslySetInnerHTML={{ __html: data.grafico.description }}></p>

        <div style={{ position: 'relative', marginBottom: '4rem' }}>
          
          <div className="grid-3" style={{ gap: '20px' }}>
            {[
              { idx: 0, bg: '#fdf4ff', border: '#fbcfe8', color: '#c026d3', icon: Route },
              { idx: 1, bg: '#f5f3ff', border: '#ddd6fe', color: '#7c3aed', icon: MapPin },
              { idx: 2, bg: '#ecfdf5', border: '#a7f3d0', color: '#059669', icon: Activity }
            ].map((col) => {
              const eslabon = data.grafico.eslabones[col.idx];
              const Icon = col.icon;
              return (
                <div key={col.idx} style={{ background: col.bg, border: `2px solid ${col.border}`, borderRadius: '25px', padding: '2rem', position: 'relative' }}>
                  <div style={{ background: col.color, color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ color: col.color, fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>{eslabon.title}</h4>
                  
                  <div style={{ background: 'white', padding: '1rem', borderRadius: '15px', marginBottom: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginBottom: '5px' }}>NECESIDAD (Ideal)</div>
                    <div style={{ color: '#334155', fontSize: '0.95rem' }}>{eslabon.necesidad}</div>
                  </div>

                  <div style={{ textAlign: 'center', margin: '5px 0' }}><ArrowRight size={20} color="#94a3b8" style={{ transform: 'rotate(90deg)' }}/></div>

                  <div style={{ background: 'white', padding: '1rem', borderRadius: '15px', marginBottom: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginBottom: '5px' }}>REALIDAD (Hoy)</div>
                    <div style={{ color: '#ef4444', fontSize: '0.95rem' }}>{eslabon.realidad}</div>
                  </div>

                  <div style={{ background: col.color, color: 'white', padding: '1rem', borderRadius: '15px', marginTop: '1.5rem', fontWeight: 700, textAlign: 'center' }}>
                    {eslabon.brecha}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Cierre */}
        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', borderLeft: '5px solid #d946ef', display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <h4 style={{ color: '#86198f', margin: '0 0 5px 0', fontSize: '1.2rem' }}>{data.cierre.title}</h4>
            <p style={{ color: '#a21caf', margin: 0 }} dangerouslySetInnerHTML={{ __html: data.cierre.text }}></p>
          </div>
        </div>

        {/* Ejercicio Práctico - Juego Trampa */}
        <div className="interactive-card hover-scale" style={{ background: 'white', borderRadius: '30px', padding: '3rem', border: '2px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginTop: '4rem', marginBottom: '4rem' }}>
          <h4 style={{ color: '#0f172a', fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle size={30} color="#eab308" /> {data.ejercicio.title}
          </h4>
          <p style={{ fontSize: '1.15rem', color: '#475569', marginBottom: '2.5rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: data.ejercicio.description }}></p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {data.ejercicio.options.map(opt => {
              const isSelected = selectedGapId === opt.id;
              let status = 'idle';
              if (selectedGapId) {
                if (isSelected) status = opt.correct ? 'correct' : 'wrong';
                else if (opt.correct) status = 'correct';
              }

              return (
                <div 
                  key={opt.id}
                  onClick={() => !selectedGapId && setSelectedGapId(opt.id)}
                  style={{ 
                    padding: '1.5rem', 
                    borderRadius: '15px', 
                    border: '2px solid ' + (status === 'idle' ? '#e2e8f0' : status === 'correct' ? '#22c55e' : status === 'wrong' ? '#ef4444' : '#e2e8f0'),
                    background: status === 'idle' ? 'white' : status === 'correct' ? '#f0fdf4' : status === 'wrong' ? '#fef2f2' : 'white',
                    cursor: selectedGapId ? 'default' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ 
                      width: '45px', height: '45px', borderRadius: '50%', 
                      background: status === 'idle' ? '#f1f5f9' : status === 'correct' ? '#22c55e' : status === 'wrong' ? '#ef4444' : '#f1f5f9',
                      color: status === 'idle' ? '#64748b' : 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem',
                      flexShrink: 0
                    }}>{opt.id}</div>
                    <span style={{ fontSize: '1.1rem', color: '#1e293b', flex: 1, fontWeight: isSelected ? 700 : 500 }}>{opt.text}</span>
                  </div>
                  {isSelected && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'white', borderRadius: '10px', color: opt.correct ? '#15803d' : '#b91c1c', fontSize: '1rem', borderLeft: '4px solid ' + (opt.correct ? '#15803d' : '#b91c1c') }}>
                      {opt.reason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {selectedGapId && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                onClick={() => setSelectedGapId(null)}
                style={{ background: '#f1f5f9', color: '#475569', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 600 }}
              >
                Reintentar Juego
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
