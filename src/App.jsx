import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CursosApp from './pages/CursosApp';
import Curso1 from './pages/Curso1';
import Curso2 from './pages/Curso2';
import Curso3 from './pages/Curso3';
import DataLab from './pages/DataLab';
import ThinkTank from './pages/ThinkTank';
import './index.css';

export default function App() {
  return (
    <div className="layout">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<CursosApp />} />
        <Route path="/turismo-comunitario" element={<Curso1 />} />
        <Route path="/diseno-producto" element={<Curso2 />} />
        <Route path="/finanzas-y-costeo" element={<Curso3 />} />
        <Route path="/laboratorio-datos" element={<DataLab />} />
        <Route path="/centro-pensamiento" element={<ThinkTank />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

