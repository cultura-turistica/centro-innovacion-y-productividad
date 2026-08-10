"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function AudioPodcast({ data, themeColor = "#2563eb" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef(null);

  if (!data || !data.audioSrc) return null;

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
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = x / bounds.width;
    audioRef.current.currentTime = percentage * audioRef.current.duration;
    setProgress(percentage * 100);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSecs = audioRef.current ? audioRef.current.currentTime : 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Play Button */}
        <button 
          onClick={togglePlay}
          className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: themeColor }}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>

        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 size={16} className="text-slate-400" />
            <h4 className="font-bold text-slate-800 text-lg">{data.title || "Podcast del Módulo"}</h4>
          </div>
          
          {/* Progress Bar */}
          <div className="relative pt-2 pb-1">
            <div 
              className="h-2 bg-slate-100 rounded-full cursor-pointer overflow-hidden"
              onClick={handleSeek}
            >
              <div 
                className="h-full rounded-full transition-all duration-100"
                style={{ width: `${progress}%`, backgroundColor: themeColor }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
              <span>{formatTime(currentSecs)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      {data.transcript && (
        <div className="mt-6 border-t border-slate-100 pt-4">
          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <FileText size={16} style={{ color: themeColor }} />
            {showTranscript ? "Ocultar Transcripción" : "Leer Transcripción"}
            {showTranscript ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showTranscript && (
            <div className="mt-4 p-4 bg-slate-50 rounded-2xl text-slate-600 text-sm leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: data.transcript }} />
            </div>
          )}
        </div>
      )}

      <audio ref={audioRef} src={data.audioSrc} preload="metadata" />
    </div>
  );
}
