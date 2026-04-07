import React from 'react';
import { Sparkles, Heart, Brain, Eye, Ear, Hand, Wind, Coffee, ListChecks, Info } from 'lucide-react';

export default function Modulo4() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #032968 0%, #1e3a8a 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Diseña la historia que se llevarán a casa"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Una experiencia no es lo que haces, es lo que sientes mientras lo haces. Aprende a crear conexiones emocionales profundas.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Qué es una experiencia */}
        <div className="glass-card mb-10" style={{padding: '3rem', borderLeft: '8px solid #fde047', background: '#fffbeb'}}>
          <blockquote style={{fontSize: '1.3rem', lineStyle: 'italic', color: '#92400e', margin: 0, fontWeight: 500}}>
            "Una experiencia se forma por la combinación de una actividad, un escenario, la interacción social y la conexión personal. Compromete los sentidos: es física, emocional o espiritual."
          </blockquote>
          <cite style={{display: 'block', marginTop: '1rem', fontWeight: 700, color: '#b45309'}}>— Paradigma del Turismo de Experiencias</cite>
        </div>

        {/* La Experiencia Central Table */}
        <h3 className="mb-6 text-center" style={{color: '#032968'}}>Los 4 Pilares de la Experiencia Central</h3>
        <div className="glass-card mb-10" style={{padding: 0, overflow: 'hidden'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#f8fafc'}}>
              <tr>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Elemento</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Pregunta Guía</th>
                <th style={{padding: '1.2rem', textAlign: 'left', color: '#032968'}}>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}><Sparkles size={18} style={{marginRight: '8px', verticalAlign: 'middle'}}/> Memoria</td>
                <td style={{padding: '1.2rem'}}>¿Qué recuerdo quieres que se lleven?</td>
                <td style={{padding: '1.2rem', color: '#16A34A'}}>"La noche más estrellada de mi vida"</td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}><Heart size={18} style={{marginRight: '8px', verticalAlign: 'middle'}}/> Emoción</td>
                <td style={{padding: '1.2rem'}}>¿Qué emoción debe prevalecer?</td>
                <td style={{padding: '1.2rem', color: '#16A34A'}}>Asombro, paz, conexión</td>
              </tr>
              <tr style={{borderBottom: '1px solid #e2e8f0'}}>
                <td style={{padding: '1.2rem', fontWeight: 800}}><Brain size={18} style={{marginRight: '8px', verticalAlign: 'middle'}}/> Aprendizaje</td>
                <td style={{padding: '1.2rem'}}>¿Qué nuevo conocimiento tendrán?</td>
                <td style={{padding: '1.2rem', color: '#16A34A'}}>Proceso del cacao, técnicas bioculturales</td>
              </tr>
              <tr>
                <td style={{padding: '1.2rem', fontWeight: 800}}><Eye size={18} style={{marginRight: '8px', verticalAlign: 'middle'}}/> Sentidos</td>
                <td style={{padding: '1.2rem'}}>¿Qué sentidos explorarán?</td>
                <td style={{padding: '1.2rem', color: '#16A34A'}}>Vista, oído, tacto, olfato, gusto</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Case Study: Ruta del Café */}
        <div style={{background: '#fef2f2', padding: '3rem', borderRadius: '30px', border: '2px solid #ef4444', marginBottom: '3rem'}}>
           <h4 style={{color: '#991b1b', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <Coffee size={28} /> Caso: Ruta del Café Ancestral - Huila
           </h4>
           <p style={{fontSize: '1.1rem', color: '#7f1d1d', fontWeight: 700, marginBottom: '2rem'}}>
             "Vive el ritual cafetero como lo hacen las familias desde hace 5 generaciones"
           </p>
           
           <div className="grid-2" style={{gap: '2rem'}}>
              <div className="glass-card" style={{padding: '1.5rem', background: 'white'}}>
                 <h5 style={{color: '#991b1b', marginBottom: '1rem'}}>Estimulación Sensorial</h5>
                 <ul style={{listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <li>👁️ <strong>Vista:</strong> Paisajes de montañas, sol de la mañana.</li>
                    <li>👂 <strong>Oído:</strong> Historias del abuelo, canto de pájaros.</li>
                    <li>✋ <strong>Tacto:</strong> Textura del grano en diferentes etapas.</li>
                    <li>👃 <strong>Olfato:</strong> Aroma del café tostándose en leña.</li>
                    <li>👅 <strong>Gusto:</strong> Café recién filtrado con panela.</li>
                 </ul>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
                 <p style={{color: '#7f1d1d', fontStyle: 'italic'}}>
                   "Lo que hace especial a esta ruta no es el café, es el sentimiento de pertenencia a una tradición que el turista experimenta al tostar su propio grano."
                 </p>
              </div>
           </div>
        </div>

        {/* Tip Box */}
        <div style={{background: '#ecfdf5', padding: '1.5rem', borderRadius: '15px', border: '1px solid #10b981', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '3rem'}}>
           <Info size={24} color="#059669" style={{flexShrink: 0}} />
           <p style={{color: '#065f46', fontSize: '1rem', margin: 0}}>
             <strong>Tip de Diseño:</strong> Crea un storyboard visual. Dibuja o busca fotos de las 4 escenas clave de tu experiencia. Si no puedes visualizarlo, el turista tampoco podrá.
           </p>
        </div>

        {/* Ejercicio */}
        <div className="glass-card" style={{padding: '3rem', background: '#032968', color: 'white'}}>
           <h4 style={{color: '#fde047', fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px'}}>
             <ListChecks size={28} /> Ejercicio: Construcción de Experiencia Central
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Asigna un nombre tentativo que inspire emoción.",
                "Describe la memoria principal que quieres dejar (1 frase).",
                "Lista las 3 emociones principales a generar.",
                "Identifica 2 nuevos aprendizajes para el visitante.",
                "Describe la experiencia para cada uno de los 5 sentidos.",
                "Dibuja o describe 4 'Escenas' de la experiencia completa."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '15px', alignItems: 'flex-start'}}>
                   <div style={{background: '#fde047', color: '#032968', width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.95}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
