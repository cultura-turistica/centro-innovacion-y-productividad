import React from 'react';

export default function GridBlock({ data, themeColor = "#f97316", themeBg: propThemeBg = "bg-orange-50", themeBorder: propThemeBorder = "border-orange-200", columns: propColumns }) {
  if (!data || !data.items) return null;

  const themeBg = data.themeBg || propThemeBg;
  const themeBorder = data.themeBorder || propThemeBorder;
  const columns = data.columns || propColumns;

  const items = Array.isArray(data.items) ? data.items : Object.values(data.items);
  
  // Calculate dynamic columns if not provided
  const cols = columns || Math.min(items.length, 3);
  const gridClass = cols === 1 ? 'grid-cols-1 max-w-xl mx-auto' :
                    cols === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' :
                    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  return (
    <div className={`${themeBg} p-8 rounded-3xl border ${themeBorder}`}>
      {data.title && (
        <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: themeColor }}>
          {data.title}
        </h3>
      )}
      {data.description && (
        <p className="text-center text-slate-600 mb-8">{data.description}</p>
      )}
      <div className={`grid gap-4 ${gridClass}`}>
        {items.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            {item.title && (
              <h4 className="font-bold uppercase tracking-wide text-sm mb-2" style={{ color: themeColor }}>
                {item.title}
              </h4>
            )}
            <p 
              className="text-slate-700 text-sm leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: item.text || item.description }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
