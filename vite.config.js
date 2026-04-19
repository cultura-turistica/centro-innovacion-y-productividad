import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://cip.cultura-t.com',
      dynamicRoutes: [
        '/',
        '/#/cursos',
        '/#/turismo-comunitario',
        '/#/diseno-producto',
        '/#/finanzas-y-costeo',
        '/#/laboratorio-datos',
        '/#/laboratorio-datos/proyecto-sae',
        '/#/laboratorio-datos/proyecto-prosperidad',
        '/#/laboratorio-datos/proyecto-co2',
        '/#/centro-pensamiento'
      ]
    })
  ],
})
