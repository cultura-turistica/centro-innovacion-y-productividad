"use client";

import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

const AutoFitText = ({ text, color = '#202d72', isBold = true, baseSize = '1.2rem', textAlign = 'left' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.offsetWidth;
      // Pequeño margen de seguridad del 2%
      if (textWidth > containerWidth * 0.98) {
        setScale((containerWidth * 0.98) / textWidth);
      } else {
        setScale(1);
      }
    }
  }, [text]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: textAlign === 'center' ? 'center' : (textAlign === 'right' ? 'flex-end' : 'flex-start'), overflow: 'hidden' }}>
      <div 
        style={{ 
          transform: `scale(${scale})`, 
          transformOrigin: textAlign === 'center' ? 'center center' : (textAlign === 'right' ? 'right center' : 'left center'), 
          whiteSpace: 'nowrap',
          color: color,
          fontWeight: isBold ? '700' : '400',
          fontSize: baseSize,
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        <span ref={textRef}>{text}</span>
      </div>
    </div>
  );
};

export default function CertificateGenerator({ data, hideControls = false }) {
  const certificateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [backgroundHtml, setBackgroundHtml] = useState('');

  useEffect(() => {
    fetch('/diploma.html')
      .then(res => res.text())
      .then(html => setBackgroundHtml(html))
      .catch(err => console.error('Error cargando el diploma HTML:', err));
  }, []);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = certificateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificado_${data.nombre.replace(/\\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("Error al generar PDF", error);
      alert("Hubo un problema generando el PDF. Por favor intenta de nuevo.");
    }
    setIsGenerating(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto">
      <div className="w-full overflow-x-auto shadow-2xl rounded-xl ring-1 ring-slate-200 bg-white">
        <div
          ref={certificateRef}
          style={{
            width: '100%', 
            minWidth: '800px', // Prevents it from breaking on very small screens before scale down
            aspectRatio: '2452/1749',
            position: 'relative',
            backgroundColor: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Fondo Original HTML/SVG Inyectado */}
          <div 
            dangerouslySetInnerHTML={{ __html: backgroundHtml }} 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          />

          {/* CAPA DE TEXTOS */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
            <div style={{ position: 'absolute', top: '41.69%', left: '11.93%', width: '50.77%', height: '5.03%' }}>
              <AutoFitText text={data.curso} baseSize="1.5rem" isBold={true} color="#003087" />
            </div>

            <div style={{ position: 'absolute', top: '49.97%', left: '11.93%', width: '50.77%', height: '5.03%' }}>
              <AutoFitText text={data.nombre} baseSize="1.5rem" isBold={true} color="#003087" />
            </div>

            <div style={{ position: 'absolute', top: '55.89%', left: '26.04%', width: '36.67%', height: '5.03%' }}>
              <AutoFitText text={data.identificacion || 'N/A'} baseSize="1.3rem" isBold={true} color="#003087" />
            </div>

            <div style={{ position: 'absolute', top: '91%', left: '11.93%', width: '25%', height: '3%' }}>
              <AutoFitText text={`Horas Certificadas: ${data.horas || '40'} horas`} baseSize="0.8rem" isBold={true} color="#003087" />
            </div>

            <div style={{ position: 'absolute', top: '93.5%', left: '11.93%', width: '60%', zIndex: 3 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#003087', wordBreak: 'break-all', lineHeight: '1.3' }}>
                Código de Verificación: {data.sello || 'N/A'}
              </div>
            </div>

            <div style={{ position: 'absolute', top: '97%', left: '11.93%', width: '30%', height: '2%' }}>
              <AutoFitText text={`Validar en: cip.cultura-t.com/#/verificar`} baseSize="0.7rem" isBold={false} color="#003087" />
            </div>

            <div style={{ position: 'absolute', top: '87%', left: '60%', width: '30%', height: '4%' }}>
              <AutoFitText text={`Fecha de Expedición: ${data.fecha || 'DD/MM/AAAA'}`} baseSize="1.1rem" isBold={true} color="#003087" textAlign="right" />
            </div>
          </div>
        </div>
      </div>

      {!hideControls && (
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className="flex items-center gap-3 px-8 py-4 bg-[#032968] text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={24} />
          {isGenerating ? 'Generando PDF...' : 'Descargar Certificado en PDF'}
        </button>
      )}
    </div>
  );
}
