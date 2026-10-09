"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  ShoppingBag, 
  Coffee, 
  GraduationCap, 
  Gamepad2, 
  Compass,
  Lightbulb,
  ChevronRight,
  TrendingDown,
  DollarSign
} from 'lucide-react';

const REAL_WORLD_EXAMPLES = [
  {
    id: "palmpilot",
    sector: "Tecnología & Hardware",
    title: "El Trozo de Madera de PalmPilot",
    icon: Smartphone,
    iconBg: "bg-blue-100 text-blue-900 border-blue-400",
    costEstimate: "$0 USD (Costo Cero)",
    howItWorks: "Antes de programar software o fabricar pantallas, Jeff Hawkins cortó un bloque de madera del tamaño de su bolsillo y usó un palito como lápiz. Lo cargó durante semanas en reuniones para ver si realmente sentía la necesidad de sacarlo e interactuar.",
    lesson: "Probó la ergonomía, el hábito y la necesidad real antes de invertir millones en ingeniería."
  },
  {
    id: "vending",
    sector: "Comercio & Retail",
    title: "La Máquina de Dulces con Papelitos",
    icon: ShoppingBag,
    iconBg: "bg-amber-100 text-amber-900 border-amber-400",
    costEstimate: "Unos pocos dólares en notas adhesivas",
    howItWorks: "Para averiguar qué dulces se venderían en una máquina dispensadora, no compraron inventario masivo. Pegaron papelitos en los botones con los nombres de productos. Cuando un cliente oprimía uno, los dueños iban a la tienda de la esquina, compraban ese dulce y lo entregaban a mano.",
    lesson: "Mago de Oz: simula el servicio manualmente detrás de escena para ver qué compra la gente de verdad."
  },
  {
    id: "beverage",
    sector: "Alimentos & Bebidas",
    title: "La Prueba en Vaso en la Calle",
    icon: Coffee,
    iconBg: "bg-rose-100 text-rose-900 border-rose-400",
    costEstimate: "Una jarra y vasitos desechables",
    howItWorks: "Cuando una marca crea una nueva bebida o café, no monta una embotelladora industrial de inmediato. Se ubican en puntos estratégicos y dan muestras gratis en vasitos pequeños para observar en vivo la cara del cliente, el gesto espontáneo y si pide repetir.",
    lesson: "Un sorbo gratis te da información inmediata y honesta sobre el gusto antes de pagar permisos y empaques masivos."
  },
  {
    id: "seminar",
    sector: "Educación & Eventos",
    title: "Vender la Fecha Antes de Crear el Curso",
    icon: GraduationCap,
    iconBg: "bg-indigo-100 text-indigo-900 border-indigo-400",
    costEstimate: "Un formulario y una publicación en redes",
    howItWorks: "En lugar de pasar 3 meses grabando videos y diseñando 60 diapositivas que nadie verá, abren una fecha de lanzamiento con cupos para comprar la entrada. Si 20 personas pagan, el seminario se dicta y se produce; si nadie compra, se cambia el tema sin perder tiempo ni plata.",
    lesson: "La demanda confirmada manda: crea el contenido solo cuando ya tienes alumnos inscritos."
  },
  {
    id: "games",
    sector: "Videojuegos & Automóviles",
    title: "La Preventa que Financia la Creación",
    icon: Gamepad2,
    iconBg: "bg-purple-100 text-purple-900 border-purple-400",
    costEstimate: "Un tráiler conceptual o boceto 3D",
    howItWorks: "Muestran un avance de lo que será el juego o el vehículo y abren reservas con un anticipo reembolsable. Miles de personas pagan por adelantado, lo que no solo valida si el producto despierta deseo, sino que les permite apalancarse con el dinero de los mismos clientes.",
    lesson: "El mercado paga por adelantado el desarrollo cuando la promesa de valor es irresistible."
  },
  {
    id: "tourism",
    sector: "Turismo & Experiencias",
    title: "El Servicio Conserje en Alojamiento Rural",
    icon: Compass,
    iconBg: "bg-emerald-100 text-emerald-900 border-emerald-400",
    costEstimate: "$150 - $250 USD",
    howItWorks: "En lugar de adquirir deuda para construir cabañas fijas sin demanda validada, el emprendedor arrienda una finca rural durante un fin de semana para atender personalmente a un grupo piloto de 2 a 4 viajeros. Esto permite observar qué comodidades y atenciones valoran realmente antes de ejecutar obras de infraestructura.",
    lesson: "El experimento conserje genera certeza operativa y comercial directa a una fracción mínima del costo de construcción."
  }
];

