import { useEffect } from "react"
import { useState } from "react"
import Card from "./card"

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
            <h2>Consulta de tarefas</h2>
            <div className="d-flex flex-wrap">
                {
                    tarefas.map(tf => <Card tarefa={tf} />)
                }
            </div> 
        </div>
    )
}