/**
 * Data Layer para el Laboratorio de Atractivos Turísticos
 * Auditoría Científica del Inventario Turístico Nacional (Guía MinCIT 2020)
 * 
 * Regla de Arquitectura (ARCHITECTURE_RULES.md #5):
 * Todos los textos, KPIs, descripciones de actos y preguntas provocadoras
 * deben residir exclusivamente en este archivo estático.
 * Utiliza comillas tipográficas curvadas (“ ” y ‘ ’) en toda la redacción.
 */

export const ATRACTIVOS_HERO_DATA = {
  breadcrumb: "Laboratorio de Datos",
  badge: "Metodología Oficial MinCIT 2020",
  titlePart1: "Caso de Estudio:",
  titlePart2: "Inventario Turístico de Colombia",
  subtitle: "Evaluación y análisis de la matriz nacional de 8,345 registros del Inventario Turístico bajo la metodología oficial MinCIT 2020.",
  kpis: [
    { label: "Total Registros", value: "8,345", detail: "Bienes culturales y naturales evaluados", accent: "text-blue-600" },
    { label: "Recursos Turísticos", value: "62.90%", detail: "5,249 bienes (Significado Local: 6 pts)", accent: "text-amber-600" },
    { label: "Patrimonio Cultural", value: "80.0%", detail: "6,677 bienes culturales", accent: "text-orange-600" },
    { label: "Patrimonio Natural", value: "20.0%", detail: "1,668 sitios naturales", accent: "text-emerald-600" }
  ]
};

