import React from 'react';
import { FileText, Megaphone, Users, UserCheck, Smile, Frown, CheckCircle, ClipboardList } from 'lucide-react';
import FlipPillarCard from '../../../components/FlipPillarCard';
import afroAvatar from '../../../assets/avatars/afro.svg';
import hipsterAvatar from '../../../assets/avatars/hipster.svg';
import oldmanAvatar from '../../../assets/avatars/oldman.svg';
import tryoutAvatar from '../../../assets/avatars/tryout.svg';

export default function Modulo6({ headerColor, headerGradient }) {
  return (
    <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{
        background: headerGradient || 'linear-gradient(135deg, #c026d3 0%, #701a75 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>
          Ficha de Producto y Validación
        </h3>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
          Empaqueta tu experiencia y ponla a prueba antes de gastar un solo peso en publicidad.
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem' }}>
        
        {/* Ilustración Vectorial Profesional (Estilo Lápiz/Hand-drawn) */}
        <div style={{ marginTop: '-1.5rem', marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="https://illustrations.popsy.co/purple/product-launch.svg" 
            alt="Lanzamiento de producto y validación" 
            style={{ width: '100%', maxWidth: '500px', height: 'auto', dropShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>

        {/* Analogía */}
        <div className="theory-block" style={{ borderLeftColor: headerColor || '#c026d3', marginBottom: '4rem', marginTop: '2rem' }}>
          <h4><Users size={28} /> La Analogía del Ensayo General</h4>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Imagina que un teatro (tu destino turístico) abre sus puertas el día del estreno sin haber hecho un ensayo general con vestuario. Lo más probable es que los actores olviden sus líneas y los reflectores fallen.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            En turismo, la <strong>Validación en el mercado</strong> es tu ensayo general. No se trata de "vender", sino de invitar a tu público objetivo (o a operadores turísticos) a vivir la experiencia gratis para que critiquen duramente y puedas corregir errores antes del lanzamiento oficial.
          </p>
        </div>

        {/* Ficha de Producto - Caso Práctico */}
        <div style={{ background: 'white', borderRadius: '30px', padding: '3rem', border: '2px solid #e9d5ff', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', marginBottom: '4rem' }}>
          <h4 style={{ color: '#86198f', fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={32} /> La Ficha de Producto (Caso: Ruta del Cacao)
          </h4>
          <p style={{ color: '#701a75', fontSize: '1.15rem', marginBottom: '2.5rem', borderBottom: '2px solid #f3e8ff', paddingBottom: '2rem' }}>
            En lugar de teoría, veamos cómo se ve una Ficha de Producto real. Este es el "Acta de Nacimiento" de tu experiencia, el documento maestro que usarás para salir a vender.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Columna Izquierda */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Nombre de la Experiencia:</strong>
                <div style={{ background: '#faf5ff', padding: '15px 20px', borderRadius: '15px', color: '#4a044e', fontWeight: 600, fontSize: '1.1rem', border: '1px solid #f3e8ff' }}>
                  Ruta del Cacao Ancestral
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Promesa de Valor:</strong>
                <div style={{ background: '#faf5ff', padding: '15px 20px', borderRadius: '15px', color: '#4a044e', border: '1px solid #f3e8ff', lineHeight: 1.6 }}>
                  Conviértete en cacaotero por un día, cosecha con campesinos locales y prepara tu propio chocolate desde la semilla.
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Perfil del Turista (Buyer Persona):</strong>
                <div style={{ background: '#faf5ff', padding: '15px 20px', borderRadius: '15px', color: '#4a044e', border: '1px solid #f3e8ff' }}>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 1.7 }}>
                    <li>Familias urbanas con niños (8-15 años).</li>
                    <li>Buscan actividades educativas y seguras en la naturaleza.</li>
                    <li>Presupuesto medio-alto.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna Derecha */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Inventario de Brechas (Resueltas):</strong>
                <div style={{ background: '#fff1f2', padding: '15px 20px', borderRadius: '15px', color: '#be123c', border: '1px solid #ffe4e6' }}>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: 1.7 }}>
                    <li>Falta baño cerca al cultivo → <strong>Se instaló baño ecológico.</strong></li>
                    <li>Mosquitos molestos → <strong>Se incluye repelente orgánico en el kit.</strong></li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Mapeo de Actores Clave:</strong>
                <div style={{ background: '#faf5ff', padding: '15px 20px', borderRadius: '15px', color: '#4a044e', border: '1px solid #f3e8ff', lineHeight: 1.6 }}>
                  Don José (Guía Finca), Doña Marta (Almuerzo típico), Transportes El Rápido (Logística).
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#c026d3', display: 'block', marginBottom: '8px', fontSize: '1.1rem' }}>Canales de Comercialización:</strong>
                <div style={{ background: '#faf5ff', padding: '15px 20px', borderRadius: '15px', color: '#4a044e', border: '1px solid #f3e8ff', lineHeight: 1.6 }}>
                  Instagram Ads (enfocado a madres), Agencias especializadas en turismo familiar.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Protocolo de Validación */}
        <div style={{ background: '#fdf4ff', border: '2px solid #fbcfe8', borderRadius: '30px', padding: '3rem', marginBottom: '4rem' }}>
          <h4 style={{ color: '#be185d', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ClipboardList size={28} /> Protocolo de Validación: Paso a Paso
          </h4>
          <p style={{ color: '#9d174d', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Sigue este protocolo estándar para que tus sesiones de validación (ya sea Focus Group o Try-Out) arrojen datos útiles y no solo cumplidos de amigos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid #ec4899', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
              <h5 style={{ color: '#db2777', fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Selección Honesta del Perfil</h5>
              <p style={{ color: '#831843', margin: 0 }}>Invita únicamente a personas que coincidan con tu Buyer Persona. Evita familiares o amigos cercanos que sesguen las respuestas.</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid #d946ef', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
              <h5 style={{ color: '#c026d3', fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Exposición Neutra</h5>
              <p style={{ color: '#4a044e', margin: 0 }}>Muestra el Storyboard o realiza el recorrido sin "vender" la idea ni justificar los errores. Deja que ellos experimenten el producto tal cual es.</p>
            </div>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid #a855f7', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
              <h5 style={{ color: '#9333ea', fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Recolección Estructurada de Feedback</h5>
              <p style={{ color: '#4c1d95', margin: 0 }}>Usa preguntas abiertas pero específicas: "¿Qué fue lo más frustrante?", "¿En qué momento te sentiste inseguro?", "¿Qué le falta a esta experiencia para que pagues por ella?".</p>
            </div>
          </div>
        </div>

        {/* Instrumentos de Validación */}
        <h3 className="mb-8 text-center" style={{ color: headerColor || '#c026d3', fontSize: '2rem' }}>Técnicas de Validación (Ensayo General)</h3>
        
        <div className="grid-2 mb-10" style={{ gap: '3rem', marginBottom: '5rem' }}>
          {/* Tarjeta Try-Out (Avatar de Dicebear) */}
          <div style={{ background: '#fce7f3', border: '3px solid #fbcfe8', borderRadius: '30px', padding: '3rem 2rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover-scale">
            <img src={tryoutAvatar} alt="Try Out" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1.5rem auto', boxShadow: '0 10px 20px rgba(219,39,119,0.3)', border: '4px solid white' }} />
            <h4 style={{ color: '#9d174d', fontSize: '1.6rem', marginBottom: '1rem' }}>Try-Out (Visita Física)</h4>
            <p style={{ color: '#be185d', fontWeight: 'bold', marginBottom: '1.5rem' }}>La prueba de fuego en campo</p>
            <ul style={{ textAlign: 'left', color: '#831843', fontSize: '1.05rem', lineHeight: 1.8, background: 'white', padding: '1.5rem', borderRadius: '15px' }}>
              <li style={{ marginBottom: '10px' }}>Se invita a clientes reales a hacer el recorrido físicamente.</li>
              <li style={{ marginBottom: '10px' }}>Evalúan el estado de vías, atención y narrativa.</li>
              <li>Llenan una encuesta de calidad al final de la experiencia.</li>
            </ul>
          </div>

          {/* Tarjeta Focus Group (Caritas grupales - 3 personas diversas) */}
          <div style={{ background: '#f3e8ff', border: '3px solid #e9d5ff', borderRadius: '30px', padding: '3rem 2rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover-scale">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src={oldmanAvatar} alt="Persona Mayor" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', zIndex: 1, boxShadow: '-5px 10px 20px rgba(147,51,234,0.2)' }} />
              <img src={afroAvatar} alt="Persona Afro" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', marginLeft: '-25px', zIndex: 2, boxShadow: '0 10px 20px rgba(147,51,234,0.3)' }} />
              <img src={hipsterAvatar} alt="Persona Hipster" style={{ width: '90px', height: '90px', borderRadius: '50%', border: '4px solid white', marginLeft: '-25px', zIndex: 3, boxShadow: '5px 10px 20px rgba(147,51,234,0.2)' }} />
            </div>
            <h4 style={{ color: '#581c87', fontSize: '1.6rem', marginBottom: '1rem' }}>Focus Group</h4>
            <p style={{ color: '#7e22ce', fontWeight: 'bold', marginBottom: '1.5rem' }}>Validación grupal en sala</p>
            <ul style={{ textAlign: 'left', color: '#4c1d95', fontSize: '1.05rem', lineHeight: 1.8, background: 'white', padding: '1.5rem', borderRadius: '15px' }}>
              <li style={{ marginBottom: '10px' }}>Reunión presencial o virtual con varias personas del target.</li>
              <li style={{ marginBottom: '10px' }}>Se expone la experiencia con fotos/videos y el Storyboard.</li>
              <li>Se debate en grupo, se piden críticas y se proponen mejoras.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
