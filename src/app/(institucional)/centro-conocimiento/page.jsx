"use client";
import React, { useState, useMemo } from 'react';
import { publicacionesCIP } from '@/data/centro-conocimiento/publicacionesData';
import {
  FileText,
  Search,
  LayoutList,
  LayoutGrid,
  BookOpen,
  ArrowUpDown,
  Calendar,
  Filter
} from 'lucide-react';

export default function CentroPensamientoPage() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroAno, setFiltroAno] = useState('todos');
  const [vista, setVista] = useState('tabla'); // 'tabla' | 'tarjetas'
  const [orden, setOrden] = useState('defecto'); // 'defecto' | 'ano-desc' | 'ano-asc' | 'titulo' | 'isbn'

  // Lista dinámica de años únicos para el selector
  const anosDisponibles = useMemo(() => {
    const setAnos = new Set(publicacionesCIP.map(p => p.ano).filter(Boolean));
    return ['todos', ...Array.from(setAnos).sort((a, b) => b - a)];
  }, []);

  // Filtrado y búsqueda rápida combinada (Texto + Año)
  const publicacionesFiltradas = useMemo(() => {
    let resultado = publicacionesCIP.filter(pub => {
      const q = busqueda.toLowerCase().trim();
      const coincideTexto = !q || (
        pub.titulo.toLowerCase().includes(q) ||
        pub.autores.toLowerCase().includes(q) ||
        pub.compilador.toLowerCase().includes(q) ||
        pub.isbn.toLowerCase().includes(q) ||
        pub.ano.includes(q)
      );

      const coincideAno = filtroAno === 'todos' || pub.ano === filtroAno;

      return coincideTexto && coincideAno;
    });

    if (orden === 'ano-desc') {
      resultado.sort((a, b) => Number(b.ano) - Number(a.ano));
    } else if (orden === 'ano-asc') {
      resultado.sort((a, b) => Number(a.ano) - Number(b.ano));
    } else if (orden === 'titulo') {
      resultado.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (orden === 'isbn') {
      resultado.sort((a, b) => a.isbn.localeCompare(b.isbn));
    }

    return resultado;
  }, [busqueda, filtroAno, orden]);

  const alternarOrdenAno = () => {
    setOrden(prev => prev === 'ano-desc' ? 'ano-asc' : 'ano-desc');
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Principal */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  <BookOpen className="w-3.5 h-3.5" />
                  Repositorio Científico
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {publicacionesCIP.length} Obras Registradas
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Centro de Pensamiento
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Catálogo institucional de investigaciones, capítulos de libros y publicaciones oficiales.
              </p>
            </div>

            {/* Selector de Vista (Tabla vs Tarjetas) */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Vista:</span>
              <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setVista('tabla')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    vista === 'tabla'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Vista en tabla (alta densidad)"
                >
                  <LayoutList className="w-3.5 h-3.5" />
                  Directorio
                </button>
                <button
                  type="button"
                  onClick={() => setVista('tarjetas')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    vista === 'tarjetas'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Vista en tarjetas cuadrícula"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Cuadrícula
                </button>
              </div>
            </div>
          </div>

          {/* Barra de Búsqueda, Filtro por Fecha y Ordenamiento */}
          <div className="mt-6 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            {/* Input de Búsqueda (Texto libre) */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por título, autor, año o ISBN..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-xs"
              />
            </div>

            {/* Controles de Filtro por Fecha y Orden */}
            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 text-xs text-slate-500">
              
              {/* Filtro desplegable por Año */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-xs">
                <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                <span className="font-semibold text-slate-600">Año:</span>
                <select
                  value={filtroAno}
                  onChange={e => setFiltroAno(e.target.value)}
                  className="bg-transparent text-xs text-slate-800 font-bold focus:outline-none cursor-pointer"
                >
                  <option value="todos">Todos los años</option>
                  {anosDisponibles.filter(a => a !== 'todos').map(ano => (
                    <option key={ano} value={ano}>
                      {ano}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selector de Orden */}
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-600">Ordenar:</span>
                <select
                  value={orden}
                  onChange={e => setOrden(e.target.value)}
                  className="bg-transparent text-xs text-slate-800 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="defecto">Orden oficial</option>
                  <option value="ano-desc">Año (más recientes)</option>
                  <option value="ano-asc">Año (más antiguos)</option>
                  <option value="titulo">Título (A-Z)</option>
                  <option value="isbn">Por ISBN</option>
                </select>
              </div>

              {/* Contador de Resultados */}
              <span className="pl-1 text-slate-400 font-medium whitespace-nowrap">
                <strong className="text-slate-800 font-bold">{publicacionesFiltradas.length}</strong> de {publicacionesCIP.length}
              </span>
            </div>
          </div>
        </header>

        {/* ========================================================
            MODO 1: VISTA DIRECTORIO / TABLA (ALTA DENSIDAD Y ESCALA)
            ======================================================== */}
        {vista === 'tabla' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 w-12 text-center">#</th>
                    <th scope="col" className="py-3.5 px-4 min-w-[280px]">Publicación</th>
                    <th scope="col" className="py-3.5 px-4 min-w-[220px]">Autores</th>
                    <th scope="col" className="py-3.5 px-4 min-w-[190px]">Compilador</th>
                    <th 
                      scope="col" 
                      onClick={alternarOrdenAno}
                      className="py-3.5 px-3 w-20 text-center cursor-pointer hover:bg-slate-100/90 transition-colors select-none group"
                      title="Haz clic para ordenar por año"
                    >
                      <div className="inline-flex items-center gap-1 justify-center">
                        <span>Año</span>
                        <ArrowUpDown className={`w-3 h-3 ${orden.startsWith('ano') ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-4 min-w-[140px]">ISBN</th>
                    <th scope="col" className="py-3.5 px-4 w-28 text-center">Documento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {publicacionesFiltradas.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400">
                        No se encontraron publicaciones con los filtros o año seleccionado.
                      </td>
                    </tr>
                  ) : (
                    publicacionesFiltradas.map((pub, idx) => (
                      <tr
                        key={pub.id}
                        className="hover:bg-slate-50/70 transition-colors group"
                      >
                        {/* Índice */}
                        <td className="py-3.5 px-4 text-center font-mono text-xs text-slate-400 font-semibold">
                          {idx + 1}
                        </td>

                        {/* Nombre de la Publicación */}
                        <td className="py-3.5 px-4">
                          <a
                            href={pub.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug inline-block hover:underline"
                          >
                            {pub.titulo}
                          </a>
                        </td>

                        {/* Autores */}
                        <td className="py-3.5 px-4 text-xs text-slate-600 leading-relaxed">
                          {pub.autores}
                        </td>

                        {/* Compilador */}
                        <td className="py-3.5 px-4 text-xs text-slate-600">
                          <span className="font-medium text-slate-800">{pub.compilador}</span>
                        </td>

                        {/* Año */}
                        <td className="py-3.5 px-3 text-center text-xs font-semibold text-slate-700">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-slate-100 font-mono text-slate-800">
                            {pub.ano}
                          </span>
                        </td>

                        {/* ISBN */}
                        <td className="py-3.5 px-4 text-xs font-mono font-medium text-slate-700 whitespace-nowrap">
                          {pub.isbn}
                        </td>

                        {/* Acción PDF */}
                        <td className="py-3.5 px-4 text-center">
                          <a
                            href={pub.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white transition-colors border border-indigo-100 whitespace-nowrap shadow-2xs"
                            title="Ver documento oficial en PDF"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            PDF
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            MODO 2: VISTA CUADRÍCULA / TARJETAS COMPACTAS (2 COLS)
            ======================================================== */}
        {vista === 'tarjetas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {publicacionesFiltradas.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
                No se encontraron publicaciones con los filtros o año seleccionado.
              </div>
            ) : (
              publicacionesFiltradas.map((pub, idx) => (
                <article
                  key={pub.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Título de la Publicación y Encabezado */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                        #{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-500 shrink-0">
                        ISBN: {pub.isbn}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-slate-900 leading-snug mb-3 hover:text-indigo-600 transition-colors">
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                        {pub.titulo}
                      </a>
                    </h2>

                    {/* Metadatos compactos */}
                    <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                      <div>
                        <strong className="text-slate-700">Autores: </strong>
                        <span>{pub.autores}</span>
                      </div>
                      <div>
                        <strong className="text-slate-700">Compilador: </strong>
                        <span>{pub.compilador}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pie de la tarjeta */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono font-bold">
                      <Calendar className="w-3 h-3 text-indigo-600" />
                      {pub.ano}
                    </span>

                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Abrir PDF
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

      </div>
    </main>
  );
}
