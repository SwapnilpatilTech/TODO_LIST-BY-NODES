
-------------------------------------------------
<h1>🌟 Todo List Backend (Node.js + Express)</h1>

<p>
  A beginner-friendly <b>Todo List REST API</b> built using Node.js and Express.<br>
  Perfect for learning CRUD operations, backend structure, and API testing with Postman.
</p>

<hr>

<h2>📁 Project Structure</h2>

<pre>
todo-backend/
│
├── src/
│   ├── controllers/
│   │   └── todoController.js
│   ├── routes/
│   │   └── todoRoutes.js
│   └── app.js
│
├── server.js
├── package.json
└── README.md
</pre>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li>Create Todo</li>
  <li>Get All Todos</li>
  <li>Update Todo (title / completed)</li>
  <li>Delete Todo</li>
  <li>Express-based clean API</li>
  <li>In-memory storage (no database)</li>
  <li>Fully testable with Postman</li>
</ul>

<hr>

<h2>🖼️ Screenshots</h2>

<p>
  <img src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/da77f6db26d5d2c9bb773d185ed2ce6b771f7e55/Screenshot%202025-11-17%20161309.png" width="100%">
</p>

<p>
  <img src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/da77f6db26d5d2c9bb773d185ed2ce6b771f7e55/todo%20-%20Made%20with%20Clipchamp.gif" width="100%">
</p>

<hr>

<h2>🔧 Technologies Used</h2>

<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>CORS</li>
  <li>JSON-based REST API</li>
</ul>

<hr>

<h2>📦 Installation & Setup</h2>

<h3>1️⃣ Clone the repository</h3>
<pre>git clone https://github.com/your-username/todo-backend.git</pre>

<h3>2️⃣ Enter the project folder</h3>
<pre>cd todo-backend</pre>

<h3>3️⃣ Install dependencies</h3>
<pre>npm install</pre>

<h3>4️⃣ Start the server</h3>
<pre>node server.js</pre>

<p><b>Output:</b></p>
<pre>Server running on port 5000</pre>

<hr>

<h1>🌐 API Endpoints</h1>

<h2>📌 1. Get All Todos</h2>
<p><b>GET</b></p>
<pre>http://localhost:5000/api/todos</pre>

<p><b>Response:</b></p>
<pre>
[]
</pre>

<hr>

<h2>📌 2. Create a Todo</h2>
<p><b>POST</b></p>
<pre>http://localhost:5000/api/todos</pre>

<p><b>Body (JSON):</b></p>
<pre>
{
  "title": "Learn Express"
}
</pre>

<p><b>Response:</b></p>
<pre>
{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}
</pre>

<hr>

<h2>📌 3. Update a Todo</h2>
<p><b>PUT</b></p>
<pre>http://localhost:5000/api/todos/1</pre>

<p><b>Body Example:</b></p>
<pre>
{
  "completed": true
}
</pre>

<hr>

<h2>📌 4. Delete a Todo</h2>
<p><b>DELETE</b></p>
<pre>http://localhost:5000/api/todos/1</pre>

<p><b>Response:</b></p>
<pre>
{
  "message": "Todo deleted successfully!"
}
</pre>

<hr>

<h1>🎯 How It Works</h1>

<p>This backend uses a simple in-memory JavaScript array:</p>

<pre>
let todos = [];
let id = 1;
</pre>

<ul>
  <li>No database required</li>
  <li>Easy CRUD flow</li>
  <li>Best for beginners</li>
  <li>Perfect for practical/video submissions</li>
</ul>

<hr>

<h1>🎥 Video Presentation Tips</h1>

<ul>
  <li>Start server (<code>node server.js</code>)</li>
  <li>Open Postman</li>
  <li>Show Create, Read, Update, Delete</li>
  <li>Explain folder structure</li>
  <li>Explain endpoints briefly</li>
</ul>

<hr>

<h1>⭐ Future Enhancements</h1>

<ul>
  <li>Add MongoDB database</li>
  <li>Add frontend UI</li>
  <li>Add JWT authentication</li>
  <li>Deploy on Render or Railway</li>
</ul>


