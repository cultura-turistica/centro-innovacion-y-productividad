import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Zap, 
  Split, 
  FlaskConical, 
  RefreshCw, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Briefcase
} from 'lucide-react';

const StepCard = ({ number, title, icon: Icon, description, color, items }) => (
  <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
    <div style={{ 
      position: 'absolute', 
      top: '-10px', 
      right: '-10px', 
      fontSize: '5rem', 
      fontWeight: '900', 
      color: `${color}10`, 
      zIndex: 0 
    }}>
      {number}
    </div>
    <div className="icon-wrapper" style={{ background: color, position: 'relative', zIndex: 1 }}>
      <Icon size={28} />
    </div>
    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#032968', position: 'relative', zIndex: 1 }}>
      {title}
    </h4>
    <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
      {description}
    </p>
    {items && (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, position: 'relative', zIndex: 1 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.95rem', color: '#64748b' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function MetodologiaExperiencias() {
  return (
    <div className="main-container">
      <Helmet>
        <title>Metodología de Micro-Experiencias | CIP Cultura T</title>
        <meta name="description" content="Diseño de experiencias para organizaciones privadas basadas en agilidad y enfoque sensorial." />
      </Helmet>

      <div className="text-center mb-12">
        <div className="title-pill mb-6">Enfoque Empresarial & Ágil</div>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
          De Productos a <br />
          <span style={{ color: '#F06000' }}>Micro-Experiencias</span>
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '800px', margin: '2rem auto', fontFamily: 'Poppins' }}>
          Las organizaciones privadas no solo venden camas, traslados o platos; diseñan los estímulos que el cliente recordará para siempre.
        </p>
      </div>

      {/* Insight del Usuario: Macro vs Micro */}
      <div className="grid-2 mb-12" style={{ background: 'rgba(3, 41, 104, 0.03)', padding: '3rem', borderRadius: '40px', border: '1px solid rgba(3, 41, 104, 0.05)' }}>
        <div>
          <h3 style={{ color: '#032968' }}>La Brecha Crítica: <br />Macro vs Micro</h3>
          <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Mientras el territorio ofrece la <strong>Macro-experiencia</strong> (el paisaje, el patrimonio, la ruta), el sector privado es el dueño de las <strong>Micro-experiencias</strong>.
          </p>
          <p style={{ color: '#475569', lineHeight: '1.8' }}>
            El 80% del tiempo de un turista se vive en servicios privados. Si el hotel se limita a ser "una cama" o el transporte un "traslado funcional", la promesa del destino se rompe. 
            <span style={{ color: '#F06000', fontWeight: '700' }}> La micro-experiencia es el vehículo real de la memoria.</span>
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '6px solid #055C38' }}>
            <Compass size={40} color="#055C38" />
            <div>
              <h4 style={{ margin: 0, color: '#055C38' }}>Macro-Experiencia</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Territorio, activos públicos y paisaje.</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', borderLeft: '6px solid #F06000' }}>
            <Sparkles size={40} color="#F06000" />
            <div>
              <h4 style={{ margin: 0, color: '#F06000' }}>Micro-Experiencia</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Hoteles, transporte y servicios privados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Los 6 Pasos */}
      <div className="grid-3" style={{ marginBottom: '5rem' }}>
        <StepCard 
          number="01"
          title="Jobs-to-be-Done"
          icon={Users}
          color="#F06000"
          description="Entender qué 'contrata' el cliente. No compra un hotel; contrata estatus, descanso o seguridad emocional."
          items={['Empatía profunda', 'Necesidades funcionales', 'Dimensiones sociales']}
        />
        <StepCard 
          number="02"
          title="Value Proposition"
          icon={Zap}
          color="#055C38"
          description="Alineación estratégica. Diseñar atributos que actúen como minimizadores de dolor o amplificadores de deleite."
          items={['Puntos de dolor', 'Puntos de deleite', 'Encaje producto-mercado']}
        />
        <StepCard 
          number="03"
          title="Dual-Track Agile"
          icon={Split}
          color="#032968"
          description="Descubrimiento continuo paralelo a la implementación. Investigar ideas mientras se construye la solución."
          items={['Discovery constante', 'Delivery técnico', 'Iteración rápida']}
        />
        <StepCard 
          number="04"
          title="Experimentación"
          icon={FlaskConical}
          color="#F06000"
          description="Aprender fallando barato. De la idea al MVP real validando cada paso con el cliente."
          items={['Prueba de concepto', 'Prototipos & Pilotos', 'Producto Mínimo Viable']}
        />
        <StepCard 
          number="05"
          title="Sense & Respond"
          icon={RefreshCw}
          color="#055C38"
          description="El producto es un ciclo vivo. Medir datos reales y escuchar al usuario para optimizar la funcionalidad."
          items={['Medición de datos', 'Escucha activa', 'Nuevas funcionalidades']}
        />
        <StepCard 
          number="06"
          title="Escalabilidad"
          icon={BarChart3}
          color="#032968"
          description="Viabilidad operativa y financiera. Organizar la solución bajo el Business Model Canvas para escalar."
          items={['Estructura financiera', 'Modelo de negocio', 'Crecimiento comercial']}
        />
      </div>

      {/* Conclusión / Cierre */}
      <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', background: '#032968', color: 'white' }}>
        <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>¿Listo para diseñar tu Micro-Experiencia?</h3>
        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
          No dejes que el azar determine el recuerdo de tu cliente. Aplica metodologías de innovación para dominar cada momento de verdad.
        </p>
        <button className="btn-primary" style={{ background: '#F06000', border: 'none' }}>
          Comenzar Diagnóstico <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
