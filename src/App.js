import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="card text-center p-4" style={{ backgroundColor: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        <div className="mb-4">
          <a className="navbar-brand" href="/">
            <img src="/sticky-notes.png" alt="Notebook" width="40" height="40" className="d-inline-block align-top" />
            <span className="ms-2 fs-4 fw-bold">Tarefas</span>
          </a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 justify-content-center">
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/tarefas/cadastrar'>Cadastro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/tarefas/consultar'>Consulta</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
