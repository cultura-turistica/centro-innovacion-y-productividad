import React, { useState } from 'react';
import { 
  BookOpen, ArrowLeft, ArrowRight, CheckCircle2, Target, 
  Settings, Database, User, Lightbulb, Compass, BarChart3, 
  Activity, Layers, Map, AlertTriangle, PenTool, Edit3,
  Users, Handshake, ShieldCheck, Heart, Zap, RefreshCw, MessageCircle, FileText, Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import imgMarriott from '../assets/caso_marriott.png';
import imgAirbnb from '../assets/caso_airbnb.png';
import imgDisney from '../assets/caso_disney.png';
import imgVirgin from '../assets/caso_virgin.png';
import imgAwasi from '../assets/caso_awasi.png';
import imgXcaret from '../assets/caso_xcaret.png';
import imgLowcost from '../assets/caso_lowcost.png';

export default function CursoMicroExperiencias() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 12;

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const prevStep = () => { if (step > 1) setStep(step - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  let headerColor = '#032968';
  let headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  let modTitle = 'Fase 1: Descubrimiento y Empatía';

  if (step >= 4 && step <= 6) { 
    headerColor = '#055C38'; 
    headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
    modTitle = 'Fase 2: El Tablero de Propuesta de Valor'; 
  }
  else if (step >= 7 && step <= 8) { 
    headerColor = '#F06000'; 
    headerGradient = 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
    modTitle = 'Fase 3: Prototipado y Validación'; 
  }
  else if (step >= 9 && step <= 10) { 
    headerColor = '#166534'; 
    headerGradient = 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)';
    modTitle = 'Fase 4: Estructuración del Negocio y MVP'; 
  }
  else if (step >= 11) { 
    headerColor = '#4c1d95'; 
    headerGradient = 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)';
    modTitle = 'Fase 5: Ciclo de Sense & Respond'; 
  }

  // Componente Reutilizable: Ejercicio del Emprendedor
  const EjercicioPractico = ({ titulo, contenido }) => (
    <div style={{
      marginTop: '3rem',
      background: 'linear-gradient(to right, #f8fafc, #f1f5f9)',
      border: `2px dashed ${headerColor}80`,
      borderRadius: '20px',
      padding: '2rem',
      position: 'relative',
      boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
    }}>
      <div style={{
        position: 'absolute', top: '-20px', left: '30px', 
        background: headerColor, color: 'white', 
        padding: '8px 20px', borderRadius: '30px', 
        fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px',
        boxShadow: `0 4px 15px ${headerColor}50`
      }}>
        <Edit3 size={18} /> Laboratorio de Acción
      </div>
      <h4 style={{ color: '#334155', marginTop: '10px', marginBottom: '10px', fontSize: '1.2rem' }}>{titulo}</h4>
      <p style={{ color: '#475569', fontSize: '1.05rem', margin: 0, lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: contenido }}></p>
    </div>
  );

  // Componente Reutilizable: Casos Reales del Mundo
  const CasoReal = ({ empresa, titulo, contenido, img, tipo = "good" }) => {
    const isBad = tipo === 'bad';
    return (
      <div style={{
        background: isBad ? '#fef2f2' : '#f0f9ff',
        borderLeft: `5px solid ${isBad ? '#ef4444' : '#0ea5e9'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '2rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        {img && (
          <div style={{ width: '100%', height: '280px', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={img} alt={empresa} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        )}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
             <BookOpen size={20} color={isBad ? '#ef4444' : '#0ea5e9'} />
             <span style={{ fontWeight: '900', color: isBad ? '#b91c1c' : '#0369a1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
               CASO REAL: {empresa}
             </span>
          </div>
          <h5 style={{ margin: '0 0 10px 0', fontSize: '1.15rem', color: '#1e293b' }}>{titulo}</h5>
          <p style={{ margin: 0, fontSize: '1rem', color: '#475569', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: contenido }}></p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div className="title-pill" style={{ background: '#eff6ff', color: '#1e40af', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', margin: 0 }}>
          <Briefcase size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }} />
          Arquitectura de Micro-Experiencias
        </div>
        <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>
          Módulo Empresarial Avanzado
        </div>
      </div>

      <h2 style={{ color: headerColor, transition: 'color 0.3s ease', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.5px' }}>{modTitle}</h2>

      {/* Progress Bar Interactiva */}
      <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '40px', height: '40px', background: headerColor, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          {step}
        </div>
        <div style={{ flexGrow: 1, background: '#e2e8f0', height: '12px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / totalSteps) * 100}%`, background: headerGradient, height: '100%', borderRadius: '10px', transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
        </div>
        <span style={{ fontWeight: 800, color: headerColor, fontSize: '1.2rem' }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}>

        {/* ==========================================
            FASE 1: Descubrimiento y Empatía
            ========================================== */}
        {step === 1 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><Compass size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Compass size={48} color="#fde047" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Fase 1: Descubrimiento y Empatía</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                En el sector privado, <strong>no diseñas lo que quieres vender</strong>. Diseñas la solución al problema que tu cliente necesita resolver.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#032968', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Target size={28} /> De "Segmento Masivo" a "Buyer Persona"
              </h4>
              
              <div className="grid-2" style={{ gap: '30px' }}>
                <div style={{ background: '#fef2f2', padding: '2rem', borderRadius: '20px', border: '1px solid #fecaca', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: '#ef4444', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>❌ EL ERROR</div>
                  <h5 style={{ color: '#b91c1c', fontSize: '1.3rem', marginBottom: '15px' }}>Segmentos Genéricos</h5>
                  <p style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: 1.6 }}>Hablar de "el mercado alemán" o "familias con niños". Esto es demasiado amplio, vago y no te permite diseñar servicios a la medida ni adelantarte a sus frustraciones.</p>
                </div>

                <div style={{ background: '#eff6ff', padding: '2rem', borderRadius: '20px', border: '1px solid #bfdbfe', transition: 'transform 0.3s', cursor: 'default' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: '#3b82f6', color: 'white', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>✅ LA SOLUCIÓN</div>
                  <h5 style={{ color: '#1e40af', fontSize: '1.3rem', marginBottom: '15px' }}>El Buyer Persona</h5>
                  <p style={{ fontSize: '1rem', color: '#1e3a8a', lineHeight: 1.6 }}>Identificar un arquetipo con nombre, edad, capacidad de gasto exacta, miedos y comportamientos. El objetivo es anticiparte a sus necesidades antes de que pise tu hotel o vehículo.</p>
                </div>
              </div>

              <CasoReal 
                empresa="Marriott Courtyard" 
                titulo="El verdadero Job del viajero de negocios" 
                img={imgMarriott}
                contenido="<strong>¿Qué descubrieron?</strong> Que el viajero de negocios joven no los contrataba solo para 'dormir', sino para 'trabajar cómodamente fuera de la oficina sin sentirse aislado'.<br/><strong>¿Cómo lo hicieron?</strong> En lugar de enviar encuestas por correo, contrataron antropólogos para sentarse durante horas en los lobbys (Observación pasiva). Vieron que los huéspedes bajaban de sus lujosas habitaciones para sentarse a trabajar apretados en las mesas comunitarias del bar solo para sentir compañía humana.<br/><strong>El Resultado:</strong> Rediseñaron sus lobbys transformándolos en espacios de coworking vibrantes 24/7."
              />

              <EjercicioPractico 
                titulo="Crea a tu Huésped Ideal" 
                contenido="<strong>Si ya tienes un negocio operando</strong>, escribe 2 nombres de tus mejores clientes actuales.<br/><strong>Si eres un emprendedor con una idea nueva</strong>, inventa al cliente soñado que quieres atraer.<br/><br/>Describe su edad exacta, qué profesión tiene, qué lo estresa en su vida diaria (tráfico, deudas, hijos) y qué problema oculto busca resolver al viajar a tu destino."
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#032968', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Activity size={36} /> Observación vs. Encuestas
            </h3>
            
            <div style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '20px', padding: '2rem', display: 'flex', gap: '25px', marginBottom: '3rem', alignItems: 'center' }}>
               <div style={{ color: '#ea580c', background: '#ffedd5', padding: '15px', borderRadius: '50%' }}><AlertTriangle size={40}/></div>
               <div>
                  <h4 style={{ color: '#9a3412', fontWeight: 900, marginBottom: '0.5rem', fontSize: '1.4rem' }}>La Regla de Oro Empresarial</h4>
                  <p style={{ color: '#9a3412', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
                    "No puedes conocer realmente a tu cliente si nunca has hablado con él u observado cómo hace algo. Lo que la gente <em>dice</em> en encuestas es distinto a lo que <em>hace</em>."
                  </p>
               </div>
            </div>

            <div className="grid-2" style={{ gap: '20px' }}>
               <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <BarChart3 size={24} color="#64748b" />
                   <h5 style={{ color: '#475569', fontSize: '1.2rem', margin: 0 }}>Investigación de Mercado</h5>
                 </div>
                 <p style={{ color: '#64748b', lineHeight: 1.6 }}>Sondear la opinión superficial de 100 personas mediante encuestas para ver tendencias estadísticas. <strong>Sirve para hacer publicidad, pero NO para diseñar el núcleo del producto.</strong></p>
               </div>

               <div style={{ background: '#f0f9ff', padding: '2rem', borderRadius: '20px', boxShadow: '0 4px 15px rgba(59,130,246,0.1)', border: '2px solid #bae6fd' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <User size={24} color="#0369a1" />
                   <h5 style={{ color: '#0369a1', fontSize: '1.2rem', margin: 0 }}>Investigación de Usuarios</h5>
                 </div>
                 <p style={{ color: '#075985', lineHeight: 1.6 }}>Observar profundamente el comportamiento de un grupo pequeño (8-15 personas) en contextos reales. Escuchar su historia e interactuar para encontrar hallazgos auténticos (Empatía pura).</p>
               </div>
            </div>

            <CasoReal 
                empresa="Airbnb (En sus inicios)" 
                titulo="El poder de la observación cualitativa" 
                img={imgAirbnb}
                contenido="<strong>¿Qué descubrieron?</strong> Que el dolor principal del viajero no era solo 'un cuarto barato', sino el <em>Job Social</em>: 'Quiero sentir que pertenezco a la ciudad'.<br/><strong>¿Cómo lo hicieron?</strong> Los fundadores (Brian y Joe) viajaron a Nueva York, alquilaron cámaras profesionales y fueron puerta por puerta a las casas de sus primeros 40 usuarios. Se sentaron a tomar café con ellos en sus propias salas. Al interactuar cara a cara, se dieron cuenta de que la gente no compraba alojamiento, compraba 'conexión humana'.<br/><strong>El Resultado:</strong> Cambiaron el software para destacar perfiles detallados de anfitriones y fotografías de cocinas vividas."
            />

            <EjercicioPractico 
              titulo="El Ejercicio del Observador Silencioso" 
              contenido="Sal al lobby de tu hotel, al área común de tu agencia, o acompaña un recorrido (o visita un negocio similar al que quieres crear). Siéntate 15 minutos en silencio absoluto. Anota 5 cosas físicas que los clientes hacen (ej: dónde se tropiezan, qué miran con confusión, cuándo sacan la cámara) que ninguna encuesta te había dicho."
            />
          </div>
        )}

        {step === 3 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#032968', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Settings size={36} /> El "Trabajo a Realizar" (Jobs-to-be-Done)
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              El turista no te compra una habitación o un pasaje de bus; te <strong>"contrata"</strong> para resolver una tarea en su vida. Debes categorizar esto en 3 dimensiones:
            </p>

            <div className="grid-3" style={{ gap: '20px', marginBottom: '3rem' }}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #3b82f6', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#eff6ff', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><Settings color="#3b82f6" size={24}/></div>
                <p style={{ margin: '0 0 10px 0', fontWeight: '900', color: '#1e40af', fontSize: '1.2rem' }}>Funcional</p>
                <p style={{ fontSize: '0.9rem', color: '#3b82f6', fontStyle: 'italic', marginBottom: '15px', fontWeight: 'bold' }}>"Quiero lograr algo"</p>
                <span style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>Quiero transportarme rápido del aeropuerto al hotel, o necesito un lugar seguro y oscuro para dormir profundamente.</span>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #ec4899', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#fdf2f8', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><Heart color="#ec4899" size={24}/></div>
                <p style={{ margin: '0 0 10px 0', fontWeight: '900', color: '#be185d', fontSize: '1.2rem' }}>Emocional</p>
                <p style={{ fontSize: '0.9rem', color: '#ec4899', fontStyle: 'italic', marginBottom: '15px', fontWeight: 'bold' }}>"Quiero sentir algo"</p>
                <span style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>Quiero sentirme totalmente relajado, quiero sentir que mi familia está a salvo, o quiero evitar la ansiedad del tráfico.</span>
              </div>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #8b5cf6', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#f5f3ff', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><Users color="#8b5cf6" size={24}/></div>
                <p style={{ margin: '0 0 10px 0', fontWeight: '900', color: '#6d28d9', fontSize: '1.2rem' }}>Social</p>
                <p style={{ fontSize: '0.9rem', color: '#8b5cf6', fontStyle: 'italic', marginBottom: '15px', fontWeight: 'bold' }}>"Quiero proyectar algo"</p>
                <span style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>Quiero proyectar estatus en mis redes, exclusividad, o ser visto como un excelente proveedor de vacaciones para mis hijos.</span>
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', border: '1px solid #cbd5e1' }}>
              <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.2rem' }}>Estructura de la Declaración (Job Statement)</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
                <span style={{ background: '#bfdbfe', color: '#1e40af', padding: '8px 15px', borderRadius: '8px', fontWeight: 'bold' }}>Dirección</span> +
                <span style={{ background: '#bbf7d0', color: '#166534', padding: '8px 15px', borderRadius: '8px', fontWeight: 'bold' }}>Métrica</span> +
                <span style={{ background: '#fef08a', color: '#854d0e', padding: '8px 15px', borderRadius: '8px', fontWeight: 'bold' }}>Objeto</span> +
                <span style={{ background: '#fbcfe8', color: '#9d174d', padding: '8px 15px', borderRadius: '8px', fontWeight: 'bold' }}>Clarificador</span>
              </div>
            </div>

            <EjercicioPractico 
              titulo="Redacta el Contrato Oculto de tu Cliente" 
              contenido="Usando la fórmula de arriba, redacta por qué te 'contratan'. Ejemplo: 'Minimizar (Dirección) el tiempo (Métrica) de espera en recepción (Objeto) cuando llego cansado de un vuelo largo (Clarificador)'. ¡Haz el tuyo ahora mismo!"
            />
          </div>
        )}

        {/* ==========================================
            FASE 2: El Tablero de Propuesta de Valor
            ========================================== */}
        {step === 4 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '-20px', top: '-20px', opacity: 0.1 }}><Layers size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Layers size={48} color="#a7f3d0" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Fase 2: El Tablero de Valor</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                AQUÍ SE DISEÑA LA EXPERIENCIA. La experiencia no es un accidente, es el diseño de atributos intangibles que se "inyectan" al producto base.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#15803d', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Map size={28} /> Mapeo del Cliente (Perfil)
              </h4>
              
              <div className="grid-2" style={{ gap: '30px' }}>
                <div style={{ padding: '2.5rem', border: '2px solid #fecaca', borderRadius: '20px', background: '#fef2f2', boxShadow: '0 10px 25px rgba(239,68,68,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ background: '#ef4444', padding: '10px', borderRadius: '12px', color: 'white' }}><AlertTriangle size={24}/></div>
                    <h5 style={{ color: '#b91c1c', fontSize: '1.4rem', margin: 0 }}>Puntos de Dolor</h5>
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#7f1d1d', lineHeight: 1.6 }}>Lo que le molesta y frustra al cliente al intentar cumplir su tarea. Riesgos y obstáculos.</p>
                  <ul style={{ color: '#991b1b', marginTop: '15px', lineHeight: 1.8 }}>
                     <li>Ruido extremo en la noche.</li>
                     <li>Sensación de inseguridad o estafas.</li>
                     <li>Hacer filas largas y tediosas.</li>
                  </ul>
                </div>

                <div style={{ padding: '2.5rem', border: '2px solid #bbf7d0', borderRadius: '20px', background: '#f0fdf4', boxShadow: '0 10px 25px rgba(34,197,94,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ background: '#22c55e', padding: '10px', borderRadius: '12px', color: 'white' }}><Heart size={24}/></div>
                    <h5 style={{ color: '#15803d', fontSize: '1.4rem', margin: 0 }}>Puntos de Deleite</h5>
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#14532d', lineHeight: 1.6 }}>Lo que le hace feliz y supera rotundamente sus expectativas básicas de compra.</p>
                  <ul style={{ color: '#166534', marginTop: '15px', lineHeight: 1.8 }}>
                     <li>Un trato hiper-personalizado por su nombre.</li>
                     <li>Exclusividad o acceso prioritario.</li>
                     <li>Sorpresas gratis inesperadas en su habitación.</li>
                  </ul>
                </div>
              </div>

              <EjercicioPractico 
                titulo="Mapeo de tu Realidad" 
                contenido="Divide una hoja en dos. A la izquierda escribe 3 dolores reales que sufre tu cliente ANTES de encontrarte a ti (ej. estrés organizando). A la derecha, escribe 3 cosas que lo harían suspirar de alivio o sonreír apenas te contrata."
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#055C38', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Zap size={36} /> El Cuadrado del Producto vs. La Experiencia
            </h3>
            
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              A tu producto base (la cama, el bus, la comida) se le construyen características exactas para manipular la percepción. Veamos la enorme diferencia entre un producto puramente funcional y una experiencia diseñada.
            </p>

            {/* CASO: Producto Funcional */}
            <CasoReal 
                tipo="bad"
                empresa="Aerolíneas de Bajo Costo (Low-Cost)" 
                titulo="El Producto Puramente Funcional" 
                img={imgLowcost}
                contenido="Te llevan del punto A al punto B. Satisface el <em>Job</em> básico de 'transporte barato'. <strong>No hay amplificadores de deleite</strong>. Es más, la aerolínea añade fricciones intencionalmente (asientos incómodos, cobros por maletas, cero personalización) para abaratar costos. Es solo un vehículo transaccional, no está pensado para la experiencia sensorial."
            />

            {/* CASO: Experiencia */}
            <CasoReal 
                empresa="Disney Parks" 
                titulo="El Diseño Operativo de la Magia" 
                img={imgDisney}
                contenido="<strong>¿Cómo mapearon el dolor?</strong> Disney rastreó el comportamiento de los padres y notó que pasaban el 30% de su tiempo estresados buscando boletos, llaves del hotel o efectivo (Fricción funcional severa).<br/><strong>Minimizador de Dolor:</strong> Inventaron la 'MagicBand', una pulsera inteligente que lo integra todo. Eliminaron el estrés de raíz.<br/><strong>Amplificador de Deleite:</strong> ¿Cómo se asegura Disney de que haya sonrisas? Le otorgan un presupuesto y autoridad a los empleados rasos (limpieza, seguridad) para ejecutar 'Momentos Mágicos'. Si ven a un niño al que se le cayó un helado, no tienen que preguntarle a su jefe; pueden regalarle uno nuevo de inmediato."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '3rem 0' }}>
              <div style={{ display: 'flex', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '80px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <ShieldCheck size={32} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1 }}>
                  <h4 style={{ color: '#1e40af', fontSize: '1.3rem', marginBottom: '10px' }}>1. Minimizadores de Dolor (Píldoras)</h4>
                  <p style={{ color: '#475569', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>Procesos diseñados para eliminar la fricción funcional del cliente. Son la cura a los dolores mapeados. <em>(Ej: Check-in por WhatsApp en el taxi).</em></p>
                </div>
              </div>

              <div style={{ display: 'flex', background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '80px', background: '#eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Lightbulb size={32} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1 }}>
                  <h4 style={{ color: '#854d0e', fontSize: '1.3rem', marginBottom: '10px' }}>2. Amplificadores de Deleite (Detonantes)</h4>
                  <p style={{ color: '#475569', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>Aquí se diseña la <strong>arquitectura sensorial</strong>. <em>(Ej: ¿A qué huele el lobby? ¿Hay música curada específicamente para su segmento?)</em></p>
                </div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(to right, #064e3b, #14532d)', padding: '2rem', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 15px 30px rgba(6,78,59,0.3)' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '15px', borderRadius: '50%' }}><CheckCircle2 size={30} /></div>
              <div>
                <strong style={{ fontSize: '1.3rem', display: 'block', marginBottom: '5px' }}>Regla de Oro: "Días duros, noches blandas"</strong>
                <p style={{ margin: 0, fontSize: '1.05rem', color: '#d1fae5', lineHeight: 1.5 }}>Después del esfuerzo físico de la macroexperiencia territorial, la microexperiencia privada (hotel/transporte) debe brindar un confort excepcionalmente reparador.</p>
              </div>
            </div>

            <EjercicioPractico 
              titulo="Diseña tu Detonante Sensorial" 
              contenido="Identifica el punto más monótono de tu servicio (ej. el traslado del aeropuerto). Diseña un 'Amplificador de Deleite' de bajo costo para ese instante: puede ser ofrecer una toalla húmeda con aroma a cítricos, o reproducir una playlist local curada. Escríbelo y aplícalo mañana."
            />
          </div>
        )}

        {step === 6 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#055C38', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <PenTool size={36} /> Value Proposition Statement
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Todo este diseño estratégico no puede quedarse en un tablero gigante. Debes condensarlo en una fórmula estandarizada (Tu Mensaje Clave) que comunicará exactamente qué vendes.
            </p>

            <div className="glass-card" style={{ padding: '3rem', background: '#f8fafc', border: '2px dashed #94a3b8', borderRadius: '20px' }}>
              <h4 style={{ color: '#334155', marginBottom: '2rem', fontSize: '1.4rem', textAlign: 'center' }}>La Plantilla de Venta Irrefutable</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '1.1rem', color: '#1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>"Nuestro/a</span>
                  <div style={{ borderBottom: '2px solid #22c55e', flexGrow: 1, padding: '5px 10px', color: '#15803d', background: '#f0fdf4', borderRadius: '5px 5px 0 0' }}>[Producto/Servicio Base]</div>
                  <span style={{ fontWeight: 'bold' }}>..."</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>"...le permite a</span>
                  <div style={{ borderBottom: '2px solid #3b82f6', flexGrow: 1, padding: '5px 10px', color: '#1d4ed8', background: '#eff6ff', borderRadius: '5px 5px 0 0' }}>[Tu Buyer Persona Específico]</div>
                  <span style={{ fontWeight: 'bold' }}>..."</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>"...lograr</span>
                  <div style={{ borderBottom: '2px solid #eab308', flexGrow: 1, padding: '5px 10px', color: '#a16207', background: '#fefce8', borderRadius: '5px 5px 0 0' }}>[Resolver su Trabajo/Dolor Principal]</div>
                  <span style={{ fontWeight: 'bold' }}>..."</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>"...por medio de</span>
                  <div style={{ borderBottom: '2px solid #a855f7', flexGrow: 1, padding: '5px 10px', color: '#7e22ce', background: '#faf5ff', borderRadius: '5px 5px 0 0' }}>[Tus Amplificadores de Deleite]</div>
                  <span style={{ fontWeight: 'bold' }}>..."</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>"...y nuestro diferenciador es</span>
                  <div style={{ borderBottom: '2px solid #ef4444', flexGrow: 1, padding: '5px 10px', color: '#b91c1c', background: '#fef2f2', borderRadius: '5px 5px 0 0' }}>[Tu Ventaja Competitiva Injusta]</div>.
                </div>
              </div>
            </div>

            <EjercicioPractico 
              titulo="Construye tu Elevator Pitch" 
              contenido="Toma un papel y llena la plantilla de arriba con los datos reales de tu negocio. Una vez escrita, léela en voz alta. Si tardas más de 10 segundos en decirla, o si suena a 'somos los mejores con calidad y servicio', táchala y vuelve a empezar. Debe ser hiper-específica."
            />
          </div>
        )}

        {/* ==========================================
            FASE 3: Prototipado y Validación
            ========================================== */}
        {step === 7 && (
          <div className="fade-in">
            <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }}><Settings size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Settings size={48} color="#fed7aa" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Fase 3: Prototipado y Validación</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                <strong>Aprender fallando barato.</strong> No construyas el edificio entero sin probar si a la gente le gusta el color de los ladrillos.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#9a3412', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lightbulb size={28} /> Prototipos y Herramientas Desechables
              </h4>
              
              <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Un prototipo NO es la primera versión de tu producto. Es una herramienta de aprendizaje diseñada específicamente para fallar y descartarse.
              </p>

              <div className="grid-2" style={{ gap: '25px' }}>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #f97316', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '10px', display: 'inline-block', marginBottom: '15px' }}><Layers color="#ea580c"/></div>
                  <h5 style={{ color: '#c2410c', fontSize: '1.2rem', marginBottom: '10px' }}>Modelos a Escala (Role-play)</h5>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>Usa piezas de Lego o simula con tu equipo cómo será el flujo de las personas. ¿Dónde se sentarán? ¿Dónde está el cuello de botella físico?</p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #f59e0b', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ background: '#fef3c7', padding: '10px', borderRadius: '10px', display: 'inline-block', marginBottom: '15px' }}><Settings color="#d97706"/></div>
                  <h5 style={{ color: '#b45309', fontSize: '1.2rem', marginBottom: '10px' }}>Probar un Aspecto Aislado</h5>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>No construyas el hotel entero. Puedes probar solo el menú del desayuno, o simular una sola habitación para ver cómo fluye el aseo.</p>
                </div>
              </div>

              <CasoReal 
                empresa="Virgin Atlantic (Clase Upper Class)" 
                titulo="Fallar barato en tierra para no fracasar en el aire" 
                img={imgVirgin}
                contenido="<strong>El Reto:</strong> Rediseñar la clase ejecutiva con $100 millones, con un riesgo altísimo de que a los pasajeros no les gustara la nueva disposición.<br/><strong>¿Cómo lo hicieron (El Prototipo)?</strong> En lugar de usar caros renders 3D o intervenir un avión real, construyeron una maqueta a escala 1:1 en un hangar usando sillas de jardín, cartón y madera barata. Contrataron actores para simular ser pasajeros durante un 'vuelo' de 8 horas en tierra. <br/><strong>El Aprendizaje:</strong> Descubrieron fallas críticas operativas (los asistentes tropezaban al servir la comida en los nuevos pasillos) y corrigieron la arquitectura usando madera de $10 dólares antes de mandar a fabricar las piezas de titanio."
              />

              <EjercicioPractico 
                titulo="Simula el Cuello de Botella" 
                contenido="Dibuja un plano de tu establecimiento, de tu ruta de viaje o de la app que quieres lanzar. Usa piedritas o monedas para simular a 15 turistas entrando o usándolo al mismo tiempo. ¿Dónde se estancan? Identifica el error en papel antes de gastar dinero."
              />
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#ea580c', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Activity size={36} /> Pilotos y Datos Sensoriales
            </h3>
            
            <div style={{ background: '#fff7ed', border: '1px solid #fdba74', borderRadius: '20px', padding: '2.5rem', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(234,88,12,0.05)' }}>
               <h4 style={{ color: '#9a3412', fontSize: '1.4rem', marginBottom: '15px' }}>El Simulacro Real (Try-Outs)</h4>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                 La experiencia se pone a prueba en un ambiente controlado. <strong>La clave mágica: Ellos SABEN que es experimental.</strong> Al saberlo, no te exigen perfección y te regalan retroalimentación brutalmente honesta para co-crear la solución.
               </p>
            </div>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
               <div style={{ flex: '1 1 300px', background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <div style={{ background: '#fee2e2', padding: '8px', borderRadius: '8px' }}><AlertTriangle color="#ef4444" size={20}/></div>
                   <h5 style={{ color: '#1e293b', fontSize: '1.1rem', margin: 0 }}>Adiós a las Encuestas Básicas</h5>
                 </div>
                 <p style={{ color: '#64748b', lineHeight: 1.6 }}>Las encuestas de papel al final del viaje sirven de poco. La gente suele mentir por cortesía para no hacerte sentir mal.</p>
               </div>

               <div style={{ flex: '1 1 300px', background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                   <div style={{ background: '#dcfce7', padding: '8px', borderRadius: '8px' }}><Target color="#22c55e" size={20}/></div>
                   <h5 style={{ color: '#1e293b', fontSize: '1.1rem', margin: 0 }}>Recolectar Datos Sensoriales</h5>
                 </div>
                 <p style={{ color: '#64748b', lineHeight: 1.6 }}>Observa expresiones físicas innatas durante la experiencia. ¿Hubo asombro real en el detonante? ¿Bostezos? Eres un científico del comportamiento.</p>
               </div>
            </div>

            <EjercicioPractico 
              titulo="Ejecuta tu Primer Piloto" 
              contenido="Invita a 3 conocidos que encajen perfecto en tu 'Buyer Persona' (NO a tu mamá ni a tus amigos incondicionales). Ofréceles tu experiencia gratis a cambio de criticar cada detalle. Observa sus caras, no solo escuches lo que te dicen."
            />
          </div>
        )}

        {/* ==========================================
            FASE 4: Estructuración y MVP
            ========================================== */}
        {step === 9 && (
          <div className="fade-in">
             <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: '-20px', top: '-20px', opacity: 0.1 }}><Handshake size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <Handshake size={48} color="#a7f3d0" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Fase 4: Estructuración y MVP</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                La experiencia validada se empaqueta para generar dinero. Pasamos de un experimento de laboratorio a una empresa real compitiendo en el mercado.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <h4 style={{ color: '#166534', marginBottom: '2rem', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BarChart3 size={28} /> El Motor (Business Model Canvas)
              </h4>
              
              <div style={{ background: '#f0fdf4', padding: '2.5rem', borderRadius: '20px', borderLeft: '5px solid #22c55e', marginBottom: '3rem', boxShadow: '0 10px 25px rgba(34,197,94,0.1)' }}>
                <p style={{ color: '#14532d', fontSize: '1.1rem', margin: 0, lineHeight: 1.6 }}>
                  No importa qué tan mágica o sensorial sea tu experiencia; si no es financieramente viable, es un hobby muy caro. A nivel técnico, debes definir tus <strong>Costos Críticos</strong>, tus <strong>Fuentes de Ingreso</strong> y, sobre todo, tus <strong>Aliados Clave</strong>.
                </p>
              </div>

              <div className="grid-2" style={{ gap: '25px' }}>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <AlertTriangle color="#f59e0b" size={24} />
                    <h5 style={{ color: '#1e293b', fontSize: '1.2rem', margin: 0 }}>La Regla del Eslabón Más Débil</h5>
                  </div>
                  <p style={{ color: '#64748b', lineHeight: 1.6 }}>Si tu proveedor de transporte falla (lega tarde, sucio), <strong>tu experiencia entera falla</strong>. Tu aliado clave tiene el poder de destruir tu propuesta de valor.</p>
                </div>

                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <MessageCircle color="#3b82f6" size={24} />
                    <h5 style={{ color: '#1e293b', fontSize: '1.2rem', margin: 0 }}>El Elevator Pitch Comercial</h5>
                  </div>
                  <p style={{ color: '#64748b', lineHeight: 1.6 }}>Toma tu <em>Value Proposition Statement</em> de la Fase 2 y conviértelo en tu arma de ventas. Habla de los dolores que resuelves, no de tu infraestructura aburrida.</p>
                </div>
              </div>

              <EjercicioPractico 
                titulo="Auditoría de tu Eslabón Débil" 
                contenido="Escribe el nombre de los 3 proveedores o aliados que más impacto tienen en la percepción de tu turista (ej: la lavandería, el conductor, el guía local). ¿Tienes un plan B si el principal te falla mañana? Si no, constrúyelo hoy."
              />
            </div>
          </div>
        )}

        {step === 10 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
            <h3 style={{ color: '#166534', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '2rem' }}>
              <Zap size={36} /> Lanzamiento del MVP
            </h3>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Lanzar un <strong>Producto Mínimo Viable (MVP)</strong> no significa lanzar un producto mediocre. Significa lanzar la versión más pequeña de tu idea que <em>ya</em> soluciona el problema y <em>ya</em> tiene los detonantes de deleite.
            </p>

            <CasoReal 
                empresa="Awasi (Lujo en Patagonia)" 
                titulo="La promesa mínima y viable sin construir un mega-resort" 
                img={imgAwasi}
                contenido="<strong>¿Cómo aplicaron el MVP?</strong> Awasi no esperó 3 años para construir un mega-resort con piscinas y 50 habitaciones. Abrieron operaciones con apenas 14 villas pequeñas.<br/><strong>¿Cómo aseguraron la experiencia premium sin infraestructura masiva?</strong> Invirtieron el capital no en ladrillos, sino en personal operativo: contrataron un guía experto y compraron un jeep 4x4 por cada habitación. Su Producto Mínimo Viable cumplía la propuesta de valor prometida desde el día cero: <em>'Exclusividad absoluta 1 a 1'</em>.<br/><strong>El Resultado:</strong> Validaron que los Pioneros estaban dispuestos a pagar $1,500 dólares la noche por la inmersión del guía, no por tener un lobby gigante de mármol. Una vez rentable, escalaron."
            />

            <div className="glass-card" style={{ padding: '2.5rem', background: 'linear-gradient(to right, #1e293b, #0f172a)', color: 'white', borderRadius: '20px', marginTop: '3rem' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '1rem', fontSize: '1.3rem' }}>El objetivo: Los "Early Adopters"</h4>
              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
                Tu MVP no está hecho para el turista masivo y exigente. Está hecho para los "Pioneros" o adoptantes tempranos: personas que aman probar cosas exclusivas o nuevas. Como quieren ser los primeros, perdonarán pequeñas fallas operativas y te ayudarán a mejorar.
              </p>
            </div>

            <EjercicioPractico 
              titulo="Poda tu Proyecto (Hazlo Mínimo)" 
              contenido="Mira tu gran idea o proyecto a futuro. Tacha el 80% de las cosas 'bonitas pero no esenciales'. Quédate solo con el 20% que resuelve el problema real de tu cliente. ¿Qué te detiene para empezar a vender ese 20% el próximo mes?"
            />
          </div>
        )}

        {/* ==========================================
            FASE 5: Sense & Respond
            ========================================== */}
        {step === 11 && (
          <div className="fade-in">
             <div style={{ background: headerGradient, padding: '4rem 3rem', borderRadius: '0 0 40px 40px', color: 'white', textAlign: 'center', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}><RefreshCw size={250} /></div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '50%', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
                <RefreshCw size={48} color="#ddd6fe" />
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Fase 5: Sense & Respond</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                En innovación, el producto NUNCA está "terminado". Se convierte en una conversación constante de mejora infinita basada en datos.
              </p>
            </div>

            <div style={{ padding: '0 4rem 4rem 4rem' }}>
              <div className="grid-2" style={{ gap: '30px', marginBottom: '2rem' }}>
                <div style={{ padding: '2.5rem', border: '1px solid #c4b5fd', borderRadius: '20px', background: '#f5f3ff', borderTop: '6px solid #8b5cf6', boxShadow: '0 10px 25px rgba(139,92,246,0.1)' }}>
                  <h5 style={{ color: '#6d28d9', marginBottom: '15px', fontSize: '1.4rem' }}>1. SENTIR (Sense)</h5>
                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>No escuches solo opiniones, escucha a los datos operacionales. Mide las tasas de retención (¿el turista vuelve?), el NPS y los puntos de congestión. "Siente" qué funciona y qué frustra en tiempo real.</p>
                </div>
                <div style={{ padding: '2.5rem', border: '1px solid #c4b5fd', borderRadius: '20px', background: '#f5f3ff', borderTop: '6px solid #6d28d9', boxShadow: '0 10px 25px rgba(109,40,217,0.1)' }}>
                  <h5 style={{ color: '#5b21b6', marginBottom: '15px', fontSize: '1.4rem' }}>2. RESPONDER (Respond)</h5>
                  <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>Iterar brutalmente. Si un servicio te cuesta una fortuna y el turista ni lo nota, elimínalo hoy. Si adoran un pequeño detalle barato, poténcialo y vuélvelo tu bandera comercial.</p>
                </div>
              </div>

              <CasoReal 
                empresa="Parque Xcaret (México)" 
                titulo="Iteración basada en datos de fricción operativa" 
                img={imgXcaret}
                contenido="<strong>¿Cómo 'Sintieron' (Sense)?</strong> No hicieron encuestas al salir. El equipo de operaciones mapeó en terreno los 'puntos de fricción'. Descubrieron un patrón de datos oculto: a las 4:00 PM, bajo el sol del Caribe, el nivel de llantos de niños se disparaba y el flujo peatonal se volvía caótico por el estrés térmico.<br/><strong>¿Cómo 'Respondieron' (Respond)?</strong> En solo 48 horas tomaron medidas ágiles: Instalaron carritos sorpresa con aguas gratis y desplegaron personajes lúdicos (guacamayas) exactamente en esos cuellos de botella geográficos a las 3:45 PM. La crisis de satisfacción se evaporó."
              />

              <div className="glass-card" style={{ padding: '2.5rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
                <h4 style={{ color: '#4c1d95', marginBottom: '1rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Compass size={24}/> Discovery Permanente (Dual Track Agile)</h4>
                <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  Mientras tu equipo operativo atiende a los turistas diarios (<strong>Delivery</strong>), debes mantener un tiempo dedicado a investigar (<strong>Discovery</strong>). Explora nuevas ideas baratas, asume que no sabes todo, y deja que el usuario te guíe hacia la excelencia.
                </p>
              </div>

              <EjercicioPractico 
                titulo="Audita tu 'Sense & Respond'" 
                contenido="Abre Google Maps o TripAdvisor. Lee tus últimas 10 reseñas. Anota qué patrón se repite positivamente y qué queja es constante. Esa queja es el punto de partida de tu iteración ('Respond') de mañana."
              />
            </div>
          </div>
        )}

        {/* --- FINALIZACIÓN --- */}
        {step === 12 && (
          <div className="fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #8b5cf6, #5b21b6)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', boxShadow: '0 15px 40px rgba(109,40,217,0.3)' }}>
              <Target size={60} />
            </div>
            <h2 style={{ color: '#4c1d95', fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>El Product Roadmap</h2>
            
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
              Como tu producto ahora está vivo y recibe sugerencias de manera constante, no puedes ejecutar todas las ideas al tiempo o crearás caos. Aquí entra el <strong>Roadmap (Hoja de Ruta)</strong>. Adiós a las fechas exactas; priorizamos el impacto.
            </p>

            <div className="grid-3" style={{ gap: '20px', maxWidth: '1000px', margin: '0 auto 4rem auto', textAlign: 'left' }}>
               <div style={{ background: '#fef2f2', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #ef4444' }}>
                 <h4 style={{ color: '#b91c1c', marginBottom: '10px' }}>AHORA</h4>
                 <p style={{ color: '#7f1d1d', fontSize: '0.9rem' }}>Los incendios y las victorias rápidas. Mejoras críticas que el usuario exige de inmediato (Sense).</p>
               </div>
               <div style={{ background: '#fff7ed', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #f97316' }}>
                 <h4 style={{ color: '#c2410c', marginBottom: '10px' }}>DESPUÉS</h4>
                 <p style={{ color: '#9a3412', fontSize: '0.9rem' }}>Proyectos en experimentación (Discovery) que añadirán valor en los próximos meses si se validan.</p>
               </div>
               <div style={{ background: '#f0f9ff', padding: '2rem', borderRadius: '20px', borderTop: '5px solid #0ea5e9' }}>
                 <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>LUEGO</h4>
                 <p style={{ color: '#075985', fontSize: '0.9rem' }}>La visión a futuro. Ideas de alta inversión que aún no necesitan presupuesto ni estrés.</p>
               </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '3rem', maxWidth: '900px', margin: '0 auto 3rem auto', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
               <h4 style={{ color: '#334155', marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>Has completado la Metodología de Micro-Experiencias</h4>
               <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '30px' }}>Este es tu arsenal estratégico para liderar el sector turístico privado:</p>
               
               <ul style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 2, margin: 0, paddingLeft: '20px' }}>
                 <li><strong style={{ color: '#1e40af' }}>Fase 1:</strong> Descubriste tu Buyer Persona y sus verdaderos Jobs-to-be-Done.</li>
                 <li><strong style={{ color: '#15803d' }}>Fase 2:</strong> Diseñaste los Amplificadores de Deleite en tu Tablero de Valor.</li>
                 <li><strong style={{ color: '#ea580c' }}>Fase 3:</strong> Aprendiste a fallar barato probando tus ideas con Prototipos.</li>
                 <li><strong style={{ color: '#16a34a' }}>Fase 4:</strong> Construiste tu MVP y tu Motor Financiero con Aliados Clave.</li>
                 <li><strong style={{ color: '#6d28d9' }}>Fase 5:</strong> Adoptaste el ciclo infinito de Sentir, Responder e Iterar.</li>
               </ul>
            </div>

            <EjercicioPractico 
              titulo="El Compromiso Final" 
              contenido="No cierres esta pestaña sin haber definido cuál es la ÚNICA mejora rápida (de bajo costo) que vas a implementar esta semana en tu negocio para sorprender a tu próximo cliente. La innovación no es tecnología, es ejecución."
            />

            <div style={{ marginTop: '4rem' }}>
              <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'linear-gradient(135deg, #4c1d95, #3b0764)', padding: '20px 40px', fontSize: '1.2rem', color: 'white', borderRadius: '30px', boxShadow: '0 10px 25px rgba(76,29,149,0.4)', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Finalizar y Volver al Catálogo
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Navigation Controls */}
      <div className="next-prev-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', borderTop: '2px solid #e2e8f0', paddingTop: '2rem' }}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Salir
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{ background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer', padding: '12px 25px' }}>
            <ArrowLeft size={18} /> Anterior
          </button>
        )}

        {step < totalSteps && (
          <button onClick={nextStep} className="btn-primary" style={{ background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Siguiente Etapa <ArrowRight size={18} />
          </button>
        ) }
      </div>

    </div>
  );
}
