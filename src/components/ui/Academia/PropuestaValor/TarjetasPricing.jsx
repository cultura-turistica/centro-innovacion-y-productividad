"use client";

import React, { useState } from 'react';
import { 
  Skull, 
  AlertTriangle, 
  UserX, 
  Trophy, 
  Check, 
  ArrowRight, 
  Coins, 
  TrendingDown, 
  TrendingUp, 
  Sparkles,
  DollarSign
} from 'lucide-react';

const PRICING_DATA = {
  martin: {
    archetypeName: "Martín (El Ejecutivo Urbano)",
    baseCost: 72,
    costDetails: "Baquiano de apoyo, mantenimiento acústico, cesta de café y personal local",
    unitTarget: "noche de cabaña privada con silencio 24/7",
    cards: [
      {
        id: "underpriced",
        price: 50,
        label: "Cobrar $50 USD",
        subtitle: "El Miedo a Cobrar (Regalar el Trabajo)",
        statusType: "quiebra",
        statusTitle: "¡Quiebra Inmediata y Autoexplotación!",
        badgeBg: "bg-rose-100 text-rose-950 border-rose-900",
        icon: Skull,
        iconBg: "bg-rose-600 text-white",
        balancePerUnit: "-$22 USD",
        feedback: "Vendes como pan caliente y tienes lista de espera... pero tus costos y gastos mínimos son de $72 USD. Por cada noche que hospedas a Martín, estás perdiendo -$22 USD de tu bolsillo. Básicamente estás subsidiando las vacaciones de Martín con tus propios ahorros. Tu propuesta es atractiva, pero tu negocio morirá en 3 meses.",
        lesson: "Cobrar por debajo de tus costos no es ser generoso: es garantizar la muerte de tu emprendimiento.",
        isCorrect: false
      },
      {
        id: "barely",
        price: 90,
        label: "Cobrar $90 USD",
        subtitle: "La Trampa del Margen de Miseria",
        statusType: "alerta",
        statusTitle: "Autoempleo Precario (Al Borde del Abismo)",
        badgeBg: "bg-amber-100 text-amber-950 border-amber-900",
        icon: AlertTriangle,
        iconBg: "bg-amber-500 text-slate-950",
        balancePerUnit: "+$18 USD (20% margen)",
        feedback: "Tus costos son $72 USD y cobras $90 USD. Te quedan apenas $18 USD de ganancia por noche (un margen de solo el 20%). Al primer imprevisto —se pinchó una llanta del carro de auxilio, llovió y se dañó la vía, o bajó la temporada— caes en números rojos. Trabajas 16 horas diarias sin sueldo digno ni dinero para reinvertir.",
        lesson: "Un margen diminuto te condena al autoempleo esclavo sin colchón de seguridad para imprevistos.",
        isCorrect: false
      },
      {
        id: "perfect",
        price: 160,
        label: "Cobrar $160 USD",
        subtitle: "¡El Encaje en el Negocio Perfecto!",
        statusType: "exito",
        statusTitle: "¡Business Model Fit Demostrado!",
        badgeBg: "bg-emerald-100 text-emerald-950 border-emerald-900",
        icon: Trophy,
        iconBg: "bg-emerald-600 text-white",
        balancePerUnit: "+$88 USD limpios (55% margen)",
        feedback: "¡Diste en el blanco! Martín paga $160 USD con total gusto porque una noche de sueño profundo y descanso absoluto vale cada centavo para aliviar su estrés de 60h semanales. Cubres dignamente los costos del territorio ($72 USD para el baquiano y el café) y a ti te queda una utilidad neta limpia de $88 USD (55% de margen) para vivir bien, mantener la cabaña y hacer crecer tu proyecto.",
        lesson: "El cliente siente que pagó un precio justo por un gran alivio, la comunidad gana con dignidad y tu negocio genera ganancia limpia.",
        isCorrect: true
      },
      {
        id: "overpriced",
        price: 320,
        label: "Cobrar $320 USD",
        subtitle: "Precio Inflado / Fuera de Mercado",
        statusType: "rechazo",
        statusTitle: "Desconectado del Cliente (Ventas Cero)",
        badgeBg: "bg-purple-100 text-purple-950 border-purple-900",
        icon: UserX,
        iconBg: "bg-purple-600 text-white",
        balancePerUnit: "0 ventas (9 cancelaciones)",
        feedback: "Para Martín el silencio vale mucho, pero $320 USD supera el presupuesto de una escapada de fin de semana. Por ese valor prefiere irse a un hotel 5 estrellas en Villa de Leyva. De los 10 clientes que validaste en el mercado, 9 cancelaron su reserva. Tu precio está inflado y no refleja el valor real del alivio que ofreces.",
        lesson: "Un precio excesivo que supera el presupuesto del cliente espanta la demanda y deja tu capacidad vacía.",
        isCorrect: false
      }
    ]
  },
  elena: {
    archetypeName: "Elena (La Viajera Cultural)",
    baseCost: 42,
    costDetails: "Retribución justa directa a la maestra artesana, madejas de lana natural y almuerzo campesino",
    unitTarget: "taller inmersivo de telar vertical y tintes naturales",
    cards: [
      {
        id: "underpriced",
        price: 25,
        label: "Cobrar $25 USD",
        subtitle: "Regalar el Saber Ancestral",
        statusType: "quiebra",
        statusTitle: "¡Quiebra y Explotación Inaceptable!",
        badgeBg: "bg-rose-100 text-rose-950 border-rose-900",
        icon: Skull,
        iconBg: "bg-rose-600 text-white",
        balancePerUnit: "-$17 USD",
        feedback: "Tus costos mínimos son $42 USD para materiales, almuerzo y retribución digna. Cobrar $25 USD significa que le estás pagando una miseria a la maestra artesana o estás perdiendo -$17 USD por cada viajera. El turismo comunitario no puede construirse sobre la base de explotar el patrimonio cultural.",
        lesson: "Regalar el trabajo artesanal empobrece a las comunidades en lugar de empoderarlas.",
        isCorrect: false
      },
      {
        id: "barely",
        price: 50,
        label: "Cobrar $50 USD",
        subtitle: "La Trampa del Margen Asfixiante",
        statusType: "alerta",
        statusTitle: "Voluntariado Agotador (Margen Frágil)",
        badgeBg: "bg-amber-100 text-amber-950 border-amber-900",
        icon: AlertTriangle,
        iconBg: "bg-amber-500 text-slate-950",
        balancePerUnit: "+$8 USD (16% margen)",
        feedback: "Cobras $50 USD y tus costos son $42 USD. Te quedan apenas $8 USD por participante (un margen del 16%). No alcanza para comprar madera para telares nuevos, ni para reparar goteras del taller ni para emergencias de la comunidad. Es un voluntariado agotador que no sobrevive a largo plazo.",
        lesson: "Sin margen suficiente para reinvertir, los proyectos comunitarios se desgastan y desaparecen.",
        isCorrect: false
      },
      {
        id: "perfect",
        price: 90,
        label: "Cobrar $90 USD",
        subtitle: "¡El Encaje en el Negocio Perfecto!",
        statusType: "exito",
        statusTitle: "¡Comercio Justo y Rentabilidad Real!",
        badgeBg: "bg-emerald-100 text-emerald-950 border-emerald-900",
        icon: Trophy,
        iconBg: "bg-emerald-600 text-white",
        balancePerUnit: "+$48 USD limpios (53% margen)",
        feedback: "¡Calce exacto! Elena paga $90 USD con felicidad sabiendo que la maestra artesana recibe una retribución digna y que se lleva una pieza tejida por ella misma. Cubres $42 USD de costos directos y a la asociación le quedan $48 USD netos (53% de margen) para reinvertir en la escuela de telar de la vereda.",
        lesson: "Comercio justo real: la comunidad recibe pago digno, la viajera recibe valor transformador y el colectivo genera excedentes.",
        isCorrect: true
      },
      {
        id: "overpriced",
        price: 220,
        label: "Cobrar $220 USD",
        subtitle: "Precio Especulativo / Excesivo",
        statusType: "rechazo",
        statusTitle: "Desconfianza y Cancelación Total",
        badgeBg: "bg-purple-100 text-purple-950 border-purple-900",
        icon: UserX,
        iconBg: "bg-purple-600 text-white",
        balancePerUnit: "0 ventas (desconfianza)",
        feedback: "Elena busca un encuentro humano y comunitario honesto. Al ver una tarifa de $220 USD por un taller de 1 día, desconfía de inmediato y piensa que eres un intermediario abusivo que lucra a espaldas de la comunidad. 9 de cada 10 viajeras conscientes cancelan su viaje.",
        lesson: "Los viajeros conscientes rechazan los sobreprecios que huelen a especulación o intermediación abusiva.",
        isCorrect: false
      }
    ]
  },
  familia: {
    archetypeName: "Familia Ramírez (Padres con Niños)",
    baseCost: 80,
    costDetails: "Guía pedagógico infantil, seguro médico familiar, menú infantil saludable y huerta",
    unitTarget: "paquete familiar de fin de semana con naturaleza segura y granja",
    cards: [
      {
        id: "underpriced",
        price: 70,
        label: "Cobrar $70 USD",
        subtitle: "Cobro por Debajo de Costos",
        statusType: "quiebra",
        statusTitle: "¡Quiebra y Riesgo de Seguridad!",
        badgeBg: "bg-rose-100 text-rose-950 border-rose-900",
        icon: Skull,
        iconBg: "bg-rose-600 text-white",
        balancePerUnit: "-$10 USD",
        feedback: "Tus costos mínimos son $80 USD para garantizar botiquín, seguro médico y comida casera higiénica. Cobrar $70 USD por grupo familiar significa que pierdes -$10 USD por visita. Para no quebrar tendrías que recortar el seguro médico o la comida sana, destruyendo exactamente lo que los padres buscaban: seguridad total.",
        lesson: "Bajar precios recortando la seguridad de los niños destruye la promesa central de tu propuesta.",
        isCorrect: false
      },
      {
        id: "barely",
        price: 110,
        label: "Cobrar $110 USD",
        subtitle: "La Trampa del Margen Asfixiante",
        statusType: "alerta",
        statusTitle: "Fragilidad Operativa Permanente",
        badgeBg: "bg-amber-100 text-amber-950 border-amber-900",
        icon: AlertTriangle,
        iconBg: "bg-amber-500 text-slate-950",
        balancePerUnit: "+$30 USD (27% margen)",
        feedback: "Cobras $110 USD y tus costos son $80 USD. Te quedan apenas $30 USD por grupo familiar (27% de margen). Al primer retraso de proveedores, reparación de corrales o temporada baja, quedas endeudado. No te queda capital de reserva para imprevistos.",
        lesson: "Un margen bajo en turismo familiar no te permite absorber el desgaste de infraestructura ni contingencias médicas.",
        isCorrect: false
      },
      {
        id: "perfect",
        price: 180,
        label: "Cobrar $180 USD",
        subtitle: "¡El Encaje en el Negocio Perfecto!",
        statusType: "exito",
        statusTitle: "¡Accesibilidad y Rentabilidad Familiar!",
        badgeBg: "bg-emerald-100 text-emerald-950 border-emerald-900",
        icon: Trophy,
        iconBg: "bg-emerald-600 text-white",
        balancePerUnit: "+$100 USD limpios (55% margen)",
        feedback: "¡Precio de oro! Los padres perciben $180 USD como una inversión inteligente en la tranquilidad de sus hijos y la alegría de los abuelos. Cubres $80 USD de guías pedagógicos, alimentación y seguros, y a tu emprendimiento le quedan $100 USD limpios (55% de margen) por familia para reinvertir en la granja y crecer.",
        lesson: "La familia siente alivio y seguridad total, y tu negocio obtiene la rentabilidad necesaria para sostenerse en el tiempo.",
        isCorrect: true
      },
      {
        id: "overpriced",
        price: 400,
        label: "Cobrar $400 USD",
        subtitle: "Fuera del Presupuesto Familiar",
        statusType: "rechazo",
        statusTitle: "Barrera Infranqueable de Compra",
        badgeBg: "bg-purple-100 text-purple-950 border-purple-900",
        icon: UserX,
        iconBg: "bg-purple-600 text-white",
        balancePerUnit: "0 ventas (fuera de alcance)",
        feedback: "Una familia de clase media tiene un presupuesto planificado. A $400 USD el fin de semana, el padre de familia prefiere quedarse en casa o ir a un club social conocido. 9 de cada 10 familias cancelan su reserva porque el precio supera con creces su capacidad de gasto.",
        lesson: "El precio debe calzar con el bolsillo real de los padres de familia, no con una fantasía inalcanzable.",
        isCorrect: false
      }
    ]
  }
};

