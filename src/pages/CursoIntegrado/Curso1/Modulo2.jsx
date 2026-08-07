import React from 'react';
import { BookOpen, Users, Coins, Leaf, Edit3 } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';

export default function Modulo2({ headerColor, headerGradient, data }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#dcfce7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bbf7d0" d="M0,300 L0,180 Q300,100 600,180 T1200,180 L1200,300 Z" />
                  <path fill="#86efac" d="M0,300 L0,220 Q400,150 800,220 T1200,220 L1200,300 Z" />
                  <path fill="#4ade80" d="M0,300 L0,260 Q600,180 1200,260 L1200,300 Z" />
                  <circle cx="200" cy="90" r="50" fill="#fef08a" />
                  {/* Patrón de hojitas / cascada SVG */}
                  <path fill="#3b82f6" d="M500,220 Q520,250 500,300 L550,300 Q540,250 560,220 Z" />
                  <circle cx="800" cy="200" r="15" fill="#16a34a" />
                  <circle cx="820" cy="220" r="25" fill="#15803d" />
                  <circle cx="770" cy="210" r="20" fill="#14532d" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>{data.header.label}</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: data.header.title }}></h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>{data.header.description}</p>
                </div>
                <div className="hidden md:block">
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Naturaleza" alt="Naturaleza" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> {data.interactiveCard.title}</h4>
                {data.interactiveCard.paragraphs.map((p, i) => (
                  <p key={i} style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> {data.aplicacion.label}</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>{data.aplicacion.title}</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>{data.aplicacion.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <FlipPillarCard icon={Leaf} title={data.aplicacion.pillars[0].title} subtitle={data.aplicacion.pillars[0].subtitle} color="#16a34a" bg="#f0fdf4"
                    content={data.aplicacion.pillars[0].content}
                  />
                  <FlipPillarCard icon={Users} title={data.aplicacion.pillars[1].title} subtitle={data.aplicacion.pillars[1].subtitle} color="#ea580c" bg="#fff7ed"
                    content={data.aplicacion.pillars[1].content}
                  />
                  <FlipPillarCard icon={Coins} title={data.aplicacion.pillars[2].title} subtitle={data.aplicacion.pillars[2].subtitle} color="#2563eb" bg="#eff6ff"
                    content={data.aplicacion.pillars[2].content}
                  />
                </div>
              </div>
            </div>
          </div>
  );
}
