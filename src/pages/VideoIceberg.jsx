import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const VIDEO_END = 70; // Segundos totales

const SCRIPT = [
  // GANCHO (0 - 12s)
  { id: 1, sceneId: 'hook', text: "Un gigante tenía el champú para niños perfecto.", start: 0, end: 4, highlight: "para niños perfecto." },
  { id: 2, sceneId: 'hook', text: "Pero un competidor, con peor fórmula y más caro...", start: 4, end: 8, highlight: "peor fórmula" },
  { id: 3, sceneId: 'hook', text: "...les estaba ganando 5 a 1 en ventas.", start: 8, end: 12, highlight: "5 a 1 en ventas." },
  
  // DESCUBRIMIENTO (12 - 32s)
  { id: 4, sceneId: 'discovery', text: "Fueron a la casa de un cliente...", start: 12, end: 16, highlight: "Fueron a la casa" },
  { id: 5, sceneId: 'discovery', text: "...y abrieron la cortina del baño.", start: 16, end: 20, highlight: "cortina del baño." },
  { id: 6, sceneId: 'discovery', text: "Vieron cinco botellas del competidor con forma de pez.", start: 20, end: 26, highlight: "forma de pez." },
  { id: 7, sceneId: 'discovery', text: "El papá dijo: 'Mis hijos quieren el acuario completo'.", start: 26, end: 32, highlight: "acuario completo" },

  // GIRO (32 - 50s)
  { id: 8, sceneId: 'twist', text: "Ahí todo hizo clic.", start: 32, end: 35, highlight: "hizo clic." },
  { id: 9, sceneId: 'twist', text: "Para un niño, la hora del baño no es para 'limpiarse'.", start: 35, end: 40, highlight: "no es para 'limpiarse'." },
  { id: 10, sceneId: 'twist', text: "Es el fin del juego y la señal de ir a dormir. ¡Lo odian!", start: 40, end: 45, highlight: "¡Lo odian!" },
  { id: 11, sceneId: 'twist', text: "Con botellas de peces, el baño es una extensión del juego.", start: 45, end: 50, highlight: "extensión del juego." },

  // CIERRE (50 - 65s)
  { id: 12, sceneId: 'closing', text: "Ese papá no estaba contratando champú para lavar cabello.", start: 50, end: 55, highlight: "no estaba contratando" },
  { id: 13, sceneId: 'closing', text: "Estaba contratando paz mental y una transición divertida.", start: 55, end: 60, highlight: "paz mental" },
  { id: 14, sceneId: 'closing', text: "¿Sigues vendiendo la fórmula o ya vendes el acuario?", start: 60, end: 65, highlight: "vendes el acuario" },
  
  // OUTRO BLANCO (65 - 70s)
  { id: 15, sceneId: 'outro', text: "Centro de Innovación", start: 65, end: 70, isOutro: true }
];

// Librería de trazados SVG continuos para cada escena
const PATHS = {
  hook: "M 90 280 L 170 280 L 170 480 L 90 480 Z M 110 280 L 110 240 L 150 240 L 150 280 Z M 220 380 Q 250 310 290 380 Q 250 450 220 380 Z M 290 380 L 320 350 L 320 410 Z",
  discovery: "M 60 400 Q 90 330 130 400 Q 90 470 60 400 Z M 130 400 L 160 370 L 160 430 Z M 150 300 Q 180 230 220 300 Q 180 370 150 300 Z M 220 300 L 250 270 L 250 330 Z M 240 400 Q 270 330 310 400 Q 270 470 240 400 Z M 310 400 L 340 370 L 340 430 Z",
  twist: "M 190 220 A 100 100 0 1 0 189.9 220 M 150 290 Q 160 270 170 290 M 210 290 Q 220 270 230 290 M 160 350 Q 190 320 220 350 Q 190 400 160 350 Z M 155 310 L 155 340 M 225 310 L 225 340",
  closing: "M 190 420 A 70 70 0 0 1 120 350 A 50 50 0 0 1 160 280 A 60 60 0 0 1 220 280 A 50 50 0 0 1 260 350 A 70 70 0 0 1 190 420 Z",
  outro: ""
};

