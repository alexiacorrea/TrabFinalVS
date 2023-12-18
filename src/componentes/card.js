import { Link } from "react-router-dom";

export default function Card(props) {
    function excluir() {
        fetch(`http://localhost:8080/tarefas/${props.tarefa.id}`, {
            method: 'DELETE'
        })
        .then(x => alert('Tarefa excluída com sucesso!'))
    }

    return (
        <div className="card bg-warning-subtle mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-body d-flex flex-column">
                <div className="mb-2">
                    <span className="fw-bold me-1">Título:</span>
                    <span>{props.tarefa.titulo}</span>
                </div>
                <div className="mb-2">
                    <span className="fw-bold me-1">Data:</span>
                    <span>{props.tarefa.data}</span>
                </div>
                <div className="mb-2">
                    <span className="fw-bold me-1">Conteúdo:</span>
                    <span>{props.tarefa.conteudo}</span>
                </div>
                <div className="mb-2">
                    <span className="fw-bold me-1">Status:</span>
                    <span>{props.tarefa.status}</span>
                </div>
                <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/tarefas/editar/${props.tarefa.id}`}>
                        <button className="btn btn-warning">Editar</button>
                    </Link>
                    <button onClick={excluir} className="btn btn-danger">Excluir</button>
                </div>
            </div>
        </div>
    )
}
