import React, { useState } from 'react';
import { BookOpen, MessageCircle, Edit3 } from 'lucide-react';

export default function Modulo5({ data, theme = 'cyan' }) {
  const [chatStep, setChatStep] = useState(0);

  const themes = {
    cyan: {
      headerBg: 'bg-cyan-500 bg-linear-to-br from-cyan-500 to-sky-400',
      bg: 'bg-cyan-500',
      text: 'text-cyan-600',
      border: 'border-cyan-500'
    },
    blue: {
      headerBg: 'bg-blue-600 bg-linear-to-br from-blue-600 to-sky-400',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    }
  };

  const t = themes[theme] || themes.cyan;

  return (
    <div className="flex flex-col flex-1 pb-10">
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-sky-100 shadow-sm mb-10">
        <div className="w-full h-[200px] relative overflow-hidden">
          <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="w-full h-full">
            <path fill="#bae6fd" d="M0,300 L0,150 Q150,50 300,150 T600,150 T900,150 T1200,150 L1200,300 Z" />
            <path fill="#7dd3fc" d="M300,250 Q300,180 400,180 L450,180 Q450,250 300,250 Z" />
            <path fill="#38bdf8" d="M900,250 Q900,180 800,180 L750,180 Q750,250 900,250 Z" />
            <path fill="none" stroke="#0284c7" strokeWidth="4" strokeDasharray="10 10" d="M450,210 C550,150 650,150 750,210" />
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
              src="https://api.dicebear.com/9.x/micah/svg?seed=Mediacion" 
              alt="Mediación" 
              className="w-32 h-32 bg-white rounded-full p-2 shadow-xl border-4 border-white/30" 
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12">
        <div className={`bg-linear-to-r from-slate-50 to-slate-100 border-2 ${t.border} border-opacity-30 rounded-[30px] p-8 md:p-10 relative shadow-lg mb-12`}>
          <h4 className={`${t.text} text-2xl font-extrabold mb-6 flex items-center gap-3`}>
            <BookOpen size={28} /> {data.interactiveCard.title}
          </h4>
          {data.interactiveCard.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium mb-6" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {data.interactiveCard.steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow">
                <strong className={`${t.text} text-xl font-bold`}>{step.title}</strong>
                <span className="text-slate-600 font-medium leading-relaxed">{step.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-[25px] p-8 md:p-12 border-2 border-dashed border-slate-300 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-extrabold text-sm uppercase mb-6 tracking-wide">
            <Edit3 size={18} /> {data.dinamica.label}
          </div>
          <h3 className="text-slate-900 text-3xl md:text-4xl font-black mb-4">{data.dinamica.title}</h3>
          <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-3xl text-center font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: data.dinamica.description }}></p>

          <div className="w-full max-w-2xl bg-white rounded-[30px] overflow-hidden shadow-xl border border-slate-200">
            <div className={`${t.bg} p-6 flex items-center gap-4`}>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                <MessageCircle size={24} className={t.text} />
              </div>
              <div>
                <h3 className="text-white m-0 text-xl font-black">{data.dinamica.chat.groupName}</h3>
                <span className="text-white/80 text-sm font-medium">{data.dinamica.chat.status}</span>
              </div>
            </div>

            <div className="p-8 bg-slate-100 min-h-[400px] flex flex-col gap-4">
              <div className="bg-white p-4 rounded-2xl rounded-tl-sm max-w-[85%] self-start shadow-sm border border-slate-200 animate-fade-in">
                <strong className="text-red-500 text-sm block mb-1">{data.dinamica.chat.msg1.sender}</strong>
                <span className="text-slate-700 font-medium">{data.dinamica.chat.msg1.text}</span>
              </div>
              
              <div className="bg-white p-4 rounded-2xl rounded-tl-sm max-w-[85%] self-start shadow-sm border border-slate-200 animate-fade-in [animation-delay:0.5s] [animation-fill-mode:both]">
                <strong className="text-amber-500 text-sm block mb-1">{data.dinamica.chat.msg2.sender}</strong>
                <span className="text-slate-700 font-medium">{data.dinamica.chat.msg2.text}</span>
              </div>

              {chatStep === 0 && (
                <div className="mt-8 animate-fade-in">
                  <p className="text-center text-slate-500 text-sm font-bold mb-4 uppercase tracking-wider">{data.dinamica.chat.instruction}</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={() => setChatStep(2)} className={`${t.bg} hover:brightness-110 text-white p-4 border-none rounded-2xl rounded-tr-sm self-end cursor-pointer max-w-[90%] text-left transition-all text-sm font-bold shadow-md`}>
                      {data.dinamica.chat.options[0]}
                    </button>
                    <button onClick={() => setChatStep(3)} className={`${t.bg} hover:brightness-110 text-white p-4 border-none rounded-2xl rounded-tr-sm self-end cursor-pointer max-w-[90%] text-left transition-all text-sm font-bold shadow-md`}>
                      {data.dinamica.chat.options[1]}
                    </button>
                    <button onClick={() => setChatStep(2)} className={`${t.bg} hover:brightness-110 text-white p-4 border-none rounded-2xl rounded-tr-sm self-end cursor-pointer max-w-[90%] text-left transition-all text-sm font-bold shadow-md`}>
                      {data.dinamica.chat.options[2]}
                    </button>
                  </div>
                </div>
              )}

              {chatStep === 2 && (
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-2xl rounded-tl-sm max-w-[90%] self-start shadow-sm mt-6 animate-bounce">
                  <strong className="text-red-700 text-sm block mb-2">{data.dinamica.chat.feedbackError.sender}</strong>
                  <span className="text-slate-700 font-medium block mb-3">{data.dinamica.chat.feedbackError.text}</span>
                  <span className="text-red-800 text-sm font-black block">{data.dinamica.chat.feedbackError.explanation}</span>
                  <button onClick={() => setChatStep(0)} className="block mt-4 px-5 py-2 bg-white border-2 border-red-300 rounded-xl text-red-700 cursor-pointer font-bold hover:bg-red-50 transition-colors">
                    {data.dinamica.chat.feedbackError.retryBtn}
                  </button>
                </div>
              )}

              {chatStep === 3 && (
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-2xl rounded-tl-sm max-w-[90%] self-start shadow-sm mt-6 animate-fade-in">
                  <strong className="text-green-700 text-sm block mb-2">{data.dinamica.chat.feedbackSuccess.sender}</strong>
                  <span className="text-slate-700 font-medium block mb-3">{data.dinamica.chat.feedbackSuccess.text}</span>
                  <span className="text-green-800 text-sm font-black block">{data.dinamica.chat.feedbackSuccess.explanation}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
