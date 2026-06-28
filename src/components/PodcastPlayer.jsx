import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function PodcastPlayer({ title, subtitle, audioSrc, transcript, color = '#032968' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef(null);
  
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 0;
    setCurrentTime(current);
    setDuration(dur);
    if (dur > 0) {
      setProgress((current / dur) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    const newTime = (newProgress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newProgress);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
      border: '1px solid #e2e8f0',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Fondo decorativo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '6px',
        background: `linear-gradient(90deg, ${color}, #38bdf8)`
      }}></div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '20px', 
          background: `${color}15`, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Volume2 size={32} color={color} />
        </div>
        
        <div style={{ flex: 1, minWidth: '200px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
            {subtitle || 'Clip de Audio'}
          </div>
          <h4 style={{ margin: 0, fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>
            {title}
          </h4>
        </div>
      </div>

      {/* Reproductor / Controles */}
      <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={togglePlay}
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            background: color, 
            border: 'none', 
            color: 'white',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: `0 8px 20px ${color}40`,
            flexShrink: 0,
            transition: 'transform 0.2s'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />}
        </button>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="0.1"
            value={progress}
            onChange={handleProgressChange}
            style={{ 
              width: '100%', 
              cursor: 'pointer',
              accentColor: color,
              height: '6px'
            }} 
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Botón Transcripción */}
      {transcript && (
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            style={{
              background: 'transparent',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#475569',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <FileText size={18} />
            {showTranscript ? 'Ocultar Transcripción' : 'Leer Transcripción'}
            {showTranscript ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {showTranscript && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '1.5rem', 
              background: '#f8fafc', 
              borderRadius: '12px',
              color: '#334155',
              lineHeight: 1.6,
              fontSize: '1.05rem',
              borderLeft: `4px solid ${color}`
            }}>
              {transcript}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
