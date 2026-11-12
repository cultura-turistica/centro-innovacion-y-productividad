import test from 'node:test';
import assert from 'node:assert/strict';
import { registroIdi } from '../src/data/centro-conocimiento/registroIdi.js';

test('Banco de Proyectos I+D+i - Integridad de los 24 proyectos territoriales', () => {
  const projectKeys = Object.keys(registroIdi);
  assert.equal(projectKeys.length, 24, 'Deben existir exactamente 24 proyectos registrados en el repositorio');

  projectKeys.forEach((key) => {
    const proj = registroIdi[key];
    assert.ok(proj.id, `El proyecto ${key} debe tener un id`);
    assert.ok(proj.tipoIDI, `El proyecto ${key} debe tener tipología tipoIDI`);
    assert.ok(proj.hero && proj.hero.title, `El proyecto ${key} debe tener un título hero`);
    assert.ok(proj.fichaTecnica, `El proyecto ${key} debe tener una fichaTecnica`);
    assert.ok(
      proj.fichaTecnica['Contratante'] || proj.fichaTecnica['Línea de Investigación'],
      `El proyecto ${key} debe registrar Contratante o Línea de Investigación`
    );
    assert.ok(proj.secciones, `El proyecto ${key} debe tener secciones metodológicas`);
  });
});
