const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api/todos";

export const fetchTodos = () => fetch(BASE).then(r => r.json());
export const createTodo = (title) =>
  fetch(BASE, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ title }) }).then(r => r.json());
export const deleteTodo = (id) => fetch(`${BASE}/${id}`, { method: "DELETE"}).then(r=>r.json());
export const updateTodo = (id, body) => fetch(`${BASE}/${id}`, { method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body) }).then(r=>r.json());
