export const modulo1Data = {
  header: {
    title: "Identidad vs Imagen",
    description: "Comprende la diferencia fundamental entre lo que eres y lo que los demás perciben de ti.",
    icon: "Fingerprint"
  },
  content: {
    mentor: {
      name: "Emma",
      role: "Estratega de Marca",
      avatar: "/assets/images/avatars/avatarHost1.svg",
      dialogues: [
        "¡Hola! Construir una marca es mucho más que diseñar un logo bonito.",
        "Imagina tu marca como una persona. La <strong>Identidad</strong> es su carácter, sus valores y su esencia (lo que eres por dentro).",
        "Por otro lado, la <strong>Imagen</strong> es cómo te vistes y cómo te perciben los demás (tu reputación y aspecto exterior).",
        "Nuestro trabajo en este curso es alinear ambas: que tu imagen exterior refleje fielmente tu identidad interior."
      ]
    },
    sections: [
      {
        title: "La Identidad de Marca (Brand Identity)",
        content: "Es el conjunto de elementos que tú controlas: tu propósito, tus valores, tu voz, tu paleta de colores, tu tipografía y tu logo. Es tu ADN."
      },
      {
        title: "La Imagen de Marca (Brand Image)",
        content: "Es la percepción que existe en la mente de tus clientes. No la controlas directamente, pero puedes influir en ella fuertemente a través de una Identidad coherente."
      }
    ],
    comparisonData: {
      badge: "El Espejo de la Marca",
      title: "Lo que Eres vs. Lo que Perciben",
      description: "Entender esta diferencia es el primer paso para construir una estrategia de marca sólida. Exploremos un caso de la vida real.",
      items: [
        {
          id: "identidad",
          icon: "Sparkles",
          borderClass: "border-rose-400",
          hoverClass: "hover:shadow-rose-100",
          bgClass: "bg-rose-100",
          colorClass: "text-rose-600",
          tag: "Emisión",
          location: "De adentro hacia afuera",
          title: "Identidad (Brand Identity)",
          before: "Es lo que la empresa <b>decide ser</b>. Sus valores, propósito, diseño de productos y forma de hablar.<br/><br/><b>Ejemplo Práctico:</b> Una empresa tecnológica se diseña a sí misma para ser “innovadora, de diseño minimalista y enfocada en la privacidad del usuario”. Fabrican empaques limpios y tienen tiendas tipo boutique.",
          impact: "<b>En la práctica:</b> Son todas las decisiones de diseño (logo, tienda, colores, tono de los empleados) sobre las cuales la empresa tiene 100% de control."
        },
        {
          id: "imagen",
          icon: "Sparkles",
          borderClass: "border-indigo-400",
          hoverClass: "hover:shadow-indigo-100",
          bgClass: "bg-indigo-100",
          colorClass: "text-indigo-600",
          tag: "Recepción",
          location: "De afuera hacia adentro",
          title: "Imagen (Brand Image)",
          before: "Es lo que el consumidor <b>termina percibiendo</b>. Se forma por sus experiencias y lo que escucha de otros.<br/><br/><b>Ejemplo Práctico:</b> A pesar del diseño, los usuarios perciben la marca tecnológica como “un símbolo de status costoso pero muy confiable y fácil de usar”.",
          impact: "<b>En la práctica:</b> Es el espacio mental que ocupas en la cabeza del cliente. No tienes control directo, pero la buena Identidad ayuda a moldearla."
        }
      ]
    },
    quote: {
      quote: "Tu marca es lo que la gente dice de ti cuando no estás en la habitación.",
      author: "Jeff Bezos",
      role: "Fundador de Amazon"
    },
    gridData: {
      title: "Elementos de la Identidad Visual",
      description: "Los bloques de construcción que forman el rostro de tu marca.",
      items: [
        { title: "El Logo", description: "La firma visual y el ancla de tu identidad.", color: "bg-rose-100 text-rose-800" },
        { title: "Paleta de Color", description: "Los tonos que despiertan emociones específicas.", color: "bg-indigo-100 text-indigo-800" },
        { title: "Tipografía", description: "La forma en la que tus palabras “suenan” visualmente.", color: "bg-emerald-100 text-emerald-800" }
      ]
    }
  }
};
