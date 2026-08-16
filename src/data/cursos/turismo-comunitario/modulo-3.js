export const modulo3Data = {
  header: {
    label: "Módulo 3",
    titlePart1: "Tesoros Locales:",
    titlePart2: "El Patrimonio",
    description: "En el turismo cultural, el oro no se extrae, el oro se muestra y se protege. Conoce las dos caras de la moneda de nuestra riqueza.",
    image: "/assets/images/avatars/patrimonio.svg",
    imageContainerClass: "bg-white rounded-full p-4 border border-amber-50",
    theme: {
      bg: "bg-amber-50",
      border: "border-amber-100",
      accent1: "bg-amber-200/50",
      accent2: "bg-orange-200/50",
      badgeBg: "bg-white/60",
      badgeText: "text-amber-700",
      badgeBorder: "border-amber-200",
      gradientText: "from-amber-600 to-orange-500"
    }
  },
  theoryIntro: {
    title: "La Materia Prima del Turismo",
    paragraphs: [
      "El Patrimonio rural es la herencia cultural viva de una comunidad, no una pieza de museo. Es la <strong>materia prima principal</strong> de cualquier proyecto comunitario. Sin embargo, su mercantilización extrema puede llevar a la <em>folclorización</em> (actuar tradiciones falsas o exageradas únicamente para satisfacer al forastero).",
      "El reto es transformar ese patrimonio en un producto turístico sin que pierda su dignidad, dividiéndolo conceptualmente en dos vertientes clásicas:"
    ],
    theme: {
      gradient: "from-amber-400 to-orange-600",
      bgBlur: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      shadow: "shadow-amber-100/40",
      border: "border-amber-50"
    }
  },
  comparisonCards: {
    badge: "Casos Reales",
    title: "Patrimonio Tangible vs Intangible",
    description: "Pasa el cursor (o toca) sobre cada caso de estudio para revelar el impacto del turismo bien gestionado.",
    items: [
      {
        id: 'tangible',
        tag: 'Tangible',
        location: 'Barichara, Santander',
        title: 'El rescate de la tapia pisada',
        icon: 'Castle',
        colorClass: 'text-amber-600',
        bgClass: 'bg-amber-50',
        borderClass: 'border-amber-200',
        hoverClass: 'hover:shadow-amber-100',
        before: 'Las casas patrimoniales de tierra se derrumbaban al ser percibidas como “símbolo de pobreza”, reemplazadas por ladrillo industrial.',
        impact: 'El turismo comunitario de alto valor arquitectónico convirtió la tapia en un activo económico. Los habitantes locales fundaron escuelas taller de oficios tradicionales para restaurar fachadas, multiplicando por 10 el valor de sus propiedades y salvaguardando el paisaje cultural que hoy es monumento nacional.'
      },
      {
        id: 'intangible',
        tag: 'Intangible',
        location: 'Paisaje Cultural Cafetero, Quindío',
        title: 'La cultura del recolector',
        icon: 'Music',
        colorClass: 'text-orange-600',
        bgClass: 'bg-orange-50',
        borderClass: 'border-orange-200',
        hoverClass: 'hover:shadow-orange-100',
        before: 'Los cantos de vaquería y la técnica de recolección de café manual estaban muriendo por el desinterés de los jóvenes rurales que migraban a la ciudad.',
        impact: 'Al estructurar la “Ruta de la Finca Tradicional”, el turista paga por la experiencia viva. Los abuelos volvieron a ser los maestros (guías principales), el dialecto campesino se reconoció como valor cultural y los jóvenes encontraron en el turismo una razón económica para preservar la herencia de sus ancestros.'
      }
    ]
  }
};
