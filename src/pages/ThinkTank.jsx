import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Library, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ThinkTank() {
  const publicaciones = [
    {
      tipo: "Metodología I+D+i",
      titulo: "Modelo de Apropiación y Fortalecimiento en Turismo Comunitario Regenerativo",
      autores: "Cultura T SAS",
      anio: "Noviembre 2024",
      desc: "Metodología estructurada de 11 fases operativas para intervenir ecosistemas locales y estructurar comercialmente rutas turísticas.",
      archivo: "/docs/M1_Modelo_Turismo_Comunitario.pdf",
      externo: false
    },
    {
      tipo: "Investigación Externa",
      titulo: "Resiliencia de Ecosistemas ante la Dinámica de Turismo Masivo",
      autores: "Universidad Nacional de Colombia, Grupo de Investigación Ambiental",
      anio: "Febrero 2025",
      desc: "Estudio longitudinal sobre la capacidad de carga turística en ecosistemas vulnerables y propuestas de mitigación climática.",
      archivo: "#",
      externo: true
    }
  ];

  return (
    <div className="main-container">
      <Helmet>
        <title>Centro de Pensamiento | Centro de Innovación y Productividad Cultura T</title>
        <meta name="description" content="Nuestra producción bibliográfica y documentos de investigación formal. Explora artículos, modelos de gestión y publicaciones del CIP." />
        <link rel="canonical" href="https://cip.cultura-t.com/#/centro-pensamiento" />
      </Helmet>

      <div className="title-pill mb-4"><Library size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> Publicaciones</div>
      <h2 style={{color: '#032968'}}>Centro de Pensamiento</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem'}}>
        Un ecosistema colaborativo y abierto. Aquí reside la producción bibliográfica y de investigación generada tanto por el CIP como por nuestros aliados académicos.
      </p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {publicaciones.map((pub, idx) => (
          <div key={idx} className="glass-card flex-responsive" style={{padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center'}}>
            
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
              <div style={{marginTop: '10px', fontSize: '0.9rem', color: pub.externo ? '#ea580c' : '#64748b', display: 'flex', gap: '5px', alignItems: 'center'}}>
                 <CheckCircle2 size={16} color={pub.externo ? "#ea580c" : "#055C38"} /> Autores: {pub.autores}
              </div>
            </div>

            <div>
              <a href={pub.archivo} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="btn-primary" style={{background: '#032968', display: 'flex', flexDirection: 'column', gap: '5px', padding: '15px 20px', borderRadius: '20px', cursor: 'pointer', border: 'none', color: 'white'}}>
                  <Download size={24}/>
                  <span style={{fontSize: '0.8rem', fontWeight: 600}}>Ver PDF</span>
                </button>
              </a>
            </div>

          </div>
        ))}
      </div>

      <div style={{marginTop: '4rem', padding: '3rem', background: 'linear-gradient(135deg, #032968 0%, #1e3a8a 100%)', borderRadius: '20px', color: 'white', textAlign: 'center'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '15px', color: 'white'}}>¿Tienes una investigación que compartir?</h3>
        <p style={{fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2rem auto'}}>
          El Centro de Pensamiento es un espacio abierto. Invitamos a la academia, investigadores y líderes del sector turismo a publicar sus modelos y artículos en nuestro repositorio institucional.
        </p>
        <button onClick={() => alert('Formulario de postulación en desarrollo...')} style={{background: '#10b981', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)'}}>
          Postular Publicación
        </button>
      </div>
    </div>
  );
}
