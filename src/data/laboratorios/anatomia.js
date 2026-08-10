export const ANATOMY_DATA = {
  cabeza: {
    id: 'cabeza',
    bodyPart: 'El Cerebro',
    title: 'Decisiones y planificación autónoma',
    subtitle: '¿Cómo piensa, planifica y elige su destino?',
    iconName: 'Brain',
    colorTheme: 'purple',
    coordinates: {
      desktop: { x: 50, y: 6 },
      mobile: { x: 50, y: 4 }
    },
    metrics: [
      { label: 'Planifica y reserva directo', value: '54 %' },
      { label: 'Usa aplicaciones u OTA', value: '17 %' },
      { label: 'Agencia de viajes', value: '11 %' },
      { label: 'Recomendaciones', value: '11 %' }
    ],
    analysis: 'El 54 % planifica por su cuenta y reserva directamente. Solo el 17 % usa plataformas intermediarias (OTA) y un 11 % acude a agencias. El costo es el factor de decisión principal (27 %), y un 33 % tiene flexibilidad para viajar en cualquier momento del año.',
    insight: 'La red social es un canal de atracción, pero la decisión suele requerir atención directa. Responder dudas de forma clara a través de mensajería resulta más efectivo que depender solo de vitrinas digitales. Además, la baja intermediación (17 %) sugiere que los recursos ahorrados en comisiones podrían destinarse a mejorar el precio final.'
  },
  corazon: {
    id: 'corazon',
    bodyPart: 'El Corazón',
    title: 'Motivación y red de alojamiento',
    subtitle: '¿Qué hace latir el deseo de viajar?',
    iconName: 'Heart',
    colorTheme: 'red',
    coordinates: {
      desktop: { x: 50, y: 30 },
      mobile: { x: 50, y: 30 }
    },
    metrics: [
      { label: 'Alojamiento en hoteles', value: '45 %' },
      { label: 'Alojamiento con familiares o amigos', value: '39 %' },
      { label: 'Otros tipos de alojamiento', value: '16 %' }
    ],
    analysis: 'Aunque el motivo de viaje principal es el ocio (60 %), un importante 32 % se moviliza para visitar parientes o amigos. Esto impacta en el alojamiento: mientras que el 45 % paga hoteles, un significativo 39 % utiliza casas de conocidos.',
    insight: 'Al ahorrarse los costos de hospedaje, este perfil dispone de mayor liquidez para destinar a la gastronomía, el entretenimiento o las compras locales. Por ende, los residentes actúan como los verdaderos prescriptores del destino; ofrecerles incentivos para que salgan con sus visitas es clave para canalizar ese presupuesto flotante.'
  },
  ojos: {
    id: 'ojos',
    bodyPart: 'Los Ojos',
    title: 'Miopía del destino y desplazamientos',
    subtitle: '¿Hacia dónde dirige su mirada?',
    iconName: 'Eye',
    colorTheme: 'sky',
    coordinates: {
      desktop: { x: 58, y: 14 },
      mobile: { x: 62, y: 14 }
    },
    metrics: [
      { label: 'Turismo en su propia región', value: '73 %' },
      { label: 'Top 10 de destinos nacionales', value: '27 %' }
    ],
    analysis: 'Los diez destinos principales concentran solo el 27 % de las preferencias. El 73 % restante viaja principalmente a otros municipios de su propia región. A nivel de tipología, aunque el sol y playa lidera (29 %), existe una fuerte demanda de ecoturismo (9,7 %), aventura (8,4 %) y patrimonio (8,2 %).',
    insight: 'El alto porcentaje de turismo intrarregional sugiere que los esfuerzos de promoción pueden ser más eficientes si se enfocan en un radio de proximidad (de dos a cuatro horas por carretera). Asimismo, la diversificación indica que combinar tipologías (p. ej., ecoturismo y patrimonio) puede resultar más pertinente que ofrecer un solo tipo de actividad.'
  },
  piernas: {
    id: 'piernas',
    bodyPart: 'Las Piernas',
    title: 'Conectividad y cuellos de botella',
    subtitle: '¿Cómo se desplaza por el territorio?',
    iconName: 'Footprints',
    colorTheme: 'blue',
    coordinates: {
      desktop: { x: 50, y: 88 },
      mobile: { x: 50, y: 88 }
    },
    metrics: [
      { label: 'Vehículo propio o moto', value: '40 %' },
      { label: 'Bus intermunicipal', value: '36 %' },
      { label: 'Transporte aéreo', value: '22 %' }
    ],
    analysis: 'A nivel nacional, el 76 % de los viajes ocurre por vía terrestre (36 % en bus, 27 % en automóvil y 13 % en motocicleta). El transporte aéreo representa apenas el 22 % de los desplazamientos, dejando a la carretera como la reina indiscutible de la movilidad turística.',
    insight: 'Con una mayoría que llega por tierra, la infraestructura básica, como un estacionamiento seguro, se vuelve un requisito práctico importante al elegir alojamiento. Para quienes viajan en transporte intermunicipal, facilitar el traslado desde la terminal reduce una fricción logística común.'
  },
  piel: {
    id: 'piel',
    bodyPart: 'La Piel',
    title: 'Sostenibilidad de tacto inmediato',
    subtitle: '¿Qué tan sensible es al entorno?',
    iconName: 'Leaf',
    colorTheme: 'emerald',
    coordinates: {
      desktop: { x: 25, y: 45 },
      mobile: { x: 22, y: 45 }
    },
    metrics: [
      { label: 'Gestión de residuos o reciclaje', value: '34 %' },
      { label: 'Conservación de la biodiversidad', value: '19 %' },
      { label: 'Promoción de la cultura local', value: '18 %' },
      { label: 'Uso de energía eficiente', value: '13 %' }
    ],
    analysis: 'Un 51 % de los turistas nacionales afirma implementar alguna medida de sostenibilidad. Al desglosar las acciones aplicadas, la más común es la gestión responsable de residuos (34 %), seguida de la conservación (19 %), la cultura local (18 %) y la eficiencia energética (13 %).',
    insight: 'La intención sostenible del viajero suele enfocarse en lo práctico y visible, como el manejo de residuos. Para los negocios, esto implica que las prácticas ambientales deben ser evidentes en la operación diaria, evitando discursos que no se reflejen en la experiencia real del visitante.'
  },
  bolsillo: {
    id: 'bolsillo',
    bodyPart: 'El Bolsillo',
    title: 'Datos demográficos',
    subtitle: '¿Cuál es su soporte socioeconómico?',
    iconName: 'Wallet',
    colorTheme: 'amber',
    coordinates: {
      desktop: { x: 35, y: 62 },
      mobile: { x: 32, y: 62 }
    },
    metrics: [
      { label: 'Ingresos: 1 a 2 SMMLV', value: '47 %' },
      { label: 'Ingresos: menos de 1 SMMLV', value: '27 %' },
      { label: 'Ingresos: más de 2 SMMLV', value: '26 %' }
    ],
    analysis: 'El mercado está impulsado, en gran medida, por turistas cuyos ingresos familiares promedian uno o dos salarios mínimos (47 %). El segmento joven (de 25 a 34 años) representa el 37 %, lo que hace del costo un criterio transversal ineludible. El viajero exige maximizar la relación costo-beneficio.',
    insight: 'Existe un umbral de competitividad: si un viaje nacional alcanza costos que rivalizan con salir del país, el turista compara. El reto no es «regalar el trabajo», sino justificar el valor de la experiencia local o usar tarifas modulares para mantener la viabilidad financiera.'
  }
};

