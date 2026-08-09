export const modulo3Data = {
  header: {
    title: "Psicología del Color",
    description: "Experimenta cómo los colores cambian radicalmente la percepción emocional de tu marca.",
    icon: "Palette"
  },
  mentor: {
    name: "Sofía",
    role: "Directora de Arte",
    avatar: "/assets/images/avatars/avatarDeleite.svg",
    intro: "El color es la forma más rápida de comunicar una emoción sin usar palabras. Prueba seleccionando diferentes emociones para ver cómo muta nuestra paleta de diseño."
  },
  emotions: [
    {
      id: "trust",
      label: "Confianza & Seguridad",
      primaryColor: "blue", // Usaremos colores base de Tailwind: blue-600
      secondaryColor: "slate",
      description: "El azul transmite calma, lealtad y profesionalismo. Es el favorito de bancos, aerolíneas y empresas de tecnología.",
      exampleBrands: ["PayPal", "IBM", "Ford"]
    },
    {
      id: "passion",
      label: "Pasión & Energía",
      primaryColor: "red",
      secondaryColor: "rose",
      description: "El rojo eleva el ritmo cardíaco. Crea urgencia y despierta el apetito. Muy usado en comida rápida y marcas juveniles.",
      exampleBrands: ["Coca-Cola", "Netflix", "Nintendo"]
    },
    {
      id: "nature",
      label: "Naturaleza & Salud",
      primaryColor: "green",
      secondaryColor: "emerald",
      description: "El verde simboliza crecimiento, frescura y sostenibilidad. Ideal para productos orgánicos, finanzas (dinero) y bienestar.",
      exampleBrands: ["Whole Foods", "Starbucks", "Spotify"]
    },
    {
      id: "luxury",
      label: "Lujo & Sofisticación",
      primaryColor: "slate", // Usaremos slate-900 / black
      secondaryColor: "amber", // Acentos dorados
      description: "El negro o gris oscuro con acentos dorados comunica exclusividad, elegancia y autoridad.",
      exampleBrands: ["Chanel", "Apple", "Mercedes-Benz"]
    },
    {
      id: "creativity",
      label: "Creatividad & Misterio",
      primaryColor: "purple",
      secondaryColor: "fuchsia",
      description: "El morado combina la estabilidad del azul y la energía del rojo. Representa imaginación, realeza y magia.",
      exampleBrands: ["Twitch", "Milka", "Yahoo"]
    }
  ]
};
