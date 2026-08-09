"use client";

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard';

const CATEGORIES = [
  'Todos',
  'Gestión Territorial',
  'Innovación Turística',
  'Finanzas y Negocios',
  'Creación de Contenido'
];

export default function CourseCatalog({ courses }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = activeCategory === 'Todos' || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [courses, activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Controles de Filtrado y Búsqueda */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12">
        
        {/* Categorías (Diseño orgánico y desenfadado) */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 relative ${
                activeCategory === category 
                  ? 'text-indigo-600 bg-indigo-50/80 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-indigo-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-72 flex-shrink-0">
          <input 
            type="text"
            placeholder="Buscar cursos, herramientas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 text-slate-800 text-sm rounded-2xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Grid de Cursos */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm">No encontramos resultados para tu búsqueda.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
            className="mt-4 text-indigo-600 font-medium text-sm hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
