import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, CheckCircle, XCircle, FileBadge, Database } from 'lucide-react';
import { verifyCertificateSeal } from '../utils/security';

export default function Verificar() {
  const [sealInput, setSealInput] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // === REEMPLAZAR CON TU URL DE GOOGLE SHEETS ===
  // Para obtener esto:
  // 1. Ve a tu Google Sheet
  // 2. Archivo > Compartir > Publicar en la Web
  // 3. Elige "Toda el documento" o "Hoja 1", y formato "Valores separados por comas (.csv)"
  // 4. Pega el link aquí:
  const GOOGLE_SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjcualYwUy1iUkz8Ra1Rggfo2VOhsHaP8SDClUVC_z0XKnKvvQ5UZZe7Db5778h_dt5IE7fUx6l28t/pub?gid=987654321&single=true&output=csv";

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!sealInput.trim()) return;
    
    setHasSearched(false);
    setIsSearching(true);
    setVerificationResult(null);
    
    const inputSeal = sealInput.trim().toUpperCase(); // Los sellos ahora son mayúsculas

    try {
      // 1. Ya no hay validación matemática estricta desencriptada,
      // porque el sello ahora es un código corto tipo CIP-DDMM-CED-RAND.
      // Simplemente verificamos que tenga un formato razonable.
      if (!inputSeal.startsWith('CIP-')) {
        throw new Error("El formato del sello es inválido. Debe comenzar con CIP-");
      }

      // 2. Validación contra la Base de Datos (Google Sheets CSV)
      let foundData = null; 

      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        const csvText = await response.text();
        
        // Parsear el CSV manual simple
        const rows = csvText.split('\n').map(row => row.split(','));
        
        // Buscar la fila que contenga el código exacto
        const matchedRow = rows.find(row => row.some(cell => cell.trim() === inputSeal));

        if (matchedRow) {
          // El usuario configuró el CSV en este orden exacto:
          // [Nombre, Sello, Fecha, Curso_ID]
          
          let nombre = matchedRow[0] || "Estudiante";
          let fecha = matchedRow[2] || "Fecha no disponible";
          let curso = matchedRow[3] || "Módulo General";

          // Si de pronto detectamos que pegaron la hoja cruda completa (la posición 4 es el sello)
          if (matchedRow[4] && matchedRow[4].trim() === inputSeal) {
            nombre = matchedRow[2]; // NOMBRE_COMPLETO
            fecha = matchedRow[5];  // FECHA
            curso = matchedRow[1];  // CURSO_ID
          }

          foundData = {
            nombre: nombre.replace(/"/g, '').trim(),
            curso: curso.replace(/"/g, '').trim(),
            fecha: fecha.replace(/"/g, '').trim()
          };
        }
      } catch (fetchError) {
        console.warn("No se pudo conectar al CSV de Google Sheets.", fetchError);
      }

      if (foundData) {
        setVerificationResult(foundData);
      } else {
        throw new Error("El certificado no existe en la base de datos oficial o ha sido revocado.");
      }

    } catch (error) {
      console.error(error);
      setVerificationResult(null); // Falló
    }

    setIsSearching(false);
    setHasSearched(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem' }}>
      
      <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '600px', width: '100%', border: '1px solid #e2e8f0', zIndex: 1, position: 'relative' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
            <ShieldCheck size={40} color="#032968" />
          </div>
          <h1 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>Validación de Certificados</h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Ingresa el sello del certificado. El sistema cruzará el dato con la base de datos oficial del CIP.</p>
        </div>

        <form onSubmit={handleVerify} style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Ej: CIP-aB3dE..." 
            value={sealInput}
            onChange={(e) => setSealInput(e.target.value)}
            style={{ 
              flex: 1, 
              padding: '1.2rem', 
              borderRadius: '12px', 
              border: '2px solid #cbd5e1', 
              fontSize: '1.1rem',
              fontFamily: 'monospace'
            }} 
          />
          <button 
            type="submit" 
            disabled={isSearching}
            style={{ 
              background: '#032968', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px', 
              padding: '0 2rem', 
              fontWeight: 700,
              cursor: isSearching ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s',
              opacity: isSearching ? 0.7 : 1
            }}
          >
            <Search size={20} /> {isSearching ? 'Buscando...' : 'Verificar'}
          </button>
        </form>

        {hasSearched && !isSearching && (
          <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
            {verificationResult ? (
              <div style={{ background: '#dcfce7', border: '1px solid #86efac', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                <CheckCircle size={48} color="#16a34a" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#166534', margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 800 }}>Certificado Auténtico</h3>
                
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px dashed #86efac', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Otorgado a:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.nombre}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Curso Aprobado:</span>
                    <strong style={{ color: '#0f172a' }}>Módulo {verificationResult.curso}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Fecha de Expedición:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.fecha}</strong>
                  </div>
                </div>
                
                <p style={{ color: '#15803d', fontSize: '0.9rem', marginTop: '1.5rem', marginBottom: 0 }}>
                  Validado correctamente contra el registro oficial.
                </p>
              </div>
            ) : (
              <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                <XCircle size={48} color="#dc2626" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#991b1b', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>Certificado No Válido</h3>
                <p style={{ color: '#b91c1c', margin: 0 }}>El sello no existe en nuestra base de datos (Google Sheets) o ha sido alterado.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '0.9rem' }}>
        <Database size={16} /> Base de datos conectada vía Google Sheets CSV
      </div>
    </div>
  );
}
