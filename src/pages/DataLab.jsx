import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Map as MapIcon, Database, BrainCircuit, LineChart, Leaf, ArrowRight, Globe2 } from 'lucide-react';
import './DataLab.css';

export default function DataLab() {
  const navigate = useNavigate();

  const subprojects = [
    {
      id: "sae-colombia",
      title: "Radiografía de lo Inobservado",
      subtitle: "IA para Estimación de Pobreza",
      desc: "Cruzamos microdatos del DANE con pixeles satelitales empíricos para inferir bayesianamente las vulnerabilidades del territorio a nivel municipal.",
      icon: <MapIcon size={32} strokeWidth={1.5} />,
      accent: "#F06000",
      status: "active"
    },
    {
      id: "fontur-analysis",
      title: "Gasto Público Turístico",
      subtitle: "Finanzas y Riesgos FONTUR",
      desc: "Análisis transversal de la dinámica de contratación (2021-2024), detectando las modalidades financieras predominantes y riesgos.",
      icon: <LineChart size={32} strokeWidth={1.5} />,
      accent: "#055C38",
      status: "active"
    },
    {
      id: "prosperidad",
      title: "Conservación Ecosistémica",
      subtitle: "La Prosperidad (Tolima)",
      desc: "Monitoreo satelital mensual y preservación del Bosque Seco Tropical evaluando la resiliencia ante la ganadería adaptativa.",
      icon: <Leaf size={32} strokeWidth={1.5} />,
      accent: "#032968",
      status: "active"
    },
    {
      id: "co2-live",
      title: "Carbono y Clase",
      subtitle: "La Gran Asfixia",
      desc: "Auditoría macroeconómica sobre la hegemonía global de emisiones. Una disección visual de la deuda climática, el calentamiento (CO2 vs CH4), y la brutal desigualdad estructural 'Per Cápita'.",
      icon: <Globe2 size={32} strokeWidth={1.5} />,
      accent: "#10b981",
      status: "active"
    },
    {
      id: "redatam-geo",
      title: "Migración REDATAM",
      subtitle: "Cartografía Social",
      desc: "Próximamente: Análisis poblacional usando la arquitectura CEPAL para entender flujos de turismo interurbano.",
      icon: <Database size={32} strokeWidth={1.5} />,
      accent: "#64748b",
      status: "dev"
    },
    {
      id: "nlp-review",
      title: "Análisis de Sentimiento",
      subtitle: "Machine Learning (NLP)",
      desc: "Próximamente: Modelos de lenguaje procesando reseñas de usuarios para medir la reputación de los ecosistemas turísticos.",
      icon: <BrainCircuit size={32} strokeWidth={1.5} />,
      accent: "#64748b",
      status: "dev"
    }
  ];

  return (
    <div className="dl-catalog-container">
      <div className="dl-hero">
        <div className="dl-badge">
          <BarChart3 size={16} /> 
          <span>DataLab</span>
        </div>
        <h1 className="dl-title">Inteligencia <span>Territorial</span></h1>
        <p className="dl-subtitle">
          Explora nuestras investigaciones académicas. Utilizamos ciencia de datos, estadística bayesiana y análisis espacial para transformar millones de registros en narrativas de alto impacto.
        </p>
      </div>

      <div className="dl-grid">
        {subprojects.map((proj) => (
          <div 
            key={proj.id} 
            className={`dl-card ${proj.status === 'dev' ? 'dl-card-disabled' : ''}`}
            style={{ '--accent-color': proj.accent }}
            onClick={() => {
              if (proj.status === 'dev') return;
              if (proj.id === "sae-colombia") navigate("/laboratorio-datos/proyecto-sae");
              else if (proj.id === "fontur-analysis") navigate("/laboratorio-datos/proyecto-fontur");
              else if (proj.id === "prosperidad") navigate("/laboratorio-datos/proyecto-prosperidad");
              else if (proj.id === "co2-live") navigate("/laboratorio-datos/proyecto-co2");
            }}
          >
            <div className="dl-card-content">
              <div className="dl-card-header">
                <div className="dl-icon-wrapper" style={{ background: `${proj.accent}15`, color: proj.accent }}>
                  {proj.icon}
                </div>
                <div className={`dl-status-badge ${proj.status}`}>
                  {proj.status === 'active' ? 'Explorar' : 'En Desarrollo'}
                </div>
              </div>

              <h3>{proj.title}</h3>
              <h4>{proj.subtitle}</h4>
              <p>{proj.desc}</p>

              {proj.status === 'active' ? (
                <div className="dl-card-action">
                  <span>Ver Investigación</span>
                  <ArrowRight size={18} />
                </div>
              ) : (
                <div className="dl-card-action disabled">
                  <span>Próximamente</span>
                </div>
              )}
            </div>
            <div className="dl-card-border" style={{ background: proj.accent }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
