import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import Edicao from './componentes/edicao';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rotas = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tarefas/cadastrar" element={<Cadastro />} />
      <Route path="/tarefas/consultar" element={<Consulta />} />
      <Route path="/tarefas/editar/:idTarefa" element={<Edicao />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {rotas}
  </React.StrictMode>,
  document.getElementById('root')
);