// Rellenos de color para cada escena (dinámicos según el texto)
const getFills = (sceneId, lineId) => {
  if (sceneId === 'hook') {
    let fishOpacity = 0.4;
    let bottleOpacity = 0.9;
    if (lineId >= 2) { // competidor, 5 a 1
      fishOpacity = 1;
      bottleOpacity = 0.2;
    }
    return [
      { d: "M 90 280 L 170 280 L 170 480 L 90 480 Z", fill: "#94a3b8", opacity: bottleOpacity },
      { d: "M 110 280 L 110 240 L 150 240 L 150 280 Z", fill: "#475569", opacity: bottleOpacity },
      { d: "M 220 380 Q 250 310 290 380 Q 250 450 220 380 Z", fill: "#f97316", opacity: fishOpacity }, // Pez Naranja
      { d: "M 290 380 L 320 350 L 320 410 Z", fill: "#ea580c", opacity: fishOpacity }
    ];
  }

  if (sceneId === 'discovery') {
    let aquariumOpacity = 0.3;
    if (lineId >= 6) aquariumOpacity = 1; // "Vieron cinco botellas..."
    return [
      // Left fish
      { d: "M 60 400 Q 90 330 130 400 Q 90 470 60 400 Z", fill: "#3b82f6", opacity: aquariumOpacity },
      { d: "M 130 400 L 160 370 L 160 430 Z", fill: "#2563eb", opacity: aquariumOpacity },
      // Center fish
      { d: "M 150 300 Q 180 230 220 300 Q 180 370 150 300 Z", fill: "#f59e0b", opacity: aquariumOpacity },
      { d: "M 220 300 L 250 270 L 250 330 Z", fill: "#d97706", opacity: aquariumOpacity },
      // Right fish
      { d: "M 240 400 Q 270 330 310 400 Q 270 470 240 400 Z", fill: "#10b981", opacity: aquariumOpacity },
      { d: "M 310 400 L 340 370 L 340 430 Z", fill: "#059669", opacity: aquariumOpacity }
    ];
  }

  if (sceneId === 'twist') {
    let faceColor = "#fbbf24";
    let tearOpacity = 0;
    if (lineId >= 10) { // "Lo odian!"
      faceColor = "#ef4444"; // red face crying
      tearOpacity = 1;
    }
    return [
      { d: "M 190 220 A 100 100 0 1 0 189.9 220", fill: faceColor, opacity: 0.8 },
      { d: "M 160 350 Q 190 320 220 350 Q 190 400 160 350 Z", fill: "#450a0a", opacity: 0.9 }, // Mouth
      { d: "M 150 305 L 160 335 L 150 335 Z", fill: "#3b82f6", opacity: tearOpacity }, // Left tear
      { d: "M 220 305 L 230 335 L 220 335 Z", fill: "#3b82f6", opacity: tearOpacity } // Right tear
    ];
  }

  if (sceneId === 'closing') {
    let brainColor = "#a78bfa"; 
    if (lineId >= 13) {
      brainColor = "#8b5cf6"; 
    }
    return [
      { d: "M 190 420 A 70 70 0 0 1 120 350 A 50 50 0 0 1 160 280 A 60 60 0 0 1 220 280 A 50 50 0 0 1 260 350 A 70 70 0 0 1 190 420 Z", fill: brainColor, opacity: 0.8 }
    ];
  }

  return [];
};

// Duraciones (en segundos) de cada escena para animar el dibujo
const SCENE_DURATIONS = {
  intro: 13,
  iceberg: 17,
  car: 17,
  shampoo: 16,
  closing: 11
};

const HandPen = () => (
  <div className="relative pointer-events-none drop-shadow-2xl" style={{ transform: 'translate(0px, -55px)' }}>
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12">
      <path d="M12 19l7-7 3 3-7 7-3-3z" fill="#fff" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="#fff" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" fill="#ea580c" stroke="none" />
    </svg>
  </div>
);

