import CryptoJS from 'crypto-js';

// SECRET KEY para encriptar los certificados.
// ATENCIÓN: Como esto corre en el frontend, esta llave existe en el bundle de JS.
// Para un curso de acceso libre, esto ofrece un nivel de seguridad funcional suficiente
// contra la falsificación casual.
const CERT_SECRET_KEY = "CIP-CULTURA-T-SECRETO-VERIFICACION-2026";

/**
 * Genera un Sello de Verificación corto, único y profesional.
 * Formato: CIP-[DDMM]-[3 Primeros Dígitos Cédula]-[4 Letras Aleatorias]
 * Ejemplo: CIP-2806-102-X9K2
 * @param {Object} data - Ej: { nombre: "Juan", curso: 1, identificacion: "1026...", fecha: "28/6/2026" }
 * @returns {string} Sello corto
 */
export const generateCertificateSeal = (data) => {
  try {
    // 1. Extraer Día y Mes (DDMM)
    const dateObj = new Date();
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    
    // 2. Extraer primeros 3 dígitos de la cédula (o '000' si no hay)
    const cedulaPrefix = data.identificacion ? String(data.identificacion).replace(/\D/g, '').substring(0, 3) : "000";
    const paddedCedula = cedulaPrefix.padEnd(3, '0');

    // 3. Generar 4 caracteres aleatorios (letras mayúsculas y números)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Evitamos O, 0, I, 1 para evitar confusión visual
    let randomPart = '';
    for (let i = 0; i < 4; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Unir todo
    return `CIP-${day}${month}-${paddedCedula}-${randomPart}`;
  } catch (error) {
    console.error("Error al generar el sello:", error);
    return `CIP-ERR-${Math.floor(Math.random() * 10000)}`;
  }
};

/**
 * Desencripta un Sello y extrae los datos originales si es válido.
 * @param {string} seal - El código impreso en el PDF (ej: U2FsdGVkX1...)
 * @returns {Object|null} Objeto con los datos o null si el certificado es falso
 */
export const verifyCertificateSeal = (seal) => {
  try {
    // Revertir el base64url a base64 normal
    let base64 = seal.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const encrypted = atob(base64);
    
    // Desencriptar con AES
    const bytes = CryptoJS.AES.decrypt(encrypted, CERT_SECRET_KEY);
    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedStr) return null; // Falló la desencriptación (falso o manipulado)
    
    return JSON.parse(decryptedStr);
  } catch (error) {
    // Cualquier error (formato inválido, JSON corrupto) significa que es falso
    return null;
  }
};

/**
 * Genera un Hash SHA-256 (unidireccional) para comparar respuestas sin
 * exponer la respuesta correcta en el código fuente.
 * @param {string} text - El texto a hashear (ej. respuesta del estudiante)
 * @returns {string} El hash en formato Hex
 */
export const hashAnswer = (text) => {
  // Limpiamos el texto para evitar que espacios extra arruinen la validación
  const cleanText = text.toString().trim().toLowerCase();
  return CryptoJS.SHA256(cleanText).toString(CryptoJS.enc.Hex);
};
