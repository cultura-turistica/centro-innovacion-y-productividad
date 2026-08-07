export function OrgNode({ node, children }) {
  const { title, subtitle, color, bg, items, children: nodeChildren } = node;
  
  return (
    <div style={{ background: bg || 'white', border: `1px solid ${color || '#e2e8f0'}`, borderRadius: '15px', padding: '1.5rem', flex: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
      <h4 style={{ color: color || '#032968', margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>{title}</h4>
      {subtitle && <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: 700 }}>{subtitle}</p>}
      
      {items && items.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ padding: '0.5rem 0', color: '#475569', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{width: '6px', height: '6px', borderRadius: '50%', background: color || '#e2e8f0', flexShrink: 0}} />
              {item}
            </li>
          ))}
        </ul>
      )}
      
      {/* Soporte para hijos definidos en el JSON */}
      {nodeChildren && nodeChildren.length > 0 && (
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {nodeChildren.map((child, idx) => (
            <OrgNode key={idx} node={child} />
          ))}
        </div>
      )}

      {/* Soporte para hijos anidados en React (como el Núcleo Integrado) */}
      {children && (
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}
