'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Settings, Sun, Image as ImageIcon, RotateCcw } from 'lucide-react';

export default function CameraSimulator({ data, themeColor = "#4f46e5" }) {
  if (!data || !data.simulator) return null;
  const sim = data.simulator;

  // Exposure arrays
  const apertures = [2.8, 4, 5.6, 8, 11, 16, 22];
  const shutters = [1000, 500, 250, 125, 60, 30, 15, 8, 4, 2, 1]; // Denominators
  const isos = [100, 200, 400, 800, 1600, 3200, 6400];

  // State indices
  const [apertureIdx, setApertureIdx] = useState(3); // f/8
  const [shutterIdx, setShutterIdx] = useState(4); // 1/60
  const [isoIdx, setIsoIdx] = useState(0); // 100

  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const [flash, setFlash] = useState(false);
  const [whiteBalance, setWhiteBalance] = useState(sim.controls.whiteBalanceOptions[0].id);

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
  
  // Depth of field
  const bgBlur = aperture >= 16 ? 0.01 : Math.max(0.01, (16 - aperture) * 1.5); 
  const fgBlur = aperture >= 16 ? 0.01 : Math.max(0.01, (16 - aperture) * 2.0); 

  // Motion blur (applied to the hummingbird in flight horizontally)
  const motionBlur = isPhotoTaken ? Math.max(0, (1000 / shutter) * 0.8 - 0.8) : 0;
  
  // Noise
  const noiseOpacity = Math.max(0, (Math.log2(iso / 100) / Math.log2(64)) * 0.8);

  // White Balance Filter Logic
  const getWBFilter = () => {
    const selectedOption = sim.controls.whiteBalanceOptions.find(opt => opt.id === whiteBalance);
    return selectedOption ? selectedOption.filter : '';
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
    <div className="w-full my-8 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col lg:flex-row font-sans">
      
      {/* Left Column: Viewfinder & Meter */}
      <div className="flex-1 p-6 lg:p-8 lg:border-r border-slate-800 flex flex-col">
        
        {/* Viewfinder Container */}
        <div className="relative w-full aspect-[3/2] bg-black rounded-xl overflow-hidden shadow-inner">
          
          {/* Custom SVG filter for directional motion blur */}
          <svg className="w-0 h-0 absolute">
            <filter id="directionalBlur">
              <feGaussianBlur stdDeviation={`${motionBlur}, 0`} />
            </filter>
          </svg>

          {/* Layer 1: Background (Nature/Forest) */}
          <div 
            className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] transition-[filter] duration-300 ease-out"
            style={{ filter: `blur(${isPhotoTaken ? bgBlur : 0.01}px) brightness(${brightness}) ${wbFilter}` }}
          >
            <Image 
              src={sim.images.bg}
              alt={sim.labels.bgAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
          
          {/* Layer 2: Subject (Hummingbird) */}
          <div 
            className="absolute top-[15%] left-[20%] w-[60%] h-auto transition-[filter] duration-300 ease-out drop-shadow-2xl"
            style={{ filter: `brightness(${brightness}) ${wbFilter}` }}
          >
            <div
              className="relative w-full aspect-square transition-[filter] duration-300 ease-out"
              style={{ filter: motionBlur > 0 ? 'url(#directionalBlur)' : 'none' }}
            >
              <Image 
                src={sim.images.subject}
                alt={sim.labels.subjectAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 60vw, 40vw"
              />
            </div>
          </div>

          {/* Layer 3: Foreground (Leaves/Flower) */}
          <div 
            className="absolute -bottom-[20%] -right-[10%] w-[70%] h-auto transition-all duration-300 ease-out drop-shadow-[0_30px_10px_rgba(0,0,0,0.6)] scale-110"
            style={{ filter: `blur(${isPhotoTaken ? fgBlur : Math.max(0.01, Math.min(2, fgBlur))}px) brightness(${brightness}) ${wbFilter}` }}
          >
            <div className="relative w-full aspect-square">
              <Image 
                src={sim.images.foreground}
                alt={sim.labels.foregroundAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 70vw, 45vw"
              />
            </div>
          </div>

          {/* Noise Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              opacity: isPhotoTaken ? noiseOpacity : 0
            }}
          ></div>

          {/* Flash Overlay */}
          <div 
            className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-100 ease-out ${flash ? 'opacity-100' : 'opacity-0'}`}
          ></div>

          {/* Status Tags */}
          {!isPhotoTaken ? (
            <div className="absolute top-4 right-4 bg-black/70 text-red-500 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-2 border border-red-500/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> {sim.status.liveView}
            </div>
          ) : (
            <div className="absolute top-4 left-4 bg-black/80 text-white p-3 rounded-md border border-slate-700 backdrop-blur-sm">
              <div className="font-bold mb-1 text-emerald-400 text-sm flex items-center gap-2">
                <ImageIcon size={14} /> {sim.status.captured}
              </div>
              <div className="text-xs text-slate-300 font-mono tracking-wider">
                f/{aperture} | 1/{shutter}s | ISO {iso}
              </div>
            </div>
          )}
        </div>

        {/* Exposure Balanza (Visual Scale) */}
        <div className="mt-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center flex-grow flex flex-col justify-center">
          <div className="text-sm font-bold mb-6 uppercase tracking-widest flex justify-center">
            <span className={stopsDiff < -1 ? 'text-rose-500' : stopsDiff > 1 ? 'text-amber-500' : 'text-emerald-500'}>
              {stopsDiff < -1 ? sim.balance.underexposed : stopsDiff > 1 ? sim.balance.overexposed : sim.balance.perfect}
            </span>
          </div>
          
          <div className="relative h-24 flex flex-col items-center justify-center">
            {/* The Scale SVG */}
            <svg width="300" height="80" viewBox="0 0 300 80" className="overflow-visible">
              {/* Base/Pivot */}
              <path d="M140 80 L160 80 L150 60 Z" fill="#334155" />
              
              {/* Tilting Arm */}
              <g style={{
                transform: `rotate(${Math.max(-20, Math.min(20, stopsDiff * -5))}deg)`,
                transformOrigin: '150px 60px',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <line x1="50" y1="60" x2="250" y2="60" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                
                {/* Left Pan (Light Available) */}
                <g transform="translate(50, 60)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke={stopsDiff < -1 ? '#f43f5e' : '#64748b'} strokeWidth="2" />
                  <Sun size={14} x="-7" y="-7" color={stopsDiff < -1 ? '#f43f5e' : '#94a3b8'} />
                  <text x="0" y="32" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">{sim.balance.labels.light}</text>
                </g>
                
                {/* Right Pan (Camera Settings) */}
                <g transform="translate(250, 60)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke={stopsDiff > 1 ? '#f59e0b' : stopsDiff > -1 && stopsDiff < 1 ? '#10b981' : '#64748b'} strokeWidth="2" />
                  <Settings size={14} x="-7" y="-7" color={stopsDiff > 1 ? '#f59e0b' : stopsDiff > -1 && stopsDiff < 1 ? '#10b981' : '#94a3b8'} />
                  <text x="0" y="32" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">{sim.balance.labels.settings}</text>
                </g>
              </g>
            </svg>
            
            <p className="text-xs text-slate-400 mt-4">
              {stopsDiff < 0 ? sim.balance.hints.underexposed : 
               stopsDiff > 0 ? sim.balance.hints.overexposed : 
               sim.balance.hints.perfect}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Controls */}
      <div className="flex-1 p-6 lg:p-8 bg-slate-900/50 flex flex-col">
        
        {/* Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-8 flex-grow">
          
          {/* Aperture Control */}
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-200">{sim.controls.aperture.label}</label>
              <span className="text-emerald-400 font-mono font-bold bg-emerald-400/10 px-2 py-0.5 rounded text-sm">f/{aperture}</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">{sim.controls.aperture.description}</p>
            <input 
              type="range" min="0" max={apertures.length - 1} value={apertureIdx}
              onChange={(e) => setApertureIdx(Number(e.target.value))}
              className="w-full accent-emerald-500"
              disabled={isPhotoTaken}
            />
          </div>

          {/* Shutter Control */}
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-200">{sim.controls.shutter.label}</label>
              <span className="text-sky-400 font-mono font-bold bg-sky-400/10 px-2 py-0.5 rounded text-sm">1/{shutter}s</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">{sim.controls.shutter.description}</p>
            <input 
              type="range" min="0" max={shutters.length - 1} value={shutterIdx}
              onChange={(e) => setShutterIdx(Number(e.target.value))}
              className="w-full accent-sky-500"
              disabled={isPhotoTaken}
            />
          </div>

          {/* ISO Control */}
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-200">{sim.controls.iso.label}</label>
              <span className="text-amber-400 font-mono font-bold bg-amber-400/10 px-2 py-0.5 rounded text-sm">{iso}</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">{sim.controls.iso.description}</p>
            <input 
              type="range" min="0" max={isos.length - 1} value={isoIdx}
              onChange={(e) => setIsoIdx(Number(e.target.value))}
              className="w-full accent-amber-500"
              disabled={isPhotoTaken}
            />
          </div>

          {/* White Balance */}
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <label className="text-sm font-bold text-slate-200 block mb-1">{sim.controls.whiteBalance.label}</label>
            <p className="text-xs text-slate-400 mb-3">{sim.controls.whiteBalance.description}</p>
            <div className="flex flex-wrap gap-2">
              {sim.controls.whiteBalanceOptions.map(wb => (
                <button
                  key={wb.id}
                  onClick={() => setWhiteBalance(wb.id)}
                  disabled={isPhotoTaken}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${whiteBalance === wb.id ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                >
                  {wb.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2">
          {!isPhotoTaken ? (
            <button 
              onClick={takePhoto}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
            >
              <Camera className="w-6 h-6" /> {sim.actions.takePhoto}
            </button>
          ) : (
            <button 
              onClick={resetScene}
              className="w-full py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg active:scale-[0.98]"
            >
              <RotateCcw className="w-6 h-6" /> {sim.actions.reset}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
