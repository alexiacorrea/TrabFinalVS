import { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

export default function Consulta() {
    const [tarefas, setTarefas] = useState([]);

    function consultar() {
        fetch("http://localhost:8080/tarefas")
            .then((data) => data.json())
            .then((response) => setTarefas(response));
    }

    useEffect(consultar, []);

    return (
        <div className="container">
            <Link to="/">
                <button className="btn" data-bs-toggle="button">
                    Voltar para página inicial
                </button>
            </Link>
            <h2 className="text-center">Consulta de tarefas</h2>
            <div className="card bg-light">
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {tarefas.map((tf) => (
                            <div className="col" key={tf.id}>
                                <Card tarefa={tf} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
