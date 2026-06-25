import React, { useState } from 'react';
import { 
  BookOpen, ArrowLeft, ArrowRight, CheckCircle2, Target, 
  Settings, Database, User, Lightbulb, Compass, BarChart3, 
  Activity, Layers, Map, AlertTriangle, PenTool, Edit3,
  Users, Handshake, ShieldCheck, Heart, Zap, RefreshCw, MessageCircle, FileText, Briefcase, Copy, Eye, Scissors, Search, Star, Flame, Clock, Telescope, Award, Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { createAvatar } from '@dicebear/core';
import * as openPeeps from '@dicebear/open-peeps';
import * as micah from '@dicebear/micah';

import imgDisney from '../assets/caso_disney.png';
import imgVirgin from '../assets/caso_virgin.png';
import imgAwasi from '../assets/caso_awasi.png';
import imgXcaret from '../assets/caso_xcaret.png';
import imgLowcost from '../assets/caso_lowcost.png';

// Generador de ilustraciones tipo Blush / Open Peeps (Caras seguras y humanas)
const avatarBusiness = createAvatar(openPeeps, {
  seed: 'FelixCorporate',
  head: ['short1', 'short2', 'medium1'],
  face: ['smile', 'calm'],
  accessoriesProbability: 0,
  facialHairProbability: 0,
  maskProbability: 0,
  skinColor: ['ffdbb4', 'edb98a'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarHost1 = createAvatar(openPeeps, {
  seed: 'AnaHost',
  head: ['long', 'medium2', 'bun'],
  face: ['smileBig', 'cute'],
  accessoriesProbability: 0,
  facialHairProbability: 0,
  maskProbability: 0,
  skinColor: ['d08b5b', 'ffdbb4'],
  backgroundColor: ['transparent'],
  scale: 100,
}).toDataUri();

const avatarHost2 = createAvatar(openPeeps, {
  seed: 'LuisHost',
  head: ['short3', 'short4'],
  face: ['smile'],
  accessoriesProbability: 0,
  facialHairProbability: 100,
  facialHair: ['beard'],
  maskProbability: 0,
  skinColor: ['ae5d29', 'edb98a'],
  backgroundColor: ['transparent'],
  scale: 100,
}).toDataUri();

// Nuevos avatares estilo "Micah" para las tarjetas giratorias de Jobs-to-be-Done
const avatarJobFuncional = createAvatar(micah, {
  seed: 'FuncionalTurista',
  baseColor: ['f9c9b6'],
  mouth: ['smile'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarJobEmocional = createAvatar(micah, {
  seed: 'EmocionalViajera',
  baseColor: ['ffdbb4'],
  mouth: ['smile'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarJobSocial = createAvatar(micah, {
  seed: 'SocialInfluencer',
  baseColor: ['d08b5b'],
  mouth: ['smile'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

// Avatares para el Mapeo de Valor
const avatarDolor = createAvatar(openPeeps, {
  seed: 'ClienteEnojado',
  face: ['tired', 'frown'],
  backgroundColor: ['transparent'],
  scale: 100,
}).toDataUri();

const avatarDeleite = createAvatar(micah, {
  seed: 'ClienteFeliz',
  mouth: ['laughing', 'smile'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

// Avatares para Prototipado (Módulo 3)
const avatarPrototipo1 = createAvatar(micah, {
  seed: 'ArquitectoPrototipos',
  baseColor: ['f9c9b6'],
  mouth: ['smile'],
  glasses: ['round'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarPrototipo2 = createAvatar(micah, {
  seed: 'InvestigadorAislado',
  baseColor: ['ffdbb4'],
  mouth: ['laughing'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

// Avatares para Pilotos (Módulo 3 - Step 8)
const avatarPiloto1 = createAvatar(micah, {
  seed: 'EncuestaAburrida',
  baseColor: ['f9c9b6'],
  mouth: ['pucker', 'sad'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarPiloto2 = createAvatar(micah, {
  seed: 'ObservadorCientifico',
  baseColor: ['ffdbb4'],
  mouth: ['smile', 'laughing'],
  glasses: ['square'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

// Avatares para MVP (Módulo 4 - Step 9)
const avatarMVP1 = createAvatar(micah, {
  seed: 'ProveedorFalla',
  baseColor: ['f9c9b6'],
  mouth: ['sad', 'pucker'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

const avatarMVP2 = createAvatar(micah, {
  seed: 'VendedorPitch',
  baseColor: ['ffdbb4'],
  mouth: ['laughing'],
  backgroundColor: ['transparent'],
  scale: 110,
}).toDataUri();

// Avatares para Sense & Respond (Módulo 5 - Step 11)
const avatarSense = createAvatar(micah, {
  seed: 'SentirDatos',
  baseColor: ['f9c9b6'],
  mouth: ['smile', 'laughing'],
  glasses: ['round'],
  backgroundColor: ['transparent'], 
  scale: 110,
}).toDataUri();

const avatarRespond = createAvatar(micah, {
  seed: 'ResponderAccion',
  baseColor: ['ffdbb4'],
  mouth: ['laughing'],
  backgroundColor: ['transparent'], 
  scale: 110,
}).toDataUri();

export default function CursoMicroExperiencias() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 12;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  let headerColor = '#032968';
  let headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  let modTitle = 'Módulo 1: Descubrimiento y Empatía';

  if (step >= 4 && step <= 6) { 
    headerColor = '#055C38'; 
    headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
    modTitle = 'Módulo 2: El Tablero de Propuesta de Valor'; 
  }
  else if (step >= 7 && step <= 8) { 
    headerColor = '#F06000'; 
    headerGradient = 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
    modTitle = 'Módulo 3: Prototipado y Validación'; 
  }
  else if (step >= 9 && step <= 10) { 
    headerColor = '#166534'; 
    headerGradient = 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)';
    modTitle = 'Módulo 4: Estructuración del Negocio y MVP'; 
  }
  else if (step >= 11) { 
    headerColor = '#4c1d95'; 
    headerGradient = 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)';
    modTitle = 'Módulo 5: Ciclo de Sense & Respond'; 
  }

  // Componente Reutilizable: Ejercicio del Emprendedor
  const EjercicioPractico = ({ titulo, contenido }) => (
    <div className="interactive-card" style={{
      marginTop: '3rem',
      background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
      border: `2px dashed ${headerColor}80`,
      borderRadius: '20px',
      padding: '2rem',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        position: 'absolute', top: '-20px', left: '30px', 
        background: headerColor, color: 'white', 
        padding: '8px 20px', borderRadius: '30px', 
        fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px',
        boxShadow: `0 4px 15px ${headerColor}50`
      }}>
        <Edit3 size={18} /> Laboratorio de Acción
      </div>
      <h4 style={{ color: '#334155', marginTop: '10px', marginBottom: '10px', fontSize: '1.2rem' }}>{titulo}</h4>
      {typeof contenido === 'string' ? (
        <div style={{ color: '#475569', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: contenido }}></div>
      ) : (
        <div style={{ color: '#475569', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }}>
          {contenido}
        </div>
      )}
    </div>
  );

  // Componente Reutilizable: Casos Reales del Mundo
  const CasoReal = ({ empresa, titulo, contenido, illustration, img, tipo = "good" }) => {
    const isBad = tipo === 'bad';
    return (
      <div className="interactive-card" style={{
        background: isBad ? '#fef2f2' : '#f0f9ff',
        borderLeft: `5px solid ${isBad ? '#ef4444' : '#0ea5e9'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {illustration ? (
          <div style={{ width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
            {illustration}
          </div>
        ) : img ? (
          <div style={{ width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={img} alt={empresa} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        ) : null}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
             <BookOpen size={20} color={isBad ? '#ef4444' : '#0ea5e9'} />
             <span style={{ fontWeight: '900', color: isBad ? '#b91c1c' : '#0369a1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
               CASO REAL: {empresa}
             </span>
          </div>
          <h5 style={{ margin: '0 0 10px 0', fontSize: '1.15rem', color: '#1e293b' }}>{titulo}</h5>
          <p style={{ margin: 0, fontSize: '1rem', color: '#475569', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: contenido }}></p>
        </div>
      </div>
    );
  }

  // Widget Interactivo: Mapeo del Cliente (Módulo 2)
  const ProfileMapperWidget = () => {
    const [view, setView] = React.useState('dolores');

    return (
      <div className="interactive-card" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', borderBottom: '2px solid #f1f5f9' }}>
          <button 
            onClick={() => setView('dolores')}
            style={{ flex: 1, padding: '20px', background: view === 'dolores' ? '#fef2f2' : 'white', border: 'none', borderBottom: view === 'dolores' ? '4px solid #ef4444' : '4px solid transparent', color: view === 'dolores' ? '#b91c1c' : '#64748b', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          >
            <AlertTriangle size={24} className={view === 'dolores' ? 'pulse-icon' : ''} /> Puntos de Dolor
          </button>
          <button 
            onClick={() => setView('deleites')}
            style={{ flex: 1, padding: '20px', background: view === 'deleites' ? '#f0fdf4' : 'white', border: 'none', borderBottom: view === 'deleites' ? '4px solid #22c55e' : '4px solid transparent', color: view === 'deleites' ? '#15803d' : '#64748b', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
          >
            <Heart size={24} className={view === 'deleites' ? 'pulse-icon' : ''} /> Puntos de Deleite
          </button>
        </div>

        <div style={{ padding: '3rem', position: 'relative', minHeight: '350px', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: view === 'dolores' ? 'radial-gradient(circle at top right, #fee2e2, transparent)' : 'radial-gradient(circle at top right, #dcfce7, transparent)', transition: 'all 0.5s ease', opacity: 0.5 }}></div>
          
          <div style={{ width: '100%', position: 'relative', zIndex: 1, display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: view === 'dolores' ? '#991b1b' : '#14532d', transition: 'color 0.3s' }}>
                {view === 'dolores' ? 'Obstáculos y Frustraciones' : 'Superando Expectativas'}
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '20px', lineHeight: 1.6 }}>
                {view === 'dolores' 
                  ? 'Lo que le molesta y frustra al cliente al intentar cumplir su tarea. Son riesgos latentes que destruyen la experiencia.' 
                  : 'Lo que le hace feliz y supera rotundamente sus expectativas básicas de compra. Generan lealtad absoluta.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {(view === 'dolores' ? [
                  { icon: <AlertTriangle size={20}/>, text: 'Ruido extremo en la noche.' },
                  { icon: <AlertTriangle size={20}/>, text: 'Sensación de inseguridad o estafas.' },
                  { icon: <AlertTriangle size={20}/>, text: 'Hacer filas largas y tediosas.' }
                ] : [
                  { icon: <Heart size={20}/>, text: 'Un trato hiper-personalizado por su nombre.' },
                  { icon: <Heart size={20}/>, text: 'Exclusividad o acceso prioritario.' },
                  { icon: <Heart size={20}/>, text: 'Sorpresas gratis inesperadas en su habitación.' }
                ]).map((item, i) => (
                  <div key={`${view}-${i}`} className="fade-in" style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '15px 20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderLeft: `4px solid ${view === 'dolores' ? '#ef4444' : '#22c55e'}`, animationDelay: `${i * 0.1}s` }}>
                    <div style={{ color: view === 'dolores' ? '#ef4444' : '#22c55e' }}>{item.icon}</div>
                    <span style={{ fontWeight: 'bold', color: '#334155' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ width: '200px', height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: view === 'dolores' ? '#fecaca' : '#bbf7d0', borderRadius: '50%', transition: 'all 0.5s ease', boxShadow: view === 'dolores' ? '0 10px 30px rgba(239,68,68,0.3)' : '0 10px 30px rgba(34,197,94,0.3)', overflow: 'hidden' }}>
              <img src={view === 'dolores' ? avatarDolor : avatarDeleite} alt="Avatar" style={{ height: '90%', transition: 'all 0.3s', transform: view === 'dolores' ? 'scale(1)' : 'scale(1.1)' }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Widget Interactivo: Producto vs Experiencia
  const ProductVsExperienceWidget = () => {
    const [view, setView] = React.useState('funcional');

    return (
      <div className="interactive-card" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', padding: '10px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', width: '100%', background: '#e2e8f0', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: view === 'funcional' ? '0%' : '50%', width: '50%', height: '100%', background: view === 'funcional' ? '#64748b' : '#8b5cf6', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', borderRadius: '15px' }} />
            <button onClick={() => setView('funcional')} style={{ flex: 1, padding: '15px', border: 'none', background: 'transparent', color: view === 'funcional' ? 'white' : '#64748b', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', zIndex: 1, transition: 'color 0.3s' }}>
              Nivel 1: Producto Funcional (Low-Cost)
            </button>
            <button onClick={() => setView('experiencia')} style={{ flex: 1, padding: '15px', border: 'none', background: 'transparent', color: view === 'experiencia' ? 'white' : '#64748b', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', zIndex: 1, transition: 'color 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Zap size={20} className={view === 'experiencia' ? 'pulse-icon' : ''} /> Nivel 2: Diseño de Experiencia (Disney)
            </button>
          </div>
        </div>

        <div style={{ padding: '3rem', position: 'relative', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h4 style={{ fontSize: '1.8rem', color: view === 'funcional' ? '#334155' : '#6d28d9', marginBottom: '15px', transition: 'color 0.3s' }}>
                {view === 'funcional' ? 'El enfoque transaccional' : 'El diseño operativo de la magia'}
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                {view === 'funcional' 
                  ? 'Te llevan del punto A al punto B. Satisface el Job básico de "transporte barato". No hay amplificadores de deleite. Es más, se añaden fricciones intencionalmente (asientos incómodos, cobros extra) para abaratar costos.'
                  : 'Disney no vende juegos, vende "Magia". Para lograrlo, manipularon la percepción del cliente inyectando dos tipos de antídotos a su producto base:'}
              </p>
              
              {view === 'funcional' ? (
                <div className="fade-in" style={{ background: '#f1f5f9', padding: '20px', borderRadius: '15px', borderLeft: `4px solid #94a3b8` }}>
                  <h5 style={{ margin: '0 0 10px 0', color: '#475569', fontSize: '1.1rem' }}>Resultados del enfoque funcional:</h5>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#64748b', lineHeight: 1.6 }}>
                    <li>Cero personalización. Es un servicio estandarizado.</li>
                    <li>La competencia es 100% basada en el precio.</li>
                    <li>El cliente tolera la fricción porque asume que es el "costo" del ahorro.</li>
                  </ul>
                </div>
              ) : (
                <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ background: '#eff6ff', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #3b82f6', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={24} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#1e40af', display: 'block', marginBottom: '5px' }}>1. Minimizadores de Dolor (Píldoras)</strong>
                      <span style={{ color: '#3b82f6', fontSize: '0.95rem', lineHeight: 1.5, display: 'block' }}>Eliminan la fricción de raíz. <em>Ej: La MagicBand integró llaves y dinero, matando el dolor de las filas y los bolsos.</em></span>
                    </div>
                  </div>
                  <div style={{ background: '#fefce8', padding: '15px', borderRadius: '15px', borderLeft: '4px solid #eab308', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <Lightbulb size={24} color="#ca8a04" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#854d0e', display: 'block', marginBottom: '5px' }}>2. Amplificadores de Deleite (Detonantes)</strong>
                      <span style={{ color: '#a16207', fontSize: '0.95rem', lineHeight: 1.5, display: 'block' }}>Diseñan la arquitectura sensorial. <em>Ej: Dar autoridad a empleados para regalar helados y cambiar lágrimas por sonrisas al instante.</em></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div style={{ width: '300px', height: '300px', borderRadius: '20px', overflow: 'hidden', boxShadow: view === 'funcional' ? '0 20px 40px rgba(0,0,0,0.1)' : '0 20px 40px rgba(139, 92, 246, 0.3)', position: 'relative', flexShrink: 0 }}>
               <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: view === 'funcional' ? '#f1f5f9' : '#f5f3ff', transition: 'background 0.5s' }}>
                 <img src={view === 'funcional' ? 'https://illustrations.popsy.co/amber/surreal-hourglass.svg' : 'https://illustrations.popsy.co/amber/creative-work.svg'} alt="Caso" style={{ width: '80%', height: '80%', objectFit: 'contain', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transform: view === 'experiencia' ? 'scale(1.1)' : 'scale(1)' }} />
               </div>
               <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px 20px 20px 20px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                 {view === 'funcional' ? 'Aerolíneas Low-Cost' : 'Disney Parks'}
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Widget Interactivo: Caso Virgin Atlantic
  const VirginAtlanticCaseWidget = () => {
    const [revealed, setRevealed] = React.useState(false);
    return (
      <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem', position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%', minWidth: '300px' }}>
             <img src={imgVirgin} alt="Virgin Atlantic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: '1 1 60%', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <div style={{ background: '#fef2f2', color: '#dc2626', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '15px' }}>CASO DE ESTUDIO REAL</div>
             <h4 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '15px', lineHeight: 1.2 }}>El Riesgo de $100 Millones de Virgin Atlantic</h4>
             <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
               Virgin quería rediseñar su exclusiva clase ejecutiva. Tenían <strong>$100 millones de dólares</strong> en juego. ¿El problema? Si fabricaban los nuevos asientos en titanio puro y a los pasajeros no les gustaba la nueva disposición... estarían arruinados financieramente.
             </p>
             
             {!revealed ? (
               <button 
                 onClick={() => setRevealed(true)}
                 className="hover-scale"
                 style={{ background: '#dc2626', color: 'white', border: 'none', padding: '15px 25px', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}
               >
                 <Settings size={20} /> ¿Cómo lo resolvieron sin gastar millones?
               </button>
             ) : (
               <div className="fade-in" style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', borderLeft: '4px solid #dc2626' }}>
                 <strong style={{ color: '#dc2626', display: 'block', marginBottom: '10px', fontSize: '1.1rem' }}>💡 El Prototipo de $10 dólares:</strong>
                 <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>
                   En lugar de costosos renders 3D o intervenir un avión real, construyeron una maqueta a escala 1:1 en un hangar usando <strong>sillas de jardín, cartón y madera barata</strong>. Contrataron actores para simular un "vuelo" de 8 horas. Descubrieron fallas operativas críticas (los asistentes chocaban en los pasillos al servir) y corrigieron el diseño antes de fabricar las piezas finales de titanio. ¡Fallaron barato!
                 </p>
               </div>
             )}
          </div>
        </div>
      </div>
    );
  };

  // Widget Interactivo: Checklist del Piloto
  const PilotoChecklistWidget = () => {
    const [checks, setChecks] = React.useState([false, false, false]);
    const allChecked = checks.every(Boolean);

    const toggleCheck = (idx) => {
      const newChecks = [...checks];
      newChecks[idx] = !newChecks[idx];
      setChecks(newChecks);
    };

    return (
      <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '2px dashed #ea580c', marginTop: '3rem', boxShadow: '0 10px 25px rgba(234,88,12,0.05)' }}>
        <h4 style={{ color: '#ea580c', fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Activity size={28} /> Planifica tu Primer Piloto
        </h4>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Marca las casillas conforme vayas cumpliendo los requisitos para probar tu experiencia:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            "Invitar a 3 conocidos que encajen EXACTO en el 'Buyer Persona' (Prohibido invitar a mamá o amigos complacientes).",
            "Ofrecerles la experiencia totalmente gratis a cambio de criticar absolutamente cada detalle.",
            "Durante la prueba: Observar sus caras y reacciones físicas, no solo escuchar lo que dicen por cortesía."
          ].map((text, idx) => (
            <div key={idx} onClick={() => toggleCheck(idx)} className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px', background: checks[idx] ? '#f0fdf4' : '#f8fafc', borderRadius: '15px', cursor: 'pointer', transition: '0.3s', border: checks[idx] ? '2px solid #22c55e' : '2px solid #e2e8f0' }}>
              <div style={{ color: checks[idx] ? '#22c55e' : '#cbd5e1', transition: 'color 0.3s' }}>
                <CheckCircle2 size={28} />
              </div>
              <span style={{ fontSize: '1.1rem', color: checks[idx] ? '#15803d' : '#334155', textDecoration: checks[idx] ? 'line-through' : 'none', transition: 'color 0.3s' }}>{text}</span>
            </div>
          ))}
        </div>
        {allChecked && (
          <div className="fade-in" style={{ marginTop: '20px', padding: '20px', background: '#ecfdf5', color: '#059669', borderRadius: '15px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.15rem', border: '1px solid #a7f3d0' }}>
            ¡Excelente! Estás listo/a para salir, fallar barato, recolectar datos reales y afinar la experiencia al máximo.
          </div>
        )}
      </div>
    );
  };

  // Widget Interactivo: Auditoría de Eslabones Débiles (Quiz con cascaritas)
  const EslabonDebilQuizWidget = () => {
    const [selected, setSelected] = React.useState(null);

    const opciones = [
      { id: 1, text: "La falta de una segunda piscina climatizada en la propiedad.", correct: false, feedback: "¡Cascarita! Eso es infraestructura adicional. Tu experiencia principal no se derrumba por no tener dos piscinas." },
      { id: 2, text: "El servicio de transporte tercerizado desde el aeropuerto.", correct: true, feedback: "¡Exacto! Este es tu aliado crítico. Si el conductor tercerizado llega tarde o el auto huele mal, la percepción de 'Lujo' de tu cliente se destruye por completo ANTES de que siquiera pisen tu hotel." },
      { id: 3, text: "No tener un menú vegano de 5 tiempos.", correct: false, feedback: "¡Cascarita! Aunque es importante para un nicho, es un aspecto aislado. No tenerlo no destruye el 100% de la propuesta de valor de la mayoría de los clientes." }
    ];

    return (
      <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '2px dashed #166534', marginTop: '3rem', boxShadow: '0 10px 25px rgba(22,101,52,0.05)' }}>
        <h4 style={{ color: '#166534', fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Target size={28} /> Desafío Práctico: Encuentra el Eslabón Débil
        </h4>
        
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '15px', marginBottom: '25px', borderLeft: '4px solid #3b82f6' }}>
          <p style={{ margin: 0, color: '#334155', fontSize: '1.1rem', lineHeight: 1.6 }}>
            <strong>Escenario:</strong> Tienes un hotel boutique en la selva hiper-exclusivo ($800/noche). Tienes chef privado, sábanas de seda y masajes. Todo tu staff interno está entrenado perfectamente. Sin embargo, hay un riesgo mortal oculto. <strong>¿Cuál es el verdadero eslabón débil de esta operación?</strong>
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {opciones.map((opc) => {
             const isSelected = selected === opc.id;
             let bgColor = '#ffffff';
             let borderColor = '#e2e8f0';
             let icon = <CheckCircle2 color="#cbd5e1" />;

             if (isSelected) {
               if (opc.correct) {
                 bgColor = '#dcfce7'; borderColor = '#22c55e'; icon = <CheckCircle2 color="#16a34a" size={24} />;
               } else {
                 bgColor = '#fee2e2'; borderColor = '#ef4444'; icon = <AlertTriangle color="#dc2626" size={24} />;
               }
             }

             return (
               <div key={opc.id} onClick={() => setSelected(opc.id)} className="hover-scale" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', background: bgColor, border: `2px solid ${borderColor}`, padding: '15px 20px', borderRadius: '15px', transition: 'all 0.3s' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   {icon}
                   <span style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: isSelected ? 'bold' : 'normal' }}>{opc.text}</span>
                 </div>
                 {isSelected && (
                   <div className="fade-in" style={{ marginTop: '15px', paddingTop: '15px', borderTop: `1px solid ${borderColor}`, color: opc.correct ? '#166534' : '#991b1b', fontSize: '1.05rem', lineHeight: 1.5 }}>
                     {opc.feedback}
                   </div>
                 )}
               </div>
             );
          })}
        </div>
      </div>
    );
  };

  // Widget Interactivo: Caso de Estudio Awasi
  const AwasiCaseWidget = () => {
    const [revealed, setRevealed] = React.useState(false);

    return (
      <div style={{ background: 'white', borderRadius: '25px', padding: '2.5rem', marginBottom: '3rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '15px' }}><Zap color="#10b981" size={28}/></div>
          <h4 style={{ color: '#064e3b', fontSize: '1.5rem', margin: 0 }}>Caso de Estudio Real: Awasi Patagonia</h4>
        </div>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 300px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', height: '250px' }}>
             <img src={imgAwasi} alt="Hotel Awasi" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
             <h5 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '15px' }}>El Reto del MVP en el Mundo Físico</h5>
             <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>
               Vender habitaciones premium a $1,500 USD la noche normalmente requiere construir un mega-resort con grandes piscinas, un lobby de mármol, y esperar años de construcción civil. Awasi prometía la máxima exclusividad, pero <strong>no tenían el tiempo ni el capital</strong> para construir un resort gigante antes de lanzar.
             </p>

             {!revealed ? (
               <button 
                  onClick={() => setRevealed(true)}
                  className="hover-scale"
                  style={{ background: '#10b981', color: 'white', border: 'none', padding: '15px 25px', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 5px 15px rgba(16,185,129,0.3)' }}
               >
                 <Eye size={22} /> ¿Cómo vendieron exclusividad Premium el Día 1?
               </button>
             ) : (
               <div className="fade-in" style={{ background: '#f0fdf4', borderLeft: '4px solid #10b981', padding: '20px', borderRadius: '0 15px 15px 0' }}>
                 <h5 style={{ color: '#064e3b', marginBottom: '10px', fontSize: '1.1rem' }}>La Solución: El MVP basado en Personal</h5>
                 <p style={{ color: '#166534', fontSize: '1rem', lineHeight: 1.5, margin: 0 }}>
                   En lugar de invertir en ladrillos, invirtieron en talento operativo. Construyeron apenas 14 villas pequeñas y discretas, pero le asignaron a cada cliente <strong>un guía experto biólogo y un Jeep 4x4 exclusivo</strong> durante toda la estancia.<br/><br/>
                   Su Producto Mínimo Viable (MVP) cumplió su Propuesta de Valor ("Exclusividad absoluta 1 a 1"). Validaron que los "Early Adopters" pagaban la tarifa completa felizmente por la inmersión salvaje, perdonando que el hotel fuera pequeño. ¡Fallaron barato y escalaron la infraestructura solo cuando fueron rentables!
                 </p>
               </div>
             )}
          </div>
        </div>
      </div>
    );
  };

  // Widget Interactivo: Poda tu MVP
  const MvpPruningWidget = () => {
    const [items, setItems] = React.useState([
      { id: 1, text: "Aplicación móvil nativa del hotel (iOS/Android) con mapa del recinto.", essential: false, pruned: false },
      { id: 2, text: "Un guía local apasionado y experto que lidera la expedición.", essential: true, pruned: false },
      { id: 3, text: "Lobby de recepción gigante de 3 pisos con cascada interior decorativa.", essential: false, pruned: false },
      { id: 4, text: "Sábanas limpias y colchón de alta calidad para descansar tras la aventura.", essential: true, pruned: false },
      { id: 5, text: "Menú digital interactivo en tablets iPad para pedir en el restaurante.", essential: false, pruned: false },
    ]);

    const handlePrune = (id) => {
      setItems(items.map(item => item.id === id ? { ...item, pruned: true } : item));
    };

    const isFinished = items.every(item => item.essential ? !item.pruned : item.pruned);
    const lostCore = items.some(item => item.essential && item.pruned);

    return (
      <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '2px dashed #3b82f6', marginTop: '3rem', boxShadow: '0 10px 25px rgba(59,130,246,0.05)' }}>
        <h4 style={{ color: '#1d4ed8', fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Scissors size={28} /> Desafío: Poda tu Proyecto (Hazlo Mínimo)
        </h4>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Mira la siguiente lista de "Grandes Ideas" que tuviste para tu nuevo hotel de turismo de aventura. Tu presupuesto es crítico. <strong>Toma las tijeras y elimina (poda) el 60% de las cosas</strong> que son "bonitas pero NO esenciales". Quédate SOLO con el motor mínimo que resuelve el dolor real de tus clientes.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', background: item.pruned ? '#f1f5f9' : '#ffffff', border: item.pruned ? '1px dashed #cbd5e1' : '1px solid #93c5fd', borderRadius: '15px', opacity: item.pruned ? 0.6 : 1, transition: 'all 0.3s' }}>
              <span style={{ fontSize: '1.1rem', color: item.pruned ? '#94a3b8' : '#1e293b', textDecoration: item.pruned ? 'line-through' : 'none', flexGrow: 1, paddingRight: '20px' }}>
                {item.text}
              </span>
              {!item.pruned && (
                <button 
                  onClick={() => handlePrune(item.id)}
                  className="hover-scale"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  <Scissors size={18} /> Podar
                </button>
              )}
            </div>
          ))}
        </div>

        {lostCore && (
          <div className="fade-in" style={{ marginTop: '20px', padding: '15px', background: '#fee2e2', color: '#b91c1c', borderRadius: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle size={24} /> ¡Peligro! Cortaste un elemento ESENCIAL para la promesa de la experiencia. Si quitas lo esencial, el MVP se vuelve mediocre. ¡Recarga la página e intenta de nuevo!
          </div>
        )}

        {isFinished && !lostCore && (
          <div className="fade-in" style={{ marginTop: '20px', padding: '20px', background: '#eff6ff', color: '#1d4ed8', borderRadius: '15px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.15rem', border: '1px solid #bfdbfe', boxShadow: '0 5px 15px rgba(59,130,246,0.1)' }}>
            ¡Victoria Comercial! ✂️ Cortaste el despilfarro y te quedaste solo con el valor puro para el Early Adopter. ¡Con este MVP ligero y barato puedes salir a vender mañana mismo!
          </div>
        )}
      </div>
    );
  };

  // Widget Interactivo: Value Proposition Builder
  const ValuePropositionBuilderWidget = () => {
    const [formData, setFormData] = React.useState({
      producto: '',
      persona: '',
      dolor: '',
      deleites: '',
      diferenciador: ''
    });

    const isComplete = Object.values(formData).every(val => val.trim() !== '');

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
      <div className="interactive-card" style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 50%', padding: '3rem', borderRight: '1px solid #e2e8f0', background: '#f8fafc', minWidth: '350px' }}>
          <h4 style={{ color: '#334155', marginBottom: '2rem', fontSize: '1.4rem' }}>Llena tu Plantilla de Venta</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#475569', fontSize: '0.95rem' }}>"Nuestro/a... (Tu Producto)</span>
              <input 
                type="text" name="producto" placeholder="Ej: Tour Gastronómico Nocturno" value={formData.producto} onChange={handleChange}
                style={{ width: '100%', padding: '12px 15px', border: '2px solid #bbf7d0', color: '#15803d', background: '#f0fdf4', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} 
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#475569', fontSize: '0.95rem' }}>...le permite a... (Tu Buyer Persona)</span>
              <input 
                type="text" name="persona" placeholder="Ej: turistas corporativos" value={formData.persona} onChange={handleChange}
                style={{ width: '100%', padding: '12px 15px', border: '2px solid #bfdbfe', color: '#1d4ed8', background: '#eff6ff', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#475569', fontSize: '0.95rem' }}>...lograr... (Resolver su Dolor)</span>
              <input 
                type="text" name="dolor" placeholder="Ej: conocer la ciudad rápido sin riesgos" value={formData.dolor} onChange={handleChange}
                style={{ width: '100%', padding: '12px 15px', border: '2px solid #fef08a', color: '#a16207', background: '#fefce8', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#475569', fontSize: '0.95rem' }}>...por medio de... (Tus Amplificadores)</span>
              <input 
                type="text" name="deleites" placeholder="Ej: catas privadas de café" value={formData.deleites} onChange={handleChange}
                style={{ width: '100%', padding: '12px 15px', border: '2px solid #e9d5ff', color: '#7e22ce', background: '#faf5ff', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#475569', fontSize: '0.95rem' }}>...y nuestro diferencial es... (Ventaja Injusta)"</span>
              <input 
                type="text" name="diferenciador" placeholder="Ej: acceso a cocinas secretas" value={formData.diferenciador} onChange={handleChange}
                style={{ width: '100%', padding: '12px 15px', border: '2px solid #fecaca', color: '#b91c1c', background: '#fef2f2', borderRadius: '10px', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

          </div>
        </div>
        
        <div style={{ flex: '1 1 50%', padding: '3rem', background: isComplete ? 'linear-gradient(135deg, #055C38, #166534)' : '#e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', transition: 'background 0.5s', textAlign: 'center', minWidth: '350px' }}>
          <h4 style={{ fontSize: '1.2rem', opacity: isComplete ? 0.9 : 0.5, marginBottom: '30px', color: isComplete ? 'white' : '#64748b' }}>Tu Elevator Pitch Generado:</h4>
          
          {isComplete ? (
            <div className="fade-in" style={{ fontSize: '1.4rem', lineHeight: 1.6, fontWeight: '400', background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
              "Nuestro/a <span style={{ color: '#a7f3d0', fontWeight: '800' }}>{formData.producto}</span> le permite a <span style={{ color: '#bfdbfe', fontWeight: '800' }}>{formData.persona}</span> lograr <span style={{ color: '#fef08a', fontWeight: '800' }}>{formData.dolor}</span> por medio de <span style={{ color: '#e9d5ff', fontWeight: '800' }}>{formData.deleites}</span> y nuestro diferencial es <span style={{ color: '#fecaca', fontWeight: '800' }}>{formData.diferenciador}</span>."
            </div>
          ) : (
             <div style={{ fontSize: '1.2rem', color: '#94a3b8', fontStyle: 'italic', maxWidth: '300px' }}>
               Rellena todos los campos de la izquierda para generar automáticamente tu propuesta de valor de ventas.
             </div>
          )}

          {isComplete && (
            <button 
              onClick={() => alert('¡Pitch copiado al portapapeles! Ahora úsalo en tus redes sociales.')}
              className="hover-scale"
              style={{ marginTop: '30px', background: 'white', color: '#055C38', border: 'none', padding: '12px 25px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <Copy size={20} /> Copiar mi Pitch
            </button>
          )}
        </div>
      </div>
    );
  };

  // Tarjeta Giratoria de Dimensiones (Flip Card)
  const FlipDimensionCard = ({ imageSrc, title, subtitle, content, color, bg, borderTop }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return (
      <div 
        className="interactive-card"
        style={{ perspective: '1000px', cursor: 'pointer', height: '100%', minHeight: '320px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          style={{ 
            position: 'relative', width: '100%', height: '100%', 
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
          }}
        >
          {/* Frente */}
          <div 
            style={{ 
              position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
              background: 'white', padding: '2rem', borderRadius: '20px', borderTop: borderTop, 
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', 
              alignItems: 'center', justifyContent: 'center', textAlign: 'center'
            }}
          >
            <div className="hover-scale" style={{ background: bg, width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '20px', overflow: 'hidden' }}>
              <img src={imageSrc} alt={title} style={{ height: '90%' }} />
            </div>
            <h4 style={{ color: color, fontSize: '1.5rem', fontWeight: '900', margin: 0 }}>{title}</h4>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '10px', background: '#f1f5f9', padding: '4px 12px', borderRadius: '20px' }}>Clic para revelar</p>
          </div>

          {/* Dorso */}
          <div 
            style={{ 
              position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
              background: 'white', padding: '2rem', borderRadius: '20px', borderTop: borderTop, 
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)', transform: 'rotateY(180deg)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}
          >
            <p style={{ margin: '0 0 10px 0', fontWeight: '900', color: color, fontSize: '1.4rem' }}>{title}</p>
            <p style={{ fontSize: '1rem', color: color, fontStyle: 'italic', marginBottom: '15px', fontWeight: 'bold' }}>"{subtitle}"</p>
            <span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>{content}</span>
          </div>
        </div>
      </div>
    );
  };

  // Widget Interactivo: Detective de TripAdvisor
  const TripAdvisorAuditWidget = () => {
    const [selected, setSelected] = React.useState(null);

    const reviews = [
      { id: 'A', rating: 2, text: "El hotel es bellísimo, pero llovió los 3 días de mi viaje y no pudimos ir a la playa.", author: "Familia Gómez", correct: false, feedback: "¡Cuidado! No puedes controlar el clima. No gastes energía tratando de resolver quejas de fuerza mayor." },
      { id: 'B', rating: 3, text: "Todo excelente, pero a las 3:00 PM cuando fuimos a la piscina, ya no quedaban toallas limpias y tuvimos que esperar 40 minutos tiritando.", author: "Laura M.", correct: true, feedback: "¡Exacto! (Sense). Esto es un patrón operativo y un cuello de botella logístico. Tu iteración (Respond) debe ser modificar los horarios de lavandería para que a las 2:30 PM llegue un lote fresco de toallas." },
      { id: 'C', rating: 3, text: "Me pareció muy caro para lo que es. En otro país pagué menos por algo similar.", author: "David Viajero", correct: false, feedback: "La percepción de precio es subjetiva y estructural. No es un 'quick-win' operativo que puedas solucionar mañana en la mañana." }
    ];

    return (
      <div style={{ background: '#f8fafc', borderRadius: '20px', padding: '2.5rem', border: '1px solid #cbd5e1', marginTop: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: '#dbeafe', padding: '12px', borderRadius: '15px' }}><Search color="#2563eb" size={28}/></div>
          <h4 style={{ color: '#1e3a8a', fontSize: '1.5rem', margin: 0 }}>El Detective de TripAdvisor</h4>
        </div>
        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px' }}>
          Lee las siguientes 3 reseñas recientes de tu hotel. <strong>¿Cuál de estas quejas es un patrón de fricción operativa real que puedes solucionar MAÑANA (Sense)?</strong> Haz clic en la reseña correcta.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {reviews.map(rev => (
            <div 
              key={rev.id} 
              onClick={() => setSelected(rev.id)}
              className="hover-scale"
              style={{ 
                background: selected === rev.id ? (rev.correct ? '#dcfce7' : '#fee2e2') : 'white', 
                border: selected === rev.id ? (rev.correct ? '2px solid #22c55e' : '2px solid #ef4444') : '1px solid #e2e8f0', 
                padding: '20px', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.3s' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16}/> {rev.author}</span>
                <span style={{ color: '#eab308', display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < rev.rating ? "#eab308" : "none"} color="#eab308" />)}
                </span>
              </div>
              <p style={{ color: '#475569', margin: 0, fontStyle: 'italic' }}>"{rev.text}"</p>
              
              {selected === rev.id && (
                <div className="fade-in" style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px dashed #cbd5e1', color: rev.correct ? '#166534' : '#991b1b', fontWeight: 'bold' }}>
                   {rev.correct ? <CheckCircle2 size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }}/> : <AlertTriangle size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }}/>}
                   {rev.feedback}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Widget Interactivo: Matriz de Impacto vs Esfuerzo
  const ImpactEffortMatrixWidget = () => {
    const [selected, setSelected] = React.useState(null);
    const [showFeedback, setShowFeedback] = React.useState(false);

    const quadrants = [
      { id: 'q1', name: 'Quick Wins (AHORA)', impact: 'Alto Impacto', effort: 'Bajo Esfuerzo', bg: '#dcfce7', borderColor: '#22c55e', correct: true, feedback: '¡Exacto! El techo de sombra es barato, rápido de instalar y elimina la fricción operativa más dolorosa. ¡Va de primero en tu Roadmap!' },
      { id: 'q2', name: 'Proyectos Mayores (LUEGO)', impact: 'Alto Impacto', effort: 'Alto Esfuerzo', bg: '#e0f2fe', borderColor: '#0ea5e9', correct: false, feedback: 'Un techo de lona o sombrillas no requiere alto esfuerzo. No lo aplaces como si fuera una obra de ingeniería mayor.' },
      { id: 'q3', name: 'Rellenos (TAL VEZ)', impact: 'Bajo Impacto', effort: 'Bajo Esfuerzo', bg: '#fef3c7', borderColor: '#f59e0b', correct: false, feedback: 'Proteger a tus clientes del sol abrasador a las 3PM no es de "bajo impacto". ¡Es crítico para su satisfacción!' },
      { id: 'q4', name: 'Pozo de Dinero (NUNCA)', impact: 'Bajo Impacto', effort: 'Alto Esfuerzo', bg: '#fee2e2', borderColor: '#ef4444', correct: false, feedback: 'Te fuiste al extremo equivocado. Esto no es costoso, ni inútil. Intenta de nuevo.' }
    ];

    const handleClick = (q) => {
      setSelected(q.id);
      setShowFeedback(true);
    };

    const selectedQuadrant = quadrants.find(q => q.id === selected);

    return (
      <div style={{ background: 'white', borderRadius: '25px', padding: '3rem', border: '1px solid #e2e8f0', marginTop: '3rem', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}>
        <h4 style={{ color: '#4c1d95', fontSize: '1.6rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Target size={32} /> Ejercicio: El Radar de Prioridades
        </h4>
        <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Tu equipo operativo descubrió que los clientes se estresan por el sol de las 3:00 PM. Tu iniciativa propuesta es: <strong>"Instalar un techo de lona y regalar agua fría"</strong>. <br/>Haz clic en el cuadrante de la Matriz donde ubicarías esta iniciativa para tu Roadmap.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', position: 'relative', marginBottom: '2rem' }}>
          {/* Ejes visuales */}
          <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', color: '#64748b' }}>Alto Impacto ⬆️</div>
          <div style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', color: '#64748b' }}>⬇️ Bajo Impacto</div>
          <div style={{ position: 'absolute', left: '-30px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontWeight: 'bold', color: '#64748b' }}>Bajo Esfuerzo ⬅️</div>
          <div style={{ position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%) rotate(90deg)', fontWeight: 'bold', color: '#64748b' }}>➡️ Alto Esfuerzo</div>

          {quadrants.map((q) => (
            <div 
              key={q.id}
              onClick={() => handleClick(q)}
              className="hover-scale"
              style={{ 
                background: selected === q.id ? q.bg : '#f8fafc', 
                border: `2px solid ${selected === q.id ? q.borderColor : '#cbd5e1'}`, 
                padding: '30px 20px', 
                borderRadius: '15px', 
                cursor: 'pointer', 
                textAlign: 'center',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
            >
              <h5 style={{ margin: 0, fontSize: '1.2rem', color: '#334155', fontWeight: '900' }}>{q.name}</h5>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#64748b' }}>{q.impact} / {q.effort}</p>
            </div>
          ))}
        </div>

        {showFeedback && selectedQuadrant && (
          <div className="fade-in" style={{ padding: '20px', background: selectedQuadrant.bg, borderLeft: `5px solid ${selectedQuadrant.borderColor}`, borderRadius: '10px', marginTop: '30px' }}>
            <h5 style={{ color: selectedQuadrant.borderColor, marginBottom: '10px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {selectedQuadrant.correct ? <CheckCircle2 size={24}/> : <AlertTriangle size={24}/>} 
              {selectedQuadrant.correct ? "¡Visión Perfecta!" : "Piénsalo bien..."}
            </h5>
            <p style={{ color: '#334155', margin: 0, fontSize: '1.1rem', lineHeight: 1.5 }}>
              {selectedQuadrant.feedback}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Widget Interactivo: Certificación de Módulos
  const ResumenMetodologiaWidget = () => {
    const [fases, setFases] = React.useState([
      { id: 1, title: "Módulo 1: Buyer Persona & Jobs-to-be-Done", revealed: false, color: "#1e40af" },
      { id: 2, title: "Módulo 2: Tablero de Valor y Deleites", revealed: false, color: "#15803d" },
      { id: 3, title: "Módulo 3: Prototipado Barato", revealed: false, color: "#ea580c" },
      { id: 4, title: "Módulo 4: El MVP y Aliados Clave", revealed: false, color: "#16a34a" },
      { id: 5, title: "Módulo 5: Sense, Respond & Iterar", revealed: false, color: "#6d28d9" }
    ]);

    const revealAll = () => setFases(fases.map(f => ({ ...f, revealed: true })));
    const isAllRevealed = fases.every(f => f.revealed);

    return (
      <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '3rem', maxWidth: '900px', margin: '0 auto 3rem auto', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
        <h4 style={{ color: '#334155', marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>Tu Arsenal Estratégico</h4>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '30px' }}>Activa todos los módulos para confirmar tu aprendizaje:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
          {fases.map(f => (
            <div key={f.id} onClick={() => setFases(fases.map(fx => fx.id === f.id ? { ...fx, revealed: true } : fx))} className="hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: f.revealed ? 'white' : '#e2e8f0', borderRadius: '10px', cursor: 'pointer', border: `1px solid ${f.revealed ? f.color : '#cbd5e1'}`, transition: 'all 0.3s' }}>
              <CheckCircle2 color={f.revealed ? f.color : '#94a3b8'} size={24} />
              <span style={{ fontSize: '1.1rem', color: f.revealed ? '#1e293b' : '#64748b', fontWeight: f.revealed ? 'bold' : 'normal' }}>{f.title}</span>
            </div>
          ))}
        </div>
        {!isAllRevealed && (
          <div style={{ textAlign: 'center' }}>
            <button onClick={revealAll} style={{ background: 'transparent', border: '1px dashed #94a3b8', color: '#64748b', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>Activar Todas</button>
          </div>
        )}
      </div>
    );
  };

  // Widget Interactivo: Compromiso Final y Celebración
  const CompromisoFinalWidget = () => {
    const [compromiso, setCompromiso] = React.useState('');
    const [firmado, setFirmado] = React.useState(false);
    const navigate = useNavigate();

    return (
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', borderRadius: '30px', padding: '4rem 3rem', margin: '4rem auto', maxWidth: '800px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
        
        {!firmado ? (
          <div className="fade-in">
            <div style={{ background: 'rgba(56, 189, 248, 0.1)', display: 'inline-block', padding: '15px', borderRadius: '50%', marginBottom: '20px' }}>
               <Target size={48} color="#38bdf8" />
            </div>
            <h4 style={{ fontSize: '2.2rem', marginBottom: '15px', color: '#f8fafc', fontWeight: '900' }}>El Compromiso Final</h4>
            <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              La innovación no es tecnología, es ejecución. Escribe la <strong>ÚNICA mejora rápida y de bajo costo</strong> que vas a implementar esta semana.
            </p>
            <textarea 
               value={compromiso}
               onChange={(e) => setCompromiso(e.target.value)}
               placeholder="Ej: Mañana compraré 5 botellas de agua fría para recibirlos..."
               style={{ width: '100%', height: '120px', padding: '20px', borderRadius: '15px', border: '2px solid rgba(56,189,248,0.3)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1.2rem', marginBottom: '30px', resize: 'none', outline: 'none', transition: 'border 0.3s' }}
               onFocus={(e) => e.target.style.border = '2px solid #38bdf8'}
               onBlur={(e) => e.target.style.border = '2px solid rgba(56,189,248,0.3)'}
            />
            <button 
              onClick={() => { if(compromiso.trim().length > 5) setFirmado(true); }}
              disabled={compromiso.trim().length < 5}
              className={compromiso.trim().length >= 5 ? "hover-scale pulse-icon" : ""}
              style={{ background: 'linear-gradient(to right, #38bdf8, #0ea5e9)', color: '#0f172a', border: 'none', padding: '18px 40px', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '30px', cursor: compromiso.trim().length < 5 ? 'not-allowed' : 'pointer', opacity: compromiso.trim().length < 5 ? 0.5 : 1, transition: 'all 0.3s', boxShadow: '0 10px 25px rgba(56,189,248,0.4)' }}
            >
              <PenTool size={22} style={{ verticalAlign: 'middle', marginRight: '10px' }}/> Sellar mi Compromiso
            </button>
          </div>
        ) : (
          <div className="fade-in" style={{ padding: '20px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(15,23,42,0) 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #fef08a, #eab308)', padding: '25px', borderRadius: '50%', marginBottom: '25px', boxShadow: '0 15px 35px rgba(234,179,8,0.3)' }}>
                 <Award size={64} color="#713f12" />
              </div>
              <h3 style={{ fontSize: '2.8rem', color: '#fde047', marginBottom: '10px', fontWeight: '900', textShadow: '0 2px 10px rgba(253,224,71,0.2)' }}>¡Felicidades, Estratega!</h3>
              <h4 style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '30px', fontWeight: 'normal' }}>Has completado este Laboratorio de Acción</h4>
              
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '20px', border: '1px solid rgba(234,179,8,0.3)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem', margin: '0 0 10px 0' }}>Tu compromiso firmado:</p>
                <p style={{ fontStyle: 'italic', color: '#fde047', margin: 0, fontSize: '1.3rem', fontWeight: 'bold' }}>"{compromiso}"</p>
              </div>

              <button 
                onClick={() => navigate('/cursos')} 
                className="hover-scale"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', padding: '20px 50px', fontSize: '1.3rem', fontWeight: 'bold', color: '#fffbeb', borderRadius: '40px', boxShadow: '0 15px 30px rgba(217,119,6,0.4)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', margin: '0 auto' }}
              >
                <Sparkles size={24} /> Volver al Catálogo de Cursos
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  // Widget Interactivo: Constructor de Jobs
  const JobStatementWidget = () => {
    const [activeExample, setActiveExample] = React.useState(0);
    
    const examples = [
      {
        title: "Viajero Corporativo",
        icon: <Briefcase size={18} />,
        direccion: "Minimizar",
        metrica: "el tiempo de espera",
        objeto: "en la recepción",
        clarificador: "cuando llego cansado de un vuelo nocturno"
      },
      {
        title: "Familia de Vacaciones",
        icon: <Heart size={18} />,
        direccion: "Aumentar",
        metrica: "la sensación de seguridad",
        objeto: "durante las excursiones",
        clarificador: "cuando viajo con niños pequeños"
      },
      {
        title: "Nómada Digital",
        icon: <Compass size={18} />,
        direccion: "Garantizar",
        metrica: "la estabilidad del WiFi",
        objeto: "en mi habitación",
        clarificador: "mientras tengo reuniones clave"
      }
    ];

    return (
      <div className="interactive-card" style={{ background: 'white', borderRadius: '20px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
        <h4 style={{ color: '#0f172a', marginBottom: '1.5rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Settings size={24} color="#3b82f6" className="pulse-icon" /> Constructor Interactivo de Jobs-to-be-Done
        </h4>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {examples.map((ex, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveExample(idx)}
              style={{
                padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold',
                background: activeExample === idx ? '#3b82f6' : '#f1f5f9',
                color: activeExample === idx ? 'white' : '#64748b',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: activeExample === idx ? 'translateY(-2px)' : 'none',
                boxShadow: activeExample === idx ? '0 10px 20px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              {ex.icon} {ex.title}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', background: '#f8fafc', padding: '2rem', borderRadius: '15px', border: '2px dashed #cbd5e1' }}>
          <div style={{ flex: '1', minWidth: '150px', background: '#bfdbfe', padding: '15px', borderRadius: '12px', color: '#1e40af', transition: 'all 0.4s ease' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px', opacity: 0.7 }}>1. Dirección</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '900' }}>{examples[activeExample].direccion}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', fontWeight: 'bold', fontSize: '1.5rem' }}>+</div>
          
          <div style={{ flex: '1', minWidth: '150px', background: '#bbf7d0', padding: '15px', borderRadius: '12px', color: '#166534', transition: 'all 0.4s ease' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px', opacity: 0.7 }}>2. Métrica</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '900' }}>{examples[activeExample].metrica}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', fontWeight: 'bold', fontSize: '1.5rem' }}>+</div>

          <div style={{ flex: '1', minWidth: '150px', background: '#fef08a', padding: '15px', borderRadius: '12px', color: '#854d0e', transition: 'all 0.4s ease' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px', opacity: 0.7 }}>3. Objeto</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '900' }}>{examples[activeExample].objeto}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', fontWeight: 'bold', fontSize: '1.5rem' }}>+</div>

          <div style={{ flex: '1', minWidth: '150px', background: '#fbcfe8', padding: '15px', borderRadius: '12px', color: '#9d174d', transition: 'all 0.4s ease' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px', opacity: 0.7 }}>4. Clarificador</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '900' }}>{examples[activeExample].clarificador}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      <style>{`
        .interactive-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
        }
        .hover-scale {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .hover-scale:hover {
          transform: scale(1.1) rotate(2deg);
        }
        .reveal-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .interactive-card:hover .reveal-content {
          max-height: 200px;
          opacity: 1;
          margin-top: 15px;
        }
        .pulse-icon {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div className="title-pill" style={{ background: '#eff6ff', color: '#1e40af', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', margin: 0 }}>
          <Briefcase size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }} />
          Arquitectura de Micro-Experiencias
        </div>
        <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>
          Módulo Empresarial Avanzado
        </div>
      </div>

      <h2 style={{ color: headerColor, transition: 'color 0.3s ease', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.5px' }}>{modTitle}</h2>

      {/* Progress Bar Interactiva */}
      <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '40px', height: '40px', background: headerColor, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          {step}
        </div>
        <div style={{ flexGrow: 1, background: '#e2e8f0', height: '12px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / totalSteps) * 100}%`, background: headerGradient, height: '100%', borderRadius: '10px', transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
        </div>
        <span style={{ fontWeight: 800, color: headerColor, fontSize: '1.2rem' }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>

        {/* ==========================================
            MÓDULO 1: Descubrimiento y Empatía
            ========================================== */}
        {step === 1 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><Compass size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Compass size={48} color="#fde047" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Módulo 1: Descubrimiento y Empatía</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                Bienvenidos a la Arquitectura de Experiencias. En el diseño moderno, nuestro objetivo no es simplemente ofrecer un servicio, sino <strong>construir puentes hacia las necesidades reales de nuestros usuarios</strong>. Acompáñanos a descubrir cómo la empatía transforma un espacio en una memoria inolvidable.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#032968', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target size={28} /> De "Segmentación" a "Conexión Humana"
              </h4>
              
              <div className="grid-2" style={{ gap: '30px' }}>
                <div style={{ background: '#fef2f2', padding: '2rem', borderRadius: '20px', border: '1px solid #fecaca', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: '#ef4444', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>LA FORMA TRADICIONAL</div>
                  <h5 style={{ color: '#b91c1c', fontSize: '1.3rem', marginBottom: '15px' }}>Segmentos Amplios</h5>
                  <p style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>En ocasiones, hablar de grandes grupos (como "el mercado internacional" o "familias") puede ser un buen inicio, pero a menudo resulta muy general para diseñar detalles que realmente conecten con las emociones de las personas.</p>
                </div>

                <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '20px', border: '1px solid #bfdbfe', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: '#3b82f6', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>LA FORMA PEDAGÓGICA</div>
                  <h5 style={{ color: '#1e40af', fontSize: '1.3rem', marginBottom: '15px' }}>Diseño Basado en Personas</h5>
                  <p style={{ fontSize: '1rem', color: '#1e3a8a', lineHeight: 1.6 }}>La clave está en crear perfiles vivos (Arquetipos o Buyer Personas). Al entender a profundidad sus anhelos, rutinas y frustraciones, podemos anticiparnos y brindar soluciones hermosas antes de que las pidan.</p>
                </div>
              </div>

              <CasoReal 
                empresa="Comunidad y Viajes Corporativos" 
                titulo="El verdadero objetivo del viajero" 
                img="https://illustrations.popsy.co/blue/remote-work.svg"
                contenido="<strong>El Descubrimiento:</strong> A través de la observación empática, se notó que los viajeros de negocios no solo buscaban 'un lugar para dormir', sino también 'un espacio para trabajar cómodamente sin sentirse aislados'.<br/><strong>La Observación Pasiva:</strong> Al observar cómo las personas bajaban de sus habitaciones para sentarse en las mesas comunes del lobby buscando compañía humana, se reveló una necesidad social profunda.<br/><strong>La Transformación:</strong> Esto inspiró el diseño de lobbys abiertos y vibrantes, transformándolos en espacios de coworking que invitan a la conexión."
              />

              <EjercicioPractico 
                titulo="Ejercicio Práctico: El 'Muro de la Empatía'"
                contenido={<>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '250px' }}>
                      <p style={{ marginBottom: '1rem', color: '#1e3a8a' }}>Elige a uno de tus clientes recientes y, sin usar datos demográficos (edad, ciudad), escribe en 3 post-its:</p>
                      <ul style={{ paddingLeft: '20px', marginBottom: '1rem', color: '#1e3a8a', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><strong>¿Qué le frustra realmente antes de comprarte?</strong></li>
                        <li><strong>¿Qué le daría paz mental inmediata?</strong></li>
                        <li><strong>¿Qué detalle inesperado le haría sonreír hoy?</strong></li>
                      </ul>
                      <p style={{ fontSize: '0.9rem', opacity: 0.8, color: '#1e3a8a' }}>Aplica esto para crear un servicio adelantado a su necesidad.</p>
                    </div>
                    <div className="hover-scale" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#bae6fd', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, cursor: 'pointer' }}>
                      <img src={avatarBusiness} alt="Business Traveler" style={{ height: '90%' }} />
                    </div>
                  </div>
                  <div className="reveal-content" style={{ padding: '15px', background: 'white', borderRadius: '10px', borderLeft: '4px solid #fde047', fontSize: '0.95rem' }}>
                    💡 <strong>Tip Interactivo:</strong> Los mejores descubrimientos nacen cuando dejas de intentar vender, y empiezas a observar genuinamente. ¡Pasa el mouse para revelar!
                  </div>
                </>
                }
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#032968', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Activity size={36} /> Observación vs. Encuestas
            </h3>
            
            <div style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '20px', padding: '2rem', display: 'flex', gap: '25px', marginBottom: '3rem', alignItems: 'center' }}>
               <div style={{ color: '#ea580c', background: '#ffedd5', padding: '15px', borderRadius: '50%' }}><AlertTriangle size={40}/></div>
               <div>
                  <h4 style={{ color: '#9a3412', fontWeight: 900, marginBottom: '0.5rem', fontSize: '1.4rem' }}>La Regla de Oro Empresarial</h4>
                  <p style={{ color: '#9a3412', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
                    "No puedes conocer realmente a tu cliente si nunca has hablado con él u observado cómo hace algo. Lo que la gente <em>dice</em> en encuestas es distinto a lo que <em>hace</em>."
                  </p>
               </div>
            </div>

            <div className="grid-2" style={{ gap: '20px' }}>
               <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <BarChart3 size={24} color="#64748b" />
                   <h5 style={{ color: '#475569', fontSize: '1.2rem', margin: 0 }}>Investigación de Mercado</h5>
                 </div>
                 <p style={{ color: '#64748b', lineHeight: 1.6 }}>Sondear la opinión superficial de 100 personas mediante encuestas para ver tendencias estadísticas. <strong>Sirve para hacer publicidad, pero NO para diseñar el núcleo del producto.</strong></p>
               </div>

               <div style={{ background: '#f0f9ff', padding: '2rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(59,130,246,0.1)', border: '2px solid #bae6fd' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <User size={24} color="#0369a1" />
                   <h5 style={{ color: '#0369a1', fontSize: '1.2rem', margin: 0 }}>Investigación de Usuarios</h5>
                 </div>
                 <p style={{ color: '#075985', lineHeight: 1.6 }}>Observar profundamente el comportamiento de un grupo pequeño (8-15 personas) en contextos reales. Escuchar su historia e interactuar para encontrar hallazgos auténticos (Empatía pura).</p>
               </div>
            </div>

            <CasoReal 
                empresa="Conexión en Plataformas de Alojamiento" 
                titulo="El poder de la observación cualitativa" 
                img="https://illustrations.popsy.co/amber/success.svg"
                contenido="<strong>El Descubrimiento:</strong> En las primeras etapas de las plataformas de alojamiento colaborativo, se comprendió que el usuario no buscaba únicamente 'una habitación económica', sino que tenía una motivación social: 'Quiero sentir que pertenezco a la cultura local'.<br/><strong>El Método Empático:</strong> Los creadores decidieron viajar y sentarse a tomar café en las salas de sus primeros usuarios. Al conversar cara a cara, entendieron que el verdadero valor era la 'conexión humana'.<br/><strong>La Transformación:</strong> Se modificaron las interfaces para destacar historias reales, fotografías cálidas y perfiles detallados que generaran confianza y comunidad."
            />

            <EjercicioPractico 
              titulo="La Entrevista de Valor"
              contenido={<>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div className="hover-scale" style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: '#fed7aa', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, cursor: 'pointer' }}>
                      <img src={avatarHost1} alt="Host 1" style={{ height: '90%', marginRight: '-20px' }} />
                      <img src={avatarHost2} alt="Host 2" style={{ height: '90%' }} />
                    </div>
                    <div style={{ flex: '1', minWidth: '250px' }}>
                      <p style={{ marginBottom: '1rem', color: '#1e3a8a' }}>Identifica a un cliente leal y ofrécele un café. Durante la charla, no hables de tu producto. Hazle solo 3 preguntas:</p>
                      <ul style={{ paddingLeft: '20px', color: '#1e3a8a', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li>"Cuéntame sobre la última vez que intentaste organizar un viaje/evento. ¿Qué fue lo más estresante?"</li>
                        <li>"¿Qué solución improvisaste para resolverlo?"</li>
                        <li>"Si pudieras chasquear los dedos y tener una solución mágica, ¿cómo sería?"</li>
                      </ul>
                    </div>
                  </div>
                  <div className="reveal-content" style={{ padding: '15px', background: 'white', borderRadius: '10px', borderLeft: '4px solid #fde047', fontSize: '0.95rem' }}>
                    💡 <strong>Secreto:</strong> Al preguntar por su 'solución mágica', te están diseñando el producto sin saberlo.
                  </div>
                </>
                }
            />
          </div>
        )}

        {step === 3 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#032968', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Settings size={36} /> El "Trabajo a Realizar" (Jobs-to-be-Done)
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              El turista no te compra una habitación o un pasaje de bus; te <strong>"contrata"</strong> para resolver una tarea en su vida. Debes categorizar esto en 3 dimensiones:
            </p>

            <div className="grid-3" style={{ gap: '20px', marginBottom: '3rem' }}>
              <FlipDimensionCard 
                title="Funcional"
                subtitle="Quiero lograr algo"
                content="Quiero transportarme rápido del aeropuerto al hotel, o necesito un lugar seguro y oscuro para dormir profundamente."
                color="#1e40af"
                bg="#eff6ff"
                borderTop="5px solid #3b82f6"
                imageSrc={avatarJobFuncional}
              />
              <FlipDimensionCard 
                title="Emocional"
                subtitle="Quiero sentir algo"
                content="Quiero sentirme totalmente relajado, quiero sentir que mi familia está a salvo, o quiero evitar la ansiedad del tráfico."
                color="#be185d"
                bg="#fdf2f8"
                borderTop="5px solid #ec4899"
                imageSrc={avatarJobEmocional}
              />
              <FlipDimensionCard 
                title="Social"
                subtitle="Quiero proyectar algo"
                content="Quiero proyectar estatus en mis redes, exclusividad, o ser visto como un excelente proveedor de vacaciones para mis hijos."
                color="#6d28d9"
                bg="#f5f3ff"
                borderTop="5px solid #8b5cf6"
                imageSrc={avatarJobSocial}
              />
            </div>

            <JobStatementWidget />

            <EjercicioPractico 
              titulo="Redacta el Contrato Oculto de tu Cliente" 
              contenido="Usando la fórmula de arriba, redacta por qué te 'contratan'. Ejemplo: 'Minimizar (Dirección) el tiempo (Métrica) de espera en recepción (Objeto) cuando llego cansado de un vuelo largo (Clarificador)'. ¡Haz el tuyo ahora mismo!"
            />
          </div>
        )}

        {/* ==========================================
            MÓDULO 2: El Tablero de Propuesta de Valor
            ========================================== */}
        {step === 4 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '-20px', top: '-20px', opacity: 0.1 }}><Layers size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Layers size={48} color="#a7f3d0" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Módulo 2: El Tablero de Valor</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                AQUÍ SE DISEÑA LA EXPERIENCIA. La experiencia no es un accidente, es el diseño de atributos intangibles que se "inyectan" al producto base.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#15803d', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Map size={28} /> Mapeo del Cliente (Perfil)
              </h4>
              
              <ProfileMapperWidget />

              <EjercicioPractico 
                titulo="Mapeo de tu Realidad" 
                contenido="Divide una hoja en dos. A la izquierda escribe 3 dolores reales que sufre tu cliente ANTES de encontrarte a ti (ej. estrés organizando). A la derecha, escribe 3 cosas que lo harían suspirar de alivio o sonreír apenas te contrata."
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#055C38', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Zap size={36} /> El Cuadrado del Producto vs. La Experiencia
            </h3>
            
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              A tu producto base (la cama, el bus, la comida) se le construyen características exactas para manipular la percepción. Veamos la enorme diferencia entre un producto puramente funcional y una experiencia diseñada.
            </p>

            <ProductVsExperienceWidget />

            <div style={{ background: 'linear-gradient(to right, #064e3b, #14532d)', padding: '2rem', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 15px 30px rgba(6,78,59,0.3)' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '50%' }}><CheckCircle2 size={30} /></div>
              <div>
                <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '5px' }}>Regla de Oro: "Días duros, noches blandas"</strong>
                <p style={{ margin: 0, fontSize: '1.05rem', color: '#d1fae5', lineHeight: 1.5 }}>Después del esfuerzo físico de la macroexperiencia territorial, la microexperiencia privada (hotel/transporte) debe brindar un confort excepcionalmente reparador.</p>
              </div>
            </div>

            <EjercicioPractico 
              titulo="Diseña tu Detonante Sensorial" 
              contenido="Identifica el punto más monótono de tu servicio (ej. el traslado del aeropuerto). Diseña un 'Amplificador de Deleite' de bajo costo para ese instante: puede ser ofrecer una toalla húmeda con aroma a cítricos, o reproducir una playlist local curada. Escríbelo y aplícalo mañana."
            />
          </div>
        )}

        {step === 6 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#055C38', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <PenTool size={36} /> Value Proposition Statement
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Todo este diseño estratégico no puede quedarse en un tablero gigante. Debes condensarlo en una fórmula estandarizada (Tu Mensaje Clave) que comunicará exactamente qué vendes.
            </p>

            <ValuePropositionBuilderWidget />
          </div>
        )}

        {/* ==========================================
            MÓDULO 3: Prototipado y Validación
            ========================================== */}
        {step === 7 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}><Settings size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Settings size={48} color="#fed7aa" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Módulo 3: Prototipado y Validación</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                <strong>Aprender fallando barato.</strong> No construyas el edificio entero sin probar si a la gente le gusta el color de los ladrillos.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#9a3412', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lightbulb size={28} /> Prototipos y Herramientas Desechables
              </h4>
              
              <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Un prototipo NO es la primera versión de tu producto. Es una herramienta de aprendizaje diseñada específicamente para fallar y descartarse.
              </p>

              <div className="grid-2" style={{ gap: '25px', marginBottom: '3rem' }}>
                <FlipDimensionCard 
                  title="Modelos a Escala"
                  subtitle="Role-play / Lego"
                  content="Usa piezas de Lego o simula con tu equipo cómo será el flujo de las personas. ¿Dónde se sentarán? ¿Dónde está el cuello de botella físico?"
                  color="#c2410c"
                  bg="#fff7ed"
                  borderTop="5px solid #ea580c"
                  imageSrc={avatarPrototipo1}
                />
                <FlipDimensionCard 
                  title="Aspecto Aislado"
                  subtitle="Pruebas fraccionadas"
                  content="No construyas el hotel entero. Puedes probar solo el menú del desayuno, o simular una sola habitación para ver cómo fluye el aseo."
                  color="#b45309"
                  bg="#fef3c7"
                  borderTop="5px solid #d97706"
                  imageSrc={avatarPrototipo2}
                />
              </div>

              <VirginAtlanticCaseWidget />

              <EjercicioPractico 
                titulo="Simula el Cuello de Botella" 
                contenido="Dibuja un plano de tu establecimiento, de tu ruta de viaje o de la app que quieres lanzar. Usa piedritas o monedas para simular a 15 turistas entrando o usándolo al mismo tiempo. ¿Dónde se estancan? Identifica el error en papel antes de gastar dinero."
              />
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#ea580c', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Activity size={36} /> Pilotos y Datos Sensoriales
            </h3>
            
            <div style={{ background: '#fff7ed', border: '1px solid #fdba74', borderRadius: '20px', padding: '2.5rem', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(234,88,12,0.05)' }}>
               <h4 style={{ color: '#9a3412', fontSize: '1.4rem', marginBottom: '15px' }}>El Simulacro Real (Try-Outs)</h4>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                 La experiencia se pone a prueba en un ambiente controlado. <strong>La clave mágica: Ellos SABEN que es experimental.</strong> Al saberlo, no te exigen perfección y te regalan retroalimentación brutalmente honesta para co-crear la solución.
               </p>
            </div>

            <div className="grid-2" style={{ gap: '25px', marginBottom: '3rem' }}>
               <FlipDimensionCard 
                  title="Adiós Encuestas"
                  subtitle="La trampa de la cortesía"
                  content="Las encuestas de papel al final del viaje sirven de poco. La gente suele mentir por cortesía para no hacerte sentir mal y califican todo con '5 estrellas'."
                  color="#ef4444"
                  bg="#fee2e2"
                  borderTop="5px solid #dc2626"
                  imageSrc={avatarPiloto1}
                />
                <FlipDimensionCard 
                  title="Datos Sensoriales"
                  subtitle="Observación Científica"
                  content="Observa expresiones físicas innatas durante la experiencia. ¿Hubo asombro real en el detonante? ¿Bostezos? Te conviertes en un científico del comportamiento."
                  color="#22c55e"
                  bg="#dcfce7"
                  borderTop="5px solid #16a34a"
                  imageSrc={avatarPiloto2}
                />
            </div>

            <PilotoChecklistWidget />
          </div>
        )}

        {/* ==========================================
            MÓDULO 4: Estructuración y MVP
            ========================================== */}
        {step === 9 && (
          <div className="fade-in">
             <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '-20px', top: '-20px', opacity: 0.1 }}><Handshake size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Handshake size={48} color="#a7f3d0" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Módulo 4: Estructuración y MVP</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                La experiencia validada se empaqueta para generar dinero. Pasamos de un experimento de laboratorio a una empresa real compitiendo en el mercado.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#166534', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BarChart3 size={28} /> El Motor (Business Model Canvas)
              </h4>
              
              <div style={{ background: '#f0fdf4', padding: '2.5rem', borderRadius: '20px', borderLeft: '5px solid #22c55e', marginBottom: '3rem', boxShadow: '0 10px 25px rgba(34,197,94,0.1)' }}>
                <p style={{ color: '#14532d', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
                  No importa qué tan mágica o sensorial sea tu experiencia; si no es financieramente viable, es un hobby muy caro. A nivel técnico, debes definir tus <strong>Costos Críticos</strong>, tus <strong>Fuentes de Ingreso</strong> y, sobre todo, tus <strong>Aliados Clave</strong>.
                </p>
              </div>

              <div className="grid-2" style={{ gap: '25px' }}>
                <FlipDimensionCard 
                  title="El Eslabón Débil"
                  subtitle="La regla de oro técnica"
                  content="Si tu proveedor de transporte falla (llega tarde, sucio), tu experiencia entera falla. Tu aliado clave tiene el poder de destruir tu propuesta de valor sin que tú tengas la culpa."
                  color="#d97706"
                  bg="#fef3c7"
                  borderTop="5px solid #f59e0b"
                  imageSrc={avatarMVP1}
                />
                <FlipDimensionCard 
                  title="El Elevator Pitch"
                  subtitle="Táctica Comercial"
                  content="Toma tu Value Proposition Statement de la Módulo 2 y conviértelo en tu arma de ventas. Habla siempre de los dolores emocionales que resuelves, no de tu infraestructura técnica."
                  color="#2563eb"
                  bg="#eff6ff"
                  borderTop="5px solid #3b82f6"
                  imageSrc={avatarMVP2}
                />
              </div>

              <EslabonDebilQuizWidget />
            </div>
          </div>
        )}

        {step === 10 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#166534', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Zap size={36} /> Lanzamiento del MVP
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Lanzar un <strong>Producto Mínimo Viable (MVP)</strong> no significa lanzar un producto mediocre. Significa lanzar la versión más pequeña de tu idea que <em>ya</em> soluciona el problema y <em>ya</em> tiene los detonantes de deleite.
            </p>

            <AwasiCaseWidget />

            <div className="glass-card" style={{ padding: '2.5rem', background: 'linear-gradient(to right, #1e293b, #0f172a)', color: 'white', borderRadius: '20px', marginTop: '3rem' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '1rem', fontSize: '1.3rem' }}>El objetivo: Los "Early Adopters"</h4>
              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
                Tu MVP no está hecho para el turista masivo y exigente. Está hecho para los "Pioneros" o adoptantes tempranos: personas que aman probar cosas exclusivas o nuevas. Como quieren ser los primeros, perdonarán pequeñas fallas operativas y te ayudarán a mejorar iterativamente.
              </p>
            </div>

            <MvpPruningWidget />
          </div>
        )}

        {/* ==========================================
            MÓDULO 5: Sense & Respond
            ========================================== */}
        {step === 11 && (
          <div className="fade-in">
             <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><RefreshCw size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <RefreshCw size={48} color="#ddd6fe" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Módulo 5: Sense & Respond</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                En innovación, el producto NUNCA está "terminado". Se convierte en una conversación constante de mejora infinita basada en datos.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <div className="grid-2" style={{ gap: '25px', marginBottom: '3rem' }}>
                <FlipDimensionCard 
                  title="Sentir (Sense)"
                  subtitle="Escucha a los datos"
                  content="No escuches solo opiniones, escucha a los datos operacionales. Mide tasas de retención (¿vuelven?), el NPS y los puntos de congestión en tiempo real."
                  color="#6d28d9"
                  bg="#f5f3ff"
                  borderTop="5px solid #8b5cf6"
                  imageSrc={avatarSense}
                />
                <FlipDimensionCard 
                  title="Responder (Respond)"
                  subtitle="Iteración Brutal"
                  content="Si un servicio te cuesta una fortuna y el turista ni lo nota, elimínalo hoy. Si adoran un pequeño detalle barato, poténcialo y vuélvelo tu bandera comercial."
                  color="#5b21b6"
                  bg="#ede9fe"
                  borderTop="5px solid #7c3aed"
                  imageSrc={avatarRespond}
                />
              </div>

                            <CasoReal 
                empresa="Parque Xcaret (México)" 
                titulo="Iteración basada en datos de fricción operativa" 
                img={imgXcaret}
                contenido="<strong>¿Cómo 'Sintieron' (Sense)?</strong> No hicieron encuestas al salir. El equipo de operaciones mapeó en terreno los 'puntos de fricción'. Descubrieron un patrón de datos oculto: a las 4:00 PM, bajo el sol del Caribe, el nivel de llantos de niños se disparaba y el flujo peatonal se volvía caótico por el estrés térmico.<br/><strong>¿Cómo 'Respondieron' (Respond)?</strong> En solo 48 horas tomaron medidas ágiles: Instalaron carritos sorpresa con aguas gratis y desplegaron personajes lúdicos (guacamayas) exactamente en esos cuellos de botella geográficos a las 3:45 PM. La crisis de satisfacción se evaporó."
              />

              <div className="glass-card" style={{ padding: '2.5rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
                <h4 style={{ color: '#4c1d95', marginBottom: '1rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Compass size={24}/> Discovery Permanente (Dual Track Agile)</h4>
                <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  Mientras tu equipo operativo atiende a los turistas diarios (<strong>Delivery</strong>), debes mantener un tiempo dedicado a investigar (<strong>Discovery</strong>). Explora nuevas ideas baratas, asume que no sabes todo, y deja que el usuario te guíe hacia la excelencia.
                </p>
              </div>

                            <TripAdvisorAuditWidget />
            </div>
          </div>
        )}

        {/* --- FINALIZACIÓN --- */}
        {step === 12 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #8b5cf6, #5b21b6)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', boxShadow: '0 15px 40px rgba(109,40,217,0.3)' }}>
              <Target size={60} />
            </div>
            <h2 style={{ color: '#4c1d95', fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>El Product Roadmap</h2>
            
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
              Como tu producto ahora está vivo y recibe sugerencias de manera constante, no puedes ejecutar todas las ideas al tiempo o crearás caos. Aquí entra el <strong>Roadmap (Hoja de Ruta)</strong>. Adiós a las fechas exactas; priorizamos el impacto.
            </p>

            <ImpactEffortMatrixWidget />

            <div style={{ marginTop: '5rem' }}>
               <ResumenMetodologiaWidget />
            </div>

            <CompromisoFinalWidget />

            {/* Botón de Finalizar movido dentro del CompromisoFinalWidget para evitar saltarse la firma */}
          </div>
        )}

      </div>

      {/* Navigation Controls */}
      <div className="next-prev-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '2px solid #e2e8f0', paddingTop: '2rem' }}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Salir
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{ background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Anterior
          </button>
        )}

        {step < totalSteps && (
          <button onClick={nextStep} className="btn-primary" style={{ background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Siguiente Etapa <ArrowRight size={18} />
          </button>
        ) }
      </div>

    </div>
  );
}
