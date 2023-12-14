import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Edicao(){
    const [titulo, setTitulo] = useState('')
    const [data, setData] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [status, setStatus] = useState('')

    const { idTarefa } = useParams()
    
    function salvar(){      
        let obj= {titulo, data, conteudo, status}
      fetch(`http://localhost:8080/tarefas/${idTarefa}`,
      {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
      .then(x => alert('Tarefa editada com sucesso!'))
    }

    useEffect(()=>{
      fetch(`http://localhost:8080/tarefas/${idTarefa}`)
      .then(data => data.json())
      .then(response => {
        setTitulo(response.titulo)
        setData(response.data)
        setConteudo(response.conteudo)
        setStatus(response.status)
      })
    },[])


    return(
        <div className="container"><Link to="/">
        <button className="btn" data-bs-toggle="button">Voltar para página inicial</button>
    </Link><br></br>
            <h2 className="text-center">Editar Tarefa: {idTarefa} </h2>
            <label className="form-label">Informe o título</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe titulo"
              value={titulo}
              onChange={txt => setTitulo(txt.target.value)}
            />

            <label className="form-label">Informe a data</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe a data" 
              value={data}
              onChange={txt => setData(txt.target.value)}
            />

            <label className="form-label">Informe o conteúdo</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe o conteudo" 
               value={conteudo}
               onChange={txt => setConteudo(txt.target.value)}
            />

            <label className="form-label">Informe o status</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe o status" 
               value={status}
               onChange={txt => setStatus(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button 
                     onClick={salvar}
                     className="btn btn-primary">
                      Salvar</button>
                <Link to="/tarefas/consultar">
                   <button className="btn btn-danger">Cancelar</button>
                </Link>
            </div>                                        
        </div>
    )
}
