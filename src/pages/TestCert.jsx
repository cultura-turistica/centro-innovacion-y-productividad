import React from 'react';
import CertificateGenerator from '../components/CertificateGenerator';

export default function TestCert() {
  // Datos simulados (con nombres largos para probar el AutoFitText)
  const mockData = {
    nombre: 'JUAN PÉREZ LÓPEZ Y GONZÁLEZ DE LA SANTÍSIMA TRINIDAD',
    curso: 'Diseño de Productos Turísticos Avanzados y Sostenibilidad',
    identificacion: 'C.C. 1.020.304.050',
    horas: '60',
    sello: '9F8D-A321-B4C5-XYZ9',
    fecha: '28 de Junio de 2026'
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' }}>
      <div style={{ width: '90vw', maxWidth: '1200px' }}>
        <CertificateGenerator data={mockData} hideControls={true} />
      </div>
    </div>
  );
}
