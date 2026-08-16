export const modulo4Data = {
  header: {
    label: "Módulo 4",
    titlePart1: "La Red Asociativa",
    titlePart2: "(Trabajo en Colectivo)",
    description: "Unirse no es simplemente amontonarse. La asociatividad exige delegar la autoridad productiva y confiar plenamente en los roles de los vecinos.",
    image: "/assets/images/redes.webp",
    imageContainerClass: "",
    theme: {
      bg: "bg-white",
      border: "border-indigo-50",
      accent1: "bg-indigo-50",
      accent2: "bg-blue-50",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      badgeBorder: "",
      gradientText: "from-indigo-600 to-blue-500"
    },
    cta: {
      label: "Escuchar Podcast",
      url: "#podcast"
    }
  },
  audioPodcast: {
    title: "La Red Asociativa y los Roles",
    subtitle: "Audio Instructor",
    audioSrc: "/assets/audios/Modulo1-A2.wav",
    transcript: `
      <p>Pasemos ahora al concepto de la “red asociativa”. En una iniciativa de turismo, una sola persona, o incluso un solo negocio, rara vez puede hacerlo todo solo. Una red asociativa es cuando los diferentes actores del territorio se unen y se reparten las tareas según lo que cada uno sabe hacer mejor, formando una cadena.</p>
      <br />
      <p>Por ejemplo, hay quienes tienen mucha facilidad para negociar, ellos asumen el rol de <strong>Voceros</strong>. Otros son muy organizados con los números, esos asumen el rol <strong>Financiero</strong> para llevar las cuentas claras. El que conoce bien el terreno y tiene manejo de grupos, asume el rol de <strong>Guía</strong>. Y el que sabe manejar la tecnología para vender la ruta, es el <strong>Creador</strong>. Trabajar en red significa que cada eslabón se enfoca en hacer su parte muy bien, y confía en que los demás harán la suya para que el turista tenga una buena experiencia. En el ejercicio que sigue, van a poder ver cómo se acomoda cada uno de estos roles.</p>
    `
  },
  theoryIntro: {
    title: "Anatomía del Equipo Comunitario",
    paragraphs: [
      "El 90% de los proyectos de turismo rural fracasan no por falta de atractivo natural, sino por <strong>la desintegración de la red interna</strong>. La asociatividad es la integración voluntaria donde diferentes nodos (fincas posadas, transportistas, guías, artesanos) unen sus eslabones.",
      "Exige tres pilares: <strong>Confianza plena</strong> en el cumplimiento ajeno, <strong>Objetivos unificados</strong> para la rentabilidad de la vereda, y <strong>Complementariedad técnica</strong> (asignar tareas con base en habilidades naturales y no favoritismos)."
    ],
    theme: {
      gradient: "from-indigo-500 to-blue-500",
      bgBlur: "bg-transparent",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      shadow: "shadow-blue-100/40",
      border: "border-blue-50"
    }
  },
  matchGame: {
    badge: "Dinámica 1: Roles Claros",
    title: "Complementariedad Operativa",
    description: "Toca un talento humano y luego asígnalo a su estación de responsabilidad tocando la casilla correspondiente.",
    rolesTitle: "1. Selecciona un Rol",
    zonesTitle: "2. Asígnalo a una Estación",
    roles: [
      { id: 'vocero', name: 'Vocero Comunitario', matchId: 'alianzas', icon: '/assets/images/avatars/avatarJobSocial.svg' },
      { id: 'financiero', name: 'Financiero', matchId: 'cuentas', icon: '/assets/images/avatars/avatarBusiness.svg' },
      { id: 'guia', name: 'Guía Local', matchId: 'recorridos', icon: '/assets/images/avatars/avatarHost1.svg' },
      { id: 'creador', name: 'Creador Digital', matchId: 'redes', icon: '/assets/images/avatars/avatarDeleite.svg' }
    ],
    zones: [
      { id: 'alianzas', label: 'Gestión de Alianzas' },
      { id: 'cuentas', label: 'Libros de Cuentas' },
      { id: 'recorridos', label: 'Líder de Recorridos' },
      { id: 'redes', label: 'Marketing Visual' }
    ],
    success: {
      title: "¡Equipo Consolidado!",
      message: "Cada eslabón está enfocado en su fortaleza. Cuando todos confían en la labor del otro, la red asociativa funciona como un reloj suizo."
    }
  },
  nodeChain: {
    badge: "Dinámica 2: Cadena de Valor",
    title: "Consolidar la Red",
    description: "Toca cada uno de los 4 nodos logísticos rurales para enlazar la experiencia del viajero mediante una comunicación fluida.",
    nodes: [
      { id: 1, label: "Guianza", icon: 'Compass' },
      { id: 2, label: "Transporte", icon: 'Truck' },
      { id: 3, label: "Hospedaje", icon: 'Home' },
      { id: 4, label: "Cocina Local", icon: 'UtensilsCrossed' }
    ],
    success: {
      title: "¡El encadenamiento está asegurado!",
      message: "Si un solo nodo de la vereda falla (ej. el transporte rural se retrasa o la cocinera no recibe el mensaje), la cadena completa colapsa frente al turista. <strong>La comunicación oportuna blinda la red.</strong>"
    }
  }
};
