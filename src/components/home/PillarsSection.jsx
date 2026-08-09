import React from 'react';
import { BookOpen, Database, Lightbulb } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      id: 1,
      title: "Cursos y Herramientas",
      description: "Capacitación transformadora. Rutas de aprendizaje interactivas y material práctico diseñado para potenciar el desarrollo territorial.",
      icon: BookOpen,
      action: "Ver Academia",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      title: "Laboratorio de Datos y Tecnología",
      description: "El territorio en cifras. Visualización analítica interactiva y despliegue estadístico de nuestros proyectos en campo.",
      icon: Database,
      action: "Entrar al Lab",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      id: 3,
      title: "Centro de Pensamiento",
      description: "Producción bibliográfica de alto nivel. Acceso a investigaciones formales, artículos especializados y modelos de gestión publicables.",
      icon: Lightbulb,
      action: "Visitar Biblioteca",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section className="px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros 3 Pilares</h2>
        <div className="w-16 h-1 bg-indigo-100 mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1">
            <div className={`w-10 h-10 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
              <pillar.icon className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              {pillar.description}
            </p>
            <button className={`text-sm font-semibold flex items-center gap-2 ${pillar.color} group-hover:gap-3 transition-all`}>
              {pillar.action}
              <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
