import { Link } from "react-router-dom";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">
      <h2>Bem-vindo à Farmácia Vida Saudável</h2>
      <p>Cuidando de você com atenção e carinho.</p>
      <div>
        <Link to="/servicos" className="btn">Nossos Serviços</Link>
        <Link to="/fale-conosco" className="btn btn-sec">Fale Conosco</Link>
      </div>
    </section>
  );
}
