/**
 * Capa de Datos Maestra para el Juego Extendido e Interactivo:
 * "Diseñando la Propuesta de Valor" (Metodología Oficial Strategyzer)
 * 
 * Lenguaje 100% aterrizado, cero términos en inglés, cero estadísticas abstractas,
 * cercano y comprensible para campesinos, emprendedores locales y estudiantes.
 * 
 * Cobertura de los 4 Pilares del Libro:
 * 1. El Lienzo (Trabajos Funcionales, Sociales y Emocionales; Dolores de Obstáculo vs. Riesgo; Alegrías y Trampa de Solución)
 * 2. Diseñar y los 3 Pasos del Encaje (¿Cuadra en la cabeza? ¿Compran en la calle? ¿Deja ganancia en el bolsillo?)
 * 3. Probar sin Quebrar (La Duda Mortal, Tarjetas de Prueba Rápida y la Alcancía del Proyecto)
 * 4. Ajustar y Evolucionar (El Dilema del Emprendedor con 3 opciones interactivas)
 * 
 * 3 Arquetipos Turísticos Reales:
 * - Martín (El Ejecutivo Urbano Agobiado)
 * - Elena (La Viajera Cultural / Investigadora)
 * - La Familia Ramírez (Padres con niños pequeños)
 */

export const JUEGO_DATA = {
  meta: {
    title: "Diseñando la Propuesta de Valor",
    subtitle: "Simulador interactivo para crear experiencias de turismo y cultura que la gente realmente quiera y pague.",
    author: "CIP - Centro de Innovación y Productividad",
  },

  // 1. Catálogo de los 3 Arquetipos
  archetypes: [
    {
      id: "martin",
      name: "Martín",
      tagline: "El Ejecutivo Urbano Agobiado",
      color: "blue",
      hat: "bucket",
      badge: "Escapada Rural & Silencio",
      bio: "Trabaja 60 horas a la semana frente a pantallas en Bogotá. Necesita desconectar la mente este fin de semana, pero le aterra perder el tiempo en un lugar ruidoso o dañar su carro en una trocha sin señal.",
      quote: "“Solo pido dos cosas: que haya silencio real para dormir y que el camino sea seguro.”"
    },
    {
      id: "elena",
      name: "Elena",
      tagline: "La Viajera Cultural e Investigadora",
      color: "pink",
      hat: "beret",
      badge: "Inmersión Patrimonial Ética",
      bio: "Antropóloga y viajera independiente de Madrid. Busca saberes ancestrales y tradiciones vivas. Su mayor frustración es el “folclorismo de vitrina”: shows falsos montados donde los intermediarios explotan a la comunidad.",
      quote: "“Quiero conectar con la gente real y saber que mi dinero queda 100% en las familias locales.”"
    },
    {
      id: "familia",
      name: "La Familia Ramírez",
      tagline: "Padres con niños pequeños (6 y 9 años)",
      color: "amber",
      hat: "safari",
      badge: "Turismo de Naturaleza Seguro",
      bio: "Una pareja de Cali que quiere que sus hijos conozcan el campo y el bosque. Su mayor pesadilla es una intoxicación por agua no potable o un accidente en un sendero resbaladizo sin evacuación médica.",
      quote: "“Queremos naturaleza viva para los niños, pero sin arriesgar su salud ni su seguridad.”"
    }
  ],

  // 2. Banco de Datos por Arquetipo
  profiles: {
    martin: {
      // Acto 1: El Lienzo (La mente de Martín)
      profileTokens: [
        {
          id: "m-t1",
          label: "“Llegar a la cabaña rural el viernes en la noche sin atascar el vehículo en una trocha sin señal”",
          category: "trabajo",
          subType: "funcional",
          subTypeLabel: "Trabajo Funcional (La tarea práctica)",
          explanation: "Es la tarea práctica y física concreta que Martín necesita ejecutar para iniciar su escapada.",
          feedback: "¡Correcto! Los trabajos funcionales son las tareas operativas o prácticas que el cliente necesita resolver."
        },
        {
          id: "m-t2",
          label: "“Ser reconocido por mi pareja y colegas como alguien de buen gusto que descubre lugares campestres exclusivos”",
          category: "trabajo",
          subType: "social",
          subTypeLabel: "Trabajo Social (Cómo me ven los demás)",
          explanation: "Tiene que ver con su imagen y cómo quiere ser percibido en su círculo social.",
          feedback: "¡Brillante! Los trabajos sociales describen cómo el cliente desea ser visto ante los demás."
        },
        {
          id: "m-t3",
          label: "“Alcanzar un estado de paz mental absoluta y sacudirme el estrés acumulado de 60 horas de trabajo”",
          category: "trabajo",
          subType: "emocional",
          subTypeLabel: "Trabajo Emocional (Cómo me siento por dentro)",
          explanation: "Es el estado de tranquilidad y alivio psicológico que busca experimentar.",
          feedback: "¡Exacto! Los trabajos emocionales describen cómo el cliente busca sentirse por dentro."
        },
        {
          id: "m-t4",
          label: "“Que la vía de acceso esté intransitable o sin señalizar, impidiéndome llegar a tiempo con mi carro”",
          category: "dolor",
          subType: "obstaculo",
          subTypeLabel: "Dolor de Obstáculo (La traba del camino)",
          explanation: "Una barrera física o logística que le bloquea el viaje antes de empezar.",
          feedback: "¡Muy bien! Un dolor de obstáculo es la dificultad práctica que frena o impide la experiencia."
        },
        {
          id: "m-t5",
          label: "“Pagar $160 USD la noche y encontrarme un bafle con música estridente en la habitación de al lado”",
          category: "dolor",
          subType: "riesgo",
          subTypeLabel: "Dolor de Riesgo (El peligro temido)",
          explanation: "La consecuencia indeseada que arruina el dinero invertido y destruye su descanso.",
          feedback: "¡En el blanco! El dolor de riesgo es el peligro latente que más angustia al cliente."
        },
        {
          id: "m-t6",
          label: "“Despertar en silencio total con aroma a café de origen recién colado servido en la terraza de niebla”",
          category: "deseo",
          subType: "deseo",
          subTypeLabel: "Alegría Deseada (El sueño)",
          explanation: "El beneficio placentero y memorable que justifica pagar con gusto.",
          feedback: "¡Excelente! Las alegrías son los beneficios concretos que enamoran al visitante."
        },
        {
          id: "m-t7",
          label: "“Descargar una app móvil con tarjeta de membresía digital y 15% de descuento en el restaurante”",
          category: "trap",
          isTrap: true,
          subType: "trap",
          subTypeLabel: "Trampa: Tu Propia Solución",
          explanation: "Esto es una idea o invento del negocio, no un trabajo ni deseo de Martín.",
          feedback: "⚠️ ¡ALERTA! La app y el descuento son TU producto, no una necesidad de Martín. ¡Nunca metas tu solución en la mente del cliente!"
        }
      ],

      // Acto 2: El Círculo de Mercado (25 clientes y Termómetro de Dolor)
      marketSimulation: {
        circleColor: "blue",
        levels: [
          {
            level: 1,
            name: "Dolor Cosmético (Cosas bonitas pero secundarias)",
            action: "Instalar Wi-Fi de alta velocidad en el bosque y regalar jabones finos",
            buyerCount: 2,
            satisfactionPercent: 8,
            mood: "sad",
            sales: "$320 USD",
            feedbackQuote: "“La habitación es bonita y hay Wi-Fi, pero el vecino puso música a las 2 AM y nadie reguló nada. ¡No dormí nada, me voy furioso!”",
            analysis: "Fracaso comercial: Gastaste plata en adornos mientras el ruido le arruinó el fin de semana."
          },
          {
            level: 2,
            name: "Dolor Moderado (Comodidades estándar de hotel)",
            action: "Ofrecer senderismo guiado matutino y restaurante campestre con menú a la carta",
            buyerCount: 10,
            satisfactionPercent: 40,
            mood: "neutral",
            sales: "$1,600 USD",
            feedbackQuote: "“El sendero fue agradable, pero la carretera casi me deja sin carro y aún me queda la duda si descansaré bien.”",
            analysis: "Resultado mediocre: Te ven como una finca más del montón y te piden rebaja en el precio."
          },
          {
            level: 3,
            name: "Dolor Crítico (Eliminar la peor pesadilla)",
            action: "Reglamento estricto “Cero Ruido” con sanción por bafles + Cabañas separadas 50 metros + Auxilio 4x4 y mapa descargable",
            buyerCount: 24,
            satisfactionPercent: 96,
            mood: "happy",
            sales: "$3,840 USD",
            feedbackQuote: "“Dormí 9 horas seguidas como un recién nacido. El baquiano nos asistió en la trocha. ¡Esta paz no tiene precio, ya reservé para el mes entrante!”",
            analysis: "¡Éxito total! Cuando eliminas la pesadilla que le quitaba el sueño, el precio pasa a segundo plano y los clientes pagan felices."
          }
        ]
      },

      // Acto 3: Los 3 Pasos del Encaje (Sin términos raros en inglés)
      fitGame: {
        availableCards: [
          {
            id: "m-fit-1",
            name: "Reglamento “Cero Ruido” 24/7 y Aislamiento Acústico",
            category: "Aliviador de Dolor",
            correctFor: "martin",
            matchesWith: "Miedo a la música y bafles ruidosos al lado de la habitación",
            feedback: "¡Calza perfecto! Elimina de raíz su mayor pesadilla."
          },
          {
            id: "m-fit-2",
            name: "Ruta 4x4 Asistida con Coordenadas GPS y Baquiano de Apoyo",
            category: "Servicio Clave",
            correctFor: "martin",
            matchesWith: "Temor a quedar varado en trochas sin señal de celular",
            feedback: "¡Excelente! Le resuelve la dificultad del camino."
          },
          {
            id: "m-fit-3",
            name: "Cesta Matutina de Café de Origen Servida en Silencio en la Terraza",
            category: "Creador de Alegría",
            correctFor: "martin",
            matchesWith: "Deseo de despertar en silencio con café de origen en la niebla",
            feedback: "¡Brillante! Supera con creces sus expectativas de descanso."
          },
          {
            id: "m-fit-wrong-1",
            name: "Taller Infantil de Moldeo en Arcilla y Granja de Animales",
            category: "Creador de Alegría",
            correctFor: "familia",
            matchesWith: "Deseo infantil de jugar con barro",
            feedback: "❌ ¡Desconexión! Los talleres infantiles y el bullicio de niños atraen justo lo que Martín quiere evitar: ruido."
          },
          {
            id: "m-fit-wrong-2",
            name: "Asamblea Abierta de Comercio Justo y Huella Ética Comunitaria",
            category: "Aliviador de Dolor",
            correctFor: "elena",
            matchesWith: "Temor a la explotación de intermediarios",
            feedback: "❌ ¡Desconexión! Aunque es admirable, Martín es un ejecutivo buscando descansar en silencio, no una investigadora cultural."
          }
        ],
        stages: [
          {
            level: 1,
            title: "Paso 1: ¿La idea cuadra en la cabeza de Martín?",
            subtitle: "Lo que ofreces responde exactamente a lo que él necesita",
            metricTitle: "Alineación de la Oferta:",
            metricValue: "100% de coherencia con Martín",
            description: "Tu idea no es un invento en el aire: cada cosa que ofreces le quita un dolor real o le cumple un sueño a Martín."
          },
          {
            level: 2,
            title: "Paso 2: ¿Los clientes en la calle sacan la plata y compran?",
            subtitle: "Los clientes no solo dicen que es bonita: pagan y recomiendan",
            metricTitle: "Voz a voz de los clientes:",
            metricValue: "6 de cada 7 huéspedes traen a un amigo",
            description: "Martín no pidió devolución de dinero, durmió feliz y le contó a sus compañeros de oficina que también estaban cansados del ruido."
          },
          {
            level: 3,
            title: "Paso 3: ¿El negocio deja ganancia limpia o da pérdidas?",
            subtitle: "Cobras más de lo que te cuesta operar",
            metricTitle: "Ganancia limpia por noche:",
            metricValue: "$68 USD libres por huésped",
            description: "Cobras $160 USD por noche y te cuesta $92 USD atenderlo (pagándole bien al guía campesino y sirviendo buen café). Te queda plata libre para vivir tranquilo."
          }
        ]
      },

      // Acto 4: Probar sin Quebrar (Experimentos Baratos)
      leanExperiment: {
        hypothesisCard: {
          title: "La Gran Duda que puede quebrar el negocio:",
          creemosQue: "Estamos suponiendo que ejecutivos estresados pagarán $160 USD por noche por una cabaña en el campo SIN televisor ni Wi-Fi, únicamente por el silencio y el café en la terraza.",
          criticidad: "Peligro Mortal: Si esto es falso y la gente no paga por silencio, nos quebramos."
        },
        testCard: {
          title: "Tarjeta de Prueba Rápida:",
          paraVerificar: "Hacer una preventa simple por internet con un depósito reembolsable de $25 USD.",
          mediremos: "Cuántos ejecutivos de verdad sacan la tarjeta y pagan el depósito de reserva.",
          tendremosRazonSi: "Al menos 15 personas pagan el anticipo antes de que construyamos nada."
        },
        experiments: [
          {
            id: "catastrofe",
            name: "Construir 4 Cabañas de Madera de Inmediato",
            type: "Construir a Ciegas (La Quiebra Típica)",
            cost: 4900,
            evidenceScore: "Nula y Tardía",
            cashLeft: 100,
            outcome: "Te gastas los $4,900 USD de tus ahorros en madera y mano de obra. Al abrir descubres que los ejecutivos sí querían silencio, pero necesitaban escritorio cómodo para el viernes. Te quedas con $100 USD en el bolsillo, con deudas y al borde de cerrar.",
            isWinner: false
          },
          {
            id: "conserje",
            name: "Experimento “Conserje”: Atender 2 Clientes a Mano",
            type: "Servicio Manual en Finca Prestada",
            cost: 250,
            evidenceScore: "Conversación Directa y Real",
            cashLeft: 4750,
            outcome: "Alquilas una finca campesina por 1 fin de semana para 2 ejecutivos conocidos y tú mismo les sirves el café y vigilas el silencio. Aprendes exactamente qué valoran sin construir nada y te sobran $4,750 USD en la alcancía.",
            isWinner: true
          },
          {
            id: "preventa",
            name: "Experimento de Preventa con Depósito de $25 USD",
            type: "Plata en Mano (Compromiso Real)",
            cost: 200,
            evidenceScore: "Máxima (Sacaron la Billetera)",
            cashLeft: 4800,
            outcome: "Gastas $200 USD en unas fotos y una página de reserva. En 5 días 22 ejecutivos pagan el anticipo de $25 USD. Tienes la certeza y el dinero en la mano antes de clavar la primera tabla.",
            isWinner: true
          },
          {
            id: "landing",
            name: "Página Sencilla con Botón de “Reservar Ahora”",
            type: "Prueba de Interés con Clics",
            cost: 120,
            evidenceScore: "Interés Digital Medido",
            cashLeft: 4880,
            outcome: "Gastas $120 USD promocionando la idea en redes. 180 personas hacen clic en “Reservar Ahora” y dejan su número de WhatsApp. Compruebas que la idea atrae a muy bajo costo.",
            isWinner: true
          }
        ]
      },

      // Mapa de Valor Oficial (Pilar 2)
      valueMap: {
        headline: "Propuesta de Valor de Martín: Silencio Bioclimático & Desconexión",
        products: [
          { title: "Cabaña Aislada en Bosque de Niebla", desc: "Alojamiento bioclimático con aislamiento acústico natural y ventanales panorámicos.", icon: "🏡" },
          { title: "Cafetería de Especialidad Matutina", desc: "Café de origen recién tostado servido en la terraza privada con prensa francesa.", icon: "☕" },
          { title: "Ruta de Llegada con Guía 4x4", desc: "Coordinación de transporte seguro desde el pueblo para no arriesgar vehículos particulares.", icon: "🚙" }
        ],
        painRelievers: [
          { title: "Contrato de Garantía de Silencio Total", relieves: "Miedo a música estridente y ruido nocturno", desc: "Regla estricta de Cero Ruido después de las 9:00 PM con penalización contractual para infractores.", icon: "🤫" },
          { title: "Vía Señalizada y Asistencia Vial", relieves: "Temor a atascarse en la trocha sin señal", desc: "Punto de encuentro seguro y mapa descargable sin conexión que evita perderse.", icon: "📍" },
          { title: "Zona de Cierre Laboral el Viernes (4-6 PM)", relieves: "Ansiedad de desconexión sin cerrar correos", desc: "Conexión satelital rápida solo en recepción para enviar pendientes antes de apagar el celular.", icon: "💼" }
        ],
        gainCreators: [
          { title: "Despertar con Aroma a Café en la Niebla", creates: "Sueño de descanso y serenidad", desc: "Servicio de café de origen en la terraza al amanecer con vista panorámica a la cordillera.", icon: "☕" },
          { title: "Biblioteca de Naturaleza y Paz", creates: "Reconocimiento y desconexión mental", desc: "Selección curada de lecturas de naturaleza y botánica para descansar la vista de pantallas.", icon: "📚" }
        ],
        badMapComparison: {
          title: "El Mapa de Valor Cosmético (Por qué fracasa)",
          flawExplanation: "Ofrecer “cabañas con Wi-Fi y televisión” es un mapa cosmético. No alivia el dolor extremo (el ruido). Al poner Wi-Fi en los cuartos, los huéspedes siguen trabajando, el vecino pone reguetón a medianoche y el cliente se va furioso y te regatea el precio.",
          items: ["Wi-Fi en la cama", "Gorras de regalo", "Folletos dorados"]
        }
      },

      // Acto 4: El Dilema del Emprendedor (Pivote y Filtrado de Feedback)
      pivotDilemmas: [
        {
          id: "m-piv-1",
          clientName: "Martín (Ejecutivo Estresado)",
          avatarMood: "neutral",
          badge: "Dolor Real del Arquetipo",
          feedbackQuote: "“Nos fascina el silencio total el sábado y domingo, pero el viernes a las 4:00 PM necesito urgente 1 hora de internet para enviar un informe a mi junta directiva o pierdo el trabajo. ¿Tienen señal?”",
          teaching: "Cuándo hacer un PIVOTE INTELIGENTE: Es un dolor real de tu cliente objetivo que puedes resolver con un ajuste quirúrgico sin destruir tu propuesta de valor.",
          options: [
            {
              id: "opt1",
              choiceType: "Pivote Inteligente",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Habilitar Wi-Fi satelital rápido exclusivamente en el quiosco de recepción el viernes de 4:00 PM a 6:00 PM. Las cabañas se mantienen 100% desconectadas.",
              feedback: "🎉 ¡Decisión Maestra! Le permites cumplir con su junta laboral el viernes y garantizas que el resto del fin de semana las cabañas sean un santuario de paz.",
              satisfaction: 98
            },
            {
              id: "opt2",
              choiceType: "Terquedad Ciega",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirle: “Aquí se viene a desconectar y si no le gusta busque otro lugar”.",
              feedback: "❌ Terquedad fatal. El cliente no te pedía trabajar todo el fin de semana, solo 1 hora para no perder su empleo. Pierdes el 70% de tus ventas por intransigente.",
              satisfaction: 25
            },
            {
              id: "opt3",
              choiceType: "Exceso Complaciente",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Cablear internet de alta velocidad y televisores con streaming en todas las habitaciones las 24 horas.",
              feedback: "❌ Error de diseño. A medianoche la gente hace videollamadas, se pierde el silencio y destruyes la única promesa que te hacía diferente.",
              satisfaction: 45
            }
          ]
        },
        {
          id: "m-piv-2",
          clientName: "Grupo de Turistas de Fiesta",
          avatarMood: "shocked",
          badge: "Sugerencia Fuera de Segmento (¡Rechazar!)",
          feedbackQuote: "“Llegamos con un bafle grande y queremos armar fiesta con reguetón en la terraza hasta la 1:00 AM. Dicen que no se puede, pero pagamos $100 USD extra si nos dejan.”",
          teaching: "Cuándo decir NO: No todo cliente es tu cliente. Complacer sugerencias que violan tu propuesta de valor espanta a tus verdaderos clientes leales.",
          options: [
            {
              id: "opt1",
              choiceType: "Descartar y Proteger la Promesa",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Rechazar con firmeza y cortesía: recordar la política contractual de Cero Ruido por la que pagaron los otros huéspedes y no aceptar el dinero extra.",
              feedback: "🎉 ¡Ojo Clínico de Negocio! Decir NO a quien no es tu cliente es lo que mantiene viva tu propuesta de valor y protege el descanso sagrado de Martín.",
              satisfaction: 95
            },
            {
              id: "opt2",
              choiceType: "Complacer por Avaricia",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Aceptar el dinero extra y decirles que pongan la música “pasito”.",
              feedback: "❌ ¡Desastre total! El bafle retumba en todo el valle. Martín y los demás huéspedes se van enfurecidos, exigen reembolso y te destruyen con reseñas de 1 estrella.",
              satisfaction: 10
            },
            {
              id: "opt3",
              choiceType: "Sobre-inversión Absurda",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Construir una discoteca subterránea insonorizada para recibir fiesteros.",
              feedback: "❌ Gasto suicida. Te endeudas con millones por complacer a gente que no es tu arquetipo y arruinas la armonía de la montaña.",
              satisfaction: 30
            }
          ]
        },
        {
          id: "m-piv-3",
          clientName: "Turista Pretencioso",
          avatarMood: "neutral",
          badge: "Sugerencia Gastronómica Desubicada",
          feedbackQuote: "“No me gusta el café de olla ni el desayuno campesino tradicional. ¿Por qué no ponen sushi, carnes importadas y champán francés en la carta?”",
          teaching: "Proteger la identidad y los costos: cambiar tu oferta por el capricho de un solo visitante destruye el margen de ganancia y el sentido local.",
          options: [
            {
              id: "opt1",
              choiceType: "Mantener Identidad y Cadena Local",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Mantener con orgullo la gastronomía campesina de alta calidad con ingredientes de la huerta, explicando su valor cultural en el menú.",
              feedback: "🎉 ¡Exacto! Tu propuesta de valor es campo auténtico. Importar salmón y champán aumentaría los costos un 300% y rompería el encaje con la región.",
              satisfaction: 92
            },
            {
              id: "opt2",
              choiceType: "Complacer a Ciegas",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Contratar a un chef de comida asiática y comprar ingredientes congelados en la capital para tener de todo.",
              feedback: "❌ Caíste en la trampa de querer complacer a todos. La comida importada se vence, los costos se disparan y las familias campesinas pierden el ingreso.",
              satisfaction: 25
            },
            {
              id: "opt3",
              choiceType: "Confrontación Agresiva",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Ofenderte e insultar al huésped por no valorar la cultura campesina.",
              feedback: "❌ La hostilidad nunca es una estrategia de hospitalidad. Se educa y se explica con calidez, no con agresión.",
              satisfaction: 15
            }
          ]
        },
        {
          id: "m-piv-4",
          clientName: "Martín (Segunda Estadía)",
          avatarMood: "happy",
          badge: "Mejora de Confort (Bajo Costo)",
          feedbackQuote: "“El silencio es increíble, pero a las 5:30 AM entra demasiada luz por el gran ventanal y como no hay cortina gruesa me despierto antes de tiempo.”",
          teaching: "Pivote Operativo Rápido: pequeños detalles económicos que elevan la satisfacción del 80% al 100%.",
          options: [
            {
              id: "opt1",
              choiceType: "Pivote Quirúrgico y Económico",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Instalar cortinas blackout térmicas y ofrecer antifaces de descanso de cortesía ($40 USD de inversión total).",
              feedback: "🎉 ¡Magistral! Con una inversión insignificante resolviste la queja de sueño y Martín te califica con 5 estrellas recomendando el lugar a toda su empresa.",
              satisfaction: 100
            },
            {
              id: "opt2",
              choiceType: "Indiferencia",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirle: “En el campo se madruga y a las 5 AM ya sale el sol”.",
              feedback: "❌ El cliente vino a descansar, no a trabajar la tierra a las 5 AM. Tu falta de empatía arruina la promesa de recuperación física.",
              satisfaction: 35
            },
            {
              id: "opt3",
              choiceType: "Sobre-ingeniería",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Rediseñar la cabaña para quitar los ventanales hacia el bosque y poner paredes de ladrillo oscuro.",
              feedback: "❌ Arruinaste el creador de alegría: la vista panorámica de la niebla. Con una cortina bastaba.",
              satisfaction: 30
            }
          ]
        }
      ],
      pivotScenario: {
        feedbackReceived: "El 70% de los ejecutivos te dice: “Nos encanta el silencio, pero los viernes de 4 a 6 PM necesitamos enviar un último correo urgente a la oficina antes de apagar el celular”.",
        question: "¿Qué decisión tomas como anfitrión para no perder a estos clientes ni traicionar tu concepto de silencio?",
        options: [
          {
            id: "opt1",
            label: "A) Poner Wi-Fi potente con antenas en todas las habitaciones las 24 horas",
            isCorrect: false,
            verdict: "❌ ¡Error de diseño! Si llenas las habitaciones de internet, los ejecutivos reciben videollamadas a medianoche, no descansan y destruyes la única promesa que te hacía diferente: el silencio absoluto.",
            satisfaction: 45
          },
          {
            id: "opt2",
            label: "B) Decirles que no: “Aquí se viene a desconectar y si no le gusta busque otro lugar”",
            isCorrect: false,
            verdict: "❌ ¡Terquedad fatal! El cliente no te pide trabajar todo el fin de semana; solo necesita 60 minutos para cerrar su jornada el viernes en paz. Pierdes el 70% de tus ventas por intransigente.",
            satisfaction: 25
          },
          {
            id: "opt3",
            label: "C) Crear la “Zona de Desconexión Gradual”: Wi-Fi exclusivo en la recepción durante 1 hora el viernes de llegada, manteniendo las cabañas con cero señal",
            isCorrect: true,
            verdict: "🎉 ¡Decisión Maestra! Les das la tranquilidad de cerrar pendientes el viernes y garantizas paz total en las cabañas el resto del viaje. La ocupación de fin de semana saltó al 98%.",
            satisfaction: 98
          }
        ]
      }
    },

    elena: {
      // Acto 1: El Lienzo (La mente de Elena)
      profileTokens: [
        {
          id: "e-t1",
          label: "“Documentar técnicas de alfarería tradicional y tejeduría directamente con maestras sabedoras nativas”",
          category: "trabajo",
          subType: "funcional",
          subTypeLabel: "Trabajo Funcional (La tarea práctica)",
          explanation: "La tarea investigativa y vivencial concreta que Elena viene a realizar.",
          feedback: "¡Correcto! Los trabajos funcionales definen la actividad práctica del viaje."
        },
        {
          id: "e-t2",
          label: "“Ser reconocida en círculos académicos y comunitarios como una investigadora ética y no extractiva”",
          category: "trabajo",
          subType: "social",
          subTypeLabel: "Trabajo Social (Cómo me ven los demás)",
          explanation: "Su imagen, reputación y respeto ante sus colegas y la comunidad.",
          feedback: "¡Brillante! El trabajo social refleja cómo quiere que la sociedad y sus colegas la perciban."
        },
        {
          id: "e-t3",
          label: "“Sentir la tranquilidad de conciencia de saber que mi visita dignifica y apoya a la comunidad artesana”",
          category: "trabajo",
          subType: "emocional",
          subTypeLabel: "Trabajo Emocional (Cómo me siento por dentro)",
          explanation: "El sentimiento íntimo de serenidad moral y respeto mutuo.",
          feedback: "¡Exacto! El trabajo emocional se enfoca en cómo la persona quiere sentirse por dentro."
        },
        {
          id: "e-t4",
          label: "“La falta de transporte local seguro o intérpretes para acceder al resguardo indígena remoto”",
          category: "dolor",
          subType: "obstaculo",
          subTypeLabel: "Dolor de Obstáculo (La traba del camino)",
          explanation: "Una barrera física o de idioma que le impide llegar a las sabedoras.",
          feedback: "¡Muy bien! Un dolor de obstáculo bloquea el acceso a la experiencia."
        },
        {
          id: "e-t5",
          label: "“Llegar y encontrar un show teatralizado falso donde agencias intermediarias se quedan con el 85% del dinero”",
          category: "dolor",
          subType: "riesgo",
          subTypeLabel: "Dolor de Riesgo (El peligro temido)",
          explanation: "La consecuencia indeseada más dolorosa: caer en una trampa de turismo de explotación.",
          feedback: "¡En el blanco! Es el riesgo crítico que destruiría por completo el valor para Elena."
        },
        {
          id: "e-t6",
          label: "“Tener cuentas claras y visibles de que el pago por los talleres llega directo a las familias artesanas”",
          category: "deseo",
          subType: "deseo",
          subTypeLabel: "Alegría Deseada (El sueño)",
          explanation: "El beneficio ético tangible que le genera total tranquilidad y admiración.",
          feedback: "¡Excelente! La alegría que justifica su lealtad absoluta hacia la iniciativa."
        },
        {
          id: "e-t7",
          label: "“Recibir un cupón impreso de 2x1 en cócteles en el bar de la plaza del pueblo”",
          category: "trap",
          isTrap: true,
          subType: "trap",
          subTypeLabel: "Trampa: Tu Propia Solución",
          explanation: "Una táctica comercial que nada tiene que ver con las motivaciones culturales de Elena.",
          feedback: "⚠️ ¡ALERTA! Ofrecer cupones de bar a una investigadora cultural demuestra desconocer su perfil por completo."
        }
      ],

      // Acto 2: El Círculo de Mercado
      marketSimulation: {
        circleColor: "purple",
        levels: [
          {
            level: 1,
            name: "Dolor Cosmético (Cosas bonitas pero secundarias)",
            action: "Regalar camisetas estampadas y contratar un grupo de baile en un restaurante del pueblo",
            buyerCount: 1,
            satisfactionPercent: 4,
            mood: "sad",
            sales: "$150 USD",
            feedbackQuote: "“Esto parece un parque temático barato. No viajé desde Europa a ver un show de plástico donde la comunidad no tiene voz. Es una vergüenza.”",
            analysis: "Rechazo contundente: El turismo cultural auténtico huye despavorido de la impostura cosmética."
          },
          {
            level: 2,
            name: "Dolor Moderado (Comodidades estándar)",
            action: "Crear una tienda de souvenirs de artesanías con folleto explicativo en el hotel",
            buyerCount: 7,
            satisfactionPercent: 28,
            mood: "neutral",
            sales: "$1,050 USD",
            feedbackQuote: "“Las artesanías son bonitas, pero no puedo hablar con las sabedoras ni saber si les pagan lo justo. Me deja sabor a poco.”",
            analysis: "Interés tibio: Solo compran quienes no tenían tiempo de internarse en el territorio."
          },
          {
            level: 3,
            name: "Dolor Crítico (Eliminar la pesadilla de la explotación)",
            action: "Círculos de palabra en la maloca con las abuelas + Libro de cuentas abierto en asamblea + Pago directo a la asociación comunitaria",
            buyerCount: 25,
            satisfactionPercent: 100,
            mood: "happy",
            sales: "$4,500 USD",
            feedbackQuote: "“Fue la experiencia más conmovedora y transformadora de mi vida. Aprendí de las maestras y vi con mis propios ojos cómo el dinero fortalece la escuela de su pueblo.”",
            analysis: "¡Encaje ético magistral! Cuando garantizas dignidad comunitaria y autenticidad real, los 25 investigadores pagan con devoción."
          }
        ]
      },

      // Acto 3: Los 3 Pasos del Encaje
      fitGame: {
        availableCards: [
          {
            id: "e-fit-1",
            name: "Acuerdo de Comercio Justo con Contabilidad Abierta en la Asamblea",
            category: "Aliviador de Dolor",
            correctFor: "elena",
            matchesWith: "Miedo a que intermediarios exploten a la comunidad y se queden con el dinero",
            feedback: "¡Calza perfecto! Elimina el temor a la explotación de intermediarios."
          },
          {
            id: "e-fit-2",
            name: "Inmersión de 3 Días en Talleres Familiares con Intérprete Nativo",
            category: "Servicio Clave",
            correctFor: "elena",
            matchesWith: "Falta de transporte local formal o intérpretes para acceder al resguardo",
            feedback: "¡Excelente! Resuelve el obstáculo de acceso lingüístico y territorial."
          },
          {
            id: "e-fit-3",
            name: "Pasaporte de Huella Cultural con Certificado de Origen Firmado por la Sabedora",
            category: "Creador de Alegría",
            correctFor: "elena",
            matchesWith: "Deseo de cuentas claras y apoyo directo a las maestras artesanas",
            feedback: "¡Brillante! Cumple su máxima alegría de transparencia y rigor patrimonial."
          },
          {
            id: "e-fit-wrong-1",
            name: "Piscina Climatizada con Tobogán y Bar Húmedo",
            category: "Servicio Clave",
            correctFor: "familia",
            matchesWith: "Diversión infantil",
            feedback: "❌ ¡Desconexión! Una piscina con bar húmedo en un resguardo destruye el entorno sagrado y ofende a Elena."
          },
          {
            id: "e-fit-wrong-2",
            name: "Cabaña Aislada con Jacuzzi y Televisor 4K",
            category: "Creador de Alegría",
            correctFor: "martin",
            matchesWith: "Lujo y silencio ejecutivo",
            feedback: "❌ ¡Desconexión! Elena busca autenticidad comunitaria y hospedaje tradicional, no lujos impersonales de hotel 5 estrellas."
          }
        ],
        stages: [
          {
            level: 1,
            title: "Paso 1: ¿La idea cuadra en la cabeza de Elena?",
            subtitle: "El valor ético y pedagógico responde a sus principios",
            metricTitle: "Alineación de la Oferta:",
            metricValue: "100% de respeto mutuo",
            description: "Tu propuesta dialoga de igual a igual con las necesidades de la comunidad y las exigencias de Elena."
          },
          {
            level: 2,
            title: "Paso 2: ¿Los investigadores en la calle compran y reservan?",
            subtitle: "Comunidad internacional de viajeros éticos cautiva",
            metricTitle: "Cupos agotados:",
            metricValue: "4 meses de reservas por anticipado",
            description: "El voz a voz en redes de antropología y turismo regenerativo llenó los cupos permitidos por el resguardo."
          },
          {
            level: 3,
            title: "Paso 3: ¿El negocio deja ganancia justa sin depender de limosnas?",
            subtitle: "Reparto equitativo y digno para las familias",
            metricTitle: "Reparto del dinero:",
            metricValue: "65% directo a la comunidad / 35% operación",
            description: "El modelo financia la escuela comunitaria de los niños y genera un fondo colectivo de salud sin depender de donaciones."
          }
        ]
      },

      // Acto 4: Probar sin Quebrar
      leanExperiment: {
        hypothesisCard: {
          title: "La Gran Duda que puede quebrar el proyecto:",
          creemosQue: "Estamos suponiendo que las familias del resguardo aceptarán recibir visitantes en sus casas tradicionales sin sentirse invadidas ni perder su tranquilidad.",
          criticidad: "Peligro Mortal: Si las familias se sienten incómodas y se niegan, el proyecto se cancela de inmediato."
        },
        testCard: {
          title: "Tarjeta de Prueba Rápida:",
          paraVerificar: "Hacer un ensayo piloto de 1 fin de semana con solo 3 investigadoras de confianza en una enramada tradicional.",
          mediremos: "La opinión sincera de los mayores y si las artesanas se sintieron respetadas y bien pagadas.",
          tendremosRazonSi: "Las familias de la comunidad piden continuar y fijan juntas las fechas de los próximos grupos."
        },
        experiments: [
          {
            id: "catastrofe",
            name: "Construir un Centro de Convenciones de Ladrillo en el Resguardo",
            type: "Construir a Ciegas (La Quiebra Cultural)",
            cost: 4800,
            evidenceScore: "Nula y Dañina",
            cashLeft: 200,
            outcome: "Construyes una mole de cemento que agrede el paisaje sagrado. La comunidad se divide y los mayores declaran persona no grata al proyecto. Pérdida total de $4,800 USD y relaciones rotas.",
            isWinner: false
          },
          {
            id: "conserje",
            name: "Experimento de “Taller Piloto” en la Enramada Tradicional",
            type: "Ensayo Comunitario Humano",
            cost: 180,
            evidenceScore: "Máxima Confianza y Respeto",
            cashLeft: 4820,
            outcome: "Comparten fogón, sancocho y mambeadero con solo 3 investigadoras. Las abuelas se sienten valoradas, definen las normas y te quedan $4,820 USD intactos en la alcancía.",
            isWinner: true
          },
          {
            id: "preventa",
            name: "Presentación en 3 Facultades de Antropología con Cupo Previo",
            type: "Interés Académico Real",
            cost: 150,
            evidenceScore: "Pre-reservas Firmes",
            cashLeft: 4850,
            outcome: "Presentas el programa ante estudiantes e investigadores. Se llenan 15 solicitudes con anticipo de compromiso en 48 horas sin invertir capital en infraestructura.",
            isWinner: true
          },
          {
            id: "landing",
            name: "Dossier Digital de Inmersión Ética",
            type: "Prueba de Demanda Internacional",
            cost: 100,
            evidenceScore: "Validación de Interés Global",
            cashLeft: 4900,
            outcome: "Publicas el manifiesto ético del viaje. 95 investigadores internacionales solicitan el formulario de postulación a bajo costo.",
            isWinner: true
          }
        ]
      },

      // Mapa de Valor Oficial (Pilar 2)
      valueMap: {
        headline: "Propuesta de Valor de Elena: Inmersión Patrimonial Ética & Sin Intermediarios",
        products: [
          { title: "Estadía y Taller en Resguardo Indígena", desc: "Alojamiento en maloka tradicional y talleres de tejeduría viva con abuelas sabedoras.", icon: "🏛️" },
          { title: "Recorrido de Plantas Medicinales con Taita", desc: "Caminata botánica guiada por la autoridad médica tradicional del territorio.", icon: "🌿" },
          { title: "Mesa Redonda Comunitaria y Cena Típica", desc: "Espacio de diálogo horizontal sobre historia y cosmovisión alrededor del fogón.", icon: "🍲" }
        ],
        painRelievers: [
          { title: "Comercio Justo 100% Directo a Artesanas", relieves: "Miedo a la explotación de intermediarios", desc: "Tarifas acordadas en asamblea con pago directo e íntegro a las familias que custodian el saber.", icon: "🤝" },
          { title: "Protocolo “Cero Cámaras” (Sin fotos en rezos)", relieves: "Miedo al “turismo invasivo”", desc: "Pautas claras de respeto sagrado: celulares guardados durante ceremonias sagradas.", icon: "📜" },
          { title: "Grupos Reducidos (Máximo 6 personas)", relieves: "Temor a masificación que destruye el territorio", desc: "Cupos estrictos para no alterar la capacidad de carga ni el ritmo diario comunitario.", icon: "👥" }
        ],
        gainCreators: [
          { title: "Cuaderno de Campo Artesanal Ilustrado", creates: "Rigurosidad investigativa y memoria viva", desc: "Cuaderno encuadernado a mano con glosario de términos nativos y muestras de tintes.", icon: "📖" },
          { title: "Ceremonia Tradicional de Armonización", creates: "Conexión espiritual y sentido de gratitud", desc: "Ritual ancestral de bendición y permiso al territorio liderado por los mayores.", icon: "✨" }
        ],
        badMapComparison: {
          title: "El Mapa de Valor Cosmético (Por qué fracasa)",
          flawExplanation: "Ofrecer “shows de baile comercial en tarima plástica”. Elena lo rechaza de inmediato porque es turismo extractivista y falso. Destruye la dignidad comunitaria.",
          items: ["Tarima plástica de hotel", "Artesanías chinas importadas", "Shows de danza disfrazados"]
        }
      },

      // Acto 4: El Dilema del Emprendedor (Pivote y Filtrado de Feedback)
      pivotDilemmas: [
        {
          id: "e-piv-1",
          clientName: "Abuelas Sabedoras del Resguardo",
          avatarMood: "shocked",
          badge: "Línea Ética Comunitaria",
          feedbackQuote: "“Nos gusta que vengan a aprender de tejeduría, pero cuando los visitantes sacan celulares a tomar fotos en los rituales de armonización sentimos que nos tratan como espectáculo de feria.”",
          teaching: "Cuándo hacer un PIVOTE ÉTICO: Proteger la dignidad de la comunidad local es innegociable. Un buen protocolo de respeto enriquece el valor del viaje.",
          options: [
            {
              id: "opt1",
              choiceType: "Pivote con Protocolo de Respeto",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Crear el protocolo “Cero Cámaras”: celulares guardados durante los momentos sagrados; solo bocetos a mano y memoria viva.",
              feedback: "🎉 ¡Decisión Impecable! Las sabedoras se sintieron profundamente respetadas y Elena consideró que la experiencia adquirió un valor cultural invaluable.",
              satisfaction: 100
            },
            {
              id: "opt2",
              choiceType: "Complacencia Extractivista",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Dejar que los visitantes tomen fotos libremente porque “el cliente siempre tiene la razón”.",
              feedback: "❌ ¡Destrucción ética! Rompes la confianza de las abuelas, la asamblea comunitaria cancela el convenio y Elena abandona el proyecto por considerarte un operador irrespetuoso.",
              satisfaction: 15
            },
            {
              id: "opt3",
              choiceType: "Cancelación Exagerada",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Suspender por completo las visitas al resguardo y cancelar el programa.",
              feedback: "❌ ¡Exageración dañina! La comunidad no quiere que el proyecto muera; solo pide normas claras de convivencia. Cancelar todo deja a las artesanas sin ingresos.",
              satisfaction: 30
            }
          ]
        },
        {
          id: "e-piv-2",
          clientName: "Turista Influencer",
          avatarMood: "neutral",
          badge: "Petición “Farándula TikTok” (¡Rechazar!)",
          feedbackQuote: "“Las abuelas tejen muy bonito pero el taller es muy silencioso. ¿Por qué no ponen música caribeña, plumas fosforescentes y hacen un baile para hacer videos de TikTok?”",
          teaching: "Cuándo decir NO: La autenticidad no se vende al espectáculo frívolo. Ceder a este capricho destruiría la identidad patrimonial de raíz.",
          options: [
            {
              id: "opt1",
              choiceType: "Rechazar y Defender la Autenticidad",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Rechazar con pedagogía: explicar que la tejeduría es un acto de meditación y pensamiento ancestral, no un espectáculo de feria.",
              feedback: "🎉 ¡Protección de Identidad! Mantener la verdad patrimonial aleja a los curiosos superficiales y consolida el respeto de investigadoras como Elena.",
              satisfaction: 96
            },
            {
              id: "opt2",
              choiceType: "Montar un Show Falso",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Pagarle a un grupo para que baile con disfraces llamativos y montar un show de luces.",
              feedback: "❌ Creaste un “show de circo falso”. Las abuelas se sienten humilladas y los turistas conscientes denuncian tu proyecto por folclorismo falso.",
              satisfaction: 10
            },
            {
              id: "opt3",
              choiceType: "Echar al visitante groseramente",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Gritarle al turista y expulsarlo del pueblo de inmediato.",
              feedback: "❌ La hostilidad genera conflictos. La respuesta correcta es educar con firmeza y serenidad.",
              satisfaction: 30
            }
          ]
        },
        {
          id: "e-piv-3",
          clientName: "Elena (Investigadora)",
          avatarMood: "happy",
          badge: "Sugerencia Académica Fructífera",
          feedbackQuote: "“El taller es maravilloso, pero al llegar no conocía los nombres de las fibras ni de las plantas tintóreas. Un pequeño glosario previo enriquecería muchísimo la experiencia.”",
          teaching: "Pivote de Contenido: escuchar las sugerencias que agregan rigor y valor educativo sin costos exorbitantes.",
          options: [
            {
              id: "opt1",
              choiceType: "Pivote Educativo de Bajo Costo",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Diseñar e imprimir una libreta de campo artesanal con el glosario ilustrado en lengua nativa y español ($2 USD por viajero).",
              feedback: "🎉 ¡Acierto Total! El glosario se convirtió en una joya que los visitantes guardan como un tesoro y citan en sus publicaciones académicas.",
              satisfaction: 98
            },
            {
              id: "opt2",
              choiceType: "Desinterés",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirle: “Aquí no vinimos a escribir libros sino a tejer y ya”.",
              feedback: "❌ Desprecias el interés genuino de tu arquetipo. Un operador cultural de excelencia facilita el conocimiento.",
              satisfaction: 25
            },
            {
              id: "opt3",
              choiceType: "Contratar un Comité Científico Costoso",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Contratar a 3 botánicos internacionales para hacer una enciclopedia de 500 páginas.",
              feedback: "❌ Sobre-inversión innecesaria que agota el presupuesto. Una libreta sencilla con las abuelas bastaba.",
              satisfaction: 40
            }
          ]
        },
        {
          id: "e-piv-4",
          clientName: "Agencia de Turismo Masivo de Ciudad",
          avatarMood: "neutral",
          badge: "Propuesta de Masificación (¡Rechazar!)",
          feedbackQuote: "“Tenemos 2 buses con 80 personas cada semana para traer a la comunidad, pero necesitamos que nos bajen el precio al 50% y metan a todos al mismo taller.”",
          teaching: "Capacidad de Carga y Ética: El volumen masivo destruye el patrimonio frágil y despoja a las comunidades de sus tarifas justas.",
          options: [
            {
              id: "opt1",
              choiceType: "Rechazar por Capacidad de Carga",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Rechazar la oferta: la capacidad de carga comunitaria es de máximo 8 personas por grupo para no alterar la vida local y garantizar pago digno.",
              feedback: "🎉 ¡Criterio Sostenible Extraordinario! Los 80 turistas habrían colapsado el agua y la tranquilidad del resguardo. Tu proyecto preserva su alma.",
              satisfaction: 95
            },
            {
              id: "opt2",
              choiceType: "Aceptar por Dinero Rápido",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Aceptar el contrato de los 80 turistas y meterlos apretados a la maloka comunitaria.",
              feedback: "❌ Colapso y quiebra social. Las abuelas renuncian exhaustas, se rompe el tejido comunitario y el proyecto muere en 3 meses.",
              satisfaction: 10
            },
            {
              id: "opt3",
              choiceType: "Pedirles el triple de precio sin límites",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirles que traigan a los 80 pero cobrándoles el triple para volverse ricos.",
              feedback: "❌ El dinero no reemplaza la capacidad de carga física y cultural de un territorio.",
              satisfaction: 20
            }
          ]
        }
      ],
      pivotScenario: {
        feedbackReceived: "Las abuelas sabedoras te dicen en privado: “Nos incomoda que los visitantes saquen celulares y cámaras durante las ceremonias y rezos sagrados”.",
        question: "¿Qué decisión tomas como coordinador para proteger el respeto sagrado y la autenticidad del viaje?",
        options: [
          {
            id: "opt1",
            label: "A) Dejar que los visitantes tomen fotos libremente porque pagaron su viaje y quieren publicar en Instagram",
            isCorrect: false,
            verdict: "❌ ¡Destrucción ética! Rompes la confianza de las abuelas, la asamblea comunitaria cancela el convenio y Elena abandona el proyecto por considerarte un operador irrespetuoso.",
            satisfaction: 15
          },
          {
            id: "opt2",
            label: "B) Suspender por completo las visitas al resguardo y cancelar el programa",
            isCorrect: false,
            verdict: "❌ ¡Exageración dañina! La comunidad no quiere que el proyecto muera; solo pide normas claras de convivencia. Cancelar todo deja a las artesanas sin ingresos.",
            satisfaction: 30
          },
          {
            id: "opt3",
            label: "C) Crear el protocolo “Cero Cámaras”: celulares guardados durante los momentos sagrados; solo bocetos a mano y memoria viva",
            isCorrect: true,
            verdict: "🎉 ¡Decisión Impecable! Las sabedoras se sintieron profundamente respetadas y Elena consideró que la experiencia adquirió un valor cultural invaluable.",
            satisfaction: 100
          }
        ]
      }
    },

    familia: {
      // Acto 1: El Lienzo (La mente de la Familia Ramírez)
      profileTokens: [
        {
          id: "f-t1",
          label: "“Llevar a mis dos hijos de 6 y 9 años a conocer cascadas y aves en un sendero accesible sin peligros de caídas mortales”",
          category: "trabajo",
          subType: "funcional",
          subTypeLabel: "Trabajo Funcional (La tarea práctica)",
          explanation: "La actividad formativa y recreativa que la familia vino a realizar en la naturaleza.",
          feedback: "¡Correcto! Los trabajos funcionales definen la tarea práctica que desean vivir."
        },
        {
          id: "f-t2",
          label: "“Ser vistos ante la familia y la escuela como padres ejemplares que inculcan amor por la ecología y cero adicción a pantallas”",
          category: "trabajo",
          subType: "social",
          subTypeLabel: "Trabajo Social (Cómo me ven los demás)",
          explanation: "La percepción de éxito educativo y responsabilidad parental ante los demás.",
          feedback: "¡Brillante! El trabajo social refleja el estatus y prestigio como padres conscientes."
        },
        {
          id: "f-t3",
          label: "“Tener la serenidad mental de saber que como padre tengo la seguridad y salud de mis hijos 100% blindada”",
          category: "trabajo",
          subType: "emocional",
          subTypeLabel: "Trabajo Emocional (Cómo me siento por dentro)",
          explanation: "El sentimiento interno de protección, alivio y control ante cualquier eventualidad.",
          feedback: "¡Exacto! El trabajo emocional se concentra en la tranquilidad interior del cuidador."
        },
        {
          id: "f-t4",
          label: "“Que el sendero carezca de barandas, señalización o pasamanos en los tramos empinados con barro resbaladizo”",
          category: "dolor",
          subType: "obstaculo",
          subTypeLabel: "Dolor de Obstáculo (La traba del camino)",
          explanation: "Una barrera física que frena o imposibilita caminar con niños pequeños.",
          feedback: "¡Muy bien! Un dolor de obstáculo es la dificultad práctica que impide el avance seguro."
        },
        {
          id: "f-t5",
          label: "“Que un niño se corte con una piedra o beba agua contaminada y no haya botiquín, médico ni evacuación a 3 horas”",
          category: "dolor",
          subType: "riesgo",
          subTypeLabel: "Dolor de Riesgo (El peligro temido)",
          explanation: "La peor pesadilla de un padre: una emergencia médica infantil sin auxilio profesional.",
          feedback: "¡En el blanco! El dolor de riesgo es el peligro fatal no deseado que los paraliza."
        },
        {
          id: "f-t6",
          label: "“Ver a los niños embarrarse las manos felices haciendo figuras de arcilla y comiendo fruta fresca del árbol”",
          category: "deseo",
          subType: "deseo",
          subTypeLabel: "Alegría Deseada (El sueño)",
          explanation: "La postal familiar soñada de infancia sana y feliz en contacto con la tierra.",
          feedback: "¡Excelente! La alegría que justifica con creces el costo del viaje familiar."
        },
        {
          id: "f-t7",
          label: "“Comprar una suscripción a una revista digital de ornitología con fotos científicas avanzadas”",
          category: "trap",
          isTrap: true,
          subType: "trap",
          subTypeLabel: "Trampa: Tu Propia Solución",
          explanation: "Un producto editorial especializado que no resuelve la diversión infantil ni la seguridad médica de la familia.",
          feedback: "⚠️ ¡ALERTA! Una revista técnica no es una necesidad familiar. ¡Mantenla fuera de la mente del cliente!"
        }
      ],

      // Acto 2: El Círculo de Mercado
      marketSimulation: {
        circleColor: "amber",
        levels: [
          {
            level: 1,
            name: "Dolor Cosmético (Cosas bonitas pero secundarias)",
            action: "Regalar gorras fluorescentes y colocar un inflable saltarín en el parqueadero",
            buyerCount: 1,
            satisfactionPercent: 5,
            mood: "sad",
            sales: "$240 USD",
            feedbackQuote: "“El inflable estaba sucio, el sendero era un lodazal peligroso sin barandas y el agua no era potable. ¡Jamás volveré a arriesgar la salud de mis hijos así!”",
            analysis: "Fracaso total: Los padres no compran juguetes plásticos si la salud de sus hijos está en peligro."
          },
          {
            level: 2,
            name: "Dolor Moderado (Comodidades estándar)",
            action: "Ofrecer menú infantil con papas fritas y área de juegos tradicional",
            buyerCount: 9,
            satisfactionPercent: 36,
            mood: "neutral",
            sales: "$2,160 USD",
            feedbackQuote: "“La comida estuvo bien, pero estuvimos todo el día en tensión de que los niños se cayeran en las piedras del río.”",
            analysis: "Resultado tibio: No se diferencia de cualquier restaurante campestre con juegos."
          },
          {
            level: 3,
            name: "Dolor Crítico (Eliminar la pesadilla médica)",
            action: "Filtro de agua potable certificado + Senderos con barandas de guadua + Paramédico y seguro pediátrico con ambulancia en base",
            buyerCount: 25,
            satisfactionPercent: 100,
            mood: "happy",
            sales: "$6,000 USD",
            feedbackQuote: "“Los niños aprendieron de botánica, se divirtieron como nunca y como mamá tuve una tranquilidad que no tiene precio en el mundo. ¡Ya reservamos con los primos!”",
            analysis: "¡Éxito familiar absoluto! Cuando blindas la seguridad infantil, los padres compran con alegría y fidelidad de por vida."
          }
        ]
      },

      // Acto 3: Los 3 Pasos del Encaje
      fitGame: {
        availableCards: [
          {
            id: "f-fit-1",
            name: "Botiquín Pediátrico de Trauma + Póliza con Ambulancia 4x4 y Paramédico",
            category: "Aliviador de Dolor",
            correctFor: "familia",
            matchesWith: "Que un niño se corte o beba agua contaminada sin médico a 3 horas",
            feedback: "¡Calza perfecto! Elimina el temor más angustiante de los padres."
          },
          {
            id: "f-fit-2",
            name: "Senderos Seguros con Pasamanos de Guadua y Agua Potable Filtrada Ilimitada",
            category: "Servicio Clave",
            correctFor: "familia",
            matchesWith: "Falta de barandas o pasamanos en tramos empinados",
            feedback: "¡Excelente! Resuelve el obstáculo de movilidad segura infantil."
          },
          {
            id: "f-fit-3",
            name: "Taller Lúdico de Huerta Orgánica y Modelado en Barro Guiado por Pedagoga",
            category: "Creador de Alegría",
            correctFor: "familia",
            matchesWith: "Deseo de que los hijos jueguen con barro y fruta del árbol",
            feedback: "¡Brillante! Cumple el sueño formativo y recreativo de los niños."
          },
          {
            id: "f-fit-wrong-1",
            name: "Cata Nocturna de Vinos de Origen con Degustación de Quesos Madurados",
            category: "Creador de Alegría",
            correctFor: "martin",
            matchesWith: "Experiencia gastronómica ejecutiva",
            feedback: "❌ ¡Desconexión! Una cata de vinos nocturna no es un plan para niños de 6 y 9 años que deben acostarse temprano."
          },
          {
            id: "f-fit-wrong-2",
            name: "Inmersión Espiritual de Ayuno y Silencio en la Selva",
            category: "Servicio Clave",
            correctFor: "elena",
            matchesWith: "Retiro etnográfico",
            feedback: "❌ ¡Desconexión! Someter a niños pequeños a un ayuno de silencio en la selva es impracticable y angustiante."
          }
        ],
        stages: [
          {
            level: 1,
            title: "Paso 1: ¿La idea cuadra en la cabeza de los padres?",
            subtitle: "La seguridad y la lúdica infantil dialogan como espejo",
            metricTitle: "Alineación de la Oferta:",
            metricValue: "100% de tranquilidad para padres",
            description: "Tu propuesta equilibra a la perfección el rigor de seguridad médica que exigen los padres con la diversión de los niños."
          },
          {
            level: 2,
            title: "Paso 2: ¿Los padres compran y recomiendan a otros colegios?",
            subtitle: "El canal de recomendación de familias se dispara",
            metricTitle: "Familias referidas:",
            metricValue: "8 de cada 10 reservas vienen de chats de colegios",
            description: "Las familias recomiendan la reserva en los grupos de WhatsApp de los colegios de sus hijos."
          },
          {
            level: 3,
            title: "Paso 3: ¿El paquete familiar deja ganancia para el proyecto?",
            subtitle: "Mayor consumo de comidas y talleres",
            metricTitle: "Ganancia limpia por grupo familiar:",
            metricValue: "$90 USD libres por pasadía completo",
            description: "El paquete familiar de $240 USD/día cubre con creces el costo del paramédico y la pedagoga, dejando excelente ganancia para la comunidad."
          }
        ]
      },

      // Acto 4: Probar sin Quebrar
      leanExperiment: {
        hypothesisCard: {
          title: "La Gran Duda que puede quebrar el proyecto:",
          creemosQue: "Estamos suponiendo que los padres de familia pagarán $240 USD por un pasadía en la naturaleza con talleres de huerta y barro si les garantizamos seguridad médica total.",
          criticidad: "Peligro Mortal: Si los padres prefieren una piscina tradicional y no quieren huerta de barro, el proyecto quiebra."
        },
        testCard: {
          title: "Tarjeta de Prueba Rápida:",
          paraVerificar: "Organizar un “Pasadía Piloto” con 4 familias amigas cobrando solo los materiales y el almuerzo ($150 USD total).",
          mediremos: "Si los niños se divierten en la huerta y si los padres quieren reservar para sus próximas vacaciones.",
          tendremosRazonSi: "Al menos 3 de las 4 familias piden fechas para volver con los primos o amigos del colegio."
        },
        experiments: [
          {
            id: "catastrofe",
            name: "Construir una Piscina Climatizada de Concreto con Tobogán",
            type: "Construir a Ciegas (La Quiebra por Deudas)",
            cost: 4950,
            evidenceScore: "Nula y Riesgosa",
            cashLeft: 50,
            outcome: "La obra tarda 8 meses y se traga los $4,950 USD de tus ahorros. La piscina atrae grupos ruidosos que espantan a las familias que buscaban naturaleza. Te quedas con $50 USD y en quiebra técnica.",
            isWinner: false
          },
          {
            id: "conserje",
            name: "Experimento de “Pasadía Piloto” con 4 Familias Amigas",
            type: "Ensayo Directo de Campo",
            cost: 150,
            evidenceScore: "Observación Real con Niños",
            cashLeft: 4850,
            outcome: "Los niños quedan fascinados con la huerta y los animales. Los padres confirman que prefieren naturaleza viva antes que otra piscina. Ahorras $4,850 USD en la alcancía.",
            isWinner: true
          },
          {
            id: "preventa",
            name: "Preventa de Cupos Tempranos en Grupos de Padres de Familia",
            type: "Validación de Anticipos",
            cost: 180,
            evidenceScore: "Plata en Mano de Padres",
            cashLeft: 4820,
            outcome: "Ofreces 10 paquetes familiares con 20% de descuento por reserva anticipada. Se venden en 3 días recaudando $1,900 USD de anticipos reales.",
            isWinner: true
          },
          {
            id: "landing",
            name: "Guía Digital Descargable: “Rutas Seguras para Niños en el Campo”",
            type: "Prueba de Interés de Familias",
            cost: 90,
            evidenceScore: "Contactos Interesados",
            cashLeft: 4910,
            outcome: "Gastas $90 USD en promocionar la guía. 240 familias dejan su WhatsApp pidiendo fecha de inauguración a mínimo costo.",
            isWinner: true
          }
        ]
      },

      // Mapa de Valor Oficial (Pilar 2)
      valueMap: {
        headline: "Propuesta de Valor de la Familia Ramírez: Naturaleza Segura & Confort Familiar",
        products: [
          { title: "Cabaña Familiar Campestre con Habitación Conectada", desc: "Alojamiento con camas para niños, sin desniveles peligrosos y agua caliente.", icon: "🏡" },
          { title: "Sendero Natural Guiado de Baja Dificultad", desc: "Caminata plana de 1.5 km con puentecitos de madera y barandas seguras.", icon: "🥾" },
          { title: "Huerta Viva y Granja Interactiva Infantil", desc: "Espacio pedagógico para recolectar fresas, alimentar cabritas y aprender del campo.", icon: "🍓" }
        ],
        painRelievers: [
          { title: "Agua Potable Certificada con Filtro UV", relieves: "Terror a diarreas e intoxicaciones infantiles", desc: "Sistema de filtración certificado para consumo infantil seguro garantizado.", icon: "💧" },
          { title: "Botiquín Pediátrico y Paramédico en Sitio", relieves: "Pánico a caídas, fracturas o picaduras sin auxilio", desc: "Personal entrenado en primeros auxilios y protocolo de evacuación médica rápida.", icon: "🩺" },
          { title: "Muro de Botas de Caucho para Niños", relieves: "Miedo a dañar calzado nuevo en el lodo del sendero", desc: "Botitas amarillas de todas las tallas listas para chapotear sin ensuciar los tenis.", icon: "👢" }
        ],
        gainCreators: [
          { title: "Kit de Explorador de la Naturaleza", creates: "Sueño de ver a sus hijos aprender en la naturaleza", desc: "Lupa de madera, cuaderno de aves ilustrado y gorra de explorador para cada niño.", icon: "🔍" },
          { title: "Cosecha de Fresas y Taller de Galletas Campesinas", creates: "Momentos familiares inolvidables", desc: "Actividad donde los niños cocinan su merienda con las abuelas campesinas.", icon: "🍪" }
        ],
        badMapComparison: {
          title: "El Mapa de Valor Cosmético (Por qué fracasa)",
          flawExplanation: "Ofrecer “cuatrimotos y deportes extremos de alta velocidad”. Aterroriza a los padres porque expone a niños de 6 años a accidentes mortales. La familia huye asustada.",
          items: ["Cuatrimotos a toda velocidad", "Escalada extrema sin seguridad infantil", "Comida chatarra procesada"]
        }
      },

      // Acto 4: El Dilema del Emprendedor (Pivote y Filtrado de Feedback)
      pivotDilemmas: [
        {
          id: "f-piv-1",
          clientName: "Familia Ramírez (Padres de Familia)",
          avatarMood: "shocked",
          badge: "Dolor Operativo Familiar",
          feedbackQuote: "“La caminata y la huerta con los niños estuvieron hermosas, pero el lodo del sendero les dañó las zapatillas nuevas a los niños y nos dio dolor de cabeza limpiarlos.”",
          teaching: "Cuándo hacer un PIVOTE INTELIGENTE: Resolver una queja práctica de los padres con un detalle económico que además se vuelve icónico.",
          options: [
            {
              id: "opt1",
              choiceType: "Pivote con Muro de Botitas",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Instalar un “Muro de Botitas Pantaneras”: botitas amarillas de todas las tallas infantiles listas para prestar a la llegada.",
              feedback: "🎉 ¡Golpe Maestro! Las botitas amarillas se volvieron la foto obligatoria en redes. Los padres se sintieron cuidados y los niños felices de chapotear sin regaños.",
              satisfaction: 99
            },
            {
              id: "opt2",
              choiceType: "Gasto Antiecológico",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Pavimentar con cemento y baldosa todo el sendero de la huerta campesina.",
              feedback: "❌ ¡Gasto inútil y antiecológico! Pavimentar cuesta miles de dólares y le quita la magia de la tierra viva que los niños vinieron a conocer.",
              satisfaction: 40
            },
            {
              id: "opt3",
              choiceType: "Regaño al Cliente",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirles a los papás que el campo es con barro y que la próxima traigan tenis viejos.",
              feedback: "❌ ¡Pésima atención familiar! Haces sentir a los padres regañados e incómodos. Nadie que sea tratado con desdén vuelve a recomendarte en su colegio.",
              satisfaction: 20
            }
          ]
        },
        {
          id: "f-piv-2",
          clientName: "Turista Aficionado a Motores",
          avatarMood: "neutral",
          badge: "Petición Peligrosa (¡Rechazar!)",
          feedbackQuote: "“El sendero campesino es amplio. ¿Por qué no compran 4 cuatrimotos y las alquilan para que los turistas aceleren por el camino?”",
          teaching: "Cuándo decir NO por Seguridad: Jamás mezcles actividades de alta velocidad con turismo familiar infantil. El riesgo de atropello destruiría la confianza.",
          options: [
            {
              id: "opt1",
              choiceType: "Rechazar por Seguridad Infantil",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Rechazar rotundamente: el sendero es exclusivo para el caminar seguro de niños y familias. Cero vehículos a motor.",
              feedback: "🎉 ¡Protección de la Propuesta de Valor! La seguridad infantil es tu principal aliviador de dolor. Meter cuatrimotos habría provocado una tragedia.",
              satisfaction: 96
            },
            {
              id: "opt2",
              choiceType: "Aceptar para Ganar Más",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Comprar las cuatrimotos y dejar que anden por el mismo sendero de los niños.",
              feedback: "❌ Desastre y pánico. El ruido de los motores asusta a los animales de la huerta y los padres se van aterrorizados por el riesgo de atropello.",
              satisfaction: 10
            },
            {
              id: "opt3",
              choiceType: "Decir que sí pero solo 1 hora al día",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Permitir cuatrimotos al mediodía cuando los niños están almorzando.",
              feedback: "❌ El olor a gasolina y el ruido destruyen la paz campesina. En seguridad no hay medias tintas.",
              satisfaction: 25
            }
          ]
        },
        {
          id: "f-piv-3",
          clientName: "Mamá de la Familia Ramírez",
          avatarMood: "neutral",
          badge: "Petición de Menú Saludable",
          feedbackQuote: "“A los niños les encantó la huerta pero en el almuerzo los platos tenían condimentos muy fuertes y picantes que ellos no comen. ¿Habría algo más suave?”",
          teaching: "Pivote de Cocina Familiar: adaptar la sazón a paladares infantiles usando los mismos productos frescos de la huerta.",
          options: [
            {
              id: "opt1",
              choiceType: "Menú Infantil Campesino Saludable",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Crear el “Menú Infantil de la Huerta”: cremas naturales de calabaza, papitas criollas al vapor, pollo campesino suave y frutas frescas.",
              feedback: "🎉 ¡Acierto Gastronómico! Los niños se comen todo con gusto, los padres quedan encantados de que coman sano y el costo de ingredientes es bajo y local.",
              satisfaction: 98
            },
            {
              id: "opt2",
              choiceType: "Comida Chatarra Procesada",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Comprar cajas de nuggets congelados industriales y salchichas de paquete en el supermercado.",
              feedback: "❌ Desilusión. Los padres trajeron a los niños al campo para comer comida sana de la tierra, no ultraprocesados de paquete.",
              satisfaction: 35
            },
            {
              id: "opt3",
              choiceType: "Rigidez Culinaria",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Decirle: “Aquí se come lo que hay o traigan su propia comida”.",
              feedback: "❌ Inflexibilidad destructiva. Los niños lloran con hambre y la familia decide recortar su estadía.",
              satisfaction: 20
            }
          ]
        },
        {
          id: "f-piv-4",
          clientName: "Huésped Despreocupado",
          avatarMood: "neutral",
          badge: "Petición de Guardería (¡Rechazar!)",
          feedbackQuote: "“Queremos irnos todo el día de rumba al pueblo vecino. ¿Pueden dejar a los niños de 3 y 5 años con ustedes en la cocina para que los cuiden hasta la noche?”",
          teaching: "Límites del Servicio: Tu proyecto es un alojamiento de ecoturismo familiar, no una guardería infantil sin acreditación legal ni custodia responsable.",
          options: [
            {
              id: "opt1",
              choiceType: "Rechazar y Recordar Política de Acompañamiento",
              archetypeChoice: "Acierto",
              isCorrect: true,
              text: "Rechazar con claridad: las actividades de naturaleza requieren la presencia y custodia responsable de los padres. El personal no puede asumir custodia legal.",
              feedback: "🎉 ¡Madurez Operativa! Asumir la custodia de menores sin los padres expone al negocio a responsabilidades legales gravísimas. Los límites claros protegen tu proyecto.",
              satisfaction: 94
            },
            {
              id: "opt2",
              choiceType: "Aceptar la Custodia a Ciegas",
              archetypeChoice: "Exceso",
              isCorrect: false,
              text: "Aceptar cuidar a los niños en la cocina mientras atiendes a otros 20 comensales.",
              feedback: "❌ Peligro legal y físico inminente. La cocina tiene fogones calientes y cuchillos. Un accidente aquí clausuraría el negocio para siempre.",
              satisfaction: 15
            },
            {
              id: "opt3",
              choiceType: "Cobrarles una tarifa clandestina",
              archetypeChoice: "Terquedad",
              isCorrect: false,
              text: "Cobrarles $50 USD por debajo de la mesa para que un guía campesino se siente con ellos.",
              feedback: "❌ Irresponsabilidad mayúscula. No puedes improvisar servicios de alto riesgo por dinero fácil.",
              satisfaction: 20
            }
          ]
        }
      ],
      pivotScenario: {
        feedbackReceived: "Los padres te dicen: “La huerta estuvo hermosa, pero el barro les dañó las zapatillas nuevas a los niños y nos dio dolor de cabeza limpiarlos”.",
        question: "¿Qué decisión tomas como anfitrión para solucionar este dolor familiar sin perder la esencia del campo?",
        options: [
          {
            id: "opt1",
            label: "A) Pavimentar con cemento y baldosa todo el sendero de la huerta campesina",
            isCorrect: false,
            verdict: "❌ ¡Gasto inútil y antiecológico! Pavimentar cuesta miles de dólares y le quita la magia de la tierra viva que los niños vinieron a conocer.",
            satisfaction: 40
          },
          {
            id: "opt2",
            label: "B) Decirles a los papás que el campo es con barro y que la próxima traigan tenis viejos",
            isCorrect: false,
            verdict: "❌ ¡Pésima atención familiar! Haces sentir a los padres regañados e incómodos. Nadie que sea tratado con desdén vuelve a recomendarte en su colegio.",
            satisfaction: 20
          },
          {
            id: "opt3",
            label: "C) Instalar un “Muro de Botitas Pantaneras”: botitas amarillas de todas las tallas infantiles limpias listas para prestar a la llegada",
            isCorrect: true,
            verdict: "🎉 ¡Golpe Maestro! Las botitas amarillas se volvieron la foto obligatoria en redes. Los padres se sintieron cuidados y los niños felices de chapotear sin regaños.",
            satisfaction: 99
          }
        ]
      }
    }
  },

  // 3. Reglas Finales de Cierre (Las 3 Verdades)
  rules: [
    {
      number: "01",
      title: "El cliente abstracto no existe",
      desc: "Diseñar para “todo el mundo” es la receta infalible para el fracaso. Lo que para Martín es un lujo supremo (el silencio), para Elena es secundario frente a la ética comunitaria, y para la familia es nada frente a la seguridad médica de sus hijos."
    },
    {
      number: "02",
      title: "El encaje se conquista en 3 batallas",
      desc: "Primero encajas en papel (tu idea tiene sentido lógico). Luego encajas en la calle (la gente de verdad saca la plata y paga). Y finalmente encajas en las cuentas (tus costos de operación no te quiebran)."
    },
    {
      number: "03",
      title: "Enamórate del problema, no de tu solución",
      desc: "Comprar certeza con $150 USD mediante experimentos baratos siempre salvará tu patrimonio frente a quien se endeuda gastando $5,000 USD en construir castillos en el aire antes de escuchar al mercado."
    }
  ]
};
