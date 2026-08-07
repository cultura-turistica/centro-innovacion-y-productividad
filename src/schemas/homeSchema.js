import { z } from "zod";

const pilarSchema = z.object({
  id: z.string(),
  icon: z.string(), // Nombre del icono de lucide-react
  title: z.string(),
  description: z.string(),
  buttonText: z.string(),
  link: z.string(),
  color: z.string(),
});

const orgNodeSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  color: z.string(),
  bg: z.string().optional(),
  items: z.array(z.string()).optional(),
  children: z.lazy(() => z.array(orgNodeSchema)).optional(),
});

export const homeSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    pillText: z.string(),
    titlePrefix: z.string(),
    titleHighlight: z.string(),
    subtitle: z.string(),
  }),
  pilares: z.array(pilarSchema),
  about: z.object({
    empresa: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      propositoTitle: z.string(),
      proposito: z.string(),
    }),
    cip: z.object({
      title: z.string(),
      subtitle: z.string(),
      paragraphs: z.array(z.string()),
      misionTitle: z.string(),
      mision: z.string(),
    }),
  }),
  organigrama: z.object({
    title: z.string(),
    root: orgNodeSchema,
    misional: z.object({
      title: z.string(),
      node: orgNodeSchema,
      subNodes: z.array(orgNodeSchema).optional(),
    }),
    apoyo: z.object({
      title: z.string(),
      nodes: z.array(orgNodeSchema),
    }),
  }),
});
