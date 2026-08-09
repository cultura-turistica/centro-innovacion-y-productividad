export const syllabusData = {
  header: {
    breadcrumb: [
      { label: "Inicio", url: "/" },
      { label: "Academia", url: "/academia" },
      { label: "Diseño de Marca", url: null }
    ],
    category: "Branding Estratégico",
    badge: "Programa 100% Autoguiado",
    titlePart1: "Curso Práctico de",
    titlePart1Color: "text-rose-500",
    titlePart2: "Diseño de Marca e Identidad Visual",
    titlePart2Color: "text-rose-800",
    description: "Aprende a construir marcas con personalidad. Descubre el poder de los arquetipos, la psicología del color y el tono de voz para conectar con tu audiencia.",
    startBtn: {
      label: "Iniciar Módulo 1",
      url: "/academia/cursos/marca/modulo-1"
    }
  },
  modulesTitle: "Temario del Curso",
  modules: [
    { id: 1, title: 'Identidad vs Imagen', description: 'Comprende la diferencia entre lo que eres y lo que perciben de ti.', duration: '15 min', path: 'modulo-1' },
    { id: 2, title: 'Arquetipos de Marca', description: 'Descubre los 12 arquetipos de personalidad y encuentra el tuyo.', duration: '25 min', path: 'modulo-2' },
    { id: 3, title: 'Psicología del Color', description: 'Aprende a comunicar emociones a través de tu paleta visual.', duration: '20 min', path: 'modulo-3' },
    { id: 4, title: 'Personalidad Tipográfica', description: 'Entiende cómo las fuentes cambian radicalmente tu mensaje.', duration: '20 min', path: 'modulo-4' },
    { id: 5, title: 'Voz y Tono', description: 'Construye la manera de hablar de tu marca para cada canal.', duration: '25 min', path: 'modulo-5' }
  ]
};
