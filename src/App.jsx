import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Centro de Innovación y Productividad'
  const appEnv = import.meta.env.VITE_APP_ENV || 'local'

  return (
    <>
      <div className="logo-container">
        <div className="logo-circle">
          {/* Eagle SVG Icon Placeholder */}
          <svg viewBox="0 0 100 100" width="60" height="60" fill="#002664">
            <path d="M10,50 L40,30 L60,30 L90,50 L60,70 L40,70 Z" />
            <path d="M40,30 L50,10 L60,30" fill="#C8102E" />
            <path d="M40,70 L50,90 L60,70" fill="#F6C300" />
          </svg>
        </div>
      </div>
      
      <div className="env-badge">{appEnv}</div>
      
      <h1>{appTitle}</h1>
      <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '2rem' }}>
        Gestión y desarrollo para la era digital <span className="brand-accent">Cultura T</span>
      </p>

      <div className="card">
        <h2>Panel de Control Estratégico</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Este centro está diseñado para potenciar la productividad y la innovación mediante herramientas tecnológicas de vanguardia.
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Interacciones Registradas: {count}
        </button>
        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748B' }}>
          Configuración actual: <code>{appEnv}</code> v24.14.1
        </p>
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Cultura T - Centro de Innovación y Productividad. Todos los derechos reservados.
      </footer>
    </>
  )
}

export default App
