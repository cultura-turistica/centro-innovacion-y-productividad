import React from 'react';
import { Target, Utensils, Lightbulb, AlertTriangle, BookOpen, Info } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';
import PodcastPlayer from '../../../components/PodcastPlayer';

export default function Modulo1({ headerColor, headerGradient }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.2)',
          padding: '8px 15px', borderRadius: '20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <Info size={16} /> Metodología D+C+S de Swisscontact
        </div>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          El Corazón del Producto Turístico
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Comprende la estructura técnica de tu oferta para convertir un simple atractivo en un negocio rentable y memorable. 
          <br/><br/><i>Este curso está desarrollado siguiendo los lineamientos de la metodología "Destinos + Competitivos + Sostenibles (D+C+S)" de Swisscontact.</i>
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>

        <PodcastPlayer
          title="Del Recurso al Producto"
          subtitle="Audio Instructor"
          audioSrc="/audio/C2-M1.wav"
          transcript={<p>Hola de nuevo. Empecemos este curso derribando un mito muy común en el turismo: "Tenemos una cascada hermosa, eso significa que ya tenemos turismo". La realidad es que un paisaje bonito, una cascada o una montaña, es solo un recurso. Para que ese recurso se convierta en un producto turístico, necesita infraestructura: un sendero seguro para llegar, un baño limpio, un guía que cuente una historia interesante y un lugar donde almorzar.<br/><br/>El gran error de muchos destinos emergentes es promocionar sus recursos antes de tener los servicios listos. Eso solo atrae a visitantes que no dejan dinero en la comunidad y, peor aún, pueden terminar dañando el entorno natural. En este módulo, aprenderemos a dar ese salto: cómo tomar lo que la naturaleza o la cultura nos dio, y envolverlo en servicios de calidad para que realmente genere ingresos.</p>}
          color={headerColor || '#16A34A'}
        />

        {/* Ilustración de Internet */}
        <div style={{ marginBottom: '4rem', marginTop: '2rem', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Paisaje Turístico" 
            style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
          />
        </div>
        
        {/* Analogía: El Restaurante */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#16A34A' }}>
          <h4><Utensils size={28} /> La Analogía del Restaurante</h4>
          <p>
            Imagina que vas a abrir un restaurante. Tienes un local bonito (la infraestructura del municipio) y tienes sillas y mesas (los operadores locales). Pero si alguien te pregunta <strong>¿qué vendes?</strong>, no respondes "vendo sillas". Respondes "vendo una cazuela de mariscos espectacular".
          </p>
          <p>
            En el turismo pasa igual: no vendemos "un río" o "una montaña". El río es solo la mesa. <strong>Vendemos el plato servido</strong>: un recorrido interpretativo guiado, seguro, con alimentación y una historia profunda.
          </p>
        </div>

        {/* Diferencia interactiva */}
        <h3 className="mb-6 text-center" style={{ color: headerColor || '#16A34A' }}>¿Producto o Experiencia?</h3>
        
        <div className="grid-2 mb-10" style={{ gap: '2rem' }}>
          <FlipPillarCard 
            icon={Target}
            title="El Producto"
            subtitle="Lo que el turista compra"
            content="<ul><li>Es tangible y técnico.</li><li>Se puede costear en Excel.</li><li>Es la cama, el transporte, el almuerzo y la boleta de entrada.</li><li>Satisface una necesidad básica (dormir, comer, moverse).</li></ul>"
            color="#2563eb"
            bg="#eff6ff"
          />
          <FlipPillarCard 
            icon={Lightbulb}
            title="La Experiencia"
            subtitle="Lo que el turista recuerda"
            content="<ul><li>Es intangible y emocional.</li><li>Es la <b>historia</b> que le cuentas al visitante.</li><li>Es cómo se sintió al escuchar el sonido de las aves, o la conexión con la anfitriona.</li><li>Satisface el <b>corazón</b>.</li></ul>"
            color="#d97706"
            bg="#fef3c7"
          />
        </div>

        {/* Error Común */}
        <div style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', marginBottom: '3rem' }}>
          <div style={{ color: '#ea580c' }}><AlertTriangle size={40} /></div>
          <div>
            <h4 style={{ color: '#9a3412', fontWeight: 800, marginBottom: '0.5rem' }}>⚠️ Error Común: "El Árbol Bonito"</h4>
            <p style={{ color: '#9a3412', fontSize: '1rem', margin: 0 }}>
              Creer que porque tu vereda tiene un árbol muy bonito o un mirador, ya tienes turismo. Un árbol bonito es un <strong>recurso</strong>, no un producto. Se convierte en producto cuando organizas cómo llegar, quién guiará, qué comerá el turista y cuánto cuesta ese paquete.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
