import './globals.css'

export const metadata = {
  title: 'Inicio CIP - Cultura T',
  description: 'Centro de Innovación y Productividad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
