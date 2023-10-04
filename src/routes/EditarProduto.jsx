import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos';

export default function EditarProdutos() {

  document.title = "EDITAR PRODUTO"

  const navigate = useNavigate()

  const {id} = useParams();

  const produtoRecuperado = ListaProdutos.filter((produto) => produto.id == id)[0]

  const [produto, setProduto] = useState({
    id: produtoRecuperado.id,
    nome: produtoRecuperado.nome,
    desc: produtoRecuperado.desc,
    img: produtoRecuperado.img,
    preco: produtoRecuperado.preco
    
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setProduto({...produto,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let indice;

    // ListaProdutos.forEach((item, index) => {
    //   if(item.id == produto.id){
    //     indice = index
    //   }
    // })

    indice = ListaProdutos.findIndex(item => item.id == produto.id)

    ListaProdutos.splice(indice,1,produto)
    alert("Produto alterado com sucesso")
    navigate("/produtos")
  }

  return (
    <>
        {/* <div>
          <button onClick={() => setCounter(counter + 1)}>Counter - {counter}</button>
        </div> */}

        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Produto Selecionado</legend>
              <div>
                <input type="hidden" name='id' value={produto.id}/>
              </div>
              <div>
                <label htmlFor="idNome">Nome: </label>
                <input type="text" name='nome' id='idNome' value={produto.nome} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição: </label>
                <input type="text" name='desc' id='idDesc' value={produto.desc} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço: </label>
                <input type="text" name='preco' id='idPreco' value={produto.preco} onChange={handleChange}/>
              </div>
            </fieldset>
            <div>
              <button>Editar</button>
            </div>
          </form>
        </div>
        {/* <div>
          <p>Nome: {produto.nome}</p>
          <p>Desc: {produto.desc}</p>
          <p>Preço: {produto.preco}</p>
        </div> */}

      {/* <div>
        <p>{counter}</p>
      </div> */}

    </>
    
  )
}
