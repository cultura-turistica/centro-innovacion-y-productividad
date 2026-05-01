import React, { useState, useEffect } from 'react';
import { Camera, Settings, Aperture, Clock, Sun, Image as ImageIcon, Play } from 'lucide-react';

export default function Modulo6() {
  // Exposure arrays
  const apertures = [2.8, 4, 5.6, 8, 11, 16, 22];
  const shutters = [1000, 500, 250, 125, 60, 30, 15, 8, 4, 2, 1]; // Denominators: 1/1000 to 1/1
  const isos = [100, 200, 400, 800, 1600, 3200, 6400];

  // State indices
  const [apertureIdx, setApertureIdx] = useState(3); // f/8
  const [shutterIdx, setShutterIdx] = useState(4); // 1/60
  const [isoIdx, setIsoIdx] = useState(0); // 100

  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [flash, setFlash] = useState(false);
  const [whiteBalance, setWhiteBalance] = useState('Daylight');

  const wbOptions = [
    { id: 'AWB', name: 'Auto', color: '#fff', tint: 'none' },
    { id: 'Daylight', name: 'Sol', color: '#ffcc00', tint: 'rgba(255, 200, 0, 0.05)' },
    { id: 'Shade', name: 'Sombra', color: '#ffaa00', tint: 'rgba(255, 100, 0, 0.2)' },
    { id: 'Cloudy', name: 'Nublado', color: '#cccccc', tint: 'rgba(255, 150, 50, 0.15)' },
    { id: 'Tungsten', name: 'Tungsteno', color: '#3399ff', tint: 'rgba(0, 100, 255, 0.3)' },
    { id: 'Fluorescent', name: 'Fluorescente', color: '#ccffcc', tint: 'rgba(200, 0, 255, 0.1)' }
  ];

  const currentWB = wbOptions.find(o => o.id === whiteBalance);

  const aperture = apertures[apertureIdx];
  const shutter = shutters[shutterIdx];
  const iso = isos[isoIdx];

  // Target EV for correct exposure (Sunny daylight scene)
  const TARGET_EV = 13;

  // Calculate EV
  const t = 1 / shutter;
  const N = aperture;
  const ev100 = Math.log2((N * N) / t);
  const currentEV = ev100 - Math.log2(iso / 100);
  
  // Difference in stops
  const stopsDiff = TARGET_EV - currentEV;

  // Calculate visual effects
  const brightness = Math.max(0.1, Math.min(4, Math.pow(2, stopsDiff)));
  
  // Depth of field (Foreground & Background blur - BOKEH EFFECT)
  // f/16 and f/22 are completely sharp (0 blur). Wider apertures are blurrier.
  // Using 0.01 instead of 0 to prevent WebKit/Blink rendering bugs with blur(0px) + drop-shadow.
  const bgBlur = aperture >= 16 ? 0.01 : Math.max(0.01, (16 - aperture) * 1.5); 
  const fgBlur = aperture >= 16 ? 0.01 : Math.max(0.01, (16 - aperture) * 2.0); 

  // Motion blur (applied to the hummingbird in flight horizontally)
  // At 1/1000s it's frozen (0). At 1/30s it's a huge blur.
  const motionBlur = isPhotoTaken ? Math.max(0, (1000 / shutter) * 0.8 - 0.8) : 0;
  
  // Noise
  const noiseOpacity = Math.max(0, (Math.log2(iso / 100) / Math.log2(64)) * 0.8);

  // White Balance Filter Logic
  const getWBFilter = () => {
    switch(whiteBalance) {
      case 'Tungsten': return 'sepia(0.3) hue-rotate(180deg) saturate(1.2)'; // Cold/Blue
      case 'Shade': return 'sepia(0.5) hue-rotate(-10deg) saturate(1.4)'; // Warm/Orange
      case 'Cloudy': return 'sepia(0.3) hue-rotate(-5deg) saturate(1.2)'; // Slightly warm
      case 'Fluorescent': return 'hue-rotate(90deg) saturate(1.1) brightness(1.1)'; // Purple/Greenish
      default: return '';
    }
  };

  const wbFilter = getWBFilter();

  const takePhoto = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setIsPhotoTaken(true);
    }, 150);
  };

  const resetScene = () => {
    setIsPhotoTaken(false);
  };

  return (
    <div className="fade-in pb-10" style={{background: '#0F0F0F', minHeight: '100vh', padding: '2rem', fontFamily: 'system-ui, sans-serif'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        
        {/* Header */}
        <div style={{marginBottom: '2rem'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '15px', margin: 0, color: '#ffffff'}}>
            <Camera size={40} color="#ff3333" /> Simulador Manual (M)
          </h2>
          <p style={{fontSize: '1rem', color: '#a3a3a3', marginTop: '0.5rem', maxWidth: '800px'}}>
            Ajusta los controles de la zona creativa para fotografiar a este colibrí en pleno vuelo. Observa cómo el fondo (selva) y el primer plano (flores) cambian con la Apertura, y cómo las alas y el cuerpo del ave reaccionan a la Velocidad de Obturación.
          </p>
        </div>

        {/* Main Interface */}
        <div style={{
          background: 'linear-gradient(to bottom, #2d2d2d, #1a1a1a)', 
          borderRadius: '15px', 
          border: '1px solid #404040',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexWrap: 'wrap',
          overflow: 'hidden'
        }}>
          
          {/* Left Column: Viewfinder & Meter */}
          <div style={{flex: '1 1 65%', padding: '2rem', borderRight: '1px solid #333'}}>
            
            {/* Viewfinder Container */}
            <div style={{
              position: 'relative', 
              width: '100%', 
              aspectRatio: '3/2', 
              background: '#000', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.5)'
            }}>
              
              {/* Custom SVG filter for directional motion blur */}
              <svg style={{width:0, height:0, position:'absolute'}}>
                <filter id="directionalBlur">
                  <feGaussianBlur stdDeviation={`${motionBlur}, 0`} />
                </filter>
              </svg>

              {/* Layer 1: Background (Nature/Forest) */}
              <img 
                src="/images/sim_nature_bg.png" 
                alt="Fondo Selva" 
                style={{
                  position: 'absolute', top: '-5%', left: '-5%', width: '110%', height: '110%', 
                  objectFit: 'cover',
                  filter: `blur(${isPhotoTaken ? bgBlur : 0.01}px) brightness(${brightness}) ${wbFilter}`,
                  transition: 'filter 0.3s ease'
                }} 
              />
              
              {/* Layer 2: Subject (Hummingbird) - Blurs directionally if shutter is slow */}
              <div style={{
                position: 'absolute', top: '15%', left: '20%', width: '60%', height: 'auto',
                filter: `brightness(${brightness}) ${wbFilter} drop-shadow(0 20px 15px rgba(0,0,0,0.4))`,
                transition: 'filter 0.3s ease'
              }}>
                <img 
                  src="/images/sim_bird_transparent.png" 
                  alt="Colibrí" 
                  style={{
                    width: '100%', height: '100%', display: 'block',
                    filter: motionBlur > 0 ? 'url(#directionalBlur)' : 'none',
                    transition: 'filter 0.3s ease'
                  }} 
                />
              </div>

              {/* Layer 3: Foreground (Leaves/Flower) */}
              <img 
                src="/images/sim_leaves_transparent.png" 
                alt="Hojas Primer Plano" 
                style={{
                  position: 'absolute', bottom: '-20%', right: '-10%', width: '70%', height: 'auto',
                  filter: `blur(${isPhotoTaken ? fgBlur : Math.max(0.01, Math.min(2, fgBlur))}px) brightness(${brightness}) ${wbFilter} drop-shadow(0 30px 10px rgba(0,0,0,0.6))`,
                  transition: 'filter 0.3s ease',
                  transform: 'scale(1.2)'
                }} 
              />

              {/* Noise Overlay */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                opacity: isPhotoTaken ? noiseOpacity : 0,
                mixBlendMode: 'overlay'
              }}></div>

              {/* Flash Overlay */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'white',
                opacity: flash ? 1 : 0, transition: 'opacity 0.1s ease', pointerEvents: 'none'
              }}></div>

              {/* Status Tags */}
              {!isPhotoTaken ? (
                <div style={{position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.7)', color: '#ff3333', padding: '5px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #ff3333'}}>
                  <span style={{width: '8px', height: '8px', background: '#ff3333', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite'}}></span> LIVE VIEW
                </div>
              ) : (
                <div style={{position: 'absolute', top: '20px', left: '20px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px 15px', borderRadius: '4px', border: '1px solid #444'}}>
                  <div style={{fontWeight: 'bold', marginBottom: '5px', color: '#00cc66', fontSize: '0.9rem'}}><ImageIcon size={14} style={{display: 'inline', verticalAlign: 'middle', marginRight: '5px'}}/> RESULTADO CAPTURADO</div>
                  <div style={{fontSize: '0.8rem', color: '#ccc', fontFamily: 'monospace'}}>f/{aperture} | 1/{shutter} SEC | ISO {iso}</div>
                </div>
              )}
            </div>

            {/* Exposure Balanza (Visual Scale) */}
            <div style={{marginTop: '2rem', padding: '1.5rem', background: '#111', borderRadius: '12px', border: '1px solid #333', textAlign: 'center'}}>
              <div style={{color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', justifyContent: 'center', gap: '20px'}}>
                <span style={{color: stopsDiff < -1 ? '#ff3333' : stopsDiff > 1 ? '#ff3333' : '#00cc66'}}>
                   {stopsDiff < -1 ? "¡Poca Luz! (Subexpuesta)" : stopsDiff > 1 ? "¡Mucha Luz! (Sobreexpuesta)" : "¡EQUILIBRIO PERFECTO!"}
                </span>
              </div>
              
              <div style={{position: 'relative', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                {/* The Scale SVG */}
                <svg width="300" height="80" viewBox="0 0 300 80" style={{overflow: 'visible'}}>
                   {/* Base/Pivot */}
                   <path d="M140 80 L160 80 L150 60 Z" fill="#444" />
                   
                   {/* Tilting Arm */}
                   <g style={{
                     transform: `rotate(${Math.max(-20, Math.min(20, stopsDiff * -5))}deg)`,
                     transformOrigin: '150px 60px',
                     transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                   }}>
                      <line x1="50" y1="60" x2="250" y2="60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                      
                      {/* Left Pan (Light Available) */}
                      <g transform="translate(50, 60)">
                         <circle cx="0" cy="0" r="15" fill="#333" stroke="#ff3333" strokeWidth="2" />
                         <Sun size={14} x="-7" y="-7" color="#ff3333" />
                         <text x="0" y="30" fill="#888" fontSize="10" textAnchor="middle">LUZ</text>
                      </g>
                      
                      {/* Right Pan (Camera Settings) */}
                      <g transform="translate(250, 60)">
                         <circle cx="0" cy="0" r="15" fill="#333" stroke="#00cc66" strokeWidth="2" />
                         <Settings size={14} x="-7" y="-7" color="#00cc66" />
                         <text x="0" y="30" fill="#888" fontSize="10" textAnchor="middle">AJUSTES</text>
                      </g>
                   </g>
                </svg>
                
                <p style={{fontSize: '0.8rem', color: '#666', marginTop: '10px'}}>
                  {stopsDiff < 0 ? "Abre el diafragma, baja velocidad o sube ISO para equilibrar." : 
                   stopsDiff > 0 ? "Cierra el diafragma, sube velocidad o baja ISO para equilibrar." : 
                   "¡Toma la foto ahora!"}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Controls */}
          <div style={{flex: '1 1 30%', padding: '2rem', background: '#222', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            
            {/* Custom CSS for Sliders */}
            <style>{`
              .canon-slider {
                -webkit-appearance: none; width: 100%; height: 4px; background: #444; border-radius: 2px; outline: none;
              }
              .canon-slider::-webkit-slider-thumb {
                -webkit-appearance: none; appearance: none; width: 16px; height: 24px; background: #ff3333; cursor: pointer; border-radius: 2px;
                box-shadow: 0 0 5px rgba(0,0,0,0.5); border: 1px solid #cc0000;
              }
              .canon-slider::-moz-range-thumb {
                width: 16px; height: 24px; background: #ff3333; cursor: pointer; border-radius: 2px;
                box-shadow: 0 0 5px rgba(0,0,0,0.5); border: 1px solid #cc0000;
              }
              .tick-container { display: flex; justify-content: space-between; padding: 0 8px; margin-top: 8px; }
              .tick { font-size: 0.7rem; color: #777; font-family: monospace; text-align: center; width: 20px; }
              @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.2; } 100% { opacity: 1; } }
            `}</style>

            {/* Aperture Control */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase'}}><Aperture size={16} color="#aaa"/> Apertura</span>
                <span style={{color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'monospace'}}>f/{aperture}</span>
              </div>
              <p style={{fontSize: '0.75rem', color: '#888', marginTop: '-10px', marginBottom: '10px'}}>Controla el desenfoque del fondo</p>
              <input type="range" min="0" max={apertures.length - 1} value={apertureIdx} onChange={(e) => setApertureIdx(Number(e.target.value))} className="canon-slider" />
              <div className="tick-container">
                {apertures.map(val => <div key={val} className="tick">{val}</div>)}
              </div>
            </div>

            {/* Shutter Speed Control */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase'}}><Clock size={16} color="#aaa"/> Velocidad</span>
                <span style={{color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'monospace'}}>1/{shutter}</span>
              </div>
              <p style={{fontSize: '0.75rem', color: '#888', marginTop: '-10px', marginBottom: '10px'}}>Controla el rastro de movimiento</p>
              <input type="range" min="0" max={shutters.length - 1} value={shutterIdx} onChange={(e) => setShutterIdx(Number(e.target.value))} className="canon-slider" />
              <div className="tick-container">
                {shutters.filter((_,i) => i%2===0).map(val => <div key={val} className="tick">1/{val}</div>)}
              </div>
            </div>

            {/* ISO Control */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase'}}><Sun size={16} color="#aaa"/> ISO</span>
                <span style={{color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'monospace'}}>{iso}</span>
              </div>
              <p style={{fontSize: '0.75rem', color: '#888', marginTop: '-10px', marginBottom: '10px'}}>Sensibilidad (más alto = más luz/ruido)</p>
              <input type="range" min="0" max={isos.length - 1} value={isoIdx} onChange={(e) => setIsoIdx(Number(e.target.value))} className="canon-slider" />
              <div className="tick-container">
                {isos.map(val => <div key={val} className="tick">{val}</div>)}
              </div>
            </div>

            {/* White Balance Control */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase'}}>Balance de Blancos</span>
                <span style={{color: currentWB.color, fontSize: '0.9rem', fontWeight: 'bold'}}>{currentWB.name}</span>
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {wbOptions.map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => setWhiteBalance(opt.id)}
                    style={{
                      flex: '1 1 30%', background: whiteBalance === opt.id ? opt.color : '#333', 
                      color: whiteBalance === opt.id ? '#000' : '#ccc', border: 'none', 
                      padding: '8px 4px', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer',
                      fontWeight: 'bold', transition: 'all 0.2s'
                    }}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
              <p style={{
                fontSize: '0.75rem', color: '#a3a3a3', marginTop: '15px', lineHeight: '1.4', 
                background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px', 
                borderLeft: '3px solid #ffcc00'
              }}>
                <strong>Tip:</strong> El Balance de Blancos no afecta la cantidad de luz (exposición), solo corrige la "temperatura del color". Úsalo para que los colores se vean naturales si la escena se ve muy azul o naranja.
              </p>
            </div>

            {/* Actions */}
            <div style={{marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #333'}}>
              {!isPhotoTaken ? (
                <button onClick={takePhoto} style={{
                  width: '100%', background: 'linear-gradient(to bottom, #10b981, #059669)', color: 'white', 
                  border: '1px solid #047857', padding: '15px', borderRadius: '8px', fontSize: '1rem', 
                  fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', 
                  alignItems: 'center', gap: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  textTransform: 'uppercase', letterSpacing: '1px'
                }}>
                  <Camera size={20}/> Shoot
                </button>
              ) : (
                <button onClick={resetScene} style={{
                  width: '100%', background: 'linear-gradient(to bottom, #3b82f6, #2563eb)', color: 'white', 
                  border: '1px solid #1d4ed8', padding: '15px', borderRadius: '8px', fontSize: '1rem', 
                  fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', 
                  alignItems: 'center', gap: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  textTransform: 'uppercase', letterSpacing: '1px'
                }}>
                  <Play size={20}/> Back to Live View
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
