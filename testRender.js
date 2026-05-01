import React from 'react';
import { renderToString } from 'react-dom/server';
import Curso4 from './src/pages/Curso4.jsx';
import Modulo1 from './src/pages/CursoIntegrado/Curso3/Modulo1.jsx';
import Modulo2 from './src/pages/CursoIntegrado/Curso3/Modulo2.jsx';
import Modulo3 from './src/pages/CursoIntegrado/Curso3/Modulo3.jsx';

const testRender = (name, Component) => {
  try {
    renderToString(React.createElement(Component));
    console.log(`${name} rendered successfully!`);
  } catch (e) {
    console.error(`Error rendering ${name}:`, e);
  }
};

testRender("Curso4", Curso4);
testRender("Modulo1", Modulo1);
testRender("Modulo2", Modulo2);
testRender("Modulo3", Modulo3);
