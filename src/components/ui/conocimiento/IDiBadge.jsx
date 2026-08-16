import React from 'react';
import { Microscope, Code2, Rocket } from 'lucide-react';

export default function IDiBadge({ tipo }) {
  // Configuración polimórfica según el tipo
  const config = {
    "I": {
      label: "Investigación",
      icon: Microscope,
      colorClass: "bg-blue-100 text-blue-700 border-blue-200",
      description: "Generación de nuevo conocimiento metodológico"
    },
    "D": {
      label: "Desarrollo",
      icon: Code2,
      colorClass: "bg-purple-100 text-purple-700 border-purple-200",
      description: "Prototipado y creación de herramientas tecnológicas"
    },
    "i": {
      label: "Innovación",
      icon: Rocket,
      colorClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
      description: "Transferencia y validación en el territorio"
    }
  };

  const badge = config[tipo];
  if (!badge) return null;

  const Icon = badge.icon;

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-semibold tracking-wide ${badge.colorClass}`}
      title={badge.description}
    >
      <Icon className="w-4 h-4" />
      <span>{badge.label}</span>
    </div>
  );
}
