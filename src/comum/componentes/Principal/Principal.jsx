import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';
import './Principal.css';
import Rodape from '../Rodape/Rodape';

function Principal({ voltarPara, titulo, children }) {
  return (
    <>
      <Cabecalho />
      <main className="principal_root">
        
        <div className="principal_titulo">
          <div className='voltar'>

          {voltarPara && (
            <Link to={voltarPara}>
              <FaChevronLeft size={24} color="#3f50b5" />
            </Link>
          )}

          </div>

          <h1>{titulo}</h1>
        </div>

        {children}
      </main>

      <Rodape />
    </>
  );
}

export default Principal;
