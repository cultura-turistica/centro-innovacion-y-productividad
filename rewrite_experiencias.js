const fs = require('fs');
const path = require('path');

const modulosDir = path.join(__dirname, 'src/data/cursos/experiencias-privadas');

const configs = [
  { mod: 1, color: "#2563eb", hasComp: true, lTheme: "rose", rTheme: "emerald", caseKey: "interactiveCaseStudy", exKey: "interviewSimulator" },
  { mod: 2, color: "#d946ef", hasComp: false, lTheme: "", rTheme: "", caseKey: null, exKey: "valueFormulaBuilder" },
  { mod: 3, color: "#f59e0b", hasComp: true, lTheme: "slate", rTheme: "emerald", caseKey: null, exKey: "bottleneckSimulator" },
  { mod: 4, color: "#ef4444", hasComp: true, lTheme: "rose", rTheme: "slate", caseKey: null, exKey: "audienceSelector" },
  { mod: 5, color: "#10b981", hasComp: true, lTheme: "slate", rTheme: "emerald", caseKey: "interactiveCaseStudy", exKey: "matrizPriorizacion" }
];

configs.forEach(config => {
  const filePath = path.join(modulosDir, `modulo-${config.mod}.js`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Inject themeColor
  content = content.replace(new RegExp(`export const modulo${config.mod}Data = {`), `export const modulo${config.mod}Data = {\n  themeColor: "${config.color}",`);
  
  // header -> photoHeader
  content = content.replace(/header: {/g, `photoHeader: {`);
  
  // intro -> infoBlock1
  content = content.replace(/intro: {/g, `infoBlock1: {`);
  
  // comparacion -> comparisonBlock
  if (config.hasComp) {
    const compRegex = /comparacion: {[\s\S]*?leftTitle: "(.*?)",\s*leftContent: "(.*?)",\s*rightTitle: "(.*?)",\s*rightContent: "(.*?)"\s*}/;
    const match = content.match(compRegex);
    if (match) {
      let title = "Paradigma de Investigación";
      if (config.mod === 3) title = "Técnicas de Validación";
      if (config.mod === 4) title = "Análisis Crítico";
      if (config.mod === 5) title = "Sense & Respond";

      const newComp = `comparisonBlock: {
    title: "${title}",
    leftTheme: "${config.lTheme}",
    rightTheme: "${config.rTheme}",
    producto: {
      title: "${match[1]}",
      content: "${match[2]}"
    },
    experiencia: {
      title: "${match[3]}",
      content: "${match[4]}"
    }
  }`;
      content = content.replace(compRegex, newComp);
    }
  }

  // casoReal -> interactiveCaseStudy
  if (config.caseKey) {
    content = content.replace(/casoReal: {/g, `${config.caseKey}: {`);
  }

  // ejercicio -> specificComponent
  if (config.exKey) {
    content = content.replace(/ejercicio: {/g, `${config.exKey}: {`);
  }

  // Handle module 2 grid
  if (config.mod === 2) {
    content = content.replace(/dimensiones: \[/, `dimensionesGrid: [`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log("Migration script complete");
