import React from "react";

export default function TodoList({ todos, onDelete, onToggle, onEdit, onSaveEdit, editId, editTitle, setEditTitle }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && <li className="empty">No tasks — add one!</li>}
      {todos.map(t => (
        <li key={t.id} className={t.completed ? "done" : ""}>
          <div>
            <input type="checkbox" checked={t.completed} onChange={() => onToggle(t)} />
            {editId === t.id ? (
              <input
                type="text"
                className="edit-input"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={() => onSaveEdit(t.id)}
                onKeyDown={(e) => e.key === "Enter" && onSaveEdit(t.id)}
                autoFocus
              />
            ) : (
              <span onClick={() => onEdit(t)}>{t.title}</span>
            )}
          </div>
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
