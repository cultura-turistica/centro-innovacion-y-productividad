import React, { useState, useEffect } from 'react';
import NickyCharacter from './NickyCharacter';
import MercadoSimulador from './MercadoSimulador';
import TarjetasPricing from './TarjetasPricing';
import { JUEGO_DATA } from '@/data/cursos/propuesta-valor/juegoData';
import { BookOpen, CheckCircle2, DollarSign, Users, Award, ArrowRight, ArrowLeft, Package, Pill, Sparkles, AlertOctagon, HelpCircle, X, Check, Target, Scale, Play } from 'lucide-react';

const PILAR2_THEORY = {
  martin: {
    title: "Pilar 2: El Mapa de Valor y los 3 Encajes – Caso Martín (El Ejecutivo Urbano Agobiado)",
    summary: "Cómo diseñar una experiencia que garantice descanso y silencio absoluto, demostrando que la solución se sostiene técnica, comercial y financieramente.",
    valueMapDetails: {
      products: "Cabaña rural insonorizada con terraza privada en la niebla, vía señalizada con mapa descargable y auxilio 4x4 en el camino.",
      painsRelieved: "Reglamento estricto de silencio 24/7 que sanciona bafles y fiestas ruidosas, además de baquiano de apoyo para no atascar el carro.",
      gainsCreated: "Cesta matutina de café de origen servida en la terraza en completo silencio y vistas a la montaña."
    },
    fit1: {
      name: "1. Encaje en Papel (Problem-Solution Fit)",
      desc: "Diseñaste una propuesta donde cada aliviador responde a un dolor real de Martín: silencio estricto y acceso seguro, sin meter distracciones comerciales que él odia."
    },
    fit2: {
      name: "2. Encaje en el Mercado (Product-Market Fit)",
      desc: "Al validar la oferta con 25 ejecutivos urbanos agobiados por el ruido, 24 reservaron la experiencia pagando $160 USD por noche al verificar la política de silencio estricto."
    },
    fit3: {
      name: "3. Encaje en el Modelo de Negocio (Business Model Fit)",
      desc: "Con un cobro de $160 USD por noche y costos operativos de $72 USD (baquiano, mantenimiento, café y personal local), el margen neto es del 55% ($88 USD por noche), asegurando viabilidad económica sólida."
    }
  },
  elena: {
    title: "Pilar 2: El Mapa de Valor y los 3 Encajes – Caso Elena (Viajera Cultural e Inmersiva)",
    summary: "Cómo diseñar una inmersión auténtica que respete a las creadoras locales y comprobar los 3 niveles de encaje con viajeros conscientes.",
    valueMapDetails: {
      products: "Taller inmersivo de tejido en telar vertical y tintes naturales con maestras artesanas, recorrido botánico de fibras y hospedaje familiar en casa campesina.",
      painsRelieved: "Elimina el miedo al folclor de cartón de 10 minutos montado para turistas de masas y la intermediación comercial injusta.",
      gainsCreated: "Pieza artesanal única tejida con sus propias manos, almuerzo tradicional de fogón de leña en torno a la mesa comunitaria y certificado de origen."
    },
    fit1: {
      name: "1. Encaje en Papel (Problem-Solution Fit)",
      desc: "Tu propuesta de valor coloca el saber de la comunidad en el centro, aliviando la desconfianza de Elena hacia el turismo extractivo y satisfaciendo su deseo de aprendizaje humano genuino."
    },
    fit2: {
      name: "2. Encaje en el Mercado (Product-Market Fit)",
      desc: "23 de cada 25 viajeros culturales reservaron el taller pagando $90 USD. El 100% de los participantes calificó la experiencia como transformadora y compró piezas adicionales directamente a las artesanas."
    },
    fit3: {
      name: "3. Encaje en el Modelo de Negocio (Business Model Fit)",
      desc: "Con un cobro de $90 USD y costos de $42 USD (retribución justa a la artesana, materiales botánicos y almuerzo), el margen neto es del 53% ($48 USD), garantizando un ingreso digno y sostenible a la comunidad."
    }
  },
  familia: {
    title: "Pilar 2: El Mapa de Valor y los 3 Encajes – Caso Familia Ramírez (Turismo Familiar)",
    summary: "Cómo estructurar una propuesta multigeneracional que brinde seguridad absoluta a los padres y diversión educativa para niños y abuelos.",
    valueMapDetails: {
      products: "Paquete de fin de semana con senderos planos accesibles, granja interactiva para niños, taller de pan campesino y cabañas familiares integradas con baño privado.",
      painsRelieved: "Acaba con el pánico de accidentes en caminos resbaladizos, la falta de botiquín y las demoras de horas para servir comida a niños hambrientos.",
      gainsCreated: "Alimentar terneros y recolectar huevos al amanecer, menú infantil casero saludable y tiempo de calidad sin pantallas para toda la familia."
    },
    fit1: {
      name: "1. Encaje en Papel (Problem-Solution Fit)",
      desc: "Cada elemento de la oferta atiende el doble trabajo de los padres: entretener a los niños con seguridad total mientras los abuelos disfrutan de calma y comodidad física."
    },
    fit2: {
      name: "2. Encaje en el Mercado (Product-Market Fit)",
      desc: "24 de cada 25 familias consultadas reservaron el paquete de fin de semana ($180 USD por grupo familiar). La recomendación boca a boca entre colegios y familias superó el 80%."
    },
    fit3: {
      name: "3. Encaje en el Modelo de Negocio (Business Model Fit)",
      desc: "Con un paquete familiar de $180 USD y costos de entrega de $80 USD (guía pedagógico, alimentación para 4 personas y seguro médico), el margen neto es del 55% ($100 USD), haciendo el emprendimiento altamente rentable."
    }
  }
};

