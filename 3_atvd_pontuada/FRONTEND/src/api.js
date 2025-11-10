import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001", 
});

// Funções auxiliares simples para uso na UI
export async function getUsers() {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getUser(id) {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function createUser(payload) {
  try {
    const res = await api.post("/users", payload);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function updateUser(id, payload) {
  try {
    const res = await api.put(`/users/${id}`, payload);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteUser(id) {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
