import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Play, 
  Clapperboard, 
  Library, 
  LineChart, 
  PenTool, 
  BrainCircuit, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import LogoCulturaT from '../assets/Logo_CulturaT_color.webp';

export default function BentoDashboard() {
  const navigate = useNavigate();

  // Animaciones para el Grid
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#01102A] overflow-hidden p-4 md:p-8 flex flex-col items-center justify-center">
      
      {/* =========================================
          FONDO MESH GRADIENT (ANIMADO)
      ========================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#F06000] opacity-[0.15] blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0], 
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#0088FF] opacity-[0.15] blur-[100px]" 
        />
        {/* Grid Overlay para darle textura de "Tablero Técnico" */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* =========================================
          CONTENIDO PRINCIPAL (BENTO GRID)
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* ENCABEZADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 px-10 shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="bg-white p-3 rounded-2xl">
              <img src={LogoCulturaT} alt="Cultura T" className="h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl text-white tracking-tight" style={{ fontFamily: "'Utopian Black Dopis', sans-serif" }}>
                CIP <span className="text-[#F06000]">OS</span>
              </h1>
              <p className="text-blue-200/60 font-medium text-sm tracking-widest uppercase mt-1">Centro de Innovación y Productividad</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3 bg-[#F06000]/10 border border-[#F06000]/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#F06000] animate-pulse"></div>
            <span className="text-[#F06000] text-xs font-bold tracking-wide uppercase">Sistema En Línea</span>
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[220px]"
        >

          {/* TARJETA 1: Creador de Videos (GRANDE) */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.01 }}
            onClick={() => navigate('/creador-videos')}
            className="col-span-1 md:col-span-4 lg:col-span-6 row-span-2 group cursor-pointer relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
            }}
          >
            {/* Gradiente sutil interno al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F06000]/0 to-[#F06000]/0 group-hover:to-[#F06000]/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F06000] to-[#b34700] flex items-center justify-center shadow-lg shadow-[#F06000]/30 group-hover:scale-110 transition-transform duration-300">
                <Clapperboard size={32} color="white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5 group-hover:bg-white/20 transition-colors">
                <ArrowRight color="white" size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-[#F06000]" />
                <span className="text-[#F06000] font-bold tracking-wider text-xs uppercase">Inteligencia Artificial</span>
              </div>
              <h2 className="text-4xl text-white leading-tight mb-4" style={{ fontFamily: "'Utopian Black Dopis', sans-serif" }}>
                Creador de<br/>Videos Cortos
              </h2>
              <p className="text-blue-100/70 font-medium max-w-sm">Genera plantillas verticales tipo Notion o Institucional para Instagram y TikTok con animaciones sincronizadas.</p>
            </div>
          </motion.div>

          {/* TARJETA 2: Academia (MEDIANA) */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate('/cursos')}
            className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 group cursor-pointer rounded-[32px] p-6 flex flex-col justify-between"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <PenTool size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white font-bold mb-1">Academia</h3>
              <p className="text-blue-100/50 text-sm">Cursos y herramientas de apropiación.</p>
            </div>
          </motion.div>

          {/* TARJETA 3: Laboratorio de Datos (MEDIANA) */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate('/laboratorio-datos')}
            className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 group cursor-pointer rounded-[32px] p-6 flex flex-col justify-between"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
             <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <LineChart size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-xl text-white font-bold mb-1">Data Lab</h3>
              <p className="text-blue-100/50 text-sm">Visualización analítica e impacto.</p>
            </div>
          </motion.div>

          {/* TARJETA 4: Centro de Pensamiento (MEDIANA) */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate('/centro-pensamiento')}
            className="col-span-1 md:col-span-4 lg:col-span-6 row-span-1 group cursor-pointer rounded-[32px] p-6 flex items-center gap-6"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
              <Library size={32} />
            </div>
            <div>
              <h3 className="text-2xl text-white font-bold mb-2">Centro de Pensamiento</h3>
              <p className="text-blue-100/60">Investigación, artículos y modelos de gestión territorial pública.</p>
            </div>
          </motion.div>

          {/* TARJETA 5: Widget Estético */}
          <motion.div 
            variants={item}
            className="col-span-1 md:col-span-4 lg:col-span-3 lg:col-start-1 lg:row-start-3 group rounded-[32px] p-6 flex flex-col items-center justify-center text-center overflow-hidden relative"
            style={{ 
              background: '#032968',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <BrainCircuit size={48} color="#F06000" className="mb-4 opacity-80" />
            <div className="text-white font-bold uppercase tracking-widest text-sm">Motor Neuronal</div>
            <div className="text-blue-300/50 text-xs mt-1">Activo y procesando</div>
          </motion.div>

          {/* TARJETA 6: Acceso Directo (Notion Video) */}
          <motion.div 
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate('/video-notion')}
            className="col-span-1 md:col-span-4 lg:col-span-3 lg:row-start-3 group cursor-pointer rounded-[32px] p-6 flex flex-col justify-between"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
             <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
            <div>
              <h3 className="text-lg text-white font-bold mb-1">Demo Ecoturismo</h3>
              <p className="text-blue-100/50 text-sm">Ver generador híbrido.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
