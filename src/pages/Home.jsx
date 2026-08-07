import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PenTool, LineChart, Library, ArrowRight, Info, Target, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tallerImg from '../assets/taller.webp';
import { homeData } from '../data/homeData'; // <--- Lógica Zod integrada
import * as LucideIcons from "lucide-react";

import { OrgNode } from '../components/ui/OrgNode';
import { PilarCard } from '../components/ui/PilarCard';

export default function Home() {
  const navigate = useNavigate();
  const { hero, pilares, about, organigrama, seo } = homeData; // Datos extraídos y validados

  const navigateTo = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const colorMap = {
    'bg-orange-600': '#F06000',
    'bg-emerald-800': '#055C38',
    'bg-blue-900': '#032968'
  };

  return (
    <div className="main-container text-center">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://cip.cultura-t.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://cip.cultura-t.com/" />
        <meta property="og:image" content="https://cultura-t.com/wp-content/uploads/2025/08/cropped-Logo_CulturaT_color-scaled-1.webp" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* JSON-LD STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ResearchProject",
              "name": "Centro de Innovación y Productividad Cultura T",
              "alternateName": "CIP Cultura T",
              "url": "https://cip.cultura-t.com",
              "logo": "https://cultura-t.com/wp-content/uploads/2025/08/cropped-Logo_CulturaT_color-scaled-1.webp",
              "description": "${seo.description}",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Cultura T S.A.S.",
                "url": "https://cultura-t.com"
              },
              "knowsAbout": ["Turismo Sostenible", "Data Science", "Apropiación Social del Conocimiento", "Planificación Territorial"],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support"
              }
            }
          `}
        </script>
      </Helmet>

      {/* SEO H1 ESTRUCTURAL */}
      <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
        Centro de Innovación y Productividad Cultura T
      </h1>

      <div className="title-pill mb-6">{hero.pillText}</div>
      
      <h2 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1'}}>{hero.titlePrefix} <br/><span style={{color: '#F06000'}}>{hero.titleHighlight}</span></h2>
      <p style={{fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 3rem', fontFamily: 'Poppins'}}>
        {hero.subtitle}
      </p>

      {/* Imagen Real Orgánica */}
      <div style={{
        margin: '0 auto 4rem', 
        maxWidth: '900px', 
        height: '450px', 
        borderRadius: '30px 100px 30px 100px', 
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(5,92,56,0.15)',
        border: '4px solid white'
        }}>
        <img src={tallerImg} alt="Taller Comunitario" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>

      {/* 3 PILARES */}
      <h3 className="mb-8" style={{fontSize: '2.5rem'}}>Nuestros 3 Pilares</h3>

      <div className="grid-3" style={{marginBottom: '6rem'}}>
        {pilares.map((pilar) => {
          const IconComponent = LucideIcons[pilar.icon] || LucideIcons.HelpCircle;
          const hexColor = colorMap[pilar.color] || '#032968';
          
          return (
            <div key={pilar.id} className="glass-card" style={{padding: '2.5rem', textAlign: 'left'}}>
              <div className="icon-wrapper" style={{background: hexColor}}><IconComponent size={28}/></div>
              <h4 style={{fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968'}}>{pilar.title}</h4>
              <p style={{color: '#475569', marginBottom: '2rem', lineHeight: '1.6'}}>{pilar.description}</p>
              <a href={pilar.link} onClick={(e) => navigateTo(e, pilar.link)} className="btn-primary" style={pilar.color !== 'bg-orange-600' ? {background: hexColor} : {}}>
                {pilar.buttonText} <ArrowRight size={18}/>
              </a>
            </div>
          );
        })}
      </div>

      {/* SECCIÓN CULTURA T Y CIP - MOVIDA ABAJO */}
      <div className="grid-2" style={{textAlign: 'left', marginBottom: '5rem', alignItems: 'stretch'}}>
        <div className="glass-card" style={{padding: '3rem', display: 'flex', flexDirection: 'column'}}>
          <div className="icon-wrapper" style={{background: '#055C38', marginBottom: '1.5rem'}}>
            <Info size={32}/>
          </div>
          <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#055C38'}}>{about.empresa.title}</h3>
          
          {about.empresa.paragraphs.map((p, idx) => (
            <p key={idx} style={{color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem'}}>
              {p}
            </p>
          ))}
          
          <div style={{marginTop: 'auto', background: 'rgba(5, 92, 56, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(5, 92, 56, 0.2)'}}>
            <strong style={{color: '#055C38', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>{about.empresa.propositoTitle}</strong>
            <p style={{color: '#475569', lineHeight: '1.6', margin: 0}}>
              {about.empresa.proposito}
            </p>
          </div>
        </div>

        <div className="glass-card" style={{padding: '3rem', borderTop: '6px solid #F06000', display: 'flex', flexDirection: 'column'}}>
          <div className="icon-wrapper" style={{background: '#F06000', marginBottom: '1.5rem'}}>
            <Target size={32}/>
          </div>
          <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', color: '#032968'}}>{about.cip.title}</h3>
          <h4 style={{fontSize: '1.1rem', color: '#F06000', marginBottom: '1.5rem', fontWeight: '800'}}>{about.cip.subtitle}</h4>
          
          {about.cip.paragraphs.map((p, idx) => (
            <p key={idx} style={{color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem'}}>
              {p}
            </p>
          ))}
          
          <div style={{marginTop: 'auto', background: 'rgba(240, 96, 0, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(240, 96, 0, 0.2)'}}>
            <strong style={{color: '#F06000', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>{about.cip.misionTitle}</strong>
            <p style={{color: '#475569', lineHeight: '1.6', margin: 0}}>
              {about.cip.mision}
            </p>
          </div>
        </div>
      </div>

      {/* NUEVO ORGANIGRAMA UI */}
      <div style={{ marginTop: '3rem', padding: '4rem 2rem', background: 'rgba(255,255,255,0.6)', borderRadius: '40px', border: '1px solid rgba(5,92,56,0.1)' }}>
        <div style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#032968', color: 'white', padding: '10px 25px', borderRadius: '50px', marginBottom: '3rem'}}>
           <Network size={20} />
           <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'white', fontFamily: 'Poppins' }}>{organigrama.title}</h3>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          {/* RAÍZ */}
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <OrgNode node={organigrama.root} />
          </div>

          {/* DIVISIÓN MISIONAL Y APOYO */}
          <div className="grid-2" style={{ width: '100%', gap: '2rem', alignItems: 'stretch', textAlign:'left' }}>
            
            {/* ÁREA MISIONAL */}
            <div style={{ background: '#fff', borderRadius: '25px', padding: '2rem', border: '2px solid rgba(240, 96, 0, 0.2)', boxShadow: '0 10px 30px rgba(240, 96, 0, 0.05)' }}>
              <h3 style={{ color: '#F06000', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>{organigrama.misional.title}</h3>
              
              <OrgNode node={organigrama.misional.node}>
                 <div style={{ background: 'rgba(240,96,0,0.03)', border: '2px dashed rgba(240,96,0,0.3)', borderRadius: '15px', padding: '1.5rem' }}>
                   <p style={{ fontSize: '0.85rem', color: '#F06000', fontWeight: 'bold', textAlign: 'center', margin: '0 0 1.5rem 0', textTransform: 'uppercase' }}>
                     Núcleo Integrado: Sinergia Proyectos e Innovación
                   </p>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {organigrama.misional.subNodes && organigrama.misional.subNodes.map((child, idx) => (
                        <OrgNode key={idx} node={child} />
                      ))}
                   </div>
                 </div>
              </OrgNode>
            </div>

            {/* ÁREA DE APOYO */}
            <div style={{ background: '#fff', borderRadius: '25px', padding: '2rem', border: '2px solid rgba(5, 92, 56, 0.2)', boxShadow: '0 10px 30px rgba(5, 92, 56, 0.05)' }}>
              <h3 style={{ color: '#055C38', marginBottom: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>{organigrama.apoyo.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {organigrama.apoyo.nodes.map((child, idx) => (
                  <OrgNode key={idx} node={child} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
