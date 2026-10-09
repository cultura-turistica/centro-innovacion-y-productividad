"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Excluir de cursos, módulos, certificaciones, herramientas interactivas y laboratorios inmersivos
  if (
    !pathname ||
    pathname.startsWith('/academia/cursos') ||
    pathname.startsWith('/laboratorios')
  ) {
    return null;
  }

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/70 backdrop-blur-md text-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Columna 1: Marca e Identidad CIP (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block hover:opacity-85 transition-opacity mb-4">
                <Image
                  src="/assets/images/logo-cultura-t.webp"
                  alt="Logo Cultura T"
                  width={180}
                  height={32}
                  className="h-8 w-auto"
                  unoptimized
                />
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mb-4">
                Centro de Innovación y Productividad (CIP). Investigamos el territorio, desarrollamos soluciones tecnológicas y transferimos metodologías aplicadas para la innovación turística y la productividad regional en Colombia.
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium space-y-1 pt-2">
              <p className="font-semibold text-slate-700">CULTURA T S.A.S. • NIT 901.144.063-0</p>
              <p>Consultoría de Gestión, Ciencia e Innovación Territorial • Bogotá D.C., Colombia</p>
            </div>
          </div>

          {/* Columna 2: Ecosistema CIP (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Ecosistema CIP
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Inicio CIP
                </Link>
              </li>
              <li>
                <Link href="/academia" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Mi Academia
                </Link>
              </li>
              <li>
                <Link href="/laboratorio" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Laboratorio de Datos
                </Link>
              </li>
              <li>
                <Link href="/verificar" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Verificar Certificados
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Centro de Pensamiento (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Conocimiento
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/centro-conocimiento" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Centro de Pensamiento
                </Link>
              </li>
              <li>
                <Link href="/centro-conocimiento/proyectos" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Proyectos Territoriales
                </Link>
              </li>
              <li>
                <Link href="/centro-conocimiento/publicaciones" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Publicaciones I+D+i
                </Link>
              </li>
              <li>
                <a
                  href="https://cultura-t.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                >
                  Sitio Corporativo <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Respaldo Institucional y Sello CCB (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Respaldo Institucional
            </h3>
            
            {/* Sello Oficial CCB Limpio y sin bordes de caja */}
            <div className="flex flex-col items-start gap-3">
              <Image
                src="/assets/images/sello-afiliado-ccb.svg"
                alt="Sello Afiliada Cámara de Comercio de Bogotá"
                width={112}
                height={112}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                Empresa validada en gobernabilidad, cumplimiento de deberes mercantiles y solvencia jurídica bajo la Ley 1727 de 2014.
              </p>
            </div>
          </div>

        </div>

        {/* Separador y Línea de Créditos */}
        <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} CULTURA T S.A.S. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Investigación, Tecnología y Territorio</span>
            <span className="text-slate-300">•</span>
            <span>Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
