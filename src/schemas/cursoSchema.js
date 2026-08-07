import { z } from 'zod';

// Esquemas reutilizables
const baseHeaderSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string(),
});

const podcastSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  audioSrc: z.string(),
  transcript: z.string(), // HTML content
});

const interactiveCardSchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()),
});

// Modulo 1 Schema
const modulo1Schema = z.object({
  header: baseHeaderSchema,
  podcast: podcastSchema,
  interactiveCard: interactiveCardSchema.extend({
    pillars: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      content: z.string(),
    }))
  }),
  dinamica: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    tabs: z.object({
      ideal: z.object({
        label: z.string(),
        title: z.string(),
        description: z.string()
      }),
      desgaste: z.object({
        label: z.string(),
        title: z.string(),
        description: z.string()
      })
    })
  })
});

// Modulo 2 Schema
const modulo2Schema = z.object({
  header: baseHeaderSchema,
  interactiveCard: interactiveCardSchema,
  aplicacion: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    pillars: z.array(z.object({
      title: z.string(),
      subtitle: z.string(),
      content: z.string(),
    }))
  })
});

// Modulo 3 Schema
const modulo3Schema = z.object({
  header: baseHeaderSchema,
  interactiveCard: interactiveCardSchema,
  casos: z.object({
    tangible: z.object({
      tag: z.string(),
      location: z.string(),
      title: z.string(),
      before: z.string(),
      impact: z.string(),
    }),
    intangible: z.object({
      tag: z.string(),
      location: z.string(),
      title: z.string(),
      before: z.string(),
      impact: z.string(),
    })
  })
});

// Modulo 4 Schema
const modulo4Schema = z.object({
  header: baseHeaderSchema,
  podcast: podcastSchema,
  interactiveCard: interactiveCardSchema,
  dinamica1: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    zones: z.array(z.object({
      id: z.string(),
      label: z.string()
    }))
  }),
  dinamica2: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    nodes: z.array(z.object({
      id: z.number(),
      label: z.string()
    })),
    successMsg: z.object({
      title: z.string(),
      description: z.string()
    })
  })
});

// Modulo 5 Schema
const modulo5Schema = z.object({
  header: baseHeaderSchema,
  interactiveCard: interactiveCardSchema.extend({
    steps: z.array(z.object({
      title: z.string(),
      description: z.string()
    }))
  }),
  dinamica: z.object({
    label: z.string(),
    title: z.string(),
    description: z.string(),
    chat: z.object({
      groupName: z.string(),
      status: z.string(),
      msg1: z.object({ sender: z.string(), text: z.string() }),
      msg2: z.object({ sender: z.string(), text: z.string() }),
      instruction: z.string(),
      options: z.array(z.string()),
      feedbackError: z.object({
        sender: z.string(),
        text: z.string(),
        explanation: z.string(),
        retryBtn: z.string()
      }),
      feedbackSuccess: z.object({
        sender: z.string(),
        text: z.string(),
        explanation: z.string()
      })
    })
  })
});

// Modulo 6 Schema
const modulo6Schema = z.object({
  header: baseHeaderSchema,
  podcast: podcastSchema,
  simulador: z.object({
    title: z.string(),
    subtitle: z.string(),
    intro: z.string(),
    budgetTotal: z.number(),
    fundsLabel: z.string(),
    categories: z.array(z.object({
      label: z.string()
    })),
    submitBtn: z.string(),
    alerts: z.object({
      incomplete: z.string(),
      infraWarning: z.string(),
      staffWarning: z.string(),
      success: z.string(),
      successTitle: z.string(),
      errorTitle: z.string()
    })
  })
});

// Quiz Schema
const quizSchema = z.object({
  courseName: z.string(),
  courseId: z.string(),
  horas: z.string(),
  questions: z.array(z.object({
    id: z.string(),
    text: z.string(),
    options: z.array(z.object({
      id: z.string(),
      text: z.string()
    })),
    correctHash: z.string()
  }))
});

// Evaluacion Schema (Curso1.jsx)
const certificacionSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
  completionTitle: z.string(),
  completionDesc: z.string(),
  exitBtn: z.string(),
  certBtn: z.string()
});

export const curso1Schema = z.object({
  modulo1: modulo1Schema,
  modulo2: modulo2Schema,
  modulo3: modulo3Schema,
  modulo4: modulo4Schema,
  modulo5: modulo5Schema,
  modulo6: modulo6Schema,
  certificacion: certificacionSchema,
  quiz: quizSchema
});
