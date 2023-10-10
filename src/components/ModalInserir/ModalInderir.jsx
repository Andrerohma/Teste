import { useEffect, useState } from "react";
import styles from "./ModalInserir.module.css";
import "./ModalInserir.scss";

export default function ModalInserir(props) {
  document.title = "CADASTRO";

  let novoId;

  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.lenght);
        // console.log("NOVO ID" + novoId);
        novoId = data[data.lenght - 1].id + 1;
        return novoId;
      })
      .catch((error) => console.log(error));
  });

  const[produto, setProduto] = useState({
    id:novoId,
    nome:"",
    desc:"",
    preco:"",
    img:""
  })

  // setProduto({...produto, ["nome"]:"jose"})

  const handleChange = (e) => {
    const {name, value} = e.target
    setProduto({...produto, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefalut()
    fetch("http://localhost:5000/produtos",{
      method: "POST",
      headers:{
        "Content-Type": "application/Json"
      },
      body: JSON.stringify(produto)
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(error=>console.log(error))
    
    props.setOpen(false)
    window.location = "/produtos"
  }

  if (props.open) {
    return (
      <>
        <div className={styles.container}>
          <h1>CADASTRO DE PRODUTOS</h1>

          <div className="formGroup">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <span className="btnClose" onClick={() => props.setOpen(false)}>
                  X
                </span>

                <legend>Novo Produto</legend>
                <div>
                  <label htmlFor="idNome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    id="idNome"
                    placeholder="Digite o nome do produto"
                    value={produto.nome}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input
                    type="text"
                    name="desc"
                    id="idDesc"
                    placeholder="Digite a descrição do produto"
                    value={produto.desc}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input
                    type="text"
                    name="preco"
                    id="idpreco"
                    placeholder="Digite o preço do produto"
                    value={produto.preco}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="idImg"> Imagem</label>
                  <input
                    type="text"
                    name="img"
                    id="idImg"
                    placeholder="Digitea URL da imagem do produto"
                    value={produto.img}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button>CADASTRAR</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </>
    );
  }
}
