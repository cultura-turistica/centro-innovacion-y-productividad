export const modulo1Data = {
  header: {
    title: "Módulo 1: Descubrimiento y Empatía",
    description: "La empatía empresarial no es ser amable; es comprender profundamente el dolor de tu cliente. Aprende a observar en lugar de solo encuestar.",
    bgImage: "/assets/images/caso_awasi.webp"
  },
  podcast: {
    title: "Empatía pura en terreno",
    audioSrc: "/assets/audios/C6-M1.wav",
    transcript: "La verdadera empatía no se logra enviando un formulario de Google de 20 preguntas por WhatsApp. Se logra observando a tu cliente en su hábitat natural, cuando está frustrado y tratando de resolver un problema real. Observar el lenguaje no verbal te dará hallazgos (insights) que ninguna encuesta cuantitativa te revelará. Sal de la oficina y habla con ellos."
  },
  intro: {
    title: "La Regla de Oro Empresarial",
    content: "\"No puedes conocer realmente a tu cliente si nunca has hablado con él u observado cómo hace algo. Lo que la gente dice en encuestas es distinto a lo que hace.\""
  },
  comparacion: {
    leftTitle: "Investigación de Mercado",
    leftContent: "Sondear la opinión superficial de 100 personas mediante encuestas para ver tendencias estadísticas. Sirve para hacer publicidad, pero NO para diseñar el núcleo del producto.",
    rightTitle: "Investigación de Usuarios",
    rightContent: "Observar profundamente el comportamiento de un grupo pequeño (8-15 personas) en contextos reales. Escuchar su historia e interactuar para encontrar hallazgos auténticos (Empatía pura)."
  },
  casoReal: {
    empresa: "Plataformas de Alojamiento",
    titulo: "El poder de la observación cualitativa",
    contexto: "Durante los primeros años, el equipo fundador notó que las personas reservaban habitaciones pero la retención era baja. Parecía un problema de precios. El equipo estaba a punto de gastar todo su capital en una campaña de descuentos masivos para atraer usuarios.",
    pregunta: "¿Qué decisión tomarías tú como líder para resolver la retención?",
    opciones: [
      {
        texto: "Lanzar la campaña de descuentos. El precio es lo único que importa.",
        retroalimentacion: "Al bajar el precio, atraes turistas que solo buscan ofertas, no lealtad. Destruirías tu margen de ganancia.",
        esCorrecta: false
      },
      {
        texto: "Pausar el marketing, viajar y observar a los clientes en sus casas.",
        retroalimentacion: "¡Exacto! Decidieron no asumir y fueron a observar.",
        esCorrecta: true
      }
    ],
    revelacion: "Se comprendió que el usuario no buscaba únicamente 'una habitación económica', sino que tenía una motivación social: 'Quiero sentir que pertenezco a la cultura local'.<br/><br/>Al viajar y sentarse a tomar café en las salas de sus primeros usuarios, entendieron que el verdadero valor era la 'conexión humana'. Modificaron las interfaces para destacar historias reales de anfitriones y la retención se disparó sin gastar un dólar en descuentos."
  },
  ejercicio: {
    touristName: "Carlos (Turista de negocios frecuente)",
    context: "Estás en el lobby de un hotel. Carlos está visiblemente frustrado esperando su taxi.",
    nodes: {
      "start": {
        touristMessage: "Odio perder tiempo en estos lobbies. Siempre pasa lo mismo.",
        options: [
          { text: "¿Qué opinas del diseño del lobby? ¿Te gusta?", nextNode: "superficial" },
          { text: "Cuéntame más, ¿qué pasó la última vez que intentaste pedir un taxi?", nextNode: "deep1" }
        ]
      },
      "superficial": {
        touristMessage: "Sí, es bonito, supongo. Pero eso no me ayuda a llegar a mi reunión.",
        options: [
          { text: "Entiendo. ¿Te gustaría que tuviéramos revistas aquí?", nextNode: "fail" }
        ]
      },
      "fail": {
        touristMessage: "No, solo quiero llegar a tiempo. Mejor me voy a buscar un Uber a la calle.",
        options: [] // End node
      },
      "deep1": {
        touristMessage: "La última vez pedí un taxi por la app del hotel, decía 5 minutos y tardó 25. Casi pierdo mi vuelo.",
        options: [
          { text: "¿Y qué solución improvisaste en ese momento de estrés?", nextNode: "deep2" },
          { text: "¿Quieres que te dé un descuento por la molestia?", nextNode: "superficial_discount" }
        ]
      },
      "superficial_discount": {
        touristMessage: "El descuento no me devuelve los 25 minutos. El problema es la incertidumbre.",
        options: [] // End node
      },
      "deep2": {
        touristMessage: "Le pagué a un tipo de entregas que pasaba en moto para que me llevara al metro. Fue un desastre, pero llegué.",
        options: [
          { text: "Si pudieras tener una solución mágica ahora mismo, ¿cuál sería?", nextNode: "win" }
        ]
      },
      "win": {
        touristMessage: "Simplemente quiero saber en un mapa DÓNDE está el taxi real, no un estimado falso. Si sé que viene lejos, me quedo en mi habitación trabajando.",
        options: [] // End node
      }
    }
  }
};
