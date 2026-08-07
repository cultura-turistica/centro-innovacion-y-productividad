import { homeSchema } from "../schemas/homeSchema.js";

const rawData = {
  seo: {
    title: "Centro de Innovación y Productividad Cultura T | Investigación y Desarrollo",
    description: "Impulsamos la competitividad y productividad territorial en turismo, cultura y desarrollo empresarial mediante ciencia de datos e innovación continua.",
  },
  hero: {
    pillText: "Apropiación Social del Conocimiento",
    titlePrefix: "Transformamos Territorios",
    titleHighlight: "con Conocimiento",
    subtitle: "Centro de innovación y productividad enfocado en investigación territorial, IA y ecosistemas.",
  },
  pilares: [
    {
      id: "academia",
      icon: "PenTool",
      title: "Cursos y Herramientas",
      description: "Capacitación transformadora. Rutas de aprendizaje interactivas y material práctico para el desarrollo territorial.",
      buttonText: "Ver Academia",
      link: "/cursos",
      color: "bg-orange-600",
    },
    {
      id: "lab",
      icon: "LineChart",
      title: "Laboratorio de Datos y Tecnología",
      description: "El territorio en cifras. Visualización analítica interactiva y estadística de nuestros proyectos en campo.",
      buttonText: "Entrar al Lab",
      link: "/laboratorios", // Updated link logically
      color: "bg-emerald-800",
    },
    {
      id: "thinktank",
      icon: "Library",
      title: "Centro de Pensamiento",
      description: "Nuestra producción bibliográfica. Documentos de investigación formal, artículos y modelos de gestión publicable.",
      buttonText: "Visitar Biblioteca",
      link: "/centro-pensamiento",
      color: "bg-blue-900",
    }
  ],
  about: {
    empresa: {
      title: "Cultura T S.A.S.",
      paragraphs: [
        "Constituida legalmente en 2018 en Bogotá, somos una firma consultora y ejecutora de proyectos con consolidada trayectoria en el desarrollo, asesoría e implementación de estrategias para el turismo sustentable.",
        "Nuestro objetivo abarca la promoción de la sostenibilidad, el fortalecimiento comunitario y la planificación territorial. Implementamos soluciones de ecosistemas web, analítica de datos, innovación y economía popular."
      ],
      propositoTitle: "Propósito:",
      proposito: "Fortalecer el desarrollo sostenible de las comunidades locales y los territorios, generando bienestar mediante proyectos de impacto ambiental, social, cultural y turístico."
    },
    cip: {
      title: "El CIP",
      subtitle: "Centro de Innovación y Productividad",
      paragraphs: [
        "A través del CIP articulamos a los actores de la cadena de valor del turismo, estableciendo alianzas estratégicas con entidades públicas, privadas y fondos de cooperación para la transformación social y económica."
      ],
      misionTitle: "Misión Fundamental:",
      mision: "Impulsar la competitividad y productividad territorial en los sectores del turismo, la cultura y el desarrollo empresarial. Mediante la prestación de servicios especializados, investigamos y transferimos conocimiento para inducir la innovación continua en las regiones."
    }
  },
  organigrama: {
    title: "Estructura Organizacional",
    root: {
      title: "CULTURA T S.A.S.",
      subtitle: "Dirección General",
      color: "#032968",
      bg: "#f8fafc",
    },
    misional: {
      title: "ÁREA MISIONAL",
      node: {
        title: "Dirección de Operaciones e Innovación",
        color: "#F06000",
      },
      subNodes: [
        {
          title: "Gerencia de Proyectos",
          color: "#032968",
          items: ["Subproceso Estructuración", "Subproceso Implementación"]
        },
        {
          title: "CIP Cultura T",
          color: "#055C38",
          items: ["Línea Desarrollo Empresarial", "Línea Transferencia Conocimiento"]
        }
      ]
    },
    apoyo: {
      title: "ÁREA DE APOYO",
      nodes: [
        {
          title: "Financiera y Contable",
          color: "#475569",
          items: ["Nómina, Fiscalización, Facturación"]
        },
        {
          title: "Tecnologías - TICs",
          color: "#475569",
          items: ["Soporte Administrativo", "Entornos Analítica de Datos", "Ecosistema Web E-learning"]
        },
        {
          title: "Jurídica y Contratación",
          color: "#475569",
          items: ["Asesoría y Contratación"]
        }
      ]
    }
  }
};

export const homeData = homeSchema.parse(rawData);