export const SINTESIS_TEXT = `Este panorama nos muestra a un turista pragmático y con alta autonomía en su planificación. Prioriza el costo (27 %), se desplaza mayoritariamente por tierra (76 %) y tiende a elegir destinos dentro de su misma región (73 %). Para los actores locales, esto sugiere que la accesibilidad terrestre, la respuesta directa a consultas y la claridad en los precios son aspectos logísticos fundamentales, antes que apostar únicamente por publicidad masiva o paquetes estandarizados.`;

export const REGIONAL_DATA = [
  {
    id: "caribe",
    colorTheme: "sky",
    title: "Caribe",
    code: "V-CAR",
    iconName: "PieChart",
    stat1: "36",
    label1: "Decisión neta<br/>por costo",
    stat2: "76",
    label2: "Reserva directa<br/>y en línea"
  },
  {
    id: "amazonia",
    colorTheme: "emerald",
    title: "Amazonía",
    code: "V-AMA",
    iconName: "Users",
    stat1: "41",
    label1: "Visita a<br/>familiares",
    stat2: "23",
    label2: "Motivación por<br/>red cercana"
  },
  {
    id: "orinoquia",
    colorTheme: "amber",
    title: "Orinoquía",
    code: "V-ORI",
    iconName: "Compass",
    stat1: "36",
    label1: "Uso de vehículo<br/>particular",
    stat2: "28",
    label2: "Prioriza turismo<br/>de naturaleza"
  },
  {
    id: "pacifico",
    colorTheme: "purple",
    title: "Pacífico",
    code: "V-PAC",
    iconName: "Activity",
    stat1: "52",
    label1: "Turismo local e<br/>intrarregional",
    stat2: "22",
    label2: "Viajes no<br/>vacacionales"
  }
];

export const MATRIX_DATA = [
  {
    id: "canal",
    altoIconName: "Smartphone",
    bajoIconName: "PhoneCall",
    altoValue: "36",
    altoLabel: "Uso de Aplicaciones y OTA",
    bajoValue: "66",
    bajoLabel: "Reserva vía Teléfono o Chat",
    bajoBadge: null
  },
  {
    id: "transporte",
    altoIconName: "Plane",
    bajoIconName: "Bus",
    altoValue: "32",
    altoLabel: "Viaja en transporte Aéreo",
    bajoValue: "36",
    bajoLabel: "Dependencia del Bus Intermunicipal",
    bajoBadge: "Crítica"
  },
  {
    id: "hospedaje",
    altoIconName: "Building",
    bajoIconName: "Home",
    altoValue: "64",
    altoLabel: "Prefiere Hotelería Formal",
    bajoValue: "36",
    bajoLabel: "Alojamiento de Familiares y Amigos",
    bajoBadge: null
  },
  {
    id: "sostenibilidad",
    altoIconName: "ShieldCheck",
    bajoIconName: "AlertCircle",
    altoValue: "57",
    altoLabel: "Exige iniciativas demostrables",
    bajoValue: "36",
    bajoLabel: "La tiene en consideración",
    bajoBadge: null
  }
];

export const DIRECTRICES_DATA = {
  segmentoA: {
    titulo: "Oportunidad de Captación",
    items: [
      "La tarifa pasa a un segundo plano ante el valor.",
      "Requiere **canales digitales impecables**.",
      "Demanda hotelería de alto estándar y **sostenibilidad genuina**."
    ]
  },
  segmentoB: {
    titulo: "Oportunidad de Captación",
    items: [
      "El canal de ventas debe ser **directo y conversacional** (chat).",
      "No pagan alojamiento; dependen de conexiones familiares.",
      "El ticket se debe concentrar en **pasadías, alimentación y experiencias**."
    ]
  }
};
