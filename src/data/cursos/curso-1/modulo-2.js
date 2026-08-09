export const modulo2Data = {
  header: {
    label: "Módulo 2",
    titlePart1: "La Sostenibilidad",
    titlePart2: "Rural",
    description: "Un delicado equilibrio ecosistémico donde conservar el agua importa tanto como asegurar el alimento en la mesa de las familias campesinas.",
    image: "/assets/images/avatars/naturaleza.svg",
    imageContainerClass: "bg-white rounded-full p-4 border border-emerald-50",
    theme: {
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent1: "bg-emerald-200/50",
      accent2: "bg-teal-200/50",
      badgeBg: "bg-white/60",
      badgeText: "text-emerald-700",
      badgeBorder: "border-emerald-200",
      gradientText: "from-emerald-600 to-teal-500"
    }
  },
  accordion: {
    badge: "Aplicación de Ejes",
    title: "Acciones Fundamentales",
    description: "Haz clic sobre cada pilar para revisar las medidas de mitigación requeridas en un sendero ecológico activo.",
    items: [
      {
        id: 'ambiental',
        title: 'Ambiental',
        subtitle: 'Protección Ecosistémica',
        icon: 'Leaf',
        colorClass: 'text-green-600',
        bgClass: 'bg-green-50',
        borderClass: 'border-green-200',
        contentTitle: 'Manejo de Capacidad de Carga:',
        contentDesc: 'Evaluar cuántos caminantes soporta diariamente el sendero sin provocar erosión severa ni espantar a la avifauna residente.'
      },
      {
        id: 'social',
        title: 'Social',
        subtitle: 'Inclusión Intergeneracional',
        icon: 'Users',
        colorClass: 'text-orange-600',
        bgClass: 'bg-orange-50',
        borderClass: 'border-orange-200',
        contentTitle: 'Salvaguardia de Saberes:',
        contentDesc: 'Incorporar a los abuelos en el recorrido turístico no como adornos, sino como portadores de la memoria viva y guardianes de las plantas medicinales.'
      },
      {
        id: 'economico',
        title: 'Económico',
        subtitle: 'Viabilidad Financiera',
        icon: 'Coins',
        colorClass: 'text-blue-600',
        bgClass: 'bg-blue-50',
        borderClass: 'border-blue-200',
        contentTitle: 'Cálculo de Depreciación:',
        contentDesc: 'La rentabilidad debe prever el deterioro físico. Apartar fondos permanentes para la reparación de puentes, señalética y equipos de montaña.'
      }
    ]
  },
  intro: {
    title: "Los Tres Ejes de la Sostenibilidad",
    paragraphs: [
      "La sostenibilidad territorial es una articulación de tres fuerzas. Si el proyecto genera dinero pero agota los nacederos de agua, se convierte en una operación extractivista condenada al colapso. Si protege estrictamente la biodiversidad pero las familias continúan marginadas económicamente, el modelo es inviable y propicia el desplazamiento.",
      "Para que el tejido rural perdure, el beneficio económico (superávit), el respeto social (inclusión) y la capacidad de carga ambiental deben operar como un engranaje indisoluble."
    ],
    theme: {
      gradient: "from-emerald-400 to-teal-600",
      bgBlur: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      shadow: "shadow-emerald-100/40",
      border: "border-emerald-50"
    }
  }
};
