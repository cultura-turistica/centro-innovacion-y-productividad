import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export default function MatchPuzzle({ title, description, pairs }) {
  const [shuffledDefs, setShuffledDefs] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matched, setMatched] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Shuffle definitions on mount
    const defs = pairs.map(p => ({ id: p.id, definition: p.definition, bg: p.defBg }));
    setShuffledDefs(defs.sort(() => Math.random() - 0.5));
  }, [pairs]);

  const handleTermClick = (id) => {
    if (matched.includes(id)) return;
    setSelectedTerm(id);
    setError(null);
  };

  const handleDefClick = (id) => {
    if (matched.includes(id)) return;
    if (!selectedTerm) return;

    if (selectedTerm === id) {
      setMatched([...matched, id]);
      setSelectedTerm(null);
      setError(null);
    } else {
      setError(id);
      setTimeout(() => setError(null), 1000);
    }
  };

  const isComplete = matched.length === pairs.length && pairs.length > 0;

  return (
    <div style={{ background: 'white', borderRadius: '30px', padding: '3rem', border: '2px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      {title && <h4 style={{ fontSize: '1.6rem', color: '#1e293b', marginBottom: '1rem' }}>{title}</h4>}
      {description && <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2.5rem' }}>{description}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {/* Terms Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {pairs.map(p => {
            const isMatched = matched.includes(p.id);
            const isSelected = selectedTerm === p.id;
            return (
              <button
                key={`term-${p.id}`}
                onClick={() => handleTermClick(p.id)}
                disabled={isMatched}
                style={{
                  padding: '1.5rem',
                  borderRadius: '15px',
                  background: isMatched ? '#f0fdf4' : (isSelected ? '#eff6ff' : (p.termBg || '#f8fafc')),
                  border: `2px solid ${isMatched ? '#22c55e' : (isSelected ? '#3b82f6' : '#e2e8f0')}`,
                  color: isMatched ? '#166534' : '#1e293b',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: isMatched ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {p.term}
                {isMatched && <CheckCircle size={24} color="#22c55e" />}
              </button>
            );
          })}
        </div>

        {/* Definitions Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {shuffledDefs.map(d => {
            const isMatched = matched.includes(d.id);
            const isError = error === d.id;
            return (
              <button
                key={`def-${d.id}`}
                onClick={() => handleDefClick(d.id)}
                disabled={isMatched}
                style={{
                  padding: '1.5rem',
                  borderRadius: '15px',
                  background: isMatched ? '#f0fdf4' : (isError ? '#fef2f2' : (d.bg || '#f8fafc')),
                  border: `2px solid ${isMatched ? '#22c55e' : (isError ? '#ef4444' : '#e2e8f0')}`,
                  color: isMatched ? '#166534' : '#334155',
                  fontSize: '1rem',
                  textAlign: 'left',
                  lineHeight: 1.5,
                  cursor: isMatched ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  animation: isError ? 'shake 0.4s' : 'none'
                }}
              >
                <span style={{ paddingRight: '10px' }}>{d.definition}</span>
                {isMatched && <CheckCircle size={24} color="#22c55e" style={{ flexShrink: 0 }} />}
                {isError && <XCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      </div>

      {isComplete && (
        <div className="fade-in" style={{ marginTop: '3rem', padding: '1.5rem', background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '15px', color: '#166534', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
          ¡Excelente! Has emparejado correctamente todos los conceptos de este ejercicio.
        </div>
      )}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
      `}</style>
    </div>
  );
}
