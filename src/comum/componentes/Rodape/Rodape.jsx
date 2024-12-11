import { useNavigate } from 'react-router-dom';
import './Rodape.css';
import { FaHome } from 'react-icons/fa';
import { IoStorefront } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';

function Rodape() {

  const navigate = useNavigate()

  return (
    
    <footer className="rodape_root">

      <FaHome size={38} color='white' onClick={() => navigate("/")}></FaHome>
      <FaPlus size={38} color='white' onClick={() => navigate("/cadastro-produto")}></FaPlus>
      <IoStorefront size={38} color='white' onClick={() => navigate("/meus-anuncios")}></IoStorefront>
    </footer>
  );
}

export default Rodape;
