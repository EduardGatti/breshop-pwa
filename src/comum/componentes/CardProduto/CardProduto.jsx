// src/comum/componentes/CardProduto/CardProduto.jsx
import React from 'react';
import './CardProduto.css';  
import { Link } from 'react-router-dom';

const CardProduto = ({ produto }) => {
    return (
        <Link to={`/produto/${produto.id_produtos}`}>
            <div className="card-produto">
                <img src={produto.foto_produto}></img>
                <div>
                    <h4>{produto.nome_produto.substr(0, 20)}</h4>
                    <p>Preço: R${produto.preco_produto}</p>
                    <p>{produto.descricao_produto.substr(0, 20) + "..."}</p>
                    <button >Ver Detalhes...</button>
                </div>
            </div>
        </Link>
    );
};

export default CardProduto;
