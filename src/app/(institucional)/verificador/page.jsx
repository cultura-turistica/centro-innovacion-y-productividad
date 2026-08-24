"use client";

import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, Loader2, ShieldCheck, Calendar, Clock, BookOpen, User } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function VerificadorPage() {
  const [sello, setSello] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { type: 'success' | 'error', data?: any }

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!sello.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const docRef = doc(db, 'certificados', sello.trim());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setResult({
          type: 'success',
          data: docSnap.data()
        });
      } else {
        setResult({
          type: 'error'
        });
      }
    } catch (error) {
      console.error("Error verificando:", error);
      setResult({
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Fecha no disponible';
    
    // Si ya viene en formato que no se puede parsear directamente por Date (como DD/MM/YYYY que tira Invalid Date en algunos navegadores)
    const date = new Date(dateString);
    if (date.toString() === 'Invalid Date') {
      return dateString; // Devolvemos el string tal cual fue guardado ("23/8/2026")
    }
    
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 flex flex-col items-center overflow-hidden">
      {/* Decorative Blobs from HeroSection */}
      <div className="absolute top-10 left-10 md:left-1/4 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-10 right-10 md:right-1/4 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-2xl w-full">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            <span className="text-[#0a275a]">Verificador</span> <span className="text-[#f37321]">Oficial</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
            Ingresa el código único ubicado en la esquina inferior izquierda del diploma para validar su autenticidad.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={sello}
                onChange={(e) => setSello(e.target.value)}
                placeholder="Ej. e7b5...3a9c"
                className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-300 text-slate-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg font-mono outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !sello.trim()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Validar Código"
              )}
            </button>
          </form>
        </div>

        {/* Results Area */}
        {result?.type === 'error' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
              <XCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Certificado no encontrado</h3>
            <p className="text-red-700">
              El código ingresado no existe en nuestros registros oficiales o fue escrito incorrectamente. Por favor, verifica el código e inténtalo de nuevo.
            </p>
          </div>
        )}

        {result?.type === 'success' && result.data && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white border-2 border-emerald-500 rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden relative">
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Certificado Válido y Auténtico</h3>
                <p className="text-emerald-700 font-medium">Registro confirmado en la base de datos oficial</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">
                  <User className="w-4 h-4" />
                  Nombre del Titular
                </div>
                <p className="text-lg font-medium text-slate-900">{result.data.nombre}</p>
                {result.data.identificacion && result.data.identificacion !== '1234567890' && (
                  <p className="text-sm text-slate-500">C.C. {result.data.identificacion}</p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">
                  <BookOpen className="w-4 h-4" />
                  Programa Cursado
                </div>
                <p className="text-lg font-medium text-slate-900">{result.data.curso}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4" />
                  Horas Certificadas
                </div>
                <p className="text-lg font-medium text-slate-900">{result.data.horas} Horas Académicas</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4" />
                  Fecha de Expedición
                </div>
                <p className="text-lg font-medium text-slate-900">{formatDate(result.data.fecha)}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 rounded-lg p-4 text-center">
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest break-all">
                  CÓDIGO DE REGISTRO: {result.data.sello}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
