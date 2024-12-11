import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import { useEffect, useState } from 'react';
import CardProduto from '../../comum/componentes/CardProduto/CardProduto';
import { FaSearch } from 'react-icons/fa';
import Search from '../../comum/componentes/ui/search';

const instanciaServicoProduto = new ServicoProduto();

const PaginaInicial = () => {

  const [listarProdutos, setListarProdutos] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const listarProdutos = async () => {
    const response = await instanciaServicoProduto.listarProdutos();
      console.log(response)
      if (search){
        const produtos = response.data.filter(p => p.nome_produto.includes(search))
        setListarProdutos(produtos);
      }
      else setListarProdutos(response.data)
      
    };
    listarProdutos();
  }, [search]);

  return (

    <Principal titulo="BreShop">
     
      <Search onSearch={c => setSearch(c)} />
      {listarProdutos.map((produto, i) =>

        <CardProduto produto={produto} key={i} />)}

    </Principal>
  );
};

export default PaginaInicial;
