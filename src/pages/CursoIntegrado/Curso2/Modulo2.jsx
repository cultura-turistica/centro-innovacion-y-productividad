import React from 'react';
import { Map, Activity, Users, ShieldCheck, Microscope, Info } from 'lucide-react';

export default function Modulo2() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #055C38 0%, #166534 100%)',
        padding: '3rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.2rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "El destino es el escenario donde ocurre la magia"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Aprende a diagnosticar la salud de tu territorio y a proyectar su crecimiento sin destruir lo que lo hace único.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Componentes del Destino */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>¿De qué está hecho un Destino?</h3>
        <div className="grid-3 mb-10">
          <div className="glass-card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <div style={{background: '#dcfce7', color: '#166534', width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Map size={30} />
            </div>
            <h4 style={{color: '#166534', marginBottom: '0.5rem'}}>Atractivos</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Lo que motiva el viaje (cascadas, historias, cultura).</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <div style={{background: '#eff6ff', color: '#1e40af', width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Activity size={30} />
            </div>
            <h4 style={{color: '#1e40af', marginBottom: '0.5rem'}}>Infraestructura</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Servicios básicos, vías y conectividad digital.</p>
          </div>
          <div className="glass-card" style={{padding: '1.5rem', textAlign: 'center'}}>
            <div style={{background: '#fef3c7', color: '#92400e', width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Users size={30} />
            </div>
            <h4 style={{color: '#92400e', marginBottom: '0.5rem'}}>Comunidad</h4>
            <p style={{fontSize: '0.9rem', color: '#475569'}}>Los anfitriones y gestores del territorio.</p>
          </div>
        </div>

        {/* Butler Model (Lifecycle) */}
        <div className="glass-card mb-10" style={{padding: '3rem', background: '#032968', color: 'white'}}>
           <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem'}}>
             <Microscope size={40} color="#fde047" />
             <h3 style={{color: 'white', margin: 0}}>Modelo de Butler: Ciclo de Vida</h3>
           </div>
           <p style={{marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.9}}>
             Los destinos no son estáticos; nacen, crecen y se transforman. ¿Sabes en qué etapa está el tuyo?
           </p>
           
           <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {[
                { stage: "Exploración", desc: "Pocos turistas, sin infraestructura. Naturaleza virgen.", color: "#86efac" },
                { stage: "Implicación", desc: "La comunidad empieza a prestar servicios básicos.", color: "#4ade80" },
                { stage: "Desarrollo", desc: "Inversión externa, publicidad masiva. El destino despega.", color: "#22c55e" },
                { stage: "Consolidación", desc: "Número de turistas supera a la población local.", color: "#16a34a" },
                { stage: "Estancamiento", desc: "Se alcanza la capacidad máxima. Comienza el desgaste.", color: "#ea580c" }
              ].map((item, idx) => (
                <div key={idx} style={{display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px', borderLeft: `5px solid ${item.color}`}}>
                   <span style={{fontWeight: 800, minWidth: '120px', color: item.color}}>{item.stage}</span>
                   <span style={{fontSize: '0.9rem'}}>{item.desc}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Capacidad de Carga */}
        <div style={{background: '#f0fdf4', border: '2px solid #16A34A', borderRadius: '30px', padding: '2.5rem', marginBottom: '3rem'}}>
           <h4 style={{color: '#166534', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <ShieldCheck size={28} /> Capacidad de Carga (Carga Máxima)
           </h4>
           <p style={{color: '#1e293b', marginBottom: '1.5rem', fontSize: '1.1rem'}}>
             Es el número máximo de personas que pueden visitar un sitio al mismo tiempo sin causar daño físico, ambiental o de salud. 
             <strong> El turismo masivo es el enemigo de la calidad.</strong>
           </p>
           <div style={{background: 'white', padding: '1rem', borderRadius: '15px', border: '1px solid #dc2626', color: '#dc2626', fontStyle: 'italic'}}>
             "Si tu sendero aguanta 10 personas y metes 50, en un año no tendrás sendero."
           </div>
        </div>

        {/* Ejercicio Diagnóstico */}
        <div className="glass-card" style={{padding: '2.5rem', border: '3px solid #032968'}}>
           <h4 style={{color: '#032968', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem'}}>
             <Info size={24} /> Ejercicio: Diagnóstico de Etapa
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <p>Analiza tu grupo comunitario y responde:</p>
              <div style={{background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                <strong>1. ¿Quiénes son los turistas?</strong> (¿Amigos del pueblo o desconocidos de internet?)
              </div>
              <div style={{background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                <strong>2. ¿Quién presta los servicios?</strong> (¿Toda la comunidad o solo un operador?)
              </div>
              <div style={{background: '#f8fafc', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                <strong>3. ¿Sientes que el lugar se está desgastando?</strong> (¿Basura, ruido, daño vegetal?)
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
