import React, { useState } from 'react';
import { Coins, ShieldAlert, Users, Target, CheckCircle2, AlertTriangle } from 'lucide-react';
import TPodcastPlayer from '../../components/tailwind/TPodcastPlayer';

export default function Modulo6({ data, theme = 'emerald' }) {
  const [budgetInfra, setBudgetInfra] = useState(0);
  const [budgetStaff, setBudgetStaff] = useState(0);
  const [budgetMarketing, setBudgetMarketing] = useState(0);
  const [budgetResult, setBudgetResult] = useState(null);

  const totalBudget = 10;
  const currentTotal = budgetInfra + budgetStaff + budgetMarketing;
  const remainingBudget = totalBudget - currentTotal;

  const themes = {
    emerald: {
      headerBg: 'bg-emerald-600 bg-linear-to-br from-emerald-600 to-teal-400',
      bg: 'bg-emerald-600',
      text: 'text-emerald-700',
      border: 'border-emerald-600'
    },
    green: {
      headerBg: 'bg-green-600 bg-linear-to-br from-green-600 to-emerald-400',
      bg: 'bg-green-600',
      text: 'text-green-700',
      border: 'border-green-600'
    }
  };

  const t = themes[theme] || themes.emerald;

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
      setBudgetResult({ success: false, msg: data.simulador.alerts.incomplete });
      return;
    }
    if (budgetInfra < 5) {
      setBudgetResult({ success: false, msg: data.simulador.alerts.infraWarning });
    } else if (budgetStaff === 0) {
      setBudgetResult({ success: false, msg: data.simulador.alerts.staffWarning });
    } else {
      setBudgetResult({ success: true, msg: data.simulador.alerts.success });
    }
  };

  return (
    <div className="flex flex-col flex-1 pb-10">
      <div className="relative overflow-hidden rounded-t-[30px] rounded-b-[20px] flex flex-col bg-green-100 shadow-sm mb-10">
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
        />

        <div className="bg-white rounded-[30px] p-8 md:p-12 border border-slate-200 shadow-xl mt-12 mb-12">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 shadow-sm shrink-0">
              <Coins size={36} />
            </div>
            <div>
              <h3 className="text-slate-900 m-0 text-3xl font-black">{data.simulador.title}</h3>
              <p className="text-slate-600 mt-2 mb-0 text-lg font-medium">{data.simulador.subtitle}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-[20px] border-l-8 border-blue-800 mb-10 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed m-0 font-medium" dangerouslySetInnerHTML={{ __html: data.simulador.intro }}></p>
          </div>

          <div className="flex flex-col gap-8 bg-white p-8 rounded-[25px] border-2 border-slate-200 shadow-md">
            
            <div className="flex justify-between items-center pb-6 border-b-2 border-dashed border-slate-300">
              <h4 className="m-0 text-2xl text-slate-900 font-extrabold">{data.simulador.fundsLabel}</h4>
              <div className={`text-3xl md:text-4xl font-black ${remainingBudget > 0 ? 'text-sky-500' : 'text-green-600'}`}>
                ${remainingBudget} Millones
              </div>
            </div>

            {/* Fila 1 */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <strong className="text-slate-900 flex items-center gap-3 text-lg">
                  <ShieldAlert size={24} className="text-blue-900" /> {data.simulador.categories[0].label}
                </strong>
                <span className="font-bold text-blue-900 text-xl">${budgetInfra}M</span>
              </div>
              <input
                type="range" min="0" max="10" step="1"
                value={budgetInfra}
                onChange={(e) => handleBudgetChange(setBudgetInfra, e.target.value, budgetInfra)}
                className="w-full cursor-pointer accent-blue-900 h-2 bg-slate-200 rounded-lg appearance-none"
              />
            </div>

            {/* Fila 2 */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <strong className="text-slate-900 flex items-center gap-3 text-lg">
                  <Users size={24} className="text-amber-700" /> {data.simulador.categories[1].label}
                </strong>
                <span className="font-bold text-amber-700 text-xl">${budgetStaff}M</span>
              </div>
              <input
                type="range" min="0" max="10" step="1"
                value={budgetStaff}
                onChange={(e) => handleBudgetChange(setBudgetStaff, e.target.value, budgetStaff)}
                className="w-full cursor-pointer accent-amber-700 h-2 bg-slate-200 rounded-lg appearance-none"
              />
            </div>

            {/* Fila 3 */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <strong className="text-slate-900 flex items-center gap-3 text-lg">
                  <Target size={24} className="text-emerald-600" /> {data.simulador.categories[2].label}
                </strong>
                <span className="font-bold text-emerald-600 text-xl">${budgetMarketing}M</span>
              </div>
              <input
                type="range" min="0" max="10" step="1"
                value={budgetMarketing}
                onChange={(e) => handleBudgetChange(setBudgetMarketing, e.target.value, budgetMarketing)}
                className="w-full cursor-pointer accent-emerald-600 h-2 bg-slate-200 rounded-lg appearance-none"
              />
            </div>

            <button
              onClick={evaluateBudget}
              className={`mt-4 ${t.bg} hover:brightness-110 text-white border-none py-4 px-8 rounded-2xl text-xl font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}
            >
              {data.simulador.submitBtn}
            </button>

            {budgetResult && (
              <div className={`animate-fade-in p-8 rounded-[20px] border-2 flex flex-col sm:flex-row gap-6 items-center ${budgetResult.success ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                {budgetResult.success ? <CheckCircle2 size={64} className="text-green-600 shrink-0" /> : <AlertTriangle size={64} className="text-red-500 shrink-0" />}
                <div className="text-center sm:text-left">
                  <h4 className={`text-2xl font-black mb-2 m-0 ${budgetResult.success ? 'text-green-800' : 'text-red-700'}`}>
                    {budgetResult.success ? data.simulador.alerts.successTitle : data.simulador.alerts.errorTitle}
                  </h4>
                  <p className={`m-0 text-lg font-medium leading-relaxed ${budgetResult.success ? 'text-green-900' : 'text-red-900'}`}>
                    {budgetResult.msg}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
