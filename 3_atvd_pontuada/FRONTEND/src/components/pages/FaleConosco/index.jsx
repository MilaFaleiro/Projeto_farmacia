import { useState } from "react";
import { api } from "../../../api";
import "./style.css";

export default function FaleConosco() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const runValidations = (values) => {
    const e = {};
    if (!values.nome.trim()) e.nome = "Nome é obrigatório.";
    if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "E-mail inválido.";
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(values.telefone)) e.telefone = "Telefone inválido (ex: 11 91234-5678).";
    if (!values.mensagem.trim()) e.mensagem = "Mensagem não pode estar vazia.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      mensagem: form.mensagem.trim(),
    };

    const fieldErrors = runValidations(trimmed);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      setStatus({ loading: false, success: null, error: null });
      return;
    }

    try {
      setStatus({ loading: true, success: null, error: null });
      await api.post("/contatos", trimmed);
      setStatus({ loading: false, success: "Mensagem enviada com sucesso!", error: null });
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setErrors({});
    } catch (err) {
      const serverMessage = err?.response?.data?.message || "Erro ao enviar. Tente novamente.";
      setStatus({ loading: false, success: null, error: serverMessage });
    }
  };

  return (
    <section className="contato">
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Nome
          <input
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            aria-invalid={errors.nome ? "true" : "false"}
            aria-describedby={errors.nome ? "err-nome" : undefined}
          />
          {errors.nome && <small id="err-nome" className="erro">{errors.nome}</small>}
        </label>

        <label>
          E-mail
          <input
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "err-email" : undefined}
            type="email"
          />
          {errors.email && <small id="err-email" className="erro">{errors.email}</small>}
        </label>

        <label>
          Telefone
          <input
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            aria-invalid={errors.telefone ? "true" : "false"}
            aria-describedby={errors.telefone ? "err-tel" : undefined}
          />
          {errors.telefone && <small id="err-tel" className="erro">{errors.telefone}</small>}
        </label>

        <label>
          Mensagem
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={form.mensagem}
            onChange={handleChange}
            aria-invalid={errors.mensagem ? "true" : "false"}
            aria-describedby={errors.mensagem ? "err-msg" : undefined}
            rows={5}
          />
          {errors.mensagem && <small id="err-msg" className="erro">{errors.mensagem}</small>}
        </label>

        <button type="submit" disabled={status.loading} aria-busy={status.loading}>
          {status.loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status.error && <p className="erro" role="alert">{status.error}</p>}
      {status.success && <p className="sucesso" role="status">{status.success}</p>}
    </section>
  );
}
