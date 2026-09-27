export const certificacionData = {
  badge: "Cierre y Evaluación",
  title: "Certificación<br />Oficial",
  description: "Demuestra lo aprendido en la cápsula de Diseño de Producto Turístico y obtén tu sello verificable de Cultura T.",
  completionTitle: "¡Has completado el contenido!",
  completionDesc: "Felicidades por completar el estudio de los 7 módulos de Diseño de Producto Turístico Territorial. Si lo deseas, puedes realizar la evaluación de conocimientos para obtener tu certificado oficial.",
  exitBtn: "Volver a Inicio",
  certBtn: "Sí, Quiero Certificarme",
  formularioLegal: {
    title: "Paso 3: Formulario de Registro",
    description: "Por favor, ingresa tus datos legales tal como deseas que aparezcan en tu certificado oficial.",
    privacyNoticeTitle: "Aviso de Privacidad:",
    privacyNotice: "Tus datos serán vinculados al Sello Matemático criptográfico y registrados en el libro oficial de egresados de Cultura T para efectos de verificación pública de tus competencias.",
    nameLabel: "Nombres y Apellidos Completos",
    namePlaceholder: "Ej. Juan Pérez López",
    idLabel: "Número de Identificación (C.C. o NIT)",
    idPlaceholder: "Ej. 1.020.304.050",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "Ej. usuario@correo.com",
    processingBtn: "Generando...",
    continueBtn: "Generar Certificado Oficial"
  },
  encuesta: {
    title: "Paso 1: Encuesta de Satisfacción",
    description: "Para continuar a la calificación y certificar tu participación, debes ayudarnos a mejorar respondiendo esta encuesta.",
    anonymousNotice: "(Tus respuestas aquí son 100% anónimas)",
    questions: [
      {
        id: "q1",
        label: "1. ¿Consideras que esta cápsula te ha permitido adquirir nuevos conocimientos que antes no tenías?",
        options: ["Mucho", "Algo", "Poco"]
      },
      {
        id: "q2",
        label: "2. ¿Qué tanto crees que ha mejorado tu comprensión sobre el diseño de productos turísticos territoriales?",
        options: ["Notablemente", "Moderadamente", "Nada"]
      },
      {
        id: "q3",
        label: "3. ¿Sientes que lo aprendido te será verdaderamente útil para aplicarlo en tu entorno profesional o proyecto?",
        options: ["Totalmente", "Parcialmente", "No"]
      },
      {
        id: "q4",
        label: "4. ¿El formato y contenido de la cápsula facilitaron tu proceso de aprendizaje?",
        options: ["Sí, muy claro", "Regular", "No fue claro"]
      },
      {
        id: "q5",
        label: "5. ¿Consideras que tus habilidades o capacidades se han fortalecido gracias a esta capacitación?",
        options: ["Definitivamente", "Tal vez", "No"]
      }
    ],
    commentsLabel: "6. (Opcional) Déjanos tus comentarios o sugerencias sobre la calidad de la cápsula.",
    submitBtn: "Enviar y Pasar a la Evaluación"
  },
  quiz: {
    title: "Paso 2: Evaluación de Conocimientos",
    courseName: "Diseño de Producto Turístico Territorial",
    courseId: "C2-Producto",
    horas: "3",
    questions: [
      {
        id: "q1",
        text: "En el Módulo 2 vimos el concepto de 'Buyer Persona'. ¿Qué significa esto?",
        options: [
          {
            id: "a",
            text: "Una lista de agencias de viaje con las que hay que firmar contratos."
          },
          {
            id: "b",
            text: "Un perfil semi-ficticio de tu cliente ideal, incluyendo sus dolores, deseos y comportamientos."
          },
          {
            id: "c",
            text: "La persona encargada de cobrar a los turistas cuando llegan al territorio."
          }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q2",
        text: "¿Por qué NO se recomiendan los planes abstractos como 'hacer un folleto', sino acciones S.M.A.R.T?",
        options: [
          {
            id: "a",
            text: "Porque la metodología S.M.A.R.T exige que sean medibles, con un responsable y un límite de tiempo claro."
          },
          {
            id: "b",
            text: "Porque hacer un folleto es muy costoso para la comunidad."
          },
          {
            id: "c",
            text: "Porque el turismo no necesita publicidad."
          }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
      },
      {
        id: "q3",
        text: "¿Qué elemento es fundamental dentro de la 'Ficha de Producto' vista en el Módulo 6?",
        options: [
          {
            id: "a",
            text: "La lista detallada de los ingredientes de cada comida."
          },
          {
            id: "b",
            text: "Los nombres de todos los habitantes del municipio."
          },
          {
            id: "c",
            text: "El itinerario por horas, los costos asociados y el precio final de venta."
          }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
      },
      {
        id: "q4",
        text: "En el análisis de la 'Cadena de Valor' (Módulo 5), ¿qué se considera una 'brecha'?",
        options: [
          {
            id: "a",
            text: "Un espacio físico o distancia muy larga entre dos atractivos turísticos."
          },
          {
            id: "b",
            text: "Un eslabón faltante o deficiente que rompe la continuidad y calidad de la experiencia del turista."
          },
          {
            id: "c",
            text: "La diferencia de precios entre dos hoteles de la misma categoría."
          }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q5",
        text: "Según el Módulo 3, ¿cuál es el enfoque principal al redactar la 'Promesa de Valor' de una experiencia?",
        options: [
          {
            id: "a",
            text: "Hacer un cronograma exhaustivo de todos los lugares que se visitarán."
          },
          {
            id: "b",
            text: "Enfocarse exclusivamente en ofrecer los precios más bajos del mercado."
          },
          {
            id: "c",
            text: "Transmitir la transformación emocional, el mensaje o el aprendizaje clave que se llevará el turista."
          }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
      }
    ]
  }
};
