import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function TPodcastPlayer({ title, subtitle, audioSrc, transcript, colorClass = 'text-blue-900', bgClass = 'bg-blue-900', borderClass = 'border-blue-900' }) {
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
    <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-200 mb-8 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className={`absolute top-0 left-0 w-full h-1.5 ${bgClass}`}></div>

      <div className="flex gap-5 items-center mb-6 flex-wrap">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-slate-100 ${colorClass}`}>
          <Volume2 size={32} className="currentColor" />
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
            {subtitle || 'Clip de Audio'}
          </div>
          <h4 className="m-0 text-2xl text-slate-900 font-extrabold">
            {title}
          </h4>
        </div>
      </div>

      {/* Reproductor / Controles */}
      <div className="bg-slate-50 rounded-2xl p-6 flex items-center gap-4 border border-slate-100 shadow-inner">
        <button 
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full ${bgClass} text-white flex items-center justify-center cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95 shadow-md`}
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        <div className="flex-1 flex flex-col gap-2">
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="0.1"
            value={progress}
            onChange={handleProgressChange}
            className={`w-full cursor-pointer h-1.5 rounded-lg appearance-none bg-slate-200`} 
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold px-1">
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
        <div className="mt-6 border-t border-slate-200 pt-6">
          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            className="bg-transparent border-none flex items-center gap-2 text-slate-600 font-bold text-sm cursor-pointer p-0 hover:text-slate-900 transition-colors"
          >
            <FileText size={18} />
            {showTranscript ? 'Ocultar Transcripción' : 'Leer Transcripción'}
            {showTranscript ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {showTranscript && (
            <div className={`mt-4 p-6 bg-slate-50 rounded-xl text-slate-700 leading-relaxed text-base border-l-4 ${borderClass} shadow-sm`}>
              {transcript}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
