import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Package, Sparkles, 
  Users, Handshake, Wrench, 
  Drill, Image as ImageIcon, Home, 
  Globe, Car, Coffee, 
  XCircle, CheckSquare, Target, 
  Play 
} from 'lucide-react';
import LogoCulturaT from '../assets/Logo_CulturaT_color.png';

// ============================================================================
// CONFIGURACIÓN Y GUION (SCRIPT)
// ============================================================================
const VIDEO_END = 70; 

const SCRIPT = [
  // BLOQUE 1 (OSCURO - Olas)
  { id: 1, theme: 'dark', pattern: 'waves', icon: 'cart', text: "Piensa en tu última gran compra.", start: 0, end: 4, highlights: ["última gran compra"] },
  { id: 2, theme: 'dark', pattern: 'waves', icon: 'package', text: "¿Realmente morías de ganas por tener ese objeto?", start: 4, end: 7, highlights: ["ese objeto"] },
  { id: 3, theme: 'dark', pattern: 'waves', icon: 'sparkles', text: "¿O en realidad compraste lo que iba a hacer por ti?", start: 7, end: 11, highlights: ["hacer por ti?"] },
  
  // BLOQUE 2 (CLARO - Puntos)
  { id: 4, theme: 'light', pattern: 'dots', icon: 'users', text: "Grábate esto: La gente NO compra productos.", start: 11, end: 14, highlights: ["NO compra"] },
  { id: 5, theme: 'light', pattern: 'dots', icon: 'handshake', text: "Los CONTRATA para eliminar un problema de sus vidas.", start: 14, end: 18, highlights: ["eliminar un problema"] },
  { id: 6, theme: 'light', pattern: 'dots', icon: 'wrench', text: "Si la herramienta funciona, se queda. Si falla, queda en el olvido.", start: 18, end: 24, highlights: ["en el olvido."] },

  // BLOQUE 3 (OSCURO - Líneas Diagonales)
  { id: 7, theme: 'dark', pattern: 'lines', icon: 'drill', text: "Nadie compra un taladro porque sueñe con la herramienta.", start: 24, end: 29, highlights: ["con la herramienta."] },
  { id: 8, theme: 'dark', pattern: 'lines', icon: 'image', text: "El cliente contrata el agujero en la pared...", start: 29, end: 34, highlights: ["el agujero"] },
  { id: 9, theme: 'dark', pattern: 'lines', icon: 'home', text: "...para poder exhibir con orgullo su nuevo cuadro.", start: 34, end: 40, highlights: ["exhibir con orgullo"] },

  // BLOQUE 4 (CLARO - Olas)
  { id: 10, theme: 'light', pattern: 'waves', icon: 'globe', text: "La regla es absoluta y universal.", start: 40, end: 43, highlights: ["universal."] },
  { id: 11, theme: 'light', pattern: 'waves', icon: 'car', text: "No usas Uber por la app. Contratas llegar a tiempo sin estrés.", start: 43, end: 48, highlights: ["sin estrés."] },
  { id: 12, theme: 'light', pattern: 'waves', icon: 'coffee', text: "No pagas más por un café de marca. Contratas estatus y pertenencia.", start: 48, end: 54, highlights: ["estatus y pertenencia."] },

  // BLOQUE 5 (OSCURO - Puntos)
  { id: 13, theme: 'dark', pattern: 'dots', icon: 'xcircle', text: "Despierta: A tu cliente le da igual tu producto.", start: 54, end: 57, highlights: ["le da igual"] },
  { id: 14, theme: 'dark', pattern: 'dots', icon: 'checksquare', text: "A ellos solo les importa su propia tarea por resolver.", start: 57, end: 60, highlights: ["su propia tarea"] },
  { id: 15, theme: 'dark', pattern: 'dots', icon: 'target', text: "Tu única misión es convertirte en la MEJOR herramienta para su éxito.", start: 60, end: 65, highlights: ["MEJOR herramienta"] }
];

