import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [status, setStatus] = useState('');

    async function salvar() {
        let obj = { titulo, data, conteudo, status };

        if (obj?.titulo !== '' && obj?.data !== '' && obj?.conteudo !== '' && obj?.status !== '') {
            const response = await fetch('http://localhost:8080/tarefas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            });
            alert('Tarefa criada com sucesso!');
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <div className="container">
            <Link to="/">
                <button className="btn" data-bs-toggle="button">Voltar para página inicial</button>
            </Link>
            <br /><br />
            <div className="card bg-light" >
                <div className="card-body">
                    <h2 className="card-title text-center">Nova tarefa</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="form-label">Informe o título</label>
                            <input
                                id="titulo"
                                className="form-control"
                                type="text"
                                placeholder="Informe o título"
                                value={titulo}
                                onChange={txt => setTitulo(txt.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="data" className="form-label">Informe a data</label>
                            <input
                                id="data"
                                className="form-control"
                                type="text"
                                placeholder="Informe a data"
                                value={data}
                                onChange={txt => setData(txt.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="conteudo" className="form-label">Informe o conteúdo</label>
                            <input
                                id="conteudo"
                                className="form-control"
                                type="text"
                                placeholder="Informe o conteúdo"
                                value={conteudo}
                                onChange={txt => setConteudo(txt.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Informe o status</label>
                            <input
                                id="status"
                                className="form-control"
                                type="text"
                                placeholder="Informe o status"
                                value={status}
                                onChange={txt => setStatus(txt.target.value)}
                            />
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <button onClick={salvar} className="btn btn-success">Salvar</button>
                            <button className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
