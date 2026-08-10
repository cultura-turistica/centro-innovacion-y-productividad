export const syllabusData = {
  header: {
    breadcrumb: [
      { label: "Inicio", url: "/" },
      { label: "Academia", url: "/academia" },
      { label: "Experiencias Privadas", url: null }
    ],
    category: "Módulo Empresarial Avanzado",
    badge: "Programa 100% Autoguiado",
    titlePart1: "Arquitectura de",
    titlePart1Color: "text-blue-900",
    titlePart2: "Experiencias Privadas",
    titlePart2Color: "text-indigo-600",
    description: "Un viaje profundo al diseño de productos turísticos rentables. Aprende a iterar rápido, descubrir el verdadero 'trabajo a realizar' de tus clientes y validar tu negocio sin gastar una fortuna.",
    startBtn: {
      label: "Comenzar Módulo 1",
      url: "/academia/cursos/experiencias-privadas/modulo-1"
    }
  },
  modulesTitle: "Temario del Curso",
  modules: [
    {
      id: 1,
      title: "Descubrimiento y Empatía",
      description: "Observación cualitativa vs. Encuestas. Aprende la 'Regla de Oro Empresarial'.",
      path: "modulo-1",
      duration: "15 min"
    },
    {
      id: 2,
      title: "El Tablero de Propuesta de Valor",
      description: "Identifica el 'Job to be Done' de tu cliente. Atributos Funcionales, Emocionales y Sociales.",
      path: "modulo-2",
      duration: "20 min"
    },
    {
      id: 3,
      title: "Prototipado y Validación",
      description: "Aprender fallando barato. Herramientas desechables y simulacros operativos.",
      path: "modulo-3",
      duration: "25 min"
    },
    {
      id: 4,
      title: "Estructuración del Negocio y MVP",
      description: "El Producto Mínimo Viable (MVP). Construye solo lo esencial y lanza al mercado.",
      path: "modulo-4",
      duration: "15 min"
    },
    {
      id: 5,
      title: "Ciclo de Sense & Respond",
      description: "Escuchar los datos y responder con iteración brutal. El Discovery Permanente.",
      path: "modulo-5",
      duration: "20 min"
    }
  ],
  learningOutcomes: [
    "Diseñar una propuesta de valor enfocada en el cliente real.",
    "Validar ideas de negocio de forma económica usando el MVP.",
    "Implementar ciclos de iteración continua y 'Sense & Respond'."
  ]
};
