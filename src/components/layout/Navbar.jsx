"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/assets/images/logo-cultura-t.webp" alt="Logo Cultura T" className="h-8 w-auto" width={200} height={32} unoptimized={true} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio CIP</Link>
          <Link href="/academia" className="hover:text-indigo-600 transition-colors">Mi Academia</Link>
          <Link href="/laboratorio" className="hover:text-indigo-600 transition-colors">Laboratorio de Datos</Link>
          <div className="relative group py-4">
            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors focus:outline-none">
              Centro de Pensamiento <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full -mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
              <div className="flex flex-col py-2">
                <Link href="/centro-conocimiento" className="px-5 py-3 hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium border-b border-slate-50">
                  Inicio del Centro
                </Link>
                <Link href="/centro-conocimiento/proyectos" className="px-5 py-3 hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium border-b border-slate-50">
                  Proyectos de Innovación
                </Link>
                <Link href="/centro-conocimiento/publicaciones" className="px-5 py-3 hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">
                  Publicaciones
                </Link>
              </div>
            </div>
          </div>
          <a href="https://cultura-t.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Sitio Corporativo</a>
        </div>

        {/* Botón menú visible SOLO en móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6 stroke-[2]" /> : <Menu className="w-6 h-6 stroke-[2]" />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-[#faf9f6]/95 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
        <div className="px-6 py-6 flex flex-col gap-6 text-sm font-semibold text-slate-600">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Inicio CIP</Link>
          <Link href="/academia" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Mi Academia</Link>
          <Link href="/laboratorio" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Laboratorio de Datos</Link>
          <div className="flex flex-col gap-3 mt-2">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Centro de Pensamiento</span>
            <div className="pl-4 flex flex-col gap-4 border-l-2 border-slate-100 ml-1">
              <Link href="/centro-conocimiento" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Inicio del Centro</Link>
              <Link href="/centro-conocimiento/proyectos" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Proyectos de Innovación</Link>
              <Link href="/centro-conocimiento/publicaciones" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Publicaciones</Link>
            </div>
          </div>
          <a href="https://cultura-t.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Sitio Corporativo</a>
        </div>
      </div>
    </nav>
  );
}
