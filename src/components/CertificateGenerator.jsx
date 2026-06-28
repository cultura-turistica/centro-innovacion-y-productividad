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
      // Añadimos un pequeño margen de seguridad del 2% para evitar toques en el borde
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
    // Obtenemos tu archivo HTML original y lo inyectamos directamente
    // Esto soluciona el problema de la hoja en blanco porque el navegador 
    // no permite poner un .html dentro de un <img src="...">.
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
      // Proporción original: 2452 x 1749
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Certificado_${data.nombre.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("Error al generar PDF", error);
      alert("Hubo un problema generando el PDF. Por favor intenta de nuevo.");
    }
    setIsGenerating(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <div
        style={{
          width: '100%',
          overflowX: 'auto',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          borderRadius: '8px'
        }}
      >
        <div
          ref={certificateRef}
          style={{
            width: '100%', 
            aspectRatio: '2452/1749',
            position: 'relative',
            backgroundColor: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Fondo Original HTML/SVG Inyectado Directamente */}
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
            
            {/* CURSO (Box 1 matemáticamente exacto) */}
            <div style={{ position: 'absolute', top: '41.69%', left: '11.93%', width: '50.77%', height: '5.03%' }}>
              <AutoFitText text={data.curso} baseSize="1.5rem" isBold={true} color="#003087" />
            </div>

            {/* NOMBRE (Box 2 matemáticamente exacto) */}
            <div style={{ position: 'absolute', top: '49.97%', left: '11.93%', width: '50.77%', height: '5.03%' }}>
              <AutoFitText text={data.nombre} baseSize="1.5rem" isBold={true} color="#003087" />
            </div>

            {/* IDENTIFICACIÓN (Box 3 matemáticamente exacto) */}
            <div style={{ position: 'absolute', top: '55.89%', left: '26.04%', width: '36.67%', height: '5.03%' }}>
              <AutoFitText text={data.identificacion || 'N/A'} baseSize="1.3rem" isBold={true} color="#003087" />
            </div>

            {/* HORAS CERTIFICADAS (Inferior izquierda) */}
            <div style={{ position: 'absolute', top: '91%', left: '11.93%', width: '25%', height: '3%' }}>
              <AutoFitText text={`Horas Certificadas: ${data.horas || '40'} horas`} baseSize="0.8rem" isBold={true} color="#003087" />
            </div>

            {/* CÓDIGO VERIFICACIÓN (Debajo de las horas) */}
            <div style={{ position: 'absolute', top: '93.5%', left: '11.93%', width: '60%', zIndex: 3 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#003087', wordBreak: 'break-all', lineHeight: '1.3' }}>
                Código de Verificación: {data.sello || 'N/A'}
              </div>
            </div>

            {/* URL DE VERIFICACIÓN (Debajo del código) */}
            <div style={{ position: 'absolute', top: '97%', left: '11.93%', width: '30%', height: '2%' }}>
              <AutoFitText text={`Validar en: cip.cultura-t.com/#/verificar`} baseSize="0.7rem" isBold={false} color="#003087" />
            </div>

            {/* FECHA DE EXPEDICIÓN (Derecha) */}
            <div style={{ position: 'absolute', top: '87%', left: '60%', width: '30%', height: '4%' }}>
              <AutoFitText text={`Fecha de Expedición: ${data.fecha || 'DD/MM/AAAA'}`} baseSize="1.1rem" isBold={true} color="#003087" textAlign="right" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Botón de descarga condicional */}
      {!hideControls && (
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          style={{
            background: '#032968',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 20px rgba(3, 41, 104, 0.2)',
            marginTop: '1rem'
          }}
        >
          <Download size={20} />
          {isGenerating ? 'Generando PDF...' : 'Descargar Certificado en PDF'}
        </button>
      )}
    </div>
  );
}
