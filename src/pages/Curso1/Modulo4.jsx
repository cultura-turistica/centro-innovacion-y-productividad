import React, { useState } from 'react';
import { HeartHandshake, TrendingUp, Map, Camera, Award, Check, Edit3, BookOpen } from 'lucide-react';
import TPodcastPlayer from '../../components/tailwind/TPodcastPlayer';

const roles = [
  { id: 1, title: 'El Vocero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Felix&backgroundColor=b6e3f4&mouth=smile,laughing', target: 'alianzas', color: '#3b82f6', benefit: 'Reconocimiento y liderazgo', task: 'Negocia con proveedores' },
  { id: 2, title: 'El Financiero', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Maria&backgroundColor=c0aede&mouth=smile,laughing', target: 'dinero', color: '#10b981', benefit: 'Confianza y estabilidad', task: 'Registra los ingresos' },
  { id: 3, title: 'El Guía', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Oliver&backgroundColor=ffdfbf&mouth=smile,laughing', target: 'turistas', color: '#f59e0b', benefit: 'Intercambio cultural', task: 'Recorre el sendero' },
  { id: 4, title: 'El Creador', img: 'https://api.dicebear.com/9.x/micah/svg?seed=Sam&backgroundColor=d1d4f9&mouth=smile,laughing', target: 'redes', color: '#8b5cf6', benefit: 'Expansión de la ruta', task: 'Toma fotos y videos' }
];

export default function Modulo4({ data, theme = 'indigo' }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [matchedRoles, setMatchedRoles] = useState({});
  const [shakeTarget, setShakeTarget] = useState(null);
  const [activeNodes, setActiveNodes] = useState([]);

  const themes = {
    indigo: {
      headerBg: 'bg-indigo-600 bg-linear-to-br from-indigo-600 to-violet-500',
      bg: 'bg-indigo-600',
      text: 'text-indigo-600',
      border: 'border-indigo-600'
    },
    blue: {
      headerBg: 'bg-blue-600 bg-linear-to-br from-blue-600 to-sky-400',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    }
  };

  const t = themes[theme] || themes.indigo;

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

  return (
    <div className="flex flex-col flex-1 pb-10">
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-indigo-50 shadow-sm mb-10">
        <div className="w-full h-[200px] relative overflow-hidden">
          <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#c7d2fe" d="M0,300 L0,150 Q300,80 600,150 T1200,150 L1200,300 Z" />
            <path fill="#a5b4fc" d="M0,300 L0,220 Q400,160 800,220 T1200,220 L1200,300 Z" />
            <line x1="300" y1="200" x2="500" y2="150" stroke="#4f46e5" strokeWidth="4" />
            <line x1="500" y1="150" x2="800" y2="220" stroke="#4f46e5" strokeWidth="4" />
            <line x1="800" y1="220" x2="900" y2="150" stroke="#4f46e5" strokeWidth="4" />
            <circle cx="300" cy="200" r="15" fill="#4338ca" />
            <circle cx="500" cy="150" r="20" fill="#4338ca" />
            <circle cx="800" cy="220" r="25" fill="#4338ca" />
            <circle cx="900" cy="150" r="15" fill="#4338ca" />
            <polygon points="900,250 930,200 960,250" fill="#312e81" />
          </svg>
        </div>
        <div className={`${t.headerBg} px-8 py-10 flex items-center gap-8 relative z-10 -mt-8 rounded-t-[30px] rounded-b-[20px] shadow-lg`}>
          <div className="flex-1">
            <div className="bg-white/20 px-4 py-1.5 rounded-full inline-block text-white font-semibold mb-4 text-sm backdrop-blur-sm">
              {data.header.label}
            </div>
            <h3 
              className="text-white mb-4 text-3xl md:text-5xl font-black leading-tight drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: data.header.title }}
            ></h3>
            <p className="text-white/90 text-lg font-medium max-w-2xl leading-relaxed">
              {data.header.description}
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://api.dicebear.com/9.x/micah/svg?seed=Equipo" 
              alt="Equipo" 
              className="w-32 h-32 bg-white rounded-full p-2 shadow-xl border-4 border-white/30" 
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12">
        <TPodcastPlayer
          title={data.podcast.title}
          subtitle={data.podcast.subtitle}
          audioSrc={data.podcast.audioSrc}
          transcript={<div dangerouslySetInnerHTML={{ __html: data.podcast.transcript }} />}
          colorClass={t.text}
          bgClass={t.bg}
          borderClass={t.border}
        />

        <div className={`bg-linear-to-r from-slate-50 to-slate-100 border-2 ${t.border} border-opacity-30 rounded-[30px] p-8 md:p-10 relative shadow-lg mb-12`}>
          <h4 className={`${t.text} text-2xl font-extrabold mb-6 flex items-center gap-3`}>
            <BookOpen size={28} /> {data.interactiveCard.title}
          </h4>
          {data.interactiveCard.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium mb-6" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[25px] p-8 md:p-12 text-center border-2 border-dashed border-slate-300 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-extrabold text-sm uppercase mb-6 tracking-wide">
            <Edit3 size={18} /> {data.dinamica1.label}
          </div>
          <h3 className="text-slate-900 text-3xl md:text-4xl font-black mb-4">{data.dinamica1.title}</h3>
          <p className="text-slate-600 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto">
            {data.dinamica1.description}
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {roles.filter(r => !Object.values(matchedRoles).find(m => m.id === r.id)).map(role => (
              <div
                key={role.id} onClick={() => setSelectedRole(role)}
                className={`p-4 bg-white rounded-2xl cursor-pointer transition-all duration-200 shadow-md text-center w-[130px] border-4 ${selectedRole?.id === role.id ? 'border-indigo-500 scale-105 bg-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <img src={role.img} alt={role.title} className="h-16 mb-3 mx-auto" />
                <h5 className="m-0 text-slate-700 text-sm font-bold">{role.title}</h5>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 'alianzas', label: data.dinamica1.zones[0].label, icon: <HeartHandshake size={36} className="text-blue-500 mx-auto" /> },
              { id: 'dinero', label: data.dinamica1.zones[1].label, icon: <TrendingUp size={36} className="text-emerald-500 mx-auto" /> },
              { id: 'turistas', label: data.dinamica1.zones[2].label, icon: <Map size={36} className="text-amber-500 mx-auto" /> },
              { id: 'redes', label: data.dinamica1.zones[3].label, icon: <Camera size={36} className="text-purple-500 mx-auto" /> }
            ].map(zone => (
              <div
                key={zone.id} onClick={() => handleMatch(zone.id)}
                className={`rounded-2xl p-6 text-center transition-all duration-300 ${shakeTarget === zone.id ? 'animate-bounce' : ''} ${selectedRole && !matchedRoles[zone.id] ? 'cursor-pointer hover:bg-slate-100' : ''}`}
                style={{
                  border: matchedRoles[zone.id] ? `4px solid ${matchedRoles[zone.id].color}` : '3px dashed #cbd5e1',
                  background: matchedRoles[zone.id] ? `${matchedRoles[zone.id].color}15` : 'white'
                }}
              >
                {matchedRoles[zone.id] ? (
                  <div className="animate-fade-in">
                    <img src={matchedRoles[zone.id].img} alt="" className="h-16 mx-auto mb-3" />
                    <h4 className="font-bold text-lg mb-2" style={{ color: matchedRoles[zone.id].color }}>{matchedRoles[zone.id].title}</h4>
                    <div className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 flex items-center justify-center gap-2 shadow-sm inline-flex">
                      <Award size={14} className="text-green-600" /> {matchedRoles[zone.id].benefit}
                    </div>
                  </div>
                ) : (
                  <div className="opacity-50">
                    <div className="mb-3">{zone.icon}</div>
                    <h5 className="m-0 text-slate-500 font-bold">{zone.label}</h5>
                  </div>
                )}
              </div>
            ))}
          </div>

          {Object.keys(matchedRoles).length === 4 && (
            <div className="animate-fade-in mt-16 bg-indigo-100 p-8 md:p-12 rounded-[25px] text-center shadow-inner">
              <div className="inline-flex items-center gap-2 bg-indigo-200 text-indigo-800 px-5 py-2 rounded-full font-extrabold text-sm uppercase mb-6 tracking-wide">
                <Edit3 size={18} /> {data.dinamica2.label}
              </div>
              <h3 className="text-indigo-900 text-2xl md:text-3xl font-black mb-4">{data.dinamica2.title}</h3>
              <p className="text-indigo-800 text-lg mb-8 font-medium">{data.dinamica2.description}</p>

              <div className="w-[300px] h-[300px] relative mx-auto my-8">
                <svg className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                  {activeNodes.includes(1) && activeNodes.includes(2) && <line x1="25" y1="25" x2="275" y2="25" stroke="#4f46e5" strokeWidth="6" className="animate-pulse" />}
                  {activeNodes.includes(2) && activeNodes.includes(3) && <line x1="275" y1="25" x2="275" y2="275" stroke="#4f46e5" strokeWidth="6" className="animate-pulse" />}
                  {activeNodes.includes(3) && activeNodes.includes(4) && <line x1="275" y1="275" x2="25" y2="275" stroke="#4f46e5" strokeWidth="6" className="animate-pulse" />}
                  {activeNodes.includes(4) && activeNodes.includes(1) && <line x1="25" y1="275" x2="25" y2="25" stroke="#4f46e5" strokeWidth="6" className="animate-pulse" />}
                </svg>
                {[
                  { id: 1, top: 0, left: 0, label: data.dinamica2.nodes[0].label },
                  { id: 2, top: 0, right: 0, label: data.dinamica2.nodes[1].label },
                  { id: 3, bottom: 0, right: 0, label: data.dinamica2.nodes[2].label },
                  { id: 4, bottom: 0, left: 0, label: data.dinamica2.nodes[3].label }
                ].map(node => (
                  <div 
                    key={node.id} 
                    onClick={() => handleNodeClick(node.id)} 
                    className={`absolute w-12 h-12 rounded-full z-20 cursor-pointer transition-all duration-300 shadow-md flex items-center justify-center font-bold text-lg border-4 ${activeNodes.includes(node.id) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-indigo-600 border-indigo-200 hover:border-indigo-400'}`}
                    style={{
                      ...(node.top !== undefined ? { top: node.top } : {}),
                      ...(node.bottom !== undefined ? { bottom: node.bottom } : {}),
                      ...(node.left !== undefined ? { left: node.left } : {}),
                      ...(node.right !== undefined ? { right: node.right } : {})
                    }}
                  >
                    {activeNodes.includes(node.id) ? <Check size={24} /> : <span>{node.id}</span>}
                    <div className={`absolute text-indigo-800 font-bold text-sm whitespace-nowrap ${node.top === 0 ? '-top-8' : 'top-14'}`}>
                      {node.label}
                    </div>
                  </div>
                ))}
              </div>

              {activeNodes.length === 4 && (
                <div className="animate-fade-in bg-white p-6 rounded-2xl max-w-lg mx-auto text-center shadow-lg border border-indigo-100">
                  <h4 className="text-indigo-900 text-xl font-black mb-3">{data.dinamica2.successMsg.title}</h4>
                  <p className="text-slate-600 text-lg font-medium">{data.dinamica2.successMsg.description}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
