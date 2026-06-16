import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertCircle, Users, XCircle, Rocket, Key,
  Target, Handshake, Leaf, Coins, Compass,
  Puzzle, Megaphone, FileText, Briefcase, Scale,
  Clock, Hourglass, Calendar, Bomb, MessageSquare,
  Sprout, Share2, Play 
} from 'lucide-react';
import LogoCulturaT from '../assets/Logo_CulturaT_color.png';

// ============================================================================
// CONFIGURACIÓN Y GUION (SCRIPT)
// ============================================================================
const VIDEO_END = 45.5; 

const SCRIPT = [
  // HOOK
  { id: 1, theme: 'brandDark', pattern: 'particles', icon: 'alert', text: "¿Vas a emprender con tu mejor amigo?", start: 0, end: 3, highlights: ["mejor amigo?"] },
  { id: 2, theme: 'brandDark', pattern: 'particles', icon: 'bomb', text: "¡Cuidado! La confianza sola no salva negocios.", start: 3, end: 6, highlights: ["no salva negocios."] },

  // PUNTO 1
  { id: 3, theme: 'brandAccent', pattern: 'pulse', icon: 'xcircle', text: "Regla 1: ¡Cero clones!", start: 6, end: 8, highlights: ["¡Cero clones!"] },
  { id: 4, theme: 'light', pattern: 'blur', icon: 'puzzle', text: "Si ambos son creativos... ¿quién vende? ¿quién administra?", start: 8, end: 11.5, highlights: ["¿quién vende?"] },
  { id: 5, theme: 'light', pattern: 'blur', icon: 'scale', text: "Busca socios que cubran tus puntos ciegos, no un espejo.", start: 11.5, end: 15.5, highlights: ["puntos ciegos,"] },

  // PUNTO 2
  { id: 6, theme: 'brandDark', pattern: 'pulse', icon: 'clock', text: "Regla 2: El reloj financiero.", start: 15.5, end: 18, highlights: ["reloj financiero."] },
  { id: 7, theme: 'light', pattern: 'particles', icon: 'calendar', text: "Si tú aguantas meses sin cobrar, pero él necesita dinero ya...", start: 18, end: 22, highlights: ["dinero ya..."] },
  { id: 8, theme: 'light', pattern: 'particles', icon: 'xcircle', text: "esa presión quebrará la empresa y la amistad.", start: 22, end: 25, highlights: ["quebrará la empresa"] },

  // PUNTO 3
  { id: 9, theme: 'brandAccent', pattern: 'blur', icon: 'target', text: "Regla 3: Misma visión o nada.", start: 25, end: 27.5, highlights: ["Misma visión"] },
  { id: 10, theme: 'brandAccent', pattern: 'blur', icon: 'rocket', text: "¿Quieren un imperio global o un negocio de fin de semana?", start: 27.5, end: 31.5, highlights: ["imperio global"] },
  { id: 11, theme: 'light', pattern: 'particles', icon: 'compass', text: "Si no reman al mismo destino, se van a hundir.", start: 31.5, end: 35.5, highlights: ["mismo destino,"] },

  // OUTRO
  { id: 12, theme: 'brandDark', pattern: 'blur', icon: 'users', text: "El equipo correcto vale más que una idea millonaria.", start: 35.5, end: 39, highlights: ["equipo correcto"] },
  { id: 13, theme: 'brandDark', pattern: 'blur', icon: 'share', text: "Etiqueta a tu socio ideal y guarda este video.", start: 39, end: 42.5, highlights: ["socio ideal"] }
];

const OUTRO_SCENE = { id: 14, theme: 'white', isOutro: true, start: 42.5, end: 45.5 };
const FULL_SCRIPT = [...SCRIPT, OUTRO_SCENE];


const getIcon = (name, theme) => {
  let colorClass = 'text-white';
  let dropShadow = 'drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]';

  if (theme === 'light') {
    colorClass = 'text-[#032968]';
    dropShadow = 'drop-shadow-[0_0_20px_rgba(3,41,104,0.3)]';
  } else if (theme === 'brandAccent') {
    colorClass = 'text-white';
    dropShadow = 'drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]';
  }

  if (name === 'target') {
    return <Target size={100} strokeWidth={1.5} className="text-[#F06000] drop-shadow-[0_0_30px_rgba(240,96,0,0.6)]" />;
  }

  const props = { size: 100, strokeWidth: 1.5, className: `${colorClass} ${dropShadow}` };
  
  switch(name) {
    case 'alert': return <AlertCircle {...props} />;
    case 'users': return <Users {...props} />;
    case 'xcircle': return <XCircle {...props} />;
    case 'rocket': return <Rocket {...props} />;
    case 'key': return <Key {...props} />;
    case 'target': return <Target {...props} />;
    case 'handshake': return <Handshake {...props} />;
    case 'leaf': return <Leaf {...props} />;
    case 'coins': return <Coins {...props} />;
    case 'compass': return <Compass {...props} />;
    case 'puzzle': return <Puzzle {...props} />;
    case 'megaphone': return <Megaphone {...props} />;
    case 'files': return <FileText {...props} />;
    case 'briefcase': return <Briefcase {...props} />;
    case 'scale': return <Scale {...props} />;
    case 'clock': return <Clock {...props} />;
    case 'hourglass': return <Hourglass {...props} />;
    case 'calendar': return <Calendar {...props} />;
    case 'bomb': return <Bomb {...props} />;
    case 'message': return <MessageSquare {...props} />;
    case 'sprout': return <Sprout {...props} />;
    case 'share': return <Share2 {...props} />;
    default: return null;
  }
};

