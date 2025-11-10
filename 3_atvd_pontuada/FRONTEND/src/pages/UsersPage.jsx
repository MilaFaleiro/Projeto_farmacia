import React, { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Erro ao buscar usuários");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    try {
      const newUser = await createUser({ name, email });
      setUsers(prev => [...prev, newUser]);
      setName("");
      setEmail("");
    } catch {
      setError("Erro ao criar usuário");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch {
      setError("Erro ao deletar usuário");
    }
  }

  return (
    <div>
      <h2>Usuários</h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email}){" "}
            <button onClick={() => handleDelete(u.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <h3>Adicionar usuário</h3>
      <form onSubmit={handleCreate}>
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
