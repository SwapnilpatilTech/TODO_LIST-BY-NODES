🌟 Todo List Backend (Node.js + Express)

A simple and beginner-friendly Todo List REST API built using Node.js and Express.
This project is perfect for learning backend basics, CRUD operations, API testing with Postman, and building full-stack applications.

📁 Project Folder Structure
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

🚀 Features

✔ Create Todo
✔ Get All Todos
✔ Update Todo (title / completed)
✔ Delete Todo
✔ Express-based clean API
✔ In-memory data (no database — best for beginners)
✔ Fully tested with Postman
<img src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/da77f6db26d5d2c9bb773d185ed2ce6b771f7e55/Screenshot%202025-11-17%20161309.png" width="100%" />


<img src="https://github.com/SwapnilpatilTech/TODO_LIST-BY-NODES/blob/da77f6db26d5d2c9bb773d185ed2ce6b771f7e55/todo%20-%20Made%20with%20Clipchamp.gif" width="100%" />


🔧 Technologies Used

Node.js

Express.js

CORS

JSON-based API



2️⃣ Go inside the project folder
cd todo-backend

3️⃣ Install dependencies
npm install

4️⃣ Start the server
node server.js


You should see:

Server running on port 5000

🌐 API Endpoints (Postman Testing Guide)
📌 1. Get All Todos

GET

http://localhost:5000/api/todos


Response Example:

[]

📌 2. Create a Todo

POST

http://localhost:5000/api/todos


Body → JSON

{
  "title": "Learn Express"
}


Response:

{
  "id": 1,
  "title": "Learn Express",
  "completed": false
}

📌 3. Update a Todo

PUT

http://localhost:5000/api/todos/1


Example Body:

{
  "completed": true
}

📌 4. Delete a Todo

DELETE

http://localhost:5000/api/todos/1


Response:

{
  "message": "Todo deleted successfully!"
}

🎯 How It Works

This backend uses an in-memory JavaScript array to store todos:

let todos = [];
let id = 1;


✔ No database required
✔ Perfect for beginners
✔ Easy to understand CRUD flow
✔ Great for video/project submissions

🎥 Video Presentation Tips

To make your project submission perfect:

Start server (node server.js)

Open Postman

Show:

Creating a todo

Viewing all todos

Updating a todo

Deleting a todo

Explain the folder structure

Explain each endpoint briefly

This will easily impress your teacher.

⭐ Future Enhancements (Optional)

(Only if you want to upgrade later)

Add MongoDB database

Connect with a frontend UI

Add user authentication

Deploy on Render / Railway
