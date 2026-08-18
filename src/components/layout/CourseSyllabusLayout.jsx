import React from 'react';
import Navbar from './Navbar';
import { PlayCircle, Clock, BookOpen, CheckCircle, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';
import VerticalVideoCard from '../ui/VerticalVideoCard';

export default function CourseSyllabusLayout({ data, themeColor = "#10b981", themeBg = "bg-[#faf9f6]", selectionColor = "selection:bg-emerald-100", baseUrl }) {
  if (!data) return null;
  const { header, syllabus, sidebar } = data;

  return (
    <div className={`min-h-screen ${themeBg} text-slate-800 font-sans ${selectionColor} relative`}>
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0 bg-[url('/assets/images/textura1.webp')] bg-cover bg-center"
      ></div>

      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          {/* Header & Breadcrumb */}
          <div className="mb-12">
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6 flex-wrap">
              {header.breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {item.url ? (
                    <Link href={item.url} className="hover:text-slate-600 transition-colors" style={{ ':hover': { color: themeColor } }}>
                      {item.label}
                    </Link>
                  ) : (
                    <span style={{ color: themeColor }}>{item.label}</span>
                  )}
                  {index < header.breadcrumb.length - 1 && <ChevronRight className="w-3 h-3" />}
                </React.Fragment>
              ))}
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider mb-4"
                  style={{ backgroundColor: `${themeColor}20`, color: themeColor }}>
                  <PlayCircle className="w-4 h-4" />
                  <span>{header.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-none">
                  <span className={header.titlePart1Color}>{header.titlePart1}</span><br />
                  <span className={header.titlePart2Color}>{header.titlePart2}</span>
                </h1>
                <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                  {header.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Syllabus List */}
            <div className={`w-full ${sidebar ? 'lg:w-2/3' : 'lg:w-3/4 mx-auto'} space-y-10`}>
              <div>
                <h2 className="text-2xl font-black mb-2" style={{ color: themeColor }}>
                  {data.modulesTitle || "Temario del Curso"}
                </h2>
                <div className="w-16 h-1 rounded-full mb-8" style={{ backgroundColor: themeColor }}></div>

                <div className="space-y-6">
                  {(syllabus || data.modules || []).map((modulo, index) => (
                    <div key={index} className="group flex gap-4 md:gap-6 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md z-10"
                          style={{ backgroundColor: modulo.status === 'locked' ? '#94a3b8' : themeColor }}>
                          {index + 1}
                        </div>
                        {index < (syllabus || data.modules || []).length - 1 && (
                          <div className="w-0.5 h-full bg-slate-200 mt-2 group-hover:bg-slate-300 transition-colors"></div>
                        )}
                      </div>

                      <div className="flex-1 pb-8">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow relative overflow-hidden">
                          {modulo.status === 'locked' && (
                            <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[1px] z-10 flex items-center justify-center">
                              <div className="bg-white px-4 py-2 rounded-full text-slate-500 font-bold text-sm shadow-sm flex items-center gap-2">
                                <Lock size={16} /> Módulo Bloqueado
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: themeColor }}>
                                {modulo.module || `Módulo ${modulo.id}`}
                              </span>
                              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-900">
                                {modulo.title}
                              </h3>
                              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                                {modulo.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                                <Clock size={14} />
                                {modulo.time || modulo.duration}
                              </div>

                              {modulo.status !== 'locked' && (
                                <Link
                                  href={modulo.url || (baseUrl ? `${baseUrl}/${modulo.path}` : `/academia/cursos/turismo-comunitario/${modulo.path}`)}
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all hover:scale-105"
                                  style={{ backgroundColor: themeColor }}
                                >
                                  <PlayCircle size={20} />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Instructor */}
            {sidebar && (
              <div className="w-full lg:w-1/3 space-y-6">
                {sidebar.video ? (
                  <VerticalVideoCard video={sidebar.video} />
                ) : (
                  <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none -mr-10 -mt-10" style={{ color: themeColor }}>
                      <User size={128} />
                    </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5" style={{ color: themeColor }} />
                    {sidebar.title || "Tu Instructor"}
                  </h3>

                  <div className="flex items-center gap-4 mb-6">
                    {sidebar.instructorImg && (
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0 shadow-sm">
                        <img src={sidebar.instructorImg} alt="Instructor" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{sidebar.instructorName || sidebar.instructor?.name}</h3>
                      <p className="text-slate-500 text-sm font-medium">{sidebar.instructorRole || sidebar.instructor?.role}</p>
                    </div>
                  </div>

                  {(sidebar.instructorQuote || sidebar.instructor?.bio) && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                      "{sidebar.instructorQuote || sidebar.instructor?.bio}"
                    </p>
                  )}

                  {sidebar.stats && (
                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      {sidebar.stats.map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-slate-500">{stat.label}</span>
                          <span className="font-bold text-slate-800">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {sidebar.features && (
                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      {sidebar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }}></div>
                          <span className="text-slate-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
