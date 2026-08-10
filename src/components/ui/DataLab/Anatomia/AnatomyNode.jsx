import React from 'react';
import { Brain, Eye, Heart, Wallet, Footprints, Leaf } from 'lucide-react';

const ICON_MAP = {
  Brain, Eye, Heart, Wallet, Footprints, Leaf
};

// Tailwind color mappings
const THEME_COLORS = {
  purple: 'text-purple-600 bg-purple-100 ring-purple-300',
  red: 'text-red-600 bg-red-100 ring-red-300',
  sky: 'text-sky-600 bg-sky-100 ring-sky-300',
  blue: 'text-blue-600 bg-blue-100 ring-blue-300',
  emerald: 'text-emerald-600 bg-emerald-100 ring-emerald-300',
  amber: 'text-amber-600 bg-amber-100 ring-amber-300',
};

export default function AnatomyNode({ node, isActive, onClick }) {
  const Icon = ICON_MAP[node.iconName] || Brain;
  const themeClasses = THEME_COLORS[node.colorTheme] || THEME_COLORS.purple;
  
  // Calculate positioning
  const left = `${node.coordinates.desktop.x}%`;
  const top = `${node.coordinates.desktop.y}%`;

  return (
    <button
      onClick={onClick}
      className={`absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer transition-all duration-300 ${isActive ? 'scale-110 z-30' : 'hover:scale-110'}`}
      style={{ left, top }}
      aria-label={`Seleccionar ${node.bodyPart}`}
    >
      {/* Etiqueta flotante superior */}
      <span className={`absolute -top-10 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none'}`}>
        {node.bodyPart}
      </span>

      {/* Círculo del icono */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? 'ring-4 ring-offset-2' : 'ring-2 ring-white/50 group-hover:ring-4'} ${themeClasses}`}>
        <Icon size={24} className={isActive ? 'animate-pulse' : ''} />
      </div>

      {/* Pulso de fondo cuando está inactivo para invitar al clic */}
      {!isActive && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-slate-500"></span>
      )}
    </button>
  );
}
