import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, Map, Globe, Leaf, Banknote, Shield, TreePine, 
  Users, HeartHandshake, Smile, Sprout, Eye, Puzzle, MapPin, Play,
  MousePointer2 
} from 'lucide-react';
import LogoCulturaT from '../assets/Logo_CulturaT_color.png';

// ============================================================================
// GUION ORIGINAL COMPLETO (ECOTURISMO)
// ============================================================================
const FULL_SCRIPT = [
  { id: 1, text: "¿Sabías que viajar a un Parque Nacional no es solo ir a tomarte fotos bonitas?", highlights: ["fotos bonitas"], icon: 'Camera', start: 0, end: 5.0 },
  { id: 2, text: "En los Parques Nacionales Naturales de Colombia, hacer turismo es en realidad...", highlights: ["Parques Nacionales"], icon: 'Map', start: 5.0, end: 9.0 },
  { id: 3, text: "...tener un superpoder para salvar el planeta.", highlights: ["superpoder"], icon: 'Globe', start: 9.0, end: 11.5, showClick: true },
  { id: 4, text: "A esto se le llama ecoturismo,", highlights: ["ecoturismo"], icon: 'Leaf', start: 11.5, end: 13.5 },
  { id: 5, text: "que es un turismo súper especializado, sostenible y, de hecho, es la única actividad económica permitida dentro de estas áreas.", highlights: ["única actividad económica"], icon: 'Banknote', start: 13.5, end: 20.5, showClick: true },
  { id: 6, text: "El ecoturismo no es solo ir a caminar, es toda una estrategia de conservación que funciona con tres pilares increíbles.", highlights: ["tres pilares increíbles"], icon: 'Smile', start: 20.5, end: 27.5 },
  { id: 7, text: "Primero, actúa como un escudo protector que disminuye las presiones en los ecosistemas;", highlights: ["escudo protector"], icon: 'Shield', start: 27.5, end: 32.0 },
  { id: 8, text: "logra que en lugar de talar árboles o cazar animales, las personas trabajen cuidando el bosque.", highlights: ["cuidando el bosque"], icon: 'TreePine', start: 32.0, end: 37.5, showClick: true },
  { id: 9, text: "Segundo, genera beneficios económicos directos para las comunidades locales,", highlights: ["comunidades locales"], icon: 'Users', start: 37.5, end: 40.5 },
  { id: 10, text: "lo que los convierte en los mayores aliados de la conservación.", highlights: ["mayores aliados"], icon: 'HeartHandshake', start: 40.5, end: 44.5, showClick: true },
  { id: 11, text: "Y tercero, cambia tu mente, porque aumenta tu valoración por la naturaleza", highlights: ["cambia tu mente"], icon: 'Smile', start: 44.5, end: 48.5 },
  { id: 12, text: "y te educa para que te comprometas a cuidarla para las futuras generaciones.", highlights: ["futuras generaciones"], icon: 'Sprout', start: 48.5, end: 53.0 },
  { id: 13, text: "Así que la próxima vez que visites un parque, recuerda que tu visita tiene un propósito:", highlights: ["un propósito"], icon: 'Eye', start: 53.0, end: 58.5 },
  { id: 14, text: "¡no eres solo un turista, eres una pieza clave para proteger la biodiversidad!", highlights: ["pieza clave"], icon: 'Puzzle', start: 58.5, end: 63.0, showClick: true },
  { id: 15, text: "¿Qué parque vas a visitar primero?", highlights: ["Qué parque vas a visitar"], icon: 'MapPin', start: 63.0, end: 65.5 },
  { id: 16, isOutro: true, start: 65.5, end: 68.5 }
];

const VIDEO_END = 68.5;

// ============================================================================
// COMPONENTES ESTILO NOTION / NEOBRUTALISM
// ============================================================================

// El cursor que entra, hace click y sale (Reemplazo de la mano)
const ClickingPointer = ({ delay = 0.5 }) => {
  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      initial={{ y: 200, x: 80, opacity: 0 }}
      animate={{
        y: [200, 20, 20, 200], // Sube rápido al botón, se queda, baja
        x: [80, 0, 0, 80],
        opacity: [0, 1, 1, 0],
        scale: [1, 1, 0.8, 1, 1] // Efecto de presionar click
      }}
      transition={{
        duration: 2.5,
        times: [0, 0.3, 0.4, 0.5, 1],
        delay: delay,
        ease: "easeInOut"
      }}
      style={{ top: '65%', left: '45%' }}
    >
      {/* Puntero de Mouse Limpio (Lucide) */}
      <MousePointer2 size={40} fill="black" color="white" strokeWidth={1} className="drop-shadow-md" />
    </motion.div>
  );
};

// Tarjeta base Notion (Neobrutalism)
const NotionCard = ({ children, className = "" }) => (
  <div className={`bg-white border-[3px] border-black rounded-xl shadow-[6px_6px_0_0_#000] p-6 w-full ${className}`}>
    {children}
  </div>
);

