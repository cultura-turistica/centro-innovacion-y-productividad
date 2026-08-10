import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Leer la plantilla PDF maestra (SVG convertido)
    const templatePath = path.join(process.cwd(), 'public', 'assets', 'certificados', 'diploma-template.pdf');
    const templateBytes = fs.readFileSync(templatePath);
    
    const pdfDoc = await PDFDocument.load(templateBytes);
    
    const pages = pdfDoc.getPages();
    const page = pages[0];
    const { width, height } = page.getSize();
    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Color corporativo exacto #003087
    const brandColor = rgb(0, 48 / 255, 135 / 255);

    // Dimensiones originales del viewBox del SVG
    const SVG_WIDTH = 2452.0;
    const SVG_HEIGHT = 1749.0;
    
    // Factores de escala
    const rx = width / SVG_WIDTH;
    const ry = height / SVG_HEIGHT;

    // Función que mapea geométricamente los rectángulos del SVG al PDF
    const drawCenteredTextInSvgRect = (text, svgX, svgY, svgW, svgH, isBold, baseFontSize) => {
        if (!text) return;
        const fontType = isBold ? fontBold : font;
        
        // Coordenadas en PDF
        const pdfX = svgX * rx;
        const pdfW = svgW * rx;
        const pdfTopY = height - (svgY * ry);
        const pdfH = svgH * ry;
        
        // Reducir la fuente si el texto es muy ancho
        let currentSize = baseFontSize;
        let textWidth = fontType.widthOfTextAtSize(text, currentSize);
        
        while (textWidth > pdfW * 0.95 && currentSize > 8) { // 95% para un pequeño padding
            currentSize -= 0.5;
            textWidth = fontType.widthOfTextAtSize(text, currentSize);
        }
        
        // Centrado X
        const finalX = pdfX + (pdfW - textWidth) / 2;
        
        // Centrado Y (pdf-lib usa el bottom-left)
        // Calculamos el centro real de la caja y bajamos un poco por la línea base de la fuente
        const centerY = pdfTopY - (pdfH / 2);
        const finalY = centerY - (currentSize / 3.5); // 3.5 ajusta visualmente el centro vertical de las letras

        page.drawText(text, {
            x: finalX,
            y: finalY,
            size: currentSize,
            font: fontType,
            color: brandColor
        });
    };

    // Función para dibujar texto normal sin centrado (usado para Sello y Horas)
    const drawTextInSvgCoords = (text, svgX, svgY, isBold, size, align = 'left') => {
        if (!text) return;
        const fontType = isBold ? fontBold : font;
        let textWidth = fontType.widthOfTextAtSize(text, size);
        
        let finalX = svgX * rx;
        if (align === 'right') {
            finalX -= textWidth;
        }

        const finalY = height - (svgY * ry) - size; // offset simple de baseline

        page.drawText(text, {
            x: finalX,
            y: finalY,
            size: size,
            font: fontType,
            color: brandColor
        });
    };

    // 1. PRIMERA CAJA: Nombre del Curso
    // <rect x="292.63" y="729.167" width="1244.87" height="87.906" />
    drawCenteredTextInSvgRect(data.curso || "Curso de Innovación Turística", 292.63, 729.167, 1244.87, 87.906, true, 26);

    // 2. SEGUNDA CAJA: Nombre Completo
    // <rect x="292.63" y="874.021" width="1244.87" height="87.906" />
    drawCenteredTextInSvgRect(data.nombre || "Participante Destacado", 292.63, 874.021, 1244.87, 87.906, true, 32);

    // 3. TERCERA CAJA: Cédula (Identificación)
    // <rect x="638.463" y="977.485" width="899.037" height="87.906" />
    const idValue = data.identificacion && data.identificacion !== 'N/A' ? `C.C. ${data.identificacion}` : 'C.C. 1234567890';
    drawCenteredTextInSvgRect(idValue, 638.463, 977.485, 899.037, 87.906, true, 22);

    // 4. HORAS CERTIFICADAS
    drawTextInSvgCoords(`Horas Certificadas: ${data.horas || '40'} horas`, 292.63, 1591, true, 11);

    // 5. CÓDIGO ÚNICO (Sello Criptográfico)
    drawTextInSvgCoords(`Código de Verificación: ${data.sello || 'N/A'}`, 292.63, 1635, true, 9);

    // 6. LINK DE VALIDACIÓN
    drawTextInSvgCoords(`Validar en: cip.cultura-t.com/#/verificar`, 292.63, 1696, false, 10);

    // 7. FECHA DE EXPEDICIÓN
    drawTextInSvgCoords(`Fecha de Expedición: ${data.fecha || new Date().toLocaleDateString()}`, 2200, 1521, true, 16, 'right');

    const pdfBytes = await pdfDoc.save();
    
    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Certificado_${data.nombre ? data.nombre.replace(/\s+/g, '_') : 'descarga'}.pdf"`,
      },
    });

  } catch (error) {
    console.error("Error generating PDF in server:", error);
    return NextResponse.json({ error: 'Error generating PDF' }, { status: 500 });
  }
}
