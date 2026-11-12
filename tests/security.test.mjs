import test from 'node:test';
import assert from 'node:assert/strict';
import { generateCertificateSeal, hashAnswer } from '../src/utils/security.js';

test('Seguridad CIP - generateCertificateSeal genera formato válido', () => {
  const data = {
    nombre: 'Usuario Prueba',
    identificacion: '1026123456',
    curso: 'turismo-comunitario'
  };

  const seal = generateCertificateSeal(data);
  assert.ok(seal, 'El sello debe ser generado');
  assert.match(seal, /^CIP-\d{4}-102-[A-Z0-9]{4}$/, 'El sello debe tener el formato CIP-[DDMM]-[CEDULA]-[RAND4]');
});

test('Seguridad CIP - generateCertificateSeal maneja identificaciones vacías con fallback', () => {
  const seal = generateCertificateSeal({});
  assert.ok(seal.startsWith('CIP-'), 'El sello debe iniciar con CIP-');
  assert.match(seal, /^CIP-\d{4}-000-[A-Z0-9]{4}$/, 'Debe rellenar con 000 cuando no hay cédula');
});

test('Seguridad CIP - hashAnswer genera hash SHA-256 determinista de 64 caracteres', () => {
  const input = 'Respuesta Correcta';
  const hash1 = hashAnswer(input);
  const hash2 = hashAnswer('  respuesta correcta  ');

  assert.equal(hash1.length, 64, 'El hash SHA-256 debe tener 64 caracteres hexadecimales');
  assert.equal(hash1, hash2, 'hashAnswer debe normalizar espacios y mayúsculas');
  assert.match(hash1, /^[a-f0-9]{64}$/, 'El hash debe ser exclusivamente hexadecimal');
});
