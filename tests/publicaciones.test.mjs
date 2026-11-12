import test from 'node:test';
import assert from 'node:assert/strict';
import { publicacionesCIP } from '../src/data/centro-conocimiento/publicacionesData.js';

test('Sello Editorial CIP - Integridad del fondo bibliográfico 2026', () => {
  assert.equal(publicacionesCIP.length, 8, 'El Sello Editorial debe contener exactamente 8 publicaciones');

  publicacionesCIP.forEach((pub, index) => {
    assert.ok(pub.id, `La publicación en índice ${index} debe tener un id`);
    assert.ok(pub.titulo, `La publicación ${pub.id} debe tener un título`);
    assert.ok(pub.compilador, `La publicación ${pub.id} debe tener un compilador`);
    assert.ok(pub.autores, `La publicación ${pub.id} debe listar sus autores`);
    assert.equal(pub.ano, '2026', `La publicación ${pub.id} debe corresponder al año 2026`);
    assert.match(pub.isbn, /^978-628-95757-\d-[0-9X]$/, `El ISBN de ${pub.id} debe tener formato oficial ISBN-13 colombiano`);
    assert.ok(pub.pdfUrl.startsWith('/assets/docs/'), `El PDF de ${pub.id} debe apuntar a /assets/docs/`);
  });
});
