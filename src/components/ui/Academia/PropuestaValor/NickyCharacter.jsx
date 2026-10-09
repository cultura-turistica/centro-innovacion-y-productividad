"use client";

import React from 'react';

/**
 * Componente de Muñequito SVG estilo Nicky Case (The Evolution of Trust).
 * 100% SVG nativo, CERO style={{...}} en React (cumplimiento estricto de ARCHITECTURE_RULES.md).
 */
export default function NickyCharacter({
  color = "blue",      // blue, pink, amber, emerald, slate, purple
  hat = "bucket",      // bucket, cap, bowler, safari, fedora, none
  mood = "neutral",    // happy, sad, shocked, neutral, money, excited
  size = 64,
  isJumping = false,
  isShaking = false,
  className = ""
}) {
  // Paletas de color estilo Nicky Case
  const colorMap = {
    blue: { fill: "#dbeafe", stroke: "#2563eb", hat: "#3b82f6" },
    pink: { fill: "#ffe4e6", stroke: "#e11d48", hat: "#be123c" },
    amber: { fill: "#fef3c7", stroke: "#d97706", hat: "#f59e0b" },
    emerald: { fill: "#d1fae5", stroke: "#059669", hat: "#10b981" },
    slate: { fill: "#f1f5f9", stroke: "#475569", hat: "#334155" },
    purple: { fill: "#f3e8ff", stroke: "#7c3aed", hat: "#8b5cf6" },
    white: { fill: "#ffffff", stroke: "#0f172a", hat: "#64748b" }
  };

  const c = colorMap[color] || colorMap.blue;
  const height = Math.round(size * 1.25);

  return (
    <div 
      className={`inline-block select-none transition-transform duration-300 ${
        isJumping ? '-translate-y-2' : ''
      } ${isShaking ? 'animate-bounce' : ''} ${className}`}
    >
      <svg
        width={size}
        height={height}
        viewBox="0 0 100 125"
        className="overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Patitas del muñequito */}
        <line x1="38" y1="95" x2="38" y2="115" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
        <line x1="62" y1="95" x2="62" y2="115" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />

        {/* Pies */}
        <circle cx="35" cy="115" r="4" fill={c.stroke} />
        <circle cx="65" cy="115" r="4" fill={c.stroke} />

        {/* Bracitos */}
        {mood === 'happy' || mood === 'excited' ? (
          <>
            <line x1="22" y1="65" x2="10" y2="48" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
            <line x1="78" y1="65" x2="90" y2="48" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : mood === 'sad' ? (
          <>
            <line x1="22" y1="65" x2="14" y2="82" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
            <line x1="78" y1="65" x2="86" y2="82" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <line x1="22" y1="65" x2="14" y2="75" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
            <line x1="78" y1="65" x2="86" y2="75" stroke={c.stroke} strokeWidth="5" strokeLinecap="round" />
          </>
        )}

        {/* Cabeza / Cuerpo circular estilo Nicky Case */}
        <circle
          cx="50"
          cy="58"
          r="34"
          fill={c.fill}
          stroke={c.stroke}
          strokeWidth="6"
        />

        {/* Sombreritos icónicos */}
        {hat === 'bucket' && (
          <g>
            <polygon points="32,28 68,28 62,6 38,6" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
            <ellipse cx="50" cy="28" rx="26" ry="6" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
          </g>
        )}
        {hat === 'beret' && (
          <g>
            <ellipse cx="48" cy="24" rx="26" ry="9" transform="rotate(-8 48 24)" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
            <line x1="48" y1="15" x2="48" y2="10" stroke={c.stroke} strokeWidth="3.5" strokeLinecap="round" />
          </g>
        )}
        {hat === 'bowler' && (
          <g>
            <ellipse cx="50" cy="30" rx="26" ry="6" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
            <path d="M 32,30 C 32,10 68,10 68,30 Z" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
          </g>
        )}
        {hat === 'cap' && (
          <g>
            <path d="M 30,30 C 30,12 70,12 70,30 Z" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
            <path d="M 55,28 Q 85,25 90,34" stroke={c.stroke} strokeWidth="5" fill="none" strokeLinecap="round" />
          </g>
        )}
        {(hat === 'safari' || hat === 'fedora') && (
          <g>
            <ellipse cx="50" cy="30" rx="32" ry="7" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
            <path d="M 30,30 C 32,14 68,14 70,30 Z" fill={c.hat} stroke={c.stroke} strokeWidth="4" />
          </g>
        )}

        {/* Expresiones Faciales */}
        {mood === 'happy' || mood === 'excited' ? (
          <>
            <path d="M 36,54 Q 40,48 44,54" stroke={c.stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 56,54 Q 60,48 64,54" stroke={c.stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 40,66 Q 50,78 60,66" stroke={c.stroke} strokeWidth="4" fill="white" strokeLinecap="round" />
            <ellipse cx="32" cy="62" rx="4" ry="2.5" fill="#f43f5e" opacity="0.4" />
            <ellipse cx="68" cy="62" rx="4" ry="2.5" fill="#f43f5e" opacity="0.4" />
          </>
        ) : mood === 'sad' ? (
          <>
            <circle cx="40" cy="56" r="3.5" fill={c.stroke} />
            <circle cx="60" cy="56" r="3.5" fill={c.stroke} />
            <path d="M 42,72 Q 50,64 58,72" stroke={c.stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
            <circle cx="34" cy="66" r="2.5" fill="#38bdf8" />
          </>
        ) : mood === 'shocked' ? (
          <>
            <circle cx="40" cy="54" r="5" fill="none" stroke={c.stroke} strokeWidth="3.5" />
            <circle cx="60" cy="54" r="5" fill="none" stroke={c.stroke} strokeWidth="3.5" />
            <ellipse cx="50" cy="70" rx="5" ry="7" fill={c.stroke} />
          </>
        ) : mood === 'money' ? (
          <>
            <text x="35" y="58" fontSize="14" fontWeight="bold" fill={c.stroke} textAnchor="middle">$</text>
            <text x="65" y="58" fontSize="14" fontWeight="bold" fill={c.stroke} textAnchor="middle">$</text>
            <path d="M 40,68 Q 50,78 60,68" stroke={c.stroke} strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="40" cy="55" r="4" fill={c.stroke} />
            <circle cx="60" cy="55" r="4" fill={c.stroke} />
            <line x1="44" y1="68" x2="56" y2="68" stroke={c.stroke} strokeWidth="3.5" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
