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
