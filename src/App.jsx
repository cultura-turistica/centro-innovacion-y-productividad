import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const CursosApp = lazy(() => import('./pages/CursosApp'));
const Curso1 = lazy(() => import('./pages/Curso1'));
const Curso2 = lazy(() => import('./pages/Curso2'));
const Curso3 = lazy(() => import('./pages/Curso3'));
const Curso4 = lazy(() => import('./pages/Curso4'));
const Curso5 = lazy(() => import('./pages/Curso5'));
const Curso6 = lazy(() => import('./pages/Curso6'));
const DataLab = lazy(() => import('./pages/DataLab'));
const ThinkTank = lazy(() => import('./pages/ThinkTank'));
const RutaFormulacionFontur = lazy(() => import('./pages/RutaFormulacionFontur'));
const CreadorDeVideos = lazy(() => import('./pages/CreadorDeVideos'));
const VideoSocios = lazy(() => import('./pages/VideoSocios'));
const VideoNotion = lazy(() => import('./pages/VideoNotion'));
const Verificar = lazy(() => import('./pages/Verificar'));
const TestCert = lazy(() => import('./pages/TestCert'));

const ProyectoSaeColombia = lazy(() => import('./pages/DataLab/ProyectoSaeColombia'));
// const ProyectoFontur = lazy(() => import('./pages/DataLab/ProyectoFontur'));
const ProyectoProsperidad = lazy(() => import('./pages/DataLab/ProyectoProsperidad'));
const ProyectoCO2 = lazy(() => import('./pages/DataLab/ProyectoCO2'));

export default function App() {
  const location = useLocation();
  const isTestCert = location.pathname === '/test-cert';

  return (
    <div className={isTestCert ? "" : "layout"}>
      {!isTestCert && <Navigation />}
      <div className={isTestCert ? "" : "main-content-wrapper"} style={isTestCert ? {} : { paddingTop: '2rem' }}>
        {!isTestCert && <Breadcrumbs />}
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<CursosApp />} />
            <Route path="/turismo-comunitario" element={<Curso1 />} />
            <Route path="/diseno-producto" element={<Curso2 />} />
            <Route path="/finanzas-y-costeo" element={<Curso3 />} />
            <Route path="/fundamentos-fotografia" element={<Curso4 />} />
            <Route path="/diseno-marca" element={<Curso5 />} />
            <Route path="/micro-experiencias" element={<Curso6 />} />
            <Route path="/laboratorio-datos" element={<DataLab />} />
            <Route path="/laboratorio-datos/proyecto-sae" element={<ProyectoSaeColombia />} />
            {/* <Route path="/laboratorio-datos/proyecto-fontur" element={<ProyectoFontur />} /> */}
            <Route path="/laboratorio-datos/proyecto-prosperidad" element={<ProyectoProsperidad />} />
            <Route path="/laboratorio-datos/proyecto-co2" element={<ProyectoCO2 />} />
            <Route path="/ruta-formulacion-fontur" element={<RutaFormulacionFontur />} />
            <Route path="/centro-pensamiento" element={<ThinkTank />} />
            <Route path="/creador-videos" element={<CreadorDeVideos />} />
            <Route path="/video-socios" element={<VideoSocios />} />
            <Route path="/video-notion" element={<VideoNotion />} />
            <Route path="/verificar" element={<Verificar />} />
            <Route path="/test-cert" element={<TestCert />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
