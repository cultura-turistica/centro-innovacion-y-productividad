import React from 'react';

export default function AboutSection() {
  return (
    <section className="px-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-16 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden md:block"></div>
        
        <div className="flex-1 md:pr-12 relative">
          <div className="absolute -right-[66px] top-4 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full hidden md:block z-10"></div>
          <h2 className="text-xl font-bold uppercase tracking-widest text-indigo-500 mb-6">Cultura T S.A.S.</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Desde nuestra constitución en 2018, nos hemos consolidado como una firma consultora líder en el desarrollo, asesoría e implementación de estrategias para el turismo sustentable. Integramos soluciones en ecosistemas web, analítica de datos y economía popular. Nuestro propósito fundamental es fortalecer el desarrollo sostenible de las comunidades locales y los territorios, generando bienestar continuo mediante proyectos de alto impacto ambiental, social y cultural.
          </p>
        </div>

        <div className="flex-1 md:pl-12 relative">
          <div className="absolute -left-[66px] top-4 w-3 h-3 bg-white border-2 border-rose-500 rounded-full hidden md:block z-10"></div>
          <h2 className="text-xl font-bold uppercase tracking-widest text-rose-500 mb-6">El CIP</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            A través del Centro de Innovación y Productividad, articulamos a los actores clave de la cadena de valor turística, forjando alianzas estratégicas con entidades públicas, privadas y fondos de cooperación. Nuestra misión es impulsar la competitividad territorial: prestamos servicios especializados, investigamos y transferimos tecnología para detonar la innovación constante en las regiones.
          </p>
        </div>
      </div>

      {/* Imagen de contexto visual (taller.webp) */}
      <div className="mt-20 relative rounded-[2rem] overflow-hidden shadow-xl border border-white aspect-video md:aspect-[21/9] group">
        <img 
          src="/assets/images/taller.webp" 
          alt="Trabajo de campo y talleres del CIP" 
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 flex items-end p-6 md:p-10 pointer-events-none">
           <div className="text-white">
             <div className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Acción en el Territorio</div>
             <div className="text-lg md:text-xl font-semibold">Articulación y transferencia de conocimiento en campo</div>
           </div>
        </div>
      </div>
    </section>
  );
}