// ============================================================================
// FONDOS DINÁMICOS CON TRAMAS REALES
// ============================================================================

const AnimatedBackgrounds = ({ theme, pattern }) => {
  const isBrandDark = theme === 'brandDark';
  const isBrandAccent = theme === 'brandAccent';
  const isLight = theme === 'light';

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
        {pattern === 'particles' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: ["0vh", "-100vh"],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 10
                }}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  left: `${Math.random() * 100}%`,
                  bottom: "-10%",
                  backgroundColor: isBrandDark ? '#F06000' : (isBrandAccent ? '#032968' : '#032968'),
                  boxShadow: `0 0 20px ${isBrandDark ? '#F06000' : '#032968'}`
                }}
              />
            ))}
          </div>
        )}

        {pattern === 'pulse' && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 3],
                  opacity: [0.3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
                className="absolute rounded-full border-2"
                style={{
                  width: '150px', height: '150px',
                  borderColor: isLight ? '#032968' : '#ffffff'
                }}
              />
            ))}
          </div>
        )}

        {pattern === 'blur' && (
          <div className="absolute inset-0">
             <motion.div
               animate={{
                 x: ["0%", "50%", "-50%", "0%"],
                 y: ["0%", "50%", "-50%", "0%"]
               }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
               style={{ backgroundColor: isBrandDark ? '#F06000' : (isLight ? '#cbd5e1' : '#032968') }}
             />
             <motion.div
               animate={{
                 x: ["0%", "-50%", "50%", "0%"],
                 y: ["0%", "-50%", "50%", "0%"]
               }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
               style={{ backgroundColor: isBrandAccent ? '#032968' : (isLight ? '#e2e8f0' : '#F06000') }}
             />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================================================
// TEXTO PROFESIONAL (SUAVE Y LEGIBLE)
// ============================================================================
const ProfessionalText = ({ text, highlights = [], theme }) => {
  const isLight = theme === 'light';
  
  let formattedText = [];

  if (highlights.length > 0) {
    const highlight = highlights[0]; 
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    formattedText = parts.map((part, i) => {
      const isMatch = part.toLowerCase() === highlight.toLowerCase();
      
      let highlightClass = "";
      if (isMatch) {
        if (theme === 'brandDark') highlightClass = "text-[#F06000] bg-white/10 px-2 py-1 rounded-lg";
        else if (theme === 'brandAccent') highlightClass = "text-[#032968] bg-white/30 px-2 py-1 rounded-lg";
        else highlightClass = "text-[#F06000] bg-[#F06000]/10 px-2 py-1 rounded-lg";
      }

      const baseColor = isLight ? 'text-[#0f172a]' : 'text-white';

      return (
        <span 
          key={i} 
          className={isMatch ? `${highlightClass} font-extrabold inline-block transform transition-transform hover:scale-105` : `${baseColor} font-medium opacity-95`}
        >
          {part}
        </span>
      );
    });
  } else {
    formattedText = <span className={isLight ? 'text-[#0f172a]' : 'text-white'}>{text}</span>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-center p-6 mx-4 rounded-2xl backdrop-blur-md shadow-2xl ${
        isLight ? 'bg-white/40 border border-white/60' : 'bg-black/20 border border-white/10'
      }`}
    >
      <h2 className="text-[1.4rem] leading-[1.5] tracking-tight">
        {formattedText}
      </h2>
    </motion.div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function VideoSocios() {
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
    brandDark: 'bg-[#032968] border-[#021f54]',
    brandAccent: 'bg-[#F06000] border-[#d65500]',
    light: 'bg-[#f8fafc] border-[#e2e8f0]',
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
                  <div className="h-[220px] flex items-center justify-center mb-2 relative w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="relative z-10"
                    >
                      <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className={`p-8 rounded-full border shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-sm ${currentLine.theme === 'light' ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}
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
            onClick={() => setCurrentTime(42.5)}
            className="flex items-center gap-2 bg-[#032968] hover:bg-[#043a96] text-white px-5 py-2.5 rounded-full text-sm shadow-xl transition-all"
          >
            Ver Cierre (Cortina)
          </button>
        </div>
        <p className="text-[#666] text-xs">El ciclo dura 105s. Usa el botón azul para saltar al final.</p>
      </div>

    </div>
  );
}
