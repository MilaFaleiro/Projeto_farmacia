import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
import logo from "../../assets/logo.png"; // ajuste o caminho conforme sua pasta

export default function Hero({
  title = "Bem-vindo à Farmácia Vida Saudável",
  subtitle = "Cuidando de você com atenção e carinho.",
  ctaPrimary = { to: "/servicos", label: "Nossos Serviços" },
  ctaSecondary = { to: "/fale-conosco", label: "Fale Conosco" },
  background = "/imagens/fundo-hero.jpg"
}) {
  // Define o estilo de fundo se houver imagem
  const style = background
    ? {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }
    : undefined;

  return (
    <header
      className="hero"
      style={style}
      role="banner"
      aria-label="Seção principal de boas-vindas"
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        {/* === Logo centralizada === */}
        <img
          src={logo}
          alt="Logo da Farmácia Vida Saudável"
          className="hero__logo"
        />

        {/* === Título e subtítulo === */}
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>

        {/* === Botões de ação === */}
        <nav className="hero__actions" aria-label="Ações do hero">
          <Link
            to={ctaPrimary.to}
            className="btn btn--primary"
            aria-label={ctaPrimary.label}
          >
            {ctaPrimary.label}
          </Link>
          <Link
            to={ctaSecondary.to}
            className="btn btn--secondary"
            aria-label={ctaSecondary.label}
          >
            {ctaSecondary.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaPrimary: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  ctaSecondary: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  background: PropTypes.string
};
