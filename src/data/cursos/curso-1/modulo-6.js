export const modulo6Data = {
  header: {
    label: "Módulo 6",
    titlePart1: "Simulador de",
    titlePart2: "Casos Reales",
    description: "La teoría es el mapa, pero el territorio se conoce caminando. Analicemos experiencias verídicas de turismo comunitario en Colombia para aprender de sus aciertos y tropiezos.",
    image: "/assets/images/avatars/equipo.svg", 
    imageContainerClass: "bg-teal-50 rounded-full p-4",
    theme: {
      bg: "bg-teal-50",
      border: "border-teal-100",
      accent1: "bg-teal-200/50",
      accent2: "bg-emerald-200/50",
      badgeBg: "bg-white/60",
      badgeText: "text-teal-700",
      badgeBorder: "border-teal-200",
      gradientText: "from-teal-600 to-emerald-500"
    }
  },
  podcast: {
    title: "El Presupuesto y las Utilidades",
    subtitle: "Audio Instructor",
    audioSrc: "/assets/audios/Modulo1-A3.wav",
    transcript: `
      <p>Para terminar, vamos a ver cómo funciona el tema financiero en estos modelos organizativos. Cuando un proyecto comunitario genera utilidades, el objetivo de esos excedentes va más allá del beneficio individual.</p>
      <br />
      <p>Por lo general, una parte de esa utilidad se destina al <strong>bien común</strong>, es decir, a reinvertir en el territorio: mejorar un sendero, arreglar infraestructura local o crear un fondo de emergencia para la organización. La otra parte se destina a dar <strong>bonificaciones o pagos justos</strong> a las personas que operaron directamente los servicios, como los guías, transportadores o quienes prepararon los alimentos. La clave de la viabilidad financiera está en buscar un punto medio: si todo se va a la infraestructura, quienes trabajan el día a día se desmotivan; y si todo se va al pago individual, el destino no se desarrolla ni se mantiene. A continuación, analizaremos casos donde el manejo de recursos y roles fue fundamental.</p>
    `
  },
  intro: {
    title: "Aprender de la Realidad",
    paragraphs: [
      "El turismo rural comunitario no es una ciencia exacta. Es un <strong>organismo vivo</strong> que reacciona a factores externos (clima, mercado, vías) e internos (liderazgo, finanzas, convivencia).",
      "Los siguientes casos están basados en <em>iniciativas reales</em> de diferentes regiones de Colombia. Tu tarea es analizar qué hicieron bien, qué hicieron mal, y cuál fue la lección central que dejaron para el ecosistema del turismo."
    ],
    theme: {
      gradient: "from-teal-500 to-emerald-600",
      bgBlur: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      shadow: "shadow-teal-100/40",
      border: "border-teal-50"
    }
  },
  caseStudies: {
    badge: "Laboratorio de Análisis",
    title: "Casos de Estudio Comunitarios",
    description: "Explora las siguientes historias, identifica los errores y aciertos, y descubre la moraleja detrás de cada experiencia comunitaria.",
    cases: [
      {
        id: "caso-1",
        name: "El Espejismo de la Infraestructura",
        location: "Región Andina",
        context: "Una comunidad recibió una gran donación y construyó un eco-hotel de lujo con 20 habitaciones. Sin embargo, no tenían atractivos turísticos desarrollados en la vereda ni un plan de mercadeo.",
        mistake: "Construyeron la cama antes de invitar al huésped. Invertir todo en infraestructura sin crear una “experiencia” ni tener una estrategia comercial.",
        success: "Las instalaciones quedaron excelentes, pero sin flujo de caja para mantenerlas, se convirtieron en un elefante blanco.",
        lesson: "“El turismo no es vender camas, es vender experiencias”. La infraestructura debe crecer al mismo ritmo que la demanda y la capacidad operativa de la red."
      },
      {
        id: "caso-2",
        name: "El Rescate del Saber Ancestral",
        location: "Costa Pacífica",
        context: "Un grupo de mujeres sabedoras decidió no construir hoteles, sino abrir las puertas de sus cocinas tradicionales para enseñar a los turistas a preparar encocados y hablar sobre sus cantos.",
        mistake: "Al inicio, no estandarizaron los precios, cobrando tarifas diferentes según el cliente, lo que generó desconfianza en algunas agencias aliadas.",
        success: "Aprovecharon su <strong>patrimonio inmaterial</strong> sin necesidad de grandes inversiones. Vendieron autenticidad, algo que ninguna franquicia puede replicar.",
        lesson: "“Lo que para ti es cotidiano, para el visitante es extraordinario”. El valor de una experiencia comunitaria reside en su identidad, no en imitar el turismo masivo."
      },
      {
        id: "caso-3",
        name: "La Falsa Promesa del Liderazgo Único",
        location: "Llanos Orientales",
        context: "Un líder muy carismático logró organizar a 15 fincas para ofrecer recorridos llaneros. Él se encargaba de las ventas, los cobros y la logística. Cuando enfermó, nadie sabía cómo operar el negocio.",
        mistake: "Concentrar toda la información, los contactos y las finanzas en una sola persona, creando dependencia absoluta en lugar de empoderamiento colectivo.",
        success: "Lograron un producto turístico atractivo y de alta demanda durante el tiempo que operó.",
        lesson: "“Un líder no es quien hace todo, sino quien enseña a otros a hacerlo”. La verdadera asociatividad exige delegar roles y documentar los procesos."
      }
    ]
  }
};
