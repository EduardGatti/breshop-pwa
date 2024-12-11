import instanciaApi from './Api';

class ServicoUsuarios {
  
  getByIdUsuario(id){

    return instanciaApi.get(`/usuarios/${id}`).catch(e => e.response.data)

}
  listar() {
    const usuariosDoLocalStorage = localStorage.getItem('lista-usuarios');
    if (usuariosDoLocalStorage) {
      return JSON.parse(usuariosDoLocalStorage);
    }

    return [];
  }

  cadastrarUsuario(usuario) {
    return instanciaApi.post('/usuarios', usuario);
  }
}

export default ServicoUsuarios;
