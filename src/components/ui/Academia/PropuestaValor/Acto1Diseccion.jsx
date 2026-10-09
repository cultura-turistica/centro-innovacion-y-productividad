import React, { useState } from 'react';
import NickyCharacter from './NickyCharacter';
import { BookOpen, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, X, Play } from 'lucide-react';

const PILAR1_THEORY = {
  martin: {
    title: "Pilar 1: El Lienzo del Cliente – Caso Martín (El Ejecutivo Urbano Agobiado)",
    summary: "Martín trabaja 60 horas semanales frente a pantallas en Bogotá. No busca ruido ni paseos masivos; busca silencio absoluto, desconexión mental y una escapada rural segura.",
    functionalJob: {
      title: "Llegar a la cabaña el viernes sin atascar su carro",
      desc: "Su tarea práctica: arribar en la noche por una vía rural transitable y bien señalizada, sin perderse por falta de señal de celular."
    },
    socialJob: {
      title: "Estatus de buen gusto en su círculo social",
      desc: "Quiere ser reconocido por su pareja y colegas como alguien sofisticado que descubre refugios campestres exclusivos y auténticos."
    },
    emotionalJob: {
      title: "Paz mental profunda y alivio del estrés",
      desc: "Liberar la tensión acumulada de la oficina, dormir profundamente y respirar el aire limpio de la montaña sin interrupciones."
    },
    painObstacle: {
      title: "Vía intransitable o sin auxilio en el camino",
      desc: "Miedo a quedar varado en una trocha de barro sin señalización ni baquiano que lo auxilie en la noche."
    },
    painRisk: {
      title: "Bafles con música estridente a las 2 AM",
      desc: "El peligro temido: pagar $160 USD por noche y no poder dormir porque los vecinos tienen una fiesta ruidosa sin control."
    },
    gains: {
      title: "Despertar en silencio con café de origen en la niebla",
      desc: "Disfrutar de una cesta de café recién colado en la terraza privada con vista al cañón en completa serenidad."
    },
    trapAvoided: {
      title: "La Trampa: Ofrecerle apps móviles y descuentos",
      desc: "Inundarlo de promociones digitales cuando lo que busca es alejarse de las pantallas y descansar."
    }
  },
  elena: {
    title: "Pilar 1: El Lienzo del Cliente – Caso Elena (Viajera Cultural e Inmersiva)",
    summary: "Elena no busca lujo superficial ni souvenirs industriales; viaja para aprender saberes ancestrales y conectar con la memoria viva de las comunidades.",
    functionalJob: {
      title: "Aprender técnicas de tejido y cocina tradicional",
      desc: "Participar con sus propias manos en talleres auténticos dictados por artesanas locales y comprender los procesos agrícolas campesinos."
    },
    socialJob: {
      title: "Proyectar consciencia ética y apoyo comunitario",
      desc: "Desea ser vista como una persona culta y solidaria que compra a precio justo directamente a las familias campesinas e indígenas."
    },
    emotionalJob: {
      title: "Conexión humana profunda y pertenencia cultural",
      desc: "Escuchar relatos orales de abuelas, sentir la calidez humana del fogón de leña y experimentar paz al apoyar la preservación del patrimonio."
    },
    painObstacle: {
      title: "Demostraciones artificiales montadas para turistas",
      desc: "Talleres simulados de 10 minutos sin profundidad pedagógica, o itinerarios acelerados que no permiten conversar con los creadores."
    },
    painRisk: {
      title: "Fomentar explotación cultural y mercantilismo",
      desc: "Miedo a que su dinero enriquezca a agencias intermediarias de la capital y que las comunidades locales solo reciban migajas."
    },
    gains: {
      title: "Piezas únicas con memoria y acogida familiar",
      desc: "Llevarse una pieza tejida con significado sagrado y haber compartido un almuerzo campesino casero en torno a la mesa familiar."
    },
    trapAvoided: {
      title: "La Trampa: Venderle artesanías de plástico en serie",
      desc: "Ofrecerle un show folclórico con altavoces y recuerdos importados destruye la propuesta de valor: Elena busca el origen genuino de cada puntada."
    }
  },
  familia: {
    title: "Pilar 1: El Lienzo del Cliente – Caso Familia Ramírez (Turismo Multigeneracional)",
    summary: "La Familia Ramírez viaja con niños inquietos y abuelos; su mayor tesoro es la seguridad, el bienestar compartido y el aprendizaje campestre.",
    functionalJob: {
      title: "Coordinar actividades seguras para 3 generaciones",
      desc: "Lograr que los niños jueguen al aire libre y los abuelos puedan caminar por senderos planos y seguros con baños limpios y sombra."
    },
    socialJob: {
      title: "Ejemplo de padres dedicados y familia unida",
      desc: "Demostrar que crían a sus hijos en contacto con la naturaleza, alejados de las pantallas y con valores de respeto hacia el campo."
    },
    emotionalJob: {
      title: "Tranquilidad mental y alegría compartida",
      desc: "Poder relajarse sin la angustia constante de que un niño se accidente, viendo a sus padres e hijos reír juntos en una sobremesa campesina."
    },
    painObstacle: {
      title: "Senderos peligrosos y demoras en la comida infantil",
      desc: "Caminos resbaladizos con barro, pendientes pronunciadas sin pasamanos y esperas de más de una hora para que sirvan el almuerzo a niños hambrientos."
    },
    painRisk: {
      title: "Accidente médico sin auxilio o berrinches por tedio",
      desc: "Terror a una caída infantil sin botiquín a la mano, o pagar un hotel donde los niños se aburran y desaten quejas de otros huéspedes."
    },
    gains: {
      title: "Granja interactiva, comida casera y descanso seguro",
      desc: "Alimentar terneros y recolectar huevos, menú infantil sano y habitaciones familiares integradas donde todos descansan plácidamente."
    },
    trapAvoided: {
      title: "La Trampa: Venderles senderismo extremo de aventura",
      desc: "Ofrecerles caminatas de alta montaña o deportes de riesgo físico espanta a la familia: necesitan infraestructura accesible y confianza absoluta."
    }
  }
};

