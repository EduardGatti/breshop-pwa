
import React, { useState } from 'react';
import './CardMeusAnuncios.css';
import { Await, Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import instanciaApi from '../../servicos/Api';

const CardMeusAnuncios = ({ produto }) => {
    const navigate = useNavigate();
    const [listarProdutos, setListarProdutos] = useState([]);

    const editarProduto = (idProduto) => {

        navigate(`/cadastro-produto/${idProduto}`)

    }

    const excluirProduto = (idProduto) => {
        if (confirm('Tem certeza?')) {
          const response = instanciaApi.delete(`/produto/list/${idProduto}`);
          setListarProdutos(response.data);
        }
        navigate("/anuncio")
      };
    return (
        <Link>
            <div className="card-produto">
                <img src={produto.foto_produto}></img>
                <div>
                    <h3>{produto.nome_produto}</h3>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>{produto.descricao_produto.substr(0, 10) + "..."}</p>
                <FaTrashAlt onClick={() => excluirProduto(produto.id_produtos)} id='excluir' ></FaTrashAlt>
                <FaEdit onClick={() => editarProduto(produto.id_produtos)} id='editar'></FaEdit>
                </div>
            </div>
        </Link>
    );
};

export default CardMeusAnuncios;
