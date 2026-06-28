import React, { useState } from 'react';
import { Lightbulb, Target, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, ShieldAlert, Award, MessageCircle, HeartHandshake, Smile, Check, Camera, Map, TrendingUp, Leaf, Coins, Users, Landmark, Music, BookOpen, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PodcastPlayer from '../components/PodcastPlayer';
import CourseEvaluation from '../components/CourseEvaluation';

const roles = [
  { id: 1, title: 'El Vocero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Vocero&backgroundColor=b6e3f4', target: 'alianzas', color: '#3b82f6', benefit: 'Reconocimiento y liderazgo', task: 'Negocia con proveedores' },
  { id: 2, title: 'El Financiero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Financiero&backgroundColor=c0aede', target: 'dinero', color: '#10b981', benefit: 'Confianza y estabilidad', task: 'Registra los ingresos' },
  { id: 3, title: 'El Guía', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Guia&backgroundColor=ffdfbf', target: 'turistas', color: '#f59e0b', benefit: 'Intercambio cultural', task: 'Recorre el sendero' },
  { id: 4, title: 'El Creador', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Creador&backgroundColor=d1d4f9', target: 'redes', color: '#8b5cf6', benefit: 'Expansión de la ruta', task: 'Toma fotos y videos' }
];

export default function Curso1() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 7;
  const [showEvaluation, setShowEvaluation] = useState(false);

  // Interacciones Modulo 1
  const [sliderValue, setSliderValue] = useState(0);

  // Interacciones Modulo 2 (FlipCards)
  const [flipped, setFlipped] = useState({});
  const toggleFlip = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  // Interacciones Modulo 4 (Roles y Cuadrado)
  const [selectedRole, setSelectedRole] = useState(null);
  const [matchedRoles, setMatchedRoles] = useState({});
  const [shakeTarget, setShakeTarget] = useState(null);
  const [activeNodes, setActiveNodes] = useState([]);

  // Interacciones Modulo 5 (WhatsApp)
  const [chatStep, setChatStep] = useState(0);

  // Interacciones Modulo 6 (Presupuesto Participativo)
  const [budgetInfra, setBudgetInfra] = useState(0);
  const [budgetStaff, setBudgetStaff] = useState(0);
  const [budgetMarketing, setBudgetMarketing] = useState(0);
  const [budgetResult, setBudgetResult] = useState(null);

  const totalBudget = 10; // en Millones
  const currentTotal = budgetInfra + budgetStaff + budgetMarketing;
  const remainingBudget = totalBudget - currentTotal;

  const handleBudgetChange = (setter, val, currentVal) => {
    const newVal = parseInt(val) || 0;
    const diff = newVal - currentVal;
    if (currentTotal + diff <= totalBudget) {
      setter(newVal);
      setBudgetResult(null);
    }
  };

  const evaluateBudget = () => {
    if (currentTotal < totalBudget) {
      setBudgetResult({ success: false, msg: 'Debes asignar los 10 millones completos antes de aprobar el acta.' });
      return;
    }
    if (budgetInfra < 5) {
      setBudgetResult({ success: false, msg: '¡Alerta de Fractura! La asamblea ha rechazado el acta. Según los estatutos, al menos el 50% de los excedentes ($5M) deben reinvertirse en el bien común (infraestructura o fondo de emergencia) para garantizar la Redistribución Social.' });
    } else if (budgetStaff === 0) {
      setBudgetResult({ success: false, msg: '¡Alerta de Deserción! Si no destinas bonificaciones al talento humano (guías y operarios), la motivación caerá y abandonarán el proyecto.' });
    } else {
      setBudgetResult({ success: true, msg: '¡Acta Aprobada! Has logrado un equilibrio magistral. Fortaleciste el tejido social (comunidad), bonificaste a quienes ejecutaron el servicio (asociados) e impulsaste el crecimiento a futuro.' });
    }
  };

  const nextStep = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const prevStep = () => { 
    if (step === 7 && showEvaluation) {
      setShowEvaluation(false);
    } else if (step > 1) {
      setStep(step - 1); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const curso1QuizData = {
    courseName: "Ruta de Formación Turismo Comunitario",
    courseId: "C1-Gobernanza",
    horas: "5",
    questions: [
      {
        id: "q1",
        text: "¿Cuál es el núcleo de la Gobernanza en el turismo comunitario?",
        options: [
          { id: "a", text: "Dejar las decisiones en manos de un operador turístico externo." },
          { id: "b", text: "Que la asamblea o comunidad organice, decida y distribuya equitativamente." },
          { id: "c", text: "Que el líder con más recursos asuma toda la responsabilidad financiera." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q2",
        text: "Según el curso, ¿qué es la 'Fatiga Comunitaria'?",
        options: [
          { id: "a", text: "El cansancio físico de los guías al terminar los recorridos turísticos." },
          { id: "b", text: "El desgaste del tejido social por la desconfianza, la falta de equidad y los liderazgos impositivos." },
          { id: "c", text: "La disminución de turistas en temporada baja." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q3",
        text: "En la sostenibilidad rural, ¿cuáles son los tres ejes fundamentales que deben mantenerse en equilibrio indisoluble?",
        options: [
          { id: "a", text: "Ambiental, Social y Económico." },
          { id: "b", text: "Mercadeo, Ventas y Publicidad." },
          { id: "c", text: "Nacional, Departamental y Municipal." }
        ],
        correctHash: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
      },
      {
        id: "q4",
        text: "Para aprovechar el Patrimonio como producto turístico sin degradar la cultura local, ¿qué práctica se debe evitar?",
        options: [
          { id: "a", text: "Capacitar a los jóvenes de la vereda como guías." },
          { id: "b", text: "La folclorización (actuar tradiciones falsas o disfrazarse solo para agradar al turista)." },
          { id: "c", text: "Restringir el paso a ecosistemas extremadamente frágiles." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      },
      {
        id: "q5",
        text: "¿Por qué es fundamental establecer una 'Red Asociativa' con roles claros (Vocero, Financiero, Guía, etc.)?",
        options: [
          { id: "a", text: "Para delegar toda la responsabilidad en una sola persona." },
          { id: "b", text: "Para lograr complementariedad operativa confiando en las habilidades naturales de cada vecino." },
          { id: "c", text: "Para dividir la tierra de la vereda en parcelas más pequeñas." }
        ],
        correctHash: "3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"
      }
    ]
  };

  const handleMatch = (targetId) => {
    if (!selectedRole) return;
    if (selectedRole.target === targetId) {
      setMatchedRoles(prev => ({ ...prev, [targetId]: selectedRole }));
      setSelectedRole(null);
    } else {
      setShakeTarget(targetId);
      setTimeout(() => setShakeTarget(null), 500);
    }
  };

  const handleNodeClick = (id) => {
    if (!activeNodes.includes(id)) {
      setActiveNodes([...activeNodes, id]);
    }
  };

  let headerColor = '#032968';
  let headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  if (step === 2) {
    headerColor = '#055C38';
    headerGradient = 'linear-gradient(135deg, #16A34A 0%, #055C38 100%)';
  }
  else if (step === 3) {
    headerColor = '#ea580c';
    headerGradient = 'linear-gradient(135deg, #ea580c 0%, #9a3412 100%)';
  }
  else if (step === 4) {
    headerColor = '#032968';
    headerGradient = 'linear-gradient(135deg, #1e3a8a 0%, #032968 100%)';
  }
  else if (step === 5) {
    headerColor = '#2563eb';
    headerGradient = 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)';
  }
  else if (step === 6) {
    headerColor = '#166534';
    headerGradient = 'linear-gradient(135deg, #22c55e 0%, #14532d 100%)';
  }

  const FlipPillarCard = ({ icon: Icon, title, subtitle, content, color, bg, id }) => {
    return (
      <div
        className="interactive-card"
        style={{ perspective: '1000px', cursor: 'pointer', height: '100%', minHeight: '380px' }}
        onClick={() => toggleFlip(id)}
      >
        <div
          style={{
            position: 'relative', width: '100%', height: '100%',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transformStyle: 'preserve-3d',
            transform: flipped[id] ? 'rotateY(180deg)' : 'rotateY(0)'
          }}
        >
          {/* Frente */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: 'white', padding: '2rem', borderRadius: '25px', boxShadow: '0 10px 35px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', border: `2px solid ${color}30` }}>
            <div style={{ background: bg, width: '120px', height: '120px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', boxShadow: `0 10px 25px ${color}40` }}>
              <Icon size={60} color={color} />
            </div>
            <h4 style={{ color: color, fontSize: '1.8rem', fontWeight: '900', margin: '0 0 10px 0' }}>{title}</h4>
            <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>{subtitle}</p>
            <div style={{ marginTop: '25px', background: '#f1f5f9', padding: '8px 20px', borderRadius: '20px', color: '#475569', fontSize: '0.9rem', fontWeight: 'bold' }}>Clic para revelar</div>
          </div>
          {/* Dorso */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', background: bg, padding: '2.5rem', borderRadius: '25px', boxShadow: `0 15px 40px ${color}30`, transform: 'rotateY(180deg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `2px solid ${color}` }}>
            <h4 style={{ margin: '0 0 15px 0', fontWeight: '900', color: color, fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Icon size={28} /> {title}</h4>
            <div style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-container">
      <style>
        {`
          .shake-animation { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
          @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
          
          .pop-in { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
          @keyframes popIn { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          
          .chat-bubble-in { animation: chatIn 0.3s ease-out forwards; transform-origin: bottom left; }
          @keyframes chatIn { 0% { transform: scale(0.9) translateY(10px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }

          input[type=range].custom-slider {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
          }
          input[type=range].custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: #ffffff;
            border: 4px solid #0284c7;
            cursor: pointer;
            margin-top: -16px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: transform 0.1s;
          }
          input[type=range].custom-slider::-webkit-slider-thumb:active {
            transform: scale(1.1);
          }
          input[type=range].custom-slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: #e2e8f0;
            border-radius: 10px;
          }
          
          .node-line { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 1s ease forwards; }
          @keyframes drawLine { to { stroke-dashoffset: 0; } }

          .theory-block { background: white; border-radius: 20px; padding: 2.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.03); margin-bottom: 2rem; border-left: 5px solid ${headerColor}; }
          .theory-block h4 { color: ${headerColor}; font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; display: flex; alignItems: center; gap: 10px; }
          .theory-block p { color: #475569; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1rem; }
          
          .lab-badge { display: inline-flex; align-items: center; gap: 8px; background: #fef3c7; color: #d97706; padding: 8px 20px; border-radius: 30px; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem; border: 2px solid #fde68a; }
        `}
      </style>

      <div className="title-pill mb-4" style={{ background: '#dbeafe', color: '#0066FF', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <Lightbulb size={16} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '5px' }} />
        Formación en Turismo Comunitario
      </div>

      <div style={{ background: 'rgba(255,255,255,0.7)', borderRadius: '20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
        <span style={{ fontWeight: 700, color: '#475569', fontSize: '0.9rem' }}>Progreso:</span>
        <div style={{ flexGrow: 1, background: '#e2e8f0', height: '10px', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / totalSteps) * 100}%`, background: headerColor, height: '100%', borderRadius: '10px', transition: 'all 0.5s ease' }}></div>
        </div>
        <span style={{ fontWeight: 800, color: headerColor }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      <div className="glass-card" style={{ padding: '0', position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', flexDirection: 'column' }}>

        {/* --- MODULO 1: TURISMO COMUNITARIO --- */}
        {step === 1 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

            {/* Header Rediseñado con ILUSTRACIÓN SVG in-line garantizada */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0f2fe' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
                  <path fill="#7dd3fc" d="M0,300 L0,200 Q200,100 400,200 T800,200 T1200,200 L1200,300 Z" />
                  <path fill="#38bdf8" d="M0,300 L0,250 Q300,150 600,250 T1200,250 L1200,300 Z" />
                  <circle cx="950" cy="80" r="40" fill="#fef08a" />
                  {/* Arbolitos y casitas ilustradas */}
                  <path fill="#22c55e" d="M200,230 L220,180 L240,230 Z M210,230 L210,250 L230,250 L230,230 Z" />
                  <path fill="#16a34a" d="M800,280 L830,200 L860,280 Z M820,280 L820,300 L840,300 L840,280 Z" />
                  <rect x="500" y="220" width="60" height="40" fill="#fde047" />
                  <polygon points="490,220 530,190 570,220" fill="#ef4444" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 1</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Gobernanza y<br />Turismo Comunitario</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Un modelo organizativo campesino o indígena donde la asamblea local planifica, gestiona y distribuye equitativamente los dividendos del territorio.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Comunidad" alt="Comunidad" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="¿Qué es el turismo comunitario y la gobernanza?"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A1.wav"
                transcript={<p>Hola a todos. Vamos a empezar entendiendo qué es el turismo comunitario. No existe un solo modelo ni una sola forma de hacerlo. El turismo comunitario ocurre cuando los actores locales de un territorio —ya sean asociaciones, cooperativas, empresas locales, o grupos de la comunidad— se organizan para gestionar y ofrecer servicios turísticos. Lo que lo hace diferente es que el control y las decisiones importantes se toman en conjunto por la comunidad, no por un solo dueño externo.<br /><br />A esa capacidad de organizarse y tomar decisiones conjuntas le llamamos "gobernanza", y su herramienta principal suele ser la asamblea o la junta. En la práctica, se ven dos cosas: cuando la gobernanza funciona y los diferentes actores se ponen de acuerdo, se logra una "sinergia", que es cuando el trabajo rinde para todos. Pero cuando la comunicación falla o hay desconfianza por los recursos, se produce lo que llamamos "fatiga comunitaria", donde empiezan los conflictos. El turismo comunitario es un modelo de gestión que depende de cómo se organice la gente. Abajo van a encontrar una herramienta para ver cómo se ven estas dos situaciones.</p>}
                color={headerColor}
              />

              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Autonomía y Defensa del Territorio</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El turismo rural comunitario no es una simple actividad recreativa, es una <strong>herramienta de resistencia y conservación</strong>. Al organizar a las familias locales para prestar servicios de guianza o gastronomía, se frena el extractivismo de capitales externos y se consolida la autonomía económica del territorio. Haz clic en las tarjetas para descubrir los pilares:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  <FlipPillarCard
                    id="flip-gov1" icon={Users} title="Asamblea" subtitle="Órgano de decisión" color="#1d4ed8" bg="#dbeafe"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">El corazón de la Gobernanza.</p><p>Es el órgano supremo donde todas las decisiones estructurales y financieras se someten a votación comunitaria horizontal. Aquí no hay un "jefe" dueño de todo, la comunidad manda.</p>`}
                  />
                  <FlipPillarCard
                    id="flip-gov2" icon={Map} title="Identidad" subtitle="Producto Genuino" color="#15803d" bg="#dcfce7"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">Prohibida la folclorización.</p><p>Se vende la vida campesina real (el ordeño, la siembra, las arepas) sin inventar espectáculos falsos ni disfraces para complacer expectativas irreales del turista.</p>`}
                  />
                  <FlipPillarCard
                    id="flip-gov3" icon={Coins} title="Redistribución" subtitle="Economía local" color="#b45309" bg="#fef3c7"
                    content={`<p style="margin-bottom:15px;color:#1e293b;font-weight:bold;">Beneficio Colectivo.</p><p>Las utilidades netas del turismo no se van a la capital. Se reinvierten en infraestructura local (escuelas, acueductos) y fondos de emergencia para las familias de la vereda.</p>`}
                  />
                </div>
              </div>

              {/* Dinámica Rediseñada */}
              <div style={{ background: 'white', borderRadius: '25px', padding: '3rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica de Reflexión</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>De la Teoría a la Práctica</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>Selecciona una pestaña para comprender la fricción natural entre las reglas de papel y los desafíos humanos en las veredas.</p>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setSliderValue(0)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue < 50 ? '#166534' : '#f1f5f9', color: sliderValue < 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Target size={20} /> Visión Idealizada
                  </button>
                  <button onClick={() => setSliderValue(100)} style={{ padding: '15px 30px', borderRadius: '12px', border: 'none', background: sliderValue >= 50 ? '#b91c1c' : '#f1f5f9', color: sliderValue >= 50 ? 'white' : '#475569', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertTriangle size={20} /> Desgaste Práctico
                  </button>
                </div>

                <div style={{ padding: '3rem', borderRadius: '20px', background: sliderValue < 50 ? '#f0fdf4' : '#fef2f2', border: `2px solid ${sliderValue < 50 ? '#bbf7d0' : '#fecaca'}`, transition: 'all 0.4s ease', minHeight: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  {sliderValue < 50 ? (
                    <div className="fade-in">
                      <Target size={60} color="#16a34a" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#166534', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>Sinergia Perfecta</h4>
                      <p style={{ color: '#14532d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Toda la vereda respeta los estatutos de convivencia. Los guías, cocineras y dueños de fincas dividen los ingresos con exactitud matemática, y reinvierten felizmente en el salón comunal.</p>
                    </div>
                  ) : (
                    <div className="fade-in">
                      <AlertTriangle size={60} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
                      <h4 style={{ color: '#b91c1c', margin: '0 0 15px 0', fontSize: '1.8rem', fontWeight: 800 }}>Fatiga Comunitaria</h4>
                      <p style={{ color: '#7f1d1d', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Aparición de liderazgos caciquistas que acaparan a los turistas. Las familias se cansan de las largas reuniones, surge la desconfianza por el manejo de la caja menor y se rompe el tejido social por la envidia económica.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MODULO 2: SOSTENIBILIDAD --- */}
        {step === 2 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#dcfce7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bbf7d0" d="M0,300 L0,180 Q300,100 600,180 T1200,180 L1200,300 Z" />
                  <path fill="#86efac" d="M0,300 L0,220 Q400,150 800,220 T1200,220 L1200,300 Z" />
                  <path fill="#4ade80" d="M0,300 L0,260 Q600,180 1200,260 L1200,300 Z" />
                  <circle cx="200" cy="90" r="50" fill="#fef08a" />
                  {/* Patrón de hojitas / cascada SVG */}
                  <path fill="#3b82f6" d="M500,220 Q520,250 500,300 L550,300 Q540,250 560,220 Z" />
                  <circle cx="800" cy="200" r="15" fill="#16a34a" />
                  <circle cx="820" cy="220" r="25" fill="#15803d" />
                  <circle cx="770" cy="210" r="20" fill="#14532d" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 2</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>La Sostenibilidad<br />Rural</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Un delicado equilibrio ecosistémico donde conservar el agua importa tanto como asegurar el alimento en la mesa de las familias campesinas.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Naturaleza" alt="Naturaleza" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Los Tres Ejes de la Sostenibilidad</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>La sostenibilidad territorial es una articulación de tres fuerzas. Si el proyecto genera dinero pero agota los nacederos de agua, se convierte en una operación extractivista condenada al colapso. Si protege estrictamente la biodiversidad pero las familias continúan marginadas económicamente, el modelo es inviable y propicia el desplazamiento.</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Para que el tejido rural perdure, el beneficio económico (superávit), el respeto social (inclusión) y la capacidad de carga ambiental deben operar como un engranaje indisoluble.</p>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Aplicación de Ejes</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Acciones Fundamentales</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>Haz clic sobre cada pilar para revisar las medidas de mitigación requeridas en un sendero ecológico activo.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <FlipPillarCard
                    id="flip-amb" icon={Leaf} title="Ambiental" subtitle="Protección Ecosistémica" color="#16a34a" bg="#f0fdf4"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #16a34a;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#166534;font-size:1.1rem;display:block;margin-bottom:8px">Manejo de Capacidad de Carga:</strong> Evaluar cuántos caminantes soporta diariamente el sendero sin provocar erosión severa ni espantar a la avifauna residente.</div>`}
                  />
                  <FlipPillarCard
                    id="flip-soc" icon={Users} title="Social" subtitle="Inclusión Intergeneracional" color="#ea580c" bg="#fff7ed"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #ea580c;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#9a3412;font-size:1.1rem;display:block;margin-bottom:8px">Salvaguardia de Saberes:</strong> Incorporar a los abuelos en el recorrido turístico no como adornos, sino como portadores de la memoria viva y guardianes de las plantas medicinales.</div>`}
                  />
                  <FlipPillarCard
                    id="flip-eco" icon={Coins} title="Económico" subtitle="Viabilidad Financiera" color="#2563eb" bg="#eff6ff"
                    content={`<div style="background:white;padding:20px;border-radius:15px;border-left:5px solid #2563eb;text-align:left;box-shadow:0 5px 15px rgba(0,0,0,0.05);"><strong style="color:#1e40af;font-size:1.1rem;display:block;margin-bottom:8px">Cálculo de Depreciación:</strong> La rentabilidad debe prever el deterioro físico. Apartar fondos permanentes para la reparación de puentes, señalética y equipos de montaña.</div>`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MODULO 3: PATRIMONIO --- */}
        {step === 3 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#ffedd5' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#fed7aa" d="M0,300 L0,200 Q150,150 300,200 T600,200 T900,200 T1200,200 L1200,300 Z" />
                  <path fill="#fdba74" d="M0,300 L0,240 Q300,180 600,240 T1200,240 L1200,300 Z" />
                  {/* Ilustración de ruinas / vasijas y notas musicales */}
                  <rect x="250" y="210" width="80" height="90" fill="#ea580c" />
                  <polygon points="240,210 290,160 340,210" fill="#9a3412" />
                  <path fill="#c2410c" d="M800,200 Q830,160 860,200 Q880,250 830,290 Q780,250 800,200 Z" />
                  <path fill="#9a3412" d="M700,100 Q720,50 740,100 T760,150" fill="none" stroke="#9a3412" strokeWidth="5" />
                  <circle cx="760" cy="150" r="10" fill="#9a3412" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 3</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Tesoros Locales:<br />El Patrimonio</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>En el turismo cultural, el oro no se extrae, el oro se muestra y se protege. Conoce las dos caras de la moneda de nuestra riqueza.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Patrimonio" alt="Patrimonio" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> La Materia Prima del Turismo</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El Patrimonio rural es la herencia cultural viva de una comunidad, no una pieza de museo. Es la <strong>materia prima principal</strong> de cualquier proyecto comunitario. Sin embargo, su mercantilización extrema puede llevar a la <em>folclorización</em> (actuar tradiciones falsas o exageradas únicamente para satisfacer al forastero).</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>El reto es transformar ese patrimonio en un producto turístico sin que pierda su dignidad, dividiéndolo conceptualmente en dos vertientes clásicas:</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                {/* ESTUDIO DE CASO: TANGIBLE (BARICHARA) */}
                <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
                  <div style={{ height: '220px', position: 'relative', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ padding: '20px' }}>
                      <rect x="30" y="80" width="140" height="70" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                      <rect x="90" y="110" width="20" height="40" fill="#64748b" />
                      <rect x="50" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                      <rect x="130" y="100" width="20" height="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                      <polygon points="10,80 100,20 190,80" fill="#ef4444" />
                      <polygon points="30,80 100,35 170,80" fill="#f87171" />
                    </svg>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#032968', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Tangible</div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <Map size={16} /> Barichara, Santander
                    </div>
                    <h4 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, margin: '0 0 15px 0' }}>El rescate de la tapia pisada</h4>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                      <strong>Antes del turismo:</strong> Las casas patrimoniales de tierra se derrumbaban al ser percibidas como "símbolo de pobreza", reemplazadas por ladrillo industrial.<br /><br />
                      <strong>Impacto SPEC:</strong> El turismo comunitario de alto valor arquitectónico convirtió la tapia en un activo económico. Los habitantes locales fundaron escuelas taller de oficios tradicionales para restaurar fachadas, multiplicando por 10 el valor de sus propiedades y <strong>salvaguardando el paisaje cultural</strong> que hoy es monumento nacional.
                    </p>
                  </div>
                </div>

                {/* ESTUDIO DE CASO: INTANGIBLE (PACÍFICO/CAFÉ) */}
                <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0' }}>
                  <div style={{ height: '220px', position: 'relative', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 200 150" width="100%" height="100%" style={{ padding: '20px' }}>
                      <path d="M40,140 Q100,50 160,140" fill="none" stroke="#22c55e" strokeWidth="8" />
                      <path d="M100,100 Q150,100 130,50 Q80,50 100,100" fill="#16a34a" />
                      <path d="M90,120 Q40,120 60,70 Q110,70 90,120" fill="#15803d" />
                      <circle cx="130" cy="50" r="12" fill="#ef4444" />
                      <circle cx="60" cy="70" r="10" fill="#dc2626" />
                      <circle cx="90" cy="40" r="8" fill="#b91c1c" />
                    </svg>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ea580c', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Intangible</div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>
                      <Map size={16} /> Paisaje Cultural Cafetero, Quindío
                    </div>
                    <h4 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, margin: '0 0 15px 0' }}>La cultura del recolector</h4>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                      <strong>Antes del turismo:</strong> Los cantos de vaquería y la técnica de recolección de café manual estaban muriendo por el desinterés de los jóvenes rurales que migraban a la ciudad.<br /><br />
                      <strong>Impacto SPEC:</strong> Al estructurar la "Ruta de la Finca Tradicional", el turista paga por la <em>experiencia viva</em>. Los abuelos volvieron a ser los maestros (guías principales), el dialecto campesino se reconoció como valor cultural y los jóvenes encontraron en el turismo una razón económica para <strong>preservar la herencia de sus ancestros</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MODULO 4: ASOCIATIVIDAD Y EQUIPO --- */}
        {step === 4 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0e7ff' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#c7d2fe" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#a5b4fc" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
                  {/* Nodos conectados estilo red */}
                  <line x1="300" y1="200" x2="500" y2="150" stroke="#4f46e5" strokeWidth="4" />
                  <line x1="500" y1="150" x2="800" y2="220" stroke="#4f46e5" strokeWidth="4" />
                  <line x1="800" y1="220" x2="900" y2="150" stroke="#4f46e5" strokeWidth="4" />
                  <circle cx="300" cy="200" r="15" fill="#4338ca" />
                  <circle cx="500" cy="150" r="20" fill="#4338ca" />
                  <circle cx="800" cy="220" r="25" fill="#4338ca" />
                  <circle cx="900" cy="150" r="15" fill="#4338ca" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 4</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>La Red Asociativa<br />(Trabajo en Colectivo)</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Unirse no es simplemente amontonarse. La asociatividad exige delegar la autoridad productiva y confiar plenamente en los roles de los vecinos.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Equipo" alt="Equipo" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="La Red Asociativa y los Roles"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A2.wav"
                transcript={<p>Pasemos ahora al concepto de la "red asociativa". En una iniciativa de turismo, una sola persona, o incluso un solo negocio, rara vez puede hacerlo todo solo. Una red asociativa es cuando los diferentes actores del territorio se unen y se reparten las tareas según lo que cada uno sabe hacer mejor, formando una cadena.<br /><br />Por ejemplo, hay quienes tienen mucha facilidad para negociar, ellos asumen el rol de <strong>Voceros</strong>. Otros son muy organizados con los números, esos asumen el rol <strong>Financiero</strong> para llevar las cuentas claras. El que conoce bien el terreno y tiene manejo de grupos, asume el rol de <strong>Guía</strong>. Y el que sabe manejar la tecnología para vender la ruta, es el <strong>Creador</strong>. Trabajar en red significa que cada eslabón se enfoca en hacer su parte muy bien, y confía en que los demás harán la suya para que el turista tenga una buena experiencia. En el ejercicio que sigue, van a poder ver cómo se acomoda cada uno de estos roles.</p>}
                color={headerColor}
              />
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> Anatomía del Equipo Comunitario</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>El 90% de los proyectos de turismo rural fracasan no por falta de atractivo natural, sino por <strong>la desintegración de la red interna</strong>. La asociatividad es la integración voluntaria donde diferentes nodos (fincas posadas, transportistas, guías, artesanos) unen sus eslabones.</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Exige tres pilares: <strong>Confianza plena</strong> en el cumplimiento ajeno, <strong>Objetivos unificados</strong> para la rentabilidad de la vereda, y <strong>Complementariedad técnica</strong> (asignar tareas con base en habilidades naturales y no favoritismos).</p>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica 1: Roles Claros</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Complementariedad Operativa</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem' }}>Toca un talento humano (avatar) y asígnalo a su estación de responsabilidad territorial.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  {roles.filter(r => !Object.values(matchedRoles).find(m => m.id === r.id)).map(role => (
                    <div
                      key={role.id} onClick={() => setSelectedRole(role)}
                      style={{ padding: '1rem', background: selectedRole?.id === role.id ? '#eff6ff' : 'white', border: selectedRole?.id === role.id ? '3px solid #3b82f6' : '3px solid #e2e8f0', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', width: '120px' }}>
                      <img src={role.img} alt={role.title} style={{ height: '70px', marginBottom: '10px' }} />
                      <h5 style={{ margin: 0, color: '#334155', fontSize: '0.9rem' }}>{role.title}</h5>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {[
                    { id: 'alianzas', label: 'Gestión de Alianzas', icon: <HeartHandshake size={30} color="#3b82f6" /> },
                    { id: 'dinero', label: 'Libros de Cuentas', icon: <TrendingUp size={30} color="#10b981" /> },
                    { id: 'turistas', label: 'Líder de Recorridos', icon: <Map size={30} color="#f59e0b" /> },
                    { id: 'redes', label: 'Marketing Visual', icon: <Camera size={30} color="#8b5cf6" /> }
                  ].map(zone => (
                    <div
                      key={zone.id} onClick={() => handleMatch(zone.id)} className={shakeTarget === zone.id ? 'shake-animation' : ''}
                      style={{ border: matchedRoles[zone.id] ? `3px solid ${matchedRoles[zone.id].color}` : '3px dashed #cbd5e1', background: matchedRoles[zone.id] ? `${matchedRoles[zone.id].color}15` : 'white', borderRadius: '20px', padding: '1.5rem', textAlign: 'center', cursor: selectedRole ? 'pointer' : 'default', transition: 'all 0.3s' }}>
                      {matchedRoles[zone.id] ? (
                        <div className="pop-in">
                          <img src={matchedRoles[zone.id].img} alt="" style={{ height: '60px', marginBottom: '10px' }} />
                          <h4 style={{ margin: '0 0 5px 0', color: matchedRoles[zone.id].color }}>{matchedRoles[zone.id].title}</h4>
                          <div style={{ background: 'white', padding: '5px', borderRadius: '10px', fontSize: '0.8rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center' }}><Award size={14} color="#16a34a" /> {matchedRoles[zone.id].benefit}</div>
                        </div>
                      ) : (
                        <div style={{ opacity: 0.5 }}><div style={{ marginBottom: '10px' }}>{zone.icon}</div><h5 style={{ margin: 0, color: '#64748b' }}>{zone.label}</h5></div>
                      )}
                    </div>
                  ))}
                </div>

                {Object.keys(matchedRoles).length === 4 && (
                  <div className="pop-in" style={{ marginTop: '3rem', background: '#e0e7ff', padding: '3rem 2rem', borderRadius: '25px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#c7d2fe', color: '#4338ca', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica 2: Cadena de Valor</div>
                    <h3 style={{ color: '#312e81', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Consolidar la Red</h3>
                    <p style={{ color: '#4338ca', fontSize: '1.1rem', marginBottom: '3rem' }}>Ahora toca los 4 nodos logísticos rurales para enlazar la experiencia del viajero mediante una comunicación fluida.</p>

                    <div style={{ width: '300px', height: '300px', position: 'relative', margin: '2rem auto' }}>
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                        {activeNodes.includes(1) && activeNodes.includes(2) && <line x1="25" y1="25" x2="275" y2="25" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(2) && activeNodes.includes(3) && <line x1="275" y1="25" x2="275" y2="275" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(3) && activeNodes.includes(4) && <line x1="275" y1="275" x2="25" y2="275" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                        {activeNodes.includes(4) && activeNodes.includes(1) && <line x1="25" y1="275" x2="25" y2="25" stroke="#3730a3" strokeWidth="4" className="node-line" />}
                      </svg>
                      {[{ id: 1, top: 0, left: 0, label: 'Guianza' }, { id: 2, top: 0, right: 0, label: 'Transporte' }, { id: 3, bottom: 0, right: 0, label: 'Hospedaje' }, { id: 4, bottom: 0, left: 0, label: 'Cocina Local' }].map(node => (
                        <div key={node.id} onClick={() => handleNodeClick(node.id)} style={{ position: 'absolute', width: '50px', height: '50px', background: activeNodes.includes(node.id) ? '#3730a3' : 'white', border: '4px solid #3730a3', borderRadius: '50%', zIndex: 2, cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeNodes.includes(node.id) ? 'white' : '#3730a3', ...(node.top !== undefined ? { top: node.top } : {}), ...(node.bottom !== undefined ? { bottom: node.bottom } : {}), ...(node.left !== undefined ? { left: node.left } : {}), ...(node.right !== undefined ? { right: node.right } : {}) }}>
                          {activeNodes.includes(node.id) ? <Check size={20} /> : <span style={{ fontWeight: 'bold' }}>{node.id}</span>}
                          <div style={{ position: 'absolute', top: node.top === 0 ? '-30px' : '60px', color: '#3730a3', fontWeight: 'bold', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{node.label}</div>
                        </div>
                      ))}
                    </div>

                    {activeNodes.length === 4 && (
                      <div className="pop-in" style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                        <h4 style={{ color: '#312e81', margin: '0 0 10px 0', fontSize: '1.2rem' }}>¡El encadenamiento está asegurado!</h4>
                        <p style={{ color: '#475569', margin: 0 }}>Si un solo nodo de la vereda falla (ej. el transporte rural se retrasa o la cocinera no recibe el mensaje), la cadena completa colapsa frente al turista. La comunicación oportuna blinda la red.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- MODULO 5: RESOLUCION DE CONFLICTOS --- */}
        {step === 5 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#e0f2fe' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
                  {/* Ilustración de dos lados comunicándose */}
                  <path fill="#7dd3fc" d="M300,250 Q300,180 400,180 L450,180 Q450,250 300,250 Z" />
                  <path fill="#38bdf8" d="M900,250 Q900,180 800,180 L750,180 Q750,250 900,250 Z" />
                  <path fill="none" stroke="#0284c7" strokeWidth="4" strokeDasharray="10 10" d="M450,210 C550,150 650,150 750,210" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 5</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Mediación y Resolución<br />de Conflictos</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Donde hay familias vecinas y dinero de por medio, habrá tensiones. Ignorar la fricción destruye el tejido; gestionarla madura la gobernanza.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Mediacion" alt="Mediación" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              <div className="interactive-card" style={{ background: 'linear-gradient(to right, #f8fafc, #f1f5f9)', border: `2px solid ${headerColor}30`, borderRadius: '20px', padding: '2.5rem', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <h4 style={{ color: headerColor, fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BookOpen size={24} /> El Conflicto Rural es Natural</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>En los esquemas asociativos, <strong>el conflicto no es sinónimo de un proyecto fallido</strong>. Es el síntoma natural de la convivencia local. Suele originarse por una mala comunicación interna, rumores vecinales, o la competencia directa por los turistas (cuando alguien quiere acaparar ingresos).</p>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.7' }}>Las organizaciones campesinas más fuertes no son las que jamás pelean, sino las que institucionalizan la mediación a través de su asamblea y aplican los 3 pasos de oro:</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>1. Escucha Activa</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Permitir que las partes desahoguen la emoción sin interrumpir y sin prejuicios durante las reuniones de comité.</span>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>2. Enfriamiento</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Prohibición de tomar decisiones en caliente, especialmente aquellas relacionadas con castigos severos o distribución financiera.</span>
                  </div>
                  <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '1px solid #e2e8f0', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <strong style={{ color: headerColor, fontSize: '1.1rem' }}>3. Acuerdo Justo</strong>
                    <span style={{ color: '#64748b', fontSize: '0.95rem' }}>Llevar el consenso final a los estatutos por escrito, creando un precedente para evitar que la fricción se repita a futuro.</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f1f5f9', borderRadius: '25px', padding: '3rem 2rem', border: '2px dashed #cbd5e1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fef3c7', color: '#d97706', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}><Edit3 size={16} /> Dinámica Práctica: El Chat Veredal</div>
                <h3 style={{ color: '#0f172a', margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 900 }}>Tensión en el Sendero</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', textAlign: 'center' }}><strong>Caso real:</strong> En plena temporada alta, la Finca "El Edén" está acaparando a todos los visitantes, rompiendo los acuerdos de rotación de la asociación. Las demás familias exigen su expulsión. Asume el rol de mediador de la asamblea.</p>

                <div style={{ width: '100%', maxWidth: '600px', background: 'white', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ background: headerColor, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ background: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MessageCircle size={24} color={headerColor} /></div>
                    <div>
                      <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Grupo: Asociación Campesina</h3>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Escribiendo...</span>
                    </div>
                  </div>

                  <div style={{ padding: '2rem', background: '#f1f5f9', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="chat-bubble-in" style={{ background: 'white', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <strong style={{ color: '#ef4444', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Familia González (Guías)</strong>
                      ¡Es un atropello! La Finca El Edén atendió a los 20 turistas y los retuvo toda la tarde. Nosotros nos quedamos con las viandas preparadas. ¡Exigimos que los saquen de la asociación ya mismo! 😡
                    </div>
                    <div className="chat-bubble-in" style={{ animationDelay: '0.5s', animationFillMode: 'both', background: 'white', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '85%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                      <strong style={{ color: '#f59e0b', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Doña Carmen (Hospedaje)</strong>
                      Si las cosas siguen así, yo también me salgo del proyecto. No trabajamos meses para que un solo vecino se lleve el dinero de toda la ruta.
                    </div>

                    {chatStep === 0 && (
                      <div className="fade-in" style={{ marginTop: '20px' }}>
                        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginBottom: '15px' }}>Elige tu respuesta táctica basada en mediación comunitaria:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <button onClick={() => setChatStep(2)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción A) Castigo Inmediato: Tiene toda la razón la familia González. Finca El Edén queda suspendida un mes por acaparamiento egoísta.
                          </button>
                          <button onClick={() => setChatStep(3)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción B) Enfriamiento e Institucionalidad: Les entiendo la molestia y el impacto. No decidamos enojados. Mañana en la noche citamos a asamblea extraordinaria para oír a El Edén y ajustar las multas del reglamento de rotación.
                          </button>
                          <button onClick={() => setChatStep(2)} style={{ padding: '12px', background: headerColor, color: 'white', border: 'none', borderRadius: '20px 20px 0 20px', alignSelf: 'flex-end', cursor: 'pointer', maxWidth: '90%', textAlign: 'right', transition: 'background 0.2s', fontSize: '0.95rem' }}>
                            (Opción C) Libre Mercado: Compañeros, esto es libre competencia. Si los turistas prefirieron quedarse allá toda la tarde, es porque ofrecen un mejor servicio. ¡Mejoren sus fincas!
                          </button>
                        </div>
                      </div>
                    )}

                    {chatStep === 2 && (
                      <div className="chat-bubble-in shake-animation" style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginTop: '20px' }}>
                        <strong style={{ color: '#b91c1c', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Finca El Edén</strong>
                        ¡Qué autoritarismo! Nos retiramos del proyecto. Igual los turistas nos buscan a nosotros directamente. Adiós. 🚪💥<br /><br />
                        <span style={{ fontSize: '0.85rem', color: '#7f1d1d', fontWeight: 'bold' }}>❌ FRACTURA COMUNITARIA. Ignoraste la mediación. Destruiste el tejido asociativo aplicando castigos impulsivos o la lógica del mercado voraz que desprotege al débil.</span>
                        <button onClick={() => setChatStep(0)} style={{ display: 'block', marginTop: '10px', padding: '8px 20px', background: 'white', border: '2px solid #fca5a5', borderRadius: '10px', color: '#b91c1c', cursor: 'pointer', fontWeight: 'bold' }}>Replantear Estrategia</button>
                      </div>
                    )}

                    {chatStep === 3 && (
                      <div className="chat-bubble-in" style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a', padding: '15px', borderRadius: '0 20px 20px 20px', maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginTop: '20px' }}>
                        <strong style={{ color: '#15803d', fontSize: '0.85rem', display: 'block', marginBottom: '5px' }}>Junta Directiva</strong>
                        Es lo correcto, líder. Calmemos los ánimos y nos vemos mañana en la caseta comunal. Llevaremos los estatutos impresos. 🙏📝<br /><br />
                        <span style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 'bold' }}>✅ GOBERNANZA RESILIENTE. Excelente mediación. Aplicaste el "enfriamiento" y derivaste el problema hacia el "acuerdo institucional" para fortalecer las reglas del juego.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MODULO 6: JUEGO PRÁCTICO FINAL --- */}
        {step === 6 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#dcfce7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#bbf7d0" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#86efac" d="M0,300 L0,200 Q400,120 800,200 T1200,200 L1200,300 Z" />
                  {/* Ilustración de trofeo y estrellas */}
                  <circle cx="600" cy="180" r="50" fill="#fde047" />
                  <path fill="#eab308" d="M570,160 L630,160 L610,230 L590,230 Z" />
                  <circle cx="500" cy="100" r="10" fill="#fef08a" />
                  <circle cx="700" cy="120" r="15" fill="#fef08a" />
                  <circle cx="850" cy="90" r="8" fill="#fef08a" />
                </svg>
              </div>
              <div style={{ background: headerGradient, padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Módulo 6 (Final)</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Simulador de<br />Casos Reales</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Pon a prueba todo lo aprendido enfrentando un caso complejo de necesidades, roles, responsabilidades y beneficios en la asociación.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Graduado" alt="Éxito" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>

              <PodcastPlayer
                title="El Presupuesto y las Utilidades"
                subtitle="Audio Instructor"
                audioSrc="/audio/Modulo1-A3.wav"
                transcript={<p>Para terminar, vamos a ver cómo funciona el tema financiero en estos modelos organizativos. Cuando un proyecto comunitario genera utilidades, el objetivo de esos excedentes va más allá del beneficio individual.<br /><br />Por lo general, una parte de esa utilidad se destina al <strong>bien común</strong>, es decir, a reinvertir en el territorio: mejorar un sendero, arreglar infraestructura local o crear un fondo de emergencia para la organización. La otra parte se destina a dar <strong>bonificaciones o pagos justos</strong> a las personas que operaron directamente los servicios, como los guías, transportadores o quienes prepararon los alimentos. La clave de la viabilidad financiera está en buscar un punto medio: si todo se va a la infraestructura, quienes trabajan el día a día se desmotivan; y si todo se va al pago individual, el destino no se desarrolla ni se mantiene. A continuación, van a encontrar un simulador de 10 millones de pesos para que ustedes mismos hagan el ejercicio de cómo buscar ese equilibrio.</p>}
                color={headerColor}
              />
              <div style={{ background: 'white', borderRadius: '25px', padding: '3rem 2rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534' }}><Coins size={32} /></div>
                  <div>
                    <h3 style={{ color: '#0f172a', margin: '0', fontSize: '1.5rem', fontWeight: 900 }}>Herramienta: Presupuesto Participativo</h3>
                    <p style={{ color: '#475569', margin: '5px 0 0 0', fontSize: '1rem' }}>Laboratorio de Gobernanza Financiera</p>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '15px', borderLeft: '5px solid #032968', marginBottom: '2.5rem' }}>
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', margin: 0 }}>
                    Al cierre del ciclo turístico, la asociación ha generado <strong>$10 Millones de pesos</strong> de utilidad neta. Como líder de la Asamblea, debes proyectar la distribución de este excedente utilizando la matriz presupuestal.
                    <br /><br /><strong>Objetivo:</strong> Repartir los fondos asegurando la sostenibilidad del bien común y el incentivo justo a los operadores, sin romper los estatutos comunitarios.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', background: 'white', padding: '2rem', borderRadius: '20px', border: '2px solid #e2e8f0' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '2px dashed #cbd5e1' }}>
                    <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a' }}>Fondos Disponibles</h4>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: remainingBudget > 0 ? '#0ea5e9' : '#16a34a' }}>
                      ${remainingBudget} Millones
                    </div>
                  </div>

                  {/* Fila 1: Infraestructura y Bien Común */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldAlert size={18} color="#032968" /> Infraestructura y Bien Común (Techos, Acueducto, Fondo Social)</strong>
                      <span style={{ fontWeight: 'bold', color: '#032968' }}>${budgetInfra}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetInfra}
                      onChange={(e) => handleBudgetChange(setBudgetInfra, e.target.value, budgetInfra)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#032968' }}
                    />
                  </div>

                  {/* Fila 2: Bonificación a Guías y Operadores */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={18} color="#b45309" /> Bonificación Extra (Talento Humano y Guianza)</strong>
                      <span style={{ fontWeight: 'bold', color: '#b45309' }}>${budgetStaff}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetStaff}
                      onChange={(e) => handleBudgetChange(setBudgetStaff, e.target.value, budgetStaff)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#b45309' }}
                    />
                  </div>

                  {/* Fila 3: Marketing y Proyección */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}><Target size={18} color="#059669" /> Marketing y Promoción (Mejora comercial)</strong>
                      <span style={{ fontWeight: 'bold', color: '#059669' }}>${budgetMarketing}M</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="1"
                      value={budgetMarketing}
                      onChange={(e) => handleBudgetChange(setBudgetMarketing, e.target.value, budgetMarketing)}
                      style={{ width: '100%', cursor: 'pointer', accentColor: '#059669' }}
                    />
                  </div>

                  <button
                    onClick={evaluateBudget}
                    style={{ marginTop: '1rem', background: headerColor, color: 'white', border: 'none', padding: '15px 30px', borderRadius: '15px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: `0 10px 20px ${headerColor}40`, transition: 'all 0.2s' }}
                  >
                    Someter Acta a la Asamblea Comunal
                  </button>

                  {budgetResult && (
                    <div className="pop-in" style={{ padding: '2rem', borderRadius: '15px', border: `2px solid ${budgetResult.success ? '#16a34a' : '#ef4444'}`, background: budgetResult.success ? '#f0fdf4' : '#fef2f2', display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {budgetResult.success ? <CheckCircle2 size={50} color="#16a34a" /> : <AlertTriangle size={50} color="#ef4444" />}
                      <div>
                        <h4 style={{ color: budgetResult.success ? '#166534' : '#b91c1c', fontSize: '1.3rem', margin: '0 0 10px 0' }}>{budgetResult.success ? 'Gobernanza Exitosa' : 'Resolución Rechazada'}</h4>
                        <p style={{ color: budgetResult.success ? '#14532d' : '#7f1d1d', margin: 0, fontSize: '1.05rem', lineHeight: '1.5' }}>{budgetResult.msg}</p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULO 7: CERTIFICACION Y EVALUACION */}
        {step === 7 && (
          <div className="fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '25px', display: 'flex', flexDirection: 'column', background: '#fef3c7' }}>
              <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                  <path fill="#fde68a" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
                  <path fill="#fcd34d" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
                  <circle cx="300" cy="200" r="15" fill="#f59e0b" />
                  <circle cx="500" cy="150" r="20" fill="#f59e0b" />
                  <circle cx="800" cy="220" r="25" fill="#f59e0b" />
                  <circle cx="900" cy="150" r="15" fill="#f59e0b" />
                </svg>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)', padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 2, marginTop: '-30px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px', boxShadow: '0 -15px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block', color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Cierre y Evaluación</div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}>Certificación<br />Oficial</h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', fontWeight: 400, maxWidth: '600px', lineHeight: 1.5 }}>Demuestra lo aprendido en el curso y obtén tu sello verificable de Cultura T.</p>
                </div>
                <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                  <img src="https://api.dicebear.com/9.x/micah/svg?seed=Certificado&backgroundColor=fef08a" alt="Logro" style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', padding: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem clamp(1rem, 3vw, 3rem)' }}>
              {!showEvaluation ? (
                <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <Award size={64} color="#eab308" style={{ margin: '0 auto 1rem auto' }} />
                  <h2 style={{ color: '#0f172a', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>¡Has completado el contenido!</h2>
                  <p style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Felicidades por completar el estudio de los módulos de Gobernanza y Turismo Comunitario. Si lo deseas, puedes realizar la evaluación de conocimientos para obtener tu certificado oficial.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => navigate('/cursos')} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#f1f5f9', color: '#475569', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                      Terminar y Salir
                    </button>
                    <button onClick={() => setShowEvaluation(true)} style={{ padding: '1rem 2rem', borderRadius: '12px', background: '#d97706', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(217,119,6,0.2)' }}>
                      Obtener Certificado (Opcional) <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <CourseEvaluation quizData={curso1QuizData} />
              )}
            </div>
          </div>
        )}

      </div>

      <div className="next-prev-container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 1rem' }}>
        {step === 1 ? (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: 'white', color: '#64748b', boxShadow: 'none', border: '2px solid #e2e8f0', cursor: 'pointer' }}>
            <ArrowLeft size={18} /> Salir
          </button>
        ) : (
          <button onClick={prevStep} className="btn-primary" style={{ background: 'white', color: '#475569', boxShadow: 'none', border: '2px solid #cbd5e1', cursor: 'pointer' }}>
            <ArrowLeft size={18} /> Anterior
          </button>
        )}

        {step < totalSteps ? (
          <button onClick={nextStep} className="btn-primary" style={{ background: headerColor, boxShadow: `0 10px 20px ${headerColor}40`, cursor: 'pointer', border: 'none', color: 'white' }}>
            Siguiente Módulo <ArrowRight size={18} />
          </button>
        ) : (
          <button onClick={() => navigate('/cursos')} className="btn-primary" style={{ background: '#166534', boxShadow: '0 10px 20px rgba(22,101,52,0.3)', cursor: 'pointer', border: 'none', color: 'white' }}>
            Terminar y Salir
          </button>
        )}
      </div>

    </div>
  );
}
