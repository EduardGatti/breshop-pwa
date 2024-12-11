import instanciaApi from "./Api";

class ServicoProduto {
  cadastrarProduto(produto) {
    return instanciaApi.post('/produto', produto);
  }

  listarProdutos() {
    return instanciaApi.get('/produto/list');
  }

  listByUser(id) {
    return instanciaApi.get('/produto', { headers: { "x-usuario": id } });
  }  

  excluirProduto(id) {
    return instanciaApi.delete(`/produto/list/${id}`);
  }

  getById(id) {
    return instanciaApi.get(`/produto/${id}`).catch(e => e.response ? e.response.data : "Erro ao buscar produto");
  }

  editarProduto(produto) {
    return instanciaApi.put(`/produto/${produto.id}`, produto);
  }
}

export default ServicoProduto;
