import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle, XCircle, Database } from 'lucide-react';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Verificar() {
  const [sealInput, setSealInput] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!sealInput.trim()) return;
    
    setHasSearched(false);
    setIsSearching(true);
    setVerificationResult(null);
    
    const inputSeal = sealInput.trim().toUpperCase();

    try {
      if (!inputSeal.startsWith('CIP-')) {
        throw new Error("El formato del sello es inválido. Debe comenzar con CIP-");
      }

      // Validar contra Firebase Firestore
      const certId = inputSeal.substring(0, 15); // El ID del documento es el inicio del sello
      const docRef = doc(db, 'certificates', certId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Verificar que el sello criptográfico coincida exactamente
        if (data.cryptographicSeal === inputSeal) {
          setVerificationResult({
            nombre: data.studentName,
            curso: data.courseName,
            fecha: new Date(data.issuedAt).toLocaleDateString('es-CO'),
            horas: data.horas || "40",
            identificacion: data.identification,
            sello: data.cryptographicSeal
          });
        } else {
          throw new Error("El sello criptográfico no coincide o ha sido alterado.");
        }
      } else {
        throw new Error("El certificado no existe en la base de datos oficial o ha sido revocado.");
      }

    } catch (error) {
      console.error(error);
      setVerificationResult(null);
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
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Ingresa el código oficial (Ej. CIP-1307-...) para comprobar su autenticidad en la base de datos del Centro de Innovación.</p>
        </div>

        <form onSubmit={handleVerify} style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Ej: CIP-1307-421-9PZ2" 
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
                <CheckCircle size={48} color="#16a34a" style={{ marginBottom: '1rem', display: 'inline-block' }} />
                <h3 style={{ color: '#166534', margin: '0 0 1rem 0', fontSize: '1.5rem', fontWeight: 800 }}>Certificado Auténtico</h3>
                
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px dashed #86efac', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Otorgado a:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.nombre}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Identificación:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.identificacion}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Curso Aprobado:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.curso}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Fecha de Expedición:</span>
                    <strong style={{ color: '#0f172a' }}>{verificationResult.fecha}</strong>
                  </div>
                </div>
                
                <p style={{ color: '#15803d', fontSize: '0.9rem', marginTop: '1.5rem', marginBottom: 0 }}>
                  Validado correctamente contra el registro oficial seguro en Firestore.
                </p>
              </div>
            ) : (
              <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                <XCircle size={48} color="#dc2626" style={{ marginBottom: '1rem', display: 'inline-block' }} />
                <h3 style={{ color: '#991b1b', margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 800 }}>Certificado No Válido</h3>
                <p style={{ color: '#b91c1c', margin: 0 }}>El código ingresado no existe en nuestra base de datos segura o ha sido alterado.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '0.9rem' }}>
        <Database size={16} /> Base de datos conectada de forma segura mediante Cloud Firestore
      </div>
    </div>
  );
}
