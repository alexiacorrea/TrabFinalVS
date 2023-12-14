import { useEffect } from "react"
import { useState } from "react"
import Card from "./card"
import { Link } from 'react-router-dom';

export default function Consulta() {
    const [tarefas, setTarefas] = useState([])
    function consultar() {
        fetch('http://localhost:8080/tarefas')
            .then(data => data.json())
            .then(response => setTarefas(response))
    }
    

    useEffect(consultar, [])

    return (
        <div>
            <Link to="/">
                <button className="btn" data-bs-toggle="button">Voltar para página inicial</button>
            </Link>
            <h2 className="text-center">Consulta de tarefas</h2>
            
            <div className="d-flex flex-wrap">
                {
                    tarefas.map(tf => <Card tarefa={tf} />)
                }
            </div> 
            </div>
    )
}
