export const modulo2Data = {
  header: {
    title: "Tu Equipo: La Cámara en tu Bolsillo",
    description: "Desde la histórica Kodak Brownie hasta tu Smartphone moderno. Conoce tu herramienta y cómo tomar el control manual.",
    bgImage: "/assets/images/fotografia/macro_phone_lens_1777061014302.webp"
  },
  anatomy: {
    badge: "Anatomía de tu Smartphone 📱",
    title: "Los controles ocultos",
    description: "Conoce las zonas de tu celular que a menudo pasamos por alto al tomar fotos.",
    items: [
      {
        id: "focus",
        title: "Enfoque Táctil",
        description: "Toca la pantalla para decirle al lente dónde condensar la luz. La cámara ajustará la nitidez sobre ese punto exacto.",
        icon: "Focus"
      },
      {
        id: "exposure",
        title: "Exposición (Brillo)",
        description: "Desliza el dedo hacia arriba o hacia abajo (en iPhone) o usa el deslizador para hacer la foto más clara o oscura antes de disparar.",
        icon: "Sun"
      },
      {
        id: "modes",
        title: "Modos de Disparo",
        description: "Automático es rápido, pero usar modos como “Pro” o “Retrato” te da control sobre la profundidad de campo y la velocidad.",
        icon: "Sliders"
      }
    ]
  },
  classicVsModern: {
    badge: "Evolución",
    title: "Cámaras Clásicas vs Modernas",
    items: [
      {
        title: "Kodak Brownie (1924)",
        description: "Las primeras cámaras “Point & Shoot”. Todo preconfigurado: solo apuntabas y disparabas sin control sobre la luz.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        themeColor: "#475569"
      },
      {
        title: "El Control Moderno: MAPS",
        description: "<strong>M</strong>anual, <strong>A</strong>pertura (Prioridad), <strong>P</strong>rograma, <strong>S</strong>hutter (Velocidad). Tú decides.",
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&w=800&q=80",
        themeColor: "#10b981"
      }
    ]
  },
  accessories: {
    badge: "Accesorios",
    title: "Esenciales para tu Celular 🎒",
    items: [
      {
        title: "Trípode Pequeño",
        description: "Vital para fotos nocturnas o ríos efecto seda (evita el movimiento de la mano).",
        icon: "Camera",
        image: "/assets/images/fotografia/smartphone_tripod_1777058924777.webp"
      },
      {
        title: "Lentes Clip-on",
        description: "Añaden características especiales como <strong>Macro</strong> o <strong>Gran Angular</strong> a la lente de tu celular.",
        icon: "Maximize",
        image: "/assets/images/fotografia/macro_phone_lens_1777061014302.webp"
      }
    ]
  },
  proTip: {
    title: "Tip Profesional",
    paragraphs: [
      "Si dejas el dedo presionado en la pantalla (iPhone/Galaxy), se activará el bloqueo AE/AF (Bloqueo de Exposición y Enfoque). Esto te permite reencuadrar sin que la cámara intente re-enfocar automáticamente."
    ]
  }
};
