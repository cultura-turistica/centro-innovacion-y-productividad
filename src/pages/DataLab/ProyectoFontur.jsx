import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis, Cell } from 'recharts';

import fonturModalidad from '../../data/fontur_modalidad.json';
import fonturRiesgos from '../../data/fontur_riesgos.json';

export default function ProyectoFontur() {
  const [step, setStep] = useState(0);
  const stepsRefs = useRef([]);

  useEffect(() => {
    // Hide native nav to ensure full immersive layout
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger exactly in the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepId = parseInt(entry.target.getAttribute('data-step'), 10);
          setStep(stepId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    stepsRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      if (nav) nav.style.display = 'flex'; // Restore nav on unmount
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !stepsRefs.current.includes(el)) {
      stepsRefs.current.push(el);
    }
  };

  // --------------- DATA PREP ---------------
  const processModalidadData = () => {
    const years = ['2021', '2022', '2023', '2024'];
    return years.map(year => {
      const entry = { name: year };
      fonturModalidad.forEach(row => {
        const modality = row['MODALIDAD DE CONTRATACIÓN'];
        const val = row[`Valor Contratado ${year}`] || 0;
        const valMilMillones = val / 1000000000; // Mil Millones
        if (modality.includes('DIRECTA')) {
          entry['Directa'] = valMilMillones;
        } else {
          entry['Competitivo'] = (entry['Competitivo'] || 0) + valMilMillones;
        }
      });
      return entry;
    });
  };
  const chartModalidad = processModalidadData();

  const topRisks = [...fonturRiesgos]
    .sort((a, b) => b["Porcentaje Riesgo"] - a["Porcentaje Riesgo"])
    .map((d, index) => {
      // Artistic dispersion for the scatter plot
      const spreadX = 20 + ((index * 37) % 60);
      const spreadY = 20 + ((index * 53) % 60);
      return {
        ...d,
        x: spreadX,
        y: spreadY,
        z: d["Porcentaje Riesgo"],
        label: d.Contratista
      };
    });

  // --------------- TOOLTIPS ---------------
  const AreaTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: '#111', padding: '15px', border: '1px solid #333', color: '#fff', fontFamily: 'sans-serif' }}>
           <h3 style={{margin: '0 0 10px 0', fontSize: '14px', textTransform: 'uppercase', color: '#888'}}>Vigencia {label}</h3>
           {payload.map((p, idx) => (
             <p key={idx} style={{color: p.color, margin: '5px 0', fontWeight: 'normal', fontSize: '14px'}}>
               {p.name}: <strong style={{color: '#fff'}}>${p.value.toFixed(1)}</strong> mil millones
             </p>
           ))}
        </div>
      );
    }
    return null;
  };

  const RiesgosTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ background: '#111', padding: '20px', borderTop: '3px solid #ff2a5f', maxWidth: '350px', color: '#fff', fontFamily: 'sans-serif', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
           <p style={{color:'#888', margin: 0, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px'}}>Contrato {data["Contrato Titular"]}</p>
           <h2 style={{color: '#fff', fontSize: '18px', margin: '8px 0 12px 0', lineHeight: 1.3}}>{data.Contratista}</h2>
           <p style={{color: '#aaa', margin: '0 0 15px 0', fontSize: '13px', lineHeight: 1.4}}>{data.Objeto}</p>
           <div style={{borderTop: '1px solid #333', paddingTop: '10px'}}>
             <p style={{color: '#fff', margin: 0, fontSize: '12px'}}>Daño al Patrimonio estimado:</p>
             <p style={{color: '#ff2a5f', margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold'}}>{data.z}%</p>
           </div>
        </div>
      );
    }
    return null;
  };

  // --------------- STYLING THE PUDDING WAY ---------------
  const colors = {
    bg: '#0f0f12',
    textMain: '#ececec',
    textDim: '#8b8b99',
    accent: '#ff2a5f', 
    cyan: '#00d0ff'
  };

  const articleStyle = {
    backgroundColor: colors.bg,
    color: colors.textMain,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    position: 'relative',
    minHeight: '100vh'
  };

  const stickyLayer = {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: colors.bg
  };

  const textLayer = {
    position: 'relative',
    zIndex: 10,
    marginTop: '-100vh', // Start text at top
    pointerEvents: 'none' // Allow charts to be hovered through the invisible parts of text layer
  };

  const proseStyle = {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '0 30px',
    pointerEvents: 'auto', // Enable text selection
    fontSize: '1.35rem',
    lineHeight: 1.8,
    color: 'rgba(255, 255, 255, 0.9)'
  };

  // Instead of a box, we use a beautiful rich text shadow/gradient to make it perfectly readable over charts
  const stepContainer = {
    ...proseStyle,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    // Gradient mask to ensure readable text over charts without using "cards"
    background: 'linear-gradient(to right, rgba(15,15,18,0) 0%, rgba(15,15,18,0.95) 15%, rgba(15,15,18,0.95) 85%, rgba(15,15,18,0) 100%)',
  };

  const h2Style = {
    fontFamily: "'Space Grotesk', -apple-system, sans-serif",
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '30px',
    letterSpacing: '-1px',
    lineHeight: 1.1
  };

  const heroStyle = {
    ...proseStyle,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'transparent'
  };

  return (
    <div style={articleStyle}>
      
      {/* 1. VISUAL LAYER (STICKY) */}
      <div style={stickyLayer}>
        
        {/* CHART 1: AREA (Direct vs Competitive) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          opacity: (step >= 1 && step < 3) ? 1 : 0, 
          transition: 'opacity 1.2s ease-in-out',
          zIndex: 5
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartModalidad} margin={{ top: 100, right: 0, left: -40, bottom: 0 }}>
              <defs>
                <linearGradient id="colorDirecta" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors.accent} stopOpacity={0.8}/>
                  <stop offset="100%" stopColor={colors.accent} stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors.cyan} stopOpacity={0.6}/>
                  <stop offset="100%" stopColor={colors.cyan} stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <YAxis stroke="rgba(255,255,255,0.1)" tick={false} axisLine={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fill: '#fff', fontSize: '20px', fontFamily: 'sans-serif'}} axisLine={false} tickLine={false} dy={-60} />
              <RechartsTooltip content={<AreaTooltip />} />
              <Area type="monotone" dataKey="Directa" stroke={colors.accent} strokeWidth={3} fillOpacity={1} fill="url(#colorDirecta)" animationDuration={2000} />
              <Area type="monotone" dataKey="Competitivo" stroke={colors.cyan} strokeWidth={2} fillOpacity={1} fill="url(#colorComp)" animationDuration={2000} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* CHART 2: SCATTER (Risks) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          opacity: step >= 3 ? 1 : 0, 
          transition: 'opacity 1.5s',
          zIndex: 6
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 50, right: 20, bottom: 50, left: 20 }}>
              <XAxis type="number" dataKey="x" range={[0, 100]} hide />
              <YAxis type="number" dataKey="y" range={[0, 100]} hide />
              <ZAxis type="number" dataKey="z" range={[500, 15000]} />
              <RechartsTooltip content={<RiesgosTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#333' }} />
              <Scatter data={topRisks} shape="circle" animationDuration={2500}>
                {topRisks.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={colors.accent} opacity={0.7} stroke="#fff" strokeWidth={0} style={{mixBlendMode: 'screen', filter: `blur(${entry.z < 20 ? 1 : 0}px)`}}/>
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 2. NARRATIVE LAYER (SCROLLING) */}
      <div style={textLayer}>
        
        {/* STEP 0: HERO (Invisibly triggering step 0, no background gradient here) */}
        <div data-step="0" ref={addToRefs} style={heroStyle}>
          <h1 style={{fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '4.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '20px', letterSpacing: '-2px', color: '#fff'}}>
            El Monopolio <br/><span style={{color: colors.accent}}>del Contrato</span>
          </h1>
          <p style={{fontFamily: "sans-serif", fontSize: '1.2rem', color: colors.textDim, maxWidth: '500px', margin: '0 auto 40px auto', letterSpacing: '0.5px'}}>
            Radiografía interactiva al gasto público en el turismo colombiano.
          </p>
          <div style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#555', marginTop: '10vh'}}>
            Desliza para investigar ↓
          </div>
        </div>

        {/* STEP 1 */}
        <div data-step="1" ref={addToRefs} style={stepContainer}>
          <h2 style={{...h2Style, color: '#fff'}}>La Ilusión de la Competencia</h2>
          <p>
            La promesa del Estado moderno es la libre competencia participativa. Licitaciones abiertas, pluralidad de oferentes, idoneidad técnica. 
          </p>
          <p>
            Pero bajo la lupa de los datos, la teoría institucional se desvanece ante una inmensa masa presupuestal. Entre 2021 y 2024, el flujo de capital del tesoro nacional en turismo se concentró en un abrumador océano rojo: <strong style={{color: colors.accent, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.1rem'}}>La Contratación Directa.</strong>
          </p>
        </div>

        {/* STEP 2 */}
        <div data-step="2" ref={addToRefs} style={stepContainer}>
          <h2 style={{...h2Style, color: colors.cyan}}>La Excepción como Regla</h2>
          <p>
            En el fondo de la pantalla apenas sobrevive una delgada línea azul, que representa los procesos sometidos a concurso.
          </p>
          <p>
            Asignar un contrato directamente no es un delito. Existen figuras legales creadas para dar agilidad al Estado ante emergencias o al vincular entidades públicas afines. El problema estadístico ocurre cuando la excepción marginal se convierte en la doctrina hegemónica del gasto.
          </p>
          <p>
            Omitir los embudos de competencia técnica acelera la ejecución financiera en el papel, pero vulnera el ecosistema de la política pública a puerta cerrada.
          </p>
        </div>

        {/* STEP 3 */}
        <div data-step="3" ref={addToRefs} style={stepContainer}>
          <h2 style={{...h2Style, color: colors.accent}}>Anatomía del Riesgo</h2>
          <p>
            La velocidad de adjudicación no garantizó cumplimiento. El mapa de arriba ilustra un universo de anomalías: entidades contratistas que fallaron, retrasaron la ejecución u operaron con daño patrimonial al fondo.
          </p>
          <p>
            Cada órbita flotante es una entidad infractora. No prestes atención a la cantidad absoluta, concéntrate en <span style={{fontStyle: 'italic', borderBottom: '1px solid #666'}}>la gravedad de la lesión</span>. 
          </p>
          <p style={{background: 'rgba(255,42,95,0.1)', padding: '15px 20px', borderLeft: `3px solid ${colors.accent}`, fontSize: '1.2rem', fontFamily: 'sans-serif'}}>
            👉 El diámetro incandescente representa el <strong style={{color: '#fff'}}>Porcentaje del Descalabro</strong>. Flota el mouse sobre ellos para destapar sus expedientes.
          </p>
        </div>

        {/* FINAL PADDING FOR SMOOTH ENDING */}
        <div data-step="4" ref={addToRefs} style={{ height: '40vh' }}></div>

      </div>
    </div>
  );
}
