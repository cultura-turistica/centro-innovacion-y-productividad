import React from 'react';
import { Library, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ThinkTank() {
  const publicaciones = [
    {
      tipo: "Modelo de Gestión",
      titulo: "Modelo de Apropiación Social del Conocimiento Turístico",
      autores: "Cultura T SAS",
      anio: "2024",
      desc: "Documento rector sobre metodologías participativas y apropiación tecnológica en Pymes rurales y urbanas."
    },
    {
      tipo: "Guía Técnica",
      titulo: "Estructuración de Rutas Bioculturales",
      autores: "Cultura T SAS",
      anio: "2025",
      desc: "Cartilla técnica paso a paso para identificar y diseñar atractivos turísticos salvaguardando el patrimonio inmaterial."
    },
    {
      tipo: "Artículo Académico",
      titulo: "Impacto del Scrollytelling en la Educación Comunitaria",
      autores: "Equipo I+D Cultura T",
      anio: "2026",
      desc: "Un análisis comparativo sobre cómo las tecnologías visuales modernas triplican la retención de emprendedores nativos."
    }
  ];

  return (
    <div className="main-container">
      <div className="title-pill mb-4"><Library size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Publicaciones SGR</div>
      <h2 style={{color: '#032968'}}>Centro de Pensamiento</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem'}}>
        Aquí reside el componente bibliográfico y de investigación formal de nuestra apropiación CTI. Literatura limpia, profesional y descargable.
      </p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {publicaciones.map((pub, idx) => (
          <div key={idx} className="glass-card" style={{padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center'}}>
            
            <div style={{
              minWidth: '80px', height: '100px', background: '#e0e7ff', borderRadius: '15px', 
              display: 'flex', alignItems: 'center', justifyContent:'center', color: '#032968'
            }}>
              <FileText size={40} />
            </div>

            <div style={{flexGrow: 1}}>
              <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px'}}>
                <span className="title-pill" style={{margin:0, padding: '4px 12px', fontSize: '0.8rem', background: '#dcfce7', color: '#055C38'}}>{pub.tipo}</span>
                <span style={{color: '#94a3b8', fontSize: '0.9rem', fontWeight: 700}}>Publicado en: {pub.anio}</span>
              </div>
              <h3 style={{margin:0, fontSize: '1.4rem'}}>{pub.titulo}</h3>
              <p style={{color: '#475569', fontSize: '1rem', marginTop: '5px'}}>{pub.desc}</p>
              <div style={{marginTop: '10px', fontSize: '0.9rem', color: '#64748b', display: 'flex', gap: '5px', alignItems: 'center'}}>
                 <CheckCircle2 size={16} color="#055C38" /> Autores: {pub.autores}
              </div>
            </div>

            <div>
              <button className="btn-primary" style={{background: '#032968', display: 'flex', flexDirection: 'column', gap: '5px', padding: '15px 20px', borderRadius: '20px'}}>
                <Download size={24}/>
                <span style={{fontSize: '0.8rem', fontWeight: 600}}>PDF</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
