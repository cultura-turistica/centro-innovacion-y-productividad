export const coordsFinca = [
  [3.433071, -75.213988], [3.433464, -75.213904], [3.433590, -75.213810],
  [3.433638, -75.213614], [3.433658, -75.213466], [3.433674, -75.212634],
  [3.433708, -75.212290], [3.433648, -75.211909], [3.433562, -75.211723],
  [3.433497, -75.211686], [3.432917, -75.211478], [3.432822, -75.211508],
  [3.432763, -75.211602], [3.432491, -75.212232], [3.432326, -75.212841],
  [3.431900, -75.212853], [3.430735, -75.212620], [3.429663, -75.212298],
  [3.429402, -75.212176], [3.429225, -75.212131], [3.428928, -75.212022],
  [3.428503, -75.212185], [3.427957, -75.211871], [3.427629, -75.212263],
  [3.427463, -75.212443], [3.427397, -75.212532], [3.427541, -75.212699],
  [3.427647, -75.212718], [3.427716, -75.212808], [3.427697, -75.213039],
  [3.427602, -75.213256], [3.427531, -75.213582], [3.427507, -75.213787],
  [3.427512, -75.213841], [3.427600, -75.213994], [3.427905, -75.214585],
  [3.428003, -75.214807], [3.428062, -75.214898], [3.428113, -75.215076],
  [3.428149, -75.215352], [3.428136, -75.215632], [3.428168, -75.215782],
  [3.428131, -75.216391], [3.427962, -75.216861], [3.427945, -75.217033],
  [3.427992, -75.217190], [3.427951, -75.217384], [3.427952, -75.217522],
  [3.428189, -75.217680], [3.428338, -75.217792], [3.428455, -75.217820],
  [3.428574, -75.217713], [3.428647, -75.217674], [3.428732, -75.217592],
  [3.429315, -75.217630], [3.429721, -75.217966], [3.429844, -75.217993],
  [3.434336, -75.216654], [3.433071, -75.213988]
];

export const boundsFinca = [
  [3.427397, -75.217993],
  [3.434336, -75.211478]
];

export const NARRATIVA = {
  transparencia: {
    titulo: "Transparencia de Datos: Hipótesis de Supuesto Ambiental",
    texto: "Este laboratorio presenta un ejercicio académico y teórico. Las cifras de carbono expuestas son estimaciones no verificadas y no representan créditos generados ni victorias climáticas de Cultura T. Para la Capacidad Estimada de Stock, se asume un modelo teórico de 25 tC/ha. Para la Captura Posible, se proyecta teóricamente un Flujo Medio Anual de 1.5 tCO2e/ha/año. El objetivo de estas métricas es evaluar cómo podríamos iniciar la vigilancia ecosistémica bajo intervenciones moderadas, apoyándonos en lineamientos teóricos forestales, sin certificar de ninguna forma una captura real o adjudicada."
  },
  tituloHero: {
    titulo: "La Prosperidad",
    subtitulo: "Resiliencia en el Bosque Seco Tropical",
    instruccion: "Desplázate hacia abajo para explorar la historia visual de la conservación."
  },
  acto1: {
    titulo: "El Origen (2018-2022)",
    p1: 'El predio "La Prosperidad" fue adquirido entre 2018 y 2019 con el objetivo inicial de desarrollar un proyecto turístico que no pudo materializarse por costos. Durante este periodo, su ecosistema de bosque nativo se mantuvo intacto, de forma casi virgen, sin cultivos ni animales.',
    p2: "Esta etapa representa la línea base del territorio antes de cualquier intervención humana directa.",
    caption: 'Linderos exactos del predio "La Prosperidad"'
  },
  acto2: {
    titulo: "La Intervención (2023-2026)",
    p1: "A partir de 2023, la socia propietaria inició una intervención moderada en el predio: se construyó una casa rústica, se introdujeron pastos para ganadería y se plantaron algunos árboles frutales, constituyendo así la intervención principal actual.",
    p2: "El propósito de este laboratorio no es presentar una victoria climática, sino trazar un supuesto teórico: observar el tejido forestal que permanece y estimar su capacidad ecosistémica posible (no verificada) ante los nuevos cambios, promoviendo la vigilancia satelital.",
    stats: [
      { titulo: "Bosque Protegido (2026)", numero: "32.82 Ha", subtitulo: "Intacto y preservado.", tipo: "green" },
      { titulo: "Crecimiento del Matorral", numero: "1.98 → 4.67 Ha", subtitulo: "Insight clave de regeneración o transición por estrés hídrico.", tipo: "orange" }
    ]
  },
  acto3: {
    titulo: "La Evidencia Satelital",
    p1: "¿Cómo probamos que el ecosistema no decayó tras la llegada de la ganadería? Para ello, procesamos y unificamos 59 registros mensuales consecutivos de índices satelitales.",
    conclusion: "A pesar de las fluctuaciones climáticas anuales, el vigor general no colapsó, demostrando resiliencia tras la adaptación productiva."
  },
  acto4: {
    titulo: "El Territorio en Detalle",
    p1: "El polígono que observas enmarca exactamente las coordenadas de La Prosperidad.",
    p2: "Aquí es donde la vigilancia espacial toma sentido. Al superponer algoritmos de clasificación de coberturas (Bosque, Matorral, Pastizal), visualizamos la composición del terreno sin pisarlo."
  },
  acto5: {
    titulo: "Conclusión: El Valor del Monitoreo Remoto",
    p1: "Tradicionalmente, certificar la captura de CO2 requiere procesos altamente técnicos, invasivos y costosos: parcelas de muestreo físico en tierra, medición de diámetros de árboles (biometría), e incluso escáneres LiDAR o talas controladas.",
    p2: "¿Por qué utilizamos exclusivamente telemetría satelital para este ejercicio hipotético? Porque nos brinda una capacidad de vigilancia ecosistémica ininterrumpida y a bajo costo. Monitorear los índices de verdor (NDVI) y agua (NDWI) desde el espacio nos permite validar, de forma teórica pero fundamentada, que la introducción de un modelo productivo en un predio adyacente no está aniquilando el bosque circundante.",
    conclusionFinal: "El acercamiento teórico al CO2 (modelos Nivel 1) no busca vender bonos hoy, sino comprobar internamente la robustez del ecosistema. Es el primer paso ineludible: demostrar con datos remotos que el tejido forestal soporta el cambio, antes de justificar la inversión en certificaciones terrestres oficiales."
  }
};
