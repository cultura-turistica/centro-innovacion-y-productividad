import React from 'react';
import { BookOpen, Users, Map, Coins, Target, AlertTriangle, Edit3 } from 'lucide-react';
import TPodcastPlayer from '../../components/tailwind/TPodcastPlayer';
import TFlipCard from '../../components/tailwind/TFlipCard';

export default function Modulo1({ data, theme = 'blue' }) {
  const [sliderValue, setSliderValue] = React.useState(0);
  // Theme mappings based on color passed in
  const themes = {
    blue: {
      headerBg: 'bg-blue-600 bg-linear-to-br from-blue-600 to-sky-400',
      bg: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600'
    },
    green: {
      headerBg: 'bg-green-600 bg-linear-to-br from-green-600 to-emerald-400',
      bg: 'bg-green-600',
      text: 'text-green-700',
      border: 'border-green-600'
    }
  };

  const t = themes[theme] || themes.blue;

  return (
    <div className="flex flex-col flex-1 pb-10">
      {/* Header Rediseñado con Tailwind */}
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-sky-100 shadow-sm mb-10">
        <div className={`${t.headerBg} px-8 py-10 flex items-center gap-8 relative z-10 rounded-t-[30px] rounded-b-[20px] shadow-lg`}>
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
          gradientFromClass={t.from}
          gradientToClass={t.to}
        />

        <div className={`bg-linear-to-r from-slate-50 to-slate-100 border-2 ${t.border} border-opacity-30 rounded-[30px] p-8 md:p-10 relative shadow-lg mb-12`}>
          <h4 className={`${t.text} text-2xl font-extrabold mb-6 flex items-center gap-3`}>
            <BookOpen size={28} /> {data.interactiveCard.title}
          </h4>
          {data.interactiveCard.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed font-medium mb-6" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {data.interactiveCard.pillars && data.interactiveCard.pillars.length >= 3 && (
              <>
                <TFlipCard icon={Users} title={data.interactiveCard.pillars[0].title} subtitle={data.interactiveCard.pillars[0].subtitle} content={data.interactiveCard.pillars[0].content} colorClass="text-blue-600" bgClass="bg-blue-50" borderClass="border-blue-600" shadowClass="shadow-blue-600/30" />
                <TFlipCard icon={Map} title={data.interactiveCard.pillars[1].title} subtitle={data.interactiveCard.pillars[1].subtitle} content={data.interactiveCard.pillars[1].content} colorClass="text-green-600" bgClass="bg-green-50" borderClass="border-green-600" shadowClass="shadow-green-600/30" />
                <TFlipCard icon={Coins} title={data.interactiveCard.pillars[2].title} subtitle={data.interactiveCard.pillars[2].subtitle} content={data.interactiveCard.pillars[2].content} colorClass="text-orange-600" bgClass="bg-orange-50" borderClass="border-orange-600" shadowClass="shadow-orange-600/30" />
              </>
            )}
          </div>
        </div>

        {/* Dinámica Rediseñada */}
        <div className="bg-white rounded-[25px] p-8 md:p-12 border border-slate-200 shadow-sm relative">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-extrabold text-sm uppercase mb-6 tracking-wide">
            <Edit3 size={18} /> {data.dinamica.label}
          </div>
          <h3 className="text-slate-900 text-3xl md:text-4xl font-black mb-4">{data.dinamica.title}</h3>
          <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 max-w-3xl">
            {data.dinamica.description}
          </p>

          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            <button 
              onClick={() => setSliderValue(0)} 
              className={`px-6 py-4 rounded-xl border-none font-bold cursor-pointer transition-all duration-300 text-lg flex items-center gap-3 ${sliderValue < 50 ? 'bg-green-700 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <Target size={24} /> {data.dinamica.tabs.ideal.label}
            </button>
            <button 
              onClick={() => setSliderValue(100)} 
              className={`px-6 py-4 rounded-xl border-none font-bold cursor-pointer transition-all duration-300 text-lg flex items-center gap-3 ${sliderValue >= 50 ? 'bg-red-700 text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <AlertTriangle size={24} /> {data.dinamica.tabs.desgaste.label}
            </button>
          </div>

          <div className={`p-8 md:p-12 rounded-[20px] transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center text-center border-2 ${sliderValue < 50 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            {sliderValue < 50 ? (
              <div className="animate-fade-in">
                <Target size={70} className="text-green-600 mx-auto mb-6" />
                <h4 className="text-green-800 text-2xl md:text-3xl font-black mb-4">{data.dinamica.tabs.ideal.title}</h4>
                <p className="text-green-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                  {data.dinamica.tabs.ideal.description}
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <AlertTriangle size={70} className="text-red-600 mx-auto mb-6" />
                <h4 className="text-red-800 text-2xl md:text-3xl font-black mb-4">{data.dinamica.tabs.desgaste.title}</h4>
                <p className="text-red-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                  {data.dinamica.tabs.desgaste.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
