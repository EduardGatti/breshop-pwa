import { useParams } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoProduto from "../../comum/servicos/ServicoProduto";
import { useEffect, useState } from "react";
import "./PaginaDetalhesProdutos.css"
import { toast } from "react-toastify";

const instanciaServicoProduto = new ServicoProduto();
const PaginaDetalhesProdutos = () => {

    const [produto, setProduto] = useState();
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        const getProduto = async () => {
            const response = await instanciaServicoProduto.getById(id);

            setProduto(response.data);
        };
        getProduto();
    }, []);

    const comprar = () => {
        
    toast.success("Para realizar sua compra entre em contato com o anunciante do produto.")

    }
    return (
        <Principal>
            {produto && <div className="compra-produto">
                <img src={produto.foto_produto} id="imgProduto"></img>
                <div className="campo">
                    <h2>{produto.nome_produto}</h2>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>Descrição:{produto.descricao_produto}</p>
                </div>
            </div>}
                <button onClick={comprar} id="compra">Comprar Produto</button>
            {produto && <div className="localizacao">
                <div className="campo">

                    <h5>Nome do Anunciante: {produto.usuario.nome}</h5>
                    <h5>Email: {produto.usuario.email} </h5>
                    <h5>Numero: {produto.usuario.celular}</h5>
                    <h5>Cep: {produto.usuario.cep}</h5>

                </div>
            </div>}

        </Principal>
    );
}

export default PaginaDetalhesProdutos;