// Resaltador de texto estilo marcador Notion
const NotionTextHighlight = ({ text, highlights = [] }) => {
  let parts = [text];
  if (highlights.length > 0) {
    parts = text.split(new RegExp(`(${highlights[0]})`, 'gi'));
  }
  return (
    <span className="leading-[1.4]">
      {parts.map((part, i) => {
        const isMatch = highlights.length > 0 && part.toLowerCase() === highlights[0].toLowerCase();
        return isMatch ? (
           <span key={i} className="bg-[#E25E3E] text-white px-2 py-0.5 font-black rounded-sm border-[2px] border-black inline-block transform -rotate-1">
             {part}
           </span>
        ) : (
           <span key={i} className="text-gray-900 font-bold">{part}</span>
        );
      })}
    </span>
  );
};

// ============================================================================
// ESCENA ÚNICA (Renderiza el guion bloque a bloque)
// ============================================================================

const SceneBlock = ({ line }) => {
  const IconComponent = {
    Camera, Map, Globe, Leaf, Banknote, Shield, TreePine, 
    Users, HeartHandshake, Smile, Sprout, Eye, Puzzle, MapPin
  }[line.icon] || Leaf;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6 bg-[#F7F7F5] relative">
      <NotionCard className="relative z-10 flex flex-col gap-4">
        
        {/* Cabecera de la tarjeta con el ícono (Lucide React) */}
        <div className="flex items-center gap-3 border-b-2 border-black pb-4">
          <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0_0_#000]" style={{ backgroundColor: '#e2e8f0' }}>
             <IconComponent size={24} color="black" strokeWidth={2.5} />
          </div>
          <div className="h-2 flex-1 bg-gray-200 rounded-full border border-black overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} 
               animate={{ width: "100%" }} 
               transition={{ duration: line.end - line.start, ease: "linear" }}
               className="h-full bg-black" 
             />
          </div>
        </div>

        {/* Texto principal */}
        <h2 className="text-[1.3rem] tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
           <NotionTextHighlight text={line.text} highlights={line.highlights} />
        </h2>

      </NotionCard>

      {/* Si la escena tiene el flag showClick, simulamos el clic del mouse falso */}
      {line.showClick && <ClickingPointer delay={0.2} />}
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function VideoNotion() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(timerRef.current);
      return;
    }

    lastUpdateRef.current = performance.now();
    
    const updateTimer = (time) => {
      const deltaTime = (time - lastUpdateRef.current) / 1000;
      lastUpdateRef.current = time;
      
      setCurrentTime((prev) => {
        let nextTime = prev + deltaTime;
        if (nextTime >= VIDEO_END) nextTime = 0; 
        return nextTime;
      });
      
      timerRef.current = requestAnimationFrame(updateTimer);
    };
    
    timerRef.current = requestAnimationFrame(updateTimer);
    return () => cancelAnimationFrame(timerRef.current);
  }, [isPlaying]);

  const currentLine = FULL_SCRIPT.find((line) => currentTime >= line.start && currentTime < line.end) || FULL_SCRIPT[0];

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center p-4 bg-[#e5e5e5]">
      
      {/* Contenedor del Video (Ratio 9:16) */}
      <div 
        className="relative bg-[#F7F7F5] shadow-2xl overflow-hidden flex flex-col border-[6px] border-black rounded-[2rem]"
        style={{ width: '100%', maxWidth: '380px', aspectRatio: '9/16' }}
      >
        <AnimatePresence mode="wait">
          {currentLine.isOutro ? (
             <motion.div key="outro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full w-full bg-[#113222] text-white">
               <img src={LogoCulturaT} alt="Cultura T" className="w-[70%] object-contain mb-8 filter brightness-0 invert" />
               <div className="w-16 h-[6px] bg-[#E25E3E] rounded-full mb-6 border-2 border-black"></div>
               <p className="text-white text-[0.8rem] tracking-widest uppercase font-black" style={{ fontFamily: "Inter, sans-serif" }}>Cultura T</p>
             </motion.div>
          ) : (
             <motion.div 
               key={currentLine.id} 
               initial={{ opacity: 0, scale: 0.95 }} 
               animate={{ opacity: 1, scale: 1 }} 
               exit={{ opacity: 0, scale: 1.05 }} 
               transition={{ duration: 0.3 }}
               className="h-full w-full absolute inset-0"
             >
               <SceneBlock line={currentLine} />
             </motion.div>
          )}
        </AnimatePresence>

        {/* NOTA: Eliminada la barra de progreso superior por orden del usuario */}
      </div>

      {/* Controles admin */}
      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-black px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] transition-all text-sm font-black active:translate-y-1 active:shadow-none"
        >
          <Play size={16} className={isPlaying ? "hidden" : "block"} fill="black" />
          <div className={`w-3 h-3 bg-black rounded-sm ${isPlaying ? "block" : "hidden"}`}></div>
          {isPlaying ? "Pausar" : "Reanudar"}
        </button>
        <button 
          onClick={() => setCurrentTime(0)}
          className="bg-white hover:bg-gray-50 text-black px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] font-black text-sm active:translate-y-1 active:shadow-none"
        >
          Reiniciar Video
        </button>
      </div>

      <div className="text-gray-500 font-mono text-xs mt-4 font-bold">
        Tiempo: {currentTime.toFixed(1)}s / {VIDEO_END}s
      </div>

    </div>
  );
}
