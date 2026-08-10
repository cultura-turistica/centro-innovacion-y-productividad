"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Lightbulb, Landmark, RefreshCw, Car, Trash2, PieChart, Plus, Sparkles, Lock, Unlock } from 'lucide-react';
import { CALCULADORA_DATA } from '@/data/academia/calculadoraData';

export default function CalculadoraCosteo() {
  const { initialState, modals, uiLabels } = CALCULADORA_DATA;

  // --- STATE ---
  const [fixedCosts, setFixedCosts] = useState(initialState.fixedCosts);
  const [variableCosts, setVariableCosts] = useState(initialState.variableCosts);
  const [flexibleCosts, setFlexibleCosts] = useState(initialState.flexibleCosts);
  const [paxCount, setPaxCount] = useState(10);

  useEffect(() => {
    setFlexibleCosts(prev => prev.map(c => ({ ...c, reserved: paxCount })));
  }, [paxCount]);

  const [exchangeRate, setExchangeRate] = useState(4000);
  const [showUSD, setShowUSD] = useState(false);
  const [percentages, setPercentages] = useState(initialState.percentages);
  const [activeModal, setActiveModal] = useState(null);

  // --- CALCULATIONS ---
  const totalFixed = fixedCosts.reduce((acc, c) => acc + (Number(c.qty) * Number(c.value)), 0);
  const totalVariablePerPax = variableCosts.reduce((acc, c) => acc + (Number(c.qty) * Number(c.value)), 0);
  
  const flexibleCalcs = flexibleCosts.map(c => {
    const limit = Number(c.limit) || 1;
    const reserved = Number(c.reserved) || 1;
    const quantity = Math.ceil(reserved / (limit > 0 ? limit : 1));
    return { ...c, calculatedQty: quantity, total: quantity * Number(c.value) };
  });
  
  const totalFlexible = flexibleCalcs.reduce((acc, c) => acc + c.total, 0);

  const totalVariable = totalVariablePerPax * paxCount;
  const totalDirectCosts = totalFixed + totalVariable + totalFlexible;

  const contingencyAmount = totalDirectCosts * (percentages.contingency / 100);
  const adminAmount = totalDirectCosts * (percentages.admin / 100);
  const operationalAmount = totalDirectCosts * (percentages.operational / 100);
  const totalIndirectCosts = contingencyAmount + adminAmount + operationalAmount;

  const netPriceBase = totalDirectCosts + totalIndirectCosts;
  
  const netProfitFactor = (percentages.netProfit < 100) ? (1 - (percentages.netProfit / 100)) : 1;
  const netPrice = percentages.netProfit < 100 ? netPriceBase / netProfitFactor : netPriceBase;
  const netProfitAmount = netPrice - netPriceBase;

  const commissionAmount = netPrice * (percentages.commission / 100);
  const rackPrice = netPrice + commissionAmount;
  const ivaAmount = rackPrice * (percentages.iva / 100);
  const finalPrice = rackPrice + ivaAmount;
  const pricePerPax = paxCount > 0 ? finalPrice / paxCount : 0;

  // --- ACTIONS ---
  const formatCurrency = (amount) => {
    if (showUSD) {
      const rate = exchangeRate || 4000;
      return 'USD $' + (amount / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return '$' + Math.round(amount).toLocaleString('es-CO');
  };

  const updateItem = (list, setList, id, field, val) => {
    if (showUSD) return;
    setList(list.map(item => item.id === id ? { ...item, [field]: val } : item));
  };

  const addItem = (type) => {
    if (showUSD) return;
    const newItem = { id: Date.now(), label: '', qty: 1, value: 0 };
    if (type === 'fixed') setFixedCosts([...fixedCosts, { ...newItem, label: 'Nuevo Item Fijo' }]);
    if (type === 'variable') setVariableCosts([...variableCosts, { ...newItem, label: 'Nuevo Item Variable' }]);
    if (type === 'flexible') setFlexibleCosts([...flexibleCosts, { ...newItem, label: 'Nuevo Transporte', limit: 6, reserved: paxCount }]);
  };

  const removeItem = (list, setList, id) => {
    if (showUSD) return;
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* HEADER INTEGRADO */}
      <header className="bg-transparent pt-28 pb-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#055C38] leading-tight">{uiLabels.headerTitle}</h1>
                <p className="text-slate-600 font-medium">{uiLabels.headerSubtitle}</p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-[#055C38] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#087f4d] hover:-translate-y-0.5 hover:shadow-lg transition-all" onClick={() => setActiveModal('info')}>
                <BookOpen size={20} /> {uiLabels.guideButton}
              </button>
              <button className="flex items-center gap-2 bg-[#055C38] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#087f4d] hover:-translate-y-0.5 hover:shadow-lg transition-all" onClick={() => setActiveModal('cost')}>
                <Lightbulb size={20} /> {uiLabels.typesButton}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CURRENCY BAR */}
      <div className="bg-white py-5 border-y-2 border-slate-200 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-bold text-lg text-[#055C38] bg-indigo-50 px-5 py-2.5 rounded-xl border-l-4 border-indigo-500">
              {uiLabels.currencyNotice}
            </span>
            <div className="flex items-center gap-4 bg-amber-50 p-3 px-5 rounded-xl border border-amber-200">
              <label className="font-semibold text-amber-900">{uiLabels.exchangeLabel}</label>
              <input 
                type="number" 
                className="w-32 p-2 border-2 border-amber-300 rounded-lg text-lg font-extrabold text-amber-900 text-center focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                value={exchangeRate} 
                min="1" step="100" 
                onChange={e => setExchangeRate(Number(e.target.value))} 
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6">
        {/* ALERTA USD BLOQUEADO */}
        {showUSD && (
          <div className="bg-blue-900 text-white p-6 rounded-2xl mb-8 flex items-center gap-4 shadow-xl animate-[slideDown_0.3s_ease-out]">
            <span className="text-3xl bg-white/20 w-12 h-12 flex items-center justify-center rounded-full"><Lock size={24}/></span>
            <div>
              <div className="text-xl font-extrabold">{uiLabels.usdLockTitle}</div>
              <div className="font-normal opacity-90">{uiLabels.usdLockMsg}</div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8">
          {/* COLUMNA IZQUIERDA - INPUTS */}
          <div className={`flex flex-col gap-8 transition-opacity ${showUSD ? 'opacity-70 pointer-events-none' : 'opacity-100'}`}>
            
            {/* COSTOS FIJOS */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-gradient-to-br from-[#055C38] to-[#087f4d] text-white p-6 px-8">
                <h2 className="text-2xl font-extrabold flex items-center gap-3"><Landmark size={28} /> {uiLabels.fixedCostsTitle}</h2>
                <p className="opacity-90 font-medium">{uiLabels.fixedCostsSub}</p>
              </div>
              <div className="p-8">
                <div className="bg-orange-50 border-l-4 border-amber-500 p-5 rounded-xl mb-6">
                  <strong className="flex items-center gap-2 text-amber-900 text-lg mb-2"><Lightbulb size={20} /> {uiLabels.fixedInfoTitle}</strong>
                  <p className="text-slate-700">{uiLabels.fixedInfoMsg}</p>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  {fixedCosts.map(item => (
                    <div key={item.id} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:bg-slate-100 transition-colors">
                      <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase">FIJO</span>
                      </div>
                      <div className="flex flex-wrap gap-4 items-end">
                        <div className="flex flex-col gap-1.5 flex-[2] min-w-[200px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Descripción</label>
                          <input type="text" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} value={item.label} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'label', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[100px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Cantidad</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="1" value={item.qty} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'qty', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Valor (COP)</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="0" value={item.value} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'value', e.target.value)} />
                        </div>
                        <button className="bg-red-100 text-red-600 p-3.5 rounded-xl hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50" disabled={showUSD} onClick={() => removeItem(fixedCosts, setFixedCosts, item.id)}><Trash2 size={20} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full p-4 bg-slate-50 border-2 border-dashed border-[#F06000] text-[#F06000] rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-[#F06000] hover:border-solid hover:text-white transition-all disabled:opacity-50" disabled={showUSD} onClick={() => addItem('fixed')}>
                  <Plus size={24} /> Agregar Costo Fijo
                </button>
              </div>
            </div>

            {/* COSTOS VARIABLES */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-gradient-to-br from-teal-700 to-teal-500 text-white p-6 px-8">
                <h2 className="text-2xl font-extrabold flex items-center gap-3"><RefreshCw size={28} /> {uiLabels.variableCostsTitle}</h2>
                <p className="opacity-90 font-medium">{uiLabels.variableCostsSub}</p>
              </div>
              <div className="p-8">
                <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-xl mb-6">
                  <strong className="flex items-center gap-2 text-teal-800 text-lg mb-2"><Lightbulb size={20} /> {uiLabels.variableInfoTitle}</strong>
                  <p className="text-slate-700">{uiLabels.variableInfoMsg}</p>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  {variableCosts.map(item => (
                    <div key={item.id} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:bg-slate-100 transition-colors">
                      <div className="mb-4">
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase">VARIABLE</span>
                      </div>
                      <div className="flex flex-wrap gap-4 items-end">
                        <div className="flex flex-col gap-1.5 flex-[2] min-w-[200px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Descripción</label>
                          <input type="text" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} value={item.label} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'label', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[100px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Cantidad</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="1" value={item.qty} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'qty', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Valor (COP)</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="0" value={item.value} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'value', e.target.value)} />
                        </div>
                        <button className="bg-red-100 text-red-600 p-3.5 rounded-xl hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50" disabled={showUSD} onClick={() => removeItem(variableCosts, setVariableCosts, item.id)}><Trash2 size={20} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full p-4 bg-slate-50 border-2 border-dashed border-[#F06000] text-[#F06000] rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-[#F06000] hover:border-solid hover:text-white transition-all disabled:opacity-50" disabled={showUSD} onClick={() => addItem('variable')}>
                  <Plus size={24} /> Agregar Costo Variable
                </button>
              </div>
            </div>

            {/* FLEXIBLES */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-gradient-to-br from-amber-700 to-amber-500 text-white p-6 px-8">
                <h2 className="text-2xl font-extrabold flex items-center gap-3"><Car size={28} /> {uiLabels.flexibleCostsTitle}</h2>
                <p className="opacity-90 font-medium">{uiLabels.flexibleCostsSub}</p>
              </div>
              <div className="p-8">
                <div className="bg-amber-50 border-l-4 border-amber-700 p-5 rounded-xl mb-6">
                  <strong className="flex items-center gap-2 text-amber-800 text-lg mb-2"><Sparkles size={20} /> {uiLabels.flexibleInfoTitle}</strong>
                  <p className="text-slate-700">{uiLabels.flexibleInfoMsg}</p>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  {flexibleCalcs.map(item => (
                    <div key={item.id} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:bg-slate-100 transition-colors">
                      <div className="mb-4 flex gap-3 items-center">
                        <span className="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1.5 rounded-full tracking-wider uppercase">FLEXIBLE</span>
                        <span className="text-sm font-extrabold text-amber-700 bg-amber-200 px-4 py-1 rounded-full">Se usarán: {item.calculatedQty} unidad(es)</span>
                      </div>
                      <div className="flex flex-wrap gap-4 items-end">
                        <div className="flex flex-col gap-1.5 flex-[2] min-w-[150px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Descripción</label>
                          <input type="text" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} value={item.label} onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'label', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[90px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Max. Pax</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="1" value={item.limit} onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'limit', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[90px]">
                          <label className="text-xs font-extrabold text-amber-700 uppercase">Pasajeros</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl outline-none font-medium bg-slate-200 text-slate-500 cursor-not-allowed" disabled value={item.reserved} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 min-w-[90px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Unidades</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl outline-none font-extrabold bg-slate-200 text-slate-600 cursor-not-allowed" disabled value={item.calculatedQty} />
                        </div>
                        <div className="flex flex-col gap-1.5 flex-[1.5] min-w-[120px]">
                          <label className="text-xs font-extrabold text-slate-700 uppercase">Valor (COP)</label>
                          <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-[#F06000] focus:ring-4 focus:ring-[#F06000]/20 outline-none transition-all font-medium disabled:bg-slate-200" disabled={showUSD} min="0" value={item.value} onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'value', e.target.value)} />
                        </div>
                        <button className="bg-red-100 text-red-600 p-3.5 rounded-xl hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50" disabled={showUSD} onClick={() => removeItem(flexibleCosts, setFlexibleCosts, item.id)}><Trash2 size={20} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full p-4 bg-slate-50 border-2 border-dashed border-[#F06000] text-[#F06000] rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-[#F06000] hover:border-solid hover:text-white transition-all disabled:opacity-50" disabled={showUSD} onClick={() => addItem('flexible')}>
                  <Plus size={24} /> Agregar Costo Flexible
                </button>
              </div>
            </div>

            {/* PORCENTAJES Y MARGENES */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-gradient-to-br from-blue-900 to-blue-500 text-white p-6 px-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-extrabold flex items-center gap-3"><PieChart size={28} /> Porcentajes Financieros</h2>
                  <p className="opacity-90 font-medium">El estándar para calcular utilidad y Tarifa RACK</p>
                </div>
                <button onClick={() => setActiveModal('pricing')} className="bg-white text-blue-900 w-10 h-10 rounded-full font-extrabold text-lg shadow-md hover:scale-110 transition-transform">?</button>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <label className="block text-base font-bold text-slate-800 mb-2">⚠️ Imprevistos (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none font-medium disabled:bg-slate-200" disabled={showUSD} value={percentages.contingency} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, contingency: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-slate-500 mt-2">Fondo de emergencia (3-5%)</div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <label className="block text-base font-bold text-slate-800 mb-2">🏢 Administrativos (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none font-medium disabled:bg-slate-200" disabled={showUSD} value={percentages.admin} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, admin: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-slate-500 mt-2">Arriendo, internet (3-5%)</div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <label className="block text-base font-bold text-slate-800 mb-2">⚙️ Operacionales (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none font-medium disabled:bg-slate-200" disabled={showUSD} value={percentages.operational} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, operational: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-slate-500 mt-2">Marketing, servicios (2-5%)</div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <label className="block text-base font-bold text-slate-800 mb-2">💰 Utilidad Deseada (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none font-medium disabled:bg-slate-200" disabled={showUSD} value={percentages.netProfit} min="0" max="99" step="0.1" onChange={e => setPercentages({...percentages, netProfit: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-slate-500 mt-2">Margen INVERSO (PNUD)</div>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-5 border-2 border-amber-300">
                    <label className="block text-base font-bold text-amber-900 mb-2">🤝 Comisión Agencias (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-amber-300 rounded-xl focus:border-amber-500 outline-none font-medium disabled:bg-slate-200 text-amber-900" disabled={showUSD} value={percentages.commission} min="0" max="50" step="0.1" onChange={e => setPercentages({...percentages, commission: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-amber-800 mt-2">Para Tarifa RACK oficial</div>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border-2 border-slate-300">
                    <label className="block text-base font-bold text-slate-800 mb-2">🧾 IVA (%)</label>
                    <input type="number" className="w-full p-3 border-2 border-slate-300 rounded-xl focus:border-blue-500 outline-none font-medium disabled:bg-slate-200" disabled={showUSD} value={percentages.iva} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, iva: Number(e.target.value)})} />
                    <div className="text-sm font-semibold text-slate-500 mt-2">19% Estándar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PAX SLIDER VITAL */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-100 rounded-3xl p-8 border-2 border-emerald-200 shadow-sm mt-4">
              <label className="block text-xl font-extrabold text-[#055C38] mb-6 uppercase">👥 Simulador de Participantes</label>
              <input type="range" disabled={showUSD} className="w-full h-3 rounded-full bg-slate-300 appearance-none cursor-pointer accent-[#F06000] disabled:opacity-50" min="1" max="50" value={paxCount} onChange={e => setPaxCount(Number(e.target.value))} />
              <div className="flex justify-between items-center mt-8">
                <div className="text-center"><div className="text-slate-500 font-bold uppercase text-sm mb-1">Mínimo</div><div className="font-extrabold text-lg text-slate-700">1 pax</div></div>
                <div className="text-center"><div className="text-6xl font-black text-[#F06000] leading-none mb-2">{paxCount}</div><div className="text-[#055C38] font-bold uppercase tracking-wider text-sm">Viajeros Cotizados</div></div>
                <div className="text-center"><div className="text-slate-500 font-bold uppercase text-sm mb-1">Máximo</div><div className="font-extrabold text-lg text-slate-700">50+ pax</div></div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA - PANEL DE RESULTADOS EN VIVO */}
          <div className="relative">
            <div className="sticky top-8 bg-white rounded-3xl shadow-2xl border-4 border-[#087f4d] overflow-hidden">
              <div className={`p-6 px-8 ${showUSD ? 'bg-gradient-to-br from-blue-900 to-blue-500 text-white' : 'bg-[#087f4d] text-white'}`}>
                <h2 className="text-2xl font-extrabold">{showUSD ? '🇺🇸 RESULTADO USD' : '✅ RESULTADO COP'}</h2>
                <p className="opacity-90 font-medium mt-1">Cálculo financiero en tiempo récord</p>
              </div>

              {/* USD TOGGLE BOTÓN GIGANTE */}
              <div className={`p-6 text-center transition-colors ${showUSD ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900 border-b border-blue-200'}`}>
                <label className="flex items-center justify-center gap-4 cursor-pointer text-lg font-extrabold select-none">
                  <input type="checkbox" className="w-6 h-6 accent-red-500 cursor-pointer" checked={showUSD} onChange={() => setShowUSD(!showUSD)} />
                  {showUSD ? 'VOLVER A PESOS COLOMBIANOS' : 'VER PRECIOS EN DÓLARES (USD)'}
                </label>
                <div className={`mt-3 font-semibold text-sm inline-block px-4 py-2 rounded-xl ${showUSD ? 'bg-black/20 text-blue-100' : 'bg-white text-blue-800'}`}>
                  Tasa actual: 1 USD = ${exchangeRate.toLocaleString('es-CO')} COP
                </div>
              </div>

              <div className="p-8">
                {/* COSTOS DIRECTOS */}
                <div className="mb-8">
                  <div className="bg-[#055C38] text-white font-black text-sm uppercase px-4 py-2 rounded-lg inline-block mb-4 shadow-sm">📊 Costos Directos (Base)</div>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-center text-slate-600 font-semibold border-b border-slate-200 pb-3"><span className="uppercase text-sm">Costo Fijo Grupo</span><span className="font-extrabold text-slate-800 text-lg">{formatCurrency(totalFixed)}</span></div>
                    <div className="flex justify-between items-center text-slate-600 font-semibold border-b border-slate-200 pb-3"><span className="uppercase text-sm">Costo Variable Grupo</span><span className="font-extrabold text-slate-800 text-lg">{formatCurrency(totalVariable)}</span></div>
                    <div className="flex justify-between items-center text-slate-600 font-semibold border-b border-slate-200 pb-3"><span className="uppercase text-sm">Costo Transporte (Flex)</span><span className="font-extrabold text-slate-800 text-lg">{formatCurrency(totalFlexible)}</span></div>
                    <div className="flex justify-between items-center pt-2"><span className="font-black text-[#055C38] uppercase">Total Directos</span><span className="font-black text-[#055C38] text-xl">{formatCurrency(totalDirectCosts)}</span></div>
                  </div>
                </div>

                {/* GASTOS INDIRECTOS */}
                <div className="mb-8">
                  <div className="bg-[#055C38] text-white font-black text-sm uppercase px-4 py-2 rounded-lg inline-block mb-4 shadow-sm">🏭 Gastos Indirectos (Operación)</div>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5">
                    <div className="flex justify-between items-center text-slate-600 font-semibold"><span className="uppercase text-sm">Total Gastos ({percentages.contingency + percentages.admin + percentages.operational}%)</span><span className="font-extrabold text-amber-600 text-xl">{formatCurrency(totalIndirectCosts)}</span></div>
                  </div>
                </div>

                {/* PRECIO PNUD */}
                <div className="mb-8">
                  <div className="bg-[#055C38] text-white font-black text-sm uppercase px-4 py-2 rounded-lg inline-block mb-4 shadow-sm">💎 Precio PNUD con Utilidad</div>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-center text-slate-600 font-semibold border-b border-slate-200 pb-3"><span className="uppercase text-sm">Costo Real Sostenible</span><span className="font-extrabold text-slate-800 text-lg">{formatCurrency(netPriceBase)}</span></div>
                    <div className="flex justify-between items-center pt-2"><span className="font-black text-emerald-600 uppercase">Tarifa Neta Pública</span><span className="font-black text-emerald-600 text-2xl">{formatCurrency(netPrice)}</span></div>
                    <div className="flex justify-between items-center pt-2 mt-2 border-t border-slate-200"><span className="text-sm font-semibold text-slate-500">De ahí ganas ({percentages.netProfit}%) en tu bolsillo:</span><span className="font-bold text-emerald-600">+ {formatCurrency(netProfitAmount)}</span></div>
                  </div>
                </div>

                {/* HIGHLIGHT FINAL */}
                <div className="bg-gradient-to-br from-[#055C38] to-[#022919] text-white rounded-3xl p-8 text-center shadow-2xl">
                  <div className="text-emerald-300 font-bold text-sm tracking-widest uppercase mb-3">🎫 Tarifa RACK Comisionable</div>
                  <div className="text-yellow-300 font-black text-4xl mb-4">{formatCurrency(rackPrice)}</div>
                  <div className="text-sm text-emerald-100/80 mb-6">Se le da a Agencias/OTAs. Se quedarán con <strong>{formatCurrency(commissionAmount)}</strong> ({percentages.commission}%)</div>
                  
                  <div className="h-px w-full bg-white/20 mb-6"></div>
                  
                  <div className="text-emerald-300 font-bold text-sm tracking-widest uppercase mb-3">💵 Precio Final (+ IVA)</div>
                  <div className="text-emerald-200 font-black text-3xl mb-6">{formatCurrency(finalPrice)}</div>
                  
                  <div className="h-px w-full bg-white/20 mb-6"></div>

                  <div className="text-white font-bold text-sm tracking-widest uppercase mb-4">👤 El precio que paga CADA PERSONA</div>
                  <div className="bg-black/30 rounded-2xl p-4 inline-block font-black text-5xl text-white">
                    {formatCurrency(pricePerPax)}
                  </div>
                </div>
                
                {showUSD ? (
                  <button className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-colors" onClick={() => setShowUSD(false)}>
                    <Unlock size={20}/> DESBLOQUEAR Y VOLVER A COP
                  </button>
                ) : (
                  <div className="text-center mt-6 text-slate-400 font-bold flex items-center justify-center gap-2">
                    <Sparkles size={16}/> Actualización automática en vivo
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODALS DINÁMICOS */}
      {activeModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button className="absolute top-6 right-6 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors" onClick={() => setActiveModal(null)}>✕</button>
            
            {activeModal === 'info' && (
              <div>
                <h2 className="text-3xl font-black text-[#055C38] mb-8">{modals.info.title}</h2>
                <div className="space-y-8 text-slate-700">
                  {modals.info.sections.map((section, idx) => (
                    <section key={idx}>
                      <h3 className="text-xl font-bold text-[#F06000] mb-3">{section.title}</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            {item.strong && <strong>{item.strong}</strong>} {item.text}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            )}

            {activeModal === 'cost' && (
              <div>
                <h2 className="text-3xl font-black text-[#055C38] mb-8">{modals.costTypes.title}</h2>
                <div className="space-y-8 text-slate-700">
                  {modals.costTypes.sections.map((section, idx) => (
                    <section key={idx}>
                      <h3 className="text-xl font-bold text-[#F06000] mb-3">{section.icon} {section.title}</h3>
                      <p className="mb-3">{section.description}</p>
                      <div className="bg-slate-100 p-4 rounded-xl border border-slate-200"><strong>Ejemplo:</strong> {section.example}</div>
                    </section>
                  ))}
                  <div className="bg-gradient-to-r from-[#055C38] to-[#087f4d] text-white p-6 rounded-2xl text-center text-xl font-black shadow-lg">
                    {modals.costTypes.formulaFooter}
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'pricing' && (
              <div>
                <h2 className="text-3xl font-black text-[#055C38] mb-8">{modals.pricing.title}</h2>
                <div className="space-y-8 text-slate-700">
                  <section>
                    <h3 className="text-xl font-bold text-[#F06000] mb-4">📐 Fórmula de Precio Neto (UNDP-PNUD)</h3>
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-6">
                      <h4 className="font-bold text-blue-900 mb-4 text-lg">{modals.pricing.sequence.title}</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-blue-900/80 font-medium">
                        {modals.pricing.sequence.steps.map((step, idx) => (
                          <li key={idx}>
                            {step.strong && <strong>{step.strong}</strong>} {step.text}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold text-[#F06000] mb-4">💵 Tipos de Tarifas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {modals.pricing.types.map((type, idx) => {
                        const bgClasses = ['bg-indigo-50 border-indigo-200 text-indigo-900', 'bg-amber-50 border-amber-200 text-amber-900', 'bg-emerald-50 border-emerald-200 text-emerald-900'][idx];
                        const textOpacity = ['text-indigo-900/70', 'text-amber-900/70', 'text-emerald-900/70'][idx];
                        const descOpacity = ['text-indigo-900/60', 'text-amber-900/60', 'text-emerald-900/60'][idx];
                        return (
                          <div key={idx} className={`${bgClasses.split(' ').slice(0,2).join(' ')} p-5 rounded-2xl border`}>
                            <h4 className={`font-bold ${bgClasses.split(' ')[2]} mb-2`}>{type.title}</h4>
                            <p className={`text-sm font-semibold ${textOpacity} mb-2`}>{type.subtitle}</p>
                            <p className={`text-xs ${descOpacity} leading-relaxed`}>{type.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
