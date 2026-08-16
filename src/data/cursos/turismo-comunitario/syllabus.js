export const syllabusData = {
  header: {
    breadcrumb: [
      { label: "Inicio", url: "/" },
      { label: "Academia", url: "/academia" },
      { label: "Turismo Comunitario", url: null }
    ],
    category: "Gestión Territorial",
    badge: "Programa 100% Autoguiado",
    titlePart1: "Ruta de Formación",
    titlePart1Color: "text-emerald-500",
    titlePart2: "Turismo Comunitario",
    titlePart2Color: "text-emerald-700",
    description: "Bienvenido al programa autoguiado. Este curso está diseñado para desarrollar capacidades metodológicas y de gobernanza que te permitirán gestionar rutas turísticas verdaderamente sostenibles.",
    startBtn: {
      label: "Iniciar Módulo 1",
      url: "/academia/cursos/turismo-comunitario/modulo-1"
    }
  },
  modulesTitle: "Temario del Curso",
  modules: [
    { id: 1, title: 'Gobernanza y Turismo Comunitario', duration: '20 min', path: 'modulo-1' },
    { id: 2, title: 'La Sostenibilidad Rural', duration: '15 min', path: 'modulo-2' },
    { id: 3, title: 'Tesoros Locales: El Patrimonio', duration: '25 min', path: 'modulo-3' },
    { id: 4, title: 'La Red Asociativa (Trabajo en Colectivo)', duration: '20 min', path: 'modulo-4' },
    { id: 5, title: 'Mediación y Resolución de Conflictos', duration: '30 min', path: 'modulo-5' },
    { id: 6, title: 'Simulador de Casos Reales', duration: '40 min', path: 'modulo-6' }
  ]
};
