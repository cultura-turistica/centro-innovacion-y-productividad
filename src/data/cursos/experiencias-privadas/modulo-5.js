export const modulo5Data = {
  themeColor: "#10b981",
  photoHeader: {
    title: "Módulo 5: Ciclo de Sense & Respond",
    description: "En innovación, el producto NUNCA está 'terminado'. Se convierte en una conversación constante de mejora infinita basada en datos.",
    bgImage: "/assets/images/caso_xcaret.webp"
  },
  audioPodcast: {
    title: "El Producto Vivo",
    audioSrc: "/assets/audios/C6-M5.wav",
    transcript: "El trabajo no termina cuando lanzas tu experiencia; de hecho, ahí apenas empieza. Uno de los mayores errores es creer que tu servicio debe salir perfecto y con todos los detalles desde el primer día. Al igual que en la televisión donde puedes comprar un plan básico y luego sumarle canales, tus servicios también se pueden versionar. Aquí entra la palabra clave: 'Iterar'. Iterar es probar diferentes soluciones al menor costo posible y aprender a fallar rápido. Mantén firme el corazón de tu experiencia, y concéntrate en hacer mejoras rápidas y baratas sobre eso. Escucha, prueba y ajusta, pero sin perder tu esencia."
  },
  comparisonBlock: {
    title: "Sense & Respond",
    leftTheme: "slate",
    rightTheme: "emerald",
    producto: {
      title: "Sentir (Sense)",
      content: "No escuches solo opiniones, escucha a los datos operacionales. Mide tasas de retención (¿vuelven?), el NPS y los puntos de congestión en tiempo real."
    },
    experiencia: {
      title: "Responder (Respond)",
      content: "Si un servicio te cuesta una fortuna y el turista ni lo nota, elimínalo hoy. Si adoran un pequeño detalle barato, poténcialo y vuélvelo tu bandera comercial."
    }
  },
  interactiveCaseStudy: {
    empresa: "Parque Xcaret (México)",
    titulo: "Iteración basada en datos de fricción operativa",
    contexto: "Durante una temporada alta, la administración notó mediante datos operativos que a las 4:00 PM el nivel de satisfacción general caía en un sector específico del parque. Hacía mucho calor, los niños lloraban y las familias estaban exhaustas, creando un cuello de botella.",
    pregunta: "¿Qué acción de 'Responder' (Respond) tomarías?",
    opciones: [
      {
        texto: "Mandar una encuesta por email al día siguiente preguntando por qué estaban enojados.",
        retroalimentacion: "La encuesta no resuelve el problema en el momento de dolor. Cuando el turista responda, ya estará frustrado.",
        esCorrecta: false
      },
      {
        texto: "Desplegar carritos con agua y personajes lúdicos a las 3:45 PM en esa zona específica.",
        retroalimentacion: "¡Respuesta Ágil! Resolviste la fricción operativa en tiempo real basándote en los datos.",
        esCorrecta: true
      }
    ],
    revelacion: "En solo 48 horas el equipo de operaciones tomó medidas ágiles: Instalaron carritos sorpresa con aguas frescas y desplegaron personajes lúdicos (como guacamayas) exactamente en esos cuellos de botella geográficos a las 3:45 PM. La crisis de satisfacción se evaporó inmediatamente y se convirtió en un momento de deleite para las familias cansadas."
  },
  matrizPriorizacion: {
    title: "El Product Roadmap (Hoja de Ruta)",
    instructions: "Como tu producto ahora está vivo y recibe sugerencias de manera constante, no puedes ejecutar todas las ideas al tiempo o crearás caos. Arrastra estas iniciativas a la matriz de Impacto vs. Esfuerzo para priorizarlas:",
    items: [
      { id: 'item1', text: "Ofrecer agua fría gratis al check-in en verano" },
      { id: 'item2', text: "Reconstruir toda la piscina del hotel" },
      { id: 'item3', text: "Cambiar el color del botón de la App" },
      { id: 'item4', text: "Construir un software propio de reservas desde cero" },
      { id: 'item5', text: "Alianza con guías turísticos locales (comisión)" },
    ]
  }
};