// Motor mágico de dibujo por escena
const WhiteboardShape = ({ sceneId, lineId }) => {
  const path = PATHS[sceneId];
  const fills = getFills(sceneId, lineId);
  const drawDuration = 2.5; 
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    // Solo cuando cambia la escena, reiniciamos el reloj de pintado
    setHasDrawn(false);
    const timer = setTimeout(() => setHasDrawn(true), drawDuration * 1000);
    return () => clearTimeout(timer);
  }, [sceneId, drawDuration]);

  if (!path) return null;

  return (
    <>
      {/* Rellenos de Color (Aparecen después del dibujo y animan con cambios de línea) */}
      <svg viewBox="0 0 380 675" className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {fills.map((fillObj, i) => (
          <motion.path
            key={`fill-${sceneId}-${i}`} // Key basado solo en escena e índice
            d={fillObj.d}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: hasDrawn ? (fillObj.opacity || 1) : 0, 
              fill: fillObj.fill || "transparent" 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* El Trazado */}
      <svg viewBox="0 0 380 675" className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.path
          key={`path-${sceneId}`} // Fuerza reinicio cuando cambia la escena
          d={path}
          fill="transparent"
          stroke="#0f172a" 
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: drawDuration, ease: "easeInOut" }}
        />
      </svg>
      {/* La Pluma */}
      <motion.div
        key={`hand-${sceneId}`} // Fuerza reinicio cuando cambia la escena
        className="absolute top-0 left-0 z-50 origin-top-left"
        style={{ offsetPath: `path("${path}")`, offsetRotate: "0deg" }}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ 
          offsetDistance: { duration: drawDuration, ease: "easeInOut" },
        }}
      >
        <motion.div
           initial={{ opacity: 0, scale: 1.2 }}
           animate={{ opacity: [0, 1, 1, 0], scale: [1.2, 1, 1, 0.8] }}
           transition={{ duration: drawDuration + 0.3, times: [0, 0.1, 0.85, 1] }}
        >
          <HandPen />
        </motion.div>
      </motion.div>
    </>
  );
};

export default function VideoIceberg() {
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

  const currentLine = SCRIPT.find((line) => currentTime >= line.start && currentTime < line.end) || SCRIPT[0];

  return (
    <div className="min-h-[100vh] bg-[#f8fafc] flex flex-col items-center justify-center p-4 relative font-sans">
      
      {/* Contenedor Formato Celular (9:16) */}
      <div 
        className="relative shadow-[0_20px_60px_rgba(15,23,42,0.1)] rounded-[40px] overflow-hidden flex flex-col bg-white border-4 border-slate-100"
        style={{ width: '100%', maxWidth: '380px', aspectRatio: '9/16' }}
      >
        
        {/* ESCENA DE DIBUJO (Sólo si no es Outro) */}
        {!currentLine.isOutro && (
          <AnimatePresence>
            <motion.div
              key={currentLine.sceneId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-0"
            >
              <WhiteboardShape sceneId={currentLine.sceneId} lineId={currentLine.id} />
            </motion.div>
          </AnimatePresence>
        )}

        {/* OUTRO BLANCO */}
        <AnimatePresence>
          {currentLine.isOutro && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
              className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-1.5 bg-[#ea580c] rounded-full mb-8"></div>
                <p className="text-slate-900 text-2xl font-black tracking-[0.2em] uppercase">Cultura T</p>
                <p className="text-slate-400 text-xs font-bold tracking-[0.3em] uppercase mt-3">Innovación</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TEXTOS ANIMADOS (Subtítulos Estilo Tiktok) */}
        {!currentLine.isOutro && (
          <div className="absolute top-8 left-0 w-full flex justify-center px-4 z-40">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentLine.id}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.05 }}
                transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
                className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] max-w-[90%] text-center"
              >
                <h2 className="text-[20px] leading-snug font-medium text-slate-800 tracking-tight">
                  {currentLine.highlight ? (
                    currentLine.text.split(new RegExp(`(${currentLine.highlight})`, 'gi')).map((part, i) => (
                      <span key={i} className={part.toLowerCase() === currentLine.highlight.toLowerCase() ? "font-bold text-[#ea580c]" : ""}>
                        {part}
                      </span>
                    ))
                  ) : (
                    currentLine.text
                  )}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Botonera y Progreso */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-[380px]">
        
        {/* Barra de Progreso Minimalista */}
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-slate-900" style={{ width: `${(currentTime / VIDEO_END) * 100}%` }}></div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-slate-800 shadow-lg transition-all"
          >
            <Play size={16} className={isPlaying ? "hidden" : "block"} />
            <div className={`w-3 h-3 bg-[#ea580c] rounded-sm ${isPlaying ? "block" : "hidden"}`}></div>
            {isPlaying ? "Pausar" : "Reanudar"}
          </button>
          
          <button 
            onClick={() => setCurrentTime(0)}
            className="px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-semibold tracking-wide border border-slate-200 hover:bg-slate-50 shadow-sm transition-all"
          >
            Reiniciar Todo
          </button>
        </div>
        <p className="text-slate-400 text-[11px] uppercase tracking-wider font-medium">{Math.floor(currentTime)}s / {VIDEO_END}s</p>
      </div>

    </div>
  );
}
