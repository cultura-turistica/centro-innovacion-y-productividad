export const modulo6Data = {
  header: {
    title: "Simulador Manual (M)",
    description: "Ajusta los controles de la zona creativa para fotografiar a este colibrí en pleno vuelo. Observa cómo el fondo (selva) y el primer plano (flores) cambian con la Apertura, y cómo las alas y el cuerpo del ave reaccionan a la Velocidad de Obturación."
  },
  simulator: {
    images: {
      bg: "/assets/images/fotografia/sim_nature_bg.webp",
      subject: "/assets/images/fotografia/sim_bird_transparent.webp",
      foreground: "/assets/images/fotografia/sim_leaves_transparent.webp"
    },
    labels: {
      bgAlt: "Fondo de selva",
      subjectAlt: "Colibrí en vuelo",
      foregroundAlt: "Flores en primer plano"
    },
    status: {
      liveView: "LIVE VIEW",
      captured: "RESULTADO CAPTURADO"
    },
    balance: {
      underexposed: "¡Poca Luz! (Subexpuesta)",
      overexposed: "¡Mucha Luz! (Sobreexpuesta)",
      perfect: "¡EQUILIBRIO PERFECTO!",
      labels: {
        light: "LUZ",
        settings: "AJUSTES"
      },
      hints: {
        underexposed: "Abre el diafragma, baja velocidad o sube ISO para equilibrar.",
        overexposed: "Cierra el diafragma, sube velocidad o baja ISO para equilibrar.",
        perfect: "¡Toma la foto ahora!"
      }
    },
    controls: {
      aperture: {
        label: "Apertura (f)",
        description: "Determina la Profundidad de Campo (Bokeh)"
      },
      shutter: {
        label: "Velocidad (Shutter)",
        description: "Congela o da movimiento"
      },
      iso: {
        label: "Sensibilidad (ISO)",
        description: "Añade luz pero genera ruido digital"
      },
      whiteBalance: {
        label: "Balance de Blancos",
        description: "Ajusta la temperatura del color"
      },
      whiteBalanceOptions: [
        { id: 'AWB', name: 'Auto', color: '#fff', tint: 'none' },
        { id: 'Daylight', name: 'Sol', color: '#ffcc00', tint: 'rgba(255, 200, 0, 0.05)' },
        { id: 'Shade', name: 'Sombra', color: '#ffaa00', tint: 'rgba(255, 100, 0, 0.2)' },
        { id: 'Cloudy', name: 'Nublado', color: '#cccccc', tint: 'rgba(255, 150, 50, 0.15)' },
        { id: 'Tungsten', name: 'Tungsteno', color: '#3399ff', tint: 'rgba(0, 100, 255, 0.3)' },
        { id: 'Fluorescent', name: 'Fluorescente', color: '#ccffcc', tint: 'rgba(200, 0, 255, 0.1)' }
      ]
    },
    actions: {
      takePhoto: "Tomar Fotografía",
      reset: "Restablecer Escena"
    }
  }
};