export default function Acto2DisenoEncaje({ archetype, profileData, onComplete, onBack }) {
  const [isTheoryModalOpen, setIsTheoryModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Paso activo: 1 = Encaje en Papel (Puzzle), 2 = Encaje en el Mercado (Simulación Multitud), 3 = Encaje en el Negocio (Cuentas)
  const [activeStage, setActiveStage] = useState(1);

  // --- ESTADO PASO 1: PUZZLE EN PAPEL ---
  const fitGame = profileData.fitGame;
  const availableCards = fitGame.availableCards;
  const correctCards = availableCards.filter(c => c.correctFor === archetype.id);
  const [selectedPuzzlePieces, setSelectedPuzzlePieces] = useState({});
  const [puzzleFeedback, setPuzzleFeedback] = useState(null);

  const selectedCorrectCount = Object.keys(selectedPuzzlePieces).filter(id => {
    const card = availableCards.find(c => c.id === id);
    return card && card.correctFor === archetype.id;
  }).length;
  const isPaperFitComplete = selectedCorrectCount === correctCards.length;

  const handlePieceClick = (card) => {
    if (selectedPuzzlePieces[card.id]) return;

    if (card.correctFor === archetype.id) {
      setSelectedPuzzlePieces(prev => ({ ...prev, [card.id]: true }));
      setPuzzleFeedback({
        type: 'success',
        title: "¡Pieza Conectada!",
        text: card.feedback,
        matchesWith: card.matchesWith
      });
    } else {
      setPuzzleFeedback({
        type: 'error',
        title: "Esta pieza no encaja",
        text: "Esta solución no resuelve un dolor de este perfil de viajero.",
        matchesWith: card.matchesWith
      });
    }
  };

  // --- ESTADO PASO 2: SIMULADOR DE MERCADO (CANVAS ORGÁNICO) ---
  const [marketValidatedCount, setMarketValidatedCount] = useState(0);
  const isMarketFitComplete = marketValidatedCount >= 10;

  // --- ESTADO PASO 3: TARJETAS DE PRICING (ENCAJE EN EL NEGOCIO) ---
  const [isBusinessFitSolved, setIsBusinessFitSolved] = useState(false);

  // --- DATOS PASO 3: EL NEGOCIO (FINANZAS DE 10 CLIENTES) ---
  const businessMetrics = {
    martin: {
      pricePerClient: 160,
      costPerClient: 72,
      serviceName: "Noche de Cabaña Rural con Silencio 24/7 y Auxilio 4x4",
      costBreakdown: "Baquiano de apoyo, mantenimiento acústico, cesta de café y personal local",
      marginPercent: 55
    },
    elena: {
      pricePerClient: 90,
      costPerClient: 42,
      serviceName: "Taller Inmersivo de Telar Vertical y Tintes Botánicos",
      costBreakdown: "Retribución justa directa a la artesana, madejas naturales y almuerzo campesino",
      marginPercent: 53
    },
    familia: {
      pricePerClient: 180,
      costPerClient: 80,
      serviceName: "Paquete Fin de Semana Naturaleza Segura y Granja",
      costBreakdown: "Guía pedagógico infantil, seguro médico, menú saludable y huerta",
      marginPercent: 55
    }
  }[archetype.id] || {
    pricePerClient: 100,
    costPerClient: 45,
    serviceName: "Experiencia Turística Local",
    costBreakdown: "Costos operativos y personal",
    marginPercent: 55
  };

  const totalClients = 10;
  const totalIncome = totalClients * businessMetrics.pricePerClient;
  const totalCosts = totalClients * businessMetrics.costPerClient;
  const totalProfit = totalIncome - totalCosts;

  const theory = PILAR2_THEORY[archetype.id] || PILAR2_THEORY.martin;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-5 text-center animate-in fade-in duration-500">
      
      {/* Cabecera Principal */}
      <div className="space-y-3 w-full">
        <div className="flex items-center justify-between w-full">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al Pilar 1
            </button>
          ) : <div />}
          <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-pink-200 text-slate-900 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
            Pilar 2: Diseñar la Oferta y los 3 Encajes
          </span>
          <div className="w-28 hidden sm:block" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          La Tríada del Encaje: Papel, Mercado y Negocio
        </h2>
        <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto">
          Para que una propuesta de valor triunfe según Osterwalder, debe superar 3 pruebas: <strong>encajar en papel</strong>, <strong>validarse en el mercado</strong> y <strong>dejar ganancia en el negocio</strong>.
        </p>
      </div>

      {/* Selector de los 3 Pasos del Encaje */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
        <button
          onClick={() => setActiveStage(1)}
          className={`px-4 py-2 rounded-full border-[2.5px] border-slate-900 font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
            activeStage === 1
              ? 'bg-indigo-600 text-white shadow-[3px_3px_0px_0px_#0f172a]'
              : isPaperFitComplete
              ? 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200'
              : 'bg-white text-slate-700 hover:bg-slate-50'
          }`}
        >
          🧩 Paso 1: Encaje en Papel {isPaperFitComplete && '✓'}
        </button>

        <button
          onClick={() => isPaperFitComplete && setActiveStage(2)}
          disabled={!isPaperFitComplete}
          className={`px-4 py-2 rounded-full border-[2.5px] border-slate-900 font-black text-xs uppercase tracking-wider transition-all ${
            activeStage === 2
              ? 'bg-indigo-600 text-white shadow-[3px_3px_0px_0px_#0f172a]'
              : isMarketFitComplete
              ? 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200 cursor-pointer'
              : isPaperFitComplete
              ? 'bg-white text-slate-700 hover:bg-slate-50 cursor-pointer'
              : 'bg-slate-100 text-slate-400 border-slate-300 opacity-60 cursor-not-allowed'
          }`}
        >
          ⚪🔵 Paso 2: Encaje en el Mercado {isMarketFitComplete && '✓'}
        </button>

        <button
          onClick={() => isMarketFitComplete && setActiveStage(3)}
          disabled={!isMarketFitComplete}
          className={`px-4 py-2 rounded-full border-[2.5px] border-slate-900 font-black text-xs uppercase tracking-wider transition-all ${
            activeStage === 3
              ? 'bg-indigo-600 text-white shadow-[3px_3px_0px_0px_#0f172a]'
              : isMarketFitComplete
              ? 'bg-white text-slate-700 hover:bg-slate-50 cursor-pointer'
              : 'bg-slate-100 text-slate-400 border-slate-300 opacity-60 cursor-not-allowed'
          }`}
        >
          ⚖️ Paso 3: Encaje en el Negocio
        </button>
      </div>

      {/* CONTENEDOR CENTRAL DEL JUEGO */}
      <div className="w-full bg-white p-6 md:p-8 rounded-[36px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-6">

        {/* ============================================================== */}
        {/* PASO 1: ENCAJE EN PAPEL (PUZZLE DE PIEZAS QUE CONECTAN)        */}
        {/* ============================================================== */}
        {activeStage === 1 && (
          <div className="space-y-6 text-left animate-in fade-in">
            {/* Cabecera del Puzzle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <NickyCharacter color={archetype.color} hat={archetype.hat} mood={isPaperFitComplete ? "excited" : "happy"} size={52} isJumping={isPaperFitComplete} />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    Rompecabezas de Solución para:
                  </span>
                  <h3 className="text-lg font-black text-slate-900">
                    {archetype.name} ({archetype.tagline})
                  </h3>
                </div>
              </div>

              <div className="bg-slate-100 px-4 py-2 rounded-full border border-slate-300 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">Progreso del Puzzle:</span>
                <span className="font-mono font-black text-sm text-indigo-600">{selectedCorrectCount} / {correctCards.length} piezas</span>
              </div>
            </div>

            {/* Las 3 Ranuras del Rompecabezas */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                Ranuras de Valor a Conectar:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {correctCards.map((piece, idx) => {
                  const isFilled = selectedPuzzlePieces[piece.id];
                  return (
                    <div
                      key={piece.id}
                      className={`p-4 rounded-[22px] border-[2.5px] transition-all flex flex-col justify-between min-h-[120px] ${
                        isFilled
                          ? 'bg-emerald-50 border-emerald-600 shadow-[3px_3px_0px_0px_#059669]'
                          : 'bg-slate-50 border-dashed border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-slate-500">
                          Pieza {idx + 1}
                        </span>
                        {isFilled ? (
                          <span className="p-1 bg-emerald-600 text-white rounded-full">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">Vacío</span>
                        )}
                      </div>

                      {isFilled ? (
                        <div className="space-y-1">
                          <span className="text-xs font-black text-emerald-950 block leading-tight">
                            {piece.name}
                          </span>
                          <span className="text-[10px] text-emerald-700 block">
                            ✓ {piece.category}
                          </span>
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-400 italic">
                          Requiere solución para: “{piece.matchesWith}”
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bandeja de Piezas Disponibles */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                Toca las piezas que resuelven los dolores de {archetype.name}:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {availableCards.map((card) => {
                  const isSelected = selectedPuzzlePieces[card.id];
                  const isCorrectPiece = card.correctFor === archetype.id;

                  return (
                    <button
                      key={card.id}
                      disabled={isSelected}
                      onClick={() => handlePieceClick(card)}
                      className={`p-3.5 rounded-[18px] border-[2px] transition-all text-left flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-100/50 border-emerald-400 opacity-60 cursor-not-allowed'
                          : 'bg-white hover:bg-slate-50 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] hover:translate-y-0.5'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 block mb-1">
                        {card.name}
                      </span>
                      <span className="text-[10px] font-black uppercase text-slate-500">
                        {card.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback de la Pieza */}
            {puzzleFeedback && (
              <div className={`p-4 rounded-[20px] border-[2px] border-slate-900 text-xs font-bold ${
                puzzleFeedback.type === 'success' ? 'bg-emerald-100 text-emerald-950' : 'bg-rose-100 text-rose-950'
              }`}>
                {puzzleFeedback.type === 'success' ? '✅ ' : '❌ '} {puzzleFeedback.title} — {puzzleFeedback.text}
              </div>
            )}

            {/* Éxito de Encaje en Papel */}
            {isPaperFitComplete && (
              <div className="p-5 bg-indigo-50 rounded-[26px] border-[2.5px] border-indigo-400 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
                <div>
                  <h4 className="text-sm font-black text-indigo-950">
                    🎉 ¡Encaje en Papel Demostrado!
                  </h4>
                  <p className="text-xs text-indigo-800">
                    Sobre el papel, tu oferta encaja exactamente con lo que {archetype.name} necesita. Ahora salgamos a la multitud para comprobar si hay clientes en el mercado.
                  </p>
                </div>
                <button
                  onClick={() => setActiveStage(2)}
                  className="w-full sm:w-auto py-3 px-6 rounded-full border-[2px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] whitespace-nowrap"
                >
                  Pasar al Paso 2: El Mercado
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* PASO 2: ENCAJE EN EL MERCADO (SIMULADOR DE MULTITUD ORGÁNICA)  */}
        {/* ============================================================== */}
        {activeStage === 2 && (
          <div className="space-y-6 text-left animate-in fade-in">
            <MercadoSimulador
              archetype={archetype}
              onTargetValidated={(cnt) => setMarketValidatedCount(cnt)}
              isValidated={isMarketFitComplete}
            />

            {/* Éxito de Encaje en Mercado */}
            {isMarketFitComplete && (
              <div className="p-5 bg-emerald-50 rounded-[26px] border-[2.5px] border-emerald-500 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
                <div>
                  <h4 className="text-sm font-black text-emerald-950">
                    🌟 ¡Encaje en el Mercado Conseguido (Product-Market Fit)!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Has validado y atraído a 10 clientes reales que necesitan tu propuesta en medio del mercado masivo. Ahora revisemos si las cuentas del negocio son sostenibles.
                  </p>
                </div>
                <button
                  onClick={() => setActiveStage(3)}
                  className="w-full sm:w-auto py-3 px-6 rounded-full border-[2px] border-slate-900 bg-slate-900 text-white font-black text-xs uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] whitespace-nowrap"
                >
                  Pasar al Paso 3: El Negocio
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* PASO 3: ENCAJE EN EL NEGOCIO (TARJETAS INTERACTIVAS DE PRICING) */}
        {/* ============================================================== */}
        {activeStage === 3 && (
          <div className="space-y-6 text-left animate-in fade-in">
            <TarjetasPricing
              archetype={archetype}
              onPricingSolved={() => setIsBusinessFitSolved(true)}
              isSolved={isBusinessFitSolved}
            />

            {/* Acciones Finales del Pilar 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={onComplete}
                disabled={!isBusinessFitSolved}
                className={`w-full sm:w-auto py-3.5 px-8 rounded-full border-[2.5px] border-slate-900 font-black text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0px_0px_#0f172a] ${
                  isBusinessFitSolved
                    ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer'
                    : 'bg-slate-100 text-slate-400 border-slate-300 opacity-60 cursor-not-allowed shadow-none'
                }`}
              >
                {isBusinessFitSolved ? "Avanzar al Pilar 3: Probar sin Quebrar" : "Encuentra el precio de valor para avanzar 🔒"}
              </button>
              <button
                onClick={() => setIsTheoryModalOpen(true)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-full border-[2.5px] border-slate-900 bg-amber-100 hover:bg-amber-200 text-slate-900 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[3px_3px_0px_0px_#0f172a] flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>Ver Video: Metodología Oficial del Pilar 2</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* MODAL TEÓRICO DEL PILAR 2 (SOLO TÍTULO Y VIDEO) */}
      {isTheoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[32px] border-[3px] border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-5 sm:p-6 space-y-5 text-left my-6 max-h-[95vh] overflow-y-auto">
            
            {/* Encabezado del Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-700 tracking-wider block">
                  Metodología Oficial Strategyzer (Alexander Osterwalder & David Bland)
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  Pilar 2: Diseñar la Oferta y los 3 Encajes
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

            {/* Reproductor Vertical de Video (YouTube Shorts: Cdok6lb5O_0) */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[24px] overflow-hidden border-[3px] border-slate-900 bg-slate-950 shadow-[6px_6px_0px_0px_#0f172a]">
                {!isVideoPlaying ? (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
                    title="Reproducir video explicativo del Pilar 2"
                  >
                    <img
                      src="https://img.youtube.com/vi/Cdok6lb5O_0/hqdefault.jpg"
                      alt="Portada Video Pilar 2"
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
                    src="https://www.youtube.com/embed/Cdok6lb5O_0?autoplay=1&rel=0"
                    title="Video Explicativo Pilar 2: Los 3 Encajes de Osterwalder"
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
                Continuar al Pilar 3
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
