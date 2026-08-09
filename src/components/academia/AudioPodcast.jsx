"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Headphones } from 'lucide-react';

export default function AudioPodcast({ 
  title, 
  subtitle = "Audio Instructor", 
  audioSrc, 
  transcript,
  themeColor = "#4f46e5",
  data
}) {
  const actualTitle = data?.title || title;
  const actualSubtitle = data?.subtitle || subtitle;
  const actualAudioSrc = data?.audioSrc || audioSrc;
  const actualTranscript = data?.transcript || transcript;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef(null);

  // Audio setup
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!actualAudioSrc) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100">
      <div className="flex flex-col">
        
        {/* Top Section: Player */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
          
          {/* Play Button */}
          <button 
            onClick={togglePlay}
            className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
            style={{ backgroundColor: themeColor, boxShadow: `0 10px 25px -5px ${themeColor}60` }}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current translate-x-1" />
            )}
          </button>

          {/* Track Info & Progress */}
          <div className="flex-1 w-full">
            <div className="mb-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Headphones className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {actualSubtitle}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800">
                {actualTitle}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-slate-400 w-10 text-right">
                {audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}
              </span>
              <div className="relative flex-1 flex items-center h-2 bg-slate-100 rounded-full overflow-hidden group">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-150 ease-out"
                  style={{ width: `${progress}%`, backgroundColor: themeColor }}
                ></div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span className="text-xs font-medium text-slate-400 w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Transcript Toggle */}
        {actualTranscript && (
          <div className="border-t border-slate-50 bg-slate-50/50">
            <button 
              onClick={() => setShowTranscript(!showTranscript)}
              className="w-full px-10 py-4 flex items-center justify-between text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>{showTranscript ? "Ocultar Transcripción" : "Leer Transcripción"}</span>
              <span className={`transition-transform duration-300 ${showTranscript ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showTranscript ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div 
                className="px-10 pb-8 text-slate-600 leading-relaxed text-sm overflow-y-auto max-h-80 custom-scrollbar prose prose-slate"
                dangerouslySetInnerHTML={{ __html: actualTranscript }}
              />
            </div>
          </div>
        )}

      </div>
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={actualAudioSrc} 
        preload="metadata"
      />
    </div>
  );
}
