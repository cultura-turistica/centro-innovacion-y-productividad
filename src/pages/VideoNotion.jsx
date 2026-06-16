import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Map, 
  Globe, 
  Leaf, 
  Banknote, 
  Shield, 
  TreePine, 
  Users, 
  HeartHandshake, 
  Smile, 
  Sprout, 
  Eye, 
  Puzzle, 
  MapPin,
  Play
} from 'lucide-react';
import LogoCulturaT from '../assets/Logo_CulturaT_color.png';

// ============================================================================
// GUION Y TIEMPOS (ECOTURISMO - ~180 WPM)
// ============================================================================
const FULL_SCRIPT = [
  { id: 1, text: "¿Sabías que viajar a un Parque Nacional no es solo ir a tomarte fotos bonitas?", highlights: ["fotos bonitas"], icon: 'Camera', start: 0, end: 5.0 },
  { id: 2, text: "En los Parques Nacionales Naturales de Colombia, hacer turismo es en realidad...", highlights: ["Parques Nacionales Naturales"], icon: 'Map', start: 5.0, end: 9.0 },
  { id: 3, text: "...tener un superpoder para salvar el planeta.", highlights: ["superpoder"], icon: 'Globe', start: 9.0, end: 11.5 },
  { id: 4, text: "A esto se le llama ecoturismo,", highlights: ["ecoturismo"], icon: 'Leaf', start: 11.5, end: 13.5 },
  { id: 5, text: "que es un turismo súper especializado, sostenible y, de hecho, es la única actividad económica permitida dentro de estas áreas.", highlights: ["única actividad económica"], icon: 'Banknote', start: 13.5, end: 20.5 },
  { id: 6, text: "El ecoturismo no es solo ir a caminar, es toda una estrategia de conservación que funciona con tres pilares increíbles.", highlights: ["tres pilares increíbles"], icon: 'Smile', start: 20.5, end: 27.5 },
  { id: 7, text: "Primero, actúa como un escudo protector que disminuye las presiones en los ecosistemas;", highlights: ["escudo protector"], icon: 'Shield', start: 27.5, end: 32.0 },
  { id: 8, text: "logra que en lugar de talar árboles o cazar animales, las personas trabajen cuidando el bosque.", highlights: ["cuidando el bosque"], icon: 'TreePine', start: 32.0, end: 37.5 },
  { id: 9, text: "Segundo, genera beneficios económicos directos para las comunidades locales,", highlights: ["comunidades locales"], icon: 'Users', start: 37.5, end: 40.5 },
  { id: 10, text: "lo que los convierte en los mayores aliados de la conservación.", highlights: ["mayores aliados"], icon: 'HeartHandshake', start: 40.5, end: 44.5 },
  { id: 11, text: "Y tercero, cambia tu mente, porque aumenta tu valoración por la naturaleza", highlights: ["cambia tu mente"], icon: 'Smile', start: 44.5, end: 48.5 },
  { id: 12, text: "y te educa para que te comprometas a cuidarla para las futuras generaciones.", highlights: ["futuras generaciones"], icon: 'Sprout', start: 48.5, end: 53.0 },
  { id: 13, text: "Así que la próxima vez que visites un parque, recuerda que tu visita tiene un propósito:", highlights: ["un propósito"], icon: 'Eye', start: 53.0, end: 58.5 },
  { id: 14, text: "¡no eres solo un turista, eres una pieza clave para proteger la biodiversidad!", highlights: ["pieza clave"], icon: 'Puzzle', start: 58.5, end: 63.0 },
  { id: 15, text: "¿Qué parque vas a visitar primero?", highlights: ["Qué parque vas a visitar"], icon: 'MapPin', start: 63.0, end: 65.5 },
  { id: 16, isOutro: true, start: 65.5, end: 68.5 }
];

const VIDEO_END = 68.5;

