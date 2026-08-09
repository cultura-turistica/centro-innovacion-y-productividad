export const modulo4Data = {
  header: {
    title: "Personalidad Tipográfica",
    description: "Visualiza cómo el estilo de la fuente de texto afecta drásticamente el tono y la intención de tu mensaje.",
    icon: "Type"
  },
  mentor: {
    name: "Marcus",
    role: "Diseñador Tipográfico",
    avatar: "/assets/images/avatars/afro.svg",
    intro: "Las palabras importan, pero la forma en que se ven importa igual. Escribe el nombre de tu marca y veamos cómo “suena” visualmente."
  },
  fonts: [
    {
      id: "serif",
      label: "Serif (Tradicional)",
      fontFamily: "font-serif",
      traits: ["Elegante", "Clásica", "Confiable", "Institucional"],
      description: "Las fuentes Serif (con remates) comunican tradición y respeto. Son perfectas para firmas de abogados, periódicos o marcas de lujo con legado."
    },
    {
      id: "sans",
      label: "Sans-Serif (Moderna)",
      fontFamily: "font-sans",
      traits: ["Limpia", "Moderna", "Accesible", "Minimalista"],
      description: "Sin remates. Comunican claridad, modernidad y tecnología. Es el estándar actual para startups y marcas digitales."
    },
    {
      id: "mono",
      label: "Monospace (Técnica)",
      fontFamily: "font-mono",
      traits: ["Técnica", "Precisa", "Retro", "Programación"],
      description: "Cada letra ocupa el mismo ancho. Da un aire de máquina de escribir, código fuente o brutalismo digital."
    },
    {
      id: "script",
      label: "Script (Cursiva/Manuscrita)",
      fontFamily: "font-[cursive]", // Usaremos una clase Tailwind custom si es necesario, o cursive genérico
      traits: ["Personal", "Creativa", "Elegante", "Cercana"],
      description: "Imita la escritura a mano. Excelente para transmitir elegancia, romance, o un toque muy artesanal y personal."
    }
  ],
  placeholderText: "Escribe tu Marca Aquí"
};