export default function Acto1Diseccion({ archetype, profileData, onComplete, onBack }) {
  const [isTheoryModalOpen, setIsTheoryModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [characterMood, setCharacterMood] = useState('neutral');
  const [isJumping, setIsJumping] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // 'trabajo', 'dolor', 'deseo', 'trap'

  const tokens = profileData.profileTokens;
  const currentToken = tokens[currentIndex];
  const isFinished = currentIndex >= tokens.length;

  const handleSelectCategory = (cat) => {
    // Si el usuario detecta que es una trampa
    if (cat === 'trap') {
      if (currentToken.isTrap) {
        setCharacterMood('happy');
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
        setFeedback({
          type: 'success',
          title: "¡Ojo Clínico de Diseñador!",
          text: currentToken.feedback,
          subType: currentToken.subTypeLabel
        });
      } else {
        setCharacterMood('sad');
        setFeedback({
          type: 'error',
          title: "No es una trampa...",
          text: "Este testimonio sí es una necesidad real del cliente. Pregúntate si es un trabajo que hace, un dolor que sufre o un deseo.",
          subType: "Necesidad Real"
        });
      }
      return;
    }

    // Si es una trampa y el usuario intenta clasificarlo como necesidad normal
    if (currentToken.isTrap) {
      setCharacterMood('shocked');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 800);
      setFeedback({
        type: 'trap',
        title: "¡ESCUPIDO! TRAMPA DETECTADA",
        text: currentToken.feedback,
        subType: currentToken.subTypeLabel
      });
      return;
    }

    // Si la categoría principal no coincide
    if (cat !== currentToken.category) {
      setCharacterMood('sad');
      setFeedback({
        type: 'error',
        title: "Revisa la categoría...",
        text: `Pensaste que era un ${cat.toUpperCase()}, pero analiza bien el testimonio: ¿está intentando completar una tarea, sufriendo un miedo, o soñando un beneficio?`,
        subType: currentToken.subTypeLabel
      });
      return;
    }

    // Si coincide y es 'deseo', se resuelve directamente
    if (cat === 'deseo') {
      setCharacterMood('happy');
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
      setFeedback({
        type: 'success',
        title: "¡Alegría / Deseo Confirmado!",
        text: currentToken.feedback,
        subType: currentToken.subTypeLabel
      });
      return;
    }

    // Si coincide y es 'trabajo' o 'dolor', abrimos el subnivel de profundidad de Strategyzer
    setSelectedCategory(cat);
  };

  const handleSubtypeChoice = (chosenSubtype) => {
    if (chosenSubtype === currentToken.subType) {
      setCharacterMood('happy');
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
      setFeedback({
        type: 'success',
        title: `¡Excelente Profundidad: ${currentToken.subTypeLabel}!`,
        text: currentToken.feedback,
        subType: currentToken.subTypeLabel
      });
      setSelectedCategory(null);
    } else {
      setCharacterMood('sad');
      setFeedback({
        type: 'error',
        title: "Casi, pero hay un matiz clave...",
        text: currentToken.explanation,
        subType: currentToken.subTypeLabel
      });
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedCategory(null);
    setCharacterMood('neutral');
    setCurrentIndex(i => i + 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 animate-in fade-in duration-500">
      
      {/* Cabecera Principal */}
      <div className="space-y-3 w-full">
        <div className="flex items-center justify-between w-full">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver a Personajes
            </button>
          ) : <div />}
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-blue-200 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Pilar 1: El Lienzo del Cliente
          </span>
          <div className="w-28 hidden sm:block" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          La Radiografía Mental de {archetype.name}
        </h2>
      </div>

      {/* MINI-JUEGO INTERACTIVO NICKY CASE (POR DEFECTO) */}
      <div className="w-full">
          {!isFinished ? (
            <div className="w-full bg-white p-6 md:p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] flex flex-col items-center space-y-6">
              
              {/* El Muñequito con su Bocadillo */}
              <div className="relative flex flex-col items-center w-full">
                <div className="relative mb-4 bg-amber-50 px-6 py-4 rounded-[26px] border-[2.5px] border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] max-w-xl text-sm md:text-base font-bold text-slate-900 leading-snug">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block mb-1">
                    💭 Pensamiento de {archetype.name}:
                  </span>
                  {currentToken.label}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-amber-50 border-r-[2.5px] border-b-[2.5px] border-slate-900 rotate-45" />
                </div>

                <NickyCharacter
                  color={archetype.color}
                  hat={archetype.hat}
                  mood={characterMood}
                  size={92}
                  isJumping={isJumping}
                  isShaking={isShaking}
                />

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                    Pensamiento {currentIndex + 1} de {tokens.length}
                  </span>
                  <div className="flex gap-1">
                    {tokens.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full border border-slate-900 ${
                          i < currentIndex ? 'bg-emerald-500' : i === currentIndex ? 'bg-amber-400 animate-pulse' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* PASO 1: SELECCIONAR BOLSILLO PRINCIPAL */}
              {!selectedCategory && !feedback && (
                <div className="w-full space-y-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                    ¿En cuál bolsillo de la mente de {archetype.name} va este pensamiento?
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                    <button
                      onClick={() => handleSelectCategory('trabajo')}
                      className="py-3 px-3 rounded-[20px] border-[2.5px] border-slate-900 bg-white hover:bg-blue-50 font-black text-xs md:text-sm text-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:shadow-[1px_1px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex flex-col items-center text-center"
                    >
                      <span className="text-lg mb-1">💼</span>
                      <span className="font-black">Trabajo (Job)</span>
                      <span className="text-[10px] font-normal text-slate-500 leading-tight mt-1">¿Qué intenta lograr?</span>
                    </button>

                    <button
                      onClick={() => handleSelectCategory('dolor')}
                      className="py-3 px-3 rounded-[20px] border-[2.5px] border-slate-900 bg-white hover:bg-rose-50 font-black text-xs md:text-sm text-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:shadow-[1px_1px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex flex-col items-center text-center"
                    >
                      <span className="text-lg mb-1">🩹</span>
                      <span className="font-black">Dolor / Frustración</span>
                      <span className="text-[10px] font-normal text-slate-500 leading-tight mt-1">¿Qué le da miedo o traba?</span>
                    </button>

                    <button
                      onClick={() => handleSelectCategory('deseo')}
                      className="py-3 px-3 rounded-[20px] border-[2.5px] border-slate-900 bg-white hover:bg-emerald-50 font-black text-xs md:text-sm text-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:shadow-[1px_1px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex flex-col items-center text-center"
                    >
                      <span className="text-lg mb-1">⭐</span>
                      <span className="font-black">Alegría / Deseo</span>
                      <span className="text-[10px] font-normal text-slate-500 leading-tight mt-1">¿Qué sueño busca?</span>
                    </button>

                    <button
                      onClick={() => handleSelectCategory('trap')}
                      className="py-3 px-3 rounded-[20px] border-[2.5px] border-slate-900 bg-amber-100 hover:bg-amber-200 font-black text-xs md:text-sm text-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:shadow-[1px_1px_0px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex flex-col items-center text-center"
                    >
                      <span className="text-lg mb-1">🚨</span>
                      <span className="font-black">¡Trampa de Solución!</span>
                      <span className="text-[10px] font-normal text-amber-900 leading-tight mt-1">¿Es un producto disfrazado?</span>
                    </button>
                  </div>
                </div>
              )}

              {/* PASO 2: PROFUNDIZAR EN TRABAJOS (FUNCIONAL, SOCIAL, EMOCIONAL) */}
              {selectedCategory === 'trabajo' && !feedback && (
                <div className="w-full space-y-4 p-5 bg-blue-50 rounded-[24px] border-[2.5px] border-blue-400 animate-in fade-in">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-900 block">
                    🔬 Profundicemos: ¿Qué tipo de Trabajo del Cliente es según Strategyzer?
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => handleSubtypeChoice('funcional')}
                      className="p-3.5 bg-white rounded-[18px] border-[2px] border-slate-900 hover:bg-blue-100/50 font-black text-xs text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] cursor-pointer text-left space-y-1"
                    >
                      <span className="text-sm block">⚙️ Trabajo Funcional</span>
                      <span className="text-[10px] font-normal text-slate-600 block leading-tight">
                        La tarea operativa o práctica física que necesita resolver.
                      </span>
                    </button>

                    <button
                      onClick={() => handleSubtypeChoice('social')}
                      className="p-3.5 bg-white rounded-[18px] border-[2px] border-slate-900 hover:bg-blue-100/50 font-black text-xs text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] cursor-pointer text-left space-y-1"
                    >
                      <span className="text-sm block">👥 Trabajo Social</span>
                      <span className="text-[10px] font-normal text-slate-600 block leading-tight">
                        Cómo quiere ser visto y percibido ante los demás.
                      </span>
                    </button>

                    <button
                      onClick={() => handleSubtypeChoice('emocional')}
                      className="p-3.5 bg-white rounded-[18px] border-[2px] border-slate-900 hover:bg-blue-100/50 font-black text-xs text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] cursor-pointer text-left space-y-1"
                    >
                      <span className="text-sm block">❤️ Trabajo Emocional</span>
                      <span className="text-[10px] font-normal text-slate-600 block leading-tight">
                        Cómo busca sentirse internamente (paz, tranquilidad, alivio).
                      </span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-xs font-bold text-slate-500 underline cursor-pointer hover:text-slate-800"
                  >
                    ← Volver a cambiar de bolsillo
                  </button>
                </div>
              )}

              {/* PASO 2: PROFUNDIZAR EN DOLORES (OBSTÁCULO VS. RIESGO) */}
              {selectedCategory === 'dolor' && !feedback && (
                <div className="w-full space-y-4 p-5 bg-rose-50 rounded-[24px] border-[2.5px] border-rose-400 animate-in fade-in">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-900 block">
                    🔬 Profundicemos: ¿Qué tipo de Dolor / Frustración es?
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleSubtypeChoice('obstaculo')}
                      className="p-4 bg-white rounded-[18px] border-[2px] border-slate-900 hover:bg-rose-100/50 font-black text-xs text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] cursor-pointer text-left space-y-1"
                    >
                      <span className="text-sm block">🚧 Dolor de Obstáculo</span>
                      <span className="text-[11px] font-normal text-slate-600 block leading-tight">
                        Una barrera o traba que le impide o dificulta iniciar la tarea.
                      </span>
                    </button>

                    <button
                      onClick={() => handleSubtypeChoice('riesgo')}
                      className="p-4 bg-white rounded-[18px] border-[2px] border-slate-900 hover:bg-rose-100/50 font-black text-xs text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] cursor-pointer text-left space-y-1"
                    >
                      <span className="text-sm block">⚠️ Dolor de Riesgo</span>
                      <span className="text-[11px] font-normal text-slate-600 block leading-tight">
                        El peligro de un resultado no deseado o consecuencia grave.
                      </span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-xs font-bold text-slate-500 underline cursor-pointer hover:text-slate-800"
                  >
                    ← Volver a cambiar de bolsillo
                  </button>
                </div>
              )}

              {/* FEEDBACK INMEDIATO */}
              {feedback && (
                <div className={`w-full p-5 rounded-[24px] border-[2.5px] border-slate-900 text-left animate-in zoom-in-95 duration-200 ${
                  feedback.type === 'success'
                    ? 'bg-emerald-100 text-emerald-950 shadow-[4px_4px_0px_0px_#059669]'
                    : feedback.type === 'trap'
                    ? 'bg-rose-100 text-rose-950 shadow-[4px_4px_0px_0px_#e11d48]'
                    : 'bg-amber-100 text-amber-950 shadow-[4px_4px_0px_0px_#d97706]'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-wider">
                      {feedback.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 bg-white/70 rounded-full border border-slate-900">
                      {feedback.subType}
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-sm font-medium leading-relaxed mb-4">
                    {feedback.text}
                  </p>

                  {feedback.type === 'success' || feedback.type === 'trap' ? (
                    <button
                      onClick={handleNext}
                      className="w-full py-3 px-6 rounded-full border-[2px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
                    >
                      {currentIndex + 1 >= tokens.length ? 'Ver Resultados de la Radiografía' : 'Siguiente Pensamiento'}
                    </button>
                  ) : (
                    <button
                      onClick={() => setFeedback(null)}
                      className="w-full py-3 px-6 rounded-full border-[2px] border-slate-900 bg-white text-slate-900 font-black text-xs uppercase tracking-wider hover:bg-slate-50 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
                    >
                      Intentar de Nuevo ↺
                    </button>
                  )}
                </div>
              )}

            </div>
          ) : (
            <div className="w-full bg-white p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-6">
              <NickyCharacter color={archetype.color} hat={archetype.hat} mood="excited" size={96} isJumping={true} />
              <h3 className="text-2xl font-black text-slate-900">
                ¡Radiografía Completa de {archetype.name}!
              </h3>
              <p className="text-slate-700 text-sm max-w-md mx-auto">
                Has clasificado con éxito la mente de {archetype.name}: sus <strong>Trabajos (Funcional, Social, Emocional)</strong>, <strong>Dolores (Obstáculos y Riesgos)</strong> y <strong>Deseos</strong>, esquivando las trampas de producto.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onComplete}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-full border-[2.5px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[3px_3px_0px_0px_#0f172a]"
                >
                  Continuar con el juego
                </button>
                <button
                  onClick={() => setIsTheoryModalOpen(true)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_0px_#0f172a] flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span>Ver Video: Metodología Oficial del Pilar 1</span>
                </button>
              </div>
            </div>
          )}
        </div>

      {/* MODAL: VIDEO DE METODOLOGÍA OFICIAL (SOLO TÍTULO Y VIDEO) */}
      {isTheoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[32px] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-5 sm:p-6 space-y-5 text-left my-6 max-h-[95vh] overflow-y-auto">
            
            {/* Encabezado del Modal: Solo Título */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block">
                  Metodología Oficial Strategyzer (Alexander Osterwalder & David Bland)
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Pilar 1: El Lienzo del Cliente
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                }}
                className="p-1.5 rounded-full hover:bg-slate-100 border-2 border-slate-900 text-slate-700 transition-colors cursor-pointer shrink-0"
                title="Cerrar Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reproductor Vertical de Video (YouTube Shorts) */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[24px] overflow-hidden border-[3px] border-slate-900 bg-slate-950 shadow-[6px_6px_0px_0px_#0f172a]">
                {!isVideoPlaying ? (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
                    title="Reproducir video explicativo"
                  >
                    <img
                      src="https://img.youtube.com/vi/RDiJO7afNTc/hqdefault.jpg"
                      alt="Portada Video Pilar 1"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-rose-600 border-2 border-white flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300">
                        <Play className="w-9 h-9 ml-1 fill-white" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white bg-slate-900/90 px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                        Reproducir Video
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/RDiJO7afNTc?autoplay=1&rel=0"
                    title="Video Explicativo Pilar 1: Metodología Strategyzer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            </div>

            {/* Botones al Final del Modal */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                }}
                className="w-full sm:w-auto py-2.5 px-5 rounded-full border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                ✕ Cerrar
              </button>
              <button
                onClick={() => {
                  setIsTheoryModalOpen(false);
                  setIsVideoPlaying(false);
                  onComplete();
                }}
                className="w-full sm:w-auto py-2.5 px-6 rounded-full border-2 border-slate-900 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#0f172a]"
              >
                Continuar con el juego
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
