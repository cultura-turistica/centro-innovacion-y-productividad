import './globals.css'
import Navbar from '@/components/layout/Navbar';
export const metadata = {
  title: 'Inicio CIP - Cultura T',
  description: 'Centro de Innovación y Productividad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
