import fs from 'fs';
import path from 'path';

const routes = [
  'cursos',
  'turismo-comunitario',
  'diseno-producto',
  'finanzas-y-costeo',
  'laboratorio-datos',
  'laboratorio-datos/proyecto-sae',
  'laboratorio-datos/proyecto-prosperidad',
  'laboratorio-datos/proyecto-co2',
  'ruta-formulacion-fontur',
  'centro-pensamiento'
];

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('No se encontró dist/index.html. Asegúrate de correr npm run build primero.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf8');

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  fs.writeFileSync(path.join(routePath, 'index.html'), indexContent);
  console.log(`✓ Ruta generada: ${route}`);
});

console.log('¡Soporte SEO para GitHub Pages completado con éxito!');
