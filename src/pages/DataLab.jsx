import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Map as MapIcon, Database, BrainCircuit } from 'lucide-react';

export default function DataLab() {
  const navigate = useNavigate();

  const subprojects = [
    {
      id: "sae-colombia",
      title: "Radiografía de lo Inobservado",
      subtitle: "IA para Estimación de Pobreza",
      desc: "Cruzamos microdatos del DANE con pixeles satelitales empíricos para inferir bayesianamente las vulnerabilidades del territorio a nivel municipal.",
      icon: <MapIcon size={32} />
    },
    {
      id: "redatam-geo",
      title: "Migración REDATAM",
      subtitle: "Cartografía Social",
      desc: "Próximamente: Análisis poblacional usando la arquitectura CEPAL para entender flujos de turismo interurbano.",
      icon: <Database size={32} />
    },
    {
      id: "nlp-review",
      title: "Análisis de Sentimiento",
      subtitle: "Machine Learning (NLP)",
      desc: "Próximamente: Modelos de lenguaje procesando reseñas de usuarios para medir la reputación de los ecosistemas turísticos.",
      icon: <BrainCircuit size={32} />
    }
  ];

  return (
    <div className="main-container">
      <div className="title-pill mb-4">
        <BarChart3 size={16} style={{display:'inline-block', verticalAlign:'middle', marginRight:'5px'}}/> 
        Catálogo DataLab
      </div>
      
      <h2 style={{fontFamily: 'Poppins'}}>Subproyectos Analíticos</h2>
      <p style={{fontSize: '1.2rem', color: '#475569', maxWidth: '800px', marginBottom: '3rem', fontFamily: 'Poppins'}}>
        Bienvenidos al centro de inteligencia de Cultura T. Explora nuestras investigaciones interactivas y scrollytelling en temas estructurales de turismo comunitario y estadística.
      </p>

      <div className="grid-3">
        {subprojects.map((proj) => (
          <div 
            key={proj.id} 
            className="flip-card"
            onClick={() => proj.id === "sae-colombia" ? navigate("/laboratorio-datos/proyecto-sae") : alert("Este proyecto estará disponible pronto.")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ borderColor: '#032968' }}>
                <div style={{ color: '#F06000', marginBottom: '1rem' }}>
                  {proj.icon}
                </div>
                <h3 style={{ color: '#032968', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ color: '#475569', fontWeight: 'bold' }}>{proj.subtitle}</p>
              </div>
              <div className="flip-card-back" style={{ backgroundColor: '#032968', borderColor: '#032968' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Poppins' }}>Objetivo</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{proj.desc}</p>
                <div style={{ marginTop: '1.5rem', padding: '5px 15px', border: '1px solid white', borderRadius: '50px', fontSize:'0.8rem' }}>
                   {proj.id === "sae-colombia" ? "► EXPLORAR MAPA" : "En Desarrollo..."}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
