import "./style.css";

export default function Servicos() {
  const servicos = [
    "Aferição de pressão arterial",
    "Aplicação de injetáveis",
    "Teste de glicemia",
    "Testes rápidos (Covid, Gripe, DSTs)",
    "Orientação farmacêutica"
  ];

  return (
    <section className="servicos">
      <h2>Nossos Serviços</h2>
      <ul>
        {servicos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
