export const modulo1Data = {
  photoHeader: {
    title: "Escribir con Luz",
    description: "Domina \"El Triángulo de Oro\" y descubre cómo transformar cualquier destello de luz en una obra maestra visual.",
    bgImage: "/assets/images/fotografia/rule_of_thirds_landscape_1777058892934.webp"
  },
  infoBlock1: {
    title: "¿Qué es la fotografía?",
    paragraphs: [
      "La palabra fotografía literalmente significa <strong>escritura de luz</strong>. Cuando tomas una foto, no estás capturando un objeto; estás capturando la luz rebotando en ese objeto."
    ],
    quote: "Tu cámara es un lienzo estéril. La luz es la pintura. El lente es el pincel."
  },
  gridBlock: {
    badge: "Anatomía Básica",
    title: "Las dos piezas fundamentales",
    items: [
      {
        id: "lente",
        title: "El Lente Ocular",
        description: "Condensa y dirige la luz dispersa hacia el fondo cerrado de la cámara.",
        icon: "Eye"
      },
      {
        id: "sensor",
        title: "El Sensor",
        description: "El cerebro digital (antigua película) que convierte esa luz en pixeles RGB.",
        icon: "Zap"
      }
    ]
  },
  photoGallery: {
    badge: "Triángulo de Exposición 🔺",
    title: "Las Tres Variables Maestras",
    description: "Imagina que tomar una foto es llenar un vaso con agua (la luz). Así es como controlas el flujo:",
    items: [
      {
        id: "apertura",
        title: "1. Apertura (f-stop)",
        description: "Controla cuánta luz entra por el lente.",
        visualEffect: "Fondos borrosos (Profundidad de campo superficial).",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        theme: "blue"
      },
      {
        id: "velocidad",
        title: "2. Obturador",
        description: "Controla cuánto tiempo el sensor capta la luz.",
        visualEffect: "Congelar el movimiento vs. barridos y estelas de luz.",
        image: "/assets/images/fotografia/long_exposure_traffic_1777058879040.webp",
        theme: "pink"
      },
      {
        id: "iso",
        title: "3. ISO",
        description: "La sensibilidad electrónica a la luz.",
        visualEffect: "Poder disparar de noche vs. ruido (granulado) visual.",
        image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80",
        theme: "amber"
      }
    ]
  },
  beforeAfterSliders: [
    {
      id: "slider-iso",
      title: "Impacto del ISO: Ruido vs Nitidez",
      imageBefore: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?auto=format&fit=crop&w=1200&q=80",
      imageAfter: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?auto=format&fit=crop&w=1200&q=80",
      labelBefore: "ISO Alto (Ruido)",
      labelAfter: "ISO Bajo (Nítido)",
      themeColor: "#f59e0b",
      effectBefore: "noise"
    }
  ],
  infoBlock2: {
    title: "El gran secreto de los profesionales",
    paragraphs: [
      "No existe una \"exposición perfecta\" universal. Exponer es decidir. A veces quieres una foto subexpuesta (oscura) para dar drama, o un tiempo de exposición largo para que el agua de un río parezca seda. <strong>La técnica sirve a tu imaginación, no al revés.</strong>"
    ],
    icon: "Lightbulb"
  }
};
