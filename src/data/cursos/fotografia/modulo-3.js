export const modulo3Data = {
  header: {
    title: "Configuración y Flujo de Trabajo",
    description: "Antes de disparar, configura tu herramienta. Una vez tomada la foto, organiza y protege tu trabajo.",
    bgImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
  },
  workflow: {
    badge: "Metodología",
    title: "El Flujo de Trabajo Profesional",
    items: [
      {
        id: "step-1",
        title: "1. Configurar",
        description: "RAW/JPEG, ISO, Balance de Blancos",
        icon: "Settings"
      },
      {
        id: "step-2",
        title: "2. Encuadrar",
        description: "Composición y punto de enfoque",
        icon: "Maximize"
      },
      {
        id: "step-3",
        title: "3. Disparar",
        description: "Evaluar luz y usar ráfaga si es necesario",
        icon: "Camera"
      },
      {
        id: "step-4",
        title: "4. Respaldar",
        description: "Descargar fotos y añadir metadatos",
        icon: "Copy"
      }
    ]
  },
  rawVsJpeg: {
    badge: "CALIDAD DE IMAGEN",
    title: "¿Formato RAW o JPEG? 🍰",
    items: [
      {
        title: "RAW (Crudo)",
        description: "<strong>Todos los ingredientes puros.</strong> Pesa más y necesita prepararse en software de edición, pero tienes control total del resultado (recuperar sombras, colores exactos).",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        themeColor: "#34d399"
      },
      {
        title: "JPEG (Listo)",
        description: "<strong>El pastel ya horneado.</strong> La cámara lo procesó y comprimió. Es ligero y listo para redes sociales, pero ya no puedes cambiar los “ingredientes”.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        themeColor: "#60a5fa"
      }
    ]
  },
  metadata: {
    title: "Los Metadatos: El “Sidecar” de tu Foto",
    paragraphs: [
      "Si la fotografía es una motocicleta, <strong>los metadatos son el sidecar</strong>. Viajan junto a la foto invisiblemente y contienen información vital: ¿Con qué cámara se tomó? ¿Qué ajustes de apertura y velocidad tenía? Y lo más importante: <strong>¿Quién es el autor?</strong>"
    ]
  },
  burstMode: {
    title: "El Disparo Continuo (Ráfaga)",
    paragraphs: [
      "Las cámaras capturan desde 3 hasta más de 12 fotogramas por segundo. Úsalo tanto en deportes como en <strong>retratos</strong> (para atrapar esa micro-expresión perfecta) o cuando fotografías con <strong>velocidades de obturación lentas sin trípode</strong>: la primera foto puede salir movida, pero la tercera estará nítida."
    ]
  }
};
