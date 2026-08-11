"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default function CertificateGenerator({ data, hideControls = false }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      // 1. Fetch template pdf
      const templateRes = await fetch('/assets/certificados/diploma-template.pdf');
      if (!templateRes.ok) throw new Error('No se pudo cargar la plantilla');
      const templateBytes = await templateRes.arrayBuffer();

      // 2. Load PDF
      const pdfDoc = await PDFDocument.load(templateBytes);
      const pages = pdfDoc.getPages();
      const page = pages[0];
      const { width, height } = page.getSize();
      
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
      // Color corporativo exacto #003087
      const brandColor = rgb(0, 48 / 255, 135 / 255);

      const SVG_WIDTH = 2452.0;
      const SVG_HEIGHT = 1749.0;
      const rx = width / SVG_WIDTH;
      const ry = height / SVG_HEIGHT;

      const drawCenteredTextInSvgRect = (text, svgX, svgY, svgW, svgH, isBold, baseFontSize) => {
          if (!text) return;
          const fontType = isBold ? fontBold : font;
          const pdfX = svgX * rx;
          const pdfW = svgW * rx;
          const pdfTopY = height - (svgY * ry);
          const pdfH = svgH * ry;
          
          let currentSize = baseFontSize;
          let textWidth = fontType.widthOfTextAtSize(text, currentSize);
          while (textWidth > pdfW * 0.95 && currentSize > 8) {
              currentSize -= 0.5;
              textWidth = fontType.widthOfTextAtSize(text, currentSize);
          }
          
          const finalX = pdfX + (pdfW - textWidth) / 2;
          const centerY = pdfTopY - (pdfH / 2);
          const finalY = centerY - (currentSize / 3.5);

          page.drawText(text, {
              x: finalX,
              y: finalY,
              size: currentSize,
              font: fontType,
              color: brandColor
          });
      };

      const drawTextInSvgCoords = (text, svgX, svgY, isBold, size, align = 'left') => {
          if (!text) return;
          const fontType = isBold ? fontBold : font;
          let textWidth = fontType.widthOfTextAtSize(text, size);
          
          let finalX = svgX * rx;
          if (align === 'right') {
              finalX -= textWidth;
          }
          const finalY = height - (svgY * ry) - size;

          page.drawText(text, {
              x: finalX,
              y: finalY,
              size: size,
              font: fontType,
              color: brandColor
          });
      };

      drawCenteredTextInSvgRect(data.curso || "Curso de Innovación Turística", 292.63, 729.167, 1244.87, 87.906, true, 26);
      drawCenteredTextInSvgRect(data.nombre || "Participante Destacado", 292.63, 874.021, 1244.87, 87.906, true, 32);
      
      const idValue = data.identificacion && data.identificacion !== 'N/A' ? `C.C. ${data.identificacion}` : 'C.C. 1234567890';
      drawCenteredTextInSvgRect(idValue, 638.463, 977.485, 899.037, 87.906, true, 22);

      drawTextInSvgCoords(`Horas Certificadas: ${data.horas || '40'} horas`, 292.63, 1591, true, 11);
      drawTextInSvgCoords(`Código de Verificación: ${data.sello || 'N/A'}`, 292.63, 1635, true, 9);
      drawTextInSvgCoords(`Validar en: cip.cultura-t.com/#/verificar`, 292.63, 1696, false, 10);
      drawTextInSvgCoords(`Fecha de Expedición: ${data.fecha || new Date().toLocaleDateString()}`, 2200, 1521, true, 16, 'right');

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const objectUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = `Certificado_${data.nombre ? data.nombre.replace(/\s+/g, '_') : 'descarga'}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(objectUrl);
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
