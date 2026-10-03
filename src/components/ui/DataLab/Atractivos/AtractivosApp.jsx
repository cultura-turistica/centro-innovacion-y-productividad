import React, { useState, useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

import AtractivosDataStory from './AtractivosDataStory';
import AtractivosDashboard from './AtractivosDashboard';

export default function AtractivosApp({ mode, onSwitchMode }) {
  // Estado centralizado: Única fuente de verdad para los 8,345 registros.
  const [rawData, setRawData] = useState(null);
  
  // Manejo de carga y errores
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataset = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/data/inventario_nacional/mapa_inventario.json');
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - No se pudo descargar el dataset.`);
      }

      const data = await response.json();
      setRawData(data);
    } catch (err) {
      console.error("Error crítico obteniendo el inventario nacional:", err);
      setError(err.message || "Se perdió la conexión durante la descarga de los datos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!rawData) {
      fetchDataset();
    }
  }, [rawData]);

  if (error) {
    return (
      <div className="w-full h-[50vh] max-w-2xl mx-auto flex flex-col items-center justify-center p-8 text-center bg-rose-50 border border-rose-200 rounded-3xl mt-10 shadow-xs">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4 text-rose-600">
          <AlertCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Error al conectar con la base de datos</h3>
        <p className="text-slate-600 mb-6 text-sm max-w-md">
          {error}. Puede deberse a un problema de red al cargar el corpus de 8,345 registros.
        </p>
        <button 
          onClick={fetchDataset}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-md cursor-pointer active:scale-95 text-sm"
        >
          <RefreshCw size={16} />
          Reintentar Carga
        </button>
      </div>
    );
  }

  if (isLoading || !rawData) {
    return (
      <div className="w-full flex items-center justify-center h-[30vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <span className="text-slate-500 font-semibold tracking-wider uppercase text-xs">Cargando 8,345 registros...</span>
        </div>
      </div>
    );
  }

  // Enrutador de modos
  if (mode === 'dashboard') {
    return (
      <AtractivosDashboard 
        data={rawData} 
        onSwitchToStory={() => onSwitchMode && onSwitchMode('story')} 
      />
    );
  }

  return (
    <AtractivosDataStory 
      data={rawData} 
      onSwitchToDashboard={() => onSwitchMode && onSwitchMode('dashboard')} 
    />
  );
}
