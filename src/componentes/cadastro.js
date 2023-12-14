import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [status, setStatus] = useState('')

    async function salvar(){
        let obj={titulo, data, conteudo, status}

        if (obj?.titulo !== '' && obj?.data !== '' && obj?.conteudo !== '' && obj?.status !== '') {
          const response = await fetch('http://localhost:8080/tarefas',
          {
              method:'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(obj)
          })
          .then(x => alert('Tarefa criada com sucesso')
          )
        } else {
          alert("Preencha todos os campos!")
        } 
    }

    return (
        <div className="container">
            <Link to="/">
             <button className="btn" data-bs-toggle="button">Voltar para página inicial</button>
            </Link><br></br>
            <h2 className="text-center">Nova tarefa</h2>
            <label className="form-label">Informe o título</label>

            <input className="form-control" type="text"
                placeholder="Informe o título" value={titulo} onChange={txt =>
                    setTitulo(txt.target.value)} />

            <label className="form-label">Informe a data</label>
            <input className="form-control" type="text" placeholder="Informe a data" value={data} onChange={txt => setData(txt.target.value)} />

            <label className="form-label">Informe o conteudo</label>
            <input className="form-control" type="text" placeholder="Informe o conteudo" value={conteudo} onChange={txt => setConteudo(txt.target.value)} />

            <label className="form-label">Informe o status</label>
            <input className="form-control" type="text" placeholder="Informe o status" value={status} onChange={txt => setStatus(txt.target.value)} />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div> 
            
            
 {/* {`${titulo} ${data} ${conteudo} ${status}`} */}

        </div>
    )
}
