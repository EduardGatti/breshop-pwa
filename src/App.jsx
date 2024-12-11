import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import VerificarAutenticacao from './comum/componentes/VerificarAutenticacao/VerificarAutenticacao';
// import PaginaCadastroCliente from './paginas/PaginaCadastroCliente/PaginaCadastroCliente';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaListaClientes from './paginas/PaginaListaClientes/PaginaListaClientes';
import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import PaginaMeuPerfil from './paginas/PaginaMeuPerfil/PaginaMeuPerfil';
import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';
import PaginaProduto from './paginas/PaginaProduto/PaginaProduto';
import PaginaRegistroVendas from './paginas/PaginaRegistroVendas/PaginaRegistroVendas';
import PaginaMeusAnuncio from './paginas/PaginaMeusAnuncios/PaginaMeusAnuncios';
import PaginaCadastroCliente from './paginas/PaginaCadastroCliente/PaginaCadastroCliente';
import PaginaDetalhesProdutos from './paginas/PaginaDetalhesProdutos/PaginaDetalhesProdutos';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <PaginaLogin />,
  },
  {
    path: 'novo-usuario',
    element: <PaginaNovoUsuario />,
  },
  {
    path: '',
    element: <VerificarAutenticacao />,
    children: [
      // Rotas privadas da app
      {
        path: '',
        element: <PaginaInicial />,
      },
      {
        path: 'cadastro-cliente',
        element: <PaginaCadastroCliente/>,
      },
      {
        path: 'lista-clientes',
        element: <PaginaListaClientes />,
      },
      {
        path: 'cadastro-produto',
        element: <PaginaProduto />,
      },
      {
        path: 'cadastro-produto/:id',
        element: <PaginaProduto />,
      },
      {
        path: 'meu-perfil',
        element: <PaginaMeuPerfil />,
      },
      {
        path: 'resgistro-vendas',
        element: <PaginaRegistroVendas />,
      },
      {
        path: 'meus-anuncios',
        element: <PaginaMeusAnuncio />,
      },
      {
        path: 'produto/:id',
        element: <PaginaDetalhesProdutos />
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
