export const CARBONO_HERO_DATA = {
  title: "Carbono y Clase: La Gran Asfixia",
  subtitle: "Deuda Histórica vs. La Huella Actual",
  description: "Este laboratorio de datos audita la hegemonía global bajo un lente estricto: la producción histórica de **Dióxido de Carbono (CO2)** y **Metano (CH4)** correlacionados con la acumulación de la riqueza (PIB). Antes de apuntar la responsabilidad del colapso climático, debemos diseccionar las cifras puras. Aquí analizaremos visualmente qué naciones quemaron el mundo para industrializarse, y cómo la manipulación de cifras absolutas esconde la verdadera desigualdad estructural impuesta por el 10% más rico de la población.",
  cta: "Explora los Datos"
};

export const CARBONO_SCROLLY_STEPS = [
  {
    id: 'hegemonic',
    iconName: 'Factory',
    title: 'El Ocaso Hegemónico',
    text: 'La civilización moderna quemó el mundo antes de que Asia despertara. Desde los albores de la Revolución Industrial hasta los años ochenta, Estados Unidos y Europa mantuvieron un monopolio absoluto sobre el carbono atmosférico. Todo el peso del colapso climático contemporáneo fue construido en esta ventana.',
    insight: 'El Norte quemó el puente.',
    query: 'macro_continents',
    year: 1980
  },
  {
    id: 'crossing',
    iconName: 'TrendingUp',
    title: 'El Punto de Ruptura (2006)',
    text: 'Estados Unidos mantuvo la hegemonía durante un siglo, pero el dragón lo asfixió recientemente. Impulsada por su entrada a la Organización Mundial del Comercio (OMC), la rápida reconfiguración de la "Fábrica del Mundo" fracturó la estadística.',
    insight: 'Fue exactamente al cierre del año 2006 cuando las industrias de China sobrepasaron estructuralmente la gigantesca masa bruta norteamericana.',
    query: 'cross_2006',
    year: 2024
  },
  {
    id: 'gini',
    iconName: 'Scale',
    title: 'Desigualdad Estructural',
    text: 'Asia quema carbón salvajemente, sí. Pero culpar a los países emergentes viendo solo su volumen total distorsiona las matemáticas. Re-evaluar bajo un lente "Per Cápita" destruye esa ficción. Estados Unidos y el top rico individual vuelven al estrado. La asfixia no es democrática: mientras el 10% más rico compra tiempo, el 50% más pobre ya se está quedando sin aire.',
    insight: 'Al agrupar a las naciones por su nivel de riqueza, el 10% más rico de la población global es responsable del 27.0% de las emisiones totales del planeta, mientras que la mitad inferior del mundo sobrevive emitiendo apenas un 15.4%. Y esto es una estimación conservadora que no contabiliza la extrema desigualdad interna entre multimillonarios y ciudadanos de a pie.',
    query: 'scatter',
    year: 2022
  }
];

export const CARBONO_TRANSPARENCIA_DATA = {
  title: "Transparencia Metodológica: El Crimen de la Física",
  cards: [
    {
      title: "El Potencial de Calentamiento (GWP)",
      content: "Sumar toneladas de Metano (CH4) con Dióxido de Carbono (CO2) es un error estadístico. El metano calienta la atmósfera hasta **~28 veces más** que el CO2 en un horizonte de 100 años (GWP100). Hemos usado equivalencias en CO2e rigurosas garantizadas por Our World in Data."
    },
    {
      title: "Curvas Base Poblacionales",
      content: "El Laboratorio descartó \"Agrupaciones Geo-Económicas\" genéricas. Usamos filtrado de códigos ISO. Los deciles y ránkings se han calculado sumando la curva demográfica progresiva y descartando los datos faltantes (`NaNs`) genuinos previos a 1850 para no destruir artificialmente el promedio."
    }
  ]
};

export const CARBONO_SANDBOX_DATA = {
  title: "Laboratorio Lúdico Abierto",
  description: "Juega directamente con la base de datos maestra purgada. Compara tu país contra el promedio mundial.",
  quickAccess: [
    { value: 'United States', label: '🇺🇸 USA', style: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
    { value: 'China', label: '🇨🇳 China', style: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
    { value: 'India', label: '🇮🇳 India', style: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
    { value: 'Qatar', label: '🇶🇦 Qatar (Top Riqueza)', style: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
    { value: 'World', label: '🌍 Todo el Planeta', style: 'bg-emerald-500 text-white hover:bg-emerald-600' }
  ],
  placeholder: "Busca una Nación Autónoma..."
};
