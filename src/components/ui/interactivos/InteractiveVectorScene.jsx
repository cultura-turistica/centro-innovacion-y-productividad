import React from 'react';

export default function InteractiveVectorScene() {
  return (
    <div className="w-full flex justify-center mb-12 -mt-6">
      <svg viewBox="0 0 800 300" className="w-full max-w-[900px] h-auto rounded-3xl shadow-[0_15px_30px_rgba(15,118,110,0.15)] bg-gradient-to-b from-[#f0fdfa] to-[#ccfbf1]">
        <rect width="800" height="300" fill="transparent" />
        {/* Sol */}
        <circle cx="650" cy="80" r="40" fill="#fef08a" />
        <circle cx="650" cy="80" r="55" fill="#fef08a" opacity="0.4" />
        {/* Nubes */}
        <path d="M 150 90 Q 170 70 190 90 Q 220 80 230 100 Q 250 100 240 120 L 140 120 Q 130 100 150 90" fill="#ffffff" opacity="0.8" />
        <path d="M 500 120 Q 520 100 540 120 Q 570 110 580 130 Q 600 130 590 150 L 490 150 Q 480 130 500 120" fill="#ffffff" opacity="0.6" />
        {/* Montañas Fondo */}
        <polygon points="100,250 300,100 500,250" fill="#99f6e4" />
        <polygon points="400,250 550,140 700,250" fill="#5eead4" />
        {/* Montañas Frente */}
        <polygon points="-50,300 150,150 400,300" fill="#2dd4bf" />
        <polygon points="250,300 450,120 750,300" fill="#14b8a6" />
        {/* Tienda (Glamping) */}
        <polygon points="400,280 450,220 500,280" fill="#fef3c7" />
        <polygon points="450,220 480,240 500,280 470,280" fill="#fde68a" />
        <polygon points="440,280 450,250 460,280" fill="#92400e" />
        {/* Árboles Pinos */}
        <g transform="translate(150, 240)">
          <polygon points="20,40 10,20 30,20" fill="#0f766e" />
          <polygon points="20,25 15,10 25,10" fill="#0f766e" />
          <polygon points="20,15 15,0 25,0" fill="#0f766e" />
          <rect x="18" y="40" width="4" height="10" fill="#78350f" />
        </g>
        <g transform="translate(200, 230) scale(1.2)">
          <polygon points="20,40 10,20 30,20" fill="#115e59" />
          <polygon points="20,25 15,10 25,10" fill="#115e59" />
          <polygon points="20,15 15,0 25,0" fill="#115e59" />
          <rect x="18" y="40" width="4" height="10" fill="#78350f" />
        </g>
        <g transform="translate(600, 250) scale(0.9)">
          <polygon points="20,40 10,20 30,20" fill="#0f766e" />
          <polygon points="20,25 15,10 25,10" fill="#0f766e" />
          <polygon points="20,15 15,0 25,0" fill="#0f766e" />
          <rect x="18" y="40" width="4" height="10" fill="#78350f" />
        </g>
        {/* Suelo */}
        <rect x="0" y="280" width="800" height="20" fill="#042f2e" />
      </svg>
    </div>
  );
}
