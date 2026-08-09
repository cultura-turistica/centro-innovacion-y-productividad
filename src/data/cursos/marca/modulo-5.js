export const modulo5Data = {
  header: {
    title: "Voz y Tono de la Marca",
    description: "Experimenta cómo el mismo mensaje cambia drásticamente según la personalidad de la marca.",
    icon: "Mic"
  },
  mentor: {
    name: "Arthur",
    role: "Copywriter Senior",
    avatar: "/assets/images/avatars/oldman.svg",
    intro: "No es solo lo que dices, sino CÓMO lo dices. Selecciona una situación y prueba cómo la comunicaría cada tipo de marca."
  },
  situations: [
    {
      id: "error404",
      label: "Mensaje de Error (Página no encontrada)",
      baseMessage: "No pudimos encontrar la página que buscas."
    },
    {
      id: "welcome",
      label: "Correo de Bienvenida",
      baseMessage: "Gracias por registrarte en nuestra plataforma."
    },
    {
      id: "delay",
      label: "Aviso de Retraso en Envío",
      baseMessage: "Tu pedido llegará un poco más tarde de lo esperado."
    }
  ],
  tones: [
    {
      id: "corporate",
      name: "Corporativo / Formal",
      color: "bg-slate-700",
      messages: {
        error404: "Estimado usuario, la página solicitada no se encuentra disponible en nuestro servidor en este momento. Disculpe las molestias.",
        welcome: "Le damos una cordial bienvenida a nuestro servicio. Agradecemos la confianza depositada en nuestra institución.",
        delay: "Le informamos que por motivos logísticos, su paquete experimentará un retraso en la entrega. Agradecemos su comprensión."
      }
    },
    {
      id: "irreverent",
      name: "Irreverente / Humorístico",
      color: "bg-fuchsia-600",
      messages: {
        error404: "¡Ups! Alguien rompió el internet. Esta página se fue de vacaciones y no dejó número de contacto.",
        welcome: "¡Ya era hora! Bienvenido al club. Prometemos no enviarte correos aburridos (o al menos intentarlo).",
        delay: "Houston, tenemos un problema. Tu paquete decidió tomarse la ruta escénica y llegará un pelín tarde. ¡Perdón!"
      }
    },
    {
      id: "friendly",
      name: "Cercano / Amigable",
      color: "bg-emerald-500",
      messages: {
        error404: "¡Hola! Parece que te has perdido. No te preocupes, haz clic aquí y te llevaremos de vuelta a casa.",
        welcome: "¡Qué alegría tenerte por aquí! Gracias por unirte a nuestra familia, estamos emocionados de conocerte.",
        delay: "¡Hola! Queríamos avisarte que tu paquete viene en camino, pero tardará un par de días extra. ¡Valdrá la pena la espera!"
      }
    },
    {
      id: "exclusive",
      name: "Exclusivo / Lujo",
      color: "bg-amber-700",
      messages: {
        error404: "Esta sección está reservada. Por favor, regrese a la colección principal.",
        welcome: "Bienvenido a un mundo de privilegio. Su membresía ha sido activada exitosamente.",
        delay: "La excelencia requiere tiempo. La entrega de su pieza exclusiva ha sido reprogramada para garantizar nuestros estándares."
      }
    }
  ]
};
