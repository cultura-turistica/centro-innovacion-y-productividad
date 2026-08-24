const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

admin.initializeApp();

exports.generarCertificado = onRequest({ invoker: "public", cors: true }, (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      const data = req.body;

      // 1. Load PDF from disk
      const templatePath = path.join(__dirname, "assets", "diploma-template.pdf");
      const templateBytes = fs.readFileSync(templatePath);

      // 2. Load PDF
      const pdfDoc = await PDFDocument.load(templateBytes);
      const pages = pdfDoc.getPages();
      const page = pages[0];
      const { width, height } = page.getSize();
      
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      
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

          page.drawText(text, { x: finalX, y: finalY, size: currentSize, font: fontType, color: brandColor });
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

          page.drawText(text, { x: finalX, y: finalY, size: size, font: fontType, color: brandColor });
      };

      drawCenteredTextInSvgRect(data.curso || "Curso de Innovación Turística", 292.63, 729.167, 1244.87, 87.906, true, 26);
      drawCenteredTextInSvgRect(data.nombre || "Participante Destacado", 292.63, 874.021, 1244.87, 87.906, true, 32);
      
      const idValue = data.identificacion && data.identificacion !== 'N/A' ? `C.C. ${data.identificacion}` : 'C.C. 1234567890';
      drawCenteredTextInSvgRect(idValue, 638.463, 977.485, 899.037, 87.906, true, 22);

      drawTextInSvgCoords(`Horas Certificadas: ${data.horas || '40'} horas`, 292.63, 1591, true, 11);
      drawTextInSvgCoords(`Código de Verificación: ${data.sello || 'N/A'}`, 292.63, 1635, true, 9);
      drawTextInSvgCoords(`Validar en: cip.cultura-t.com/verificador`, 292.63, 1696, false, 10);
      drawTextInSvgCoords(`Fecha de Expedición: ${data.fecha || new Date().toLocaleDateString()}`, 2200, 1521, true, 16, 'right');

      // Add to Firestore ONLY IF it has a valid sello
      if (data.sello && data.sello !== 'N/A') {
          await admin.firestore().collection('certificados').doc(data.sello).set({
              nombre: data.nombre || "Participante Destacado",
              curso: data.curso || "Curso de Innovación Turística",
              identificacion: data.identificacion || '1234567890',
              horas: data.horas || '40',
              sello: data.sello,
              fecha: data.fecha || new Date().toISOString(),
              timestamp: admin.firestore.FieldValue.serverTimestamp()
          });
      }

      const pdfBytes = await pdfDoc.save();
      
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="Certificado_${data.nombre ? data.nombre.replace(/\s+/g, '_') : 'descarga'}.pdf"`);
      res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
      res.status(200).send(Buffer.from(pdfBytes));

    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