const OUTRO_SCENE = { id: 16, theme: 'white', isOutro: true, start: 65, end: 70 };
const FULL_SCRIPT = [...SCRIPT, OUTRO_SCENE];


const getIcon = (name, theme) => {
  const isDark = theme === 'dark';
  const colorClass = isDark ? 'text-white' : 'text-[#032968]'; 
  const dropShadow = isDark ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'drop-shadow-[0_0_10px_rgba(3,41,104,0.2)]';

  if (name === 'target') {
    return <Target size={90} strokeWidth={1} className="text-[#F06000] drop-shadow-[0_0_20px_rgba(240,96,0,0.4)]" />;
  }

  const props = { size: 90, strokeWidth: 1.2, className: `${colorClass} ${dropShadow}` };
  
  switch(name) {
    case 'cart': return <ShoppingCart {...props} />;
    case 'package': return <Package {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    case 'users': return <Users {...props} />;
    case 'handshake': return <Handshake {...props} />;
    case 'wrench': return <Wrench {...props} />;
    case 'drill': return <Drill {...props} />;
    case 'image': return <ImageIcon {...props} />;
    case 'home': return <Home {...props} />;
    case 'globe': return <Globe {...props} />;
    case 'car': return <Car {...props} />;
    case 'coffee': return <Coffee {...props} />;
    case 'xcircle': return <XCircle {...props} />;
    case 'checksquare': return <CheckSquare {...props} />;
    default: return null;
  }
};

// ============================================================================
// FONDOS DINÁMICOS CON TRAMAS REALES
// ============================================================================

const AnimatedBackgrounds = ({ theme, pattern }) => {
  const isDark = theme === 'dark';
  const opacityMult = isDark ? 1 : 0.3; 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${theme}-${pattern}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {pattern === 'waves' && (
          <div className="absolute bottom-0 w-full h-[50%] mix-blend-overlay">
            <motion.svg animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[150px]" style={{ opacity: 0.3 * opacityMult }} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C150,60 350,0 600,60 C850,120 1050,60 1200,0 L1200,120 L0,120 Z" fill="#032968"></path>
            </motion.svg>
            <motion.svg animate={{ x: ["-50%", "0%"] }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute bottom-0 w-[200%] h-[120px]" style={{ opacity: 0.4 * opacityMult }} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,60 C150,0 350,120 600,60 C850,0 1050,120 1200,60 L1200,120 L0,120 Z" fill="#F06000"></path>
            </motion.svg>
          </div>
        )}

        {pattern === 'dots' && (
          <motion.div 
            animate={{ y: ["0%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-[-100%] w-[200%] h-[200%]"
            style={{ 
              backgroundImage: `radial-gradient(circle at center, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(3,41,104,0.1)'} 2px, transparent 2px)`, 
              backgroundSize: '30px 30px' 
            }}
          />
        )}

        {pattern === 'lines' && (
          <motion.div 
            animate={{ x: ["0%", "-100%"] }} 
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute inset-0 w-[200%] h-full"
            style={{ 
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(3,41,104,0.03)'} 10px, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(3,41,104,0.03)'} 12px)`
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================================================
// TEXTO PROFESIONAL (SUAVE Y LEGIBLE)
// ============================================================================
const ProfessionalText = ({ text, highlights = [], theme }) => {
  const isDark = theme === 'dark';
  let formattedText = [];

  if (highlights.length > 0) {
    const highlight = highlights[0]; 
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    formattedText = parts.map((part, i) => {
      const isMatch = part.toLowerCase() === highlight.toLowerCase();
      const baseColor = isDark ? 'text-gray-100' : 'text-[#0f172a]';
      return (
        <span 
          key={i} 
          className={isMatch ? `text-[#F06000] font-extrabold transition-colors duration-500` : `${baseColor} font-normal opacity-90 transition-colors duration-500`}
        >
          {part}
        </span>
      );
    });
  } else {
    formattedText = <span className={isDark ? 'text-gray-100' : 'text-[#0f172a]'}>{text}</span>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-6"
    >
      <h2 className="text-[1.55rem] leading-[1.3] tracking-tight drop-shadow-sm">
        {formattedText}
      </h2>
    </motion.div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function CreadorDeVideos() {
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
  const cameraScale = 1 + (currentTime / VIDEO_END) * 0.05; 

  const bgColors = {
    dark: 'bg-[#0a0f18] border-[#222]',
    light: 'bg-[#f4f7f9] border-[#e2e8f0]',
    white: 'bg-white border-[#f1f5f9]' 
  };

  return (
    <div className="min-h-[100vh] bg-[#050505] flex flex-col items-center justify-center p-4 overflow-hidden relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Contenedor del Video */}
      <motion.div 
        className={`relative shadow-[0_0_80px_rgba(0,0,0,1)] rounded-[40px] overflow-hidden flex flex-col z-10 border transition-colors duration-[1000ms] ${bgColors[currentLine.theme]}`}
        style={{ width: '100%', maxWidth: '380px', aspectRatio: '9/16' }}
      >
        
        {/* FONDOS DINÁMICOS POR ESCENA */}
        {!currentLine.isOutro && <AnimatedBackgrounds theme={currentLine.theme} pattern={currentLine.pattern} />}

        {/* Cámara */}
        <motion.div className="absolute inset-0 z-10 flex flex-col" style={{ scale: cameraScale }}>
          
          {/* Notch de celular removido a petición */}

          <div className="flex-1 flex flex-col items-center justify-center p-8 pt-20 pb-28 relative z-20">
            
            <AnimatePresence mode="wait">
              {currentLine.isOutro ? (
                // CORTINA DE CIERRE FINAL
                <motion.div 
                  key="outro"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
                  className="flex flex-col items-center justify-center w-full h-full bg-white absolute inset-0 z-50"
                >
                  <img src={LogoCulturaT} alt="Cultura T" className="w-[85%] object-contain mb-8" />
                  <div className="w-12 h-[3px] bg-[#F06000] rounded-full mb-6"></div>
                  <p className="text-gray-500 text-[0.8rem] font-bold tracking-wide uppercase">Centro de Innovación</p>
                  <p className="text-gray-500 text-[0.8rem] font-bold tracking-wide uppercase">y Productividad</p>
                </motion.div>
              ) : (
                // CONTENIDO NORMAL DE LA ESCENA
                <motion.div 
                  key={currentLine.id} 
                  className="w-full flex flex-col items-center justify-center h-full"
                >
                  
                  {/* ÍCONO ÚNICO POR FRASE */}
                  <div className="h-[180px] flex items-center justify-center mb-6 relative w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative z-10"
                    >
                      <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {getIcon(currentLine.icon, currentLine.theme)}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* TEXTO */}
                  <div className="w-full flex items-center justify-center min-h-[160px]">
                    <ProfessionalText text={currentLine.text} highlights={currentLine.highlights} theme={currentLine.theme} />
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* BARRA DE PROGRESO (removida) */}

      </motion.div>

      {/* Controles para el Admin */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-[#111] hover:bg-[#222] text-white px-5 py-2.5 rounded-full border border-[#333] text-sm shadow-xl transition-all"
          >
            <Play size={14} className={isPlaying ? "hidden" : "block"} />
            <div className={`w-3 h-3 bg-[#F06000] rounded-sm ${isPlaying ? "block" : "hidden"}`}></div>
            {isPlaying ? "Pausar Video" : "Reanudar Video"}
          </button>
          
          <button 
            onClick={() => setCurrentTime(64)}
            className="flex items-center gap-2 bg-[#032968] hover:bg-[#043a96] text-white px-5 py-2.5 rounded-full text-sm shadow-xl transition-all"
          >
            Ver Cierre (Cortina)
          </button>
        </div>
        <p className="text-[#666] text-xs">El ciclo dura 70s. Usa el botón azul para saltar al final.</p>
      </div>

    </div>
  );
}