// ============================================================================
// COMPONENTE: ÍCONO ESTILO CULTURA T (Imán con Movilidad Continua)
// ============================================================================
const CulturaTIcon = ({ iconName }) => {
  const IconComponent = {
    Camera, Map, Globe, Leaf, Banknote, Shield, TreePine, 
    Users, HeartHandshake, Smile, Sprout, Eye, Puzzle, MapPin
  }[iconName] || Camera;
  
  // Rotación aleatoria leve para simular un sticker pegado
  const rotateArr = [-5, -3, 3, 5];
  const rot = rotateArr[(iconName.length) % rotateArr.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center mb-8"
    >
      {/* Animación flotante continua */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Sombra oscura fuerte estilo "Imán" o "Sticker" */}
        <div 
          className="absolute top-2 left-2 w-24 h-24 bg-[#032968]/30 rounded-full"
        ></div>
        
        {/* Círculo contenedor impecable pero lúdico */}
        <div 
          className="relative z-10 w-24 h-24 bg-white flex items-center justify-center rounded-full border-[3px] border-[#032968]"
          style={{ transform: `rotate(${rot}deg)` }}
        >
          {/* Volvemos a trazo grueso para dar el aspecto orgánico/doodle */}
          <IconComponent size={44} color="#032968" strokeWidth={2.5} />
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// COMPONENTE: TEXTO ESTILO CULTURA T (Serio, legible, naranja en palabras clave)
// ============================================================================
const CulturaTText = ({ text, highlights = [] }) => {
  let formattedText = [];

  if (highlights.length > 0) {
    const highlight = highlights[0]; 
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    formattedText = parts.map((part, i) => {
      const isMatch = part.toLowerCase() === highlight.toLowerCase();
      
      return (
        <motion.span 
          key={i} 
          className={isMatch ? `text-[#F06000] inline-block` : `text-[#032968]`}
          style={isMatch ? { fontFamily: "'Utopian Black Dopis', 'Poppins', sans-serif", fontWeight: 900 } : {}}
          animate={isMatch ? { scale: [1, 1.03, 1] } : {}}
          transition={isMatch ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
        >
          {part}
        </motion.span>
      );
    });
  } else {
    formattedText = <span className="text-[#032968] font-medium">{text}</span>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="text-center px-6 max-w-sm"
    >
      <h2 className="text-[1.6rem] leading-[1.4] tracking-tight" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
        {formattedText}
      </h2>
    </motion.div>
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
    <div className="min-h-[100vh] flex flex-col items-center justify-center p-4 overflow-hidden relative" style={{ backgroundColor: '#F8F9FB' }}>
      
      {/* Contenedor del Video (Blanco puro) */}
      <motion.div 
        className="relative shadow-[0_20px_60px_rgba(3,41,104,0.08)] rounded-[32px] overflow-hidden flex flex-col z-10 bg-white"
        style={{ width: '100%', maxWidth: '380px', aspectRatio: '9/16' }}
      >

        <div className="flex-1 flex flex-col items-center justify-center p-8 pt-16 pb-24 relative z-20">
          
          <AnimatePresence mode="wait">
            {currentLine.isOutro ? (
              // CORTINA DE CIERRE FINAL
              <motion.div 
                key="outro"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center w-full h-full bg-white absolute inset-0 z-50"
              >
                <img src={LogoCulturaT} alt="Cultura T" className="w-[85%] object-contain mb-8" />
                <div className="w-12 h-[4px] bg-black mb-6"></div>
                <p className="text-black text-[0.8rem] tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Centro de Innovación</p>
                <p className="text-black text-[0.8rem] tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>y Productividad</p>
              </motion.div>
            ) : (
              // CONTENIDO NORMAL DE LA ESCENA
              <motion.div 
                key={currentLine.id} 
                className="w-full flex flex-col items-center justify-center h-full"
              >
                {/* ÍCONO */}
                <div className="h-[200px] flex items-center justify-center w-full">
                  <CulturaTIcon iconName={currentLine.icon} />
                </div>

                {/* TEXTO */}
                <div className="w-full flex items-center justify-center min-h-[220px]">
                  <CulturaTText text={currentLine.text} highlights={currentLine.highlights} />
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BARRA DE PROGRESO INFERIOR (Estilo Corporativo) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#032968]/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#F06000] rounded-full transition-all duration-300 ease-linear" 
            style={{ width: `${(currentTime / VIDEO_END) * 100}%` }}
          />
        </div>

      </motion.div>

      {/* Controles para el Admin */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#032968] px-6 py-3 rounded-xl border border-gray-200 shadow-sm transition-all text-sm font-bold"
          >
            <Play size={16} className={isPlaying ? "hidden" : "block"} fill="#032968" color="#032968" />
            <div className={`w-3 h-3 bg-[#032968] rounded-sm ${isPlaying ? "block" : "hidden"}`}></div>
            {isPlaying ? "Pausar" : "Reanudar"}
          </button>
          
          <button 
            onClick={() => setCurrentTime(65.0)}
            className="flex items-center gap-2 bg-[#F06000] hover:bg-[#d85600] text-white px-6 py-3 rounded-xl shadow-md transition-all text-sm font-bold"
          >
            Ver Cierre
          </button>
        </div>

        <div className="text-gray-500 font-mono text-xs">
          Tiempo: {currentTime.toFixed(1)}s / {VIDEO_END}s
        </div>
      </div>
    </div>
  );
}
