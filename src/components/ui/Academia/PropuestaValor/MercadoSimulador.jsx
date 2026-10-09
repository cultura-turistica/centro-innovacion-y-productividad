"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Target, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

const ARCHETYPE_CONFIGS = {
  martin: {
    name: "Martín (Ejecutivo Urbano)",
    targetType: "martin",
    targetColor: "#3b82f6", // azul eléctrico
    targetBorder: "#1d4ed8",
    targetLabel: "Ejecutivo Agobiado",
    tagline: "Busca silencio acústico 24/7 y cama ortopédica",
    hitQuotes: [
      "“¡Por fin! Llevo semanas soñando con dormir en silencio absoluto sin bafles de vecinos.”",
      "“¡Compro! Saber que tengo auxilio 4x4 si se vara mi carro me quita un peso de encima.”",
      "“¡Exacto! Café de especialidad en la terraza y desconexión total del trabajo de oficina.”",
      "“¡Reservo ya! Una cama ortopédica premium para aliviar este dolor de espalda de 60h semanales.”",
    ],
    missQuotes: [
      "“Yo busco una finca de rumba con bafles gigantes para amanecer tomando... ¡ese silencio me aburre!”",
      "“Yo solo quiero un hotel barato en la autopista para hacer compras en la ciudad.”",
      "“Yo busco turismo de fiesta masiva con animación y licor libre todo el fin de semana.”",
    ]
  },
  elena: {
    name: "Elena (Viajera Cultural)",
    targetType: "elena",
    targetColor: "#ec4899", // rosa intenso
    targetBorder: "#be185d",
    targetLabel: "Viajera Consciente",
    tagline: "Busca inmersión íntima en telar con maestras artesanas",
    hitQuotes: [
      "“¡Maravilloso! Aprender telar vertical directamente con la maestra artesana sin intermediarios.”",
      "“¡Respeto total! El 100% de la retribución llega a la familia tejedora de la vereda.”",
      "“¡Qué alegría! Almorzar en torno al fogón campesino tradicional y compartir sus memorias.”",
      "“¡Justo esto! Una pieza tejida con mis propias manos y certificado de origen genuino.”",
    ],
    missQuotes: [
      "“Yo solo busco un tour exprés de 10 minutos para tomarme una selfie y comprar souvenirs importados.”",
      "“A mí la artesanía tradicional no me interesa; prefiero un resort con piscina y música de moda.”",
      "“Yo busco paquetes turísticos de masas con autobuses gigantes y paradas de 5 minutos.”",
    ]
  },
  familia: {
    name: "Familia Ramírez (Padres con Niños)",
    targetType: "familia",
    targetColor: "#f59e0b", // ámbar cálido
    targetBorder: "#b45309",
    targetLabel: "Familia con Hijos",
    tagline: "Busca naturaleza segura, senderos planos y granja educativa",
    hitQuotes: [
      "“¡Qué alivio! Senderos planos y accesibles donde los niños y los abuelos caminan sin peligro.”",
      "“¡Comida sana y casera! Saber que los niños comen seguro sin riesgo de indigestión no tiene precio.”",
      "“¡Hermoso! Alimentar a los terneros y recoger huevos al amanecer; los niños dejaron las pantallas.”",
      "“¡Paz mental! Guía pedagógico atento y botiquín médico certificado en la cabaña.”",
    ],
    missQuotes: [
      "“Nosotros somos montañistas extremos y queremos trepar riscos peligrosos sin senderos.”",
      "“Yo busco un retiro de silencio absoluto solo para adultos donde no se permitan niños corriendo.”",
      "“Nosotros queremos un parque temático comercial con montañas rusas de cemento y comida rápida.”",
    ]
  }
};

