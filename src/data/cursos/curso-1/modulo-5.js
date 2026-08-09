import { Scale, MessageCircle, AlertTriangle } from 'lucide-react';

export const modulo5Data = {
  header: {
    label: "Módulo 5",
    titlePart1: "Mediación y Resolución",
    titlePart2: "de Conflictos",
    description: "La convivencia comunitaria no está libre de tensiones. El éxito de la red asociativa depende de cómo se abordan y resuelven los desacuerdos antes de que fracturen el tejido social.",
    image: "/assets/images/conflictos.webp", // Updated header image
    theme: {
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent1: "bg-rose-200/50",
      accent2: "bg-red-200/50",
      badgeBg: "bg-white/60",
      badgeText: "text-rose-700",
      badgeBorder: "border-rose-200",
      gradientText: "from-rose-600 to-red-500"
    }
  },
  intro: {
    title: "El Conflicto como Oportunidad",
    paragraphs: [
      "Es un error pensar que una comunidad unida no tiene problemas. La llegada de turistas, el manejo de los ingresos y la distribución de las cargas de trabajo <strong>siempre</strong> generan roces.",
      "La mediación efectiva no busca evitar el conflicto a toda costa ni imponer la voluntad del más fuerte, sino <em>facilitar un diálogo transparente</em> donde las partes entiendan que el objetivo común (el bienestar del territorio) es superior a las disputas individuales."
    ],
    theme: {
      gradient: "from-rose-400 to-red-600",
      bgBlur: "bg-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      shadow: "shadow-rose-100/40",
      border: "border-rose-50"
    }
  },
  simulator: {
    badge: "Simulador de Conflictos",
    title: "Toma de Decisiones Comunitarias",
    description: "Enfréntate a los escenarios reales más comunes en proyectos de turismo rural. Lee el contexto y elige la mejor manera de intervenir.",
    scenarios: [
      {
        id: "escenario-1",
        context: "La familia Pérez, que ofrece hospedaje, está acaparando a todos los turistas que llegan al pueblo, dejándolos en su finca y ofreciéndoles comida y guianza por su cuenta. Esto rompe la cadena de valor y las demás familias están molestas.",
        question: "¿Cómo interviene el líder o comité mediador?",
        options: [
          {
            id: "opt1",
            text: "Ignorar el problema; cada familia tiene derecho a hacer sus propios negocios.",
            type: "danger",
            impact: "“La ley del más vivo” destruye la confianza. En pocos meses, el resto de la comunidad dejará de apoyar la iniciativa de turismo y se fracturará la red."
          },
          {
            id: "opt2",
            text: "Expulsar inmediatamente a la familia Pérez de la asociación comunitaria como castigo.",
            type: "warning",
            impact: "Una medida extrema que genera resentimiento y posibles divisiones. Perderán un nodo importante de alojamiento sin haber intentado dialogar."
          },
          {
            id: "opt3",
            text: "Convocar una asamblea para recordar los acuerdos de red, mostrando cómo el acaparamiento perjudica a todos a largo plazo, e invitar a la familia Pérez a respetar la delegación de roles.",
            type: "success",
            impact: "El diálogo constructivo y el recordatorio de las reglas de juego conjuntas fortalecen la institucionalidad. Se preserva el tejido social."
          }
        ]
      },
      {
        id: "escenario-2",
        context: "Un grupo de jóvenes de la comunidad, encargados de las redes sociales, exige un porcentaje mayor de las ganancias porque argumentan que “sin nosotros, no vendría nadie”. Los mayores, que cocinan y hacen el trabajo físico, lo consideran injusto.",
        question: "¿Cuál es la forma más sostenible de resolver esta tensión intergeneracional?",
        options: [
          {
            id: "opt1",
            text: "Revisar públicamente la matriz de costos y tiempos, valorando tanto el esfuerzo físico como el trabajo digital, para renegociar las tarifas con base técnica.",
            type: "success",
            impact: "La transparencia en los números desarma los egos. Ambos grupos comprenden el valor del otro y se ajusta la compensación de forma justa y argumentada."
          },
          {
            id: "opt2",
            text: "Darles la razón a los jóvenes rápidamente para evitar que se molesten y dejen de hacer promoción.",
            type: "danger",
            impact: "Los mayores se sentirán desvalorizados y explotados. El trabajo físico decaerá, la calidad del servicio bajará, y al final los turistas dejarán de ir."
          },
          {
            id: "opt3",
            text: "Decirles a los jóvenes que las reglas ya están escritas y que si no les gusta, que dejen el proyecto.",
            type: "warning",
            impact: "Se pierde el talento digital clave. El proyecto podría quedar sin visibilidad, aunque se mantiene el orden tradicional. No es una solución integradora."
          }
        ]
      }
    ]
  }
};
