import React from 'react';
import { BookOpen } from 'lucide-react';

export default function TheoryIntro({ data }) {
  const { title, paragraphs, theme } = data;

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className={`relative p-8 md:p-12 bg-white rounded-3xl shadow-xl ${theme.shadow} border ${theme.border} overflow-hidden`}>
        
        {/* Adorno de fondo */}
        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${theme.gradient}`}></div>
        <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${theme.bgBlur} rounded-full blur-3xl`}></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 ${theme.iconBg} ${theme.iconColor} rounded-2xl`}>
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {title}
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            {paragraphs.map((p, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