export default function TarjetasPricing({ archetype, onPricingSolved, isSolved = false }) {
  const currentData = PRICING_DATA[archetype.id] || PRICING_DATA.martin;
  const [selectedCardId, setSelectedCardId] = useState(isSolved ? "perfect" : null);
  const [revealedCardIds, setRevealedCardIds] = useState(
    () => new Set(isSolved ? ["perfect"] : [])
  );

  // Sincronizar estado cuando cambia el arquetipo o se resuelve externamente
  React.useEffect(() => {
    if (isSolved) {
      setSelectedCardId("perfect");
      setRevealedCardIds(new Set(["perfect"]));
    } else {
      setSelectedCardId(null);
      setRevealedCardIds(new Set());
    }
  }, [archetype.id, isSolved]);

  const selectedCard = currentData.cards.find(c => c.id === selectedCardId);
  const isPerfectSelected = selectedCard && selectedCard.isCorrect;

  const handleCardClick = (card) => {
    setSelectedCardId(card.id);
    setRevealedCardIds(prev => new Set([...prev, card.id]));
    if (card.isCorrect && onPricingSolved) {
      onPricingSolved(card);
    }
  };

  const totalClients = 10;
  const totalIncome = totalClients * (currentData.cards.find(c => c.isCorrect)?.price || 160);
  const totalCosts = totalClients * currentData.baseCost;
  const totalProfit = totalIncome - totalCosts;

  return (
    <div className="w-full space-y-6 text-left animate-in fade-in">
      
      {/* Encabezado Pedagógico del Dilema de Precios */}
      <div className="p-4 sm:p-5 bg-amber-50/90 rounded-[26px] border-[2.5px] border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] space-y-2">
        <div className="flex items-center gap-2">
          <Coins className="w-4 h-4 text-amber-700 shrink-0" />
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
            Paso 3: El Dilema de Precios y Supervivencia del Negocio
          </h3>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
          Ahora cámbiate de bando: <strong>ya no eres el cliente, eres el anfitrión y emprendedor</strong>. Tus costos reales mínimos para entregar esta experiencia son de <strong>${currentData.baseCost} USD</strong> por {currentData.unitTarget} ({currentData.costDetails}).
        </p>
        <p className="text-xs sm:text-[13px] text-slate-900 font-black">
          ¿A qué precio crees que deberías cobrar tu propuesta de valor para que el negocio sobreviva y prospere? Toca las tarjetas para poner a prueba tu intuición:
        </p>
      </div>

      {/* Grid de las 4 Tarjetas de Dinero */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {currentData.cards.map((card, index) => {
          const isSelected = selectedCardId === card.id;
          const isRevealed = revealedCardIds.has(card.id) || isSelected;
          const CardIcon = card.icon;
          const optionLetter = String.fromCharCode(65 + index); // A, B, C, D

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`p-4 sm:p-5 rounded-[24px] border-[2.5px] transition-all flex flex-col justify-between text-left cursor-pointer min-h-[175px] ${
                isSelected
                  ? 'border-slate-900 bg-white ring-4 ring-indigo-500/30 shadow-[4px_4px_0px_0px_#0f172a] -translate-y-1'
                  : isRevealed
                  ? 'border-slate-900 bg-white hover:bg-slate-50 shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5'
                  : 'border-slate-900 bg-white hover:bg-amber-50/40 shadow-[3px_3px_0px_0px_#0f172a] hover:-translate-y-0.5'
              }`}
            >
              <div className="space-y-2.5 w-full">
                {/* Cabecera de la Tarjeta: NEUTRA si no se ha volteado, Revelada tras tocarla */}
                <div className="flex items-center justify-between">
                  {isRevealed ? (
                    <span className={`p-2 rounded-xl border border-slate-900 ${card.iconBg} transition-transform duration-200 scale-100`}>
                      <CardIcon className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  ) : (
                    <span className="p-2 rounded-xl border border-slate-300 bg-slate-100 text-slate-700">
                      <DollarSign className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  )}

                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isRevealed
                      ? card.badgeBg
                      : 'bg-slate-100 border-slate-300 text-slate-700'
                  }`}>
                    {isRevealed
                      ? card.statusType === 'quiebra'
                        ? '💀 Quiebra'
                        : card.statusType === 'alerta'
                        ? '⚠️ Margen Frágil'
                        : card.statusType === 'rechazo'
                        ? '🚫 Sin Ventas'
                        : '🏆 Ganador'
                      : `Tarifa ${optionLetter}`}
                  </span>
                </div>

                {/* Precio y Subtítulo: Sin spoilers antes de voltear */}
                <div>
                  <span className="text-2xl font-black font-mono text-slate-900 block leading-none">
                    ${card.price} USD
                  </span>
                  <span className="text-[11px] font-bold block mt-1.5 min-h-[32px] leading-snug">
                    {isRevealed ? (
                      <span className={isSelected ? 'text-slate-900' : 'text-slate-600'}>
                        {card.subtitle}
                      </span>
                    ) : (
                      <span className="text-slate-400 italic">
                        “¿Cubre costos y deja margen?”
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Pie de Acción */}
              <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between text-[11px] font-black">
                {isSelected ? (
                  <span className="text-indigo-600 flex items-center gap-1">
                    Inspeccionando ✓
                  </span>
                ) : isRevealed ? (
                  <span className="text-slate-600 flex items-center gap-1">
                    Ver resultado 🔍
                  </span>
                ) : (
                  <span className="text-indigo-600 flex items-center gap-1">
                    Tocar para voltear 🔄
                  </span>
                )}
                {card.isCorrect && isRevealed && (
                  <span className="text-emerald-600 font-black">★ Encaje</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Panel de Revelación y Retroalimentación de la Tarjeta Seleccionada */}
      {selectedCard && (
        <div 
          className={`p-5 sm:p-6 rounded-[28px] border-[3px] border-slate-900 text-left space-y-4 animate-in fade-in transition-all ${
            selectedCard.statusType === 'quiebra'
              ? 'bg-rose-50 shadow-[5px_5px_0px_0px_#e11d48]'
              : selectedCard.statusType === 'alerta'
              ? 'bg-amber-50 shadow-[5px_5px_0px_0px_#d97706]'
              : selectedCard.statusType === 'rechazo'
              ? 'bg-purple-50 shadow-[5px_5px_0px_0px_#9333ea]'
              : 'bg-emerald-50 shadow-[5px_5px_0px_0px_#059669]'
          }`}
        >
          {/* Cabecera del Diagnóstico con Icono Ilustrativo */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-900/15 pb-3">
            <div className="flex items-center gap-3">
              <span className={`p-2.5 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] ${selectedCard.iconBg}`}>
                {React.createElement(selectedCard.icon, { className: "w-5 h-5 stroke-[2.5]" })}
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  Diagnóstico al cobrar ${selectedCard.price} USD:
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900">
                  {selectedCard.statusTitle}
                </h4>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-white border-2 border-slate-900 font-mono text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] self-start sm:self-auto">
              Margen Unitario: {selectedCard.balancePerUnit}
            </div>
          </div>

          {/* Explicación de la Realidad del Negocio */}
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {selectedCard.feedback}
          </p>

          {/* Lección de Oro de Alexander Osterwalder */}
          <div className="p-3.5 bg-white/80 rounded-2xl border-2 border-slate-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-900 font-bold leading-normal">
              💡 <em>Lección clave:</em> {selectedCard.lesson}
            </p>
          </div>
        </div>
      )}

      {/* Si acertó la tarjeta correcta: Visualización Consolidada del Modelo de Negocio (10 Clientes) */}
      {isPerfectSelected && (
        <div className="p-6 bg-white rounded-[30px] border-[3px] border-slate-900 shadow-[6px_6px_0px_0px_#0f172a] space-y-5 animate-in fade-in">
          <div className="border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                🎉 El Cierre Financiero Oficial (10 Clientes Validados)
              </h4>
            </div>
            <p className="text-xs text-slate-600">
              Con el precio calibrado a <strong>${selectedCard.price} USD</strong>, revisamos cómo las 10 personas captadas en el mercado sostienen tu empresa con números limpios:
            </p>
          </div>

          {/* Las 3 Cuentas Claras */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 rounded-[22px] border-[2px] border-slate-900 space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-500 block">
                💵 Ingresos Totales (10 Clientes)
              </span>
              <span className="text-2xl font-black font-mono text-slate-900 block">
                ${totalIncome.toLocaleString()} USD
              </span>
              <span className="text-[11px] text-slate-600 block">
                10 clientes × ${selectedCard.price} USD
              </span>
            </div>

            <div className="p-4 bg-rose-50 rounded-[22px] border-[2px] border-rose-300 space-y-1">
              <span className="text-[10px] font-black uppercase text-rose-700 block">
                🛠️ Costos Directos del Territorio
              </span>
              <span className="text-2xl font-black font-mono text-rose-800 block">
                -${totalCosts.toLocaleString()} USD
              </span>
              <span className="text-[11px] text-rose-700 block">
                {currentData.costDetails}
              </span>
            </div>

            <div className="p-4 bg-emerald-50 rounded-[22px] border-[2px] border-emerald-500 space-y-1 shadow-[3px_3px_0px_0px_#059669]">
              <span className="text-[10px] font-black uppercase text-emerald-800 block">
                💰 Utilidad Neta Sostenible
              </span>
              <span className="text-2xl font-black font-mono text-emerald-700 block">
                +${totalProfit.toLocaleString()} USD
              </span>
              <span className="text-[11px] font-bold text-emerald-900 block">
                55% de margen neto para reinvertir
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
