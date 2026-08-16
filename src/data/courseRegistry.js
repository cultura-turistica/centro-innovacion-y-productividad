// Catalog data for syllabus/certification rendering
import { catalogoData } from './cursos/catalogo';

export const courseRegistry = {
  'marca': {
    themeColor: '#e11d48', // Rose 600
    themeBg: 'bg-rose-50',
    themeBorder: 'border-rose-200',
    certTheme: {
      selection: "selection:bg-rose-100",
      hoverText: "hover:text-rose-500",
      textHighlight: "text-rose-500",
      primaryBg: "bg-rose-900",
      blurPrimary: "bg-rose-500/20",
      blurSecondary: "bg-pink-500/20",
      badgeBg: "bg-rose-800/50",
      badgeText: "text-rose-300",
      badgeBorder: "border-rose-700",
      textLight: "text-rose-100",
      btnText: "text-rose-950",
      themeColorHex: "#e11d48"
    }
  },
  'fotografia': {
    themeColor: '#14b8a6', // Teal 500
    themeBg: 'bg-teal-50',
    themeBorder: 'border-teal-200',
    certTheme: {
      selection: "selection:bg-indigo-100",
      hoverText: "hover:text-indigo-500",
      textHighlight: "text-indigo-500",
      primaryBg: "bg-indigo-900",
      blurPrimary: "bg-indigo-500/20",
      blurSecondary: "bg-purple-500/20",
      badgeBg: "bg-indigo-800/50",
      badgeText: "text-indigo-300",
      badgeBorder: "border-indigo-700",
      textLight: "text-indigo-100",
      btnText: "text-indigo-950",
      themeColorHex: "#4f46e5"
    }
  },
  'diseno-producto': {
    themeColor: '#eab308', // Yellow 500
    themeBg: 'bg-yellow-50',
    themeBorder: 'border-yellow-200',
    certTheme: {
      selection: "selection:bg-yellow-100",
      hoverText: "hover:text-yellow-500",
      textHighlight: "text-yellow-500",
      primaryBg: "bg-yellow-600",
      blurPrimary: "bg-yellow-500/20",
      blurSecondary: "bg-orange-500/20",
      badgeBg: "bg-yellow-800/50",
      badgeText: "text-yellow-100",
      badgeBorder: "border-yellow-700",
      textLight: "text-yellow-50",
      btnText: "text-yellow-950",
      themeColorHex: "#eab308"
    }
  },
  'experiencias-privadas': {
    themeColor: '#8b5cf6', // Violet 500
    themeBg: 'bg-violet-50',
    themeBorder: 'border-violet-200'
  },
  'calculadora-costeo': {
    themeColor: '#059669', // Emerald 600
    themeBg: 'bg-emerald-50',
    themeBorder: 'border-emerald-200'
  },
  'turismo-comunitario': {
    themeColor: '#10b981', // Emerald 500
    themeBg: 'bg-emerald-50',
    themeBorder: 'border-emerald-200',
    certTheme: {
      selection: "selection:bg-emerald-100",
      hoverText: "hover:text-emerald-500",
      textHighlight: "text-emerald-500",
      primaryBg: "bg-emerald-900",
      blurPrimary: "bg-emerald-500/20",
      blurSecondary: "bg-teal-500/20",
      badgeBg: "bg-emerald-800/50",
      badgeText: "text-emerald-300",
      badgeBorder: "border-emerald-700",
      textLight: "text-emerald-100",
      btnText: "text-emerald-950",
      themeColorHex: "#10b981"
    }
  }
};

export function getCourseConfig(slug) {
  const catalogEntry = catalogoData.courses.find(c => c.slug === slug);
  const theme = courseRegistry[slug] || { themeColor: '#334155' };
  return {
    ...catalogEntry,
    ...theme,
    // Add default modules array for the syllabus if not present (since catalogo doesn't have it, we should mock it or get it elsewhere)
    modules: [
      { id: '1', title: 'Introducción', description: 'Módulo 1' },
      { id: '2', title: 'Fundamentos', description: 'Módulo 2' },
      { id: '3', title: 'Desarrollo', description: 'Módulo 3' },
      { id: '4', title: 'Aplicación', description: 'Módulo 4' },
      { id: '5', title: 'Cierre', description: 'Módulo 5' }
    ]
  };
}
