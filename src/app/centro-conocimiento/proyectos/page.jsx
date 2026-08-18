"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { registroIdi } from '@/data/centro-conocimiento/registroIdi';
import IDiBadge from '@/components/ui/conocimiento/IDiBadge';
import FichaTecnicaViewer from '@/components/ui/conocimiento/FichaTecnicaViewer';
import TerritorialMapWrapper from '@/components/ui/conocimiento/TerritorialMapWrapper';
import { X } from 'lucide-react';

export default function ProyectosHubPage() {
  const [proyectos, setProyectos] = useState([]);
  const [activeRegionId, setActiveRegionId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  
  // Estado para el Modal
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Referencia al catálogo para el scroll suave
  const catalogRef = useRef(null);

  useEffect(() => {
    // Filtrar solo los proyectos tipo 'i'
    const projList = Object.values(registroIdi).filter(item => item.tipoIDI === 'i');
    setProyectos(projList);

    // Extraer categorías únicas
    const cats = new Set();
    projList.forEach(p => {
      if (p.fichaTecnica?.Sector) {
        cats.add(p.fichaTecnica.Sector);
      }
    });
    setCategories(['Todos', ...Array.from(cats)]);
  }, []);

  const handleRegionClick = React.useCallback((regionId) => {
    setActiveRegionId(regionId);
    // Hacer scroll suave hacia el catálogo
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Filtrar proyectos según región seleccionada y categoría
  const filteredProjects = proyectos.filter(p => {
    // Filtro por región (clic en mapa)
    let matchesRegion = true;
    if (activeRegionId) {
      const { mapaImpacto } = p;
      if (mapaImpacto && mapaImpacto.activo) {
        const inEjecutados = (mapaImpacto.municipiosEjecutados || []).includes(activeRegionId);
        const inDesarrollo = (mapaImpacto.municipiosEnDesarrollo || []).includes(activeRegionId);
        if (!inEjecutados && !inDesarrollo) {
          matchesRegion = false;
        }
      } else {
        matchesRegion = false;
      }
    }

    // Filtro por categoría
    let matchesCategory = true;
    if (activeCategory !== 'Todos') {
      matchesCategory = p.fichaTecnica?.Sector === activeCategory;
    }

    // Filtro por búsqueda de texto
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const title = (p.hero?.title || '').toLowerCase();
      const contratante = (p.fichaTecnica?.Contratante || '').toLowerCase();
      const queSeHizo = (p.fichaTecnica?.["Qué se hizo"] || '').toLowerCase();
      const aliados = (p.fichaTecnica?.Aliados || []).join(' ').toLowerCase();
      
      matchesSearch = title.includes(query) || 
                      contratante.includes(query) || 
                      queSeHizo.includes(query) ||
                      aliados.includes(query) ||
                      (p.mapaImpacto?.datosZonas && Object.values(p.mapaImpacto.datosZonas).some(z => (z.titulo || '').toLowerCase().includes(query)));
    }

    return matchesRegion && matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#faf9f6] pb-20 relative">
      {/* Textura global */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"></div>
      
      <div className="relative z-10">
        
        {/* SECCIÓN 1: HERO MAP */}
        <section className="bg-transparent border-b border-slate-200/50 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/centro-conocimiento" className="text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium flex items-center gap-1">
                &larr; Volver al Centro
              </Link>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-1/3">
                <div className="flex items-center gap-3 mb-4 mt-4">
                  <IDiBadge tipo="i" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Proyectos de Innovación
                </h1>
                <p className="text-lg text-slate-500 mb-6">
                  Explora el mapa interactivo para descubrir los impactos territoriales y las implementaciones reales de nuestras metodologías. 
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100/50">
                  <p className="text-emerald-800 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Haz clic en las zonas resaltadas para filtrar el catálogo de proyectos.
                  </p>
                </div>
              </div>
              
              <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-sm border border-slate-200 p-2 overflow-hidden relative">
                <TerritorialMapWrapper 
                  proyectos={proyectos} 
                  onProjectClick={handleRegionClick} 
                />
                
                {/* LEYENDA DEL MAPA */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm rounded-xl p-4 z-10 pointer-events-none">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Estado Territorial</h4>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></span> Finalizado / Ejecutado
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400 shadow-sm"></span>
                      </span> 
                      En Desarrollo / Vivo
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                      <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></span> Sin intervención
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: CATÁLOGO FILTRABLE */}
        <section ref={catalogRef} className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Catálogo de Proyectos</h2>
              {activeRegionId && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-slate-500">Filtrando por zona seleccionada en el mapa</span>
                  <button 
                    onClick={() => setActiveRegionId(null)}
                    className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded-full transition-colors flex items-center gap-1 font-medium"
                  >
                    Borrar filtro de zona <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Búsqueda y Filtros */}
            <div className="flex flex-col gap-4">
              {/* Barra de Búsqueda */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar por proyecto, contratante (ej. Creata), o municipio (ej. Pereira)..." 
                  className="w-full md:w-96 pl-10 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-4 h-4 absolute left-4 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>

              {/* Filtros por Categoría */}
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                      activeCategory === cat 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grilla de Tarjetas */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 font-medium">No se encontraron proyectos para los filtros seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(pub => (
                <div 
                  key={pub.id} 
                  onClick={() => setSelectedProject(pub)}
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md hover:border-emerald-200 transition-all transform hover:-translate-y-1"
                >
                  <div className={`h-3 bg-${pub.hero?.themeColor || 'emerald'}-500`}></div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                        {pub.fichaTecnica?.Sector || "Proyecto"}
                      </span>
                      <h3 className="font-bold text-xl text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {pub.hero?.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-3">
                        {pub.fichaTecnica?.["Qué se hizo"] || pub.fichaTecnica?.["Qué se hace"] || "Despliegue territorial e innovación."}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-50">
                      <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver Ficha Técnica &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>
      </div>

      {/* MODAL DE FICHA TÉCNICA */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className={`px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-${selectedProject.hero?.themeColor || 'emerald'}-50`}>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{selectedProject.hero?.title}</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">{selectedProject.hero?.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 bg-white rounded-full shadow-sm border border-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido Scroll Modal */}
            <div className="overflow-y-auto p-6 bg-[#faf9f6]">
               {selectedProject.fichaTecnica && (
                 <FichaTecnicaViewer fichaTecnica={selectedProject.fichaTecnica} />
               )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
