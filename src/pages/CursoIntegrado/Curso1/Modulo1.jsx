import React, { useState } from 'react';
import { BookOpen, Users, Map, Coins, Target, AlertTriangle, Edit3 } from 'lucide-react';
import PodcastPlayer from '../../../components/PodcastPlayer';
import FlipPillarCard from '../../../components/FlipPillarCard';

export default function Modulo1({ headerColor, headerGradient, data }) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Header Rediseñado con ILUSTRACIÓN SVG in-line garantizada */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0f2fe' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
                  <path fill="#7dd3fc" d="M0,300 L0,200 Q200,100 400,200 T800,200 T1200,200 L1200,300 Z" />
                  <path fill="#38bdf8" d="M0,300 L0,250 Q300,150 600,250 T1200,250 L1200,300 Z" />
                  <circle cx="950" cy="80" r="40" fill="#fef08a" />
                  {/* Arbolitos y casitas ilustradas */}
                  <path fill="#22c55e" d="M200,230 L220,180 L240,230 Z M210,230 L210,250 L230,250 L230,230 Z" />
                  <path fill="#16a34a" d="M800,280 L830,200 L860,280 Z M820,280 L820,300 L840,300 L840,280 Z" />
                  <rect x="500" y="220" width="60" height="40" fill="#fde047" />
                  <polygon points="490,220 530,190 570,220" fill="#ef4444" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>{data.header.label}</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: data.header.title }}></h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>{data.header.description}</p>
                </div>
                <div className="hidden md:block">
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Comunidad" alt="Comunidad" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title={data.podcast.title}
                subtitle={data.podcast.subtitle}
                audioSrc={data.podcast.audioSrc}
                transcript={<div dangerouslySetInnerHTML={{ __html: data.podcast.transcript }} />}
                color={headerColor}
              />

              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> {data.interactiveCard.title}</h4>
                {data.interactiveCard.paragraphs.map((p, i) => (
                  <p key={i} style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  <FlipPillarCard icon={Users} title={data.interactiveCard.pillars[0].title} subtitle={data.interactiveCard.pillars[0].subtitle} color="#1d4ed8" bg="#dbeafe"
                    content={data.interactiveCard.pillars[0].content}
                  />
                  <FlipPillarCard icon={Map} title={data.interactiveCard.pillars[1].title} subtitle={data.interactiveCard.pillars[1].subtitle} color="#15803d" bg="#dcfce7"
                    content={data.interactiveCard.pillars[1].content}
                  />
                  <FlipPillarCard icon={Coins} title={data.interactiveCard.pillars[2].title} subtitle={data.interactiveCard.pillars[2].subtitle} color="#b45309" bg="#fef3c7"
                    content={data.interactiveCard.pillars[2].content}
                  />
                </div>
              </div>

              {/* Dinámica Rediseñada */}
              <div style={{ background: 'white', borderRadius: '25px', padding: '3rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> {data.dinamica.label}</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>{data.dinamica.title}</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>{data.dinamica.description}</p>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setSliderValue(0)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue < 50 ? '#166534' : '#f1f5f9', color: sliderValue < 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Target size={20} /> {data.dinamica.tabs.ideal.label}
                  </button>
                  <button onClick={() => setSliderValue(100)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue >= 50 ? '#b91c1c' : '#f1f5f9', color: sliderValue >= 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertTriangle size={20} /> {data.dinamica.tabs.desgaste.label}
                  </button>
                </div>

                <div style={{ padding: '3rem', borderRadius: '20px', background: sliderValue < 50 ? '#f0fdf4' : '#fef2f2', border: `2px solid ${sliderValue < 50 ? '#bbf7d0' : '#fecaca'}`, transition: 'all 0.4s ease', minHeight: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  {sliderValue < 50 ? (
                    <div className="fade-in">
                      <Target size={60} color="#16a34a" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#166534', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>{data.dinamica.tabs.ideal.title}</h4>
                      <p style={{ color: '#14532d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>{data.dinamica.tabs.ideal.description}</p>
                    </div>
                  ) : (
                    <div className="fade-in">
                      <AlertTriangle size={60} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#b91c1c', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>{data.dinamica.tabs.desgaste.title}</h4>
                      <p style={{ color: '#7f1d1d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>{data.dinamica.tabs.desgaste.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
  );
}
