import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Edicao() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [status, setStatus] = useState('');

    const { idTarefa } = useParams();

    function salvar() {
        let obj = { titulo, data, conteudo, status };
        fetch(`http://localhost:8080/tarefas/${idTarefa}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        .then(x => alert('Tarefa editada com sucesso!'))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/tarefas/${idTarefa}`)
        .then(data => data.json())
        .then(response => {
            setTitulo(response.titulo);
            setData(response.data);
            setConteudo(response.conteudo);
            setStatus(response.status);
        });
    }, [idTarefa]);

    return (
        <div className="container">
            <Link to="/tarefas/consultar">
                <button className="btn" data-bs-toggle="button">Voltar para página de consulta</button>
            </Link>
            <div className="card bg-light">
                <div className="card-body">
                    <h2 className="card-title text-center">Editar Tarefa</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="form-label">Informe o título</label>
                            <input
                                id="titulo"
                                className="form-control"
                                type="text"
                                placeholder="Informe título"
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
                            <Link to="/tarefas/consultar">
                                <button className="btn btn-danger">Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
