import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://cip.cultura-t.com',
      dynamicRoutes: [
        '/cursos',
        '/turismo-comunitario',
        '/diseno-producto',
        '/finanzas-y-costeo',
        '/laboratorio-datos',
        '/laboratorio-datos/proyecto-sae',
        '/laboratorio-datos/proyecto-prosperidad',
        '/laboratorio-datos/proyecto-co2',
        '/ruta-formulacion-fontur',
        '/centro-pensamiento'
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/leaflet/') || id.includes('node_modules/react-leaflet/') || id.includes('node_modules/react-simple-maps/') || id.includes('node_modules/d3-') || id.includes('node_modules/topojson-')) {
            return 'vendor-maps';
          }
          if (id.includes('node_modules/recharts/')) {
            return 'vendor-charts';
          }
          if (id.includes('node_modules/jspdf/') || id.includes('node_modules/html2canvas/')) {
            return 'vendor-pdf';
          }
          if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/lucide-react/') || id.includes('node_modules/lottie-react/')) {
            return 'vendor-ui';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
