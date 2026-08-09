import React from 'react';
import Image from 'next/image';

export default function PhotoGallery({ data, themeColor = "#1e293b" }) {
  if (!data || !data.items) return null;
  const { badge, title, description, items } = data;

  return (
    <div className="w-full my-16">
      {/* Header section */}
      {(badge || title || description) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {badge && (
            <div 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
            >
              {badge}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p 
              className="text-lg text-slate-500"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={`grid gap-8 ${
        items.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : 
        items.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {items.map((item, idx) => (
          <div key={item.id || idx} className="group flex flex-col rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
              {item.image && (
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              {/* Optional colored overlay line based on item theme */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1"
                style={{ backgroundColor: item.themeColor || themeColor }}
              ></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-3" style={{ color: item.themeColor || themeColor }}>
                {item.title}
              </h3>
              <p 
                className="text-slate-600 mb-6 flex-grow"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              
              {item.visualEffect && (
                <div 
                  className="mt-auto p-4 rounded-2xl text-sm font-medium"
                  style={{ 
                    backgroundColor: `${item.themeColor || themeColor}10`,
                    color: item.themeColor || themeColor,
                    borderLeft: `4px solid ${item.themeColor || themeColor}`
                  }}
                >
                  <strong className="block mb-1 opacity-80 uppercase tracking-wider text-xs">Efecto Visual:</strong>
                  {item.visualEffect}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
