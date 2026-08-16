export const modulo1Data = {
  header: {
    label: "Módulo 1",
    titlePart1: "Gobernanza y",
    titlePart2: "Turismo Comunitario",
    description: "Un modelo organizativo campesino o indígena donde la asamblea local planifica, gestiona y distribuye equitativamente los dividendos del territorio.",
    image: "/assets/images/curso_ilustracion_trabajo_equipo.webp",
    theme: {
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      accent1: "bg-indigo-200/50",
      accent2: "bg-blue-200/50",
      badgeBg: "bg-white/60",
      badgeText: "text-indigo-700",
      badgeBorder: "border-indigo-200",
      gradientText: "from-indigo-600 to-blue-500"
    }
  },
  audioPodcast: {
    title: "¿Qué es el turismo comunitario y la gobernanza?",
    subtitle: "Audio Instructor",
    audioSrc: "/assets/audios/Modulo1-A1.wav",
    transcript: `
      <p>Hola a todos. Vamos a empezar entendiendo qué es el turismo comunitario. No existe un solo modelo ni una sola forma de hacerlo. El turismo comunitario ocurre cuando los actores locales de un territorio —ya sean asociaciones, cooperativas, empresas locales, o grupos de la comunidad— se organizan para gestionar y ofrecer servicios turísticos. Lo que lo hace diferente es que el control y las decisiones importantes se toman en conjunto por la comunidad, no por un solo dueño externo.</p>
      <br/>
      <p>A esa capacidad de organizarse y tomar decisiones conjuntas le llamamos “gobernanza”, y su herramienta principal suele ser la asamblea o la junta. En la práctica, se ven dos cosas: cuando la gobernanza funciona y los diferentes actores se ponen de acuerdo, se logra una “sinergia”, que es cuando el trabajo rinde para todos. Pero cuando la comunicación falla o hay desconfianza por los recursos, se produce lo que llamamos “fatiga comunitaria”, donde empiezan los conflictos. El turismo comunitario es un modelo de gestión que depende de cómo se organice la gente. Abajo van a encontrar una herramienta para ver cómo se ven estas dos situaciones.</p>
    `
  },
  interactivePillars: {
    title: "Autonomía y Defensa del Territorio",
    description: "El turismo rural comunitario no es una simple actividad recreativa, es una <strong>herramienta de resistencia y conservación</strong>. Al organizar a las familias locales para prestar servicios de guianza o gastronomía, se frena el extractivismo de capitales externos y se consolida la autonomía económica del territorio. Haz clic en las tarjetas para descubrir los pilares:",
    items: [
      {
        id: 'asamblea',
        title: "Asamblea",
        subtitle: "Órgano de decisión",
        avatar: "avatarHost1.svg",
        color: "from-blue-500 to-indigo-600",
        bgLight: "bg-blue-50",
        textDark: "text-blue-900",
        indicatorBg: "group-hover:bg-indigo-300",
        contentIntro: "El corazón de la Gobernanza.",
        contentBody: "Es el órgano supremo donde todas las decisiones estructurales y financieras se someten a votación comunitaria horizontal. Aquí no hay un “jefe” dueño de todo, la comunidad manda."
      },
      {
        id: 'identidad',
        title: "Identidad",
        subtitle: "Producto Genuino",
        avatar: "avatarDeleite.svg",
        color: "from-emerald-500 to-green-600",
        bgLight: "bg-emerald-50",
        textDark: "text-emerald-900",
        indicatorBg: "group-hover:bg-emerald-300",
        contentIntro: "Prohibida la folclorización.",
        contentBody: "Se vende la vida campesina real (el ordeño, la siembra, las arepas) sin inventar espectáculos falsos ni disfraces para complacer expectativas irreales del turista."
      },
      {
        id: 'redistribucion',
        title: "Redistribución",
        subtitle: "Economía local",
        avatar: "avatarRespond.svg",
        color: "from-amber-500 to-orange-600",
        bgLight: "bg-amber-50",
        textDark: "text-amber-900",
        indicatorBg: "group-hover:bg-amber-300",
        contentIntro: "Beneficio Colectivo.",
        contentBody: "Las utilidades netas del turismo no se van a la capital. Se reinvierten en infraestructura local (escuelas, acueductos) y fondos de emergencia para las familias de la vereda."
      }
    ]
  },
  reflectionTabs: {
    badge: "Dinámica de Reflexión",
    title: "De la Teoría a la Práctica",
    description: "Selecciona una pestaña para comprender la fricción natural entre las reglas de papel y los desafíos humanos en las veredas.",
    items: [
      {
        id: 'ideal',
        label: "Visión Idealizada",
        title: "Sinergia Perfecta",
        description: "Toda la vereda respeta los estatutos de convivencia. Los guías, cocineras y dueños de fincas dividen los ingresos con exactitud matemática, y reinvierten felizmente en el salón comunal.",
        icon: 'Target',
        colors: {
          btnActiveBg: "bg-emerald-600",
          btnActiveText: "text-white",
          btnIdleBg: "bg-slate-100",
          btnIdleText: "text-slate-500",
          panelBg: "bg-emerald-50",
          panelBorder: "border-emerald-200",
          iconColor: "text-emerald-500",
          titleColor: "text-emerald-800",
          descColor: "text-emerald-700"
        }
      },
      {
        id: 'desgaste',
        label: "Desgaste Práctico",
        title: "Fatiga Comunitaria",
        description: "Aparición de liderazgos caciquistas que acaparan a los turistas. Las familias se cansan de las largas reuniones, surge la desconfianza por el manejo de la caja menor y se rompe el tejido social por la envidia económica.",
        icon: 'AlertTriangle',
        colors: {
          btnActiveBg: "bg-rose-600",
          btnActiveText: "text-white",
          btnIdleBg: "bg-slate-100",
          btnIdleText: "text-slate-500",
          panelBg: "bg-rose-50",
          panelBorder: "border-rose-200",
          iconColor: "text-rose-500",
          titleColor: "text-rose-800",
          descColor: "text-rose-700"
        }
      }
    ]
  }
};
