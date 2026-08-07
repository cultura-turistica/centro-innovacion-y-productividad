import React, { useState } from 'react';
import { Map, CalendarClock, TrendingUp, CheckCircle, LineChart, Target, Crosshair, Ruler, CheckSquare, Lightbulb, Clock } from 'lucide-react';
import MatchPuzzle from '../../../components/MatchPuzzle';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo7({ headerColor, headerGradient, data }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)',
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
          color={headerColor || '#b91c1c'}
        />

        {/* Foto Real de Objetivo (Unsplash) */}
        <div style={{ marginTop: '2rem', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '800px', height: '350px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Darts_in_a_dartboard.jpg/1280px-Darts_in_a_dartboard.jpg" 
              alt="Objetivo SMART" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
        
        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#b91c1c' }}>
          <h4><Map size={28} /> {data.gps.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: data.gps.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: data.gps.p2 }}></p>
        </div>

        {/* Metodología SMART Interactiva */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#b91c1c' }}>{data.smart.title}</h3>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '4rem' }}>
           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {data.smart.steps.map((step, i) => {
                const icons = [<Crosshair size={20} />, <Ruler size={20} />, <CheckSquare size={20} />, <Lightbulb size={20} />, <Clock size={20} />];
                return (
                  <div 
                    key={i} 
                    onClick={() => setActiveStep(i)}
                    style={{ 
                      padding: '1rem 1.5rem', 
                      background: activeStep === i ? (headerColor || '#b91c1c') : '#f8fafc', 
                      color: activeStep === i ? 'white' : '#475569', 
                      borderRadius: '15px', 
                      cursor: 'pointer', 
                      fontWeight: activeStep === i ? 800 : 500,
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}
                  >
                    {icons[i]}
                    <span>{step.title}</span>
                  </div>
                );
              })}
           </div>
           <div style={{ flex: 1.5, background: '#fef2f2', border: '2px dashed #fca5a5', padding: '3rem', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div>
                <h4 style={{ color: '#991b1b', fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>{data.smart.steps[activeStep].title}</h4>
                <p style={{ color: '#7f1d1d', fontSize: '1.2rem', lineHeight: 1.6 }}>{data.smart.steps[activeStep].desc}</p>
              </div>
           </div>
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <MatchPuzzle 
            title={data.puzzle.title} 
            description={data.puzzle.description}
            pairs={data.puzzle.pairs} 
          />
        </div>

        <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '30px', border: '2px solid #e2e8f0' }}>
           <h4 style={{ color: '#0f172a', fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>{data.seguimiento.title}</h4>
           
           <div className="grid-2" style={{ gap: '2rem' }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                 <CalendarClock size={40} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                 <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e3a8a' }}>{data.seguimiento.tecnico.title}</h5>
                 <p style={{ color: '#475569', marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: data.seguimiento.tecnico.desc }}></p>
              </div>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                 <LineChart size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
                 <h5 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#065f46' }}>{data.seguimiento.estrategico.title}</h5>
                 <p style={{ color: '#475569', marginTop: '10px' }}>{data.seguimiento.estrategico.desc}</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
