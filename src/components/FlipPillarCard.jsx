import React, { useState } from 'react';

export default function FlipPillarCard({ icon: Icon, title, subtitle, content, color, bg }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="interactive-card"
      style={{ perspective: '1000px', cursor: 'pointer', height: '100%', minHeight: '380px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        style={{
          position: 'relative', width: '100%', height: '100%',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: 'white', padding: '2rem', borderRadius: '25px', boxShadow: '0 10px 35px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: `2px solid ${color}30` }}>
          <div style={{ background: bg, width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', boxShadow: `0 10px 25px ${color}40` }}>
            <Icon size={60} color={color} />
          </div>
          <h4 style={{ color: color, fontSize: '1.8rem', fontWeight: '900', margin: '0 0 10px 0' }}>{title}</h4>
          <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>{subtitle}</p>
          <div style={{ marginTop: '25px', background: '#f1f5f9', padding: '8px 20px', borderRadius: '20px', color: '#475569', fontSize: '0.9rem', fontWeight: 'bold' }}>Clic para revelar</div>
        </div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: bg, padding: '2.5rem', borderRadius: '25px', boxShadow: `0 15px 40px ${color}30`, transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `2px solid ${color}` }}>
          <h4 style={{ margin: '0 0 15px 0', fontWeight: '900', color: color, fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Icon size={28} /> {title}</h4>
          <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
