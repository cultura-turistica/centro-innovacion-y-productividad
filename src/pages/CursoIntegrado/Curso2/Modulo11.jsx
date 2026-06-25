import React from 'react';
import { ShoppingCart, Share2, Tag, LineChart, CheckCircle2, ListChecks, Info, Rocket, Megaphone, Globe, ExternalLink } from 'lucide-react';
import marketingDigital from '../../../assets/marketing_digital.webp';
import estrategiaPrecios from '../../../assets/estrategia_precios.webp';

export default function Modulo11() {
  return (
    <div className="fade-in">
      {/* Hero Header */}
      <div style={{
        background: 'linear-gradient(135deg, #4338ca 0%, #3730a3 100%)',
        padding: '4rem 2rem',
        borderRadius: '0 0 40px 40px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem',
        boxShadow: '0 10px 30px rgba(67, 56, 202, 0.2)'
      }}>
        <h3 style={{fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'white'}}>
          "Conquista el Mercado: Comercialización"
        </h3>
        <p style={{fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto'}}>
          Tu producto está listo. Ahora aprende a posicionarlo, ponerle el precio correcto y elegir los mejores canales para llegar a tus clientes.
        </p>
      </div>

      <div style={{padding: '0 2rem 4rem 2rem'}}>
        
        {/* Canales de Comercialización */}
        <div className="grid-2 mb-10" style={{alignItems: 'start'}}>
          <div className="glass-card" style={{padding: '2.5rem', borderLeft: '8px solid #4338ca', height: '100%'}}>
            <h4 style={{color: '#312e81', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Share2 size={24} /> Estrategia de Canales
            </h4>
            <p style={{fontSize: '1.1rem', color: '#1e1b4b', marginBottom: '1.5rem'}}>
              No todos los canales son para todos los productos. Debes equilibrar la venta <strong>directa</strong> (mayor margen) con la <strong>intermediada</strong> (mayor alcance).
            </p>
            
            {/* Channels Comparison Table */}
            <div style={{borderRadius: '15px', overflow: 'hidden', border: '1px solid #e2e8f0'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem'}}>
                <thead style={{background: '#f8fafc', borderBottom: '1px solid #e2e8f0'}}>
                  <tr>
                    <th style={{padding: '0.8rem', textAlign: 'left'}}>Canal</th>
                    <th style={{padding: '0.8rem', textAlign: 'left'}}>Comisión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid #f1f5f9'}}>
                    <td style={{padding: '0.8rem'}}><strong>Directo</strong> (WhatsApp)</td>
                    <td style={{padding: '0.8rem', color: '#059669', fontWeight: 700}}>0%</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #f1f5f9'}}>
                    <td style={{padding: '0.8rem'}}><strong>Operadores Locales</strong></td>
                    <td style={{padding: '0.8rem'}}>20% - 25%</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #f1f5f9'}}>
                    <td style={{padding: '0.8rem'}}><strong>OTAs</strong> (Airbnb/Expedia)</td>
                    <td style={{padding: '0.8rem'}}>15% - 20%</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.8rem'}}><strong>Op. Internacionales</strong></td>
                    <td style={{padding: '0.8rem'}}>30% - 40%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
             <img 
               src={marketingDigital} 
               alt="Digital Marketing" 
               style={{width: '100%', borderRadius: '25px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)'}} 
             />
             <div className="glass-card" style={{padding: '1.5rem', background: '#eef2ff'}}>
                <p style={{fontSize: '0.9rem', color: '#3730a3', margin: 0, fontWeight: 600}}>
                   Tip: La mezcla ideal suele ser 60% Directo / 40% Intermediado para asegurar sostenibilidad financiera.
                </p>
             </div>
          </div>
        </div>

        {/* Pricing Builder Section */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
           <h3 style={{color: '#312e81', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
             <Tag size={28} /> El Arte de Poner Precios
           </h3>
           <p style={{color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>Construir un precio no es solo sumar costos; es entender el valor percibido y las comisiones del mercado.</p>
        </div>

        <div className="grid-2 mb-10" style={{alignItems: 'center'}}>
           <img 
             src={estrategiaPrecios} 
             alt="Pricing Strategy" 
             style={{width: '100%', borderRadius: '25px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', order: window.innerWidth < 768 ? 2 : 1}} 
           />
           <div className="glass-card" style={{padding: '3rem', background: '#f8fafc', order: window.innerWidth < 768 ? 1 : 2}}>
              <h4 style={{color: '#1e3a8a', marginBottom: '1.5rem'}}>Ejemplo de Markup</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                 <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px dashed #cbd5e1'}}>
                    <span style={{color: '#64748b'}}>Costos Operativos</span>
                    <span style={{fontWeight: 700}}>$130.000 COP</span>
                 </div>
                 <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px dashed #cbd5e1'}}>
                    <span style={{color: '#64748b'}}>Margen de Utilidad (40%)</span>
                    <span style={{fontWeight: 700}}>$52.000 COP</span>
                 </div>
                 <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 15px', background: '#eef2ff', borderRadius: '10px', marginTop: '10px'}}>
                    <span style={{fontWeight: 800, color: '#312e81'}}>Precio Base (Neto)</span>
                    <span style={{fontWeight: 900, color: '#312e81'}}>$182.000 COP</span>
                 </div>
                 <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px dashed #cbd5e1', marginTop: '10px'}}>
                    <span style={{color: '#64748b'}}>Comisión del Canal (30%)</span>
                    <span style={{fontWeight: 700}}>$58.000 COP</span>
                 </div>
                 <div style={{display: 'flex', justifyContent: 'space-between', padding: '15px 20px', background: '#312e81', color: 'white', borderRadius: '15px', marginTop: '10px'}}>
                    <span style={{fontWeight: 800, fontSize: '1.1rem'}}>PRECIO FINAL</span>
                    <span style={{fontWeight: 900, fontSize: '1.3rem'}}>$240.000 COP</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Promotion Strategies Grid */}
        <div className="grid-2 mb-10" style={{gap: '1.5rem'}}>
          <div className="glass-card" style={{padding: '2.5rem', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <div style={{background: '#eef2ff', padding: '20px', borderRadius: '20px', width: 'fit-content', marginBottom: '1.5rem'}}>
                <Megaphone size={32} color="#4338ca" />
             </div>
             <h4 style={{color: '#312e81', marginBottom: '1rem'}}>Contenido que Vende</h4>
             <p style={{fontSize: '1rem', color: '#475569', lineHeight: '1.6'}}>Invierte en fotos y videos <strong>profesionales</strong>. No vendas solo el sitio, vende la emoción de estar allí. TripAdvisor y Google son tus vitrinas principales.</p>
          </div>
          <div className="glass-card" style={{padding: '2.5rem', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <div style={{background: '#f0fdf4', padding: '20px', borderRadius: '20px', width: 'fit-content', marginBottom: '1.5rem'}}>
                <Globe size={32} color="#059669" />
             </div>
             <h4 style={{color: '#064e3b', marginBottom: '1rem'}}>El Botón de Oro</h4>
             <p style={{fontSize: '1rem', color: '#475569', lineHeight: '1.6'}}>Tu objetivo es que el cliente llegue a tu WhatsApp. Facilita el proceso de reserva con respuestas rápidas y catálogos claros.</p>
          </div>
        </div>

        {/* KPIs Section */}
        <div style={{background: '#1e1b4b', padding: '4rem 2rem', borderRadius: '40px', color: 'white', marginBottom: '3rem', position: 'relative', overflow: 'hidden'}}>
           <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
           <h4 style={{color: '#a5b4fc', fontSize: '1.6rem', marginBottom: '2.5rem', textAlign: 'center', position: 'relative'}}>Indicadores de Éxito (KPIs)</h4>
           <div className="grid-3" style={{gap: '2rem', position: 'relative'}}>
              <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '25px', border: '1px solid rgba(165,180,252,0.2)'}}>
                 <LineChart size={32} color="#818cf8" style={{marginBottom: '1rem'}} />
                 <div style={{fontSize: '1.8rem', fontWeight: 900, marginBottom: '5px'}}>NPS</div>
                 <p style={{fontSize: '0.85rem', opacity: 0.8, margin: 0}}>Nivel de Satisfacción: ¿Nos recomendarían?</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '25px', border: '1px solid rgba(165,180,252,0.2)'}}>
                 <ShoppingCart size={32} color="#818cf8" style={{marginBottom: '1rem'}} />
                 <div style={{fontSize: '1.8rem', fontWeight: 900, marginBottom: '5px'}}>CVR</div>
                 <p style={{fontSize: '0.85rem', opacity: 0.8, margin: 0}}>Conversión: Visitantes vs Reservas Reales</p>
              </div>
              <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '25px', border: '1px solid rgba(165,180,252,0.2)'}}>
                 <Share2 size={32} color="#818cf8" style={{marginBottom: '1rem'}} />
                 <div style={{fontSize: '1.8rem', fontWeight: 900, marginBottom: '5px'}}>ARR</div>
                 <p style={{fontSize: '0.85rem', opacity: 0.8, margin: 0}}>Referidos: Clientes que llegan por otros clientes</p>
              </div>
           </div>
        </div>

        {/* Final Exercise */}
        <div className="glass-card shadow-lg" style={{padding: '3rem', background: 'linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%)', color: 'white'}}>
           <h4 style={{color: '#fde047', fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px'}}>
             <Rocket size={32} /> Hoja de Ruta Final
           </h4>
           <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {[
                "Define tu combinación de canales (Directo/OTAs/Agentes).",
                "Calcula tu precio público incluyendo todas las comisiones.",
                "Crea tu 'Ficha Comercial' en PDF para enviar por WhatsApp.",
                "Organiza tu sesión fotográfica para el material de marketing.",
                "Publica tu perfil en Google Business y TripAdvisor.",
                "¡Listo! Tu producto está diseñado milimétricamente para triunfar."
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                   <div style={{background: '#fde047', color: '#1e1b4b', width: '35px', height: '35px', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900}}>{idx+1}</div>
                   <p style={{margin: 0, fontSize: '1.2rem', opacity: 0.9}}>{step}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Completion Message */}
        <div style={{textAlign: 'center', marginTop: '5rem', padding: '4rem 2rem', background: '#f5f3ff', borderRadius: '50px', border: '3px solid #ddd6fe', position: 'relative'}}>
           <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🏆</div>
           <h2 style={{color: '#1e1b4b', fontWeight: 900, fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Poppins'}}>¡CERTIFICACIÓN COMPLETADA!</h2>
           <p style={{color: '#4338ca', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6'}}>
             Has recorrido los 11 pasos del <strong>Diseño de Producto Turístico</strong>. El territorio te espera para poner en práctica todo lo aprendido. 
           </p>
           <button onClick={() => window.location.href='https://cultura-t.com/'} className="btn-primary" style={{marginTop: '2rem', background: '#4338ca', fontSize: '1.2rem', padding: '15px 35px'}}>
              Volver al Portal <ExternalLink size={20}/>
           </button>
        </div>

      </div>
    </div>
  );
}
