import React, { useEffect, useState } from "react";
import { fetchTodos, createTodo, deleteTodo, updateTodo } from "./api";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const load = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async (title) => {
    const t = await createTodo(title);
    setTodos(prev => [...prev, t]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(prev => prev.filter(x => x.id !== id));
  };

  const handleToggle = async (todo) => {
    const updated = await updateTodo(todo.id, { completed: !todo.completed });
    setTodos(prev => prev.map(t => t.id === updated.id ? updated : t));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleSaveEdit = async (id) => {
    if (!editTitle.trim()) return;
    const updated = await updateTodo(id, { title: editTitle });
    setTodos(prev => prev.map(t => t.id === updated.id ? updated : t));
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList 
        todos={todos} 
        onDelete={handleDelete} 
        onToggle={handleToggle} 
        onEdit={handleEdit}
        onSaveEdit={handleSaveEdit}
        editId={editId}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />
    </div>
  );
}
