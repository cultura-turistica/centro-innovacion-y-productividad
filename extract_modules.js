const fs = require('fs');

const htmlContent = fs.readFileSync('/Users/cultur/.gemini/antigravity/scratch/capacitacion-cip/curso1.html', 'utf-8');

// Find the start of the array
const startIndex = htmlContent.indexOf('const coursesInfo = [');
if (startIndex === -1) {
  console.error("Could not find coursesInfo array");
  process.exit(1);
}

// Very basic parsing to get the array content. Since it's valid JS, we can extract until the matching close bracket.
// Actually, it's easier to regex out the modules. We know they are separated by "// MÓDULO X:" comments.
const rawData = htmlContent.substring(startIndex);
// We will simply extract the HTML from // MÓDULO 6 to the end.

const data = `export const legacyModules = [
  {
    id: 6,
    theme: 'catalina',
    title: 'Módulo 6: Segmentación de Mercado',
    html: \`` + htmlContent.split("// MÓDULO 6: SEGMENTACIÓN DE MERCADO")[1]
      .split("// MÓDULO 7: GUÍAS DE TURISMO")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  },
  {
    id: 7,
    theme: 'concordo',
    title: 'Módulo 7: Guión y Guías de Turismo',
    html: \`` + htmlContent.split("// MÓDULO 7: GUÍAS DE TURISMO")[1]
      .split("// MÓDULO 8: FINANZAS")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  },
  {
    id: 8,
    theme: 'catalina',
    title: 'Módulo 8: Finanzas',
    html: \`` + htmlContent.split("// MÓDULO 8: FINANZAS")[1]
      .split("// MÓDULO 9: MARCA COMERCIAL")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  },
  {
    id: 9,
    theme: 'torch',
    title: 'Módulo 9: Marca Comercial',
    html: \`` + htmlContent.split("// MÓDULO 9: MARCA COMERCIAL")[1]
      .split("// MÓDULO 10: GENERACIÓN DE CONTENIDOS")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  },
  {
    id: 10,
    theme: 'amazon',
    title: 'Módulo 10: Generación de Contenidos',
    html: \`` + htmlContent.split("// MÓDULO 10: GENERACIÓN DE CONTENIDOS")[1]
      .split("// MÓDULO 11: COSTOS Y PRECIOS")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  },
  {
    id: 11,
    theme: 'catalina',
    title: 'Módulo 11: Costos y Precios',
    html: \`` + htmlContent.split("// MÓDULO 11: COSTOS Y PRECIOS")[1]
      .split("];")[0]
      .split("html: `")[1]
      .split("`\n}")[0] + `\`
  }
];`;

fs.writeFileSync('/Users/cultur/.gemini/antigravity/scratch/repo-github/src/pages/CursoIntegrado/legacyData.js', data);
console.log("Successfully extracted modules 6-11.");
