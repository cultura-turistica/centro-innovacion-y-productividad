export const SAE_NARRATIVA = {
  header: {
    pill: "Inferencia Estadística Espacial (SAE)",
    title: "Inferencia de Pobreza Multidimensional.",
    subtitle: "Estimación en Áreas Pequeñas cruzando luminosidad satelital nocturna con encuestas DANE mediante inferencia bayesiana."
  },
  metadata: {
    fuente: "DANE + NOAA Satellites",
    datos: "1,086 Puntos",
    modelo: "Regresión MCMC"
  },
  chartTitles: {
    scatter: "Regresión IA: Luz Satelital vs. Pobreza",
    bar: "Top 10 Municipios de Oscuridad Extrema"
  },
  legends: {
    dane: "● Censado DANE Oficial",
    ia: "● Inobservado (Inferido IA)"
  },
  steps: [
    {
      id: "step-1",
      title: "1. \"Dime con quién andas...\" (Fuerza Prestada)",
      paragraphs: [
        "Las encuestas no logran llegar a cada rincón del país. Para llenar estos vacíos, los estadísticos se basan en la correlación espacial: el fenómeno de la pobreza se aglomera en los territorios.",
        "En el **Mapa Coroplético** a tu derecha, el modelo \"toma fuerza prestada\" de las zonas evaluadas. Utilizando un *efecto aleatorio* municipal, asume que si un área tiene características de pobreza, los municipios vecinos inobservados muy probablemente compartan esa realidad."
      ]
    },
    {
      id: "step-2",
      title: "2. Satélites como Ojos (Variable Auxiliar)",
      paragraphs: [
        "Ante la falta de encuestadores en terreno, la contaminación lumínica se usa como un poderoso *proxy* de actividad económica e infraestructura. Sin embargo, la luz espacial no reemplaza la encuesta: la complementa.",
        "El gráfico a tu derecha demuestra cómo el modelo mezcla fuentes: toma encuestas reales (**Puntos Verdes**), suma variables continuas del Censo, y añade la intensidad de luz (Eje X) para calibrar la regresión de áreas inobservadas (**Puntos Rojos**)."
      ]
    },
    {
      id: "step-3",
      title: "3. Imputación Teórica (Top 10 Inobservados)",
      paragraphs: [
        "Al cruzar todo lo anterior, la matemática aprende una fórmula silenciosa (Ej: menos luz satelital + menor educación censal = mayor probabilidad de pobreza). Con esto, logra una asombrosa **imputación teórica** para los recovecos oscuros del país.",
        "A tu derecha revelamos un ranking estadístico impecable: el Top 10 de municipios inobservados, descubiertos únicamente a través de inferencia bayesiana, que fungen como el objetivo primordial de política pública de choque para el Estado."
      ]
    }
  ]
};
