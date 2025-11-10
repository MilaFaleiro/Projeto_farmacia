import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Farmácia Vida Saudável</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/sobre">Sobre Nós</Link></li>
        <li><Link to="/fale-conosco">Fale Conosco</Link></li>
      </ul>
    </nav>
  );
}
