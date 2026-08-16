"use client";
import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function CourseSidebarVideo({ video, themeColor }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video || !video.youtubeId) return null;

  const coverUrl = video.coverImage || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div 
      className="w-full rounded-2xl overflow-hidden shadow-md relative group mb-6 border border-slate-100 bg-slate-900"
      style={{ aspectRatio: '9/16' }}
    >
      {!isPlaying ? (
        <button 
          onClick={() => setIsPlaying(true)}
          className="w-full h-full relative block cursor-pointer"
        >
          <img 
            src={coverUrl} 
            alt="Video de presentación" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer pulsating ring */}
            <div className="absolute w-20 h-20 bg-red-600 rounded-full animate-ping opacity-75"></div>
            
            {/* Inner solid button */}
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl z-10 transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title="Video de presentación"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      )}
    </div>
  );
}
