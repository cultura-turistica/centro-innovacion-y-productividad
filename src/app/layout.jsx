import './globals.css'
import BrowserWarningBanner from '../components/BrowserWarningBanner'

export const metadata = {
  title: 'Inicio CIP - Cultura T',
  description: 'Centro de Innovación y Productividad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BrowserWarningBanner />
        {children}
      </body>
    </html>
  )
}
