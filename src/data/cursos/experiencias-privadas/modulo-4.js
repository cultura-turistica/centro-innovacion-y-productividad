export const modulo4Data = {
  header: {
    title: "Módulo 4: Estructuración del Negocio y MVP",
    description: "La experiencia validada se empaqueta para generar dinero. Pasamos de un experimento de laboratorio a una empresa real compitiendo en el mercado.",
    bgImage: "/assets/images/caso_virgin.webp"
  },
  podcast: {
    title: "La Funcionalidad Primero",
    audioSrc: "/assets/audios/C6-M4.wav",
    transcript: "Para diseñar una gran experiencia, primero debes cumplir lo básico. Piensa en Crepes & Waffles. Todo el mundo sabe que contratan a mujeres cabeza de familia, pero ese es un atributo social, no su promesa central. Su verdadera promesa de valor funcional es que la gente coma rico y a un precio justo. Si la comida fuera fea, por más labor social que hicieran, la gente no volvería. Lo funcional es tu Producto Mínimo Viable: si vas a ofrecer gastronomía local, asegúrate primero de que sepa delicioso y el lugar esté impecable. Una vez que cumples eso, le vas sumando la magia."
  },
  intro: {
    title: "El Motor (Business Model Canvas)",
    content: "No importa qué tan mágica o sensorial sea tu experiencia; si no es financieramente viable, es un hobby muy caro. A nivel técnico, debes definir tus Costos Críticos, tus Fuentes de Ingreso y, sobre todo, tus Aliados Clave."
  },
  comparacion: {
    leftTitle: "El Eslabón Débil",
    leftContent: "Si tu proveedor de transporte falla (llega tarde, sucio), tu experiencia entera falla. Tu aliado clave tiene el poder de destruir tu propuesta de valor sin que tú tengas la culpa.",
    rightTitle: "El Elevator Pitch",
    rightContent: "Toma tu Value Proposition Statement de la Módulo 2 y conviértelo en tu arma de ventas. Habla siempre de los dolores emocionales que resuelves, no de tu infraestructura técnica."
  },
  ejercicio: {
    title: "Encuentra al Early Adopter para tu MVP",
    instructions: "Tienes recursos limitados para tu primera versión (MVP). No puedes complacer a todos. Selecciona al cliente que perdonará los errores con tal de tener tu solución, y descarta a los demás.",
    profiles: [
      {
        type: "Turista Premium Exigente",
        budget: "Presupuesto Alto",
        quote: "Espero que todo sea perfecto. Si hay un solo error en el servicio, dejaré una mala reseña.",
        traits: ["Busca estatus", "Cero tolerancia al fracaso", "Demanda atención 24/7"],
        isEarlyAdopter: false,
        feedback: "¡Cuidado! Este perfil destruirá tu MVP. No tienen tolerancia a las fallas naturales de un producto temprano. Esperan un hotel de 5 estrellas, no un experimento."
      },
      {
        type: "Turista de Masas (Buscador de Ofertas)",
        budget: "Presupuesto Bajo",
        quote: "Solo me interesa si está en promoción. No me importan mucho los detalles.",
        traits: ["Sensible al precio", "Baja lealtad", "Busca lo convencional"],
        isEarlyAdopter: false,
        feedback: "El turista de masas no valora la innovación de tu MVP, solo el precio. Si construyes para ellos, terminarás compitiendo solo por ser el más barato."
      },
      {
        type: "El Aventurero Frustrado (Early Adopter)",
        budget: "Presupuesto Medio/Alto",
        quote: "Estoy harto de los tours genéricos. Pagaría feliz por algo auténtico, incluso si no tienen wifi.",
        traits: ["Siente el 'dolor' agudamente", "Busca la solución desesperadamente", "Perdona imperfecciones logísticas"],
        isEarlyAdopter: true,
        feedback: "¡Exacto! El Early Adopter ya siente el problema que intentas resolver. Valorarán tanto tu innovación que perdonarán que tu MVP sea rústico o tenga fallas."
      }
    ],
    tip: "El MVP es el vehículo más rápido para aprender si alguien está dispuesto a pagar por tu solución. Apunta a quienes sienten más dolor."
  }
};
