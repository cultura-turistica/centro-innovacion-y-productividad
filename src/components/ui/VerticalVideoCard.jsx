"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VerticalVideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative w-full flex flex-col">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-inner flex-1 bg-slate-100 min-h-[400px] md:min-h-[500px]" style={{ aspectRatio: '9/16' }}>
        {!isPlaying ? (
          <div 
            className="absolute inset-0 cursor-pointer group flex items-center justify-center bg-black/5"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={video.coverImage} 
              alt="Video Cover" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            
            <button className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-600/40 group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </button>
          </div>
        ) : (
          <iframe 
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        )}
      </div>
    </div>
  );
}