export const DATA_STORY_ACTS = [
  {
    id: "acto-1",
    numero: "01",
    etiqueta: "Frontera de Significancia",
    titulo: "¿Atractivo o Recurso Turístico?",
    bajada: "La Significancia es la única variable que clasifica a un bien como Recurso Turístico (Local: 6 pts) o como Atractivo Turístico (≥ 12 pts): 6 de cada 10 registros evaluados no cuentan con inserción documentada en guías o circuitos de mercado.",
    recursos: {
      titulo: "Recursos Turísticos",
      escala: "Significado Local (6 pts)",
      porcentaje: "62.90%",
      cantidad: 5249,
      sintesis: "Bienes con arraigo identitario para su comunidad inmediata, pero sin inserción documentada en guías o paquetes turísticos al momento de la captura censal."
    },
    atractivos: {
      titulo: "Atractivos Turísticos",
      escala: "Regional, Nacional o Internacional (≥ 12 pts)",
      porcentaje: "37.10%",
      cantidad: 3096,
      sintesis: "Bienes inmersos en guías comerciales, rutas intermunicipales o dinámicas de promoción turística activa con capacidad de atraer visitantes externos."
    },
    desgloseSignificado: [
      { nivel: "Local (Recursos)", puntos: "6 pts", cantidad: 5249, porcentaje: "62.90%", tipo: "recurso", color: "bg-amber-600" },
      { nivel: "Regional (Atractivos)", puntos: "12 pts", cantidad: 1658, porcentaje: "19.87%", tipo: "atractivo", color: "bg-slate-700" },
      { nivel: "Nacional (Atractivos)", puntos: "18 pts", cantidad: 1243, porcentaje: "14.90%", tipo: "atractivo", color: "bg-slate-800" },
      { nivel: "Internacional (Atractivos)", puntos: "30 pts", cantidad: 195, porcentaje: "2.34%", tipo: "atractivo", color: "bg-emerald-700" }
    ]
  },
  {
    id: "acto-2",
    numero: "02",
    etiqueta: "Autopsia del Puntaje",
    titulo: "La Ponderación 70/30 y las Calificaciones en Bloque",
    bajada: "La Guía evalúa Calidad Técnica (hasta 70 pts) y Significancia (hasta 30 pts). Los datos de campo revelan agrupaciones anómalas de notas idénticas en múltiples municipios.",
    formulasUniversos: [
      {
        id: "cultural-material",
        nombre: "Patrimonio Cultural Material",
        cobertura: "56.5% del inventario",
        subcriterios: [
          { nombre: "Representatividad", puntos: 28, porcentaje: "40%", desc: "Trascendencia histórica, artística y valor simbólico" },
          { nombre: "Estado de Conservación", puntos: 21, porcentaje: "30%", desc: "Integridad física estructural y estado de preservación" },
          { nombre: "Constitución del Bien", puntos: 21, porcentaje: "30%", desc: "Materiales y técnica constructiva original" }
        ]
      },
      {
        id: "sitios-naturales",
        nombre: "Sitios Naturales",
        cobertura: "20.0% del inventario",
        subcriterios: [
          { nombre: "Singularidad y Rareza", puntos: 28, porcentaje: "40%", desc: "Unicidad biogeográfica y valor de conservación" },
          { nombre: "Estado de Conservación", puntos: 21, porcentaje: "30%", desc: "Grado de alteración antrópica del ecosistema" },
          { nombre: "Diversidad y Paisaje", puntos: 21, porcentaje: "30%", desc: "Riqueza biótica y atractivo escénico" }
        ]
      }
    ],
    casosVarianza: [
      {
        municipio: "Valledupar (Cesar)",
        totalBienes: 62,
        desviacion: 4.07,
        notaIdentica: "12 bienes con 70/70 exacto",
        diagnostico: "Varianza nula en calidad física. Templos coloniales y el Balneario Hurtado recibieron notas idénticas de 70 puntos."
      },
      {
        municipio: "Tolú (Sucre)",
        totalBienes: 22,
        desviacion: 3.25,
        notaIdentica: "50% de los bienes con 70/70",
        diagnostico: "La mitad del inventario municipal obtuvo la nota máxima de calidad sin considerar su desgaste material."
      },
      {
        municipio: "Quibdó (Chocó)",
        totalBienes: 11,
        desviacion: 3.93,
        notaIdentica: "Calificación agrupada en bloque",
        diagnostico: "Patrimonio fluvial y arquitectónico tabulado con notas uniformes sin discriminación técnica en campo."
      }
    ],
    ruinasIlustres: {
      total: 17,
      sintesis: "17 bienes catalogados oficialmente como “Malo” o “Ruinoso” recibieron jerarquía Nacional (18 pts) o Internacional (30 pts). Su inmenso peso histórico superó el colapso de su infraestructura física.",
      ejemplos: [
        { nombre: "Parque Biblioteca España (Medellín)", jerarquia: "Internacional (30 pts)", estado: "Ruinoso / Colapso fachada", universo: "Cultural Inmueble" },
        { nombre: "Estaciones del Ferrocarril Nacional (Varios)", jerarquia: "Nacional (18 pts)", estado: "Malo / Abandono estructural", universo: "Cultural Inmueble" }
      ]
    }
  },
  {
    id: "acto-3",
    numero: "03",
    etiqueta: "Sesgo del Cemento",
    titulo: "El Silencio de la Biodiversidad",
    bajada: "En el segundo país más biodiverso del mundo, el 80% del inventario son iglesias y alcaldías, mientras la fauna y flora representa apenas el 5.28%.",
    composicionGlobal: {
      cultural: {
        porcentaje: "80.0%",
        total: 6677,
        detalle: "56.55% Inmuebles urbanos (42.6% alcaldías y 27.1% templos) y 32.17% Patrimonio Inmaterial."
      },
      natural: {
        porcentaje: "20.0%",
        total: 1668,
        detalle: "34.83% Ríos y cascadas de fácil balneario. La observación de fauna y flora suma apenas 88 registros (5.28%)."
      }
    },
    desgloseCultural: [
      { categoria: "Inmuebles (Alcaldías, Parroquias)", porcentaje: "56.55%", count: 3776 },
      { categoria: "Inmaterial (Tradiciones, Saberes)", porcentaje: "32.17%", count: 2148 },
      { categoria: "Mueble (Colecciones, Arte)", porcentaje: "11.28%", count: 753 }
    ],
    desgloseNatural: [
      { categoria: "Aguas Lóticas (Ríos, Cascadas)", porcentaje: "34.83%", count: 581 },
      { categoria: "Montañas, Serranías y Cerros", porcentaje: "28.42%", count: 474 },
      { categoria: "Áreas Protegidas y Parques", porcentaje: "18.22%", count: 304 },
      { categoria: "Aguas Lénticas (Lagunas, Ciénagas)", porcentaje: "13.25%", count: 221 },
      { categoria: "Observación de Flora y Fauna", porcentaje: "5.28%", count: 88 }
    ],
    criticasMetodologicas: [
      {
        titulo: "El Contenedor Físico",
        texto: "La Guía MinCIT exige registrar un punto delimitado con infraestructura visible (senderos, miradores, casetas). Por ello, los cascos urbanos de cemento califican fácilmente, mientras que santuarios vírgenes de biodiversidad quedan excluidos por carecer de obra civil."
      },
      {
        titulo: "Patrimonio Inmaterial",
        texto: "El 96.7% de las 2,148 manifestaciones inmateriales registra estado físico “No Aplica”. Esto respeta el criterio ontológico de evaluar la tradición y la memoria colectiva, no la infraestructura material."
      }
    ]
  }
];

export const EXPLORADOR_FILTROS_CONFIG = {
  titulo: "Atlas Exploratorio del Inventario Nacional",
  subtitulo: "Consulta los 8,345 registros evaluados. Filtra por territorio, clasificación MinCIT y estado de conservación.",
  departamentosDefault: "Todos",
  clases: ["Todas", "Patrimonio Cultural", "Patrimonio Natural"],
  jerarquias: [
    { label: "Todas las jerarquías", value: "Todas" },
    { label: "Recursos Turísticos (Local: 6 pts)", value: "Local" },
    { label: "Atractivos Turísticos (≥ 12 pts)", value: "Atractivos" },
    { label: "Atractivos Regionales (12 pts)", value: "Regional" },
    { label: "Atractivos Nacionales (18 pts)", value: "Nacional" },
    { label: "Atractivos Internacionales (30 pts)", value: "Internacional" }
  ],
  estadosConservacion: ["Todos", "Bueno", "Regular", "Malo", "Ruinoso", "No aplica"]
};
