import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a Todo App', completed: false }
];

let nextId = 3;

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Create a todo
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  const todo = { id: nextId++, title, completed: false };
  todos.push(todo);
  res.json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ success: true });
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    Object.assign(todo, req.body);
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
