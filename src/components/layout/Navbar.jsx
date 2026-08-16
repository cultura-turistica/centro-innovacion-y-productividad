"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/assets/images/logo-cultura-t.webp" alt="Logo Cultura T" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Enlaces Desktop (Visible en pantallas grandes, sin botón) */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio CIP</Link>
          <Link href="/academia" className="hover:text-indigo-600 transition-colors">Mi Academia</Link>
          <Link href="/laboratorio" className="hover:text-indigo-600 transition-colors">Laboratorio de Datos</Link>
          <Link href="/centro-conocimiento" className="hover:text-indigo-600 transition-colors">Centro de Conocimiento</Link>
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
          <Link href="/centro-conocimiento" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">Centro de Conocimiento</Link>
          <a href="https://cultura-t.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Sitio Corporativo</a>
        </div>
      </div>
    </nav>
  );
}
