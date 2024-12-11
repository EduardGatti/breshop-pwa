import { useEffect, useState } from 'react';

import Principal from "../../comum/componentes/Principal/Principal";
import ServicoProduto from '../../comum/servicos/ServicoProduto';
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";
import CardMeusAnuncios from '../../comum/componentes/CardMeusAnuncios/CardMeusAnuncios';


const instanciaServicoProduto = new ServicoProduto();
const PaginaMeusAnuncio = () => {
  const session = new ServicoAutenticacao();
  const user = session.buscarUsuarioLogado();
  const [listByUser, setListByUser] = useState([]);


  useEffect(() => {
    const produtoListByUser = async () => {
      try {
        const response = await instanciaServicoProduto.listByUser();
        setListByUser(response.data);
      } catch (erro) {
        console.error("Erro ao carregar os anúncios:", erro);
      }
    }
    produtoListByUser()
}, []);

return (
  <Principal titulo="Meus anúncios">
    {listByUser.map((produto, i) => (
      <CardMeusAnuncios

        produto={produto}
        key={i}

      />
    ))}
  </Principal>
);
};

export default PaginaMeusAnuncio;