export default function NotaProbarMenorCosto() {
  const [activeTabId, setActiveTabId] = useState("palmpilot");
  const activeExample = REAL_WORLD_EXAMPLES.find(e => e.id === activeTabId) || REAL_WORLD_EXAMPLES[0];
  const ActiveIcon = activeExample.icon;

  return (
    <div className="w-full bg-[#fcfbfa] p-5 sm:p-7 rounded-[30px] border-[3px] border-slate-900 shadow-[5px_5px_0px_0px_#0f172a] text-left space-y-5 animate-in fade-in">
      
      {/* Cabecera Informativa con Ilustración y Misión Pedagógica */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-400 text-slate-950 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a] shrink-0">
            <Lightbulb className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block">
              Metodología de Validación Temprana (Alexander Osterwalder & David Bland)
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Estrategias de Experimentación al Menor Costo
            </h3>
          </div>
        </div>

        <div className="px-3 py-1 bg-white rounded-full border-2 border-slate-900 text-xs font-black text-slate-800 shadow-[2px_2px_0px_0px_#0f172a] self-start sm:self-auto">
          6 Casos Sectoriales
        </div>
      </div>

      {/* Criterio Metodológico Central */}
      <div className="p-4 bg-amber-50 rounded-[22px] border-2 border-amber-300 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
            Criterio Metodológico de Alexander Osterwalder:
          </h4>
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
            El propósito de la experimentación no es financiar un producto final para ver si funciona, sino <strong>adquirir la máxima evidencia y certeza comercial posible arriesgando la menor cantidad de tiempo y capital</strong>.
          </p>
        </div>
      </div>

      {/* Selector de Industrias */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {REAL_WORLD_EXAMPLES.map((ex) => {
          const isSelected = ex.id === activeTabId;
          const TabIcon = ex.icon;

          return (
            <button
              key={ex.id}
              onClick={() => setActiveTabId(ex.id)}
              className={`p-2.5 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'border-slate-900 bg-white ring-2 ring-amber-400 shadow-[3px_3px_0px_0px_#0f172a] -translate-y-0.5'
                  : 'border-slate-300 bg-slate-50 hover:bg-white text-slate-600 hover:border-slate-800'
              }`}
            >
              <span className={`p-1.5 rounded-xl border ${ex.iconBg}`}>
                <TabIcon className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span className="text-[10px] font-black leading-tight text-slate-900">
                {ex.sector}
              </span>
            </button>
          );
        })}
      </div>

      {/* Ficha Detallada del Ejemplo Seleccionado */}
      <div className="p-5 sm:p-6 bg-white rounded-[24px] border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <span className={`p-2 rounded-xl border border-slate-900 ${activeExample.iconBg}`}>
              <ActiveIcon className="w-5 h-5 stroke-[2.5]" />
            </span>
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                {activeExample.sector}
              </span>
              <h4 className="text-sm sm:text-base font-black text-slate-900">
                {activeExample.title}
              </h4>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-400 text-emerald-800 font-mono text-[11px] font-black self-start sm:self-auto">
            Inversión Estimada: {activeExample.costEstimate}
          </div>
        </div>

        {/* Cómo lo hicieron */}
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
            Mecanismo del Experimento:
          </span>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {activeExample.howItWorks}
          </p>
        </div>

        {/* Lección para el modelo de negocio */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2">
          <span className="text-sm">🎯</span>
          <p className="text-xs text-slate-900 font-bold leading-normal">
            <strong>Principio de Aprendizaje:</strong> {activeExample.lesson}
          </p>
        </div>
      </div>

      {/* Conclusión Metodológica */}
      <div className="p-3.5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="text-xs">
          <span className="font-bold text-amber-400">Principio Metodológico: </span>
          <span>En cualquier industria, la prioridad del diseñador de modelos de negocio es encontrar el experimento más ágil y económico que valide la disposición real de pago antes de inmovilizar capital en activos fijos.</span>
        </div>
      </div>

    </div>
  );
}
