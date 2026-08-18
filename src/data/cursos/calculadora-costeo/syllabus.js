export const syllabusData = {
  header: {
    breadcrumb: [
      { label: "Inicio", url: "/" },
      { label: "Academia", url: "/academia" },
      { label: "Herramientas", url: null }
    ],
    badge: "Laboratorio Financiero",
    titlePart1: "Calculadora de",
    titlePart1Color: "text-slate-800",
    titlePart2: "Costeo Turístico",
    titlePart2Color: "text-emerald-600",
    description: "Herramienta interactiva profesional basada en la metodología del PNUD para estructurar, calcular y proyectar los costos, gastos y precios finales de tus paquetes y experiencias turísticas."
  },
  modulesTitle: "Conceptos Estructurales de la Herramienta",
  modules: [
    {
      id: "1",
      module: "Concepto 1",
      title: "Costos Directos (Variables)",
      description: "Identificación de los costos directamente atribuibles al servicio turístico prestado (alimentación, transporte, entradas, seguros). Estos varían según la cantidad de pasajeros.",
      isConcept: true,
      time: "Metodología PNUD",
      status: "unlocked",
      url: "/academia/cursos/calculadora-costeo/herramienta"
    },
    {
      id: "2",
      module: "Concepto 2",
      title: "Gastos Operativos (Fijos)",
      description: "Asignación prorrateada de los gastos de funcionamiento del negocio (arriendos, nómina administrativa, servicios públicos) sobre la capacidad operativa mensual.",
      isConcept: true,
      time: "Metodología PNUD",
      status: "unlocked",
      url: "/academia/cursos/calculadora-costeo/herramienta"
    },
    {
      id: "3",
      module: "Concepto 3",
      title: "Punto de Equilibrio",
      description: "Cálculo automatizado de la cantidad mínima de pasajeros requeridos para cubrir exactamente la totalidad de costos y gastos sin generar pérdidas.",
      isConcept: true,
      time: "Análisis Financiero",
      status: "unlocked",
      url: "/academia/cursos/calculadora-costeo/herramienta"
    },
    {
      id: "4",
      module: "Concepto 4",
      title: "Margen de Utilidad y Comisiones",
      description: "Proyección del precio de venta al público (PVP) integrando el margen de ganancia deseado y calculando las comisiones para agencias e intermediarios (B2B).",
      isConcept: true,
      time: "Estrategia de Precios",
      status: "unlocked",
      url: "/academia/cursos/calculadora-costeo/herramienta"
    },
    {
      id: "5",
      module: "Aplicación",
      title: "Iniciar Simulación",
      description: "Abre la calculadora interactiva, ingresa tus datos reales y obtén al instante el precio exacto al que debes vender tus experiencias turísticas.",
      isConcept: true,
      path: "herramienta",
      time: "Herramienta Interactiva",
      status: "unlocked",
      url: "/academia/cursos/calculadora-costeo/herramienta"
    }
  ],
  sidebar: {
    video: {
      youtubeId: "LWCyv7y7ylA",
      coverImage: "/assets/images/portada-calculadora.webp"
    }
  }
};
