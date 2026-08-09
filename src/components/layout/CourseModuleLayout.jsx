import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function CourseModuleLayout({ breadcrumbCourseTitle, breadcrumbCourseUrl, moduleTitle, themeColor, themeBgColor = "#faf9f6", children }) {
  return (
    <div className={`min-h-screen text-slate-800 font-sans relative`} style={{ backgroundColor: themeBgColor }}>
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            <Link href="/" className="hover:text-indigo-500 transition-colors">Inicio</Link>
            <span>&gt;</span>
            <Link href={breadcrumbCourseUrl} className="hover:text-indigo-500 transition-colors">{breadcrumbCourseTitle}</Link>
            <span>&gt;</span>
            <span style={{ color: themeColor }}>{moduleTitle}</span>
          </nav>
          
          {children}
        </main>
      </div>
    </div>
  );
}
