import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';

const fullData = [
  { year: '2021', ingresos: 120, pct: 10 },
  { year: '2022', ingresos: 210, pct: 25 },
  { year: '2023', ingresos: 380, pct: 50 },
  { year: '2024', ingresos: 590, pct: 75 },
  { year: '2025', ingresos: 850, pct: 100 },
];

export default function DataLab() {
  const [dataLimit, setDataLimit] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) setDataLimit(1);
      else if (scrollY >= 200 && scrollY < 500) setDataLimit(2);
      else if (scrollY >= 500 && scrollY < 800) setDataLimit(3);
      else if (scrollY >= 800 && scrollY < 1100) setDataLimit(4);
      else setDataLimit(5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleData = fullData.slice(0, dataLimit);

  return (
    <div className="main-container">
      <div className="title-pill mb-4"><BarChart3 size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Laboratorio (Powered by FastAPI)</div>
      <h2 style={{fontFamily: 'Poppins'}}>El Territorio en Cifras</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem', fontFamily: 'Poppins'}}>
        Visualización de datos de impacto. Simulamos cómo la plataforma procesa los datos reales levantados en campo para traducirlos en modelos analíticos.
      </p>

      <div className="scrolly-container">
        
        {/* Panel izquierdo de texto: Scrollytelling content */}
        <div className="scrolly-text">
          <div className="scrolly-step">
            <h3 style={{color: '#032968'}}>El inicio post-pandemia</h3>
            <p>En el año 2021, las iniciativas de turismo comunitario estaban apenas recuperándose. El ecosistema local reportaba ingresos moderados pero consistentes gracias a los primeros apoyos.</p>
          </div>
          
          <div className="scrolly-step">
            <h3 style={{color: '#032968'}}>La ola de formalización</h3>
            <p>A partir de finales de 2022, las capacitaciones comenzaron a dar frutos en la estandarización de costos. Los ingresos empezaron su curva ascendente.</p>
          </div>

          <div className="scrolly-step">
            <h3 style={{color: '#032968'}}>Expansión inter-regional</h3>
            <p>El salto en 2023 fue impulsado por paquetes turísticos que integraron servicios rurales cruzados. La visibilidad fue innegable.</p>
          </div>

          <div className="scrolly-step">
            <h3 style={{color: '#032968'}}>Innovación Digital</h3>
            <p>En 2024, la vinculación tecnológica de las Pymes turísticas generó el quiebre de la curva de ingresos tradicional hacia un modelo puramente exponencial.</p>
          </div>

          <div className="scrolly-step">
            <h3 style={{color: '#055C38'}}>Escalabilidad de Impacto (2025)</h3>
            <p>El panorama actual demuestra la validez científica y económica de la Apropiación Social del Conocimiento, llegando a umbrales récord de ingresos comunitarios.</p>
          </div>
        </div>

        {/* Panel derecho: Gráfico CSS nativo Sticky */}
        <div className="scrolly-chart-sticky">
           <h4 style={{marginBottom: '2rem', color: '#032968', fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Poppins'}}>Ingresos (Millones COP) vs Tiempo</h4>
           
           <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '60%', width: '100%', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
             {fullData.map((d, index) => {
               const isVisible = index < dataLimit;
               return (
                 <div key={d.year} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '15%'}}>
                   <div style={{
                     height: isVisible ? `${d.pct}%` : '0%', 
                     width: '100%', 
                     background: '#055C38', 
                     borderRadius: '5px 5px 0 0', 
                     transition: 'height 0.5s ease-out, opacity 0.5s',
                     opacity: isVisible ? 1 : 0
                   }}></div>
                   <span style={{marginTop: '10px', fontSize: '0.9rem', color: '#475569', fontWeight: 700}}>{d.year}</span>
                 </div>
               )
             })}
           </div>

          <div style={{marginTop: '2rem', fontStyle: 'italic', color: '#64748b', fontSize: '0.9rem', textAlign: 'right'}}>
            *Datos comunitarios interactivos - {dataLimit * 20}% completado.
          </div>
        </div>
      </div>
    </div>
  );
}
