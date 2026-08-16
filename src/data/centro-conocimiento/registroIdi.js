// Registro maestro polimórfico del Centro de Conocimiento (I+D+i)

export const registroIdi = {
  // EJEMPLO DE UN PROYECTO DE INNOVACIÓN (i) CON MAPA TERRITORIAL
  "turismo-sostenible-uribe": {
    id: "turismo-sostenible-uribe",
    tipoIDI: "i", // i = Innovación (Proyectos aplicados con impacto)
    confidencialidad: {
      accesoRestringido: false,
      mensaje: ""
    },
    hero: {
      title: "Turismo Sostenible en La Uribe",
      subtitle: "Implementación de capacidades locales y paz territorial",
      coverImage: "/assets/images/conocimiento/hero-uribe.webp",
      themeColor: "emerald" // Color base para UI
    },
    // Ficha técnica polimórfica (Iterada ciegamente por FichaTecnicaViewer)
    fichaTecnica: {
      "Alcance Geográfico": "La Uribe, Meta",
      "Población Impactada": "45 Familias Campesinas",
      "Aliado Estratégico": "Agencia de Cooperación X",
      "Año de Ejecución": "2023 - 2024",
      "Estado": "Finalizado con éxito"
    },
    // Configuración para el mapa SVG interactivo
    mapaImpacto: {
      activo: true,
      titulo: "Impacto Territorial",
      // Array de IDs que coinciden con los "id" de los paths en el SVG base
      zonasActivas: ["uribe", "mesetas"], 
      // Data para los popups que se abren al hacer clic en las zonasActivas
      datosZonas: {
        "uribe": {
          titulo: "La Uribe",
          metricas: ["25 Fincas Certificadas", "+120% Ingresos"],
          descripcion: "Eje central de la intervención y pacificación turística."
        },
        "mesetas": {
          titulo: "Mesetas",
          metricas: ["Corredor Conectado", "2 Asociaciones"],
          descripcion: "Municipio receptor del desbordamiento turístico."
        }
      }
    },
    // Componentes genéricos reciclados
    secciones: [
      {
        type: "InfoBlock",
        data: {
          title: "Resumen Ejecutivo",
          content: "El proyecto busca reconvertir antiguos escenarios de conflicto en destinos de paz..."
        }
      }
    ]
  },

  // EJEMPLO DE INVESTIGACIÓN (I) CON ACCESO RESTRINGIDO
  "modelo-capacidad-carga": {
    id: "modelo-capacidad-carga",
    tipoIDI: "I", // I = Investigación (Modelos teóricos, Papers)
    confidencialidad: {
      accesoRestringido: true,
      mensaje: "Propiedad Intelectual del CIP. Modelo metodológico bajo Secreto Empresarial. Solo resumen público."
    },
    hero: {
      title: "Modelo Dinámico de Capacidad de Carga",
      subtitle: "Medición en tiempo real para destinos frágiles",
      coverImage: "/assets/images/conocimiento/hero-modelo.webp",
      themeColor: "indigo"
    },
    fichaTecnica: {
      "Línea de Investigación": "Sostenibilidad y Conservación",
      "Autores Principales": ["Dr. Cultura Turística", "Comité Técnico"],
      "Año de Validación": "2025",
      "Nivel de Madurez (TRL)": "TRL 7"
    },
    mapaImpacto: {
      activo: false // No usa mapa, es netamente teórico
    },
    secciones: [
      {
        type: "InfoBlock",
        data: {
          title: "Descripción Científica",
          content: "Este modelo algorítmico determina el límite de cambio aceptable usando..."
        }
      }
    ]
  }
};
