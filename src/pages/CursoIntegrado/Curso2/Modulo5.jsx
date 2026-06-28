import React from 'react';
import { UserCircle, Compass, Heart, MessageSquare, ListChecks, Info, Search, AlertTriangle } from 'lucide-react';

export default function Modulo5() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Conoce a tu visitante mejor que él mismo"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          No diseñamos para todos, diseñamos para ALGUIEN. Aprende a construir tu Buyer Persona Turístico.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Qué es un Buyer Persona */}
        <div className="glass-card mb-10" style={{padding: '2.5rem', borderLeft: '8px solid #3b82f6'}}>
          <h4 style={{color: '#1e40af', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <UserCircle size={24} /> El Buyer Persona Turístico
          </h4>
          <p style={{fontSize: '1.1rem', color: '#1e293b'}}>
            Es una representación ficticia pero realista de tu visitante ideal. Nos ayuda a entender profundamente sus sentimientos y motivos de viaje, mucho más allá de su edad o lugar de origen.
          </p>
        </div>

        {/* Componentes del Perfil Grid */}
        <div className="grid-2 mb-10">
          <div className="glass-card" style={{padding: '1.5rem', background: '#f8fafc'}}>
            <h5 style={{color: '#1e40af', marginBottom: '1rem'}}><Search size={18} inline style={{marginRight: '8px'}}/> Perfil Demográfico</h5>
            <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#475569'}}>
              <li>• Edad, género e ingresos.</li>
              <li>• Educación y ocupación.</li>
              <li>• Origen (Nacional o Internacional).</li>
            </ul>
          </div>
          <div className="glass-card" style={{padding: '1.5rem', background: '#f8fafc'}}>
            <h5 style={{color: '#1e40af', marginBottom: '1rem'}}><Heart size={18} inline style={{marginRight: '8px'}}/> Perfil Psicográfico</h5>
            <ul style={{listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#475569'}}>
              <li>• Valores e intereses.</li>
              <li>• Estilo de vida (Aventurero, Familiar, Lujo).</li>
              <li>• Motivaciones profundas.</li>
            </ul>
          </div>
        </div>

        {/* Case Study: María la Exploradora */}
        <div style={{background: '#eff6ff', padding: '3rem', borderRadius: '30px', border: '2px solid #3b82f6', marginBottom: '3rem'}}>
           <div style={{display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap'}}>
              <div style={{background: 'white', padding: '10px', borderRadius: '50%', border: '4px solid #3b82f6'}}>
                <UserCircle size={80} color="#3b82f6" />
              </div>
              <div>
                <h4 style={{color: '#1e40af', fontSize: '1.8rem', marginBottom: '0.5rem'}}>Caso: "María la Exploradora"</h4>
                <div style={{background: '#3b82f6', color: 'white', padding: '2px 15px', borderRadius: '100px', fontSize: '0.8rem', display: 'inline-block'}}>Mochilera Internacional</div>
              </div>
           </div>
           
           <div className="grid-2 mt-8" style={{gap: '2rem'}}>
              <div>
                 <p style={{fontSize: '1rem', color: '#1e3a8a'}}><strong>Perfil:</strong> 28 años, alemana, diseñadora. Valora la autenticidad sobre el lujo.</p>
                 <ul style={{marginTop: '1rem', fontSize: '0.95rem', color: '#1e3a8a'}}>
                    <li>✅ Prefiere eco-lodges y WiFi esencial.</li>
                    <li>✅ Busca comida local y opciones vegetarianas.</li>
                    <li>✅ Evita tours masivos y muy estructurados.</li>
                 </ul>
              </div>
              <div className="glass-card" style={{background: 'white', padding: '1.5rem'}}>
                 <h5 style={{color: '#1e40af', marginBottom: '1rem'}}>Hábitos de Consumo</h5>
                 <p style={{fontSize: '0.9rem'}}>Investiga en blogs e Instagram. Gasta entre $80-120 USD diarios. Viaja sola o en pareja.</p>
              </div>
           </div>
        </div>

        {/* Mapa de Empatía Table */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>Mapa de Empatía</h3>
        <div className="glass-card mb-10" style={{padding: 0, overflow: 'hidden'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f8fafc'}}>
              <tr>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Dimensión</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Qué buscamos entender</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>¿Qué ve?</td>
                <td style={{padding: '1.2rem'}}>Su entorno, amigos y oferta del mercado.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>¿Qué oye?</td>
                <td style={{padding: '1.2rem'}}>Lo que dicen influencers, familia y amigos.</td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}>¿Qué piensa y siente?</td>
                <td style={{padding: '1.2rem'}}>Sus sueños, miedos y preocupaciones reales.</td>
              </tr>
              <tr>
                <td style={{padding: '1.2rem', fontWeight: 800}}>Dolores y Ganancias</td>
                <td style={{padding: '1.2rem'}}>Frustraciones a evitar y éxitos que desea lograr.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Error Común Alert */}
        <div style={{background: '#fee2e2', border: '2px solid #ef4444', borderRadius: '25px', padding: '2rem', display: 'flex', gap: '20px', marginBottom: '3rem'}}>
           <div style={{color: '#b91c1c'}}><AlertTriangle size={40}/></div>
           <div>
              <h4 style={{color: '#991b1b', fontWeight: 800, marginBottom: '0.5rem'}}>⚠️ ¡No seas genérico!</h4>
              <p style={{color: '#991b1b', fontSize: '1rem'}}>
                Decir "Turistas de 30 a 50 años" es inútil. Es mejor diseñar para "María la Exploradora" que para una estadística. La especificidad vende.
              </p>
           </div>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#1e3a8a', color: 'white'}}>
           <h4 style={{color: '#3b82f6', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Creación de Tu Buyer Persona
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Asigna un nombre y busca una foto que represente a tu visitante ideal.",
                "Define su edad, origen, ocupación e ingresos.",
                "Describe su personalidad y valores (mínimo 5 características).",
                "Detalla sus hábitos de viaje (frecuencia, presupuesto, planificación).",
                "Completa las 4 áreas del mapa de empatía.",
                "Define sus condiciones de consumo (¿Qué espera encontrar en tu destino?)"
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#3b82f6', color: 'white', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
