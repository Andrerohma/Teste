import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiFillEdit as EditObj} from "react-icons/ai"
import {RiDeleteBin2Fill as DelObj} from "react-icons/ri";
import estilos from "./Produtos.module.css";
import ModalData from "../components/ModalData";
import {useState} from "react";

export default function Produtos() {

 const [status, setStatus] = useState({
  open: false,
  id:0,
 })

 const handleStatus = (status,id)=>{
    setStatus({"open":status,"id":id})
 }
  
  return (
    <>
      <h1>Produtos Informáticos - FIAPO</h1>

      <table className={estilos.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>IMAGEM</th>
            <th>EDITAR/EXCLUIR</th>
          </tr>
        </thead>
        
        <tbody> 
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice} className={estilos.tblLine}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td><img src={produto.img} alt={produto.desc} /></td>
              <td> <Link to={`/editar/produtos/${produto.id}`}><EditObj/></Link> | <Link to={`/excluir/produtos/${produto.id}`}><DelObj/></Link></td>

            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>

            <div>
              <ModalData statusModal={status.open} idProduto={status.id}/>
            </div>

    </>
  );
}