import test from 'node:test';
import assert from 'node:assert/strict';
import { catalogoData } from '../src/data/cursos/catalogo.js';
import { CALCULADORA_DATA } from '../src/data/academia/calculadoraData.js';

test('Mi Academia - Catálogo de formación continua', () => {
  assert.ok(catalogoData.courses, 'Debe existir la lista de cursos');
  assert.equal(catalogoData.courses.length, 7, 'Deben existir 7 cursos en el catálogo');

  catalogoData.courses.forEach((curso) => {
    assert.ok(curso.slug, 'Cada curso debe tener slug de navegación');
    assert.ok(curso.title, `El curso ${curso.slug} debe tener título`);
    assert.ok(curso.description, `El curso ${curso.slug} debe tener descripción`);
    assert.ok(curso.info, `El curso ${curso.slug} debe tener metadata info`);
    assert.ok(curso.action, `El curso ${curso.slug} debe tener acción/enlace configurado`);
  });
});

test('Herramientas CIP - Integridad de la Calculadora de Costeo', () => {
  assert.ok(CALCULADORA_DATA.initialState, 'La calculadora debe tener un estado inicial estructurado');
  assert.ok(CALCULADORA_DATA.modals, 'La calculadora debe incluir modales explicativos');
  assert.ok(CALCULADORA_DATA.uiLabels, 'La calculadora debe incluir etiquetas de UI');
  assert.equal(
    typeof CALCULADORA_DATA.initialState.percentages.netProfit,
    'number',
    'El margen de utilidad neta debe ser numérico'
  );
  assert.ok(
    CALCULADORA_DATA.initialState.fixedCosts.length > 0,
    'Debe incluir costos fijos predeterminados'
  );
});
