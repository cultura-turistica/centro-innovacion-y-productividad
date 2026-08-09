export const syllabusData = {
  header: {
    breadcrumb: [
      { label: "Inicio", url: "/" },
      { label: "Academia", url: "/academia" },
      { label: "Fundamentos y Composición", url: null }
    ],
    category: "Creación de Contenido",
    badge: "Programa 100% Autoguiado",
    titlePart1: "Curso Práctico de",
    titlePart1Color: "text-indigo-500",
    titlePart2: "Fundamentos y Composición Fotográfica",
    titlePart2Color: "text-indigo-800",
    description: "Domina la luz, el encuadre y las reglas visuales para crear fotografías impactantes que cuenten historias.",
    startBtn: {
      label: "Iniciar Módulo 1",
      url: "/academia/cursos/fotografia/modulo-1"
    }
  },
  modulesTitle: "Temario del Curso",
  modules: [
    { id: 1, title: 'Escribir con Luz', description: 'El Triángulo de Exposición y la anatomía de tu cámara.', duration: '15 min', path: 'modulo-1' },
    { id: 2, title: 'La Cámara en tu Bolsillo', description: 'Conoce tu smartphone, lentes y modos de disparo manual.', duration: '20 min', path: 'modulo-2' },
    { id: 3, title: 'Configuración y Flujo', description: 'RAW vs JPEG, Metadatos y Ráfagas fotográficas.', duration: '20 min', path: 'modulo-3' },
    { id: 4, title: 'El Arte de Mirar', description: 'Planos y Ángulos (Picado, Contrapicado, Cenital).', duration: '25 min', path: 'modulo-4' },
    { id: 5, title: 'Encuadre y Composición', description: 'Regla de los Tercios, Líneas Guía y Perspectiva.', duration: '25 min', path: 'modulo-5' },
    { id: 6, title: 'Práctica (Simulador)', description: 'Simulador Manual de Cámara Fotográfica interactivo.', duration: '15 min', path: 'modulo-6' }
  ]
};
