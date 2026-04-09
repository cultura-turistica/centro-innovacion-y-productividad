import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Lightbulb, Landmark, RefreshCw, Car, Trash2, PieChart, AlertTriangle, Settings, CheckCircle, BarChart3, Factory, Gem, Ticket, Banknote, User, Sparkles, Plus, Target, DollarSign, Handshake, Tag } from 'lucide-react';
import './Curso3.css';

export default function Curso3() {
  const navigate = useNavigate();

  // --- STATE ---
  const [fixedCosts, setFixedCosts] = useState([
    { id: 1, label: 'Alquiler de salón comunal', qty: 1, value: 150000 },
    { id: 2, label: 'Permiso de ingreso a reserva', qty: 1, value: 50000 },
  ]);

  const [variableCosts, setVariableCosts] = useState([
    { id: 1, label: 'Kit de Materiales', qty: 1, value: 50000 },
    { id: 2, label: 'Refrigerio', qty: 1, value: 15000 },
    { id: 3, label: 'Seguro turista', qty: 1, value: 4000 }
  ]);

  const [flexibleCosts, setFlexibleCosts] = useState([
    { id: 1, label: 'Lancha (6 pax)', limit: 6, reserved: 10, value: 300000 }
  ]);

  const [paxCount, setPaxCount] = useState(10);

  useEffect(() => {
    setFlexibleCosts(prev => prev.map(c => ({ ...c, reserved: paxCount })));
  }, [paxCount]);
  const [exchangeRate, setExchangeRate] = useState(4000);
  const [showUSD, setShowUSD] = useState(false);

  const [percentages, setPercentages] = useState({
    contingency: 3,
    admin: 3,
    operational: 2,
    commission: 20,
    netProfit: 20,
    iva: 19
  });

  const [activeModal, setActiveModal] = useState(null);

  // --- CALCULATIONS ---
  const totalFixed = fixedCosts.reduce((acc, c) => acc + (Number(c.qty) * Number(c.value)), 0);
  const totalVariablePerPax = variableCosts.reduce((acc, c) => acc + (Number(c.qty) * Number(c.value)), 0);
  
  const flexibleCalcs = flexibleCosts.map(c => {
    const limit = Number(c.limit) || 1;
    const reserved = Number(c.reserved) || 1;
    // Evitar division por cero
    const quantity = Math.ceil(reserved / (limit > 0 ? limit : 1));
    return { ...c, calculatedQty: quantity, total: quantity * Number(c.value) };
  });
  
  const totalFlexible = flexibleCalcs.reduce((acc, c) => acc + c.total, 0);

  const totalVariable = totalVariablePerPax * paxCount;
  const totalDirectCosts = totalFixed + totalVariable + totalFlexible;
  const costPerPax = paxCount > 0 ? totalDirectCosts / paxCount : 0;

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

  const costsPercent = finalPrice > 0 ? (totalDirectCosts / finalPrice) * 100 : 0;
  const expensesPercent = finalPrice > 0 ? (totalIndirectCosts / finalPrice) * 100 : 0;
  const profitPercent = finalPrice > 0 ? (netProfitAmount / finalPrice) * 100 : 0;
  const commissionIvaPercent = finalPrice > 0 ? ((commissionAmount + ivaAmount) / finalPrice) * 100 : 0;

  // --- ACTIONS ---
  const formatCurrency = (amount) => {
    if (showUSD) {
      const rate = exchangeRate || 4000;
      return 'USD $' + (amount / rate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return '$' + Math.round(amount).toLocaleString('es-CO');
  };

  const updateItem = (list, setList, id, field, val) => {
    if (showUSD) return; // Prevent logically if bypassed
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
    <div className="costeo-container">
      {/* HEADER INTEGRADO */}
      <header className="header">
          <div className="container">
              <div className="header-content">
                  <div className="logo-section">
                      <div className="header-title">
                          <h1>Calculadora Financiera</h1>
                          <p>Costeo de Paquetes Turísticos</p>
                      </div>
                  </div>
                  <div className="header-actions">
                      <button className="btn btn-outline" onClick={() => setActiveModal('info')}>
                          <BookOpen size={20} style={{marginRight: '8px'}} /> Guía de Uso
                      </button>
                      <button className="btn btn-outline" onClick={() => setActiveModal('cost')}>
                          <Lightbulb size={20} style={{marginRight: '8px'}} /> Tipos de Costos
                      </button>
                  </div>
              </div>
          </div>
      </header>

      {/* CURRENCY BAR */}
      <div className="currency-bar">
          <div className="container">
              <div className="currency-content">
                  <span className="info-text">💱 Todos los valores en el formulario son en COP</span>
                  <div className="exchange-rate">
                      <label>Tasa USD para conversión:</label>
                      <input 
                          type="number" 
                          value={exchangeRate} 
                          min="1" 
                          step="100" 
                          onChange={e => setExchangeRate(Number(e.target.value))} 
                          title="Tasa de cambio"
                      />
                  </div>
              </div>
          </div>
      </div>

      <main className="main-content">
          <div className="container">
              
              {/* ALERTA DE DOLARES ACTIVADOS (BLOQUEO DE EDICIÓN) */}
              {showUSD && (
                  <div className="usd-locked-banner">
                      <span className="icon">🔒</span>
                      <div>
                          <div style={{fontSize: '1.2rem', fontWeight: 800}}>Modo Dólares (USD) Activo</div>
                          <div style={{fontWeight: 400}}>El modo de edición está temporalmente bloqueado para evitar que ingreses valores en USD pensando que son COP. Desactiva la vista USD (abajo en azul) para volver a editar tus valores en Pesos Colombianos.</div>
                      </div>
                  </div>
              )}

              <div className="calculator-grid">
                  {/* COLUMNA IZQUIERDA - INPUTS */}
                  <div className="input-section" style={{opacity: showUSD ? 0.8 : 1}}>
                      {/* COSTOS FIJOS */}
                      <div className="card">
                          <div className="card-header">
                              <h2><Landmark size={24} /> Costos Fijos</h2>
                              <p>Total constante sin importar el número normal de pasajeros</p>
                          </div>
                          <div className="card-body">
                              <div className="info-box">
                                  <strong style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Lightbulb size={20} /> ¿Qué son costos fijos?</strong>
                                  <p>El alquiler del salón comunal cuesta lo mismo si llevas 5 o 15 pasajeros. Ingresa su valor total. A más viajeros, este costo se reparte y tu paquete sale más económico.</p>
                              </div>
                              <div className="cost-items-container">
                                  {fixedCosts.map(item => (
                                      <div key={item.id} className="cost-item">
                                          <div className="cost-item-header">
                                              <span className="cost-type-badge cost-type-fixed">FIJO</span>
                                          </div>
                                          <div className="cost-item-inputs">
                                              <div className="input-group large">
                                                  <label className="input-label">Descripción</label>
                                                  <input type="text" className="input-field" disabled={showUSD} placeholder="Ej. Alquiler de espacio" value={item.label} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'label', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Cantidad</label>
                                                  <input type="number" className="input-field" disabled={showUSD} placeholder="Qty" min="1" value={item.qty} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'qty', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Valor (COP)</label>
                                                  <input type="number" className="input-field" disabled={showUSD} placeholder="Valor" min="0" value={item.value} onChange={e => updateItem(fixedCosts, setFixedCosts, item.id, 'value', e.target.value)} />
                                              </div>
                                              <button className="btn-remove" disabled={showUSD} onClick={() => removeItem(fixedCosts, setFixedCosts, item.id)}><Trash2 size={20} /></button>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <button className="btn-add" disabled={showUSD} onClick={() => addItem('fixed')}>
                                  <Plus size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} /> Agregar Costo Fijo
                              </button>
                          </div>
                      </div>

                      {/* COSTOS VARIABLES */}
                      <div className="card">
                          <div className="card-header" style={{background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'}}>
                              <h2><RefreshCw size={24} /> Costos Variables</h2>
                              <p>El valor que pagas EXCLUSIVAMENTE POR CADA pasajero</p>
                          </div>
                          <div className="card-body">
                              <div className="info-box" style={{borderLeftColor: '#0f766e', background: '#f0fdfa'}}>
                                  <strong style={{color: '#0f766e', display: 'flex', alignItems: 'center', gap: '8px'}}><Lightbulb size={20} /> ¿Qué son costos variables?</strong>
                                  <p>Almuerzos, Seguros de Asistencia, Ingresos. Este costo es INDIVIDUAL. Si el grupo crece, gastas más, pero el costo por persona de esto nunca cambia.</p>
                              </div>
                              <div className="cost-items-container">
                                  {variableCosts.map(item => (
                                      <div key={item.id} className="cost-item">
                                          <div className="cost-item-header">
                                              <span className="cost-type-badge cost-type-variable">VARIABLE</span>
                                          </div>
                                          <div className="cost-item-inputs">
                                              <div className="input-group large">
                                                  <label className="input-label">Descripción</label>
                                                  <input type="text" className="input-field" disabled={showUSD} placeholder="Nombre" value={item.label} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'label', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Catidad</label>
                                                  <input type="number" className="input-field" disabled={showUSD} placeholder="Qty" min="1" value={item.qty} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'qty', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Valor (COP)</label>
                                                  <input type="number" className="input-field" disabled={showUSD} placeholder="Por Pax" min="0" value={item.value} onChange={e => updateItem(variableCosts, setVariableCosts, item.id, 'value', e.target.value)} />
                                              </div>
                                              <button className="btn-remove" disabled={showUSD} onClick={() => removeItem(variableCosts, setVariableCosts, item.id)}><Trash2 size={20} /></button>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <button className="btn-add" disabled={showUSD} onClick={() => addItem('variable')}>
                                  <Plus size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} /> Agregar Costo Variable
                              </button>
                          </div>
                      </div>

                      {/* FLEXIBLES */}
                      <div className="card">
                          <div className="card-header" style={{background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)'}}>
                              <h2><Car size={24} /> Costos Flexibles</h2>
                              <p>Transportes u otros servicios con capacidad límite de puestos</p>
                          </div>
                          <div className="card-body">
                              <div className="info-box" style={{borderLeftColor: '#b45309', background: '#fffbeb'}}>
                                  <strong style={{color: '#b45309', display: 'flex', alignItems: 'center', gap: '8px'}}><Sparkles size={20} /> Magia Automática</strong>
                                  <p>Si la lancha tiene capacidad para 6, y tú deslizas abajo a 8 turistas... la calculadora sola te costeará 2 lanchas.</p>
                              </div>
                              <div className="cost-items-container">
                                  {flexibleCalcs.map(item => (
                                      <div key={item.id} className="cost-item">
                                          <div className="cost-item-header">
                                              <span className="cost-type-badge cost-type-flexible">FLEXIBLE</span>
                                              <span style={{fontSize:'0.85rem', fontWeight: 800, color: '#b45309', background: '#fde68a', padding: '5px 15px', borderRadius: '15px'}}>Se usarán: {item.calculatedQty} unidad(es)</span>
                                          </div>
                                          <div className="cost-item-inputs-flexible" style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                                              <div className="input-group" style={{flex: 2, minWidth: '150px'}}>
                                                  <label className="input-label">Descripción</label>
                                                  <input type="text" className="input-field" disabled={showUSD} value={item.label} onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'label', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Max. Pax</label>
                                                  <input type="number" className="input-field" disabled={showUSD} value={item.limit} min="1" onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'limit', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label" style={{color: '#b45309'}}>Pasajeros</label>
                                                  <input type="number" className="input-field" disabled={showUSD} value={item.reserved} min="1" onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'reserved', e.target.value)} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Unidades</label>
                                                  <input type="number" className="input-field readonly" disabled value={item.calculatedQty} />
                                              </div>
                                              <div className="input-group">
                                                  <label className="input-label">Valor (COP)</label>
                                                  <input type="number" className="input-field" disabled={showUSD} value={item.value} min="0" onChange={e => updateItem(flexibleCosts, setFlexibleCosts, item.id, 'value', e.target.value)} />
                                              </div>
                                              <div className="input-group" style={{alignContent: 'flex-end', justifyContent: 'flex-end'}}>
                                                <button className="btn-remove" disabled={showUSD} onClick={() => removeItem(flexibleCosts, setFlexibleCosts, item.id)}><Trash2 size={20} /></button>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                              <button className="btn-add" disabled={showUSD} onClick={() => addItem('flexible')}>
                                  <Plus size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} /> Agregar Costo Flexible
                              </button>
                          </div>
                      </div>

                      {/* PORCENTAJES Y MARGENES */}
                      <div className="card">
                          <div className="card-header" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'}}>
                              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                  <div>
                                      <h2><PieChart size={24} /> Porcentajes Financieros</h2>
                                      <p>El estándar para calcular utilidad y Tarifa RACK</p>
                                  </div>
                                  <button onClick={() => setActiveModal('pricing')} style={{background: 'white', border: 'none', color: '#1e3a8a', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontWeight: 900, fontSize: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>?</button>
                              </div>
                          </div>
                          <div className="card-body">
                              <div className="percentages-grid">
                                  <div className="percentage-item">
                                      <label>⚠️ Imprevistos (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.contingency} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, contingency: Number(e.target.value)})} />
                                      <div className="hint">Fondo de emergencia (3-5%)</div>
                                  </div>
                                  <div className="percentage-item">
                                      <label>🏢 Administrativos (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.admin} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, admin: Number(e.target.value)})} />
                                      <div className="hint">Arriendo, internet (3-5%)</div>
                                  </div>
                                  <div className="percentage-item">
                                      <label>⚙️ Operacionales (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.operational} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, operational: Number(e.target.value)})} />
                                      <div className="hint">Marketing, servicios (2-5%)</div>
                                  </div>
                                  <div className="percentage-item">
                                      <label>💰 Utilidad Deseada (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.netProfit} min="0" max="99" step="0.1" onChange={e => setPercentages({...percentages, netProfit: Number(e.target.value)})} />
                                      <div className="hint">Margen calculado INVERSAMENTE (PNUD)</div>
                                  </div>
                                  <div className="percentage-item" style={{border: '2px solid #fde68a', background: '#fffbeb'}}>
                                      <label style={{color: '#92400e'}}>🤝 Comisión a Agencias (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.commission} min="0" max="50" step="0.1" onChange={e => setPercentages({...percentages, commission: Number(e.target.value)})} />
                                      <div className="hint" style={{color: '#92400e'}}>Para crear la Tarifa RACK oficial</div>
                                  </div>
                                  <div className="percentage-item" style={{border: '2px solid #e2e8f0'}}>
                                      <label>🧾 IVA (%)</label>
                                      <input type="number" className="input-field" disabled={showUSD} value={percentages.iva} min="0" max="100" step="0.1" onChange={e => setPercentages({...percentages, iva: Number(e.target.value)})} />
                                      <div className="hint">19% Estandar</div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* PAX SLIDER VITAL */}
                      <div className="pax-section">
                          <label>👥 Simulador de Participantes Reales</label>
                          <input type="range" disabled={showUSD} className="pax-slider" min="1" max="50" value={paxCount} onChange={e => setPaxCount(Number(e.target.value))} />
                          <div className="pax-display">
                              <div><div className="pax-label">Mínimo</div><div style={{fontWeight: 600}}>1 pax</div></div>
                              <div><div className="pax-value">{paxCount}</div><div className="pax-label" style={{color: 'var(--primary)'}}>Viajeros Cotizados</div></div>
                              <div><div className="pax-label">Máximo</div><div style={{fontWeight: 600}}>50+ pax</div></div>
                          </div>
                      </div>
                  </div>

                  {/* COLUMNA DERECHA - PANEL DE RESULTADOS EN VIVO */}
                  <div className="results-section">
                      <div className="card results-panel">
                          <div className="card-header" style={{background: showUSD ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' : undefined}}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                  <div>
                                      <h2>{showUSD ? '🇺🇸 RESULTADO USD' : '✅ RESULTADO COP'}</h2>
                                      <p>Cálculo financiero en tiempo récord</p>
                                  </div>
                              </div>
                          </div>
                          
                          {/* USD TOGGLE BOTÓN GIGANTE ARRIBA DE RESULTADOS */}
                          <div className={`usd-toggle ${showUSD ? 'active' : ''}`} style={{margin: '0', borderRadius: '0', borderLeft: 'none', borderRight: 'none'}}>
                              <label>
                                  <input type="checkbox" checked={showUSD} onChange={() => setShowUSD(!showUSD)} style={{transform: 'scale(1.5)'}} />
                                  <span>{showUSD ? 'VOLVER A PESOS COLOMBIANOS' : 'VER PRECIOS EN DÓLARES (USD)'}</span>
                              </label>
                              <div className="usd-rate-display">
                                  Tasa actual: 1 USD = ${exchangeRate.toLocaleString('es-CO')} COP
                              </div>
                          </div>

                          <div className="card-body">
                              <div className="result-section">
                                  <div className="result-section-title">📊 COSTOS DIRECTOS (BASE)</div>
                                  <div className="result-box">
                                      <div className="result-item">
                                          <span className="result-label">Costo Fijo Grupo</span>
                                          <span className="result-value">{formatCurrency(totalFixed)}</span>
                                      </div>
                                      <div className="result-item">
                                          <span className="result-label">Costo Variable Grupo</span>
                                          <span className="result-value">{formatCurrency(totalVariable)}</span>
                                      </div>
                                      <div className="result-item">
                                          <span className="result-label">Costo Transporte (Flex)</span>
                                          <span className="result-value">{formatCurrency(totalFlexible)}</span>
                                      </div>
                                      <div className="result-item total">
                                          <span className="result-label" style={{color: 'var(--primary)'}}>TOTAL DIRECTOS</span>
                                          <span className="result-value" style={{fontSize: '1.3rem'}}>{formatCurrency(totalDirectCosts)}</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="result-section">
                                  <div className="result-section-title">🏭 GASTOS INDIRECTOS (OPERACIÓN)</div>
                                  <div className="result-box">
                                      <div className="result-item">
                                          <span className="result-label">Total Gastos ({percentages.contingency + percentages.admin + percentages.operational}%)</span>
                                          <span className="result-value" style={{color: '#d97706'}}>{formatCurrency(totalIndirectCosts)}</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="result-section">
                                  <div className="result-section-title">💎 PRECIO PNUD CON UTILIDAD</div>
                                  <div className="result-box">
                                      <div className="result-item">
                                          <span className="result-label">Costo Real Sostenible</span>
                                          <span className="result-value">{formatCurrency(netPriceBase)}</span>
                                      </div>
                                      <div className="result-item total">
                                          <span className="result-label" style={{color: '#059669'}}>TARIFA NETA PÚBLICA DIRECTA</span>
                                          <span className="result-value" style={{fontSize: '1.4rem', color: '#059669'}}>{formatCurrency(netPrice)}</span>
                                      </div>
                                      <div className="result-item" style={{borderTop: '1px solid #e2e8f0', marginTop: '10px', paddingTop: '10px'}}>
                                          <span className="result-label" style={{fontSize: '0.85rem'}}>De ahí ganas ({percentages.netProfit}%) en tu bolsillo:</span>
                                          <span className="result-value" style={{fontSize: '0.85rem', color: '#059669'}}>+ {formatCurrency(netProfitAmount)}</span>
                                      </div>
                                  </div>
                              </div>

                              <div className="result-highlight">
                                  <div className="label">🎫 TARIFA RACK COMISIONABLE</div>
                                  <div className="value" style={{ color: '#fde047' }}>{formatCurrency(rackPrice)}</div>
                                  <div className="sub-label">Se le da a Tour Operadores y OTAs (Booking, etc).<br/>Ellos se quedarán con <strong>{formatCurrency(commissionAmount)}</strong> ({percentages.commission}%)</div>
                                  <div className="divider"></div>
                                  <div className="label">💵 PRECIO CON IMPUESTOS (IVA INCLUIDO)</div>
                                  <div className="value" style={{ color: '#6ee7b7' }}>{formatCurrency(finalPrice)}</div>
                                  <div className="divider"></div>
                                  <div className="label">👤 EL PRECIO QUE PAGA CADA PERSONA</div>
                                  <div className="value" style={{ color: '#ffffff', fontSize: '3.5rem', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '15px', display: 'inline-block' }}>{formatCurrency(pricePerPax)}</div>
                              </div>
                              
                              {showUSD ? (
                                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px', background: '#e11d48', justifyContent: 'center', fontSize: '1.1rem' }} onClick={() => setShowUSD(false)}>
                                      🔒 DESBLOQUEAR Y VOLVER A COP
                                  </button>
                              ) : (
                                  <div style={{textAlign: 'center', marginTop: '20px', color: 'var(--gray-500)', fontWeight: 600}}>
                                      ✨ Actualización automática
                                  </div>
                              )}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>

      {/* Footer removed to integrate natively with Cultura T App outer layout */}

      {/* MODALS RENDERIZADOS CONDICIONALMENTE */}
      {activeModal && (
      <div className="modal active" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveModal(null)}>×</button>
              
              {activeModal === 'info' && (
                  <>
                      <h2 style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px'}}>📚 Guía de Uso</h2>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>1. Ingresa los Costos en COP</h3>
                      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginLeft: '25px', marginBottom: '20px'}}>
                          <li>Todos los costos se ingresan en Pesos Colombianos (COP)</li>
                          <li><strong>Costos Fijos:</strong> Gastos que no cambian con el número de participantes (alquiler de espacios, permisos, seguros de evento)</li>
                          <li><strong>Costos Variables:</strong> Gastos por persona (alimentación, materiales, seguros)</li>
                          <li><strong>Costos Flexibles:</strong> Servicios con capacidad limitada (lanchas, vehículos). La calculadora determina automáticamente cuántas unidades necesitas.</li>
                      </ul>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>2. Configura Porcentajes</h3>
                      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginLeft: '25px', marginBottom: '20px'}}>
                          <li>Imprevistos: 3-5% recomendado</li>
                          <li>Administrativos: 3% típico</li>
                          <li>Operacionales: 2% típico</li>
                          <li>Comisión: 5-30% según intermediario</li>
                          <li>Utilidad: 15-25% recomendado (se calcula como margen del precio de venta)</li>
                          <li>IVA: 19% para Colombia</li>
                      </ul>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>3. Ajusta Participantes</h3>
                      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginLeft: '25px', marginBottom: '20px'}}>
                          <li>Usa el control deslizante para ver cómo cambia el costo por persona</li>
                          <li>Más participantes = menor costo unitario de costos fijos</li>
                          <li>Los costos flexibles se recalculan automáticamente</li>
                      </ul>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>4. Configura Tasa de Cambio USD</h3>
                      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginLeft: '25px', marginBottom: '20px'}}>
                          <li>Ingresa la tasa de cambio actual (ej: 4000 COP = 1 USD)</li>
                          <li>Activa la opción "Ver precios en USD" para ver equivalencias</li>
                          <li>Los costos se mantienen en COP, solo el resultado final se convierte</li>
                      </ul>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>5. Revisa Resultados</h3>
                      <ul style={{fontSize: '1.1rem', lineHeight: 1.6, marginLeft: '25px', marginBottom: '20px'}}>
                          <li>Panel derecho muestra desglose completo en COP</li>
                          <li>Activa USD para ver equivalencia en dólares</li>
                          <li>Barras visuales muestran distribución del precio</li>
                          <li>Los cálculos se actualizan automáticamente</li>
                      </ul>
                  </>
              )}

              {activeModal === 'cost' && (
                  <>
                      <h2 style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px'}}>💡 Tipos de Costos</h2>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>🏛️ Costos Fijos</h3>
                      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '10px'}}>No cambian con el número de participantes dentro de un rango establecido. El costo total es constante, pero el costo por persona disminuye a medida que aumenta el grupo.</p>
                      <p style={{background: '#f0f5f2', padding: '15px', borderRadius: '10px', fontSize: '1.1rem', marginBottom: '20px'}}><strong>Ejemplo:</strong> Alquiler de salón comunal por $150,000 COP para el evento</p>

                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>🔄 Costos Variables</h3>
                      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '10px'}}>Cambian proporcionalmente con cada participante adicional. El costo por persona se mantiene constante, pero el costo total del grupo aumenta linealmente.</p>
                      <p style={{background: '#f0f5f2', padding: '15px', borderRadius: '10px', fontSize: '1.1rem', marginBottom: '20px'}}><strong>Ejemplo:</strong> Kit de materiales por $50,000 COP por persona</p>

                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>⚖️ Costos Flexibles</h3>
                      <p style={{fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '10px'}}>Servicios con capacidad limitada. La calculadora determina automáticamente cuántas unidades necesitas según los participantes reservados.</p>
                      <p style={{background: '#f0f5f2', padding: '15px', borderRadius: '10px', fontSize: '1.1rem', marginBottom: '20px'}}><strong>Ejemplo:</strong> Lancha con 6 puestos. Si reservas 8 personas, necesitas 2 lanchas (8 ÷ 6 = 1.33 → 2 unidades)</p>

                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>📊 Fórmula de Precio de Venta</h3>
                      <p style={{background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'white', padding: '20px', borderRadius: '15px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 800, marginTop: '20px'}}>
                          PRECIO = COSTOS + GASTOS + UTILIDAD + COMISIÓN + IVA
                      </p>
                  </>
              )}

              {activeModal === 'pricing' && (
                  <>
                      <h2 style={{fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px'}}>❓ ¿Cómo se Calcula el Precio Final?</h2>
                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '10px'}}>📐 Fórmula Correcta de Precio Neto (según UNDP-PNUD)</h3>
                      
                      <div style={{background: '#f8fafc', padding: '20px', borderRadius: '15px', marginBottom: '20px', border: '1px solid #e2e8f0'}}>
                          <h4 style={{fontSize: '1.1rem', color: '#0369a1', marginBottom: '15px'}}>✅ Secuencia de Cálculo Correcta</h4>
                          <ol style={{fontSize: '1.1rem', lineHeight: 1.8, marginLeft: '25px'}}>
                              <li><strong>Costos Directos</strong> = Fijos + Variables + Flexibles</li>
                              <li><strong>Gastos Indirectos</strong> = Costos × (%Imprevistos + %Admin + %Operacional)</li>
                              <li><strong>Precio Neto</strong> = Costos Directos + Gastos Indirectos</li>
                              <li><strong>Precio con Utilidad</strong> = Precio Neto / (1 - %Utilidad)</li>
                              <li><strong>Tarifa RACK</strong> = Precio con Utilidad + Comisión</li>
                              <li><strong>Precio Final</strong> = Tarifa RACK + IVA</li>
                          </ol>
                      </div>

                      <div style={{background: '#1e293b', color: 'white', padding: '25px', borderRadius: '15px', marginBottom: '30px'}}>
                          <strong style={{fontSize: '1.2rem', display: 'block', marginBottom: '15px'}}>Ejemplo Práctico:</strong>
                          <span style={{fontSize: '1.1rem', lineHeight: 1.6, display: 'block'}}>
                          Costos Directos: $100,000<br/>
                          Gastos (8%): $8,000<br/>
                          Precio Neto: $108,000<br/><br/>
                          Utilidad (20%): $108,000 / (1 - 0.20) = $135,000<br/>
                          Comisión (20%): $27,000<br/>
                          Tarifa RACK: $162,000<br/>
                          IVA (19%): $30,780<br/>
                          <strong style={{color: '#a7f3d0', fontSize: '1.2rem', marginTop: '10px', display: 'block'}}>Precio Final: $192,780</strong>
                          </span>
                      </div>

                      <h3 style={{marginTop: '25px', color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '15px'}}>💵 Tipos de Tarifas en Turismo</h3>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px'}}>
                          <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', padding: '20px', borderRadius: '15px'}}>
                              <h4 style={{fontSize: '1.1rem', color: '#1e40af', marginBottom: '10px'}}>📋 Precio NETO</h4>
                              <p style={{fontSize: '0.95rem', marginBottom: '10px', fontWeight: 600}}>Costos + Gastos Indirectos</p>
                              <p style={{fontSize: '0.85rem', color: '#3b82f6', lineHeight: 1.4}}>Base antes de utilidad. Incluye imprevistos, administrativos y operacionales.</p>
                          </div>
                          <div style={{background: '#fffbeb', border: '1px solid #fde68a', padding: '20px', borderRadius: '15px'}}>
                              <h4 style={{fontSize: '1.1rem', color: '#92400e', marginBottom: '10px'}}>🏷️ Tarifa RACK</h4>
                              <p style={{fontSize: '0.95rem', marginBottom: '10px', fontWeight: 600}}>Precio con Utilidad + Comisión</p>
                              <p style={{fontSize: '0.85rem', color: '#d97706', lineHeight: 1.4}}>Precio oficial con comisión para agencias y tour operadores.</p>
                          </div>
                          <div style={{background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '20px', borderRadius: '15px'}}>
                              <h4 style={{fontSize: '1.1rem', color: '#065f46', marginBottom: '10px'}}>💵 Precio FINAL</h4>
                              <p style={{fontSize: '0.95rem', marginBottom: '10px', fontWeight: 600}}>Tarifa RACK + IVA</p>
                              <p style={{fontSize: '0.85rem', color: '#047857', lineHeight: 1.4}}>Precio que paga el cliente final con impuestos.</p>
                          </div>
                      </div>

                      <div className="info-box" style={{marginTop: '25px', background: '#fef3c7', borderLeftColor: '#f59e0b'}}>
                          <strong style={{color: '#b45309', fontSize: '1.1rem', display: 'block', marginBottom: '10px'}}>🎯 Recomendación Estratégica:</strong>
                          <p style={{fontSize: '1.1rem', lineHeight: 1.6, color: '#92400e'}}>Para maximizar tu utilidad, busca llenar la capacidad máxima de tu tour sin superar los límites que activan costos flexibles adicionales (ej: segunda lancha, segundo vehículo).</p>
                      </div>
                  </>
              )}
          </div>
      </div>
      )}
    </div>
  );
}
