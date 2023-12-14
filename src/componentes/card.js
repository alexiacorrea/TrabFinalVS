import { Link } from "react-router-dom"

export default function Card(props) {

    function excluir(){
    fetch(`http://localhost:8080/tarefas/${props.tarefa.id}`,
      {
        method:'DELETE'        
      })
      .then(x => alert('Tarefa excluída com sucesso!'))
    }

    return (
        <div className="card text-bg-dark mb-3">
            <div className="card-body">
                <div>
                    <span className="fw-bold me-1">Título:</span>
                    <span className=".text-white">{props.tarefa.titulo}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Data:</span>
                    <span className=".text-white">{props.tarefa.data}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Conteudo:</span>
                    <span className=".text-white">{props.tarefa.conteudo}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Status:</span>
                    <span className=".text-white">{props.tarefa.status}</span>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                <Link to={`/tarefas/editar/${props.tarefa.id}`}>
                    <button className="btn btn-outline-primary">Editar</button>
                </Link>
                    <button onClick={excluir} className="btn btn-outline-danger" >Excluir</button>
                </div>
            </div>
        </div>
    )
}
