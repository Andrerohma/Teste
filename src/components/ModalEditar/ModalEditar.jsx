import { useEffect, useState } from "react";
import styles from "../ModalInserir/ModalInserir.module.css";
import "../ModalInserir/ModalInserir.scss";

export default function ModalEditar(props) {

  const [produtoRecuperado, setProdutoRecuperado] = useState({});


  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProdutoRecuperado(data)
      });
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setProdutoRecuperado({...produtoRecuperado, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefalut()
    fetch(`http://localhost:5000/produtos/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "aplication/json",
    },
    body: JSON.stringify(produtoRecuperado),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setOpen(false);
    })
    .catch(error=>console.log(error))
    
    props.setOpen(false)
    window.location = "/produtos"
  };

  if (props.openEditar) {
    return (
      <>
        <div className={styles.container}>
          <h1>EDIÇÃO DE PRODUTO</h1>

          <div className="formGroup">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <span className="btnClose" onClick={() => props.setOpen(false)}>
                  X
                </span>

                <legend>Modal Editar</legend>
                <div>
                  <label htmlFor="idNome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    id="idNome"
                    placeholder="Digite o nome do produto"
                    value={produtoRecuperado.nome}
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
                    value={produtoRecuperado.desc}
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
                    value={produtoRecuperado.preco}
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
                    value={produtoRecuperado.img}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </>
    );
  }
}
