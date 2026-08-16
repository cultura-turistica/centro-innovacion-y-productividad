import React from 'react';

export default function FichaTecnicaViewer({ fichaTecnica }) {
  if (!fichaTecnica || Object.keys(fichaTecnica).length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mt-8 mb-12">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">Ficha Técnica</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* POLIMORFISMO: Iteración ciega sobre las llaves del JSON */}
          {Object.entries(fichaTecnica).map(([key, value], index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {key}
              </span>
              <span className="text-base text-slate-800">
                {/* Soporte para arrays (ej. listas de autores o aliados) */}
                {Array.isArray(value) ? value.join(', ') : value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
