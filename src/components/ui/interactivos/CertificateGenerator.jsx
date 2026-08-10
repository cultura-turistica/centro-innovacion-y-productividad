"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function CertificateGenerator({ data, hideControls = false }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch(data.apiUrl || '/api/certificates/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Error en el servidor');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificado_${data.nombre.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error al generar PDF", error);
      alert(data.errorMsg || "Hubo un problema generando el PDF. Por favor intenta de nuevo.");
    }
    setIsGenerating(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center w-full shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{data.title || "Tu Certificado"}</h3>
        <p className="text-slate-600 mb-8">{data.description || "Haz clic en el botón para descargar tu certificado en PDF, generado de forma segura en nuestros servidores."}</p>
        
        {!hideControls && (
          <button 
            onClick={generatePDF}
            disabled={isGenerating}
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-5 h-5" />
            {isGenerating ? (data.generatingText || "Generando PDF...") : (data.downloadText || "Descargar Certificado")}
          </button>
        )}
      </div>
    </div>
  );
}
