import logo from './logo.svg';
import './App.css';
import {Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Tarefas</h1>
      <nav>
        <Link to='/tarefas/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/tarefas/consultar'>Consulta</Link> &nbsp;
      </nav>
      <main>
         <Outlet />
      </main>
    </div>
  );
}

export default App;