export default function MercadoSimulador({
  archetype,
  onTargetValidated,
  isValidated = false,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animFrameIdRef = useRef(null);

  const [validatedCount, setValidatedCount] = useState(0);
  const [lastSpeech, setLastSpeech] = useState(null);

  const config = ARCHETYPE_CONFIGS[archetype.id] || ARCHETYPE_CONFIGS.martin;

  // Estado mutable de partículas y simulación física
  const simStateRef = useRef({
    particles: [],
    radarWave: null, // { x, y, radius, maxRadius, alpha }
    targetCount: 0,
    width: 600,
    height: 320,
    dpr: 1,
  });

  // Generador de partículas de la multitud
  const initParticles = useCallback((w, h) => {
    const list = [];
    const total = 54;
    const archetypeTypes = ['martin', 'elena', 'familia'];
    const otherArchetypes = archetypeTypes.filter(t => t !== archetype.id);

    for (let i = 0; i < total; i++) {
      let type;
      let color;
      let stroke;
      let label;

      if (i < 15) {
        // Personas del arquetipo activo
        type = archetype.id;
        color = config.targetColor;
        stroke = config.targetBorder;
        label = config.targetLabel;
      } else if (i < 28) {
        // Arquetipo alternativo 1
        const t1 = otherArchetypes[0];
        const cfg1 = ARCHETYPE_CONFIGS[t1];
        type = t1;
        color = cfg1.targetColor;
        stroke = cfg1.targetBorder;
        label = cfg1.targetLabel;
      } else if (i < 41) {
        // Arquetipo alternativo 2
        const t2 = otherArchetypes[1];
        const cfg2 = ARCHETYPE_CONFIGS[t2];
        type = t2;
        color = cfg2.targetColor;
        stroke = cfg2.targetBorder;
        label = cfg2.targetLabel;
      } else {
        // Turista convencional indiferente
        type = 'generic';
        color = '#cbd5e1'; // slate-300
        stroke = '#64748b';
        label = 'Turista Convencional';
      }

      const radius = type === archetype.id ? 12 : 10;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.45 + Math.random() * 0.55;

      list.push({
        id: i,
        type,
        color,
        stroke,
        label,
        x: radius + Math.random() * (w - radius * 2),
        y: radius + Math.random() * (h - radius * 2),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        baseRadius: radius,
        validated: false,
        pulseEffect: 0,
        shakeEffect: 0,
      });
    }

    simStateRef.current.particles = list;
    simStateRef.current.targetCount = 0;
  }, [archetype.id, config]);

  // Manejo del redimensionamiento del canvas y DPR
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
      const w = Math.max(300, Math.floor(rect.width));
      const h = Math.max(260, Math.floor(Math.min(360, window.innerHeight * 0.4)));

      canvasRef.current.width = w * dpr;
      canvasRef.current.height = h * dpr;

      simStateRef.current.width = w;
      simStateRef.current.height = h;
      simStateRef.current.dpr = dpr;

      if (simStateRef.current.particles.length === 0) {
        initParticles(w, h);
      } else {
        simStateRef.current.particles.forEach(p => {
          p.x = Math.max(p.radius, Math.min(w - p.radius, p.x));
          p.y = Math.max(p.radius, Math.min(h - p.radius, p.y));
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles]);

  // Bucle de animación (60 FPS)
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const dt = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width, height, dpr, particles, radarWave } = simStateRef.current;

      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Fondo de papel cálido limpio con cuadrícula sutil de libreta
      ctx.fillStyle = '#fdfcf9';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(15, 23, 42, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Onda de propuesta de valor si está activa
      if (radarWave) {
        radarWave.radius += 240 * dt;
        radarWave.alpha = Math.max(0, 1 - (radarWave.radius / radarWave.maxRadius));

        ctx.beginPath();
        ctx.arc(radarWave.x, radarWave.y, radarWave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79, 70, 229, ${radarWave.alpha * 0.75})`;
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = `rgba(99, 102, 241, ${radarWave.alpha * 0.08})`;
        ctx.fill();

        if (radarWave.radius >= radarWave.maxRadius) {
          simStateRef.current.radarWave = null;
        }
      }

      // 3. Partículas de la multitud
      particles.forEach((p) => {
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;

        if (p.x - p.radius < 0) {
          p.x = p.radius;
          p.vx = Math.abs(p.vx);
        } else if (p.x + p.radius > width) {
          p.x = width - p.radius;
          p.vx = -Math.abs(p.vx);
        }

        if (p.y - p.radius < 0) {
          p.y = p.radius;
          p.vy = Math.abs(p.vy);
        } else if (p.y + p.radius > height) {
          p.y = height - p.radius;
          p.vy = -Math.abs(p.vy);
        }

        // Resonancia con la onda de valor
        if (radarWave && p.type === archetype.id && !p.validated) {
          const dx = p.x - radarWave.x;
          const dy = p.y - radarWave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - radarWave.radius) < 25) {
            p.pulseEffect = 1.0;
          }
        }

        if (p.pulseEffect > 0) p.pulseEffect = Math.max(0, p.pulseEffect - 1.5 * dt);
        if (p.shakeEffect > 0) p.shakeEffect = Math.max(0, p.shakeEffect - 2.5 * dt);

        const shakeX = p.shakeEffect > 0 ? (Math.sin(p.shakeEffect * 30) * 4) : 0;
        const currentX = p.x + shakeX;
        const currentY = p.y;

        // Halo pulsante al resonar
        if (p.type === archetype.id && !p.validated && p.pulseEffect > 0) {
          ctx.beginPath();
          ctx.arc(currentX, currentY, p.radius + 10 * p.pulseEffect, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${0.4 * p.pulseEffect})`;
          ctx.fill();
        }

        // Halo verde de cliente validado
        if (p.validated) {
          ctx.beginPath();
          ctx.arc(currentX, currentY, p.radius + 5, 0, Math.PI * 2);
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Cuerpo de la personita
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.validated ? '#10b981' : p.color;
        ctx.fill();
        ctx.strokeStyle = p.validated ? '#064e3b' : '#0f172a';
        ctx.lineWidth = 2.2;
        ctx.stroke();

        // Expresión facial cómic estilo Nicky Case (tinta oscura)
        const eyeOffset = p.radius * 0.35;
        const eyeY = currentY - p.radius * 0.15;
        const inkColor = p.validated ? '#ffffff' : '#0f172a';

        // Ojos
        ctx.fillStyle = inkColor;
        ctx.beginPath();
        ctx.arc(currentX - eyeOffset, eyeY, 1.8, 0, Math.PI * 2);
        ctx.arc(currentX + eyeOffset, eyeY, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Boca
        ctx.beginPath();
        if (p.validated) {
          ctx.arc(currentX, currentY + p.radius * 0.15, p.radius * 0.45, 0.15 * Math.PI, 0.85 * Math.PI);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.8;
          ctx.stroke();
        } else if (p.shakeEffect > 0) {
          ctx.moveTo(currentX - 4, currentY + p.radius * 0.3);
          ctx.lineTo(currentX + 4, currentY + p.radius * 0.3);
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 1.6;
          ctx.stroke();
        } else {
          ctx.arc(currentX, currentY + p.radius * 0.15, p.radius * 0.35, 0.2 * Math.PI, 0.8 * Math.PI);
          ctx.strokeStyle = '#0f172a';
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
      });

      ctx.restore();
      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [archetype.id]);

  // Manejo de interacción de clic / toque sobre el canvas
  const handlePointerInteraction = (clientX, clientY) => {
    if (isValidated) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    const { particles } = simStateRef.current;

    let closest = null;
    let minDistance = 28;

    for (const p of particles) {
      const dx = p.x - clickX;
      const dy = p.y - clickY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDistance) {
        minDistance = dist;
        closest = p;
      }
    }

    if (!closest) {
      simStateRef.current.radarWave = {
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 180,
        alpha: 1,
      };
      return;
    }

    if (closest.validated) return;

    if (closest.type === archetype.id) {
      closest.validated = true;
      closest.pulseEffect = 1.5;

      const newCount = validatedCount + 1;
      setValidatedCount(newCount);
      simStateRef.current.targetCount = newCount;

      const randomQuote = config.hitQuotes[(newCount - 1) % config.hitQuotes.length];
      setLastSpeech({
        type: 'hit',
        author: config.name,
        quote: randomQuote,
        count: newCount,
      });

      if (onTargetValidated) {
        onTargetValidated(newCount);
      }
    } else {
      closest.shakeEffect = 1.0;
      const randomMiss = config.missQuotes[Math.floor(Math.random() * config.missQuotes.length)];
      setLastSpeech({
        type: 'miss',
        author: closest.label,
        quote: randomMiss,
      });
    }
  };

  const handleCanvasClick = (e) => {
    handlePointerInteraction(e.clientX, e.clientY);
  };

  const handleCanvasTouch = (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerInteraction(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const triggerValuePropositionSignal = () => {
    const { width, height, particles } = simStateRef.current;
    simStateRef.current.radarWave = {
      x: width / 2,
      y: height / 2,
      radius: 10,
      maxRadius: Math.max(width, height) * 1.1,
      alpha: 1,
    };

    particles.forEach(p => {
      if (p.type === archetype.id && !p.validated) {
        p.pulseEffect = 1.0;
      }
    });
  };

  const targetColorBg = archetype.id === 'martin' ? 'bg-blue-500' : archetype.id === 'elena' ? 'bg-pink-500' : 'bg-amber-500';

  return (
    <div className="w-full space-y-4">
      
      {/* Explicación Pedagógica Inicial: Cómo es el mercado real (Estilo Editorial Cálido) */}
      <div className="p-4 sm:p-5 bg-amber-50/90 text-slate-900 rounded-[26px] border-[2.5px] border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] space-y-3 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-base" role="img" aria-label="bombillo">💡</span>
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
              Así es como se ve normalmente el mercado real
            </h4>
          </div>
          <span className="text-xs font-mono font-black text-slate-900 px-3 py-1 bg-white rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            {validatedCount} / 10 Clientes Validados
          </span>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
          En el mundo real, los clientes no vienen ordenados en una lista. Están mezclados en una multitud caótica donde cada uno busca cosas opuestas. El error más común de un emprendedor es intentar venderle a todos; el éxito de una propuesta de valor consiste en <strong>encontrar y conectar únicamente a quienes sufren el dolor que tú resuelves</strong>.
        </p>

        {/* Leyenda de la Multitud con diseño limpio tipo cómic */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
          <span className="text-slate-500 font-black uppercase tracking-wider text-[10px]">
            Perfiles en la multitud:
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-950 border-2 border-slate-900 font-bold shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-blue-900" /> Martín (Ejecutivos)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-950 border-2 border-slate-900 font-bold shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 border border-pink-900" /> Elena (Culturales)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border-2 border-slate-900 font-bold shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-amber-900" /> Familias (Niños)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border-2 border-slate-900 font-bold shadow-[2px_2px_0px_0px_#0f172a]">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 border border-slate-600" /> Turistas de Masas
          </span>
        </div>
      </div>

      {/* Contenedor del Canvas Interactivo con Física a 60 FPS */}
      <div 
        ref={containerRef}
        className="w-full relative rounded-[28px] overflow-hidden border-[3px] border-slate-900 shadow-[5px_5px_0px_0px_#0f172a] bg-[#fdfcf9] select-none"
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          onTouchStart={handleCanvasTouch}
          className="w-full h-72 sm:h-80 cursor-crosshair block"
          title="Toca los puntos correspondientes a tu segmento objetivo"
        />

        {/* Botón flotante: Emitir Señal de la Propuesta de Valor */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={triggerValuePropositionSignal}
            className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] transition-all active:translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            title="Lanza un pulso que hace resonar a los clientes de tu perfil"
          >
            <Sparkles className="w-3.5 h-3.5" /> ✨ Emitir Propuesta de Valor
          </button>
        </div>

        {/* Marcador en vivo integrado dentro del canvas */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border-2 border-slate-900 text-slate-900 text-[11px] font-bold flex items-center gap-2 shadow-[2px_2px_0px_0px_#0f172a]">
            <span className={`w-2.5 h-2.5 rounded-full ${targetColorBg} border border-slate-900 animate-ping`} />
            <span>Objetivo: Toca a <strong>{config.targetLabel}</strong></span>
          </div>
        </div>
      </div>

      {/* Barra de Progreso y Mensaje de Feedback Pedagógico en Tiempo Real */}
      <div className="space-y-3">
        {/* Barra de validación */}
        <div className="w-full bg-slate-200 h-3.5 rounded-full border-2 border-slate-900 overflow-hidden p-0.5">
          <div 
            className={`h-full bg-emerald-500 rounded-full transition-all duration-300 ${
              validatedCount >= 10 ? 'w-full' :
              validatedCount === 9 ? 'w-[90%]' :
              validatedCount === 8 ? 'w-[80%]' :
              validatedCount === 7 ? 'w-[70%]' :
              validatedCount === 6 ? 'w-[60%]' :
              validatedCount === 5 ? 'w-[50%]' :
              validatedCount === 4 ? 'w-[40%]' :
              validatedCount === 3 ? 'w-[30%]' :
              validatedCount === 2 ? 'w-[20%]' :
              validatedCount === 1 ? 'w-[10%]' : 'w-0'
            }`}
          />
        </div>

        {/* Globo de diálogo en vivo del cliente tocado */}
        {lastSpeech && (
          <div 
            className={`p-3.5 sm:p-4 rounded-[22px] border-[2.5px] border-slate-900 text-xs sm:text-sm font-bold text-left animate-in fade-in transition-all ${
              lastSpeech.type === 'hit' 
                ? 'bg-emerald-100 text-emerald-950 shadow-[3px_3px_0px_0px_#059669]' 
                : 'bg-amber-100 text-amber-950 shadow-[3px_3px_0px_0px_#b45309]'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {lastSpeech.type === 'hit' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              )}
              <span className="text-[10px] font-black uppercase tracking-wider">
                {lastSpeech.type === 'hit' 
                  ? `✓ Cliente #${lastSpeech.count} Validado (${lastSpeech.author})` 
                  : `✗ Descarte de Mercado (${lastSpeech.author})`}
              </span>
            </div>
            <p className="italic pl-6">
              {lastSpeech.quote}
            </p>
            {lastSpeech.type === 'miss' && (
              <p className="text-[11px] font-normal text-amber-900/90 pl-6 mt-1">
                💡 <em>Lección clave:</em> No pierdas tiempo intentando convencer a quien no comparte este dolor. Enfoca tu energía en tu segmento real.
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
