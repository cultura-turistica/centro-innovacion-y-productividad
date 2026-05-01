import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      desc: "Próximamente: Análisis transversal de la dinámica de contratación (2021-2024), detectando modalidades financieras y riesgos.",
      icon: <LineChart size={32} strokeWidth={1.5} />,
      accent: "#055C38",
      status: "dev"
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

  const groupedProjects = [
    {
      theme: "Sostenibilidad y Medio Ambiente",
      description: "Análisis del impacto ecológico, huella de carbono y resiliencia de los ecosistemas territoriales.",
      projects: subprojects.filter(p => ["co2-live", "prosperidad"].includes(p.id))
    },
    {
      theme: "Desarrollo Social y Territorio",
      description: "Modelos demográficos y estimación de pobreza para entender las vulnerabilidades y dinámicas sociales en Colombia.",
      projects: subprojects.filter(p => ["sae-colombia", "redatam-geo"].includes(p.id))
    },
    {
      theme: "Economía y Tecnología",
      description: "Auditorías financieras y uso de machine learning para medir la percepción y gestión del gasto público turístico.",
      projects: subprojects.filter(p => ["fontur-analysis", "nlp-review"].includes(p.id))
    }
  ];

  const [activeTab, setActiveTab] = useState("Todos");
  const tabs = ["Todos", "Sostenibilidad y Medio Ambiente", "Desarrollo Social y Territorio", "Economía y Tecnología"];

  const filteredGroups = activeTab === "Todos" 
    ? groupedProjects 
    : groupedProjects.filter(g => g.theme === activeTab);

  return (
    <div className="dl-catalog-container">
      <Helmet>
        <title>Laboratorio de Datos | Centro de Innovación y Productividad Cultura T</title>
        <meta name="description" content="Auditorías en tiempo real y ciencia de datos aplicada al territorio. Explora mapas interactivos de pobreza (SAE), huella de carbono y bases de datos dinámicas." />
        <link rel="canonical" href="https://cip.cultura-t.com/#/laboratorio-datos" />
      </Helmet>
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

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem 2rem'}}>
        
        {/* Category Tabs */}
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center'}}>
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px', 
                borderRadius: '50px', 
                border: activeTab === tab ? 'none' : '1px solid #cbd5e1',
                background: activeTab === tab ? '#032968' : 'white',
                color: activeTab === tab ? 'white' : '#475569',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                boxShadow: activeTab === tab ? '0 4px 6px -1px rgba(3, 41, 104, 0.3)' : 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {filteredGroups.map((group, idx) => (
          <div key={idx} style={{marginBottom: '4rem'}}>
            <div style={{marginBottom: '2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem'}}>
              <h2 style={{color: '#032968', fontSize: '1.8rem', margin: 0}}>{group.theme}</h2>
              <p style={{color: '#475569', fontSize: '1.1rem', margin: '0.5rem 0 0 0'}}>{group.description}</p>
            </div>
            
            <div className="dl-grid">
              {group.projects.map((proj) => (
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
        ))}
      </div>
    </div>
  );
}
