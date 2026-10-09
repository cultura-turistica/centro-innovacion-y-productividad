export const certificacionData = {
  badge: "Evaluación y Certificación Oficial",
  title: "Diseño de la<br />Propuesta de Valor",
  description: "Demuestra tu dominio en la metodología de Alexander Osterwalder (Strategyzer) y obtén tu certificado oficial verificable de Cultura T.",
  completionTitle: "¡Has completado el juego interactivo!",
  completionDesc: "Felicidades por completar la simulación estratégica de los 4 pilares. Ahora puedes presentar la evaluación de conocimientos para certificar 2 horas académicas con sello criptográfico.",
  exitBtn: "Volver al Juego",
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
    description: "Para continuar a la calificación y certificar tu participación, ayúdanos a mejorar respondiendo esta breve encuesta.",
    anonymousNotice: "(Tus respuestas aquí son 100% anónimas)",
    questions: [
      {
        id: "q1",
        label: "1. ¿Consideras que esta cápsula y simulador interactivo te permitieron adquirir nuevos conocimientos que antes no tenías?",
        options: ["Mucho", "Algo", "Poco"]
      },
      {
        id: "q2",
        label: "2. ¿Qué tanto crees que mejoró tu comprensión sobre la formulación de propuestas de valor efectivas?",
        options: ["Notablemente", "Moderadamente", "Nada"]
      },
      {
        id: "q3",
        label: "3. ¿Sientes que lo aprendido te será verdaderamente útil para aplicarlo en tu modelo de negocio o proyecto turístico/cultural?",
        options: ["Totalmente", "Parcialmente", "No"]
      },
      {
        id: "q4",
        label: "4. ¿El formato interactivo y la narrativa del simulador facilitaron tu proceso de aprendizaje?",
        options: ["Sí, muy claro y dinámico", "Regular", "No fue claro"]
      },
      {
        id: "q5",
        label: "5. ¿Consideras que tus habilidades para crear productos que el cliente realmente pague se han fortalecido?",
        options: ["Definitivamente", "Tal vez", "No"]
      }
    ],
    commentsLabel: "6. (Opcional) Déjanos tus comentarios o sugerencias sobre la calidad de la experiencia formativa.",
    submitBtn: "Enviar y Pasar a la Evaluación"
  },
  quiz: {
    title: "Paso 2: Evaluación de Conocimientos",
    courseName: "Diseño de la Propuesta de Valor",
    courseId: "C-PropuestaValor",
    horas: "2",
    questions: [
      {
        id: "q1",
        text: "Caso: Un hotel ecológico en una zona rural detecta que los viajeros sufren de estrés urbano y buscan desconexión total. No obstante, el hotel planea incluir desde el primer día spa de lujo, domótica avanzada y tours privados, lo que dispara el precio de la noche.\n\nPregunta: Según la técnica de desarrollo por fases para mantener el equilibrio, ¿cuál debería ser la Versión 1 (V1) de la propuesta de valor?",
        options: [
          { id: "a", text: "Incluir únicamente el spa de lujo y la domótica avanzada para posicionarse como marca de alto nivel." },
          { id: "b", text: "Cancelar el proyecto hasta reunir el presupuesto para ofrecer todos los servicios simultáneamente." },
          { id: "c", text: "Diseñar una V1 enfocada en hospedaje cómodo, limpio y rodeado de naturaleza que resuelva el dolor central (descanso), dejando el spa y la domótica para la V2." },
          { id: "d", text: "Ofrecer todos los servicios VIP pero con un descuento del 80% que genere pérdidas iniciales." }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
      },
      {
        id: "q2",
        text: "Caso: Una agencia de viajes local compite contra plataformas en línea masivas. Las plataformas ofrecen precios más bajos, pero los turistas suelen perder mucho tiempo organizando los traslados entre el aeropuerto, el hotel y los atractivos locales.\n\nPregunta: ¿Cómo puede la agencia articular la cadena de valor turística para fortalecer su propuesta de valor?",
        options: [
          { id: "a", text: "Ofrecer un paquete integrado (transporte local + guía comunitario + hospedaje) que elimine la fricción logística del viajero." },
          { id: "b", text: "Reducir sus precios por debajo de las plataformas online aunque opere con pérdidas." },
          { id: "c", text: "Recomendar a los clientes que usen el transporte público local sin brindarles asesoría." },
          { id: "d", text: "Abandonar la venta de paquetes turísticos y dedicarse únicamente a la venta de boletos aéreos." }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
      },
      {
        id: "q3",
        text: "Caso: Un colectivo de cocineros tradicionales lanza una ruta gastronómica. Para impresionar a los visitantes en su primer mes, alquilan camionetas blindadas de lujo y entregan regalos costosos, haciendo que el precio del tour sea inaccesible para la mayoría del mercado.\n\nPregunta: ¿En qué trampa de la propuesta de valor cayó este emprendimiento y cómo corregirla?",
        options: [
          { id: "a", text: "En la trampa de la obsolescencia; deben añadir más tecnologías digitales al recorrido." },
          { id: "b", text: "En la trampa de la falta de promoción; deben gastar más en publicidad internacional." },
          { id: "c", text: "No cayeron en ninguna trampa; es la estrategia correcta para cualquier negocio gastronómico." },
          { id: "d", text: "En la trampa del sobrecosto inicial; deben simplificar la V1 enfocándose en la comida y las historias locales, dejando el transporte VIP como opcional en V2." }
        ],
        correctHash: "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4"
      },
      {
        id: "q4",
        text: "Caso: Una empresa de rafting opera con éxito un recorrido básico de 2 horas, muy seguro y de precio accesible (V1). Varios clientes recurrentes empiezan a solicitar recorridos de día entero con acampada nocturna y fotografía profesional.\n\nPregunta: ¿Cómo debe gestionar la empresa esta nueva oportunidad según la estrategia de crecimiento escalonado?",
        options: [
          { id: "a", text: "Eliminar la V1 básica y obligar a todos los clientes a comprar la opción nocturna completa." },
          { id: "b", text: "Mantener la V1 estable para el público general e introducir el recorrido nocturno con fotografía como una V2 premium." },
          { id: "c", text: "Ignorar las solicitudes de los clientes para no modificar nada en la empresa." },
          { id: "d", text: "Ofrecer la acampada nocturna gratis a todos los clientes sin subir el precio de la V1." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q5",
        text: "Caso: Una startup crea una aplicación para conectar turistas con guías nativos. En sus entrevistas descubren que el mayor temor del turista es sufrir estafas o contratar personas sin experiencia.\n\nPregunta: ¿Cuál es el problema principal que debe resolver la propuesta de valor de la V1?",
        options: [
          { id: "a", text: "Desarrollar funciones complejas de realidad aumentada y filtros fotográficos." },
          { id: "b", text: "Crear una red social interna para que los guías chateen entre ellos." },
          { id: "c", text: "Implementar la verificación de identidad de los guías y un sistema de pago seguro en la app." },
          { id: "d", text: "Regalar viajes internacionales a los usuarios que más usen la aplicación." }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
      },
      {
        id: "q6",
        text: "Caso: Una empresa de embarcaciones turísticas lleva 10 años ofreciendo el mismo paseo fluvial sin cambios. Los competidores han comenzado a incluir audioguías en múltiples idiomas y pagos digitales, provocando una caída continua en las ventas de la empresa tradicional.\n\nPregunta: ¿Qué problema presenta la propuesta de valor de esta empresa?",
        options: [
          { id: "a", text: "Cayó en la obsolescencia por no actualizar su V1 ante las nuevas expectativas del mercado." },
          { id: "b", text: "Cayó en la trampa del sobrecosto por ofrecer demasiados servicios." },
          { id: "c", text: "Innovó demasiado rápido para lo que los turistas estaban preparados." },
          { id: "d", text: "No tiene ningún problema; las ventas caen por factores puramente externos." }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
      },
      {
        id: "q7",
        text: "Caso: Una red de posadas rurales satisface la necesidad de alojamiento. Para aumentar la satisfacción del turista y la rentabilidad de la zona, deciden aliarse con agricultores orgánicos y artesanos del pueblo.\n\nPregunta: ¿Qué beneficio genera esta integración en la cadena de valor turística?",
        options: [
          { id: "a", text: "Incrementa los costos operativos del hotel sin aportar ningún beneficio al cliente." },
          { id: "b", text: "Obliga a los turistas a trabajar en los cultivos durante su estancia." },
          { id: "c", text: "Reemplaza por completo el servicio de alojamiento por la venta de artesanías." },
          { id: "d", text: "Transforma el simple hospedaje en una experiencia cultural y gastronómica autóctona, aumentando el valor percibido." }
        ],
        correctHash: "18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4"
      },
      {
        id: "q8",
        text: "Caso: Un operador de senderismo tiene un producto básico muy vendido. Desea atraer a empresas corporativas e internacionales que exigen la medición de la huella de carbono y certificaciones internacionales de sostenibilidad.\n\nPregunta: ¿Cuál es la forma correcta de estructurar la propuesta de valor para este nuevo mercado?",
        options: [
          { id: "a", text: "Cobrarle las certificaciones ambientales a los clientes individuales de la V1 aunque no las pidan." },
          { id: "b", text: "Diseñar una V2 especializada (\"Corporate Eco-Tour\") que incluya la medición de huella y certificaciones, manteniendo la V1 accesible." },
          { id: "c", text: "Rechazar a las empresas corporativas para no complicar la operación." },
          { id: "d", text: "Cerrar el negocio actual y crear una firma de consultoría ambiental." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q9",
        text: "Caso: Un restaurante colonial ofrece platillos típicos y espectáculos folclóricos. En su apertura presentan 6 shows distintos por noche y un menú de 50 platos, lo que ocasiona demoras de más de una hora en la cocina y quejas del servicio.\n\nPregunta: ¿Cómo aplicar el principio de equilibrio en este establecimiento?",
        options: [
          { id: "a", text: "Reducir la V1 a un menú de 10 platillos estrella y 1 show principal bien ejecutado antes de ampliar la carta." },
          { id: "b", text: "Aumentar el menú a 100 platos para dar más variedad a los clientes." },
          { id: "c", text: "Eliminar la comida y dedicarse exclusivamente a cobrar la entrada a los espectáculos." },
          { id: "d", text: "Mantener el menú de 50 platos y contratar más meseros sin ajustar la cocina." }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
      },
      {
        id: "q10",
        text: "Caso: Una plataforma promete itinerarios VIP exclusivos con acceso privado a museos fuera de horario. No obstante, no han firmado convenios con los museos ni tienen personal suficiente en destino.\n\nPregunta: ¿Por qué esta propuesta de valor corre un alto riesgo de fracasar desde el inicio?",
        options: [
          { id: "a", text: "Porque el precio es demasiado bajo para la calidad del producto." },
          { id: "b", text: "Porque los turistas no están interesados en visitar museos fuera de horario." },
          { id: "c", text: "Porque lanzó una promesa de nivel V2 sofisticada sin respaldar las alianzas operativas básicas para cumplirla." },
          { id: "d", text: "Porque la aplicación funciona únicamente en teléfonos antiguos." }
        ],
        correctHash: "2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"
      }
    ]
  }
};
